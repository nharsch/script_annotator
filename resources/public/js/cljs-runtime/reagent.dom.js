goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__25770 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__25771 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__25771);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__25772 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__25773 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__25773);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__25772);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__25770);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__25786 = arguments.length;
switch (G__25786) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__25792 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25792,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25792,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__25806_25837 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__25807_25838 = null;
var count__25808_25839 = (0);
var i__25809_25840 = (0);
while(true){
if((i__25809_25840 < count__25808_25839)){
var vec__25824_25841 = chunk__25807_25838.cljs$core$IIndexed$_nth$arity$2(null,i__25809_25840);
var container_25842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25824_25841,(0),null);
var comp_25843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25824_25841,(1),null);
reagent.dom.re_render_component(comp_25843,container_25842);


var G__25844 = seq__25806_25837;
var G__25845 = chunk__25807_25838;
var G__25846 = count__25808_25839;
var G__25847 = (i__25809_25840 + (1));
seq__25806_25837 = G__25844;
chunk__25807_25838 = G__25845;
count__25808_25839 = G__25846;
i__25809_25840 = G__25847;
continue;
} else {
var temp__5804__auto___25848 = cljs.core.seq(seq__25806_25837);
if(temp__5804__auto___25848){
var seq__25806_25849__$1 = temp__5804__auto___25848;
if(cljs.core.chunked_seq_QMARK_(seq__25806_25849__$1)){
var c__5568__auto___25850 = cljs.core.chunk_first(seq__25806_25849__$1);
var G__25851 = cljs.core.chunk_rest(seq__25806_25849__$1);
var G__25852 = c__5568__auto___25850;
var G__25853 = cljs.core.count(c__5568__auto___25850);
var G__25854 = (0);
seq__25806_25837 = G__25851;
chunk__25807_25838 = G__25852;
count__25808_25839 = G__25853;
i__25809_25840 = G__25854;
continue;
} else {
var vec__25832_25855 = cljs.core.first(seq__25806_25849__$1);
var container_25856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25832_25855,(0),null);
var comp_25857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25832_25855,(1),null);
reagent.dom.re_render_component(comp_25857,container_25856);


var G__25858 = cljs.core.next(seq__25806_25849__$1);
var G__25859 = null;
var G__25860 = (0);
var G__25861 = (0);
seq__25806_25837 = G__25858;
chunk__25807_25838 = G__25859;
count__25808_25839 = G__25860;
i__25809_25840 = G__25861;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
