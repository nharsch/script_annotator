# script_cue_annotator

## TODO
- [x] figwheel watch
- [ ] fireplace nrepl connection
- [ ] minimal UI:
  - [ ] new cue
  - [ ] delete cue
  - [ ] rename cue
- [ ] docker container for cljs compilation
- [x] create cue list data struct and operations
- [ ] get annotorius to work on page
- [ ] hook annatorius into cue sheet
- [ ] excel dump of cue sheet


## TO RUN
`clj -m cjls.main -c cue-list.core -r`

## misc
- notes on setting up fireplace with rebel: https://github.com/bhauman/figwheel-main/blob/master/docs/docs/vim.md
- to run repl: clojure -m figwheel.main --compile cue-list.core --repl

