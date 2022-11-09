goog.provide('cue_list.core');
goog.scope(function(){
  cue_list.core.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
cue_list.core.pdfjs = cue_list.core.goog$module$goog$object.get(window,"pdfjs-dist/build/pdf");
if((typeof cue_list !== 'undefined') && (typeof cue_list.core !== 'undefined') && (typeof cue_list.core.state !== 'undefined')){
} else {
cue_list.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page","page",849072397),(16),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(1),new cljs.core.Keyword(null,"selected-cue-idx","selected-cue-idx",1268873033),null,new cljs.core.Keyword(null,"rotate","rotate",152705015),(0),new cljs.core.Keyword(null,"cues","cues",1596514991),cljs.core.PersistentVector.EMPTY], null));
}
if((typeof cue_list !== 'undefined') && (typeof cue_list.core !== 'undefined') && (typeof cue_list.core.APP !== 'undefined')){
} else {
cue_list.core.APP = com.fulcrologic.fulcro.application.fulcro_app.cljs$core$IFn$_invoke$arity$0();
}

var options__22597__auto___30907 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function cue_list$core$render_Nav_Bar(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__30904 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__30904__$1 = cljs.core.__destructure_map(map__30904);
var props = map__30904__$1;
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30904__$1,new cljs.core.Keyword(null,"page","page",849072397));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30904__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var rotate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30904__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"page: ",com.fulcrologic.fulcro.components.force_children(page)]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"zoom: ",com.fulcrologic.fulcro.components.force_children(zoom)]),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"rotate: ",com.fulcrologic.fulcro.components.force_children(rotate)])], null),null);
}));
})], null);
if((typeof cue_list !== 'undefined') && (typeof cue_list.core !== 'undefined') && (typeof cue_list.core.Nav_Bar !== 'undefined')){
} else {
/**
 * @constructor
 */
cue_list.core.Nav_Bar = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__22597__auto___30907,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(cue_list.core.Nav_Bar,new cljs.core.Keyword("cue-list.core","Nav-Bar","cue-list.core/Nav-Bar",-588880968),options__22597__auto___30907);
cue_list.core.ui_navbar = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(cue_list.core.Nav_Bar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("ui","page","ui/page",849066625)], null));

var options__22597__auto___30908 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function cue_list$core$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cue","number","cue/number",1570215319),new cljs.core.Keyword("cue","description","cue/description",-1428461661),new cljs.core.Keyword("cue","action","cue/action",-811140293)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function cue_list$core$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cue","number","cue/number",1570215319),new cljs.core.Keyword("cue","number","cue/number",1570215319).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function cue_list$core$render_Cue(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__30905 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__30905__$1 = cljs.core.__destructure_map(map__30905);
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30905__$1,new cljs.core.Keyword("cue","number","cue/number",1570215319));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30905__$1,new cljs.core.Keyword("cue","description","cue/description",-1428461661));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30905__$1,new cljs.core.Keyword("cue","action","cue/action",-811140293));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.string.format("number: %s action: %s",number,action)], null),null);
}));
})], null);
if((typeof cue_list !== 'undefined') && (typeof cue_list.core !== 'undefined') && (typeof cue_list.core.Cue !== 'undefined')){
} else {
/**
 * @constructor
 */
cue_list.core.Cue = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__22597__auto___30908,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(cue_list.core.Cue,new cljs.core.Keyword("cue-list.core","Cue","cue-list.core/Cue",-1890292821),options__22597__auto___30908);
cue_list.core.ui_cue = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(cue_list.core.Cue,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("cue","number","cue/number",1570215319)], null));
com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(cue_list.core.Cue);

var options__22597__auto___30909 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),(function cue_list$core$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cue","list","cue/list",765389870),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(cue_list.core.Cue)], null)], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function cue_list$core$render_CueList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cue_list.core.ui_cue,new cljs.core.Keyword("cue","list","cue/list",765389870).cljs$core$IFn$_invoke$arity$1(props))], null),null)], null),null);
}));
})], null);
if((typeof cue_list !== 'undefined') && (typeof cue_list.core !== 'undefined') && (typeof cue_list.core.CueList !== 'undefined')){
} else {
/**
 * @constructor
 */
cue_list.core.CueList = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__22597__auto___30909,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(cue_list.core.CueList,new cljs.core.Keyword("cue-list.core","CueList","cue-list.core/CueList",-911082579),options__22597__auto___30909);
com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(cue_list.core.CueList);
cue_list.core.ui_cue_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(cue_list.core.CueList);

var options__22597__auto___30910 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function cue_list$core$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","cues","root/cues",1583113089),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(cue_list.core.CueList)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function cue_list$core$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","cues","root/cues",1583113089),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","cues","root/cues",1583113089),cue_list.core.CueList], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function cue_list$core$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__30906 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__30906__$1 = cljs.core.__destructure_map(map__30906);
var cues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30906__$1,new cljs.core.Keyword("root","cues","root/cues",1583113089));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["div",({}),"root"]),(cue_list.core.ui_cue_list.cljs$core$IFn$_invoke$arity$1 ? cue_list.core.ui_cue_list.cljs$core$IFn$_invoke$arity$1(cues) : cue_list.core.ui_cue_list.call(null,cues))], null),null);
}));
})], null);
if((typeof cue_list !== 'undefined') && (typeof cue_list.core !== 'undefined') && (typeof cue_list.core.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
cue_list.core.Root = com.fulcrologic.fulcro.components.react_constructor(cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__22597__auto___30910,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876)));
}

com.fulcrologic.fulcro.components.configure_component_BANG_(cue_list.core.Root,new cljs.core.Keyword("cue-list.core","Root","cue-list.core/Root",1485557891),options__22597__auto___30910);
com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(cue_list.core.Root);

//# sourceMappingURL=cue_list.core.js.map
