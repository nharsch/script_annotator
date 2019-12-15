(ns cue-list.core
  (:require [reagent.core :as r])
  ;; (:use [cue-list.list])
)

;; (def cue-list (r/atom []))
;;
(defn cue-list-component [cue-list]
  [:ul
     (for [cue cue-list]
       ^{:key cue} [:li "Cue " (:q cue)])])

(defn app []
  [:div {:class "container"}
   "hello world!"
   (cue-list-component [{:q "test"}])
   ]
)

(defn say-hi []
  (js/console.log "hi there beautiful"))

(r/render [app] (js/document.querySelector "#cue-list"))

