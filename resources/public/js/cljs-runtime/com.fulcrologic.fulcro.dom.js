goog.provide('com.fulcrologic.fulcro.dom');
goog.scope(function(){
  com.fulcrologic.fulcro.dom.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__32417){
var vec__32418 = p__32417;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32418,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32418,(1),null);
var pair = vec__32418;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__32421){
var vec__32422 = p__32421;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32422,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32422,(1),null);
var pair = vec__32422;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__32425){
var vec__32426 = p__32425;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32426,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32426,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__32429 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32429,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__32429;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__32431 = arguments.length;
switch (G__32431) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__32432 = component.refs;
var G__32432__$1 = (((G__32432 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__32432,name));
if((G__32432__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__32432__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5802__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5802__auto__)){
var ref = temp__5802__auto__;
var G__32433 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__32434 = (function (){var G__32435 = r;
if((G__32435 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__32435);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__32434) : ref.call(null,G__32434));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__32433) : factory.call(null,G__32433));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__32440 = arguments.length;
switch (G__32440) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___32868 = arguments.length;
var i__5770__auto___32869 = (0);
while(true){
if((i__5770__auto___32869 < len__5769__auto___32868)){
args_arr__5794__auto__.push((arguments[i__5770__auto___32869]));

var G__32870 = (i__5770__auto___32869 + (1));
i__5770__auto___32869 = G__32870;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq32437){
var G__32438 = cljs.core.first(seq32437);
var seq32437__$1 = cljs.core.next(seq32437);
var G__32439 = cljs.core.first(seq32437__$1);
var seq32437__$2 = cljs.core.next(seq32437__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32438,G__32439,seq32437__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(next_props,"inputRef");
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(next_state,"inputRef");

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__5043__auto__ = tag;
if(cljs.core.truth_(and__5043__auto__)){
var G__32441 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__32441) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__32441));
} else {
return and__5043__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"inputRef")});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$,"onChange"),this$)}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return module$node_modules$react$index.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x32443_32871 = ctor.prototype;
(x32443_32871.onChange = (function (event){
var this$ = this;
var temp__5804__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5804__auto__)){
var handler = temp__5804__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x32443_32871.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__32442_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__32442_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__5043__auto__ = state_value;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = element_value;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,1755254506);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,com.fulcrologic.fulcro.dom.goog$module$goog$object.get(new_props,"value"));
}
}));

(x32443_32871.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__32872__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__32872 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32873__i = 0, G__32873__a = new Array(arguments.length -  0);
while (G__32873__i < G__32873__a.length) {G__32873__a[G__32873__i] = arguments[G__32873__i + 0]; ++G__32873__i;}
  args = new cljs.core.IndexedSeq(G__32873__a,0,null);
} 
return G__32872__delegate.call(this,args);};
G__32872.cljs$lang$maxFixedArity = 0;
G__32872.cljs$lang$applyTo = (function (arglist__32874){
var args = cljs.core.seq(arglist__32874);
return G__32872__delegate(args);
});
G__32872.cljs$core$IFn$_invoke$arity$variadic = G__32872__delegate;
return G__32872;
})()
;
return (function() { 
var G__32875__delegate = function (props,children){
var t = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5802__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"ref");
if(cljs.core.truth_(temp__5802__auto__)){
var r = temp__5802__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(p,props);

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(p,"inputRef",r);

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__32875 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__32876__i = 0, G__32876__a = new Array(arguments.length -  1);
while (G__32876__i < G__32876__a.length) {G__32876__a[G__32876__i] = arguments[G__32876__i + 1]; ++G__32876__i;}
  children = new cljs.core.IndexedSeq(G__32876__a,0,null);
} 
return G__32875__delegate.call(this,props,children);};
G__32875.cljs$lang$maxFixedArity = 1;
G__32875.cljs$lang$applyTo = (function (arglist__32877){
var props = cljs.core.first(arglist__32877);
var children = cljs.core.rest(arglist__32877);
return G__32875__delegate(props,children);
});
G__32875.cljs$core$IFn$_invoke$arity$variadic = G__32875__delegate;
return G__32875;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__32444 = tag;
switch (G__32444) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32444)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__32446 = arguments.length;
switch (G__32446) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__32447 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__32448 = cljs.core.seq(vec__32447);
var first__32449 = cljs.core.first(seq__32448);
var seq__32448__$1 = cljs.core.next(seq__32448);
var head = first__32449;
var tail = seq__32448__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__32450 = (function (){var G__32451 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__32451,tail);

return G__32451;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32450) : f.call(null,G__32450));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__32452 = (function (){var G__32453 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__32453,args);

return G__32453;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32452) : f.call(null,G__32452));
} else {
if(cljs.core.object_QMARK_(head)){
var G__32454 = (function (){var G__32455 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__32455,tail);

return G__32455;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32454) : f.call(null,G__32454));
} else {
if(cljs.core.map_QMARK_(head)){
var G__32456 = (function (){var G__32457 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__32457,tail);

return G__32457;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32456) : f.call(null,G__32456));
} else {
var G__32458 = (function (){var G__32459 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__32459,args);

return G__32459;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32458) : f.call(null,G__32458));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__32461 = arguments.length;
switch (G__32461) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__32462 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__32463 = cljs.core.seq(vec__32462);
var first__32464 = cljs.core.first(seq__32463);
var seq__32463__$1 = cljs.core.next(seq__32463);
var head = first__32464;
var tail = seq__32463__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__32465 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__32465,tail);

return G__32465;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__32466 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__32466,args);

return G__32466;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__32467 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__32467,tail);

return G__32467;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__32468 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__32468,tail);

return G__32468;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__32469 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__32469,args);

