(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7728e1cd"],{1:function(t,e){},"3cc2":function(t,e,a){},"82a0":function(t,e,a){"use strict";function o(t){window.open("/#/ops/celery/task/".concat(t,"/log/"),"","width=900,height=600")}a.d(e,"a",(function(){return o}))},c0eb:function(t,e,a){"use strict";var o=a("1157"),i=a.n(o);window.$=i.a,window.jQuery=i.a,e["a"]=i.a},c4b4:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("GenericListPage",{attrs:{"table-config":t.tableConfig,"header-actions":t.headerActions}}),t._v(" "),t.relationDialog.show?a("Dialog",{attrs:{visible:t.relationDialog.show,title:this.$t("audits.Hosts"),"show-cancel":!1,"show-confirm":!1},on:{"update:visible":function(e){return t.$set(t.relationDialog,"show",e)}}},[a("ListTable",{attrs:{"table-config":t.relationDialog.tableConfig,"header-actions":t.relationDialog.headerActions}})],1):t._e()],1)},i=[],n=(a("1c01"),a("58b2"),a("8e6e"),a("f3e2"),a("d25f"),a("ac6a"),a("456d"),a("bd86")),r=(a("8ea5"),a("4d4a")),s=a("cf45"),c=a("2af9"),l=a("e975");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var h={components:{GenericListPage:r["a"],Dialog:c["g"],ListTable:c["i"]},data:function(){var t=this,e=this.$createElement,a=new Date,o=Object(s["g"])(7,a).toISOString(),i=Object(s["e"])(a).toISOString(),n=this;return{tableConfig:{url:"/api/v1/audits/command-execution-logs/",columns:["hosts","user","command","run_as","result","is_finished","is_success","date_start"],columnsMeta:{hosts:{width:"60px",formatter:function(t,a,o){var i=function(){n.relationDialog.tableConfig.url=Object(s["m"])(n.relationDialog.tableConfig.url,"commandexecution",t.id),n.relationDialog.show=!0};return e("el-link",{on:{click:i}},[o.length])}},command:{showOverflowTooltip:!0},user:{formatter:l["h"],showOverflowTooltip:!0},run_as:{formatter:l["h"],showOverflowTooltip:!0},is_finished:{width:"100px"},is_success:{width:"100px"},result:{width:"80px",formatter:function(a){var o=t.$t("audits.View"),i={to:{name:"CeleryTaskLog",params:{id:a.id}}};return e("router-link",{attrs:d({},i,{target:"_blank"})},[o])}},date_start:{width:"160px"}},extraQuery:{date_to:i,date_from:o}},relationDialog:{show:!1,tableConfig:{url:"/api/v1/audits/command-executions-hosts-relations/",columns:[{prop:"asset_display",label:this.$t("audits.Hosts")}]},headerActions:{hasLeftActions:!1,hasColumnSetting:!1,hasImport:!1,hasExport:!1,searchConfig:{exclude:["id","asset","commandexecution"],options:[{label:this.$t("audits.Hosts"),value:"asset_display"}]},hasSearch:!0}},headerActions:{hasLeftActions:!1,hasDatePicker:!0,hasImport:!1,searchConfig:{options:[{label:this.$t("audits.Username"),value:"user__username"},{label:this.$t("audits.SystemUserName"),value:"run_as__username"}]},datePicker:{dateStart:o,dateEnd:i}}}}},f=h,p=a("2877"),b=Object(p["a"])(f,o,i,!1,null,null,null);e["default"]=b.exports}}]);