goog.provide('com.fulcrologic.fulcro.algorithms.merge');
/**
 * Removes an ident, if it exists, from a list of idents in app state. This
 *   function is safe to use within mutations.
 */
com.fulcrologic.fulcro.algorithms.merge.remove_ident_STAR_ = (function com$fulcrologic$fulcro$algorithms$merge$remove_ident_STAR_(state_map,ident,path_to_idents){
if(cljs.core.map_QMARK_(state_map)){
} else {
throw (new Error("Assert failed: (map? state-map)"));
}

var new_list = (function (old_list){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24778_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident,p1__24778_SHARP_);
}),old_list));
});
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,path_to_idents,new_list);
});
/**
 * Check the given keyword to see if it is in the :ui namespace.
 */
com.fulcrologic.fulcro.algorithms.merge.is_ui_query_fragment_QMARK_ = (function com$fulcrologic$fulcro$algorithms$merge$is_ui_query_fragment_QMARK_(kw){
var kw__$1 = ((cljs.core.map_QMARK_(kw))?cljs.core.first(cljs.core.keys(kw)):kw);
if((kw__$1 instanceof cljs.core.Keyword)){
var G__24797 = kw__$1;
var G__24797__$1 = (((G__24797 == null))?null:cljs.core.namespace(G__24797));
if((G__24797__$1 == null)){
return null;
} else {
return cljs.core.re_find(/^ui(?:\.|$)/,G__24797__$1);
}
} else {
return null;
}
});
/**
 * Returns true if the `k` in `props` is the sweep-merge not-found marker. This marker appears
 *   *during* merge, and can affect `:pre-merge` processing, since the data-tree will have these
 *   markers when the given data is missing.
 */
com.fulcrologic.fulcro.algorithms.merge.not_found_QMARK_ = (function com$fulcrologic$fulcro$algorithms$merge$not_found_QMARK_(props,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k));
});
/**
 * Given x, return x value unless it's ::not-found (the mark/sweep missing marker), in which case it returns nil.
 * 
 *   This is useful when you are pre-processing a tree that has been marked for missing data sweep (see `mark-missing`),
 *   but has not yet been swept. This is basically the same as a `nil?` check in this circumstance since the given
 *   value will be removed after the final sweep.
 */
com.fulcrologic.fulcro.algorithms.merge.nilify_not_found = (function com$fulcrologic$fulcro$algorithms$merge$nilify_not_found(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437))){
return null;
} else {
return x;
}
});
/**
 * Returns `data` with meta-data that marks it as a leaf in the result.
 */
com.fulcrologic.fulcro.algorithms.merge.as_leaf = (function com$fulcrologic$fulcro$algorithms$merge$as_leaf(data){
if(cljs.core.coll_QMARK_(data)){
return cljs.core.with_meta(data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro","leaf","fulcro/leaf",-2094500471),true], null));
} else {
return data;
}
});
/**
 * Returns true iff the given data is marked as a leaf in the result (according to the query). Requires pre-marking.
 */
com.fulcrologic.fulcro.algorithms.merge.leaf_QMARK_ = (function com$fulcrologic$fulcro$algorithms$merge$leaf_QMARK_(data){
return (((!(cljs.core.coll_QMARK_(data)))) || (((((cljs.core.vector_QMARK_(data)) && (cljs.core.empty_QMARK_(data)))) || (((cljs.core.coll_QMARK_(data)) && (cljs.core.boolean$(new cljs.core.Keyword("fulcro","leaf","fulcro/leaf",-2094500471).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(data)))))))));
});
/**
 * Turn a union query into a query that attempts to encompass all possible things that might be queried.
 */
