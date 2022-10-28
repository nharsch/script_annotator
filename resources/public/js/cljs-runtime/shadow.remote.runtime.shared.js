goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__20169,res){
var map__20170 = p__20169;
var map__20170__$1 = cljs.core.__destructure_map(map__20170);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20170__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20170__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__20171 = res;
var G__20171__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20171,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__20171);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20171__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__20171__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__20182 = arguments.length;
switch (G__20182) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__20191,msg,handlers,timeout_after_ms){
var map__20192 = p__20191;
var map__20192__$1 = cljs.core.__destructure_map(map__20192);
var runtime = map__20192__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20192__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20400 = arguments.length;
var i__5770__auto___20401 = (0);
while(true){
if((i__5770__auto___20401 < len__5769__auto___20400)){
args__5775__auto__.push((arguments[i__5770__auto___20401]));

var G__20402 = (i__5770__auto___20401 + (1));
i__5770__auto___20401 = G__20402;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__20201,ev,args){
var map__20202 = p__20201;
var map__20202__$1 = cljs.core.__destructure_map(map__20202);
var runtime = map__20202__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20202__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__20203 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__20206 = null;
var count__20207 = (0);
var i__20208 = (0);
while(true){
if((i__20208 < count__20207)){
var ext = chunk__20206.cljs$core$IIndexed$_nth$arity$2(null,i__20208);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__20406 = seq__20203;
var G__20407 = chunk__20206;
var G__20408 = count__20207;
var G__20409 = (i__20208 + (1));
seq__20203 = G__20406;
chunk__20206 = G__20407;
count__20207 = G__20408;
i__20208 = G__20409;
continue;
} else {
var G__20411 = seq__20203;
var G__20412 = chunk__20206;
var G__20413 = count__20207;
var G__20414 = (i__20208 + (1));
seq__20203 = G__20411;
chunk__20206 = G__20412;
count__20207 = G__20413;
i__20208 = G__20414;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20203);
if(temp__5804__auto__){
var seq__20203__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20203__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20203__$1);
var G__20415 = cljs.core.chunk_rest(seq__20203__$1);
var G__20416 = c__5568__auto__;
var G__20417 = cljs.core.count(c__5568__auto__);
var G__20418 = (0);
seq__20203 = G__20415;
chunk__20206 = G__20416;
count__20207 = G__20417;
i__20208 = G__20418;
continue;
} else {
var ext = cljs.core.first(seq__20203__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__20419 = cljs.core.next(seq__20203__$1);
var G__20420 = null;
var G__20421 = (0);
var G__20422 = (0);
seq__20203 = G__20419;
chunk__20206 = G__20420;
count__20207 = G__20421;
i__20208 = G__20422;
continue;
} else {
var G__20424 = cljs.core.next(seq__20203__$1);
var G__20425 = null;
var G__20426 = (0);
var G__20427 = (0);
seq__20203 = G__20424;
chunk__20206 = G__20425;
count__20207 = G__20426;
i__20208 = G__20427;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq20194){
var G__20195 = cljs.core.first(seq20194);
var seq20194__$1 = cljs.core.next(seq20194);
var G__20196 = cljs.core.first(seq20194__$1);
var seq20194__$2 = cljs.core.next(seq20194__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20195,G__20196,seq20194__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__20268,p__20269){
var map__20271 = p__20268;
var map__20271__$1 = cljs.core.__destructure_map(map__20271);
var runtime = map__20271__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20271__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__20273 = p__20269;
var map__20273__$1 = cljs.core.__destructure_map(map__20273);
var msg = map__20273__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20273__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__20275 = cljs.core.deref(state_ref);
var map__20275__$1 = cljs.core.__destructure_map(map__20275);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20275__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20275__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__20277){
var map__20278 = p__20277;
var map__20278__$1 = cljs.core.__destructure_map(map__20278);
var runtime = map__20278__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20278__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__20280,msg){
var map__20281 = p__20280;
var map__20281__$1 = cljs.core.__destructure_map(map__20281);
var runtime = map__20281__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20281__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__20287,key,p__20288){
var map__20289 = p__20287;
var map__20289__$1 = cljs.core.__destructure_map(map__20289);
var state = map__20289__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20289__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__20290 = p__20288;
var map__20290__$1 = cljs.core.__destructure_map(map__20290);
var spec = map__20290__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20290__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__20297,key,spec){
var map__20299 = p__20297;
var map__20299__$1 = cljs.core.__destructure_map(map__20299);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20299__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__20300_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__20300_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__20301_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__20301_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__20302_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__20302_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__20303_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__20303_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__20304_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__20304_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__20319,key){
var map__20325 = p__20319;
var map__20325__$1 = cljs.core.__destructure_map(map__20325);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20325__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__20336,msg){
var map__20337 = p__20336;
var map__20337__$1 = cljs.core.__destructure_map(map__20337);
var runtime = map__20337__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20337__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__20345,p__20346){
var map__20347 = p__20345;
var map__20347__$1 = cljs.core.__destructure_map(map__20347);
var runtime = map__20347__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20347__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__20348 = p__20346;
var map__20348__$1 = cljs.core.__destructure_map(map__20348);
var msg = map__20348__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20348__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20348__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__20355 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__20357 = null;
var count__20358 = (0);
var i__20359 = (0);
while(true){
if((i__20359 < count__20358)){
var map__20381 = chunk__20357.cljs$core$IIndexed$_nth$arity$2(null,i__20359);
var map__20381__$1 = cljs.core.__destructure_map(map__20381);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20381__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__20477 = seq__20355;
var G__20478 = chunk__20357;
var G__20479 = count__20358;
var G__20480 = (i__20359 + (1));
seq__20355 = G__20477;
chunk__20357 = G__20478;
count__20358 = G__20479;
i__20359 = G__20480;
continue;
} else {
var G__20481 = seq__20355;
var G__20482 = chunk__20357;
var G__20483 = count__20358;
var G__20484 = (i__20359 + (1));
seq__20355 = G__20481;
chunk__20357 = G__20482;
count__20358 = G__20483;
i__20359 = G__20484;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20355);
if(temp__5804__auto__){
var seq__20355__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20355__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20355__$1);
var G__20485 = cljs.core.chunk_rest(seq__20355__$1);
var G__20486 = c__5568__auto__;
var G__20487 = cljs.core.count(c__5568__auto__);
var G__20488 = (0);
seq__20355 = G__20485;
chunk__20357 = G__20486;
count__20358 = G__20487;
i__20359 = G__20488;
continue;
} else {
var map__20386 = cljs.core.first(seq__20355__$1);
var map__20386__$1 = cljs.core.__destructure_map(map__20386);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20386__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__20491 = cljs.core.next(seq__20355__$1);
var G__20492 = null;
var G__20493 = (0);
var G__20494 = (0);
seq__20355 = G__20491;
chunk__20357 = G__20492;
count__20358 = G__20493;
i__20359 = G__20494;
continue;
} else {
var G__20495 = cljs.core.next(seq__20355__$1);
var G__20496 = null;
var G__20497 = (0);
var G__20498 = (0);
seq__20355 = G__20495;
chunk__20357 = G__20496;
count__20358 = G__20497;
i__20359 = G__20498;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
