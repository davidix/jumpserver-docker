(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20feec"],{b679:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("GenericListPage",{ref:"GenericListTable",attrs:{"table-config":e.tableConfig,"header-actions":e.headerActions}})},r=[],o=(a("d92a"),a("cd4a")),c={components:{GenericListPage:o["f"]},data:function(){var e=this;return{tableConfig:{url:"/api/v1/applications/applications/?category=cloud",columns:["name","type","attrs.cluster","created_by","date_created","date_updated","comment","org_name","actions"],columnsShow:{min:["name","actions"],default:["name","type","attrs.cluster","comment","actions"]},columnsMeta:{"attrs.cluster":{label:this.$t("applications.cluster")},comment:{width:"340px"},type:{width:"140px"},actions:{prop:"actions",formatterArgs:{onClone:function(t){var a=t.row;e.$router.push({name:"KubernetesAppCreate",query:{type:a.type,clone_from:a.id}})},performDelete:function(e){var t=this,a=e.row;e.col,e.cellValue,e.reload;this.$axios.delete("/api/v1/applications/applications/".concat(a.id,"/")).then((function(e){t.$refs.GenericListTable.$refs.ListTable.$refs.ListTable.reloadTable()})).catch((function(e){t.$message.error(t.$t("common.deleteErrorMsg")+" "+e)}))}.bind(this)}}}},headerActions:{hasExport:!1,hasImport:!1,hasBulkDelete:!0,createRoute:"KubernetesAppCreate"}}}},s=c,i=a("2877"),l=Object(i["a"])(s,n,r,!1,null,null,null);t["default"]=l.exports}}]);