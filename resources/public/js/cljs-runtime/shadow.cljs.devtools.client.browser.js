goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25329 = arguments.length;
var i__5770__auto___25330 = (0);
while(true){
if((i__5770__auto___25330 < len__5769__auto___25329)){
args__5775__auto__.push((arguments[i__5770__auto___25330]));

var G__25331 = (i__5770__auto___25330 + (1));
i__5770__auto___25330 = G__25331;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq24891){
var G__24892 = cljs.core.first(seq24891);
var seq24891__$1 = cljs.core.next(seq24891);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24892,seq24891__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__24898 = cljs.core.seq(sources);
var chunk__24899 = null;
var count__24900 = (0);
var i__24901 = (0);
while(true){
if((i__24901 < count__24900)){
var map__24913 = chunk__24899.cljs$core$IIndexed$_nth$arity$2(null,i__24901);
var map__24913__$1 = cljs.core.__destructure_map(map__24913);
var src = map__24913__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24913__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24913__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24913__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24913__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e24915){var e_25332 = e24915;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_25332);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_25332.message)].join('')));
}

var G__25333 = seq__24898;
var G__25334 = chunk__24899;
var G__25335 = count__24900;
var G__25336 = (i__24901 + (1));
seq__24898 = G__25333;
chunk__24899 = G__25334;
count__24900 = G__25335;
i__24901 = G__25336;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24898);
if(temp__5804__auto__){
var seq__24898__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24898__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24898__$1);
var G__25337 = cljs.core.chunk_rest(seq__24898__$1);
var G__25338 = c__5568__auto__;
var G__25339 = cljs.core.count(c__5568__auto__);
var G__25340 = (0);
seq__24898 = G__25337;
chunk__24899 = G__25338;
count__24900 = G__25339;
i__24901 = G__25340;
continue;
} else {
var map__24919 = cljs.core.first(seq__24898__$1);
var map__24919__$1 = cljs.core.__destructure_map(map__24919);
var src = map__24919__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24919__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24919__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24919__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24919__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e24920){var e_25341 = e24920;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_25341);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_25341.message)].join('')));
}

var G__25342 = cljs.core.next(seq__24898__$1);
var G__25343 = null;
var G__25344 = (0);
var G__25345 = (0);
seq__24898 = G__25342;
chunk__24899 = G__25343;
count__24900 = G__25344;
i__24901 = G__25345;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__24921 = cljs.core.seq(js_requires);
var chunk__24922 = null;
var count__24923 = (0);
var i__24924 = (0);
while(true){
if((i__24924 < count__24923)){
var js_ns = chunk__24922.cljs$core$IIndexed$_nth$arity$2(null,i__24924);
var require_str_25346 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_25346);


var G__25347 = seq__24921;
var G__25348 = chunk__24922;
var G__25349 = count__24923;
var G__25350 = (i__24924 + (1));
seq__24921 = G__25347;
chunk__24922 = G__25348;
count__24923 = G__25349;
i__24924 = G__25350;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24921);
if(temp__5804__auto__){
var seq__24921__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24921__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24921__$1);
var G__25351 = cljs.core.chunk_rest(seq__24921__$1);
var G__25352 = c__5568__auto__;
var G__25353 = cljs.core.count(c__5568__auto__);
var G__25354 = (0);
seq__24921 = G__25351;
chunk__24922 = G__25352;
count__24923 = G__25353;
i__24924 = G__25354;
continue;
} else {
var js_ns = cljs.core.first(seq__24921__$1);
var require_str_25355 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_25355);


