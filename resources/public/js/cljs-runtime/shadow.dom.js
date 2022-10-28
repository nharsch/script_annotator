goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_22521 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_22521(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_22523 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_22523(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__21113 = coll;
var G__21114 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__21113,G__21114) : shadow.dom.lazy_native_coll_seq.call(null,G__21113,G__21114));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__21134 = arguments.length;
switch (G__21134) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__21139 = arguments.length;
switch (G__21139) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__21145 = arguments.length;
switch (G__21145) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__21156 = arguments.length;
switch (G__21156) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__21161 = arguments.length;
switch (G__21161) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__21169 = arguments.length;
switch (G__21169) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e21181){if((e21181 instanceof Object)){
var e = e21181;
return console.log("didnt support attachEvent",el,e);
} else {
throw e21181;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__21186 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__21187 = null;
var count__21188 = (0);
var i__21189 = (0);
while(true){
if((i__21189 < count__21188)){
var el = chunk__21187.cljs$core$IIndexed$_nth$arity$2(null,i__21189);
var handler_22570__$1 = ((function (seq__21186,chunk__21187,count__21188,i__21189,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__21186,chunk__21187,count__21188,i__21189,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_22570__$1);


var G__22571 = seq__21186;
var G__22572 = chunk__21187;
var G__22573 = count__21188;
var G__22574 = (i__21189 + (1));
seq__21186 = G__22571;
chunk__21187 = G__22572;
count__21188 = G__22573;
i__21189 = G__22574;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21186);
if(temp__5804__auto__){
var seq__21186__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21186__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21186__$1);
var G__22578 = cljs.core.chunk_rest(seq__21186__$1);
var G__22579 = c__5568__auto__;
var G__22580 = cljs.core.count(c__5568__auto__);
var G__22581 = (0);
seq__21186 = G__22578;
chunk__21187 = G__22579;
count__21188 = G__22580;
i__21189 = G__22581;
continue;
} else {
var el = cljs.core.first(seq__21186__$1);
var handler_22582__$1 = ((function (seq__21186,chunk__21187,count__21188,i__21189,el,seq__21186__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__21186,chunk__21187,count__21188,i__21189,el,seq__21186__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_22582__$1);


var G__22584 = cljs.core.next(seq__21186__$1);
var G__22585 = null;
var G__22586 = (0);
var G__22587 = (0);
seq__21186 = G__22584;
chunk__21187 = G__22585;
count__21188 = G__22586;
i__21189 = G__22587;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__21204 = arguments.length;
switch (G__21204) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__21214 = cljs.core.seq(events);
var chunk__21215 = null;
var count__21216 = (0);
var i__21217 = (0);
while(true){
if((i__21217 < count__21216)){
var vec__21231 = chunk__21215.cljs$core$IIndexed$_nth$arity$2(null,i__21217);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21231,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21231,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__22601 = seq__21214;
var G__22602 = chunk__21215;
var G__22603 = count__21216;
var G__22604 = (i__21217 + (1));
seq__21214 = G__22601;
chunk__21215 = G__22602;
count__21216 = G__22603;
i__21217 = G__22604;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21214);
if(temp__5804__auto__){
var seq__21214__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21214__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21214__$1);
var G__22605 = cljs.core.chunk_rest(seq__21214__$1);
var G__22606 = c__5568__auto__;
var G__22607 = cljs.core.count(c__5568__auto__);
var G__22608 = (0);
seq__21214 = G__22605;
chunk__21215 = G__22606;
count__21216 = G__22607;
i__21217 = G__22608;
continue;
} else {
var vec__21242 = cljs.core.first(seq__21214__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21242,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21242,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__22612 = cljs.core.next(seq__21214__$1);
var G__22613 = null;
var G__22614 = (0);
var G__22615 = (0);
seq__21214 = G__22612;
chunk__21215 = G__22613;
count__21216 = G__22614;
i__21217 = G__22615;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__21250 = cljs.core.seq(styles);
var chunk__21251 = null;
var count__21252 = (0);
var i__21253 = (0);
while(true){
if((i__21253 < count__21252)){
var vec__21275 = chunk__21251.cljs$core$IIndexed$_nth$arity$2(null,i__21253);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21275,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21275,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__22617 = seq__21250;
var G__22618 = chunk__21251;
var G__22619 = count__21252;
var G__22620 = (i__21253 + (1));
seq__21250 = G__22617;
chunk__21251 = G__22618;
count__21252 = G__22619;
i__21253 = G__22620;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21250);
if(temp__5804__auto__){
var seq__21250__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21250__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21250__$1);
var G__22622 = cljs.core.chunk_rest(seq__21250__$1);
var G__22623 = c__5568__auto__;
var G__22624 = cljs.core.count(c__5568__auto__);
var G__22625 = (0);
seq__21250 = G__22622;
chunk__21251 = G__22623;
count__21252 = G__22624;
i__21253 = G__22625;
continue;
} else {
var vec__21279 = cljs.core.first(seq__21250__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21279,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21279,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__22627 = cljs.core.next(seq__21250__$1);
var G__22628 = null;
var G__22629 = (0);
var G__22630 = (0);
seq__21250 = G__22627;
chunk__21251 = G__22628;
count__21252 = G__22629;
i__21253 = G__22630;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__21287_22632 = key;
var G__21287_22633__$1 = (((G__21287_22632 instanceof cljs.core.Keyword))?G__21287_22632.fqn:null);
switch (G__21287_22633__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_22640 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_22640,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_22640,"aria-");
}
})())){
el.setAttribute(ks_22640,value);
} else {
(el[ks_22640] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__21325){
var map__21326 = p__21325;
var map__21326__$1 = cljs.core.__destructure_map(map__21326);
var props = map__21326__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21326__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__21328 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21328,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21328,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21328,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__21336 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__21336,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__21336;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__21347 = arguments.length;
switch (G__21347) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__21353){
var vec__21355 = p__21353;
var seq__21356 = cljs.core.seq(vec__21355);
var first__21357 = cljs.core.first(seq__21356);
var seq__21356__$1 = cljs.core.next(seq__21356);
var nn = first__21357;
var first__21357__$1 = cljs.core.first(seq__21356__$1);
var seq__21356__$2 = cljs.core.next(seq__21356__$1);
var np = first__21357__$1;
var nc = seq__21356__$2;
var node = vec__21355;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21364 = nn;
var G__21365 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__21364,G__21365) : create_fn.call(null,G__21364,G__21365));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21368 = nn;
var G__21369 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__21368,G__21369) : create_fn.call(null,G__21368,G__21369));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__21373 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21373,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21373,(1),null);
var seq__21376_22691 = cljs.core.seq(node_children);
var chunk__21377_22692 = null;
var count__21378_22693 = (0);
var i__21379_22694 = (0);
while(true){
if((i__21379_22694 < count__21378_22693)){
var child_struct_22695 = chunk__21377_22692.cljs$core$IIndexed$_nth$arity$2(null,i__21379_22694);
var children_22697 = shadow.dom.dom_node(child_struct_22695);
if(cljs.core.seq_QMARK_(children_22697)){
var seq__21443_22699 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_22697));
var chunk__21445_22700 = null;
var count__21446_22701 = (0);
var i__21447_22702 = (0);
while(true){
if((i__21447_22702 < count__21446_22701)){
var child_22703 = chunk__21445_22700.cljs$core$IIndexed$_nth$arity$2(null,i__21447_22702);
if(cljs.core.truth_(child_22703)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_22703);


var G__22704 = seq__21443_22699;
var G__22705 = chunk__21445_22700;
var G__22706 = count__21446_22701;
var G__22707 = (i__21447_22702 + (1));
seq__21443_22699 = G__22704;
chunk__21445_22700 = G__22705;
count__21446_22701 = G__22706;
i__21447_22702 = G__22707;
continue;
} else {
var G__22708 = seq__21443_22699;
var G__22709 = chunk__21445_22700;
var G__22710 = count__21446_22701;
var G__22711 = (i__21447_22702 + (1));
seq__21443_22699 = G__22708;
chunk__21445_22700 = G__22709;
count__21446_22701 = G__22710;
i__21447_22702 = G__22711;
continue;
}
} else {
var temp__5804__auto___22712 = cljs.core.seq(seq__21443_22699);
if(temp__5804__auto___22712){
var seq__21443_22713__$1 = temp__5804__auto___22712;
if(cljs.core.chunked_seq_QMARK_(seq__21443_22713__$1)){
var c__5568__auto___22714 = cljs.core.chunk_first(seq__21443_22713__$1);
var G__22716 = cljs.core.chunk_rest(seq__21443_22713__$1);
var G__22717 = c__5568__auto___22714;
var G__22718 = cljs.core.count(c__5568__auto___22714);
var G__22719 = (0);
seq__21443_22699 = G__22716;
chunk__21445_22700 = G__22717;
count__21446_22701 = G__22718;
i__21447_22702 = G__22719;
continue;
} else {
var child_22722 = cljs.core.first(seq__21443_22713__$1);
if(cljs.core.truth_(child_22722)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_22722);


var G__22725 = cljs.core.next(seq__21443_22713__$1);
var G__22726 = null;
var G__22727 = (0);
var G__22728 = (0);
seq__21443_22699 = G__22725;
chunk__21445_22700 = G__22726;
count__21446_22701 = G__22727;
i__21447_22702 = G__22728;
continue;
} else {
var G__22729 = cljs.core.next(seq__21443_22713__$1);
var G__22730 = null;
var G__22731 = (0);
var G__22732 = (0);
seq__21443_22699 = G__22729;
chunk__21445_22700 = G__22730;
count__21446_22701 = G__22731;
i__21447_22702 = G__22732;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_22697);
}


var G__22734 = seq__21376_22691;
var G__22735 = chunk__21377_22692;
var G__22736 = count__21378_22693;
var G__22737 = (i__21379_22694 + (1));
seq__21376_22691 = G__22734;
chunk__21377_22692 = G__22735;
count__21378_22693 = G__22736;
i__21379_22694 = G__22737;
continue;
} else {
var temp__5804__auto___22738 = cljs.core.seq(seq__21376_22691);
if(temp__5804__auto___22738){
var seq__21376_22739__$1 = temp__5804__auto___22738;
if(cljs.core.chunked_seq_QMARK_(seq__21376_22739__$1)){
var c__5568__auto___22740 = cljs.core.chunk_first(seq__21376_22739__$1);
var G__22742 = cljs.core.chunk_rest(seq__21376_22739__$1);
var G__22743 = c__5568__auto___22740;
var G__22744 = cljs.core.count(c__5568__auto___22740);
var G__22745 = (0);
seq__21376_22691 = G__22742;
chunk__21377_22692 = G__22743;
count__21378_22693 = G__22744;
i__21379_22694 = G__22745;
continue;
} else {
var child_struct_22746 = cljs.core.first(seq__21376_22739__$1);
var children_22747 = shadow.dom.dom_node(child_struct_22746);
if(cljs.core.seq_QMARK_(children_22747)){
var seq__21470_22748 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_22747));
var chunk__21472_22749 = null;
var count__21473_22750 = (0);
var i__21474_22751 = (0);
while(true){
if((i__21474_22751 < count__21473_22750)){
var child_22752 = chunk__21472_22749.cljs$core$IIndexed$_nth$arity$2(null,i__21474_22751);
if(cljs.core.truth_(child_22752)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_22752);


var G__22757 = seq__21470_22748;
var G__22758 = chunk__21472_22749;
var G__22759 = count__21473_22750;
var G__22760 = (i__21474_22751 + (1));
seq__21470_22748 = G__22757;
chunk__21472_22749 = G__22758;
count__21473_22750 = G__22759;
i__21474_22751 = G__22760;
continue;
} else {
var G__22761 = seq__21470_22748;
var G__22762 = chunk__21472_22749;
var G__22763 = count__21473_22750;
var G__22764 = (i__21474_22751 + (1));
seq__21470_22748 = G__22761;
chunk__21472_22749 = G__22762;
count__21473_22750 = G__22763;
i__21474_22751 = G__22764;
continue;
}
} else {
var temp__5804__auto___22766__$1 = cljs.core.seq(seq__21470_22748);
if(temp__5804__auto___22766__$1){
var seq__21470_22767__$1 = temp__5804__auto___22766__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21470_22767__$1)){
var c__5568__auto___22768 = cljs.core.chunk_first(seq__21470_22767__$1);
var G__22769 = cljs.core.chunk_rest(seq__21470_22767__$1);
var G__22770 = c__5568__auto___22768;
var G__22771 = cljs.core.count(c__5568__auto___22768);
var G__22772 = (0);
seq__21470_22748 = G__22769;
chunk__21472_22749 = G__22770;
count__21473_22750 = G__22771;
i__21474_22751 = G__22772;
continue;
} else {
var child_22773 = cljs.core.first(seq__21470_22767__$1);
if(cljs.core.truth_(child_22773)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_22773);


var G__22774 = cljs.core.next(seq__21470_22767__$1);
var G__22775 = null;
var G__22776 = (0);
var G__22777 = (0);
seq__21470_22748 = G__22774;
chunk__21472_22749 = G__22775;
count__21473_22750 = G__22776;
i__21474_22751 = G__22777;
continue;
} else {
var G__22778 = cljs.core.next(seq__21470_22767__$1);
var G__22779 = null;
var G__22780 = (0);
var G__22781 = (0);
seq__21470_22748 = G__22778;
chunk__21472_22749 = G__22779;
count__21473_22750 = G__22780;
i__21474_22751 = G__22781;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_22747);
}


var G__22788 = cljs.core.next(seq__21376_22739__$1);
var G__22789 = null;
var G__22790 = (0);
var G__22791 = (0);
seq__21376_22691 = G__22788;
chunk__21377_22692 = G__22789;
count__21378_22693 = G__22790;
i__21379_22694 = G__22791;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__21495 = cljs.core.seq(node);
var chunk__21496 = null;
var count__21497 = (0);
var i__21498 = (0);
while(true){
if((i__21498 < count__21497)){
var n = chunk__21496.cljs$core$IIndexed$_nth$arity$2(null,i__21498);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__22797 = seq__21495;
var G__22798 = chunk__21496;
var G__22799 = count__21497;
var G__22800 = (i__21498 + (1));
seq__21495 = G__22797;
chunk__21496 = G__22798;
count__21497 = G__22799;
i__21498 = G__22800;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21495);
if(temp__5804__auto__){
var seq__21495__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21495__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21495__$1);
var G__22802 = cljs.core.chunk_rest(seq__21495__$1);
var G__22803 = c__5568__auto__;
var G__22804 = cljs.core.count(c__5568__auto__);
var G__22805 = (0);
seq__21495 = G__22802;
chunk__21496 = G__22803;
count__21497 = G__22804;
i__21498 = G__22805;
continue;
} else {
var n = cljs.core.first(seq__21495__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__22814 = cljs.core.next(seq__21495__$1);
var G__22815 = null;
var G__22816 = (0);
var G__22817 = (0);
seq__21495 = G__22814;
chunk__21496 = G__22815;
count__21497 = G__22816;
i__21498 = G__22817;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__21506 = arguments.length;
switch (G__21506) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__21521 = arguments.length;
switch (G__21521) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__21548 = arguments.length;
switch (G__21548) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22849 = arguments.length;
var i__5770__auto___22850 = (0);
while(true){
if((i__5770__auto___22850 < len__5769__auto___22849)){
args__5775__auto__.push((arguments[i__5770__auto___22850]));

var G__22851 = (i__5770__auto___22850 + (1));
i__5770__auto___22850 = G__22851;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__21592_22857 = cljs.core.seq(nodes);
var chunk__21594_22858 = null;
var count__21595_22859 = (0);
var i__21596_22860 = (0);
while(true){
if((i__21596_22860 < count__21595_22859)){
var node_22862 = chunk__21594_22858.cljs$core$IIndexed$_nth$arity$2(null,i__21596_22860);
fragment.appendChild(shadow.dom._to_dom(node_22862));


var G__22863 = seq__21592_22857;
var G__22864 = chunk__21594_22858;
var G__22865 = count__21595_22859;
var G__22866 = (i__21596_22860 + (1));
seq__21592_22857 = G__22863;
chunk__21594_22858 = G__22864;
count__21595_22859 = G__22865;
i__21596_22860 = G__22866;
continue;
} else {
var temp__5804__auto___22869 = cljs.core.seq(seq__21592_22857);
if(temp__5804__auto___22869){
var seq__21592_22870__$1 = temp__5804__auto___22869;
if(cljs.core.chunked_seq_QMARK_(seq__21592_22870__$1)){
var c__5568__auto___22873 = cljs.core.chunk_first(seq__21592_22870__$1);
var G__22875 = cljs.core.chunk_rest(seq__21592_22870__$1);
var G__22876 = c__5568__auto___22873;
var G__22877 = cljs.core.count(c__5568__auto___22873);
var G__22878 = (0);
seq__21592_22857 = G__22875;
chunk__21594_22858 = G__22876;
count__21595_22859 = G__22877;
i__21596_22860 = G__22878;
continue;
} else {
var node_22879 = cljs.core.first(seq__21592_22870__$1);
fragment.appendChild(shadow.dom._to_dom(node_22879));


var G__22881 = cljs.core.next(seq__21592_22870__$1);
var G__22882 = null;
var G__22883 = (0);
var G__22884 = (0);
seq__21592_22857 = G__22881;
chunk__21594_22858 = G__22882;
count__21595_22859 = G__22883;
i__21596_22860 = G__22884;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq21583){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21583));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__21645_22888 = cljs.core.seq(scripts);
var chunk__21646_22889 = null;
var count__21647_22890 = (0);
var i__21648_22891 = (0);
while(true){
if((i__21648_22891 < count__21647_22890)){
var vec__21693_22894 = chunk__21646_22889.cljs$core$IIndexed$_nth$arity$2(null,i__21648_22891);
var script_tag_22895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21693_22894,(0),null);
var script_body_22896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21693_22894,(1),null);
eval(script_body_22896);


var G__22898 = seq__21645_22888;
var G__22899 = chunk__21646_22889;
var G__22900 = count__21647_22890;
var G__22901 = (i__21648_22891 + (1));
seq__21645_22888 = G__22898;
chunk__21646_22889 = G__22899;
count__21647_22890 = G__22900;
i__21648_22891 = G__22901;
continue;
} else {
var temp__5804__auto___22905 = cljs.core.seq(seq__21645_22888);
if(temp__5804__auto___22905){
var seq__21645_22906__$1 = temp__5804__auto___22905;
if(cljs.core.chunked_seq_QMARK_(seq__21645_22906__$1)){
var c__5568__auto___22907 = cljs.core.chunk_first(seq__21645_22906__$1);
var G__22908 = cljs.core.chunk_rest(seq__21645_22906__$1);
var G__22909 = c__5568__auto___22907;
var G__22910 = cljs.core.count(c__5568__auto___22907);
var G__22911 = (0);
seq__21645_22888 = G__22908;
chunk__21646_22889 = G__22909;
count__21647_22890 = G__22910;
i__21648_22891 = G__22911;
continue;
} else {
var vec__21710_22912 = cljs.core.first(seq__21645_22906__$1);
var script_tag_22913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21710_22912,(0),null);
var script_body_22914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21710_22912,(1),null);
eval(script_body_22914);


var G__22926 = cljs.core.next(seq__21645_22906__$1);
var G__22927 = null;
var G__22928 = (0);
var G__22929 = (0);
seq__21645_22888 = G__22926;
chunk__21646_22889 = G__22927;
count__21647_22890 = G__22928;
i__21648_22891 = G__22929;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__21719){
var vec__21721 = p__21719;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21721,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21721,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__21748 = arguments.length;
switch (G__21748) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__21809 = cljs.core.seq(style_keys);
var chunk__21810 = null;
var count__21811 = (0);
var i__21812 = (0);
while(true){
if((i__21812 < count__21811)){
var it = chunk__21810.cljs$core$IIndexed$_nth$arity$2(null,i__21812);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__22971 = seq__21809;
var G__22972 = chunk__21810;
var G__22973 = count__21811;
var G__22974 = (i__21812 + (1));
seq__21809 = G__22971;
chunk__21810 = G__22972;
count__21811 = G__22973;
i__21812 = G__22974;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21809);
if(temp__5804__auto__){
var seq__21809__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21809__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21809__$1);
var G__22977 = cljs.core.chunk_rest(seq__21809__$1);
var G__22978 = c__5568__auto__;
var G__22979 = cljs.core.count(c__5568__auto__);
var G__22980 = (0);
seq__21809 = G__22977;
chunk__21810 = G__22978;
count__21811 = G__22979;
i__21812 = G__22980;
continue;
} else {
var it = cljs.core.first(seq__21809__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__22985 = cljs.core.next(seq__21809__$1);
var G__22986 = null;
var G__22987 = (0);
var G__22988 = (0);
seq__21809 = G__22985;
chunk__21810 = G__22986;
count__21811 = G__22987;
i__21812 = G__22988;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k21842,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__21866 = k21842;
var G__21866__$1 = (((G__21866 instanceof cljs.core.Keyword))?G__21866.fqn:null);
switch (G__21866__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21842,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__21873){
var vec__21875 = p__21873;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21875,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21875,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21841){
var self__ = this;
var G__21841__$1 = this;
return (new cljs.core.RecordIter((0),G__21841__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21843,other21844){
var self__ = this;
var this21843__$1 = this;
return (((!((other21844 == null)))) && ((((this21843__$1.constructor === other21844.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21843__$1.x,other21844.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21843__$1.y,other21844.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21843__$1.__extmap,other21844.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k21842){
var self__ = this;
var this__5350__auto____$1 = this;
var G__21963 = k21842;
var G__21963__$1 = (((G__21963 instanceof cljs.core.Keyword))?G__21963.fqn:null);
switch (G__21963__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k21842);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__21841){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__21986 = cljs.core.keyword_identical_QMARK_;
var expr__21987 = k__5352__auto__;
if(cljs.core.truth_((pred__21986.cljs$core$IFn$_invoke$arity$2 ? pred__21986.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__21987) : pred__21986.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__21987)))){
return (new shadow.dom.Coordinate(G__21841,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21986.cljs$core$IFn$_invoke$arity$2 ? pred__21986.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__21987) : pred__21986.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__21987)))){
return (new shadow.dom.Coordinate(self__.x,G__21841,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__21841),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__21841){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__21841,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__21854){
var extmap__5385__auto__ = (function (){var G__22043 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21854,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__21854)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22043);
} else {
return G__22043;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__21854),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__21854),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k22080,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__22104 = k22080;
var G__22104__$1 = (((G__22104 instanceof cljs.core.Keyword))?G__22104.fqn:null);
switch (G__22104__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22080,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__22114){
var vec__22116 = p__22114;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22116,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22116,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22079){
var self__ = this;
var G__22079__$1 = this;
return (new cljs.core.RecordIter((0),G__22079__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22081,other22082){
var self__ = this;
var this22081__$1 = this;
return (((!((other22082 == null)))) && ((((this22081__$1.constructor === other22082.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22081__$1.w,other22082.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22081__$1.h,other22082.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22081__$1.__extmap,other22082.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k22080){
var self__ = this;
var this__5350__auto____$1 = this;
var G__22188 = k22080;
var G__22188__$1 = (((G__22188 instanceof cljs.core.Keyword))?G__22188.fqn:null);
switch (G__22188__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k22080);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__22079){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__22193 = cljs.core.keyword_identical_QMARK_;
var expr__22194 = k__5352__auto__;
if(cljs.core.truth_((pred__22193.cljs$core$IFn$_invoke$arity$2 ? pred__22193.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__22194) : pred__22193.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__22194)))){
return (new shadow.dom.Size(G__22079,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22193.cljs$core$IFn$_invoke$arity$2 ? pred__22193.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__22194) : pred__22193.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__22194)))){
return (new shadow.dom.Size(self__.w,G__22079,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__22079),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__22079){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__22079,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__22086){
var extmap__5385__auto__ = (function (){var G__22208 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22086,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__22086)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22208);
} else {
return G__22208;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__22086),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__22086),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__23080 = (i + (1));
var G__23081 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__23080;
ret = G__23081;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22264){
var vec__22265 = p__22264;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22265,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22265,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__22281 = arguments.length;
switch (G__22281) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__23090 = ps;
var G__23091 = (i + (1));
el__$1 = G__23090;
i = G__23091;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__22297 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22297,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22297,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22297,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__22301_23096 = cljs.core.seq(props);
var chunk__22302_23097 = null;
var count__22303_23098 = (0);
var i__22304_23099 = (0);
while(true){
if((i__22304_23099 < count__22303_23098)){
var vec__22320_23100 = chunk__22302_23097.cljs$core$IIndexed$_nth$arity$2(null,i__22304_23099);
var k_23101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22320_23100,(0),null);
var v_23102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22320_23100,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_23101);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_23101),v_23102);


var G__23103 = seq__22301_23096;
var G__23104 = chunk__22302_23097;
var G__23105 = count__22303_23098;
var G__23106 = (i__22304_23099 + (1));
seq__22301_23096 = G__23103;
chunk__22302_23097 = G__23104;
count__22303_23098 = G__23105;
i__22304_23099 = G__23106;
continue;
} else {
var temp__5804__auto___23107 = cljs.core.seq(seq__22301_23096);
if(temp__5804__auto___23107){
var seq__22301_23108__$1 = temp__5804__auto___23107;
if(cljs.core.chunked_seq_QMARK_(seq__22301_23108__$1)){
var c__5568__auto___23109 = cljs.core.chunk_first(seq__22301_23108__$1);
var G__23110 = cljs.core.chunk_rest(seq__22301_23108__$1);
var G__23111 = c__5568__auto___23109;
var G__23112 = cljs.core.count(c__5568__auto___23109);
var G__23113 = (0);
seq__22301_23096 = G__23110;
chunk__22302_23097 = G__23111;
count__22303_23098 = G__23112;
i__22304_23099 = G__23113;
continue;
} else {
var vec__22329_23114 = cljs.core.first(seq__22301_23108__$1);
var k_23115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22329_23114,(0),null);
var v_23116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22329_23114,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_23115);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_23115),v_23116);


var G__23117 = cljs.core.next(seq__22301_23108__$1);
var G__23118 = null;
var G__23119 = (0);
var G__23120 = (0);
seq__22301_23096 = G__23117;
chunk__22302_23097 = G__23118;
count__22303_23098 = G__23119;
i__22304_23099 = G__23120;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__22341 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22341,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22341,(1),null);
var seq__22345_23121 = cljs.core.seq(node_children);
var chunk__22347_23122 = null;
var count__22348_23123 = (0);
var i__22349_23124 = (0);
while(true){
if((i__22349_23124 < count__22348_23123)){
var child_struct_23125 = chunk__22347_23122.cljs$core$IIndexed$_nth$arity$2(null,i__22349_23124);
if((!((child_struct_23125 == null)))){
if(typeof child_struct_23125 === 'string'){
var text_23126 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_23126),child_struct_23125].join(''));
} else {
var children_23127 = shadow.dom.svg_node(child_struct_23125);
if(cljs.core.seq_QMARK_(children_23127)){
var seq__22394_23129 = cljs.core.seq(children_23127);
var chunk__22396_23130 = null;
var count__22397_23131 = (0);
var i__22398_23132 = (0);
while(true){
if((i__22398_23132 < count__22397_23131)){
var child_23134 = chunk__22396_23130.cljs$core$IIndexed$_nth$arity$2(null,i__22398_23132);
if(cljs.core.truth_(child_23134)){
node.appendChild(child_23134);


var G__23135 = seq__22394_23129;
var G__23136 = chunk__22396_23130;
var G__23137 = count__22397_23131;
var G__23138 = (i__22398_23132 + (1));
seq__22394_23129 = G__23135;
chunk__22396_23130 = G__23136;
count__22397_23131 = G__23137;
i__22398_23132 = G__23138;
continue;
} else {
var G__23139 = seq__22394_23129;
var G__23140 = chunk__22396_23130;
var G__23141 = count__22397_23131;
var G__23142 = (i__22398_23132 + (1));
seq__22394_23129 = G__23139;
chunk__22396_23130 = G__23140;
count__22397_23131 = G__23141;
i__22398_23132 = G__23142;
continue;
}
} else {
var temp__5804__auto___23143 = cljs.core.seq(seq__22394_23129);
if(temp__5804__auto___23143){
var seq__22394_23144__$1 = temp__5804__auto___23143;
if(cljs.core.chunked_seq_QMARK_(seq__22394_23144__$1)){
var c__5568__auto___23145 = cljs.core.chunk_first(seq__22394_23144__$1);
var G__23146 = cljs.core.chunk_rest(seq__22394_23144__$1);
var G__23147 = c__5568__auto___23145;
var G__23148 = cljs.core.count(c__5568__auto___23145);
var G__23149 = (0);
seq__22394_23129 = G__23146;
chunk__22396_23130 = G__23147;
count__22397_23131 = G__23148;
i__22398_23132 = G__23149;
continue;
} else {
var child_23151 = cljs.core.first(seq__22394_23144__$1);
if(cljs.core.truth_(child_23151)){
node.appendChild(child_23151);


var G__23152 = cljs.core.next(seq__22394_23144__$1);
var G__23153 = null;
var G__23154 = (0);
var G__23155 = (0);
seq__22394_23129 = G__23152;
chunk__22396_23130 = G__23153;
count__22397_23131 = G__23154;
i__22398_23132 = G__23155;
continue;
} else {
var G__23156 = cljs.core.next(seq__22394_23144__$1);
var G__23157 = null;
var G__23158 = (0);
var G__23159 = (0);
seq__22394_23129 = G__23156;
chunk__22396_23130 = G__23157;
count__22397_23131 = G__23158;
i__22398_23132 = G__23159;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_23127);
}
}


var G__23160 = seq__22345_23121;
var G__23161 = chunk__22347_23122;
var G__23162 = count__22348_23123;
var G__23163 = (i__22349_23124 + (1));
seq__22345_23121 = G__23160;
chunk__22347_23122 = G__23161;
count__22348_23123 = G__23162;
i__22349_23124 = G__23163;
continue;
} else {
var G__23164 = seq__22345_23121;
var G__23165 = chunk__22347_23122;
var G__23166 = count__22348_23123;
var G__23167 = (i__22349_23124 + (1));
seq__22345_23121 = G__23164;
chunk__22347_23122 = G__23165;
count__22348_23123 = G__23166;
i__22349_23124 = G__23167;
continue;
}
} else {
var temp__5804__auto___23168 = cljs.core.seq(seq__22345_23121);
if(temp__5804__auto___23168){
var seq__22345_23172__$1 = temp__5804__auto___23168;
if(cljs.core.chunked_seq_QMARK_(seq__22345_23172__$1)){
var c__5568__auto___23173 = cljs.core.chunk_first(seq__22345_23172__$1);
var G__23174 = cljs.core.chunk_rest(seq__22345_23172__$1);
var G__23175 = c__5568__auto___23173;
var G__23176 = cljs.core.count(c__5568__auto___23173);
var G__23177 = (0);
seq__22345_23121 = G__23174;
chunk__22347_23122 = G__23175;
count__22348_23123 = G__23176;
i__22349_23124 = G__23177;
continue;
} else {
var child_struct_23179 = cljs.core.first(seq__22345_23172__$1);
if((!((child_struct_23179 == null)))){
if(typeof child_struct_23179 === 'string'){
var text_23181 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_23181),child_struct_23179].join(''));
} else {
var children_23182 = shadow.dom.svg_node(child_struct_23179);
if(cljs.core.seq_QMARK_(children_23182)){
var seq__22436_23183 = cljs.core.seq(children_23182);
var chunk__22438_23184 = null;
var count__22439_23185 = (0);
var i__22440_23186 = (0);
while(true){
if((i__22440_23186 < count__22439_23185)){
var child_23187 = chunk__22438_23184.cljs$core$IIndexed$_nth$arity$2(null,i__22440_23186);
if(cljs.core.truth_(child_23187)){
node.appendChild(child_23187);


var G__23188 = seq__22436_23183;
var G__23189 = chunk__22438_23184;
var G__23190 = count__22439_23185;
var G__23191 = (i__22440_23186 + (1));
seq__22436_23183 = G__23188;
chunk__22438_23184 = G__23189;
count__22439_23185 = G__23190;
i__22440_23186 = G__23191;
continue;
} else {
var G__23193 = seq__22436_23183;
var G__23194 = chunk__22438_23184;
var G__23195 = count__22439_23185;
var G__23196 = (i__22440_23186 + (1));
seq__22436_23183 = G__23193;
chunk__22438_23184 = G__23194;
count__22439_23185 = G__23195;
i__22440_23186 = G__23196;
continue;
}
} else {
var temp__5804__auto___23198__$1 = cljs.core.seq(seq__22436_23183);
if(temp__5804__auto___23198__$1){
var seq__22436_23199__$1 = temp__5804__auto___23198__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22436_23199__$1)){
var c__5568__auto___23200 = cljs.core.chunk_first(seq__22436_23199__$1);
var G__23201 = cljs.core.chunk_rest(seq__22436_23199__$1);
var G__23202 = c__5568__auto___23200;
var G__23203 = cljs.core.count(c__5568__auto___23200);
var G__23204 = (0);
seq__22436_23183 = G__23201;
chunk__22438_23184 = G__23202;
count__22439_23185 = G__23203;
i__22440_23186 = G__23204;
continue;
} else {
var child_23205 = cljs.core.first(seq__22436_23199__$1);
if(cljs.core.truth_(child_23205)){
node.appendChild(child_23205);


var G__23206 = cljs.core.next(seq__22436_23199__$1);
var G__23207 = null;
var G__23208 = (0);
var G__23209 = (0);
seq__22436_23183 = G__23206;
chunk__22438_23184 = G__23207;
count__22439_23185 = G__23208;
i__22440_23186 = G__23209;
continue;
} else {
var G__23210 = cljs.core.next(seq__22436_23199__$1);
var G__23211 = null;
var G__23212 = (0);
var G__23213 = (0);
seq__22436_23183 = G__23210;
chunk__22438_23184 = G__23211;
count__22439_23185 = G__23212;
i__22440_23186 = G__23213;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_23182);
}
}


var G__23214 = cljs.core.next(seq__22345_23172__$1);
var G__23215 = null;
var G__23216 = (0);
var G__23217 = (0);
seq__22345_23121 = G__23214;
chunk__22347_23122 = G__23215;
count__22348_23123 = G__23216;
i__22349_23124 = G__23217;
continue;
} else {
var G__23218 = cljs.core.next(seq__22345_23172__$1);
var G__23219 = null;
var G__23220 = (0);
var G__23221 = (0);
seq__22345_23121 = G__23218;
chunk__22347_23122 = G__23219;
count__22348_23123 = G__23220;
i__22349_23124 = G__23221;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23225 = arguments.length;
var i__5770__auto___23227 = (0);
while(true){
if((i__5770__auto___23227 < len__5769__auto___23225)){
args__5775__auto__.push((arguments[i__5770__auto___23227]));

var G__23229 = (i__5770__auto___23227 + (1));
i__5770__auto___23227 = G__23229;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq22473){
var G__22474 = cljs.core.first(seq22473);
var seq22473__$1 = cljs.core.next(seq22473);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22474,seq22473__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__22479 = arguments.length;
switch (G__22479) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__18049__auto___23233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_22500){
var state_val_22501 = (state_22500[(1)]);
if((state_val_22501 === (1))){
var state_22500__$1 = state_22500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22500__$1,(2),once_or_cleanup);
} else {
if((state_val_22501 === (2))){
var inst_22497 = (state_22500[(2)]);
var inst_22498 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_22500__$1 = (function (){var statearr_22502 = state_22500;
(statearr_22502[(7)] = inst_22497);

return statearr_22502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22500__$1,inst_22498);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17908__auto__ = null;
var shadow$dom$state_machine__17908__auto____0 = (function (){
var statearr_22503 = [null,null,null,null,null,null,null,null];
(statearr_22503[(0)] = shadow$dom$state_machine__17908__auto__);

(statearr_22503[(1)] = (1));

return statearr_22503;
});
var shadow$dom$state_machine__17908__auto____1 = (function (state_22500){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_22500);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e22505){var ex__17911__auto__ = e22505;
var statearr_22506_23235 = state_22500;
(statearr_22506_23235[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_22500[(4)]))){
var statearr_22507_23236 = state_22500;
(statearr_22507_23236[(1)] = cljs.core.first((state_22500[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23237 = state_22500;
state_22500 = G__23237;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
shadow$dom$state_machine__17908__auto__ = function(state_22500){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17908__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17908__auto____1.call(this,state_22500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17908__auto____0;
shadow$dom$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17908__auto____1;
return shadow$dom$state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_22510 = f__18050__auto__();
(statearr_22510[(6)] = c__18049__auto___23233);

return statearr_22510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
