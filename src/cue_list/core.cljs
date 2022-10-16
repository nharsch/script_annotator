(ns cue-list.core
  (:require
   [goog.object :as gobj]
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

(def state (reagent/atom {:page 1
                          :zoom 1.5
                          :rotate 0}))

(defn render-cues [context]
  (set! (. context -fillStyle) "rgba(0, 50, 0, 0.5)")
  (.fillRect context 500, 90, 350, 100)
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


                         (-> (.render page render-context)
                             (.-promise)
                             (.then (fn [] (render-cues context)))
                             (.then (fn [] (js/console.log "PDF Page rendered."))))
                         ))))
)
        (fn []
          ;; not sure if there is supposed to be any cleanup for the pdfjs objects
          ;; might need to store those somewhere and dispose of them properly here
          (js/console.log "cleanup")))
      ;; ensure this only re-runs when url changes
      #js [url state])
    ;; TODO: render cue overlays




    [:canvas {:ref canvas-ref}]))

(defn dec-page []
  (swap! state #(update % :page dec)))
(defn inc-page []
  (swap! state #(update % :page inc)))

(defn dec-zoom []
  (swap! state #(update % :zoom (fn [i] (* i 0.75)))))
(defn inc-zoom []
  (swap! state #(update % :zoom (fn [i] (* i 1.25)))))

(defn rotate-clockwise []
  (swap! state #(update % :rotate (fn [i] (mod (+ i 90) 360)))))
(defn rotate-counterclockwise []
  (swap! state #(update % :rotate (fn [i] (mod (- i 90) 360)))))
;; (rotate-clockwise)
;; (rotate-counterclockwise)

(defn app []
  [:div [:h1 "Script Cue Annotator"]
   [:div "page: "
    [:input {:type "button" :value "<" :on-click dec-page}]
    [:input {:type "button" :value ">" :on-click inc-page}]]
   [:div "zoom: "
    [:input {:type "button" :value "-" :on-click dec-zoom}]
    [:input {:type "button" :value "+" :on-click inc-zoom}]]
   [:div "rotate: "
    [:input {:type "button" :value "↺" :on-click rotate-counterclockwise}]
    [:input {:type "button" :value "↻" :on-click rotate-clockwise}]]
   [:div "current page: " (:page @state)]
   [:f> pdf-canvas {:url "/test.pdf" :state @state}]
   ])


(defn ^:dev/after-load start []
  (rdom/render [app] (js/document.querySelector "#app")))


(defn init []
  (js/console.log "starting")
  ;; need to tell the lib where to load the worker from, also using same CDN
  (set! (.. pdfjs -GlobalWorkerOptions -workerSrc) "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js")
  (start)
)
