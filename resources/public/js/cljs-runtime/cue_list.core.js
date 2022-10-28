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
cue_list.core.dom_point_vec = (function cue_list$core$dom_point_vec(point){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point.x,point.y], null);
});
cue_list.core.viewport_point_to_doc_point = (function cue_list$core$viewport_point_to_doc_point(v_point,viewport){
var trans_mat = viewport.transform;
return cue_list.core.dom_point_vec((new DOMMatrix(viewport.transform)).inverse().transformPoint((new DOMPoint(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_point,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v_point,(1))))));
});
cue_list.core.doc_point_to_view_point = (function cue_list$core$doc_point_to_view_point(doc_point,viewport){
return cue_list.core.dom_point_vec((new DOMMatrix(viewport.transform)).transformPoint((new DOMPoint(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(doc_point,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(doc_point,(1))))));
});
cue_list.core.cue_flag_points = (function cue_list$core$cue_flag_points(origin){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [origin,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first(origin) - (10)),(cljs.core.second(origin) - (10))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first(origin) - (50)),(cljs.core.second(origin) - (10))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first(origin) - (50)),(cljs.core.second(origin) + (10))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first(origin) - (10)),(cljs.core.second(origin) + (10))], null)], null);
});
cue_list.core.on_canvas_click = (function cue_list$core$on_canvas_click(event){
var rect = event.target.getBoundingClientRect();
var vp_x = (event.pageX - rect.left);
var vp_y = ((event.pageY - rect.top) - window.scrollY);
var doc_point = cue_list.core.viewport_point_to_doc_point(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vp_x,vp_y], null),Window.viewport);
var last_cue = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"cue-number","cue-number",350499259).cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cue-number","cue-number",350499259),new cljs.core.Keyword(null,"cues","cues",1596514991).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)))));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var new_cue = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cue-number","cue-number",350499259),((1) + last_cue),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)),new cljs.core.Keyword(null,"point","point",1813198264),doc_point,new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"action","action",-811238024),""], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cue_list.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"cues","cues",1596514991),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cues","cues",1596514991).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)),new_cue));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cue_list.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-cue-idx","selected-cue-idx",1268873033),new cljs.core.Keyword(null,"cues","cues",1596514991).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)).indexOf(new_cue));
});
cue_list.core.sorted_cues = (function cue_list$core$sorted_cues(cues){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__11228_SHARP_){
return cljs.core.second(new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p1__11228_SHARP_));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__11227_SHARP_){
return cljs.core.first(new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p1__11227_SHARP_));
}),cues))));
});
cue_list.core.render_cue_flags = (function cue_list$core$render_cue_flags(context,viewport){
var seq__11230 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__11229_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(p1__11229_SHARP_),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)));
}),new cljs.core.Keyword(null,"cues","cues",1596514991).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state))));
var chunk__11231 = null;
var count__11232 = (0);
var i__11233 = (0);
while(true){
if((i__11233 < count__11232)){
var cue = chunk__11231.cljs$core$IIndexed$_nth$arity$2(null,i__11233);
var flag_points_11255 = cue_list.core.cue_flag_points(cue_list.core.doc_point_to_view_point(new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(cue),viewport));
var selected_11256 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selected-cue-idx","selected-cue-idx",1268873033).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)),new cljs.core.Keyword(null,"cues","cues",1596514991).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)).indexOf(cue));
if(selected_11256){
(context.fillStyle = "rgba(204, 255, 110, 0.5)");
} else {
(context.fillStyle = "rgba(244, 231, 34, 0.5)");
}

context.beginPath();

context.moveTo(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11255,(0))),cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11255,(0))));

context.lineTo(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11255,(1))),cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11255,(1))));

context.lineTo(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11255,(2))),cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11255,(2))));

context.lineTo(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11255,(3))),cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11255,(3))));

context.lineTo(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11255,(4))),cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11255,(4))));

context.fill();

(context.fillStyle = ((selected_11256)?"rgba(0, 0, 0, 1)":"rgba(0, 0, 0, 0.2)"));

(context.font = "25px sans-serif");

context.fillText(new cljs.core.Keyword(null,"cue-number","cue-number",350499259).cljs$core$IFn$_invoke$arity$1(cue),cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11255,(3))),cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11255,(3))));


