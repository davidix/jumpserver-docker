(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd229"],{"2b69":function(s,e,r){"use strict";r.r(e);var t=function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("GenericCreateUpdatePage",s._b({},"GenericCreateUpdatePage",s.$data,!1))},u=[],a=(r("28a5"),r("2caf"),r("6b54"),r("87b3"),r("7f7f"),r("5e04")),o={name:"AclCreateUpdate",components:{GenericCreateUpdatePage:a["a"]},data:function(){return{initial:{action:"login_confirm",system_users:{name_group:"*",protocol_group:"*",username_group:"*"},users:{username_group:"*"},assets:{hostname_group:"*",ip_group:"*"}},fields:[[this.$t("common.Basic"),["name","priority"]],[this.$t("acl.users"),["users"]],[this.$t("acl.asset"),["assets"]],[this.$t("acl.system_user"),["system_users"]],[this.$t("acl.action"),["action","reviewers"]],[this.$t("common.Other"),["is_active","comment"]]],fieldsMeta:{assets:{fields:["hostname_group","ip_group"]},users:{fields:["username_group"],fieldsMeta:{}},system_users:{fields:["name_group","username_group","protocol_group"]},reviewers:{el:{value:[],ajax:{url:"/api/v1/users/users/?fields_size=mini",transformOption:function(s){return{label:s.name+"("+s.username+")",value:s.id}}}}}},url:"/api/v1/acls/login-asset-acls/",afterGetFormValue:function(s){return s.assets.ip_group=s.assets.ip_group.toString(),s.assets.hostname_group=s.assets.hostname_group.toString(),s.system_users.name_group=s.system_users.name_group.toString(),s.system_users.protocol_group=s.system_users.protocol_group.toString(),s.system_users.username_group=s.system_users.username_group.toString(),s.users.username_group=s.users.username_group.toString(),s},cleanFormValue:function(s){return Array.isArray(s.assets.ip_group)||(s.assets.ip_group=s.assets.ip_group?s.assets.ip_group.split(","):[]),Array.isArray(s.assets.hostname_group)||(s.assets.hostname_group=s.assets.hostname_group?s.assets.hostname_group.split(","):[]),Array.isArray(s.system_users.protocol_group)||(s.system_users.protocol_group=s.system_users.protocol_group?s.system_users.protocol_group.split(","):[]),Array.isArray(s.system_users.name_group)||(s.system_users.name_group=s.system_users.name_group?s.system_users.name_group.split(","):[]),Array.isArray(s.system_users.username_group)||(s.system_users.username_group=s.system_users.username_group?s.system_users.username_group.split(","):[]),Array.isArray(s.users.username_group)||(s.users.username_group=s.users.username_group?s.users.username_group.split(","):[]),s}}},methods:{}},n=o,p=r("2877"),_=Object(p["a"])(n,t,u,!1,null,null,null);e["default"]=_.exports}}]);