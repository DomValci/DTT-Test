(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53167772"],{"16dd":function(t,e,n){},2959:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detailsPage"},[n("h1",{attrs:{id:"header"}},[t._v(t._s(t.response.food_name))]),n("div",{staticClass:"detailContainer"},[t.response.photo?n("div",{attrs:{id:"wraper"}},[n("img",{attrs:{src:t.response.photo.thumb,alt:"mainImg",id:"mainImg",width:"80%",height:"auto"}})]):n("div",[n("h2",[t._v("Loading")])]),n("div",{attrs:{id:"fullDetails"}},[n("h4",[t._v("Brand - "+t._s(t.response.brand_name_item_name))]),n("h4",[t._v("Serving Unit - "+t._s(t.response.serving_unit))]),n("h4",[t._v("Serving Quantity - "+t._s(t.response.serving_qty))]),n("h4",[t._v("Calories - "+t._s(Math.round(t.response.nf_calories))+" ")])])]),n("h1",{attrs:{id:"header"}},[t._v("Relevent Items")]),n("div",{attrs:{id:"releventDetailContainer"}},t._l(t.releventItems,function(e,a){return n("div",{key:a,attrs:{id:"releventItem"}},[n("p",[t._v(t._s(e.food_name))]),n("img",{attrs:{src:e.photo.thumb,alt:"relevent",width:"30%",height:"auto"}}),n("p",[t._v("Serving Unit: "+t._s(e.serving_unit))]),n("p",[t._v("Serving Quantity: "+t._s(e.serving_qty))]),n("p",[t._v("Calories: "+t._s(Math.round(e.nf_calories)))])])}),0),n("Navigation"),n("Footer")],1)},r=[],i=n("fd2d"),s=n("f4dd"),o={name:"detailsPage",components:{Navigation:s["a"],Footer:i["a"]},data:function(){return{config:{headers:{"x-app-id":"d1bcf11d","x-app-key":"84c1b7fa584873b8afe60312db88d3e8"}},response:{},releventItems:[null,null,null]}},created:function(){var t=this;axios.get("https://trackapi.nutritionix.com//v2/search/instant?query="+this.$route.params.food_name,this.config).then(function(e){t.response=e.data.branded[0],t.releventItems[0]=e.data.branded[1],t.releventItems[1]=e.data.branded[2],t.releventItems[2]=e.data.branded[3]})}},d=o,v=(n("5756"),n("2877")),l=Object(v["a"])(d,a,r,!1,null,"4b9a3203",null);e["default"]=l.exports},"4f40":function(t,e,n){},5756:function(t,e,n){"use strict";var a=n("16dd"),r=n.n(a);r.a},"7dd7":function(t,e,n){"use strict";var a=n("4f40"),r=n.n(a);r.a},f4dd:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Navigation"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/categories"}},[t._v("Categories")]),n("router-link",{attrs:{to:"/random"}},[t._v("Random")])],1)},r=[],i={name:"Navigation"},s=i,o=(n("7dd7"),n("2877")),d=Object(o["a"])(s,a,r,!1,null,"5281772c",null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-53167772.3fde217c.js.map