var G__11257 = seq__11230;
var G__11258 = chunk__11231;
var G__11259 = count__11232;
var G__11260 = (i__11233 + (1));
seq__11230 = G__11257;
chunk__11231 = G__11258;
count__11232 = G__11259;
i__11233 = G__11260;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11230);
if(temp__5804__auto__){
var seq__11230__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11230__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11230__$1);
var G__11261 = cljs.core.chunk_rest(seq__11230__$1);
var G__11262 = c__5568__auto__;
var G__11263 = cljs.core.count(c__5568__auto__);
var G__11264 = (0);
seq__11230 = G__11261;
chunk__11231 = G__11262;
count__11232 = G__11263;
i__11233 = G__11264;
continue;
} else {
var cue = cljs.core.first(seq__11230__$1);
var flag_points_11265 = cue_list.core.cue_flag_points(cue_list.core.doc_point_to_view_point(new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(cue),viewport));
var selected_11266 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selected-cue-idx","selected-cue-idx",1268873033).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)),new cljs.core.Keyword(null,"cues","cues",1596514991).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)).indexOf(cue));
if(selected_11266){
(context.fillStyle = "rgba(204, 255, 110, 0.5)");
} else {
(context.fillStyle = "rgba(244, 231, 34, 0.5)");
}

context.beginPath();

context.moveTo(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11265,(0))),cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11265,(0))));

context.lineTo(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11265,(1))),cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11265,(1))));

context.lineTo(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11265,(2))),cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11265,(2))));

context.lineTo(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11265,(3))),cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11265,(3))));

context.lineTo(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11265,(4))),cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11265,(4))));

context.fill();

(context.fillStyle = ((selected_11266)?"rgba(0, 0, 0, 1)":"rgba(0, 0, 0, 0.2)"));

(context.font = "25px sans-serif");

context.fillText(new cljs.core.Keyword(null,"cue-number","cue-number",350499259).cljs$core$IFn$_invoke$arity$1(cue),cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11265,(3))),cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flag_points_11265,(3))));