var G__25356 = cljs.core.next(seq__24921__$1);
var G__25357 = null;
var G__25358 = (0);
var G__25359 = (0);
seq__24921 = G__25356;
chunk__24922 = G__25357;
count__24923 = G__25358;
i__24924 = G__25359;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__24928){
var map__24929 = p__24928;
var map__24929__$1 = cljs.core.__destructure_map(map__24929);
var msg = map__24929__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24929__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24929__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24932(s__24933){
return (new cljs.core.LazySeq(null,(function (){
var s__24933__$1 = s__24933;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24933__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__24938 = cljs.core.first(xs__6360__auto__);
var map__24938__$1 = cljs.core.__destructure_map(map__24938);
var src = map__24938__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24938__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24938__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__24933__$1,map__24938,map__24938__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24929,map__24929__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24932_$_iter__24934(s__24935){
return (new cljs.core.LazySeq(null,((function (s__24933__$1,map__24938,map__24938__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24929,map__24929__$1,msg,info,reload_info){
return (function (){
var s__24935__$1 = s__24935;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24935__$1);
if(temp__5804__auto____$1){
var s__24935__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24935__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24935__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24937 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24936 = (0);
while(true){
if((i__24936 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__24936);
cljs.core.chunk_append(b__24937,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__25361 = (i__24936 + (1));
i__24936 = G__25361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24937),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24932_$_iter__24934(cljs.core.chunk_rest(s__24935__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24937),null);
}
} else {
var warning = cljs.core.first(s__24935__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24932_$_iter__24934(cljs.core.rest(s__24935__$2)));
}
} else {
return null;
}
break;
}
});})(s__24933__$1,map__24938,map__24938__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24929,map__24929__$1,msg,info,reload_info))
,null,null));
});})(s__24933__$1,map__24938,map__24938__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__24929,map__24929__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24932(cljs.core.rest(s__24933__$1)));
} else {
var G__25362 = cljs.core.rest(s__24933__$1);
s__24933__$1 = G__25362;
continue;
}
} else {
var G__25363 = cljs.core.rest(s__24933__$1);
s__24933__$1 = G__25363;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__24940_25364 = cljs.core.seq(warnings);
var chunk__24941_25365 = null;
var count__24942_25366 = (0);
var i__24943_25367 = (0);
while(true){
if((i__24943_25367 < count__24942_25366)){
var map__24946_25368 = chunk__24941_25365.cljs$core$IIndexed$_nth$arity$2(null,i__24943_25367);
var map__24946_25369__$1 = cljs.core.__destructure_map(map__24946_25368);
var w_25370 = map__24946_25369__$1;
var msg_25371__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24946_25369__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_25372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24946_25369__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_25373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24946_25369__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_25374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24946_25369__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_25374)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_25372),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_25373),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_25371__$1)].join(''));


var G__25377 = seq__24940_25364;
var G__25378 = chunk__24941_25365;
var G__25379 = count__24942_25366;
var G__25380 = (i__24943_25367 + (1));
seq__24940_25364 = G__25377;
chunk__24941_25365 = G__25378;
count__24942_25366 = G__25379;
i__24943_25367 = G__25380;
continue;
} else {
var temp__5804__auto___25381 = cljs.core.seq(seq__24940_25364);
if(temp__5804__auto___25381){
var seq__24940_25383__$1 = temp__5804__auto___25381;
if(cljs.core.chunked_seq_QMARK_(seq__24940_25383__$1)){
var c__5568__auto___25384 = cljs.core.chunk_first(seq__24940_25383__$1);
var G__25385 = cljs.core.chunk_rest(seq__24940_25383__$1);
var G__25386 = c__5568__auto___25384;
var G__25387 = cljs.core.count(c__5568__auto___25384);
var G__25388 = (0);
seq__24940_25364 = G__25385;
chunk__24941_25365 = G__25386;
count__24942_25366 = G__25387;
i__24943_25367 = G__25388;
continue;
} else {
var map__24947_25389 = cljs.core.first(seq__24940_25383__$1);
var map__24947_25390__$1 = cljs.core.__destructure_map(map__24947_25389);
var w_25391 = map__24947_25390__$1;
var msg_25392__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24947_25390__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_25393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24947_25390__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_25394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24947_25390__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_25395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24947_25390__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_25395)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_25393),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_25394),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_25392__$1)].join(''));


