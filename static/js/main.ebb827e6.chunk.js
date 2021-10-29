(this["webpackJsonppokemons-app"]=this["webpackJsonppokemons-app"]||[]).push([[0],{10:function(e,t,a){e.exports={viewWrapper:"styles_viewWrapper__wm3ou",view:"styles_view__3Ljuy",active:"styles_active__23oG2"}},12:function(e,t,a){e.exports={container:"styles_container__2-K2N",list:"styles_list__aWx8J",viewTile:"styles_viewTile__3DY-c",item:"styles_item__1hk-1",viewList:"styles_viewList__2bl6I",name:"styles_name__1ClpS",spinnerWrapper:"styles_spinnerWrapper__18-l_"}},14:function(e,t,a){e.exports={pagination:"styles_pagination__XTV33",active:"styles_active__LfUod",disabled:"styles_disabled__ozVHU"}},16:function(e,t,a){e.exports={container:"styles_container__3cRKv",searchForm:"styles_searchForm__3P8rV",input:"styles_input__1TLoe",button:"styles_button__3F1yt"}},2:function(e,t,a){e.exports={modalWrapper:"styles_modalWrapper__bRE8u",backDrop:"styles_backDrop__ptWl6",container:"styles_container__J34dr",close:"styles_close__1WOWg",pokemonWrapper:"styles_pokemonWrapper__2thja",baseInfo:"styles_baseInfo__13v36",name:"styles_name__3NjCw",imageWrapper:"styles_imageWrapper__2Qlqi",stats:"styles_stats__9-xTW",moves:"styles_moves__2oSl1",list:"styles_list__3cix2",blockTitle:"styles_blockTitle__3X5Ue"}},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n,c,s,r,o=a(0),i=a.n(o),l=a(19),u=a.n(l),j=a(3),b=a(4),p=Object(b.a)("pokemon/getListRequest"),m=Object(b.a)("pokemon/getListSuccess"),O=Object(b.a)("pokemon/getListError"),_=Object(b.a)("pokemon/getItemRequest"),v=Object(b.a)("pokemon/getItemSuccess"),d=Object(b.a)("pokemon/getItemError"),f=Object(b.a)("pokemon/removePokemonFromStore"),x=Object(b.a)("pokemon/clearErrors"),h=a(11),k=a.n(h),y=a(21),g=a(22),N=a.n(g),w=a(7),W=a(5),L=Object(b.b)([],Object(w.a)({},m,(function(e,t){return t.payload}))),C=Object(b.b)(null,(n={},Object(w.a)(n,v,(function(e,t){return t.payload})),Object(w.a)(n,f,(function(){return null})),n)),S=Object(b.b)(null,(c={},Object(w.a)(c,O,(function(e,t){return t.payload})),Object(w.a)(c,d,(function(e,t){return t.payload})),Object(w.a)(c,x,(function(){return null})),c)),E=Object(b.b)(!1,(s={},Object(w.a)(s,p,(function(){return!0})),Object(w.a)(s,m,(function(){return!1})),Object(w.a)(s,O,(function(){return!1})),s)),T=Object(b.b)(!1,(r={},Object(w.a)(r,_,(function(){return!0})),Object(w.a)(r,v,(function(){return!1})),Object(w.a)(r,d,(function(){return!1})),r)),I=Object(W.b)({pokemons:L,pokemon:C,error:S,loadPokemonsList:E,loadPokemon:T}),D=function(e){return e.pokemons.results},P=function(e){return e.pokemons.count},V=function(e){return e.pokemon},F=function(e){return e.loadPokemonsList},R=function(e){return e.error},U=a(9),X=a(16),J=a.n(X),q=a(1),B=function(){var e=Object(j.b)(),t=Object(o.useState)(""),a=Object(U.a)(t,2),n=a[0],c=a[1];return Object(q.jsx)("div",{className:J.a.container,children:Object(q.jsxs)("form",{className:J.a.searchForm,onSubmit:function(t){var a;t.preventDefault(),e((a=n,function(){var e=Object(y.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x()),t(_()),e.prev=2,e.next=5,N.a.get("https://pokeapi.co/api/v2/pokemon/".concat(a));case 5:n=e.sent,t(v(n.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t(d(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}())),c("")},children:[Object(q.jsx)("input",{className:J.a.input,type:"text",value:n,autoComplete:"off",autoFocus:!0,placeholder:"Type pokemon name...",onChange:function(e){c(e.target.value)}}),Object(q.jsx)("button",{disabled:!n,type:"submit",className:J.a.button,children:"Find"})]})})},K=a(20),M=a.n(K),z=a(10),A=a.n(z),G=function(e){var t=e.currentView,a=e.setCurrentView;return Object(q.jsxs)("div",{className:A.a.viewWrapper,children:[Object(q.jsx)("div",{onClick:function(){return a("viewTile")},style:{backgroundImage:"url(".concat("/pokemons-app","/images/svg/view_1.svg)")},className:"viewTile"===t?"".concat(A.a.view," ").concat(A.a.active):"".concat(A.a.view)}),Object(q.jsx)("div",{onClick:function(){return a("viewList")},style:{backgroundImage:"url(".concat("/pokemons-app","/images/svg/view_2.svg)")},className:"viewList"===t?"".concat(A.a.view," ").concat(A.a.active):"".concat(A.a.view)})]})},H=a(33),Q=a.n(H),Y=a(14),Z=a.n(Y),$=function(e){var t=e.total,a=e.perPage,n=Object(j.b)(),c=Object(o.useState)(),s=Object(U.a)(c,2),r=s[0],i=s[1],l=Object(o.useState)(1),u=Object(U.a)(l,2),b=u[0],_=u[1];return Object(o.useEffect)((function(){i(Math.ceil(t/a))}),[t,a]),Object(o.useEffect)((function(){n(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return function(){var a=Object(y.a)(k.a.mark((function a(n){var c;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(x()),n(p()),a.prev=2,a.next=5,N.a.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(e,"&offset=").concat(t));case 5:c=a.sent,n(m(c.data)),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),n(O(a.t0.message));case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}(a,b*a))}),[b]),Object(q.jsx)("div",{children:Object(q.jsx)(Q.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:r,onPageChange:function(e){var t=e.selected;_(t+1)},containerClassName:Z.a.pagination,previousLinkClassName:Z.a.prevBtn,nextLinkClassName:Z.a.nextBtn,disabledClassName:Z.a.disabled,activeClassName:Z.a.active})})},ee=a(12),te=a.n(ee),ae=function(){var e=Object(j.b)(),t=Object(o.useState)("viewList"),a=Object(U.a)(t,2),n=a[0],c=a[1],s=Object(j.c)(D),r=Object(j.c)(F),i=Object(j.c)(P),l=Object(j.c)(R);return Object(q.jsxs)("div",{className:te.a.container,children:[Object(q.jsx)(G,{currentView:n,setCurrentView:c}),l&&Object(q.jsx)("p",{children:l}),Object(q.jsx)($,{total:i,perPage:20}),r?Object(q.jsx)("div",{className:te.a.spinnerWrapper,children:Object(q.jsx)(M.a,{color:"#f6ac29"})}):Object(q.jsx)("ul",{className:"".concat(te.a.list," ").concat(te.a[n]),children:null===s||void 0===s?void 0:s.map((function(t){var a=t.name,n=t.url,c=a[0].toUpperCase()+a.slice(1);return Object(q.jsx)("div",{className:te.a.item,onClick:function(){return e(function(e){return function(){var t=Object(y.a)(k.a.mark((function t(a){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(x()),a(_()),t.prev=2,t.next=5,N.a.get(e);case 5:n=t.sent,a(v(n.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),a(d(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}(n))},children:Object(q.jsx)("p",{className:te.a.name,children:c})},a)}))})]})},ne=a(2),ce=a.n(ne),se=function(){var e=Object(j.b)(),t=Object(o.useState)(!1),a=Object(U.a)(t,2),n=a[0],c=a[1],s=Object(o.useState)(!0),r=Object(U.a)(s,2),i=r[0],l=r[1],u=Object(j.c)(V);return Object(o.useEffect)((function(){c(!0)}),[u]),Object(q.jsx)(q.Fragment,{children:n&&u&&Object(q.jsxs)("div",{className:ce.a.modalWrapper,children:[Object(q.jsx)("div",{className:ce.a.container,children:Object(q.jsxs)("div",{className:ce.a.pokemonWrapper,children:[Object(q.jsx)("div",{className:ce.a.close,onClick:function(){e(f()),c(!1),l(!0)},children:"x"}),Object(q.jsxs)("div",{className:ce.a.baseInfo,children:[Object(q.jsxs)("div",{className:ce.a.imageWrapper,children:[i&&Object(q.jsx)(M.a,{color:"#f6ac29"}),Object(q.jsx)("img",{src:u.sprites.front_default,alt:"".concat(u.name,"'s avatar"),className:ce.a.avatar,onLoad:function(){return l(!1)}})]}),Object(q.jsx)("p",{className:ce.a.name,children:u.name})]}),Object(q.jsxs)("div",{className:"".concat(ce.a.blockWrapper," ").concat(ce.a.stats),children:[Object(q.jsx)("p",{className:ce.a.blockTitle,children:"stats"}),Object(q.jsx)("ul",{className:ce.a.list,children:u.stats.map((function(e){var t=e.base_stat,a=e.stat;return Object(q.jsxs)("li",{children:[Object(q.jsx)("span",{children:a.name})," - ",t]},a.name)}))})]}),Object(q.jsxs)("div",{className:"".concat(ce.a.blockWrapper," ").concat(ce.a.moves),children:[Object(q.jsx)("p",{className:ce.a.blockTitle,children:"moves"}),Object(q.jsx)("ul",{className:ce.a.list,children:u.moves.map((function(e,t){var a=e.move;return Object(q.jsx)("li",{children:a.name},a.name)}))})]})]})}),Object(q.jsx)("div",{className:ce.a.backDrop})]})})},re=function(){Object(j.b)();return Object(q.jsxs)("div",{children:[Object(q.jsx)(B,{}),Object(q.jsx)(ae,{}),Object(q.jsx)(se,{})]})};var oe=function(){return Object(q.jsx)("div",{className:"App",children:Object(q.jsx)(re,{})})},ie=a(15),le=Object(W.d)(I,Object(W.c)(Object(W.a)(ie.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));a(69);u.a.render(Object(q.jsx)(i.a.StrictMode,{children:Object(q.jsx)(j.a,{store:le,children:Object(q.jsx)(oe,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.ebb827e6.chunk.js.map