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


(defonce state (reagent/atom {:page 16
                              :zoom 1
                              :rotate 0
                              :cues []}))
(comment
  (swap! state assoc :cues '[])
  (swap! state assoc :page 16)
  @state
  )


(defn dommatrix-vec [mat]
  [(.-a mat)  ;; a - scales drawing hor
   (.-b mat)  ;; b - skews drawing hor
   (.-c mat)  ;; c - skews drawing ver
   (.-d mat)  ;; d - scales drawing ver
   (.-e mat)  ;; e - moves drawing hor
   (.-f mat)  ;; f - moves drawing ver
   ])

(defn deg-radian [deg]
  (* deg (/ Math/PI 180)))

(defn dom-point-vec [point]
  [(.-x point) (.-y point)])

(defn viewport-point-to-doc-point [v-point viewport]
  (let [trans-mat (.-transform viewport)]
    (dom-point-vec (.transformPoint (.inverse (js/DOMMatrix. (.-transform viewport)))
                                    (js/DOMPoint. (nth v-point 0) (nth v-point 1))))))

(defn doc-point-to-view-point [doc-point viewport]
  (dom-point-vec (.transformPoint (js/DOMMatrix. (.-transform viewport))
                                  (js/DOMPoint. (nth doc-point 0) (nth doc-point 1)))))

(defn cue-flag-points [origin]
  [
   origin
   [(- (first origin) 10)  (- (second origin) 10)]
   [(- (first origin) 50) (- (second origin) 10)]
   [(- (first origin) 50) (+ (second origin) 10)]
   [(- (first origin) 10)  (+ (second origin) 10)]
   ]
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
        doc-point (viewport-point-to-doc-point [vp-x vp-y] (.-viewport js/Window))
        cue-flag (cue-flag-points doc-point)]
    (swap! state assoc :cues (conj (:cues @state) {:page (:page @state) :flag cue-flag }))))


(comment
  (swap! state assoc :cues '[])
  @state
  )


(defn render-cues [context viewport]
  ;; (js/console.log (.keys js/Object viewport))
  (set! (. context -fillStyle) "rgba(204, 255, 0, 0.5)")
    ;; rotate render context
  (doseq [cue (filter #(= (:page %) (:page @state))
                      (:cues @state))]
      ;; translate doc coordinate to canvas coord
      ;;
      (let [flag-points (map #(doc-point-to-view-point % viewport) (:flag cue))]
        (js/console.log "flag points: " (into-array flag-points))

        ;; save restore point
        (.save context)
        ;; rotate around origin to draw
        (.translate context
                    (first (nth flag-points 0))
                    (second (nth flag-points 0)))  ;; move to point
        (.rotate context (deg-radian (:rotate @state)))  ;; rotate around point
        (.translate context
                    (- 0  (first (nth flag-points 0)))
                    (- 0 (second (nth flag-points 0))))  ;; translate back to 0 0
        (.beginPath context)
        ;; draw cue flag
        (.moveTo context
                 (first  (nth flag-points 0))
                 (second (nth flag-points 0)))
        (.lineTo context
                 (first  (nth flag-points 1))
                 (second (nth flag-points 1)))
        (.lineTo context
                 (first  (nth flag-points 2))
                 (second (nth flag-points 2)))
        (.lineTo context
                 (first  (nth flag-points 3))
                 (second (nth flag-points 3)))
        (.lineTo context
                 (first  (nth flag-points 4))
                 (second (nth flag-points 4)))
        (.fill context)
        ;; reset
        (.restore context)
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
                      (.getPage pdf (:page state))))
             (.then (fn [^js page]
                      (let [viewport (.getViewport page #js {:scale (:zoom state)
                                                             :rotation (:rotate state)})
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

;; UI ACTIONS
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


;; APP
(defn app []
  [:div [:h1 "Script Cue Annotator"]
   [:div {:id "nav" :style {:display "flex" :align-items "flex-start" :column-gap "20px"}}
    [:div {:style {:display "flex" :align-items "flex-start" :column-gap "5px"}}
     [:input {:type "button" :value (gstring/format "< %s" (dec (:page @state)))  :on-click dec-page}]
     [:input {:type "button" :value (gstring/format "> %s" (inc (:page @state))) :on-click inc-page}]
     [:div "page: " (:page @state)]]
    [:div {:style {:display "flex" :align-items "flex-start" :column-gap "5px"}}
     [:input {:type "button" :value "-" :on-click dec-zoom}]
     [:input {:type "button" :value "+" :on-click inc-zoom}]
     (gstring/format "zoom: %s" (:zoom @state))]
    [:div {:style {:display "flex" :align-items "flex-start" :column-gap "5px"}}
     "rotate: "
     [:input {:type "button" :value "↺" :on-click rotate-counterclockwise}]
     [:input {:type "button" :value "↻" :on-click rotate-clockwise}]
     [:div "rotation: " (:rotate @state)]]]
   [:div {:style {:display "flex" :align-items "flex-start"}}
    [:f> pdf-canvas {:url "/test.pdf" :state @state}]
    [:div "cues"
     [:ul (for [cue (:cues @state)]
            ^{:key cue} [:li (gstring/format "page: %s pos: %s, %s"
                                             (:page cue)
                                             (first  (first (:flag cue)))
                                             (second (first (:flag cue))))])]]]
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
  (start))