var G__25397 = cljs.core.next(seq__24940_25383__$1);
var G__25398 = null;
var G__25399 = (0);
var G__25400 = (0);
seq__24940_25364 = G__25397;
chunk__24941_25365 = G__25398;
count__24942_25366 = G__25399;
i__24943_25367 = G__25400;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__24927_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__24927_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__24948){
var map__24949 = p__24948;
var map__24949__$1 = cljs.core.__destructure_map(map__24949);
var msg = map__24949__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24949__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24949__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__24950 = cljs.core.seq(updates);
var chunk__24952 = null;
var count__24953 = (0);
var i__24954 = (0);
while(true){
if((i__24954 < count__24953)){
var path = chunk__24952.cljs$core$IIndexed$_nth$arity$2(null,i__24954);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__25156_25402 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__25160_25403 = null;
var count__25161_25404 = (0);
var i__25162_25405 = (0);
while(true){
if((i__25162_25405 < count__25161_25404)){
var node_25406 = chunk__25160_25403.cljs$core$IIndexed$_nth$arity$2(null,i__25162_25405);
if(cljs.core.not(node_25406.shadow$old)){
var path_match_25407 = shadow.cljs.devtools.client.browser.match_paths(node_25406.getAttribute("href"),path);
if(cljs.core.truth_(path_match_25407)){
var new_link_25408 = (function (){var G__25201 = node_25406.cloneNode(true);
G__25201.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_25407),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__25201;
})();
(node_25406.shadow$old = true);

(new_link_25408.onload = ((function (seq__25156_25402,chunk__25160_25403,count__25161_25404,i__25162_25405,seq__24950,chunk__24952,count__24953,i__24954,new_link_25408,path_match_25407,node_25406,path,map__24949,map__24949__$1,msg,updates,reload_info){
return (function (e){
var seq__25202_25409 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__25204_25410 = null;
var count__25205_25411 = (0);
var i__25206_25412 = (0);
while(true){
if((i__25206_25412 < count__25205_25411)){
var map__25211_25413 = chunk__25204_25410.cljs$core$IIndexed$_nth$arity$2(null,i__25206_25412);
var map__25211_25414__$1 = cljs.core.__destructure_map(map__25211_25413);
var task_25415 = map__25211_25414__$1;
var fn_str_25416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25211_25414__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25211_25414__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25418 = goog.getObjectByName(fn_str_25416,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25417)].join(''));

(fn_obj_25418.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25418.cljs$core$IFn$_invoke$arity$2(path,new_link_25408) : fn_obj_25418.call(null,path,new_link_25408));


var G__25419 = seq__25202_25409;
var G__25420 = chunk__25204_25410;
var G__25421 = count__25205_25411;
var G__25422 = (i__25206_25412 + (1));
seq__25202_25409 = G__25419;
chunk__25204_25410 = G__25420;
count__25205_25411 = G__25421;
i__25206_25412 = G__25422;
continue;
} else {
var temp__5804__auto___25424 = cljs.core.seq(seq__25202_25409);
if(temp__5804__auto___25424){
var seq__25202_25425__$1 = temp__5804__auto___25424;
if(cljs.core.chunked_seq_QMARK_(seq__25202_25425__$1)){
var c__5568__auto___25428 = cljs.core.chunk_first(seq__25202_25425__$1);
var G__25429 = cljs.core.chunk_rest(seq__25202_25425__$1);
var G__25430 = c__5568__auto___25428;
var G__25431 = cljs.core.count(c__5568__auto___25428);
var G__25432 = (0);
seq__25202_25409 = G__25429;
chunk__25204_25410 = G__25430;
count__25205_25411 = G__25431;
i__25206_25412 = G__25432;
continue;
} else {
var map__25212_25434 = cljs.core.first(seq__25202_25425__$1);
var map__25212_25435__$1 = cljs.core.__destructure_map(map__25212_25434);
var task_25436 = map__25212_25435__$1;
var fn_str_25437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25212_25435__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25212_25435__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25439 = goog.getObjectByName(fn_str_25437,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25438)].join(''));

(fn_obj_25439.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25439.cljs$core$IFn$_invoke$arity$2(path,new_link_25408) : fn_obj_25439.call(null,path,new_link_25408));


var G__25440 = cljs.core.next(seq__25202_25425__$1);
var G__25441 = null;
var G__25442 = (0);
var G__25443 = (0);
seq__25202_25409 = G__25440;
chunk__25204_25410 = G__25441;
count__25205_25411 = G__25442;
i__25206_25412 = G__25443;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_25406);
});})(seq__25156_25402,chunk__25160_25403,count__25161_25404,i__25162_25405,seq__24950,chunk__24952,count__24953,i__24954,new_link_25408,path_match_25407,node_25406,path,map__24949,map__24949__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_25407], 0));

goog.dom.insertSiblingAfter(new_link_25408,node_25406);


var G__25444 = seq__25156_25402;
var G__25445 = chunk__25160_25403;
var G__25446 = count__25161_25404;
var G__25447 = (i__25162_25405 + (1));
seq__25156_25402 = G__25444;
chunk__25160_25403 = G__25445;
count__25161_25404 = G__25446;
i__25162_25405 = G__25447;
continue;
} else {
var G__25448 = seq__25156_25402;
var G__25449 = chunk__25160_25403;
var G__25450 = count__25161_25404;
var G__25451 = (i__25162_25405 + (1));
seq__25156_25402 = G__25448;
chunk__25160_25403 = G__25449;
count__25161_25404 = G__25450;
i__25162_25405 = G__25451;
continue;
}
} else {
var G__25452 = seq__25156_25402;
var G__25453 = chunk__25160_25403;
var G__25454 = count__25161_25404;
var G__25455 = (i__25162_25405 + (1));
seq__25156_25402 = G__25452;
chunk__25160_25403 = G__25453;
count__25161_25404 = G__25454;
i__25162_25405 = G__25455;
continue;
}
} else {
var temp__5804__auto___25456 = cljs.core.seq(seq__25156_25402);
if(temp__5804__auto___25456){
var seq__25156_25459__$1 = temp__5804__auto___25456;
if(cljs.core.chunked_seq_QMARK_(seq__25156_25459__$1)){
var c__5568__auto___25460 = cljs.core.chunk_first(seq__25156_25459__$1);
var G__25461 = cljs.core.chunk_rest(seq__25156_25459__$1);
var G__25462 = c__5568__auto___25460;
var G__25463 = cljs.core.count(c__5568__auto___25460);
var G__25464 = (0);
seq__25156_25402 = G__25461;
chunk__25160_25403 = G__25462;
count__25161_25404 = G__25463;
i__25162_25405 = G__25464;
continue;
} else {
var node_25465 = cljs.core.first(seq__25156_25459__$1);
if(cljs.core.not(node_25465.shadow$old)){
var path_match_25466 = shadow.cljs.devtools.client.browser.match_paths(node_25465.getAttribute("href"),path);
if(cljs.core.truth_(path_match_25466)){
var new_link_25468 = (function (){var G__25214 = node_25465.cloneNode(true);
G__25214.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_25466),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__25214;
})();
(node_25465.shadow$old = true);

(new_link_25468.onload = ((function (seq__25156_25402,chunk__25160_25403,count__25161_25404,i__25162_25405,seq__24950,chunk__24952,count__24953,i__24954,new_link_25468,path_match_25466,node_25465,seq__25156_25459__$1,temp__5804__auto___25456,path,map__24949,map__24949__$1,msg,updates,reload_info){
return (function (e){
var seq__25215_25469 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__25217_25470 = null;
var count__25218_25471 = (0);
var i__25219_25472 = (0);
while(true){
if((i__25219_25472 < count__25218_25471)){
var map__25223_25473 = chunk__25217_25470.cljs$core$IIndexed$_nth$arity$2(null,i__25219_25472);
var map__25223_25474__$1 = cljs.core.__destructure_map(map__25223_25473);
var task_25475 = map__25223_25474__$1;
var fn_str_25476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25223_25474__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25223_25474__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25478 = goog.getObjectByName(fn_str_25476,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25477)].join(''));

(fn_obj_25478.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25478.cljs$core$IFn$_invoke$arity$2(path,new_link_25468) : fn_obj_25478.call(null,path,new_link_25468));


var G__25479 = seq__25215_25469;
var G__25480 = chunk__25217_25470;
var G__25481 = count__25218_25471;
var G__25482 = (i__25219_25472 + (1));
seq__25215_25469 = G__25479;
chunk__25217_25470 = G__25480;
count__25218_25471 = G__25481;
i__25219_25472 = G__25482;
continue;
} else {
var temp__5804__auto___25483__$1 = cljs.core.seq(seq__25215_25469);
if(temp__5804__auto___25483__$1){
var seq__25215_25484__$1 = temp__5804__auto___25483__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25215_25484__$1)){
var c__5568__auto___25485 = cljs.core.chunk_first(seq__25215_25484__$1);
var G__25486 = cljs.core.chunk_rest(seq__25215_25484__$1);
var G__25487 = c__5568__auto___25485;
var G__25488 = cljs.core.count(c__5568__auto___25485);
var G__25489 = (0);
seq__25215_25469 = G__25486;
chunk__25217_25470 = G__25487;
count__25218_25471 = G__25488;
i__25219_25472 = G__25489;
continue;
} else {
var map__25224_25490 = cljs.core.first(seq__25215_25484__$1);
var map__25224_25491__$1 = cljs.core.__destructure_map(map__25224_25490);
var task_25492 = map__25224_25491__$1;
var fn_str_25493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25224_25491__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25224_25491__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25495 = goog.getObjectByName(fn_str_25493,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25494)].join(''));

(fn_obj_25495.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25495.cljs$core$IFn$_invoke$arity$2(path,new_link_25468) : fn_obj_25495.call(null,path,new_link_25468));


var G__25496 = cljs.core.next(seq__25215_25484__$1);
var G__25497 = null;
var G__25498 = (0);
var G__25499 = (0);
seq__25215_25469 = G__25496;
chunk__25217_25470 = G__25497;
count__25218_25471 = G__25498;
i__25219_25472 = G__25499;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_25465);
});})(seq__25156_25402,chunk__25160_25403,count__25161_25404,i__25162_25405,seq__24950,chunk__24952,count__24953,i__24954,new_link_25468,path_match_25466,node_25465,seq__25156_25459__$1,temp__5804__auto___25456,path,map__24949,map__24949__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_25466], 0));

goog.dom.insertSiblingAfter(new_link_25468,node_25465);


var G__25501 = cljs.core.next(seq__25156_25459__$1);
var G__25502 = null;
var G__25503 = (0);
var G__25504 = (0);
seq__25156_25402 = G__25501;
chunk__25160_25403 = G__25502;
count__25161_25404 = G__25503;
i__25162_25405 = G__25504;
continue;
} else {
var G__25505 = cljs.core.next(seq__25156_25459__$1);
var G__25506 = null;
var G__25507 = (0);
var G__25508 = (0);
seq__25156_25402 = G__25505;
chunk__25160_25403 = G__25506;
count__25161_25404 = G__25507;
i__25162_25405 = G__25508;
continue;
}
} else {
var G__25510 = cljs.core.next(seq__25156_25459__$1);
var G__25511 = null;
var G__25512 = (0);
var G__25513 = (0);
seq__25156_25402 = G__25510;
chunk__25160_25403 = G__25511;
count__25161_25404 = G__25512;
i__25162_25405 = G__25513;
continue;
}
}
} else {
}
}
break;
}


