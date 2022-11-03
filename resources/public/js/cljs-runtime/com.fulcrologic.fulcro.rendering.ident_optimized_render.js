goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app,ident,c){
if(cljs.core.truth_((function (){var and__5043__auto__ = c;
if(cljs.core.truth_(and__5043__auto__)){
return ident;
} else {
return and__5043__auto__;
}
})())){
var map__26856 = app;
var map__26856__$1 = cljs.core.__destructure_map(map__26856);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26856__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__5045__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__26857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__26858 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__26857,G__26858) : com.fulcrologic.fulcro.components.computed.call(null,G__26857,G__26858));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,-814905357);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__26861 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__26861) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__26861));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-472742637);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app,ident){
var seq__26862 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app,ident));
var chunk__26863 = null;
var count__26864 = (0);
var i__26865 = (0);
while(true){
if((i__26865 < count__26864)){
var c = chunk__26863.cljs$core$IIndexed$_nth$arity$2(null,i__26865);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__27038 = seq__26862;
var G__27039 = chunk__26863;
var G__27040 = count__26864;
var G__27041 = (i__26865 + (1));
seq__26862 = G__27038;
chunk__26863 = G__27039;
count__26864 = G__27040;
i__26865 = G__27041;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26862);
if(temp__5804__auto__){
var seq__26862__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26862__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26862__$1);
var G__27042 = cljs.core.chunk_rest(seq__26862__$1);
var G__27043 = c__5568__auto__;
var G__27044 = cljs.core.count(c__5568__auto__);
var G__27045 = (0);
seq__26862 = G__27042;
chunk__26863 = G__27043;
count__26864 = G__27044;
i__26865 = G__27045;
continue;
} else {
var c = cljs.core.first(seq__26862__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident,c);


var G__27046 = cljs.core.next(seq__26862__$1);
var G__27047 = null;
var G__27048 = (0);
var G__27049 = (0);
seq__26862 = G__27046;
chunk__26863 = G__27047;
count__26864 = G__27048;
i__26865 = G__27049;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app,ident);

var map__26882 = app;
var map__26882__$1 = cljs.core.__destructure_map(map__26882);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26882__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__26883 = cljs.core.deref(runtime_atom);
var map__26883__$1 = cljs.core.__destructure_map(map__26883);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26883__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__26884 = indexes;
var map__26884__$1 = cljs.core.__destructure_map(map__26884);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26884__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26884__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26884__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__5045__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__26887 = cljs.core.seq(classes);
var chunk__26888 = null;
var count__26889 = (0);
var i__26890 = (0);
while(true){
if((i__26890 < count__26889)){
var class$ = chunk__26888.cljs$core$IIndexed$_nth$arity$2(null,i__26890);
var seq__26920_27055 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__26922_27056 = null;
var count__26923_27057 = (0);
var i__26924_27058 = (0);
while(true){
if((i__26924_27058 < count__26923_27057)){
var component_27060 = chunk__26922_27056.cljs$core$IIndexed$_nth$arity$2(null,i__26924_27058);
var component_ident_27061 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_27060) : com.fulcrologic.fulcro.components.get_ident.call(null,component_27060));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_27061,component_27060);


var G__27062 = seq__26920_27055;
var G__27063 = chunk__26922_27056;
var G__27064 = count__26923_27057;
var G__27065 = (i__26924_27058 + (1));
seq__26920_27055 = G__27062;
chunk__26922_27056 = G__27063;
count__26923_27057 = G__27064;
i__26924_27058 = G__27065;
continue;
} else {
var temp__5804__auto___27066 = cljs.core.seq(seq__26920_27055);
if(temp__5804__auto___27066){
var seq__26920_27067__$1 = temp__5804__auto___27066;
if(cljs.core.chunked_seq_QMARK_(seq__26920_27067__$1)){
var c__5568__auto___27069 = cljs.core.chunk_first(seq__26920_27067__$1);
var G__27071 = cljs.core.chunk_rest(seq__26920_27067__$1);
var G__27072 = c__5568__auto___27069;
var G__27073 = cljs.core.count(c__5568__auto___27069);
var G__27074 = (0);
seq__26920_27055 = G__27071;
chunk__26922_27056 = G__27072;
count__26923_27057 = G__27073;
i__26924_27058 = G__27074;
continue;
} else {
var component_27080 = cljs.core.first(seq__26920_27067__$1);
var component_ident_27081 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_27080) : com.fulcrologic.fulcro.components.get_ident.call(null,component_27080));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_27081,component_27080);


