(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1952ac88"],{1:function(t,e){},"3cc2":function(t,e,n){},"66fd":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Page",[t.loading?t._e():n("IBox",[n("GenericCreateUpdateForm",{attrs:{fields:t.fields,url:t.url,initial:t.interfaceInfo,"update-success-next-route":t.successUrl,"fields-meta":t.fieldsMeta,"on-submit":t.submitForm,"more-buttons":t.moreButtons,"has-save-continue":t.hasSaveContinue}})],1)],1)},o=[],a=(n("f3e2"),n("d92a"),n("768b")),c=n("cd4a"),l=n("2af9"),s=n("d0aa"),r=n("b775");function u(t){return Object(r["a"])({url:"/api/v1/xpack/interface/setting",method:"put",headers:{"Content-Type":"multipart/form-data"},data:t})}function f(){return Object(r["a"])({url:"/api/v1/xpack/interface/setting",method:"get"})}function g(){return Object(r["a"])({url:"/api/v1/xpack/interface/restore",method:"get"})}var h={name:"InterfaceSettings",components:{IBox:l["h"],Page:c["l"],GenericCreateUpdateForm:s["a"]},data:function(){var t=this;return{loading:!0,files:{},interfaceInfo:{},hasSaveContinue:!1,successUrl:{name:"Settings"},fields:[["",["login_title"]],["",["login_image"]],["",["favicon"]],["",["logo_index"]],["",["logo_logout"]]],fieldsMeta:{login_title:{label:this.$t("xpack.loginTitle"),helpText:this.$t("xpack.loginTitleTip")},login_image:{component:l["l"],label:this.$t("xpack.loginImage"),el:{width:"10%",height:"10%",tip:this.$t("xpack.loginImageTip")},on:{fileChange:function(e,n){var i=Object(a["a"])(e,1),o=i[0];t.files["login_image"]=o}}},favicon:{component:l["l"],label:this.$t("xpack.favicon"),el:{width:"5%",height:"5%",tip:this.$t("xpack.faviconTip")},on:{fileChange:function(e,n){var i=Object(a["a"])(e,1),o=i[0];t.files["favicon"]=o}}},logo_index:{component:l["l"],label:this.$t("xpack.logoIndex"),el:{width:"10%",height:"10%",tip:this.$t("xpack.logoIndexTip")},on:{fileChange:function(e,n){var i=Object(a["a"])(e,1),o=i[0];t.files["logo_index"]=o}}},logo_logout:{component:l["l"],label:this.$t("xpack.logoLogout"),el:{width:"5%",height:"5%",tip:this.$t("xpack.logoLogoutTip")},on:{fileChange:function(e,n){var i=Object(a["a"])(e,1),o=i[0];t.files["logo_logout"]=o}}}},url:"/api/v1/xpack/interface/setting",moreButtons:[{title:this.$t("xpack.RestoreButton"),callback:function(t,e){var n=this;this.$confirm(this.$t("xpack.restoreDialogMessage"),this.$t("xpack.restoreDialogTitle"),{confirmButtonText:this.$t("common.Confirm"),cancelButtonText:this.$t("common.Cancel"),type:"warning"}).then((function(){g().then((function(t){n.$message.success(t.success),location.reload()}))}))}.bind(this)}]}},mounted:function(){var t=this;f().then((function(e){t.interfaceInfo=e,t.loading=!1}))},methods:{submitForm:function(t){var e=this,n=new FormData,i=["favicon","login_image","logo_logout","logo_index"];i.forEach((function(t,i){void 0!==e.files[t]&&n.append(t,e.files[t])})),void 0!==t["login_title"]&&n.append("login_title",t["login_title"]),u(n).then((function(t){location.reload()}))}}},p=h,d=n("2877"),m=Object(d["a"])(p,i,o,!1,null,"f99b7846",null);e["default"]=m.exports},"82a0":function(t,e,n){"use strict";function i(t){window.open("/#/ops/celery/task/".concat(t,"/log/"),"","width=900,height=600")}n.d(e,"a",(function(){return i}))},c0eb:function(t,e,n){"use strict";var i=n("1157"),o=n.n(i);window.$=o.a,window.jQuery=o.a,e["a"]=o.a}}]);