var G__25514 = seq__24950;
var G__25515 = chunk__24952;
var G__25516 = count__24953;
var G__25517 = (i__24954 + (1));
seq__24950 = G__25514;
chunk__24952 = G__25515;
count__24953 = G__25516;
i__24954 = G__25517;
continue;
} else {
var G__25518 = seq__24950;
var G__25519 = chunk__24952;
var G__25520 = count__24953;
var G__25521 = (i__24954 + (1));
seq__24950 = G__25518;
chunk__24952 = G__25519;
count__24953 = G__25520;
i__24954 = G__25521;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24950);
if(temp__5804__auto__){
var seq__24950__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24950__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24950__$1);
var G__25524 = cljs.core.chunk_rest(seq__24950__$1);
var G__25525 = c__5568__auto__;
var G__25526 = cljs.core.count(c__5568__auto__);
var G__25527 = (0);
seq__24950 = G__25524;
chunk__24952 = G__25525;
count__24953 = G__25526;
i__24954 = G__25527;
continue;
} else {
var path = cljs.core.first(seq__24950__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__25225_25529 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__25229_25530 = null;
var count__25230_25531 = (0);
var i__25231_25532 = (0);
while(true){
if((i__25231_25532 < count__25230_25531)){
var node_25533 = chunk__25229_25530.cljs$core$IIndexed$_nth$arity$2(null,i__25231_25532);
if(cljs.core.not(node_25533.shadow$old)){
var path_match_25534 = shadow.cljs.devtools.client.browser.match_paths(node_25533.getAttribute("href"),path);
if(cljs.core.truth_(path_match_25534)){
var new_link_25535 = (function (){var G__25268 = node_25533.cloneNode(true);
G__25268.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_25534),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__25268;
})();
(node_25533.shadow$old = true);

(new_link_25535.onload = ((function (seq__25225_25529,chunk__25229_25530,count__25230_25531,i__25231_25532,seq__24950,chunk__24952,count__24953,i__24954,new_link_25535,path_match_25534,node_25533,path,seq__24950__$1,temp__5804__auto__,map__24949,map__24949__$1,msg,updates,reload_info){
return (function (e){
var seq__25269_25536 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__25271_25537 = null;
var count__25272_25538 = (0);
var i__25273_25539 = (0);
while(true){
if((i__25273_25539 < count__25272_25538)){
var map__25279_25541 = chunk__25271_25537.cljs$core$IIndexed$_nth$arity$2(null,i__25273_25539);
var map__25279_25542__$1 = cljs.core.__destructure_map(map__25279_25541);
var task_25543 = map__25279_25542__$1;
var fn_str_25544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25279_25542__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25279_25542__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25550 = goog.getObjectByName(fn_str_25544,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25545)].join(''));

(fn_obj_25550.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25550.cljs$core$IFn$_invoke$arity$2(path,new_link_25535) : fn_obj_25550.call(null,path,new_link_25535));


var G__25551 = seq__25269_25536;
var G__25552 = chunk__25271_25537;
var G__25553 = count__25272_25538;
var G__25554 = (i__25273_25539 + (1));
seq__25269_25536 = G__25551;
chunk__25271_25537 = G__25552;
count__25272_25538 = G__25553;
i__25273_25539 = G__25554;
continue;
} else {
var temp__5804__auto___25555__$1 = cljs.core.seq(seq__25269_25536);
if(temp__5804__auto___25555__$1){
var seq__25269_25556__$1 = temp__5804__auto___25555__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25269_25556__$1)){
var c__5568__auto___25557 = cljs.core.chunk_first(seq__25269_25556__$1);
var G__25558 = cljs.core.chunk_rest(seq__25269_25556__$1);
var G__25559 = c__5568__auto___25557;
var G__25560 = cljs.core.count(c__5568__auto___25557);
var G__25561 = (0);
seq__25269_25536 = G__25558;
chunk__25271_25537 = G__25559;
count__25272_25538 = G__25560;
i__25273_25539 = G__25561;
continue;
} else {
var map__25284_25562 = cljs.core.first(seq__25269_25556__$1);
var map__25284_25563__$1 = cljs.core.__destructure_map(map__25284_25562);
var task_25564 = map__25284_25563__$1;
var fn_str_25565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25284_25563__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25284_25563__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25567 = goog.getObjectByName(fn_str_25565,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25566)].join(''));

(fn_obj_25567.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25567.cljs$core$IFn$_invoke$arity$2(path,new_link_25535) : fn_obj_25567.call(null,path,new_link_25535));


var G__25568 = cljs.core.next(seq__25269_25556__$1);
var G__25569 = null;
var G__25570 = (0);
var G__25571 = (0);
seq__25269_25536 = G__25568;
chunk__25271_25537 = G__25569;
count__25272_25538 = G__25570;
i__25273_25539 = G__25571;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_25533);
});})(seq__25225_25529,chunk__25229_25530,count__25230_25531,i__25231_25532,seq__24950,chunk__24952,count__24953,i__24954,new_link_25535,path_match_25534,node_25533,path,seq__24950__$1,temp__5804__auto__,map__24949,map__24949__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_25534], 0));

goog.dom.insertSiblingAfter(new_link_25535,node_25533);


var G__25572 = seq__25225_25529;
var G__25573 = chunk__25229_25530;
var G__25574 = count__25230_25531;
var G__25575 = (i__25231_25532 + (1));
seq__25225_25529 = G__25572;
chunk__25229_25530 = G__25573;
count__25230_25531 = G__25574;
i__25231_25532 = G__25575;
continue;
} else {
var G__25576 = seq__25225_25529;
var G__25577 = chunk__25229_25530;
var G__25578 = count__25230_25531;
var G__25579 = (i__25231_25532 + (1));
seq__25225_25529 = G__25576;
chunk__25229_25530 = G__25577;
count__25230_25531 = G__25578;
i__25231_25532 = G__25579;
continue;
}
} else {
var G__25580 = seq__25225_25529;
var G__25581 = chunk__25229_25530;
var G__25582 = count__25230_25531;
var G__25583 = (i__25231_25532 + (1));
seq__25225_25529 = G__25580;
chunk__25229_25530 = G__25581;
count__25230_25531 = G__25582;
i__25231_25532 = G__25583;
continue;
}
} else {
var temp__5804__auto___25584__$1 = cljs.core.seq(seq__25225_25529);
if(temp__5804__auto___25584__$1){
var seq__25225_25586__$1 = temp__5804__auto___25584__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25225_25586__$1)){
var c__5568__auto___25587 = cljs.core.chunk_first(seq__25225_25586__$1);
var G__25588 = cljs.core.chunk_rest(seq__25225_25586__$1);
var G__25589 = c__5568__auto___25587;
var G__25590 = cljs.core.count(c__5568__auto___25587);
var G__25591 = (0);
seq__25225_25529 = G__25588;
chunk__25229_25530 = G__25589;
count__25230_25531 = G__25590;
i__25231_25532 = G__25591;
continue;
} else {
var node_25592 = cljs.core.first(seq__25225_25586__$1);
if(cljs.core.not(node_25592.shadow$old)){
var path_match_25593 = shadow.cljs.devtools.client.browser.match_paths(node_25592.getAttribute("href"),path);
if(cljs.core.truth_(path_match_25593)){
var new_link_25594 = (function (){var G__25286 = node_25592.cloneNode(true);
G__25286.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_25593),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__25286;
})();
(node_25592.shadow$old = true);

(new_link_25594.onload = ((function (seq__25225_25529,chunk__25229_25530,count__25230_25531,i__25231_25532,seq__24950,chunk__24952,count__24953,i__24954,new_link_25594,path_match_25593,node_25592,seq__25225_25586__$1,temp__5804__auto___25584__$1,path,seq__24950__$1,temp__5804__auto__,map__24949,map__24949__$1,msg,updates,reload_info){
return (function (e){
var seq__25287_25595 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__25289_25596 = null;
var count__25290_25597 = (0);
var i__25291_25598 = (0);
while(true){
if((i__25291_25598 < count__25290_25597)){
var map__25301_25599 = chunk__25289_25596.cljs$core$IIndexed$_nth$arity$2(null,i__25291_25598);
var map__25301_25600__$1 = cljs.core.__destructure_map(map__25301_25599);
var task_25601 = map__25301_25600__$1;
var fn_str_25602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25301_25600__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25301_25600__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25604 = goog.getObjectByName(fn_str_25602,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25603)].join(''));

(fn_obj_25604.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25604.cljs$core$IFn$_invoke$arity$2(path,new_link_25594) : fn_obj_25604.call(null,path,new_link_25594));


var G__25605 = seq__25287_25595;
var G__25606 = chunk__25289_25596;
var G__25607 = count__25290_25597;
var G__25608 = (i__25291_25598 + (1));
seq__25287_25595 = G__25605;
chunk__25289_25596 = G__25606;
count__25290_25597 = G__25607;
i__25291_25598 = G__25608;
continue;
} else {
var temp__5804__auto___25609__$2 = cljs.core.seq(seq__25287_25595);
if(temp__5804__auto___25609__$2){
var seq__25287_25610__$1 = temp__5804__auto___25609__$2;
if(cljs.core.chunked_seq_QMARK_(seq__25287_25610__$1)){
var c__5568__auto___25611 = cljs.core.chunk_first(seq__25287_25610__$1);
var G__25612 = cljs.core.chunk_rest(seq__25287_25610__$1);
var G__25613 = c__5568__auto___25611;
var G__25614 = cljs.core.count(c__5568__auto___25611);
var G__25615 = (0);
seq__25287_25595 = G__25612;
chunk__25289_25596 = G__25613;
count__25290_25597 = G__25614;
i__25291_25598 = G__25615;
continue;
} else {
var map__25302_25616 = cljs.core.first(seq__25287_25610__$1);
var map__25302_25617__$1 = cljs.core.__destructure_map(map__25302_25616);
var task_25618 = map__25302_25617__$1;
var fn_str_25619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25302_25617__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25302_25617__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25621 = goog.getObjectByName(fn_str_25619,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25620)].join(''));

(fn_obj_25621.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25621.cljs$core$IFn$_invoke$arity$2(path,new_link_25594) : fn_obj_25621.call(null,path,new_link_25594));


var G__25622 = cljs.core.next(seq__25287_25610__$1);
var G__25623 = null;
var G__25624 = (0);
var G__25625 = (0);
seq__25287_25595 = G__25622;
chunk__25289_25596 = G__25623;
count__25290_25597 = G__25624;
i__25291_25598 = G__25625;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_25592);
});})(seq__25225_25529,chunk__25229_25530,count__25230_25531,i__25231_25532,seq__24950,chunk__24952,count__24953,i__24954,new_link_25594,path_match_25593,node_25592,seq__25225_25586__$1,temp__5804__auto___25584__$1,path,seq__24950__$1,temp__5804__auto__,map__24949,map__24949__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_25593], 0));

goog.dom.insertSiblingAfter(new_link_25594,node_25592);


var G__25626 = cljs.core.next(seq__25225_25586__$1);
var G__25627 = null;
var G__25628 = (0);
var G__25629 = (0);
seq__25225_25529 = G__25626;
chunk__25229_25530 = G__25627;
count__25230_25531 = G__25628;
i__25231_25532 = G__25629;
continue;
} else {
var G__25630 = cljs.core.next(seq__25225_25586__$1);
var G__25631 = null;
var G__25632 = (0);
var G__25633 = (0);
seq__25225_25529 = G__25630;
chunk__25229_25530 = G__25631;
count__25230_25531 = G__25632;
i__25231_25532 = G__25633;
continue;
}
} else {
var G__25634 = cljs.core.next(seq__25225_25586__$1);
var G__25635 = null;
var G__25636 = (0);
var G__25637 = (0);
seq__25225_25529 = G__25634;
chunk__25229_25530 = G__25635;
count__25230_25531 = G__25636;
i__25231_25532 = G__25637;
continue;
}
}
} else {
}
}
break;
}


