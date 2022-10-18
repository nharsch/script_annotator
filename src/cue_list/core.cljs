(ns cue-list.core
  (:require
   [goog.object :as gobj]
   [goog.string :as gstring]
   ["react" :as react]
   [reagent.core :as reagent]
   [reagent.dom :as rdom]
   )

)

(def ^js pdfjs (gobj/get js/window "pdfjs-dist/build/pdf"))


;; (defn cue-list-component [cue-list]
;;   [:ul
;;      (for [cue cue-list]
;;        ^{:key cue} [:li "Cue " (:q cue)])])

(defonce state (reagent/atom {:page 1
                              :zoom 1
                              :rotate 0
                              :cues []}))
(comment
  (swap! state update :cues (fn [] '[]))
  )

;; (js/console.log "test")
;;
(defn rotation-transform-matrix [deg]
  (let [mat (case deg
               0 [1 0 0 1 0 0]
               90 [0 1 1 0 3.240000000000009 0]
               180 [-1 0 0 1 842.04 3.240000000000009]
               270 [0 -1 -1 0 592.2 842.04])]
    (js/DOMMatrix. mat))
  )

(defn on-canvas-click [event]
  ;; translat page coordinate to doc coordinate
  (let [rect (.getBoundingClientRect event.target)
        vp-x (/ (- (.-pageX event) (.-left rect)) (:zoom @state))
        vp-y (/ (-  (- (.-pageY event) (.-top rect)) (.-scrollY js/window)) (:zoom @state))
        ;; TODO: find PDF.js transform
        current-transform (rotation-transform-matrix (:rotate @state))
        ;; TODO: get transformation that returns us to original
        ;; reset-transform
        point (.transformPoint current-transform (js/DOMPoint. vp-x vp-y))]
    (js/console.log "onclick transorm " current-transform)
    (swap! state assoc :cues (conj (:cues @state)
                                   {:page (:page @state) :x (.-x point) :y (.-y point)}))))

(comment
  (.getTransform (.getContext  (js/document.querySelector "#viewer") "2d"))
  )

(defn render-cues [context viewport]
  ;; (js/console.log (.keys js/Object viewport))
  (let [matrix (js/DOMMatrix. (.-transform viewport))]
    (js/console.log "viewport: " viewport)
    (set! (. context -fillStyle) "rgba(204, 255, 0, 0.5)")

    (doseq [cue (:cues @state)]
      (if (= (:page cue) (:page @state))
        ;; translate doc coordinate to canvas coord
        (let [point (if (> (:rotate @state) 0)
                      (.transformPoint matrix (js/DOMPoint. (:x cue) (:y cue)))
                      (js/DOMPoint. (:x cue) (:y cue)))
              rect (->> [(.-x point) (.-y point) 100 30]
                        (map #(* % (:zoom @state)))
                        vec)]
          (js/console.log "transformed point: " (.-x point) " " (.-y point))
          (.fillRect context (nth rect 0) (nth rect 1) (nth rect 2) (nth rect 3))))
      )))


(defn pdf-canvas [{:keys [url state]}]
  ;; ref
  (let [canvas-ref (react/useRef nil)]

    ;; initialize and attach pdfjs when the canvas is mounted
    (react/useEffect
     (fn []
       (do
         (-> (.getDocument pdfjs url)
             (.-promise)
             (.then (fn [^js pdf]
                      (js/console.log "pdf" pdf)
                      (.getPage pdf (:page state))))
             (.then (fn [^js page]
                      (js/console.log "page" (:page state))
                      (let [viewport (.getViewport page #js {:scale (:zoom state)
                                                             :rotation (:rotate state)
                                                             })
                            canvas (.-current canvas-ref)
                            context (.getContext canvas "2d")

                            render-context
                            #js {:canvasContext context
                                 :viewport viewport}]
                        (js/console.log (gstring/format "viewport transform at %s %s" (:rotate state) (.-transform viewport)))
                        (set! canvas -height (.-height viewport))
                        (set! canvas -width (.-width viewport))
                        (.addEventListener canvas "click" on-canvas-click)
                        (-> (.render page render-context)
                            (.-promise)
                            (.then (fn [] (render-cues context viewport))) ;; Render cues overlays
                            (.then (fn [] (js/console.log "PDF Page rendered."))))
                        ))))
         )
       (fn []
         ;; not sure if there is supposed to be any cleanup for the pdfjs objects
         ;; might need to store those somewhere and dispose of them properly here
         (js/console.log "cleanup")))
     ;; ensure this only re-runs when url changes
     #js [url state])

    [:canvas {:ref canvas-ref :id "viewer"} ]))

(defn dec-page []
  (swap! state #(update % :page dec)))
(defn inc-page []
  (swap! state #(update % :page inc)))

(defn dec-zoom []
  (swap! state #(update % :zoom (fn [i] (- i 0.25)))))
(defn inc-zoom []
  (swap! state #(update % :zoom (fn [i] (+ i 0.25)))))



(defn rotate-clockwise []
  (swap! state #(update % :rotate (fn [i] (mod (+ i 90) 360)))))
(defn rotate-counterclockwise []
  (swap! state #(update % :rotate (fn [i] (mod (- i 90) 360)))))

(defn app []
  [:div [:h1 "Script Cue Annotator"]
   [:div {:id "nav" :style {:display "flex" :column-gap "20px"}}
    [:div {:style {:display "flex" :column-gap "5px"}}
     [:input {:type "button" :value (gstring/format "< %s" (dec (:page @state)))  :on-click dec-page}]
     [:input {:type "button" :value (gstring/format "> %s" (inc (:page @state))) :on-click inc-page}]
     [:div "page: " (:page @state)]]
    [:div {:style {:display "flex" :column-gap "5px"}}
     [:input {:type "button" :value "-" :on-click dec-zoom}]
     [:input {:type "button" :value "+" :on-click inc-zoom}]
     (gstring/format "zoom: %s" (:zoom @state))]
    [:div {:style {:display "flex" :column-gap "5px"}}
     "rotate: "
     [:input {:type "button" :value "↺" :on-click rotate-counterclockwise}]
     [:input {:type "button" :value "↻" :on-click rotate-clockwise}]
     [:div "rotation: " (:rotate @state)]]]
   [:div {:style {:display "flex"}}
    [:f> pdf-canvas {:url "/test.pdf" :state @state}]
    [:div "cues"
     [:ul (for [cue (:cues @state)]
            ^{:key cue} [:li (gstring/format "page: %s pos: %s, %s" (:page cue) (:x cue) (:y cue))])]]]
   ])

(defn ^:dev/before-load stop []
  (js/console.log "stop"))

(defn ^:dev/after-load start []
  (rdom/render [app] (js/document.querySelector "#app"))
  )


(defn init []
  (js/console.log "starting")
  ;; need to tell the lib where to load the worker from, also using same CDN
  (set! (.. pdfjs -GlobalWorkerOptions -workerSrc) "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js")
  (start)
)
