(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-532318a6"],{"3f50":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("GenericCreateUpdatePage",{attrs:{fields:t.fields,url:t.url,"fields-meta":t.fieldsMeta}})},r=[],i=(n("ac6a"),n("f3e2"),n("96cf"),n("3b8d")),o=(n("7f7f"),n("cd4a")),c=n("d952"),s={name:"TerminalUpdate",components:{GenericCreateUpdatePage:o["d"]},data:function(){return{url:"/api/v1/terminal/terminals/",fields:[[this.$t("sessions.info"),["name","remote_addr","command_storage","replay_storage"]],[this.$t("common.Other"),["comment"]]],fieldsMeta:{command_storage:{type:"select",options:[]},replay_storage:{type:"select",options:[]}}}},computed:{title:function(){return this.$t("sessions.terminalUpdate")},cardTitle:function(){return this.terminalData.name}},mounted:function(){this.initialSelect()},methods:{initialSelect:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["e"])();case 2:return e=t.sent,e.forEach((function(t){a.fieldsMeta.command_storage.options.push({label:t.name,value:t.name})})),t.next=6,Object(c["f"])();case 6:n=t.sent,n.forEach((function(t){a.fieldsMeta.replay_storage.options.push({label:t.name,value:t.name})}));case 8:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}},u=s,l=n("2877"),d=Object(l["a"])(u,a,r,!1,null,"39178c14",null);e["default"]=d.exports},d952:function(t,e,n){"use strict";n.d(e,"g",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d}));var a=n("b775");function r(t){return Object(a["a"])({url:"/api/v1/terminal/tasks/kill-session/",method:"post",data:t})}function i(){return Object(a["a"])({url:"/api/v1/terminal/command-storages/",method:"get"})}function o(){return Object(a["a"])({url:"/api/v1/terminal/replay-storages/",method:"get"})}function c(t){return Object(a["a"])({url:"/api/v1/terminal/command-storages/".concat(t,"/test-connective/"),method:"get"})}function s(t){return Object(a["a"])({url:"/api/v1/terminal/replay-storages/".concat(t,"/test-connective/"),method:"get"})}function u(t){return Object(a["a"])({url:t,method:"patch",data:{is_default:!0}})}function l(t){return u("/api/v1/terminal/command-storages/".concat(t,"/"))}function d(t){return u("/api/v1/terminal/replay-storages/".concat(t,"/"))}}}]);