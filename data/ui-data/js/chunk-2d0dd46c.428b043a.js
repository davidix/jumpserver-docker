(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd46c"],{8163:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("GenericDetailPage",t._g(t._b({attrs:{actions:t.actions,object:t.TaskDetail,"active-menu":t.config.activeMenu},on:{"update:object":function(e){t.TaskDetail=e},"update:activeMenu":function(e){return t.$set(t.config,"activeMenu",e)},"update:active-menu":function(e){return t.$set(t.config,"activeMenu",e)}}},"GenericDetailPage",t.config,!1),t.$listeners),[a("keep-alive",[a(t.config.activeMenu,{tag:"component",attrs:{object:t.TaskDetail}})],1)],1)},s=[],n=a("cd4a"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:14}},[a("DetailCard",{attrs:{items:t.detailCardItems}})],1),t._v(" "),a("el-col",{attrs:{span:10}})],1)},o=[],r=(a("7f7f"),a("b97b")),u={name:"Detail",components:{DetailCard:r["a"]},props:{object:{type:Object,default:function(){}}},data:function(){return{}},computed:{detailCardItems:function(){return[{key:this.$t("assets.Name"),value:this.object.name},{key:this.$t("assets.BasePlatform"),value:this.object.base},{key:this.$t("assets.Charset"),value:this.object.charset},{key:this.$t("assets.Meta"),value:JSON.stringify(this.object.meta)},{key:this.$t("assets.Comment"),value:this.object.comment}]}}},l=u,m=a("2877"),f=Object(m["a"])(l,c,o,!1,null,"15fcd75f",null),d=f.exports,p={components:{GenericDetailPage:n["e"],TabPage:n["m"],Detail:d},data:function(){return{TaskDetail:{},actions:{detailApiUrl:"/api/v1/assets/platforms/".concat(this.$route.params.id,"/")},config:{title:this.$t("assets.PlatformDetail"),activeMenu:"Detail",submenu:[{title:this.$t("common.BasicInfo"),name:"Detail"}],hasRightSide:this.$route.params.id>7}}},computed:{hasRightSide:function(){return this.$route.params.id>7}}},h=p,b=Object(m["a"])(h,i,s,!1,null,"7d79107a",null);e["default"]=b.exports}}]);