com.fulcrologic.fulcro.algorithms.merge.union__GT_query = (function com$fulcrologic$fulcro$algorithms$merge$union__GT_query(union_query){
return cljs.core.vec(cljs.core.set(cljs.core.flatten(cljs.core.vals(union_query))));
});
com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl = (function com$fulcrologic$fulcro$algorithms$merge$mark_missing_impl(result,query){
var missing_entity = cljs.core.PersistentArrayMap.EMPTY;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result__$1,element){
var element__$1 = ((cljs.core.list_QMARK_(element))?cljs.core.first(element):element
);
var join_QMARK_ = com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(element__$1);
var jk = ((join_QMARK_)?com.fulcrologic.fulcro.algorithms.do_not_use.join_key(element__$1):null);
var result_key = (((element__$1 instanceof cljs.core.Keyword))?element__$1:((join_QMARK_)?jk:null
));
var result_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,result_key);
var ident_element_QMARK_ = edn_query_language.core.ident_QMARK_(element__$1);
if(((((ident_element_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(element__$1))))) || (((edn_query_language.core.ident_QMARK_(result_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(result_key))))))){
return result__$1;
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.algorithms.merge.is_ui_query_fragment_QMARK_(result_key))){
return result__$1;
} else {
if((((element__$1 instanceof cljs.core.Keyword)) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,element__$1) == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,element__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437));
} else {
if(((join_QMARK_) && (((typeof com.fulcrologic.fulcro.algorithms.do_not_use.join_value(element__$1) === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),com.fulcrologic.fulcro.algorithms.do_not_use.join_value(element__$1))))))){
var result_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,jk);
if((result_SINGLEQUOTE_ == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,jk,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437));
} else {
if(cljs.core.vector_QMARK_(result_SINGLEQUOTE_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,jk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (item){
return (com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.cljs$core$IFn$_invoke$arity$2(item,query) : com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.call(null,item,query));
}),result_SINGLEQUOTE_));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,jk,(com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.cljs$core$IFn$_invoke$arity$2(result_SINGLEQUOTE_,query) : com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.call(null,result_SINGLEQUOTE_,query)));

}
}
} else {
if(((ident_element_QMARK_) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,element__$1) == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,element__$1,missing_entity);
} else {
if(com.fulcrologic.fulcro.algorithms.do_not_use.union_QMARK_(element__$1)){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437));
var to_one_QMARK_ = cljs.core.map_QMARK_(v);
var to_many_QMARK_ = cljs.core.vector_QMARK_(v);
var wide_query = com.fulcrologic.fulcro.algorithms.merge.union__GT_query(com.fulcrologic.fulcro.algorithms.do_not_use.join_value(element__$1));
if(to_one_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,(com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.cljs$core$IFn$_invoke$arity$2(v,wide_query) : com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.call(null,v,wide_query)));
} else {
if(to_many_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.cljs$core$IFn$_invoke$arity$2(i,wide_query) : com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.call(null,i,wide_query));
}),v));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437));
} else {
return result__$1;

}
}
}
} else {
if(((join_QMARK_) && (((edn_query_language.core.ident_QMARK_(jk)) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,jk) == null)))))){
var mock_missing_object = (function (){var G__24813 = cljs.core.PersistentArrayMap.EMPTY;
var G__24814 = com.fulcrologic.fulcro.algorithms.do_not_use.join_value(element__$1);
return (com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.cljs$core$IFn$_invoke$arity$2(G__24813,G__24814) : com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.call(null,G__24813,G__24814));
})();
var v = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mock_missing_object,missing_entity], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,jk,v);
} else {
if(((join_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),cljs.core.get.cljs$core$IFn$_invoke$arity$3(result__$1,jk,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,jk,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437));
} else {
if(((join_QMARK_) && (cljs.core.sequential_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,jk))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,jk,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (item){
var G__24820 = item;
var G__24821 = com.fulcrologic.fulcro.algorithms.do_not_use.join_value(element__$1);
return (com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.cljs$core$IFn$_invoke$arity$2(G__24820,G__24821) : com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.call(null,G__24820,G__24821));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,jk)));
} else {
if(((join_QMARK_) && (cljs.core.map_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,jk))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,jk,(function (){var G__24822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,jk);
var G__24823 = com.fulcrologic.fulcro.algorithms.do_not_use.join_value(element__$1);
return (com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.cljs$core$IFn$_invoke$arity$2(G__24822,G__24823) : com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.call(null,G__24822,G__24823));
})());
} else {
if(((join_QMARK_) && (((cljs.core.vector_QMARK_(com.fulcrologic.fulcro.algorithms.do_not_use.join_value(element__$1))) && ((!(((cljs.core.map_QMARK_(result_value)) || (cljs.core.sequential_QMARK_(result_value)))))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,(function (){var G__24824 = cljs.core.PersistentArrayMap.EMPTY;
var G__24825 = com.fulcrologic.fulcro.algorithms.do_not_use.join_value(element__$1);
return (com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.cljs$core$IFn$_invoke$arity$2(G__24824,G__24825) : com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl.call(null,G__24824,G__24825));
})());
} else {
if(cljs.core.truth_(result_key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(result__$1,result_key,com.fulcrologic.fulcro.algorithms.merge.as_leaf);
} else {
return result__$1;

}
}
}
}
}
}
}
}
}
}
}
}
}),result,query);
});
/**
 * Recursively walk the query and response marking anything that was *asked for* in the query but is *not* in the response as missing.
 *   The sweep-merge process (which happens later in the plumbing) uses these markers as indicators to remove any existing
 *   data in the target of the merge (i.e. your state database).
 * 
 *   The naive approach to data merging (even recursive) would fail to remove such data.
 * 
 *   Returns the result with missing markers in place (which are then used/removed in a later stage).
 * 
 *   See the Developer Guide section on Fulcro's merge process for more information.
 */
