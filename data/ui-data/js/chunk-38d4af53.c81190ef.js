(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38d4af53"],{"0ae7":function(e,t,n){"use strict";var a=n("ef59"),i=n.n(a);i.a},1:function(e,t){},"208b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("GenericCreateUpdatePage",e._b({ref:"createUpdatePage"},"GenericCreateUpdatePage",e.$data,!1))},i=[],r=(n("96cf"),n("3b8d")),s=(n("8615"),n("ac6a"),n("456d"),n("28a5"),n("2caf"),n("6b54"),n("87b3"),n("7f7f"),n("6d67"),n("768b")),o=n("cd4a"),l=n("2af9"),c=n("7541"),u=n("7b55"),p={components:{GenericCreateUpdatePage:o["d"]},data:function(){var e=this;return{initial:{is_periodic:!0,interval:24,hostname_strategy:"instance_name_partial_ip",ip_network_segment_group:"*"},fields:[[this.$t("common.Basic"),["name"]],[this.$t("xpack.Cloud.CloudSource"),["account","regions"]],[this.$t("xpack.Cloud.SaveSetting"),["hostname_strategy","node","unix_admin_user","windows_admin_user","protocols","ip_network_segment_group","is_always_update"]],[this.$t("xpack.Timer"),["is_periodic","crontab","interval"]],[this.$t("common.Other"),["comment"]]],url:"/api/v1/xpack/cloud/sync-instance-tasks/",fieldsMeta:{account:{on:{change:function(t,n){var a=Object(s["a"])(t,1),i=a[0];e.fieldsMeta.regions.el.ajax.url="/api/v1/xpack/cloud/regions/?account_id=".concat(i),n({regions:""})}},el:{multiple:!1,value:[],ajax:{url:"/api/v1/xpack/cloud/accounts/"}}},hostname_strategy:{rules:[c["c"].RequiredChange],helpText:this.$t("xpack.Cloud.HostnameStrategy")},node:{rules:[c["c"].RequiredChange],el:{multiple:!1,value:[],ajax:{url:"/api/v1/assets/nodes/",transformOption:function(e){return{label:e.full_value,value:e.id}}}}},unix_admin_user:{el:{multiple:!1,value:[],ajax:{url:"/api/v1/assets/admin-users/"}}},windows_admin_user:{el:{multiple:!1,value:[],ajax:{url:"/api/v1/assets/admin-users/"}}},protocols:{component:u["a"]},is_always_update:{type:"switch",label:this.$t("xpack.Cloud.IsAlwaysUpdate"),helpTips:this.$t("xpack.Cloud.IsAlwaysUpdateHelpTips")},regions:{component:l["k"],el:{multiple:!0,value:[],ajax:{url:"/api/v1/xpack/cloud/regions/",processResults:function(e){var t=e.regions.map((function(e){return{label:e.name,value:e.id}})),n=!!e.next;return{results:t,pagination:n,total:e.count}}}}},is_periodic:{type:"switch"},crontab:{component:l["e"],label:this.$t("xpack.RegularlyPerform"),hidden:function(e){return!1===e.is_periodic},helpText:this.$t("xpack.HelpText.CrontabOfCreateUpdatePage")},interval:{label:this.$t("xpack.CyclePerform"),hidden:function(e){return!1===e.is_periodic},helpText:this.$t("xpack.HelpText.IntervalOfCreateUpdatePage")}},updateSuccessNextRoute:{name:"CloudCenter"},createSuccessNextRoute:{name:"CloudCenter"},afterGetFormValue:function(e){return e.ip_network_segment_group=e.ip_network_segment_group.toString(),e},cleanFormValue:function(e){return Array.isArray(e.ip_network_segment_group)||(e.ip_network_segment_group=e.ip_network_segment_group?e.ip_network_segment_group.split(","):[]),e},onPerformError:function(e,t,n){this.$emit("submitError",e);var a=e.response,i=a.data;if(400===a.status)for(var r=0,s=Object.keys(i);r<s.length;r++){var o=s[r],l=i[o];"protocols"===o&&(l=Object.values(i[o])),l instanceof Array&&(l=l.join(";")),this.$refs.form.setFieldError(o,l)}}}},mounted:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.$route.params,!t.id){e.next=6;break}return e.next=4,this.$refs.createUpdatePage.$refs.createUpdateForm.getFormValue();case 4:n=e.sent,this.fieldsMeta.regions.el.ajax.url=n.account?"/api/v1/xpack/cloud/regions/?account_id=".concat(n.account):"/api/v1/xpack/cloud/regions/";case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{}},d=p,m=n("2877"),f=Object(m["a"])(d,a,i,!1,null,"88708e34",null);t["default"]=f.exports},"3cc2":function(e,t,n){},"7b55":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.items,(function(t,a){return n("div",{key:a,staticStyle:{display:"flex","margin-top":"8px"}},[n("el-input",e._b({staticClass:"input-with-select",model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"item.value"}},"el-input",e.$attrs,!1),[n("el-select",{attrs:{slot:"prepend"},on:{change:e.handleProtocolChange},slot:"prepend",model:{value:t.select,callback:function(n){e.$set(t,"select",n)},expression:"item.select"}},e._l(e.remainProtocols,(function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1)],1),e._v(" "),n("div",{staticClass:"input-button",staticStyle:{display:"flex","margin-left":"20px"}},[n("el-button",{staticStyle:{"flex-shrink":"0"},attrs:{type:"danger",icon:"el-icon-minus",size:"mini",disabled:1===e.items.length},on:{click:function(t){return e.handleDelete(a)}}}),e._v(" "),n("el-button",{staticStyle:{"flex-shrink":"0"},attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:function(t){return e.handleAdd(a)}}})],1)],1)})),0)},i=[],r=(n("d25f"),n("28a5"),n("f3e2"),n("7f7f"),n("ac4d"),n("8a81"),n("ac6a"),n("6d67"),{props:{value:{type:[Array],default:function(){return[]}},title:{type:String,default:""}},data:function(){return{select:"",items:[{value:"",select:""}],protocols:[{name:"ssh",port:22},{name:"rdp",port:3389},{name:"telnet",port:23},{name:"vnc",port:5901}]}},computed:{values:function(){var e=[];return this.items.map((function(t){e.push("".concat(t.select,"/").concat(t.value))})),e},itemsMap:function(){var e={},t=!0,n=!1,a=void 0;try{for(var i,r=this.items[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var s=i.value;e[s.select]=s}}catch(o){n=!0,a=o}finally{try{t||null==r.return||r.return()}finally{if(n)throw a}}return e},remainProtocols:function(){var e=[],t=!0,n=!1,a=void 0;try{for(var i,r=this.protocols[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var s=i.value;this.itemsMap[s.name]||e.push(s)}}catch(o){n=!0,a=o}finally{try{t||null==r.return||r.return()}finally{if(n)throw a}}return e}},watch:{values:{handler:function(e){this.$emit("input",e)},immediate:!0,deep:!0}},mounted:function(){var e=this;0!==this.value.length&&(this.items=[],this.value.forEach((function(t){var n=t.split("/");e.items.push({value:n[1],select:n[0]})})))},methods:{onInput:function(e){this.$emit("input","my-input: "+e)},handleDelete:function(e){this.items=this.items.filter((function(t,n){return n!==e}))},handleAdd:function(e){this.items.push({value:"",select:""})},handleProtocolChange:function(e){var t=22;switch(e){case"rdp":t=3389;break;case"telnet":t=23;break;case"vnc":t=5901;break}this.itemsMap[e].value=t}}}),s=r,o=(n("0ae7"),n("2877")),l=Object(o["a"])(s,a,i,!1,null,"4f28c821",null);t["a"]=l.exports},"82a0":function(e,t,n){"use strict";function a(e){window.open("/#/ops/celery/task/".concat(e,"/log/"),"","width=900,height=600")}n.d(t,"a",(function(){return a}))},c0eb:function(e,t,n){"use strict";var a=n("1157"),i=n.n(a);window.$=i.a,window.jQuery=i.a,t["a"]=i.a},ef59:function(e,t,n){}}]);