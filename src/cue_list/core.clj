(ns cue-list.core)


(println "test")


;; define a cue
;; - cue number
;; - cue action
;; - description
;; - page
;; - scene
;; - document location
;; - previous cue

(defn new-cue [q action description location]
  "returns a new cue"
  {
   :q q
   :action action
   :description description
   :locaion location })

(new-cue "A1" "top of show" "top of show music" "page 1")

;; define a cue list
;; - list of cues
;; - where cue names are unique or empty

;; define operations on a cue list
;; - add cue

(defn add-cue-to-list [cue cue-list]
  "returns cue-list with new cue at end, name aware"
  (if (not (some #(= % (:q cue)) (map :q cue-list)))
    (conj cue-list cue))
  cue-list)

;; can't add the same named cue to cue list
(=
  (add-cue-to-list
    {:q "A1"}
    [{:q "A1"}])
  [{:q "A1"}])

;; - insert cue
;; - remove / delete cue
;; - move cues

;; naming strategies
;; - renaming strategies

;; (println "Hello world!")
