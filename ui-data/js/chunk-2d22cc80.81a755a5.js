(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22cc80"],{f561:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("GenericCreateUpdatePage",e._b({},"GenericCreateUpdatePage",e.config,!1))},n=[],i=(t("7f7f"),t("cd4a")),r={components:{GenericCreateUpdatePage:i["d"]},data:function(){return{config:{initial:{},url:"/api/v1/orgs/orgs/",fields:[["",["name","comment"]]],hasSaveContinue:!1,fieldsMeta:{},onPerformSuccess:function(e,s){switch(s){case"post":return this.$store.dispatch("users/addAdminOrg",{id:e.id,name:e.name}),this.$message.success(this.$t("xpack.Organization.CreateOrgMsg")),this.$router.push({name:"OrganizationList"});case"put":return this.$store.dispatch("users/modifyOrg",{id:e.id,name:e.name}),this.$message.success(this.$t("common.updateSuccessMsg")),this.$router.push({name:"OrganizationList"})}}}}}},c=r,o=t("2877"),u=Object(o["a"])(c,a,n,!1,null,"7a9c8474",null);s["default"]=u.exports}}]);