com.fulcrologic.fulcro.algorithms.merge.mark_missing = (function com$fulcrologic$fulcro$algorithms$merge$mark_missing(result,query){
try{return com.fulcrologic.fulcro.algorithms.merge.mark_missing_impl(result,query);
}catch (e24826){var e = e24826;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.merge",null,162,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Unable to mark missing on result. Returning unmarked result. See https://book.fulcrologic.com/#err-merge-unable2mark"], null);
}),null)),null,-1735128303);

return result;
}});
/**
 * Remove not-found keys from m (non-recursive). `m` can be a map (sweep the values) or vector (run sweep-one on each entry).
 */
com.fulcrologic.fulcro.algorithms.merge.sweep_one = (function com$fulcrologic$fulcro$algorithms$merge$sweep_one(m){
if((((!(com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(m)))) && (cljs.core.map_QMARK_(m)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__24827){
var vec__24828 = p__24827;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24828,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24828,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),k)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tempids","tempids",1767509089),k)))))){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}
}),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta(m)),m);
} else {
if(cljs.core.vector_QMARK_(m)){
return cljs.core.with_meta(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.merge.sweep_one,m),cljs.core.meta(m));
} else {
return m;

}
}
});
/**
 * Remove all of the not-found keys (recursively) from m, stopping at marked leaves (if present). Requires `m`
 *   to have been pre-marked via `mark-missing`.
 */
com.fulcrologic.fulcro.algorithms.merge.sweep = (function com$fulcrologic$fulcro$algorithms$merge$sweep(m){
if(com.fulcrologic.fulcro.algorithms.merge.leaf_QMARK_(m)){
return com.fulcrologic.fulcro.algorithms.merge.sweep_one(m);
} else {
if((((!(com.fulcrologic.fulcro.algorithms.tempid.tempid_QMARK_(m)))) && (cljs.core.map_QMARK_(m)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__24834){
var vec__24835 = p__24834;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24835,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24835,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),k)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tempids","tempids",1767509089),k)))))){
return acc;
} else {
if(((edn_query_language.core.ident_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),cljs.core.second(v))))){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(com.fulcrologic.fulcro.algorithms.merge.sweep.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.algorithms.merge.sweep.cljs$core$IFn$_invoke$arity$1(v) : com.fulcrologic.fulcro.algorithms.merge.sweep.call(null,v)));

}
}
}),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,cljs.core.meta(m)),m);
} else {
if(cljs.core.vector_QMARK_(m)){
return cljs.core.with_meta(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.merge.sweep,m),cljs.core.meta(m));
} else {
return m;

}
}
}
});
/**
 * Do a recursive merge of source into target (both maps), but remove any target data that is marked as missing in the response.
 * 
 *   Requires that the `source` has been marked via `mark-missing`.
 * 
 *   The missing marker is generated in the source when something has been asked for in the query, but had no value in the
 *   response. This allows us to correctly remove 'empty' data from the database without accidentally removing something
 *   that may still exist on the server (in truth we don't know its status, since it wasn't asked for, but we leave
 *   it as our 'best guess').
 */
com.fulcrologic.fulcro.algorithms.merge.sweep_merge = (function com$fulcrologic$fulcro$algorithms$merge$sweep_merge(target,source){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__24842){
var vec__24843 = p__24842;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24843,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24843,(1),null);
var existing_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,key);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"tempids","tempids",1767509089))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437))))){
return acc;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_value,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,key);
} else {
if(((edn_query_language.core.ident_QMARK_(new_value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","not-found","com.fulcrologic.fulcro.algorithms.merge/not-found",190673437),cljs.core.second(new_value))))){
return acc;
} else {
if(com.fulcrologic.fulcro.algorithms.merge.leaf_QMARK_(new_value)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,com.fulcrologic.fulcro.algorithms.merge.sweep_one(new_value));
} else {
if(((cljs.core.map_QMARK_(existing_value)) && (cljs.core.map_QMARK_(new_value)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,key,com.fulcrologic.fulcro.algorithms.merge.sweep_merge,new_value);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,com.fulcrologic.fulcro.algorithms.merge.sweep(new_value));

}
}
}
}
}
}),target,source);
});
com.fulcrologic.fulcro.algorithms.merge.component_pre_merge = (function com$fulcrologic$fulcro$algorithms$merge$component_pre_merge(class$,query,state,data,options){
if(com.fulcrologic.fulcro.raw.components.has_pre_merge_QMARK_(class$)){
var entity = (function (){var G__24850 = com.fulcrologic.fulcro.raw.components.get_ident.cljs$core$IFn$_invoke$arity$2(class$,data);
if((G__24850 == null)){
return null;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,G__24850);
}
})();
var result = com.fulcrologic.fulcro.raw.components.pre_merge(class$,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),state,new cljs.core.Keyword(null,"current-normalized","current-normalized",851723724),entity,new cljs.core.Keyword(null,"data-tree","data-tree",1311167582),data,new cljs.core.Keyword(null,"query","query",-1288509510),query], null));
return result;
} else {
return data;
}
});
/**
 * Transform function that modifies data using component pre-merge hook.
 */
