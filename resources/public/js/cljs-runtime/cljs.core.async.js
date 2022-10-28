goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18163 = arguments.length;
switch (G__18163) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18170 = (function (f,blockable,meta18171){
this.f = f;
this.blockable = blockable;
this.meta18171 = meta18171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18172,meta18171__$1){
var self__ = this;
var _18172__$1 = this;
return (new cljs.core.async.t_cljs$core$async18170(self__.f,self__.blockable,meta18171__$1));
}));

(cljs.core.async.t_cljs$core$async18170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18172){
var self__ = this;
var _18172__$1 = this;
return self__.meta18171;
}));

(cljs.core.async.t_cljs$core$async18170.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18170.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18171","meta18171",814407497,null)], null);
}));

(cljs.core.async.t_cljs$core$async18170.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18170");

(cljs.core.async.t_cljs$core$async18170.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18170");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18170.
 */
cljs.core.async.__GT_t_cljs$core$async18170 = (function cljs$core$async$__GT_t_cljs$core$async18170(f__$1,blockable__$1,meta18171){
return (new cljs.core.async.t_cljs$core$async18170(f__$1,blockable__$1,meta18171));
});

}

return (new cljs.core.async.t_cljs$core$async18170(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__18218 = arguments.length;
switch (G__18218) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18243 = arguments.length;
switch (G__18243) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18258 = arguments.length;
switch (G__18258) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_21126 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21126) : fn1.call(null,val_21126));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21126) : fn1.call(null,val_21126));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18261 = arguments.length;
switch (G__18261) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___21135 = n;
var x_21136 = (0);
while(true){
if((x_21136 < n__5636__auto___21135)){
(a[x_21136] = x_21136);

var G__21137 = (x_21136 + (1));
x_21136 = G__21137;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18280 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18280 = (function (flag,meta18281){
this.flag = flag;
this.meta18281 = meta18281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18282,meta18281__$1){
var self__ = this;
var _18282__$1 = this;
return (new cljs.core.async.t_cljs$core$async18280(self__.flag,meta18281__$1));
}));

(cljs.core.async.t_cljs$core$async18280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18282){
var self__ = this;
var _18282__$1 = this;
return self__.meta18281;
}));

(cljs.core.async.t_cljs$core$async18280.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18280.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18280.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18280.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18281","meta18281",1183070134,null)], null);
}));

(cljs.core.async.t_cljs$core$async18280.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18280");

(cljs.core.async.t_cljs$core$async18280.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18280");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18280.
 */
cljs.core.async.__GT_t_cljs$core$async18280 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18280(flag__$1,meta18281){
return (new cljs.core.async.t_cljs$core$async18280(flag__$1,meta18281));
});

}

return (new cljs.core.async.t_cljs$core$async18280(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18297 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18297 = (function (flag,cb,meta18298){
this.flag = flag;
this.cb = cb;
this.meta18298 = meta18298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18299,meta18298__$1){
var self__ = this;
var _18299__$1 = this;
return (new cljs.core.async.t_cljs$core$async18297(self__.flag,self__.cb,meta18298__$1));
}));

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18299){
var self__ = this;
var _18299__$1 = this;
return self__.meta18298;
}));

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18297.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18298","meta18298",942845983,null)], null);
}));

(cljs.core.async.t_cljs$core$async18297.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18297");

(cljs.core.async.t_cljs$core$async18297.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18297");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18297.
 */
cljs.core.async.__GT_t_cljs$core$async18297 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18297(flag__$1,cb__$1,meta18298){
return (new cljs.core.async.t_cljs$core$async18297(flag__$1,cb__$1,meta18298));
});

}

