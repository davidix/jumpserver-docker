(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07127d3c"],{"685f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("GenericDetailPage",t._g(t._b({attrs:{object:t.ticket,"active-menu":t.config.activeMenu},on:{"update:object":function(e){t.ticket=e},"update:activeMenu":function(e){return t.$set(t.config,"activeMenu",e)},"update:active-menu":function(e){return t.$set(t.config,"activeMenu",e)}}},"GenericDetailPage",t.config,!1),t.$listeners),[s(t.config.activeMenu,{tag:"component",attrs:{object:t.ticket}})],1)},i=[],c=s("cd4a"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("GenericTicketDetail",{attrs:{object:t.object,"detail-card-items":t.detailCardItems,"special-card-items":t.specialCardItems,"assigned-card-items":t.assignedCardItems,approve:t.handleApprove,close:t.handleClose,reject:t.handleReject}})},o=[],r=(s("57e7"),s("ed08")),u=s("cf45"),l=s("0218"),p=s("9cdc"),m={name:"",components:{GenericTicketDetail:p["a"]},props:{object:{type:Object,default:function(){return{}}}},data:function(){return{statusMap:"open"===this.object.status?l["b"]["notified"]:l["b"][this.object.state],requestForm:{asset:this.object.meta.apply_assets,systemuser:this.object.meta.apply_system_users},comments:"",assets:[]}},computed:{detailCardItems:function(){var t=this,e=this.$createElement;return[{key:this.$t("tickets.status"),value:this.object.state,formatter:function(s,a){return e("el-tag",{attrs:{type:t.statusMap.type,size:"mini"}},[" ",t.statusMap.title])}},{key:this.$t("tickets.type"),value:this.object.type_display},{key:this.$t("tickets.user"),value:this.object["applicant_display"]},{key:this.$t("tickets.OrgName"),value:this.object.org_name},{key:this.$t("common.dateCreated"),value:Object(u["p"])(this.object.date_created)},{key:this.$t("common.Comment"),value:this.object.comment}]},specialCardItems:function(){return[{key:this.$t("tickets.Asset"),value:this.object.meta.apply_assets_display.join(", ")},{key:this.$t("tickets.SystemUser"),value:this.object.meta.apply_system_users_display.join(", ")},{key:this.$t("assets.Action"),value:Object(u["c"])(this,this.object.meta["apply_actions_display"])},{key:this.$t("common.dateStart"),value:Object(u["p"])(this.object.meta.apply_date_start)},{key:this.$t("common.dateExpired"),value:Object(u["p"])(this.object.meta.apply_date_expired)}]},assignedCardItems:function(){var t=this.$createElement,e=this;return[{key:this.$t("tickets.PermissionName"),value:this.object.meta.apply_permission_name,formatter:function(s,a){var i={name:"AssetPermissionDetail",params:{id:e.object.id},query:{oid:e.object.org_id}};return"closed"===e.object.status&&"approved"===e.object.state?t("router-link",{attrs:{to:i}},[a]):t("span",[a])}},{key:this.$t("assets.Asset"),value:this.object.meta.apply_assets_display.join(", ")},{key:this.$t("tickets.SystemUser"),value:this.object.meta.apply_system_users_display.join(", ")},{key:this.$t("assets.Action"),value:Object(u["c"])(this,this.object.meta["apply_actions_display"])},{key:this.$t("common.dateStart"),value:Object(u["p"])(this.object.meta.apply_date_start)},{key:this.$t("common.dateExpired"),value:Object(u["p"])(this.object.meta.apply_date_expired)}]},hasActionPerm:function(){return-1!==this.object.assignees.indexOf(this.$store.state.users.profile.id)}},methods:{formatTime:function(t){return Object(r["a"])(Object(r["b"])(t))},toSafeLocalDateStr:function(t){return Object(u["p"])(t)},reloadPage:function(){window.location.reload()},handleApprove:function(){var t=this;if(0===this.requestForm.asset.length||0===this.requestForm.systemuser.length)return this.$message.error(this.$tc("common.NeedAssetsAndSystemUserErrMsg"));this.$axios.put("/api/v1/tickets/tickets/".concat(this.object.id,"/approve/"),{meta:{}}).then((function(){t.$message.success(t.$tc("common.updateSuccessMsg")),t.reloadPage()})).catch((function(){t.$message.success(t.$tc("common.updateErrorMsg"))}))},handleClose:function(){var t=this,e="/api/v1/tickets/tickets/".concat(this.object.id,"/close/");this.$axios.put(e).then((function(e){return t.reloadPage()})).catch((function(e){return t.$message.error(e)}))},handleReject:function(){var t=this,e="/api/v1/tickets/tickets/".concat(this.object.id,"/reject/");this.$axios.put(e).then((function(e){return t.reloadPage()})).catch((function(e){return t.$message.error(e)}))}}},d=m,h=(s("8cab"),s("2877")),b=Object(h["a"])(d,n,o,!1,null,"bfe17fce",null),j=b.exports,y={components:{GenericDetailPage:c["e"],TicketDetail:j,TabPage:c["m"]},data:function(){return{ticket:{title:"",user_display:"",type_display:"",status:"",processor:"",date_created:""},config:{activeMenu:"TicketDetail",url:"",submenu:[{title:this.$t("route.TicketDetail"),name:"TicketDetail"}],actions:{detailApiUrl:"/api/v1/tickets/tickets/".concat(this.$route.params.id,"/")},getObjectName:this.getObjectName,hasRightSide:!1}}},methods:{getObjectName:function(){return this.ticket.title}}},f=y,k=Object(h["a"])(f,a,i,!1,null,"52604557",null);e["default"]=k.exports},"8cab":function(t,e,s){"use strict";var a=s("f954"),i=s.n(a);i.a},f954:function(t,e,s){}}]);