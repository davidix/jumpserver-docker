(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238053"],{fe31:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("GenericCreateUpdatePage",{attrs:{fields:e.fields,initial:e.initial,"fields-meta":e.fieldsMeta,url:e.url}})},s=[],n=a("5e04"),i={name:"PlatformCreateUpdate",components:{GenericCreateUpdatePage:n["a"]},data:function(){return{initial:{base:"Linux",console:"true",security:"RDP",comment:"",charset:"utf8"},fields:[[this.$t("common.Basic"),["name","base","charset","meta","comment"]]],fieldsMeta:{meta:{fields:["security","console"],fieldsMeta:{security:{prop:"meta.security",type:"select",label:"RDP security",options:[{label:"RDP",value:"rdp"},{label:"NLA",value:"nla"},{label:"TLS",value:"tls"},{label:"Any",value:"any"}]},console:{type:"select",label:"RDP console",options:[{label:this.$t("common.Yes"),value:"true"},{label:this.$t("common.No"),value:"false"}]}},hidden:function(e){return"Windows"!==e.base}}},url:"/api/v1/assets/platforms/"}}},o=i,r=a("2877"),c=Object(r["a"])(o,l,s,!1,null,"2bd26389",null);t["default"]=c.exports}}]);