return (new cljs.core.async.t_cljs$core$async18297(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18316_SHARP_){
var G__18319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18316_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18319) : fret.call(null,G__18319));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18317_SHARP_){
var G__18320 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18317_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18320) : fret.call(null,G__18320));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21154 = (i + (1));
i = G__21154;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21157 = arguments.length;
var i__5770__auto___21158 = (0);
while(true){
if((i__5770__auto___21158 < len__5769__auto___21157)){
args__5775__auto__.push((arguments[i__5770__auto___21158]));

var G__21159 = (i__5770__auto___21158 + (1));
i__5770__auto___21158 = G__21159;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18326){
var map__18327 = p__18326;
var map__18327__$1 = cljs.core.__destructure_map(map__18327);
var opts = map__18327__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18324){
var G__18325 = cljs.core.first(seq18324);
var seq18324__$1 = cljs.core.next(seq18324);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18325,seq18324__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18335 = arguments.length;
switch (G__18335) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18049__auto___21164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_18371){
var state_val_18372 = (state_18371[(1)]);
if((state_val_18372 === (7))){
var inst_18367 = (state_18371[(2)]);
var state_18371__$1 = state_18371;
var statearr_18377_21165 = state_18371__$1;
(statearr_18377_21165[(2)] = inst_18367);

(statearr_18377_21165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18372 === (1))){
var state_18371__$1 = state_18371;
var statearr_18381_21166 = state_18371__$1;
(statearr_18381_21166[(2)] = null);

(statearr_18381_21166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18372 === (4))){
var inst_18350 = (state_18371[(7)]);
var inst_18350__$1 = (state_18371[(2)]);
var inst_18351 = (inst_18350__$1 == null);
var state_18371__$1 = (function (){var statearr_18382 = state_18371;
(statearr_18382[(7)] = inst_18350__$1);

return statearr_18382;
})();
if(cljs.core.truth_(inst_18351)){
var statearr_18383_21168 = state_18371__$1;
(statearr_18383_21168[(1)] = (5));

} else {
var statearr_18384_21170 = state_18371__$1;
(statearr_18384_21170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18372 === (13))){
var state_18371__$1 = state_18371;
var statearr_18388_21171 = state_18371__$1;
(statearr_18388_21171[(2)] = null);

(statearr_18388_21171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18372 === (6))){
var inst_18350 = (state_18371[(7)]);
var state_18371__$1 = state_18371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18371__$1,(11),to,inst_18350);
} else {
if((state_val_18372 === (3))){
var inst_18369 = (state_18371[(2)]);
var state_18371__$1 = state_18371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18371__$1,inst_18369);
} else {
if((state_val_18372 === (12))){
var state_18371__$1 = state_18371;
var statearr_18393_21172 = state_18371__$1;
(statearr_18393_21172[(2)] = null);

(statearr_18393_21172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18372 === (2))){
var state_18371__$1 = state_18371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18371__$1,(4),from);
} else {
if((state_val_18372 === (11))){
var inst_18360 = (state_18371[(2)]);
var state_18371__$1 = state_18371;
if(cljs.core.truth_(inst_18360)){
var statearr_18394_21173 = state_18371__$1;
(statearr_18394_21173[(1)] = (12));

} else {
var statearr_18395_21174 = state_18371__$1;
(statearr_18395_21174[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18372 === (9))){
var state_18371__$1 = state_18371;
var statearr_18399_21176 = state_18371__$1;
(statearr_18399_21176[(2)] = null);

(statearr_18399_21176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18372 === (5))){
var state_18371__$1 = state_18371;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18400_21177 = state_18371__$1;
(statearr_18400_21177[(1)] = (8));

} else {
var statearr_18401_21178 = state_18371__$1;
(statearr_18401_21178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18372 === (14))){
var inst_18365 = (state_18371[(2)]);
var state_18371__$1 = state_18371;
var statearr_18402_21179 = state_18371__$1;
(statearr_18402_21179[(2)] = inst_18365);

(statearr_18402_21179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18372 === (10))){
var inst_18357 = (state_18371[(2)]);
var state_18371__$1 = state_18371;
var statearr_18403_21180 = state_18371__$1;
(statearr_18403_21180[(2)] = inst_18357);

(statearr_18403_21180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18372 === (8))){
var inst_18354 = cljs.core.async.close_BANG_(to);
var state_18371__$1 = state_18371;
var statearr_18404_21182 = state_18371__$1;
(statearr_18404_21182[(2)] = inst_18354);

(statearr_18404_21182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});
return (function() {
var cljs$core$async$state_machine__17908__auto__ = null;
var cljs$core$async$state_machine__17908__auto____0 = (function (){
var statearr_18408 = [null,null,null,null,null,null,null,null];
(statearr_18408[(0)] = cljs$core$async$state_machine__17908__auto__);

(statearr_18408[(1)] = (1));

return statearr_18408;
});
var cljs$core$async$state_machine__17908__auto____1 = (function (state_18371){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_18371);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e18409){var ex__17911__auto__ = e18409;
var statearr_18410_21184 = state_18371;
(statearr_18410_21184[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_18371[(4)]))){
var statearr_18411_21185 = state_18371;
(statearr_18411_21185[(1)] = cljs.core.first((state_18371[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21190 = state_18371;
state_18371 = G__21190;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$state_machine__17908__auto__ = function(state_18371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17908__auto____1.call(this,state_18371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17908__auto____0;
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17908__auto____1;
return cljs$core$async$state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_18412 = f__18050__auto__();
(statearr_18412[(6)] = c__18049__auto___21164);

return statearr_18412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__18424){
var vec__18425 = p__18424;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18425,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18425,(1),null);
var job = vec__18425;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__18049__auto___21191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_18432){
var state_val_18433 = (state_18432[(1)]);
if((state_val_18433 === (1))){
var state_18432__$1 = state_18432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18432__$1,(2),res,v);
} else {
if((state_val_18433 === (2))){
var inst_18429 = (state_18432[(2)]);
var inst_18430 = cljs.core.async.close_BANG_(res);
var state_18432__$1 = (function (){var statearr_18435 = state_18432;
(statearr_18435[(7)] = inst_18429);

return statearr_18435;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18432__$1,inst_18430);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____0 = (function (){
var statearr_18436 = [null,null,null,null,null,null,null,null];
(statearr_18436[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__);

(statearr_18436[(1)] = (1));

return statearr_18436;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____1 = (function (state_18432){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_18432);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e18437){var ex__17911__auto__ = e18437;
var statearr_18438_21192 = state_18432;
(statearr_18438_21192[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_18432[(4)]))){
var statearr_18447_21195 = state_18432;
(statearr_18447_21195[(1)] = cljs.core.first((state_18432[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21197 = state_18432;
state_18432 = G__21197;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__ = function(state_18432){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____1.call(this,state_18432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_18451 = f__18050__auto__();
(statearr_18451[(6)] = c__18049__auto___21191);

return statearr_18451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18453){
var vec__18455 = p__18453;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18455,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18455,(1),null);
var job = vec__18455;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___21199 = n;
var __21200 = (0);
while(true){
if((__21200 < n__5636__auto___21199)){
var G__18476_21202 = type;
var G__18476_21203__$1 = (((G__18476_21202 instanceof cljs.core.Keyword))?G__18476_21202.fqn:null);
switch (G__18476_21203__$1) {
case "compute":
var c__18049__auto___21206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21200,c__18049__auto___21206,G__18476_21202,G__18476_21203__$1,n__5636__auto___21199,jobs,results,process__$1,async){
return (function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = ((function (__21200,c__18049__auto___21206,G__18476_21202,G__18476_21203__$1,n__5636__auto___21199,jobs,results,process__$1,async){
return (function (state_18509){
var state_val_18510 = (state_18509[(1)]);
if((state_val_18510 === (1))){
var state_18509__$1 = state_18509;
var statearr_18512_21208 = state_18509__$1;
(statearr_18512_21208[(2)] = null);

(statearr_18512_21208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18510 === (2))){
var state_18509__$1 = state_18509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18509__$1,(4),jobs);
} else {
if((state_val_18510 === (3))){
var inst_18507 = (state_18509[(2)]);
var state_18509__$1 = state_18509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18509__$1,inst_18507);
} else {
if((state_val_18510 === (4))){
var inst_18494 = (state_18509[(2)]);
var inst_18498 = process__$1(inst_18494);
var state_18509__$1 = state_18509;
if(cljs.core.truth_(inst_18498)){
var statearr_18523_21209 = state_18509__$1;
(statearr_18523_21209[(1)] = (5));

} else {
var statearr_18526_21210 = state_18509__$1;
(statearr_18526_21210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18510 === (5))){
var state_18509__$1 = state_18509;
var statearr_18529_21211 = state_18509__$1;
(statearr_18529_21211[(2)] = null);

(statearr_18529_21211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18510 === (6))){
var state_18509__$1 = state_18509;
var statearr_18530_21212 = state_18509__$1;
(statearr_18530_21212[(2)] = null);

(statearr_18530_21212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18510 === (7))){
var inst_18505 = (state_18509[(2)]);
var state_18509__$1 = state_18509;
var statearr_18533_21213 = state_18509__$1;
(statearr_18533_21213[(2)] = inst_18505);

(statearr_18533_21213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21200,c__18049__auto___21206,G__18476_21202,G__18476_21203__$1,n__5636__auto___21199,jobs,results,process__$1,async))
;
return ((function (__21200,switch__17907__auto__,c__18049__auto___21206,G__18476_21202,G__18476_21203__$1,n__5636__auto___21199,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____0 = (function (){
var statearr_18536 = [null,null,null,null,null,null,null];
(statearr_18536[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__);

(statearr_18536[(1)] = (1));

return statearr_18536;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____1 = (function (state_18509){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_18509);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e18538){var ex__17911__auto__ = e18538;
var statearr_18540_21221 = state_18509;
(statearr_18540_21221[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_18509[(4)]))){
var statearr_18542_21222 = state_18509;
(statearr_18542_21222[(1)] = cljs.core.first((state_18509[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21227 = state_18509;
state_18509 = G__21227;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__ = function(state_18509){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____1.call(this,state_18509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__;
})()
;})(__21200,switch__17907__auto__,c__18049__auto___21206,G__18476_21202,G__18476_21203__$1,n__5636__auto___21199,jobs,results,process__$1,async))
})();
var state__18051__auto__ = (function (){var statearr_18544 = f__18050__auto__();
(statearr_18544[(6)] = c__18049__auto___21206);

return statearr_18544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
});})(__21200,c__18049__auto___21206,G__18476_21202,G__18476_21203__$1,n__5636__auto___21199,jobs,results,process__$1,async))
);


break;
case "async":
var c__18049__auto___21235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21200,c__18049__auto___21235,G__18476_21202,G__18476_21203__$1,n__5636__auto___21199,jobs,results,process__$1,async){
return (function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = ((function (__21200,c__18049__auto___21235,G__18476_21202,G__18476_21203__$1,n__5636__auto___21199,jobs,results,process__$1,async){
return (function (state_18558){
var state_val_18559 = (state_18558[(1)]);
if((state_val_18559 === (1))){
var state_18558__$1 = state_18558;
var statearr_18562_21236 = state_18558__$1;
(statearr_18562_21236[(2)] = null);

(statearr_18562_21236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18559 === (2))){
var state_18558__$1 = state_18558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18558__$1,(4),jobs);
} else {
if((state_val_18559 === (3))){
var inst_18556 = (state_18558[(2)]);
var state_18558__$1 = state_18558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18558__$1,inst_18556);
} else {
if((state_val_18559 === (4))){
var inst_18547 = (state_18558[(2)]);
var inst_18548 = async(inst_18547);
var state_18558__$1 = state_18558;
if(cljs.core.truth_(inst_18548)){
var statearr_18566_21245 = state_18558__$1;
(statearr_18566_21245[(1)] = (5));

} else {
var statearr_18567_21246 = state_18558__$1;
(statearr_18567_21246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18559 === (5))){
var state_18558__$1 = state_18558;
var statearr_18568_21247 = state_18558__$1;
(statearr_18568_21247[(2)] = null);

(statearr_18568_21247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18559 === (6))){
var state_18558__$1 = state_18558;
var statearr_18569_21248 = state_18558__$1;
(statearr_18569_21248[(2)] = null);

(statearr_18569_21248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18559 === (7))){
var inst_18554 = (state_18558[(2)]);
var state_18558__$1 = state_18558;
var statearr_18574_21249 = state_18558__$1;
(statearr_18574_21249[(2)] = inst_18554);

(statearr_18574_21249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21200,c__18049__auto___21235,G__18476_21202,G__18476_21203__$1,n__5636__auto___21199,jobs,results,process__$1,async))
;
return ((function (__21200,switch__17907__auto__,c__18049__auto___21235,G__18476_21202,G__18476_21203__$1,n__5636__auto___21199,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____0 = (function (){
var statearr_18576 = [null,null,null,null,null,null,null];
(statearr_18576[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__);

(statearr_18576[(1)] = (1));

return statearr_18576;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____1 = (function (state_18558){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_18558);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e18578){var ex__17911__auto__ = e18578;
var statearr_18580_21259 = state_18558;
(statearr_18580_21259[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_18558[(4)]))){
var statearr_18582_21260 = state_18558;
(statearr_18582_21260[(1)] = cljs.core.first((state_18558[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21261 = state_18558;
state_18558 = G__21261;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__ = function(state_18558){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____1.call(this,state_18558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__;
})()
;})(__21200,switch__17907__auto__,c__18049__auto___21235,G__18476_21202,G__18476_21203__$1,n__5636__auto___21199,jobs,results,process__$1,async))
})();
var state__18051__auto__ = (function (){var statearr_18587 = f__18050__auto__();
(statearr_18587[(6)] = c__18049__auto___21235);

return statearr_18587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
});})(__21200,c__18049__auto___21235,G__18476_21202,G__18476_21203__$1,n__5636__auto___21199,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18476_21203__$1)].join('')));

}

var G__21262 = (__21200 + (1));
__21200 = G__21262;
continue;
} else {
}
break;
}

var c__18049__auto___21263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_18620){
var state_val_18621 = (state_18620[(1)]);
if((state_val_18621 === (7))){
var inst_18616 = (state_18620[(2)]);
var state_18620__$1 = state_18620;
var statearr_18627_21268 = state_18620__$1;
(statearr_18627_21268[(2)] = inst_18616);

(statearr_18627_21268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18621 === (1))){
var state_18620__$1 = state_18620;
var statearr_18629_21272 = state_18620__$1;
(statearr_18629_21272[(2)] = null);

(statearr_18629_21272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18621 === (4))){
var inst_18595 = (state_18620[(7)]);
var inst_18595__$1 = (state_18620[(2)]);
var inst_18596 = (inst_18595__$1 == null);
var state_18620__$1 = (function (){var statearr_18638 = state_18620;
(statearr_18638[(7)] = inst_18595__$1);

return statearr_18638;
})();
if(cljs.core.truth_(inst_18596)){
var statearr_18639_21273 = state_18620__$1;
(statearr_18639_21273[(1)] = (5));

} else {
var statearr_18640_21274 = state_18620__$1;
(statearr_18640_21274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18621 === (6))){
var inst_18600 = (state_18620[(8)]);
var inst_18595 = (state_18620[(7)]);
var inst_18600__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18606 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18607 = [inst_18595,inst_18600__$1];
var inst_18608 = (new cljs.core.PersistentVector(null,2,(5),inst_18606,inst_18607,null));
var state_18620__$1 = (function (){var statearr_18642 = state_18620;
(statearr_18642[(8)] = inst_18600__$1);

return statearr_18642;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18620__$1,(8),jobs,inst_18608);
} else {
if((state_val_18621 === (3))){
var inst_18618 = (state_18620[(2)]);
var state_18620__$1 = state_18620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18620__$1,inst_18618);
} else {
if((state_val_18621 === (2))){
var state_18620__$1 = state_18620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18620__$1,(4),from);
} else {
if((state_val_18621 === (9))){
var inst_18613 = (state_18620[(2)]);
var state_18620__$1 = (function (){var statearr_18649 = state_18620;
(statearr_18649[(9)] = inst_18613);

return statearr_18649;
})();
var statearr_18650_21282 = state_18620__$1;
(statearr_18650_21282[(2)] = null);

(statearr_18650_21282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18621 === (5))){
var inst_18598 = cljs.core.async.close_BANG_(jobs);
var state_18620__$1 = state_18620;
var statearr_18653_21283 = state_18620__$1;
(statearr_18653_21283[(2)] = inst_18598);

(statearr_18653_21283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18621 === (8))){
var inst_18600 = (state_18620[(8)]);
var inst_18610 = (state_18620[(2)]);
var state_18620__$1 = (function (){var statearr_18655 = state_18620;
(statearr_18655[(10)] = inst_18610);

return statearr_18655;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18620__$1,(9),results,inst_18600);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____0 = (function (){
var statearr_18657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18657[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__);

(statearr_18657[(1)] = (1));

return statearr_18657;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____1 = (function (state_18620){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_18620);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e18658){var ex__17911__auto__ = e18658;
var statearr_18659_21284 = state_18620;
(statearr_18659_21284[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_18620[(4)]))){
var statearr_18660_21285 = state_18620;
(statearr_18660_21285[(1)] = cljs.core.first((state_18620[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21286 = state_18620;
state_18620 = G__21286;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__ = function(state_18620){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____1.call(this,state_18620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_18664 = f__18050__auto__();
(statearr_18664[(6)] = c__18049__auto___21263);

return statearr_18664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));


var c__18049__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_18719){
var state_val_18720 = (state_18719[(1)]);
if((state_val_18720 === (7))){
var inst_18708 = (state_18719[(2)]);
var state_18719__$1 = state_18719;
var statearr_18726_21288 = state_18719__$1;
(statearr_18726_21288[(2)] = inst_18708);

(statearr_18726_21288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18720 === (20))){
var state_18719__$1 = state_18719;
var statearr_18727_21289 = state_18719__$1;
(statearr_18727_21289[(2)] = null);

(statearr_18727_21289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18720 === (1))){
var state_18719__$1 = state_18719;
var statearr_18729_21290 = state_18719__$1;
(statearr_18729_21290[(2)] = null);

(statearr_18729_21290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18720 === (4))){
var inst_18669 = (state_18719[(7)]);
var inst_18669__$1 = (state_18719[(2)]);
var inst_18670 = (inst_18669__$1 == null);
var state_18719__$1 = (function (){var statearr_18731 = state_18719;
(statearr_18731[(7)] = inst_18669__$1);

return statearr_18731;
})();
if(cljs.core.truth_(inst_18670)){
var statearr_18733_21292 = state_18719__$1;
(statearr_18733_21292[(1)] = (5));

} else {
var statearr_18734_21293 = state_18719__$1;
(statearr_18734_21293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18720 === (15))){
var inst_18686 = (state_18719[(8)]);
var state_18719__$1 = state_18719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18719__$1,(18),to,inst_18686);
} else {
if((state_val_18720 === (21))){
var inst_18703 = (state_18719[(2)]);
var state_18719__$1 = state_18719;
var statearr_18738_21294 = state_18719__$1;
(statearr_18738_21294[(2)] = inst_18703);

(statearr_18738_21294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18720 === (13))){
var inst_18705 = (state_18719[(2)]);
var state_18719__$1 = (function (){var statearr_18739 = state_18719;
(statearr_18739[(9)] = inst_18705);

return statearr_18739;
})();
var statearr_18740_21295 = state_18719__$1;
(statearr_18740_21295[(2)] = null);

(statearr_18740_21295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18720 === (6))){
var inst_18669 = (state_18719[(7)]);
var state_18719__$1 = state_18719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18719__$1,(11),inst_18669);
} else {
if((state_val_18720 === (17))){
var inst_18698 = (state_18719[(2)]);
var state_18719__$1 = state_18719;
if(cljs.core.truth_(inst_18698)){
var statearr_18742_21296 = state_18719__$1;
(statearr_18742_21296[(1)] = (19));

} else {
var statearr_18743_21297 = state_18719__$1;
(statearr_18743_21297[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18720 === (3))){
var inst_18710 = (state_18719[(2)]);
var state_18719__$1 = state_18719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18719__$1,inst_18710);
} else {
if((state_val_18720 === (12))){
var inst_18682 = (state_18719[(10)]);
var state_18719__$1 = state_18719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18719__$1,(14),inst_18682);
} else {
if((state_val_18720 === (2))){
var state_18719__$1 = state_18719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18719__$1,(4),results);
} else {
if((state_val_18720 === (19))){
var state_18719__$1 = state_18719;
var statearr_18746_21303 = state_18719__$1;
(statearr_18746_21303[(2)] = null);

(statearr_18746_21303[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18720 === (11))){
var inst_18682 = (state_18719[(2)]);
var state_18719__$1 = (function (){var statearr_18748 = state_18719;
(statearr_18748[(10)] = inst_18682);

return statearr_18748;
})();
var statearr_18749_21308 = state_18719__$1;
(statearr_18749_21308[(2)] = null);

(statearr_18749_21308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18720 === (9))){
var state_18719__$1 = state_18719;
var statearr_18750_21309 = state_18719__$1;
(statearr_18750_21309[(2)] = null);

(statearr_18750_21309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18720 === (5))){
var state_18719__$1 = state_18719;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18751_21314 = state_18719__$1;
(statearr_18751_21314[(1)] = (8));

} else {
var statearr_18752_21315 = state_18719__$1;
(statearr_18752_21315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18720 === (14))){
var inst_18692 = (state_18719[(11)]);
var inst_18686 = (state_18719[(8)]);
var inst_18686__$1 = (state_18719[(2)]);
var inst_18691 = (inst_18686__$1 == null);
var inst_18692__$1 = cljs.core.not(inst_18691);
var state_18719__$1 = (function (){var statearr_18754 = state_18719;
(statearr_18754[(11)] = inst_18692__$1);

(statearr_18754[(8)] = inst_18686__$1);

return statearr_18754;
})();
if(inst_18692__$1){
var statearr_18756_21316 = state_18719__$1;
(statearr_18756_21316[(1)] = (15));

} else {
var statearr_18757_21317 = state_18719__$1;
(statearr_18757_21317[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18720 === (16))){
var inst_18692 = (state_18719[(11)]);
var state_18719__$1 = state_18719;
var statearr_18758_21318 = state_18719__$1;
(statearr_18758_21318[(2)] = inst_18692);

(statearr_18758_21318[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18720 === (10))){
var inst_18679 = (state_18719[(2)]);
var state_18719__$1 = state_18719;
var statearr_18762_21319 = state_18719__$1;
(statearr_18762_21319[(2)] = inst_18679);

(statearr_18762_21319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18720 === (18))){
var inst_18695 = (state_18719[(2)]);
var state_18719__$1 = state_18719;
var statearr_18766_21320 = state_18719__$1;
(statearr_18766_21320[(2)] = inst_18695);

(statearr_18766_21320[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18720 === (8))){
var inst_18673 = cljs.core.async.close_BANG_(to);
var state_18719__$1 = state_18719;
var statearr_18770_21323 = state_18719__$1;
(statearr_18770_21323[(2)] = inst_18673);

(statearr_18770_21323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____0 = (function (){
var statearr_18772 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__);

(statearr_18772[(1)] = (1));

return statearr_18772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____1 = (function (state_18719){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_18719);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e18773){var ex__17911__auto__ = e18773;
var statearr_18774_21327 = state_18719;
(statearr_18774_21327[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_18719[(4)]))){
var statearr_18776_21331 = state_18719;
(statearr_18776_21331[(1)] = cljs.core.first((state_18719[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21335 = state_18719;
state_18719 = G__21335;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__ = function(state_18719){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____1.call(this,state_18719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17908__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_18781 = f__18050__auto__();
(statearr_18781[(6)] = c__18049__auto__);

return statearr_18781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));

return c__18049__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18792 = arguments.length;
switch (G__18792) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18812 = arguments.length;
switch (G__18812) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18827 = arguments.length;
switch (G__18827) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__18049__auto___21351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_18866){
var state_val_18867 = (state_18866[(1)]);
if((state_val_18867 === (7))){
var inst_18861 = (state_18866[(2)]);
var state_18866__$1 = state_18866;
var statearr_18877_21352 = state_18866__$1;
(statearr_18877_21352[(2)] = inst_18861);

(statearr_18877_21352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18867 === (1))){
var state_18866__$1 = state_18866;
var statearr_18878_21354 = state_18866__$1;
(statearr_18878_21354[(2)] = null);

(statearr_18878_21354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18867 === (4))){
var inst_18842 = (state_18866[(7)]);
var inst_18842__$1 = (state_18866[(2)]);
var inst_18843 = (inst_18842__$1 == null);
var state_18866__$1 = (function (){var statearr_18882 = state_18866;
(statearr_18882[(7)] = inst_18842__$1);

return statearr_18882;
})();
if(cljs.core.truth_(inst_18843)){
var statearr_18883_21360 = state_18866__$1;
(statearr_18883_21360[(1)] = (5));

} else {
var statearr_18890_21361 = state_18866__$1;
(statearr_18890_21361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18867 === (13))){
var state_18866__$1 = state_18866;
var statearr_18891_21363 = state_18866__$1;
(statearr_18891_21363[(2)] = null);

(statearr_18891_21363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18867 === (6))){
var inst_18842 = (state_18866[(7)]);
var inst_18848 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18842) : p.call(null,inst_18842));
var state_18866__$1 = state_18866;
if(cljs.core.truth_(inst_18848)){
var statearr_18892_21366 = state_18866__$1;
(statearr_18892_21366[(1)] = (9));

} else {
var statearr_18893_21367 = state_18866__$1;
(statearr_18893_21367[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18867 === (3))){
var inst_18863 = (state_18866[(2)]);
var state_18866__$1 = state_18866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18866__$1,inst_18863);
} else {
if((state_val_18867 === (12))){
var state_18866__$1 = state_18866;
var statearr_18900_21370 = state_18866__$1;
(statearr_18900_21370[(2)] = null);

(statearr_18900_21370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18867 === (2))){
var state_18866__$1 = state_18866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18866__$1,(4),ch);
} else {
if((state_val_18867 === (11))){
var inst_18842 = (state_18866[(7)]);
var inst_18852 = (state_18866[(2)]);
var state_18866__$1 = state_18866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18866__$1,(8),inst_18852,inst_18842);
} else {
if((state_val_18867 === (9))){
var state_18866__$1 = state_18866;
var statearr_18901_21372 = state_18866__$1;
(statearr_18901_21372[(2)] = tc);

(statearr_18901_21372[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18867 === (5))){
var inst_18845 = cljs.core.async.close_BANG_(tc);
var inst_18846 = cljs.core.async.close_BANG_(fc);
var state_18866__$1 = (function (){var statearr_18902 = state_18866;
(statearr_18902[(8)] = inst_18845);

return statearr_18902;
})();
var statearr_18903_21380 = state_18866__$1;
(statearr_18903_21380[(2)] = inst_18846);

(statearr_18903_21380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18867 === (14))){
var inst_18859 = (state_18866[(2)]);
var state_18866__$1 = state_18866;
var statearr_18904_21383 = state_18866__$1;
(statearr_18904_21383[(2)] = inst_18859);

(statearr_18904_21383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18867 === (10))){
var state_18866__$1 = state_18866;
var statearr_18905_21394 = state_18866__$1;
(statearr_18905_21394[(2)] = fc);

(statearr_18905_21394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18867 === (8))){
var inst_18854 = (state_18866[(2)]);
var state_18866__$1 = state_18866;
if(cljs.core.truth_(inst_18854)){
var statearr_18918_21397 = state_18866__$1;
(statearr_18918_21397[(1)] = (12));

} else {
var statearr_18919_21398 = state_18866__$1;
(statearr_18919_21398[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});
return (function() {
var cljs$core$async$state_machine__17908__auto__ = null;
var cljs$core$async$state_machine__17908__auto____0 = (function (){
var statearr_18920 = [null,null,null,null,null,null,null,null,null];
(statearr_18920[(0)] = cljs$core$async$state_machine__17908__auto__);

(statearr_18920[(1)] = (1));

return statearr_18920;
});
var cljs$core$async$state_machine__17908__auto____1 = (function (state_18866){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_18866);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e18922){var ex__17911__auto__ = e18922;
var statearr_18923_21399 = state_18866;
(statearr_18923_21399[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_18866[(4)]))){
var statearr_18924_21400 = state_18866;
(statearr_18924_21400[(1)] = cljs.core.first((state_18866[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21402 = state_18866;
state_18866 = G__21402;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$state_machine__17908__auto__ = function(state_18866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17908__auto____1.call(this,state_18866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17908__auto____0;
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17908__auto____1;
return cljs$core$async$state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_18927 = f__18050__auto__();
(statearr_18927[(6)] = c__18049__auto___21351);

return statearr_18927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18049__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_18953){
var state_val_18954 = (state_18953[(1)]);
if((state_val_18954 === (7))){
var inst_18949 = (state_18953[(2)]);
var state_18953__$1 = state_18953;
var statearr_18957_21406 = state_18953__$1;
(statearr_18957_21406[(2)] = inst_18949);

(statearr_18957_21406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (1))){
var inst_18929 = init;
var inst_18931 = inst_18929;
var state_18953__$1 = (function (){var statearr_18963 = state_18953;
(statearr_18963[(7)] = inst_18931);

return statearr_18963;
})();
var statearr_18964_21407 = state_18953__$1;
(statearr_18964_21407[(2)] = null);

(statearr_18964_21407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (4))){
var inst_18935 = (state_18953[(8)]);
var inst_18935__$1 = (state_18953[(2)]);
var inst_18936 = (inst_18935__$1 == null);
var state_18953__$1 = (function (){var statearr_18965 = state_18953;
(statearr_18965[(8)] = inst_18935__$1);

return statearr_18965;
})();
if(cljs.core.truth_(inst_18936)){
var statearr_18966_21408 = state_18953__$1;
(statearr_18966_21408[(1)] = (5));

} else {
var statearr_18968_21411 = state_18953__$1;
(statearr_18968_21411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (6))){
var inst_18939 = (state_18953[(9)]);
var inst_18935 = (state_18953[(8)]);
var inst_18931 = (state_18953[(7)]);
var inst_18939__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18931,inst_18935) : f.call(null,inst_18931,inst_18935));
var inst_18941 = cljs.core.reduced_QMARK_(inst_18939__$1);
var state_18953__$1 = (function (){var statearr_18971 = state_18953;
(statearr_18971[(9)] = inst_18939__$1);

return statearr_18971;
})();
if(inst_18941){
var statearr_18974_21412 = state_18953__$1;
(statearr_18974_21412[(1)] = (8));

} else {
var statearr_18975_21413 = state_18953__$1;
(statearr_18975_21413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (3))){
var inst_18951 = (state_18953[(2)]);
var state_18953__$1 = state_18953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18953__$1,inst_18951);
} else {
if((state_val_18954 === (2))){
var state_18953__$1 = state_18953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18953__$1,(4),ch);
} else {
if((state_val_18954 === (9))){
var inst_18939 = (state_18953[(9)]);
var inst_18931 = inst_18939;
var state_18953__$1 = (function (){var statearr_18976 = state_18953;
(statearr_18976[(7)] = inst_18931);

return statearr_18976;
})();
var statearr_18977_21417 = state_18953__$1;
(statearr_18977_21417[(2)] = null);

(statearr_18977_21417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (5))){
var inst_18931 = (state_18953[(7)]);
var state_18953__$1 = state_18953;
var statearr_18981_21425 = state_18953__$1;
(statearr_18981_21425[(2)] = inst_18931);

(statearr_18981_21425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (10))){
var inst_18947 = (state_18953[(2)]);
var state_18953__$1 = state_18953;
var statearr_18987_21426 = state_18953__$1;
(statearr_18987_21426[(2)] = inst_18947);

(statearr_18987_21426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18954 === (8))){
var inst_18939 = (state_18953[(9)]);
var inst_18943 = cljs.core.deref(inst_18939);
var state_18953__$1 = state_18953;
var statearr_18990_21427 = state_18953__$1;
(statearr_18990_21427[(2)] = inst_18943);

(statearr_18990_21427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17908__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17908__auto____0 = (function (){
var statearr_18997 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18997[(0)] = cljs$core$async$reduce_$_state_machine__17908__auto__);

(statearr_18997[(1)] = (1));

return statearr_18997;
});
var cljs$core$async$reduce_$_state_machine__17908__auto____1 = (function (state_18953){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_18953);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e18998){var ex__17911__auto__ = e18998;
var statearr_18999_21428 = state_18953;
(statearr_18999_21428[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_18953[(4)]))){
var statearr_19000_21429 = state_18953;
(statearr_19000_21429[(1)] = cljs.core.first((state_18953[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21432 = state_18953;
state_18953 = G__21432;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17908__auto__ = function(state_18953){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17908__auto____1.call(this,state_18953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17908__auto____0;
cljs$core$async$reduce_$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17908__auto____1;
return cljs$core$async$reduce_$_state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_19001 = f__18050__auto__();
(statearr_19001[(6)] = c__18049__auto__);

return statearr_19001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));

return c__18049__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__18049__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_19008){
var state_val_19009 = (state_19008[(1)]);
if((state_val_19009 === (1))){
var inst_19003 = cljs.core.async.reduce(f__$1,init,ch);
var state_19008__$1 = state_19008;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19008__$1,(2),inst_19003);
} else {
if((state_val_19009 === (2))){
var inst_19005 = (state_19008[(2)]);
var inst_19006 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_19005) : f__$1.call(null,inst_19005));
var state_19008__$1 = state_19008;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19008__$1,inst_19006);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17908__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17908__auto____0 = (function (){
var statearr_19020 = [null,null,null,null,null,null,null];
(statearr_19020[(0)] = cljs$core$async$transduce_$_state_machine__17908__auto__);

(statearr_19020[(1)] = (1));

return statearr_19020;
});
var cljs$core$async$transduce_$_state_machine__17908__auto____1 = (function (state_19008){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_19008);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e19027){var ex__17911__auto__ = e19027;
var statearr_19029_21437 = state_19008;
(statearr_19029_21437[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_19008[(4)]))){
var statearr_19037_21440 = state_19008;
(statearr_19037_21440[(1)] = cljs.core.first((state_19008[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21442 = state_19008;
state_19008 = G__21442;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17908__auto__ = function(state_19008){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17908__auto____1.call(this,state_19008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17908__auto____0;
cljs$core$async$transduce_$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17908__auto____1;
return cljs$core$async$transduce_$_state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_19048 = f__18050__auto__();
(statearr_19048[(6)] = c__18049__auto__);

return statearr_19048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));

return c__18049__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__19054 = arguments.length;
switch (G__19054) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18049__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_19085){
var state_val_19086 = (state_19085[(1)]);
if((state_val_19086 === (7))){
var inst_19066 = (state_19085[(2)]);
var state_19085__$1 = state_19085;
var statearr_19091_21455 = state_19085__$1;
(statearr_19091_21455[(2)] = inst_19066);

(statearr_19091_21455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (1))){
var inst_19059 = cljs.core.seq(coll);
var inst_19060 = inst_19059;
var state_19085__$1 = (function (){var statearr_19096 = state_19085;
(statearr_19096[(7)] = inst_19060);

return statearr_19096;
})();
var statearr_19097_21460 = state_19085__$1;
(statearr_19097_21460[(2)] = null);

(statearr_19097_21460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (4))){
var inst_19060 = (state_19085[(7)]);
var inst_19064 = cljs.core.first(inst_19060);
var state_19085__$1 = state_19085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19085__$1,(7),ch,inst_19064);
} else {
if((state_val_19086 === (13))){
var inst_19078 = (state_19085[(2)]);
var state_19085__$1 = state_19085;
var statearr_19100_21461 = state_19085__$1;
(statearr_19100_21461[(2)] = inst_19078);

(statearr_19100_21461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (6))){
var inst_19069 = (state_19085[(2)]);
var state_19085__$1 = state_19085;
if(cljs.core.truth_(inst_19069)){
var statearr_19101_21462 = state_19085__$1;
(statearr_19101_21462[(1)] = (8));

} else {
var statearr_19102_21463 = state_19085__$1;
(statearr_19102_21463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (3))){
var inst_19083 = (state_19085[(2)]);
var state_19085__$1 = state_19085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19085__$1,inst_19083);
} else {
if((state_val_19086 === (12))){
var state_19085__$1 = state_19085;
var statearr_19105_21465 = state_19085__$1;
(statearr_19105_21465[(2)] = null);

(statearr_19105_21465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (2))){
var inst_19060 = (state_19085[(7)]);
var state_19085__$1 = state_19085;
if(cljs.core.truth_(inst_19060)){
var statearr_19115_21467 = state_19085__$1;
(statearr_19115_21467[(1)] = (4));

} else {
var statearr_19116_21468 = state_19085__$1;
(statearr_19116_21468[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (11))){
var inst_19075 = cljs.core.async.close_BANG_(ch);
var state_19085__$1 = state_19085;
var statearr_19122_21469 = state_19085__$1;
(statearr_19122_21469[(2)] = inst_19075);

(statearr_19122_21469[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (9))){
var state_19085__$1 = state_19085;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19134_21476 = state_19085__$1;
(statearr_19134_21476[(1)] = (11));

} else {
var statearr_19136_21477 = state_19085__$1;
(statearr_19136_21477[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (5))){
var inst_19060 = (state_19085[(7)]);
var state_19085__$1 = state_19085;
var statearr_19141_21478 = state_19085__$1;
(statearr_19141_21478[(2)] = inst_19060);

(statearr_19141_21478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (10))){
var inst_19081 = (state_19085[(2)]);
var state_19085__$1 = state_19085;
var statearr_19142_21479 = state_19085__$1;
(statearr_19142_21479[(2)] = inst_19081);

(statearr_19142_21479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19086 === (8))){
var inst_19060 = (state_19085[(7)]);
var inst_19071 = cljs.core.next(inst_19060);
var inst_19060__$1 = inst_19071;
var state_19085__$1 = (function (){var statearr_19143 = state_19085;
(statearr_19143[(7)] = inst_19060__$1);

return statearr_19143;
})();
var statearr_19145_21480 = state_19085__$1;
(statearr_19145_21480[(2)] = null);

(statearr_19145_21480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__17908__auto__ = null;
var cljs$core$async$state_machine__17908__auto____0 = (function (){
var statearr_19157 = [null,null,null,null,null,null,null,null];
(statearr_19157[(0)] = cljs$core$async$state_machine__17908__auto__);

(statearr_19157[(1)] = (1));

return statearr_19157;
});
var cljs$core$async$state_machine__17908__auto____1 = (function (state_19085){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_19085);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e19169){var ex__17911__auto__ = e19169;
var statearr_19170_21481 = state_19085;
(statearr_19170_21481[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_19085[(4)]))){
var statearr_19172_21482 = state_19085;
(statearr_19172_21482[(1)] = cljs.core.first((state_19085[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21483 = state_19085;
state_19085 = G__21483;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$state_machine__17908__auto__ = function(state_19085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17908__auto____1.call(this,state_19085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17908__auto____0;
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17908__auto____1;
return cljs$core$async$state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_19185 = f__18050__auto__();
(statearr_19185[(6)] = c__18049__auto__);

return statearr_19185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));

return c__18049__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__19204 = arguments.length;
switch (G__19204) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_21485 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_21485(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_21489 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_21489(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_21491 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_21491(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_21494 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_21494(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19257 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19257 = (function (ch,cs,meta19258){
this.ch = ch;
this.cs = cs;
this.meta19258 = meta19258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19259,meta19258__$1){
var self__ = this;
var _19259__$1 = this;
return (new cljs.core.async.t_cljs$core$async19257(self__.ch,self__.cs,meta19258__$1));
}));

(cljs.core.async.t_cljs$core$async19257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19259){
var self__ = this;
var _19259__$1 = this;
return self__.meta19258;
}));

(cljs.core.async.t_cljs$core$async19257.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19257.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19257.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19257.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19257.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19257.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19258","meta19258",-381101667,null)], null);
}));

(cljs.core.async.t_cljs$core$async19257.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19257");

(cljs.core.async.t_cljs$core$async19257.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19257");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19257.
 */
cljs.core.async.__GT_t_cljs$core$async19257 = (function cljs$core$async$mult_$___GT_t_cljs$core$async19257(ch__$1,cs__$1,meta19258){
return (new cljs.core.async.t_cljs$core$async19257(ch__$1,cs__$1,meta19258));
});

}

return (new cljs.core.async.t_cljs$core$async19257(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__18049__auto___21500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_19416){
var state_val_19417 = (state_19416[(1)]);
if((state_val_19417 === (7))){
var inst_19412 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
var statearr_19419_21503 = state_19416__$1;
(statearr_19419_21503[(2)] = inst_19412);

(statearr_19419_21503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (20))){
var inst_19310 = (state_19416[(7)]);
var inst_19324 = cljs.core.first(inst_19310);
var inst_19325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19324,(0),null);
var inst_19326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19324,(1),null);
var state_19416__$1 = (function (){var statearr_19420 = state_19416;
(statearr_19420[(8)] = inst_19325);

return statearr_19420;
})();
if(cljs.core.truth_(inst_19326)){
var statearr_19422_21505 = state_19416__$1;
(statearr_19422_21505[(1)] = (22));

} else {
var statearr_19426_21507 = state_19416__$1;
(statearr_19426_21507[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (27))){
var inst_19276 = (state_19416[(9)]);
var inst_19356 = (state_19416[(10)]);
var inst_19365 = (state_19416[(11)]);
var inst_19358 = (state_19416[(12)]);
var inst_19365__$1 = cljs.core._nth(inst_19356,inst_19358);
var inst_19366 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19365__$1,inst_19276,done);
var state_19416__$1 = (function (){var statearr_19430 = state_19416;
(statearr_19430[(11)] = inst_19365__$1);

return statearr_19430;
})();
if(cljs.core.truth_(inst_19366)){
var statearr_19431_21511 = state_19416__$1;
(statearr_19431_21511[(1)] = (30));

} else {
var statearr_19436_21512 = state_19416__$1;
(statearr_19436_21512[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (1))){
var state_19416__$1 = state_19416;
var statearr_19437_21514 = state_19416__$1;
(statearr_19437_21514[(2)] = null);

(statearr_19437_21514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (24))){
var inst_19310 = (state_19416[(7)]);
var inst_19331 = (state_19416[(2)]);
var inst_19332 = cljs.core.next(inst_19310);
var inst_19285 = inst_19332;
var inst_19286 = null;
var inst_19287 = (0);
var inst_19288 = (0);
var state_19416__$1 = (function (){var statearr_19438 = state_19416;
(statearr_19438[(13)] = inst_19331);

(statearr_19438[(14)] = inst_19285);

(statearr_19438[(15)] = inst_19287);

(statearr_19438[(16)] = inst_19288);

(statearr_19438[(17)] = inst_19286);

return statearr_19438;
})();
var statearr_19439_21525 = state_19416__$1;
(statearr_19439_21525[(2)] = null);

(statearr_19439_21525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (39))){
var state_19416__$1 = state_19416;
var statearr_19446_21526 = state_19416__$1;
(statearr_19446_21526[(2)] = null);

(statearr_19446_21526[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (4))){
var inst_19276 = (state_19416[(9)]);
var inst_19276__$1 = (state_19416[(2)]);
var inst_19277 = (inst_19276__$1 == null);
var state_19416__$1 = (function (){var statearr_19455 = state_19416;
(statearr_19455[(9)] = inst_19276__$1);

return statearr_19455;
})();
if(cljs.core.truth_(inst_19277)){
var statearr_19456_21527 = state_19416__$1;
(statearr_19456_21527[(1)] = (5));

} else {
var statearr_19459_21528 = state_19416__$1;
(statearr_19459_21528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (15))){
var inst_19285 = (state_19416[(14)]);
var inst_19287 = (state_19416[(15)]);
var inst_19288 = (state_19416[(16)]);
var inst_19286 = (state_19416[(17)]);
var inst_19305 = (state_19416[(2)]);
var inst_19306 = (inst_19288 + (1));
var tmp19441 = inst_19285;
var tmp19442 = inst_19287;
var tmp19443 = inst_19286;
var inst_19285__$1 = tmp19441;
var inst_19286__$1 = tmp19443;
var inst_19287__$1 = tmp19442;
var inst_19288__$1 = inst_19306;
var state_19416__$1 = (function (){var statearr_19463 = state_19416;
(statearr_19463[(18)] = inst_19305);

(statearr_19463[(14)] = inst_19285__$1);

(statearr_19463[(15)] = inst_19287__$1);

(statearr_19463[(16)] = inst_19288__$1);

(statearr_19463[(17)] = inst_19286__$1);

return statearr_19463;
})();
var statearr_19464_21533 = state_19416__$1;
(statearr_19464_21533[(2)] = null);

(statearr_19464_21533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (21))){
var inst_19335 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
var statearr_19468_21534 = state_19416__$1;
(statearr_19468_21534[(2)] = inst_19335);

(statearr_19468_21534[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (31))){
var inst_19365 = (state_19416[(11)]);
var inst_19369 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19365);
var state_19416__$1 = state_19416;
var statearr_19470_21536 = state_19416__$1;
(statearr_19470_21536[(2)] = inst_19369);

(statearr_19470_21536[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (32))){
var inst_19355 = (state_19416[(19)]);
var inst_19356 = (state_19416[(10)]);
var inst_19357 = (state_19416[(20)]);
var inst_19358 = (state_19416[(12)]);
var inst_19371 = (state_19416[(2)]);
var inst_19372 = (inst_19358 + (1));
var tmp19465 = inst_19355;
var tmp19466 = inst_19356;
var tmp19467 = inst_19357;
var inst_19355__$1 = tmp19465;
var inst_19356__$1 = tmp19466;
var inst_19357__$1 = tmp19467;
var inst_19358__$1 = inst_19372;
var state_19416__$1 = (function (){var statearr_19471 = state_19416;
(statearr_19471[(19)] = inst_19355__$1);

(statearr_19471[(21)] = inst_19371);

(statearr_19471[(10)] = inst_19356__$1);

(statearr_19471[(20)] = inst_19357__$1);

(statearr_19471[(12)] = inst_19358__$1);

return statearr_19471;
})();
var statearr_19472_21543 = state_19416__$1;
(statearr_19472_21543[(2)] = null);

(statearr_19472_21543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (40))){
var inst_19385 = (state_19416[(22)]);
var inst_19389 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19385);
var state_19416__$1 = state_19416;
var statearr_19474_21549 = state_19416__$1;
(statearr_19474_21549[(2)] = inst_19389);

(statearr_19474_21549[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (33))){
var inst_19375 = (state_19416[(23)]);
var inst_19377 = cljs.core.chunked_seq_QMARK_(inst_19375);
var state_19416__$1 = state_19416;
if(inst_19377){
var statearr_19475_21550 = state_19416__$1;
(statearr_19475_21550[(1)] = (36));

} else {
var statearr_19476_21553 = state_19416__$1;
(statearr_19476_21553[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (13))){
var inst_19299 = (state_19416[(24)]);
var inst_19302 = cljs.core.async.close_BANG_(inst_19299);
var state_19416__$1 = state_19416;
var statearr_19477_21555 = state_19416__$1;
(statearr_19477_21555[(2)] = inst_19302);

(statearr_19477_21555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (22))){
var inst_19325 = (state_19416[(8)]);
var inst_19328 = cljs.core.async.close_BANG_(inst_19325);
var state_19416__$1 = state_19416;
var statearr_19487_21558 = state_19416__$1;
(statearr_19487_21558[(2)] = inst_19328);

(statearr_19487_21558[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (36))){
var inst_19375 = (state_19416[(23)]);
var inst_19380 = cljs.core.chunk_first(inst_19375);
var inst_19381 = cljs.core.chunk_rest(inst_19375);
var inst_19382 = cljs.core.count(inst_19380);
var inst_19355 = inst_19381;
var inst_19356 = inst_19380;
var inst_19357 = inst_19382;
var inst_19358 = (0);
var state_19416__$1 = (function (){var statearr_19488 = state_19416;
(statearr_19488[(19)] = inst_19355);

(statearr_19488[(10)] = inst_19356);

(statearr_19488[(20)] = inst_19357);

(statearr_19488[(12)] = inst_19358);

return statearr_19488;
})();
var statearr_19495_21560 = state_19416__$1;
(statearr_19495_21560[(2)] = null);

(statearr_19495_21560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (41))){
var inst_19375 = (state_19416[(23)]);
var inst_19391 = (state_19416[(2)]);
var inst_19392 = cljs.core.next(inst_19375);
var inst_19355 = inst_19392;
var inst_19356 = null;
var inst_19357 = (0);
var inst_19358 = (0);
var state_19416__$1 = (function (){var statearr_19498 = state_19416;
(statearr_19498[(19)] = inst_19355);

(statearr_19498[(25)] = inst_19391);

(statearr_19498[(10)] = inst_19356);

(statearr_19498[(20)] = inst_19357);

(statearr_19498[(12)] = inst_19358);

return statearr_19498;
})();
var statearr_19499_21566 = state_19416__$1;
(statearr_19499_21566[(2)] = null);

(statearr_19499_21566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (43))){
var state_19416__$1 = state_19416;
var statearr_19500_21573 = state_19416__$1;
(statearr_19500_21573[(2)] = null);

(statearr_19500_21573[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (29))){
var inst_19400 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
var statearr_19501_21580 = state_19416__$1;
(statearr_19501_21580[(2)] = inst_19400);

(statearr_19501_21580[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (44))){
var inst_19409 = (state_19416[(2)]);
var state_19416__$1 = (function (){var statearr_19502 = state_19416;
(statearr_19502[(26)] = inst_19409);

return statearr_19502;
})();
var statearr_19503_21582 = state_19416__$1;
(statearr_19503_21582[(2)] = null);

(statearr_19503_21582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (6))){
var inst_19345 = (state_19416[(27)]);
var inst_19344 = cljs.core.deref(cs);
var inst_19345__$1 = cljs.core.keys(inst_19344);
var inst_19348 = cljs.core.count(inst_19345__$1);
var inst_19349 = cljs.core.reset_BANG_(dctr,inst_19348);
var inst_19354 = cljs.core.seq(inst_19345__$1);
var inst_19355 = inst_19354;
var inst_19356 = null;
var inst_19357 = (0);
var inst_19358 = (0);
var state_19416__$1 = (function (){var statearr_19507 = state_19416;
(statearr_19507[(19)] = inst_19355);

(statearr_19507[(27)] = inst_19345__$1);

(statearr_19507[(28)] = inst_19349);

(statearr_19507[(10)] = inst_19356);

(statearr_19507[(20)] = inst_19357);

(statearr_19507[(12)] = inst_19358);

return statearr_19507;
})();
var statearr_19509_21587 = state_19416__$1;
(statearr_19509_21587[(2)] = null);

(statearr_19509_21587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (28))){
var inst_19355 = (state_19416[(19)]);
var inst_19375 = (state_19416[(23)]);
var inst_19375__$1 = cljs.core.seq(inst_19355);
var state_19416__$1 = (function (){var statearr_19510 = state_19416;
(statearr_19510[(23)] = inst_19375__$1);

return statearr_19510;
})();
if(inst_19375__$1){
var statearr_19511_21590 = state_19416__$1;
(statearr_19511_21590[(1)] = (33));

} else {
var statearr_19512_21591 = state_19416__$1;
(statearr_19512_21591[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (25))){
var inst_19357 = (state_19416[(20)]);
var inst_19358 = (state_19416[(12)]);
var inst_19360 = (inst_19358 < inst_19357);
var inst_19361 = inst_19360;
var state_19416__$1 = state_19416;
if(cljs.core.truth_(inst_19361)){
var statearr_19513_21593 = state_19416__$1;
(statearr_19513_21593[(1)] = (27));

} else {
var statearr_19514_21599 = state_19416__$1;
(statearr_19514_21599[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (34))){
var state_19416__$1 = state_19416;
var statearr_19516_21606 = state_19416__$1;
(statearr_19516_21606[(2)] = null);

(statearr_19516_21606[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (17))){
var state_19416__$1 = state_19416;
var statearr_19518_21615 = state_19416__$1;
(statearr_19518_21615[(2)] = null);

(statearr_19518_21615[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (3))){
var inst_19414 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19416__$1,inst_19414);
} else {
if((state_val_19417 === (12))){
var inst_19340 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
var statearr_19519_21622 = state_19416__$1;
(statearr_19519_21622[(2)] = inst_19340);

(statearr_19519_21622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (2))){
var state_19416__$1 = state_19416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19416__$1,(4),ch);
} else {
if((state_val_19417 === (23))){
var state_19416__$1 = state_19416;
var statearr_19523_21627 = state_19416__$1;
(statearr_19523_21627[(2)] = null);

(statearr_19523_21627[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (35))){
var inst_19398 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
var statearr_19525_21629 = state_19416__$1;
(statearr_19525_21629[(2)] = inst_19398);

(statearr_19525_21629[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (19))){
var inst_19310 = (state_19416[(7)]);
var inst_19316 = cljs.core.chunk_first(inst_19310);
var inst_19317 = cljs.core.chunk_rest(inst_19310);
var inst_19318 = cljs.core.count(inst_19316);
var inst_19285 = inst_19317;
var inst_19286 = inst_19316;
var inst_19287 = inst_19318;
var inst_19288 = (0);
var state_19416__$1 = (function (){var statearr_19526 = state_19416;
(statearr_19526[(14)] = inst_19285);

(statearr_19526[(15)] = inst_19287);

(statearr_19526[(16)] = inst_19288);

(statearr_19526[(17)] = inst_19286);

return statearr_19526;
})();
var statearr_19528_21637 = state_19416__$1;
(statearr_19528_21637[(2)] = null);

(statearr_19528_21637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (11))){
var inst_19310 = (state_19416[(7)]);
var inst_19285 = (state_19416[(14)]);
var inst_19310__$1 = cljs.core.seq(inst_19285);
var state_19416__$1 = (function (){var statearr_19530 = state_19416;
(statearr_19530[(7)] = inst_19310__$1);

return statearr_19530;
})();
if(inst_19310__$1){
var statearr_19531_21651 = state_19416__$1;
(statearr_19531_21651[(1)] = (16));

} else {
var statearr_19532_21655 = state_19416__$1;
(statearr_19532_21655[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (9))){
var inst_19342 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
var statearr_19542_21661 = state_19416__$1;
(statearr_19542_21661[(2)] = inst_19342);

(statearr_19542_21661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (5))){
var inst_19283 = cljs.core.deref(cs);
var inst_19284 = cljs.core.seq(inst_19283);
var inst_19285 = inst_19284;
var inst_19286 = null;
var inst_19287 = (0);
var inst_19288 = (0);
var state_19416__$1 = (function (){var statearr_19545 = state_19416;
(statearr_19545[(14)] = inst_19285);

(statearr_19545[(15)] = inst_19287);

(statearr_19545[(16)] = inst_19288);

(statearr_19545[(17)] = inst_19286);

return statearr_19545;
})();
var statearr_19551_21670 = state_19416__$1;
(statearr_19551_21670[(2)] = null);

(statearr_19551_21670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (14))){
var state_19416__$1 = state_19416;
var statearr_19553_21673 = state_19416__$1;
(statearr_19553_21673[(2)] = null);

(statearr_19553_21673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (45))){
var inst_19406 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
var statearr_19554_21684 = state_19416__$1;
(statearr_19554_21684[(2)] = inst_19406);

(statearr_19554_21684[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (26))){
var inst_19345 = (state_19416[(27)]);
var inst_19402 = (state_19416[(2)]);
var inst_19403 = cljs.core.seq(inst_19345);
var state_19416__$1 = (function (){var statearr_19555 = state_19416;
(statearr_19555[(29)] = inst_19402);

return statearr_19555;
})();
if(inst_19403){
var statearr_19556_21688 = state_19416__$1;
(statearr_19556_21688[(1)] = (42));

} else {
var statearr_19557_21689 = state_19416__$1;
(statearr_19557_21689[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (16))){
var inst_19310 = (state_19416[(7)]);
var inst_19314 = cljs.core.chunked_seq_QMARK_(inst_19310);
var state_19416__$1 = state_19416;
if(inst_19314){
var statearr_19559_21690 = state_19416__$1;
(statearr_19559_21690[(1)] = (19));

} else {
var statearr_19560_21692 = state_19416__$1;
(statearr_19560_21692[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (38))){
var inst_19395 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
var statearr_19561_21698 = state_19416__$1;
(statearr_19561_21698[(2)] = inst_19395);

(statearr_19561_21698[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (30))){
var state_19416__$1 = state_19416;
var statearr_19562_21700 = state_19416__$1;
(statearr_19562_21700[(2)] = null);

(statearr_19562_21700[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (10))){
var inst_19288 = (state_19416[(16)]);
var inst_19286 = (state_19416[(17)]);
var inst_19298 = cljs.core._nth(inst_19286,inst_19288);
var inst_19299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19298,(0),null);
var inst_19300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19298,(1),null);
var state_19416__$1 = (function (){var statearr_19564 = state_19416;
(statearr_19564[(24)] = inst_19299);

return statearr_19564;
})();
if(cljs.core.truth_(inst_19300)){
var statearr_19565_21705 = state_19416__$1;
(statearr_19565_21705[(1)] = (13));

} else {
var statearr_19571_21707 = state_19416__$1;
(statearr_19571_21707[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (18))){
var inst_19338 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
var statearr_19572_21709 = state_19416__$1;
(statearr_19572_21709[(2)] = inst_19338);

(statearr_19572_21709[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (42))){
var state_19416__$1 = state_19416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19416__$1,(45),dchan);
} else {
if((state_val_19417 === (37))){
var inst_19276 = (state_19416[(9)]);
var inst_19375 = (state_19416[(23)]);
var inst_19385 = (state_19416[(22)]);
var inst_19385__$1 = cljs.core.first(inst_19375);
var inst_19386 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19385__$1,inst_19276,done);
var state_19416__$1 = (function (){var statearr_19581 = state_19416;
(statearr_19581[(22)] = inst_19385__$1);

return statearr_19581;
})();
if(cljs.core.truth_(inst_19386)){
var statearr_19582_21720 = state_19416__$1;
(statearr_19582_21720[(1)] = (39));

} else {
var statearr_19583_21724 = state_19416__$1;
(statearr_19583_21724[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (8))){
var inst_19287 = (state_19416[(15)]);
var inst_19288 = (state_19416[(16)]);
var inst_19290 = (inst_19288 < inst_19287);
var inst_19291 = inst_19290;
var state_19416__$1 = state_19416;
if(cljs.core.truth_(inst_19291)){
var statearr_19584_21730 = state_19416__$1;
(statearr_19584_21730[(1)] = (10));

} else {
var statearr_19585_21731 = state_19416__$1;
(statearr_19585_21731[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17908__auto__ = null;
var cljs$core$async$mult_$_state_machine__17908__auto____0 = (function (){
var statearr_19586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19586[(0)] = cljs$core$async$mult_$_state_machine__17908__auto__);

(statearr_19586[(1)] = (1));

return statearr_19586;
});
var cljs$core$async$mult_$_state_machine__17908__auto____1 = (function (state_19416){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_19416);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e19587){var ex__17911__auto__ = e19587;
var statearr_19588_21736 = state_19416;
(statearr_19588_21736[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_19416[(4)]))){
var statearr_19589_21738 = state_19416;
(statearr_19589_21738[(1)] = cljs.core.first((state_19416[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21744 = state_19416;
state_19416 = G__21744;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17908__auto__ = function(state_19416){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17908__auto____1.call(this,state_19416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17908__auto____0;
cljs$core$async$mult_$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17908__auto____1;
return cljs$core$async$mult_$_state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_19590 = f__18050__auto__();
(statearr_19590[(6)] = c__18049__auto___21500);

return statearr_19590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19596 = arguments.length;
switch (G__19596) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_21757 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_21757(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_21774 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_21774(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_21783 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_21783(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_21801 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_21801(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_21814 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_21814(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21824 = arguments.length;
var i__5770__auto___21825 = (0);
while(true){
if((i__5770__auto___21825 < len__5769__auto___21824)){
args__5775__auto__.push((arguments[i__5770__auto___21825]));

var G__21830 = (i__5770__auto___21825 + (1));
i__5770__auto___21825 = G__21830;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19629){
var map__19630 = p__19629;
var map__19630__$1 = cljs.core.__destructure_map(map__19630);
var opts = map__19630__$1;
var statearr_19631_21836 = state;
(statearr_19631_21836[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19636_21840 = state;
(statearr_19636_21840[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_19638_21846 = state;
(statearr_19638_21846[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19625){
var G__19626 = cljs.core.first(seq19625);
var seq19625__$1 = cljs.core.next(seq19625);
var G__19627 = cljs.core.first(seq19625__$1);
var seq19625__$2 = cljs.core.next(seq19625__$1);
var G__19628 = cljs.core.first(seq19625__$2);
var seq19625__$3 = cljs.core.next(seq19625__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19626,G__19627,G__19628,seq19625__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19648 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19649){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19649 = meta19649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19650,meta19649__$1){
var self__ = this;
var _19650__$1 = this;
return (new cljs.core.async.t_cljs$core$async19648(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19649__$1));
}));

(cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19650){
var self__ = this;
var _19650__$1 = this;
return self__.meta19649;
}));

(cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19648.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19649","meta19649",34982512,null)], null);
}));

(cljs.core.async.t_cljs$core$async19648.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19648");

(cljs.core.async.t_cljs$core$async19648.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19648");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19648.
 */
cljs.core.async.__GT_t_cljs$core$async19648 = (function cljs$core$async$mix_$___GT_t_cljs$core$async19648(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19649){
return (new cljs.core.async.t_cljs$core$async19648(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19649));
});

}

return (new cljs.core.async.t_cljs$core$async19648(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18049__auto___21924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_19739){
var state_val_19740 = (state_19739[(1)]);
if((state_val_19740 === (7))){
var inst_19698 = (state_19739[(2)]);
var state_19739__$1 = state_19739;
if(cljs.core.truth_(inst_19698)){
var statearr_19744_21926 = state_19739__$1;
(statearr_19744_21926[(1)] = (8));

} else {
var statearr_19745_21927 = state_19739__$1;
(statearr_19745_21927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (20))){
var inst_19691 = (state_19739[(7)]);
var state_19739__$1 = state_19739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19739__$1,(23),out,inst_19691);
} else {
if((state_val_19740 === (1))){
var inst_19673 = calc_state();
var inst_19674 = cljs.core.__destructure_map(inst_19673);
var inst_19675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19674,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19674,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19674,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19678 = inst_19673;
var state_19739__$1 = (function (){var statearr_19748 = state_19739;
(statearr_19748[(8)] = inst_19675);

(statearr_19748[(9)] = inst_19678);

(statearr_19748[(10)] = inst_19676);

(statearr_19748[(11)] = inst_19677);

return statearr_19748;
})();
var statearr_19749_21941 = state_19739__$1;
(statearr_19749_21941[(2)] = null);

(statearr_19749_21941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (24))){
var inst_19682 = (state_19739[(12)]);
var inst_19678 = inst_19682;
var state_19739__$1 = (function (){var statearr_19751 = state_19739;
(statearr_19751[(9)] = inst_19678);

return statearr_19751;
})();
var statearr_19752_21953 = state_19739__$1;
(statearr_19752_21953[(2)] = null);

(statearr_19752_21953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (4))){
var inst_19691 = (state_19739[(7)]);
var inst_19693 = (state_19739[(13)]);
var inst_19690 = (state_19739[(2)]);
var inst_19691__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19690,(0),null);
var inst_19692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19690,(1),null);
var inst_19693__$1 = (inst_19691__$1 == null);
var state_19739__$1 = (function (){var statearr_19753 = state_19739;
(statearr_19753[(14)] = inst_19692);

(statearr_19753[(7)] = inst_19691__$1);

(statearr_19753[(13)] = inst_19693__$1);

return statearr_19753;
})();
if(cljs.core.truth_(inst_19693__$1)){
var statearr_19754_21961 = state_19739__$1;
(statearr_19754_21961[(1)] = (5));

} else {
var statearr_19757_21962 = state_19739__$1;
(statearr_19757_21962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (15))){
var inst_19713 = (state_19739[(15)]);
var inst_19683 = (state_19739[(16)]);
var inst_19713__$1 = cljs.core.empty_QMARK_(inst_19683);
var state_19739__$1 = (function (){var statearr_19760 = state_19739;
(statearr_19760[(15)] = inst_19713__$1);

return statearr_19760;
})();
if(inst_19713__$1){
var statearr_19761_21970 = state_19739__$1;
(statearr_19761_21970[(1)] = (17));

} else {
var statearr_19764_21971 = state_19739__$1;
(statearr_19764_21971[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (21))){
var inst_19682 = (state_19739[(12)]);
var inst_19678 = inst_19682;
var state_19739__$1 = (function (){var statearr_19766 = state_19739;
(statearr_19766[(9)] = inst_19678);

return statearr_19766;
})();
var statearr_19767_21979 = state_19739__$1;
(statearr_19767_21979[(2)] = null);

(statearr_19767_21979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (13))){
var inst_19706 = (state_19739[(2)]);
var inst_19707 = calc_state();
var inst_19678 = inst_19707;
var state_19739__$1 = (function (){var statearr_19770 = state_19739;
(statearr_19770[(9)] = inst_19678);

(statearr_19770[(17)] = inst_19706);

return statearr_19770;
})();
var statearr_19771_21985 = state_19739__$1;
(statearr_19771_21985[(2)] = null);

(statearr_19771_21985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (22))){
var inst_19733 = (state_19739[(2)]);
var state_19739__$1 = state_19739;
var statearr_19772_21995 = state_19739__$1;
(statearr_19772_21995[(2)] = inst_19733);

(statearr_19772_21995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (6))){
var inst_19692 = (state_19739[(14)]);
var inst_19696 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19692,change);
var state_19739__$1 = state_19739;
var statearr_19773_22003 = state_19739__$1;
(statearr_19773_22003[(2)] = inst_19696);

(statearr_19773_22003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (25))){
var state_19739__$1 = state_19739;
var statearr_19774_22008 = state_19739__$1;
(statearr_19774_22008[(2)] = null);

(statearr_19774_22008[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (17))){
var inst_19692 = (state_19739[(14)]);
var inst_19684 = (state_19739[(18)]);
var inst_19715 = (inst_19684.cljs$core$IFn$_invoke$arity$1 ? inst_19684.cljs$core$IFn$_invoke$arity$1(inst_19692) : inst_19684.call(null,inst_19692));
var inst_19716 = cljs.core.not(inst_19715);
var state_19739__$1 = state_19739;
var statearr_19775_22013 = state_19739__$1;
(statearr_19775_22013[(2)] = inst_19716);

(statearr_19775_22013[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (3))){
var inst_19737 = (state_19739[(2)]);
var state_19739__$1 = state_19739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19739__$1,inst_19737);
} else {
if((state_val_19740 === (12))){
var state_19739__$1 = state_19739;
var statearr_19780_22020 = state_19739__$1;
(statearr_19780_22020[(2)] = null);

(statearr_19780_22020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (2))){
var inst_19682 = (state_19739[(12)]);
var inst_19678 = (state_19739[(9)]);
var inst_19682__$1 = cljs.core.__destructure_map(inst_19678);
var inst_19683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19682__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19682__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19682__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19739__$1 = (function (){var statearr_19781 = state_19739;
(statearr_19781[(12)] = inst_19682__$1);

(statearr_19781[(18)] = inst_19684);

(statearr_19781[(16)] = inst_19683);

return statearr_19781;
})();
return cljs.core.async.ioc_alts_BANG_(state_19739__$1,(4),inst_19685);
} else {
if((state_val_19740 === (23))){
var inst_19724 = (state_19739[(2)]);
var state_19739__$1 = state_19739;
if(cljs.core.truth_(inst_19724)){
var statearr_19785_22026 = state_19739__$1;
(statearr_19785_22026[(1)] = (24));

} else {
var statearr_19786_22028 = state_19739__$1;
(statearr_19786_22028[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (19))){
var inst_19719 = (state_19739[(2)]);
var state_19739__$1 = state_19739;
var statearr_19787_22031 = state_19739__$1;
(statearr_19787_22031[(2)] = inst_19719);

(statearr_19787_22031[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (11))){
var inst_19692 = (state_19739[(14)]);
var inst_19703 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19692);
var state_19739__$1 = state_19739;
var statearr_19791_22037 = state_19739__$1;
(statearr_19791_22037[(2)] = inst_19703);

(statearr_19791_22037[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (9))){
var inst_19692 = (state_19739[(14)]);
var inst_19683 = (state_19739[(16)]);
var inst_19710 = (state_19739[(19)]);
var inst_19710__$1 = (inst_19683.cljs$core$IFn$_invoke$arity$1 ? inst_19683.cljs$core$IFn$_invoke$arity$1(inst_19692) : inst_19683.call(null,inst_19692));
var state_19739__$1 = (function (){var statearr_19792 = state_19739;
(statearr_19792[(19)] = inst_19710__$1);

return statearr_19792;
})();
if(cljs.core.truth_(inst_19710__$1)){
var statearr_19801_22042 = state_19739__$1;
(statearr_19801_22042[(1)] = (14));

} else {
var statearr_19802_22045 = state_19739__$1;
(statearr_19802_22045[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (5))){
var inst_19693 = (state_19739[(13)]);
var state_19739__$1 = state_19739;
var statearr_19803_22048 = state_19739__$1;
(statearr_19803_22048[(2)] = inst_19693);

(statearr_19803_22048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (14))){
var inst_19710 = (state_19739[(19)]);
var state_19739__$1 = state_19739;
var statearr_19804_22055 = state_19739__$1;
(statearr_19804_22055[(2)] = inst_19710);

(statearr_19804_22055[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (26))){
var inst_19729 = (state_19739[(2)]);
var state_19739__$1 = state_19739;
var statearr_19808_22057 = state_19739__$1;
(statearr_19808_22057[(2)] = inst_19729);

(statearr_19808_22057[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (16))){
var inst_19721 = (state_19739[(2)]);
var state_19739__$1 = state_19739;
if(cljs.core.truth_(inst_19721)){
var statearr_19812_22058 = state_19739__$1;
(statearr_19812_22058[(1)] = (20));

} else {
var statearr_19814_22059 = state_19739__$1;
(statearr_19814_22059[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (10))){
var inst_19735 = (state_19739[(2)]);
var state_19739__$1 = state_19739;
var statearr_19817_22064 = state_19739__$1;
(statearr_19817_22064[(2)] = inst_19735);

(statearr_19817_22064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (18))){
var inst_19713 = (state_19739[(15)]);
var state_19739__$1 = state_19739;
var statearr_19818_22070 = state_19739__$1;
(statearr_19818_22070[(2)] = inst_19713);

(statearr_19818_22070[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19740 === (8))){
var inst_19691 = (state_19739[(7)]);
var inst_19700 = (inst_19691 == null);
var state_19739__$1 = state_19739;
if(cljs.core.truth_(inst_19700)){
var statearr_19823_22077 = state_19739__$1;
(statearr_19823_22077[(1)] = (11));

} else {
var statearr_19824_22078 = state_19739__$1;
(statearr_19824_22078[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17908__auto__ = null;
var cljs$core$async$mix_$_state_machine__17908__auto____0 = (function (){
var statearr_19826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19826[(0)] = cljs$core$async$mix_$_state_machine__17908__auto__);

(statearr_19826[(1)] = (1));

return statearr_19826;
});
var cljs$core$async$mix_$_state_machine__17908__auto____1 = (function (state_19739){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_19739);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e19827){var ex__17911__auto__ = e19827;
var statearr_19828_22085 = state_19739;
(statearr_19828_22085[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_19739[(4)]))){
var statearr_19829_22091 = state_19739;
(statearr_19829_22091[(1)] = cljs.core.first((state_19739[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22095 = state_19739;
state_19739 = G__22095;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17908__auto__ = function(state_19739){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17908__auto____1.call(this,state_19739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17908__auto____0;
cljs$core$async$mix_$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17908__auto____1;
return cljs$core$async$mix_$_state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_19830 = f__18050__auto__();
(statearr_19830[(6)] = c__18049__auto___21924);

return statearr_19830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_22119 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_22119(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_22135 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_22135(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_22143 = (function() {
var G__22144 = null;
var G__22144__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__22144__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__22144 = function(p,v){
switch(arguments.length){
case 1:
return G__22144__1.call(this,p);
case 2:
return G__22144__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22144.cljs$core$IFn$_invoke$arity$1 = G__22144__1;
G__22144.cljs$core$IFn$_invoke$arity$2 = G__22144__2;
return G__22144;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19841 = arguments.length;
switch (G__19841) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22143(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22143(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__19845 = arguments.length;
switch (G__19845) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19843_SHARP_){
if(cljs.core.truth_((p1__19843_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19843_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19843_SHARP_.call(null,topic)))){
return p1__19843_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19843_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19848 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19849){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19849 = meta19849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19850,meta19849__$1){
var self__ = this;
var _19850__$1 = this;
return (new cljs.core.async.t_cljs$core$async19848(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19849__$1));
}));

(cljs.core.async.t_cljs$core$async19848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19850){
var self__ = this;
var _19850__$1 = this;
return self__.meta19849;
}));

(cljs.core.async.t_cljs$core$async19848.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19848.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19848.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19848.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19848.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async19848.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19848.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19849","meta19849",-44520529,null)], null);
}));

(cljs.core.async.t_cljs$core$async19848.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19848");

(cljs.core.async.t_cljs$core$async19848.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19848");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19848.
 */
cljs.core.async.__GT_t_cljs$core$async19848 = (function cljs$core$async$__GT_t_cljs$core$async19848(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19849){
return (new cljs.core.async.t_cljs$core$async19848(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19849));
});

}

return (new cljs.core.async.t_cljs$core$async19848(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18049__auto___22222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_19953){
var state_val_19954 = (state_19953[(1)]);
if((state_val_19954 === (7))){
var inst_19946 = (state_19953[(2)]);
var state_19953__$1 = state_19953;
var statearr_19957_22226 = state_19953__$1;
(statearr_19957_22226[(2)] = inst_19946);

(statearr_19957_22226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (20))){
var state_19953__$1 = state_19953;
var statearr_19963_22227 = state_19953__$1;
(statearr_19963_22227[(2)] = null);

(statearr_19963_22227[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (1))){
var state_19953__$1 = state_19953;
var statearr_19965_22228 = state_19953__$1;
(statearr_19965_22228[(2)] = null);

(statearr_19965_22228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (24))){
var inst_19925 = (state_19953[(7)]);
var inst_19938 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19925);
var state_19953__$1 = state_19953;
var statearr_19968_22233 = state_19953__$1;
(statearr_19968_22233[(2)] = inst_19938);

(statearr_19968_22233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (4))){
var inst_19873 = (state_19953[(8)]);
var inst_19873__$1 = (state_19953[(2)]);
var inst_19874 = (inst_19873__$1 == null);
var state_19953__$1 = (function (){var statearr_19969 = state_19953;
(statearr_19969[(8)] = inst_19873__$1);

return statearr_19969;
})();
if(cljs.core.truth_(inst_19874)){
var statearr_19970_22234 = state_19953__$1;
(statearr_19970_22234[(1)] = (5));

} else {
var statearr_19972_22235 = state_19953__$1;
(statearr_19972_22235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (15))){
var inst_19919 = (state_19953[(2)]);
var state_19953__$1 = state_19953;
var statearr_19977_22237 = state_19953__$1;
(statearr_19977_22237[(2)] = inst_19919);

(statearr_19977_22237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (21))){
var inst_19943 = (state_19953[(2)]);
var state_19953__$1 = (function (){var statearr_19978 = state_19953;
(statearr_19978[(9)] = inst_19943);

return statearr_19978;
})();
var statearr_19979_22238 = state_19953__$1;
(statearr_19979_22238[(2)] = null);

(statearr_19979_22238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (13))){
var inst_19901 = (state_19953[(10)]);
var inst_19903 = cljs.core.chunked_seq_QMARK_(inst_19901);
var state_19953__$1 = state_19953;
if(inst_19903){
var statearr_19982_22239 = state_19953__$1;
(statearr_19982_22239[(1)] = (16));

} else {
var statearr_19983_22241 = state_19953__$1;
(statearr_19983_22241[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (22))){
var inst_19935 = (state_19953[(2)]);
var state_19953__$1 = state_19953;
if(cljs.core.truth_(inst_19935)){
var statearr_19986_22242 = state_19953__$1;
(statearr_19986_22242[(1)] = (23));

} else {
var statearr_19990_22243 = state_19953__$1;
(statearr_19990_22243[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (6))){
var inst_19873 = (state_19953[(8)]);
var inst_19925 = (state_19953[(7)]);
var inst_19927 = (state_19953[(11)]);
var inst_19925__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19873) : topic_fn.call(null,inst_19873));
var inst_19926 = cljs.core.deref(mults);
var inst_19927__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19926,inst_19925__$1);
var state_19953__$1 = (function (){var statearr_19996 = state_19953;
(statearr_19996[(7)] = inst_19925__$1);

(statearr_19996[(11)] = inst_19927__$1);

return statearr_19996;
})();
if(cljs.core.truth_(inst_19927__$1)){
var statearr_19998_22244 = state_19953__$1;
(statearr_19998_22244[(1)] = (19));

} else {
var statearr_20000_22245 = state_19953__$1;
(statearr_20000_22245[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (25))){
var inst_19940 = (state_19953[(2)]);
var state_19953__$1 = state_19953;
var statearr_20003_22246 = state_19953__$1;
(statearr_20003_22246[(2)] = inst_19940);

(statearr_20003_22246[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (17))){
var inst_19901 = (state_19953[(10)]);
var inst_19910 = cljs.core.first(inst_19901);
var inst_19911 = cljs.core.async.muxch_STAR_(inst_19910);
var inst_19912 = cljs.core.async.close_BANG_(inst_19911);
var inst_19913 = cljs.core.next(inst_19901);
var inst_19885 = inst_19913;
var inst_19886 = null;
var inst_19887 = (0);
var inst_19888 = (0);
var state_19953__$1 = (function (){var statearr_20006 = state_19953;
(statearr_20006[(12)] = inst_19912);

(statearr_20006[(13)] = inst_19887);

(statearr_20006[(14)] = inst_19886);

(statearr_20006[(15)] = inst_19888);

(statearr_20006[(16)] = inst_19885);

return statearr_20006;
})();
var statearr_20007_22252 = state_19953__$1;
(statearr_20007_22252[(2)] = null);

(statearr_20007_22252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (3))){
var inst_19948 = (state_19953[(2)]);
var state_19953__$1 = state_19953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19953__$1,inst_19948);
} else {
if((state_val_19954 === (12))){
var inst_19921 = (state_19953[(2)]);
var state_19953__$1 = state_19953;
var statearr_20009_22257 = state_19953__$1;
(statearr_20009_22257[(2)] = inst_19921);

(statearr_20009_22257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (2))){
var state_19953__$1 = state_19953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19953__$1,(4),ch);
} else {
if((state_val_19954 === (23))){
var state_19953__$1 = state_19953;
var statearr_20012_22259 = state_19953__$1;
(statearr_20012_22259[(2)] = null);

(statearr_20012_22259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (19))){
var inst_19873 = (state_19953[(8)]);
var inst_19927 = (state_19953[(11)]);
var inst_19933 = cljs.core.async.muxch_STAR_(inst_19927);
var state_19953__$1 = state_19953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19953__$1,(22),inst_19933,inst_19873);
} else {
if((state_val_19954 === (11))){
var inst_19885 = (state_19953[(16)]);
var inst_19901 = (state_19953[(10)]);
var inst_19901__$1 = cljs.core.seq(inst_19885);
var state_19953__$1 = (function (){var statearr_20013 = state_19953;
(statearr_20013[(10)] = inst_19901__$1);

return statearr_20013;
})();
if(inst_19901__$1){
var statearr_20014_22273 = state_19953__$1;
(statearr_20014_22273[(1)] = (13));

} else {
var statearr_20015_22278 = state_19953__$1;
(statearr_20015_22278[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (9))){
var inst_19923 = (state_19953[(2)]);
var state_19953__$1 = state_19953;
var statearr_20018_22279 = state_19953__$1;
(statearr_20018_22279[(2)] = inst_19923);

(statearr_20018_22279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (5))){
var inst_19881 = cljs.core.deref(mults);
var inst_19882 = cljs.core.vals(inst_19881);
var inst_19883 = cljs.core.seq(inst_19882);
var inst_19885 = inst_19883;
var inst_19886 = null;
var inst_19887 = (0);
var inst_19888 = (0);
var state_19953__$1 = (function (){var statearr_20023 = state_19953;
(statearr_20023[(13)] = inst_19887);

(statearr_20023[(14)] = inst_19886);

(statearr_20023[(15)] = inst_19888);

(statearr_20023[(16)] = inst_19885);

return statearr_20023;
})();
var statearr_20024_22282 = state_19953__$1;
(statearr_20024_22282[(2)] = null);

(statearr_20024_22282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (14))){
var state_19953__$1 = state_19953;
var statearr_20028_22283 = state_19953__$1;
(statearr_20028_22283[(2)] = null);

(statearr_20028_22283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (16))){
var inst_19901 = (state_19953[(10)]);
var inst_19905 = cljs.core.chunk_first(inst_19901);
var inst_19906 = cljs.core.chunk_rest(inst_19901);
var inst_19907 = cljs.core.count(inst_19905);
var inst_19885 = inst_19906;
var inst_19886 = inst_19905;
var inst_19887 = inst_19907;
var inst_19888 = (0);
var state_19953__$1 = (function (){var statearr_20030 = state_19953;
(statearr_20030[(13)] = inst_19887);

(statearr_20030[(14)] = inst_19886);

(statearr_20030[(15)] = inst_19888);

(statearr_20030[(16)] = inst_19885);

return statearr_20030;
})();
var statearr_20031_22286 = state_19953__$1;
(statearr_20031_22286[(2)] = null);

(statearr_20031_22286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (10))){
var inst_19887 = (state_19953[(13)]);
var inst_19886 = (state_19953[(14)]);
var inst_19888 = (state_19953[(15)]);
var inst_19885 = (state_19953[(16)]);
var inst_19894 = cljs.core._nth(inst_19886,inst_19888);
var inst_19896 = cljs.core.async.muxch_STAR_(inst_19894);
var inst_19897 = cljs.core.async.close_BANG_(inst_19896);
var inst_19898 = (inst_19888 + (1));
var tmp20025 = inst_19887;
var tmp20026 = inst_19886;
var tmp20027 = inst_19885;
var inst_19885__$1 = tmp20027;
var inst_19886__$1 = tmp20026;
var inst_19887__$1 = tmp20025;
var inst_19888__$1 = inst_19898;
var state_19953__$1 = (function (){var statearr_20032 = state_19953;
(statearr_20032[(17)] = inst_19897);

(statearr_20032[(13)] = inst_19887__$1);

(statearr_20032[(14)] = inst_19886__$1);

(statearr_20032[(15)] = inst_19888__$1);

(statearr_20032[(16)] = inst_19885__$1);

return statearr_20032;
})();
var statearr_20033_22287 = state_19953__$1;
(statearr_20033_22287[(2)] = null);

(statearr_20033_22287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (18))){
var inst_19916 = (state_19953[(2)]);
var state_19953__$1 = state_19953;
var statearr_20035_22288 = state_19953__$1;
(statearr_20035_22288[(2)] = inst_19916);

(statearr_20035_22288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19954 === (8))){
var inst_19887 = (state_19953[(13)]);
var inst_19888 = (state_19953[(15)]);
var inst_19891 = (inst_19888 < inst_19887);
var inst_19892 = inst_19891;
var state_19953__$1 = state_19953;
if(cljs.core.truth_(inst_19892)){
var statearr_20036_22289 = state_19953__$1;
(statearr_20036_22289[(1)] = (10));

} else {
var statearr_20037_22290 = state_19953__$1;
(statearr_20037_22290[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__17908__auto__ = null;
var cljs$core$async$state_machine__17908__auto____0 = (function (){
var statearr_20040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20040[(0)] = cljs$core$async$state_machine__17908__auto__);

(statearr_20040[(1)] = (1));

return statearr_20040;
});
var cljs$core$async$state_machine__17908__auto____1 = (function (state_19953){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_19953);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e20041){var ex__17911__auto__ = e20041;
var statearr_20042_22291 = state_19953;
(statearr_20042_22291[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_19953[(4)]))){
var statearr_20043_22292 = state_19953;
(statearr_20043_22292[(1)] = cljs.core.first((state_19953[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22293 = state_19953;
state_19953 = G__22293;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$state_machine__17908__auto__ = function(state_19953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17908__auto____1.call(this,state_19953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17908__auto____0;
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17908__auto____1;
return cljs$core$async$state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_20047 = f__18050__auto__();
(statearr_20047[(6)] = c__18049__auto___22222);

return statearr_20047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__20050 = arguments.length;
switch (G__20050) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__20058 = arguments.length;
switch (G__20058) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__20074 = arguments.length;
switch (G__20074) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__18049__auto___22305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_20124){
var state_val_20125 = (state_20124[(1)]);
if((state_val_20125 === (7))){
var state_20124__$1 = state_20124;
var statearr_20126_22312 = state_20124__$1;
(statearr_20126_22312[(2)] = null);

(statearr_20126_22312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (1))){
var state_20124__$1 = state_20124;
var statearr_20127_22313 = state_20124__$1;
(statearr_20127_22313[(2)] = null);

(statearr_20127_22313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (4))){
var inst_20085 = (state_20124[(7)]);
var inst_20084 = (state_20124[(8)]);
var inst_20087 = (inst_20085 < inst_20084);
var state_20124__$1 = state_20124;
if(cljs.core.truth_(inst_20087)){
var statearr_20128_22317 = state_20124__$1;
(statearr_20128_22317[(1)] = (6));

} else {
var statearr_20129_22318 = state_20124__$1;
(statearr_20129_22318[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (15))){
var inst_20110 = (state_20124[(9)]);
var inst_20115 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20110);
var state_20124__$1 = state_20124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20124__$1,(17),out,inst_20115);
} else {
if((state_val_20125 === (13))){
var inst_20110 = (state_20124[(9)]);
var inst_20110__$1 = (state_20124[(2)]);
var inst_20111 = cljs.core.some(cljs.core.nil_QMARK_,inst_20110__$1);
var state_20124__$1 = (function (){var statearr_20130 = state_20124;
(statearr_20130[(9)] = inst_20110__$1);

return statearr_20130;
})();
if(cljs.core.truth_(inst_20111)){
var statearr_20131_22319 = state_20124__$1;
(statearr_20131_22319[(1)] = (14));

} else {
var statearr_20132_22323 = state_20124__$1;
(statearr_20132_22323[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (6))){
var state_20124__$1 = state_20124;
var statearr_20133_22325 = state_20124__$1;
(statearr_20133_22325[(2)] = null);

(statearr_20133_22325[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (17))){
var inst_20117 = (state_20124[(2)]);
var state_20124__$1 = (function (){var statearr_20140 = state_20124;
(statearr_20140[(10)] = inst_20117);

return statearr_20140;
})();
var statearr_20143_22327 = state_20124__$1;
(statearr_20143_22327[(2)] = null);

(statearr_20143_22327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (3))){
var inst_20122 = (state_20124[(2)]);
var state_20124__$1 = state_20124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20124__$1,inst_20122);
} else {
if((state_val_20125 === (12))){
var _ = (function (){var statearr_20145 = state_20124;
(statearr_20145[(4)] = cljs.core.rest((state_20124[(4)])));

return statearr_20145;
})();
var state_20124__$1 = state_20124;
var ex20137 = (state_20124__$1[(2)]);
var statearr_20146_22328 = state_20124__$1;
(statearr_20146_22328[(5)] = ex20137);


if((ex20137 instanceof Object)){
var statearr_20147_22332 = state_20124__$1;
(statearr_20147_22332[(1)] = (11));

(statearr_20147_22332[(5)] = null);

} else {
throw ex20137;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (2))){
var inst_20083 = cljs.core.reset_BANG_(dctr,cnt);
var inst_20084 = cnt;
var inst_20085 = (0);
var state_20124__$1 = (function (){var statearr_20154 = state_20124;
(statearr_20154[(11)] = inst_20083);

(statearr_20154[(7)] = inst_20085);

(statearr_20154[(8)] = inst_20084);

return statearr_20154;
})();
var statearr_20155_22333 = state_20124__$1;
(statearr_20155_22333[(2)] = null);

(statearr_20155_22333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (11))){
var inst_20089 = (state_20124[(2)]);
var inst_20090 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_20124__$1 = (function (){var statearr_20156 = state_20124;
(statearr_20156[(12)] = inst_20089);

return statearr_20156;
})();
var statearr_20157_22334 = state_20124__$1;
(statearr_20157_22334[(2)] = inst_20090);

(statearr_20157_22334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (9))){
var inst_20085 = (state_20124[(7)]);
var _ = (function (){var statearr_20158 = state_20124;
(statearr_20158[(4)] = cljs.core.cons((12),(state_20124[(4)])));

return statearr_20158;
})();
var inst_20096 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_20085) : chs__$1.call(null,inst_20085));
var inst_20097 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_20085) : done.call(null,inst_20085));
var inst_20098 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_20096,inst_20097);
var ___$1 = (function (){var statearr_20159 = state_20124;
(statearr_20159[(4)] = cljs.core.rest((state_20124[(4)])));

return statearr_20159;
})();
var state_20124__$1 = state_20124;
var statearr_20160_22340 = state_20124__$1;
(statearr_20160_22340[(2)] = inst_20098);

(statearr_20160_22340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (5))){
var inst_20108 = (state_20124[(2)]);
var state_20124__$1 = (function (){var statearr_20161 = state_20124;
(statearr_20161[(13)] = inst_20108);

return statearr_20161;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20124__$1,(13),dchan);
} else {
if((state_val_20125 === (14))){
var inst_20113 = cljs.core.async.close_BANG_(out);
var state_20124__$1 = state_20124;
var statearr_20162_22344 = state_20124__$1;
(statearr_20162_22344[(2)] = inst_20113);

(statearr_20162_22344[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (16))){
var inst_20120 = (state_20124[(2)]);
var state_20124__$1 = state_20124;
var statearr_20163_22351 = state_20124__$1;
(statearr_20163_22351[(2)] = inst_20120);

(statearr_20163_22351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (10))){
var inst_20085 = (state_20124[(7)]);
var inst_20101 = (state_20124[(2)]);
var inst_20102 = (inst_20085 + (1));
var inst_20085__$1 = inst_20102;
var state_20124__$1 = (function (){var statearr_20165 = state_20124;
(statearr_20165[(7)] = inst_20085__$1);

(statearr_20165[(14)] = inst_20101);

return statearr_20165;
})();
var statearr_20166_22352 = state_20124__$1;
(statearr_20166_22352[(2)] = null);

(statearr_20166_22352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20125 === (8))){
var inst_20106 = (state_20124[(2)]);
var state_20124__$1 = state_20124;
var statearr_20168_22353 = state_20124__$1;
(statearr_20168_22353[(2)] = inst_20106);

(statearr_20168_22353[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17908__auto__ = null;
var cljs$core$async$state_machine__17908__auto____0 = (function (){
var statearr_20172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20172[(0)] = cljs$core$async$state_machine__17908__auto__);

(statearr_20172[(1)] = (1));

return statearr_20172;
});
var cljs$core$async$state_machine__17908__auto____1 = (function (state_20124){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_20124);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e20174){var ex__17911__auto__ = e20174;
var statearr_20175_22360 = state_20124;
(statearr_20175_22360[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_20124[(4)]))){
var statearr_20180_22361 = state_20124;
(statearr_20180_22361[(1)] = cljs.core.first((state_20124[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22363 = state_20124;
state_20124 = G__22363;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$state_machine__17908__auto__ = function(state_20124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17908__auto____1.call(this,state_20124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17908__auto____0;
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17908__auto____1;
return cljs$core$async$state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_20193 = f__18050__auto__();
(statearr_20193[(6)] = c__18049__auto___22305);

return statearr_20193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__20199 = arguments.length;
switch (G__20199) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18049__auto___22368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_20250){
var state_val_20251 = (state_20250[(1)]);
if((state_val_20251 === (7))){
var inst_20222 = (state_20250[(7)]);
var inst_20223 = (state_20250[(8)]);
var inst_20222__$1 = (state_20250[(2)]);
var inst_20223__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20222__$1,(0),null);
var inst_20224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20222__$1,(1),null);
var inst_20225 = (inst_20223__$1 == null);
var state_20250__$1 = (function (){var statearr_20255 = state_20250;
(statearr_20255[(9)] = inst_20224);

(statearr_20255[(7)] = inst_20222__$1);

(statearr_20255[(8)] = inst_20223__$1);

return statearr_20255;
})();
if(cljs.core.truth_(inst_20225)){
var statearr_20256_22371 = state_20250__$1;
(statearr_20256_22371[(1)] = (8));

} else {
var statearr_20257_22372 = state_20250__$1;
(statearr_20257_22372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20251 === (1))){
var inst_20211 = cljs.core.vec(chs);
var inst_20212 = inst_20211;
var state_20250__$1 = (function (){var statearr_20258 = state_20250;
(statearr_20258[(10)] = inst_20212);

return statearr_20258;
})();
var statearr_20261_22379 = state_20250__$1;
(statearr_20261_22379[(2)] = null);

(statearr_20261_22379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20251 === (4))){
var inst_20212 = (state_20250[(10)]);
var state_20250__$1 = state_20250;
return cljs.core.async.ioc_alts_BANG_(state_20250__$1,(7),inst_20212);
} else {
if((state_val_20251 === (6))){
var inst_20245 = (state_20250[(2)]);
var state_20250__$1 = state_20250;
var statearr_20263_22380 = state_20250__$1;
(statearr_20263_22380[(2)] = inst_20245);

(statearr_20263_22380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20251 === (3))){
var inst_20247 = (state_20250[(2)]);
var state_20250__$1 = state_20250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20250__$1,inst_20247);
} else {
if((state_val_20251 === (2))){
var inst_20212 = (state_20250[(10)]);
var inst_20215 = cljs.core.count(inst_20212);
var inst_20216 = (inst_20215 > (0));
var state_20250__$1 = state_20250;
if(cljs.core.truth_(inst_20216)){
var statearr_20270_22385 = state_20250__$1;
(statearr_20270_22385[(1)] = (4));

} else {
var statearr_20272_22386 = state_20250__$1;
(statearr_20272_22386[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20251 === (11))){
var inst_20212 = (state_20250[(10)]);
var inst_20238 = (state_20250[(2)]);
var tmp20265 = inst_20212;
var inst_20212__$1 = tmp20265;
var state_20250__$1 = (function (){var statearr_20274 = state_20250;
(statearr_20274[(11)] = inst_20238);

(statearr_20274[(10)] = inst_20212__$1);

return statearr_20274;
})();
var statearr_20276_22387 = state_20250__$1;
(statearr_20276_22387[(2)] = null);

(statearr_20276_22387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20251 === (9))){
var inst_20223 = (state_20250[(8)]);
var state_20250__$1 = state_20250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20250__$1,(11),out,inst_20223);
} else {
if((state_val_20251 === (5))){
var inst_20243 = cljs.core.async.close_BANG_(out);
var state_20250__$1 = state_20250;
var statearr_20282_22391 = state_20250__$1;
(statearr_20282_22391[(2)] = inst_20243);

(statearr_20282_22391[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20251 === (10))){
var inst_20241 = (state_20250[(2)]);
var state_20250__$1 = state_20250;
var statearr_20283_22392 = state_20250__$1;
(statearr_20283_22392[(2)] = inst_20241);

(statearr_20283_22392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20251 === (8))){
var inst_20224 = (state_20250[(9)]);
var inst_20222 = (state_20250[(7)]);
var inst_20212 = (state_20250[(10)]);
var inst_20223 = (state_20250[(8)]);
var inst_20233 = (function (){var cs = inst_20212;
var vec__20218 = inst_20222;
var v = inst_20223;
var c = inst_20224;
return (function (p1__20197_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__20197_SHARP_);
});
})();
var inst_20234 = cljs.core.filterv(inst_20233,inst_20212);
var inst_20212__$1 = inst_20234;
var state_20250__$1 = (function (){var statearr_20284 = state_20250;
(statearr_20284[(10)] = inst_20212__$1);

return statearr_20284;
})();
var statearr_20285_22403 = state_20250__$1;
(statearr_20285_22403[(2)] = null);

(statearr_20285_22403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__17908__auto__ = null;
var cljs$core$async$state_machine__17908__auto____0 = (function (){
var statearr_20291 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20291[(0)] = cljs$core$async$state_machine__17908__auto__);

(statearr_20291[(1)] = (1));

return statearr_20291;
});
var cljs$core$async$state_machine__17908__auto____1 = (function (state_20250){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_20250);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e20292){var ex__17911__auto__ = e20292;
var statearr_20293_22405 = state_20250;
(statearr_20293_22405[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_20250[(4)]))){
var statearr_20294_22406 = state_20250;
(statearr_20294_22406[(1)] = cljs.core.first((state_20250[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22407 = state_20250;
state_20250 = G__22407;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$state_machine__17908__auto__ = function(state_20250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17908__auto____1.call(this,state_20250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17908__auto____0;
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17908__auto____1;
return cljs$core$async$state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_20296 = f__18050__auto__();
(statearr_20296[(6)] = c__18049__auto___22368);

return statearr_20296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__20307 = arguments.length;
switch (G__20307) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18049__auto___22413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_20333){
var state_val_20334 = (state_20333[(1)]);
if((state_val_20334 === (7))){
var inst_20313 = (state_20333[(7)]);
var inst_20313__$1 = (state_20333[(2)]);
var inst_20314 = (inst_20313__$1 == null);
var inst_20315 = cljs.core.not(inst_20314);
var state_20333__$1 = (function (){var statearr_20338 = state_20333;
(statearr_20338[(7)] = inst_20313__$1);

return statearr_20338;
})();
if(inst_20315){
var statearr_20339_22428 = state_20333__$1;
(statearr_20339_22428[(1)] = (8));

} else {
var statearr_20340_22429 = state_20333__$1;
(statearr_20340_22429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (1))){
var inst_20308 = (0);
var state_20333__$1 = (function (){var statearr_20341 = state_20333;
(statearr_20341[(8)] = inst_20308);

return statearr_20341;
})();
var statearr_20342_22442 = state_20333__$1;
(statearr_20342_22442[(2)] = null);

(statearr_20342_22442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (4))){
var state_20333__$1 = state_20333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20333__$1,(7),ch);
} else {
if((state_val_20334 === (6))){
var inst_20328 = (state_20333[(2)]);
var state_20333__$1 = state_20333;
var statearr_20343_22443 = state_20333__$1;
(statearr_20343_22443[(2)] = inst_20328);

(statearr_20343_22443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (3))){
var inst_20330 = (state_20333[(2)]);
var inst_20331 = cljs.core.async.close_BANG_(out);
var state_20333__$1 = (function (){var statearr_20344 = state_20333;
(statearr_20344[(9)] = inst_20330);

return statearr_20344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20333__$1,inst_20331);
} else {
if((state_val_20334 === (2))){
var inst_20308 = (state_20333[(8)]);
var inst_20310 = (inst_20308 < n);
var state_20333__$1 = state_20333;
if(cljs.core.truth_(inst_20310)){
var statearr_20349_22446 = state_20333__$1;
(statearr_20349_22446[(1)] = (4));

} else {
var statearr_20350_22447 = state_20333__$1;
(statearr_20350_22447[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (11))){
var inst_20308 = (state_20333[(8)]);
var inst_20318 = (state_20333[(2)]);
var inst_20320 = (inst_20308 + (1));
var inst_20308__$1 = inst_20320;
var state_20333__$1 = (function (){var statearr_20351 = state_20333;
(statearr_20351[(10)] = inst_20318);

(statearr_20351[(8)] = inst_20308__$1);

return statearr_20351;
})();
var statearr_20352_22458 = state_20333__$1;
(statearr_20352_22458[(2)] = null);

(statearr_20352_22458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (9))){
var state_20333__$1 = state_20333;
var statearr_20353_22459 = state_20333__$1;
(statearr_20353_22459[(2)] = null);

(statearr_20353_22459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (5))){
var state_20333__$1 = state_20333;
var statearr_20361_22460 = state_20333__$1;
(statearr_20361_22460[(2)] = null);

(statearr_20361_22460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (10))){
var inst_20324 = (state_20333[(2)]);
var state_20333__$1 = state_20333;
var statearr_20363_22464 = state_20333__$1;
(statearr_20363_22464[(2)] = inst_20324);

(statearr_20363_22464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (8))){
var inst_20313 = (state_20333[(7)]);
var state_20333__$1 = state_20333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20333__$1,(11),out,inst_20313);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__17908__auto__ = null;
var cljs$core$async$state_machine__17908__auto____0 = (function (){
var statearr_20377 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20377[(0)] = cljs$core$async$state_machine__17908__auto__);

(statearr_20377[(1)] = (1));

return statearr_20377;
});
var cljs$core$async$state_machine__17908__auto____1 = (function (state_20333){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_20333);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e20378){var ex__17911__auto__ = e20378;
var statearr_20379_22465 = state_20333;
(statearr_20379_22465[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_20333[(4)]))){
var statearr_20380_22467 = state_20333;
(statearr_20380_22467[(1)] = cljs.core.first((state_20333[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22468 = state_20333;
state_20333 = G__22468;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$state_machine__17908__auto__ = function(state_20333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17908__auto____1.call(this,state_20333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17908__auto____0;
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17908__auto____1;
return cljs$core$async$state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_20382 = f__18050__auto__();
(statearr_20382[(6)] = c__18049__auto___22413);

return statearr_20382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20387 = (function (f,ch,meta20388){
this.f = f;
this.ch = ch;
this.meta20388 = meta20388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20389,meta20388__$1){
var self__ = this;
var _20389__$1 = this;
return (new cljs.core.async.t_cljs$core$async20387(self__.f,self__.ch,meta20388__$1));
}));

(cljs.core.async.t_cljs$core$async20387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20389){
var self__ = this;
var _20389__$1 = this;
return self__.meta20388;
}));

(cljs.core.async.t_cljs$core$async20387.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20387.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20387.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20387.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20387.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20393 = (function (f,ch,meta20388,_,fn1,meta20394){
this.f = f;
this.ch = ch;
this.meta20388 = meta20388;
this._ = _;
this.fn1 = fn1;
this.meta20394 = meta20394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20395,meta20394__$1){
var self__ = this;
var _20395__$1 = this;
return (new cljs.core.async.t_cljs$core$async20393(self__.f,self__.ch,self__.meta20388,self__._,self__.fn1,meta20394__$1));
}));

(cljs.core.async.t_cljs$core$async20393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20395){
var self__ = this;
var _20395__$1 = this;
return self__.meta20394;
}));

(cljs.core.async.t_cljs$core$async20393.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20393.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__20385_SHARP_){
var G__20403 = (((p1__20385_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20385_SHARP_) : self__.f.call(null,p1__20385_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20403) : f1.call(null,G__20403));
});
}));

(cljs.core.async.t_cljs$core$async20393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20388","meta20388",837522373,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20387","cljs.core.async/t_cljs$core$async20387",-742025448,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20394","meta20394",2083223929,null)], null);
}));

(cljs.core.async.t_cljs$core$async20393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20393");

(cljs.core.async.t_cljs$core$async20393.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20393.
 */
cljs.core.async.__GT_t_cljs$core$async20393 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20393(f__$1,ch__$1,meta20388__$1,___$2,fn1__$1,meta20394){
return (new cljs.core.async.t_cljs$core$async20393(f__$1,ch__$1,meta20388__$1,___$2,fn1__$1,meta20394));
});

}

return (new cljs.core.async.t_cljs$core$async20393(self__.f,self__.ch,self__.meta20388,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20435 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20435) : self__.f.call(null,G__20435));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async20387.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20387.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20388","meta20388",837522373,null)], null);
}));

(cljs.core.async.t_cljs$core$async20387.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20387");

(cljs.core.async.t_cljs$core$async20387.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20387");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20387.
 */
cljs.core.async.__GT_t_cljs$core$async20387 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20387(f__$1,ch__$1,meta20388){
return (new cljs.core.async.t_cljs$core$async20387(f__$1,ch__$1,meta20388));
});

}

return (new cljs.core.async.t_cljs$core$async20387(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20446 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20446 = (function (f,ch,meta20447){
this.f = f;
this.ch = ch;
this.meta20447 = meta20447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20448,meta20447__$1){
var self__ = this;
var _20448__$1 = this;
return (new cljs.core.async.t_cljs$core$async20446(self__.f,self__.ch,meta20447__$1));
}));

(cljs.core.async.t_cljs$core$async20446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20448){
var self__ = this;
var _20448__$1 = this;
return self__.meta20447;
}));

(cljs.core.async.t_cljs$core$async20446.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20446.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20446.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20446.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20446.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20446.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async20446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20447","meta20447",-1113408831,null)], null);
}));

(cljs.core.async.t_cljs$core$async20446.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20446");

(cljs.core.async.t_cljs$core$async20446.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20446");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20446.
 */
cljs.core.async.__GT_t_cljs$core$async20446 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20446(f__$1,ch__$1,meta20447){
return (new cljs.core.async.t_cljs$core$async20446(f__$1,ch__$1,meta20447));
});

}

return (new cljs.core.async.t_cljs$core$async20446(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20473 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20473 = (function (p,ch,meta20474){
this.p = p;
this.ch = ch;
this.meta20474 = meta20474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20475,meta20474__$1){
var self__ = this;
var _20475__$1 = this;
return (new cljs.core.async.t_cljs$core$async20473(self__.p,self__.ch,meta20474__$1));
}));

(cljs.core.async.t_cljs$core$async20473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20475){
var self__ = this;
var _20475__$1 = this;
return self__.meta20474;
}));

(cljs.core.async.t_cljs$core$async20473.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20473.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20473.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20473.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20473.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20473.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20473.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20474","meta20474",2082269440,null)], null);
}));

(cljs.core.async.t_cljs$core$async20473.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20473");

(cljs.core.async.t_cljs$core$async20473.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20473");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20473.
 */
cljs.core.async.__GT_t_cljs$core$async20473 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20473(p__$1,ch__$1,meta20474){
return (new cljs.core.async.t_cljs$core$async20473(p__$1,ch__$1,meta20474));
});

}

return (new cljs.core.async.t_cljs$core$async20473(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__20542 = arguments.length;
switch (G__20542) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18049__auto___22524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_20564){
var state_val_20565 = (state_20564[(1)]);
if((state_val_20565 === (7))){
var inst_20560 = (state_20564[(2)]);
var state_20564__$1 = state_20564;
var statearr_20571_22526 = state_20564__$1;
(statearr_20571_22526[(2)] = inst_20560);

(statearr_20571_22526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (1))){
var state_20564__$1 = state_20564;
var statearr_20573_22527 = state_20564__$1;
(statearr_20573_22527[(2)] = null);

(statearr_20573_22527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (4))){
var inst_20546 = (state_20564[(7)]);
var inst_20546__$1 = (state_20564[(2)]);
var inst_20547 = (inst_20546__$1 == null);
var state_20564__$1 = (function (){var statearr_20575 = state_20564;
(statearr_20575[(7)] = inst_20546__$1);

return statearr_20575;
})();
if(cljs.core.truth_(inst_20547)){
var statearr_20576_22533 = state_20564__$1;
(statearr_20576_22533[(1)] = (5));

} else {
var statearr_20578_22534 = state_20564__$1;
(statearr_20578_22534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (6))){
var inst_20546 = (state_20564[(7)]);
var inst_20551 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20546) : p.call(null,inst_20546));
var state_20564__$1 = state_20564;
if(cljs.core.truth_(inst_20551)){
var statearr_20579_22538 = state_20564__$1;
(statearr_20579_22538[(1)] = (8));

} else {
var statearr_20580_22539 = state_20564__$1;
(statearr_20580_22539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (3))){
var inst_20562 = (state_20564[(2)]);
var state_20564__$1 = state_20564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20564__$1,inst_20562);
} else {
if((state_val_20565 === (2))){
var state_20564__$1 = state_20564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20564__$1,(4),ch);
} else {
if((state_val_20565 === (11))){
var inst_20554 = (state_20564[(2)]);
var state_20564__$1 = state_20564;
var statearr_20581_22550 = state_20564__$1;
(statearr_20581_22550[(2)] = inst_20554);

(statearr_20581_22550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (9))){
var state_20564__$1 = state_20564;
var statearr_20585_22551 = state_20564__$1;
(statearr_20585_22551[(2)] = null);

(statearr_20585_22551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (5))){
var inst_20549 = cljs.core.async.close_BANG_(out);
var state_20564__$1 = state_20564;
var statearr_20589_22555 = state_20564__$1;
(statearr_20589_22555[(2)] = inst_20549);

(statearr_20589_22555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (10))){
var inst_20557 = (state_20564[(2)]);
var state_20564__$1 = (function (){var statearr_20590 = state_20564;
(statearr_20590[(8)] = inst_20557);

return statearr_20590;
})();
var statearr_20591_22560 = state_20564__$1;
(statearr_20591_22560[(2)] = null);

(statearr_20591_22560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (8))){
var inst_20546 = (state_20564[(7)]);
var state_20564__$1 = state_20564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20564__$1,(11),out,inst_20546);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__17908__auto__ = null;
var cljs$core$async$state_machine__17908__auto____0 = (function (){
var statearr_20596 = [null,null,null,null,null,null,null,null,null];
(statearr_20596[(0)] = cljs$core$async$state_machine__17908__auto__);

(statearr_20596[(1)] = (1));

return statearr_20596;
});
var cljs$core$async$state_machine__17908__auto____1 = (function (state_20564){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_20564);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e20603){var ex__17911__auto__ = e20603;
var statearr_20604_22564 = state_20564;
(statearr_20604_22564[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_20564[(4)]))){
var statearr_20605_22566 = state_20564;
(statearr_20605_22566[(1)] = cljs.core.first((state_20564[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22567 = state_20564;
state_20564 = G__22567;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$state_machine__17908__auto__ = function(state_20564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17908__auto____1.call(this,state_20564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17908__auto____0;
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17908__auto____1;
return cljs$core$async$state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_20606 = f__18050__auto__();
(statearr_20606[(6)] = c__18049__auto___22524);

return statearr_20606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20608 = arguments.length;
switch (G__20608) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18049__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_20679){
var state_val_20680 = (state_20679[(1)]);
if((state_val_20680 === (7))){
var inst_20669 = (state_20679[(2)]);
var state_20679__$1 = state_20679;
var statearr_20688_22575 = state_20679__$1;
(statearr_20688_22575[(2)] = inst_20669);

(statearr_20688_22575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (20))){
var inst_20639 = (state_20679[(7)]);
var inst_20650 = (state_20679[(2)]);
var inst_20651 = cljs.core.next(inst_20639);
var inst_20622 = inst_20651;
var inst_20623 = null;
var inst_20624 = (0);
var inst_20625 = (0);
var state_20679__$1 = (function (){var statearr_20689 = state_20679;
(statearr_20689[(8)] = inst_20625);

(statearr_20689[(9)] = inst_20623);

(statearr_20689[(10)] = inst_20650);

(statearr_20689[(11)] = inst_20622);

(statearr_20689[(12)] = inst_20624);

return statearr_20689;
})();
var statearr_20690_22591 = state_20679__$1;
(statearr_20690_22591[(2)] = null);

(statearr_20690_22591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (1))){
var state_20679__$1 = state_20679;
var statearr_20691_22593 = state_20679__$1;
(statearr_20691_22593[(2)] = null);

(statearr_20691_22593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (4))){
var inst_20611 = (state_20679[(13)]);
var inst_20611__$1 = (state_20679[(2)]);
var inst_20612 = (inst_20611__$1 == null);
var state_20679__$1 = (function (){var statearr_20697 = state_20679;
(statearr_20697[(13)] = inst_20611__$1);

return statearr_20697;
})();
if(cljs.core.truth_(inst_20612)){
var statearr_20698_22609 = state_20679__$1;
(statearr_20698_22609[(1)] = (5));

} else {
var statearr_20699_22611 = state_20679__$1;
(statearr_20699_22611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (15))){
var state_20679__$1 = state_20679;
var statearr_20706_22616 = state_20679__$1;
(statearr_20706_22616[(2)] = null);

(statearr_20706_22616[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (21))){
var state_20679__$1 = state_20679;
var statearr_20707_22621 = state_20679__$1;
(statearr_20707_22621[(2)] = null);

(statearr_20707_22621[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (13))){
var inst_20625 = (state_20679[(8)]);
var inst_20623 = (state_20679[(9)]);
var inst_20622 = (state_20679[(11)]);
var inst_20624 = (state_20679[(12)]);
var inst_20632 = (state_20679[(2)]);
var inst_20636 = (inst_20625 + (1));
var tmp20703 = inst_20623;
var tmp20704 = inst_20622;
var tmp20705 = inst_20624;
var inst_20622__$1 = tmp20704;
var inst_20623__$1 = tmp20703;
var inst_20624__$1 = tmp20705;
var inst_20625__$1 = inst_20636;
var state_20679__$1 = (function (){var statearr_20708 = state_20679;
(statearr_20708[(14)] = inst_20632);

(statearr_20708[(8)] = inst_20625__$1);

(statearr_20708[(9)] = inst_20623__$1);

(statearr_20708[(11)] = inst_20622__$1);

(statearr_20708[(12)] = inst_20624__$1);

return statearr_20708;
})();
var statearr_20709_22635 = state_20679__$1;
(statearr_20709_22635[(2)] = null);

(statearr_20709_22635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (22))){
var state_20679__$1 = state_20679;
var statearr_20710_22637 = state_20679__$1;
(statearr_20710_22637[(2)] = null);

(statearr_20710_22637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (6))){
var inst_20611 = (state_20679[(13)]);
var inst_20620 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20611) : f.call(null,inst_20611));
var inst_20621 = cljs.core.seq(inst_20620);
var inst_20622 = inst_20621;
var inst_20623 = null;
var inst_20624 = (0);
var inst_20625 = (0);
var state_20679__$1 = (function (){var statearr_20711 = state_20679;
(statearr_20711[(8)] = inst_20625);

(statearr_20711[(9)] = inst_20623);

(statearr_20711[(11)] = inst_20622);

(statearr_20711[(12)] = inst_20624);

return statearr_20711;
})();
var statearr_20712_22639 = state_20679__$1;
(statearr_20712_22639[(2)] = null);

(statearr_20712_22639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (17))){
var inst_20639 = (state_20679[(7)]);
var inst_20643 = cljs.core.chunk_first(inst_20639);
var inst_20644 = cljs.core.chunk_rest(inst_20639);
var inst_20645 = cljs.core.count(inst_20643);
var inst_20622 = inst_20644;
var inst_20623 = inst_20643;
var inst_20624 = inst_20645;
var inst_20625 = (0);
var state_20679__$1 = (function (){var statearr_20713 = state_20679;
(statearr_20713[(8)] = inst_20625);

(statearr_20713[(9)] = inst_20623);

(statearr_20713[(11)] = inst_20622);

(statearr_20713[(12)] = inst_20624);

return statearr_20713;
})();
var statearr_20714_22641 = state_20679__$1;
(statearr_20714_22641[(2)] = null);

(statearr_20714_22641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (3))){
var inst_20673 = (state_20679[(2)]);
var state_20679__$1 = state_20679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20679__$1,inst_20673);
} else {
if((state_val_20680 === (12))){
var inst_20659 = (state_20679[(2)]);
var state_20679__$1 = state_20679;
var statearr_20717_22645 = state_20679__$1;
(statearr_20717_22645[(2)] = inst_20659);

(statearr_20717_22645[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (2))){
var state_20679__$1 = state_20679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20679__$1,(4),in$);
} else {
if((state_val_20680 === (23))){
var inst_20667 = (state_20679[(2)]);
var state_20679__$1 = state_20679;
var statearr_20723_22647 = state_20679__$1;
(statearr_20723_22647[(2)] = inst_20667);

(statearr_20723_22647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (19))){
var inst_20654 = (state_20679[(2)]);
var state_20679__$1 = state_20679;
var statearr_20727_22648 = state_20679__$1;
(statearr_20727_22648[(2)] = inst_20654);

(statearr_20727_22648[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (11))){
var inst_20639 = (state_20679[(7)]);
var inst_20622 = (state_20679[(11)]);
var inst_20639__$1 = cljs.core.seq(inst_20622);
var state_20679__$1 = (function (){var statearr_20728 = state_20679;
(statearr_20728[(7)] = inst_20639__$1);

return statearr_20728;
})();
if(inst_20639__$1){
var statearr_20729_22649 = state_20679__$1;
(statearr_20729_22649[(1)] = (14));

} else {
var statearr_20731_22650 = state_20679__$1;
(statearr_20731_22650[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (9))){
var inst_20661 = (state_20679[(2)]);
var inst_20662 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20679__$1 = (function (){var statearr_20732 = state_20679;
(statearr_20732[(15)] = inst_20661);

return statearr_20732;
})();
if(cljs.core.truth_(inst_20662)){
var statearr_20733_22653 = state_20679__$1;
(statearr_20733_22653[(1)] = (21));

} else {
var statearr_20734_22654 = state_20679__$1;
(statearr_20734_22654[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (5))){
var inst_20614 = cljs.core.async.close_BANG_(out);
var state_20679__$1 = state_20679;
var statearr_20735_22655 = state_20679__$1;
(statearr_20735_22655[(2)] = inst_20614);

(statearr_20735_22655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (14))){
var inst_20639 = (state_20679[(7)]);
var inst_20641 = cljs.core.chunked_seq_QMARK_(inst_20639);
var state_20679__$1 = state_20679;
if(inst_20641){
var statearr_20736_22659 = state_20679__$1;
(statearr_20736_22659[(1)] = (17));

} else {
var statearr_20737_22660 = state_20679__$1;
(statearr_20737_22660[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (16))){
var inst_20657 = (state_20679[(2)]);
var state_20679__$1 = state_20679;
var statearr_20739_22662 = state_20679__$1;
(statearr_20739_22662[(2)] = inst_20657);

(statearr_20739_22662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20680 === (10))){
var inst_20625 = (state_20679[(8)]);
var inst_20623 = (state_20679[(9)]);
var inst_20630 = cljs.core._nth(inst_20623,inst_20625);
var state_20679__$1 = state_20679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20679__$1,(13),out,inst_20630);
} else {
if((state_val_20680 === (18))){
var inst_20639 = (state_20679[(7)]);
var inst_20648 = cljs.core.first(inst_20639);
var state_20679__$1 = state_20679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20679__$1,(20),out,inst_20648);
} else {
if((state_val_20680 === (8))){
var inst_20625 = (state_20679[(8)]);
var inst_20624 = (state_20679[(12)]);
var inst_20627 = (inst_20625 < inst_20624);
var inst_20628 = inst_20627;
var state_20679__$1 = state_20679;
if(cljs.core.truth_(inst_20628)){
var statearr_20740_22696 = state_20679__$1;
(statearr_20740_22696[(1)] = (10));

} else {
var statearr_20741_22698 = state_20679__$1;
(statearr_20741_22698[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17908__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17908__auto____0 = (function (){
var statearr_20742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20742[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17908__auto__);

(statearr_20742[(1)] = (1));

return statearr_20742;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17908__auto____1 = (function (state_20679){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_20679);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e20745){var ex__17911__auto__ = e20745;
var statearr_20746_22715 = state_20679;
(statearr_20746_22715[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_20679[(4)]))){
var statearr_20747_22721 = state_20679;
(statearr_20747_22721[(1)] = cljs.core.first((state_20679[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22733 = state_20679;
state_20679 = G__22733;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17908__auto__ = function(state_20679){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17908__auto____1.call(this,state_20679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17908__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17908__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_20748 = f__18050__auto__();
(statearr_20748[(6)] = c__18049__auto__);

return statearr_20748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));

return c__18049__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20756 = arguments.length;
switch (G__20756) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20760 = arguments.length;
switch (G__20760) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20767 = arguments.length;
switch (G__20767) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18049__auto___22786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_20792){
var state_val_20793 = (state_20792[(1)]);
if((state_val_20793 === (7))){
var inst_20787 = (state_20792[(2)]);
var state_20792__$1 = state_20792;
var statearr_20794_22792 = state_20792__$1;
(statearr_20794_22792[(2)] = inst_20787);

(statearr_20794_22792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20793 === (1))){
var inst_20768 = null;
var state_20792__$1 = (function (){var statearr_20795 = state_20792;
(statearr_20795[(7)] = inst_20768);

return statearr_20795;
})();
var statearr_20797_22793 = state_20792__$1;
(statearr_20797_22793[(2)] = null);

(statearr_20797_22793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20793 === (4))){
var inst_20772 = (state_20792[(8)]);
var inst_20772__$1 = (state_20792[(2)]);
var inst_20773 = (inst_20772__$1 == null);
var inst_20774 = cljs.core.not(inst_20773);
var state_20792__$1 = (function (){var statearr_20798 = state_20792;
(statearr_20798[(8)] = inst_20772__$1);

return statearr_20798;
})();
if(inst_20774){
var statearr_20799_22794 = state_20792__$1;
(statearr_20799_22794[(1)] = (5));

} else {
var statearr_20800_22795 = state_20792__$1;
(statearr_20800_22795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20793 === (6))){
var state_20792__$1 = state_20792;
var statearr_20802_22796 = state_20792__$1;
(statearr_20802_22796[(2)] = null);

(statearr_20802_22796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20793 === (3))){
var inst_20789 = (state_20792[(2)]);
var inst_20790 = cljs.core.async.close_BANG_(out);
var state_20792__$1 = (function (){var statearr_20803 = state_20792;
(statearr_20803[(9)] = inst_20789);

return statearr_20803;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20792__$1,inst_20790);
} else {
if((state_val_20793 === (2))){
var state_20792__$1 = state_20792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20792__$1,(4),ch);
} else {
if((state_val_20793 === (11))){
var inst_20772 = (state_20792[(8)]);
var inst_20781 = (state_20792[(2)]);
var inst_20768 = inst_20772;
var state_20792__$1 = (function (){var statearr_20804 = state_20792;
(statearr_20804[(10)] = inst_20781);

(statearr_20804[(7)] = inst_20768);

return statearr_20804;
})();
var statearr_20805_22809 = state_20792__$1;
(statearr_20805_22809[(2)] = null);

(statearr_20805_22809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20793 === (9))){
var inst_20772 = (state_20792[(8)]);
var state_20792__$1 = state_20792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20792__$1,(11),out,inst_20772);
} else {
if((state_val_20793 === (5))){
var inst_20772 = (state_20792[(8)]);
var inst_20768 = (state_20792[(7)]);
var inst_20776 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20772,inst_20768);
var state_20792__$1 = state_20792;
if(inst_20776){
var statearr_20807_22818 = state_20792__$1;
(statearr_20807_22818[(1)] = (8));

} else {
var statearr_20809_22819 = state_20792__$1;
(statearr_20809_22819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20793 === (10))){
var inst_20784 = (state_20792[(2)]);
var state_20792__$1 = state_20792;
var statearr_20810_22821 = state_20792__$1;
(statearr_20810_22821[(2)] = inst_20784);

(statearr_20810_22821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20793 === (8))){
var inst_20768 = (state_20792[(7)]);
var tmp20806 = inst_20768;
var inst_20768__$1 = tmp20806;
var state_20792__$1 = (function (){var statearr_20812 = state_20792;
(statearr_20812[(7)] = inst_20768__$1);

return statearr_20812;
})();
var statearr_20818_22822 = state_20792__$1;
(statearr_20818_22822[(2)] = null);

(statearr_20818_22822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__17908__auto__ = null;
var cljs$core$async$state_machine__17908__auto____0 = (function (){
var statearr_20819 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20819[(0)] = cljs$core$async$state_machine__17908__auto__);

(statearr_20819[(1)] = (1));

return statearr_20819;
});
var cljs$core$async$state_machine__17908__auto____1 = (function (state_20792){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_20792);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e20820){var ex__17911__auto__ = e20820;
var statearr_20821_22824 = state_20792;
(statearr_20821_22824[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_20792[(4)]))){
var statearr_20822_22825 = state_20792;
(statearr_20822_22825[(1)] = cljs.core.first((state_20792[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22830 = state_20792;
state_20792 = G__22830;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$state_machine__17908__auto__ = function(state_20792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17908__auto____1.call(this,state_20792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17908__auto____0;
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17908__auto____1;
return cljs$core$async$state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_20823 = f__18050__auto__();
(statearr_20823[(6)] = c__18049__auto___22786);

return statearr_20823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20826 = arguments.length;
switch (G__20826) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18049__auto___22848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_20873){
var state_val_20874 = (state_20873[(1)]);
if((state_val_20874 === (7))){
var inst_20866 = (state_20873[(2)]);
var state_20873__$1 = state_20873;
var statearr_20878_22856 = state_20873__$1;
(statearr_20878_22856[(2)] = inst_20866);

(statearr_20878_22856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20874 === (1))){
var inst_20828 = (new Array(n));
var inst_20829 = inst_20828;
var inst_20830 = (0);
var state_20873__$1 = (function (){var statearr_20879 = state_20873;
(statearr_20879[(7)] = inst_20829);

(statearr_20879[(8)] = inst_20830);

return statearr_20879;
})();
var statearr_20880_22861 = state_20873__$1;
(statearr_20880_22861[(2)] = null);

(statearr_20880_22861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20874 === (4))){
var inst_20833 = (state_20873[(9)]);
var inst_20833__$1 = (state_20873[(2)]);
var inst_20834 = (inst_20833__$1 == null);
var inst_20835 = cljs.core.not(inst_20834);
var state_20873__$1 = (function (){var statearr_20881 = state_20873;
(statearr_20881[(9)] = inst_20833__$1);

return statearr_20881;
})();
if(inst_20835){
var statearr_20883_22871 = state_20873__$1;
(statearr_20883_22871[(1)] = (5));

} else {
var statearr_20884_22874 = state_20873__$1;
(statearr_20884_22874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20874 === (15))){
var inst_20860 = (state_20873[(2)]);
var state_20873__$1 = state_20873;
var statearr_20885_22880 = state_20873__$1;
(statearr_20885_22880[(2)] = inst_20860);

(statearr_20885_22880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20874 === (13))){
var state_20873__$1 = state_20873;
var statearr_20888_22885 = state_20873__$1;
(statearr_20888_22885[(2)] = null);

(statearr_20888_22885[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20874 === (6))){
var inst_20830 = (state_20873[(8)]);
var inst_20856 = (inst_20830 > (0));
var state_20873__$1 = state_20873;
if(cljs.core.truth_(inst_20856)){
var statearr_20892_22886 = state_20873__$1;
(statearr_20892_22886[(1)] = (12));

} else {
var statearr_20893_22887 = state_20873__$1;
(statearr_20893_22887[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20874 === (3))){
var inst_20868 = (state_20873[(2)]);
var state_20873__$1 = state_20873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20873__$1,inst_20868);
} else {
if((state_val_20874 === (12))){
var inst_20829 = (state_20873[(7)]);
var inst_20858 = cljs.core.vec(inst_20829);
var state_20873__$1 = state_20873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20873__$1,(15),out,inst_20858);
} else {
if((state_val_20874 === (2))){
var state_20873__$1 = state_20873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20873__$1,(4),ch);
} else {
if((state_val_20874 === (11))){
var inst_20849 = (state_20873[(2)]);
var inst_20850 = (new Array(n));
var inst_20829 = inst_20850;
var inst_20830 = (0);
var state_20873__$1 = (function (){var statearr_20898 = state_20873;
(statearr_20898[(7)] = inst_20829);

(statearr_20898[(8)] = inst_20830);

(statearr_20898[(10)] = inst_20849);

return statearr_20898;
})();
var statearr_20899_22924 = state_20873__$1;
(statearr_20899_22924[(2)] = null);

(statearr_20899_22924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20874 === (9))){
var inst_20829 = (state_20873[(7)]);
var inst_20847 = cljs.core.vec(inst_20829);
var state_20873__$1 = state_20873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20873__$1,(11),out,inst_20847);
} else {
if((state_val_20874 === (5))){
var inst_20829 = (state_20873[(7)]);
var inst_20833 = (state_20873[(9)]);
var inst_20830 = (state_20873[(8)]);
var inst_20838 = (state_20873[(11)]);
var inst_20837 = (inst_20829[inst_20830] = inst_20833);
var inst_20838__$1 = (inst_20830 + (1));
var inst_20839 = (inst_20838__$1 < n);
var state_20873__$1 = (function (){var statearr_20909 = state_20873;
(statearr_20909[(12)] = inst_20837);

(statearr_20909[(11)] = inst_20838__$1);

return statearr_20909;
})();
if(cljs.core.truth_(inst_20839)){
var statearr_20910_22946 = state_20873__$1;
(statearr_20910_22946[(1)] = (8));

} else {
var statearr_20911_22947 = state_20873__$1;
(statearr_20911_22947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20874 === (14))){
var inst_20863 = (state_20873[(2)]);
var inst_20864 = cljs.core.async.close_BANG_(out);
var state_20873__$1 = (function (){var statearr_20915 = state_20873;
(statearr_20915[(13)] = inst_20863);

return statearr_20915;
})();
var statearr_20916_22951 = state_20873__$1;
(statearr_20916_22951[(2)] = inst_20864);

(statearr_20916_22951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20874 === (10))){
var inst_20853 = (state_20873[(2)]);
var state_20873__$1 = state_20873;
var statearr_20919_22952 = state_20873__$1;
(statearr_20919_22952[(2)] = inst_20853);

(statearr_20919_22952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20874 === (8))){
var inst_20829 = (state_20873[(7)]);
var inst_20838 = (state_20873[(11)]);
var tmp20912 = inst_20829;
var inst_20829__$1 = tmp20912;
var inst_20830 = inst_20838;
var state_20873__$1 = (function (){var statearr_20921 = state_20873;
(statearr_20921[(7)] = inst_20829__$1);

(statearr_20921[(8)] = inst_20830);

return statearr_20921;
})();
var statearr_20924_22955 = state_20873__$1;
(statearr_20924_22955[(2)] = null);

(statearr_20924_22955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17908__auto__ = null;
var cljs$core$async$state_machine__17908__auto____0 = (function (){
var statearr_20925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20925[(0)] = cljs$core$async$state_machine__17908__auto__);

(statearr_20925[(1)] = (1));

return statearr_20925;
});
var cljs$core$async$state_machine__17908__auto____1 = (function (state_20873){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_20873);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e20926){var ex__17911__auto__ = e20926;
var statearr_20927_22975 = state_20873;
(statearr_20927_22975[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_20873[(4)]))){
var statearr_20928_22976 = state_20873;
(statearr_20928_22976[(1)] = cljs.core.first((state_20873[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22983 = state_20873;
state_20873 = G__22983;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$state_machine__17908__auto__ = function(state_20873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17908__auto____1.call(this,state_20873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17908__auto____0;
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17908__auto____1;
return cljs$core$async$state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_20930 = f__18050__auto__();
(statearr_20930[(6)] = c__18049__auto___22848);

return statearr_20930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20932 = arguments.length;
switch (G__20932) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18049__auto___23001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18050__auto__ = (function (){var switch__17907__auto__ = (function (state_20982){
var state_val_20983 = (state_20982[(1)]);
if((state_val_20983 === (7))){
var inst_20978 = (state_20982[(2)]);
var state_20982__$1 = state_20982;
var statearr_20985_23004 = state_20982__$1;
(statearr_20985_23004[(2)] = inst_20978);

(statearr_20985_23004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20983 === (1))){
var inst_20935 = [];
var inst_20936 = inst_20935;
var inst_20937 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20982__$1 = (function (){var statearr_20986 = state_20982;
(statearr_20986[(7)] = inst_20936);

(statearr_20986[(8)] = inst_20937);

return statearr_20986;
})();
var statearr_20987_23006 = state_20982__$1;
(statearr_20987_23006[(2)] = null);

(statearr_20987_23006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20983 === (4))){
var inst_20941 = (state_20982[(9)]);
var inst_20941__$1 = (state_20982[(2)]);
var inst_20943 = (inst_20941__$1 == null);
var inst_20944 = cljs.core.not(inst_20943);
var state_20982__$1 = (function (){var statearr_20988 = state_20982;
(statearr_20988[(9)] = inst_20941__$1);

return statearr_20988;
})();
if(inst_20944){
var statearr_20989_23009 = state_20982__$1;
(statearr_20989_23009[(1)] = (5));

} else {
var statearr_20990_23010 = state_20982__$1;
(statearr_20990_23010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20983 === (15))){
var inst_20936 = (state_20982[(7)]);
var inst_20970 = cljs.core.vec(inst_20936);
var state_20982__$1 = state_20982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20982__$1,(18),out,inst_20970);
} else {
if((state_val_20983 === (13))){
var inst_20965 = (state_20982[(2)]);
var state_20982__$1 = state_20982;
var statearr_20999_23012 = state_20982__$1;
(statearr_20999_23012[(2)] = inst_20965);

(statearr_20999_23012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20983 === (6))){
var inst_20936 = (state_20982[(7)]);
var inst_20967 = inst_20936.length;
var inst_20968 = (inst_20967 > (0));
var state_20982__$1 = state_20982;
if(cljs.core.truth_(inst_20968)){
var statearr_21005_23013 = state_20982__$1;
(statearr_21005_23013[(1)] = (15));

} else {
var statearr_21006_23014 = state_20982__$1;
(statearr_21006_23014[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20983 === (17))){
var inst_20975 = (state_20982[(2)]);
var inst_20976 = cljs.core.async.close_BANG_(out);
var state_20982__$1 = (function (){var statearr_21007 = state_20982;
(statearr_21007[(10)] = inst_20975);

return statearr_21007;
})();
var statearr_21008_23022 = state_20982__$1;
(statearr_21008_23022[(2)] = inst_20976);

(statearr_21008_23022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20983 === (3))){
var inst_20980 = (state_20982[(2)]);
var state_20982__$1 = state_20982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20982__$1,inst_20980);
} else {
if((state_val_20983 === (12))){
var inst_20936 = (state_20982[(7)]);
var inst_20958 = cljs.core.vec(inst_20936);
var state_20982__$1 = state_20982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20982__$1,(14),out,inst_20958);
} else {
if((state_val_20983 === (2))){
var state_20982__$1 = state_20982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20982__$1,(4),ch);
} else {
if((state_val_20983 === (11))){
var inst_20941 = (state_20982[(9)]);
var inst_20947 = (state_20982[(11)]);
var inst_20936 = (state_20982[(7)]);
var inst_20955 = inst_20936.push(inst_20941);
var tmp21009 = inst_20936;
var inst_20936__$1 = tmp21009;
var inst_20937 = inst_20947;
var state_20982__$1 = (function (){var statearr_21016 = state_20982;
(statearr_21016[(7)] = inst_20936__$1);

(statearr_21016[(12)] = inst_20955);

(statearr_21016[(8)] = inst_20937);

return statearr_21016;
})();
var statearr_21017_23035 = state_20982__$1;
(statearr_21017_23035[(2)] = null);

(statearr_21017_23035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20983 === (9))){
var inst_20937 = (state_20982[(8)]);
var inst_20951 = cljs.core.keyword_identical_QMARK_(inst_20937,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20982__$1 = state_20982;
var statearr_21018_23036 = state_20982__$1;
(statearr_21018_23036[(2)] = inst_20951);

(statearr_21018_23036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20983 === (5))){
var inst_20941 = (state_20982[(9)]);
var inst_20948 = (state_20982[(13)]);
var inst_20947 = (state_20982[(11)]);
var inst_20937 = (state_20982[(8)]);
var inst_20947__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20941) : f.call(null,inst_20941));
var inst_20948__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20947__$1,inst_20937);
var state_20982__$1 = (function (){var statearr_21024 = state_20982;
(statearr_21024[(13)] = inst_20948__$1);

(statearr_21024[(11)] = inst_20947__$1);

return statearr_21024;
})();
if(inst_20948__$1){
var statearr_21028_23041 = state_20982__$1;
(statearr_21028_23041[(1)] = (8));

} else {
var statearr_21049_23042 = state_20982__$1;
(statearr_21049_23042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20983 === (14))){
var inst_20941 = (state_20982[(9)]);
var inst_20947 = (state_20982[(11)]);
var inst_20960 = (state_20982[(2)]);
var inst_20961 = [];
var inst_20962 = inst_20961.push(inst_20941);
var inst_20936 = inst_20961;
var inst_20937 = inst_20947;
var state_20982__$1 = (function (){var statearr_21051 = state_20982;
(statearr_21051[(14)] = inst_20962);

(statearr_21051[(7)] = inst_20936);

(statearr_21051[(15)] = inst_20960);

(statearr_21051[(8)] = inst_20937);

return statearr_21051;
})();
var statearr_21054_23043 = state_20982__$1;
(statearr_21054_23043[(2)] = null);

(statearr_21054_23043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20983 === (16))){
var state_20982__$1 = state_20982;
var statearr_21056_23044 = state_20982__$1;
(statearr_21056_23044[(2)] = null);

(statearr_21056_23044[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20983 === (10))){
var inst_20953 = (state_20982[(2)]);
var state_20982__$1 = state_20982;
if(cljs.core.truth_(inst_20953)){
var statearr_21057_23045 = state_20982__$1;
(statearr_21057_23045[(1)] = (11));

} else {
var statearr_21058_23046 = state_20982__$1;
(statearr_21058_23046[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20983 === (18))){
var inst_20972 = (state_20982[(2)]);
var state_20982__$1 = state_20982;
var statearr_21064_23047 = state_20982__$1;
(statearr_21064_23047[(2)] = inst_20972);

(statearr_21064_23047[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20983 === (8))){
var inst_20948 = (state_20982[(13)]);
var state_20982__$1 = state_20982;
var statearr_21065_23051 = state_20982__$1;
(statearr_21065_23051[(2)] = inst_20948);

(statearr_21065_23051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17908__auto__ = null;
var cljs$core$async$state_machine__17908__auto____0 = (function (){
var statearr_21067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21067[(0)] = cljs$core$async$state_machine__17908__auto__);

(statearr_21067[(1)] = (1));

return statearr_21067;
});
var cljs$core$async$state_machine__17908__auto____1 = (function (state_20982){
while(true){
var ret_value__17909__auto__ = (function (){try{while(true){
var result__17910__auto__ = switch__17907__auto__(state_20982);
if(cljs.core.keyword_identical_QMARK_(result__17910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17910__auto__;
}
break;
}
}catch (e21070){var ex__17911__auto__ = e21070;
var statearr_21071_23052 = state_20982;
(statearr_21071_23052[(2)] = ex__17911__auto__);


if(cljs.core.seq((state_20982[(4)]))){
var statearr_21072_23053 = state_20982;
(statearr_21072_23053[(1)] = cljs.core.first((state_20982[(4)])));

} else {
throw ex__17911__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23054 = state_20982;
state_20982 = G__23054;
continue;
} else {
return ret_value__17909__auto__;
}
break;
}
});
cljs$core$async$state_machine__17908__auto__ = function(state_20982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17908__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17908__auto____1.call(this,state_20982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17908__auto____0;
cljs$core$async$state_machine__17908__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17908__auto____1;
return cljs$core$async$state_machine__17908__auto__;
})()
})();
var state__18051__auto__ = (function (){var statearr_21076 = f__18050__auto__();
(statearr_21076[(6)] = c__18049__auto___23001);

return statearr_21076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18051__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
