(ns cue-list.core
  (:require react-dom))

;; define a cue

;; define a cue list
;; - cue number
;; - cue action
;; - description
;; - page
;; - scene
;; - document location
;; - previous cue

;; define operations on a cue list
;; - add
;; - insert
;; - remove / delete
;; - move

(.render js/ReactDOM
    (.createElement js/React  "h2" nil  "Hello, React!")
    (.getElementById js/document  "app"))


;; (println "Hello world!")
