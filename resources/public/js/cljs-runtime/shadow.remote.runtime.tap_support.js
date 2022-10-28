goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__24533,p__24534){
var map__24535 = p__24533;
var map__24535__$1 = cljs.core.__destructure_map(map__24535);
var svc = map__24535__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24535__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24535__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24535__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__24536 = p__24534;
var map__24536__$1 = cljs.core.__destructure_map(map__24536);
var msg = map__24536__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24536__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24536__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24536__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24536__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__24546,p__24547){
var map__24548 = p__24546;
var map__24548__$1 = cljs.core.__destructure_map(map__24548);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24548__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__24549 = p__24547;
var map__24549__$1 = cljs.core.__destructure_map(map__24549);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24549__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__24555,p__24556){
var map__24557 = p__24555;
var map__24557__$1 = cljs.core.__destructure_map(map__24557);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24557__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24557__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__24558 = p__24556;
var map__24558__$1 = cljs.core.__destructure_map(map__24558);
var msg = map__24558__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24558__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__24559,tid){
var map__24560 = p__24559;
var map__24560__$1 = cljs.core.__destructure_map(map__24560);
var svc = map__24560__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24560__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__24568 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__24569 = null;
var count__24570 = (0);
var i__24571 = (0);
while(true){
if((i__24571 < count__24570)){
var vec__24578 = chunk__24569.cljs$core$IIndexed$_nth$arity$2(null,i__24571);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24578,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24578,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__24599 = seq__24568;
var G__24600 = chunk__24569;
var G__24601 = count__24570;
var G__24602 = (i__24571 + (1));
seq__24568 = G__24599;
chunk__24569 = G__24600;
count__24570 = G__24601;
i__24571 = G__24602;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24568);
if(temp__5804__auto__){
var seq__24568__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24568__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24568__$1);
var G__24603 = cljs.core.chunk_rest(seq__24568__$1);
var G__24604 = c__5568__auto__;
var G__24605 = cljs.core.count(c__5568__auto__);
var G__24606 = (0);
seq__24568 = G__24603;
chunk__24569 = G__24604;
count__24570 = G__24605;
i__24571 = G__24606;
continue;
} else {
var vec__24591 = cljs.core.first(seq__24568__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24591,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24591,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__24607 = cljs.core.next(seq__24568__$1);
var G__24608 = null;
var G__24609 = (0);
var G__24610 = (0);
seq__24568 = G__24607;
chunk__24569 = G__24608;
count__24570 = G__24609;
i__24571 = G__24610;
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
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__24564_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__24564_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__24565_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__24565_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__24566_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__24566_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__24567_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__24567_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__24596){
var map__24597 = p__24596;
var map__24597__$1 = cljs.core.__destructure_map(map__24597);
var svc = map__24597__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24597__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24597__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
