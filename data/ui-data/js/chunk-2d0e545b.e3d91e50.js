(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e545b"],{"947a":function(t,e,c){"use strict";c.r(e);var a=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("GenericDetailPage",t._g(t._b({attrs:{object:t.Account,"active-menu":t.config.activeMenu},on:{"update:object":function(e){t.Account=e},"update:activeMenu":function(e){return t.$set(t.config,"activeMenu",e)},"update:active-menu":function(e){return t.$set(t.config,"activeMenu",e)}}},"GenericDetailPage",t.config,!1),t.$listeners),[c("keep-alive",[c(t.config.activeMenu,{tag:"component",attrs:{object:t.Account}})],1)],1)},n=[],i=c("cd4a"),o=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("el-row",{attrs:{gutter:20}},[c("el-col",{attrs:{md:14,sm:24}},[c("DetailCard",{attrs:{title:t.cardTitle,items:t.detailItems}})],1)],1)},u=[],r=(c("7f7f"),c("b97b")),l=c("cf45"),s={name:"AccountDetail",components:{DetailCard:r["a"]},props:{object:{type:Object,default:function(){return{}}}},computed:{cardTitle:function(){return this.object.name},detailItems:function(){return[{key:this.$t("common.Name"),value:this.object.name},{key:this.$t("xpack.Cloud.Provider"),value:this.object.provider_display},{key:this.$t("xpack.Cloud.Validity"),value:this.object.validity?this.$t("common.Validity"):this.$t("common.Invalidity")},{key:this.$t("common.Comment"),value:this.object.comment},{key:this.$t("common.dateCreated"),value:Object(l["p"])(this.object.date_created)},{key:this.$t("common.createdBy"),value:this.object.created_by}]}}},d=s,m=c("2877"),p=Object(m["a"])(d,o,u,!1,null,"5f13e658",null),v=p.exports,b={components:{GenericDetailPage:i["e"],AccountDetail:v,TabPage:i["m"]},data:function(){var t=this,e=this;return{Account:{name:"",provider:"",provider_display:"",validity_display:"",comment:"",date_created:"",created_by:""},config:{activeMenu:"AccountDetail",submenu:[{title:this.$t("xpack.Cloud.AccountDetail"),name:"AccountDetail"}],actions:{deleteSuccessRoute:"CloudCenter",updateCallback:function(){var c=t.$route.params.id,a="AccountUpdate";t.$router.push({name:a,params:{id:c},query:{provider:e.Account.provider}})}}}}}},f=b,h=Object(m["a"])(f,a,n,!1,null,"0d5a93dc",null);e["default"]=h.exports}}]);