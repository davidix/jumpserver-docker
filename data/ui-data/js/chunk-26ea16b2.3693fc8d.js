(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26ea16b2"],{6947:function(a,t,e){"use strict";e.r(t);var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("GenericListTable",{attrs:{"table-config":a.tableConfig,"header-actions":a.headerActions}})},n=[],i=(e("7f7f"),e("d92a"),e("cd4a")),p=e("e975"),r=e("82a0"),c=e("992f"),s={name:"AppChangeAuthPlanList",components:{GenericListTable:i["g"]},data:function(){var a=this;return{tableConfig:{url:"/api/v1/xpack/change-auth-plan/app-plan/",columns:["name","password_strategy_display","is_periodic","periodic_display","run_times","comment","org_name","actions"],columnsShow:{min:["name","actions"],default:["name","password_strategy_display","is_periodic","periodic_display","run_times","actions"]},columnsMeta:{name:{formatter:p["f"],formatterArgs:{route:"AppChangeAuthPlanDetail"}},systemuser_display:{label:a.$t("xpack.ChangeAuthPlan.SystemUser"),width:"300px",showOverflowTooltip:!0},password_strategy_display:{label:a.$t("xpack.ChangeAuthPlan.PasswordStrategy"),width:"220px",showOverflowTooltip:!0},is_periodic:{label:a.$t("xpack.ChangeAuthPlan.Timer"),formatterArgs:{showFalse:!1},width:"80px"},periodic_display:{label:a.$t("xpack.ChangeAuthPlan.TimerPeriod"),showOverflowTooltip:!0,width:"150px"},run_times:{label:a.$t("xpack.ChangeAuthPlan.ExecutionTimes"),width:"87px",formatter:p["f"],formatterArgs:{route:"AppChangeAuthPlanDetail",routeQuery:{activeTab:"AppChangeAuthPlanExecutionList"}}},comment:{width:"90px"},actions:{width:"164px",formatterArgs:{onClone:function(t){var e=t.row;a.$router.push({name:"AppChangeAuthPlanCreate",query:{clone_from:e.id,category:e.category.toLowerCase(),type:e.type.toLowerCase()}})},onUpdate:function(t){var e=t.row;a.$router.push({name:"AppChangeAuthPlanUpdate",params:{id:e.id},query:{category:e.category.toLowerCase(),type:e.type.toLowerCase()}})},extraActions:[{title:a.$t("xpack.Execute"),name:"execute",type:"info",callback:function(a){var t=a.row;this.$axios.post("/api/v1/xpack/change-auth-plan/app-plan-execution/",{plan:t.id}).then((function(a){Object(r["a"])(a["task"])}))}.bind(this)}]}}}},headerActions:{hasRefresh:!0,hasExport:!1,hasImport:!1,hasMoreActions:!1,moreCreates:{callback:function(t){a.$router.push({name:"AppChangeAuthPlanCreate",query:{category:t.category.toLowerCase(),type:t.name.toLowerCase()}})},dropdown:c["b"]}}}}},l=s,u=e("2877"),h=Object(u["a"])(l,o,n,!1,null,"af1ed1a4",null);t["default"]=h.exports},"82a0":function(a,t,e){"use strict";function o(a){window.open("/#/ops/celery/task/".concat(a,"/log/"),"","width=900,height=600")}e.d(t,"a",(function(){return o}))},"992f":function(a,t,e){"use strict";e.d(t,"b",(function(){return f})),e.d(t,"a",(function(){return C}));var o=e("0692"),n=e("4360"),i="chrome",p="mysql_workbench",r="vmware_client",c="custom",s="remote_app";function l(){return n["a"].getters.hasValidLicense}var u=[{name:i,title:o["a"].t("applications.applicationsType.".concat(i)),type:"primary",group:o["a"].t("applications.RemoteApp"),category:s,has:l},{name:p,title:o["a"].t("applications.applicationsType.".concat(p)),type:"primary",category:s,has:l},{name:r,title:o["a"].t("applications.applicationsType.".concat(r)),type:"primary",category:s,has:l},{name:c,title:o["a"].t("applications.applicationsType.".concat(c)),type:"primary",category:s,has:l}],h="mysql",y="oracle",m="postgresql",d="mariadb",g="db",f=[{name:h,title:o["a"].t("applications.applicationsType.".concat(h)),type:"primary",category:g,has:!0,group:o["a"].t("applications.Database")},{name:y,title:o["a"].t("applications.applicationsType.".concat(y)),type:"primary",category:g,has:l},{name:m,title:o["a"].t("applications.applicationsType.".concat(m)),type:"primary",category:g,has:l},{name:d,title:o["a"].t("applications.applicationsType.".concat(d)),type:"primary",category:g,has:l}],w="k8s",A="cloud",b=[{name:w,title:o["a"].t("applications.applicationsType.".concat(w)),group:o["a"].t("applications.Cloud"),type:"primary",category:A,has:!0}],C=[].concat(u,f,b)}}]);