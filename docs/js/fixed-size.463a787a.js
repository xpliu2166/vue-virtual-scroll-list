(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fixed-size"],{"19e7":function(e,t,n){},3188:function(e,t,n){},c227:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"example"},[n("github-corner"),n("introduction",{attrs:{description:"The size of each item is equal."}}),n("div",{staticClass:"example-content"},[n("tab",{on:{"tab-change":e.onTabChange}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowView,expression:"isShowView"}]},[n("virtual-list",{staticClass:"list scroll-touch",attrs:{size:50,keeps:30,"item-class":"list-item-fixed","data-key":"id","data-sources":e.items,"data-component":e.itemComponent}})],1),n("codeblock",{directives:[{name:"show",rawName:"v-show",value:!e.isShowView,expression:"!isShowView"}]})],1)],1)},s=[],a=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item-inner"},[n("span",[e._v("# "+e._s(e.source.index))]),n("span",[e._v(e._s(e.source.name))])])}),o=[],c={name:"fix-size-item",props:{source:{type:Object,default:function(){return{}}}}},r=c,l=(n("d16c"),n("2877")),u=Object(l["a"])(r,a,o,!1,null,"e8597b74",null),m=u.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("code-high-light",{attrs:{type:"html",code:e.html}}),n("code-high-light",{attrs:{type:"js",code:e.js}})],1)},h=[],p='\n<virtual-list class="list"\n  :size="60" // just assign a estimate value.\n  :keeps="30"\n  :data-key="\'id\'"\n  :data-sources="items"\n  :data-component="itemComponent"\n/>\n',f="\nimport Item from './Item'\nconst items = [\n  {\n    id: 'unique-id-xxx',\n    ...\n  },\n  ....\n]\n\nexport default {\n  ...\n  data () {\n    return {\n      items: items,\n      itemComponent: Item,\n    }\n  }\n  ...\n}\n",w={name:"fix-size-code",data:function(){return{html:p,js:f}}},v=w,b=Object(l["a"])(v,d,h,!1,null,null,null),x=b.exports,g=n("adf9"),C=n("c57d"),_=n("b95e"),j=1e4,k=[],V=j;while(V--){var z=j-V;k.push({index:z,name:g["Random"].name(),id:Object(C["a"])(z)})}var S={name:"fix-size",components:{codeblock:x},data:function(){return{total:j.toLocaleString(),items:k,itemComponent:m,isShowView:_["a"]===_["b"].VIEW}},methods:{onTabChange:function(e){this.isShowView=e===_["b"].VIEW}}},y=S,E=(n("e3d2"),Object(l["a"])(y,i,s,!1,null,null,null));t["default"]=E.exports},d16c:function(e,t,n){"use strict";var i=n("19e7"),s=n.n(i);s.a},e3d2:function(e,t,n){"use strict";var i=n("3188"),s=n.n(i);s.a}}]);
//# sourceMappingURL=fixed-size.463a787a.js.map