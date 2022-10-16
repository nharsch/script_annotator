(ns cue-list.core
  (:require
   [goog.object :as gobj]
   ["react" :as react]
   [reagent.core :as reagent]
   [reagent.dom :as rdom]
   )

)

(def ^js pdfjs (gobj/get js/window "pdfjs-dist/build/pdf"))

(defn cue-list-component [cue-list]
  [:ul
     (for [cue cue-list]
       ^{:key cue} [:li "Cue " (:q cue)])])


(def state (reagent/atom {:page 1}))

(defn pdf-canvas [{:keys [url state]}]
  ;; ref
  (let [canvas-ref (react/useRef nil)]

    ;; initialize and attach pdfjs when the canvas is mounted
    (react/useEffect
      (fn []
        (-> (.getDocument pdfjs url)
            (.-promise)
            (.then (fn [^js pdf]
                     (js/console.log "pdf" pdf)
                     (.getPage pdf (:page state))))
            (.then (fn [^js page]
                     (js/console.log "page" (:page state))
                     (let [viewport (.getViewport page #js {:scale 1.5})
                           canvas (.-current canvas-ref)
                           context (.getContext canvas "2d")

                           render-context
                           #js {:canvasContext context
                                :viewport viewport}]

                       (set! canvas -height (.-height viewport))
                       (set! canvas -width (.-width viewport))

                       (-> (.render page render-context)
                           (.-promise)
                           (.then (fn []
                                    (js/console.log "Page rendered."))))

                       ))))

        (fn []
          ;; not sure if there is supposed to be any cleanup for the pdfjs objects
          ;; might need to store those somewhere and dispose of them properly here
          (js/console.log "cleanup")))

      ;; ensure this only re-runs when url changes
      #js [url state])

    [:canvas {:ref canvas-ref}]))

(defn dec-page []
  (swap! state #(update % :page dec)))

(defn inc-page []
  (swap! state #(update % :page inc)))

(js/console.log  (:page @state))

(defn app []
  [:div [:h1 "testing"]
   [:input {:type "button" :value "<" :on-click dec-page}]
   [:input {:type "button" :value ">" :on-click inc-page}]
   [:div "current page: " (:page @state)]
   [:f> pdf-canvas {:url "/test.pdf" :state @state}]
   ])



(defn ^:dev/after-load start []
  (rdom/render [app] (js/document.querySelector "#app")))


(defn init []
  (js/console.log "starting")
  ;; need to tell the lib where to load the worker from, also using same CDN
  (set! (.. pdfjs -GlobalWorkerOptions -workerSrc) "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.8.335/pdf.worker.min.js")
  (start)
)