var G__27086 = cljs.core.next(seq__26920_27067__$1);
var G__27087 = null;
var G__27088 = (0);
var G__27089 = (0);
seq__26920_27055 = G__27086;
chunk__26922_27056 = G__27087;
count__26923_27057 = G__27088;
i__26924_27058 = G__27089;
continue;
}
} else {
}
}
break;
}


var G__27090 = seq__26887;
var G__27091 = chunk__26888;
var G__27092 = count__26889;
var G__27093 = (i__26890 + (1));
seq__26887 = G__27090;
chunk__26888 = G__27091;
count__26889 = G__27092;
i__26890 = G__27093;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26887);
if(temp__5804__auto__){
var seq__26887__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26887__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26887__$1);
var G__27098 = cljs.core.chunk_rest(seq__26887__$1);
var G__27099 = c__5568__auto__;
var G__27100 = cljs.core.count(c__5568__auto__);
var G__27101 = (0);
seq__26887 = G__27098;
chunk__26888 = G__27099;
count__26889 = G__27100;
i__26890 = G__27101;
continue;
} else {
var class$ = cljs.core.first(seq__26887__$1);
var seq__26931_27102 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__26933_27103 = null;
var count__26934_27104 = (0);
var i__26935_27105 = (0);
while(true){
if((i__26935_27105 < count__26934_27104)){
var component_27110 = chunk__26933_27103.cljs$core$IIndexed$_nth$arity$2(null,i__26935_27105);
var component_ident_27111 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_27110) : com.fulcrologic.fulcro.components.get_ident.call(null,component_27110));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_27111,component_27110);


var G__27112 = seq__26931_27102;
var G__27113 = chunk__26933_27103;
var G__27114 = count__26934_27104;
var G__27115 = (i__26935_27105 + (1));
seq__26931_27102 = G__27112;
chunk__26933_27103 = G__27113;
count__26934_27104 = G__27114;
i__26935_27105 = G__27115;
continue;
} else {
var temp__5804__auto___27116__$1 = cljs.core.seq(seq__26931_27102);
if(temp__5804__auto___27116__$1){
var seq__26931_27117__$1 = temp__5804__auto___27116__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26931_27117__$1)){
var c__5568__auto___27118 = cljs.core.chunk_first(seq__26931_27117__$1);
var G__27119 = cljs.core.chunk_rest(seq__26931_27117__$1);
var G__27120 = c__5568__auto___27118;
var G__27121 = cljs.core.count(c__5568__auto___27118);
var G__27122 = (0);
seq__26931_27102 = G__27119;
chunk__26933_27103 = G__27120;
count__26934_27104 = G__27121;
i__26935_27105 = G__27122;
continue;
} else {
var component_27127 = cljs.core.first(seq__26931_27117__$1);
var component_ident_27128 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_27127) : com.fulcrologic.fulcro.components.get_ident.call(null,component_27127));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,component_ident_27128,component_27127);


var G__27133 = cljs.core.next(seq__26931_27117__$1);
var G__27134 = null;
var G__27135 = (0);
var G__27136 = (0);
seq__26931_27102 = G__27133;
chunk__26933_27103 = G__27134;
count__26934_27104 = G__27135;
i__26935_27105 = G__27136;
continue;
}
} else {
}
}
break;
}