com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform = (function com$fulcrologic$fulcro$algorithms$merge$pre_merge_transform(var_args){
var G__24853 = arguments.length;
switch (G__24853) {
case 1:
return com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$1 = (function (state){
return com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$2 = (function (state,options){
return (function com$fulcrologic$fulcro$algorithms$merge$pre_merge_transform_internal(query,data){
var temp__5802__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
if(cljs.core.truth_(temp__5802__auto__)){
var class$ = temp__5802__auto__;
return com.fulcrologic.fulcro.algorithms.merge.component_pre_merge(class$,query,state,data,options);
} else {
return data;
}
});
}));

(com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$lang$maxFixedArity = 2);

/**
 * Merge all of the mutations that were joined with a query.
 * 
 *   The options currently do nothing. If you want mark/sweep, pre-mark the data-tree with `merge/mark-missing`,
 *   and this function will sweep the result.
 */
com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins = (function com$fulcrologic$fulcro$algorithms$merge$merge_mutation_joins(var_args){
var G__24860 = arguments.length;
switch (G__24860) {
case 3:
return com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins.cljs$core$IFn$_invoke$arity$3 = (function (state,query,data_tree){
return com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins.cljs$core$IFn$_invoke$arity$4(state,query,data_tree,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins.cljs$core$IFn$_invoke$arity$4 = (function (state,query,data_tree,options){
if(cljs.core.map_QMARK_(data_tree)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (updated_state,query_element){
var k = (function (){var and__5043__auto__ = com.fulcrologic.fulcro.algorithms.do_not_use.mutation_join_QMARK_(query_element);
if(and__5043__auto__){
return com.fulcrologic.fulcro.algorithms.do_not_use.join_key(query_element);
} else {
return and__5043__auto__;
}
})();
var subtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,k);
if(cljs.core.truth_((function (){var and__5043__auto__ = k;
if(cljs.core.truth_(and__5043__auto__)){
return subtree;
} else {
return and__5043__auto__;
}
})())){
var subquery = com.fulcrologic.fulcro.algorithms.do_not_use.join_value(query_element);
var target = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.data-targeting","target","com.fulcrologic.fulcro.algorithms.data-targeting/target",-1540673140).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(subquery));
var idnt = new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","temporary-key","com.fulcrologic.fulcro.algorithms.merge/temporary-key",-1065335624);
var norm_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([idnt,subquery])], null);
var norm_tree = cljs.core.PersistentArrayMap.createAsIfByAssoc([idnt,subtree]);
var db = com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4(norm_query,norm_tree,true,com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$2(state,options));
var G__24861 = com.fulcrologic.fulcro.algorithms.merge.sweep_merge(updated_state,db);
var G__24861__$1 = (cljs.core.truth_(target)?com.fulcrologic.fulcro.algorithms.data_targeting.process_target.cljs$core$IFn$_invoke$arity$3(G__24861,idnt,target):G__24861);
if(cljs.core.not(target)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24861__$1,db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([idnt], 0));
} else {
return G__24861__$1;
}
} else {
return updated_state;
}
}),state,query);
} else {
return state;
}
}));

(com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins.cljs$lang$maxFixedArity = 4);

com.fulcrologic.fulcro.algorithms.merge.merge_ident = (function com$fulcrologic$fulcro$algorithms$merge$merge_ident(app_state,ident,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app_state,ident,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.merge.sweep_one,cljs.core.merge),props);
});
com.fulcrologic.fulcro.algorithms.merge.sift_idents = (function com$fulcrologic$fulcro$algorithms$merge$sift_idents(res){
var map__24868 = cljs.core.group_by((function (p1__24867_SHARP_){
return cljs.core.vector_QMARK_(cljs.core.first(p1__24867_SHARP_));
}),res);
var map__24868__$1 = cljs.core.__destructure_map(map__24868);
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24868__$1,true);
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24868__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Handle merging incoming data and sweep it of values that are marked missing. This function also ensures that raw
 * mutation join results are ignored (they must be merged via `merge-mutation-joins`).
 */
com.fulcrologic.fulcro.algorithms.merge.merge_tree = (function com$fulcrologic$fulcro$algorithms$merge$merge_tree(target,source){
var source_to_merge = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__24873){
var vec__24874 = p__24873;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24874,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24874,(1),null);
return (!((k instanceof cljs.core.Symbol)));
})),source);
return com.fulcrologic.fulcro.algorithms.merge.sweep_merge(target,source_to_merge);
});
/**
 * Merge the given `refs` (a map from ident to props), query (a query that contains ident-joins), and tree:
 * 
 *   returns a new tree with the data merged into the proper ident-based tables.
 */
