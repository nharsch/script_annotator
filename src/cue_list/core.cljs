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

(defonce state (reagent/atom {:page 16
                              :zoom 1
                              :rotate 0
                              :cues []}))
(comment
  (swap! state assoc :cues '[])
  (swap! state assoc :page 16)
  @state
  )

(defn apply-transform [p m]
  (let [xt (+
            (* (nth p 0) (nth m 0))
            (* (nth p 1) (nth m 2))
            (nth m 4))
        yt (+
            (* (nth p 0) (nth m 1))
            (* (nth p 0) (nth m 3))
            (nth m 5))]
    [xt yt]))
(comment
  (apply-transform [0 0] (.-transform (.-viewport js/Window)))
  )

(defn apply-inverse-transform [p m]
  (let [d (- (* (nth m 0) (nth m 3))
             (* (nth m 1) (nth m 2)))
        xt (/ (- (- (* (nth p 0)
                       (nth m 3))
                    (+ (* (nth p 1)
                          (nth m 2))
                       (* (nth m 2)
                          (nth m 5))))
                 (* (nth m 4) (nth m 3)))
              d)
        yt (/ (- (+ (* (- 0 (nth p 0)) (nth m 1))
                    (* (nth p 1) (nth m 0))
                    (* (nth m 4) (nth m 1)))
                 (* (nth m 5) (nth m 0)))
              d)]
    (js/console.log d xt)
    [xt yt]))
(comment
  (apply-inverse-transform [0 0] (.-transform (.-viewport js/Window)))
  )
(comment
  (swap! state assoc :cues '[])
  (swap! state assoc :page 16)
  @state
  )


;; static applyTransform(p, m) {
;;   const xt = p[0] * m[0] + p[1] * m[2] + m[4];
;;   const yt = p[0] * m[1] + p[1] * m[3] + m[5];
;;   return [xt, yt];
;; }

;; static applyInverseTransform(p, m) {
;;   const d = m[0] * m[3] - m[1] * m[2];
;;   const xt = ((p[0] * m[3]) -
;;              ((p[1] * m[2]) + (m[2] * m[5])) -
;;              (m[4] * m[3]))
;;              / d;
;;   ;;   const yt = ( (-p[0] * m[1] ) + ( p[1] * m[0] ) + ( m[4] * m[1] ) - ( m[5] * m[0]) ) / d;
;;   return [xt, yt];
;; }

;; dom matrix
;; a - scales drawing hor
;; b - skews drawing hor
;; c - skews drawing ver
;; d - scales drawing ver
;; e - moves drawing hor
;; f - moves drawing ver

(defn dommatrix-vec [mat]
  [(.-a mat)
   (.-b mat)
   (.-c mat)
   (.-d mat)
   (.-e mat)
   (.-f mat)])

(defn dom-point-vec [point]
  [(.-x point) (.-y point)])

(defn viewport-translation [viewport]
  (let [scale (:zoom @state)
        scale-mat (js/DOMMatrix. [scale 0 0 scale 0 0])
        rot-mat (.rotate scale-mat (* (/ Math/PI 180) (:rotate @state)))
        mat (cond (= (:rotate @state) 0) rot-mat
                  (= (:rotate @state) 90) (.translate rot-mat 0 (- 0 (.-width viewport)))
                  (= (:rotate @state) 180) (.translate rot-mat (- 0 (.-width viewport)) (- 0 (.-height viewport)))
                  (= (:rotate @state) 270) (.translate rot-mat (- 0 (.-height viewport)) 0))]
    (dommatrix-vec mat)))

(defn viewport-point-to-doc-point [point viewport]
  (let [trans-mat (.-transform viewport)]
    (apply-inverse-transform point trans-mat)))

(defn doc-point-to-view-point [doc-point viewport]
  (dom-point-vec (.transformPoint (js/DOMMatrix. (.-transform viewport))
                                  (js/DOMPoint. (nth doc-point 0) (nth doc-point 1)))))

(comment
  (swap! state assoc :cues '[])
  @state
  (dom-point-vec (.transformPoint (js/DOMMatrix. (.-transform (.-viewport js/Window)))
                                  (js/DOMPoint. 0 0)))
  (dom-point-vec (.transformPoint (js/DOMMatrix. (.-transform (.-viewport js/Window)))
                                  (js/DOMPoint. 0 500)))
  (doc-point-to-view-point [0 0] (.-viewport js/Window))
  (doc-point-to-view-point [0 500] (.-viewport js/Window))
  )

(comment
  (swap! state assoc :cues '[])
  (.-rotation (.-viewport js/Window))
  (.-transform (.-viewport js/Window))
  (.inverse (js/DOMMatrix. (.-transform (.-viewport js/Window))))
  (.-height (.-viewport js/Window))
  (.-width (.-viewport js/Window))
  (first (viewport-point-to-doc-point [0 0] (.-viewport js/Window)))
  (last (viewport-point-to-doc-point [0 0] (.-viewport js/Window)))
  )


(defn on-canvas-click [event]
  ;; translat page coordinate to doc coordinate
  (let [rect (.getBoundingClientRect event.target)
        vp-x (- (.-pageX event) (.-left rect))
        vp-y (- (- (.-pageY event) (.-top rect)) (.-scrollY js/window))
        ;; reset-transform
        doc-point (viewport-point-to-doc-point [vp-x vp-y] (.-viewport js/Window))]
    (swap! state assoc :cues (conj (:cues @state)
                                   {:page (:page @state) :x (first doc-point) :y (last doc-point)}))))

(comment
  (.getTransform (.getContext  (js/document.querySelector "#viewer") "2d"))
  (.getTransform (.getContext  (js/document.querySelector "#viewer") "2d"))
  (.getTransform (.translate (.getContext  (js/document.querySelector "#viewer") "2d") 100 100))
  )
(comment
  (swap! state assoc :cues '[])
  @state
  (doc-point-to-view-point [0 0] (.-viewport js/Window))
  (doc-point-to-view-point [0 500] (.-viewport js/Window))
  )


(defn render-cues [context viewport]
  ;; (js/console.log (.keys js/Object viewport))
  (set! (. context -fillStyle) "rgba(204, 255, 0, 0.5)")
    ;; rotate render context
    (let [point (doc-point-to-view-point [0 0] viewport)]
      (.fillRect context (nth point 0) (nth point 1) 30 20))
    (doseq [cue (:cues @state)]
      (if (= (:page cue) (:page @state))
        ;; translate doc coordinate to canvas coord
        (let [point (doc-point-to-view-point [(:x cue) (:y cue)] viewport)
              rect [(first point) (last point) 30 30]]
          (.fillRect context (nth rect 0) (nth rect 1) (nth rect 2) (nth rect 3))))))


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
                        (set! canvas -height (.-height viewport))
                        (set! canvas -width (.-width viewport))
                        (set! (. js/Window -viewport) viewport)
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
         ;; (js/console.log "cleanup")
         ))
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