var G__27137 = cljs.core.next(seq__26887__$1);
var G__27138 = null;
var G__27139 = (0);
var G__27140 = (0);
seq__26887 = G__27137;
chunk__26888 = G__27138;
count__26889 = G__27139;
i__26890 = G__27140;
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
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app,property_set){
if(cljs.core.seq(property_set)){
var map__26950 = app;
var map__26950__$1 = cljs.core.__destructure_map(map__26950);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26950__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__26951 = cljs.core.deref(runtime_atom);
var map__26951__$1 = cljs.core.__destructure_map(map__26951);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26951__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__26952 = indexes;
var map__26952__$1 = cljs.core.__destructure_map(map__26952);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26952__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26952__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26945_SHARP_,p2__26946_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__26945_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__26946_SHARP_) : class__GT_components.call(null,p2__26946_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app){
var map__26961 = app;
var map__26961__$1 = cljs.core.__destructure_map(map__26961);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26961__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26961__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__26962 = cljs.core.deref(runtime_atom);
var map__26962__$1 = cljs.core.__destructure_map(map__26962);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26962__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26962__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26962__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26962__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__26963 = indexes;
var map__26963__$1 = cljs.core.__destructure_map(map__26963);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26963__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26963__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26963__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26963__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__26966 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__26966__$1 = cljs.core.__destructure_map(map__26966);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26966__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26966__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,limited_props);
var seq__26968_27171 = cljs.core.seq(limited_to_render);
var chunk__26970_27172 = null;
var count__26971_27173 = (0);
var i__26972_27174 = (0);
while(true){
if((i__26972_27174 < count__26971_27173)){
var c_27180 = chunk__26970_27172.cljs$core$IIndexed$_nth$arity$2(null,i__26972_27174);
var ident_27181 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_27180) : com.fulcrologic.fulcro.components.get_ident.call(null,c_27180));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_27181,c_27180);


var G__27182 = seq__26968_27171;
var G__27183 = chunk__26970_27172;
var G__27184 = count__26971_27173;
var G__27185 = (i__26972_27174 + (1));
seq__26968_27171 = G__27182;
chunk__26970_27172 = G__27183;
count__26971_27173 = G__27184;
i__26972_27174 = G__27185;
continue;
} else {
var temp__5804__auto___27186 = cljs.core.seq(seq__26968_27171);
if(temp__5804__auto___27186){
var seq__26968_27187__$1 = temp__5804__auto___27186;
if(cljs.core.chunked_seq_QMARK_(seq__26968_27187__$1)){
var c__5568__auto___27188 = cljs.core.chunk_first(seq__26968_27187__$1);
var G__27189 = cljs.core.chunk_rest(seq__26968_27187__$1);
var G__27190 = c__5568__auto___27188;
var G__27191 = cljs.core.count(c__5568__auto___27188);
var G__27192 = (0);
seq__26968_27171 = G__27189;
chunk__26970_27172 = G__27190;
count__26971_27173 = G__27191;
i__26972_27174 = G__27192;
continue;
} else {
var c_27193 = cljs.core.first(seq__26968_27187__$1);
var ident_27194 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_27193) : com.fulcrologic.fulcro.components.get_ident.call(null,c_27193));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,ident_27194,c_27193);


var G__27195 = cljs.core.next(seq__26968_27187__$1);
var G__27196 = null;
var G__27197 = (0);
var G__27198 = (0);
seq__26968_27171 = G__27195;
chunk__26970_27172 = G__27196;
count__26971_27173 = G__27197;
i__26972_27174 = G__27198;
continue;
}
} else {
}
}
break;
}