com.fulcrologic.fulcro.algorithms.merge.merge_idents = (function com$fulcrologic$fulcro$algorithms$merge$merge_idents(tree,query,refs,options){
var ident_joins = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__24878_SHARP_){
var G__24880 = p1__24878_SHARP_;
if(cljs.core.seq_QMARK_(p1__24878_SHARP_)){
return cljs.core.first(G__24880);
} else {
return G__24880;
}
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__24879_SHARP_){
return ((com.fulcrologic.fulcro.algorithms.do_not_use.join_QMARK_(p1__24879_SHARP_)) && (edn_query_language.core.ident_QMARK_(com.fulcrologic.fulcro.algorithms.do_not_use.join_key(p1__24879_SHARP_))));
}))),query);
var step = (function com$fulcrologic$fulcro$algorithms$merge$merge_idents_$_step(result_tree,p__24885){
var vec__24886 = p__24885;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24886,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24886,(1),null);
var component_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ident_joins,ident,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
var normalized_data = com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4(component_query,props,false,com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$2(tree,options));
var refs__$1 = cljs.core.meta(normalized_data);
return com.fulcrologic.fulcro.algorithms.merge.merge_tree(com.fulcrologic.fulcro.algorithms.merge.merge_ident(result_tree,ident,normalized_data),refs__$1);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,tree,refs);
});
/**
 * Merge the query-result of a query using Fulcro's standard merge and normalization logic.
 * 
 *   Typically used on the state atom as:
 * 
 *   ```
 *   (swap! state merge* query-result query)
 *   ```
 * 
 *   - `state-map` - The normalized database.
 *   - `query` - The query that was used to obtain the query-result. This query will be treated relative to the root of the database.
 *   - `tree` - The query-result to merge (a map).
 * 
 *   The options is currently doing nothing. If you want to sweep unreturned data use `merge/mark-missing` on your data tree
 *   before calling this.
 * 
 *   See `merge-component` and `merge-component!` for possibly more appropriate functions for your task.
 * 
 *   Returns the new normalized database.
 */
com.fulcrologic.fulcro.algorithms.merge.merge_STAR_ = (function com$fulcrologic$fulcro$algorithms$merge$merge_STAR_(var_args){
var G__24891 = arguments.length;
switch (G__24891) {
case 3:
return com.fulcrologic.fulcro.algorithms.merge.merge_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.algorithms.merge.merge_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.merge.merge_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (state_map,query,result_tree){
return com.fulcrologic.fulcro.algorithms.merge.merge_STAR_.cljs$core$IFn$_invoke$arity$4(state_map,query,result_tree,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.merge.merge_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (state_map,query,result_tree,options){
var vec__24892 = com.fulcrologic.fulcro.algorithms.merge.sift_idents(result_tree);
var idts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24892,(0),null);
var result_tree__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24892,(1),null);
var normalized_result = com.fulcrologic.fulcro.algorithms.normalize.tree__GT_db.cljs$core$IFn$_invoke$arity$4(query,result_tree__$1,true,com.fulcrologic.fulcro.algorithms.merge.pre_merge_transform.cljs$core$IFn$_invoke$arity$2(state_map,options));
return com.fulcrologic.fulcro.algorithms.merge.merge_tree(com.fulcrologic.fulcro.algorithms.merge.merge_idents(com.fulcrologic.fulcro.algorithms.merge.merge_mutation_joins.cljs$core$IFn$_invoke$arity$4(state_map,query,result_tree__$1,options),query,idts,options),normalized_result);
}));

(com.fulcrologic.fulcro.algorithms.merge.merge_STAR_.cljs$lang$maxFixedArity = 4);

/**
 * Calculates the query that can be used to pull (or merge) a component with an ident
 *   to/from a normalized app database. Requires a tree of data that represents the instance of
 *   the component in question (e.g. ident will work on it)
 */
com.fulcrologic.fulcro.algorithms.merge.component_merge_query = (function com$fulcrologic$fulcro$algorithms$merge$component_merge_query(state_map,component,object_data){
var ident = com.fulcrologic.fulcro.raw.components.ident(component,object_data);
var object_query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,object_query])], null);
});
/**
 * Walks the given query and calls (merge-fn parent-union-component union-child-initial-state) for each non-default element of a union that has initial app state.
 *   You probably want to use merge-alternate-union-elements[!] on a state map or app.
 */
