(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df446"],{"88d4":function(e,t,a){"use strict";a.r(t);var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("GenericDetailPage",e._g(e._b({attrs:{object:e.TaskDetail,"active-menu":e.config.activeMenu},on:{"update:object":function(t){e.TaskDetail=t},"update:activeMenu":function(t){return e.$set(e.config,"activeMenu",t)},"update:active-menu":function(t){return e.$set(e.config,"activeMenu",t)}}},"GenericDetailPage",e.config,!1),e.$listeners),[a("keep-alive",[a(e.config.activeMenu,{tag:"component",attrs:{object:e.TaskDetail}})],1)],1)},i=[],s=a("cd4a"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:14}},[a("DetailCard",{attrs:{items:e.detailCardItems}})],1),e._v(" "),a("el-col",{attrs:{span:10}},[a("QuickActions",{attrs:{type:"primary",actions:e.quickActions}})],1)],1)},o=[],r=(a("57e7"),a("6b54"),a("87b3"),a("7f7f"),a("d92a"),a("6d67"),a("b97b")),l=a("8c34"),u=a("cf45"),d={name:"Detail",components:{DetailCard:r["a"],QuickActions:l["a"]},props:{object:{type:Object,default:function(){}}},data:function(){var e=this;return{nodeRelationConfig:{icon:"fa-info",title:this.$t("assets.ReplaceNodeAssetsAdminUserWithThis"),objectsAjax:{url:"/api/v1/assets/nodes/",transformOption:function(e){return{label:e.full_value,value:e.id}}},performAdd:function(t){var a=[],c="/api/v1/assets/admin-users/".concat(e.object.id,"/nodes/");return t.map((function(e){a.push(e.value)})),e.$axios.patch(c,{nodes:a}).then((function(t){e.$message.success(e.$t("common.updateSuccessMsg"))})).catch((function(t){e.$message.error(e.$t("common.updateErrorMsg "+t))}))},onAddSuccess:function(){e.$refs.RelationCard.$refs.select2.clearSelected()}},quickActions:[{title:this.$t("common.Active"),type:"switcher",attrs:{model:this.object.is_active},callbacks:{change:function(e){var t=this;this.$axios.patch("/api/v1/acls/login-acls/".concat(this.object.id,"/"),{is_active:e}).then((function(e){t.$message.success(t.$t("common.updateSuccessMsg"))})).catch((function(e){t.$message.error(t.$t("common.updateErrorMsg "+e))}))}.bind(this)}}],dataVal:[]}},computed:{detailCardItems:function(){return[{key:this.$t("acl.name"),value:this.object.name},{key:this.$t("acl.username"),value:this.object.user_display},{key:this.$t("acl.ip_group"),value:this.object.rules.ip_group.toString()},{key:this.$t("common.time_period"),value:this.dataVal},{key:this.$t("acl.action"),value:this.object.action_display},{key:this.$t("acl.priority"),value:this.object.priority},{key:this.$t("acl.date_created"),value:Object(u["p"])(this.object.date_created)},{key:this.$t("acl.created_by"),value:this.object.created_by},{key:this.$t("acl.login_confirm_user"),value:"confirm"===this.object.action?this.object.reviewers_display:""}]}},created:function(){for(var e=this.object.rules.time_period,t=0;t<e.length;t++){var a=e[t],c=a.value;if(c.length>0){var i=c.substr(0,a.value.length-5),s=c.substr(-5,5),n={};switch(-1!==s.indexOf("00:00")&&(s="24:00"),c=i+s,a.id){case 0:n={key:this.$t("common.WeekCronSelect.Sunday"),value:c};break;case 1:n={key:this.$t("common.WeekCronSelect.Monday"),value:c};break;case 2:n={key:this.$t("common.WeekCronSelect.Tuesday"),value:c};break;case 3:n={key:this.$t("common.WeekCronSelect.Wednesday"),value:c};break;case 4:n={key:this.$t("common.WeekCronSelect.Thursday"),value:c};break;case 5:n={key:this.$t("common.WeekCronSelect.Friday"),value:c};break;case 6:n={key:this.$t("common.WeekCronSelect.Saturday"),value:c};break}this.dataVal.push(n)}}}},h=d,m=a("2877"),p=Object(m["a"])(h,n,o,!1,null,"3fc4d951",null),f=p.exports,v={components:{GenericDetailPage:s["e"],Detail:f},data:function(){return{TaskDetail:{},config:{activeMenu:"Detail",submenu:[{title:this.$t("acl.RuleDetail"),name:"Detail"}],hasRightSide:!1,actions:{detailApiUrl:"/api/v1/acls/login-acls/".concat(this.$route.params.id,"/?user=").concat(this.$route.query.user),deleteApiUrl:"/api/v1/acls/login-acls/".concat(this.$route.params.id,"/?user=").concat(this.$route.query.user)}}}}},b=v,k=Object(m["a"])(b,c,i,!1,null,"7a9adf92",null);t["default"]=k.exports}}]);