(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f3e7e6c"],{"0765":function(e,r,t){"use strict";t.r(r);var i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("GenericCreateUpdatePage",e._b({attrs:{"after-get-form-value":e.afterGetFormValue}},"GenericCreateUpdatePage",e.$data,!1))},s=[],u=(t("28a5"),t("2caf"),t("6b54"),t("87b3"),t("8615"),t("ac6a"),t("456d"),t("7f7f"),t("5e04")),a=t("8521"),n={name:"AclCreateUpdate",components:{GenericCreateUpdatePage:u["a"]},data:function(){return{initial:{action:"reject",rules:{ip_group:"*"},user:this.$route.query.user,users:{username_group:""}},url:"/api/v1/acls/login-acls/",hasDetailInMsg:!1,fields:[[this.$t("common.Basic"),["name","priority"]],[this.$t("acl.users"),["user"]],[this.$t("acl.Rules"),["rules"]],[this.$t("acl.Action"),["action","reviewers"]],[this.$t("common.Other"),["is_active","comment"]]],fieldsMeta:{is_active:{type:"checkbox"},user:{el:{disabled:!!this.$route.query.user,multiple:!1,ajax:{url:"/api/v1/users/users/?fields_size=mini&all=true",transformOption:function(e){return{label:e.name+"("+e.username+")",value:e.id}}}}},reviewers:{el:{value:[],ajax:{url:"/api/v1/users/users/?fields_size=mini&all=true",transformOption:function(e){return{label:e.name+"("+e.username+")",value:e.id}}}},hidden:function(e){return"confirm"!==e.action}},rules:{fields:["ip_group","time_period"],fieldsMeta:{ip_group:{label:this.$t("acl.ip_group"),helpText:this.$t("acl.ip_group_help_text")},time_period:{label:this.$t("common.time_period"),component:a["c"]}}}},getUrl:function(){var e=this.$route.query,r=this.$route.params,t="/api/v1/acls/login-acls/";return r.id&&(t="".concat(t).concat(r.id,"/")),e.user&&(t="".concat(t,"?user=").concat(e.user)),t},updateSuccessNextRoute:this.$route.query.user?{name:"UserDetail",params:{id:this.$route.query.user}}:{name:"UserLoginACLList"},createSuccessNextRoute:this.$route.query.user?{name:"UserDetail",params:{id:this.$route.query.user}}:{name:"UserLoginACLList"},onPerformError:function(e,r,t){this.$emit("submitError",e);var i=e.response,s=i.data;if(400===i.status)for(var u=0,a=Object.keys(s);u<a.length;u++){var n=a[u],o=s[n];"ip_group"===n&&(o=Object.values(s[n])),o instanceof Array&&(o=o.join(";")),this.$refs.form.setFieldError(n,o)}},afterGetFormValue:function(e){return e.rules.ip_group=e.rules.ip_group.toString(),this.$route.query.user||(e.users.username_group=e.users.username_group.toString()),e},cleanFormValue:function(e){return Array.isArray(e.rules.ip_group)||(e.rules.ip_group=e.rules.ip_group?e.rules.ip_group.split(","):[]),this.$route.query.user?delete e.users:Array.isArray(e.users.username_group)||(e.users.username_group=e.users.username_group?e.users.username_group.split(","):[]),"confirm"!==e.action&&(e.reviewers=[]),e}}},mounted:function(){},methods:{}},o=n,c=t("2877"),l=Object(c["a"])(o,i,s,!1,null,null,null);r["default"]=l.exports},"1c4c":function(e,r,t){"use strict";var i=t("9b43"),s=t("5ca1"),u=t("4bf8"),a=t("1fa8"),n=t("33a4"),o=t("9def"),c=t("f1ae"),l=t("27ee");s(s.S+s.F*!t("5cc5")((function(e){Array.from(e)})),"Array",{from:function(e){var r,t,s,p,f=u(e),m="function"==typeof this?this:Array,d=arguments.length,h=d>1?arguments[1]:void 0,g=void 0!==h,_=0,v=l(f);if(g&&(h=i(h,d>2?arguments[2]:void 0,2)),void 0==v||m==Array&&n(v))for(r=o(f.length),t=new m(r);r>_;_++)c(t,_,g?h(f[_],_):f[_]);else for(p=v.call(f),t=new m;!(s=p.next()).done;_++)c(t,_,g?a(p,h,[s.value,_],!0):s.value);return t.length=_,t}})},"5df3":function(e,r,t){"use strict";var i=t("02f4")(!0);t("01f9")(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,r=this._t,t=this._i;return t>=r.length?{value:void 0,done:!0}:(e=i(r,t),this._i+=e.length,{value:e,done:!1})}))},8615:function(e,r,t){var i=t("5ca1"),s=t("504c")(!1);i(i.S,"Object",{values:function(e){return s(e)}})}}]);