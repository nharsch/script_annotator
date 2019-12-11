(ns cue-list.core)

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
   :q q action action description description locaion location })

(new-cue "A1" "top of show" "top of show music" "page 1")

;; define a cue list
;; - list of cues where cue names are unique or empty

;; define operations on a cue list

;; - add cue

;; TOOD: error when trying to add?

(defn safe-to-add? [cue cue-list]
  "check if no other cue is named"
  (not (some #(= % (:q cue)) (map :q cue-list))))

;; can't add the same named cue to cue list
(=
  (safe-to-add?
    {:q "A1"}
    [{:q "A1"}])
  false)

;; - insert cue
(defn add-cue-to-list
  ([cue cue-list]
    (if (safe-to-add? cue cue-list)
      (conj cue-list cue)))
  ([cue cue-list position]
    (if (safe-to-add? cue cue-list)
      (concat
        (subvec cue-list 0 position)
        [cue]
        (subvec cue-list position)))))

(= (add-cue-to-list
     {:q "a3"}
     [{:q "a1"}])
   [{:q "a1"} {:q "a3"}])

(= (add-cue-to-list
     {:q "a1" :desc "new"}
     [{:q "a1"} :desc "old"]
   [{:q "a1" :desc "old"}]))

(= (add-cue-to-list
     {:q "a2"}
     [{:q "a1"} {:q "a3"}]
     1)
   [{:q "a1"} {:q "a2"} {:q "a3"}])


(defn find-cue-position-by-name [cue-name cue-list]
  (first (keep-indexed #(if (= cue-name (:q %2)) %1) cue-list)))

(find-cue-position-by-name "A1" [{:q "A1"}])

(defn insert-cue-after-cue [cue target-name cue-list]
  (let [pos (inc (find-cue-position-by-name target-name cue-list))]
    (add-cue-to-list-position cue pos cue-list)))

(=
 [{:q "a1"} {:q "a2"} {:q "a3"} {:q "b1"}]
 (insert-cue-after-cue
   {:q "a3"}
   "a2"
   [{:q "a1"} {:q "a2"} {:q "b1"}]))

;; - remove / delete cue
;; TODO

;; - move cues

;; naming strategies ;; - renaming strategies