com.fulcrologic.fulcro.algorithms.merge.merge_alternate_unions = (function com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions(merge_fn,root_component){
var walk_ast = (function() {
var com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast = null;
var com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast__2 = (function (ast,visitor){
return com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
});
var com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast__3 = (function (p__24912,visitor,parent_union){
var map__24916 = p__24912;
var map__24916__$1 = cljs.core.__destructure_map(map__24916);
var parent_ast = map__24916__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24916__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24916__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24916__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24916__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24916__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24916__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.truth_((function (){var and__5043__auto__ = component;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = parent_union;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union-entry","union-entry",223335750),type);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
(visitor.cljs$core$IFn$_invoke$arity$2 ? visitor.cljs$core$IFn$_invoke$arity$2(component,parent_union) : visitor.call(null,component,parent_union));
} else {
}

if(cljs.core.truth_(children)){
var seq__24928 = cljs.core.seq(children);
var chunk__24929 = null;
var count__24930 = (0);
var i__24931 = (0);
while(true){
if((i__24931 < count__24930)){
var ast = chunk__24929.cljs$core$IIndexed$_nth$arity$2(null,i__24931);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union","union",2142937499))){
com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,component);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union-entry","union-entry",223335750))){
com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,parent_union);
} else {
if(cljs.core.truth_(ast)){
com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
} else {
}
}
}


var G__25009 = seq__24928;
var G__25010 = chunk__24929;
var G__25011 = count__24930;
var G__25012 = (i__24931 + (1));
seq__24928 = G__25009;
chunk__24929 = G__25010;
count__24930 = G__25011;
i__24931 = G__25012;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24928);
if(temp__5804__auto__){
var seq__24928__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24928__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24928__$1);
var G__25013 = cljs.core.chunk_rest(seq__24928__$1);
var G__25014 = c__5568__auto__;
var G__25015 = cljs.core.count(c__5568__auto__);
var G__25016 = (0);
seq__24928 = G__25013;
chunk__24929 = G__25014;
count__24930 = G__25015;
i__24931 = G__25016;
continue;
} else {
var ast = cljs.core.first(seq__24928__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union","union",2142937499))){
com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,component);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"union-entry","union-entry",223335750))){
com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,parent_union);
} else {
if(cljs.core.truth_(ast)){
com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
} else {
}
}
}


var G__25018 = cljs.core.next(seq__24928__$1);
var G__25019 = null;
var G__25020 = (0);
var G__25021 = (0);
seq__24928 = G__25018;
chunk__24929 = G__25019;
count__24930 = G__25020;
i__24931 = G__25021;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast = function(p__24912,visitor,parent_union){
switch(arguments.length){
case 2:
return com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast__2.call(this,p__24912,visitor);
case 3:
return com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast__3.call(this,p__24912,visitor,parent_union);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$2 = com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast__2;
com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3 = com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast__3;
return com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_walk_ast;
})()
;
var merge_union = (function com$fulcrologic$fulcro$algorithms$merge$merge_alternate_unions_$_merge_union(component,parent_union){
var default_initial_state = (function (){var and__5043__auto__ = parent_union;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_(parent_union);
if(and__5043__auto____$1){
return com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(parent_union,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
var to_many_QMARK_ = cljs.core.vector_QMARK_(default_initial_state);
var component_initial_state = (function (){var and__5043__auto__ = component;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = com.fulcrologic.fulcro.raw.components.has_initial_app_state_QMARK_(component);
if(and__5043__auto____$1){
return com.fulcrologic.fulcro.raw.components.get_initial_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = component;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = component_initial_state;
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = parent_union;
if(cljs.core.truth_(and__5043__auto____$2)){
return (((!(to_many_QMARK_))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(default_initial_state,component_initial_state)));
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return (merge_fn.cljs$core$IFn$_invoke$arity$2 ? merge_fn.cljs$core$IFn$_invoke$arity$2(parent_union,component_initial_state) : merge_fn.call(null,parent_union,component_initial_state));
} else {
return null;
}
});
return walk_ast(edn_query_language.core.query__GT_ast(com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$1(root_component)),merge_union);
});
/**
 * Merge an arbitrary data-tree that conforms to the shape of the given query using Fulcro's
 *   standard merge and normalization logic.
 * 
 *   app - A fulcro application to merge into.
 *   query - A query, derived from components, that can be used to normalized a tree of data.
 *   data-tree - A tree of data that matches the nested shape of query.
 * 
 *   The options map currently does nothing. If you want to remove unreturned data use `merge/mark-missing` on the
 *   data tree before merging and a sweep will automatically be done.
 * 
 *   NOTE: This function assumes you are merging against the root of the tree. See
 *   `merge-component` and `merge-component!` for relative merging.
 * 
 *   See also `merge*`.
 */
com.fulcrologic.fulcro.algorithms.merge.merge_BANG_ = (function com$fulcrologic$fulcro$algorithms$merge$merge_BANG_(var_args){
var G__24947 = arguments.length;
switch (G__24947) {
case 3:
return com.fulcrologic.fulcro.algorithms.merge.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.fulcrologic.fulcro.algorithms.merge.merge_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.merge.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (app,data_tree,query){
return com.fulcrologic.fulcro.algorithms.merge.merge_BANG_.cljs$core$IFn$_invoke$arity$4(app,data_tree,query,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.merge.merge_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (app,data_tree,query,options){
var state_atom = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app);
var render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
if(cljs.core.truth_(state_atom)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,com.fulcrologic.fulcro.algorithms.merge.merge_STAR_,query,data_tree,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));

var G__24948 = app;
var G__24949 = cljs.core.PersistentArrayMap.EMPTY;
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__24948,G__24949) : render_BANG_.call(null,G__24948,G__24949));
} else {
return null;
}
}));

(com.fulcrologic.fulcro.algorithms.merge.merge_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Given a state map of the application database, a component, and a tree of component-data: normalizes
 * the tree of data and merges the component table entries into the state, returning a new state map.
 * 
 * Since there is not an implied root, the component itself won't be linked into your graph (though it will
 * remain correctly linked for its own consistency).
 * 
 * * `state-map` - The normalized database
 * * `component` - A component class
 * * `component-data` - A tree of data that matches the shape of the component's query.
 * * `named-parameters` - Parameters from `targeting/integrate-ident*` that will let you link the merged component into the graph.
 * Named parameters may also include `:remove-missing?`, which will remove things that are queried for but do
 * not appear in the data from the state.
 * 
 * See also targeting/integrate-ident*, and merge/merge-component!
 */
com.fulcrologic.fulcro.algorithms.merge.merge_component = (function com$fulcrologic$fulcro$algorithms$merge$merge_component(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25035 = arguments.length;
var i__5770__auto___25036 = (0);
while(true){
if((i__5770__auto___25036 < len__5769__auto___25035)){
args__5775__auto__.push((arguments[i__5770__auto___25036]));

var G__25038 = (i__5770__auto___25036 + (1));
i__5770__auto___25036 = G__25038;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.merge.merge_component.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.algorithms.merge.merge_component.cljs$core$IFn$_invoke$arity$variadic = (function (state_map,component,component_data,named_parameters){
if(com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(component)){
var options = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,named_parameters);
var map__24954 = options;
var map__24954__$1 = cljs.core.__destructure_map(map__24954);
var remove_missing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24954__$1,new cljs.core.Keyword(null,"remove-missing?","remove-missing?",-2044119224));
var query = com.fulcrologic.fulcro.raw.components.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map);
var marked_data = (cljs.core.truth_(remove_missing_QMARK_)?com.fulcrologic.fulcro.algorithms.merge.mark_missing(component_data,query):component_data);
var updated_state = com.fulcrologic.fulcro.algorithms.merge.merge_STAR_.cljs$core$IFn$_invoke$arity$4(state_map,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","merge","com.fulcrologic.fulcro.algorithms.merge/merge",1176000440),query], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","merge","com.fulcrologic.fulcro.algorithms.merge/merge",1176000440),marked_data], null),options);
var real_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(updated_state,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","merge","com.fulcrologic.fulcro.algorithms.merge/merge",1176000440));
var integrate_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__24955){
var vec__24956 = p__24955;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24956,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24956,(1),null);
if(cljs.core.truth_((function (){var fexpr__24959 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"replace","replace",-786587770),null,new cljs.core.Keyword(null,"prepend","prepend",342616040),null,new cljs.core.Keyword(null,"append","append",-291298229),null], null), null);
return (fexpr__24959.cljs$core$IFn$_invoke$arity$1 ? fexpr__24959.cljs$core$IFn$_invoke$arity$1(k) : fexpr__24959.call(null,k));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters)], 0));
var integrate_targets = (function (s){
if(cljs.core.seq(named_parameters)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.data_targeting.integrate_ident_STAR_,s,real_ident,integrate_params);
} else {
return s;
}
});
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(integrate_targets(updated_state),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.merge","merge","com.fulcrologic.fulcro.algorithms.merge/merge",1176000440));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.merge",null,426,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cannot merge component ",component," because it does not have an ident! See https://book.fulcrologic.com/#err-merge-comp-missing-ident"], null);
}),null)),null,153610398);

