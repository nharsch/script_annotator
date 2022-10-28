goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__24756__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__24756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24757__i = 0, G__24757__a = new Array(arguments.length -  0);
while (G__24757__i < G__24757__a.length) {G__24757__a[G__24757__i] = arguments[G__24757__i + 0]; ++G__24757__i;}
  args = new cljs.core.IndexedSeq(G__24757__a,0,null);
} 
return G__24756__delegate.call(this,args);};
G__24756.cljs$lang$maxFixedArity = 0;
G__24756.cljs$lang$applyTo = (function (arglist__24758){
var args = cljs.core.seq(arglist__24758);
return G__24756__delegate(args);
});
G__24756.cljs$core$IFn$_invoke$arity$variadic = G__24756__delegate;
return G__24756;
})()
);

(o.error = (function() { 
var G__24759__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__24759 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24760__i = 0, G__24760__a = new Array(arguments.length -  0);
while (G__24760__i < G__24760__a.length) {G__24760__a[G__24760__i] = arguments[G__24760__i + 0]; ++G__24760__i;}
  args = new cljs.core.IndexedSeq(G__24760__a,0,null);
} 
return G__24759__delegate.call(this,args);};
G__24759.cljs$lang$maxFixedArity = 0;
G__24759.cljs$lang$applyTo = (function (arglist__24761){
var args = cljs.core.seq(arglist__24761);
return G__24759__delegate(args);
});
G__24759.cljs$core$IFn$_invoke$arity$variadic = G__24759__delegate;
return G__24759;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
