(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a36a9"],{"01a3":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("GenericDetailPage",e._b({attrs:{object:e.terminalData},on:{"update:object":function(t){e.terminalData=t}}},"GenericDetailPage",e.config,!1),[a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:14}},[a("DetailCard",{attrs:{title:e.cardTitle,items:e.detailItems}})],1)],1)],1)])},n=[],s=(a("7f7f"),a("cd4a")),r=a("b97b"),l={name:"TerminalDetail",components:{GenericDetailPage:s["e"],DetailCard:r["a"]},data:function(){return{terminalData:{},loading:!0,config:{submenu:[{title:this.$t("sessions.terminalDetail"),name:"detail"}],hasDelete:!1,actions:{hasDelete:!1,canDelete:!1,detailApiUrl:"/api/v1/terminal/terminals/".concat(this.$route.params.id,"/")}}}},computed:{cardTitle:function(){return this.terminalData.name},detailItems:function(){return[{key:this.$t("sessions.name"),value:this.terminalData.name},{key:this.$t("sessions.remoteAddr"),value:this.terminalData.remote_addr},{key:this.$t("sessions.dateCreated"),value:this.terminalData.date_created},{key:this.$t("sessions.comment"),value:this.terminalData.comment}]}}},o=l,c=a("2877"),m=Object(c["a"])(o,i,n,!1,null,"1f35abad",null);t["default"]=m.exports}}]);