(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46d06b08"],{"82a0":function(t,e,a){"use strict";function n(t){window.open("/#/ops/celery/task/".concat(t,"/log/"),"","width=900,height=600")}a.d(e,"a",(function(){return n}))},d90e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("GenericListTable",{attrs:{"table-config":t.tableConfig,"header-actions":t.headerActions}})},c=[],o=a("3758"),s=a("e975"),i=a("82a0"),r={components:{GenericListTable:o["a"]},data:function(){var t=this,e=this;return{tableConfig:{url:"/api/v1/xpack/cloud/sync-instance-tasks/",columns:["name","account_display","history_count","instance_count","periodic_display","date_last_sync","comment","actions"],columnsMeta:{account_display:{label:this.$t("xpack.Cloud.Account")},periodic_display:{showOverflowTooltip:!0,width:"150px"},actions:{formatterArgs:{hasClone:!1,onUpdate:function(e){var a=e.row;t.$router.push({name:"SyncInstanceTaskUpdate",params:{id:a.id}})},extraActions:[{title:e.$t("xpack.Execute"),name:"execute",type:"info",callback:function(t){this.$axios.get("/api/v1/xpack/cloud/sync-instance-tasks/".concat(t.row.id,"/run/")).then((function(t){Object(i["a"])(t["task"])}))}}]}},name:{formatter:s["f"],formatterArgs:{route:"SyncInstanceTaskDetail",routeQuery:{activeTab:"detail"}}},history_count:{width:"110px",formatter:s["f"],formatterArgs:{route:"SyncInstanceTaskDetail",routeQuery:{activeTab:"HistoryList"}}},instance_count:{formatter:s["f"],formatterArgs:{route:"SyncInstanceTaskDetail",routeQuery:{activeTab:"AssetList"}}}},date_last_sync:{width:"130px"}},headerActions:{hasMoreActions:!1,hasImport:!1,hasExport:!1,createRoute:"SyncInstanceTaskCreate"}}}},u=r,l=a("2877"),d=Object(l["a"])(u,n,c,!1,null,null,null);e["default"]=d.exports}}]);