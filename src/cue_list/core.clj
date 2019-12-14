(ns cue-list.core
 (:require [clojure.spec.alpha :as s]))

;; define a cue

;; - document location
 ;; - page
 ;; - scene

(s/def ::q string?)
(s/valid? ::q "a1")

(s/def ::action string?)
(s/def ::description string?)
(s/def ::location map?)

(s/def ::cue
  (s/keys :req-un [::q]
          :opt-un [::action ::description ::location]))
(s/valid? ::cue {:q "a1"})

;; [x] define a cue list
;; - list of cues where cue names are unique or empty
;; - use clojure spec to define name structure

(s/def ::cue-list (s/and
                    (s/coll-of ::cue :distinct true :into [])
                    #(if (empty? %)
                       true
                       (apply distinct? (mapv :q %)))))

(s/valid? ::cue-list [{:q "a1"}])



(defn cue-names [cue-list]
  (into #{} (map :q cue-list)))
(=
 #{"a1" "a2"}
 (cue-names [{:q "a1"} {:q "a2"}]))

;; TOOD: error when trying to add?
(defn safe-to-add? [cue cue-list]
  "check if no other cue is named"
  (not ((cue-names cue-list) (:q cue))))
(=
  (safe-to-add?
    {:q "A1"}
    [{:q "A1"}])
  false)

;; - insert cue
(defn add-cue-to-list
  ([cue cue-list]
    {:pre [(safe-to-add? cue cue-list)]
     :post [(s/valid? ::cue-list %)]}
    (conj cue-list cue))
  ([cue cue-list position]
    {
     :pre [(safe-to-add? cue cue-list)]
     :post [(s/valid? ::cue-list %)]}
    (concat
      (subvec cue-list 0 position)
      [cue]
      (subvec cue-list position))))

(= (add-cue-to-list
     {:q "a3"}
     [{:q "a1"}])
   [{:q "a1"} {:q "a3"}])

(= (add-cue-to-list
     {:q "a1" :desc "new"}
     [{:q "a1" :desc "old"}])
   [{:q "a1" :desc "old"}])

(= (add-cue-to-list
     {:q "a2"}
     [{:q "a1"} {:q "a3"}]
     1)
   [{:q "a1"} {:q "a2"} {:q "a3"}])


(defn find-cue-position-by-name [cue-name cue-list]
  (first (keep-indexed #(if (= cue-name (:q %2)) %1) cue-list)))

(find-cue-position-by-name "A1" [{:q "A1"}])

(defn insert-cue-after-cue [cue target-name cue-list]
  (assert ((cue-names cue-list) target-name))
  (let [pos (inc (find-cue-position-by-name target-name cue-list))]
    (add-cue-to-list cue cue-list pos)))

(=
 [{:q "a1"} {:q "a2"} {:q "a3"} {:q "b1"}]
 (insert-cue-after-cue
   {:q "a3"}
   "a2"
   [{:q "a1"} {:q "a2"} {:q "b1"}]))


;; - remove / delete cue
(defn remove-cue [cue-name cue-list]
  (into [] (remove #(= cue-name (:q %1))
    cue-list)))

(= (remove-cue "a2" [{:q "a1"} {:q "a2"}])
   [{:q "a1"}])
(= (remove-cue "a3" [{:q "a1"} {:q "a2"}])
   [{:q "a1"} {:q "a2"}])


;; - move cues
(defn move-cue [cue-name target-name cue-list]
  (let [cue (some #(when (= cue-name (:q %)) %) cue-list)]
    (insert-cue-after-cue
      cue
      target-name
      (remove-cue cue-name cue-list))))

(= [{:q "a1"} {:q "a3"} {:q "a2"}]
 (move-cue "a3" "a1" [{:q "a1"} {:q "a2"} {:q "a3"}]))

;; TODO: naming/renaming strategies
