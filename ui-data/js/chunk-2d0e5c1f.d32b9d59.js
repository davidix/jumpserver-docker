(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5c1f"],{"969e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("GenericDetailPage",t._g(t._b({attrs:{object:t.execution,"active-menu":t.config.activeMenu},on:{"update:object":function(e){t.execution=e},"update:activeMenu":function(e){return t.$set(t.config,"activeMenu",e)},"update:active-menu":function(e){return t.$set(t.config,"activeMenu",e)}}},"GenericDetailPage",t.config,!1),t.$listeners),[a("keep-alive",[a(t.config.activeMenu,{tag:"component",attrs:{object:t.execution}})],1)],1)},s=[],i=a("cd4a"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{md:14,sm:24}},[a("DetailCard",{attrs:{items:t.detailItems}})],1)],1)},o=[],u=a("b97b"),l=a("cf45"),r={name:"ChangeAuthPlanExecutionInfo",components:{DetailCard:u["a"]},props:{object:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{detailItems:function(){return[{key:this.$t("xpack.ChangeAuthPlan.Username"),value:this.object.username},{key:this.$t("xpack.ChangeAuthPlan.AssetAmount"),value:this.object.assets_amount},{key:this.$t("xpack.ChangeAuthPlan.NodeAmount"),value:this.object.nodes_amount},{key:this.$t("xpack.ChangeAuthPlan.PasswordStrategy"),value:this.object.password_strategy_display},{key:this.$t("xpack.ChangeAuthPlan.TimeDelta"),value:this.object.timedelta.toFixed(2)+"s"},{key:this.$t("xpack.ChangeAuthPlan.DateStart"),value:Object(l["p"])(this.object.date_start)}]}}},h=r,p=a("2877"),d=Object(p["a"])(h,c,o,!1,null,"45ea07e5",null),f=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("GenericListTable",{attrs:{"table-config":t.tableConfig,"header-actions":t.headerActions}})},g=[],b=(a("d92a"),a("3758")),x={name:"ChangeAuthPlanExecutionTaskList",components:{GenericListTable:b["a"]},props:{object:{type:Object,required:!0,default:function(){return{}}}},data:function(){var t=this.$createElement;return{tableConfig:{url:"/api/v1/xpack/change-auth-plan/plan-execution-subtask/?plan_execution_id=".concat(this.object.id),columns:["username","asset","is_success","reason","timedelta","date_start","actions"],columnsMeta:{asset:{label:this.$t("xpack.ChangeAuthPlan.Asset"),formatter:function(e,a,n,s){var i="/assets/assets/".concat(n);return t("router-link",{attrs:{to:i}},[e.asset_info.hostname])}},is_success:{label:this.$t("xpack.ChangeAuthPlan.Success")},timedelta:{label:this.$t("xpack.ChangeAuthPlan.TimeDelta"),width:"90px",formatter:function(t){return t.timedelta.toFixed(2)+"s"}},actions:{formatterArgs:{hasDelete:!1,hasUpdate:!1,hasClone:!1,extraActions:[{name:"retry",type:"info",title:this.$t("xpack.ChangeAuthPlan.Retry"),callback:function(t){var e=t.row;t.tableData;this.$axios.put("/api/v1/xpack/change-auth-plan/plan-execution-subtask/".concat(e.id,"/")).then((function(t){window.open("/#/ops/celery/task/".concat(t.task,"/log/"),"_blank","toolbar=yes, width=900, height=600")}))}.bind(this)}]}}}},headerActions:{hasSearch:!0,hasRefresh:!0,hasLeftActions:!0,hasRightActions:!0,hasExport:!1,hasImport:!1,hasCreate:!1,hasBulkDelete:!1,hasBulkUpdate:!1}}}},k=x,A=Object(p["a"])(k,m,g,!1,null,"33956637",null),v=A.exports,C={components:{GenericDetailPage:i["e"],ChangeAuthPlanExecutionInfo:f,ChangeAuthPlanExecutionTaskList:v},data:function(){return{execution:{id:""},config:{activeMenu:"ChangeAuthPlanExecutionInfo",actions:{hasUpdate:!1,hasDelete:!1},submenu:[{title:this.$t("common.BasicInfo"),name:"ChangeAuthPlanExecutionInfo"},{title:this.$t("xpack.ChangeAuthPlan.TaskList"),name:"ChangeAuthPlanExecutionTaskList"}],getTitle:this.getExecutionTitle}}},methods:{getExecutionTitle:function(){return"".concat(this.$route.meta.title,": ").concat(this.execution.id)}}},P=C,$=Object(p["a"])(P,n,s,!1,null,"0cb4a02e",null);e["default"]=$.exports}}]);