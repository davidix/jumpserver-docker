(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0de1"],{"9dcc":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("GenericListPage",{attrs:{"table-config":e.tableConfig,"header-actions":e.headerActions}})},o=[],r=(a("8ea5"),a("4d4a")),n=a("cf45"),i={components:{GenericListPage:r["a"]},data:function(){var e=new Date,t=Object(n["g"])(7,e).toISOString(),a=Object(n["e"])(e).toISOString();return{tableConfig:{url:"/api/v1/audits/ftp-logs/",columns:["user","asset","system_user","remote_addr","operate","filename","is_success","date_start"],columnsMeta:{user:{showOverflowTooltip:!0},asset:{showOverflowTooltip:!0},system_user:{showOverflowTooltip:!0},remote_addr:{width:"140px"},filename:{showOverflowTooltip:!0},operate:{width:"100px"},is_success:{width:"80px"}},extraQuery:{date_to:a,date_from:t}},headerActions:{hasLeftActions:!1,hasImport:!1,hasDatePicker:!0,datePicker:{dateStart:t,dateEnd:a}}}}},c=i,d=a("2877"),l=Object(d["a"])(c,s,o,!1,null,null,null);t["default"]=l.exports}}]);