var G__25638 = cljs.core.next(seq__24950__$1);
var G__25639 = null;
var G__25640 = (0);
var G__25641 = (0);
seq__24950 = G__25638;
chunk__24952 = G__25639;
count__24953 = G__25640;
i__24954 = G__25641;
continue;
} else {
var G__25642 = cljs.core.next(seq__24950__$1);
var G__25643 = null;
var G__25644 = (0);
var G__25645 = (0);
seq__24950 = G__25642;
chunk__24952 = G__25643;
count__24953 = G__25644;
i__24954 = G__25645;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__25303){
var map__25304 = p__25303;
var map__25304__$1 = cljs.core.__destructure_map(map__25304);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25304__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__25307){
var map__25308 = p__25307;
var map__25308__$1 = cljs.core.__destructure_map(map__25308);
var _ = map__25308__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25308__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__25310,done,error){
var map__25312 = p__25310;
var map__25312__$1 = cljs.core.__destructure_map(map__25312);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25312__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__25313,done,error){
var map__25314 = p__25313;
var map__25314__$1 = cljs.core.__destructure_map(map__25314);
var msg = map__25314__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25314__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25314__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25314__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__25315){
var map__25316 = p__25315;
var map__25316__$1 = cljs.core.__destructure_map(map__25316);
var src = map__25316__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25316__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__25317 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__25317) : done.call(null,G__25317));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__25318){
var map__25319 = p__25318;
var map__25319__$1 = cljs.core.__destructure_map(map__25319);
var msg__$1 = map__25319__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25319__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e25320){var ex = e25320;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__25323){
var map__25324 = p__25323;
var map__25324__$1 = cljs.core.__destructure_map(map__25324);
var env = map__25324__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25324__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__25325){
var map__25326 = p__25325;
var map__25326__$1 = cljs.core.__destructure_map(map__25326);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25326__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25326__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__25327){
var map__25328 = p__25327;
var map__25328__$1 = cljs.core.__destructure_map(map__25328);
var svc = map__25328__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25328__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