return state_map;
}
}));

(com.fulcrologic.fulcro.algorithms.merge.merge_component.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.merge.merge_component.cljs$lang$applyTo = (function (seq24950){
var G__24951 = cljs.core.first(seq24950);
var seq24950__$1 = cljs.core.next(seq24950);
var G__24952 = cljs.core.first(seq24950__$1);
var seq24950__$2 = cljs.core.next(seq24950__$1);
var G__24953 = cljs.core.first(seq24950__$2);
var seq24950__$3 = cljs.core.next(seq24950__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24951,G__24952,G__24953,seq24950__$3);
}));

/**
 * Normalize and merge a (sub)tree of application state into the application using a known UI component's query and ident.
 * 
 *   This utility function obtains the ident of the incoming object-data using the UI component's ident function. Once obtained,
 *   it uses the component's query and ident to normalize the data and places the resulting objects in the correct tables.
 *   It is also quite common to want those new objects to be linked into lists in other spots in app state, so this function
 *   supports optional named parameters for doing this. These named parameters can be repeated as many times as you like in order
 *   to place the ident of the new object into other data structures of app state.
 * 
 *   This function honors the data merge story for Fulcro: attributes that are queried for but do not appear in the
 *   data will be removed from the application. This function also uses the initial state for the component as a base
 *   for merge if there was no state for the object already in the database.
 * 
 *   This function will also trigger re-renders of components that directly render object merged, as well as any components
 *   into which you integrate that data via the named-parameters.
 * 
 *   This function is primarily meant to be used from things like server push and setTimeout/setInterval, where you're outside
 *   of the normal mutation story. Do not use this function within abstract mutations.
 * 
 *   * `app`: Your application.
 *   * `component`: The class of the component that corresponds to the data. Must have an ident.
 *   * `object-data`: A map (tree) of data to merge. Will be normalized for you.
 *   * `named-parameter`: Post-processing ident integration steps. see `targeting/integrate-ident*`. You may also
 *   include `:remove-missing? true/false` to indicate that data that is missing for the component's query
 *   should be removed from app state.
 * 
 *   Any keywords that appear in ident integration steps will be added to the re-render queue.
 * 
 *   See also `fulcro.client.primitives/merge!`.
 *   
 */
