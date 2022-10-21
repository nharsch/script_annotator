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

;; TODO: spec out state, cues
;;
(defonce state (reagent/atom {:page 16
                              :zoom 1
                              :selected-cue 0
                              :rotate 0
                              :cues []}))

(comment
  (reset! state {:page 16
          :zoom 1
          :selected-cue 0
          :rotate 0
          :cues []})
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
   [(- (first origin) 10) (- (second origin) 10)]
   [(- (first origin) 50) (- (second origin) 10)]
   [(- (first origin) 50) (+ (second origin) 10)]
   [(- (first origin) 10) (+ (second origin) 10)]
   ]
  )

(comment
  (swap! state assoc :cues '[])
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
        doc-point (viewport-point-to-doc-point [vp-x vp-y] (.-viewport js/Window))
        last-cue (or (:cue-number (last (sort-by :cue-number (:cues @state)))) 0)]
    (swap! state assoc :cues (conj (:cues @state)
                                   {:cue-number (+ 1 last-cue)
                                    :page (:page @state)
                                    :point doc-point}))
    (swap! state assoc :selected-cue (+ 1 last-cue))
    ))

(comment
  (swap! state assoc :cues '[])
  @state
  )

(defn sorted-cues [cues]
  (->>
   cues
   (sort-by #(first (:point %)))
   (sort-by #(second (:point %)))
   reverse
   (sort-by :page)))


(defn render-cues [context viewport]
  ;; (js/console.log (.keys js/Object viewport))

    ;; rotate render context
  (doseq [cue (filter #(= (:page %) (:page @state)) (:cues @state))]
    (let [flag-points (cue-flag-points (doc-point-to-view-point (:point cue) viewport))]
      (if (= (:selected-cue @state) (:cue-number cue))
        (set! (. context -fillStyle) "rgba(204, 255, 110, 0.5)")
        (set! (. context -fillStyle) "rgba(244, 231, 34, 0.5)"))
      (.beginPath context)
      ;; draw cue
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
      (set! (. context -fillStyle) (if (= (:selected-cue @state) (:cue-number cue)) "rgba(0, 0, 0, 1)" "rgba(0, 0, 0, 0.2)"))
      (set! (. context -font) "25px sans-serif")
      (.fillText context (:cue-number cue)
                 (first  (nth flag-points 3))
                 (second (nth flag-points 3)))
      )))

(comment
  (swap! state assoc :cues '[])
  @state
  )
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
(defn on-cue-click [cue]
  ;; TODO: one swap
  (swap! state assoc :page (:page cue))
  (swap! state assoc :selected-cue (:cue-number cue)))
(defn remove-cue [cue]
  (swap! state assoc :cues (vec (filter #(not= (:cue-number cue) (:cue-number %)) (:cues @state))))
  (if (= (:cue-number cue) (:selected-cue cue))
    (swap! state assoc :selected-cue nil)
    )
  )

(comment
  (swap! state assoc :cues '[])
  @state
  (:selected-cue @state)
  )

(defn cue-button-li [cue]
  (fn []
    [:li {:style {:list-style-type "none"
                  :border-style (if (= (:selected-cue @state) (:cue-number cue))
                                 "inset"
                                 "none")
                  }}
     [:input {:type "button"
              :on-click (fn [e] (on-cue-click cue))
              :value (gstring/format "cue: %s page: %s pos: %s"
                                     (:cue-number cue)
                                     (:page cue)
                                     (:point cue))}]
     [:input {:type "button"
              :on-click (fn [e] (remove-cue cue))
              :value "x"}
      ]]))

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
     [:ul (for [cue (sorted-cues (:cues @state))]
           ^{:key (:cue-number cue)} [cue-button-li cue])]]]])

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
