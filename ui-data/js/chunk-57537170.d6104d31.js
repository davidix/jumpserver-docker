(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57537170"],{1:function(e,t){},"3cc2":function(e,t,s){},8118:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Announcement"),e._v(" "),s("GenericTreeListPage",{attrs:{"table-config":e.tableConfig,"header-actions":e.headerActions,"tree-setting":e.treeSetting}})],1)},r=[],n=(s("ac6a"),s("f3e2"),s("d25f"),s("d92a"),s("fbde")),o=s("2af9"),i=s("e975"),c={components:{GenericTreeListPage:n["a"],Announcement:o["b"]},data:function(){var e=this;return{allFavorites:[],treeSetting:{showMenu:!1,showRefresh:!0,showAssets:!1,url:"/api/v1/perms/users/assets/",nodeUrl:"/api/v1/perms/users/nodes/",treeUrl:"/api/v1/perms/users/nodes/children/tree/?cache_policy=2",callback:{refresh:function(){},onSelected:function(e,t){if("node"===t.meta.type){var s=t.meta.data.id;this.tableConfig.url="/api/v1/perms/users/nodes/".concat(s,"/assets/?cache_policy=1")}}.bind(this)}},tableConfig:{url:"/api/v1/perms/users/assets/",hasTree:!0,columns:["hostname","ip","system_users","platform","comment","actions"],columnsMeta:{hostname:{prop:"hostname",label:this.$t("assets.Hostname"),formatter:i["g"],showOverflowTooltip:!0,formatterArgs:{getDialogTitle:function(e){e.col,e.row,e.cellValue;this.$t("assets.AssetDetail")}.bind(this),getDetailItems:function(e){e.col;var t=e.row;e.cellValue;return[{key:this.$t("assets.Hostname"),value:t.hostname},{key:this.$t("assets.ip"),value:t.ip},{key:this.$t("assets.Protocols"),value:t.protocols.join(", ")},{key:this.$t("assets.Platform"),value:t.platform},{key:this.$t("common.Activate"),value:t.is_active},{key:this.$t("assets.Comment"),value:t.comment}]}.bind(this)},sortable:!0},ip:{sortable:"custom",width:"150px"},system_users:{showOverflowTooltip:!0,align:"center",label:this.$t("assets.SystemUsers"),width:"150px",formatter:i["l"],formatterArgs:{getUrl:function(e){var t=e.row;return"/api/v1/perms/users/assets/".concat(t.id,"/system-users/?cache_policy=1")}}},platform:{width:"120px"},comment:{showOverflowTooltip:!0,width:"100px"},actions:{formatterArgs:{hasDelete:!1,loading:!0,hasClone:!1,hasUpdate:!1,extraActions:[{name:"connect",fa:"fa-terminal",type:"primary",can:function(e){var t=e.row;return t.is_active},callback:function(e){var t=e.row;window.open("/luna/?login_to=".concat(t.id),"_blank")}},{name:"favor",type:"info",fa:function(t){var s=t.row;return e.checkFavorite(s.id)?"fa-star":"fa-star-o"},callback:function(t){var s=t.row;return e.toggleFavorite(s.id)}}]}}},tableAttrs:{rowClassName:function(e){var t=e.row;return t.is_active?"":"row_disabled"}}},headerActions:{hasExport:!1,hasImport:!1,hasLeftActions:!1,hasSearch:!0}}},mounted:function(){this.refreshAllFavorites()},methods:{refreshAllFavorites:function(){var e=this,t=this.tableConfig.columnsMeta.actions.formatterArgs;t.loading=!0,this.$axios.get("/api/v1/assets/favorite-assets/").then((function(s){e.allFavorites=s,t.loading=!1}))},favor:function(e){var t=this,s={asset:e},a="/api/v1/assets/favorite-assets/";this.$axios.post(a,s).then((function(){return t.allFavorites.push({asset:e})}))},disfavor:function(e){var t=this,s="/api/v1/assets/favorite-assets/?asset=".concat(e);this.$axios.delete(s).then((function(){t.allFavorites=t.allFavorites.filter((function(t){return t["asset"]!==e}))}))},toggleFavorite:function(e){var t=this.checkFavorite(e);t?this.disfavor(e):this.favor(e)},checkFavorite:function(e){var t=!1;return this.allFavorites.forEach((function(s){s["asset"]===e&&(t=!0)})),t}}},l=c,u=(s("aae7"),s("2877")),f=Object(u["a"])(l,a,r,!1,null,null,null);t["default"]=f.exports},"82a0":function(e,t,s){"use strict";function a(e){window.open("/#/ops/celery/task/".concat(e,"/log/"),"","width=900,height=600")}s.d(t,"a",(function(){return a}))},aae7:function(e,t,s){"use strict";var a=s("fc95"),r=s.n(a);r.a},c0eb:function(e,t,s){"use strict";var a=s("1157"),r=s.n(a);window.$=r.a,window.jQuery=r.a,t["a"]=r.a},fbde:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Page",e._b({},"Page",e.$attrs,!1),[s("TreeTable",e._g(e._b({ref:"TreeTable",scopedSlots:e._u([{key:"table",fn:function(){return[e._t("table")]},proxy:!0},{key:"rMenu",fn:function(t){var a=t.data;return s("div",{},[e._t("rMenu",null,{data:a})],2)}}],null,!0)},"TreeTable",e.$attrs,!1),e.$listeners))],1)},r=[],n=(s("1c01"),s("58b2"),s("8e6e"),s("f3e2"),s("d25f"),s("ac6a"),s("456d"),s("bd86")),o=s("83b2"),i=s("8ad4"),c=s("2f62");function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function u(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){Object(n["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var f={name:"GenericTreeListPage",components:{Page:o["a"],TreeTable:i["a"]},computed:u({},Object(c["b"])(["currentOrgIsRoot"])),created:function(){var e=this.$attrs["header-actions"]||{};void 0===e.canCreate&&this.currentOrgIsRoot&&_.set(this.$attrs,"header-actions.canCreate",!1),void 0===e.hasImport&&this.currentOrgIsRoot&&_.set(this.$attrs,"header-actions.hasImport",!1)},methods:{hideRMenu:function(){this.$refs.TreeTable.hideRMenu()},getSelectedNodes:function(){return this.$refs.TreeTable.getSelectedNodes()},getNodes:function(){return this.$refs.TreeTable.getNodes()},selectNode:function(e){return this.$refs.TreeTable.selectNode(e)}}},h=f,d=s("2877"),p=Object(d["a"])(h,a,r,!1,null,"e5ee6c70",null);t["a"]=p.exports},fc95:function(e,t,s){}}]);