com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_ = (function com$fulcrologic$fulcro$algorithms$merge$merge_component_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25042 = arguments.length;
var i__5770__auto___25043 = (0);
while(true){
if((i__5770__auto___25043 < len__5769__auto___25042)){
args__5775__auto__.push((arguments[i__5770__auto___25043]));

var G__25044 = (i__5770__auto___25043 + (1));
i__5770__auto___25043 = G__25044;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app,component,object_data,named_parameters){
var temp__5804__auto__ = com.fulcrologic.fulcro.raw.components.any__GT_app(app);
if(cljs.core.truth_(temp__5804__auto__)){
var app__$1 = temp__5804__auto__;
if((!(com.fulcrologic.fulcro.raw.components.has_ident_QMARK_(component)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.merge",null,462,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["merge-component!: component must implement Ident. Merge skipped. See https://book.fulcrologic.com/#err-merge-comp-missing-ident2"], null);
}),null)),null,1817276345);
} else {
var state = new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(app__$1);
var render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(com.fulcrologic.fulcro.algorithms.merge.merge_component,s,component,object_data,named_parameters);
}));

var G__24964 = app__$1;
var G__24965 = cljs.core.PersistentArrayMap.EMPTY;
return (render_BANG_.cljs$core$IFn$_invoke$arity$2 ? render_BANG_.cljs$core$IFn$_invoke$arity$2(G__24964,G__24965) : render_BANG_.call(null,G__24964,G__24965));
}
} else {
return null;
}
}));

(com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_.cljs$lang$applyTo = (function (seq24960){
var G__24961 = cljs.core.first(seq24960);
var seq24960__$1 = cljs.core.next(seq24960);
var G__24962 = cljs.core.first(seq24960__$1);
var seq24960__$2 = cljs.core.next(seq24960__$1);
var G__24963 = cljs.core.first(seq24960__$2);
var seq24960__$3 = cljs.core.next(seq24960__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24961,G__24962,G__24963,seq24960__$3);
}));

/**
 * Just like merge-alternate-union-elements!, but usable from within mutations and on server-side rendering. Ensures
 *   that when a component has initial state it will end up in the state map, even if it isn't currently in the
 *   initial state of the union component (which can only point to one at a time).
 */
com.fulcrologic.fulcro.algorithms.merge.merge_alternate_union_elements = (function com$fulcrologic$fulcro$algorithms$merge$merge_alternate_union_elements(state_map,root_component){
var state_map_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state_map);
var merge_to_state = (function (comp,tree){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_map_atom,com.fulcrologic.fulcro.algorithms.merge.merge_component,comp,tree);
});
var _ = com.fulcrologic.fulcro.algorithms.merge.merge_alternate_unions(merge_to_state,root_component);
var new_state = cljs.core.deref(state_map_atom);
return new_state;
});
/**
 * Walks the query and initial state of root-component and merges the alternate sides of unions with initial state into
 *   the application state database. See also `merge-alternate-union-elements`, which can be used on a state map and
 *   is handy for server-side rendering. This function side-effects on your app, and returns nothing.
 */
com.fulcrologic.fulcro.algorithms.merge.merge_alternate_union_elements_BANG_ = (function com$fulcrologic$fulcro$algorithms$merge$merge_alternate_union_elements_BANG_(app,root_component){
var app__$1 = com.fulcrologic.fulcro.raw.components.any__GT_app(app);
return com.fulcrologic.fulcro.algorithms.merge.merge_alternate_unions(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.algorithms.merge.merge_component_BANG_,app__$1),root_component);
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.merge.js.map
