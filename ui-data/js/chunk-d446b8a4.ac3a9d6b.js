(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d446b8a4"],{"98e3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("TabPage",{attrs:{"active-menu":t.config.activeMenu,submenu:t.config.submenu},on:{"update:activeMenu":function(e){return t.$set(t.config,"activeMenu",e)},"update:active-menu":function(e){return t.$set(t.config,"activeMenu",e)}}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v("\n    "+t._s(t.Title)+"\n  ")]),t._v(" "),n("keep-alive",[n(t.config.activeMenu,{tag:"component"})],1)],1)},r=[],i=n("cd4a"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseList",{attrs:{url:t.url,"extra-actions":t.extraActions}})},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ListTable",{attrs:{"table-config":t.tableConfig,"header-actions":t.headerActions}})},l=[],u=(n("1c01"),n("58b2"),n("8e6e"),n("f3e2"),n("d25f"),n("ac6a"),n("456d"),n("bd86")),d=(n("8ea5"),n("579c")),f=n("cf45"),m=n("e975");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b={name:"BaseList",components:{ListTable:d["a"]},props:{url:{type:String,default:function(){return"/api/v1/terminal/sessions/"}},extraActions:{type:Array,default:function(){return[]}}},data:function(){var t=this.$createElement,e=new Date,n=Object(f["g"])(2,e).toISOString(),a=Object(f["e"])(e).toISOString();return{tableConfig:{url:this.url,columns:["index","user","asset","system_user","remote_addr","protocol","login_from","command_amount","date_start","date_end","duration","org_name","actions"],columnsShow:{min:["index","actions"],default:["index","user","asset","system_user","remote_addr","protocol","login_from","command_amount","date_start","duration","actions"]},columnsMeta:{index:{prop:"index",label:this.$t("sessions.id"),align:"center",width:"40px",formatter:function(e,n,a,r){var i=r+1,o={to:{name:"SessionDetail",params:{id:e.id}}};return t("router-link",{attrs:h({},o)},[i])}},user:{showOverflowTooltip:!0},asset:{label:this.$t("sessions.target"),showOverflowTooltip:!0},command_amount:{label:this.$t("sessions.command"),width:"90px"},system_user:{showOverflowTooltip:!0,width:"100px"},login_from:{label:this.$t("sessions.loginFrom"),width:"115px",showOverflowTooltip:!0},remote_addr:{width:"140px"},protocol:{label:this.$t("sessions.protocol"),width:"80px",sortable:!1,formatter:null},date_start:{width:"100px"},date_end:{width:"100px"},duration:{label:this.$t("sessions.duration"),formatter:function(t){return Object(f["o"])(t.date_start,t.date_end)},width:"80px"},actions:{prop:"actions",label:this.$t("common.Actions"),width:"160px",formatter:m["a"],formatterArgs:{hasEdit:!1,hasClone:!1,hasDelete:!1,hasUpdate:!1,extraActions:this.extraActions}}},extraQuery:{date_to:a,date_from:n}},headerActions:{hasLeftActions:!1,hasImport:!1,hasDatePicker:!0,datePicker:{dateEnd:a,dateStart:n}}}},methods:{}},v=b,w=n("2877"),O=Object(w["a"])(v,c,l,!1,null,"52367279",null),g=O.exports,_=n("d952"),y={name:"OnlineList",components:{BaseList:g},data:function(){var t=this,e=this;return{url:"/api/v1/terminal/sessions/?is_finished=0",extraActions:[{name:"terminate",title:this.$t("sessions.terminate"),type:"danger",can:function(t){var e=t.row;t.cellValue;return e["can_terminate"]},callback:function(t){var n=this,a=t.reload,r=t.row,i=[r.id];Object(_["g"])(i).then((function(t){var r=e.$t("sessions.TerminateTaskSendSuccessMsg");n.$message.success(r),window.setTimeout((function(){a()}),5e4)}))}},{name:"join",title:this.$t("sessions.Monitor"),type:"primary",can:function(t){var e=t.row;t.cellValue;return e["can_join"]},tip:function(e){var n=e.row;return"RT"===n.login_from?t.$t("sessions.XRDPNotSupport"):""},callback:function(t){var e=t.row,n=(t.tableData,"/luna/monitor/"+e.id);window.open(n,"_blank","height=600, width=800, top=400, left=400, toolbar=no, menubar=no, scrollbars=no, location=no, status=no")}}]}}},x=y,j=Object(w["a"])(x,o,s,!1,null,"29773833",null),$=j.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseList",{attrs:{url:t.url,"extra-actions":t.extraActions}})},k=[],S={name:"OfflineList",components:{BaseList:g},data:function(){return{url:"/api/v1/terminal/sessions/?is_finished=1",extraActions:[{name:"replay",title:this.$t("sessions.replay"),type:"warning",can:function(t){var e=t.row;t.cellValue;return e["can_replay"]},callback:function(t){var e=t.row,n=(t.tableData,"/luna/replay/"+e.id);window.open(n)}},{name:"download",title:this.$t("sessions.download"),type:"primary",can:function(t){var e=t.row;t.cellValue;return e["can_replay"]},callback:function(t){var e=t.row,n=(t.tableData,"/api/v1/terminal/sessions/".concat(e.id,"/replay/download/")),a=document.createElement("a");a.href=n,a.click(),window.URL.revokeObjectURL(n)}}]}}},T=S,A=Object(w["a"])(T,L,k,!1,null,"75563046",null),P=A.exports,D={name:"Index",components:{TabPage:i["m"],OnlineList:$,OfflineList:P},data:function(){return{config:{activeMenu:"OnlineList",submenu:[{title:this.$t("route.SessionOnline"),name:"OnlineList"},{title:this.$t("route.SessionOffline"),name:"OfflineList"}]}}},computed:{Title:function(){return this.$t("route.Sessions")}},mounted:function(){var t=this.$route.params;switch(t.activeMenu){case"OnlineList":this.config.activeMenu="OnlineList";break;case"OfflineList":this.config.activeMenu="OfflineList";break}}},M=D,E=Object(w["a"])(M,a,r,!1,null,"44ad57a4",null);e["default"]=E.exports},d952:function(t,e,n){"use strict";n.d(e,"g",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return d}));var a=n("b775");function r(t){return Object(a["a"])({url:"/api/v1/terminal/tasks/kill-session/",method:"post",data:t})}function i(){return Object(a["a"])({url:"/api/v1/terminal/command-storages/",method:"get"})}function o(){return Object(a["a"])({url:"/api/v1/terminal/replay-storages/",method:"get"})}function s(t){return Object(a["a"])({url:"/api/v1/terminal/command-storages/".concat(t,"/test-connective/"),method:"get"})}function c(t){return Object(a["a"])({url:"/api/v1/terminal/replay-storages/".concat(t,"/test-connective/"),method:"get"})}function l(t){return Object(a["a"])({url:t,method:"patch",data:{is_default:!0}})}function u(t){return l("/api/v1/terminal/command-storages/".concat(t,"/"))}function d(t){return l("/api/v1/terminal/replay-storages/".concat(t,"/"))}}}]);