var G__11267 = cljs.core.next(seq__11230__$1);
var G__11268 = null;
var G__11269 = (0);
var G__11270 = (0);
seq__11230 = G__11267;
chunk__11231 = G__11268;
count__11232 = G__11269;
i__11233 = G__11270;
continue;
}
} else {
return null;
}
}
break;
}
});
cue_list.core.update_doc_dims = (function cue_list$core$update_doc_dims(width,height){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cue_list.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"doc-dims","doc-dims",242310261),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
});
cue_list.core.pdf_canvas = (function cue_list$core$pdf_canvas(p__11234){
var map__11235 = p__11234;
var map__11235__$1 = cljs.core.__destructure_map(map__11235);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11235__$1,new cljs.core.Keyword(null,"url","url",276297046));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11235__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var canvas_ref = module$node_modules$react$index.useRef(null);
module$node_modules$react$index.useEffect((function (){
cue_list.core.pdfjs.getDocument(url).promise.then((function (pdf){
return pdf.getPage(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(state));
})).then((function (page){
var viewport = page.getViewport(({"scale": new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(state), "rotation": new cljs.core.Keyword(null,"rotate","rotate",152705015).cljs$core$IFn$_invoke$arity$1(state)}));
var canvas = canvas_ref.current;
var context = canvas.getContext("2d");
var render_context = ({"canvasContext": context, "viewport": viewport});
(canvas.height = viewport.height);

cue_list.core.update_doc_dims(viewport.width,viewport.height);

(canvas.width = viewport.width);

(Window.viewport = viewport);

return page.render(render_context).promise.then((function (){
return console.log("PDF Page rendered.");
}));
}));

return (function (){
return null;
});
}),[url,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"rotate","rotate",152705015).cljs$core$IFn$_invoke$arity$1(state)]);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),canvas_ref,new cljs.core.Keyword(null,"id","id",-1388402092),"document-canvas",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null)], null)], null);
});
cue_list.core.cue_overlay = (function cue_list$core$cue_overlay(p__11236){
var map__11237 = p__11236;
var map__11237__$1 = cljs.core.__destructure_map(map__11237);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11237__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var canvas_ref = module$node_modules$react$index.useRef(null);
var viewport = Window.viewport;
var doc_canvas = document.getElementById("document-canvas");
module$node_modules$react$index.useEffect((function (){
var canvas_11271 = canvas_ref.current;
var context_11272 = canvas_11271.getContext("2d");
context_11272.reset();

canvas_11271.addEventListener("click",cue_list.core.on_canvas_click);

cue_list.core.render_cue_flags(context_11272,viewport);

return (function (){
return null;
});
}),[state]);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),canvas_ref,new cljs.core.Keyword(null,"id","id",-1388402092),"overlay-canvas",new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.first(new cljs.core.Keyword(null,"doc-dims","doc-dims",242310261).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.second(new cljs.core.Keyword(null,"doc-dims","doc-dims",242310261).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null);
});
cue_list.core.dec_page = (function cue_list$core$dec_page(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cue_list.core.state,(function (p1__11238_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__11238_SHARP_,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.dec);
}));
});
cue_list.core.inc_page = (function cue_list$core$inc_page(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cue_list.core.state,(function (p1__11239_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__11239_SHARP_,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.inc);
}));
});
cue_list.core.dec_zoom = (function cue_list$core$dec_zoom(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cue_list.core.state,(function (p1__11240_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__11240_SHARP_,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(function (i){
return (i - 0.25);
}));
}));
});
cue_list.core.inc_zoom = (function cue_list$core$inc_zoom(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cue_list.core.state,(function (p1__11241_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__11241_SHARP_,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(function (i){
return (i + 0.25);
}));
}));
});
cue_list.core.rotate_clockwise = (function cue_list$core$rotate_clockwise(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cue_list.core.state,(function (p1__11242_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__11242_SHARP_,new cljs.core.Keyword(null,"rotate","rotate",152705015),(function (i){
return cljs.core.mod((i + (90)),(360));
}));
}));
});
cue_list.core.rotate_counterclockwise = (function cue_list$core$rotate_counterclockwise(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cue_list.core.state,(function (p1__11243_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__11243_SHARP_,new cljs.core.Keyword(null,"rotate","rotate",152705015),(function (i){
return cljs.core.mod((i - (90)),(360));
}));
}));
});
cue_list.core.on_cue_click = (function cue_list$core$on_cue_click(cue){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cue_list.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cue));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cue_list.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-cue-idx","selected-cue-idx",1268873033),new cljs.core.Keyword(null,"cues","cues",1596514991).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)).indexOf(cue));
});
cue_list.core.remove_cue = (function cue_list$core$remove_cue(cue){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cues","cues",1596514991).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)).indexOf(cue),new cljs.core.Keyword(null,"selected-cue-idx","selected-cue-idx",1268873033).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cue_list.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-cue-idx","selected-cue-idx",1268873033),null);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cue_list.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"cues","cues",1596514991),cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__11244_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cue-number","cue-number",350499259).cljs$core$IFn$_invoke$arity$1(cue),new cljs.core.Keyword(null,"cue-number","cue-number",350499259).cljs$core$IFn$_invoke$arity$1(p1__11244_SHARP_));
}),new cljs.core.Keyword(null,"cues","cues",1596514991).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)))));
});
cue_list.core.update_cue_field = (function cue_list$core$update_cue_field(cue,kw,val){
var idx = new cljs.core.Keyword(null,"cues","cues",1596514991).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)).indexOf(cue);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cue_list.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"cues","cues",1596514991),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"cues","cues",1596514991).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)),idx,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cues","cues",1596514991).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)),idx),kw,val)));
});
cue_list.core.cue_button_li = (function cue_list$core$cue_button_li(cue){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cues","cues",1596514991).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)).indexOf(cue),new cljs.core.Keyword(null,"selected-cue-idx","selected-cue-idx",1268873033).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"inset"], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__11245_SHARP_){
var G__11250 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cue_list.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-cue-idx","selected-cue-idx",1268873033),null);
var fexpr__11249 = p1__11245_SHARP_.preventDefault();
return (fexpr__11249.cljs$core$IFn$_invoke$arity$1 ? fexpr__11249.cljs$core$IFn$_invoke$arity$1(G__11250) : fexpr__11249.call(null,G__11250));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"cue-number"], null),"Cue Number"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"cue-number",new cljs.core.Keyword(null,"name","name",1843675177),"cue-number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cue-number","cue-number",350499259).cljs$core$IFn$_invoke$arity$1(cue),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__11246_SHARP_){
return cue_list.core.update_cue_field(cue,new cljs.core.Keyword(null,"cue-number","cue-number",350499259),p1__11246_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"action"], null),"Action"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"action",new cljs.core.Keyword(null,"name","name",1843675177),"action",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cue),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__11247_SHARP_){
return cue_list.core.update_cue_field(cue,new cljs.core.Keyword(null,"action","action",-811238024),p1__11247_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"description"], null),"Description"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"description",new cljs.core.Keyword(null,"name","name",1843675177),"description",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(cue),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__11248_SHARP_){
return cue_list.core.update_cue_field(cue,new cljs.core.Keyword(null,"description","description",-1428560544),p1__11248_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"hidden","hidden",-312506092),true], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cue_list.core.remove_cue(cue);
}),new cljs.core.Keyword(null,"value","value",305978217),"Delete Cue"], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cue_list.core.on_cue_click(cue);
}),new cljs.core.Keyword(null,"value","value",305978217),goog.string.format("cue: %s page: %s action: %s description: %s",new cljs.core.Keyword(null,"cue-number","cue-number",350499259).cljs$core$IFn$_invoke$arity$1(cue),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cue),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cue),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(cue))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cue_list.core.remove_cue(cue);
}),new cljs.core.Keyword(null,"value","value",305978217),"x"], null)], null)], null);
}
});
cue_list.core.app = (function cue_list$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Script Cue Annotator"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"nav",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start",new cljs.core.Keyword(null,"column-gap","column-gap",384822863),"20px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start",new cljs.core.Keyword(null,"column-gap","column-gap",384822863),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),goog.string.format("< %s",(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)) - (1))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cue_list.core.dec_page], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),goog.string.format("> %s",(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)) + (1))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cue_list.core.inc_page], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"page: ",new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start",new cljs.core.Keyword(null,"column-gap","column-gap",384822863),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"-",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cue_list.core.dec_zoom], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"+",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cue_list.core.inc_zoom], null)], null),goog.string.format("zoom: %s",new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start",new cljs.core.Keyword(null,"column-gap","column-gap",384822863),"5px"], null)], null),"rotate: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"\u21BA",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cue_list.core.rotate_counterclockwise], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"\u21BB",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cue_list.core.rotate_clockwise], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"rotation: ",new cljs.core.Keyword(null,"rotate","rotate",152705015).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state))], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"canvas-container",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0),new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.first(new cljs.core.Keyword(null,"doc-dims","doc-dims",242310261).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state))),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.second(new cljs.core.Keyword(null,"doc-dims","doc-dims",242310261).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),cue_list.core.cue_overlay,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref(cue_list.core.state)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),cue_list.core.pdf_canvas,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/test.pdf",new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref(cue_list.core.state)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"cues",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function cue_list$core$app_$_iter__11251(s__11252){
return (new cljs.core.LazySeq(null,(function (){
var s__11252__$1 = s__11252;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__11252__$1);
if(temp__5804__auto__){
var s__11252__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11252__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__11252__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__11254 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__11253 = (0);
while(true){
if((i__11253 < size__5522__auto__)){
var cue = cljs.core._nth(c__5521__auto__,i__11253);
cljs.core.chunk_append(b__11254,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cue_list.core.cue_button_li,cue], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"cues","cues",1596514991).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)).indexOf(cue)], null)));

var G__11273 = (i__11253 + (1));
i__11253 = G__11273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11254),cue_list$core$app_$_iter__11251(cljs.core.chunk_rest(s__11252__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11254),null);
}
} else {
var cue = cljs.core.first(s__11252__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cue_list.core.cue_button_li,cue], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"cues","cues",1596514991).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state)).indexOf(cue)], null)),cue_list$core$app_$_iter__11251(cljs.core.rest(s__11252__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cue_list.core.sorted_cues(new cljs.core.Keyword(null,"cues","cues",1596514991).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cue_list.core.state))));
})()], null)], null)], null)], null);
});
cue_list.core.stop = (function cue_list$core$stop(){
return console.log("stop");
});
cue_list.core.start = (function cue_list$core$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cue_list.core.app], null),document.querySelector("#app"));
});
cue_list.core.init = (function cue_list$core$init(){
console.log("starting");

(cue_list.core.pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js");

return cue_list.core.start();
});

//# sourceMappingURL=cue_list.core.js.map
