goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24083){
var map__24084 = p__24083;
var map__24084__$1 = cljs.core.__destructure_map(map__24084);
var m = map__24084__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24084__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24084__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24085_24308 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24086_24309 = null;
var count__24087_24310 = (0);
var i__24088_24311 = (0);
while(true){
if((i__24088_24311 < count__24087_24310)){
var f_24312 = chunk__24086_24309.cljs$core$IIndexed$_nth$arity$2(null,i__24088_24311);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_24312], 0));


var G__24313 = seq__24085_24308;
var G__24314 = chunk__24086_24309;
var G__24315 = count__24087_24310;
var G__24316 = (i__24088_24311 + (1));
seq__24085_24308 = G__24313;
chunk__24086_24309 = G__24314;
count__24087_24310 = G__24315;
i__24088_24311 = G__24316;
continue;
} else {
var temp__5804__auto___24317 = cljs.core.seq(seq__24085_24308);
if(temp__5804__auto___24317){
var seq__24085_24318__$1 = temp__5804__auto___24317;
if(cljs.core.chunked_seq_QMARK_(seq__24085_24318__$1)){
var c__5568__auto___24319 = cljs.core.chunk_first(seq__24085_24318__$1);
var G__24320 = cljs.core.chunk_rest(seq__24085_24318__$1);
var G__24321 = c__5568__auto___24319;
var G__24322 = cljs.core.count(c__5568__auto___24319);
var G__24323 = (0);
seq__24085_24308 = G__24320;
chunk__24086_24309 = G__24321;
count__24087_24310 = G__24322;
i__24088_24311 = G__24323;
continue;
} else {
var f_24324 = cljs.core.first(seq__24085_24318__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_24324], 0));


var G__24325 = cljs.core.next(seq__24085_24318__$1);
var G__24326 = null;
var G__24327 = (0);
var G__24328 = (0);
seq__24085_24308 = G__24325;
chunk__24086_24309 = G__24326;
count__24087_24310 = G__24327;
i__24088_24311 = G__24328;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24329 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_24329], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_24329)))?cljs.core.second(arglists_24329):arglists_24329)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24093_24334 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24094_24335 = null;
var count__24095_24336 = (0);
var i__24096_24337 = (0);
while(true){
if((i__24096_24337 < count__24095_24336)){
var vec__24109_24338 = chunk__24094_24335.cljs$core$IIndexed$_nth$arity$2(null,i__24096_24337);
var name_24339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24109_24338,(0),null);
var map__24112_24340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24109_24338,(1),null);
var map__24112_24341__$1 = cljs.core.__destructure_map(map__24112_24340);
var doc_24342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24112_24341__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24112_24341__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_24339], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_24343], 0));

if(cljs.core.truth_(doc_24342)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_24342], 0));
} else {
}


var G__24345 = seq__24093_24334;
var G__24346 = chunk__24094_24335;
var G__24347 = count__24095_24336;
var G__24348 = (i__24096_24337 + (1));
seq__24093_24334 = G__24345;
chunk__24094_24335 = G__24346;
count__24095_24336 = G__24347;
i__24096_24337 = G__24348;
continue;
} else {
var temp__5804__auto___24349 = cljs.core.seq(seq__24093_24334);
if(temp__5804__auto___24349){
var seq__24093_24350__$1 = temp__5804__auto___24349;
if(cljs.core.chunked_seq_QMARK_(seq__24093_24350__$1)){
var c__5568__auto___24351 = cljs.core.chunk_first(seq__24093_24350__$1);
var G__24352 = cljs.core.chunk_rest(seq__24093_24350__$1);
var G__24353 = c__5568__auto___24351;
var G__24354 = cljs.core.count(c__5568__auto___24351);
var G__24355 = (0);
seq__24093_24334 = G__24352;
chunk__24094_24335 = G__24353;
count__24095_24336 = G__24354;
i__24096_24337 = G__24355;
continue;
} else {
var vec__24114_24356 = cljs.core.first(seq__24093_24350__$1);
var name_24357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24114_24356,(0),null);
var map__24117_24358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24114_24356,(1),null);
var map__24117_24359__$1 = cljs.core.__destructure_map(map__24117_24358);
var doc_24360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24117_24359__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24117_24359__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_24357], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_24361], 0));

if(cljs.core.truth_(doc_24360)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_24360], 0));
} else {
}


var G__24362 = cljs.core.next(seq__24093_24350__$1);
var G__24363 = null;
var G__24364 = (0);
var G__24365 = (0);
seq__24093_24334 = G__24362;
chunk__24094_24335 = G__24363;
count__24095_24336 = G__24364;
i__24096_24337 = G__24365;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__24120 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24122 = null;
var count__24123 = (0);
var i__24124 = (0);
while(true){
if((i__24124 < count__24123)){
var role = chunk__24122.cljs$core$IIndexed$_nth$arity$2(null,i__24124);
var temp__5804__auto___24367__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___24367__$1)){
var spec_24368 = temp__5804__auto___24367__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24368)], 0));
} else {
}


var G__24369 = seq__24120;
var G__24370 = chunk__24122;
var G__24371 = count__24123;
var G__24372 = (i__24124 + (1));
seq__24120 = G__24369;
chunk__24122 = G__24370;
count__24123 = G__24371;
i__24124 = G__24372;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__24120);
if(temp__5804__auto____$1){
var seq__24120__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__24120__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24120__$1);
var G__24373 = cljs.core.chunk_rest(seq__24120__$1);
var G__24374 = c__5568__auto__;
var G__24375 = cljs.core.count(c__5568__auto__);
var G__24376 = (0);
seq__24120 = G__24373;
chunk__24122 = G__24374;
count__24123 = G__24375;
i__24124 = G__24376;
continue;
} else {
var role = cljs.core.first(seq__24120__$1);
var temp__5804__auto___24377__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___24377__$2)){
var spec_24378 = temp__5804__auto___24377__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24378)], 0));
} else {
}