var seq__26979 = cljs.core.seq(limited_idents);
var chunk__26980 = null;
var count__26981 = (0);
var i__26982 = (0);
while(true){
if((i__26982 < count__26981)){
var i = chunk__26980.cljs$core$IIndexed$_nth$arity$2(null,i__26982);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__27199 = seq__26979;
var G__27200 = chunk__26980;
var G__27201 = count__26981;
var G__27202 = (i__26982 + (1));
seq__26979 = G__27199;
chunk__26980 = G__27200;
count__26981 = G__27201;
i__26982 = G__27202;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26979);
if(temp__5804__auto__){
var seq__26979__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26979__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26979__$1);
var G__27203 = cljs.core.chunk_rest(seq__26979__$1);
var G__27204 = c__5568__auto__;
var G__27205 = cljs.core.count(c__5568__auto__);
var G__27206 = (0);
seq__26979 = G__27203;
chunk__26980 = G__27204;
count__26981 = G__27205;
i__26982 = G__27206;
continue;
} else {
var i = cljs.core.first(seq__26979__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i);


var G__27207 = cljs.core.next(seq__26979__$1);
var G__27208 = null;
var G__27209 = (0);
var G__27210 = (0);
seq__26979 = G__27207;
chunk__26980 = G__27208;
count__26981 = G__27209;
i__26982 = G__27210;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__5045__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__26990 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__26990__$1 = cljs.core.__destructure_map(map__26990);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26990__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26990__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__26993_27214 = cljs.core.seq(all_idents);
var chunk__26994_27215 = null;
var count__26995_27216 = (0);
var i__26996_27217 = (0);
while(true){
if((i__26996_27217 < count__26995_27216)){
var i_27218 = chunk__26994_27215.cljs$core$IIndexed$_nth$arity$2(null,i__26996_27217);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_27218);


var G__27221 = seq__26993_27214;
var G__27222 = chunk__26994_27215;
var G__27223 = count__26995_27216;
var G__27224 = (i__26996_27217 + (1));
seq__26993_27214 = G__27221;
chunk__26994_27215 = G__27222;
count__26995_27216 = G__27223;
i__26996_27217 = G__27224;
continue;
} else {
var temp__5804__auto___27225 = cljs.core.seq(seq__26993_27214);
if(temp__5804__auto___27225){
var seq__26993_27226__$1 = temp__5804__auto___27225;
if(cljs.core.chunked_seq_QMARK_(seq__26993_27226__$1)){
var c__5568__auto___27227 = cljs.core.chunk_first(seq__26993_27226__$1);
var G__27229 = cljs.core.chunk_rest(seq__26993_27226__$1);
var G__27230 = c__5568__auto___27227;
var G__27231 = cljs.core.count(c__5568__auto___27227);
var G__27232 = (0);
seq__26993_27214 = G__27229;
chunk__26994_27215 = G__27230;
count__26995_27216 = G__27231;
i__26996_27217 = G__27232;
continue;
} else {
var i_27233 = cljs.core.first(seq__26993_27226__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app,i_27233);


var G__27234 = cljs.core.next(seq__26993_27226__$1);
var G__27235 = null;
var G__27236 = (0);
var G__27237 = (0);
seq__26993_27214 = G__27234;
chunk__26994_27215 = G__27235;
count__26995_27216 = G__27236;
i__26996_27217 = G__27237;
continue;
}
} else {
}
}
break;
}

var seq__27002 = cljs.core.seq(extra_to_force);
var chunk__27003 = null;
var count__27004 = (0);
var i__27005 = (0);
while(true){
if((i__27005 < count__27004)){
var c = chunk__27003.cljs$core$IIndexed$_nth$arity$2(null,i__27005);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__27239 = seq__27002;
var G__27240 = chunk__27003;
var G__27241 = count__27004;
var G__27242 = (i__27005 + (1));
seq__27002 = G__27239;
chunk__27003 = G__27240;
count__27004 = G__27241;
i__27005 = G__27242;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27002);
if(temp__5804__auto__){
var seq__27002__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27002__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27002__$1);
var G__27243 = cljs.core.chunk_rest(seq__27002__$1);
var G__27244 = c__5568__auto__;
var G__27245 = cljs.core.count(c__5568__auto__);
var G__27246 = (0);
seq__27002 = G__27243;
chunk__27003 = G__27244;
count__27004 = G__27245;
i__27005 = G__27246;
continue;
} else {
var c = cljs.core.first(seq__27002__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__27247 = cljs.core.next(seq__27002__$1);
var G__27248 = null;
var G__27249 = (0);
var G__27250 = (0);
seq__27002 = G__27247;
chunk__27003 = G__27248;
count__27004 = G__27249;
i__27005 = G__27250;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__27015 = arguments.length;
switch (G__27015) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app,p__27019){
var map__27022 = p__27019;
var map__27022__$1 = cljs.core.__destructure_map(map__27022);
var options = map__27022__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27022__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27022__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__5045__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app);
}catch (e27025){var e = e27025;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-1138336222);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
