(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228961"],{da8f:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("GenericCreateUpdatePage",{ref:"createUpdatePage",attrs:{initial:e.initial,fields:e.fields,"fields-meta":e.fieldsMeta,url:e.url}})},r=[],i=(a("d92a"),a("7f7f"),a("8ea5"),a("cd4a")),n=a("cf45"),o={components:{GenericCreateUpdatePage:i["d"]},data:function(){var e=this;return{initial:{is_active:!0,date_start:(new Date).toISOString(),date_expired:Object(n["f"])(36500,new Date).toISOString(),type:this.$route.query.type,category:this.$route.query.category},fields:[[this.$t("common.Basic"),["name"]],[this.$t("perms.User"),["users","user_groups"]],[this.$t("assets.Applications"),["category","type","applications","system_users"]],[this.$t("common.Other"),["is_active","date_start","date_expired","comment"]]],url:"/api/v1/perms/application-permissions/",fieldsMeta:{users:{el:{value:[],ajax:{url:"/api/v1/users/users/?fields_size=mini",transformOption:function(e){return{label:e.name+"("+e.username+")",value:e.id}}}}},user_groups:{el:{value:[],url:"/api/v1/users/groups/"}},category:{type:"select",disabled:!0},type:{type:"select",disabled:!0},applications:{label:this.$t("assets.Applications"),el:{value:[],ajax:{url:"/api/v1/applications/applications/?category=".concat(this.$route.query.category,"&type=").concat(this.$route.query.type),transformOption:function(e){return{label:e.name+" ("+e.type_display+")",value:e.id}}}}},system_users:{el:{value:[],ajax:{url:function(){var e="/api/v1/assets/system-users/",t=this.$route.query.type;return"remote_app"===this.$route.query.category?e+="?protocol=rdp":t&&(e+="?protocol=".concat(t)),e}.bind(this)(),transformOption:function(t){if("k8s"===e.$route.query.type)return{label:t.name,value:t.id};var a=t.username||"*";return{label:t.name+"("+a+")",value:t.id}}}}},date_start:{label:this.$t("common.dateStart")},date_expired:{label:this.$t("common.dateExpired")},actions:{label:this.$t("perms.Actions")},is_active:{type:"checkbox"}}}}},l=o,u=a("2877"),p=Object(u["a"])(l,s,r,!1,null,"71666da2",null);t["default"]=p.exports}}]);