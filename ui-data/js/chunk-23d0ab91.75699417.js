(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23d0ab91"],{1:function(e,t){},"1c4c":function(e,t,a){"use strict";var n=a("9b43"),i=a("5ca1"),o=a("4bf8"),r=a("1fa8"),s=a("33a4"),c=a("9def"),u=a("f1ae"),d=a("27ee");i(i.S+i.F*!a("5cc5")((function(e){Array.from(e)})),"Array",{from:function(e){var t,a,i,p,l=o(e),f="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,v=void 0!==h,w=0,y=d(l);if(v&&(h=n(h,m>2?arguments[2]:void 0,2)),void 0==y||f==Array&&s(y))for(t=c(l.length),a=new f(t);t>w;w++)u(a,w,v?h(l[w],w):l[w]);else for(p=y.call(l),a=new f;!(i=p.next()).done;w++)u(a,w,v?r(p,h,[i.value,w],!0):i.value);return a.length=w,a}})},"3cc2":function(e,t,a){},"5df3":function(e,t,a){"use strict";var n=a("02f4")(!0);a("01f9")(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,a=this._i;return a>=t.length?{value:void 0,done:!0}:(e=n(t,a),this._i+=e.length,{value:e,done:!1})}))},"82a0":function(e,t,a){"use strict";function n(e){window.open("/#/ops/celery/task/".concat(e,"/log/"),"","width=900,height=600")}a.d(t,"a",(function(){return n}))},c0eb:function(e,t,a){"use strict";var n=a("1157"),i=a.n(n);window.$=i.a,window.jQuery=i.a,t["a"]=i.a},fcc2:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("GenericCreateUpdatePage",e._b({},"GenericCreateUpdatePage",e.$data,!1))},i=[],o=a("5e04"),r=a("2af9"),s=a("8521"),c={name:"GatewayCreateUpdate",components:{GenericCreateUpdatePage:o["a"]},data:function(){return{initial:{protocol:"ssh",port:22,domain:this.$route.query.domain,is_active:!0},fields:[[this.$t("common.Basic"),["name","ip","port","protocol","domain"]],[this.$t("assets.Auth"),["username","password","private_key"]],[this.$t("common.Other"),["is_active","comment"]]],fieldsMeta:{ip:{type:"input",el:{type:"input"}},domain:{component:r["k"],el:{ajax:{url:"/api/v1/assets/domains/"},disabled:!0,multiple:!1}},protocol:{helpText:this.$t("assets.GatewayProtocolHelpText")},password:{component:s["b"]},is_active:{type:"switch"},private_key:{component:r["m"]}},updateSuccessNextRoute:{name:"DomainDetail",params:{id:""}},createSuccessNextRoute:{name:"DomainDetail",params:{}},url:"/api/v1/assets/gateways/",hasDetailInMsg:!1,getNextRoute:function(e,t){var a=e.domain,n={name:"DomainDetail",params:{id:a},query:{activeTab:"GatewayList"}};return n},cleanFormValue:function(e){return this.$route.params.id&&!e.password&&delete e["password"],e}}},methods:{}},u=c,d=a("2877"),p=Object(d["a"])(u,n,i,!1,null,"672932dd",null);t["default"]=p.exports}}]);