(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d7301ed"],{"2c21":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-tree",e._b({attrs:{data:e.data,"show-checkbox":"","node-key":"id","default-expand-all":!1,"default-checked-keys":e.value,props:e.defaultProps},on:{check:e.handleCheckChange}},"el-tree",e.$attrs,!1))},l=[],i={name:"AssetPermissionFormActionField",props:{value:{type:Array,default:function(){return["all","connect","upload_file","download_file","updownload","clipboard_copy_paste","clipboard_copy","clipboard_paste"]}}},data:function(){return{defaultProps:{children:"children",label:"label"},data:[{id:"all",label:this.$t("perms.all"),children:[{id:"connect",label:this.$t("perms.connect")},{id:"updownload",label:this.$t("perms.upDownload"),children:[{id:"upload_file",label:this.$t("perms.uploadFile")},{id:"download_file",label:this.$t("perms.downloadFile")}]},{id:"clipboard_copy_paste",label:this.$t("perms.clipboardCopyPaste"),children:[{id:"clipboard_copy",label:this.$t("perms.clipboardCopy")},{id:"clipboard_paste",label:this.$t("perms.clipboardPaste")}]}]}]}},methods:{handleCheckChange:function(e,t){var a=t.checkedKeys;0!==a.length&&a.push("connect"),this.$emit("input",a)}}},o=i,n=a("2877"),r=Object(n["a"])(o,s,l,!1,null,"c5919814",null);t["a"]=r.exports},"3cae":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.loading?e._e():a("GenericCreateUpdatePage",e._b({attrs:{"perform-submit":e.performSubmit,"create-success-next-route":e.createSuccessNextRoute}},"GenericCreateUpdatePage",e.$data,!1))},l=[],i=(a("6762"),a("2fdb"),a("456d"),a("ac6a"),a("f3e2"),a("6d67"),a("7f7f"),a("8ea5"),a("cd4a")),o=a("56f5"),n=a("cf45"),r=a("2c21"),p={components:{GenericCreateUpdatePage:i["d"]},data:function(){var e=this,t=new Date,a=Object(n["h"])(7,t).toISOString(),s=t.toISOString();return{hasDetailInMsg:!1,loading:!0,initial:{ips_or_not:!0,meta:{apply_date_expired:a,apply_date_start:s,apply_actions:["all","connect","updownload","upload_file","download_file"],apply_assets:[]},org_id:"",type:"apply_asset"},fields:[[this.$t("common.Basic"),["title","type","org_id","comment"]],[this.$t("tickets.RequestPerm"),["meta"]]],fieldsMeta:{type:{hidden:function(){return!0},el:{disabled:!0}},meta:{fields:["apply_assets","apply_system_users","apply_actions","apply_date_start","apply_date_expired"],fieldsMeta:{apply_actions:{label:this.$t("perms.Actions"),component:r["a"],helpText:this.$t("common.actionsTips")},apply_assets:{type:"assetSelect",label:this.$t("perms.Asset"),component:o["a"],el:{value:[],ajax:{url:"",transformOption:function(e){return{label:e.hostname+"("+e.protocols+")",value:e.id}}}}},apply_system_users:{type:"systemUserSelect",component:o["a"],label:this.$t("assets.SystemUser"),el:{value:[],ajax:{url:"",transformOption:function(e){var t=e.username||"*";return{label:e.name+"("+t+")",value:e.id}}}}}}},org_id:{component:o["a"],el:{multiple:!1,options:this.$store.state.users.profile["user_all_orgs"].map((function(e){return{label:e.name,value:e.id}}))},hidden:function(t){var a=e.fieldsMeta.meta.fieldsMeta;a.apply_system_users.el.ajax.url="/api/v1/assets/system-users/suggestions/?oid=".concat(t["org_id"],"&protocol__in=rdp,ssh,vnc,telnet"),a.apply_assets.el.value=[],a.apply_assets.el.ajax.url="/api/v1/assets/assets/suggestions/?oid=".concat(t["org_id"])}}},cleanFormValue:function(e){return Object.keys(e.meta).forEach((function(t,a,s){["apply_assets","apply_system_users"].includes(t)&&e.meta[t].length<1&&delete e.meta[t]})),e},url:"/api/v1/tickets/tickets/?type=apply_asset&action=open",createSuccessNextRoute:{name:"TicketList"}}},mounted:function(){this.$store.state.users.profile["user_all_orgs"].length>0&&(this.initial.org_id=this.$store.state.users.profile["user_all_orgs"][0].id),this.loading=!1},methods:{performSubmit:function(e){return this.$axios["post"]("/api/v1/tickets/tickets/open/?type=apply_asset",e)}}},c=p,d=a("2877"),u=Object(d["a"])(c,s,l,!1,null,"e5053c8a",null);t["default"]=u.exports}}]);