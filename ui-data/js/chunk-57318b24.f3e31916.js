(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57318b24"],{1:function(t,e){},"1c4c":function(t,e,a){"use strict";var n=a("9b43"),s=a("5ca1"),i=a("4bf8"),o=a("1fa8"),c=a("33a4"),r=a("9def"),l=a("f1ae"),u=a("27ee");s(s.S+s.F*!a("5cc5")((function(t){Array.from(t)})),"Array",{from:function(t){var e,a,s,h,d=i(t),f="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,b=void 0!==m,g=0,v=u(d);if(b&&(m=n(m,p>2?arguments[2]:void 0,2)),void 0==v||f==Array&&c(v))for(e=r(d.length),a=new f(e);e>g;g++)l(a,g,b?m(d[g],g):d[g]);else for(h=v.call(d),a=new f;!(s=h.next()).done;g++)l(a,g,b?o(h,m,[s.value,g],!0):s.value);return a.length=g,a}})},"3cc2":function(t,e,a){},"4f7f":function(t,e,a){"use strict";var n=a("c26b"),s=a("b39a"),i="Set";t.exports=a("e0b8")(i,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return n.def(s(this,i),t=0===t?0:t,t)}},n)},"5df3":function(t,e,a){"use strict";var n=a("02f4")(!0);a("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,a=this._i;return a>=e.length?{value:void 0,done:!0}:(t=n(e,a),this._i+=t.length,{value:t,done:!1})}))},"82a0":function(t,e,a){"use strict";function n(t){window.open("/#/ops/celery/task/".concat(t,"/log/"),"","width=900,height=600")}a.d(e,"a",(function(){return n}))},"98b4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("GenericDetailPage",t._b({attrs:{object:t.plan,"active-menu":t.config.activeMenu},on:{"update:object":function(e){t.plan=e},"update:activeMenu":function(e){return t.$set(t.config,"activeMenu",e)},"update:active-menu":function(e){return t.$set(t.config,"activeMenu",e)}}},"GenericDetailPage",t.config,!1),[a("keep-alive",[a(t.config.activeMenu,{tag:"component",attrs:{object:t.plan}})],1)],1)},s=[],i=a("cd4a"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{md:14,sm:24}},[a("DetailCard",{attrs:{items:t.detailItems}})],1),t._v(" "),a("el-col",{attrs:{md:10,sm:24}},[a("QuickActions",{attrs:{actions:t.quickActions,type:"primary"}})],1)],1)},c=[],r=(a("7f7f"),a("d92a"),a("2af9")),l=a("cf45"),u={name:"ChangeAuthPlanInfo",components:{DetailCard:r["f"],QuickActions:r["j"]},props:{object:{type:Object,required:!0,default:function(){return{}}}},data:function(){return{quickActions:[{title:this.$t("xpack.ChangeAuthPlan.ManualExecutePlan"),attrs:{type:"primary",label:this.$t("xpack.ChangeAuthPlan.Execute")},callbacks:{click:function(){this.$axios.post("/api/v1/xpack/change-auth-plan/plan-execution/",{plan:this.object.id}).then((function(t){window.open("/#/ops/celery/task/".concat(t.task,"/log/"),"_blank","toolbar=yes, width=900, height=600")}))}.bind(this)}}]}},computed:{detailItems:function(){var t=this,e=this.$createElement;return[{key:this.$t("xpack.ChangeAuthPlan.Name"),value:this.object.name},{key:this.$t("xpack.ChangeAuthPlan.Username"),value:this.object.username},{key:this.$t("xpack.ChangeAuthPlan.AssetAmount"),value:this.object.assets_amount},{key:this.$t("xpack.ChangeAuthPlan.NodeAmount"),value:this.object.nodes_amount},{key:this.$t("xpack.ChangeAuthPlan.PasswordStrategy"),value:this.object.password_strategy_display},{key:this.$t("xpack.ChangeAuthPlan.RegularlyPerform"),value:this.object.crontab,formatter:function(a,n){return e("span",[t.object.is_periodic?n:""])}},{key:this.$t("xpack.ChangeAuthPlan.CyclePerform"),value:this.object.interval,formatter:function(a,n){return e("span",[t.object.is_periodic?n:""])}},{key:this.$t("xpack.ChangeAuthPlan.DateJoined"),value:Object(l["p"])(this.object.date_created)},{key:this.$t("xpack.ChangeAuthPlan.DateUpdated"),value:Object(l["p"])(this.object.date_updated)},{key:this.$t("common.Comment"),value:this.object.comment}]}}},h=u,d=a("2877"),f=Object(d["a"])(h,o,c,!1,null,"b9f37560",null),p=f.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{md:14,sm:24}},[a("GenericListTable",{ref:"listTable",attrs:{"table-config":t.tableConfig,"header-actions":t.headerActions}})],1),t._v(" "),a("el-col",{attrs:{md:10,sm:24}},[a("AssetRelationCard",t._b({attrs:{type:"primary"}},"AssetRelationCard",t.assetRelationConfig,!1)),t._v(" "),a("RelationCard",t._b({staticStyle:{"margin-top":"15px"},attrs:{type:"info"}},"RelationCard",t.nodeRelationConfig,!1))],1)],1)},b=[],g=(a("20d6"),a("75fc")),v=(a("ac6a"),a("4f7f"),a("5df3"),a("1c4c"),a("6d67"),a("57e7"),a("3758")),_=a("58fd"),A=a("bd1c"),x=a("e975"),k={name:"ChangeAuthPlanAsset",components:{GenericListTable:v["a"],RelationCard:_["a"],AssetRelationCard:A["a"]},props:{object:{type:Object,required:!0,default:function(){return{}}}},data:function(){var t=this;return{tableConfig:{url:"/api/v1/xpack/change-auth-plan/plan/".concat(this.object.id,"/assets/"),columns:["hostname","ip","delete_action"],columnsMeta:{hostname:{formatter:x["f"],formatterArgs:{route:"AssetDetail"}},delete_action:{prop:"id",label:this.$t("common.Actions"),align:"center",width:150,objects:this.object.assets,formatter:x["e"],onDelete:function(t,e,a,n){var s=this;this.$axios.patch("/api/v1/xpack/change-auth-plan/plan/".concat(this.object.id,"/asset/remove/"),{assets:[e.id]}).then((function(t){s.$message.success(s.$t("common.deleteSuccessMsg")),n()})).catch((function(t){s.$message.error(s.$t("common.deleteErrorMsg")+" "+t)}))}.bind(this)}},tableAttrs:{border:!1}},headerActions:{hasSearch:!0,hasRefresh:!0,hasLeftActions:!0,hasRightActions:!0,hasExport:!1,hasImport:!1,hasCreate:!1,hasMoreActions:!1},assetRelationConfig:{icon:"fa-edit",title:this.$t("xpack.ChangeAuthPlan.AddAsset"),disabled:this.$store.getters.currentOrgIsRoot,canSelect:function(e,a){return-1===t.object.assets.indexOf(e.id)},performAdd:function(e,a){var n="/api/v1/xpack/change-auth-plan/plan/".concat(t.object.id,"/asset/add/"),s={assets:e};return t.$axios.patch(n,s)},onAddSuccess:function(e,a){t.$log.debug("AssetSelect value",a.assets),t.$message.success(t.$t("common.updateSuccessMsg")),window.location.reload()}},nodeRelationConfig:{icon:"fa-edit",title:this.$t("xpack.ChangeAuthPlan.AddNode"),objectsAjax:{url:"/api/v1/assets/nodes/",transformOption:function(t){return{label:t.full_value,value:t.id}}},disabled:this.$store.getters.currentOrgIsRoot,hasObjectsId:this.object.nodes,performAdd:function(e,a){var n="/api/v1/xpack/change-auth-plan/plan/".concat(t.object.id,"/nodes/?action=add"),s=e.map((function(t){return t.value})),i=a.iHasObjects.map((function(t){return t.value})),o={nodes:Array.from(new Set([].concat(Object(g["a"])(i),Object(g["a"])(s))))};return t.$axios.patch(n,o)},onAddSuccess:function(e,a){a.iHasObjects=[].concat(Object(g["a"])(a.iHasObjects),Object(g["a"])(e)),a.$refs.select2.clearSelected(),t.$message.success(t.$t("common.updateSuccessMsg")),window.location.reload()},performDelete:function(e){var a={nodes:[e.value]},n="/api/v1/xpack/change-auth-plan/plan/".concat(t.object.id,"/nodes/?action=remove");return t.$axios.patch(n,a)},onDeleteSuccess:function(e,a){var n=a.iHasObjects.findIndex((function(t){return t.value===e.value}));a.iHasObjects.splice(n,1);while(-1!==a.select2.disabledValues.indexOf(e.value)){var s=a.select2.disabledValues.indexOf(e.value);a.select2.disabledValues.splice(s,1)}t.$message.success(t.$t("common.deleteSuccessMsg")),t.$refs.listTable.reloadTable()}}}}},y=k,w=Object(d["a"])(y,m,b,!1,null,"83ca7406",null),C=w.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("GenericListTable",{attrs:{"table-config":t.tableConfig,"header-actions":t.headerActions}})},j=[],P={name:"ChangeAuthPlanExecution",components:{GenericListTable:v["a"]},props:{object:{type:Object,required:!0,default:function(){return{}}}},data:function(){var t=this.$createElement;return{tableConfig:{url:"/api/v1/xpack/change-auth-plan/plan-execution/?plan_id=".concat(this.object.id),columns:["username","assets_amount","nodes_amount","result_summary","password_strategy_display","timedelta","trigger_display","date_start","actions"],columnsMeta:{username:{label:this.$t("xpack.ChangeAuthPlan.Username")},assets_amount:{label:this.$t("xpack.ChangeAuthPlan.AssetAmount"),width:"80px"},nodes_amount:{label:this.$t("xpack.ChangeAuthPlan.NodeAmount"),width:"80px"},result_summary:{label:this.$t("xpack.ChangeAuthPlan.Result"),width:"80px",showOverflowTooltip:!0,formatter:function(e){var a=t("div",[t("span",{class:"text-primary"},[e.result_summary.succeed]),"/",t("span",{class:"text-danger"},[e.result_summary.failed]),"/",t("span",[e.result_summary.total])]);return a}},password_strategy_display:{label:this.$t("xpack.ChangeAuthPlan.PasswordStrategy"),width:"220px",showOverflowTooltip:!0},timedelta:{label:this.$t("xpack.ChangeAuthPlan.TimeDelta"),width:"90px",formatter:function(t){return t.timedelta.toFixed(2)+"s"}},date_start:{showOverflowTooltip:!0},actions:{formatterArgs:{hasDelete:!1,hasUpdate:!1,hasClone:!1,extraActions:[{name:"log",type:"primary",title:this.$t("xpack.ChangeAuthPlan.Log"),callback:function(t){var e=t.row;window.open("/#/ops/celery/task/".concat(e.id,"/log/"),"_blank","toolbar=yes, width=900, height=600")}},{name:"detail",title:this.$t("xpack.ChangeAuthPlan.Detail"),type:"info",callback:function(t){var e=t.row;return this.$router.push({name:"ChangeAuthPlanExecutionDetail",params:{id:e.id}})}}]}}}},headerActions:{hasSearch:!0,hasRefresh:!0,hasRightActions:!0,hasLeftActions:!0,hasMoreActions:!1,hasExport:!1,hasImport:!1,hasCreate:!1,hasBulkDelete:!1,hasBulkUpdate:!1}}}},O=P,S=Object(d["a"])(O,$,j,!1,null,"627ab35c",null),E=S.exports,R={components:{GenericDetailPage:i["e"],ChangeAuthPlanInfo:p,ChangeAuthPlanAsset:C,ChangeAuthPlanExecutionList:E},data:function(){return{plan:{name:"",username:"",comment:""},config:{activeMenu:"ChangeAuthPlanInfo",submenu:[{title:this.$t("common.BasicInfo"),name:"ChangeAuthPlanInfo"},{title:this.$t("xpack.ChangeAuthPlan.AssetAndNode"),name:"ChangeAuthPlanAsset"},{title:this.$t("xpack.ChangeAuthPlan.ExecutionList"),name:"ChangeAuthPlanExecutionList"}]}}}},D=R,M=Object(d["a"])(D,n,s,!1,null,"48d137aa",null);e["default"]=M.exports},b39a:function(t,e,a){var n=a("d3f4");t.exports=function(t,e){if(!n(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},c0eb:function(t,e,a){"use strict";var n=a("1157"),s=a.n(n);window.$=s.a,window.jQuery=s.a,e["a"]=s.a},c26b:function(t,e,a){"use strict";var n=a("86cc").f,s=a("2aeb"),i=a("dcbc"),o=a("9b43"),c=a("f605"),r=a("4a59"),l=a("01f9"),u=a("d53b"),h=a("7a56"),d=a("9e1e"),f=a("67ab").fastKey,p=a("b39a"),m=d?"_s":"size",b=function(t,e){var a,n=f(e);if("F"!==n)return t._i[n];for(a=t._f;a;a=a.n)if(a.k==e)return a};t.exports={getConstructor:function(t,e,a,l){var u=t((function(t,n){c(t,u,e,"_i"),t._t=e,t._i=s(null),t._f=void 0,t._l=void 0,t[m]=0,void 0!=n&&r(n,a,t[l],t)}));return i(u.prototype,{clear:function(){for(var t=p(this,e),a=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete a[n.i];t._f=t._l=void 0,t[m]=0},delete:function(t){var a=p(this,e),n=b(a,t);if(n){var s=n.n,i=n.p;delete a._i[n.i],n.r=!0,i&&(i.n=s),s&&(s.p=i),a._f==n&&(a._f=s),a._l==n&&(a._l=i),a[m]--}return!!n},forEach:function(t){p(this,e);var a,n=o(t,arguments.length>1?arguments[1]:void 0,3);while(a=a?a.n:this._f){n(a.v,a.k,this);while(a&&a.r)a=a.p}},has:function(t){return!!b(p(this,e),t)}}),d&&n(u.prototype,"size",{get:function(){return p(this,e)[m]}}),u},def:function(t,e,a){var n,s,i=b(t,e);return i?i.v=a:(t._l=i={i:s=f(e,!0),k:e,v:a,p:n=t._l,n:void 0,r:!1},t._f||(t._f=i),n&&(n.n=i),t[m]++,"F"!==s&&(t._i[s]=i)),t},getEntry:b,setStrong:function(t,e,a){l(t,e,(function(t,a){this._t=p(t,e),this._k=a,this._l=void 0}),(function(){var t=this,e=t._k,a=t._l;while(a&&a.r)a=a.p;return t._t&&(t._l=a=a?a.n:t._t._f)?u(0,"keys"==e?a.k:"values"==e?a.v:[a.k,a.v]):(t._t=void 0,u(1))}),a?"entries":"values",!a,!0),h(e)}}},e0b8:function(t,e,a){"use strict";var n=a("7726"),s=a("5ca1"),i=a("2aba"),o=a("dcbc"),c=a("67ab"),r=a("4a59"),l=a("f605"),u=a("d3f4"),h=a("79e5"),d=a("5cc5"),f=a("7f20"),p=a("5dbc");t.exports=function(t,e,a,m,b,g){var v=n[t],_=v,A=b?"set":"add",x=_&&_.prototype,k={},y=function(t){var e=x[t];i(x,t,"delete"==t||"has"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!u(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,a){return e.call(this,0===t?0:t,a),this})};if("function"==typeof _&&(g||x.forEach&&!h((function(){(new _).entries().next()})))){var w=new _,C=w[A](g?{}:-0,1)!=w,$=h((function(){w.has(1)})),j=d((function(t){new _(t)})),P=!g&&h((function(){var t=new _,e=5;while(e--)t[A](e,e);return!t.has(-0)}));j||(_=e((function(e,a){l(e,_,t);var n=p(new v,e,_);return void 0!=a&&r(a,b,n[A],n),n})),_.prototype=x,x.constructor=_),($||P)&&(y("delete"),y("has"),b&&y("get")),(P||C)&&y(A),g&&x.clear&&delete x.clear}else _=m.getConstructor(e,t,b,A),o(_.prototype,a),c.NEED=!0;return f(_,t),k[t]=_,s(s.G+s.W+s.F*(_!=v),k),g||m.setStrong(_,t,b),_}}}]);