return G__32469;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32884 = arguments.length;
var i__5770__auto___32885 = (0);
while(true){
if((i__5770__auto___32885 < len__5769__auto___32884)){
args__5775__auto__.push((arguments[i__5770__auto___32885]));

var G__32886 = (i__5770__auto___32885 + (1));
i__5770__auto___32885 = G__32886;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32471 = conformed_args__31205__auto__;
var map__32471__$1 = cljs.core.__destructure_map(map__32471);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32471__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32471__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32471__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq32470){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32470));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32891 = arguments.length;
var i__5770__auto___32892 = (0);
while(true){
if((i__5770__auto___32892 < len__5769__auto___32891)){
args__5775__auto__.push((arguments[i__5770__auto___32892]));

var G__32893 = (i__5770__auto___32892 + (1));
i__5770__auto___32892 = G__32893;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32473 = conformed_args__31205__auto__;
var map__32473__$1 = cljs.core.__destructure_map(map__32473);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32473__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32473__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32473__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq32472){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32472));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32894 = arguments.length;
var i__5770__auto___32895 = (0);
while(true){
if((i__5770__auto___32895 < len__5769__auto___32894)){
args__5775__auto__.push((arguments[i__5770__auto___32895]));

var G__32896 = (i__5770__auto___32895 + (1));
i__5770__auto___32895 = G__32896;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32475 = conformed_args__31205__auto__;
var map__32475__$1 = cljs.core.__destructure_map(map__32475);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32475__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32475__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32475__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq32474){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32474));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32897 = arguments.length;
var i__5770__auto___32898 = (0);
while(true){
if((i__5770__auto___32898 < len__5769__auto___32897)){
args__5775__auto__.push((arguments[i__5770__auto___32898]));

var G__32899 = (i__5770__auto___32898 + (1));
i__5770__auto___32898 = G__32899;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32477 = conformed_args__31205__auto__;
var map__32477__$1 = cljs.core.__destructure_map(map__32477);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32477__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32477__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32477__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq32476){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32476));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32900 = arguments.length;
var i__5770__auto___32901 = (0);
while(true){
if((i__5770__auto___32901 < len__5769__auto___32900)){
args__5775__auto__.push((arguments[i__5770__auto___32901]));

var G__32902 = (i__5770__auto___32901 + (1));
i__5770__auto___32901 = G__32902;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32479 = conformed_args__31205__auto__;
var map__32479__$1 = cljs.core.__destructure_map(map__32479);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32479__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32479__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32479__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq32478){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32478));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32903 = arguments.length;
var i__5770__auto___32904 = (0);
while(true){
if((i__5770__auto___32904 < len__5769__auto___32903)){
args__5775__auto__.push((arguments[i__5770__auto___32904]));

var G__32905 = (i__5770__auto___32904 + (1));
i__5770__auto___32904 = G__32905;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32481 = conformed_args__31205__auto__;
var map__32481__$1 = cljs.core.__destructure_map(map__32481);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32481__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32481__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32481__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq32480){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32480));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32906 = arguments.length;
var i__5770__auto___32907 = (0);
while(true){
if((i__5770__auto___32907 < len__5769__auto___32906)){
args__5775__auto__.push((arguments[i__5770__auto___32907]));

var G__32908 = (i__5770__auto___32907 + (1));
i__5770__auto___32907 = G__32908;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32483 = conformed_args__31205__auto__;
var map__32483__$1 = cljs.core.__destructure_map(map__32483);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32483__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32483__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32483__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq32482){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32482));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32909 = arguments.length;
var i__5770__auto___32910 = (0);
while(true){
if((i__5770__auto___32910 < len__5769__auto___32909)){
args__5775__auto__.push((arguments[i__5770__auto___32910]));

var G__32911 = (i__5770__auto___32910 + (1));
i__5770__auto___32910 = G__32911;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32485 = conformed_args__31205__auto__;
var map__32485__$1 = cljs.core.__destructure_map(map__32485);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32485__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32485__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32485__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq32484){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32484));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32912 = arguments.length;
var i__5770__auto___32913 = (0);
while(true){
if((i__5770__auto___32913 < len__5769__auto___32912)){
args__5775__auto__.push((arguments[i__5770__auto___32913]));

var G__32914 = (i__5770__auto___32913 + (1));
i__5770__auto___32913 = G__32914;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32487 = conformed_args__31205__auto__;
var map__32487__$1 = cljs.core.__destructure_map(map__32487);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32487__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32487__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32487__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq32486){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32486));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32915 = arguments.length;
var i__5770__auto___32916 = (0);
while(true){
if((i__5770__auto___32916 < len__5769__auto___32915)){
args__5775__auto__.push((arguments[i__5770__auto___32916]));

var G__32917 = (i__5770__auto___32916 + (1));
i__5770__auto___32916 = G__32917;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32489 = conformed_args__31205__auto__;
var map__32489__$1 = cljs.core.__destructure_map(map__32489);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32489__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32489__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32489__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq32488){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32488));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32918 = arguments.length;
var i__5770__auto___32919 = (0);
while(true){
if((i__5770__auto___32919 < len__5769__auto___32918)){
args__5775__auto__.push((arguments[i__5770__auto___32919]));

var G__32920 = (i__5770__auto___32919 + (1));
i__5770__auto___32919 = G__32920;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32491 = conformed_args__31205__auto__;
var map__32491__$1 = cljs.core.__destructure_map(map__32491);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32491__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32491__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32491__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq32490){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32490));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32921 = arguments.length;
var i__5770__auto___32922 = (0);
while(true){
if((i__5770__auto___32922 < len__5769__auto___32921)){
args__5775__auto__.push((arguments[i__5770__auto___32922]));

var G__32923 = (i__5770__auto___32922 + (1));
i__5770__auto___32922 = G__32923;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32493 = conformed_args__31205__auto__;
var map__32493__$1 = cljs.core.__destructure_map(map__32493);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32493__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32493__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32493__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq32492){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32492));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32924 = arguments.length;
var i__5770__auto___32925 = (0);
while(true){
if((i__5770__auto___32925 < len__5769__auto___32924)){
args__5775__auto__.push((arguments[i__5770__auto___32925]));

var G__32926 = (i__5770__auto___32925 + (1));
i__5770__auto___32925 = G__32926;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32495 = conformed_args__31205__auto__;
var map__32495__$1 = cljs.core.__destructure_map(map__32495);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32495__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32495__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32495__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq32494){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32494));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32929 = arguments.length;
var i__5770__auto___32930 = (0);
while(true){
if((i__5770__auto___32930 < len__5769__auto___32929)){
args__5775__auto__.push((arguments[i__5770__auto___32930]));

var G__32931 = (i__5770__auto___32930 + (1));
i__5770__auto___32930 = G__32931;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32497 = conformed_args__31205__auto__;
var map__32497__$1 = cljs.core.__destructure_map(map__32497);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32497__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32497__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32497__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq32496){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32496));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32932 = arguments.length;
var i__5770__auto___32933 = (0);
while(true){
if((i__5770__auto___32933 < len__5769__auto___32932)){
args__5775__auto__.push((arguments[i__5770__auto___32933]));

var G__32934 = (i__5770__auto___32933 + (1));
i__5770__auto___32933 = G__32934;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32499 = conformed_args__31205__auto__;
var map__32499__$1 = cljs.core.__destructure_map(map__32499);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32499__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32499__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32499__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq32498){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32498));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32935 = arguments.length;
var i__5770__auto___32936 = (0);
while(true){
if((i__5770__auto___32936 < len__5769__auto___32935)){
args__5775__auto__.push((arguments[i__5770__auto___32936]));

var G__32937 = (i__5770__auto___32936 + (1));
i__5770__auto___32936 = G__32937;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32501 = conformed_args__31205__auto__;
var map__32501__$1 = cljs.core.__destructure_map(map__32501);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32501__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32501__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32501__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq32500){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32500));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32940 = arguments.length;
var i__5770__auto___32941 = (0);
while(true){
if((i__5770__auto___32941 < len__5769__auto___32940)){
args__5775__auto__.push((arguments[i__5770__auto___32941]));

var G__32942 = (i__5770__auto___32941 + (1));
i__5770__auto___32941 = G__32942;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32503 = conformed_args__31205__auto__;
var map__32503__$1 = cljs.core.__destructure_map(map__32503);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32503__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32503__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32503__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq32502){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32502));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32943 = arguments.length;
var i__5770__auto___32944 = (0);
while(true){
if((i__5770__auto___32944 < len__5769__auto___32943)){
args__5775__auto__.push((arguments[i__5770__auto___32944]));

var G__32945 = (i__5770__auto___32944 + (1));
i__5770__auto___32944 = G__32945;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32505 = conformed_args__31205__auto__;
var map__32505__$1 = cljs.core.__destructure_map(map__32505);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32505__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32505__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32505__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq32504){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32504));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32947 = arguments.length;
var i__5770__auto___32948 = (0);
while(true){
if((i__5770__auto___32948 < len__5769__auto___32947)){
args__5775__auto__.push((arguments[i__5770__auto___32948]));

var G__32949 = (i__5770__auto___32948 + (1));
i__5770__auto___32948 = G__32949;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32507 = conformed_args__31205__auto__;
var map__32507__$1 = cljs.core.__destructure_map(map__32507);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32507__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32507__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32507__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq32506){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32506));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32952 = arguments.length;
var i__5770__auto___32953 = (0);
while(true){
if((i__5770__auto___32953 < len__5769__auto___32952)){
args__5775__auto__.push((arguments[i__5770__auto___32953]));

var G__32954 = (i__5770__auto___32953 + (1));
i__5770__auto___32953 = G__32954;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32509 = conformed_args__31205__auto__;
var map__32509__$1 = cljs.core.__destructure_map(map__32509);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32509__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32509__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32509__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq32508){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32508));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32956 = arguments.length;
var i__5770__auto___32957 = (0);
while(true){
if((i__5770__auto___32957 < len__5769__auto___32956)){
args__5775__auto__.push((arguments[i__5770__auto___32957]));

var G__32958 = (i__5770__auto___32957 + (1));
i__5770__auto___32957 = G__32958;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32511 = conformed_args__31205__auto__;
var map__32511__$1 = cljs.core.__destructure_map(map__32511);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32511__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32511__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32511__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq32510){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32510));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32960 = arguments.length;
var i__5770__auto___32961 = (0);
while(true){
if((i__5770__auto___32961 < len__5769__auto___32960)){
args__5775__auto__.push((arguments[i__5770__auto___32961]));

var G__32962 = (i__5770__auto___32961 + (1));
i__5770__auto___32961 = G__32962;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32513 = conformed_args__31205__auto__;
var map__32513__$1 = cljs.core.__destructure_map(map__32513);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32513__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32513__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32513__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq32512){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32512));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32964 = arguments.length;
var i__5770__auto___32965 = (0);
while(true){
if((i__5770__auto___32965 < len__5769__auto___32964)){
args__5775__auto__.push((arguments[i__5770__auto___32965]));

var G__32966 = (i__5770__auto___32965 + (1));
i__5770__auto___32965 = G__32966;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32515 = conformed_args__31205__auto__;
var map__32515__$1 = cljs.core.__destructure_map(map__32515);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32515__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32515__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32515__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq32514){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32514));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32968 = arguments.length;
var i__5770__auto___32969 = (0);
while(true){
if((i__5770__auto___32969 < len__5769__auto___32968)){
args__5775__auto__.push((arguments[i__5770__auto___32969]));

var G__32970 = (i__5770__auto___32969 + (1));
i__5770__auto___32969 = G__32970;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32517 = conformed_args__31205__auto__;
var map__32517__$1 = cljs.core.__destructure_map(map__32517);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32517__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32517__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32517__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq32516){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32516));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32971 = arguments.length;
var i__5770__auto___32972 = (0);
while(true){
if((i__5770__auto___32972 < len__5769__auto___32971)){
args__5775__auto__.push((arguments[i__5770__auto___32972]));

var G__32973 = (i__5770__auto___32972 + (1));
i__5770__auto___32972 = G__32973;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32519 = conformed_args__31205__auto__;
var map__32519__$1 = cljs.core.__destructure_map(map__32519);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32519__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32519__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32519__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq32518){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32518));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32974 = arguments.length;
var i__5770__auto___32975 = (0);
while(true){
if((i__5770__auto___32975 < len__5769__auto___32974)){
args__5775__auto__.push((arguments[i__5770__auto___32975]));

var G__32976 = (i__5770__auto___32975 + (1));
i__5770__auto___32975 = G__32976;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32521 = conformed_args__31205__auto__;
var map__32521__$1 = cljs.core.__destructure_map(map__32521);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32521__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32521__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32521__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq32520){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32520));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32981 = arguments.length;
var i__5770__auto___32982 = (0);
while(true){
if((i__5770__auto___32982 < len__5769__auto___32981)){
args__5775__auto__.push((arguments[i__5770__auto___32982]));

var G__32983 = (i__5770__auto___32982 + (1));
i__5770__auto___32982 = G__32983;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32523 = conformed_args__31205__auto__;
var map__32523__$1 = cljs.core.__destructure_map(map__32523);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32523__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32523__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32523__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq32522){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32522));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32986 = arguments.length;
var i__5770__auto___32987 = (0);
while(true){
if((i__5770__auto___32987 < len__5769__auto___32986)){
args__5775__auto__.push((arguments[i__5770__auto___32987]));

var G__32988 = (i__5770__auto___32987 + (1));
i__5770__auto___32987 = G__32988;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32525 = conformed_args__31205__auto__;
var map__32525__$1 = cljs.core.__destructure_map(map__32525);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32525__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32525__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32525__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq32524){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32524));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32989 = arguments.length;
var i__5770__auto___32990 = (0);
while(true){
if((i__5770__auto___32990 < len__5769__auto___32989)){
args__5775__auto__.push((arguments[i__5770__auto___32990]));

var G__32991 = (i__5770__auto___32990 + (1));
i__5770__auto___32990 = G__32991;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32527 = conformed_args__31205__auto__;
var map__32527__$1 = cljs.core.__destructure_map(map__32527);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32527__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32527__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32527__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq32526){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32526));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32992 = arguments.length;
var i__5770__auto___32993 = (0);
while(true){
if((i__5770__auto___32993 < len__5769__auto___32992)){
args__5775__auto__.push((arguments[i__5770__auto___32993]));

var G__32994 = (i__5770__auto___32993 + (1));
i__5770__auto___32993 = G__32994;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32529 = conformed_args__31205__auto__;
var map__32529__$1 = cljs.core.__destructure_map(map__32529);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32529__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32529__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32529__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq32528){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32528));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32995 = arguments.length;
var i__5770__auto___32996 = (0);
while(true){
if((i__5770__auto___32996 < len__5769__auto___32995)){
args__5775__auto__.push((arguments[i__5770__auto___32996]));

var G__32997 = (i__5770__auto___32996 + (1));
i__5770__auto___32996 = G__32997;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32531 = conformed_args__31205__auto__;
var map__32531__$1 = cljs.core.__destructure_map(map__32531);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32531__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32531__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32531__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq32530){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32530));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33002 = arguments.length;
var i__5770__auto___33003 = (0);
while(true){
if((i__5770__auto___33003 < len__5769__auto___33002)){
args__5775__auto__.push((arguments[i__5770__auto___33003]));

var G__33004 = (i__5770__auto___33003 + (1));
i__5770__auto___33003 = G__33004;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32533 = conformed_args__31205__auto__;
var map__32533__$1 = cljs.core.__destructure_map(map__32533);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32533__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32533__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32533__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq32532){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32532));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33005 = arguments.length;
var i__5770__auto___33006 = (0);
while(true){
if((i__5770__auto___33006 < len__5769__auto___33005)){
args__5775__auto__.push((arguments[i__5770__auto___33006]));

var G__33007 = (i__5770__auto___33006 + (1));
i__5770__auto___33006 = G__33007;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32535 = conformed_args__31205__auto__;
var map__32535__$1 = cljs.core.__destructure_map(map__32535);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32535__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32535__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32535__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq32534){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32534));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33008 = arguments.length;
var i__5770__auto___33009 = (0);
while(true){
if((i__5770__auto___33009 < len__5769__auto___33008)){
args__5775__auto__.push((arguments[i__5770__auto___33009]));

var G__33010 = (i__5770__auto___33009 + (1));
i__5770__auto___33009 = G__33010;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32537 = conformed_args__31205__auto__;
var map__32537__$1 = cljs.core.__destructure_map(map__32537);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32537__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32537__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32537__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq32536){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32536));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33011 = arguments.length;
var i__5770__auto___33012 = (0);
while(true){
if((i__5770__auto___33012 < len__5769__auto___33011)){
args__5775__auto__.push((arguments[i__5770__auto___33012]));

var G__33013 = (i__5770__auto___33012 + (1));
i__5770__auto___33012 = G__33013;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32539 = conformed_args__31205__auto__;
var map__32539__$1 = cljs.core.__destructure_map(map__32539);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32539__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32539__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32539__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq32538){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32538));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33014 = arguments.length;
var i__5770__auto___33015 = (0);
while(true){
if((i__5770__auto___33015 < len__5769__auto___33014)){
args__5775__auto__.push((arguments[i__5770__auto___33015]));

var G__33016 = (i__5770__auto___33015 + (1));
i__5770__auto___33015 = G__33016;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32541 = conformed_args__31205__auto__;
var map__32541__$1 = cljs.core.__destructure_map(map__32541);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq32540){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32540));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33017 = arguments.length;
var i__5770__auto___33018 = (0);
while(true){
if((i__5770__auto___33018 < len__5769__auto___33017)){
args__5775__auto__.push((arguments[i__5770__auto___33018]));

var G__33019 = (i__5770__auto___33018 + (1));
i__5770__auto___33018 = G__33019;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32543 = conformed_args__31205__auto__;
var map__32543__$1 = cljs.core.__destructure_map(map__32543);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32543__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32543__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32543__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq32542){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32542));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33021 = arguments.length;
var i__5770__auto___33022 = (0);
while(true){
if((i__5770__auto___33022 < len__5769__auto___33021)){
args__5775__auto__.push((arguments[i__5770__auto___33022]));

var G__33023 = (i__5770__auto___33022 + (1));
i__5770__auto___33022 = G__33023;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32545 = conformed_args__31205__auto__;
var map__32545__$1 = cljs.core.__destructure_map(map__32545);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32545__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32545__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32545__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq32544){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32544));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33024 = arguments.length;
var i__5770__auto___33025 = (0);
while(true){
if((i__5770__auto___33025 < len__5769__auto___33024)){
args__5775__auto__.push((arguments[i__5770__auto___33025]));

var G__33026 = (i__5770__auto___33025 + (1));
i__5770__auto___33025 = G__33026;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32547 = conformed_args__31205__auto__;
var map__32547__$1 = cljs.core.__destructure_map(map__32547);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32547__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32547__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32547__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq32546){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32546));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33027 = arguments.length;
var i__5770__auto___33028 = (0);
while(true){
if((i__5770__auto___33028 < len__5769__auto___33027)){
args__5775__auto__.push((arguments[i__5770__auto___33028]));

var G__33029 = (i__5770__auto___33028 + (1));
i__5770__auto___33028 = G__33029;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32549 = conformed_args__31205__auto__;
var map__32549__$1 = cljs.core.__destructure_map(map__32549);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32549__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32549__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32549__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq32548){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32548));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33032 = arguments.length;
var i__5770__auto___33033 = (0);
while(true){
if((i__5770__auto___33033 < len__5769__auto___33032)){
args__5775__auto__.push((arguments[i__5770__auto___33033]));

var G__33034 = (i__5770__auto___33033 + (1));
i__5770__auto___33033 = G__33034;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32551 = conformed_args__31205__auto__;
var map__32551__$1 = cljs.core.__destructure_map(map__32551);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32551__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32551__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32551__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq32550){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32550));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33039 = arguments.length;
var i__5770__auto___33040 = (0);
while(true){
if((i__5770__auto___33040 < len__5769__auto___33039)){
args__5775__auto__.push((arguments[i__5770__auto___33040]));

var G__33041 = (i__5770__auto___33040 + (1));
i__5770__auto___33040 = G__33041;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32553 = conformed_args__31205__auto__;
var map__32553__$1 = cljs.core.__destructure_map(map__32553);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32553__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32553__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32553__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq32552){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32552));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33048 = arguments.length;
var i__5770__auto___33049 = (0);
while(true){
if((i__5770__auto___33049 < len__5769__auto___33048)){
args__5775__auto__.push((arguments[i__5770__auto___33049]));

var G__33050 = (i__5770__auto___33049 + (1));
i__5770__auto___33049 = G__33050;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32555 = conformed_args__31205__auto__;
var map__32555__$1 = cljs.core.__destructure_map(map__32555);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32555__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32555__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32555__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq32554){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32554));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33055 = arguments.length;
var i__5770__auto___33056 = (0);
while(true){
if((i__5770__auto___33056 < len__5769__auto___33055)){
args__5775__auto__.push((arguments[i__5770__auto___33056]));

var G__33057 = (i__5770__auto___33056 + (1));
i__5770__auto___33056 = G__33057;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32557 = conformed_args__31205__auto__;
var map__32557__$1 = cljs.core.__destructure_map(map__32557);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32557__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32557__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32557__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq32556){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32556));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33060 = arguments.length;
var i__5770__auto___33061 = (0);
while(true){
if((i__5770__auto___33061 < len__5769__auto___33060)){
args__5775__auto__.push((arguments[i__5770__auto___33061]));

var G__33062 = (i__5770__auto___33061 + (1));
i__5770__auto___33061 = G__33062;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32559 = conformed_args__31205__auto__;
var map__32559__$1 = cljs.core.__destructure_map(map__32559);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32559__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32559__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32559__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq32558){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32558));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33063 = arguments.length;
var i__5770__auto___33064 = (0);
while(true){
if((i__5770__auto___33064 < len__5769__auto___33063)){
args__5775__auto__.push((arguments[i__5770__auto___33064]));

var G__33065 = (i__5770__auto___33064 + (1));
i__5770__auto___33064 = G__33065;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32561 = conformed_args__31205__auto__;
var map__32561__$1 = cljs.core.__destructure_map(map__32561);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32561__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32561__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32561__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq32560){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32560));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33066 = arguments.length;
var i__5770__auto___33067 = (0);
while(true){
if((i__5770__auto___33067 < len__5769__auto___33066)){
args__5775__auto__.push((arguments[i__5770__auto___33067]));

var G__33068 = (i__5770__auto___33067 + (1));
i__5770__auto___33067 = G__33068;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32563 = conformed_args__31205__auto__;
var map__32563__$1 = cljs.core.__destructure_map(map__32563);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32563__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32563__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32563__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq32562){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32562));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33069 = arguments.length;
var i__5770__auto___33070 = (0);
while(true){
if((i__5770__auto___33070 < len__5769__auto___33069)){
args__5775__auto__.push((arguments[i__5770__auto___33070]));

var G__33071 = (i__5770__auto___33070 + (1));
i__5770__auto___33070 = G__33071;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32565 = conformed_args__31205__auto__;
var map__32565__$1 = cljs.core.__destructure_map(map__32565);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32565__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32565__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32565__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq32564){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32564));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33072 = arguments.length;
var i__5770__auto___33073 = (0);
while(true){
if((i__5770__auto___33073 < len__5769__auto___33072)){
args__5775__auto__.push((arguments[i__5770__auto___33073]));

var G__33074 = (i__5770__auto___33073 + (1));
i__5770__auto___33073 = G__33074;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32567 = conformed_args__31205__auto__;
var map__32567__$1 = cljs.core.__destructure_map(map__32567);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32567__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32567__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32567__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq32566){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32566));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33075 = arguments.length;
var i__5770__auto___33076 = (0);
while(true){
if((i__5770__auto___33076 < len__5769__auto___33075)){
args__5775__auto__.push((arguments[i__5770__auto___33076]));

var G__33077 = (i__5770__auto___33076 + (1));
i__5770__auto___33076 = G__33077;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32569 = conformed_args__31205__auto__;
var map__32569__$1 = cljs.core.__destructure_map(map__32569);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32569__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32569__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32569__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq32568){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32568));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33078 = arguments.length;
var i__5770__auto___33079 = (0);
while(true){
if((i__5770__auto___33079 < len__5769__auto___33078)){
args__5775__auto__.push((arguments[i__5770__auto___33079]));

var G__33080 = (i__5770__auto___33079 + (1));
i__5770__auto___33079 = G__33080;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32571 = conformed_args__31205__auto__;
var map__32571__$1 = cljs.core.__destructure_map(map__32571);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32571__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32571__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32571__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq32570){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32570));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33081 = arguments.length;
var i__5770__auto___33082 = (0);
while(true){
if((i__5770__auto___33082 < len__5769__auto___33081)){
args__5775__auto__.push((arguments[i__5770__auto___33082]));

var G__33083 = (i__5770__auto___33082 + (1));
i__5770__auto___33082 = G__33083;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32573 = conformed_args__31205__auto__;
var map__32573__$1 = cljs.core.__destructure_map(map__32573);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32573__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32573__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32573__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq32572){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32572));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33085 = arguments.length;
var i__5770__auto___33086 = (0);
while(true){
if((i__5770__auto___33086 < len__5769__auto___33085)){
args__5775__auto__.push((arguments[i__5770__auto___33086]));

var G__33087 = (i__5770__auto___33086 + (1));
i__5770__auto___33086 = G__33087;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32575 = conformed_args__31205__auto__;
var map__32575__$1 = cljs.core.__destructure_map(map__32575);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32575__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32575__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32575__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq32574){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32574));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33088 = arguments.length;
var i__5770__auto___33089 = (0);
while(true){
if((i__5770__auto___33089 < len__5769__auto___33088)){
args__5775__auto__.push((arguments[i__5770__auto___33089]));

var G__33090 = (i__5770__auto___33089 + (1));
i__5770__auto___33089 = G__33090;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32577 = conformed_args__31205__auto__;
var map__32577__$1 = cljs.core.__destructure_map(map__32577);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32577__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32577__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32577__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq32576){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32576));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33091 = arguments.length;
var i__5770__auto___33092 = (0);
while(true){
if((i__5770__auto___33092 < len__5769__auto___33091)){
args__5775__auto__.push((arguments[i__5770__auto___33092]));

var G__33093 = (i__5770__auto___33092 + (1));
i__5770__auto___33092 = G__33093;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32579 = conformed_args__31205__auto__;
var map__32579__$1 = cljs.core.__destructure_map(map__32579);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32579__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32579__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32579__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq32578){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32578));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33094 = arguments.length;
var i__5770__auto___33095 = (0);
while(true){
if((i__5770__auto___33095 < len__5769__auto___33094)){
args__5775__auto__.push((arguments[i__5770__auto___33095]));

var G__33096 = (i__5770__auto___33095 + (1));
i__5770__auto___33095 = G__33096;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32581 = conformed_args__31205__auto__;
var map__32581__$1 = cljs.core.__destructure_map(map__32581);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32581__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32581__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32581__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq32580){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32580));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33097 = arguments.length;
var i__5770__auto___33098 = (0);
while(true){
if((i__5770__auto___33098 < len__5769__auto___33097)){
args__5775__auto__.push((arguments[i__5770__auto___33098]));

var G__33099 = (i__5770__auto___33098 + (1));
i__5770__auto___33098 = G__33099;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32583 = conformed_args__31205__auto__;
var map__32583__$1 = cljs.core.__destructure_map(map__32583);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32583__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32583__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32583__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq32582){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32582));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33100 = arguments.length;
var i__5770__auto___33101 = (0);
while(true){
if((i__5770__auto___33101 < len__5769__auto___33100)){
args__5775__auto__.push((arguments[i__5770__auto___33101]));

var G__33102 = (i__5770__auto___33101 + (1));
i__5770__auto___33101 = G__33102;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32585 = conformed_args__31205__auto__;
var map__32585__$1 = cljs.core.__destructure_map(map__32585);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32585__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32585__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32585__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq32584){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32584));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33103 = arguments.length;
var i__5770__auto___33104 = (0);
while(true){
if((i__5770__auto___33104 < len__5769__auto___33103)){
args__5775__auto__.push((arguments[i__5770__auto___33104]));

var G__33105 = (i__5770__auto___33104 + (1));
i__5770__auto___33104 = G__33105;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32587 = conformed_args__31205__auto__;
var map__32587__$1 = cljs.core.__destructure_map(map__32587);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32587__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32587__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32587__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq32586){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32586));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33106 = arguments.length;
var i__5770__auto___33107 = (0);
while(true){
if((i__5770__auto___33107 < len__5769__auto___33106)){
args__5775__auto__.push((arguments[i__5770__auto___33107]));

var G__33108 = (i__5770__auto___33107 + (1));
i__5770__auto___33107 = G__33108;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32589 = conformed_args__31205__auto__;
var map__32589__$1 = cljs.core.__destructure_map(map__32589);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32589__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32589__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32589__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq32588){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32588));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33109 = arguments.length;
var i__5770__auto___33110 = (0);
while(true){
if((i__5770__auto___33110 < len__5769__auto___33109)){
args__5775__auto__.push((arguments[i__5770__auto___33110]));

var G__33111 = (i__5770__auto___33110 + (1));
i__5770__auto___33110 = G__33111;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32591 = conformed_args__31205__auto__;
var map__32591__$1 = cljs.core.__destructure_map(map__32591);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32591__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32591__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32591__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq32590){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32590));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33112 = arguments.length;
var i__5770__auto___33113 = (0);
while(true){
if((i__5770__auto___33113 < len__5769__auto___33112)){
args__5775__auto__.push((arguments[i__5770__auto___33113]));

var G__33114 = (i__5770__auto___33113 + (1));
i__5770__auto___33113 = G__33114;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32593 = conformed_args__31205__auto__;
var map__32593__$1 = cljs.core.__destructure_map(map__32593);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32593__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32593__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32593__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq32592){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32592));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33115 = arguments.length;
var i__5770__auto___33116 = (0);
while(true){
if((i__5770__auto___33116 < len__5769__auto___33115)){
args__5775__auto__.push((arguments[i__5770__auto___33116]));

var G__33117 = (i__5770__auto___33116 + (1));
i__5770__auto___33116 = G__33117;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32595 = conformed_args__31205__auto__;
var map__32595__$1 = cljs.core.__destructure_map(map__32595);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32595__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32595__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32595__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq32594){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32594));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33118 = arguments.length;
var i__5770__auto___33119 = (0);
while(true){
if((i__5770__auto___33119 < len__5769__auto___33118)){
args__5775__auto__.push((arguments[i__5770__auto___33119]));

var G__33120 = (i__5770__auto___33119 + (1));
i__5770__auto___33119 = G__33120;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32597 = conformed_args__31205__auto__;
var map__32597__$1 = cljs.core.__destructure_map(map__32597);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32597__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32597__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32597__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq32596){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32596));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33121 = arguments.length;
var i__5770__auto___33122 = (0);
while(true){
if((i__5770__auto___33122 < len__5769__auto___33121)){
args__5775__auto__.push((arguments[i__5770__auto___33122]));

var G__33123 = (i__5770__auto___33122 + (1));
i__5770__auto___33122 = G__33123;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32599 = conformed_args__31205__auto__;
var map__32599__$1 = cljs.core.__destructure_map(map__32599);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32599__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32599__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32599__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq32598){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32598));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33124 = arguments.length;
var i__5770__auto___33125 = (0);
while(true){
if((i__5770__auto___33125 < len__5769__auto___33124)){
args__5775__auto__.push((arguments[i__5770__auto___33125]));

var G__33126 = (i__5770__auto___33125 + (1));
i__5770__auto___33125 = G__33126;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32601 = conformed_args__31205__auto__;
var map__32601__$1 = cljs.core.__destructure_map(map__32601);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32601__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32601__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32601__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq32600){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32600));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33127 = arguments.length;
var i__5770__auto___33128 = (0);
while(true){
if((i__5770__auto___33128 < len__5769__auto___33127)){
args__5775__auto__.push((arguments[i__5770__auto___33128]));

var G__33129 = (i__5770__auto___33128 + (1));
i__5770__auto___33128 = G__33129;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32603 = conformed_args__31205__auto__;
var map__32603__$1 = cljs.core.__destructure_map(map__32603);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32603__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32603__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32603__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq32602){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32602));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33130 = arguments.length;
var i__5770__auto___33131 = (0);
while(true){
if((i__5770__auto___33131 < len__5769__auto___33130)){
args__5775__auto__.push((arguments[i__5770__auto___33131]));

var G__33132 = (i__5770__auto___33131 + (1));
i__5770__auto___33131 = G__33132;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32605 = conformed_args__31205__auto__;
var map__32605__$1 = cljs.core.__destructure_map(map__32605);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32605__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32605__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32605__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq32604){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32604));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33133 = arguments.length;
var i__5770__auto___33134 = (0);
while(true){
if((i__5770__auto___33134 < len__5769__auto___33133)){
args__5775__auto__.push((arguments[i__5770__auto___33134]));

var G__33135 = (i__5770__auto___33134 + (1));
i__5770__auto___33134 = G__33135;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32607 = conformed_args__31205__auto__;
var map__32607__$1 = cljs.core.__destructure_map(map__32607);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32607__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32607__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32607__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq32606){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32606));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33136 = arguments.length;
var i__5770__auto___33137 = (0);
while(true){
if((i__5770__auto___33137 < len__5769__auto___33136)){
args__5775__auto__.push((arguments[i__5770__auto___33137]));

var G__33138 = (i__5770__auto___33137 + (1));
i__5770__auto___33137 = G__33138;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32609 = conformed_args__31205__auto__;
var map__32609__$1 = cljs.core.__destructure_map(map__32609);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32609__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32609__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32609__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq32608){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32608));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33139 = arguments.length;
var i__5770__auto___33140 = (0);
while(true){
if((i__5770__auto___33140 < len__5769__auto___33139)){
args__5775__auto__.push((arguments[i__5770__auto___33140]));

var G__33141 = (i__5770__auto___33140 + (1));
i__5770__auto___33140 = G__33141;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32611 = conformed_args__31205__auto__;
var map__32611__$1 = cljs.core.__destructure_map(map__32611);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32611__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32611__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32611__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq32610){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32610));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33142 = arguments.length;
var i__5770__auto___33143 = (0);
while(true){
if((i__5770__auto___33143 < len__5769__auto___33142)){
args__5775__auto__.push((arguments[i__5770__auto___33143]));

var G__33144 = (i__5770__auto___33143 + (1));
i__5770__auto___33143 = G__33144;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32613 = conformed_args__31205__auto__;
var map__32613__$1 = cljs.core.__destructure_map(map__32613);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32613__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32613__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32613__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq32612){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32612));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33145 = arguments.length;
var i__5770__auto___33146 = (0);
while(true){
if((i__5770__auto___33146 < len__5769__auto___33145)){
args__5775__auto__.push((arguments[i__5770__auto___33146]));

var G__33147 = (i__5770__auto___33146 + (1));
i__5770__auto___33146 = G__33147;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32615 = conformed_args__31205__auto__;
var map__32615__$1 = cljs.core.__destructure_map(map__32615);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32615__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32615__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32615__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq32614){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32614));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33148 = arguments.length;
var i__5770__auto___33149 = (0);
while(true){
if((i__5770__auto___33149 < len__5769__auto___33148)){
args__5775__auto__.push((arguments[i__5770__auto___33149]));

var G__33150 = (i__5770__auto___33149 + (1));
i__5770__auto___33149 = G__33150;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32617 = conformed_args__31205__auto__;
var map__32617__$1 = cljs.core.__destructure_map(map__32617);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32617__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32617__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32617__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq32616){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32616));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33151 = arguments.length;
var i__5770__auto___33152 = (0);
while(true){
if((i__5770__auto___33152 < len__5769__auto___33151)){
args__5775__auto__.push((arguments[i__5770__auto___33152]));

var G__33153 = (i__5770__auto___33152 + (1));
i__5770__auto___33152 = G__33153;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32619 = conformed_args__31205__auto__;
var map__32619__$1 = cljs.core.__destructure_map(map__32619);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32619__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32619__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32619__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq32618){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32618));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33154 = arguments.length;
var i__5770__auto___33155 = (0);
while(true){
if((i__5770__auto___33155 < len__5769__auto___33154)){
args__5775__auto__.push((arguments[i__5770__auto___33155]));

var G__33156 = (i__5770__auto___33155 + (1));
i__5770__auto___33155 = G__33156;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32621 = conformed_args__31205__auto__;
var map__32621__$1 = cljs.core.__destructure_map(map__32621);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32621__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32621__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32621__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq32620){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32620));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33157 = arguments.length;
var i__5770__auto___33158 = (0);
while(true){
if((i__5770__auto___33158 < len__5769__auto___33157)){
args__5775__auto__.push((arguments[i__5770__auto___33158]));

var G__33159 = (i__5770__auto___33158 + (1));
i__5770__auto___33158 = G__33159;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32623 = conformed_args__31205__auto__;
var map__32623__$1 = cljs.core.__destructure_map(map__32623);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32623__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32623__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32623__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq32622){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32622));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33160 = arguments.length;
var i__5770__auto___33161 = (0);
while(true){
if((i__5770__auto___33161 < len__5769__auto___33160)){
args__5775__auto__.push((arguments[i__5770__auto___33161]));

var G__33162 = (i__5770__auto___33161 + (1));
i__5770__auto___33161 = G__33162;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32625 = conformed_args__31205__auto__;
var map__32625__$1 = cljs.core.__destructure_map(map__32625);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32625__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32625__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32625__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq32624){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32624));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33163 = arguments.length;
var i__5770__auto___33164 = (0);
while(true){
if((i__5770__auto___33164 < len__5769__auto___33163)){
args__5775__auto__.push((arguments[i__5770__auto___33164]));

var G__33165 = (i__5770__auto___33164 + (1));
i__5770__auto___33164 = G__33165;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32627 = conformed_args__31205__auto__;
var map__32627__$1 = cljs.core.__destructure_map(map__32627);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32627__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32627__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32627__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq32626){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32626));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33166 = arguments.length;
var i__5770__auto___33167 = (0);
while(true){
if((i__5770__auto___33167 < len__5769__auto___33166)){
args__5775__auto__.push((arguments[i__5770__auto___33167]));

var G__33168 = (i__5770__auto___33167 + (1));
i__5770__auto___33167 = G__33168;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32629 = conformed_args__31205__auto__;
var map__32629__$1 = cljs.core.__destructure_map(map__32629);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32629__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32629__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32629__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq32628){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32628));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33169 = arguments.length;
var i__5770__auto___33170 = (0);
while(true){
if((i__5770__auto___33170 < len__5769__auto___33169)){
args__5775__auto__.push((arguments[i__5770__auto___33170]));

var G__33171 = (i__5770__auto___33170 + (1));
i__5770__auto___33170 = G__33171;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32631 = conformed_args__31205__auto__;
var map__32631__$1 = cljs.core.__destructure_map(map__32631);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32631__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32631__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32631__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq32630){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32630));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33172 = arguments.length;
var i__5770__auto___33173 = (0);
while(true){
if((i__5770__auto___33173 < len__5769__auto___33172)){
args__5775__auto__.push((arguments[i__5770__auto___33173]));

var G__33174 = (i__5770__auto___33173 + (1));
i__5770__auto___33173 = G__33174;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32633 = conformed_args__31205__auto__;
var map__32633__$1 = cljs.core.__destructure_map(map__32633);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32633__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32633__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32633__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq32632){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32632));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33175 = arguments.length;
var i__5770__auto___33176 = (0);
while(true){
if((i__5770__auto___33176 < len__5769__auto___33175)){
args__5775__auto__.push((arguments[i__5770__auto___33176]));

var G__33177 = (i__5770__auto___33176 + (1));
i__5770__auto___33176 = G__33177;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32635 = conformed_args__31205__auto__;
var map__32635__$1 = cljs.core.__destructure_map(map__32635);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32635__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32635__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32635__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq32634){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32634));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33178 = arguments.length;
var i__5770__auto___33179 = (0);
while(true){
if((i__5770__auto___33179 < len__5769__auto___33178)){
args__5775__auto__.push((arguments[i__5770__auto___33179]));

var G__33180 = (i__5770__auto___33179 + (1));
i__5770__auto___33179 = G__33180;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32637 = conformed_args__31205__auto__;
var map__32637__$1 = cljs.core.__destructure_map(map__32637);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32637__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32637__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32637__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq32636){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32636));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33181 = arguments.length;
var i__5770__auto___33182 = (0);
while(true){
if((i__5770__auto___33182 < len__5769__auto___33181)){
args__5775__auto__.push((arguments[i__5770__auto___33182]));

var G__33183 = (i__5770__auto___33182 + (1));
i__5770__auto___33182 = G__33183;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32639 = conformed_args__31205__auto__;
var map__32639__$1 = cljs.core.__destructure_map(map__32639);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32639__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32639__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32639__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq32638){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32638));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33184 = arguments.length;
var i__5770__auto___33185 = (0);
while(true){
if((i__5770__auto___33185 < len__5769__auto___33184)){
args__5775__auto__.push((arguments[i__5770__auto___33185]));

var G__33186 = (i__5770__auto___33185 + (1));
i__5770__auto___33185 = G__33186;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32641 = conformed_args__31205__auto__;
var map__32641__$1 = cljs.core.__destructure_map(map__32641);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32641__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32641__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32641__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq32640){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32640));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33187 = arguments.length;
var i__5770__auto___33188 = (0);
while(true){
if((i__5770__auto___33188 < len__5769__auto___33187)){
args__5775__auto__.push((arguments[i__5770__auto___33188]));

var G__33189 = (i__5770__auto___33188 + (1));
i__5770__auto___33188 = G__33189;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32643 = conformed_args__31205__auto__;
var map__32643__$1 = cljs.core.__destructure_map(map__32643);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32643__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32643__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32643__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq32642){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32642));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33190 = arguments.length;
var i__5770__auto___33191 = (0);
while(true){
if((i__5770__auto___33191 < len__5769__auto___33190)){
args__5775__auto__.push((arguments[i__5770__auto___33191]));

var G__33192 = (i__5770__auto___33191 + (1));
i__5770__auto___33191 = G__33192;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32645 = conformed_args__31205__auto__;
var map__32645__$1 = cljs.core.__destructure_map(map__32645);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32645__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32645__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32645__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq32644){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32644));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33193 = arguments.length;
var i__5770__auto___33194 = (0);
while(true){
if((i__5770__auto___33194 < len__5769__auto___33193)){
args__5775__auto__.push((arguments[i__5770__auto___33194]));

var G__33195 = (i__5770__auto___33194 + (1));
i__5770__auto___33194 = G__33195;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32647 = conformed_args__31205__auto__;
var map__32647__$1 = cljs.core.__destructure_map(map__32647);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32647__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32647__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32647__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq32646){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32646));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33196 = arguments.length;
var i__5770__auto___33197 = (0);
while(true){
if((i__5770__auto___33197 < len__5769__auto___33196)){
args__5775__auto__.push((arguments[i__5770__auto___33197]));

var G__33198 = (i__5770__auto___33197 + (1));
i__5770__auto___33197 = G__33198;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32649 = conformed_args__31205__auto__;
var map__32649__$1 = cljs.core.__destructure_map(map__32649);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32649__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32649__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32649__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq32648){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32648));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33199 = arguments.length;
var i__5770__auto___33200 = (0);
while(true){
if((i__5770__auto___33200 < len__5769__auto___33199)){
args__5775__auto__.push((arguments[i__5770__auto___33200]));

var G__33201 = (i__5770__auto___33200 + (1));
i__5770__auto___33200 = G__33201;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32651 = conformed_args__31205__auto__;
var map__32651__$1 = cljs.core.__destructure_map(map__32651);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32651__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32651__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32651__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq32650){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32650));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33202 = arguments.length;
var i__5770__auto___33203 = (0);
while(true){
if((i__5770__auto___33203 < len__5769__auto___33202)){
args__5775__auto__.push((arguments[i__5770__auto___33203]));

var G__33204 = (i__5770__auto___33203 + (1));
i__5770__auto___33203 = G__33204;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32653 = conformed_args__31205__auto__;
var map__32653__$1 = cljs.core.__destructure_map(map__32653);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32653__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32653__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32653__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq32652){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32652));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33205 = arguments.length;
var i__5770__auto___33206 = (0);
while(true){
if((i__5770__auto___33206 < len__5769__auto___33205)){
args__5775__auto__.push((arguments[i__5770__auto___33206]));

var G__33207 = (i__5770__auto___33206 + (1));
i__5770__auto___33206 = G__33207;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32655 = conformed_args__31205__auto__;
var map__32655__$1 = cljs.core.__destructure_map(map__32655);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32655__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32655__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32655__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq32654){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32654));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33208 = arguments.length;
var i__5770__auto___33209 = (0);
while(true){
if((i__5770__auto___33209 < len__5769__auto___33208)){
args__5775__auto__.push((arguments[i__5770__auto___33209]));

var G__33210 = (i__5770__auto___33209 + (1));
i__5770__auto___33209 = G__33210;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32657 = conformed_args__31205__auto__;
var map__32657__$1 = cljs.core.__destructure_map(map__32657);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32657__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32657__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32657__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq32656){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32656));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33211 = arguments.length;
var i__5770__auto___33212 = (0);
while(true){
if((i__5770__auto___33212 < len__5769__auto___33211)){
args__5775__auto__.push((arguments[i__5770__auto___33212]));

var G__33213 = (i__5770__auto___33212 + (1));
i__5770__auto___33212 = G__33213;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32659 = conformed_args__31205__auto__;
var map__32659__$1 = cljs.core.__destructure_map(map__32659);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32659__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32659__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32659__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq32658){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32658));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33214 = arguments.length;
var i__5770__auto___33215 = (0);
while(true){
if((i__5770__auto___33215 < len__5769__auto___33214)){
args__5775__auto__.push((arguments[i__5770__auto___33215]));

var G__33216 = (i__5770__auto___33215 + (1));
i__5770__auto___33215 = G__33216;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32661 = conformed_args__31205__auto__;
var map__32661__$1 = cljs.core.__destructure_map(map__32661);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32661__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32661__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32661__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq32660){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32660));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33217 = arguments.length;
var i__5770__auto___33218 = (0);
while(true){
if((i__5770__auto___33218 < len__5769__auto___33217)){
args__5775__auto__.push((arguments[i__5770__auto___33218]));

var G__33219 = (i__5770__auto___33218 + (1));
i__5770__auto___33218 = G__33219;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32663 = conformed_args__31205__auto__;
var map__32663__$1 = cljs.core.__destructure_map(map__32663);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32663__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32663__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32663__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq32662){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32662));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33220 = arguments.length;
var i__5770__auto___33221 = (0);
while(true){
if((i__5770__auto___33221 < len__5769__auto___33220)){
args__5775__auto__.push((arguments[i__5770__auto___33221]));

var G__33222 = (i__5770__auto___33221 + (1));
i__5770__auto___33221 = G__33222;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32665 = conformed_args__31205__auto__;
var map__32665__$1 = cljs.core.__destructure_map(map__32665);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32665__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32665__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32665__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq32664){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32664));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33223 = arguments.length;
var i__5770__auto___33224 = (0);
while(true){
if((i__5770__auto___33224 < len__5769__auto___33223)){
args__5775__auto__.push((arguments[i__5770__auto___33224]));

var G__33225 = (i__5770__auto___33224 + (1));
i__5770__auto___33224 = G__33225;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32667 = conformed_args__31205__auto__;
var map__32667__$1 = cljs.core.__destructure_map(map__32667);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32667__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32667__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32667__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq32666){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32666));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33226 = arguments.length;
var i__5770__auto___33227 = (0);
while(true){
if((i__5770__auto___33227 < len__5769__auto___33226)){
args__5775__auto__.push((arguments[i__5770__auto___33227]));

var G__33228 = (i__5770__auto___33227 + (1));
i__5770__auto___33227 = G__33228;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32669 = conformed_args__31205__auto__;
var map__32669__$1 = cljs.core.__destructure_map(map__32669);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32669__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32669__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32669__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq32668){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32668));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33229 = arguments.length;
var i__5770__auto___33230 = (0);
while(true){
if((i__5770__auto___33230 < len__5769__auto___33229)){
args__5775__auto__.push((arguments[i__5770__auto___33230]));

var G__33231 = (i__5770__auto___33230 + (1));
i__5770__auto___33230 = G__33231;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32671 = conformed_args__31205__auto__;
var map__32671__$1 = cljs.core.__destructure_map(map__32671);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32671__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32671__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32671__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq32670){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32670));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33232 = arguments.length;
var i__5770__auto___33233 = (0);
while(true){
if((i__5770__auto___33233 < len__5769__auto___33232)){
args__5775__auto__.push((arguments[i__5770__auto___33233]));

var G__33234 = (i__5770__auto___33233 + (1));
i__5770__auto___33233 = G__33234;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32673 = conformed_args__31205__auto__;
var map__32673__$1 = cljs.core.__destructure_map(map__32673);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32673__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32673__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32673__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq32672){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32672));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33235 = arguments.length;
var i__5770__auto___33236 = (0);
while(true){
if((i__5770__auto___33236 < len__5769__auto___33235)){
args__5775__auto__.push((arguments[i__5770__auto___33236]));

var G__33237 = (i__5770__auto___33236 + (1));
i__5770__auto___33236 = G__33237;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32675 = conformed_args__31205__auto__;
var map__32675__$1 = cljs.core.__destructure_map(map__32675);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32675__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32675__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32675__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq32674){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32674));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33238 = arguments.length;
var i__5770__auto___33239 = (0);
while(true){
if((i__5770__auto___33239 < len__5769__auto___33238)){
args__5775__auto__.push((arguments[i__5770__auto___33239]));

var G__33240 = (i__5770__auto___33239 + (1));
i__5770__auto___33239 = G__33240;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32677 = conformed_args__31205__auto__;
var map__32677__$1 = cljs.core.__destructure_map(map__32677);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32677__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32677__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32677__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq32676){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32676));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33241 = arguments.length;
var i__5770__auto___33242 = (0);
while(true){
if((i__5770__auto___33242 < len__5769__auto___33241)){
args__5775__auto__.push((arguments[i__5770__auto___33242]));

var G__33243 = (i__5770__auto___33242 + (1));
i__5770__auto___33242 = G__33243;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32679 = conformed_args__31205__auto__;
var map__32679__$1 = cljs.core.__destructure_map(map__32679);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32679__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32679__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32679__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq32678){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32678));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33244 = arguments.length;
var i__5770__auto___33245 = (0);
while(true){
if((i__5770__auto___33245 < len__5769__auto___33244)){
args__5775__auto__.push((arguments[i__5770__auto___33245]));

var G__33246 = (i__5770__auto___33245 + (1));
i__5770__auto___33245 = G__33246;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32681 = conformed_args__31205__auto__;
var map__32681__$1 = cljs.core.__destructure_map(map__32681);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32681__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32681__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32681__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq32680){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32680));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33247 = arguments.length;
var i__5770__auto___33248 = (0);
while(true){
if((i__5770__auto___33248 < len__5769__auto___33247)){
args__5775__auto__.push((arguments[i__5770__auto___33248]));

var G__33249 = (i__5770__auto___33248 + (1));
i__5770__auto___33248 = G__33249;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32683 = conformed_args__31205__auto__;
var map__32683__$1 = cljs.core.__destructure_map(map__32683);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32683__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32683__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32683__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq32682){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32682));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33250 = arguments.length;
var i__5770__auto___33251 = (0);
while(true){
if((i__5770__auto___33251 < len__5769__auto___33250)){
args__5775__auto__.push((arguments[i__5770__auto___33251]));

var G__33252 = (i__5770__auto___33251 + (1));
i__5770__auto___33251 = G__33252;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32685 = conformed_args__31205__auto__;
var map__32685__$1 = cljs.core.__destructure_map(map__32685);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32685__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32685__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32685__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq32684){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32684));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33253 = arguments.length;
var i__5770__auto___33254 = (0);
while(true){
if((i__5770__auto___33254 < len__5769__auto___33253)){
args__5775__auto__.push((arguments[i__5770__auto___33254]));

var G__33255 = (i__5770__auto___33254 + (1));
i__5770__auto___33254 = G__33255;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32687 = conformed_args__31205__auto__;
var map__32687__$1 = cljs.core.__destructure_map(map__32687);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32687__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32687__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32687__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq32686){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32686));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33256 = arguments.length;
var i__5770__auto___33257 = (0);
while(true){
if((i__5770__auto___33257 < len__5769__auto___33256)){
args__5775__auto__.push((arguments[i__5770__auto___33257]));

var G__33258 = (i__5770__auto___33257 + (1));
i__5770__auto___33257 = G__33258;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32689 = conformed_args__31205__auto__;
var map__32689__$1 = cljs.core.__destructure_map(map__32689);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32689__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32689__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32689__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq32688){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32688));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33259 = arguments.length;
var i__5770__auto___33260 = (0);
while(true){
if((i__5770__auto___33260 < len__5769__auto___33259)){
args__5775__auto__.push((arguments[i__5770__auto___33260]));

var G__33261 = (i__5770__auto___33260 + (1));
i__5770__auto___33260 = G__33261;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32691 = conformed_args__31205__auto__;
var map__32691__$1 = cljs.core.__destructure_map(map__32691);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32691__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32691__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32691__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq32690){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32690));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33262 = arguments.length;
var i__5770__auto___33263 = (0);
while(true){
if((i__5770__auto___33263 < len__5769__auto___33262)){
args__5775__auto__.push((arguments[i__5770__auto___33263]));

var G__33264 = (i__5770__auto___33263 + (1));
i__5770__auto___33263 = G__33264;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32693 = conformed_args__31205__auto__;
var map__32693__$1 = cljs.core.__destructure_map(map__32693);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32693__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32693__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32693__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq32692){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32692));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33265 = arguments.length;
var i__5770__auto___33266 = (0);
while(true){
if((i__5770__auto___33266 < len__5769__auto___33265)){
args__5775__auto__.push((arguments[i__5770__auto___33266]));

var G__33267 = (i__5770__auto___33266 + (1));
i__5770__auto___33266 = G__33267;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32695 = conformed_args__31205__auto__;
var map__32695__$1 = cljs.core.__destructure_map(map__32695);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32695__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32695__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32695__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq32694){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32694));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33268 = arguments.length;
var i__5770__auto___33269 = (0);
while(true){
if((i__5770__auto___33269 < len__5769__auto___33268)){
args__5775__auto__.push((arguments[i__5770__auto___33269]));

var G__33270 = (i__5770__auto___33269 + (1));
i__5770__auto___33269 = G__33270;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32697 = conformed_args__31205__auto__;
var map__32697__$1 = cljs.core.__destructure_map(map__32697);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32697__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32697__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32697__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq32696){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32696));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33271 = arguments.length;
var i__5770__auto___33272 = (0);
while(true){
if((i__5770__auto___33272 < len__5769__auto___33271)){
args__5775__auto__.push((arguments[i__5770__auto___33272]));

var G__33273 = (i__5770__auto___33272 + (1));
i__5770__auto___33272 = G__33273;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32699 = conformed_args__31205__auto__;
var map__32699__$1 = cljs.core.__destructure_map(map__32699);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32699__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32699__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32699__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq32698){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32698));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33274 = arguments.length;
var i__5770__auto___33275 = (0);
while(true){
if((i__5770__auto___33275 < len__5769__auto___33274)){
args__5775__auto__.push((arguments[i__5770__auto___33275]));

var G__33276 = (i__5770__auto___33275 + (1));
i__5770__auto___33275 = G__33276;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32701 = conformed_args__31205__auto__;
var map__32701__$1 = cljs.core.__destructure_map(map__32701);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32701__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32701__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32701__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq32700){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32700));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33277 = arguments.length;
var i__5770__auto___33278 = (0);
while(true){
if((i__5770__auto___33278 < len__5769__auto___33277)){
args__5775__auto__.push((arguments[i__5770__auto___33278]));

var G__33279 = (i__5770__auto___33278 + (1));
i__5770__auto___33278 = G__33279;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32703 = conformed_args__31205__auto__;
var map__32703__$1 = cljs.core.__destructure_map(map__32703);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32703__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32703__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32703__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq32702){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32702));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33280 = arguments.length;
var i__5770__auto___33281 = (0);
while(true){
if((i__5770__auto___33281 < len__5769__auto___33280)){
args__5775__auto__.push((arguments[i__5770__auto___33281]));

var G__33282 = (i__5770__auto___33281 + (1));
i__5770__auto___33281 = G__33282;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32705 = conformed_args__31205__auto__;
var map__32705__$1 = cljs.core.__destructure_map(map__32705);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32705__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32705__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32705__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq32704){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32704));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33283 = arguments.length;
var i__5770__auto___33284 = (0);
while(true){
if((i__5770__auto___33284 < len__5769__auto___33283)){
args__5775__auto__.push((arguments[i__5770__auto___33284]));

var G__33285 = (i__5770__auto___33284 + (1));
i__5770__auto___33284 = G__33285;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32707 = conformed_args__31205__auto__;
var map__32707__$1 = cljs.core.__destructure_map(map__32707);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32707__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32707__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32707__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq32706){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32706));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33286 = arguments.length;
var i__5770__auto___33287 = (0);
while(true){
if((i__5770__auto___33287 < len__5769__auto___33286)){
args__5775__auto__.push((arguments[i__5770__auto___33287]));

var G__33288 = (i__5770__auto___33287 + (1));
i__5770__auto___33287 = G__33288;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32709 = conformed_args__31205__auto__;
var map__32709__$1 = cljs.core.__destructure_map(map__32709);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32709__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32709__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32709__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq32708){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32708));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33289 = arguments.length;
var i__5770__auto___33290 = (0);
while(true){
if((i__5770__auto___33290 < len__5769__auto___33289)){
args__5775__auto__.push((arguments[i__5770__auto___33290]));

var G__33291 = (i__5770__auto___33290 + (1));
i__5770__auto___33290 = G__33291;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32711 = conformed_args__31205__auto__;
var map__32711__$1 = cljs.core.__destructure_map(map__32711);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32711__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32711__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32711__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq32710){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32710));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33292 = arguments.length;
var i__5770__auto___33293 = (0);
while(true){
if((i__5770__auto___33293 < len__5769__auto___33292)){
args__5775__auto__.push((arguments[i__5770__auto___33293]));

var G__33294 = (i__5770__auto___33293 + (1));
i__5770__auto___33293 = G__33294;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32713 = conformed_args__31205__auto__;
var map__32713__$1 = cljs.core.__destructure_map(map__32713);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32713__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32713__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32713__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq32712){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32712));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33295 = arguments.length;
var i__5770__auto___33296 = (0);
while(true){
if((i__5770__auto___33296 < len__5769__auto___33295)){
args__5775__auto__.push((arguments[i__5770__auto___33296]));

var G__33297 = (i__5770__auto___33296 + (1));
i__5770__auto___33296 = G__33297;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32715 = conformed_args__31205__auto__;
var map__32715__$1 = cljs.core.__destructure_map(map__32715);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32715__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32715__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq32714){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32714));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33298 = arguments.length;
var i__5770__auto___33299 = (0);
while(true){
if((i__5770__auto___33299 < len__5769__auto___33298)){
args__5775__auto__.push((arguments[i__5770__auto___33299]));

var G__33300 = (i__5770__auto___33299 + (1));
i__5770__auto___33299 = G__33300;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32717 = conformed_args__31205__auto__;
var map__32717__$1 = cljs.core.__destructure_map(map__32717);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32717__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32717__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32717__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq32716){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32716));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33301 = arguments.length;
var i__5770__auto___33302 = (0);
while(true){
if((i__5770__auto___33302 < len__5769__auto___33301)){
args__5775__auto__.push((arguments[i__5770__auto___33302]));

var G__33303 = (i__5770__auto___33302 + (1));
i__5770__auto___33302 = G__33303;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32719 = conformed_args__31205__auto__;
var map__32719__$1 = cljs.core.__destructure_map(map__32719);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32719__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32719__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32719__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq32718){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32718));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33304 = arguments.length;
var i__5770__auto___33305 = (0);
while(true){
if((i__5770__auto___33305 < len__5769__auto___33304)){
args__5775__auto__.push((arguments[i__5770__auto___33305]));

var G__33306 = (i__5770__auto___33305 + (1));
i__5770__auto___33305 = G__33306;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32721 = conformed_args__31205__auto__;
var map__32721__$1 = cljs.core.__destructure_map(map__32721);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32721__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32721__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32721__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq32720){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32720));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33307 = arguments.length;
var i__5770__auto___33308 = (0);
while(true){
if((i__5770__auto___33308 < len__5769__auto___33307)){
args__5775__auto__.push((arguments[i__5770__auto___33308]));

var G__33309 = (i__5770__auto___33308 + (1));
i__5770__auto___33308 = G__33309;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32723 = conformed_args__31205__auto__;
var map__32723__$1 = cljs.core.__destructure_map(map__32723);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32723__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32723__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32723__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq32722){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32722));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33310 = arguments.length;
var i__5770__auto___33311 = (0);
while(true){
if((i__5770__auto___33311 < len__5769__auto___33310)){
args__5775__auto__.push((arguments[i__5770__auto___33311]));

var G__33312 = (i__5770__auto___33311 + (1));
i__5770__auto___33311 = G__33312;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32725 = conformed_args__31205__auto__;
var map__32725__$1 = cljs.core.__destructure_map(map__32725);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32725__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32725__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32725__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq32724){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32724));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33313 = arguments.length;
var i__5770__auto___33314 = (0);
while(true){
if((i__5770__auto___33314 < len__5769__auto___33313)){
args__5775__auto__.push((arguments[i__5770__auto___33314]));

var G__33315 = (i__5770__auto___33314 + (1));
i__5770__auto___33314 = G__33315;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32727 = conformed_args__31205__auto__;
var map__32727__$1 = cljs.core.__destructure_map(map__32727);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32727__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32727__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32727__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq32726){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32726));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33316 = arguments.length;
var i__5770__auto___33317 = (0);
while(true){
if((i__5770__auto___33317 < len__5769__auto___33316)){
args__5775__auto__.push((arguments[i__5770__auto___33317]));

var G__33318 = (i__5770__auto___33317 + (1));
i__5770__auto___33317 = G__33318;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32729 = conformed_args__31205__auto__;
var map__32729__$1 = cljs.core.__destructure_map(map__32729);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32729__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32729__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32729__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq32728){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32728));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33319 = arguments.length;
var i__5770__auto___33320 = (0);
while(true){
if((i__5770__auto___33320 < len__5769__auto___33319)){
args__5775__auto__.push((arguments[i__5770__auto___33320]));

var G__33321 = (i__5770__auto___33320 + (1));
i__5770__auto___33320 = G__33321;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32731 = conformed_args__31205__auto__;
var map__32731__$1 = cljs.core.__destructure_map(map__32731);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32731__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32731__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32731__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq32730){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32730));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33322 = arguments.length;
var i__5770__auto___33323 = (0);
while(true){
if((i__5770__auto___33323 < len__5769__auto___33322)){
args__5775__auto__.push((arguments[i__5770__auto___33323]));

var G__33324 = (i__5770__auto___33323 + (1));
i__5770__auto___33323 = G__33324;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32733 = conformed_args__31205__auto__;
var map__32733__$1 = cljs.core.__destructure_map(map__32733);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32733__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32733__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32733__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq32732){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32732));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33325 = arguments.length;
var i__5770__auto___33326 = (0);
while(true){
if((i__5770__auto___33326 < len__5769__auto___33325)){
args__5775__auto__.push((arguments[i__5770__auto___33326]));

var G__33327 = (i__5770__auto___33326 + (1));
i__5770__auto___33326 = G__33327;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32735 = conformed_args__31205__auto__;
var map__32735__$1 = cljs.core.__destructure_map(map__32735);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32735__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32735__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32735__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq32734){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32734));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33328 = arguments.length;
var i__5770__auto___33329 = (0);
while(true){
if((i__5770__auto___33329 < len__5769__auto___33328)){
args__5775__auto__.push((arguments[i__5770__auto___33329]));

var G__33330 = (i__5770__auto___33329 + (1));
i__5770__auto___33329 = G__33330;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32737 = conformed_args__31205__auto__;
var map__32737__$1 = cljs.core.__destructure_map(map__32737);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32737__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32737__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32737__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq32736){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32736));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33331 = arguments.length;
var i__5770__auto___33332 = (0);
while(true){
if((i__5770__auto___33332 < len__5769__auto___33331)){
args__5775__auto__.push((arguments[i__5770__auto___33332]));

var G__33333 = (i__5770__auto___33332 + (1));
i__5770__auto___33332 = G__33333;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32739 = conformed_args__31205__auto__;
var map__32739__$1 = cljs.core.__destructure_map(map__32739);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32739__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32739__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32739__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq32738){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32738));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33334 = arguments.length;
var i__5770__auto___33335 = (0);
while(true){
if((i__5770__auto___33335 < len__5769__auto___33334)){
args__5775__auto__.push((arguments[i__5770__auto___33335]));

var G__33336 = (i__5770__auto___33335 + (1));
i__5770__auto___33335 = G__33336;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32741 = conformed_args__31205__auto__;
var map__32741__$1 = cljs.core.__destructure_map(map__32741);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32741__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32741__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32741__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq32740){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32740));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33337 = arguments.length;
var i__5770__auto___33338 = (0);
while(true){
if((i__5770__auto___33338 < len__5769__auto___33337)){
args__5775__auto__.push((arguments[i__5770__auto___33338]));

var G__33339 = (i__5770__auto___33338 + (1));
i__5770__auto___33338 = G__33339;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32743 = conformed_args__31205__auto__;
var map__32743__$1 = cljs.core.__destructure_map(map__32743);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32743__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32743__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32743__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq32742){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32742));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33340 = arguments.length;
var i__5770__auto___33341 = (0);
while(true){
if((i__5770__auto___33341 < len__5769__auto___33340)){
args__5775__auto__.push((arguments[i__5770__auto___33341]));

var G__33342 = (i__5770__auto___33341 + (1));
i__5770__auto___33341 = G__33342;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32745 = conformed_args__31205__auto__;
var map__32745__$1 = cljs.core.__destructure_map(map__32745);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32745__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32745__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32745__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq32744){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32744));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33343 = arguments.length;
var i__5770__auto___33344 = (0);
while(true){
if((i__5770__auto___33344 < len__5769__auto___33343)){
args__5775__auto__.push((arguments[i__5770__auto___33344]));

var G__33345 = (i__5770__auto___33344 + (1));
i__5770__auto___33344 = G__33345;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32747 = conformed_args__31205__auto__;
var map__32747__$1 = cljs.core.__destructure_map(map__32747);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32747__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32747__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32747__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq32746){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32746));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33346 = arguments.length;
var i__5770__auto___33347 = (0);
while(true){
if((i__5770__auto___33347 < len__5769__auto___33346)){
args__5775__auto__.push((arguments[i__5770__auto___33347]));

var G__33348 = (i__5770__auto___33347 + (1));
i__5770__auto___33347 = G__33348;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32749 = conformed_args__31205__auto__;
var map__32749__$1 = cljs.core.__destructure_map(map__32749);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32749__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32749__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32749__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq32748){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32748));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33349 = arguments.length;
var i__5770__auto___33350 = (0);
while(true){
if((i__5770__auto___33350 < len__5769__auto___33349)){
args__5775__auto__.push((arguments[i__5770__auto___33350]));

var G__33351 = (i__5770__auto___33350 + (1));
i__5770__auto___33350 = G__33351;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32751 = conformed_args__31205__auto__;
var map__32751__$1 = cljs.core.__destructure_map(map__32751);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32751__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32751__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32751__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq32750){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32750));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33352 = arguments.length;
var i__5770__auto___33353 = (0);
while(true){
if((i__5770__auto___33353 < len__5769__auto___33352)){
args__5775__auto__.push((arguments[i__5770__auto___33353]));

var G__33354 = (i__5770__auto___33353 + (1));
i__5770__auto___33353 = G__33354;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32753 = conformed_args__31205__auto__;
var map__32753__$1 = cljs.core.__destructure_map(map__32753);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32753__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32753__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32753__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq32752){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32752));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33355 = arguments.length;
var i__5770__auto___33356 = (0);
while(true){
if((i__5770__auto___33356 < len__5769__auto___33355)){
args__5775__auto__.push((arguments[i__5770__auto___33356]));

var G__33357 = (i__5770__auto___33356 + (1));
i__5770__auto___33356 = G__33357;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32755 = conformed_args__31205__auto__;
var map__32755__$1 = cljs.core.__destructure_map(map__32755);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32755__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32755__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32755__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq32754){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32754));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33358 = arguments.length;
var i__5770__auto___33359 = (0);
while(true){
if((i__5770__auto___33359 < len__5769__auto___33358)){
args__5775__auto__.push((arguments[i__5770__auto___33359]));

var G__33360 = (i__5770__auto___33359 + (1));
i__5770__auto___33359 = G__33360;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32757 = conformed_args__31205__auto__;
var map__32757__$1 = cljs.core.__destructure_map(map__32757);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32757__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32757__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32757__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq32756){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32756));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33361 = arguments.length;
var i__5770__auto___33362 = (0);
while(true){
if((i__5770__auto___33362 < len__5769__auto___33361)){
args__5775__auto__.push((arguments[i__5770__auto___33362]));

var G__33363 = (i__5770__auto___33362 + (1));
i__5770__auto___33362 = G__33363;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32759 = conformed_args__31205__auto__;
var map__32759__$1 = cljs.core.__destructure_map(map__32759);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32759__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32759__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32759__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq32758){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32758));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33364 = arguments.length;
var i__5770__auto___33365 = (0);
while(true){
if((i__5770__auto___33365 < len__5769__auto___33364)){
args__5775__auto__.push((arguments[i__5770__auto___33365]));

var G__33366 = (i__5770__auto___33365 + (1));
i__5770__auto___33365 = G__33366;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32761 = conformed_args__31205__auto__;
var map__32761__$1 = cljs.core.__destructure_map(map__32761);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32761__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32761__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32761__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq32760){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32760));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33367 = arguments.length;
var i__5770__auto___33368 = (0);
while(true){
if((i__5770__auto___33368 < len__5769__auto___33367)){
args__5775__auto__.push((arguments[i__5770__auto___33368]));

var G__33369 = (i__5770__auto___33368 + (1));
i__5770__auto___33368 = G__33369;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32763 = conformed_args__31205__auto__;
var map__32763__$1 = cljs.core.__destructure_map(map__32763);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32763__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32763__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32763__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq32762){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32762));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33370 = arguments.length;
var i__5770__auto___33371 = (0);
while(true){
if((i__5770__auto___33371 < len__5769__auto___33370)){
args__5775__auto__.push((arguments[i__5770__auto___33371]));

var G__33372 = (i__5770__auto___33371 + (1));
i__5770__auto___33371 = G__33372;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32765 = conformed_args__31205__auto__;
var map__32765__$1 = cljs.core.__destructure_map(map__32765);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32765__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32765__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32765__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq32764){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32764));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33373 = arguments.length;
var i__5770__auto___33374 = (0);
while(true){
if((i__5770__auto___33374 < len__5769__auto___33373)){
args__5775__auto__.push((arguments[i__5770__auto___33374]));

var G__33375 = (i__5770__auto___33374 + (1));
i__5770__auto___33374 = G__33375;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32767 = conformed_args__31205__auto__;
var map__32767__$1 = cljs.core.__destructure_map(map__32767);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32767__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32767__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32767__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq32766){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32766));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33376 = arguments.length;
var i__5770__auto___33377 = (0);
while(true){
if((i__5770__auto___33377 < len__5769__auto___33376)){
args__5775__auto__.push((arguments[i__5770__auto___33377]));

var G__33378 = (i__5770__auto___33377 + (1));
i__5770__auto___33377 = G__33378;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32769 = conformed_args__31205__auto__;
var map__32769__$1 = cljs.core.__destructure_map(map__32769);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32769__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32769__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32769__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq32768){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32768));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33379 = arguments.length;
var i__5770__auto___33380 = (0);
while(true){
if((i__5770__auto___33380 < len__5769__auto___33379)){
args__5775__auto__.push((arguments[i__5770__auto___33380]));

var G__33381 = (i__5770__auto___33380 + (1));
i__5770__auto___33380 = G__33381;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32771 = conformed_args__31205__auto__;
var map__32771__$1 = cljs.core.__destructure_map(map__32771);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32771__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32771__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32771__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq32770){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32770));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33382 = arguments.length;
var i__5770__auto___33383 = (0);
while(true){
if((i__5770__auto___33383 < len__5769__auto___33382)){
args__5775__auto__.push((arguments[i__5770__auto___33383]));

var G__33384 = (i__5770__auto___33383 + (1));
i__5770__auto___33383 = G__33384;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32773 = conformed_args__31205__auto__;
var map__32773__$1 = cljs.core.__destructure_map(map__32773);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32773__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32773__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32773__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq32772){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32772));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33385 = arguments.length;
var i__5770__auto___33386 = (0);
while(true){
if((i__5770__auto___33386 < len__5769__auto___33385)){
args__5775__auto__.push((arguments[i__5770__auto___33386]));

var G__33387 = (i__5770__auto___33386 + (1));
i__5770__auto___33386 = G__33387;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32775 = conformed_args__31205__auto__;
var map__32775__$1 = cljs.core.__destructure_map(map__32775);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32775__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32775__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32775__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq32774){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32774));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33388 = arguments.length;
var i__5770__auto___33389 = (0);
while(true){
if((i__5770__auto___33389 < len__5769__auto___33388)){
args__5775__auto__.push((arguments[i__5770__auto___33389]));

var G__33390 = (i__5770__auto___33389 + (1));
i__5770__auto___33389 = G__33390;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32777 = conformed_args__31205__auto__;
var map__32777__$1 = cljs.core.__destructure_map(map__32777);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32777__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32777__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32777__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq32776){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32776));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33391 = arguments.length;
var i__5770__auto___33392 = (0);
while(true){
if((i__5770__auto___33392 < len__5769__auto___33391)){
args__5775__auto__.push((arguments[i__5770__auto___33392]));

var G__33393 = (i__5770__auto___33392 + (1));
i__5770__auto___33392 = G__33393;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32779 = conformed_args__31205__auto__;
var map__32779__$1 = cljs.core.__destructure_map(map__32779);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32779__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32779__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32779__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq32778){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32778));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33394 = arguments.length;
var i__5770__auto___33395 = (0);
while(true){
if((i__5770__auto___33395 < len__5769__auto___33394)){
args__5775__auto__.push((arguments[i__5770__auto___33395]));

var G__33396 = (i__5770__auto___33395 + (1));
i__5770__auto___33395 = G__33396;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32781 = conformed_args__31205__auto__;
var map__32781__$1 = cljs.core.__destructure_map(map__32781);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32781__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32781__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32781__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq32780){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32780));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33397 = arguments.length;
var i__5770__auto___33398 = (0);
while(true){
if((i__5770__auto___33398 < len__5769__auto___33397)){
args__5775__auto__.push((arguments[i__5770__auto___33398]));

var G__33399 = (i__5770__auto___33398 + (1));
i__5770__auto___33398 = G__33399;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32783 = conformed_args__31205__auto__;
var map__32783__$1 = cljs.core.__destructure_map(map__32783);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32783__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32783__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32783__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq32782){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32782));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33400 = arguments.length;
var i__5770__auto___33401 = (0);
while(true){
if((i__5770__auto___33401 < len__5769__auto___33400)){
args__5775__auto__.push((arguments[i__5770__auto___33401]));

var G__33402 = (i__5770__auto___33401 + (1));
i__5770__auto___33401 = G__33402;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32785 = conformed_args__31205__auto__;
var map__32785__$1 = cljs.core.__destructure_map(map__32785);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32785__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32785__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32785__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq32784){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32784));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33403 = arguments.length;
var i__5770__auto___33404 = (0);
while(true){
if((i__5770__auto___33404 < len__5769__auto___33403)){
args__5775__auto__.push((arguments[i__5770__auto___33404]));

var G__33405 = (i__5770__auto___33404 + (1));
i__5770__auto___33404 = G__33405;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32787 = conformed_args__31205__auto__;
var map__32787__$1 = cljs.core.__destructure_map(map__32787);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32787__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32787__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32787__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq32786){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32786));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33406 = arguments.length;
var i__5770__auto___33407 = (0);
while(true){
if((i__5770__auto___33407 < len__5769__auto___33406)){
args__5775__auto__.push((arguments[i__5770__auto___33407]));

var G__33408 = (i__5770__auto___33407 + (1));
i__5770__auto___33407 = G__33408;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32789 = conformed_args__31205__auto__;
var map__32789__$1 = cljs.core.__destructure_map(map__32789);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32789__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32789__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq32788){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32788));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33409 = arguments.length;
var i__5770__auto___33410 = (0);
while(true){
if((i__5770__auto___33410 < len__5769__auto___33409)){
args__5775__auto__.push((arguments[i__5770__auto___33410]));

var G__33411 = (i__5770__auto___33410 + (1));
i__5770__auto___33410 = G__33411;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32791 = conformed_args__31205__auto__;
var map__32791__$1 = cljs.core.__destructure_map(map__32791);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32791__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32791__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32791__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq32790){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32790));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33412 = arguments.length;
var i__5770__auto___33413 = (0);
while(true){
if((i__5770__auto___33413 < len__5769__auto___33412)){
args__5775__auto__.push((arguments[i__5770__auto___33413]));

var G__33414 = (i__5770__auto___33413 + (1));
i__5770__auto___33413 = G__33414;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32793 = conformed_args__31205__auto__;
var map__32793__$1 = cljs.core.__destructure_map(map__32793);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32793__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32793__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32793__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq32792){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32792));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33415 = arguments.length;
var i__5770__auto___33416 = (0);
while(true){
if((i__5770__auto___33416 < len__5769__auto___33415)){
args__5775__auto__.push((arguments[i__5770__auto___33416]));

var G__33417 = (i__5770__auto___33416 + (1));
i__5770__auto___33416 = G__33417;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32795 = conformed_args__31205__auto__;
var map__32795__$1 = cljs.core.__destructure_map(map__32795);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32795__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32795__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32795__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq32794){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32794));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33418 = arguments.length;
var i__5770__auto___33419 = (0);
while(true){
if((i__5770__auto___33419 < len__5769__auto___33418)){
args__5775__auto__.push((arguments[i__5770__auto___33419]));

var G__33420 = (i__5770__auto___33419 + (1));
i__5770__auto___33419 = G__33420;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32797 = conformed_args__31205__auto__;
var map__32797__$1 = cljs.core.__destructure_map(map__32797);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32797__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32797__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32797__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq32796){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32796));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33421 = arguments.length;
var i__5770__auto___33422 = (0);
while(true){
if((i__5770__auto___33422 < len__5769__auto___33421)){
args__5775__auto__.push((arguments[i__5770__auto___33422]));

var G__33423 = (i__5770__auto___33422 + (1));
i__5770__auto___33422 = G__33423;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32799 = conformed_args__31205__auto__;
var map__32799__$1 = cljs.core.__destructure_map(map__32799);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32799__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32799__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32799__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq32798){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32798));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33424 = arguments.length;
var i__5770__auto___33425 = (0);
while(true){
if((i__5770__auto___33425 < len__5769__auto___33424)){
args__5775__auto__.push((arguments[i__5770__auto___33425]));

var G__33426 = (i__5770__auto___33425 + (1));
i__5770__auto___33425 = G__33426;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32801 = conformed_args__31205__auto__;
var map__32801__$1 = cljs.core.__destructure_map(map__32801);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32801__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32801__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32801__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq32800){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32800));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33427 = arguments.length;
var i__5770__auto___33428 = (0);
while(true){
if((i__5770__auto___33428 < len__5769__auto___33427)){
args__5775__auto__.push((arguments[i__5770__auto___33428]));

var G__33429 = (i__5770__auto___33428 + (1));
i__5770__auto___33428 = G__33429;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32803 = conformed_args__31205__auto__;
var map__32803__$1 = cljs.core.__destructure_map(map__32803);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32803__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32803__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32803__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq32802){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32802));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33430 = arguments.length;
var i__5770__auto___33431 = (0);
while(true){
if((i__5770__auto___33431 < len__5769__auto___33430)){
args__5775__auto__.push((arguments[i__5770__auto___33431]));

var G__33432 = (i__5770__auto___33431 + (1));
i__5770__auto___33431 = G__33432;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32805 = conformed_args__31205__auto__;
var map__32805__$1 = cljs.core.__destructure_map(map__32805);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32805__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32805__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32805__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq32804){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32804));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33433 = arguments.length;
var i__5770__auto___33434 = (0);
while(true){
if((i__5770__auto___33434 < len__5769__auto___33433)){
args__5775__auto__.push((arguments[i__5770__auto___33434]));

var G__33435 = (i__5770__auto___33434 + (1));
i__5770__auto___33434 = G__33435;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32807 = conformed_args__31205__auto__;
var map__32807__$1 = cljs.core.__destructure_map(map__32807);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32807__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32807__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32807__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq32806){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32806));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33436 = arguments.length;
var i__5770__auto___33437 = (0);
while(true){
if((i__5770__auto___33437 < len__5769__auto___33436)){
args__5775__auto__.push((arguments[i__5770__auto___33437]));

var G__33438 = (i__5770__auto___33437 + (1));
i__5770__auto___33437 = G__33438;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32809 = conformed_args__31205__auto__;
var map__32809__$1 = cljs.core.__destructure_map(map__32809);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32809__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32809__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32809__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq32808){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32808));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33439 = arguments.length;
var i__5770__auto___33440 = (0);
while(true){
if((i__5770__auto___33440 < len__5769__auto___33439)){
args__5775__auto__.push((arguments[i__5770__auto___33440]));

var G__33441 = (i__5770__auto___33440 + (1));
i__5770__auto___33440 = G__33441;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32811 = conformed_args__31205__auto__;
var map__32811__$1 = cljs.core.__destructure_map(map__32811);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32811__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32811__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32811__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq32810){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32810));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33442 = arguments.length;
var i__5770__auto___33443 = (0);
while(true){
if((i__5770__auto___33443 < len__5769__auto___33442)){
args__5775__auto__.push((arguments[i__5770__auto___33443]));

var G__33444 = (i__5770__auto___33443 + (1));
i__5770__auto___33443 = G__33444;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32813 = conformed_args__31205__auto__;
var map__32813__$1 = cljs.core.__destructure_map(map__32813);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32813__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32813__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32813__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq32812){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32812));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33445 = arguments.length;
var i__5770__auto___33446 = (0);
while(true){
if((i__5770__auto___33446 < len__5769__auto___33445)){
args__5775__auto__.push((arguments[i__5770__auto___33446]));

var G__33447 = (i__5770__auto___33446 + (1));
i__5770__auto___33446 = G__33447;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32815 = conformed_args__31205__auto__;
var map__32815__$1 = cljs.core.__destructure_map(map__32815);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32815__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32815__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32815__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq32814){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32814));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33448 = arguments.length;
var i__5770__auto___33449 = (0);
while(true){
if((i__5770__auto___33449 < len__5769__auto___33448)){
args__5775__auto__.push((arguments[i__5770__auto___33449]));

var G__33450 = (i__5770__auto___33449 + (1));
i__5770__auto___33449 = G__33450;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32817 = conformed_args__31205__auto__;
var map__32817__$1 = cljs.core.__destructure_map(map__32817);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32817__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32817__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32817__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq32816){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32816));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33451 = arguments.length;
var i__5770__auto___33452 = (0);
while(true){
if((i__5770__auto___33452 < len__5769__auto___33451)){
args__5775__auto__.push((arguments[i__5770__auto___33452]));

var G__33453 = (i__5770__auto___33452 + (1));
i__5770__auto___33452 = G__33453;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32819 = conformed_args__31205__auto__;
var map__32819__$1 = cljs.core.__destructure_map(map__32819);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32819__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32819__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32819__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq32818){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32818));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33454 = arguments.length;
var i__5770__auto___33455 = (0);
while(true){
if((i__5770__auto___33455 < len__5769__auto___33454)){
args__5775__auto__.push((arguments[i__5770__auto___33455]));

var G__33456 = (i__5770__auto___33455 + (1));
i__5770__auto___33455 = G__33456;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32821 = conformed_args__31205__auto__;
var map__32821__$1 = cljs.core.__destructure_map(map__32821);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32821__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32821__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32821__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq32820){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32820));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33457 = arguments.length;
var i__5770__auto___33458 = (0);
while(true){
if((i__5770__auto___33458 < len__5769__auto___33457)){
args__5775__auto__.push((arguments[i__5770__auto___33458]));

var G__33459 = (i__5770__auto___33458 + (1));
i__5770__auto___33458 = G__33459;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32823 = conformed_args__31205__auto__;
var map__32823__$1 = cljs.core.__destructure_map(map__32823);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32823__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32823__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32823__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq32822){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32822));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33460 = arguments.length;
var i__5770__auto___33461 = (0);
while(true){
if((i__5770__auto___33461 < len__5769__auto___33460)){
args__5775__auto__.push((arguments[i__5770__auto___33461]));

var G__33462 = (i__5770__auto___33461 + (1));
i__5770__auto___33461 = G__33462;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32825 = conformed_args__31205__auto__;
var map__32825__$1 = cljs.core.__destructure_map(map__32825);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32825__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32825__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32825__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq32824){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32824));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33463 = arguments.length;
var i__5770__auto___33464 = (0);
while(true){
if((i__5770__auto___33464 < len__5769__auto___33463)){
args__5775__auto__.push((arguments[i__5770__auto___33464]));

var G__33465 = (i__5770__auto___33464 + (1));
i__5770__auto___33464 = G__33465;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32827 = conformed_args__31205__auto__;
var map__32827__$1 = cljs.core.__destructure_map(map__32827);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32827__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32827__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32827__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq32826){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32826));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33466 = arguments.length;
var i__5770__auto___33467 = (0);
while(true){
if((i__5770__auto___33467 < len__5769__auto___33466)){
args__5775__auto__.push((arguments[i__5770__auto___33467]));

var G__33468 = (i__5770__auto___33467 + (1));
i__5770__auto___33467 = G__33468;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32829 = conformed_args__31205__auto__;
var map__32829__$1 = cljs.core.__destructure_map(map__32829);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32829__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32829__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32829__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq32828){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32828));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33469 = arguments.length;
var i__5770__auto___33470 = (0);
while(true){
if((i__5770__auto___33470 < len__5769__auto___33469)){
args__5775__auto__.push((arguments[i__5770__auto___33470]));

var G__33471 = (i__5770__auto___33470 + (1));
i__5770__auto___33470 = G__33471;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32831 = conformed_args__31205__auto__;
var map__32831__$1 = cljs.core.__destructure_map(map__32831);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32831__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32831__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32831__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq32830){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32830));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33472 = arguments.length;
var i__5770__auto___33473 = (0);
while(true){
if((i__5770__auto___33473 < len__5769__auto___33472)){
args__5775__auto__.push((arguments[i__5770__auto___33473]));

var G__33474 = (i__5770__auto___33473 + (1));
i__5770__auto___33473 = G__33474;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32833 = conformed_args__31205__auto__;
var map__32833__$1 = cljs.core.__destructure_map(map__32833);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32833__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32833__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq32832){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32832));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33475 = arguments.length;
var i__5770__auto___33476 = (0);
while(true){
if((i__5770__auto___33476 < len__5769__auto___33475)){
args__5775__auto__.push((arguments[i__5770__auto___33476]));

var G__33477 = (i__5770__auto___33476 + (1));
i__5770__auto___33476 = G__33477;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32835 = conformed_args__31205__auto__;
var map__32835__$1 = cljs.core.__destructure_map(map__32835);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32835__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32835__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32835__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq32834){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32834));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33478 = arguments.length;
var i__5770__auto___33479 = (0);
while(true){
if((i__5770__auto___33479 < len__5769__auto___33478)){
args__5775__auto__.push((arguments[i__5770__auto___33479]));

var G__33480 = (i__5770__auto___33479 + (1));
i__5770__auto___33479 = G__33480;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32837 = conformed_args__31205__auto__;
var map__32837__$1 = cljs.core.__destructure_map(map__32837);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32837__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32837__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32837__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq32836){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32836));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33481 = arguments.length;
var i__5770__auto___33482 = (0);
while(true){
if((i__5770__auto___33482 < len__5769__auto___33481)){
args__5775__auto__.push((arguments[i__5770__auto___33482]));

var G__33483 = (i__5770__auto___33482 + (1));
i__5770__auto___33482 = G__33483;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32839 = conformed_args__31205__auto__;
var map__32839__$1 = cljs.core.__destructure_map(map__32839);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32839__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32839__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32839__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq32838){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32838));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33484 = arguments.length;
var i__5770__auto___33485 = (0);
while(true){
if((i__5770__auto___33485 < len__5769__auto___33484)){
args__5775__auto__.push((arguments[i__5770__auto___33485]));

var G__33486 = (i__5770__auto___33485 + (1));
i__5770__auto___33485 = G__33486;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32841 = conformed_args__31205__auto__;
var map__32841__$1 = cljs.core.__destructure_map(map__32841);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32841__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32841__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32841__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq32840){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32840));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33487 = arguments.length;
var i__5770__auto___33488 = (0);
while(true){
if((i__5770__auto___33488 < len__5769__auto___33487)){
args__5775__auto__.push((arguments[i__5770__auto___33488]));

var G__33489 = (i__5770__auto___33488 + (1));
i__5770__auto___33488 = G__33489;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32843 = conformed_args__31205__auto__;
var map__32843__$1 = cljs.core.__destructure_map(map__32843);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32843__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32843__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32843__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq32842){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32842));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33490 = arguments.length;
var i__5770__auto___33491 = (0);
while(true){
if((i__5770__auto___33491 < len__5769__auto___33490)){
args__5775__auto__.push((arguments[i__5770__auto___33491]));

var G__33492 = (i__5770__auto___33491 + (1));
i__5770__auto___33491 = G__33492;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32845 = conformed_args__31205__auto__;
var map__32845__$1 = cljs.core.__destructure_map(map__32845);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32845__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32845__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32845__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq32844){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32844));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33493 = arguments.length;
var i__5770__auto___33494 = (0);
while(true){
if((i__5770__auto___33494 < len__5769__auto___33493)){
args__5775__auto__.push((arguments[i__5770__auto___33494]));

var G__33495 = (i__5770__auto___33494 + (1));
i__5770__auto___33494 = G__33495;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32847 = conformed_args__31205__auto__;
var map__32847__$1 = cljs.core.__destructure_map(map__32847);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32847__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32847__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32847__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq32846){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32846));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33496 = arguments.length;
var i__5770__auto___33497 = (0);
while(true){
if((i__5770__auto___33497 < len__5769__auto___33496)){
args__5775__auto__.push((arguments[i__5770__auto___33497]));

var G__33498 = (i__5770__auto___33497 + (1));
i__5770__auto___33497 = G__33498;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32849 = conformed_args__31205__auto__;
var map__32849__$1 = cljs.core.__destructure_map(map__32849);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32849__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32849__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32849__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq32848){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32848));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33499 = arguments.length;
var i__5770__auto___33500 = (0);
while(true){
if((i__5770__auto___33500 < len__5769__auto___33499)){
args__5775__auto__.push((arguments[i__5770__auto___33500]));

var G__33501 = (i__5770__auto___33500 + (1));
i__5770__auto___33500 = G__33501;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32851 = conformed_args__31205__auto__;
var map__32851__$1 = cljs.core.__destructure_map(map__32851);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32851__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32851__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32851__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq32850){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32850));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33502 = arguments.length;
var i__5770__auto___33503 = (0);
while(true){
if((i__5770__auto___33503 < len__5769__auto___33502)){
args__5775__auto__.push((arguments[i__5770__auto___33503]));

var G__33504 = (i__5770__auto___33503 + (1));
i__5770__auto___33503 = G__33504;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32853 = conformed_args__31205__auto__;
var map__32853__$1 = cljs.core.__destructure_map(map__32853);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32853__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32853__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32853__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq32852){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32852));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33505 = arguments.length;
var i__5770__auto___33506 = (0);
while(true){
if((i__5770__auto___33506 < len__5769__auto___33505)){
args__5775__auto__.push((arguments[i__5770__auto___33506]));

var G__33507 = (i__5770__auto___33506 + (1));
i__5770__auto___33506 = G__33507;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32855 = conformed_args__31205__auto__;
var map__32855__$1 = cljs.core.__destructure_map(map__32855);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32855__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32855__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32855__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq32854){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32854));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33508 = arguments.length;
var i__5770__auto___33509 = (0);
while(true){
if((i__5770__auto___33509 < len__5769__auto___33508)){
args__5775__auto__.push((arguments[i__5770__auto___33509]));

var G__33510 = (i__5770__auto___33509 + (1));
i__5770__auto___33509 = G__33510;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32857 = conformed_args__31205__auto__;
var map__32857__$1 = cljs.core.__destructure_map(map__32857);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32857__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32857__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32857__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq32856){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32856));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33511 = arguments.length;
var i__5770__auto___33512 = (0);
while(true){
if((i__5770__auto___33512 < len__5769__auto___33511)){
args__5775__auto__.push((arguments[i__5770__auto___33512]));

var G__33513 = (i__5770__auto___33512 + (1));
i__5770__auto___33512 = G__33513;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32859 = conformed_args__31205__auto__;
var map__32859__$1 = cljs.core.__destructure_map(map__32859);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32859__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32859__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32859__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq32858){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32858));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33514 = arguments.length;
var i__5770__auto___33515 = (0);
while(true){
if((i__5770__auto___33515 < len__5769__auto___33514)){
args__5775__auto__.push((arguments[i__5770__auto___33515]));

var G__33516 = (i__5770__auto___33515 + (1));
i__5770__auto___33515 = G__33516;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32861 = conformed_args__31205__auto__;
var map__32861__$1 = cljs.core.__destructure_map(map__32861);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32861__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32861__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32861__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq32860){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32860));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33517 = arguments.length;
var i__5770__auto___33518 = (0);
while(true){
if((i__5770__auto___33518 < len__5769__auto___33517)){
args__5775__auto__.push((arguments[i__5770__auto___33518]));

var G__33519 = (i__5770__auto___33518 + (1));
i__5770__auto___33518 = G__33519;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32863 = conformed_args__31205__auto__;
var map__32863__$1 = cljs.core.__destructure_map(map__32863);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32863__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32863__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq32862){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32862));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33520 = arguments.length;
var i__5770__auto___33521 = (0);
while(true){
if((i__5770__auto___33521 < len__5769__auto___33520)){
args__5775__auto__.push((arguments[i__5770__auto___33521]));

var G__33522 = (i__5770__auto___33521 + (1));
i__5770__auto___33521 = G__33522;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__31205__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__32865 = conformed_args__31205__auto__;
var map__32865__$1 = cljs.core.__destructure_map(map__32865);
var children__31207__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32865__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__31206__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32865__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__31208__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32865__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__31207__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__31207__auto__);
var attrs_value__31209__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__31206__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__31209__auto__], null),children__31207__auto____$1),css__31208__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq32864){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32864));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