var G__24380 = cljs.core.next(seq__24120__$1);
var G__24381 = null;
var G__24382 = (0);
var G__24383 = (0);
seq__24120 = G__24380;
chunk__24122 = G__24381;
count__24123 = G__24382;
i__24124 = G__24383;
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
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__24387 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__24388 = cljs.core.ex_cause(t);
via = G__24387;
t = G__24388;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__24151 = datafied_throwable;
var map__24151__$1 = cljs.core.__destructure_map(map__24151);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24151__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24151__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24151__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__24152 = cljs.core.last(via);
var map__24152__$1 = cljs.core.__destructure_map(map__24152);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24152__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24152__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24152__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__24153 = data;
var map__24153__$1 = cljs.core.__destructure_map(map__24153);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24153__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24153__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24153__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__24154 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__24154__$1 = cljs.core.__destructure_map(map__24154);
var top_data = map__24154__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24154__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__24164 = phase;
var G__24164__$1 = (((G__24164 instanceof cljs.core.Keyword))?G__24164.fqn:null);
switch (G__24164__$1) {
case "read-source":
var map__24169 = data;
var map__24169__$1 = cljs.core.__destructure_map(map__24169);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24169__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24169__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__24173 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__24173__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24173,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24173);
var G__24173__$2 = (cljs.core.truth_((function (){var fexpr__24175 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24175.cljs$core$IFn$_invoke$arity$1 ? fexpr__24175.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24175.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24173__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24173__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24173__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24173__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24180 = top_data;
var G__24180__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24180,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24180);
var G__24180__$2 = (cljs.core.truth_((function (){var fexpr__24189 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24189.cljs$core$IFn$_invoke$arity$1 ? fexpr__24189.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24189.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24180__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24180__$1);
var G__24180__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24180__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24180__$2);
var G__24180__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24180__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24180__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24180__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24180__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24202 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24202,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24202,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24202,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24202,(3),null);
var G__24208 = top_data;
var G__24208__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24208,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__24208);
var G__24208__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24208__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__24208__$1);
var G__24208__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24208__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24208__$2);
var G__24208__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24208__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24208__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24208__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24208__$4;
}

break;
case "execution":
var vec__24222 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24222,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24222,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24222,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24222,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__24142_SHARP_){
var or__5045__auto__ = (p1__24142_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__24232 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24232.cljs$core$IFn$_invoke$arity$1 ? fexpr__24232.cljs$core$IFn$_invoke$arity$1(p1__24142_SHARP_) : fexpr__24232.call(null,p1__24142_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__24233 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__24233__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24233,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__24233);
var G__24233__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24233__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24233__$1);
var G__24233__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24233__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24233__$2);
var G__24233__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24233__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__24233__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24233__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24233__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24164__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24263){
var map__24264 = p__24263;
var map__24264__$1 = cljs.core.__destructure_map(map__24264);
var triage_data = map__24264__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24264__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24264__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24264__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24264__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24264__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24264__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24264__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24264__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__24267 = phase;
var G__24267__$1 = (((G__24267 instanceof cljs.core.Keyword))?G__24267.fqn:null);
switch (G__24267__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__24268 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__24269 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24270 = loc;
var G__24271 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24272_24404 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24273_24405 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24274_24406 = true;
var _STAR_print_fn_STAR__temp_val__24275_24407 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24274_24406);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24275_24407);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24261_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24261_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24273_24405);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24272_24404);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24268,G__24269,G__24270,G__24271) : format.call(null,G__24268,G__24269,G__24270,G__24271));

break;
case "macroexpansion":
var G__24276 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__24277 = cause_type;
var G__24278 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24279 = loc;
var G__24280 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24276,G__24277,G__24278,G__24279,G__24280) : format.call(null,G__24276,G__24277,G__24278,G__24279,G__24280));

break;
case "compile-syntax-check":
var G__24282 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__24283 = cause_type;
var G__24284 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24285 = loc;
var G__24286 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24282,G__24283,G__24284,G__24285,G__24286) : format.call(null,G__24282,G__24283,G__24284,G__24285,G__24286));

break;
case "compilation":
var G__24287 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__24288 = cause_type;
var G__24289 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24290 = loc;
var G__24291 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24287,G__24288,G__24289,G__24290,G__24291) : format.call(null,G__24287,G__24288,G__24289,G__24290,G__24291));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__24292 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__24293 = symbol;
var G__24294 = loc;
var G__24295 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24296_24409 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24297_24410 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24298_24411 = true;
var _STAR_print_fn_STAR__temp_val__24299_24412 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24298_24411);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24299_24412);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24262_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24262_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24297_24410);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24296_24409);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24292,G__24293,G__24294,G__24295) : format.call(null,G__24292,G__24293,G__24294,G__24295));
} else {
var G__24301 = "Execution error%s at %s(%s).\n%s\n";
var G__24302 = cause_type;
var G__24303 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24304 = loc;
var G__24305 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24301,G__24302,G__24303,G__24304,G__24305) : format.call(null,G__24301,G__24302,G__24303,G__24304,G__24305));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24267__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
