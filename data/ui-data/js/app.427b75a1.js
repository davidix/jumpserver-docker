(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["app"], {
        0: function(e, t, n) {
            e.exports = n("56d7")
        },
        "028b": function(e, t, n) {
            "use strict";
            var a = n("f12c"),
                r = n.n(a);
            r.a
        },
        "031b": function(e, t, n) {},
        "03da": function(e, t, n) {
            "use strict";
            var a = n("6ead"),
                r = n.n(a);
            r.a
        },
        "0572": function(e, t, n) {
            "use strict";
            var a = n("9f65"),
                r = n.n(a);
            r.a
        },
        "059c": function(e, t, n) {
            e.exports = n.p + "assets/img/admin.8f5fe9ce.png"
        },
        "0692": function(e, t, n) {
            "use strict";
            var a = n("2b0e"),
                r = n("4897"),
                i = n.n(r),
                s = n("a925"),
                o = (n("1c01"), n("58b2"), n("8e6e"), n("f3e2"), n("d25f"), n("ac6a"), n("456d"), n("bd86")),
                c = n("f0d9"),
                l = n.n(c),
                u = n("b2d6"),
                d = n.n(u),
                p = n("73d1"),
                m = n("9077");

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach((function(t) {
                        Object(o["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var g = {
                    cn: f({}, l.a, {}, p),
                    en: f({}, d.a, {}, m)
                },
                b = {
                    en: {
                        short: {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                        },
                        medium: {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                            hourCycle: "h23",
                            hour12: !1
                        },
                        long: {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric"
                        }
                    },
                    cn: {
                        short: {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                        },
                        medium: {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                            hourCycle: "h23",
                            hour12: !1
                        },
                        long: {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: !0
                        }
                    }
                };
            a["default"].use(s["a"]);
            var v = new s["a"]({
                locale: localStorage.lang || "cn",
                fallbackLocale: "en",
                silentFallbackWarn: !0,
                silentTranslationWarn: !0,
                dateTimeFormats: b,
                messages: g
            });
            i.a.i18n((function(e, t) {
                return v.t(e, t)
            })), a["default"].prototype.$tr = function(e) {
                return v.t("route." + e)
            };
            t["a"] = v
        },
        "0781": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("83d6"),
                r = n.n(a),
                i = n("34b7"),
                s = r.a.showSettings,
                o = r.a.fixedHeader,
                c = r.a.sidebarLogo,
                l = r.a.tagsView,
                u = {
                    showSettings: s,
                    fixedHeader: o,
                    sidebarLogo: c,
                    tagsView: l,
                    publicSettings: null,
                    hasValidLicense: !1
                },
                d = {
                    CHANGE_SETTING: function(e, t) {
                        var n = t.key,
                            a = t.value;
                        e.hasOwnProperty(n) && (e[n] = a)
                    },
                    SET_PUBLIC_SETTINGS: function(e, t) {
                        e.publicSettings = t, t["XPACK_ENABLED"] && (e.hasValidLicense = t["XPACK_LICENSE_IS_VALID"])
                    }
                },
                p = {
                    changeSetting: function(e, t) {
                        var n = e.commit;
                        n("CHANGE_SETTING", t)
                    },
                    getPublicSettings: function(e) {
                        var t = e.commit;
                        e.state;
                        return new Promise((function(e, n) {
                            Object(i["a"])().then((function(n) {
                                var a, r = n.data || {},
                                    i = null === (a = r["LOGO_URLS"]) || void 0 === a ? void 0 : a.favicon,
                                    s = document.querySelector("link[rel*='icon']");
                                s || (s = document.createElement("link"), s.type = "image/x-icon", s.rel = "shortcut icon", document.getElementsByTagName("head")[0].appendChild(s)), i && (s.href = i), document.title = r["LOGIN_TITLE"], t("SET_PUBLIC_SETTINGS", r), e(n)
                            })).catch((function(e) {
                                n(e)
                            }))
                        }))
                    }
                };
            t["default"] = {
                namespaced: !0,
                state: u,
                mutations: d,
                actions: p
            }
        },
        "07b6": function(e, t, n) {},
        "09c4": function(e, t, n) {},
        "0a90": function(e, t, n) {
            "use strict";
            var a = n("605d"),
                r = n.n(a);
            r.a
        },
        "0c77": function(e, t, n) {},
        "14fc": function(e, t, n) {
            "use strict";
            var a = n("07b6"),
                r = n.n(a);
            r.a
        },
        "18f0": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-link",
                    use: "icon-link-usage",
                    viewBox: "0 0 128 128",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-link"><path d="M115.625 127.937H.063V12.375h57.781v12.374H12.438v90.813h90.813V70.156h12.374z" /><path d="M116.426 2.821l8.753 8.753-56.734 56.734-8.753-8.745z" /><path d="M127.893 37.982h-12.375V12.375H88.706V0h39.187z" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        "1f65": function(e, t, n) {},
        "1f83": function(e, t, n) {},
        "226c": function(e, t, n) {
            "use strict";
            var a = n("79e7"),
                r = n.n(a);
            r.a
        },
        "244a": function(e, t, n) {},
        "25c0": function(e, t, n) {
            "use strict";
            var a = n("a545"),
                r = n.n(a);
            r.a
        },
        2612: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "d", (function() {
                return o
            }));
            var a = n("b775");

            function r(e) {
                return Object(a["a"])({
                    url: "/api/v1/users/profile/",
                    method: "get"
                })
            }

            function i(e) {
                return Object(a["a"])({
                    url: "/api/v1/users/users/",
                    method: "get",
                    params: e
                })
            }

            function s() {
                return Object(a["a"])({
                    url: "/vue-admin-template/user/logout",
                    method: "post"
                })
            }

            function o() {
                return r()
            }
        },
        2873: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-coffee",
                    use: "icon-coffee-usage",
                    viewBox: "0 0 1024 1024",
                    content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-coffee"><defs><style type="text/css"></style></defs><path d="M914.561 720.735c0 65.695-53.582 119.277-119.277 119.277L198.897 840.012c-65.696 0-119.277-53.582-119.277-119.277L914.561 720.735zM765.464 541.819l-29.819 0 0 14.91c0 57.309-47.059 104.367-104.367 104.367L303.265 661.096c-57.309 0-104.367-47.059-104.367-104.367L198.898 213.807c0-16.308 13.512-29.819 29.819-29.819l536.747 0c98.776 0 178.916 80.14 178.916 178.916S864.24 541.819 765.464 541.819zM765.464 273.445l-29.819 0 0 178.916 29.819 0c49.389 0 89.458-40.069 89.458-89.458C854.922 313.516 814.853 273.445 765.464 273.445z" p-id="2736" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        2934: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            }));
            var a = n("b775");

            function r(e) {
                return Object(a["a"])({
                    url: "/api/v1/common/resources/cache/",
                    method: "post",
                    data: {
                        resources: e
                    }
                })
            }

            function i(e) {
                return Object(a["a"])({
                    url: e,
                    method: "options"
                })
            }
        },
        "2a3d": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-password",
                    use: "icon-password-usage",
                    viewBox: "0 0 128 128",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-password"><path d="M108.8 44.322H89.6v-5.36c0-9.04-3.308-24.163-25.6-24.163-23.145 0-25.6 16.881-25.6 24.162v5.361H19.2v-5.36C19.2 15.281 36.798 0 64 0c27.202 0 44.8 15.281 44.8 38.961v5.361zm-32 39.356c0-5.44-5.763-9.832-12.8-9.832-7.037 0-12.8 4.392-12.8 9.832 0 3.682 2.567 6.808 6.407 8.477v11.205c0 2.718 2.875 4.962 6.4 4.962 3.524 0 6.4-2.244 6.4-4.962V92.155c3.833-1.669 6.393-4.795 6.393-8.477zM128 64v49.201c0 8.158-8.645 14.799-19.2 14.799H19.2C8.651 128 0 121.359 0 113.201V64c0-8.153 8.645-14.799 19.2-14.799h89.6c10.555 0 19.2 6.646 19.2 14.799z" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        "2bbd": function(e, t, n) {},
        "2e9c": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("c1f7"),
                r = n("aa5c"),
                i = n("0692"),
                s = n("84ca");
            t["default"] = {
                path: "/xpack",
                component: a["a"],
                redirect: "/applications/remote-apps/",
                name: "Xpack",
                meta: {
                    title: "X-Pack",
                    icon: "sitemap",
                    licenseRequired: !0
                },
                children: [{
                    path: "cloud",
                    component: r["a"],
                    redirect: "",
                    meta: {
                        title: i["a"].t("xpack.Cloud.Cloud")
                    },
                    children: [{
                        path: "",
                        component: function() {
                            return n.e("chunk-6c8ccb1c").then(n.bind(null, "3a8a"))
                        },
                        name: "CloudCenter",
                        meta: {
                            title: i["a"].t("xpack.Cloud.CloudCenter")
                        }
                    }, {
                        path: "account",
                        component: function() {
                            return n.e("chunk-0997b68a").then(n.bind(null, "d458"))
                        },
                        name: "AccountList",
                        hidden: !0,
                        meta: {
                            title: i["a"].t("xpack.Cloud.AccountList")
                        }
                    }, {
                        path: "account/create",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-55dd3292")]).then(n.bind(null, "33b0"))
                        },
                        name: "AccountCreate",
                        hidden: !0,
                        meta: {
                            title: i["a"].t("xpack.Cloud.AccountCreate"),
                            action: "create",
                            activeMenu: "/xpack/cloud"
                        }
                    }, {
                        path: "account/:id/update",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-55dd3292")]).then(n.bind(null, "33b0"))
                        },
                        name: "AccountUpdate",
                        hidden: !0,
                        meta: {
                            title: i["a"].t("xpack.Cloud.AccountUpdate"),
                            action: "update",
                            activeMenu: "/xpack/cloud"
                        }
                    }, {
                        path: "accounts/:id/",
                        component: function() {
                            return n.e("chunk-2d0e545b").then(n.bind(null, "947a"))
                        },
                        name: "AccountDetail",
                        hidden: !0,
                        meta: {
                            title: i["a"].t("xpack.Cloud.AccountDetail"),
                            activeMenu: "/xpack/cloud"
                        }
                    }, {
                        path: "sync-instance-tasks",
                        component: function() {
                            return n.e("chunk-46d06b08").then(n.bind(null, "d90e"))
                        },
                        name: "SyncInstanceTaskList",
                        hidden: !0,
                        meta: {
                            title: i["a"].t("xpack.Cloud.SyncInstanceTaskList"),
                            activeMenu: "/xpack/cloud"
                        }
                    }, {
                        path: "sync-instance-tasks/create",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-38d4af53")]).then(n.bind(null, "208b"))
                        },
                        name: "SyncInstanceTaskCreate",
                        hidden: !0,
                        meta: {
                            title: i["a"].t("xpack.Cloud.SyncInstanceTaskCreate"),
                            activeMenu: "/xpack/cloud"
                        }
                    }, {
                        path: "sync-instance-tasks/:id/update",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-38d4af53")]).then(n.bind(null, "208b"))
                        },
                        name: "SyncInstanceTaskUpdate",
                        hidden: !0,
                        meta: {
                            title: i["a"].t("xpack.Cloud.SyncInstanceTaskUpdate"),
                            activeMenu: "/xpack/cloud"
                        }
                    }, {
                        path: "sync-instance-tasks/:id",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-70eae8e4")]).then(n.bind(null, "2028"))
                        },
                        name: "SyncInstanceTaskDetail",
                        hidden: !0,
                        meta: {
                            title: i["a"].t("xpack.Cloud.SyncInstanceTaskDetail"),
                            activeMenu: "/xpack/cloud"
                        }
                    }]
                }, {
                    path: "interface-setting",
                    component: function() {
                        return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-1952ac88")]).then(n.bind(null, "66fd"))
                    },
                    name: "InterfaceSetting",
                    meta: {
                        title: i["a"].t("xpack.InterfaceSettings"),
                        permissions: [s["a"].PERM_SUPER]
                    }
                }, {
                    path: "orgs",
                    component: r["a"],
                    redirect: "",
                    meta: {
                        permissions: [s["a"].PERM_SUPER]
                    },
                    children: [{
                        path: "",
                        component: function() {
                            return n.e("chunk-2d0ab183").then(n.bind(null, "148b"))
                        },
                        name: "OrganizationList",
                        meta: {
                            title: i["a"].t("xpack.Organization.OrganizationList"),
                            activeMenu: "/xpack/orgs"
                        }
                    }, {
                        path: "create",
                        component: function() {
                            return n.e("chunk-2d22cc80").then(n.bind(null, "f561"))
                        },
                        name: "OrganizationCreate",
                        hidden: !0,
                        meta: {
                            title: i["a"].t("xpack.Organization.OrganizationCreate"),
                            activeMenu: "/xpack/orgs",
                            action: "create"
                        }
                    }, {
                        path: ":id/update",
                        component: function() {
                            return n.e("chunk-2d22cc80").then(n.bind(null, "f561"))
                        },
                        name: "OrganizationUpdate",
                        hidden: !0,
                        meta: {
                            title: i["a"].t("xpack.Organization.OrganizationUpdate"),
                            activeMenu: "/xpack/orgs",
                            action: "update"
                        }
                    }, {
                        path: ":id",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-13be4e48")]).then(n.bind(null, "b891"))
                        },
                        name: "OrganizationDetail",
                        hidden: !0,
                        meta: {
                            title: i["a"].t("xpack.Organization.OrganizationDetail"),
                            activeMenu: "/xpack/orgs"
                        }
                    }]
                }, {
                    path: "system-monitor",
                    component: function() {
                        return n.e("chunk-d98c8c80").then(n.bind(null, "98d0"))
                    },
                    name: "SystemMonitor",
                    meta: {
                        title: i["a"].t("xpack.SystemMonitor"),
                        permissions: [s["a"].PERM_SUPER]
                    }
                }]
            }
        },
        "2f25": function(e, t, n) {
            "use strict";
            var a = n("bb92"),
                r = n.n(a);
            r.a
        },
        "30c3": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-example",
                    use: "icon-example-usage",
                    viewBox: "0 0 128 128",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-example"><path d="M96.258 57.462h31.421C124.794 27.323 100.426 2.956 70.287.07v31.422a32.856 32.856 0 0 1 25.971 25.97zm-38.796-25.97V.07C27.323 2.956 2.956 27.323.07 57.462h31.422a32.856 32.856 0 0 1 25.97-25.97zm12.825 64.766v31.421c30.46-2.885 54.507-27.253 57.713-57.712H96.579c-2.886 13.466-13.146 23.726-26.292 26.291zM31.492 70.287H.07c2.886 30.46 27.253 54.507 57.713 57.713V96.579c-13.466-2.886-23.726-13.146-26.291-26.292z" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        "315a": function(e, t, n) {
            "use strict";
            var a = n("c8d7"),
                r = n.n(a);
            r.a
        },
        "31c2": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "filterLicenseRequiredRoutes", (function() {
                return u
            })), n.d(t, "filterHiddenRoutes", (function() {
                return p
            })), n.d(t, "filterAsyncRoutes", (function() {
                return m
            }));
            n("1c01"), n("58b2"), n("8e6e"), n("d25f"), n("456d"), n("ac4d"), n("8a81");
            var a = n("bd86"),
                r = (n("ac6a"), n("f3e2"), n("a18c")),
                i = n("84ca");

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        Object(a["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function c(e, t) {
                var n = t.meta ? t.meta.permissions : null;
                n || (n = [i["a"].PERM_ADMIN]);
                var a = i["a"].hasPerm(e, n);
                return a
            }

            function l(e, t) {
                var n = t.settings.hasValidLicense,
                    a = !!e.meta && e.meta.licenseRequired;
                return !(!n && a)
            }

            function u(e, t) {
                var n = [];
                return e.forEach((function(e) {
                    var a = o({}, e);
                    l(e, t) && (a.children && (a.children = u(a.children, t)), n.push(a))
                })), n
            }

            function d(e, t) {
                var n = !!e.meta && e.meta.hidden;
                return "function" === typeof n && (n = n({
                    route: e,
                    settings: t.settings.publicSettings
                })), n
            }

            function p(e, t) {
                var n = [];
                return e.forEach((function(e) {
                    var a = o({}, e);
                    d(e, t) || (a.children && (a.children = p(a.children, t)), n.push(a))
                })), n
            }

            function m(e, t) {
                var n = [],
                    a = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var s, l = e[Symbol.iterator](); !(a = (s = l.next()).done); a = !0) {
                        var u = s.value,
                            d = o({}, u);
                        c(t, d) && (d.children && (d.children = m(d.children, t)), n.push(d))
                    }
                } catch (p) {
                    r = !0, i = p
                } finally {
                    try {
                        a || null == l.return || l.return()
                    } finally {
                        if (r) throw i
                    }
                }
                return n
            }
            var h = {
                    routes: [],
                    addRoutes: []
                },
                f = {
                    SET_ROUTES: function(e, t) {
                        e.addRoutes = t, e.routes = t.concat(r["b"])
                    }
                },
                g = {
                    generateRoutes: function(e, t) {
                        var n = e.commit,
                            a = e.rootState;
                        return new Promise((function(e) {
                            var i = m(r["a"], t);
                            i = p(i, a), i = u(i, a), i.length, n("SET_ROUTES", i), e(i)
                        }))
                    }
                };
            t["default"] = {
                namespaced: !0,
                state: h,
                mutations: f,
                actions: g
            }
        },
        "328a": function(e, t, n) {},
        "34b7": function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return r
            })), n.d(t, "c", (function() {
                return i
            })), n.d(t, "g", (function() {
                return s
            })), n.d(t, "h", (function() {
                return o
            })), n.d(t, "d", (function() {
                return c
            })), n.d(t, "e", (function() {
                return l
            })), n.d(t, "b", (function() {
                return u
            })), n.d(t, "a", (function() {
                return d
            }));
            var a = n("b775");

            function r(e) {
                return Object(a["a"])({
                    disableFlashErrorMsg: !0,
                    url: "/api/v1/settings/mail/testing/",
                    method: "post",
                    data: e
                })
            }

            function i(e) {
                return Object(a["a"])({
                    url: "/api/v1/xpack/license/import",
                    method: "post",
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                    data: e
                })
            }

            function s(e) {
                return Object(a["a"])({
                    disableFlashErrorMsg: !0,
                    url: "/api/v1/settings/ldap/testing/config/",
                    method: "post",
                    data: e
                })
            }

            function o(e) {
                return Object(a["a"])({
                    disableFlashErrorMsg: !0,
                    url: "/api/v1/settings/ldap/testing/login/",
                    method: "post",
                    data: e
                })
            }

            function c() {
                return Object(a["a"])({
                    disableFlashErrorMsg: !0,
                    url: "/api/v1/settings/ldap/cache/refresh/",
                    method: "get"
                })
            }

            function l() {
                return Object(a["a"])({
                    disableFlashErrorMsg: !0,
                    url: "/api/v1/settings/ldap/users/?cache_police=1",
                    method: "get"
                })
            }

            function u(e) {
                return Object(a["a"])({
                    disableFlashErrorMsg: !0,
                    url: "/api/v1/settings/ldap/users/import/",
                    method: "post",
                    data: e
                })
            }

            function d() {
                return Object(a["a"])({
                    url: "/api/v1/settings/public/",
                    method: "get"
                })
            }
        },
        "355b": function(e, t, n) {
            "use strict";
            var a = n("b96c"),
                r = n.n(a);
            r.a
        },
        3561: function(e, t, n) {},
        3758: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("ListTable", e._g(e._b({
                        ref: "ListTable"
                    }, "ListTable", e.$attrs, !1), e.$listeners))
                },
                r = [],
                i = (n("1c01"), n("58b2"), n("8e6e"), n("f3e2"), n("d25f"), n("ac6a"), n("456d"), n("bd86")),
                s = n("579c"),
                o = n("2f62");

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        Object(i["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = {
                    name: "GenericListTable",
                    components: {
                        ListTable: s["a"]
                    },
                    computed: l({}, Object(o["b"])(["currentOrgIsRoot"])),
                    created: function() {
                        var e = this.$attrs["header-actions"] || {};
                        void 0 === e.canCreate && this.currentOrgIsRoot && _.set(this.$attrs, "header-actions.canCreate", !1), void 0 === e.hasImport && this.currentOrgIsRoot && _.set(this.$attrs, "header-actions.hasImport", !1)
                    }
                },
                d = u,
                p = n("2877"),
                m = Object(p["a"])(d, a, r, !1, null, "25ccf5a2", null);
            t["a"] = m.exports
        },
        3763: function(e, t, n) {},
        "3a7c": function(e, t, n) {
            "use strict";
            var a = n("521b"),
                r = n.n(a);
            r.a
        },
        "3b12": function(e, t, n) {},
        4360: function(e, t, n) {
            "use strict";
            n("a481"), n("ac6a"), n("0cd8");
            var a = n("2b0e"),
                r = n("2f62"),
                i = (n("d25f"), {
                    sidebar: function(e) {
                        return e.app.sidebar
                    },
                    device: function(e) {
                        return e.app.device
                    },
                    token: function(e) {
                        return e.users.token
                    },
                    currentOrg: function(e) {
                        return e.users.currentOrg
                    },
                    currentOrgIsDefault: function(e) {
                        return e.users.currentOrg["is_default"]
                    },
                    currentOrgIsRoot: function(e) {
                        return e.users.currentOrg && e.users.currentOrg["is_root"]
                    },
                    currentRole: function(e) {
                        return e.users.currentRole
                    },
                    currentUser: function(e) {
                        return e.users.profile
                    },
                    permission_routes: function(e) {
                        return e.permission.routes
                    },
                    visitedViews: function(e) {
                        return e.tagsView.visitedViews
                    },
                    cachedViews: function(e) {
                        return e.tagsView.cachedViews
                    },
                    publicSettings: function(e) {
                        return e.settings.publicSettings
                    },
                    currentOrgRoles: function(e) {
                        return e.users.roles
                    },
                    currentOrgPerms: function(e) {
                        return e.users.perms
                    },
                    MFAVerifyAt: function(e) {
                        return e.users.MFAVerifyAt
                    },
                    MFA_TTl: function(e) {
                        return e.settings.publicSettings["SECURITY_MFA_VERIFY_TTL"]
                    },
                    tableConfig: function(e) {
                        return e.table.tableConfig
                    },
                    currentUserIsSuperAdmin: function(e) {
                        return e.users.isSuperAdmin
                    },
                    currentUserIsAdmin: function(e) {
                        return e.users.isAdmin
                    },
                    hasValidLicense: function(e) {
                        return e.settings.hasValidLicense
                    },
                    userAdminOrgList: function(e, t) {
                        var n = e.users.orgs;
                        return t.hasValidLicense || (n = n.filter((function(e) {
                            return !e["is_root"]
                        }))), n
                    }
                }),
                s = i;
            a["default"].use(r["a"]);
            var o = n("c653"),
                c = o.keys().reduce((function(e, t) {
                    var n = t.replace(/^\.\/(.*)\.\w+$/, "$1"),
                        a = o(t);
                    return e[n] = a.default, e
                }), {}),
                l = new r["a"].Store({
                    modules: c,
                    getters: s
                });
            t["a"] = l
        },
        4678: function(e, t, n) {
            var a = {
                "./af": "2bfb",
                "./af.js": "2bfb",
                "./ar": "8e73",
                "./ar-dz": "a356",
                "./ar-dz.js": "a356",
                "./ar-kw": "423e",
                "./ar-kw.js": "423e",
                "./ar-ly": "1cfd",
                "./ar-ly.js": "1cfd",
                "./ar-ma": "0a84",
                "./ar-ma.js": "0a84",
                "./ar-sa": "8230",
                "./ar-sa.js": "8230",
                "./ar-tn": "6d83",
                "./ar-tn.js": "6d83",
                "./ar.js": "8e73",
                "./az": "485c",
                "./az.js": "485c",
                "./be": "1fc1",
                "./be.js": "1fc1",
                "./bg": "84aa",
                "./bg.js": "84aa",
                "./bm": "a7fa",
                "./bm.js": "a7fa",
                "./bn": "9043",
                "./bn-bd": "9686",
                "./bn-bd.js": "9686",
                "./bn.js": "9043",
                "./bo": "d26a",
                "./bo.js": "d26a",
                "./br": "6887",
                "./br.js": "6887",
                "./bs": "2554",
                "./bs.js": "2554",
                "./ca": "d716",
                "./ca.js": "d716",
                "./cs": "3c0d",
                "./cs.js": "3c0d",
                "./cv": "03ec",
                "./cv.js": "03ec",
                "./cy": "9797",
                "./cy.js": "9797",
                "./da": "0f14",
                "./da.js": "0f14",
                "./de": "b469",
                "./de-at": "b3eb",
                "./de-at.js": "b3eb",
                "./de-ch": "bb71",
                "./de-ch.js": "bb71",
                "./de.js": "b469",
                "./dv": "598a",
                "./dv.js": "598a",
                "./el": "8d47",
                "./el.js": "8d47",
                "./en-au": "0e6b",
                "./en-au.js": "0e6b",
                "./en-ca": "3886",
                "./en-ca.js": "3886",
                "./en-gb": "39a6",
                "./en-gb.js": "39a6",
                "./en-ie": "e1d3",
                "./en-ie.js": "e1d3",
                "./en-il": "7333",
                "./en-il.js": "7333",
                "./en-in": "ec2e",
                "./en-in.js": "ec2e",
                "./en-nz": "6f50",
                "./en-nz.js": "6f50",
                "./en-sg": "b7e9",
                "./en-sg.js": "b7e9",
                "./eo": "65db",
                "./eo.js": "65db",
                "./es": "898b",
                "./es-do": "0a3c",
                "./es-do.js": "0a3c",
                "./es-mx": "b5b7",
                "./es-mx.js": "b5b7",
                "./es-us": "55c9",
                "./es-us.js": "55c9",
                "./es.js": "898b",
                "./et": "ec18",
                "./et.js": "ec18",
                "./eu": "0ff2",
                "./eu.js": "0ff2",
                "./fa": "8df4",
                "./fa.js": "8df4",
                "./fi": "81e9",
                "./fi.js": "81e9",
                "./fil": "d69a",
                "./fil.js": "d69a",
                "./fo": "0721",
                "./fo.js": "0721",
                "./fr": "9f26",
                "./fr-ca": "d9f8",
                "./fr-ca.js": "d9f8",
                "./fr-ch": "0e49",
                "./fr-ch.js": "0e49",
                "./fr.js": "9f26",
                "./fy": "7118",
                "./fy.js": "7118",
                "./ga": "5120",
                "./ga.js": "5120",
                "./gd": "f6b4",
                "./gd.js": "f6b4",
                "./gl": "8840",
                "./gl.js": "8840",
                "./gom-deva": "aaf2",
                "./gom-deva.js": "aaf2",
                "./gom-latn": "0caa",
                "./gom-latn.js": "0caa",
                "./gu": "e0c5",
                "./gu.js": "e0c5",
                "./he": "c7aa",
                "./he.js": "c7aa",
                "./hi": "dc4d",
                "./hi.js": "dc4d",
                "./hr": "4ba9",
                "./hr.js": "4ba9",
                "./hu": "5b14",
                "./hu.js": "5b14",
                "./hy-am": "d6b6",
                "./hy-am.js": "d6b6",
                "./id": "5038",
                "./id.js": "5038",
                "./is": "0558",
                "./is.js": "0558",
                "./it": "6e98",
                "./it-ch": "6f12",
                "./it-ch.js": "6f12",
                "./it.js": "6e98",
                "./ja": "079e",
                "./ja.js": "079e",
                "./jv": "b540",
                "./jv.js": "b540",
                "./ka": "201b",
                "./ka.js": "201b",
                "./kk": "6d79",
                "./kk.js": "6d79",
                "./km": "e81d",
                "./km.js": "e81d",
                "./kn": "3e92",
                "./kn.js": "3e92",
                "./ko": "22f8",
                "./ko.js": "22f8",
                "./ku": "2421",
                "./ku.js": "2421",
                "./ky": "9609",
                "./ky.js": "9609",
                "./lb": "440c",
                "./lb.js": "440c",
                "./lo": "b29d",
                "./lo.js": "b29d",
                "./lt": "26f9",
                "./lt.js": "26f9",
                "./lv": "b97c",
                "./lv.js": "b97c",
                "./me": "293c",
                "./me.js": "293c",
                "./mi": "688b",
                "./mi.js": "688b",
                "./mk": "6909",
                "./mk.js": "6909",
                "./ml": "02fb",
                "./ml.js": "02fb",
                "./mn": "958b",
                "./mn.js": "958b",
                "./mr": "39bd",
                "./mr.js": "39bd",
                "./ms": "ebe4",
                "./ms-my": "6403",
                "./ms-my.js": "6403",
                "./ms.js": "ebe4",
                "./mt": "1b45",
                "./mt.js": "1b45",
                "./my": "8689",
                "./my.js": "8689",
                "./nb": "6ce3",
                "./nb.js": "6ce3",
                "./ne": "3a39",
                "./ne.js": "3a39",
                "./nl": "facd",
                "./nl-be": "db29",
                "./nl-be.js": "db29",
                "./nl.js": "facd",
                "./nn": "b84c",
                "./nn.js": "b84c",
                "./oc-lnc": "167b",
                "./oc-lnc.js": "167b",
                "./pa-in": "f3ff",
                "./pa-in.js": "f3ff",
                "./pl": "8d57",
                "./pl.js": "8d57",
                "./pt": "f260",
                "./pt-br": "d2d4",
                "./pt-br.js": "d2d4",
                "./pt.js": "f260",
                "./ro": "972c",
                "./ro.js": "972c",
                "./ru": "957c",
                "./ru.js": "957c",
                "./sd": "6784",
                "./sd.js": "6784",
                "./se": "ffff",
                "./se.js": "ffff",
                "./si": "eda5",
                "./si.js": "eda5",
                "./sk": "7be6",
                "./sk.js": "7be6",
                "./sl": "8155",
                "./sl.js": "8155",
                "./sq": "c8f3",
                "./sq.js": "c8f3",
                "./sr": "cf1e",
                "./sr-cyrl": "13e9",
                "./sr-cyrl.js": "13e9",
                "./sr.js": "cf1e",
                "./ss": "52bd",
                "./ss.js": "52bd",
                "./sv": "5fbd",
                "./sv.js": "5fbd",
                "./sw": "74dc",
                "./sw.js": "74dc",
                "./ta": "3de5",
                "./ta.js": "3de5",
                "./te": "5cbb",
                "./te.js": "5cbb",
                "./tet": "576c",
                "./tet.js": "576c",
                "./tg": "3b1b",
                "./tg.js": "3b1b",
                "./th": "10e8",
                "./th.js": "10e8",
                "./tk": "5aff",
                "./tk.js": "5aff",
                "./tl-ph": "0f38",
                "./tl-ph.js": "0f38",
                "./tlh": "cf75",
                "./tlh.js": "cf75",
                "./tr": "0e81",
                "./tr.js": "0e81",
                "./tzl": "cf51",
                "./tzl.js": "cf51",
                "./tzm": "c109",
                "./tzm-latn": "b53d",
                "./tzm-latn.js": "b53d",
                "./tzm.js": "c109",
                "./ug-cn": "6117",
                "./ug-cn.js": "6117",
                "./uk": "ada2",
                "./uk.js": "ada2",
                "./ur": "5294",
                "./ur.js": "5294",
                "./uz": "2e8c",
                "./uz-latn": "010e",
                "./uz-latn.js": "010e",
                "./uz.js": "2e8c",
                "./vi": "2921",
                "./vi.js": "2921",
                "./x-pseudo": "fd7e",
                "./x-pseudo.js": "fd7e",
                "./yo": "7f33",
                "./yo.js": "7f33",
                "./zh-cn": "5c3a",
                "./zh-cn.js": "5c3a",
                "./zh-hk": "49ab",
                "./zh-hk.js": "49ab",
                "./zh-mo": "3a6c",
                "./zh-mo.js": "3a6c",
                "./zh-tw": "90ea",
                "./zh-tw.js": "90ea"
            };

            function r(e) {
                var t = i(e);
                return n(t)
            }

            function i(e) {
                var t = a[e];
                if (!(t + 1)) {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return t
            }
            r.keys = function() {
                return Object.keys(a)
            }, r.resolve = i, e.exports = r, r.id = "4678"
        },
        "46a9": function(e, t, n) {
            "use strict";
            var a = n("c8f7"),
                r = n.n(a);
            r.a
        },
        "47f1": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-table",
                    use: "icon-table-usage",
                    viewBox: "0 0 128 128",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-table"><path d="M.006.064h127.988v31.104H.006V.064zm0 38.016h38.396v41.472H.006V38.08zm0 48.384h38.396v41.472H.006V86.464zM44.802 38.08h38.396v41.472H44.802V38.08zm0 48.384h38.396v41.472H44.802V86.464zM89.598 38.08h38.396v41.472H89.598zm0 48.384h38.396v41.472H89.598z" /><path d="M.006.064h127.988v31.104H.006V.064zm0 38.016h38.396v41.472H.006V38.08zm0 48.384h38.396v41.472H.006V86.464zM44.802 38.08h38.396v41.472H44.802V38.08zm0 48.384h38.396v41.472H44.802V86.464zM89.598 38.08h38.396v41.472H89.598zm0 48.384h38.396v41.472H89.598z" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        4801: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        class: e.grouped ? "el-button-group" : "el-button-ungroup"
                    }, [e._l(e.iActions, (function(t) {
                        return [t.dropdown ? n("el-dropdown", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.dropdown.length > 0,
                                expression: "action.dropdown.length > 0"
                            }],
                            key: t.name,
                            staticClass: "action-item",
                            attrs: {
                                trigger: "click",
                                placement: "bottom-start"
                            },
                            on: {
                                command: e.handleDropdownCallback
                            }
                        }, [n("el-button", e._b({
                            attrs: {
                                size: e.size
                            }
                        }, "el-button", e.cleanButtonAction(t), !1), [e._v("\n        " + e._s(t.title)), n("i", {
                            staticClass: "el-icon-arrow-down el-icon--right"
                        })]), e._v(" "), n("el-dropdown-menu", {
                            attrs: {
                                slot: "dropdown"
                            },
                            slot: "dropdown"
                        }, [e._l(t.dropdown, (function(a) {
                            return [a.group ? n("div", {
                                key: "group:" + a.name,
                                staticClass: "dropdown-menu-title"
                            }, [e._v("\n            " + e._s(a.group) + "\n          ")]) : e._e(), e._v(" "), n("el-dropdown-item", e._b({
                                key: a.name,
                                attrs: {
                                    command: [a, t]
                                }
                            }, "el-dropdown-item", a, !1), [e._v("\n            " + e._s(a.title) + "\n          ")])]
                        }))], 2)], 1) : n("el-button", e._b({
                            key: t.name,
                            staticClass: "action-item",
                            attrs: {
                                size: e.size
                            },
                            on: {
                                click: function(n) {
                                    return e.handleClick(t)
                                }
                            }
                        }, "el-button", e.cleanButtonAction(t), !1), [n("el-tooltip", {
                            attrs: {
                                disabled: !t.tip,
                                content: t.tip,
                                placement: "top"
                            }
                        }, [n("span", [t.fa ? n("i", {
                            class: "fa " + t.fa
                        }) : e._e(), e._v(e._s(t.title) + "\n        ")])])], 1)]
                    }))], 2)
                },
                r = [],
                i = (n("ac4d"), n("8a81"), n("ac6a"), n("7f7f"), n("768b")),
                s = {
                    name: "DataActions",
                    props: {
                        grouped: {
                            type: Boolean,
                            default: !1
                        },
                        size: {
                            type: String,
                            default: "small"
                        },
                        type: {
                            type: String,
                            default: ""
                        },
                        actions: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        }
                    },
                    computed: {
                        iActions: function() {
                            return this.cleanActions(this.actions)
                        }
                    },
                    methods: {
                        handleDropdownCallback: function(e) {
                            var t = this,
                                n = Object(i["a"])(e, 2),
                                a = n[0],
                                r = n[1],
                                s = function() {
                                    return t.$log.debug("No callback found: ", a, r)
                                },
                                o = a.callback;
                            return o || (o = r.callback), o || (o = s), o(a)
                        },
                        handleClick: function(e) {
                            e && e.callback ? e.callback(e) : this.$log.debug("No callback found"), this.$emit("actionClick", e)
                        },
                        checkItem: function(e, t, n) {
                            if (!e) return !0;
                            var a = e[t];
                            return a && "function" === typeof a ? a = a(e) : null == a && (a = void 0 === n || n), a
                        },
                        cleanButtonAction: function(e) {
                            return e = _.cloneDeep(e), delete e["dropdown"], delete e["callback"], delete e["name"], delete e["can"], e
                        },
                        cleanActions: function(e) {
                            var t = [],
                                n = _.cloneDeep(e),
                                a = !0,
                                r = !1,
                                i = void 0;
                            try {
                                for (var s, o = n[Symbol.iterator](); !(a = (s = o.next()).done); a = !0) {
                                    var c = s.value;
                                    if (c) {
                                        var l = Object.assign({}, c),
                                            u = this.checkItem(l, "has");
                                        if (delete l["has"], u) {
                                            l.divided = this.checkItem(l, "divided", !1);
                                            var d = this.checkItem(l, "can");
                                            l.disabled = !d, l.dropdown && (l.dropdown = this.cleanActions(l.dropdown)), t.push(l)
                                        }
                                    }
                                }
                            } catch (p) {
                                r = !0, i = p
                            } finally {
                                try {
                                    a || null == o.return || o.return()
                                } finally {
                                    if (r) throw i
                                }
                            }
                            return t
                        }
                    }
                },
                o = s,
                c = (n("2f25"), n("2877")),
                l = Object(c["a"])(o, a, r, !1, null, "1d7ddb01", null);
            t["a"] = l.exports
        },
        "4b27": function(e, t, n) {
            "use strict";
            var a = n("09c4"),
                r = n.n(a);
            r.a
        },
        "4cf2": function(e, t, n) {
            "use strict";
            (function(e) {
                n("7f7f");
                var a = n("871d");
                a["a"].install = function(e) {
                    e.component(a["a"].name, a["a"])
                };
                var r = null;
                "undefined" !== typeof window ? r = window.Vue : "undefined" !== typeof e && (r = e.Vue), r && r.use(a["a"]), t["a"] = a["a"]
            }).call(this, n("c8ba"))
        },
        "4d15": function(e, t, n) {},
        "4d4a": function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("Page", e._b({}, "Page", e.$attrs, !1), [n("GenericListTable", e._b({
                        ref: "ListTable"
                    }, "GenericListTable", e.$attrs, !1))], 1)
                },
                r = [],
                i = n("83b2"),
                s = n("3758"),
                o = {
                    name: "GenericListPage",
                    components: {
                        Page: i["a"],
                        GenericListTable: s["a"]
                    }
                },
                c = o,
                l = n("2877"),
                u = Object(l["a"])(c, a, r, !1, null, "4d75a81a", null);
            t["a"] = u.exports
        },
        "4df5": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-eye",
                    use: "icon-eye-usage",
                    viewBox: "0 0 128 64",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 64" id="icon-eye"><path d="M127.072 7.994c1.37-2.208.914-5.152-.914-6.87-2.056-1.717-4.797-1.226-6.396.982-.229.245-25.586 32.382-55.74 32.382-29.24 0-55.74-32.382-55.968-32.627-1.6-1.963-4.57-2.208-6.397-.49C-.17 3.086-.399 6.275 1.2 8.238c.457.736 5.94 7.36 14.62 14.72L4.17 35.96c-1.828 1.963-1.6 5.152.228 6.87.457.98 1.6 1.471 2.742 1.471s2.284-.49 3.198-1.472l12.564-13.983c5.94 4.416 13.021 8.587 20.788 11.53l-4.797 17.418c-.685 2.699.686 5.397 3.198 6.133h1.37c2.057 0 3.884-1.472 4.341-3.68L52.6 42.83c3.655.736 7.538 1.227 11.422 1.227 3.883 0 7.767-.49 11.422-1.227l4.797 17.173c.457 2.208 2.513 3.68 4.34 3.68.457 0 .914 0 1.143-.246 2.513-.736 3.883-3.434 3.198-6.133l-4.797-17.172c7.767-2.944 14.848-7.114 20.788-11.53l12.336 13.738c.913.981 2.056 1.472 3.198 1.472s2.284-.49 3.198-1.472c1.828-1.963 1.828-4.906.228-6.87l-11.65-13.001c9.366-7.36 14.849-14.474 14.849-14.474z" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        "4e4f": function(e, t, n) {},
        "4f1e": function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {}, [n("el-button", {
                        staticClass: "hamburger",
                        attrs: {
                            type: "primary",
                            size: "mini"
                        },
                        on: {
                            click: e.toggleClick
                        }
                    }, [n("i", {
                        staticClass: "fa fa-bars",
                        staticStyle: {
                            color: "white",
                            "margin-right": "0"
                        }
                    })])], 1)
                },
                r = [],
                i = {
                    name: "Hamburger",
                    props: {
                        isActive: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    methods: {
                        toggleClick: function() {
                            this.$emit("toggleClick")
                        }
                    }
                },
                s = i,
                o = (n("14fc"), n("2877")),
                c = Object(o["a"])(s, a, r, !1, null, "4f08a6b9", null);
            t["a"] = c.exports
        },
        5016: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-gears",
                    use: "icon-gears-usage",
                    viewBox: "0 0 1098 1024",
                    content: '<symbol class="icon" viewBox="0 0 1098 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-gears"><defs><style type="text/css"></style></defs><path d="M512 512q0-60.571429-42.857143-103.428571t-103.428571-42.857143-103.428571 42.857143-42.857143 103.428571 42.857143 103.428571 103.428571 42.857143 103.428571-42.857143 42.857143-103.428571zm438.857143 292.571429q0-29.714286-21.714286-51.428571t-51.428571-21.714286-51.428571 21.714286-21.714286 51.428571q0 30.285714 21.428571 51.714286t51.714286 21.428571 51.714286-21.428571 21.428571-51.714286zm0-585.142857q0-29.714286-21.714286-51.428571t-51.428571-21.714286-51.428571 21.714286-21.714286 51.428571q0 30.285714 21.428571 51.714286t51.714286 21.428571 51.714286-21.428571 21.428571-51.714286zm-219.428571 240.571429l0 105.714286q0 5.714286-4 11.142857t-9.142857 6l-88.571429 13.714286q-6.285714 20-18.285714 43.428571 19.428571 27.428571 51.428571 65.714286 4 5.714286 4 11.428571 0 6.857143-4 10.857143-13.142857 17.142857-47.142857 51.142857t-44.857143 34q-6.285714 0-12-4l-65.714286-51.428571q-21.142857 10.857143-44 17.714286-6.285714 61.714286-13.142857 88.571429-4 13.714286-17.142857 13.714286l-106.285714 0q-6.285714 0-11.428571-4.285714t-5.714286-10l-13.142857-87.428571q-19.428571-5.714286-42.857143-17.714286l-67.428571 50.857143q-4 4-11.428571 4-6.285714 0-12-4.571429-82.285714-76-82.285714-91.428571 0-5.142857 4-10.857143 5.714286-8 23.428571-30.285714t26.857143-34.857143q-13.142857-25.142857-20-46.857143l-86.857143-13.714286q-5.714286-0.571429-9.714286-5.428571t-4-11.142857l0-105.714286q0-5.714286 4-11.142857t9.142857-6l88.571429-13.714286q6.285714-20 18.285714-43.428571-19.428571-27.428571-51.428571-65.714286-4-6.285714-4-11.428571 0-6.857143 4-11.428571 12.571429-17.142857 46.857143-50.857143t45.142857-33.714286q6.285714 0 12 4l65.714286 51.428571q19.428571-10.285714 44-18.285714 6.285714-61.714286 13.142857-88 4-13.714286 17.142857-13.714286l106.285714 0q6.285714 0 11.428571 4.285714t5.714286 10l13.142857 87.428571q19.428571 5.714286 42.857143 17.714286l67.428571-50.857143q4.571429-4 11.428571-4 6.285714 0 12 4.571429 82.285714 76 82.285714 91.428571 0 5.142857-4 10.857143-6.857143 9.142857-24 30.857143t-25.714286 34.285714q13.142857 27.428571 19.428571 46.857143l86.857143 13.142857q5.714286 1.142857 9.714286 6t4 11.142857zm365.714286 304.571429l0 80q0 9.142857-85.142857 17.714286-6.857143 15.428571-17.142857 29.714286 29.142857 64.571429 29.142857 78.857143 0 2.285714-2.285714 4-69.714286 40.571429-70.857143 40.571429-4.571429 0-26.285714-26.857143t-29.714286-38.857143q-11.428571 1.142857-17.142857 1.142857t-17.142857-1.142857q-8 12-29.714286 38.857143t-26.285714 26.857143q-1.142857 0-70.857143-40.571429-2.285714-1.714286-2.285714-4 0-14.285714 29.142857-78.857143-10.285714-14.285714-17.142857-29.714286-85.142857-8.571429-85.142857-17.714286l0-80q0-9.142857 85.142857-17.714286 7.428571-16.571429 17.142857-29.714286-29.142857-64.571429-29.142857-78.857143 0-2.285714 2.285714-4 2.285714-1.142857 20-11.428571t33.714286-19.428571 17.142857-9.142857q4.571429 0 26.285714 26.571429t29.714286 38.571429q11.428571-1.142857 17.142857-1.142857t17.142857 1.142857q29.142857-40.571429 52.571429-64l3.428571-1.142857q2.285714 0 70.857143 40 2.285714 1.714286 2.285714 4 0 14.285714-29.142857 78.857143 9.714286 13.142857 17.142857 29.714286 85.142857 8.571429 85.142857 17.714286zm0-585.142857l0 80q0 9.142857-85.142857 17.714286-6.857143 15.428571-17.142857 29.714286 29.142857 64.571429 29.142857 78.857143 0 2.285714-2.285714 4-69.714286 40.571429-70.857143 40.571429-4.571429 0-26.285714-26.857143t-29.714286-38.857143q-11.428571 1.142857-17.142857 1.142857t-17.142857-1.142857q-8 12-29.714286 38.857143t-26.285714 26.857143q-1.142857 0-70.857143-40.571429-2.285714-1.714286-2.285714-4 0-14.285714 29.142857-78.857143-10.285714-14.285714-17.142857-29.714286-85.142857-8.571429-85.142857-17.714286l0-80q0-9.142857 85.142857-17.714286 7.428571-16.571429 17.142857-29.714286-29.142857-64.571429-29.142857-78.857143 0-2.285714 2.285714-4 2.285714-1.142857 20-11.428571t33.714286-19.428571 17.142857-9.142857q4.571429 0 26.285714 26.571429t29.714286 38.571429q11.428571-1.142857 17.142857-1.142857t17.142857 1.142857q29.142857-40.571429 52.571429-64l3.428571-1.142857q2.285714 0 70.857143 40 2.285714 1.714286 2.285714 4 0 14.285714-29.142857 78.857143 9.714286 13.142857 17.142857 29.714286 85.142857 8.571429 85.142857 17.714286z" p-id="8200" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        5055: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-users",
                    use: "icon-users-usage",
                    viewBox: "0 0 1098 1024",
                    content: '<symbol class="icon" viewBox="0 0 1098 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-users"><defs><style type="text/css"></style></defs><path d="M338.857143 512q-92.571429 2.857143-151.428571 73.142857l-76.571429 0q-46.857143 0-78.857143-23.142857t-32-67.714286q0-201.714286 70.857143-201.714286 3.428571 0 24.857143 12t55.714286 24.285714 68 12.285714q38.285714 0 76-13.142857-2.857143 21.142857-2.857143 37.714286 0 79.428571 46.285714 146.285714zm612 364q0 68.571429-41.714286 108.285714t-110.857143 39.714286l-499.428571 0q-69.142857 0-110.857143-39.714286t-41.714286-108.285714q0-30.285714 2-59.142857t8-62.285714 15.142857-62 24.571429-55.714286 35.428571-46.285714 48.857143-30.571429 63.714286-11.428571q5.714286 0 24.571429 12.285714t41.714286 27.428571 61.142857 27.428571 77.142857 12.285714 77.142857-12.285714 61.142857-27.428571 41.714286-27.428571 24.571429-12.285714q34.857143 0 63.714286 11.428571t48.857143 30.571429 35.428571 46.285714 24.571429 55.714286 15.142857 62 8 62.285714 2 59.142857zm-585.142857-729.714286q0 60.571429-42.857143 103.428571t-103.428571 42.857143-103.428571-42.857143-42.857143-103.428571 42.857143-103.428571 103.428571-42.857143 103.428571 42.857143 42.857143 103.428571zm402.285714 219.428571q0 90.857143-64.285714 155.142857t-155.142857 64.285714-155.142857-64.285714-64.285714-155.142857 64.285714-155.142857 155.142857-64.285714 155.142857 64.285714 64.285714 155.142857zm329.142857 128.571429q0 44.571429-32 67.714286t-78.857143 23.142857l-76.571429 0q-58.857143-70.285714-151.428571-73.142857 46.285714-66.857143 46.285714-146.285714 0-16.571429-2.857143-37.714286 37.714286 13.142857 76 13.142857 33.714286 0 68-12.285714t55.714286-24.285714 24.857143-12q70.857143 0 70.857143 201.714286zm-73.142857-348q0 60.571429-42.857143 103.428571t-103.428571 42.857143-103.428571-42.857143-42.857143-103.428571 42.857143-103.428571 103.428571-42.857143 103.428571 42.857143 42.857143 103.428571z" p-id="1158" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        5134: function(e, t, n) {},
        "51ff": function(e, t, n) {
            var a = {
                "./coffee.svg": "2873",
                "./dashboard.svg": "f782",
                "./edit.svg": "aa46",
                "./example.svg": "30c3",
                "./eye-open.svg": "d7ec",
                "./eye.svg": "4df5",
                "./form.svg": "eb1b",
                "./gears.svg": "5016",
                "./history.svg": "c023",
                "./inbox.svg": "ec9d",
                "./link.svg": "18f0",
                "./nested.svg": "dcf8",
                "./password.svg": "2a3d",
                "./rocket.svg": "59ac",
                "./sitemap.svg": "ddc3",
                "./table.svg": "47f1",
                "./th.svg": "76da",
                "./tree.svg": "93cd",
                "./user.svg": "b3b5",
                "./users.svg": "5055"
            };

            function r(e) {
                var t = i(e);
                return n(t)
            }

            function i(e) {
                var t = a[e];
                if (!(t + 1)) {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return t
            }
            r.keys = function() {
                return Object.keys(a)
            }, r.resolve = i, e.exports = r, r.id = "51ff"
        },
        "521b": function(e, t, n) {},
        5420: function(e, t, n) {},
        "54dd": function(e, t, n) {
            "use strict";
            var a = n("244a"),
                r = n.n(a);
            r.a
        },
        "555c": function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("DataActions", e._b({
                        attrs: {
                            actions: e.iActions
                        }
                    }, "DataActions", e.$attrs, !1))
                },
                r = [],
                i = n("75fc"),
                s = n("4801"),
                o = {
                    name: "ActionsGroup",
                    components: {
                        DataActions: s["a"]
                    },
                    props: {
                        actions: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        moreActions: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        moreActionsTitle: {
                            type: String,
                            default: function() {
                                return this.$t("common.MoreActions")
                            }
                        },
                        moreActionsType: {
                            type: String,
                            default: "default"
                        },
                        moreActionsPlacement: {
                            type: String,
                            default: "bottom"
                        }
                    },
                    computed: {
                        iActions: function() {
                            var e = Object(i["a"])(this.actions);
                            return this.iMoreAction && this.iMoreAction.dropdown.length > 0 && e.push(this.iMoreAction), e
                        },
                        iMoreAction: function() {
                            return {
                                name: "moreActions",
                                title: this.iMoreActionsTitle,
                                dropdown: this.moreActions || []
                            }
                        },
                        iMoreActionsTitle: function() {
                            return this.moreActionsTitle || this.$t("common.MoreActions")
                        }
                    }
                },
                c = o,
                l = n("2877"),
                u = Object(l["a"])(c, a, r, !1, null, "09402897", null);
            t["a"] = u.exports
        },
        "56d7": function(e, t, n) {
            "use strict";
            n.r(t);
            n("cadf"), n("551c"), n("f751"), n("097d");
            var a = n("2b0e"),
                r = (n("f5df"), n("5c96")),
                i = n.n(r),
                s = (n("0fae"), n("b2d6")),
                o = n.n(s),
                c = (n("b20f"), function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        attrs: {
                            id: "app"
                        }
                    }, [n("router-view")], 1)
                }),
                l = [],
                u = {
                    name: "App"
                },
                d = u,
                p = n("2877"),
                m = Object(p["a"])(d, c, l, !1, null, null, null),
                h = m.exports,
                f = n("4360"),
                g = n("a18c"),
                b = n("0692"),
                v = (n("ac6a"), n("6d67"), n("c00a"));
            a["default"].component("svg-icon", v["a"]);
            var y = n("51ff"),
                w = function(e) {
                    return e.keys().map(e)
                };
            w(y);
            n("96cf");
            var A = n("3b8d"),
                S = n("323e"),
                C = n.n(S),
                k = (n("a5d8"), n("1c01"), n("58b2"), n("8e6e"), n("f3e2"), n("d25f"), n("456d"), n("bd86")),
                O = n("7618"),
                P = (n("57e7"), n("5f87")),
                T = n("84ca"),
                _ = n("be20"),
                x = n("bbcd");

            function D(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? D(Object(n), !0).forEach((function(t) {
                        Object(k["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var U = ["/login", "/core/auth/login/"],
                E = !1;

            function M(e) {
                return new Promise((function(t, n) {
                    return n(e)
                }))
            }

            function R(e) {
                return L.apply(this, arguments)
            }

            function L() {
                return L = Object(A["a"])(regeneratorRuntime.mark((function e(t) {
                    var n, a, r, i;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.to, t.from, a = t.next, -1 !== U.indexOf(n.path) && a(), r = Object(P["c"])(), r) {
                                    e.next = 6;
                                    break
                                }
                                return setTimeout((function() {
                                    window.location = "/core/auth/login/"
                                }), 100), e.abrupt("return", M("No token found in cookie"));
                            case 6:
                                return e.prev = 6, e.next = 9, f["a"].dispatch("users/getProfile");
                            case 9:
                                return e.abrupt("return", e.sent);
                            case 12:
                                return e.prev = 12, e.t0 = e["catch"](6), console.log(e.t0), i = e.t0.response.status, 401 !== i && 403 !== i || setTimeout((function() {
                                    window.location = "/core/auth/login/"
                                }), 100), e.abrupt("return", M("No profile get: " + e.t0));
                            case 18:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [6, 12]
                    ])
                }))), L.apply(this, arguments)
            }

            function $(e) {
                return I.apply(this, arguments)
            }

            function I() {
                return I = Object(A["a"])(regeneratorRuntime.mark((function e(t) {
                    var n;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if (t.to, t.from, t.next, n = f["a"].getters.publicSettings, n) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 5, f["a"].dispatch("settings/getPublicSettings");
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), I.apply(this, arguments)
            }

            function F() {
                return V.apply(this, arguments)
            }

            function V() {
                return V = Object(A["a"])(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                Object(x["a"])().then((function(e) {
                                    f["a"].dispatch("users/setCurrentOrg", e)
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), V.apply(this, arguments)
            }

            function N(e) {
                return B.apply(this, arguments)
            }

            function B() {
                return B = Object(A["a"])(regeneratorRuntime.mark((function e(t) {
                    var n, a;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return t.to, t.from, t.next, e.next = 3, f["a"].dispatch("users/getInOrgs");
                            case 3:
                                if (n = f["a"].getters.userAdminOrgList, n && 0 !== n.length) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return");
                            case 6:
                                return e.next = 8, F();
                            case 8:
                                if (a = f["a"].getters.currentOrg, a && "object" === Object(O["a"])(a)) {
                                    e.next = 12;
                                    break
                                }
                                return _["a"].change2PropOrg(), e.abrupt("return", M("Change prop org"));
                            case 12:
                                if (_["a"].hasCurrentOrgPermission()) {
                                    e.next = 16;
                                    break
                                }
                                return console.debug("Not has current org permission"), _["a"].change2PropOrg(), e.abrupt("return", M("Change prop org"));
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), B.apply(this, arguments)
            }

            function q(e) {
                return H.apply(this, arguments)
            }

            function H() {
                return H = Object(A["a"])(regeneratorRuntime.mark((function e(t) {
                    var n, a, r;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return t.to, t.from, t.next, e.next = 3, f["a"].dispatch("users/getRoles");
                            case 3:
                                if (n = f["a"].getters.currentOrgPerms, a = f["a"].getters.currentRole, !a || !T["a"].hasPerm(n, a)) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return");
                            case 7:
                                if (r = f["a"].getters.userAdminOrgList, r && 0 !== r.length) {
                                    e.next = 13;
                                    break
                                }
                                return a = T["a"].USER_PAGE_REQUIRE_PERM_MIN, e.next = 12, f["a"].dispatch("users/setCurrentRole", a);
                            case 12:
                                return e.abrupt("return");
                            case 13:
                                return a = T["a"].hasAdminPagePerm(n) ? T["a"].getUserInAdminPagePerm(n) : T["a"].getUserInUserPagePerm(n), e.next = 16, f["a"].dispatch("users/setCurrentRole", a);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), H.apply(this, arguments)
            }

            function z(e) {
                return G.apply(this, arguments)
            }

            function G() {
                return G = Object(A["a"])(regeneratorRuntime.mark((function e(t) {
                    var n, a, i, s;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return n = t.to, t.from, a = t.next, e.prev = 1, i = f["a"].getters.currentRole, e.next = 5, f["a"].dispatch("permission/generateRoutes", i);
                            case 5:
                                s = e.sent, g["c"].addRoutes(s), a(j({}, n, {
                                    replace: !0
                                })), e.next = 14;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e["catch"](1), r["Message"].error(e.t0 || "Has Error"), console.log("Error occur: ", e.t0);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                }))), G.apply(this, arguments)
            }

            function K(e) {
                return W.apply(this, arguments)
            }

            function W() {
                return W = Object(A["a"])(regeneratorRuntime.mark((function e(t) {
                    var n;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                t.to, t.from, n = t.next, f["a"].state.users.profile.is_first_login && n("/users/first-login/personal-information-improvement/");
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), W.apply(this, arguments)
            }

            function Q(e) {
                return J.apply(this, arguments)
            }

            function J() {
                return J = Object(A["a"])(regeneratorRuntime.mark((function e(t) {
                    var n, a, r;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.to, a = t.from, r = t.next, !E) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", !0);
                            case 3:
                                return E = !0, e.next = 6, $({
                                    to: n,
                                    from: a,
                                    next: r
                                });
                            case 6:
                                return e.next = 8, R({
                                    to: n,
                                    from: a,
                                    next: r
                                });
                            case 8:
                                return e.next = 10, N({
                                    to: n,
                                    from: a,
                                    next: r
                                });
                            case 10:
                                return e.next = 12, q({
                                    to: n,
                                    from: a,
                                    next: r
                                });
                            case 12:
                                return e.next = 14, z({
                                    to: n,
                                    from: a,
                                    next: r
                                });
                            case 14:
                                return e.next = 16, K({
                                    to: n,
                                    from: a,
                                    next: r
                                });
                            case 16:
                                return e.abrupt("return", !0);
                            case 17:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), J.apply(this, arguments)
            }
            C.a.configure({
                showSpinner: !1
            }), g["c"].beforeEach(function() {
                var e = Object(A["a"])(regeneratorRuntime.mark((function e(t, n, a) {
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return C.a.start(), e.prev = 1, e.next = 4, Q({
                                    to: t,
                                    from: n,
                                    next: a
                                });
                            case 4:
                                a(), e.next = 11;
                                break;
                            case 7:
                                e.prev = 7, e.t0 = e["catch"](1), "Start service error: " + e.t0, console.log(e.t0);
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 7]
                    ])
                })));
                return function(t, n, a) {
                    return e.apply(this, arguments)
                }
            }()), g["c"].afterEach((function() {
                C.a.done()
            }));
            var Y = n("00e7"),
                X = n.n(Y),
                Z = n("85ff"),
                ee = n.n(Z),
                te = !0,
                ne = {
                    isEnabled: !0,
                    logLevel: te ? "error" : "debug",
                    stringifyArguments: !1,
                    showLogLevel: !0,
                    showMethodName: !0,
                    separator: "|",
                    showConsoleColors: !0
                },
                ae = n("9ca8"),
                re = n("b775");
            a["default"].use(i.a, {
                locale: o.a
            }), a["default"].config.productionTip = !1, a["default"].use(X.a), window.$cookie = X.a;
            var ie = n("c1df");
            n("5c3a"), a["default"].use(n("2ead"), {
                moment: ie
            }), a["default"].use(ee.a, ne), a["default"].component("echarts", ae["a"]), window._ = n("2ef0"), a["default"].prototype.$axios = re["a"], a["default"].prototype.$eventBus = new a["default"], new a["default"]({
                el: "#app",
                i18n: b["a"],
                router: g["c"],
                store: f["a"],
                render: function(e) {
                    return e(h)
                }
            })
        },
        "56f5": function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("el-select", e._g(e._b({
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: !e.initialized,
                            expression: "!initialized"
                        }, {
                            name: "loadmore",
                            rawName: "v-loadmore",
                            value: e.loadMore,
                            expression: "loadMore"
                        }],
                        ref: "select",
                        staticClass: "select2",
                        attrs: {
                            options: e.iOptions,
                            remote: e.remote,
                            "remote-method": e.filterOptions,
                            multiple: e.multiple,
                            clearable: e.clearable,
                            filterable: "",
                            "popper-append-to-body": ""
                        },
                        on: {
                            change: e.onChange,
                            "visible-change": e.onVisibleChange
                        },
                        model: {
                            value: e.iValue,
                            callback: function(t) {
                                e.iValue = t
                            },
                            expression: "iValue"
                        }
                    }, "el-select", e.$attrs, !1), e.$listeners), e._l(e.iOptions, (function(t) {
                        return n("el-option", {
                            key: t.value,
                            attrs: {
                                label: t.label,
                                value: t.value,
                                disabled: e.checkDisabled(t)
                            }
                        })
                    })), 1)
                },
                r = [],
                i = (n("386d"), n("d25f"), n("2caf"), n("57e7"), n("ac6a"), n("f3e2"), n("d92a"), n("96cf"), n("3b8d")),
                s = (n("7f7f"), n("6d67"), n("c5f6"), n("2934")),
                o = {
                    name: "Select2",
                    directives: {
                        loadmore: {
                            bind: function(e, t) {
                                var n = e.querySelector(".el-select-dropdown .el-select-dropdown__wrap");
                                n.addEventListener("scroll", (function() {
                                    var e = this.scrollHeight - this.scrollTop - 600 <= this.clientHeight;
                                    e && t.value()
                                }))
                            }
                        }
                    },
                    props: {
                        options: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        url: {
                            type: String,
                            default: ""
                        },
                        ajax: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        multiple: {
                            type: Boolean,
                            default: !0
                        },
                        clearable: {
                            type: Boolean,
                            default: !0
                        },
                        value: {
                            type: [Array, String, Number, Boolean],
                            default: function() {
                                return this.multiple ? [] : ""
                            }
                        },
                        disabledValues: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        }
                    },
                    data: function() {
                        var e = 10,
                            t = {
                                search: "",
                                page: 1,
                                hasMore: !0,
                                pageSize: e
                            };
                        return {
                            loading: !1,
                            initialized: !1,
                            defaultParams: _.cloneDeep(t),
                            params: _.cloneDeep(t),
                            iOptions: this.options || [],
                            initialOptions: [],
                            remote: !0
                        }
                    },
                    computed: {
                        selectRef: function() {
                            return this.$refs.select
                        },
                        optionsValues: function() {
                            return this.iOptions.map((function(e) {
                                return e.value
                            }))
                        },
                        iValue: {
                            set: function(e) {
                                var t = !this.value || 0 === this.value.length;
                                t && !this.initialized || this.$emit("input", e)
                            },
                            get: function() {
                                return this.value
                            }
                        },
                        iAjax: function() {
                            var e = 10,
                                t = function(e) {
                                    var t = e.page || 1,
                                        n = (t - 1) * e.pageSize,
                                        a = {
                                            offset: n,
                                            limit: e.pageSize
                                        };
                                    return e = Object.assign(e, a), delete e["page"], delete e["pageSize"], e
                                },
                                n = function(e) {
                                    return {
                                        label: e.name,
                                        value: e.id
                                    }
                                },
                                a = this.ajax.transformOption || n,
                                r = function(e) {
                                    var t = e.results;
                                    t = t.map(a);
                                    var n = !!e.next,
                                        r = e.count;
                                    return {
                                        results: t,
                                        pagination: n,
                                        total: r
                                    }
                                },
                                i = {
                                    url: "",
                                    pageSize: e,
                                    makeParams: t,
                                    transformOption: n,
                                    processResults: r
                                };
                            return Object.assign(i, this.ajax, this.url ? {
                                url: this.url
                            } : {})
                        }
                    },
                    watch: {
                        iAjax: function(e, t) {
                            this.$log.debug("Select url changed: ", t, " => ", e), this.refresh()
                        },
                        value: function(e) {
                            this.iValue = e
                        }
                    },
                    mounted: function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                            var t = this;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.initialized) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, this.initialSelect();
                                    case 3:
                                        setTimeout((function() {
                                            t.iValue = t.value, t.initialized = !0
                                        }));
                                    case 4:
                                        this.$nextTick((function() {
                                            var e = t.$refs.select.elFormItem;
                                            e && e.clearValidate && e.clearValidate()
                                        }));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));

                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    methods: {
                        loadMore: function() {
                            var e = Object(i["a"])(regeneratorRuntime.mark((function e(t) {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.iAjax.url) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (this.params.hasMore) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            return this.loading = !0, this.params.page = this.params.page ? this.params.page + 1 : 1, n = this.getOptions, t || (t = n), e.next = 10, t();
                                        case 10:
                                            this.loading = !1;
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        resetParams: function() {
                            this.params = _.cloneDeep(this.defaultParams)
                        },
                        safeMakeParams: function(e) {
                            return e = _.cloneDeep(e), delete e["hasMore"], this.iAjax.makeParams(e)
                        },
                        filterOptions: function(e) {
                            this.resetParams(), this.iOptions = [], this.params.search = e, this.getOptions()
                        },
                        getInitialOptions: function() {
                            var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                                var t, n, a = this;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t = this.safeMakeParams(this.params), e.next = 3, this.$axios.get(this.iAjax.url, {
                                                params: t
                                            });
                                        case 3:
                                            if (n = e.sent, n = this.iAjax.processResults.bind(this)(n), n.results.forEach((function(e) {
                                                    a.initialOptions.push(e), -1 === a.optionsValues.indexOf(e.value) && a.addOption(e)
                                                })), n.pagination) {
                                                e.next = 13;
                                                break
                                            }
                                            return this.$emit("loadInitialOptionsDone", this.initialOptions), this.params.hasMore = !1, this.resetParams(), e.abrupt("return", !0);
                                        case 13:
                                            return e.next = 15, this.loadMore(this.getInitialOptions);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getOptions: function() {
                            var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                                var t, n, a, r = this;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t = this.safeMakeParams(this.params), e.next = 3, this.$axios.get(this.iAjax.url, {
                                                params: t
                                            });
                                        case 3:
                                            n = e.sent, a = this.iAjax.processResults.bind(this)(n), a.pagination || (this.params.hasMore = !1), a.results.forEach((function(e) {
                                                -1 === r.optionsValues.indexOf(e.value) && r.addOption(e)
                                            }));
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        initialSelect: function() {
                            var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                                var t, n;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this.iAjax.url) {
                                                e.next = 14;
                                                break
                                            }
                                            if (!this.value || 0 === this.value.length) {
                                                e.next = 11;
                                                break
                                            }
                                            return this.$log.debug("Start init select2 value, ", this.value), t = this.value, Array.isArray(t) || (t = [t]), e.next = 7, Object(s["a"])(t);
                                        case 7:
                                            return n = e.sent, this.params.spm = n["spm"], e.next = 11, this.getInitialOptions();
                                        case 11:
                                            return e.next = 13, this.getOptions();
                                        case 13:
                                            0 === this.iOptions.length && (this.remote = !1);
                                        case 14:
                                            this.iValue = this.value;
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        refresh: function() {
                            this.resetParams(), this.iOptions = [], this.getOptions()
                        },
                        addOption: function(e) {
                            this.iOptions.push(e)
                        },
                        getOptionsByValues: function(e) {
                            return this.iOptions.filter((function(t) {
                                return -1 !== e.indexOf(t.value)
                            }))
                        },
                        getSelectedOptions: function() {
                            var e = this.iValue;
                            return this.iOptions.filter((function(t) {
                                return -1 !== e.indexOf(t.value)
                            }))
                        },
                        clearSelected: function() {
                            this.iValue = []
                        },
                        checkDisabled: function(e) {
                            return void 0 === e.disabled ? -1 !== this.disabledValues.indexOf(e.value) : e.disabled
                        },
                        onChange: function(e) {
                            var t = this.getSelectedOptions();
                            this.$log.debug("Current select options: ", t), this.$emit("changeOptions", t), this.$emit("change", t)
                        },
                        onVisibleChange: function(e) {
                            !e && this.params.search && (this.refresh(), this.$log.debug("Visible change, refresh select2"))
                        }
                    }
                },
                c = o,
                l = (n("54dd"), n("2877")),
                u = Object(l["a"])(c, a, r, !1, null, "4870d45d", null);
            t["a"] = u.exports
        },
        "579c": function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("TableAction", e._b({
                        attrs: {
                            "table-url": e.tableUrl,
                            "search-table": e.search,
                            "date-pick": e.handleDateChange,
                            "selected-rows": e.selectedRows,
                            "reload-table": e.reloadTable
                        }
                    }, "TableAction", e.headerActions, !1)), e._v(" "), n("IBox", {
                        staticClass: "table-content"
                    }, [n("AutoDataTable", e._g({
                        ref: "dataTable",
                        attrs: {
                            "filter-table": e.filter,
                            config: e.iTableConfig
                        },
                        on: {
                            "selection-change": e.handleSelectionChange
                        }
                    }, e.$listeners))], 1)], 1)
                },
                r = [],
                i = (n("8ea5"), n("386d"), n("88b2")),
                s = n("e67a"),
                o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "table-header"
                    }, [e._t("header", [n("div", {
                        staticClass: "table-header-left-side"
                    }, [e.hasLeftActions ? n("LeftSide", e._g(e._b({
                        attrs: {
                            "selected-rows": e.selectedRows,
                            "table-url": e.tableUrl
                        }
                    }, "LeftSide", e.$attrs, !1), e.$listeners)) : n("span", {
                        staticStyle: {
                            display: "flex",
                            "flex-direction": "row"
                        }
                    }, [e.hasSearch ? n("AutoDataSearch", e._b({
                        staticClass: "right-side-item action-search",
                        on: {
                            tagSearch: e.handleTagSearch
                        }
                    }, "AutoDataSearch", e.iSearchTableConfig, !1)) : e._e(), e._v(" "), e.hasDatePicker ? n("DatetimeRangePicker", e._b({
                        staticClass: "datepicker",
                        on: {
                            dateChange: e.handleDateChange
                        }
                    }, "DatetimeRangePicker", e.datePicker, !1)) : e._e()], 1)], 1), e._v(" "), n("div", {
                        staticClass: "table-action-right-side"
                    }, [e.hasLeftActions && e.hasSearch ? n("AutoDataSearch", e._b({
                        staticClass: "right-side-item action-search",
                        on: {
                            tagSearch: e.handleTagSearch
                        }
                    }, "AutoDataSearch", e.iSearchTableConfig, !1)) : e._e(), e._v(" "), e.hasDatePicker && e.hasLeftActions ? n("DatetimeRangePicker", e._b({
                        staticClass: "datepicker",
                        on: {
                            dateChange: e.handleDateChange
                        }
                    }, "DatetimeRangePicker", e.datePicker, !1)) : e._e(), e._v(" "), e.hasRightActions ? n("RightSide", e._g(e._b({
                        attrs: {
                            "selected-rows": e.selectedRows,
                            "table-url": e.tableUrl
                        }
                    }, "RightSide", e.$attrs, !1), e.$listeners)) : e._e()], 1)])], 2)
                },
                c = [],
                l = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("TagSearch", e._g(e._b({
                        attrs: {
                            options: e.iOption
                        }
                    }, "TagSearch", e.$attrs, !1), e.$listeners))
                },
                u = [],
                d = (n("57e7"), n("6d67"), n("6762"), n("2fdb"), n("d25f"), n("768b")),
                p = (n("ac6a"), n("ffc1"), n("96cf"), n("3b8d")),
                m = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "filter-field"
                    }, [n("el-cascader", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.options.length > 0,
                            expression: "options.length > 0"
                        }],
                        ref: "Cascade",
                        attrs: {
                            options: e.options,
                            props: e.config
                        },
                        on: {
                            change: e.handleMenuItemChange
                        }
                    }), e._v(" "), e._l(e.filterTags, (function(t, a) {
                        return n("el-tag", {
                            key: a,
                            staticClass: "filter-tag",
                            attrs: {
                                name: a,
                                closable: "",
                                size: "small",
                                type: "info",
                                "disable-transitions": !0
                            },
                            on: {
                                close: function(t) {
                                    return e.handleTagClose(a)
                                },
                                click: function(n) {
                                    return e.handleTagClick(t, a)
                                }
                            }
                        }, [t.label ? n("strong", [e._v(e._s(t.label + ":"))]) : e._e(), e._v(" "), t.valueLabel ? n("span", [e._v(e._s(t.valueLabel))]) : n("span", [e._v(e._s(t.value))])])
                    })), e._v(" "), e.keyLabel ? n("span", {
                        staticClass: "filterTitle",
                        attrs: {
                            slot: "prefix"
                        },
                        slot: "prefix"
                    }, [e._v(e._s(e.keyLabel + ":"))]) : e._e(), e._v(" "), n("el-input", {
                        ref: "SearchInput",
                        staticClass: "search-input",
                        class: e.options.length < 1 ? "search-input2" : "",
                        attrs: {
                            placeholder: e.placeholder
                        },
                        on: {
                            blur: function(t) {
                                e.focus = !1
                            },
                            focus: function(t) {
                                e.focus = !0
                            },
                            change: e.handleConfirm
                        },
                        model: {
                            value: e.filterValue,
                            callback: function(t) {
                                e.filterValue = t
                            },
                            expression: "filterValue"
                        }
                    })], 2)
                },
                h = [],
                f = (n("456d"), n("ac4d"), n("8a81"), {
                    name: "TagSearch",
                    props: {
                        config: {
                            type: Object,
                            default: function() {}
                        },
                        options: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        default: {
                            type: Object,
                            default: null
                        }
                    },
                    data: function() {
                        return {
                            filterKey: "",
                            filterValue: "",
                            valueLabel: "",
                            filterTags: this.default || {},
                            focus: !1
                        }
                    },
                    computed: {
                        keyLabel: function() {
                            var e = !0,
                                t = !1,
                                n = void 0;
                            try {
                                for (var a, r = this.options[Symbol.iterator](); !(e = (a = r.next()).done); e = !0) {
                                    var i = a.value;
                                    if (i.value === this.filterKey) return i.label
                                }
                            } catch (s) {
                                t = !0, n = s
                            } finally {
                                try {
                                    e || null == r.return || r.return()
                                } finally {
                                    if (t) throw n
                                }
                            }
                            return ""
                        },
                        filterMaps: function() {
                            var e = {};
                            for (var t in this.filterTags) {
                                var n = this.filterTags[t]["value"];
                                "" === t && (t = "search"), e[t] = n
                            }
                            return e
                        },
                        placeholder: function() {
                            return this.focus && this.filterKey ? this.$t("common.EnterForSearch") : this.$t("common.Search")
                        }
                    },
                    watch: {},
                    mounted: function() {
                        var e = this;
                        setTimeout((function() {
                            if (Object.keys(e.filterMaps).length > 0) return e.$emit("tagSearch", e.filterMaps)
                        }), 400)
                    },
                    methods: {
                        getValueLabel: function(e, t) {
                            var n = !0,
                                a = !1,
                                r = void 0;
                            try {
                                for (var i, s = this.options[Symbol.iterator](); !(n = (i = s.next()).done); n = !0) {
                                    var o = i.value;
                                    if (o.value === e && o.children) {
                                        var c = !0,
                                            l = !1,
                                            u = void 0;
                                        try {
                                            for (var d, p = o.children[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                                                var m = d.value;
                                                if (m.value === t) return m.label
                                            }
                                        } catch (h) {
                                            l = !0, u = h
                                        } finally {
                                            try {
                                                c || null == p.return || p.return()
                                            } finally {
                                                if (l) throw u
                                            }
                                        }
                                    }
                                }
                            } catch (h) {
                                a = !0, r = h
                            } finally {
                                try {
                                    n || null == s.return || s.return()
                                } finally {
                                    if (a) throw r
                                }
                            }
                            return ""
                        },
                        handleMenuItemChange: function(e) {
                            var t = this;
                            0 !== e.length && (1 === e.length ? (this.filterKey = e[0], this.$refs.SearchInput.focus()) : 2 === e.length && (this.filterKey = e[0], this.filterValue = e[1], this.valueLabel = this.getValueLabel(e[0], e[1]), this.handleConfirm()), this.$nextTick((function() {
                                return t.$refs.Cascade.handleClear()
                            })))
                        },
                        handleTagClose: function(e) {
                            return this.$delete(this.filterTags, e), this.$emit("tagSearch", this.filterMaps), !0
                        },
                        handleConfirm: function() {
                            this.filterValue && !this.filterKey && (this.filterKey = "search");
                            var e = {
                                key: this.filterKey,
                                label: this.keyLabel,
                                value: this.filterValue,
                                valueLabel: this.valueLabel
                            };
                            this.$set(this.filterTags, this.filterKey, e), this.$emit("tagSearch", this.filterMaps), this.filterKey = "", this.filterValue = "", this.valueLabel = ""
                        },
                        handleTagClick: function(e, t) {
                            var n = !1,
                                a = !0,
                                r = !1,
                                i = void 0;
                            try {
                                for (var s, o = this.options[Symbol.iterator](); !(a = (s = o.next()).done); a = !0) {
                                    var c = s.value;
                                    c.value === e.key && ("choice" === c.type && (n = !0), "boolean" === c.type && (n = !0))
                                }
                            } catch (l) {
                                r = !0, i = l
                            } finally {
                                try {
                                    a || null == o.return || o.return()
                                } finally {
                                    if (r) throw i
                                }
                            }
                            n || (0 !== this.filterValue.length && this.handleConfirm(), this.$delete(this.filterTags, t), this.filterKey = e.key, this.filterValue = e.value, this.$refs.SearchInput.focus())
                        }
                    }
                }),
                g = f,
                b = (n("9f53"), n("2877")),
                v = Object(b["a"])(g, m, h, !1, null, "ff5b30a0", null),
                y = v.exports,
                w = {
                    name: "AutoDataSearch",
                    components: {
                        TagSearch: y
                    },
                    props: {
                        url: {
                            type: String,
                            default: ""
                        },
                        options: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        exclude: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        }
                    },
                    data: function() {
                        return {
                            internalOptions: []
                        }
                    },
                    computed: {
                        iOption: function() {
                            return this.options.concat(this.internalOptions)
                        }
                    },
                    watch: {
                        options: function() {},
                        url: function() {
                            this.genericOptions()
                        }
                    },
                    mounted: function() {
                        this.url && this.genericOptions()
                    },
                    methods: {
                        genericOptions: function() {
                            var e = Object(p["a"])(regeneratorRuntime.mark((function e() {
                                var t, n, a, r, i, s, o, c, l;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t = this, t.internalOptions = [], e.next = 4, this.optionUrlMeta();
                                        case 4:
                                            n = e.sent, a = n.actions["GET"] || {}, r = 0, i = Object.entries(a);
                                        case 7:
                                            if (!(r < i.length)) {
                                                e.next = 20;
                                                break
                                            }
                                            if (s = Object(d["a"])(i[r], 2), o = s[0], c = s[1], c.filter) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.abrupt("continue", 17);
                                        case 11:
                                            if (!t.exclude.includes(o)) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.abrupt("continue", 17);
                                        case 13:
                                            l = {
                                                label: c.label,
                                                type: c.type,
                                                value: o
                                            }, "choice" === c.type && c.choices && (l.children = c.choices.map((function(e) {
                                                return "boolean" === typeof e.value ? e.value ? {
                                                    label: e.display_name,
                                                    value: "True"
                                                } : {
                                                    label: e.display_name,
                                                    value: "False"
                                                } : {
                                                    label: e.display_name,
                                                    value: e.value
                                                }
                                            }))), "boolean" === c.type && (l.children = [{
                                                label: this.$t("common.Yes"),
                                                value: !0
                                            }, {
                                                label: this.$t("common.No"),
                                                value: !1
                                            }]), t.internalOptions.push(l);
                                        case 17:
                                            r++, e.next = 7;
                                            break;
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        optionUrlMeta: function() {
                            var e = -1 === this.url.indexOf("?") ? "".concat(this.url, "?draw=1&display=1") : "".concat(this.url, "&draw=1&display=1");
                            return this.$store.dispatch("common/getUrlMeta", {
                                url: e
                            })
                        }
                    }
                },
                A = w,
                S = Object(b["a"])(A, l, u, !1, null, "7d1db672", null),
                C = S.exports,
                k = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return e.hasLeftActions ? n("DataActions", e._b({
                        staticClass: "header-action",
                        attrs: {
                            actions: e.iActions
                        }
                    }, "DataActions", e.$attrs, !1)) : e._e()
                },
                O = [],
                P = n("7618"),
                T = n("75fc"),
                x = (n("7f7f"), n("a481"), n("0692")),
                D = n("4801"),
                j = n("2934");
            n("f3e2");

            function U(e, t, n) {
                var a = n.selectedRows,
                    r = n.reloadTable,
                    i = [],
                    s = _.cloneDeep(e);
                return s.forEach((function(e) {
                    e.has = E(e, "has", !0, {
                        selectedRows: a,
                        reloadTable: r
                    }), e.can = E(e, "can", !0, {
                        selectedRows: a,
                        reloadTable: r
                    }), e.dropdown || (e.callback = M(e, {
                        selectedRows: a,
                        reloadTable: r
                    })), i.push(e)
                })), i
            }

            function E(e, t, n, a) {
                var r = a.selectedRows,
                    i = a.reloadTable,
                    s = e[t];
                if (void 0 === n && (n = !0), void 0 === s && (s = n), "function" !== typeof s) return s;

                function o() {
                    return s({
                        selectedRows: r,
                        reloadTable: i
                    })
                }
                return o
            }

            function M(e, t) {
                var n = t.selectedRows,
                    a = t.reloadTable,
                    r = e.callback;
                return r || "function" === typeof callback ? function() {
                    return r({
                        selectedRows: n,
                        reloadTable: a
                    })
                } : null
            }
            var R = {
                    type: [Boolean, Function],
                    default: !0
                },
                L = {
                    type: [Boolean, Function],
                    default: !1
                },
                $ = {
                    name: "LeftSide",
                    components: {
                        DataActions: D["a"]
                    },
                    props: {
                        hasLeftActions: R,
                        hasCreate: R,
                        canCreate: R,
                        createRoute: {
                            type: [String, Object, Function],
                            default: function() {
                                return this.$route.name.replace("List", "Create")
                            }
                        },
                        createInNewPage: {
                            type: Boolean,
                            default: !1
                        },
                        hasBulkDelete: R,
                        hasBulkUpdate: L,
                        hasMoreActions: R,
                        tableUrl: {
                            type: String,
                            default: ""
                        },
                        reloadTable: {
                            type: Function,
                            default: function() {}
                        },
                        performBulkDelete: {
                            type: Function,
                            default: null
                        },
                        selectedRows: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        extraActions: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        extraMoreActions: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        moreActionsTitle: {
                            type: String,
                            default: null
                        },
                        moreCreates: {
                            type: Object,
                            default: null
                        },
                        createTitle: {
                            type: String,
                            default: function() {
                                return x["a"].t("common.Create")
                            }
                        }
                    },
                    data: function() {
                        var e = [{
                            name: "actionCreate",
                            title: this.createTitle,
                            type: "primary",
                            has: this.hasCreate && !this.moreCreates,
                            can: this.canCreate,
                            callback: this.handleCreate
                        }];
                        if (this.moreCreates) {
                            var t = {
                                    name: "actionMoreCreate",
                                    title: this.createTitle,
                                    type: "primary",
                                    has: !0,
                                    can: this.canCreate,
                                    dropdown: [],
                                    callback: this.handleCreate
                                },
                                n = Object.assign(t, this.moreCreates);
                            e.push(n)
                        }
                        return {
                            defaultActions: e,
                            defaultMoreActions: [{
                                title: this.$t("common.deleteSelected"),
                                name: "actionDeleteSelected",
                                has: this.hasBulkDelete,
                                can: function(e) {
                                    var t = e.selectedRows;
                                    return t.length > 0
                                },
                                callback: this.defaultBulkDeleteCallback
                            }, {
                                title: this.$t("common.updateSelected"),
                                name: "actionUpdateSelected",
                                has: this.hasBulkUpdate,
                                can: function(e) {
                                    var t = e.selectedRows;
                                    return t.length > 0
                                },
                                callback: this.handleBulkUpdate
                            }]
                        }
                    },
                    computed: {
                        iActions: function() {
                            return [].concat(Object(T["a"])(this.actions), [this.moreAction])
                        },
                        actions: function() {
                            var e = [].concat(Object(T["a"])(this.defaultActions), Object(T["a"])(this.extraActions));
                            return U(e, !0, {
                                selectedRows: this.selectedRows,
                                reloadTable: this.reloadTable
                            })
                        },
                        moreAction: function() {
                            if (this.hasMoreActions) {
                                var e = [].concat(Object(T["a"])(this.defaultMoreActions), Object(T["a"])(this.extraMoreActions));
                                return e = U(e, !0, {
                                    selectedRows: this.selectedRows,
                                    reloadTable: this.reloadTable
                                }), {
                                    name: "moreActions",
                                    title: this.moreActionsTitle || this.$t("common.MoreActions"),
                                    dropdown: e
                                }
                            }
                        },
                        hasSelectedRows: function() {
                            return this.selectedRows.length > 0
                        }
                    },
                    methods: {
                        handleCreate: function() {
                            var e;
                            if ("string" === typeof this.createRoute ? (e = {
                                    name: this.createRoute
                                }, e.name = this.createRoute) : "function" === typeof this.createRoute ? e = this.createRoute() : "object" === Object(P["a"])(this.createRoute) && (e = this.createRoute), this.$log.debug("handle create"), this.createInNewPage) {
                                var t = this.$router.resolve(e),
                                    n = t.href;
                                window.open(n, "_blank")
                            } else this.$router.push(e)
                        },
                        defaultBulkDeleteCallback: function(e) {
                            var t = this,
                                n = e.selectedRows,
                                a = e.reloadTable,
                                r = this.$t("common.deleteWarningMsg") + " " + n.length + " " + this.$t("common.rows") + " ?",
                                i = this.$t("common.Info"),
                                s = this.performBulkDelete || this.defaultPerformBulkDelete;
                            this.$alert(r, i, {
                                type: "warning",
                                confirmButtonClass: "el-button--danger",
                                showCancelButton: !0,
                                beforeClose: function() {
                                    var e = Object(p["a"])(regeneratorRuntime.mark((function e(r, i, o) {
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    if ("confirm" === r) {
                                                        e.next = 2;
                                                        break
                                                    }
                                                    return e.abrupt("return", o());
                                                case 2:
                                                    return i.confirmButtonLoading = !0, e.prev = 3, e.next = 6, s(n);
                                                case 6:
                                                    o(), a(), t.$message.success(t.$t("common.bulkDeleteSuccessMsg")), e.next = 14;
                                                    break;
                                                case 11:
                                                    e.prev = 11, e.t0 = e["catch"](3), t.$message.error(t.$t("common.bulkDeleteErrorMsg") + e.t0);
                                                case 14:
                                                    return e.prev = 14, i.confirmButtonLoading = !1, e.finish(14);
                                                case 17:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [3, 11, 14, 17]
                                        ])
                                    })));

                                    function r(t, n, a) {
                                        return e.apply(this, arguments)
                                    }
                                    return r
                                }()
                            }).catch((function() {}))
                        },
                        defaultPerformBulkDelete: function() {
                            var e = Object(p["a"])(regeneratorRuntime.mark((function e(t) {
                                var n, a, r;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.map((function(e) {
                                                return e.id
                                            })), e.next = 3, Object(j["a"])(n);
                                        case 3:
                                            return a = e.sent, r = -1 === this.tableUrl.indexOf("?") ? "".concat(this.tableUrl, "?spm=") + a.spm : "".concat(this.tableUrl, "&spm=") + a.spm, e.abrupt("return", this.$axios.delete(r));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        handleBulkUpdate: function(e) {
                            e.selectedRows
                        }
                    }
                },
                I = $,
                F = Object(b["a"])(I, k, O, !1, null, "467fadb7", null),
                V = F.exports,
                N = n("753e"),
                B = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("ActionsGroup", {
                        staticClass: "right-side-actions right-side-item",
                        attrs: {
                            "is-fa": !0,
                            actions: e.rightSideActions
                        }
                    }), e._v(" "), n("ImExportDialog", e._b({
                        attrs: {
                            "selected-rows": e.selectedRows,
                            "export-options": e.iExportOptions,
                            "import-options": e.iImportOptions
                        }
                    }, "ImExportDialog", e.$attrs, !1))], 1)
                },
                q = [],
                H = (n("d92a"), n("555c")),
                z = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("ExportDialog", e._g(e._b({
                        attrs: {
                            "selected-rows": e.selectedRows
                        }
                    }, "ExportDialog", e.exportOptions, !1), e.$listeners)), e._v(" "), n("ImportDialog", e._g(e._b({
                        attrs: {
                            "selected-rows": e.selectedRows
                        }
                    }, "ImportDialog", e.importOptions, !1), e.$listeners))], 1)
                },
                G = [],
                K = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [e.mfaDialogShow ? n("MFAVerifyDialog", {
                        on: {
                            MFAVerifyDone: e.showExportDialog,
                            MFAVerifyCancel: e.handleExportCancel
                        }
                    }) : e._e(), e._v(" "), e.exportDialogShow ? n("Dialog", {
                        attrs: {
                            title: e.$t("common.Export"),
                            visible: e.exportDialogShow,
                            "destroy-on-close": !0
                        },
                        on: {
                            "update:visible": function(t) {
                                e.exportDialogShow = t
                            },
                            confirm: function(t) {
                                return e.handleExportConfirm()
                            },
                            cancel: function(t) {
                                return e.handleExportCancel()
                            }
                        }
                    }, [n("el-form", {
                        staticStyle: {
                            "padding-left": "50px"
                        },
                        attrs: {
                            "label-position": "left"
                        }
                    }, [n("el-form-item", {
                        attrs: {
                            label: e.$t("common.fileType"),
                            "label-width": "100px"
                        }
                    }, [n("el-radio-group", {
                        model: {
                            value: e.exportTypeOption,
                            callback: function(t) {
                                e.exportTypeOption = t
                            },
                            expression: "exportTypeOption"
                        }
                    }, e._l(e.exportTypeOptions, (function(t) {
                        return n("el-radio", {
                            key: t.value,
                            staticStyle: {
                                padding: "10px 20px"
                            },
                            attrs: {
                                label: t.value,
                                disabled: !t.can
                            }
                        }, [e._v(e._s(t.label))])
                    })), 1)], 1), e._v(" "), n("el-form-item", {
                        staticClass: "export-form",
                        attrs: {
                            label: this.$t("common.imExport.ExportRange"),
                            "label-width": "100px"
                        }
                    }, [n("el-radio-group", {
                        model: {
                            value: e.exportOption,
                            callback: function(t) {
                                e.exportOption = t
                            },
                            expression: "exportOption"
                        }
                    }, e._l(e.exportOptions, (function(t) {
                        return n("el-radio", {
                            key: t.value,
                            staticClass: "export-item",
                            attrs: {
                                label: t.value,
                                disabled: !t.can
                            }
                        }, [e._v(e._s(t.label))])
                    })), 1)], 1)], 1)], 1) : e._e()], 1)
                },
                W = [],
                Q = n("9039"),
                J = n("9789"),
                Y = n("5f9c"),
                X = {
                    name: "ExportDialog",
                    components: {
                        Dialog: Q["a"],
                        MFAVerifyDialog: J["a"]
                    },
                    props: {
                        selectedRows: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        url: {
                            type: String,
                            default: ""
                        },
                        beforeExport: {
                            type: Function,
                            default: function() {}
                        },
                        mfaVerifyRequired: {
                            type: Boolean,
                            default: !1
                        },
                        performExport: {
                            type: Function,
                            default: function(e, t, n, a) {
                                return this.defaultPerformExport(e, t, n, a)
                            }
                        },
                        canExportAll: {
                            type: Boolean,
                            default: !0
                        },
                        canExportSelected: {
                            type: Boolean,
                            default: !0
                        },
                        canExportFiltered: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function() {
                        return {
                            exportDialogShow: !1,
                            exportOption: "all",
                            exportTypeOption: "csv",
                            meta: {},
                            mfaVerified: !1,
                            mfaDialogShow: !1
                        }
                    },
                    computed: {
                        hasSelected: function() {
                            return this.selectedRows.length > 0
                        },
                        tableQuery: function() {
                            var e = this.$parent.$parent.$parent.$parent;
                            if (!e) return {};
                            var t = e.dataTable.getQuery();
                            return delete t["limit"], delete t["offset"], delete t["date_from"], delete t["date_to"], t
                        },
                        tableHasQuery: function() {
                            return Object.keys(this.tableQuery).length > 0
                        },
                        exportOptions: function() {
                            return [{
                                label: this.$t("common.imExport.ExportAll"),
                                value: "all",
                                can: this.canExportAll && !this.tableHasQuery
                            }, {
                                label: this.$t("common.imExport.ExportOnlySelectedItems"),
                                value: "selected",
                                can: this.selectedRows.length > 0 && this.canExportSelected
                            }, {
                                label: this.$t("common.imExport.ExportOnlyFiltered"),
                                value: "filtered",
                                can: this.tableHasQuery && this.canExportFiltered
                            }]
                        },
                        exportTypeOptions: function() {
                            return [{
                                label: "CSV",
                                value: "csv",
                                can: !0
                            }, {
                                label: "Excel",
                                value: "xlsx",
                                can: !0
                            }]
                        }
                    },
                    mounted: function() {
                        var e = this;
                        this.$eventBus.$on("showExportDialog", (function(t) {
                            t.selectedRows;
                            var n = t.url;
                            t.name;
                            (n === e.url || n.indexOf(e.url) > -1 || n.indexOf("account") > -1) && e.showExportDialog()
                        }))
                    },
                    methods: {
                        showExportDialog: function() {
                            this.mfaVerifyRequired ? this.mfaDialogShow ? this.exportDialogShow = !0 : this.mfaDialogShow = !0 : this.exportDialogShow = !0
                        },
                        downloadCsv: function(e) {
                            var t = document.createElement("a");
                            t.href = e, t.click(), window.URL.revokeObjectURL(e)
                        },
                        defaultPerformExport: function() {
                            var e = Object(p["a"])(regeneratorRuntime.mark((function e(t, n, a, r) {
                                var i, s, o, c, l, u, d;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (i = "".concat(this.url), s = Object.assign({}, a), "selected" !== n) {
                                                e.next = 10;
                                                break
                                            }
                                            for (o = [], c = t, l = 0; l < c.length; l++) o.push(c[l].id);
                                            return e.next = 8, Object(j["a"])(o);
                                        case 8:
                                            u = e.sent, s["spm"] = u.spm;
                                        case 10:
                                            return s["format"] = r, d = (i.indexOf("?") > -1 ? "&" : "?") + Y["d"](s, "=", "&"), e.abrupt("return", this.downloadCsv(i + d));
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t(t, n, a, r) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        handleExport: function() {
                            var e = Object(p["a"])(regeneratorRuntime.mark((function e() {
                                var t, n;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t = this.$parent.$parent.$parent.$parent, n = t["dataTable"].getQuery(), delete n["limit"], delete n["offset"], e.next = 6, this.beforeExport();
                                        case 6:
                                            return e.abrupt("return", this.performExport(this.selectedRows, this.exportOption, n, this.exportTypeOption));
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        handleExportConfirm: function() {
                            var e = Object(p["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.handleExport();
                                        case 2:
                                            this.exportDialogShow = !1, this.mfaDialogShow = !1;
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        handleExportCancel: function() {
                            this.exportDialogShow = !1, this.mfaDialogShow = !1
                        }
                    }
                },
                Z = X,
                ee = (n("e7c1"), Object(b["a"])(Z, K, W, !1, null, "6171ab16", null)),
                te = ee.exports,
                ne = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("Dialog", {
                        staticClass: "importDialog",
                        attrs: {
                            title: e.importTitle,
                            visible: e.showImportDialog,
                            "destroy-on-close": !0,
                            "close-on-click-modal": !1,
                            "loading-status": e.loadStatus,
                            width: "80%",
                            "show-cancel": !1,
                            "show-confirm": !1
                        },
                        on: {
                            "update:visible": function(t) {
                                e.showImportDialog = t
                            },
                            close: e.handleImportCancel
                        }
                    }, [e.showTable ? n("div", {
                        staticClass: "importTableZone"
                    }, [n("ImportTable", {
                        ref: "importTable",
                        attrs: {
                            "json-data": e.jsonData,
                            "import-option": e.importOption,
                            url: e.url
                        },
                        on: {
                            cancel: e.cancelUpload,
                            finish: e.closeDialog
                        }
                    })], 1) : n("el-form", {
                        staticStyle: {
                            "padding-left": "50px"
                        },
                        attrs: {
                            "label-position": "left"
                        }
                    }, [n("el-form-item", {
                        attrs: {
                            label: e.$t("common.Import"),
                            "label-width": "100px"
                        }
                    }, [n("el-radio", {
                        staticClass: "export-item",
                        attrs: {
                            label: "create"
                        },
                        model: {
                            value: e.importOption,
                            callback: function(t) {
                                e.importOption = t
                            },
                            expression: "importOption"
                        }
                    }, [e._v(e._s(this.$t("common.Create")))]), e._v(" "), n("el-radio", {
                        staticClass: "export-item",
                        attrs: {
                            label: "update"
                        },
                        model: {
                            value: e.importOption,
                            callback: function(t) {
                                e.importOption = t
                            },
                            expression: "importOption"
                        }
                    }, [e._v(e._s(this.$t("common.Update")))]), e._v(" "), n("div", {
                        staticStyle: {
                            "line-height": "1.5"
                        }
                    }, [n("span", {
                        staticClass: "el-upload__tip"
                    }, [e._v("\n          " + e._s(e.downloadTemplateTitle) + "\n          "), n("el-link", {
                        staticStyle: {
                            "padding-left": "10px"
                        },
                        attrs: {
                            type: "success",
                            underline: !1
                        },
                        on: {
                            click: function(t) {
                                return e.downloadTemplateFile("csv")
                            }
                        }
                    }, [e._v(" CSV ")]), e._v(" "), n("el-link", {
                        staticStyle: {
                            "padding-left": "10px"
                        },
                        attrs: {
                            type: "success",
                            underline: !1
                        },
                        on: {
                            click: function(t) {
                                return e.downloadTemplateFile("xlsx")
                            }
                        }
                    }, [e._v(" XLSX ")])], 1)])], 1), e._v(" "), n("el-form-item", {
                        staticClass: "file-uploader",
                        attrs: {
                            label: e.$t("common.Upload"),
                            "label-width": "100px"
                        }
                    }, [n("el-upload", {
                        ref: "upload",
                        attrs: {
                            drag: "",
                            action: "string",
                            "list-type": "text/csv",
                            limit: 1,
                            "auto-upload": !1,
                            "on-change": e.onFileChange,
                            "before-upload": e.beforeUpload,
                            accept: ".csv,.xlsx"
                        }
                    }, [n("i", {
                        staticClass: "el-icon-upload"
                    }), e._v(" "), n("div", {
                        staticClass: "el-upload__text"
                    }, [e._v(e._s(e.$t("common.imExport.dragUploadFileInfo")))]), e._v(" "), n("div", {
                        staticClass: "el-upload__tip",
                        attrs: {
                            slot: "tip"
                        },
                        slot: "tip"
                    }, [n("span", {
                        class: {
                            hasError: e.hasFileFormatOrSizeError
                        }
                    }, [e._v(e._s(e.$t("common.imExport.uploadCsvLth10MHelpText")))]), e._v(" "), e.renderError ? n("div", {
                        staticClass: "hasError"
                    }, [e._v(e._s(e.renderError))]) : e._e()])])], 1)], 1)], 1)
                },
                ae = [],
                re = (n("6b54"), n("87b3"), function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("el-row", [n("el-col", {
                        attrs: {
                            span: 8
                        }
                    }, [n("div", {
                        staticClass: "tableFilter"
                    }, [n("el-radio-group", {
                        attrs: {
                            size: "small"
                        },
                        model: {
                            value: e.importStatusFilter,
                            callback: function(t) {
                                e.importStatusFilter = t
                            },
                            expression: "importStatusFilter"
                        }
                    }, [n("el-radio-button", {
                        attrs: {
                            label: "all"
                        }
                    }, [e._v(e._s(e.$t("common.Total")))]), e._v(" "), n("el-radio-button", {
                        attrs: {
                            label: "ok"
                        }
                    }, [e._v(e._s(e.$t("common.Success")))]), e._v(" "), n("el-radio-button", {
                        attrs: {
                            label: "error"
                        }
                    }, [e._v(e._s(e.$t("common.Failed")))]), e._v(" "), n("el-radio-button", {
                        attrs: {
                            label: "pending"
                        }
                    }, [e._v(e._s(e.$t("common.Pending")))])], 1)], 1)]), e._v(" "), n("el-col", {
                        staticStyle: {
                            "text-align": "center"
                        },
                        attrs: {
                            span: 8
                        }
                    }, [n("span", {
                        staticClass: "summary-item summary-total"
                    }, [e._v(" " + e._s(e.$t("common.Total")) + ": " + e._s(e.totalCount))]), e._v(" "), n("span", {
                        staticClass: "summary-item summary-success"
                    }, [e._v(" " + e._s(e.$t("common.Success")) + ": " + e._s(e.successCount))]), e._v(" "), n("span", {
                        staticClass: "summary-item summary-failed"
                    }, [e._v(" " + e._s(e.$t("common.Failed")) + ": " + e._s(e.failedCount))]), e._v(" "), n("span", {
                        staticClass: "summary-item summary-pending"
                    }, [e._v(" " + e._s(e.$t("common.Pending")) + ": " + e._s(e.pendingCount))])])], 1), e._v(" "), n("div", {
                        staticClass: "row"
                    }, [n("el-progress", {
                        attrs: {
                            percentage: e.processedPercent
                        }
                    })], 1), e._v(" "), e.tableGenDone ? n("DataTable", {
                        ref: "dataTable",
                        staticClass: "importTable",
                        attrs: {
                            id: "importTable",
                            config: e.tableConfig
                        }
                    }) : e._e(), e._v(" "), n("div", {
                        staticClass: "row",
                        staticStyle: {
                            "padding-top": "20px"
                        }
                    }, [n("div", {
                        staticStyle: {
                            float: "right"
                        }
                    }, [n("el-button", {
                        attrs: {
                            size: "small"
                        },
                        on: {
                            click: e.performCancel
                        }
                    }, [e._v(e._s(e.$t("common.Cancel")))]), e._v(" "), n("el-button", {
                        attrs: {
                            size: "small",
                            type: "primary"
                        },
                        on: {
                            click: e.performImportAction
                        }
                    }, [e._v(e._s(e.importActionTitle))])], 1)])], 1)
                }),
                ie = [],
                se = (n("2caf"), n("7845")),
                oe = n("cf45"),
                ce = n("e975"),
                le = {
                    name: "ImportTable",
                    components: {
                        DataTable: se["a"]
                    },
                    props: {
                        jsonData: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        url: {
                            type: String,
                            required: !0
                        },
                        importOption: {
                            type: String,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            columns: [],
                            importStatusFilter: "all",
                            iTotalData: [],
                            tableConfig: {
                                hasSelection: !1,
                                columns: [],
                                totalData: [],
                                paginationSize: 10,
                                paginationSizes: [10],
                                tableAttrs: {
                                    stripe: !0,
                                    border: !0,
                                    fit: !0,
                                    tooltipEffect: "dark"
                                }
                            },
                            tableGenDone: !1,
                            importTaskStatus: "pending",
                            importTaskResult: "",
                            hasImport: !1,
                            hasContinueButton: !1,
                            importActions: {
                                import: this.$t("common.Import"),
                                continue: this.$t("common.Continue"),
                                stop: this.$t("common.Stop"),
                                finished: this.$t("common.Finished")
                            }
                        }
                    },
                    computed: {
                        tableColumnNameMapper: function() {
                            var e = {},
                                t = !0,
                                n = !1,
                                a = void 0;
                            try {
                                for (var r, i = this.tableConfig.columns[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                                    var s = r.value;
                                    e[s["prop"]] = s["label"]
                                }
                            } catch (o) {
                                n = !0, a = o
                            } finally {
                                try {
                                    t || null == i.return || i.return()
                                } finally {
                                    if (n) throw a
                                }
                            }
                            return e
                        },
                        importAction: function() {
                            switch (this.importTaskStatus) {
                                case "pending":
                                    return "import";
                                case "started":
                                    return "stop"
                            }
                            return this.totalCount === this.successCount ? "finished" : "continue"
                        },
                        importActionTitle: function() {
                            return this.importActions[this.importAction]
                        },
                        successData: function() {
                            return this.iTotalData.filter((function(e) {
                                return "ok" === e["@status"]
                            }))
                        },
                        failedData: function() {
                            return this.iTotalData.filter((function(e) {
                                return "object" === Object(P["a"])(e["@status"]) && "error" === e["@status"].name
                            }))
                        },
                        pendingData: function() {
                            return this.iTotalData.filter((function(e) {
                                return "pending" === e["@status"]
                            }))
                        },
                        totalCount: function() {
                            return this.iTotalData.length
                        },
                        successCount: function() {
                            return this.successData.length
                        },
                        failedCount: function() {
                            return this.failedData.length
                        },
                        pendingCount: function() {
                            return this.pendingData.length
                        },
                        processedCount: function() {
                            return this.totalCount - this.pendingCount
                        },
                        processedPercent: function() {
                            return 0 === this.totalCount ? 0 : Math.round(this.processedCount / this.totalCount * 100)
                        },
                        elDataTable: function() {
                            return this.$refs["dataTable"].dataTable
                        }
                    },
                    watch: {
                        importStatusFilter: function(e) {
                            this.tableConfig.totalData = "all" === e ? this.iTotalData : "error" === e ? this.failedData : this.iTotalData.filter((function(t) {
                                return t["@status"] === e
                            }))
                        }
                    },
                    mounted: function() {
                        this.generateTable()
                    },
                    methods: {
                        generateTableColumns: function(e, t) {
                            var n = this,
                                a = this,
                                r = [{
                                    prop: "@status",
                                    label: a.$t("common.Status"),
                                    width: "80px",
                                    align: "center",
                                    formatter: ce["k"],
                                    formatterArgs: {
                                        iconChoices: {
                                            ok: "fa-check text-primary",
                                            error: "fa-times text-danger",
                                            pending: "fa-clock-o"
                                        },
                                        getChoicesKey: function(e) {
                                            return "ok" === e || "pending" === e ? e : "error"
                                        },
                                        getTip: function(e) {
                                            return "ok" === e ? a.$t("common.Success") : "pending" === e ? a.$t("common.Pending") : e && "error" === e.name ? e.error : ""
                                        },
                                        hasTips: !0
                                    }
                                }],
                                i = !0,
                                s = !1,
                                o = void 0;
                            try {
                                for (var c, l = function() {
                                        var e = c.value,
                                            a = t.map((function(t) {
                                                var n = e[1],
                                                    a = t[n];
                                                return t && ("number" === typeof a || a && a.length) ? a.length : 0
                                            })),
                                            i = 10 * Math.max.apply(Math, Object(T["a"])(a));
                                        if (0 === i) return "continue";
                                        i = Math.min(180, i), i = Math.max(i, 100), r.push({
                                            prop: e[1],
                                            label: e[0],
                                            minWidth: i + "px",
                                            showOverflowTooltip: !0,
                                            formatter: ce["i"],
                                            formatterArgs: {
                                                onEnter: function(e) {
                                                    var t = e.row,
                                                        a = e.col,
                                                        r = e.oldValue,
                                                        i = e.newValue,
                                                        s = a.prop;
                                                    t["@status"] = "pending", n.$log.debug("Set value ".concat(r, " => ").concat(i)), n.$set(t, s, i)
                                                }
                                            }
                                        })
                                    }, u = e[Symbol.iterator](); !(i = (c = u.next()).done); i = !0) l()
                            } catch (d) {
                                s = !0, o = d
                            } finally {
                                try {
                                    i || null == u.return || u.return()
                                } finally {
                                    if (s) throw o
                                }
                            }
                            return r
                        },
                        generateTableData: function(e, t) {
                            var n = this,
                                a = [];
                            return t.forEach((function(e) {
                                n.$set(e, "@status", "pending"), a.push(e)
                            })), a
                        },
                        generateTable: function() {
                            var e = this,
                                t = this.jsonData["title"],
                                n = this.jsonData["data"],
                                a = this.generateTableColumns(t, n),
                                r = this.generateTableData(t, n);
                            this.tableConfig.columns = a, this.tableGenDone = !0, setTimeout((function() {
                                e.iTotalData = r, e.tableConfig.totalData = r
                            }), 200)
                        },
                        beautifyErrorData: function(e) {
                            if ("string" === typeof e) return e;
                            if (Array.isArray(e)) return e;
                            if ("object" !== Object(P["a"])(e)) return e;
                            for (var t = [], n = 0, a = Object.entries(e); n < a.length; n++) {
                                var r = Object(d["a"])(a[n], 2),
                                    i = r[0],
                                    s = r[1];
                                "object" === Object(P["a"])(s) && (s = this.beautifyErrorData(s));
                                var o = this.tableColumnNameMapper[i];
                                o || (o = i), t.push("".concat(o, ": ").concat(s))
                            }
                            return t
                        },
                        performCancel: function() {
                            this.performStop(), this.$emit("cancel")
                        },
                        performFinish: function() {
                            this.performStop(), this.$emit("finish")
                        },
                        taskIsStopped: function() {
                            return "stopped" === this.importTaskStatus
                        },
                        performImportAction: function() {
                            switch (this.importAction) {
                                case "continue":
                                    return this.performContinue();
                                case "import":
                                    return this.performUpload();
                                case "stop":
                                    return this.performStop();
                                case "finished":
                                    return this.performFinish()
                            }
                        },
                        performContinue: function() {
                            var e = this;
                            if ("done" === this.importTaskStatus) {
                                var t = !0,
                                    n = !1,
                                    a = void 0;
                                try {
                                    for (var r, i = this.failedData[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                                        var s = r.value;
                                        s["@status"] = "pending"
                                    }
                                } catch (o) {
                                    n = !0, a = o
                                } finally {
                                    try {
                                        t || null == i.return || i.return()
                                    } finally {
                                        if (n) throw a
                                    }
                                }
                                this.tableConfig.totalData = this.pendingData
                            }
                            this.importTaskStatus = "started", setTimeout((function() {
                                e.performUpload()
                            }), 100)
                        },
                        performStop: function() {
                            this.importTaskStatus = "stopped"
                        },
                        performUploadCurrentPageData: function() {
                            var e = Object(p["a"])(regeneratorRuntime.mark((function e() {
                                var t, n, a, r, i, s, o;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            t = this.elDataTable.getPageData(), n = !0, a = !1, r = void 0, e.prev = 4, i = t[Symbol.iterator]();
                                        case 6:
                                            if (n = (s = i.next()).done) {
                                                e.next = 19;
                                                break
                                            }
                                            if (o = s.value, "pending" === o["@status"]) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.abrupt("continue", 16);
                                        case 10:
                                            if (!this.taskIsStopped()) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 12:
                                            return e.next = 14, this.performUploadObject(o);
                                        case 14:
                                            return e.next = 16, Object(oe["n"])(100);
                                        case 16:
                                            n = !0, e.next = 6;
                                            break;
                                        case 19:
                                            e.next = 25;
                                            break;
                                        case 21:
                                            e.prev = 21, e.t0 = e["catch"](4), a = !0, r = e.t0;
                                        case 25:
                                            e.prev = 25, e.prev = 26, n || null == i.return || i.return();
                                        case 28:
                                            if (e.prev = 28, !a) {
                                                e.next = 31;
                                                break
                                            }
                                            throw r;
                                        case 31:
                                            return e.finish(28);
                                        case 32:
                                            return e.finish(25);
                                        case 33:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [4, 21, 25, 33],
                                    [26, , 28, 32]
                                ])
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        performUpload: function() {
                            var e = Object(p["a"])(regeneratorRuntime.mark((function e() {
                                var t;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            this.importTaskStatus = "started", this.importStatusFilter = "pending";
                                        case 2:
                                            if (this.taskIsStopped()) {
                                                e.next = 16;
                                                break
                                            }
                                            return e.next = 5, this.performUploadCurrentPageData();
                                        case 5:
                                            if (t = this.elDataTable.hasNextPage(), !t || this.taskIsStopped()) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.next = 9, this.elDataTable.gotoNextPage();
                                        case 9:
                                            return e.next = 11, Object(oe["n"])(100);
                                        case 11:
                                            e.next = 14;
                                            break;
                                        case 13:
                                            return e.abrupt("break", 16);
                                        case 14:
                                            e.next = 2;
                                            break;
                                        case 16:
                                            0 === this.pendingCount && (this.importTaskStatus = "done"), this.failedCount > 0 && this.$message.error(this.$t("common.imExport.hasImportErrorItemMsg") + "");
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        performUpdateObject: function() {
                            var e = Object(p["a"])(regeneratorRuntime.mark((function e(t) {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return n = Object(oe["j"])(this.url, t.id), e.abrupt("return", this.$axios.put(n, t, {
                                                disableFlashErrorMsg: !0
                                            }));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        performUploadObject: function() {
                            var e = Object(p["a"])(regeneratorRuntime.mark((function e(t) {
                                var n, a, r, i;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return n = this.performCreateObject, "update" === this.importOption && (n = this.performUpdateObject), e.prev = 2, e.next = 5, n.bind(this)(t);
                                        case 5:
                                            t["@status"] = "ok", e.next = 13;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e["catch"](2), r = null === e.t0 || void 0 === e.t0 || null === (a = e.t0.response) || void 0 === a ? void 0 : a.data, i = this.beautifyErrorData(r), t["@status"] = {
                                                name: "error",
                                                error: i
                                            };
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [2, 8]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        performCreateObject: function() {
                            var e = Object(p["a"])(regeneratorRuntime.mark((function e(t) {
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.$axios.post(this.url, t, {
                                                disableFlashErrorMsg: !0
                                            }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        keepElementInViewport: function() {
                            var e = document.getElementById("importTable"),
                                t = null === e || void 0 === e ? void 0 : e.getElementsByClassName("pendingStatus")[0];
                            if (t) {
                                var n = t.parentElement.parentElement.parentElement.parentElement,
                                    a = n.getBoundingClientRect(),
                                    r = window.innerHeight || document.documentElement.clientHeight;
                                r = .97 * r - 150;
                                var i = a.top >= 0 && a.left >= 0 && a.bottom <= r;
                                i || n.scrollIntoView({
                                    behavior: "auto",
                                    block: "start",
                                    inline: "start"
                                })
                            }
                        }
                    }
                },
                ue = le,
                de = (n("be41"), Object(b["a"])(ue, re, ie, !1, null, "272246a8", null)),
                pe = de.exports,
                me = {
                    name: "ImportDialog",
                    components: {
                        Dialog: Q["a"],
                        ImportTable: pe
                    },
                    props: {
                        selectedRows: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        url: {
                            type: String,
                            default: function() {
                                return ""
                            }
                        }
                    },
                    data: function() {
                        return {
                            showImportDialog: !1,
                            importOption: "create",
                            errorMsg: "",
                            loadStatus: !1,
                            importTypeOption: "csv",
                            importTypeIsCsv: !0,
                            showTable: !1,
                            renderError: "",
                            hasFileFormatOrSizeError: !1,
                            jsonData: {}
                        }
                    },
                    computed: {
                        hasSelected: function() {
                            return this.selectedRows.length > 0
                        },
                        uploadHelpTextClass: function() {
                            var e = ["el-upload__tip"];
                            return this.isCsv || e.push("error-msg"), e
                        },
                        downloadTemplateTitle: function() {
                            return "create" === this.importOption ? this.$t("common.imExport.downloadImportTemplateMsg") : this.$t("common.imExport.downloadUpdateTemplateMsg")
                        },
                        importTitle: function() {
                            return "create" === this.importOption ? this.$t("common.Import") + this.$t("common.Create") : this.$t("common.Import") + this.$t("common.Update")
                        }
                    },
                    watch: {
                        importOption: function(e) {
                            this.showTable = !1
                        }
                    },
                    mounted: function() {
                        var e = this;
                        this.$eventBus.$on("showImportDialog", (function(t) {
                            var n = t.url;
                            n === e.url && (e.showImportDialog = !0)
                        }))
                    },
                    methods: {
                        closeDialog: function() {
                            this.showImportDialog = !1
                        },
                        cancelUpload: function() {
                            this.showTable = !1, this.renderError = "", this.jsonData = {}
                        },
                        onFileChange: function(e, t) {
                            var n = this;
                            if (t.splice(0, t.length), "ready" === e.status && this.beforeUpload(e)) {
                                var a = e.name.indexOf("csv") > -1,
                                    r = new URL(this.url, "http://localhost");
                                r.pathname += "render-to-json/";
                                var i = r.toString().replace("http://localhost", "");
                                this.$axios.post(i, e.raw, {
                                    headers: {
                                        "Content-Type": a ? "text/csv" : "text/xlsx"
                                    },
                                    disableFlashErrorMsg: !0
                                }).then((function(e) {
                                    n.jsonData = e, n.showTable = !0
                                })).catch((function(e) {
                                    t.splice(0, t.length), n.renderError = Object(oe["i"])(e)
                                })).finally((function() {
                                    n.loadStatus = !1
                                }))
                            }
                        },
                        beforeUpload: function(e) {
                            var t = e.size / 1024 / 1024 < 30;
                            return t || (this.hasFileFormatOrSizeError = !0), t
                        },
                        downloadTemplateFile: function() {
                            var e = Object(p["a"])(regeneratorRuntime.mark((function e(t) {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.getDownloadTemplateUrl(t);
                                        case 2:
                                            n = e.sent, window.open(n);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getDownloadTemplateUrl: function() {
                            var e = Object(p["a"])(regeneratorRuntime.mark((function e(t) {
                                var n, a, r, i, s, o, c, l, u, d;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (n = "create" === this.importOption ? "import" : "update", a = "format=".concat(t, "&template=").concat(n), !("update" === this.importOption && this.selectedRows.length > 0)) {
                                                e.next = 29;
                                                break
                                            }
                                            for (r = [], i = !0, s = !1, o = void 0, e.prev = 7, c = this.selectedRows[Symbol.iterator](); !(i = (l = c.next()).done); i = !0) u = l.value, r.push(u.id);
                                            e.next = 15;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e["catch"](7), s = !0, o = e.t0;
                                        case 15:
                                            e.prev = 15, e.prev = 16, i || null == c.return || c.return();
                                        case 18:
                                            if (e.prev = 18, !s) {
                                                e.next = 21;
                                                break
                                            }
                                            throw o;
                                        case 21:
                                            return e.finish(18);
                                        case 22:
                                            return e.finish(15);
                                        case 23:
                                            return e.next = 25, Object(j["a"])(r);
                                        case 25:
                                            d = e.sent, a += "&spm=".concat(d.spm), e.next = 30;
                                            break;
                                        case 29:
                                            a += "&limit=1";
                                        case 30:
                                            return e.abrupt("return", -1 === this.url.indexOf("?") ? "".concat(this.url, "?").concat(a) : "".concat(this.url, "&").concat(a));
                                        case 31:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [7, 11, 15, 23],
                                    [16, , 18, 22]
                                ])
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        catchError: function(e) {
                            console.log(e)
                        },
                        onSuccess: function(e) {
                            this.errorMsg = "", this.$message.success(e)
                        },
                        downloadCsv: function(e) {
                            var t = document.createElement("a");
                            t.href = e, t.click(), window.URL.revokeObjectURL(e)
                        },
                        handleImportConfirm: function() {
                            var e = Object(p["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            this.$refs["importTable"].performUpload();
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        handleImportCancel: function() {
                            this.showImportDialog = !1, this.showTable = !1, this.renderError = "", this.jsonData = {}
                        }
                    }
                },
                he = me,
                fe = (n("864d"), Object(b["a"])(he, ne, ae, !1, null, "18d89c72", null)),
                ge = fe.exports,
                be = {
                    name: "ImExportDialog",
                    components: {
                        ExportDialog: te,
                        ImportDialog: ge
                    },
                    props: {
                        selectedRows: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        exportOptions: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        importOptions: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        }
                    },
                    data: function() {
                        return {}
                    }
                },
                ve = be,
                ye = Object(b["a"])(ve, z, G, !1, null, "2a141802", null),
                we = ye.exports,
                Ae = {
                    type: Boolean,
                    default: !0
                },
                Se = {
                    name: "RightSide",
                    components: {
                        ActionsGroup: H["a"],
                        ImExportDialog: we
                    },
                    props: {
                        tableUrl: {
                            type: String,
                            default: ""
                        },
                        hasExport: Ae,
                        exportOptions: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        handleExportClick: {
                            type: Function,
                            default: function(e) {
                                var t = e.selectedRows;
                                this.$eventBus.$emit("showExportDialog", {
                                    selectedRows: t,
                                    url: this.tableUrl,
                                    name: this.name
                                })
                            }
                        },
                        hasImport: Ae,
                        importOptions: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        handleImportClick: {
                            type: Function,
                            default: function(e) {
                                var t = e.selectedRows;
                                this.$eventBus.$emit("showImportDialog", {
                                    selectedRows: t,
                                    url: this.tableUrl,
                                    name: this.name
                                })
                            }
                        },
                        hasColumnSetting: Ae,
                        handleTableSettingClick: {
                            type: Function,
                            default: function(e) {
                                var t = e.selectedRows;
                                this.$eventBus.$emit("showColumnSettingPopover", {
                                    url: this.tableUrl,
                                    row: t,
                                    name: this.name
                                })
                            }
                        },
                        hasRefresh: Ae,
                        handleRefreshClick: {
                            type: Function,
                            default: function() {
                                this.reloadTable()
                            }
                        },
                        selectedRows: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        reloadTable: {
                            type: Function,
                            default: function() {}
                        },
                        extraRightSideActions: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        }
                    },
                    data: function() {
                        return {
                            defaultRightSideActions: [{
                                name: "actionColumnSetting",
                                fa: "fa-cog",
                                tip: this.$t("common.CustomCol"),
                                has: this.hasColumnSetting,
                                callback: this.handleTableSettingClick.bind(this)
                            }, {
                                name: "actionImport",
                                fa: "fa-upload",
                                tip: this.$t("common.Import"),
                                has: this.hasImport,
                                callback: this.handleImportClick.bind(this)
                            }, {
                                name: "actionExport",
                                fa: "fa-download",
                                tip: this.$t("common.Export"),
                                has: this.hasExport,
                                callback: this.handleExportClick.bind(this)
                            }, {
                                name: "actionRefresh",
                                fa: "fa-refresh",
                                tip: this.$t("common.Refresh"),
                                has: this.hasRefresh,
                                callback: this.handleRefreshClick.bind(this)
                            }],
                            dialogExportVisible: !1
                        }
                    },
                    computed: {
                        rightSideActions: function() {
                            var e = [].concat(Object(T["a"])(this.defaultRightSideActions), Object(T["a"])(this.extraRightSideActions)),
                                t = {
                                    selectedRows: this.selectedRows,
                                    reloadTable: this.reloadTable
                                };
                            return U(e, !0, t)
                        },
                        hasSelectedRows: function() {
                            return this.selectedRows.length > 0
                        },
                        iImportOptions: function() {
                            return Object(oe["b"])(this.importOptions, {
                                url: this.tableUrl
                            })
                        },
                        iExportOptions: function() {
                            var e = Object(oe["b"])(this.exportOptions, {
                                url: this.tableUrl
                            });
                            return e
                        }
                    },
                    methods: {
                        handleTagSearch: function(e) {
                            this.searchTable(e)
                        }
                    }
                },
                Ce = Se,
                ke = (n("fb2f"), Object(b["a"])(Ce, B, q, !1, null, "6d1e3dcc", null)),
                Oe = ke.exports,
                Pe = {
                    type: Boolean,
                    default: !0
                },
                Te = {
                    type: Boolean,
                    default: !1
                },
                _e = {
                    name: "TableAction",
                    components: {
                        AutoDataSearch: C,
                        LeftSide: V,
                        DatetimeRangePicker: N["a"],
                        RightSide: Oe
                    },
                    props: {
                        hasLeftActions: Pe,
                        hasSearch: Pe,
                        hasRightActions: Pe,
                        hasDatePicker: Te,
                        datePicker: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        searchConfig: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        tableUrl: {
                            type: String,
                            default: ""
                        },
                        datePick: {
                            type: Function,
                            default: function(e) {}
                        },
                        searchTable: {
                            type: Function,
                            default: function(e) {}
                        },
                        selectedRows: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        }
                    },
                    data: function() {
                        return {
                            keyword: ""
                        }
                    },
                    computed: {
                        hasSelectedRows: function() {
                            return this.selectedRows.length > 0
                        },
                        iSearchTableConfig: function() {
                            var e = {
                                url: this.tableUrl
                            };
                            return Object.assign(e, this.searchConfig)
                        }
                    },
                    methods: {
                        handleTagSearch: function(e) {
                            this.searchTable(e)
                        },
                        handleDateChange: function(e) {
                            this.datePick(e)
                        }
                    }
                },
                xe = _e,
                De = (n("b9b7"), Object(b["a"])(xe, o, c, !1, null, "fca918ae", null)),
                je = De.exports;

            function Ue(e, t, n) {
                this.$children.forEach((function(a) {
                    var r = a.$options.componentName;
                    r === e ? a.$emit.apply(a, [t].concat(n)) : Ue.apply(a, [e, t].concat([n]))
                }))
            }
            var Ee = {
                    methods: {
                        dispatch: function(e, t, n) {
                            var a = this.$parent || this.$root,
                                r = a.$options.componentName;
                            while (a && (!r || r !== e)) a = a.$parent, a && (r = a.$options.componentName);
                            a && a.$emit.apply(a, [t].concat(n))
                        },
                        broadcast: function(e, t, n) {
                            Ue.call(this, e, t, n)
                        }
                    }
                },
                Me = n("3c4e"),
                Re = n.n(Me),
                Le = {
                    name: "ListTable",
                    components: {
                        AutoDataTable: i["a"],
                        TableAction: je,
                        IBox: s["a"]
                    },
                    mixins: [Ee],
                    props: {
                        tableConfig: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        headerActions: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        }
                    },
                    data: function() {
                        return {
                            selectedRows: [],
                            init: !1,
                            extraQuery: {}
                        }
                    },
                    computed: {
                        dataTable: function() {
                            return this.$refs.dataTable.$refs.dataTable
                        },
                        iTableConfig: function() {
                            var e = Re()(this.tableConfig, {
                                extraQuery: this.extraQuery
                            });
                            return this.$log.debug("Header actions", this.headerActions), this.$log.debug("ListTable: iTableConfig change", e), e
                        },
                        tableUrl: function() {
                            return this.iTableConfig.url
                        }
                    },
                    watch: {
                        extraQuery: {
                            handler: function() {
                                this.$log.debug("ListTable: found extraQuery change")
                            },
                            deep: !0
                        },
                        tableColConfig: {
                            handler: function() {
                                this.$log.debug("ListTable: found colConfig change")
                            },
                            deep: !0
                        }
                    },
                    methods: {
                        handleSelectionChange: function(e) {
                            this.selectedRows = e
                        },
                        reloadTable: function() {
                            this.dataTable.getList()
                        },
                        search: function(e) {
                            return this.$emit("TagSearch", e), this.dataTable.search(e, !0)
                        },
                        filter: function(e) {
                            this.$emit("TagFilter", e), this.$refs.dataTable.$refs.dataTable.search(e, !0)
                        },
                        handleDateChange: function(e) {
                            var t = "",
                                n = "";
                            try {
                                t = e[0].toISOString(), n = e[1].toISOString()
                            } catch (r) {
                                this.$log.error("Handle date change error: ", e), t = new Date, t.setDate(t.getDate() - 5), t = t.toISOString(), n = new Date, n.setDate(n.getDate() + 1), n = n.toISOString()
                            }
                            this.$set(this.extraQuery, "date_from", t), this.$set(this.extraQuery, "date_to", n);
                            var a = {
                                date_from: t,
                                date_to: n
                            };
                            return this.$emit("TagDateChange", e), this.dataTable.searchDate(a)
                        },
                        toggleRowSelection: function(e, t) {
                            return this.dataTable.toggleRowSelection(e, t)
                        }
                    }
                },
                $e = Le,
                Ie = (n("a9e4"), Object(b["a"])($e, a, r, !1, null, "b3775c8e", null));
            t["a"] = Ie.exports
        },
        "59ac": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-rocket",
                    use: "icon-rocket-usage",
                    viewBox: "0 0 1024 1024",
                    content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-rocket"><defs><style type="text/css"></style></defs><path d="M859.392004 256q0-22.820571-16.018286-38.838857t-38.838857-16.018286-38.838857 16.018286-16.018286 38.838857 16.018286 38.838857 38.838857 16.018286 38.838857-16.018286 16.018286-38.838857zM987.392004 91.428571q0 142.262857-43.154286 245.979429t-144.822857 205.970286q-46.299429 45.714286-111.396571 100.571429l-11.410286 216.576q-1.170286 9.142857-9.142857 14.848l-219.428571 128q-4.022857 2.267429-9.142857 2.267429-6.875429 0-13.165714-5.12l-36.571429-36.571429q-7.460571-7.972571-4.534857-18.285714l48.566857-157.696-160.548571-160.548571-157.696 48.566857q-1.682286 0.585143-5.12 0.585143-7.972571 0-13.165714-5.12l-36.571429-36.571429q-9.728-10.825143-2.852571-22.308571l128-219.428571q5.705143-7.972571 14.848-9.142857l216.576-11.410286q54.857143-65.170286 100.571429-111.396571 107.446857-106.861714 204.580571-147.456t246.272-40.594286q7.972571 0 13.677714 5.412571t5.705143 12.873143z" p-id="1308" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        "59ce": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n("b775");

            function r(e) {
                return Object(a["a"])({
                    url: "/api/v1/tickets/tickets/?assignees__id=".concat(e, "&status=open&offset=0&limit=15&display=1&draw=1/"),
                    method: "get"
                })
            }
        },
        "5dc5": function(e, t, n) {},
        "5e04": function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("Page", e._b({}, "Page", e.$attrs, !1), [n("IBox", [n("GenericCreateUpdateForm", e._g(e._b({
                        ref: "createUpdateForm"
                    }, "GenericCreateUpdateForm", e.$attrs, !1), e.$listeners))], 1)], 1)
                },
                r = [],
                i = n("e67a"),
                s = n("83b2"),
                o = n("d0aa"),
                c = {
                    name: "GenericCreateUpdatePage",
                    components: {
                        Page: s["a"],
                        IBox: i["a"],
                        GenericCreateUpdateForm: o["a"]
                    }
                },
                l = c,
                u = n("2877"),
                d = Object(u["a"])(l, a, r, !1, null, "4c8c2362", null);
            t["a"] = d.exports
        },
        "5f87": function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return c
            })), n.d(t, "b", (function() {
                return l
            })), n.d(t, "e", (function() {
                return u
            })), n.d(t, "a", (function() {
                return d
            })), n.d(t, "d", (function() {
                return p
            }));
            var a = n("00e7"),
                r = n.n(a),
                i = "csrftoken",
                s = "jms_current_org",
                o = "jms_current_role";

            function c() {
                return r.a.get(i)
            }

            function l(e) {
                var t = o + "_" + e,
                    n = localStorage.getItem(t);
                return n ? parseInt(n) || null : n
            }

            function u(e, t) {
                var n = o + "_" + e;
                return localStorage.setItem(n, t)
            }

            function d(e) {
                var t = s + "_" + e,
                    n = localStorage.getItem(t);
                try {
                    return JSON.parse(n)
                } catch (a) {
                    return null
                }
            }

            function p(e, t) {
                var n = s + "_" + e;
                localStorage.setItem(n, JSON.stringify(t)), r.a.set("X-JMS-ORG", t.id)
            }
        },
        "5f9c": function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return c
            })), n.d(t, "c", (function() {
                return u
            })), n.d(t, "b", (function() {
                return d
            })), n.d(t, "a", (function() {
                return p
            }));
            n("4917"), n("a481"), n("57e7");
            var a = n("768b"),
                r = (n("28a5"), n("0cd8"), n("ac6a"), n("456d"), n("6d67"), n("3b2b"), "~"),
                i = ",",
                s = "q=",
                o = new RegExp(s + ".*" + i);

            function c(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i;
                return Object.keys(e).map((function(n) {
                    return "".concat(n).concat(t).concat(encodeURIComponent(e[n]))
                })).join(n)
            }

            function l(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i;
                return e.split(n).map((function(e) {
                    return e.split(t)
                })).reduce((function(e, t) {
                    var n = Object(a["a"])(t, 2),
                        r = n[0],
                        i = n[1];
                    return e[r] = decodeURIComponent(i), e
                }), {})
            }

            function u(e, t, n) {
                var r = s + c(t) + i,
                    l = function(e) {
                        return e.indexOf("?") > -1 ? "&" : "?"
                    };
                if (o.test(e)) return e.replace(o, r);
                if (-1 === e.indexOf("#")) return e + l(e) + r;
                var u = e.split("#"),
                    d = Object(a["a"])(u, 2),
                    p = d[0],
                    m = d[1];
                return "history" === n ? p + l(p) + r + "#" + m : e + l(m) + r
            }

            function d(e) {
                var t = e.match(o);
                if (!t) return null;
                var n = t[0].replace(s, "").slice(0, -1);
                return l(n)
            }

            function p(e) {
                if (o.test(e)) {
                    var t = RegExp("[?&]" + o.source);
                    return e.replace(t, "")
                }
                return e
            }
        },
        "605d": function(e, t, n) {},
        "61f7": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            n("4f37"), n("57e7");

            function a(e) {
                return /^(https?:|mailto:|tel:)/.test(e)
            }
        },
        "622a": function(e, t, n) {},
        "671f": function(e, t, n) {
            "use strict";
            var a = n("845e"),
                r = n.n(a);
            r.a
        },
        "6aa2": function(e, t, n) {
            "use strict";
            var a = n("b609"),
                r = n.n(a);
            r.a
        },
        "6ce4": function(e, t, n) {
            "use strict";
            var a = n("4e4f"),
                r = n.n(a);
            r.a
        },
        "6ead": function(e, t, n) {},
        "6f6f": function(e, t, n) {
            "use strict";
            var a = n("5134"),
                r = n.n(a);
            r.a
        },
        "6ff1": function(e, t, n) {},
        "715e": function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("DataForm", e._g(e._b({
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.loading,
                            expression: "loading"
                        }],
                        ref: "dataForm",
                        attrs: {
                            fields: e.totalFields,
                            form: e.iForm
                        }
                    }, "DataForm", e.$attrs, !1), e.$listeners), e._l(e.groups, (function(e, t) {
                        return n("FormGroupHeader", {
                            key: "group-" + e.name,
                            attrs: {
                                slot: "id:" + e.name,
                                group: e,
                                index: t,
                                line: 0 !== t
                            },
                            slot: "id:" + e.name
                        })
                    })), 1)
                },
                r = [],
                i = (n("7514"), n("7618")),
                s = n("768b"),
                o = (n("ac6a"), n("ffc1"), n("af98")),
                c = n("e4ba"),
                l = n("75fc"),
                u = (n("7f7f"), n("ac4d"), n("8a81"), n("6d67"), n("d225")),
                d = n("b0b4"),
                p = n("2b0e"),
                m = n("56f5"),
                h = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("DataForm", e._g(e._b({
                        staticStyle: {
                            "margin-left": "-26%",
                            "margin-right": "-6%"
                        },
                        attrs: {
                            fields: e.iFields,
                            form: e.value
                        }
                    }, "DataForm", e.kwargs, !1), e.$listeners))
                },
                f = [],
                g = (n("6b54"), n("87b3"), n("2caf"), {
                    name: "NestedField",
                    components: {
                        DataForm: o["a"]
                    },
                    props: {
                        fields: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        value: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        errors: {
                            type: [Object, String],
                            default: ""
                        }
                    },
                    data: function() {
                        return {
                            kwargs: {
                                hasReset: !1,
                                hasSaveContinue: !1,
                                hasButtons: !1
                            }
                        }
                    },
                    computed: {
                        iFields: function() {
                            var e = this,
                                t = this.fields;
                            if (this.errors && "object" === Object(i["a"])(this.errors))
                                for (var n = function() {
                                        var n = Object(s["a"])(r[a], 2),
                                            o = n[0],
                                            c = n[1],
                                            l = t.find((function(e) {
                                                return e.prop === o
                                            }));
                                        if (!l) return "continue";
                                        e.$log.debug("".concat(o, ": ").concat(c)), "object" !== Object(i["a"])(c) || Array.isArray(c) || (c = e.objectToString(c)), l.attrs.error = c.toString()
                                    }, a = 0, r = Object.entries(this.errors); a < r.length; a++) n();
                            return this.$log.debug("Fields change: ", t, this.errors), t
                        }
                    },
                    methods: {
                        objectToString: function(e) {
                            for (var t = "", n = 0, a = Object.entries(e); n < a.length; n++) {
                                var r = Object(s["a"])(a[n], 2),
                                    o = r[0],
                                    c = r[1];
                                "object" === Object(i["a"])(c) && (c = this.objectToString(c)), t += " ".concat(o, ": ").concat(c, " ")
                            }
                            return t
                        }
                    }
                }),
                b = g,
                v = n("2877"),
                y = Object(v["a"])(b, h, f, !1, null, "17a151a9", null),
                w = y.exports,
                A = n("7541"),
                S = n("cf45"),
                C = function() {
                    function e() {
                        Object(u["a"])(this, e), this.groups = []
                    }
                    return Object(d["a"])(e, [{
                        key: "generateFieldByType",
                        value: function(e, t, n, a) {
                            switch (e) {
                                case "choice":
                                    e = "radio-group", a.read_only || (t.options = a.choices.map((function(e) {
                                        return {
                                            label: e.display_name,
                                            value: e.value
                                        }
                                    })));
                                    break;
                                case "datetime":
                                    e = "date-picker", t.el = {
                                        type: "datetime"
                                    };
                                    break;
                                case "field":
                                    e = "", t.component = m["a"], a.required && (t.el.clearable = !1);
                                    break;
                                case "string":
                                    e = "input", a["max_length"] || (t.el.type = "textarea", t.el.rows = 3), a["write_only"] && (t.el.type = "password");
                                    break;
                                case "boolean":
                                    e = "checkbox";
                                    break;
                                case "nested object":
                                    e = "nestedField", t.component = w, t.label = "", t.labelWidth = 0, t.el.fields = this.generateNestFields(t, n, a), t.el.errors = {}, p["default"].$log.debug("All fields in generate: ", t.el.allFields);
                                    break;
                                default:
                                    e = "input";
                                    break
                            }
                            if ("radio-group" === e && !a.read_only) {
                                var r = a.choices.map((function(e) {
                                    return {
                                        label: e.display_name,
                                        value: e.value
                                    }
                                }));
                                r.length > 4 && (e = "select", t.el.filterable = !0)
                            }
                            return t.type = e, t
                        }
                    }, {
                        key: "generateNestFields",
                        value: function(e, t, n) {
                            var a = [],
                                r = t.fields || [],
                                i = t.fieldsMeta || {},
                                s = n.children || {},
                                o = !0,
                                c = !1,
                                l = void 0;
                            try {
                                for (var u, d = r[Symbol.iterator](); !(o = (u = d.next()).done); o = !0) {
                                    var m = u.value,
                                        h = this.generateField(m, i, s);
                                    a.push(h)
                                }
                            } catch (f) {
                                c = !0, l = f
                            } finally {
                                try {
                                    o || null == d.return || d.return()
                                } finally {
                                    if (c) throw l
                                }
                            }
                            return p["default"].$log.debug("NestFields: ", a), a
                        }
                    }, {
                        key: "generateFieldByName",
                        value: function(e, t) {
                            switch (e) {
                                case "email":
                                    t.el.type = "email";
                                    break;
                                case "password":
                                    t.el.type = "password";
                                    break;
                                case "comment":
                                    t.el.type = "textarea";
                                    break
                            }
                            return t
                        }
                    }, {
                        key: "generateFieldByOther",
                        value: function(e, t, n) {
                            var a = e.rules || [];
                            return n.required && ("input" === e.type ? a.push(A["c"].Required) : a.push(A["c"].RequiredChange)), e.rules = a, e
                        }
                    }, {
                        key: "generateField",
                        value: function(e, t, n) {
                            var a = {
                                    id: e,
                                    prop: e,
                                    el: {},
                                    attrs: {},
                                    rules: []
                                },
                                r = n[e] || {},
                                i = t[e] || {};
                            a.label = r.label, a.helpText = r.help_text, a = this.generateFieldByType(r.type, a, i, r), a = this.generateFieldByName(e, a), a = this.generateFieldByOther(a, i, r);
                            var s = Object(S["b"])(i.el || {}, a.el),
                                o = i.rules || a.rules;
                            return a = Object.assign(a, i), a.el = s, a.rules = o, _.set(a, "attrs.error", ""), a
                        }
                    }, {
                        key: "generateFieldGroup",
                        value: function(e, t, n) {
                            var a = Object(s["a"])(e, 2),
                                r = a[0],
                                i = a[1];
                            return this.groups.push({
                                id: r,
                                title: r,
                                name: i[0],
                                fields: i
                            }), this.generateFields(i, t, n)
                        }
                    }, {
                        key: "generateFields",
                        value: function(e, t, n) {
                            var a = [],
                                r = !0,
                                i = !1,
                                s = void 0;
                            try {
                                for (var o, c = e[Symbol.iterator](); !(r = (o = c.next()).done); r = !0) {
                                    var u = o.value;
                                    if (u instanceof Array) {
                                        var d = this.generateFieldGroup(u, t, n);
                                        a = [].concat(Object(l["a"])(a), Object(l["a"])(d))
                                    } else "string" === typeof u ? (u = this.generateField(u, t, n), a.push(u)) : u instanceof Object && (this.errors && (this.errors[u.prop] = ""), a.push(u))
                                }
                            } catch (p) {
                                i = !0, s = p
                            } finally {
                                try {
                                    r || null == c.return || c.return()
                                } finally {
                                    if (i) throw s
                                }
                            }
                            return a
                        }
                    }]), e
                }(),
                k = {
                    name: "AutoDataForm",
                    components: {
                        DataForm: o["a"],
                        FormGroupHeader: c["a"]
                    },
                    props: {
                        url: {
                            type: String,
                            required: !0
                        },
                        method: {
                            type: String,
                            default: "post"
                        },
                        fields: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        form: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        fieldsMeta: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        }
                    },
                    data: function() {
                        return {
                            remoteMeta: {},
                            totalFields: [],
                            loading: !0,
                            groups: [],
                            iForm: this.form,
                            errors: {}
                        }
                    },
                    mounted: function() {
                        this.optionUrlMetaAndGenerateColumns()
                    },
                    methods: {
                        optionUrlMetaAndGenerateColumns: function() {
                            var e = this;
                            this.$store.dispatch("common/getUrlMeta", {
                                url: this.url
                            }).then((function(t) {
                                e.remoteMeta = t.actions[e.method.toUpperCase()] || {}, e.generateColumns(), e.cleanFormValue()
                            })).catch((function(t) {
                                e.$log.error(t)
                            })).finally((function() {
                                e.loading = !1
                            }))
                        },
                        generateColumns: function() {
                            var e = new C;
                            this.totalFields = e.generateFields(this.fields, this.fieldsMeta, this.remoteMeta), this.groups = e.groups, this.$log.debug("Total fields: ", this.totalFields)
                        },
                        _cleanFormValue: function(e, t) {
                            for (var n = 0, a = Object.entries(t); n < a.length; n++) {
                                var r = Object(s["a"])(a[n], 2),
                                    o = r[0],
                                    c = r[1];
                                if (void 0 !== c.default) {
                                    var l = e[o];
                                    void 0 === l && ("nested object" === c.type && "object" === Object(i["a"])(l) && this._cleanFormValue(l, c.children), e[o] = c.default)
                                }
                            }
                        },
                        cleanFormValue: function() {
                            this._cleanFormValue(this.iForm, this.remoteMeta)
                        },
                        setFieldError: function(e, t) {
                            var n = this.totalFields.find((function(t) {
                                return t.prop === e
                            }));
                            n && (n.attrs.error === t && (t += "."), "nestedField" === n.type ? n.el.errors = t : n.attrs.error = t)
                        }
                    }
                },
                O = k,
                P = Object(v["a"])(O, a, r, !1, null, "bac0771c", null);
            t["a"] = P.exports
        },
        "73d1": function(e) {
            e.exports = {
                "": "",
                accounts: {
                    PleaseClickLeftAssetToViewAssetAccount: "资产账号列表，点击左侧资产进行查看",
                    PleaseClickLeftApplicationToViewApplicationAccount: "应用账号列表，点击左侧应用进行查看",
                    PleaseClickLeftAssetToViewGatheredUser: "收集用户列表，点击左侧资产进行查看"
                },
                acl: {
                    name: "名称",
                    username: "用户名",
                    ip_group: "IP 组",
                    ip_group_help_text: "格式为逗号分隔的字符串, * 表示匹配所有。例如: 192.168.10.1, 192.168.1.0/24, 10.1.1.1-10.1.1.20, 2001:db8:2de::e13, 2001:db8:1a:1110::/64",
                    action: "动作",
                    Rules: "规则",
                    Action: "动作",
                    priority: "优先级",
                    date_created: "创建时间",
                    created_by: "创建者",
                    asset: "资产信息",
                    users: "用户",
                    system_user: "系统用户",
                    username_group: "用户名",
                    hostname_group: "资产名",
                    asset_ip_group: "资产IP",
                    system_users_name_group: "系统用户名称",
                    system_users_protocol_group: "系统用户协议",
                    system_users_username_group: "系统用户名",
                    apply_login_asset: "申请登录资产",
                    apply_login_system_user: "申请登录系统用户",
                    apply_login_user: "申请登录用户",
                    login_confirm_user: "登录复核 受理人",
                    RuleDetail: "规则详情"
                },
                applications: {
                    "": "",
                    updateAccountMsg: "请更新系统用户的账号信息",
                    associateApplication: "关联应用",
                    RemoteApp: "远程应用",
                    Database: "数据库",
                    Cloud: "云",
                    App: "应用",
                    applicationsType: {
                        chrome: "Chrome",
                        mysql_workbench: "MySQL Workbench",
                        vmware_client: "Vmware Client",
                        custom: "Custom",
                        mysql: "MySQL",
                        oracle: "Oracle",
                        postgresql: "PostgreSQL",
                        mariadb: "MariaDB",
                        k8s: "Kubernetes"
                    },
                    applicationsCategory: {
                        remote_app: "远程应用",
                        db: "数据库应用",
                        cloud: "云应用"
                    },
                    appPath: "应用路径",
                    appType: "应用类型",
                    appName: "应用名称",
                    asset: "资产",
                    database: "数据库",
                    host: "主机",
                    mysql: "Mysql",
                    port: "端口",
                    type: "类型",
                    chrome: "Chrome",
                    chrome_target: "目标URL",
                    chrome_username: "登录账号",
                    chrome_password: "登录密码",
                    mysql_workbench: "MySQL Workbench",
                    mysql_workbench_ip: "数据库IP",
                    mysql_workbench_port: "数据库端口",
                    mysql_workbench_name: "数据库名",
                    mysql_workbench_username: "数据库账号",
                    mysql_workbench_password: "数据库密码",
                    vmware_client: "vSphere Client",
                    vmware_target: "目标地址",
                    vmware_username: "登录账号",
                    vmware_password: "登录密码",
                    custom: "自定义",
                    custom_cmdline: "运行参数",
                    custom_target: "目标地址",
                    custom_username: "登录账号",
                    custom_password: "登录密码",
                    Custom: "自定义",
                    cluster: "集群",
                    kubernetes: "Kubernetes",
                    clusterHelpTextMessage: "例如：https://172.16.8.8:8443",
                    DBInfo: "数据库信息"
                },
                assets: {
                    AppList: "应用列表",
                    AssociateSystemUsers: "关联系统用户",
                    AssociateAssets: "关联资产",
                    AssociateNodes: "关联节点",
                    Action: "动作",
                    ActiveSelected: "激活所选",
                    AdminUser: "特权用户",
                    AdminUserDetail: "管理用户详情",
                    AdminUserListHelpMessage: "<b>特权用户</b> 是资产已存在的, 并且拥有 高级权限 的系统用户， 如 root 或 拥有 `NOPASSWD: ALL` sudo 权限的用户。 JumpServer 使用该用户来 `推送系统用户`、`获取资产硬件信息` 等。",
                    Asset: "资产",
                    HardwareInfo: "硬件信息",
                    AssetDetail: "资产详情",
                    AssetList: "资产列表",
                    ReplaceNodeAssetsAdminUser: "替换节点资产的管理员",
                    AssetListHelpMessage: "左侧是资产树，右击可以新建、删除、更改树节点，授权资产也是以节点方式组织的，右侧是属于该节点下的资产\n",
                    TestGatewayTestConnection: "测试连接网关",
                    TestGatewayHelpMessage: "如果使用了nat端口映射，请设置为ssh真实监听的端口",
                    SshPort: "SSH 端口",
                    AssetNumber: "资产编号",
                    AssetUserList: "账号列表",
                    Assets: "资产",
                    Auth: "认证",
                    AccountList: "账号列表",
                    PermUserList: "授权用户",
                    ViewPerm: "查看授权",
                    AutoGenerateKey: "自动生成",
                    AutoPush: "自动推送",
                    BasePlatform: "基础平台",
                    Basic: "基本",
                    Charset: "字符集",
                    CmdFilter: "命令过滤器",
                    CommandFilterDetail: "命令过滤器详情",
                    CommandFilterHelpMessage: "系统用户可以绑定一些命令过滤器，一个过滤器可以定义一些规则 当用户使用这个系统用户登录资产，然后执行一个命令 这个命令需要被绑定过滤器的所有规则匹配，高优先级先被匹配， 当一个规则匹配到了，如果规则的动作是允许，这个命令会被放行， 如果规则的动作是禁止，命令将会被禁止执行， 否则就匹配下一个规则，如果最后没有匹配到规则，则允许执行",
                    CommandFilterRuleContentHelpText: "每行一个命令",
                    CommandFilterRulePriorityHelpText: "优先级可选范围为1-100，1最低优先级，100最高优先级",
                    CommandFilterRules: "命令过滤器规则",
                    Comment: "备注",
                    Cpu: "CPU",
                    CommonUser: "普通用户",
                    CreatedBy: "创建者",
                    Database: "数据库",
                    DateJoined: "创建日期",
                    DateUpdated: "更新日期",
                    DeactiveSelected: "禁用所选",
                    Disk: "硬盘",
                    AdDomain: "AD域名",
                    AdDomainHelpText: "提供给域用户登录的AD域名",
                    Domain: "网域",
                    DomainDetail: "网域详情",
                    DomainHelpMessage: "网域功能是为了解决部分环境（如：混合云）无法直接连接而新增的功能，原理是通过网关服务器进行跳转登录。JMS => 网域网关 => 目标资产",
                    FullName: "全称",
                    Gateway: "网关",
                    GatewayProtocolHelpText: "SSH网关，支持代理SSH,RDP和VNC",
                    Hostname: "主机名",
                    IP: "IP",
                    IsActive: "激活",
                    Key: "键",
                    Label: "标签",
                    LoginModeHelpMessage: "如果选择手动登录模式，用户名和密码可以不填写",
                    LoginModel: "登录模式",
                    Memory: "内存",
                    Meta: "元数据",
                    Model: "型号",
                    Name: "名称",
                    NoInputCommand: "未输入命令",
                    NoSystemUserWasSelected: "未选择系统用户",
                    Node: "节点",
                    UserSwitch: "用户切换",
                    SwitchToUser: "Su 用户",
                    SwitchToUserListTips: "通过以下用户连接资产时，会使用当前系统用户登录再进行切换。",
                    NodeInformation: "节点信息",
                    OnlyLatestVersion: "仅最新版本",
                    Os: "操作系统",
                    Other: "其它",
                    Hardware: "硬件信息",
                    Password: "密码",
                    PasswordWithoutSpecialCharHelpText: "不能包含特殊字符",
                    Pending: "等待",
                    Platform: "系统平台",
                    PlatformDetail: "平台详情",
                    PriorityHelpMessage: "1-100, 1最低优先级，100最高优先级。授权多个用户时，高优先级的系统用户将会作为默认登录用户",
                    Protocol: "协议",
                    Protocols: "协议组",
                    LoginOption: "登录选项",
                    PublicIp: "公网IP",
                    Push: "推送",
                    PushSystemUserNow: "推送系统用户",
                    PushAllSystemUsersToAsset: "推送所有系统用户到资产",
                    QuickUpdate: "快速更新",
                    Reachable: "可连接",
                    Unreachable: "不可连接",
                    Unknown: "未知",
                    Refresh: "刷新",
                    RefreshHardware: "更新硬件信息",
                    RemoteAppListHelpMessage: "使用此功能前，请确保已将应用加载器上传到应用服务器并成功发布为一个 RemoteApp 应用 <b><a href='https://github.com/jumpserver/Jmservisor/releases'>下载应用加载器</a></b>",
                    RemoteApps: "远程应用",
                    Applications: "应用",
                    RemoteType: "应用类型",
                    RemoveFromCurrentNode: "从节点移除",
                    ReplaceNodeAssetsAdminUserWithThis: "替换资产的管理员",
                    Rules: "规则",
                    SFTPHelpMessage: "SFTP的起始路径，tmp目录, 用户home目录或者自定义",
                    SerialNumber: "序列号",
                    SudoHelpMessage: "使用逗号分隔多个命令，如: /bin/whoami,/sbin/ifconfig",
                    PasswordHelpMessage: "密码或密钥密码",
                    SystemUser: "系统用户",
                    SystemUserDetail: "系统用户详情",
                    SystemUserListHelpMessage: "<b>系统用户</b> 是JumpServer 登录资产时使用的账号，如 root `ssh root@host`，而不是使用该用户名登录资产（ssh admin@host)`;<br><b>特权用户</b> 是资产已存在的, 并且拥有 高级权限 的系统用户， JumpServer 使用该用户来 `推送系统用户`、`获取资产硬件信息` 等;</br><b>普通用户</b> 可以在资产上预先存在，也可以由 特权用户 来自动创建。",
                    DynamicUsername: "动态用户名",
                    SystemUsers: "系统用户",
                    Test: "测试",
                    TestAssetsConnective: "测试资产可连接性",
                    TestAllSystemUsersConnective: "测试所有系统用户可连接性",
                    TestConnection: "测试连接",
                    Type: "类型",
                    UnselectedAssets: "未选择资产或所选择的资产不支持SSH协议连接",
                    UnselectedNodes: "未选择节点",
                    UpdateAssetUserToken: "更新账号认证信息",
                    Username: "用户名",
                    UsernameHelpMessage: "用户名是动态的，登录资产时使用当前用户的用户名登录",
                    Value: "值",
                    Vendor: "制造商",
                    Version: "版本",
                    command_filter_list: "命令过滤器列表",
                    date_joined: "创建日期",
                    sshKeyFingerprint: "SSH 指纹",
                    ip: "IP",
                    sshkey: "sshkey",
                    SSHKey: "SSH 密钥",
                    GroupsHelpMessage: "请输入用户组，多个用户组使用逗号分隔（需填写已存在的用户组）",
                    HomeHelpMessage: "默认家目录 /home/系统用户名: /home/username",
                    Home: "家目录",
                    LinuxUserAffiliateGroup: "用户附属组",
                    ipDomain: "IP(域名)",
                    HostProtocol: "主机协议",
                    DatabaseProtocol: "数据库协议",
                    OtherProtocol: "其它协议",
                    PasswordOrToken: "密码 / 令牌"
                },
                audits: {
                    Hosts: "主机",
                    RunUser: "运行用户",
                    User: "用户",
                    Username: "用户名",
                    View: "查看",
                    SystemUserName: "系统用户名"
                },
                auth: {
                    LoginRequiredMsg: "账号已退出，请重新登录",
                    ReLogin: "重新登录"
                },
                common: {
                    UserLoginLimit: "用户登录限制",
                    IPLoginLimit: "IP 登录限制",
                    Setting: "设置",
                    ViewMore: "查看更多",
                    Announcement: "公告",
                    Logging: "日志记录",
                    Database: "数据库记录",
                    Params: "参数",
                    BasicInfo: "基本信息",
                    DateUpdated: "更新日期",
                    ApprovaLevel: "审批信息",
                    MFAVerify: "验证 MFA",
                    ViewSecret: "查看密码",
                    ConnectWebSocketError: "连接 WebSocket 失败",
                    Action: "动作",
                    RequestTickets: "申请工单",
                    Actions: "操作",
                    CustomCol: "自定义列表字段",
                    Activate: "激活",
                    NeedSpecifiedFile: "需上传指定格式文件",
                    TestPortErrorMsg: "端口错误,请重新输入",
                    Active: "激活中",
                    actionsTips: "剪切板权限控制目前仅支持 RDP/VNC 协议的连接",
                    TableColSettingInfo: "请选择您想显示的列表详细信息。",
                    Add: "添加",
                    UpdateAssetDetail: "配置更多信息",
                    AddSuccessMsg: "添加成功",
                    Auth: "认证",
                    bind: "绑定",
                    unbind: "解绑",
                    PushSelected: "推送所选",
                    PushSelectedSystemUsersToAsset: "推送所选系统用户到资产",
                    TestSelected: "测试所选",
                    TestSelectedSystemUsersConnective: "测试所选系统用户可连接性",
                    BadRequestErrorMsg: "请求错误，请检查填写内容",
                    BadRoleErrorMsg: "请求错误，无该操作权限",
                    BadConflictErrorMsg: "正在刷新中，请稍后再试",
                    Basic: "基本",
                    PleaseAgreeToTheTerms: "请同意条款",
                    OpenId: "OpenId设置",
                    Radius: "Radius设置",
                    Cas: "Cas设置",
                    other: "其它设置",
                    ApplyInfo: "申请信息",
                    Cancel: "取消",
                    Close: "关闭",
                    "Command filter": "命令过滤器",
                    Comment: "备注",
                    Confirm: "确认",
                    Create: "创建",
                    CreatedBy: "创建者",
                    CrontabHelpTips: "eg：每周日 03:05 执行 <5 3 * * 0> <br> 提示： 使用5位 Linux crontab 表达式 <分 时 日 月 星期> （<a href='https://tool.lu/crontab/' target='_blank'>在线工具</a>） <br>注意： 如果同时设置了定期执行和周期执行，优先使用定期执行",
                    DateEnd: "结束日期",
                    Resource: "资源",
                    DateLast24Hours: "最近一天",
                    DateLast3Months: "最近三月",
                    DateLastMonth: "最近一月",
                    DateLastWeek: "最近一周",
                    DateStart: "开始日期",
                    Delete: "删除",
                    Disable: "禁用",
                    Download: "下载",
                    Enable: "启用",
                    "On/Off": "启/停",
                    EnterForSearch: "按回车进行搜索",
                    Export: "导出",
                    Import: "导入",
                    ContinueImport: "继续导入",
                    Continue: "继续",
                    Stop: "停止",
                    Finished: "完成",
                    Refresh: "刷新",
                    Info: "提示",
                    MFAConfirm: "MFA 认证",
                    MFARequireForSecurity: "为了安全请输入MFA",
                    PasswordConfirm: "密码认证",
                    PasswordRequireForSecurity: "为了安全请输入密码",
                    Members: "成员",
                    More: "更多",
                    Message: "消息",
                    MoreActions: "更多操作",
                    Name: "名称",
                    No: "否",
                    Nothing: "无",
                    NoData: "暂无数据",
                    Open: "打开",
                    Other: "其它",
                    Others: "其他",
                    Push: "推送",
                    QuickUpdate: "快速更新",
                    RemoveSuccessMsg: "移除成功",
                    Reset: "重置",
                    Search: "搜索",
                    Select: "选择",
                    SelectFile: "选择文件",
                    Show: "显示",
                    Submit: "提交",
                    SaveAndAddAnother: "保存并继续添加",
                    Test: "测试",
                    TestSuccessMsg: "测试成功",
                    To: "至",
                    Update: "更新",
                    Revise: "修改",
                    Upload: "上传",
                    Clone: "克隆",
                    Username: "用户名",
                    Validity: "有效",
                    Invalidity: "无效",
                    View: "查看",
                    Yes: "是",
                    action: "动作",
                    User: "用户",
                    activateSelected: "激活所选",
                    bulkDeleteErrorMsg: "批量删除失败: ",
                    bulkDeleteSuccessMsg: "批量删除成功",
                    bulkRemoveErrorMsg: "批量移除失败: ",
                    NeedAssetsAndSystemUserErrMsg: "请先选择授权的系统用户和资产",
                    bulkRemoveSuccessMsg: "批量移除成功",
                    createBy: "创建者",
                    cloneFrom: "克隆自",
                    createErrorMsg: "创建失败",
                    createSuccessMsg: "创建成功",
                    saveSuccessContinueMsg: "创建成功，更新内容后可以继续添加",
                    createdBy: "创建人",
                    dateCreated: "创建日期",
                    dateExpired: "失效日期",
                    dateFinished: "完成日期",
                    dateStart: "开始日期",
                    deleteErrorMsg: "删除失败",
                    deleteFailedMsg: "删除失败",
                    deleteSelected: "删除所选",
                    deleteSuccessMsg: "删除成功",
                    deleteWarningMsg: "你确定要删除",
                    disableSelected: "禁用所选",
                    fieldRequiredError: "这个字段是必填项",
                    getErrorMsg: "获取失败",
                    MFAErrorMsg: "MFA错误，请检查",
                    Total: "总共",
                    Success: "成功",
                    Failed: "失败",
                    Pending: "等待",
                    Status: "状态",
                    InputEmailAddress: "请输入正确的邮箱地址",
                    Receivers: "接收人",
                    imExport: {
                        ExportAll: "导出所有",
                        ExportOnlyFiltered: "仅导出搜索结果",
                        ExportOnlySelectedItems: "仅导出选择项",
                        ExportRange: "导出范围",
                        createSuccessMsg: "导入创建成功，总共：{count}",
                        downloadImportTemplateMsg: "下载创建模板",
                        downloadUpdateTemplateMsg: "下载更新模板",
                        onlyCSVFilesTips: "仅支持csv文件导入",
                        updateSuccessMsg: "导入更新成功，总共：{count}",
                        uploadCsvLth10MHelpText: "只能上传 csv/xlsx, 且不超过 10M",
                        dragUploadFileInfo: "将文件拖到此处，或点击上传",
                        hasImportErrorItemMsg: "存在导入失败项，点击左侧 x 查看失败原因，点击表格编辑后，可以继续导入失败项"
                    },
                    fileType: "文件类型",
                    isValid: "有效",
                    nav: {
                        APIKey: "API Key",
                        AdminPage: "管理页面",
                        Docs: "文档",
                        Help: "帮助",
                        Logout: "退出登录",
                        Profile: "个人信息",
                        Support: "支持",
                        UserPage: "用户页面",
                        EnterpriseEdition: "企业版"
                    },
                    passwordOrPassphrase: "密码或密钥密码",
                    removeErrorMsg: "移除失败: ",
                    removeSuccessMsg: "移除成功",
                    rows: "行",
                    tree: {
                        DropConfirmMsg: "你想移动节点: {src} 到 {dst} 下吗?",
                        Empty: "空",
                        Loading: "加载中"
                    },
                    updateErrorMsg: "更新失败",
                    updateSelected: "更新所选",
                    updateSuccessMsg: "更新成功",
                    SelectProperties: "选择属性",
                    ObjectNotFoundOrDeletedMsg: "没有找到对应资源或者已被删除",
                    removeSelected: "移除所选",
                    removeWarningMsg: "你确定要移除",
                    password: {
                        UPPER_CASE_REQUIRED: "须包含大写字母",
                        LOWER_CASE_REQUIRED: "须包含小写字母",
                        NUMBER_REQUIRED: "须包含数字",
                        SPECIAL_CHAR_REQUIRED: "须包含特殊字符",
                        MIN_LENGTH_ERROR: "密码最小长度 {0} 位"
                    },
                    lastCannotBeDeleteMsg: "最后一项，不能被删除",
                    InvalidJson: "不是合法 JSON",
                    time_period: "时段",
                    WeekCronSelect: {
                        Monday: "星期一",
                        Tuesday: "星期二",
                        Wednesday: "星期三",
                        Thursday: "星期四",
                        Friday: "星期五",
                        Saturday: "星期六",
                        Sunday: "星期天",
                        ClearSelection: "清空选择",
                        SelectAll: "全选",
                        CanDragSelect: "可拖动鼠标选择时间段",
                        WeekOrTime: "星期/时间"
                    },
                    CronTab: {
                        newCron: "生成 cron",
                        timeExpression: "时间表达式",
                        cronExpression: "crontab完整表达式",
                        min: "分钟",
                        hour: "小时",
                        day: "日",
                        month: "月",
                        week: "周",
                        wildcardsAllowed: "允许的通配符",
                        from: "从",
                        every: "每",
                        appoint: "指定",
                        manyChoose: "可多选",
                        startEvery: "开始，每",
                        executeOnce: "执行一次",
                        lastDay: "本月最后一天",
                        everyMonth: "每月",
                        lastWorking: "最近的那个工作日",
                        lastWeek: "本月最后一个星期",
                        num: "号",
                        cycleFromWeek: "周期从星期",
                        the: "第",
                        weekOf: "周的星期",
                        Monday: "周一",
                        Tuesday: "周二",
                        Wednesday: "周三",
                        Thursday: "周四",
                        Friday: "周五",
                        Saturday: "周六",
                        Sunday: "周日",
                        runningTimes: "最近5次运行时间",
                        calculationResults: "cron 表达式错误",
                        failedConditions: "没有达到条件的结果！"
                    }
                },
                dashboard: {
                    ActiveAsset: "近期被登录过",
                    ActiveUser: "近期登录过",
                    ActiveUserAssetsRatioTitle: "占比统计",
                    Asset: "资产",
                    AssetRatio: "资产占比统计",
                    AssetsTotal: "资产总数",
                    DisabledAsset: "禁用的",
                    DisabledUser: "禁用的",
                    InActiveAsset: "近期未被登录",
                    InActiveUser: "近期未登录过",
                    LatestSessions: "最近登录记录",
                    LatestSessions10: "最近10次登录",
                    LatestTop10: "TOP 10",
                    LoginAssets: "活跃资产",
                    LoginCount: "登录次数",
                    LoginOverview: "会话统计",
                    LoginTo: "登录了",
                    LoginUsers: "活跃用户",
                    Monthly: "按月",
                    OnlineSessions: "在线会话",
                    OnlineUsers: "在线用户",
                    TimesWeekUnit: "次/周",
                    TopAssetsOfWeek: "周资产 TOP10",
                    TopUsersOfWeek: "周用户 TOP10",
                    User: "用户",
                    UserRatio: "用户占比统计",
                    UsersTotal: "用户总数",
                    Weekly: "按周"
                },
                ops: {
                    Execute: "执行",
                    ID: "ID",
                    No: "否",
                    PleaseSelect: "请选择",
                    Yes: "是",
                    become: "Become",
                    contents: "内容",
                    date: "日期",
                    dateStart: "开始日期",
                    datetime: "日期",
                    detail: "详情",
                    execution: "执行历史",
                    executionDetail: "执行历史详情",
                    hosts: "主机",
                    inTotal: "总共",
                    isFinished: "是否完成",
                    isSuccess: "成功",
                    lastExecutionOutput: "最后执行输出",
                    lastRun: "最后运行",
                    lastRunFailedHosts: "最后运行失败的主机",
                    lastRunSuccessHosts: "最后运行成功的主机",
                    latestVersion: "最新版本",
                    options: "选项",
                    output: "输出",
                    pattern: "模式",
                    ratio: "比例",
                    run: "执行",
                    runAs: "运行用户",
                    runTimes: "执行次数",
                    selectAssetsMessage: "选择左侧资产, 选择运行的系统用户，批量执行命令",
                    selectedAssets: "已选择资产:",
                    stat: "成功/失败/总",
                    success: "成功",
                    taskDetail: "任务详情",
                    taskName: "任务名称",
                    taskVersions: "任务各版本",
                    tasks: "任务",
                    time: "时间",
                    timeDelta: "运行时间",
                    totalVersions: "版本数量",
                    version: "版本",
                    versionDetail: "版本详情",
                    versionRunExecution: "执行历史",
                    Unkown: "未知"
                },
                perms: {
                    "": "",
                    Actions: "权限",
                    Asset: "资产",
                    Basic: "基本",
                    Exclude: "不包含",
                    IP: "IP",
                    Include: "包含",
                    Inherit: "继承",
                    Node: "节点",
                    SystemUser: "系统用户",
                    User: "用户",
                    UserGroups: "用户组",
                    PermName: "授权名称",
                    Permissions: "授权列表",
                    DatabaseAppPermission: "数据库授权",
                    RemoteAppPermission: "远程应用授权",
                    addApplicationToThisPermission: "添加应用",
                    KubernetesAppPermission: "Kubernetes授权",
                    addAssetToThisPermission: "添加资产",
                    addDatabaseAppToThisPermission: "添加数据库应用",
                    addNodeToThisPermission: "添加节点",
                    addRemoteAppToThisPermission: "添加远程应用",
                    addK8sAppToThisPermission: "添加Kubernetes应用",
                    addSystemUserToThisPermission: "添加系统用户",
                    addUserGroupToThisPermission: "添加用户组",
                    addUserToThisPermission: "添加用户",
                    all: "全部",
                    assetAndNode: "资产或节点",
                    assetCount: "资产数量",
                    connect: "连接",
                    databaseApp: "数据库应用",
                    KubernetesApp: "Kubernetes",
                    dateStart: "开始日期",
                    downloadFile: "下载文件",
                    hostName: "主机名",
                    isValid: "有效",
                    fromTicket: "来自工单",
                    isEffective: "起作用的",
                    nodeCount: "节点数量",
                    refreshFail: "刷新失败",
                    refreshPermissionCache: "刷新授权缓存",
                    refreshSuccess: "刷新成功",
                    remoteApp: "远程应用",
                    remoteAppCount: "远程应用数量",
                    appsCount: "应用数量",
                    appsList: "应用列表",
                    DatabaseAppCount: "数据库应用数量",
                    KubernetesAppCount: "Kubernetes应用数量",
                    systemUserCount: "系统用户数量",
                    upDownload: "上传下载",
                    uploadFile: "上传文件",
                    clipboardCopyPaste: "剪贴板复制粘贴",
                    clipboardCopy: "剪切板复制",
                    clipboardPaste: "剪切板粘贴",
                    userCount: "用户数量",
                    userGroupCount: "用户组数量",
                    usersAndUserGroups: "用户或用户组"
                },
                route: {
                    "": "",
                    TicketFlow: "工单流",
                    TicketFlowCreate: "创建审批流",
                    TicketFlowUpdate: "更新审批流",
                    Accounts: "账号管理",
                    AssetAccount: "资产账号",
                    ApplicationAccount: "应用账号",
                    Ticket: "工单",
                    SessionDetail: "会话详情",
                    CommandConfirm: "命令复核",
                    AdminUserCreate: "创建管理用户",
                    AdminUserDetail: "管理用户详情",
                    AdminUserList: "管理用户",
                    AdminUserUpdate: "更新管理用户",
                    Applications: "应用管理",
                    AssetCreate: "创建资产",
                    AssetDetail: "资产详情",
                    AssetList: "资产列表",
                    Session: "会话",
                    AssetPermission: "资产授权",
                    AssetPermissionCreate: "创建资产授权规则",
                    AssetPermissionDetail: "资产授权详情",
                    AssetPermissionUpdate: "更新资产授权规则",
                    AssetUpdate: "更新资产",
                    Assets: "资产管理",
                    Audits: "日志审计",
                    BatchCommand: "批量命令",
                    BatchCommandLog: "批量命令",
                    CeleryTaskLog: "Celery任务日志",
                    CommandExecutions: "命令执行",
                    CommandFilterCreate: "创建命令过滤器",
                    CommandFilterDetail: "命令过滤器详情",
                    CommandFilterList: "命令过滤",
                    CommandFilterRulesCreate: "创建命令过滤器规则",
                    CommandFilterRulesUpdate: "更新命令过滤器规则",
                    CommandFilterUpdate: "更新命令过滤器",
                    CommandStorageUpdate: "更新命令存储",
                    Commands: "命令记录",
                    CreateCommandStorage: "创建命令存储",
                    CreateReplayStorage: "创建录像存储",
                    Dashboard: "仪表盘",
                    DatabaseApp: "数据库",
                    DatabaseAppCreate: "创建数据库应用",
                    DatabaseAppDetail: "数据库详情",
                    DatabaseAppPermission: "数据库授权",
                    DatabaseAppPermissionCreate: "创建数据库授权规则",
                    DatabaseAppPermissionDetail: "数据库授权详情",
                    DatabaseAppPermissionUpdate: "更新数据库授权规则",
                    DatabaseAppUpdate: "数据库应用更新",
                    KubernetesApp: "Kubernetes",
                    KubernetesAppCreate: "创建Kubernetes",
                    KubernetesAppDetail: "Kubernetes详情",
                    KubernetesAppPermission: "Kubernetes授权",
                    KubernetesAppPermissionCreate: "创建Kubernetes授权规则",
                    KubernetesAppPermissionDetail: "Kubernetes授权详情",
                    KubernetesAppPermissionUpdate: "更新Kubernetes授权规则",
                    KubernetesAppUpdate: "更新Kubernetes",
                    Acl: "访问控制",
                    UserAclList: "用户登录",
                    UserLoginACLCreate: "创建用户登录规则",
                    UserAclLists: "用户登录规则",
                    UserLoginACLUpdate: "更新用户登录规则",
                    UserAclDetail: "用户登录规则详情",
                    AssetAclList: "资产登录",
                    AssetAclCreate: "创建资产登录规则",
                    AssetAclUpdate: "更新资产登录规则",
                    AssetAclDetail: "资产登录规则详情",
                    DomainCreate: "创建网域",
                    DomainDetail: "网域详情",
                    DomainList: "网域列表",
                    DomainUpdate: "更新网域",
                    FileManager: "文件管理",
                    FtpLog: "FTP日志",
                    GatewayCreate: "创建网关",
                    GatewayUpdate: "更新网关",
                    JobCenter: "作业中心",
                    LabelCreate: "创建标签",
                    LabelList: "标签管理",
                    LabelUpdate: "更新标签",
                    LoginLog: "登录日志",
                    MyApps: "我的应用",
                    MyAssets: "我的资产",
                    OperateLog: "操作日志",
                    PasswordChangeLog: "改密日志",
                    Perms: "权限管理",
                    PersonalInformationImprovement: "个人信息完善",
                    PlatformCreate: "创建系统平台",
                    PlatformDetail: "系统平台详情",
                    PlatformList: "平台列表",
                    PlatformUpdate: "更新系统平台",
                    RemoteApp: "远程应用",
                    RemoteAppDetail: "远程应用详情",
                    RemoteAppPermission: "远程应用授权",
                    RemoteAppPermissionCreate: "创建远程应用授权规则",
                    RemoteAppPermissionDetail: "远程应用授权详情",
                    RemoteAppPermissionUpdate: "更新远程应用授权规则",
                    ApplicationDetail: "应用详情",
                    ApplicationPermission: "应用授权",
                    ApplicationPermissionCreate: "创建应用授权规则",
                    ApplicationPermissionDetail: "应用授权详情",
                    ApplicationPermissionUpdate: "更新应用授权规则",
                    RemoteAppUpdate: "更新远程应用",
                    ReplayStorageUpdate: "更新录像存储",
                    Detail: "详情",
                    SessionOffline: "历史会话",
                    SessionOnline: "在线会话",
                    Sessions: "会话管理",
                    Settings: "系统设置",
                    SystemUserCreate: "创建系统用户",
                    SystemUserDetail: "系统用户详情",
                    SystemUserList: "系统用户",
                    SystemUserUpdate: "更新系统用户",
                    AssetUserList: "资产用户",
                    TaskDetail: "任务详情",
                    TaskList: "任务列表",
                    TaskMonitor: "任务监控",
                    Terminal: "终端管理",
                    TicketDetail: "工单详情",
                    TicketCreate: "创建工单",
                    Tickets: "工单管理",
                    Templates: "模版管理",
                    TemplateDetail: "模版详情",
                    TemplateCreate: "创建模版",
                    TemplateUpdate: "更新模版",
                    UserCreate: "创建用户",
                    UserDetail: "用户详情",
                    UserFirstLogin: "首次登录",
                    UserGroupCreate: "创建用户组",
                    UserGroupDetail: "用户组详情",
                    UserGroupList: "用户组",
                    UserGroupUpdate: "更新用户组",
                    UserGuide: "用户向导",
                    UserList: "用户列表",
                    UserProfile: "个人信息",
                    UserUpdate: "更新用户",
                    Users: "用户管理",
                    WebFTP: "文件管理",
                    WebTerminal: "Web终端",
                    Notifications: "通知",
                    SiteMessageList: "站内信",
                    UserLoginACL: "用户登录"
                },
                sessions: {
                    SetToDefaultStorage: "设置为默认存储",
                    SetToDefault: "设为默认",
                    SetSuccess: "设置成功",
                    SetFailed: "设置失败",
                    StorageConfiguration: "存储配置",
                    accountKey: "账户密钥",
                    accountName: "账户名称",
                    active: "激活中",
                    alive: "在线",
                    asset: "资产",
                    target: "目标",
                    bucket: "桶名称",
                    command: "命令",
                    Activity: "活动",
                    commandStorage: "命令存储",
                    comment: "备注",
                    containerName: "容器名称",
                    date: "日期",
                    dateCreated: "创建日期",
                    dateEnd: "结束日期",
                    dateStart: "开始日期",
                    docType: "文档类型",
                    download: "下载",
                    downloadReplay: "下载录像",
                    duration: "时长",
                    endPoint: "端点",
                    endpointSuffix: "端点后缀",
                    go: "执行",
                    goto: "转到",
                    hosts: "主机",
                    httpPort: "HTTP端口",
                    id: "ID",
                    index: "索引",
                    info: "信息",
                    join: "加入",
                    loginFrom: "登录来源",
                    name: "名称",
                    protocol: "协议",
                    region: "地域",
                    EsDisabled: "节点不可用, 请联系管理员",
                    sessionActiveCount: "在线会话数量",
                    systemCpuLoad: "CPU负载",
                    systemDiskUsedPercent: "硬盘使用率",
                    systemMemoryUsedPercent: "内存使用率",
                    remoteAddr: "远端地址",
                    replay: "回放",
                    replaySession: "回放会话",
                    replayStorage: "录像存储",
                    riskLevel: "风险等级",
                    session: "会话",
                    sshPort: "SSH端口",
                    storage: "存储",
                    systemUser: "系统用户",
                    terminalDetail: "终端详情",
                    terminalUpdate: "更新终端",
                    terminalUpdateStorage: "更新终端存储",
                    terminate: "终断",
                    sessionTerminate: "会话终断",
                    test: "测试",
                    type: "类型",
                    user: "用户",
                    riskLevels: {
                        common: "普通"
                    },
                    Monitor: "监控",
                    XRDPNotSupport: "RDP 客户端会话, 暂不支持监控",
                    sessionMonitor: "监控",
                    TerminateTaskSendSuccessMsg: "终断任务已下发，请稍后刷新查看",
                    helpText: {
                        esUrl: "提示：如果有多台主机，请使用逗号 ( , ) 进行分割。（eg: http://www.jumpserver.a.com:3000,http://www.jumpserver.b.com:3000）",
                        esIndex: "es提供默认index：jumpserver",
                        esDocType: "es默认文档类型：command",
                        s3Endpoint: "S3 格式: http://s3.{REGION_NAME}.amazonaws.com<br>S3(China) 格式: http://s3.{REGION_NAME}.amazonaws.com.cn<br>如: http://s3.cn-north-1.amazonaws.com.cn",
                        ossEndpoint: "OSS 格式: http://{REGION_NAME}.aliyuncs.com<br>如: http://oss-cn-hangzhou.aliyuncs.com"
                    }
                },
                setting: {
                    Feature: "功能",
                    AlibabaCloud: "阿里云",
                    TencentCloud: "腾讯云",
                    Radius: "Radius",
                    VerifySignTmpl: "验证码短信模板",
                    Enable: "启用",
                    AuthLimit: "登录限制",
                    SMTP: "邮件服务器",
                    Perm: "授权",
                    Setting: "设置",
                    Config: "配置",
                    AuthMethod: "认证方式",
                    SSO: "单点认证",
                    AppAuth: "App认证",
                    OtherAuth: "其它认证",
                    Ops: "任务",
                    OTP: "MFA (OTP)",
                    JMSSSO: "SSO Token 登录",
                    MessageSub: "消息订阅",
                    Cleaning: "定期清理",
                    Other: "其它设置",
                    CASSetting: "CAS 配置",
                    Auth: "认证设置",
                    SyncSetting: "同步设置",
                    Advanced: "高级设置",
                    InsecureCommandNotifyToSubscription: "危险命令通知已升级到消息订阅中，支持更多通知方式",
                    ApiKeyList: "API Key 列表",
                    AssetCount: "资产数量",
                    Basic: "基本设置",
                    Corporation: "公司",
                    Create: "创建",
                    Edition: "版本",
                    Email: "邮件设置",
                    EmailContent: "邮件内容定制",
                    Expired: "过期时间",
                    Hostname: "主机名",
                    ImportLicense: "导入许可证",
                    ImportLicenseTip: "请导入许可证",
                    Ldap: "LDAP",
                    License: "许可证",
                    Senior: "高级",
                    LicenseFile: "许可证文件",
                    PasswordCheckRule: "密码强弱规则",
                    Security: "安全设置",
                    SecuritySetting: "安全设置",
                    SystemMessageSubscription: "系统消息订阅",
                    insecureCommandEmailUpdate: "点我设置",
                    SubscriptionID: "订阅授权ID",
                    Terminal: "终端设置",
                    all: "全部",
                    authLdap: "启用LDAP认证",
                    authLdapBindDn: "绑定DN",
                    authLdapBindPassword: "密码",
                    authLdapSearchFilter: "用户过滤器",
                    authLdapSearchOu: "用户OU",
                    authLdapServerUri: "LDAP地址",
                    authLdapUserAttrMap: "用户属性映射",
                    authCASAttrMap: "用户属性映射",
                    SignaturesAndTemplates: "Signatures and Templates",
                    unselectedUser: "没有选择用户",
                    auto: "自动",
                    basicSetting: "基本设置",
                    communityEdition: "社区版",
                    consult: "咨询",
                    CreateUserSetting: "创建用户内容",
                    emailCustomUserCreatedBody: "创建用户邮件的内容",
                    emailCustomUserCreatedHonorific: "创建用户邮件的敬语",
                    emailCustomUserCreatedSignature: "署名",
                    emailCustomUserCreatedSubject: "创建用户邮件的主题",
                    emailEmailFrom: "发送账号",
                    emailHost: "SMTP主机",
                    emailHostPassword: "SMTP密码",
                    emailHostUser: "SMTP账号",
                    emailPort: "SMTP端口",
                    emailRecipient: "测试收件人",
                    emailSubjectPrefix: "Email主题前缀",
                    emailTest: "测试连接",
                    emailUserSSL: "使用SSL",
                    emailUserTLS: "使用TLS",
                    InsecureCommandAlert: "危险命令告警",
                    SecurityInsecureCommandEmailReceiver: "告警接收邮件",
                    MailSend: "邮件发送",
                    LDAPServerInfo: "LDAP 服务器",
                    LDAPUser: "LDAP 用户",
                    helpText: {
                        ApiKeyList: "使用api key签名请求头，每个请求的头部是不一样的, 请查阅使用文档",
                        authLdapSearchFilter: "可能的选项是(cn或uid或sAMAccountName=%(user)s)",
                        authLdapSearchOu: "使用|分隔各OU",
                        authLdapUserAttrMap: "用户属性映射代表怎样将LDAP中用户属性映射到jumpserver用户上，username, name,email 是jumpserver的属性",
                        emailCustomUserCreatedBody: "提示: 创建用户时，发送设置密码邮件的内容",
                        emailCustomUserCreatedHonorific: "提示: 创建用户时，发送设置密码邮件的敬语 (例如: 您好)",
                        emailCustomUserCreatedSignature: "提示: 邮件的署名 (例如: jumpserver)",
                        emailCustomUserCreatedSubject: "提示: 创建用户时，发送设置密码邮件的主题 (例如: 创建用户成功)",
                        emailEmailFrom: "",
                        emailHostPassword: "提示：一些邮件提供商需要输入的是Token",
                        emailRecipient: "提示：仅用来作为测试邮件收件人",
                        emailSubjectPrefix: "提示: 一些关键字可能会被邮件提供商拦截，如 跳板机、JumpServer",
                        securityLoginLimitTime: "提示：（单位：分）当用户登录失败次数达到限制后，那么在此时间间隔内禁止登录",
                        securityMaxIdleTime: "提示：如果超过该配置没有操作，连接会被断开 （单位：分）",
                        securityPasswordExpirationTime: "提示：（单位：天）如果用户在此期间没有更新密码，用户密码将过期失效； 密码过期提醒邮件将在密码过期前5天内由系统（每天）自动发送给用户",
                        siteUrl: "eg: http://jumpserver.abc.com:8080",
                        terminalHeartbeatInterval: "单位: 秒",
                        terminalSessionKeepDuration: "单位：天。 会话、录像、命令记录超过该时长将会被删除(仅影响数据库存储, oss等不受影响)",
                        terminalTelnetRegex: "登录telnet服务器成功后的提示正则表达式，如: Last\\s*login|success|成功",
                        userGuideUrl: "用户第一次登录，修改profile后重定向到地址",
                        SecurityInsecureCommandEmailReceiver: "多个邮箱时，以半角逗号','分隔"
                    },
                    helpTip: {
                        emailUserSSL: "如果SMTP端口是465，通常需要启用SSL",
                        emailUserTLS: "如果SMTP端口是587，通常需要启用TLS",
                        securityCommandExecution: "允许用户批量执行命令",
                        securityMfaAuth: "开启后，所有用户登录必须使用多因子认证（对所有用户有效，包括管理员)",
                        securityPasswordLowerCase: "开启后，用户密码修改、重置必须包含小写字母",
                        securityPasswordNumber: "开启后，用户密码修改、重置必须包含数字字符",
                        securityPasswordSpecialChar: "开启后，用户密码修改、重置必须包含特殊字符",
                        securityPasswordUpperCase: "开启后，用户密码修改、重置必须包含大写字母",
                        securityServiceAccountRegistration: "允许使用bootstrap token注册终端, 当终端注册成功后可以禁止",
                        SecurityInsecureCommand: "开启后，当资产上有危险命令执行时，会发送邮件告警通知"
                    },
                    validatorMessage: {
                        EnsureThisValueIsGreaterThanOrEqualTo3: "请确保该值大于或者等于 3",
                        EnsureThisValueIsGreaterThanOrEqualTo5: "请确保该值大于或者等于 5",
                        EnsureThisValueIsGreaterThanOrEqualTo6: "请确保该值大于或者等于 6"
                    },
                    import: "导入",
                    importLdapUserTip: "请先提交LDAP配置再进行导入",
                    importLdapUserTitle: "LDAP 用户列表",
                    ldapBulkImport: "用户导入",
                    ldapConnectTest: "测试连接",
                    ldapLoginTest: "测试登录",
                    password: "密码",
                    passwordPlaceholder: "请输入密码",
                    refreshLdapUser: "刷新缓存",
                    securityCommandExecution: "批量命令",
                    securityLoginLimitCount: "限制登录失败次数",
                    securityLoginLimitTime: "禁止登录时间间隔",
                    securityMaxIdleTime: "连接最大空闲时间",
                    securityMfaAuth: "多因子认证",
                    securityPasswordExpirationTime: "密码过期时间",
                    securityPasswordLowerCase: "必须包含小写字母",
                    securityPasswordMinLength: "密码最小长度",
                    securityPasswordNumber: "必须包含数字字符",
                    securityPasswordSpecialChar: "必须包含特殊字符",
                    securityPasswordUpperCase: "必须包含大写字母",
                    securityServiceAccountRegistration: "终端注册",
                    siteUrl: "当前站点URL",
                    technologyConsult: "技术咨询",
                    terminalAssetListPageSize: "资产分页每页数量",
                    terminalAssetListSortBy: "资产列表排序",
                    terminalHeartbeatInterval: "心跳间隔",
                    terminalPasswordAuth: "密码认证",
                    terminalPublicKeyAuth: "密钥认证",
                    terminalSessionKeepDuration: "会话保留时长",
                    terminalTelnetRegex: "Telnet 成功正则表达式",
                    testLdapLoginSubtitle: "请先提交LDAP配置再进行测试登录",
                    testLdapLoginTitle: "测试LDAP 用户登录",
                    userGuideUrl: "用户向导URL",
                    username: "用户名",
                    usernamePlaceholder: "请输入用户名",
                    refreshLdapCache: "刷新Ldap缓存，请稍后",
                    LicenseExpired: "许可证已经过期",
                    LicenseWillBe: "许可证即将在 ",
                    Expire: " 过期",
                    WeCom: "企业微信",
                    DingTalk: "钉钉",
                    dingTalkTest: "测试",
                    weComTest: "测试",
                    FeiShu: "飞书",
                    SMS: "短信设置",
                    feiShuTest: "测试",
                    setting: "设置",
                    SMSProvider: "短信服务商"
                },
                tickets: {
                    OneAssigneeType: "一级受理人类型",
                    OneAssignee: "一级受理人",
                    TwoAssigneeType: "二级受理人类型",
                    TwoAssignee: "二级受理人",
                    SuperAdmin: "超级管理员",
                    OrgAdmin: "组织管理员",
                    SuperOrgAdmin: "超级管理员+组织管理员",
                    CustomUser: "自定义用户",
                    ApprovalLevel: "审批级别",
                    FlowDetail: "流程详情",
                    PermissionName: "授权规则名称",
                    Accept: "同意",
                    AssignedMe: "待我审批",
                    Assignee: "处理人",
                    Assignees: "待处理人",
                    Close: "关闭",
                    OpenStatus: "开启",
                    CloseStatus: "关闭",
                    Comment: "备注",
                    MyTickets: "我发起的",
                    RequestPerm: "授权申请",
                    Reject: "拒绝",
                    date: "日期",
                    reply: "回复",
                    status: "状态",
                    title: "标题",
                    action: "动作",
                    type: "类型",
                    user: "用户",
                    Status: "状态",
                    Open: "待处理",
                    OrgName: "授权组织名称",
                    AssignedInfo: "审批信息",
                    OpenTicket: "创建工单",
                    HandleTicket: "处理工单",
                    FinishedTicket: "完成工单",
                    IP: "IP",
                    Hostname: "主机名",
                    Asset: "资产",
                    SystemUser: "系统用户",
                    RequestAssetPerm: "申请资产授权",
                    RequestApplicationPerm: "申请应用授权",
                    Applicant: "申请人",
                    Pending: "待处理",
                    Approved: "已同意",
                    Rejected: "已拒绝",
                    Closed: "已完成",
                    StateClosed: "已关闭",
                    helpText: {
                        ips: "请输入逗号分割的IP地址组",
                        fuzzySearch: "支持模糊搜索",
                        application: "请输入逗号分割的应用名称组"
                    },
                    ApplyRunUser: "申请运行的用户",
                    ApplyRunAsset: "申请运行的资产",
                    ApplyRunSystemUser: "申请运行的系统用户",
                    ApplyRunCommand: "申请运行的命令",
                    ApplyFromSession: "会话",
                    ApplyFromCMDFilterRule: "命令过滤规则"
                },
                tree: {
                    AddAssetToNode: "添加资产到节点",
                    CreateNode: "创建节点",
                    DeleteNode: "删除节点",
                    MoveAssetToNode: "移动资产到节点",
                    RenameNode: "重命名节点",
                    ShowAssetAllChildrenNode: "显示所有子节点资产",
                    ShowAssetOnlyCurrentNode: "仅显示当前节点资产",
                    CheckAssetsAmount: "校对资产数量",
                    ShowNodeInfo: "显示节点详情",
                    TestNodeAssetConnectivity: "测试资产节点可连接性",
                    UpdateNodeAssetHardwareInfo: "更新节点资产硬件信息"
                },
                users: {
                    MessageSubscription: "消息订阅",
                    AuthSettings: "认证配置",
                    UserName: "姓名",
                    Account: "账户",
                    Authentication: "认证",
                    Comment: "备注",
                    ConfirmPassword: "确认密码",
                    DateExpired: "失效日期",
                    DateJoined: "创建日期",
                    DateLastLogin: "最后登录日期",
                    DatePasswordLastUpdated: "最后更新密码日期",
                    DatePasswordUpdated: "密码更新日期",
                    DescribeOfGuide: "欢迎使用JumpServer堡垒机系统，获取更多信息请点击",
                    Email: "邮件",
                    Phone: "手机号",
                    WeCom: "企业微信",
                    DingTalk: "钉钉",
                    FeiShu: "飞书",
                    FingerPrint: "指纹",
                    FirstLogin: "首次登录",
                    OrgUser: "组织用户",
                    OrgAdmin: "组织管理员",
                    OrgAuditor: "组织审计员",
                    InviteUser: "邀请用户",
                    Invite: "邀请",
                    InviteUserInOrg: "邀请用户加入此组织",
                    Guide: "向导",
                    setWeCom: "设置企业微信认证",
                    setDingTalk: "设置钉钉认证",
                    setFeiShu: "设置飞书认证",
                    HelpText: {
                        MFAOfUserFirstLoginPersonalInformationImprovementPage: "启用多因子认证，使账号更加安全。<br/> 启用之后您将会在下次登录时进入多因子认证绑定流程；您也可以在（个人信息->快速修改->更改多因子设置）中直接绑定！",
                        MFAOfUserFirstLoginUserGuidePage: "为了保护您和公司的安全，请妥善保管您的账户、密码和密钥等重要敏感信息；（如：设置复杂密码，并启用多因子认证）",
                        SSHKeyOfProfileSSHUpdatePage: "复制你的公钥到这里",
                        OrgRoleHelpText: "组织角色是用户在当前组织中的角色"
                    },
                    IAgree: "我同意",
                    ImprovePersonalInformation: "完善个人信息",
                    IsActive: "激活",
                    LoginConfirm: "登录复核",
                    LoginPasswordSetting: "登录密码设置",
                    MFA: "MFA",
                    Existing: "已存在",
                    MfaLevel: "多因子认证",
                    Name: "姓名",
                    NewPassword: "新密码",
                    OldPassword: "原密码",
                    OldSSHKey: "原来SSH公钥",
                    Profile: "个人信息",
                    ProfileSetting: "个人信息设置",
                    Remove: "移除",
                    ResetAndDownloadSSHKey: "重置并下载密钥",
                    ResetPublicKeyAndDownload: "重置并下载SSH密钥",
                    Role: "角色",
                    SuperRole: "系统角色",
                    OrgRole: "组织角色",
                    SSHKey: "SSH公钥",
                    SSHKeySetting: "SSH公钥设置",
                    Secure: "安全",
                    SetMFA: "设置多因子认证",
                    Source: "来源",
                    TermsAndConditions: "条款和条件",
                    UpdateMFA: "更改多因子认证",
                    UpdateSSHKey: "更新SSH公钥",
                    UserGroups: "用户组",
                    Username: "用户名",
                    Users: "用户",
                    quickUpdate: {
                        resetMFA: "重置MFA",
                        resetMFAWarningMsg: "你确定要重置用户的 MFA 吗?",
                        resetMFAdSuccessMsg: "重置MFA成功, 用户可以重新设置MFA了",
                        resetPassword: "重置密码",
                        resetPasswordSuccessMsg: "已向用户发送重置密码消息",
                        resetPasswordWarningMsg: "你确定要发送重置用户密码的邮件吗",
                        resetSSHKey: "重置SSH密钥",
                        resetSSHKeySuccessMsg: "发送邮件任务已提交, 用户稍后会收到重置密钥邮件",
                        resetSSHKeyWarningMsg: "你确定要发送重置用户的SSH Key的邮件吗?",
                        resetWechat: "解绑企业微信",
                        resetWechatLoginWarningMsg: "你确定要解绑用户的 企业微信 吗?",
                        resetWechatLoginSuccessMsg: "重置成功, 用户可以重新绑定企业微信了",
                        resetDingTalk: "解绑钉钉",
                        resetDingTalkLoginWarningMsg: "你确定要解绑用户的 钉钉 吗?",
                        resetDingTalkLoginSuccessMsg: "重置成功, 用户可以重新绑定钉钉了",
                        send: "发送",
                        unbind: "解绑",
                        unblock: "解锁",
                        unblockSuccessMsg: "解锁成功",
                        unblockUser: "解锁用户"
                    },
                    removeFromOrgWarningMsg: "你确定从组织移除 ",
                    tabs: {
                        assetPermissionRules: "资产授权规则",
                        databasePermissionRules: "数据库授权规则",
                        k8sPermissionRules: "Kubernetes授权规则",
                        grantedAssets: "授权的资产",
                        grantedK8Ss: "授权的Kubernetes",
                        grantedDatabases: "授权的数据库",
                        grantedRemoteApps: "授权的远程应用",
                        grantedApplications: "授权的应用",
                        ApplicationPermissionRules: "应用授权规则",
                        remoteAppPermissionRules: "远程应用授权规则"
                    },
                    dateLastLogin: "最后登录日期",
                    needUpdatePasswordNextLogin: "下次登录须修改密码",
                    UpdatePassword: "更新密码",
                    SetPublicKey: "设置SSH公钥",
                    passwordExpired: "密码过期了",
                    passwordWillExpiredPrefixMsg: "密码即将在 ",
                    passwordWillExpiredSuffixMsg: "天 后过期，请尽快修改您的密码。"
                },
                notifications: {
                    MessageType: "消息类型",
                    Receivers: "接收人",
                    Subscription: "消息订阅",
                    ChangeReceiver: "修改消息接收人",
                    Subject: "主题",
                    Message: "消息",
                    DeliveryTime: "发送时间",
                    HasRead: "是否已读",
                    Sender: "发送人",
                    MarkAsRead: "标记已读",
                    NoUnreadMsg: "暂无未读消息",
                    SiteMessage: "站内信",
                    SMS: "短信"
                },
                xpack: {
                    NavHelp: "导航栏链接",
                    helpDocument: "文档链接",
                    helpSupport: "支持链接",
                    officialWebsite: "官网链接",
                    helpDocumentTip: "可以更改网站导航栏 帮助 -> 文档 的网址",
                    helpSupportTip: "可以更改网站导航栏 帮助 -> 支持 的网址",
                    officialWebsiteTip: "可以更改网站导航栏 帮助 -> 官网 的网址",
                    Admin: "管理员",
                    Asset: "资产",
                    Database: "数据库",
                    AssetCount: "资产数量",
                    Auditor: "审计员",
                    ChangeAuthPlan: {
                        AddAsset: "添加资产",
                        AddNode: "添加节点",
                        AddSystemUser: "添加系统用户",
                        Asset: "资产",
                        Database: "数据库",
                        DatabaseId: "数据库Id",
                        AppAmount: "应用数量",
                        SystemUserAmount: "系统用户数量",
                        SystemUser: "系统用户",
                        SystemUserId: "系统用户Id",
                        AssetAmount: "资产数量",
                        AssetAndNode: "资产和节点",
                        ChangeAuthPlan: "改密计划",
                        AssetChangeAuthPlan: "资产改密计划",
                        AppChangeAuthPlan: "应用改密计划",
                        AssetChangeAuthPlanCreate: "创建资产改密计划",
                        AppChangeAuthPlanCreate: "创建应用改密计划",
                        AssetChangeAuthPlanUpdate: "更新资产改密计划",
                        AppChangeAuthPlanUpdate: "更新应用改密计划",
                        SymbolSet: "特殊符号集合",
                        SymbolSetHelpText: "请输入此类型数据库支持的特殊符号集合，若生成的随机密码中有此类数据库不支持的特殊字符，改密计划将会失败",
                        CyclePerform: "周期执行",
                        DateJoined: "创建日期",
                        DateStart: "开始日期",
                        DateUpdated: "更新日期",
                        Detail: "详情",
                        Execute: "执行",
                        ExecutionDetail: "执行详情",
                        ExecutionList: "执行列表",
                        ExecutionTimes: "执行次数",
                        validatorMessage: {
                            EnsureThisValueIsGreaterThanOrEqualTo1: "请确保该值大于或者等于 1"
                        },
                        HelpText: {
                            CrontabOfCreateUpdatePage: '例如：每周日 03:05 执行 <5 3 * * 0> <br/> 使用5位 Linux crontab 表达式 <分 时 日 月 星期> （<a href="https://tool.lu/crontab/" target="_blank">在线工具</a>） <br/> 如果同时设置了定期执行和周期执行，优先使用定期执行',
                            IntervalOfCreateUpdatePage: "单位：时",
                            UsernameOfCreateUpdatePage: "目标主机上用户的用户名；如果已️存在，修改用户密码；如果不存在，添加用户并设置密码；"
                        },
                        Log: "日志",
                        ManualExecutePlan: "手动执行计划",
                        Name: "名称",
                        NodeAmount: "节点数量",
                        PasswordLength: "密码长度",
                        PasswordStrategy: "密码策略",
                        SecretKeyStrategy: "密钥策略",
                        RegularlyPerform: "定期执行",
                        Result: "结果",
                        Retry: "重试",
                        Success: "成功",
                        TaskList: "任务列表",
                        TimeDelta: "运行时间",
                        Timer: "定时执行",
                        TimerPeriod: "定时执行周期",
                        Username: "用户名"
                    },
                    Cloud: {
                        ServerAccountKey: "服务账号密钥",
                        IPNetworkSegment: "IP网段",
                        Aliyun: "阿里云",
                        Qcloud: "腾讯云",
                        QingyunPrivatecloud: "青云私有云",
                        HuaweiPrivatecloud: "华为私有云",
                        GCP: "谷歌云",
                        AWS_China: "AWS(中国)",
                        AWS_Int: "AWS(国际)",
                        HuaweiCloud: "华为云",
                        Azure: "Azure(中国)",
                        Azure_Int: "Azure(国际)",
                        HostnameStrategy: "用于生成资产主机名。例如：1. 实例名称 (instanceDemo)；2. 实例名称和部分IP(后两位) (instanceDemo-250.1)",
                        IsAlwaysUpdate: "资产信息保持最新",
                        AccountCreate: "创建账户",
                        AccountList: "账户列表",
                        AccountUpdate: "更新账户",
                        AccountDetail: "账户详情",
                        Cloud: "云管中心",
                        CloudCenter: "云管中心",
                        Provider: "云服务商",
                        Validity: "有效",
                        IsAlwaysUpdateHelpTips: "每次执行同步任务时，是否同步更新资产的信息，包括主机名、IP、系统平台、管理用户",
                        SyncInstanceTaskCreate: "创建同步实例任务",
                        SyncInstanceTaskList: "同步实例任务列表",
                        SyncInstanceTaskDetail: "同步实例任务详情",
                        SyncInstanceTaskUpdate: "更新同步实例任务",
                        SyncInstanceTaskHistoryList: "同步历史列表",
                        SyncInstanceTaskHistoryAssetList: "同步实例列表",
                        CloudSource: "同步源",
                        SaveSetting: "同步设置",
                        Name: "名称",
                        Account: "账户",
                        Node: "节点",
                        AdminUser: "特权用户",
                        Periodic: "执行周期",
                        PeriodicPerform: "定时执行",
                        RegularlyPerform: "定期执行",
                        CyclePerform: "周期执行",
                        DateLastSync: "最后同步日期",
                        DateCreated: "创建日期",
                        Region: "地域",
                        Comment: "备注",
                        RunTaskManually: "手动执行",
                        True: "是",
                        False: "否",
                        NewCount: "新增",
                        UnSyncCount: "未同步",
                        SyncedCount: "已同步",
                        ReleasedCount: "已释放",
                        DateSync: "同步日期",
                        Status: "状态",
                        Log: "日志",
                        DeleteReleasedAssets: "删除已释放资产"
                    },
                    Template: {
                        Template: "模版管理"
                    },
                    Corporation: "公司",
                    Edition: "版本",
                    Execute: "执行",
                    Expired: "过期时间",
                    GatherUser: {
                        GatherUser: "收集用户",
                        GatherUserList: "收集用户",
                        GatherUserTaskCreate: "创建任务",
                        GatherUserTaskList: "任务列表",
                        GatherUserTaskUpdate: "更新任务",
                        GatherUserTaskDetail: "任务详情",
                        GatherUserTaskExecutionList: "任务执行列表"
                    },
                    Import: "导入",
                    ImportLicense: "导入许可证",
                    ImportLicenseTip: "请导入许可证",
                    InterfaceSettings: "界面设置",
                    License: "许可证",
                    SystemMonitor: "系统监控",
                    ServiceRatio: "组件负载统计",
                    LoadStatus: "组件状态",
                    NormalLoad: "正常",
                    HighLoad: "较高",
                    CriticalLoad: "严重",
                    Offline: "离线",
                    LicenseDetail: "许可证详情",
                    LicenseFile: "许可证文件",
                    NoLicense: "暂无许可证",
                    Node: "节点",
                    Organization: {
                        OrganizationCreate: "创建组织",
                        OrganizationDetail: "组织详情",
                        OrganizationList: "组织管理",
                        OrganizationUpdate: "更新组织",
                        OrganizationMembership: "组织成员",
                        DeleteOrgTitle: "请确保组织内的以下信息已删除",
                        DeleteOrgMsg: "用户列表、用户组、资产列表、网域列表、管理用户、系统用户、标签管理、资产授权规则",
                        OrgRole: "组织角色",
                        users_amount: "用户数量",
                        groups_amount: "用户组数量",
                        assets_amount: "资产数量",
                        admin_users_amount: "特权用户数量",
                        system_users_amount: "系统用户数量",
                        applications_amount: "应用数量",
                        asset_perms_amount: "资产授权数量",
                        app_perms_amount: "应用授权数量",
                        CreateOrgMsg: "请去组织详情内添加用户",
                        AddOrgMembers: "添加组织成员"
                    },
                    RestoreButton: "恢复默认",
                    SubscriptionID: "订阅授权ID",
                    Timer: "定时执行",
                    User: "用户",
                    Vault: {
                        Create: "创建密码",
                        Vault: "密码匣子"
                    },
                    consult: "咨询",
                    favicon: "网站图标",
                    faviconTip: "提示：网站图标（建议图片大小为: 16px*16px）",
                    loginImage: "登录页面图片",
                    loginImageTip: "提示：将会显示在企业版用户登录页面（建议图片大小为: 492*472px）",
                    loginTitle: "登录页面标题",
                    loginTitleTip: "提示：将会显示在企业版用户登录页面（eg: 欢迎使用JumpServer开源堡垒机)",
                    logoIndex: "Logo (带文字)",
                    logoIndexTip: "提示：将会显示在管理页面左上方（建议图片大小为: 185px*55px）",
                    logoLogout: "Logo (不带文字)",
                    logoLogoutTip: "提示：将会显示在企业版用户退出页面（建议图片大小为：82px*82px）",
                    restoreDialogMessage: "您确定要恢复默认初始化吗？",
                    restoreDialogTitle: "你确认吗",
                    technologyConsult: "技术咨询",
                    RegularlyPerform: "定期执行",
                    CyclePerform: "周期执行",
                    HelpText: {
                        CrontabOfCreateUpdatePage: '例如：每周日 03:05 执行 <5 3 * * 0> <br/> 使用5位 Linux crontab 表达式 <分 时 日 月 星期> （<a href="https://tool.lu/crontab/" target="_blank">在线工具</a>） <br/> 如果同时设置了定期执行和周期执行，优先使用定期执行',
                        IntervalOfCreateUpdatePage: "单位：时",
                        UsernameOfCreateUpdatePage: "目标主机上用户的用户名；如果已️存在，修改用户密码；如果不存在，添加用户并设置密码；"
                    }
                }
            }
        },
        7509: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("75fc"),
                r = (n("d25f"), n("57e7"), n("768b")),
                i = (n("ac4d"), n("8a81"), n("ac6a"), n("7f7f"), n("6762"), n("2fdb"), n("759f"), {
                    visitedViews: [],
                    cachedViews: []
                }),
                s = {
                    ADD_VISITED_VIEW: function(e, t) {
                        e.visitedViews.some((function(e) {
                            return e.path === t.path
                        })) || e.visitedViews.push(Object.assign({}, t, {
                            title: t.meta.title || "no-name"
                        }))
                    },
                    ADD_CACHED_VIEW: function(e, t) {
                        e.cachedViews.includes(t.name) || t.meta.noCache || e.cachedViews.push(t.name)
                    },
                    DEL_VISITED_VIEW: function(e, t) {
                        var n = !0,
                            a = !1,
                            i = void 0;
                        try {
                            for (var s, o = e.visitedViews.entries()[Symbol.iterator](); !(n = (s = o.next()).done); n = !0) {
                                var c = Object(r["a"])(s.value, 2),
                                    l = c[0],
                                    u = c[1];
                                if (u.path === t.path) {
                                    e.visitedViews.splice(l, 1);
                                    break
                                }
                            }
                        } catch (d) {
                            a = !0, i = d
                        } finally {
                            try {
                                n || null == o.return || o.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                    },
                    DEL_CACHED_VIEW: function(e, t) {
                        var n = e.cachedViews.indexOf(t.name);
                        n > -1 && e.cachedViews.splice(n, 1)
                    },
                    DEL_OTHERS_VISITED_VIEWS: function(e, t) {
                        e.visitedViews = e.visitedViews.filter((function(e) {
                            return e.meta.affix || e.path === t.path
                        }))
                    },
                    DEL_OTHERS_CACHED_VIEWS: function(e, t) {
                        var n = e.cachedViews.indexOf(t.name);
                        e.cachedViews = n > -1 ? e.cachedViews.slice(n, n + 1) : []
                    },
                    DEL_ALL_VISITED_VIEWS: function(e) {
                        var t = e.visitedViews.filter((function(e) {
                            return e.meta.affix
                        }));
                        e.visitedViews = t
                    },
                    DEL_ALL_CACHED_VIEWS: function(e) {
                        e.cachedViews = []
                    },
                    UPDATE_VISITED_VIEW: function(e, t) {
                        var n = !0,
                            a = !1,
                            r = void 0;
                        try {
                            for (var i, s = e.visitedViews[Symbol.iterator](); !(n = (i = s.next()).done); n = !0) {
                                var o = i.value;
                                if (o.path === t.path) {
                                    o = Object.assign(o, t);
                                    break
                                }
                            }
                        } catch (c) {
                            a = !0, r = c
                        } finally {
                            try {
                                n || null == s.return || s.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                    }
                },
                o = {
                    addView: function(e, t) {
                        var n = e.dispatch;
                        n("addVisitedView", t), n("addCachedView", t)
                    },
                    addVisitedView: function(e, t) {
                        var n = e.commit;
                        n("ADD_VISITED_VIEW", t)
                    },
                    addCachedView: function(e, t) {
                        var n = e.commit;
                        n("ADD_CACHED_VIEW", t)
                    },
                    delView: function(e, t) {
                        var n = e.dispatch,
                            r = e.state;
                        return new Promise((function(e) {
                            n("delVisitedView", t), n("delCachedView", t), e({
                                visitedViews: Object(a["a"])(r.visitedViews),
                                cachedViews: Object(a["a"])(r.cachedViews)
                            })
                        }))
                    },
                    delVisitedView: function(e, t) {
                        var n = e.commit,
                            r = e.state;
                        return new Promise((function(e) {
                            n("DEL_VISITED_VIEW", t), e(Object(a["a"])(r.visitedViews))
                        }))
                    },
                    delCachedView: function(e, t) {
                        var n = e.commit,
                            r = e.state;
                        return new Promise((function(e) {
                            n("DEL_CACHED_VIEW", t), e(Object(a["a"])(r.cachedViews))
                        }))
                    },
                    delOthersViews: function(e, t) {
                        var n = e.dispatch,
                            r = e.state;
                        return new Promise((function(e) {
                            n("delOthersVisitedViews", t), n("delOthersCachedViews", t), e({
                                visitedViews: Object(a["a"])(r.visitedViews),
                                cachedViews: Object(a["a"])(r.cachedViews)
                            })
                        }))
                    },
                    delOthersVisitedViews: function(e, t) {
                        var n = e.commit,
                            r = e.state;
                        return new Promise((function(e) {
                            n("DEL_OTHERS_VISITED_VIEWS", t), e(Object(a["a"])(r.visitedViews))
                        }))
                    },
                    delOthersCachedViews: function(e, t) {
                        var n = e.commit,
                            r = e.state;
                        return new Promise((function(e) {
                            n("DEL_OTHERS_CACHED_VIEWS", t), e(Object(a["a"])(r.cachedViews))
                        }))
                    },
                    delAllViews: function(e, t) {
                        var n = e.dispatch,
                            r = e.state;
                        return new Promise((function(e) {
                            n("delAllVisitedViews", t), n("delAllCachedViews", t), e({
                                visitedViews: Object(a["a"])(r.visitedViews),
                                cachedViews: Object(a["a"])(r.cachedViews)
                            })
                        }))
                    },
                    delAllVisitedViews: function(e) {
                        var t = e.commit,
                            n = e.state;
                        return new Promise((function(e) {
                            t("DEL_ALL_VISITED_VIEWS"), e(Object(a["a"])(n.visitedViews))
                        }))
                    },
                    delAllCachedViews: function(e) {
                        var t = e.commit,
                            n = e.state;
                        return new Promise((function(e) {
                            t("DEL_ALL_CACHED_VIEWS"), e(Object(a["a"])(n.cachedViews))
                        }))
                    },
                    updateVisitedView: function(e, t) {
                        var n = e.commit;
                        n("UPDATE_VISITED_VIEW", t)
                    }
                };
            t["default"] = {
                namespaced: !0,
                state: i,
                mutations: s,
                actions: o
            }
        },
        "753e": function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("el-date-picker", e._g(e._b({
                        staticClass: "datepicker",
                        attrs: {
                            type: "datetimerange",
                            "range-separator": this.$t("common.To"),
                            "start-placeholder": this.$t("common.DateStart"),
                            "end-placeholder": this.$t("common.DateEnd"),
                            size: "small",
                            clearable: !1,
                            "picker-options": e.pickerOptions,
                            "default-time": ["00:00:01", "23:59:59"]
                        },
                        on: {
                            change: e.handleDateChange
                        },
                        model: {
                            value: e.value,
                            callback: function(t) {
                                e.value = t
                            },
                            expression: "value"
                        }
                    }, "el-date-picker", e.$attrs, !1), e.$listeners))
                },
                r = [],
                i = (n("c5f6"), {
                    name: "DatetimeRangePicker",
                    components: {},
                    props: {
                        dateStart: {
                            type: [Number, String, Date],
                            default: null
                        },
                        dateEnd: {
                            type: [Number, String, Date],
                            default: null
                        }
                    },
                    data: function() {
                        var e = this.dateStart || this.$route.query["date_start"],
                            t = this.dateEnd || this.$route.query["date_end"],
                            n = new Date(e),
                            a = new Date(t);
                        return {
                            value: [n, a],
                            pickerOptions: {
                                shortcuts: [{
                                    text: this.$t("common.DateLast24Hours"),
                                    onClick: function(e) {
                                        var t = new Date,
                                            n = new Date;
                                        n.setTime(n.getTime() - 864e5), e.$emit("pick", [n, t])
                                    }
                                }, {
                                    text: this.$t("common.DateLastWeek"),
                                    onClick: function(e) {
                                        var t = new Date,
                                            n = new Date;
                                        n.setTime(n.getTime() - 6048e5), e.$emit("pick", [n, t])
                                    }
                                }, {
                                    text: this.$t("common.DateLastMonth"),
                                    onClick: function(e) {
                                        var t = new Date,
                                            n = new Date;
                                        n.setTime(n.getTime() - 2592e6), e.$emit("pick", [n, t])
                                    }
                                }, {
                                    text: this.$t("common.DateLast3Months"),
                                    onClick: function(e) {
                                        var t = new Date,
                                            n = new Date;
                                        n.setTime(n.getTime() - 7776e6), e.$emit("pick", [n, t])
                                    }
                                }]
                            }
                        }
                    },
                    mounted: function() {
                        this.$log.debug("Datetime range picker value: ", this.value)
                    },
                    methods: {
                        handleDateChange: function(e) {
                            e[0].getTime() && e[1].getTime() && (this.$log.debug("Date change: ", e), this.$emit("dateChange", e))
                        }
                    }
                }),
                s = i,
                o = (n("03da"), n("2877")),
                c = Object(o["a"])(s, a, r, !1, null, "6dd1c0ae", null);
            t["a"] = c.exports
        },
        7541: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return o
            }));
            var a = n("0692"),
                r = {
                    required: !0,
                    message: a["a"].t("common.fieldRequiredError"),
                    trigger: "blur"
                },
                i = {
                    required: !0,
                    message: a["a"].t("common.fieldRequiredError"),
                    trigger: "change"
                },
                s = {
                    type: "email",
                    message: a["a"].t("common.InputEmailAddress"),
                    trigger: ["blur", "change"]
                };
            t["c"] = {
                Required: r,
                RequiredChange: i,
                EmailCheck: s
            };
            var o = {
                required: !0,
                trigger: "change",
                validator: function(e, t, n) {
                    try {
                        JSON.parse(t), n()
                    } catch (r) {
                        n(new Error(a["a"].t("common.InvalidJson")))
                    }
                }
            }
        },
        "76da": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-th",
                    use: "icon-th-usage",
                    viewBox: "0 0 1024 1024",
                    content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-th"><defs><style type="text/css"></style></defs><path d="M292.571429 713.142857l0 109.714286q0 22.857143-16 38.857143t-38.857143 16l-182.857143 0q-22.857143 0-38.857143-16t-16-38.857143l0-109.714286q0-22.857143 16-38.857143t38.857143-16l182.857143 0q22.857143 0 38.857143 16t16 38.857143zm0-292.571429l0 109.714286q0 22.857143-16 38.857143t-38.857143 16l-182.857143 0q-22.857143 0-38.857143-16t-16-38.857143l0-109.714286q0-22.857143 16-38.857143t38.857143-16l182.857143 0q22.857143 0 38.857143 16t16 38.857143zm365.714286 292.571429l0 109.714286q0 22.857143-16 38.857143t-38.857143 16l-182.857143 0q-22.857143 0-38.857143-16t-16-38.857143l0-109.714286q0-22.857143 16-38.857143t38.857143-16l182.857143 0q22.857143 0 38.857143 16t16 38.857143zm-365.714286-585.142857l0 109.714286q0 22.857143-16 38.857143t-38.857143 16l-182.857143 0q-22.857143 0-38.857143-16t-16-38.857143l0-109.714286q0-22.857143 16-38.857143t38.857143-16l182.857143 0q22.857143 0 38.857143 16t16 38.857143zm365.714286 292.571429l0 109.714286q0 22.857143-16 38.857143t-38.857143 16l-182.857143 0q-22.857143 0-38.857143-16t-16-38.857143l0-109.714286q0-22.857143 16-38.857143t38.857143-16l182.857143 0q22.857143 0 38.857143 16t16 38.857143zm365.714286 292.571429l0 109.714286q0 22.857143-16 38.857143t-38.857143 16l-182.857143 0q-22.857143 0-38.857143-16t-16-38.857143l0-109.714286q0-22.857143 16-38.857143t38.857143-16l182.857143 0q22.857143 0 38.857143 16t16 38.857143zm-365.714286-585.142857l0 109.714286q0 22.857143-16 38.857143t-38.857143 16l-182.857143 0q-22.857143 0-38.857143-16t-16-38.857143l0-109.714286q0-22.857143 16-38.857143t38.857143-16l182.857143 0q22.857143 0 38.857143 16t16 38.857143zm365.714286 292.571429l0 109.714286q0 22.857143-16 38.857143t-38.857143 16l-182.857143 0q-22.857143 0-38.857143-16t-16-38.857143l0-109.714286q0-22.857143 16-38.857143t38.857143-16l182.857143 0q22.857143 0 38.857143 16t16 38.857143zm0-292.571429l0 109.714286q0 22.857143-16 38.857143t-38.857143 16l-182.857143 0q-22.857143 0-38.857143-16t-16-38.857143l0-109.714286q0-22.857143 16-38.857143t38.857143-16l182.857143 0q22.857143 0 38.857143 16t16 38.857143z" p-id="1185" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        7845: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("ElDatableTable", e._g(e._b({
                        ref: "table",
                        staticClass: "el-table",
                        on: {
                            update: e.onUpdate,
                            sizeChange: e.handleSizeChange
                        }
                    }, "ElDatableTable", e.tableConfig, !1), e.iListeners))
                },
                r = [],
                i = (n("1c01"), n("58b2"), n("8e6e"), n("f3e2"), n("d25f"), n("456d"), n("ac4d"), n("8a81"), n("ac6a"), n("386d"), n("bd86")),
                s = (n("55dd"), n("883e")),
                o = n("2f62");

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        Object(i["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = {
                    name: "DataTable",
                    components: {
                        ElDatableTable: s["a"]
                    },
                    props: {
                        config: {
                            type: Object,
                            default: function() {}
                        }
                    },
                    data: function() {
                        var e = this,
                            t = this.config.tableActions || {};
                        return {
                            defaultConfig: {
                                axiosConfig: {
                                    raw: 1,
                                    params: {
                                        display: 1,
                                        draw: 1
                                    }
                                },
                                extraQuery: {},
                                defaultAlign: "left",
                                dataPath: "results",
                                totalPath: "count",
                                saveQuery: !1,
                                persistSelection: !0,
                                hasEdit: !1 !== t.hasEdit,
                                hasDelete: !1 !== t.hasDelete,
                                hasNew: !1,
                                buttonSize: "mini",
                                tableAttrs: {
                                    stripe: !1,
                                    border: !0,
                                    fit: !0,
                                    tooltipEffect: "dark"
                                },
                                extraButtons: t.extraButtons,
                                onEdit: function(n) {
                                    var a = function(n) {
                                            var a = t.editRoute;
                                            e.$router.push({
                                                name: a,
                                                params: {
                                                    id: n.id
                                                }
                                            })
                                        },
                                        r = t.onEdit;
                                    return r || (r = a), r(n)
                                },
                                pageCount: 5,
                                paginationLayout: "total, sizes, prev, pager, next",
                                paginationSizes: [15, 30, 50, 100],
                                paginationBackground: !0,
                                transformQuery: function(e) {
                                    if (e.page && e.size) {
                                        var t = e.page > 0 ? e.page : 1,
                                            n = (t - 1) * e.size,
                                            a = e.size;
                                        e.offset = n, e.limit = a, delete e["page"], delete e["size"]
                                    }
                                    if (e.sort) {
                                        var r = "descending" === e.direction ? "-" : "";
                                        r += e.sort, e.order = r, delete e["sort"], delete e["direction"]
                                    }
                                    return e
                                },
                                theRowDefaultIsSelected: function(e) {
                                    return !1
                                }
                            }
                        }
                    },
                    computed: l({
                        tableConfig: function() {
                            var e = this.defaultConfig;
                            e.paginationSize = _.get(this.globalTableConfig, "paginationSize", 15);
                            var t = e.tableAttrs;
                            this.config.tableAttrs && (t = Object.assign(t, this.config.tableAttrs));
                            var n = Object.assign(e, this.config);
                            return n.tableAttrs = t, n
                        },
                        iListeners: function() {
                            return Object.assign({}, this.$listeners, this.tableConfig.listeners)
                        },
                        dataTable: function() {
                            return this.$refs.table
                        }
                    }, Object(o["b"])({
                        globalTableConfig: "tableConfig"
                    })),
                    watch: {
                        config: {
                            handler: function() {},
                            deep: !0
                        }
                    },
                    methods: {
                        getList: function() {
                            return this.$refs.table.clearSelection(), this.$refs.table.getList()
                        },
                        getData: function() {
                            return this.$refs.table.data
                        },
                        searchDate: function(e) {
                            return this.$refs.table.searchDate(e)
                        },
                        search: function(e, t) {
                            return this.$refs.table.search(e, t)
                        },
                        getQuery: function() {
                            return this.$refs.table.getQuery()
                        },
                        toggleRowSelection: function(e, t) {
                            return this.$refs.table.toggleRowSelection(e, t)
                        },
                        onUpdate: function(e, t) {
                            var n = this.tableConfig.theRowDefaultIsSelected;
                            if (n && "function" === typeof n) {
                                var a = !0,
                                    r = !1,
                                    i = void 0;
                                try {
                                    for (var s, o = e[Symbol.iterator](); !(a = (s = o.next()).done); a = !0) {
                                        var c = s.value;
                                        n(c) && this.toggleRowSelection(c, !0)
                                    }
                                } catch (l) {
                                    r = !0, i = l
                                } finally {
                                    try {
                                        a || null == o.return || o.return()
                                    } finally {
                                        if (r) throw i
                                    }
                                }
                            }
                        },
                        handleSizeChange: function(e) {
                            this.$store.commit("table/SET_TABLE_CONFIG", {
                                key: "paginationSize",
                                value: e
                            })
                        }
                    }
                },
                d = u,
                p = (n("0a90"), n("2877")),
                m = Object(p["a"])(d, a, r, !1, null, "81717e1e", null);
            t["a"] = m.exports
        },
        "79e7": function(e, t, n) {},
        "7c84": function(e, t, n) {
            "use strict";
            var a = n("ce7e"),
                r = n.n(a);
            r.a
        },
        "81c8": function(e, t, n) {
            "use strict";
            var a = n("3763"),
                r = n.n(a);
            r.a
        },
        "83b2": function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "page"
                    }, [n("PageHeading", {
                        staticClass: "disabled-when-print",
                        scopedSlots: e._u([{
                            key: "rightSide",
                            fn: function() {
                                return [e._t("headingRightSide")]
                            },
                            proxy: !0
                        }], null, !0)
                    }, [e._t("title", [e._v(e._s(e.iTitle))])], 2), e._v(" "), n("PageContent", [e.helpMessage ? n("el-alert", {
                        attrs: {
                            type: "success"
                        }
                    }, [n("span", {
                        domProps: {
                            innerHTML: e._s(e.helpMessage)
                        }
                    })]) : e._e(), e._v(" "), e._t("default")], 2)], 1)
                },
                r = [],
                i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [e._t("globalNotification", [n("LicenseExpireTip"), e._v(" "), n("PasswordExpireTip")]), e._v(" "), n("div", {
                        staticClass: "page-heading"
                    }, [n("el-row", {
                        attrs: {
                            gutter: 0
                        }
                    }, [n("el-col", {
                        staticClass: "page-heading-left",
                        attrs: {
                            span: 16
                        }
                    }, [e._t("default", [n("h2", [e._v(e._s(e.title))])])], 2), e._v(" "), n("el-col", {
                        attrs: {
                            span: 8
                        }
                    }, [n("div", {
                        staticClass: "page-heading-right"
                    }, [e._t("rightSide")], 2)])], 1)], 1)], 2)
                },
                s = [],
                o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return e.loading ? e._e() : n("div", [e.isExpire ? n("el-alert", {
                        attrs: {
                            type: "error"
                        }
                    }, [e._v("\n    " + e._s(e.isExpire) + "\n  ")]) : e._e()], 1)
                },
                c = [],
                l = (n("1c01"), n("58b2"), n("8e6e"), n("f3e2"), n("d25f"), n("ac6a"), n("456d"), n("bd86")),
                u = n("cf45"),
                d = n("2f62");

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        Object(l["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var h = {
                    name: "LicenseExpireTip",
                    data: function() {
                        return {
                            loading: !0,
                            licenseData: {}
                        }
                    },
                    computed: m({}, Object(d["b"])(["publicSettings", "currentUser"]), {
                        isExpire: function() {
                            if (!this.publicSettings.XPACK_ENABLED || "Admin" !== this.currentUser.role) return !1;
                            var e = this.getIntervalDays(this.licenseData.date_expired);
                            return e < 0 ? this.$t("setting.LicenseExpired") : e < 7 && this.$t("setting.LicenseWillBe") + this.licenseData.date_expired + this.$t("setting.Expire")
                        }
                    }),
                    mounted: function() {
                        var e = this;
                        this.publicSettings.XPACK_ENABLED && "Admin" === this.currentUser.role ? this.$axios.get("/api/v1/xpack/license/detail").then((function(t) {
                            e.licenseData = t
                        })).finally((function() {
                            e.loading = !1
                        })) : this.loading = !1
                    },
                    methods: {
                        getIntervalDays: function(e) {
                            var t = new Date(Object(u["p"])(e)),
                                n = new Date,
                                a = t.getTime() - n.getTime();
                            return Math.floor(a / 864e5)
                        }
                    }
                },
                f = h,
                g = n("2877"),
                b = Object(g["a"])(f, o, c, !1, null, "b26ba9bc", null),
                v = b.exports,
                y = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [e.isExpire ? n("el-alert", {
                        attrs: {
                            type: "error"
                        }
                    }, [e._v("\n    " + e._s(e.isExpire) + "\n  ")]) : e._e()], 1)
                },
                w = [];

            function A(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(n), !0).forEach((function(t) {
                        Object(l["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var C = {
                    name: "PasswordExpireTip",
                    data: function() {
                        return {
                            loading: !0,
                            securityData: {}
                        }
                    },
                    computed: S({}, Object(d["b"])(["publicSettings", "currentUser"]), {
                        isExpire: function() {
                            if ("local" !== this.currentUser.source) return !1;
                            var e = this.getIntervalDays(this.currentUser.date_password_last_updated),
                                t = this.publicSettings.SECURITY_PASSWORD_EXPIRATION_TIME;
                            return e >= t ? this.$t("users.passwordExpired") : t - e <= 5 && this.$t("users.passwordWillExpiredPrefixMsg") + (t - e) + this.$t("users.passwordWillExpiredSuffixMsg")
                        }
                    }),
                    methods: {
                        getIntervalDays: function(e) {
                            var t = this.$moment(e, "YYYY-MM-DD").format("YYYY-MM-DD"),
                                n = this.$moment(new Date).format("YYYY-MM-DD"),
                                a = this.$moment(n).diff(this.$moment(t), "days");
                            return a
                        }
                    }
                },
                k = C,
                O = Object(g["a"])(k, y, w, !1, null, "69f37a07", null),
                P = O.exports,
                T = {
                    name: "PageHeading",
                    components: {
                        LicenseExpireTip: v,
                        PasswordExpireTip: P
                    },
                    props: {
                        title: {
                            type: String,
                            default: ""
                        }
                    }
                },
                _ = T,
                x = (n("0572"), Object(g["a"])(_, i, s, !1, null, "76e3a4da", null)),
                D = x.exports,
                j = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "wrapper-content"
                    }, [e._t("default")], 2)
                },
                U = [],
                E = {
                    name: "PageContent"
                },
                M = E,
                R = (n("6f6f"), Object(g["a"])(M, j, U, !1, null, "579e17cf", null)),
                L = R.exports,
                $ = {
                    name: "Page",
                    components: {
                        PageHeading: D,
                        PageContent: L
                    },
                    props: {
                        title: {
                            type: String,
                            default: ""
                        },
                        helpMessage: {
                            type: String,
                            default: ""
                        }
                    },
                    computed: {
                        iTitle: function() {
                            return this.title || this.$route.meta.title
                        }
                    }
                },
                I = $,
                F = (n("8ecc"), Object(g["a"])(I, a, r, !1, null, "5e973418", null));
            t["a"] = F.exports
        },
        "83d6": function(e, t) {
            e.exports = {
                title: ".",
                fixedHeader: !1,
                tagsView: !0,
                sidebarLogo: !0
            }
        },
        "845e": function(e, t, n) {},
        "84ca": function(e, t, n) {
            "use strict";
            n("6762"), n("2fdb"), n("ac4d"), n("8a81");
            var a = n("7618"),
                r = n("768b"),
                i = (n("ac6a"), n("ffc1"), n("2ef0")),
                s = n.n(i),
                o = 1,
                c = 2,
                l = 16,
                u = 128,
                d = 0,
                p = u | l | c,
                m = u | c | o,
                h = l | c,
                f = c | o,
                g = o,
                b = d,
                v = u | l | c,
                y = o,
                w = {
                    SuperAdmin: p,
                    SuperAuditor: m,
                    OrgAdmin: h,
                    OrgAuditor: f,
                    User: g,
                    Anon: b
                },
                A = s.a.invert(w);

            function S(e) {
                for (var t = [], n = 0, a = Object.entries(w); n < a.length; n++) {
                    var i = Object(r["a"])(a[n], 2),
                        s = i[0],
                        o = i[1];
                    (o & e) === o && t.push(s)
                }
                return t
            }

            function C(e) {
                "object" !== Object(a["a"])(e) && (e = [e]);
                var t = [],
                    n = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done); n = !0) {
                        var c = s.value;
                        A[c] && t.push(A[c])
                    }
                } catch (l) {
                    r = !0, i = l
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (r) throw i
                    }
                }
                return t
            }

            function k(e, t) {
                return "Admin" === t ? [p, g] : e.includes("Admin") ? [h, g] : "Auditor" === t || e.includes("Auditor") ? [f] : [g]
            }

            function O(e) {
                return v & e
            }

            function P(e) {
                return y & e
            }

            function T(e) {
                return 0 !== O(e)
            }

            function _(e) {
                return 0 !== P(e)
            }

            function x(e, t) {
                if (null === t) return !0;
                if (null === e) return !1;
                "object" !== Object(a["a"])(e) && (e = [e]), "object" !== Object(a["a"])(t) && (t = [t]);
                var n = D(e),
                    r = D(t);
                return (r & n) === r
            }

            function D(e) {
                var t = 0,
                    n = !0,
                    a = !1,
                    r = void 0;
                try {
                    for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done); n = !0) {
                        var o = i.value;
                        t |= o
                    }
                } catch (c) {
                    a = !0, r = c
                } finally {
                    try {
                        n || null == s.return || s.return()
                    } finally {
                        if (a) throw r
                    }
                }
                return t
            }
            t["a"] = {
                PERM_USE: o,
                PERM_AUDIT: c,
                PERM_ADMIN: l,
                PERM_SUPER: u,
                SUPER_ADMIN: p,
                SUPER_AUDITOR: m,
                ORG_ADMIN: h,
                ORG_AUDITOR: f,
                USER: g,
                ANON: b,
                ADMIN_PAGE_REQUIRE_PERM_MIN: v,
                USER_PAGE_REQUIRE_PERM_MIN: y,
                getRolesDisplay: C,
                getPermsToRolesDisplay: S,
                parseUserRoles: k,
                sumPerms: D,
                hasPerm: x,
                getUserInAdminPagePerm: O,
                getUserInUserPagePerm: P,
                hasAdminPagePerm: T,
                hasUserPagePerm: _
            }
        },
        8613: function(e, t, n) {},
        "864d": function(e, t, n) {
            "use strict";
            var a = n("0c77"),
                r = n.n(a);
            r.a
        },
        "871d": function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("el-form", e._b({
                        ref: "elForm",
                        staticClass: "el-form-renderer",
                        attrs: {
                            model: e.value
                        }
                    }, "el-form", e.$attrs, !1), [e._l(e.innerContent, (function(t) {
                        return [e.isHidden(t) ? e._e() : e._t("id:" + t.id), e._v(" "), n(t.type === e.GROUP ? "render-form-group" : "render-form-item", {
                            key: t.id,
                            tag: "component",
                            attrs: {
                                data: t,
                                value: e.value,
                                "item-value": e.value[t.id],
                                disabled: e.disabled || t.disabled,
                                readonly: e.readonly || t.readonly,
                                options: e.options[t.id]
                            },
                            on: {
                                updateValue: e.updateValue
                            }
                        }), e._v(" "), e.isHidden(t) ? e._e() : e._t("$id:" + t.id)]
                    })), e._v(" "), e._t("default")], 2)
                },
                r = [],
                i = (n("1c01"), n("58b2"), n("8e6e"), n("d25f"), n("bd86")),
                s = (n("456d"), n("ac6a"), n("f3e2"), n("f4c4")),
                o = n.n(s),
                c = n("5da1"),
                l = n.n(c),
                u = n("cd3f"),
                d = n.n(u),
                p = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [e._l(e.data.items, (function(t, a) {
                        return [e._t("id:" + t.id), e._v(" "), e._t("$id:" + t.id), e._v(" "), n("render-form-item", {
                            key: a,
                            attrs: {
                                prop: e.data.id + "." + t.id,
                                data: t,
                                value: e.value,
                                "item-value": e.itemValue[t.id],
                                disabled: e.disabled,
                                readonly: e.readonly,
                                options: e.options[t.id]
                            },
                            on: {
                                updateValue: e.updateValue
                            }
                        })]
                    }))], 2)
                },
                m = [],
                h = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("el-form-item", e._b({
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e._show,
                            expression: "_show"
                        }],
                        attrs: {
                            prop: e.prop,
                            label: e.data.label,
                            rules: e._show && Array.isArray(e.data.rules) ? e.data.rules : []
                        },
                        scopedSlots: e._u([e.data.helpTips ? {
                            key: "label",
                            fn: function() {
                                return [n("el-tooltip", {
                                    attrs: {
                                        placement: "bottom",
                                        effect: "light",
                                        "popper-class": "help-tips"
                                    }
                                }, [n("div", {
                                    attrs: {
                                        slot: "content"
                                    },
                                    domProps: {
                                        innerHTML: e._s(e.data.helpTips)
                                    },
                                    slot: "content"
                                }), e._v(" "), n("el-button", {
                                    staticStyle: {
                                        padding: "0"
                                    }
                                }, [n("i", {
                                    staticClass: "fa fa-info-circle"
                                })])], 1), e._v("\n    " + e._s(e.data.label) + "\n  ")]
                            },
                            proxy: !0
                        } : null], null, !0)
                    }, "el-form-item", e.data.attrs, !1), [e._v(" "), e.readonly && e.hasReadonlyContent ? ["input" === e.data.type ? n("div", {
                        style: "textarea" === e.componentProps.type ? {
                            padding: "10px 0",
                            lineHeight: 1.5
                        } : ""
                    }, [e._v("\n      " + e._s(e.itemValue) + "\n    ")]) : "select" === e.data.type ? n("div", [
                        [e._v("\n        " + e._s(e.multipleValue) + "\n      ")]
                    ], 2) : e._e()] : n("custom-component", e._g(e._b({
                        attrs: {
                            component: e.data.component || "el-" + e.data.type,
                            value: e.itemValue,
                            disabled: e.disabled || e.componentProps.disabled || e.readonly
                        }
                    }, "custom-component", e.componentProps, !1), e.listeners), [e._l(e.options, (function(t) {
                        return ["select" === e.data.type ? n("el-option", e._b({
                            key: t.value
                        }, "el-option", t, !1)) : "checkbox-group" === e.data.type ? n("el-checkbox", e._b({
                            key: t.label
                        }, "el-checkbox", t, !1), [e._v("\n        " + e._s(t.value) + "\n      ")]) : "radio-group" === e.data.type ? n("el-radio", e._b({
                            key: t.label,
                            attrs: {
                                label: "value" in t ? t.value : t.label
                            }
                        }, "el-radio", t, !1), [e._v(e._s(t.label))]) : e._e()]
                    }))], 2), e._v(" "), e.data.helpText ? n("div", {
                        staticClass: "help-block",
                        domProps: {
                            innerHTML: e._s(e.data.helpText)
                        }
                    }) : e._e()], 2)
                },
                f = [],
                g = (n("57e7"), n("7514"), n("2caf"), n("4f37"), n("768b")),
                b = (n("6d67"), n("759f"), n("c832")),
                v = n.n(b),
                y = n("6341"),
                w = n.n(y);

            function A(e, t) {
                if (!e) return !0;
                var n = function(e) {
                    return "string" === typeof e ? w()(t, e) : Object.keys(e).every((function(n) {
                        var a = v()(t, n);
                        return void 0 !== a && a === e[n]
                    }))
                };
                return Array.isArray(e) ? e.some(n) : n(e)
            }
            var S = n("e639"),
                C = n.n(S),
                k = n("cd93"),
                O = n.n(k);

            function P() {}

            function T(e, t) {
                return C()(e.map((function(e) {
                    return {
                        id: e.id,
                        type: e.type,
                        value: "group" === e.type ? T(e.items, t) : e[t]
                    }
                })).filter((function(e) {
                    var t = e.type,
                        n = e.value;
                    return void 0 !== n || "group" === t && Object.keys(n).length
                })).map((function(e) {
                    var t = e.id,
                        n = e.value;
                    return [t, n]
                })))
            }

            function _(e, t, n) {
                Object.keys(t).forEach((function(a) {
                    var r = n.find((function(e) {
                        return e.id === a
                    }));
                    r && ("group" !== r.type ? e[a] = t[a] : _(e[a], t[a], r.items))
                }))
            }

            function x(e, t) {
                var n = {};
                return Object.keys(e).forEach((function(a) {
                    var r = t.find((function(e) {
                        return e.id === a
                    }));
                    if ("group" !== r.type)
                        if (r.outputFormat) {
                            var i = r.outputFormat(e[a]);
                            O()(i) ? Object.assign(n, i) : n[a] = i
                        } else n[a] = e[a];
                    else n[a] = x(e[a], r.items)
                })), n
            }

            function D(e, t) {
                var n = {};
                return t.forEach((function(t) {
                    var a = t.id;
                    if (t.inputFormat) {
                        var r = t.inputFormat(e);
                        void 0 !== r && (n[a] = r)
                    } else a in e && ("group" !== t.type ? n[a] = e[a] : n[a] = D(e[a], t.items))
                })), n
            }

            function j(e, t) {
                t.forEach((function(t) {
                    var n = t.type,
                        a = t.id,
                        r = t.items;
                    switch (n) {
                        case "group":
                            a in e || (e[a] = {}), j(e[a], r);
                            break;
                        case "checkbox-group":
                            a in e || (e[a] = []);
                            break
                    }
                }))
            }
            var U = n("9cfb"),
                E = n.n(U),
                M = n("fec4"),
                R = n.n(M);

            function L(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function $(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? L(Object(n), !0).forEach((function(t) {
                        Object(i["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : L(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function I(e) {
                if (!e) throw new Error("data must be an Object.");
                if (!e.id) throw new Error("`id` is unvalidated.");
                if (!e.type && !e.component) throw new Error("`type` and `component` cannot both be null.")
            }
            var F = {
                    components: {
                        CustomComponent: {
                            functional: !0,
                            render: function(e, t) {
                                return e(t.props.component, t.data, t.children)
                            }
                        }
                    },
                    props: {
                        data: Object,
                        prop: {
                            type: String,
                            default: function() {
                                return this.data.id
                            }
                        },
                        itemValue: {},
                        value: Object,
                        disabled: Boolean,
                        readonly: Boolean,
                        options: Array
                    },
                    data: function() {
                        return {
                            propsInner: {},
                            isBlurTrigger: this.data.rules && this.data.rules.some((function(e) {
                                return e.required && "blur" === e.trigger
                            }))
                        }
                    },
                    computed: {
                        componentProps: function(e) {
                            var t = e.data.el,
                                n = e.propsInner;
                            return $({}, t, {}, n)
                        },
                        hasReadonlyContent: function(e) {
                            var t = e.data.type;
                            return E()(["input", "select"], t)
                        },
                        hiddenStatus: function(e) {
                            var t = e.data.hidden,
                                n = void 0 === t ? function() {
                                    return !1
                                } : t,
                                a = e.data,
                                r = e.value;
                            return n(r, a)
                        },
                        enableWhenStatus: function(e) {
                            var t = e.data.enableWhen,
                                n = e.value;
                            return A(t, n)
                        },
                        _show: function() {
                            return !this.hiddenStatus && this.enableWhenStatus
                        },
                        listeners: function() {
                            var e = this,
                                t = this.data,
                                n = t.id,
                                a = t.atChange,
                                r = void 0 === a ? P : a,
                                i = t.on,
                                s = void 0 === i ? {} : i,
                                o = t.on;
                            o = void 0 === o ? {} : o;
                            var c = o.input,
                                l = void 0 === c ? P : c,
                                u = o.change,
                                d = void 0 === u ? P : u,
                                p = t.trim,
                                m = void 0 === p || p,
                                h = this.$parent.$parent.updateForm;
                            return $({}, C()(R()(s).map((function(e) {
                                var t = Object(g["a"])(e, 2),
                                    n = t[0],
                                    a = t[1];
                                return [n, function() {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    return a(t, h)
                                }]
                            }))), {
                                input: function(t) {
                                    e.$emit("updateValue", {
                                        id: n,
                                        value: t
                                    }), r(n, t);
                                    for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++) i[s - 1] = arguments[s];
                                    l([t].concat(i), h), e.triggerValidate(n)
                                },
                                change: function(t) {
                                    "string" === typeof t && m && (t = t.trim()), e.$emit("updateValue", {
                                        id: n,
                                        value: t
                                    });
                                    for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++) r[i - 1] = arguments[i];
                                    d([t].concat(r), h), e.triggerValidate(n)
                                }
                            })
                        },
                        multipleValue: function(e) {
                            var t = e.data,
                                n = e.itemValue,
                                a = e.options,
                                r = void 0 === a ? [] : a,
                                i = v()(t, "el.multiple") && Array.isArray(n) ? n : [n];
                            return i.map((function(e) {
                                return (r.find((function(t) {
                                    return t.value === e
                                })) || {}).label
                            })).join()
                        }
                    },
                    watch: {
                        data: I,
                        "data.remote": {
                            handler: function(e, t) {
                                var n = this;
                                if (e && (!t || e.url !== t.url && e.request !== t.request)) {
                                    var a = ["select", "checkbox-group", "radio-group"].indexOf(this.data.type) > -1,
                                        r = e.url,
                                        s = e.request,
                                        o = void 0 === s ? function() {
                                            return n.$axios.get(r).then((function(e) {
                                                return e.data
                                            }))
                                        } : s,
                                        c = e.prop,
                                        l = void 0 === c ? "options" : c,
                                        u = e.dataPath,
                                        d = void 0 === u ? "" : u,
                                        p = e.onResponse,
                                        m = void 0 === p ? function(e) {
                                            return d && (e = v()(e, d)), a ? e.map((function(e) {
                                                return {
                                                    label: e[b],
                                                    value: e[w]
                                                }
                                            })) : e
                                        } : p,
                                        h = e.onError,
                                        f = void 0 === h ? function(e) {
                                            return console.error(e.message)
                                        } : h,
                                        g = e.label,
                                        b = void 0 === g ? "label" : g,
                                        y = e.value,
                                        w = void 0 === y ? "value" : y;
                                    Promise.resolve(o()).then(m, f).then((function(e) {
                                        if (a) {
                                            var t = n.$parent;
                                            while ("el-form-renderer" !== t.$options._componentTag) t = t.$parent;
                                            t.setOptions(n.prop, e)
                                        } else n.propsInner = Object(i["a"])({}, l, e)
                                    }))
                                }
                            },
                            immediate: !0
                        }
                    },
                    methods: {
                        triggerValidate: function(e) {
                            if (this.data.rules && this.data.rules.length) {
                                var t = this.$parent,
                                    n = t.$options.componentName;
                                while (t && "ElForm" !== n) t = t.$parent, t && (n = t.$options.componentName);
                                t && !this.isBlurTrigger && this.$nextTick((function() {
                                    t.validateField(e)
                                }))
                            }
                        }
                    }
                },
                V = F,
                N = n("2877"),
                B = Object(N["a"])(V, h, f, !1, null, null, null),
                q = B.exports;

            function H(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? H(Object(n), !0).forEach((function(t) {
                        Object(i["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var G = {
                    components: {
                        RenderFormItem: q
                    },
                    props: {
                        data: Object,
                        itemValue: {},
                        value: Object,
                        disabled: Boolean,
                        readonly: Boolean,
                        options: Object
                    },
                    methods: {
                        updateValue: function(e) {
                            var t = e.id,
                                n = e.value;
                            this.$emit("updateValue", {
                                id: this.data.id,
                                value: z({}, this.itemValue, Object(i["a"])({}, t, n))
                            })
                        }
                    }
                },
                K = G,
                W = Object(N["a"])(K, p, m, !1, null, null, null),
                Q = W.exports,
                J = n("75fc"),
                Y = (n("f559"), n("3385")),
                X = n.n(Y);

            function Z(e) {
                return e.map((function(e) {
                    var t = Object.assign({}, e);
                    return "group" === t.type ? t.items = Z(t.items) : (ee(t), te(t), t.type = X()(t.type)), t
                }))
            }

            function ee(e) {
                Object.keys(e).filter((function(e) {
                    return e.startsWith("$")
                })).filter((function(t) {
                    return !(t.slice(1) in e)
                })).forEach((function(t) {
                    return e[t.slice(1)] = e[t], delete e[t]
                }))
            }

            function te(e) {
                if (!e.overrideRules) {
                    var t = e.component;
                    if (t && "string" !== typeof t) {
                        var n = t.rules,
                            a = void 0 === n ? [] : n;
                        e.rules = [].concat(Object(J["a"])(e.rules || []), Object(J["a"])("function" === typeof a ? a(e) : a))
                    }
                }
            }

            function ne(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ne(Object(n), !0).forEach((function(t) {
                        Object(i["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ne(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var re = "group",
                ie = {
                    name: "ElFormRenderer",
                    components: {
                        RenderFormItem: q,
                        RenderFormGroup: Q
                    },
                    model: {
                        prop: "form",
                        event: "input"
                    },
                    props: {
                        content: {
                            type: Array,
                            required: !0
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        },
                        readonly: {
                            type: Boolean,
                            default: !1
                        },
                        form: {
                            type: Object,
                            default: void 0
                        }
                    },
                    data: function() {
                        return {
                            GROUP: re,
                            value: {},
                            options: {},
                            initValue: null
                        }
                    },
                    computed: {
                        innerContent: function(e) {
                            var t = e.content;
                            return Z(t)
                        }
                    },
                    watch: {
                        form: {
                            handler: function(e, t) {
                                e && !l()(e, t) && this.setValueFromModel()
                            },
                            immediate: !0,
                            deep: !0
                        },
                        innerContent: {
                            handler: function(e) {
                                this.options = T(e, "options"), this.setValueFromModel(), this.initValue = d()(this.value)
                            },
                            immediate: !0
                        },
                        value: {
                            handler: function(e, t) {
                                e && !l()(e, t) && this.$emit("input", x(e, this.innerContent))
                            }
                        }
                    },
                    mounted: function() {
                        var e = this;
                        this.initValue = d()(this.value), this.$nextTick((function() {
                            Object.keys(e.$refs.elForm.$options.methods).forEach((function(t) {
                                t in e || (e[t] = e.$refs.elForm[t])
                            })), e.clearValidate()
                        }))
                    },
                    methods: {
                        resetFields: function() {
                            this.value = d()(this.initValue), this.$nextTick(this.clearValidate)
                        },
                        setValueFromModel: function() {
                            if (this.innerContent.length) {
                                var e = this.form ? D(this.form, this.innerContent) : T(this.innerContent, "default");
                                j(e, this.innerContent), l()(this.value, e) || (this.value = e)
                            }
                        },
                        updateValue: function(e) {
                            var t = e.id,
                                n = e.value;
                            this.value = ae({}, this.value, Object(i["a"])({}, t, n))
                        },
                        getFormValue: function() {
                            return x(this.value, this.innerContent)
                        },
                        updateForm: function(e) {
                            e = D(e, this.innerContent), _(this.value, e, this.innerContent), this.value = ae({}, this.value)
                        },
                        setOptions: function(e, t) {
                            o()(this.options, e, t), this.options = ae({}, this.options)
                        },
                        isHidden: function(e) {
                            return !(!e.el || !e.el["hiddenGroup"]) && (!0 === e.hidden || "function" === typeof e.hidden && e.hidden(this.value))
                        }
                    }
                },
                se = ie,
                oe = Object(N["a"])(se, a, r, !1, null, null, null);
            t["a"] = oe.exports
        },
        "883e": function(e, t, n) {
            "use strict";
            (function(e) {
                n("7f7f");
                var a = n("fcdb");
                a["a"].install = function(e) {
                    e.component(a["a"].name, a["a"])
                };
                var r = null;
                "undefined" !== typeof window ? r = window.Vue : "undefined" !== typeof e && (r = e.Vue), r && r.use(a["a"]), t["a"] = a["a"]
            }).call(this, n("c8ba"))
        },
        "88b2": function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [e.loading ? e._e() : n("DataTable", e._g(e._b({
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.loading,
                            expression: "loading"
                        }],
                        ref: "dataTable",
                        attrs: {
                            config: e.iConfig
                        },
                        on: {
                            "filter-change": e.filterChange
                        }
                    }, "DataTable", e.$attrs, !1), e.$listeners)), e._v(" "), n("ColumnSettingPopover", {
                        attrs: {
                            "current-columns": e.popoverColumns.currentCols,
                            "total-columns-list": e.popoverColumns.totalColumnsList,
                            "min-columns": e.popoverColumns.minCols,
                            url: e.config.url
                        },
                        on: {
                            columnsUpdate: e.handlePopoverColumnsChange
                        }
                    })], 1)
                },
                r = [],
                i = (n("456d"), n("f3e2"), n("7618")),
                s = (n("ac4d"), n("8a81"), n("ac6a"), n("7f7f"), n("6d67"), n("d25f"), n("57e7"), n("96cf"), n("3b8d")),
                o = n("7845"),
                c = n("e975"),
                l = n("0692"),
                u = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return e.showColumnSettingPopover ? n("Dialog", {
                        attrs: {
                            title: e.$t("common.CustomCol"),
                            visible: e.showColumnSettingPopover,
                            "destroy-on-close": !0,
                            "show-cancel": !1,
                            width: "35%",
                            top: "10%"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.showColumnSettingPopover = t
                            },
                            confirm: function(t) {
                                return e.handleColumnConfirm()
                            }
                        }
                    }, [n("el-alert", {
                        attrs: {
                            type: "success"
                        }
                    }, [e._v("\n    " + e._s(this.$t("common.TableColSettingInfo")) + "\n  ")]), e._v(" "), n("el-checkbox-group", {
                        model: {
                            value: e.iCurrentColumns,
                            callback: function(t) {
                                e.iCurrentColumns = t
                            },
                            expression: "iCurrentColumns"
                        }
                    }, [n("el-row", e._l(e.totalColumnsList, (function(t) {
                        return n("el-col", {
                            key: t.prop,
                            staticStyle: {
                                "margin-top": "5px"
                            },
                            attrs: {
                                span: 8
                            }
                        }, [n("el-checkbox", {
                            attrs: {
                                label: t.prop,
                                disabled: "id" === t.prop || "actions" === t.prop || -1 !== e.minColumns.indexOf(t.prop)
                            }
                        }, [e._v("\n          " + e._s(t.label) + "\n        ")])], 1)
                    })), 1)], 1)], 1) : e._e()
                },
                d = [],
                p = n("9039"),
                m = {
                    name: "ColumnSettingPopover",
                    components: {
                        Dialog: p["a"]
                    },
                    props: {
                        totalColumnsList: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        currentColumns: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        minColumns: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        url: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function() {
                        return {
                            showColumnSettingPopover: !1,
                            iCurrentColumns: ""
                        }
                    },
                    mounted: function() {
                        var e = this;
                        this.$eventBus.$on("showColumnSettingPopover", (function(t) {
                            var n = t.url;
                            n === e.url && (e.showColumnSettingPopover = !0, e.iCurrentColumns = e.currentColumns)
                        }))
                    },
                    methods: {
                        handleColumnConfirm: function() {
                            this.showColumnSettingPopover = !1, this.$emit("columnsUpdate", {
                                columns: this.iCurrentColumns,
                                url: this.url
                            })
                        }
                    }
                },
                h = m,
                f = n("2877"),
                g = Object(f["a"])(h, u, d, !1, null, "c4106054", null),
                b = g.exports,
                v = n("cf45"),
                y = {
                    name: "AutoDataTable",
                    components: {
                        DataTable: o["a"],
                        ColumnSettingPopover: b
                    },
                    props: {
                        config: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        filterTable: {
                            type: Function,
                            default: function() {
                                return {}
                            }
                        }
                    },
                    data: function() {
                        return {
                            loading: !0,
                            method: "get",
                            autoConfig: {},
                            iConfig: {},
                            meta: {},
                            cleanedColumnsShow: {},
                            totalColumns: [],
                            popoverColumns: {
                                totalColumnsList: [],
                                minCols: [],
                                currentCols: []
                            }
                        }
                    },
                    computed: {},
                    watch: {
                        config: {
                            handler: function(e) {
                                this.optionUrlMetaAndGenCols(), this.$log.debug("AutoDataTable Config change found")
                            },
                            deep: !0
                        }
                    },
                    created: function() {
                        this.optionUrlMetaAndGenCols()
                    },
                    methods: {
                        optionUrlMetaAndGenCols: function() {
                            var e = Object(s["a"])(regeneratorRuntime.mark((function e() {
                                var t, n = this;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if ("" !== this.config.url) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            t = -1 === this.config.url.indexOf("?") ? "".concat(this.config.url, "?draw=1&display=1") : "".concat(this.config.url, "&draw=1&display=1"), this.$store.dispatch("common/getUrlMeta", {
                                                url: t
                                            }).then((function(e) {
                                                var t = n.method.toUpperCase();
                                                n.meta = e.actions && e.actions[t] ? e.actions[t] : {}, n.generateTotalColumns()
                                            })).then((function() {
                                                n.filterShowColumns()
                                            })).then((function() {
                                                n.generatePopoverColumns()
                                            })).catch((function(e) {
                                                n.$log.error("Error occur: ", e)
                                            })).finally((function() {
                                                n.loading = !1
                                            }));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        generateColumnByName: function(e, t) {
                            switch (e) {
                                case "name":
                                    t.formatter = c["f"], t.sortable = "custom", t.showOverflowTooltip = !0;
                                    break;
                                case "actions":
                                    t = {
                                        prop: "actions",
                                        label: l["a"].t("common.Actions"),
                                        align: "center",
                                        width: "150px",
                                        formatter: c["a"],
                                        formatterArgs: {}
                                    };
                                    break;
                                case "is_valid":
                                    t.label = l["a"].t("common.Validity"), t.formatter = c["c"], t.align = "center", t.width = "80px";
                                    break;
                                case "datetime":
                                case "date_start":
                                    t.formatter = c["d"];
                                    break;
                                case "comment":
                                    t.showOverflowTooltip = !0
                            }
                            return t
                        },
                        generateColumnByType: function(e, t) {
                            switch (e) {
                                case "choice":
                                    t.sortable = "custom", t.formatter = c["h"];
                                    break;
                                case "boolean":
                                    t.formatter = c["c"], t.align = "center", t.width = "80px";
                                    break;
                                case "datetime":
                                    t.formatter = c["d"], t.width = "160px"
                            }
                            return t
                        },
                        addHelpTipsIfNeed: function(e) {
                            this.$createElement;
                            var t = e.helpTips;
                            return t ? (e.renderHeader = function(e, n) {
                                var a = n.column;
                                n.$index;
                                return e("span", [a.label, e("el-tooltip", {
                                    attrs: {
                                        placement: "bottom",
                                        effect: "light",
                                        popperClass: "help-tips"
                                    }
                                }, [e("div", {
                                    slot: "content",
                                    domProps: {
                                        innerHTML: t
                                    }
                                }), e("el-button", {
                                    style: "padding: 0"
                                }, [e("i", {
                                    class: "fa fa-info-circle"
                                })])])])
                            }, e) : e
                        },
                        addFilterIfNeed: function(e) {
                            if (e.prop) {
                                var t = this.meta[e.prop] || {};
                                if (!t.filter) return e;
                                "boolean" === t.type && (e.filters = [{
                                    text: this.$t("common.Yes"),
                                    value: !0
                                }, {
                                    text: this.$t("common.No"),
                                    value: !1
                                }], e.sortable = !1, e["column-key"] = e.prop), "choice" === t.type && t.choices && (e.filters = t.choices.map((function(e) {
                                    return "boolean" === typeof e.value ? e.value ? {
                                        text: e["display_name"],
                                        value: "True"
                                    } : {
                                        text: e["display_name"],
                                        value: "False"
                                    } : {
                                        text: e["display_name"],
                                        value: e.value
                                    }
                                })), e.sortable = !1, e["column-key"] = e.prop)
                            }
                            return e
                        },
                        generateColumn: function(e) {
                            var t = this.meta[e] || {},
                                n = this.config.columnsMeta ? this.config.columnsMeta[e] : {},
                                a = {
                                    prop: e,
                                    label: t.label
                                };
                            return a = this.generateColumnByName(e, a), a = this.generateColumnByType(t.type, a), a = Object.assign(a, n), a = this.addHelpTipsIfNeed(a), a = this.addFilterIfNeed(a), a
                        },
                        generateTotalColumns: function() {
                            var e = _.cloneDeep(this.config),
                                t = [],
                                n = !0,
                                a = !1,
                                r = void 0;
                            try {
                                for (var s, o = e.columns[Symbol.iterator](); !(n = (s = o.next()).done); n = !0) {
                                    var c = s.value;
                                    "object" === Object(i["a"])(c) ? t.push(c) : "string" === typeof c && (c = this.generateColumn(c), t.push(c))
                                }
                            } catch (l) {
                                a = !0, r = l
                            } finally {
                                try {
                                    n || null == o.return || o.return()
                                } finally {
                                    if (a) throw r
                                }
                            }
                            this.totalColumns = t, e.columns = t, this.iConfig = e
                        },
                        cleanColumnsShow: function() {
                            var e = this.totalColumns.map((function(e) {
                                    return e.prop
                                })),
                                t = _.get(this.iConfig, "columnsShow.default", []);
                            0 === t.length && (t = e), t = e.filter((function(e) {
                                return t.indexOf(e) > -1
                            }));
                            var n = _.get(this.iConfig, "columnsShow.min", ["actions", "id"]).filter((function(e) {
                                    return t.indexOf(e) > -1
                                })),
                                a = localStorage.getItem("tableConfig") ? JSON.parse(localStorage.getItem("tableConfig")) : {},
                                r = this.config.name || this.$route.name + "_" + Object(v["l"])(this.iConfig.url).pathname,
                                i = _.get(a[r], "showColumns", null),
                                s = i || t;
                            0 === s.length && (s = e), n.forEach((function(e, t) {
                                -1 === s.indexOf(e) && s.push(e)
                            })), s = e.filter((function(e) {
                                return s.indexOf(e) > -1
                            })), this.cleanedColumnsShow = {
                                default: t,
                                show: s,
                                min: n,
                                configShow: i
                            }, this.$log.debug("Cleaned columns show: ", this.cleanedColumnsShow)
                        },
                        filterShowColumns: function() {
                            var e = this;
                            this.cleanColumnsShow(), this.iConfig.columns = this.totalColumns.filter((function(t) {
                                return e.cleanedColumnsShow.show.indexOf(t.prop) > -1
                            }))
                        },
                        generatePopoverColumns: function() {
                            this.popoverColumns.totalColumnsList = this.totalColumns.map((function(e) {
                                return {
                                    prop: e.prop,
                                    label: e.label
                                }
                            })), this.popoverColumns.currentCols = this.cleanedColumnsShow.show, this.popoverColumns.minCols = this.cleanedColumnsShow.min, this.$log.debug("Popover cols: ", this.popoverColumns)
                        },
                        handlePopoverColumnsChange: function(e) {
                            var t = e.columns,
                                n = e.url;
                            this.$log.debug("Columns change: ", t), this.popoverColumns.currentCols = t;
                            var a = localStorage.getItem("tableConfig") ? JSON.parse(localStorage.getItem("tableConfig")) : {},
                                r = this.config.name || this.$route.name + "_" + Object(v["l"])(n).pathname;
                            a[r] = {
                                showColumns: t
                            }, localStorage.setItem("tableConfig", JSON.stringify(a)), this.filterShowColumns()
                        },
                        filterChange: function(e) {
                            var t = Object.keys(e)[0],
                                n = {};
                            n[t] = e[t][0], this.filterTable(n)
                        }
                    }
                },
                w = y,
                A = Object(f["a"])(w, a, r, !1, null, "68c9eca4", null);
            t["a"] = A.exports
        },
        "8ae0": function(e, t, n) {
            "use strict";
            var a = n("8613"),
                r = n.n(a);
            r.a
        },
        "8ce5": function(e, t, n) {
            "use strict";
            n.r(t);
            n("ac6a"), n("456d"), n("7f7f"), n("6d67");
            var a = n("2612"),
                r = n("5f87"),
                i = n("a18c"),
                s = n("84ca"),
                o = function() {
                    return {
                        token: Object(r["c"])(),
                        currentOrg: "",
                        currentRole: "",
                        profile: {},
                        username: "",
                        roles: {},
                        sysRole: "",
                        orgs: [],
                        perms: 0,
                        MFAVerifyAt: null,
                        isSuperAdmin: !1,
                        isAdmin: !1,
                        hasAdminPerm: !1,
                        hasAuditPerm: !1
                    }
                },
                c = o(),
                l = {
                    RESET_STATE: function(e) {
                        Object.assign(e, o())
                    },
                    SET_TOKEN: function(e, t) {
                        e.token = t
                    },
                    SET_PROFILE: function(e, t) {
                        e.profile = t;
                        var n = t.username;
                        e.username = n, e.currentOrg = Object(r["a"])(n), e.currentRole = Object(r["b"])(n), e.isAdmin = t["is_org_admin"], e.isSuperAdmin = t["is_superuser"]
                    },
                    SET_ORGS: function(e, t) {
                        e.orgs = t
                    },
                    MODIFY_ORG: function(e, t) {
                        e.orgs = e.orgs.map((function(e) {
                            return e.id === t.id && (e.name = t.name), e
                        }))
                    },
                    ADD_ORG: function(e, t) {
                        e.orgs.push(t)
                    },
                    SET_ROLES: function(e, t) {
                        e.roles = t
                    },
                    SET_SYS_ROLE: function(e, t) {
                        e.sysRole = t
                    },
                    SET_PERMS: function(e, t) {
                        e.perms = t, e.hasAdmin = (t & s["a"].PERM_ADMIN) === s["a"].PERM_ADMIN, e.hasAudit = (t & s["a"].PERM_AUDIT) === s["a"].PERM_AUDIT
                    },
                    SET_CURRENT_ORG: function(e, t) {
                        e.currentOrg = t, Object(r["d"])(e.username, t)
                    },
                    SET_CURRENT_ROLE: function(e, t) {
                        e.currentRole = t, Object(r["e"])(e.username, t)
                    },
                    SET_MFA_VERIFY: function(e) {
                        e.MFAVerifyAt = (new Date).valueOf()
                    }
                },
                u = {
                    getProfile: function(e) {
                        var t = e.commit,
                            n = e.state,
                            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return new Promise((function(e, i) {
                            !r && n.profile && Object.keys(n.profile).length > 0 ? e(n.profile) : Object(a["a"])().then((function(n) {
                                n || i("Verification failed, please Login again."), t("SET_PROFILE", n), e(n)
                            })).catch((function(e) {
                                i(e)
                            }))
                        }))
                    },
                    getRoles: function(e, t) {
                        var n = e.commit,
                            a = e.dispatch,
                            r = e.state;
                        return new Promise((function(e, i) {
                            return !t && r.roles && r.roles.length > 0 ? e(r.roles) : a("getProfile").then((function(t) {
                                var a = t.current_org_roles,
                                    r = t.role,
                                    i = s["a"].parseUserRoles(a, r);
                                n("SET_SYS_ROLE", r), n("SET_ROLES", i), n("SET_PERMS", s["a"].sumPerms(i)), e(i)
                            })).catch((function(e) {
                                i(e)
                            }))
                        }))
                    },
                    getInOrgs: function(e, t) {
                        var n = e.commit,
                            a = e.dispatch,
                            r = e.state;
                        return new Promise((function(e, i) {
                            if (!t && r.role && r.role.length > 0) return e(r.roles);
                            a("getProfile").then((function(t) {
                                var a = t.admin_or_audit_orgs;
                                n("SET_ORGS", a), e(a)
                            })).catch((function(e) {
                                return i(e)
                            }))
                        }))
                    },
                    addAdminOrg: function(e, t) {
                        var n = e.commit;
                        e.state;
                        n("ADD_ORG", t)
                    },
                    modifyOrg: function(e, t) {
                        var n = e.commit;
                        e.state;
                        n("MODIFY_ORG", t)
                    },
                    logout: function(e) {
                        var t = e.commit,
                            n = e.state;
                        return new Promise((function(e, r) {
                            Object(a["c"])(n.token).then((function() {
                                Object(i["d"])(), t("RESET_STATE"), e()
                            })).catch((function(e) {
                                r(e)
                            }))
                        }))
                    },
                    resetToken: function(e) {
                        var t = e.commit;
                        return new Promise((function(e) {
                            t("RESET_STATE"), e()
                        }))
                    },
                    setCurrentOrg: function(e, t) {
                        var n = e.commit;
                        n("SET_CURRENT_ORG", t)
                    },
                    setCurrentRole: function(e, t) {
                        var n = e.commit;
                        n("SET_CURRENT_ROLE", t)
                    },
                    setMFAVerify: function(e) {
                        var t = e.commit;
                        t("SET_MFA_VERIFY")
                    }
                };
            t["default"] = {
                namespaced: !0,
                state: c,
                mutations: l,
                actions: u
            }
        },
        "8ecc": function(e, t, n) {
            "use strict";
            var a = n("2bbd"),
                r = n.n(a);
            r.a
        },
        "8f5e": function(e, t, n) {
            var a = {
                "./router.js": "2e9c"
            };

            function r(e) {
                var t = i(e);
                return n(t)
            }

            function i(e) {
                var t = a[e];
                if (!(t + 1)) {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return t
            }
            r.keys = function() {
                return Object.keys(a)
            }, r.resolve = i, e.exports = r, r.id = "8f5e"
        },
        9039: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("el-dialog", e._g(e._b({
                        staticClass: "dialog",
                        attrs: {
                            title: e.title,
                            top: e.top
                        }
                    }, "el-dialog", e.$attrs, !1), e.$listeners), [e._t("default"), e._v(" "), n("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [e._t("footer", [e.showCancel ? n("el-button", {
                        attrs: {
                            size: "small"
                        },
                        on: {
                            click: e.onCancel
                        }
                    }, [e._v(e._s(e.cancelTitle))]) : e._e(), e._v(" "), e.showConfirm ? n("el-button", {
                        attrs: {
                            type: "primary",
                            size: "small",
                            loading: e.loadingStatus
                        },
                        on: {
                            click: e.onConfirm
                        }
                    }, [e._v(e._s(e.confirmTitle))]) : e._e()])], 2)], 2)
                },
                r = [],
                i = {
                    name: "Dialog",
                    props: {
                        title: {
                            type: String,
                            default: "Title"
                        },
                        showCancel: {
                            type: Boolean,
                            default: !0
                        },
                        cancelTitle: {
                            type: String,
                            default: function() {
                                return this.$t("common.Cancel")
                            }
                        },
                        top: {
                            type: String,
                            default: "3vh"
                        },
                        showConfirm: {
                            type: Boolean,
                            default: !0
                        },
                        loadingStatus: {
                            type: Boolean,
                            default: !1
                        },
                        confirmTitle: {
                            type: String,
                            default: function() {
                                return this.$t("common.Confirm")
                            }
                        }
                    },
                    data: function() {
                        return {}
                    },
                    methods: {
                        onCancel: function() {
                            this.$emit("cancel")
                        },
                        onConfirm: function() {
                            this.$emit("confirm")
                        }
                    }
                },
                s = i,
                o = (n("b96b"), n("2877")),
                c = Object(o["a"])(s, a, r, !1, null, "1f5cfe4e", null);
            t["a"] = c.exports
        },
        9077: function(e) {
            e.exports = {
                "": "",
                accounts: {
                    PleaseClickLeftAssetToViewAssetAccount: "Asset account list,  please click on the assets on the left to view",
                    PleaseClickLeftApplicationToViewApplicationAccount: "Application account list, please click on the application on the left to view",
                    PleaseClickLeftAssetToViewGatheredUser: "Gathered user list, please click on the assets on the left to view"
                },
                acl: {
                    name: "Name",
                    username: "Username",
                    ip_group: "IP group",
                    action: "Action",
                    priority: "Priority",
                    date_created: "Date created",
                    created_by: "Created by",
                    asset: "Asset",
                    system_user: "System user",
                    username_group: "Username group",
                    hostname_group: "Hostname group",
                    asset_ip_group: "Asset ip group",
                    system_users_name_group: "Systemusers name group",
                    system_users_protocol_group: "Systemusers protocol group",
                    system_users_username_group: "systemusers username group",
                    apply_login_asset: "Apply login asset",
                    apply_login_system_user: "Apply login system user",
                    apply_login_user: "Apply login user",
                    RuleDetail: "Rule detail"
                },
                applications: {
                    "": "",
                    updateAccountMsg: "Please update system user account info",
                    associateApplication: "Associate application",
                    RemoteApp: "Remote app",
                    Database: "Database",
                    Cloud: "Cloud",
                    App: "Application",
                    applicationsType: {
                        chrome: "Chrome",
                        mysql_workbench: "MySQL Workbench",
                        vmware_client: "Vmware Client",
                        custom: "Custom",
                        mysql: "MySQL",
                        oracle: "Oracle",
                        postgresql: "PostgreSQL",
                        mariadb: "MariaDB",
                        k8s: "kubernetes"
                    },
                    applicationsCategory: {
                        remote_app: "Remote app",
                        db: "Database app",
                        cloud: "Cloud app"
                    },
                    appPath: "App path",
                    appType: "App type",
                    appName: "App name",
                    asset: "Asset",
                    database: "Database",
                    host: "Host",
                    mysql: "Mysql",
                    port: "Port",
                    type: "Type",
                    chrome: "Chrome",
                    chrome_target: "target URL",
                    chrome_username: "Account",
                    chrome_password: "Password",
                    mysql_workbench: "MySQL Workbench",
                    mysql_workbench_ip: "DB IP",
                    mysql_workbench_name: "DB Name",
                    mysql_workbench_port: "DB Port",
                    mysql_workbench_username: "DB Account",
                    mysql_workbench_password: "DB Password",
                    vmware_client: "vSphere Client",
                    vmware_target: "target URL",
                    vmware_username: "Account",
                    vmware_password: "Password",
                    custom: "Custom",
                    custom_cmdline: "Cmdline",
                    custom_target: "target URL",
                    custom_username: "Account",
                    custom_password: "Password",
                    Custom: "Custom",
                    cluster: "Cluster",
                    kubernetes: "Kubernetes",
                    clusterHelpTextMessage: "Tips: https://172.16.8.8:8443",
                    DBInfo: "Database Info"
                },
                assets: {
                    AppList: "Application list",
                    AssociateSystemUsers: "Associate system users",
                    AssociateAssets: "Associate assets",
                    AssociateNodes: "Associate nodes",
                    Action: "Action",
                    ActiveSelected: "Active selected",
                    AdminUser: "Admin user",
                    ReplaceNodeAssetsAdminUser: "Replace node assets admin user with this",
                    AdminUserDetail: "Admin user detail",
                    DynamicUsername: "Dynamic username",
                    AdminUserListHelpMessage: "Admin users are asset (charged server) on the root, or have NOPASSWD: ALL sudo permissions users, JumpServer users of the system using the user to `push system user`, `get assets hardware information`, etc.\n",
                    Asset: "Asset",
                    HardwareInfo: "Hardware info",
                    Hardware: "Hardware",
                    AccountList: "Account list",
                    PermUserList: "Authorized user",
                    ViewPerm: "View permission",
                    LoginOption: "Login option",
                    AssetDetail: "Asset detail",
                    AssetList: "Asset list",
                    AssetListHelpMessage: "The left side is the asset tree, right click to create, delete, and change the tree node, authorization asset is also organized as a node, and the right side is the asset under that node\n",
                    AssetNumber: "Asset number",
                    AssetUserList: "Asset user list",
                    TestGatewayTestConnection: "Test gateway test connection",
                    TestGatewayHelpMessage: "If use nat, set the ssh real port",
                    SshPort: "SSH Port",
                    Assets: "Assets",
                    Auth: "Auth",
                    AutoGenerateKey: "Auto generate ssh key",
                    AutoPush: "Auto push",
                    BasePlatform: "Base platform",
                    Basic: "Basic",
                    Charset: "Charset",
                    CmdFilter: "CmdFilter",
                    CommandFilterDetail: "Command filter detail",
                    CommandFilterHelpMessage: "System user bound some command filter, each command filter has some rules, When user login asset with this system user, then run a command, The command will be filter by rules, higher priority rule run first, When a rule matched, if rule action is allow, then allow command execute, else if action is deny, then command with be deny, else match next rule, if none matched, allowed",
                    CommandFilterRuleContentHelpText: "One line one command",
                    CommandFilterRulePriorityHelpText: "1-100, the higher will be match first",
                    CommandFilterRules: "Command filter rules",
                    Comment: "Comment",
                    Cpu: "Cpu",
                    CommonUser: "Common user",
                    CreatedBy: "Created by",
                    Database: "Database",
                    DateJoined: "Date joined",
                    DateUpdated: "Date updated",
                    DeactiveSelected: "Deactive selected",
                    Disk: "Disk",
                    AdDomain: "AD Domain",
                    AdDomainHelpText: "AD domain provided to domain users for login",
                    Domain: "Domain",
                    DomainDetail: "Domain detail",
                    DomainHelpMessage: "The domain function is added to address the fact that some environments (such as the hybrid cloud) cannot be connected directly by jumping on the gateway server.\nJMS => Domain gateway => Target assets",
                    FullName: "Full name",
                    Gateway: "Gateway",
                    GatewayProtocolHelpText: "SSH protocol gateway, support proxy SSH, RDP, VNC",
                    Hostname: "Hostname",
                    IP: "IP",
                    IsActive: "Is active",
                    Key: "Key",
                    Label: "Label",
                    LoginModeHelpMessage: "If you choose manual login mode, you do not need to fill in the username and password.",
                    LoginModel: "Login model",
                    Memory: "Memory",
                    Meta: "Meta",
                    Model: "Model",
                    Name: "Name",
                    NoInputCommand: "No input command",
                    NoSystemUserWasSelected: "No system user was selected",
                    Node: "Node",
                    UserSwitch: "User switch",
                    SwitchToUser: "Switch to user",
                    SwitchToUserListTips: "When the following users are used to connect to assets, the current system user is used to log in and then switch.",
                    NodeInformation: "Node information",
                    OnlyLatestVersion: "Only latest version",
                    Os: "Os",
                    Other: "Other",
                    Password: "Password",
                    PasswordWithoutSpecialCharHelpText: "Password can't has special chars ",
                    Pending: "Pending",
                    Platform: "Platform",
                    PlatformDetail: "Platform detail",
                    PriorityHelpMessage: "1-100, High level will be using login asset as default, if user was granted more than 2 system user",
                    Protocol: "Protocol",
                    Protocols: "Protocols",
                    PublicIp: "Public ip",
                    Push: "Push",
                    PushSystemUserNow: "Push system user now",
                    PushAllSystemUsersToAsset: "Push all system users to asset",
                    QuickUpdate: "Quick update",
                    Reachable: "Reachable",
                    Unreachable: "Unreachable",
                    Unknown: "Unknown",
                    Refresh: "Refresh",
                    RefreshHardware: "Refresh hardware",
                    RemoteAppListHelpMessage: "Before using this feature, make sure that the application loader has been uploaded to the application server and successfully published as a RemoteApp application <b><a href='https://github.com/jumpserver/Jmservisor/releases'> Download application loader</a></b>",
                    RemoteApps: "Remote apps",
                    Applications: "Applications",
                    RemoteType: "Remote type",
                    RemoveFromCurrentNode: "Remove from node",
                    ReplaceNodeAssetsAdminUserWithThis: "Replace node assets admin user with this",
                    Rules: "Rules",
                    SFTPHelpMessage: "SFTP root dir, tmp, home or custom",
                    SerialNumber: "Serial number",
                    SudoHelpMessage: "Use comma split multi command, ex: /bin/whoami, /bin/ifconfig",
                    PasswordHelpMessage: "Password or private key password",
                    SystemUser: "System user",
                    SystemUserDetail: "System user detail",
                    SystemUserListHelpMessage: "<b>System user</b> is the account JumpServer used to log into the asset, such as using root `ssh root@host`, rather than the current user username（ssh admin@host)`;<br><b>Admin user</b> is the account that already exists on an asset, and have privileged permissions, JumpServer using this create common system user, and gather hardware Etc;</br><b>Common user</b> can pre-exist assets or created automatically by the admin user.",
                    SystemUsers: "System users",
                    Test: "Test",
                    TestAssetsConnective: "Test assets connective",
                    TestAllSystemUsersConnective: "Test all system users connective",
                    TestConnection: "Test connection",
                    Type: "Type",
                    UnselectedAssets: "No asset selected or the selected asset does not support SSH protocol connection",
                    UnselectedNodes: "Unselected nodes",
                    UpdateAssetUserToken: "Update asset user auth",
                    Username: "Username",
                    UsernameHelpMessage: "Username is dynamic, When connect asset, using current user's username",
                    Value: "Value",
                    Vendor: "Vendor",
                    Version: "Version",
                    command_filter_list: "Command filter list",
                    date_joined: "Date joined",
                    sshKeyFingerprint: "SSH fingerprint",
                    ip: "IP",
                    sshkey: "sshkey",
                    GroupsHelpMessage: "Please fill in user groups, separated by commas if there are multiple user groups(Please fill in the existing user groups)",
                    HomeHelpMessage: "Default home directory: /home/system username",
                    Home: "Home",
                    LinuxUserAffiliateGroup: "Linux user affiliate group",
                    ipDomain: "IP(Domain)",
                    HostProtocol: "Host Protocol",
                    DatabaseProtocol: "Database Protocol",
                    OtherProtocol: "Other Protocol",
                    PasswordOrToken: "Password / Token"
                },
                audits: {
                    Hosts: "Host",
                    RunUser: "Run user",
                    User: "User",
                    Username: "Username",
                    SystemUserName: "System username",
                    View: "View"
                },
                auth: {
                    LoginRequiredMsg: "You account has logout, Please login again",
                    ReLogin: "Re-Login"
                },
                common: {
                    UserLoginLimit: "User login limit",
                    IPLoginLimit: "IP login limit",
                    Setting: "Setting",
                    ViewMore: "View more",
                    Announcement: "Announcement",
                    Logging: "Logging",
                    Database: "Database",
                    Params: "Params",
                    MFAVerify: "Verify MFA",
                    ViewSecret: "View secret",
                    ConnectWebSocketError: "Connect Websocket failed",
                    Nothing: "Nothing",
                    Action: "Action",
                    CustomCol: "Custom table col",
                    RequestTickets: "Request tickets",
                    Actions: "Actions",
                    NeedSpecifiedFile: "Required to upload the specified format file",
                    TestPortErrorMsg: "Port Error, please check",
                    Activate: "Activate",
                    actionsTips: "Clipboard's copy and paste control only support RDP/VNC protocol.",
                    Active: "Active",
                    TableColSettingInfo: "Please select the list details you want to display",
                    Add: "Add",
                    PleaseAgreeToTheTerms: "Please agree to the terms",
                    PushSelected: "Push selected",
                    PushSelectedSystemUsersToAsset: "Push selected system users to asset",
                    TestSelected: "Test selected",
                    TestSelectedSystemUsersConnective: "Test selected system users connective",
                    UpdateAssetDetail: "Update more detail",
                    AddSuccessMsg: "Add success",
                    Auth: "Authorization",
                    BadRequestErrorMsg: "Bad request, please check again",
                    BadRoleErrorMsg: "Bad request, no permission for this operation",
                    BadConflictErrorMsg: "Refreshing, please try again later",
                    Basic: "Basic",
                    BasicInfo: "Basic info",
                    ApplyInfo: "Apply info",
                    Cancel: "Cancel",
                    Close: "Close",
                    "Command filter": "Command filter",
                    Comment: "Comment",
                    Confirm: "Confirm",
                    Create: "Create",
                    CreatedBy: "Created by",
                    CrontabHelpTips: "eg: Every Sunday 03:05 run <5 3 * * 0> <br>Tips:Using 5 digits linux crontab expressions<min hour day month week> (<a href='https://tool.lu/crontab/' target='_blank'>Online tools</a>) <br>Note:If both Regularly perform and Cycle perform are set, give priority to Regularly perform",
                    DateEnd: "End date",
                    Resource: "Resource",
                    DateLast24Hours: "Last 24 hours",
                    DateLast3Months: "Last 3 months",
                    DateLastMonth: "Last month",
                    DateLastWeek: "Last week",
                    DateStart: "Start date",
                    Delete: "Delete",
                    Disable: "Disable",
                    Download: "Download",
                    Enable: "Enable",
                    "On/Off": "On/Off",
                    EnterForSearch: "Press enter to search",
                    Export: "Export",
                    Import: "Import",
                    ContinueImport: "ContinueImport",
                    Continue: "Continue",
                    Stop: "Stop",
                    Finished: "Finished",
                    Refresh: "Refresh",
                    Info: "Info",
                    MFAConfirm: "MFA Confirm",
                    MFARequireForSecurity: "MFA required for security",
                    PasswordConfirm: "Password Confirm",
                    PasswordRequireForSecurity: "Password required for security",
                    Members: "Members",
                    More: "More",
                    Message: "Message",
                    MoreActions: "Actions",
                    Name: "Name",
                    No: "No",
                    NoData: "No data",
                    Open: "Open",
                    Other: "Other",
                    Others: "Others",
                    Push: "Push",
                    Receivers: "Receivers",
                    QuickUpdate: "Quick update",
                    RemoveSuccessMsg: "Remove success",
                    Reset: "Reset",
                    Search: "Search",
                    MFAErrorMsg: "MFA Error, please check",
                    InputEmailAddress: "Please enter your email address",
                    Select: "Select",
                    SelectFile: "Select file",
                    Show: "Show",
                    Submit: "Submit",
                    Test: "Test",
                    SaveAndAddAnother: "Save and add another",
                    TestSuccessMsg: "Test Success",
                    To: "To",
                    Update: "Update",
                    Revise: "Revise",
                    bind: "Bind",
                    unbind: "Unbind",
                    Upload: "Upload",
                    Clone: "Clone",
                    Username: "Username",
                    Validity: "Validity",
                    Invalidity: "Invalidity",
                    View: "View",
                    Yes: "Yes",
                    action: "Action",
                    activateSelected: "Activate selected",
                    bulkDeleteErrorMsg: "Bulk delete failed: ",
                    bulkDeleteSuccessMsg: "Bulk delete success",
                    bulkRemoveErrorMsg: "Bulk remove failed: ",
                    bulkRemoveSuccessMsg: "Bulk remove success",
                    NeedAssetsAndSystemUserErrMsg: "Need assets and systemuser",
                    createBy: "Create by",
                    cloneFrom: "Clone from",
                    createErrorMsg: "Create error",
                    createSuccessMsg: "Create success",
                    saveSuccessContinueMsg: "Create success, you may add another",
                    createdBy: "Created by",
                    dateCreated: "Date created",
                    dateFinished: "Date finished",
                    dateExpired: "Date expired",
                    dateStart: "Date start",
                    deleteErrorMsg: "Delete failed",
                    deleteFailedMsg: "Delete failed",
                    deleteSelected: "Delete selected",
                    deleteSuccessMsg: "Delete success",
                    deleteWarningMsg: "Are you sure to delete ",
                    disableSelected: "Disable selected",
                    fieldRequiredError: "This field is required",
                    getErrorMsg: "Get failed",
                    fileType: "File type",
                    Status: "Status",
                    Total: "Total",
                    Success: "Success",
                    Failed: "Failed",
                    Pending: "Pending",
                    imExport: {
                        ExportAll: "Export all",
                        ExportOnlyFiltered: "Export only filtered",
                        ExportOnlySelectedItems: "Export only selected items",
                        ExportRange: "Export range",
                        createSuccessMsg: "Create success, total: {count}",
                        downloadImportTemplateMsg: "Download import template",
                        downloadUpdateTemplateMsg: "Download update template",
                        onlyCSVFilesTips: "Only csv supported",
                        updateSuccessMsg: "Update success, total: {count}",
                        dragUploadFileInfo: "Drag file here or click to upload",
                        uploadCsvLth10MHelpText: "csv/xlsx files with a size less than 10M",
                        hasImportErrorItemMsg: "There is an error item, click the x icon to view the details, and continue to import after editing"
                    },
                    isValid: "Is valid",
                    nav: {
                        APIKey: "API Key",
                        AdminPage: "Admin page",
                        Docs: "Docs",
                        Help: "Help",
                        Logout: "Logout",
                        Profile: "Profile",
                        Support: "Support",
                        UserPage: "User page",
                        EnterpriseEdition: "Enterprise edition"
                    },
                    passwordOrPassphrase: "Password or Passphrase",
                    removeErrorMsg: "Remove failed: ",
                    removeSuccessMsg: "Remove success",
                    rows: "rows",
                    tree: {
                        DropConfirmMsg: "Are you sure mv {src} to {dst} ?",
                        Empty: "Empty",
                        Loading: "Loading"
                    },
                    updateErrorMsg: "Update failed",
                    updateSelected: "Update selected",
                    updateSuccessMsg: "Update success",
                    SelectProperties: "Select properties",
                    ObjectNotFoundOrDeletedMsg: "Resource lost or deleted",
                    removeSelected: "Remove selected",
                    removeWarningMsg: "Are you sure to remove ",
                    password: {
                        UPPER_CASE_REQUIRED: "Upper case required",
                        LOWER_CASE_REQUIRED: "Lower case required",
                        NUMBER_REQUIRED: "Number required",
                        SPECIAL_CHAR_REQUIRED: "Special char required",
                        MIN_LENGTH_ERROR: "Password minimum length {}"
                    },
                    lastCannotBeDeleteMsg: "The last one can't be delete",
                    InvalidJson: "Not a valid json format",
                    time_period: "Time period",
                    CronTab: {
                        newCron: "new cron",
                        timeExpression: "time expression",
                        cronExpression: "cron expression",
                        min: "minute",
                        hour: "hour",
                        day: "day",
                        month: "month",
                        week: "week",
                        wildcardsAllowed: "wildcards allowed",
                        from: "from",
                        every: "every",
                        appoint: "appoint",
                        manyChoose: "many choose",
                        startEvery: " start, every",
                        executeOnce: " execute once",
                        lastDay: "last day of the month",
                        everyMonth: "every month",
                        lastWorking: "the last working day",
                        lastWeek: "last week of the month",
                        num: "number ",
                        cycleFromWeek: "cycle from week",
                        the: "the",
                        weekOf: "week of week",
                        Monday: "Monday",
                        Tuesday: "Tuesday",
                        Wednesday: "Wednesday",
                        Thursday: "Thursday",
                        Friday: "Friday",
                        Saturday: "Saturday",
                        Sunday: "Sunday",
                        runningTimes: "last 5 running times",
                        calculationResults: "calculationResults...",
                        failedConditions: "cron expression error"
                    },
                    Cycle: "Cycle",
                    WeekCronSelect: {
                        Monday: "Monday",
                        Tuesday: "Tuesday",
                        Wednesday: "Wednesday",
                        Thursday: "Thursday",
                        Friday: "Friday",
                        Saturday: "Saturday",
                        Sunday: "Sunday",
                        ClearSelection: "Clear selection",
                        SelectAll: "Select all",
                        CanDragSelect: "Can drag the mouse to select a time period",
                        WeekOrTime: "Week/Time"
                    }
                },
                dashboard: {
                    ActiveAsset: "Asset active",
                    ActiveUser: "User active",
                    ActiveUserAssetsRatioTitle: "User, Asset active ratio",
                    Asset: "Asset",
                    AssetRatio: "Asset radio",
                    AssetsTotal: "Asset total",
                    DisabledAsset: "Asset disabled",
                    DisabledUser: "User disabled",
                    InActiveAsset: "Asset not visited",
                    InActiveUser: "User not visit",
                    LatestSessions: "Latest sessions",
                    LatestSessions10: "Latest sessions top 10",
                    LatestTop10: "TOP 10",
                    LoginAssets: "Active assets",
                    LoginCount: "Login count",
                    LoginOverview: "Sessions overview",
                    LoginTo: "Login to",
                    LoginUsers: "Active users",
                    Monthly: "Monthly",
                    OnlineSessions: "Online sessions",
                    OnlineUsers: "Online users",
                    TimesWeekUnit: "times/week",
                    TopAssetsOfWeek: "Top assets of week",
                    TopUsersOfWeek: "Top user of week",
                    User: "User",
                    UserRatio: "User Ratio",
                    UsersTotal: "Users total",
                    Weekly: "Weekly"
                },
                ops: {
                    Execute: "Execute",
                    ID: "ID",
                    No: "No",
                    PleaseSelect: "Please select",
                    Yes: "Yes",
                    become: "Become",
                    contents: "Contents",
                    date: "Date",
                    dateStart: "Date start",
                    datetime: "Datetime",
                    detail: "Detail",
                    execution: "Execution",
                    executionDetail: "Execution detail",
                    hosts: "Hosts",
                    inTotal: "In total",
                    isFinished: "Is finished",
                    isSuccess: "Is success",
                    lastExecutionOutput: "Lask execution output",
                    lastRun: "Last run",
                    lastRunFailedHosts: " Last run failed hosts",
                    lastRunSuccessHosts: " Last run success hosts",
                    latestVersion: "Latest version",
                    options: "Options",
                    output: "Output",
                    pattern: "Pattern",
                    ratio: "Ratio",
                    run: "Run",
                    runAs: "Run as",
                    runTimes: "Run times",
                    selectAssetsMessage: "Select the left asset, select the running system user, execute command in batch",
                    selectedAssets: "Selected assets:",
                    stat: "F/S/T",
                    success: "Success",
                    taskDetail: "Task detail",
                    taskName: "Task name",
                    taskVersions: "Task versions",
                    tasks: "Tasks",
                    time: "Time",
                    timeDelta: "Time delta",
                    totalVersions: "Total versions",
                    version: "Version",
                    versionDetail: "Version detail",
                    versionRunExecution: "Version run execution",
                    Unkown: "Unkown"
                },
                perms: {
                    "": "",
                    Actions: "Permission",
                    Permission: "Permissions",
                    Asset: "Asset",
                    Basic: "Basic",
                    Exclude: "Exclude",
                    IP: "IP",
                    Include: "Include",
                    Inherit: "Inherit",
                    Node: "Node",
                    SystemUser: "System user",
                    User: "User",
                    UserGroups: "UserGroups",
                    Permissions: "Permissions",
                    DatabaseAppPermission: "Databases permissions",
                    RemoteAppPermission: "Remote apps permissions",
                    KubernetesAppPermission: "Kubernetes permissions",
                    addAssetToThisPermission: "Add asset to this permission",
                    addDatabaseAppToThisPermission: "Add DatabaseApp to this permission",
                    addK8sAppToThisPermission: "Add KubernetesApp to this permission",
                    addApplicationToThisPermission: "Add Application to this permission",
                    addNodeToThisPermission: "Add node to this permission",
                    addRemoteAppToThisPermission: "Add RemoteApp to this permission",
                    addSystemUserToThisPermission: "System user",
                    addUserGroupToThisPermission: "Add user group to this permission",
                    addUserToThisPermission: "Add user to this permission",
                    all: "All",
                    PermName: "Perm name",
                    assetAndNode: "Assets and node",
                    assetCount: "Asset count",
                    connect: "Connect",
                    databaseApp: "DatabaseApp",
                    KubernetesApp: "KubernetesApp",
                    dateStart: "Date start",
                    downloadFile: "Download file",
                    hostName: "Hostname",
                    isValid: "Validity",
                    fromTicket: "From ticket",
                    isEffective: "Effective",
                    nodeCount: "Node count",
                    refreshFail: "Refresh fail",
                    refreshPermissionCache: "Refresh permission cache",
                    refreshSuccess: "Refresh success",
                    remoteApp: "RemoteApp",
                    remoteAppCount: "RemoteApp count",
                    appsCount: "App count",
                    appsList: "App list",
                    DatabaseAppCount: "DatabaseApp count",
                    KubernetesAppCount: "KubernetesApp count",
                    systemUserCount: "System user count",
                    upDownload: "Upload download",
                    uploadFile: "Upload file",
                    clipboardCopyPaste: "Copy Paste",
                    clipboardCopy: "Clipboard copy",
                    clipboardPaste: "Clipboard paste",
                    userCount: "User count",
                    userGroupCount: "User group count",
                    usersAndUserGroups: "Users and user groups"
                },
                route: {
                    "": "",
                    SessionDetail: "SessionDetail",
                    Accounts: "Accounts",
                    AssetAccount: "Asset account",
                    ApplicationAccount: "Application account",
                    Ticket: "Tickets",
                    CommandConfirm: "Command confirm",
                    AdminUserCreate: "Admin user create",
                    AdminUserDetail: "Admin user detail",
                    AdminUserList: "Admin Users",
                    AdminUserUpdate: "Admin user update",
                    Applications: "Applications",
                    AssetCreate: "Asset create",
                    AssetDetail: "Asset detail",
                    AssetList: "Assets",
                    AssetPermission: "Asset Permissions",
                    AssetPermissionCreate: "Asset permissions create",
                    AssetPermissionDetail: "Asset permissions detail",
                    AssetPermissionUpdate: "Asset permissions update",
                    AssetUpdate: "Asset update",
                    Assets: "Assets",
                    Audits: "Audits",
                    BatchCommand: "Batch Command",
                    BatchCommandLog: "Batch Command Log",
                    CeleryTaskLog: "Celery task log",
                    CommandExecutions: "CommandExecutions ",
                    CommandFilterCreate: "Command filter create",
                    CommandFilterDetail: "Command filter detail",
                    CommandFilterList: "Command Filters",
                    CommandFilterRulesCreate: "Command filter rules create",
                    CommandFilterRulesUpdate: "Command filter rules update",
                    CommandFilterUpdate: "Command filter update",
                    CommandStorageUpdate: "Command storage update",
                    Commands: "Commands",
                    CreateCommandStorage: "Create command storage",
                    CreateReplayStorage: "Create replay storage",
                    Dashboard: "Dashboard",
                    DatabaseApp: "Database Apps",
                    DatabaseAppCreate: "Database app create",
                    DatabaseAppDetail: "Database app detail",
                    DatabaseAppPermission: "Databases permissions",
                    DatabaseAppPermissionCreate: "Databases permissions create",
                    DatabaseAppPermissionDetail: "Databases permissions detail",
                    DatabaseAppPermissionUpdate: "Databases permissions update",
                    DatabaseAppUpdate: "Database app update",
                    KubernetesApp: "Kubernetes Apps",
                    KubernetesAppCreate: "Kubernetes app create",
                    KubernetesAppDetail: "Kubernetes app detail",
                    KubernetesAppPermission: "Kubernetes permissions",
                    KubernetesAppPermissionCreate: "Kubernetes permissions create",
                    KubernetesAppPermissionDetail: "Kubernetes permissions detail",
                    KubernetesAppPermissionUpdate: "Kubernetes permissions update",
                    KubernetesAppUpdate: "Kubernetes app update",
                    Acl: "Access Control",
                    UserAclList: "User acl list",
                    UserAclCreate: "User acl create",
                    UserAclUpdate: "User acl update",
                    UserAclLists: "User acl lists",
                    UserAclDetail: "User acl detail",
                    AssetAclList: "Asset Acl",
                    AssetAclCreate: "Asset acl create",
                    AssetAclUpdate: "Asset acl update",
                    AssetAclDetail: "Asset acl detail",
                    DomainCreate: "Domain create",
                    DomainDetail: "Domain detail",
                    DomainList: "Domains",
                    DomainUpdate: "Domain update",
                    FileManager: "File Manager",
                    FtpLog: "FTP Logs",
                    GatewayCreate: "Gateway create",
                    GatewayUpdate: "Gateway update",
                    JobCenter: "Jobcenter",
                    LabelCreate: "Label create",
                    LabelList: "Labels",
                    LabelUpdate: "Label update",
                    LoginLog: "Login Logs",
                    MyApps: "My Apps",
                    MyAssets: "My Assets",
                    OperateLog: "Operation  Logs",
                    PasswordChangeLog: "Password Update Logs",
                    Perms: "Permissions",
                    PersonalInformationImprovement: "PersonalInformationImprovement",
                    PlatformCreate: "Platform create",
                    PlatformDetail: "Platform detail",
                    PlatformList: "Platforms",
                    PlatformUpdate: "Platform update",
                    RemoteApp: "Remote Apps",
                    RemoteAppDetail: "Remote app detail",
                    RemoteAppPermission: "Remote apps permissions",
                    ApplicationPermission: "Application Permissions",
                    RemoteAppPermissionCreate: "Remote apps permission create",
                    RemoteAppPermissionDetail: "Remote apps permissions detail",
                    RemoteAppPermissionUpdate: "Remote app permission update",
                    ApplicationDetail: "Application detail",
                    ApplicationPermissionCreate: "Application permission create",
                    ApplicationPermissionDetail: "Application permission detail",
                    ApplicationPermissionUpdate: "Application permission update",
                    RemoteAppUpdate: "Remote app update",
                    ReplayStorageUpdate: "Replay storage update",
                    Detail: "Detail",
                    Activity: "Activity",
                    SessionOffline: "Sessions offline",
                    SessionOnline: "Sessions online",
                    Sessions: "Sessions",
                    Settings: "Settings",
                    SystemUserCreate: "System user create",
                    SystemUserDetail: "System user detail",
                    SystemUserList: "System Users",
                    SystemUserUpdate: "System user update",
                    TaskDetail: "Tasks detail",
                    TaskList: "Tasks",
                    TaskMonitor: "Task Monitor",
                    Terminal: "Terminal",
                    TicketDetail: "Ticket detail",
                    TicketCreate: "Ticket create",
                    Tickets: "Tickets",
                    UserCreate: "User create",
                    UserDetail: "User detail",
                    UserFirstLogin: "UserFirstLogin",
                    UserGroupCreate: "User group create",
                    UserGroupDetail: "User group detail",
                    UserGroupList: "User Groups",
                    UserGroupUpdate: "User group update",
                    UserGuide: "UserGuide",
                    UserList: "Users",
                    UserProfile: "User profile",
                    UserUpdate: "User update",
                    Users: "Users",
                    WebFTP: "WebFTP",
                    WebTerminal: "Web Terminal",
                    Notifications: "Notifications",
                    SiteMessageList: "Site message",
                    UserLoginACL: "User Login ACL"
                },
                sessions: {
                    SetToDefaultStorage: "Set to default storage",
                    SetToDefault: "Set to default",
                    SetSuccess: "Set success",
                    SetFailed: "Set failed",
                    StorageConfiguration: "Storage configuration",
                    accountKey: "Account key",
                    accountName: "Account name",
                    active: "active",
                    alive: "alive",
                    asset: "Asset",
                    target: "Target",
                    bucket: "Bucket",
                    command: "Command",
                    Activity: "Activity",
                    commandStorage: "Command storage",
                    comment: "Comment",
                    containerName: "Container name",
                    date: "Datetime",
                    dateCreated: "Date created",
                    dateEnd: "Date end",
                    dateStart: "Date start",
                    docType: "Doc type",
                    download: "download",
                    downloadReplay: "Download replay",
                    duration: "Duration",
                    endPoint: "Endpoint",
                    endpointSuffix: "Endpoint suffix",
                    sessionActiveCount: "session active count",
                    systemCpuLoad: "cpu load",
                    systemDiskUsedPercent: "disk used percent",
                    systemMemoryUsedPercent: "memory used percent",
                    EsDisabled: "Node is unavailable, please contact administrator",
                    go: "Go",
                    goto: "Goto",
                    hosts: "Hosts",
                    httpPort: "Http port",
                    id: "ID",
                    index: "Index",
                    info: "info",
                    join: "join",
                    loginFrom: "Login from",
                    name: "Name",
                    protocol: "Protocol",
                    region: "Region",
                    remoteAddr: "Remote addr",
                    replay: "replay",
                    replaySession: "Replay session",
                    replayStorage: "Replay storage",
                    riskLevel: "Risk level",
                    session: "Session",
                    sshPort: "SSH port",
                    storage: "Storage",
                    systemUser: "System user",
                    terminalDetail: "Terminal detail",
                    terminalUpdate: "Update terminal",
                    terminalUpdateStorage: "Update terminal storage",
                    terminate: "Terminate",
                    sessionTerminate: "Session Terminate",
                    test: "Test",
                    type: "Type",
                    user: "Use",
                    riskLevels: {
                        common: "common"
                    },
                    Monitor: "Monitor",
                    XRDPNotSupport: "RDP Client session not support now",
                    sessionMonitor: "Session Monitor",
                    TerminateTaskSendSuccessMsg: "Terminate task has been send, Please check later",
                    helpText: {
                        esUrl: "Tip: If you have multiple hosts, use comma (, ) to split (eg: http://www.jumpserver.a.com, http://www.jumpserver.b.com)",
                        esIndex: "Es provides the default index: jumpserver",
                        esDocType: "Es provides the default document type: command",
                        s3Endpoint: "S3: http://s3.{REGION_NAME}.amazonaws.com<br>S3(China): http://s3.{REGION_NAME}.amazonaws.com.cn<br>Example: http://s3.cn-north-1.amazonaws.com.cn",
                        ossEndpoint: "OSS: http://{REGION_NAME}.aliyuncs.com<br>Example: http://oss-cn-hangzhou.aliyuncs.com"
                    }
                },
                setting: {
                    Feature: "Feature",
                    SMSProvider: "SMS provider",
                    SMS: "SMS",
                    AlibabaCloud: "Alibaba cloud",
                    TencentCloud: "Tencent cloud",
                    VerifySignTmpl: "Verification code template",
                    Radius: "Radius",
                    Enable: "Enable",
                    Perm: "Permission",
                    SMTP: "SMTP server",
                    Setting: "Setting",
                    AuthMethod: "Auth methods",
                    AuthLimit: "Auth limit",
                    Ops: "Task",
                    OTP: "OTP(MFA)",
                    MessageSub: "Message",
                    Cleaning: "Period clean",
                    Perms: "Perms",
                    CASSetting: "CAS setting",
                    Other: "More...",
                    Auth: "Auth",
                    SyncSetting: "Sync setting",
                    Advanced: "Advanced",
                    InsecureCommandNotifyToSubscription: "Insecure command notification setting, change to system message subscription, support more notify method",
                    ApiKeyList: "Api key list",
                    AssetCount: "Asset count",
                    Basic: "Basic",
                    Corporation: "Corporation",
                    Create: "Create",
                    Edition: "Edition",
                    Email: "Email",
                    EmailContent: "Email content setting",
                    Expired: "Expired",
                    Hostname: "Hostname",
                    ImportLicense: "Import license",
                    ImportLicenseTip: "Please Import License",
                    Ldap: "LDAP",
                    License: "License",
                    LicenseFile: "License file",
                    PasswordCheckRule: "Password check rule",
                    Security: "Security",
                    SecuritySetting: "Security",
                    SubscriptionID: "Subscription ID",
                    SystemMessageSubscription: "System messages",
                    insecureCommandEmailUpdate: "Setting",
                    Terminal: "Terminal",
                    all: "All",
                    authLdap: "Enable LDAP auth",
                    authLdapBindDn: "Bind DN",
                    authLdapBindPassword: "Password",
                    authLdapSearchFilter: "User search filter",
                    authLdapSearchOu: "User OU",
                    authLdapServerUri: "LDAP server",
                    authLdapUserAttrMap: "User attr map",
                    authCASAttrMap: "User attr map",
                    unselectedUser: "Unselected user",
                    auto: "Auto",
                    basicSetting: "Basic setting",
                    communityEdition: "Community edition",
                    consult: "Consult",
                    CreateUserSetting: "Create User setting",
                    emailCustomUserCreatedBody: "Create user email content",
                    emailCustomUserCreatedHonorific: "Create user honorific",
                    emailCustomUserCreatedSignature: "Signature",
                    emailCustomUserCreatedSubject: "Create user email subject",
                    emailEmailFrom: "Send user",
                    emailHost: "SMTP host",
                    emailHostPassword: "SMTP password",
                    emailHostUser: "SMTP user",
                    emailPort: "SMTP port",
                    emailRecipient: "Test recipient",
                    emailSubjectPrefix: "Email Subject Prefix",
                    emailTest: "Test connection",
                    emailUserSSL: "Use SSL",
                    emailUserTLS: "Use TLS",
                    MailSend: "Mail send",
                    LDAPServerInfo: "LDAP Server",
                    LDAPUser: "LDAP User",
                    InsecureCommandAlert: "Insecure command alert",
                    helpText: {
                        ApiKeyList: "The API key is used to sign the request header. The header of each request is different. Please refer to the usage documentation",
                        authLdapSearchFilter: "Choice may be (cn|uid|sAMAccountName)=%(user)s)",
                        authLdapSearchOu: "Use | split User OUs",
                        authLdapUserAttrMap: "User attr map present how to map LDAP user attr to jumpserver, username, name, email is jumpserver attr",
                        emailCustomUserCreatedBody: "Tips:When creating a user, send the content of the email",
                        emailCustomUserCreatedHonorific: "Tips: When creating a user, send the honorific of the email (eg:Hello)",
                        emailCustomUserCreatedSignature: "Tips: Email signature (eg:jumpserver)",
                        emailCustomUserCreatedSubject: "Tips: When creating a user, send the subject of the email (eg:Create account successfully)",
                        emailEmailFrom: "Tips: Send mail account, default SMTP account as the send account",
                        emailHostPassword: "Tips: Some provider use token except password",
                        emailRecipient: "Tips: Used only as a test mail recipient",
                        emailSubjectPrefix: "Tips: Some word will be intercept by mail provider",
                        securityLoginLimitTime: "Tip: (unit/minute) if the user has failed to log in for a limited number of times, no login is allowed during this time interval.",
                        securityMaxIdleTime: "If idle time more than it, disconnect connection Unit: minute",
                        securityPasswordExpirationTime: "Tip: (unit: day) If the user does not update the password during the time, the user password will expire failure;The password expiration reminder mail will be automatic sent to the user by system within 5 days (daily) before the password expires",
                        siteUrl: "eg: http://jumpserver.abc.com:8080",
                        terminalHeartbeatInterval: "Units: seconds",
                        terminalSessionKeepDuration: "Units: days, Session, record, command will be delete if more than duration, only in database",
                        terminalTelnetRegex: "ex: Last\\\\s*login|success|\\u6210\\u529f",
                        userGuideUrl: "User first login update profile done redirect to it"
                    },
                    helpTip: {
                        emailUserSSL: "If SMTP port is 465, may be select",
                        emailUserTLS: "If SMTP port is 587, may be select",
                        securityCommandExecution: "Allow user batch execute commands",
                        securityMfaAuth: "After opening, all user login must use MFA(valid for all users, including administrators)",
                        securityPasswordLowerCase: "After opening, the user password changes and resets must contain lowercase letters",
                        securityPasswordNumber: "After opening, the user password changes and resets must contain numeric characters",
                        securityPasswordSpecialChar: "After opening, the user password changes and resets must contain special characters",
                        securityPasswordUpperCase: "After opening, the user password changes and resets must contain uppercase letters",
                        securityServiceAccountRegistration: "Allow using bootstrap token register service account, when terminal setup, can disable it"
                    },
                    validatorMessage: {
                        EnsureThisValueIsGreaterThanOrEqualTo3: "Ensure this value is greater than or equal to 3",
                        EnsureThisValueIsGreaterThanOrEqualTo5: "Ensure this value is greater than or equal to 5",
                        EnsureThisValueIsGreaterThanOrEqualTo6: "Ensure this value is greater than or equal to 6"
                    },
                    import: "Import",
                    importLdapUserTip: "Please submit the LDAP configuration before import",
                    importLdapUserTitle: "LDAP user list",
                    ldapBulkImport: "Bulk import",
                    ldapConnectTest: "Test connection",
                    ldapLoginTest: "Test login",
                    password: "Password",
                    passwordPlaceholder: "Please input password",
                    refreshLdapUser: "Refresh cache",
                    securityCommandExecution: "Batch execute commands",
                    securityLoginLimitCount: "Limit the number of login failures",
                    securityLoginLimitTime: "No logon interval",
                    securityMaxIdleTime: "Connection max idle time",
                    securityMfaAuth: "MFA",
                    securityPasswordExpirationTime: "Password expiration time",
                    securityPasswordLowerCase: "Must contain lowercase letters",
                    securityPasswordMinLength: "Password minimum length",
                    securityPasswordNumber: "Must contain numeric characters",
                    securityPasswordSpecialChar: "Must contain special characters",
                    securityPasswordUpperCase: "Must contain capital letters",
                    securityServiceAccountRegistration: "Service account registration",
                    siteUrl: "Current SITE URL",
                    technologyConsult: "Technology Consult",
                    terminalAssetListPageSize: "List page size",
                    terminalAssetListSortBy: "List sort by",
                    terminalHeartbeatInterval: "Heartbeat interval",
                    terminalPasswordAuth: "Password auth",
                    terminalPublicKeyAuth: "Public key auth",
                    terminalSessionKeepDuration: "Session keep duration",
                    terminalTelnetRegex: "Telnet login regex",
                    testLdapLoginSubtitle: "Save the configuration before testing the login",
                    testLdapLoginTitle: "Test LDAP user login",
                    userGuideUrl: "User Guide URL",
                    username: "Username",
                    usernamePlaceholder: "Please input username",
                    refreshLdapCache: "Refreshing Ldap cache ",
                    LicenseExpired: "License expired",
                    LicenseWillBe: "License will expire at ",
                    Expire: "",
                    WeCom: "WeCom",
                    DingTalk: "DingTalk",
                    dingTalkTest: "Test",
                    weComTest: "Test",
                    FeiShu: "FeiShu",
                    feiShuTest: "Test",
                    setting: "Setting"
                },
                tickets: {
                    PermissionName: "Permission name",
                    Accept: "Accept",
                    AssignedMe: "Assigned me",
                    Assignee: "Assignee",
                    RequestPerm: "Request Perm",
                    AssignedInfo: "Assigned Info",
                    OpenTicket: "Open Ticket",
                    HandleTicket: "Handle Ticket",
                    FinishedTicket: "Finished Ticket",
                    Assignees: "Assignees",
                    Close: "Close",
                    OpenStatus: "Open",
                    CloseStatus: "Close",
                    Comment: "Comment",
                    MyTickets: "My tickets",
                    action: "Action",
                    IPGroup: "IP group",
                    Reject: "Reject",
                    date: "Date",
                    reply: "Reply",
                    status: "Status",
                    title: "Title",
                    type: "Type",
                    user: "User",
                    Status: "Status",
                    Open: "Open",
                    OrgName: "Org name",
                    IP: "IP",
                    Hostname: "Hostname",
                    Asset: "Asset",
                    SystemUser: "System user",
                    Applicant: "Applicant",
                    RequestAssetPerm: "Request asset perm",
                    RequestApplicationPerm: "Request application perm",
                    Pending: "Open",
                    Approved: "Approved",
                    Rejected: "Rejected",
                    Closed: "Closed",
                    helpText: {
                        ips: "Enter the IP address group, separated by commas",
                        fuzzySearch: "Support for fuzzy search",
                        application: "Enter the application group, separated by commas"
                    },
                    ApplyRunUser: "Apply run user",
                    ApplyRunAsset: "Apply run asset",
                    ApplyRunSystemUser: "Apply run system user",
                    ApplyRunCommand: "Apply run command",
                    ApplyFromSession: "Session",
                    ApplyFromCMDFilterRule: "Command filter rule"
                },
                tree: {
                    AddAssetToNode: "Add asset to node",
                    CreateNode: "Create node",
                    DeleteNode: "Delete node",
                    MoveAssetToNode: "move asset to node",
                    RenameNode: "Rename node",
                    ShowAssetAllChildrenNode: "Show asset all children node",
                    ShowAssetOnlyCurrentNode: "Show asset only current node",
                    CheckAssetsAmount: "Check assets amount",
                    ShowNodeInfo: "Show node information",
                    TestNodeAssetConnectivity: "Test node asset connectivity",
                    UpdateNodeAssetHardwareInfo: "Update node asset hardware information"
                },
                users: {
                    MessageSubscription: "Message Subscription",
                    AuthSettings: "Auth settings",
                    UserName: "Name",
                    Account: "Account",
                    Existing: "Existing",
                    Authentication: "Account",
                    Comment: "Comment",
                    ConfirmPassword: "Confirm password",
                    DateExpired: "Date expired",
                    DateJoined: "Date joined",
                    DateLastLogin: "Date last login",
                    DatePasswordLastUpdated: "Date password last updated",
                    setWeCom: "Set wecom login",
                    setDingTalk: "Set dingtalk login",
                    setFeiShu: "Set feishu login",
                    DatePasswordUpdated: "Date password updated",
                    DescribeOfGuide: "Welcome to JumpServer. Click here for more information",
                    Email: "Email",
                    Phone: "Phone",
                    WeCom: "WeCom",
                    DingTalk: "DingTalk",
                    FeiShu: "FeiShu",
                    FingerPrint: "Fingerprint",
                    FirstLogin: "First login",
                    InviteUser: "Invite user",
                    InviteUserInOrg: "Invite user in this org",
                    Invite: "Invite",
                    Guide: "Guide",
                    OrgUser: "Org User",
                    OrgAdmin: "Org Admin",
                    OrgAuditor: "Org Auditor",
                    HelpText: {
                        MFAOfUserFirstLoginPersonalInformationImprovementPage: "Enable multi-factor authentication to make the account more secure <br/> After is enabled, you will enter the multi-factor authentication binding process on your next login <br/> You can also bind directly in (personal information -> fast modifier -> modifier multiple factor Settings)",
                        MFAOfUserFirstLoginUserGuidePage: "To protect the security of you and the company <br/> please properly keep your account, password, key and other important and sensitive information <br/> (e.g., set a complex password and enable multi-factor authentication)",
                        SSHKeyOfProfileSSHUpdatePage: "Copy your public key here",
                        OrgRoleHelpText: "Organizational roles are the user's role in the current organization"
                    },
                    IAgree: "I agree",
                    ImprovePersonalInformation: "Improve personal information",
                    IsActive: "Is active",
                    LoginConfirm: "Login confirm",
                    LoginPasswordSetting: "Login password setting",
                    MFA: "MFA",
                    MfaLevel: "MFA level",
                    Name: "Name",
                    NewPassword: "New password",
                    OldPassword: "Old password",
                    OldSSHKey: "Old SSH key",
                    Profile: "Profile",
                    ProfileSetting: "Profile setting",
                    Remove: "Remove",
                    ResetAndDownloadSSHKey: "Reset and download SSH Key",
                    ResetPublicKeyAndDownload: "Reset public key and download",
                    Role: "Role",
                    SuperRole: "Super role",
                    OrgRole: "Org role",
                    SSHKey: "SSH Key",
                    SSHKeySetting: "SSH Key setting",
                    Secure: "Secure",
                    SetMFA: "Set MFA",
                    Source: "Source",
                    TermsAndConditions: "Terms and conditions",
                    UpdateMFA: "Update MFA",
                    UpdateSSHKey: "Update SSH Key",
                    UserGroups: "User groups",
                    Username: "Username",
                    Users: "Users",
                    quickUpdate: {
                        resetMFA: "Reset MFA",
                        resetMFAWarningMsg: "This will reset the user MFA setting, user can reset it",
                        resetMFAdSuccessMsg: "Reset MFA success",
                        resetPassword: "Reset password",
                        resetPasswordSuccessMsg: "A password reset message has been sent to the user",
                        resetPasswordWarningMsg: "This will reset the user password and send a reset mail",
                        resetSSHKey: "Reset SSH key",
                        resetSSHKeySuccessMsg: "An e-mail has been sent to the user`s mailbox",
                        resetSSHKeyWarningMsg: "This will reset the user public key and send a reset mail",
                        resetWechat: "Reset Wechat",
                        resetWechatLoginWarningMsg: "This will reset the user Wechat setting, user can reset it",
                        resetWechatLoginSuccessMsg: "Reset Wechat success",
                        send: "Send",
                        unbind: "Unbind",
                        unblock: "Unblock",
                        unblockSuccessMsg: "Account has unblocked",
                        unblockUser: "Unblock login"
                    },
                    removeFromOrgWarningMsg: "Are you sure remove ",
                    tabs: {
                        assetPermissionRules: "Asset permission rules",
                        databasePermissionRules: "Database Permission rules",
                        k8sPermissionRules: "Kubernetes Permission rules",
                        grantedAssets: "Granted assets",
                        grantedK8Ss: "Granted K8Ss",
                        grantedDatabases: "Granted databases",
                        grantedRemoteApps: "Granted remote apps",
                        grantedApplications: "Granted applications",
                        ApplicationPermissionRules: "Application permission rules",
                        remoteAppPermissionRules: "Remote app permission rules"
                    },
                    needUpdatePasswordNextLogin: "Update password next login",
                    UpdatePassword: "Update password",
                    SetPublicKey: "Set public key",
                    UpdatePublicKey: "",
                    passwordExpired: "Password expired",
                    passwordWillExpiredPrefixMsg: "The password will expire in ",
                    passwordWillExpiredSuffixMsg: " days.Please change your password as soon as possible."
                },
                notifications: {
                    MessageType: "Message Type",
                    Receivers: "Receivers",
                    Subscription: "Subscription",
                    ChangeReceiver: "Change Receivers",
                    Subject: "Subject",
                    Message: "Message",
                    DeliveryTime: "Delivery time",
                    HasRead: "Has read",
                    Sender: "Sender",
                    MarkAsRead: "Mark as read",
                    NoUnreadMsg: "No unread messages",
                    SiteMessage: "Site messages",
                    SMS: "SMS"
                },
                xpack: {
                    NavHelp: "Navigation Link",
                    helpDocument: "Docs link",
                    helpSupport: "Support link",
                    helpDocumentTip: "You can change the URL of the site navigation bar help -> Docs",
                    helpSupportTip: "You can change the URL of the site navigation bar help -> Support",
                    officialWebsiteTip: "You can change the URL of the site navigation bar help -> Website",
                    Admin: "Admin",
                    Asset: "Asset",
                    Database: "Database",
                    AssetCount: "Asset count",
                    Auditor: "Auditor",
                    ChangeAuthPlan: {
                        AddAsset: "Add asset",
                        AddNode: "Add node",
                        AddSystemUser: "Add systemuser",
                        Asset: "Asset",
                        Database: "Database",
                        DatabaseId: "Database Id",
                        SystemUser: "SystemUser",
                        SystemUserId: "SystemUser Id",
                        AssetAmount: "Asset",
                        AssetAndNode: "Asset and Node",
                        ChangeAuthPlan: "Change Auth Plan",
                        AssetChangeAuthPlan: "Asset Change Auth Plan",
                        AppChangeAuthPlan: "App Change Auth Plan",
                        AssetChangeAuthPlanCreate: "Create Asset change auth plan",
                        AppChangeAuthPlanCreate: "Create App change auth plan",
                        AssetChangeAuthPlanUpdate: "Update Asset change auth plan",
                        AppChangeAuthPlanUpdate: "Update App change auth plan",
                        SymbolSet: "Special symbol set",
                        SymbolSetHelpText: "Please enter the special symbol set supported by this type of database. If there are special characters in the generated random password that are not supported by this type of database, the password change plan will fail",
                        CyclePerform: "Cycle perform",
                        DateJoined: "Date joined",
                        DateStart: "Date start",
                        DateUpdated: "Date updated",
                        Detail: "Detail",
                        Execute: "Execute",
                        ExecutionDetail: "Execution detail",
                        ExecutionList: "Execution list",
                        ExecutionTimes: "Execution times",
                        validatorMessage: {
                            EnsureThisValueIsGreaterThanOrEqualTo1: "Ensure this value is greater than or equal to 1"
                        },
                        HelpText: {
                            CrontabOfCreateUpdatePage: 'For example: every Sunday at 03:05 execute <5 3 * * 0> <br/> Using the 5-bit Linux crontab expression <minute hour day month week> (<a href="https://tool.lu/crontab/" target="_blank"> Online tool </a>) <br/> If both regularly perform and cycle perform execution are set, use regularly perform first',
                            IntervalOfCreateUpdatePage: "Unit: hour",
                            UsernameOfCreateUpdatePage: "The username of the user on the target host; If already existed, modify user password; If it doesn't exist, add the user and set the password."
                        },
                        Log: "Log",
                        ManualExecutePlan: "Manual execute plan",
                        Name: "Name",
                        NodeAmount: "Node",
                        PasswordLength: "Password length",
                        PasswordStrategy: "Password strategy",
                        RegularlyPerform: "Regularly perform",
                        Result: "Result",
                        Retry: "Retry",
                        Success: "Success",
                        TaskList: "Task list",
                        TimeDelta: "Time delta",
                        Timer: "Timer",
                        Username: "Username"
                    },
                    Cloud: {
                        ServerAccountKey: "Server Account Key",
                        IPNetworkSegment: "Ip Network Segment",
                        Aliyun: "Ali Cloud",
                        Qcloud: "Tencent Cloud",
                        QingyunPrivatecloud: "Qingyun Private Cloud",
                        HuaweiPrivatecloud: "Huawei Private Cloud",
                        GCP: "Google Cloud Platform",
                        AWS_China: "AWS(China)",
                        AWS_Int: "AWS(International)",
                        HuaweiCloud: "Huawei Cloud",
                        Azure: "Azure(China)",
                        Azure_Int: "Azure(International)",
                        HostnameStrategy: "Used to produce the asset hostname. For example, 1. Instance name (instanceDemo)；2. Instance name and Partial IP (instanceDemo-250.1)",
                        IsAlwaysUpdate: "Asset info is kept up-to-date",
                        AccountCreate: "Create account",
                        AccountList: "Account list",
                        AccountUpdate: "Update account",
                        AccountDetail: "Account detail",
                        Cloud: "Cloud center",
                        CloudCenter: "Cloud Center",
                        Provider: "Provider",
                        Validity: "Validity",
                        IsAlwaysUpdateHelpTips: "Whether the asset information, including Hostname, IP, Platform, and AdminUser, is updated synchronously each time a synchronization task is performed",
                        SyncInstanceTaskCreate: "Create sync instance task",
                        SyncInstanceTaskList: "Sync instance task list",
                        SyncInstanceTaskDetail: "Sync instance task detail",
                        SyncInstanceTaskUpdate: "Update sync instance task",
                        SyncInstanceTaskHistoryList: "Sync task history",
                        SyncInstanceTaskHistoryAssetList: "Sync instance list",
                        CloudSource: "Cloud source",
                        SaveSetting: "Save setting",
                        Name: "Name",
                        Account: "Account",
                        Node: "Node",
                        AdminUser: "Admin user",
                        PeriodicPerform: "Periodic perform",
                        Periodic: "Periodic",
                        RegularlyPerform: "Regularly perform",
                        CyclePerform: "Cycle perform",
                        DateLastSync: "Date last sync",
                        DateCreated: "Date created",
                        Region: "Region",
                        RunTaskManually: "Run task manually",
                        Comment: "Comment",
                        True: "True",
                        False: "False",
                        NewCount: "New count",
                        UnSyncCount: "Unsync count",
                        SyncedCount: "Synced count",
                        ReleasedCount: "Released count",
                        DateSync: "Date sync",
                        Status: "Status",
                        Log: "Log",
                        DeleteReleasedAssets: "Delete released assets"
                    },
                    Corporation: "Corporation",
                    Edition: "Edition",
                    Execute: "Execute",
                    Expired: "Expired",
                    GatherUser: {
                        GatherUser: "Gather User",
                        GatherUserList: "Gather user",
                        GatherUserTaskCreate: "Create gather user task",
                        GatherUserTaskList: "Gather user task list",
                        GatherUserTaskUpdate: "Update gather user task",
                        GatherUserTaskDetail: "Gather user detail",
                        GatherUserTaskExecutionList: "Gather user task execution list"
                    },
                    Import: "Import",
                    ImportLicense: "Import license",
                    ImportLicenseTip: "Please Import License",
                    InterfaceSettings: "Interface Setting",
                    License: "License",
                    LicenseDetail: "License detail",
                    SystemMonitor: "System Monitor",
                    ServiceRatio: "Service ratio",
                    LoadStatus: "Status",
                    NormalLoad: "Normal",
                    HighLoad: "High",
                    Offline: "Offline",
                    CriticalLoad: "Critical",
                    LicenseFile: "License file",
                    NoLicense: "No License",
                    Node: "Node",
                    Organization: {
                        OrganizationCreate: "Create organization",
                        OrganizationDetail: "Org detail",
                        OrganizationList: "Organizations",
                        OrganizationUpdate: "Update org",
                        OrganizationMembership: "Organization membership",
                        DeleteOrgTitle: "Please ensure that the following information in the organization has been deleted",
                        DeleteOrgMsg: "User list、User group、Asset list、Domain list、Admin user、System user、Labels、Asset permission",
                        OrgRole: "Org role",
                        CreateOrgMsg: "Please go to Organization Details to add users",
                        AddOrgMembers: "Add organization members",
                        users_amount: "Users amount",
                        groups_amount: "Groups amount",
                        assets_amount: "Assets amount",
                        admin_users_amount: "Admin users amount",
                        system_users_amount: "System users amount",
                        applications_amount: "Applications amount",
                        asset_perms_amount: "Asset perms amount",
                        app_perms_amount: "App perms amount"
                    },
                    RestoreButton: "Restore Default",
                    SubscriptionID: "Subscription ID",
                    Timer: "Timer",
                    User: "User",
                    Vault: {
                        Create: "Create",
                        Vault: "Vault"
                    },
                    consult: "Consult",
                    favicon: "Website icon",
                    faviconTip: "Tips: website icon. (suggest image size: 16px*16px)",
                    loginImage: "Image of login page",
                    loginImageTip: "Tips: This will be displayed on the enterprise user login page. (suggest image size: 492px*472px)",
                    loginTitle: "Title of login page",
                    loginTitleTip: "Tips: This will be displayed on the enterprise user login page. (eg: Welcome to the JumpServer open source fortress)",
                    logoIndex: "Logo (It contains text)",
                    logoIndexTip: "Tips: This will appear at the top left of the administration page. (suggest image size: 185px*55px)",
                    logoLogout: "Logo (It contains no text)",
                    logoLogoutTip: "Tips: This will be displayed on the enterprise user logout page. (suggest image size: 82px*82px)",
                    restoreDialogMessage: "This will restore default Settings of the interface !!!",
                    restoreDialogTitle: "Are you sure?",
                    technologyConsult: "Technology Consult",
                    RegularlyPerform: "Regularly perform",
                    CyclePerform: "Cycle perform",
                    HelpText: {
                        CrontabOfCreateUpdatePage: 'For example: every Sunday at 03:05 execute <5 3 * * 0> <br/> Using the 5-bit Linux crontab expression <minute hour day month week> (<a href="https://tool.lu/crontab/" target="_blank"> Online tool </a>) <br/> If both regularly perform and cycle perform execution are set, use regularly perform first',
                        IntervalOfCreateUpdatePage: "Unit: hour",
                        UsernameOfCreateUpdatePage: "The username of the user on the target host; If already existed, modify user password; If it doesn't exist, add the user and set the password."
                    }
                }
            }
        },
        "93cd": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-tree",
                    use: "icon-tree-usage",
                    viewBox: "0 0 128 128",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-tree"><path d="M126.713 90.023c.858.985 1.287 2.134 1.287 3.447v29.553c0 1.423-.429 2.6-1.287 3.53-.858.93-1.907 1.395-3.146 1.395H97.824c-1.145 0-2.146-.465-3.004-1.395-.858-.93-1.287-2.107-1.287-3.53V93.47c0-.875.19-1.696.572-2.462.382-.766.906-1.368 1.573-1.806a3.84 3.84 0 0 1 2.146-.657h9.725V69.007a3.84 3.84 0 0 0-.43-1.806 3.569 3.569 0 0 0-1.143-1.313 2.714 2.714 0 0 0-1.573-.492h-36.47v23.149h9.725c1.144 0 2.145.492 3.004 1.478.858.985 1.287 2.134 1.287 3.447v29.553c0 .876-.191 1.696-.573 2.463-.38.766-.905 1.368-1.573 1.806a3.84 3.84 0 0 1-2.145.656H51.915a3.84 3.84 0 0 1-2.145-.656c-.668-.438-1.216-1.04-1.645-1.806a4.96 4.96 0 0 1-.644-2.463V93.47c0-1.313.43-2.462 1.288-3.447.858-.986 1.907-1.478 3.146-1.478h9.582v-23.15h-37.9c-.953 0-1.74.356-2.359 1.068-.62.711-.93 1.56-.93 2.544v19.538h9.726c1.239 0 2.264.492 3.074 1.478.81.985 1.216 2.134 1.216 3.447v29.553c0 1.423-.405 2.6-1.216 3.53-.81.93-1.835 1.395-3.074 1.395H4.29c-.476 0-.93-.082-1.358-.246a4.1 4.1 0 0 1-1.144-.657 4.658 4.658 0 0 1-.93-1.067 5.186 5.186 0 0 1-.643-1.395 5.566 5.566 0 0 1-.215-1.56V93.47c0-.437.048-.875.143-1.313a3.95 3.95 0 0 1 .429-1.15c.19-.328.429-.656.715-.984.286-.329.572-.602.858-.821.286-.22.62-.383 1.001-.493.382-.11.763-.164 1.144-.164h9.726V61.619c0-.985.31-1.833.93-2.544.619-.712 1.358-1.068 2.216-1.068h44.335V39.62h-9.582c-1.24 0-2.288-.492-3.146-1.477a5.09 5.09 0 0 1-1.287-3.448V5.14c0-1.423.429-2.627 1.287-3.612.858-.985 1.907-1.477 3.146-1.477h25.743c.763 0 1.478.246 2.145.739a5.17 5.17 0 0 1 1.573 1.888c.382.766.573 1.587.573 2.462v29.553c0 1.313-.43 2.463-1.287 3.448-.859.985-1.86 1.477-3.004 1.477h-9.725v18.389h42.762c.954 0 1.74.355 2.36 1.067.62.711.93 1.56.93 2.545v26.925h9.582c1.239 0 2.288.492 3.146 1.478z" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        "96f0": function(e, t, n) {},
        9789: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("Dialog", e._g(e._b({
                        attrs: {
                            title: e.$t("common.MFAVerify"),
                            width: "50",
                            "show-confirm": !1,
                            "show-cancel": !1,
                            visible: e.visible,
                            "destroy-on-close": !0
                        },
                        on: {
                            "update:visible": function(t) {
                                e.visible = t
                            }
                        }
                    }, "Dialog", e.$attrs, !1), e.$listeners), [n("el-row", {
                        attrs: {
                            gutter: 20
                        }
                    }, [n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [n("div", {
                        staticStyle: {
                            "line-height": "34px",
                            "text-align": "center"
                        }
                    }, [e._v("MFA")])]), e._v(" "), n("el-col", {
                        attrs: {
                            span: 14
                        }
                    }, [n("el-input", {
                        model: {
                            value: e.MFAToken,
                            callback: function(t) {
                                e.MFAToken = t
                            },
                            expression: "MFAToken"
                        }
                    }), e._v(" "), n("span", {
                        staticClass: "help-tips help-block"
                    }, [e._v(e._s(e.$t("common.MFARequireForSecurity")))])], 1), e._v(" "), n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [n("el-button", {
                        staticStyle: {
                            "line-height": "20px"
                        },
                        attrs: {
                            size: "mini",
                            type: "primary"
                        },
                        on: {
                            click: e.verifyMFA
                        }
                    }, [e._v("\n        " + e._s(this.$t("common.Confirm")) + "\n      ")])], 1)], 1)], 1)
                },
                r = [],
                i = n("9039"),
                s = {
                    name: "MFAVerifyDialog",
                    components: {
                        Dialog: i["a"]
                    },
                    data: function() {
                        return {
                            MFAToken: "",
                            visible: !1
                        }
                    },
                    watch: {
                        visible: function(e) {
                            e || this.$emit("MFAVerifyCancel", !0)
                        }
                    },
                    mounted: function() {
                        var e = this;
                        this.$axios.get("/api/v1/authentication/otp/verify/", {
                            disableFlashErrorMsg: !0
                        }).then((function() {
                            e.$emit("MFAVerifyDone", !0)
                        })).catch((function(t) {
                            e.$log.debug("Verify otp code error: ", t), e.visible = !0
                        }))
                    },
                    methods: {
                        verifyMFA: function() {
                            var e = this;
                            if (6 !== this.MFAToken.length) return this.$message.error(this.$tc("common.MFAErrorMsg"));
                            this.$axios.post("/api/v1/authentication/otp/verify/", {
                                code: this.MFAToken
                            }).then((function(t) {
                                e.$emit("MFAVerifyDone", !0)
                            }))
                        }
                    }
                },
                o = s,
                c = n("2877"),
                l = Object(c["a"])(o, a, r, !1, null, "656ce014", null);
            t["a"] = l.exports
        },
        "9b8c": function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("Page", {
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [e._t("title")]
                            },
                            proxy: !0
                        }, {
                            key: "headingRightSide",
                            fn: function() {
                                return [e._t("headingRightSide")]
                            },
                            proxy: !0
                        }], null, !0)
                    }, [e._v(" "), e._v(" "), n("div", [e.submenu.length > 0 ? n("el-tabs", {
                        staticClass: "page-submenu",
                        attrs: {
                            slot: "submenu"
                        },
                        on: {
                            "tab-click": e.handleTabClick
                        },
                        slot: "submenu",
                        model: {
                            value: e.iActiveMenu,
                            callback: function(t) {
                                e.iActiveMenu = t
                            },
                            expression: "iActiveMenu"
                        }
                    }, [e._l(e.submenu, (function(t) {
                        return [e.checkShow(t) ? n("el-tab-pane", {
                            key: t.name,
                            attrs: {
                                "label-content": t.labelContent,
                                name: t.name,
                                disabled: t.disabled
                            }
                        }, [n("span", {
                            attrs: {
                                slot: "label"
                            },
                            slot: "label"
                        }, [t.icon ? n("i", {
                            staticClass: "fa ",
                            class: t.icon
                        }) : e._e(), e._v("\n            " + e._s(t.title) + "\n            "), e._t("badge", null, {
                            tab: t.name
                        })], 2)]) : e._e()]
                    }))], 2) : e._e(), e._v(" "), n("transition", {
                        attrs: {
                            name: "fade-transform",
                            mode: "out-in"
                        }
                    }, [e._t("default")], 2)], 1)])
                },
                r = [],
                i = n("bd86"),
                s = (n("7f7f"), n("ac6a"), n("f3e2"), n("83b2")),
                o = n("7ce2"),
                c = n.n(o),
                l = "activeTab",
                u = {
                    name: "TabPage",
                    components: {
                        Page: s["a"]
                    },
                    props: {
                        submenu: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        activeMenu: {
                            type: String,
                            required: !0
                        }
                    },
                    computed: {
                        iActiveMenu: {
                            get: function() {
                                return this.activeMenu
                            },
                            set: function(e) {
                                this.$emit("update:activeMenu", e)
                            }
                        },
                        tabIndices: function() {
                            var e = {};
                            return this.submenu.forEach((function(t, n) {
                                e[t.name] = n
                            })), e
                        }
                    },
                    mounted: function() {
                        this.iActiveMenu = this.getPropActiveTab()
                    },
                    methods: {
                        checkShow: function(e) {
                            var t = e.hidden;
                            return "function" === typeof t && (t = t()), !t
                        },
                        handleTabClick: function(e) {
                            this.$emit("tab-click", e), this.$emit("update:activeMenu", e.name), this.$cookie.set(l, e.name, 1), this.$router.currentRoute.query[l] && this.$router.push({
                                query: c()(this.$route.query, Object(i["a"])({}, l, ""))
                            })
                        },
                        getPropActiveTab: function() {
                            for (var e = "", t = [this.$route.query[l], this.$cookie.get(l), this.activeMenu], n = 0, a = t; n < a.length; n++) {
                                var r = a[n];
                                for (var i in this.tabIndices)
                                    if (r && i && r.toLowerCase() === i.toLowerCase()) return i
                            }
                            return e = this.submenu[0].name, e
                        }
                    }
                },
                d = u,
                p = (n("25c0"), n("2877")),
                m = Object(p["a"])(d, a, r, !1, null, "5eaa5873", null);
            t["a"] = m.exports
        },
        "9f53": function(e, t, n) {
            "use strict";
            var a = n("5420"),
                r = n.n(a);
            r.a
        },
        "9f65": function(e, t, n) {},
        a14e: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("2b0e");

            function r() {
                var e = localStorage.getItem("tableConfig");
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return {}
                }
            }
            var i = {
                    tableConfig: r()
                },
                s = {
                    SET_TABLE_CONFIG: function(e, t) {
                        var n = r();
                        a["default"].set(n, t.key, t.value), localStorage.setItem("tableConfig", JSON.stringify(n))
                    }
                },
                o = {};
            t["default"] = {
                namespaced: !0,
                state: i,
                mutations: s,
                actions: o
            }
        },
        a18c: function(e, t, n) {
            "use strict";
            n("ac6a"), n("6d67");
            var a = n("75fc"),
                r = n("2b0e"),
                i = n("8c4f"),
                s = n("0692"),
                o = n("84ca"),
                c = n("c1f7"),
                l = n("aa5c"),
                u = [{
                    path: "users",
                    component: function() {
                        return n.e("chunk-32b0a0ea").then(n.bind(null, "ec0e"))
                    },
                    name: "UserList",
                    meta: {
                        title: s["a"].t("route.UserList")
                    }
                }, {
                    path: "users/create",
                    component: function() {
                        return Promise.all([n.e("chunk-commons"), n.e("chunk-4367c372"), n.e("chunk-2d23014d")]).then(n.bind(null, "eb82"))
                    },
                    name: "UserCreate",
                    hidden: !0,
                    meta: {
                        title: s["a"].t("route.UserCreate"),
                        activeMenu: "/users/users",
                        action: "create"
                    }
                }, {
                    path: "users/:id/update",
                    component: function() {
                        return Promise.all([n.e("chunk-commons"), n.e("chunk-4367c372"), n.e("chunk-2d23014d")]).then(n.bind(null, "eb82"))
                    },
                    name: "UserUpdate",
                    hidden: !0,
                    meta: {
                        title: s["a"].t("route.UserUpdate"),
                        activeMenu: "/users/users",
                        action: "update"
                    }
                }, {
                    path: "users/:id",
                    component: function() {
                        return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-fdce79d0")]).then(n.bind(null, "eea5"))
                    },
                    name: "UserDetail",
                    hidden: !0,
                    meta: {
                        title: s["a"].t("route.UserDetail"),
                        activeMenu: "/users/users"
                    }
                }, {
                    path: "groups",
                    component: function() {
                        return n.e("chunk-2d0dee59").then(n.bind(null, "8836"))
                    },
                    name: "UserGroupList",
                    meta: {
                        title: s["a"].t("route.UserGroupList")
                    }
                }, {
                    path: "groups/:id/update",
                    component: function() {
                        return n.e("chunk-2d0b9f58").then(n.bind(null, "34bc"))
                    },
                    name: "UserGroupUpdate",
                    hidden: !0,
                    meta: {
                        title: s["a"].t("route.UserGroupUpdate"),
                        activeMenu: "/users/groups"
                    }
                }, {
                    path: "groups/create",
                    component: function() {
                        return n.e("chunk-2d0b9f58").then(n.bind(null, "34bc"))
                    },
                    name: "UserGroupCreate",
                    hidden: !0,
                    meta: {
                        title: s["a"].t("route.UserGroupCreate"),
                        activeMenu: "/users/groups"
                    }
                }, {
                    path: "groups/:id",
                    component: function() {
                        return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-46ad5784")]).then(n.bind(null, "d3b8"))
                    },
                    name: "UserGroupDetail",
                    hidden: !0,
                    meta: {
                        title: s["a"].t("route.UserGroupDetail"),
                        activeMenu: "/users/groups"
                    }
                }, {
                    path: "user-login-acl",
                    component: l["a"],
                    redirect: "",
                    children: [{
                        path: "create",
                        name: "UserLoginACLCreate",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-4367c372"), n.e("chunk-9f3e7e6c")]).then(n.bind(null, "0765"))
                        },
                        meta: {
                            title: s["a"].t("route.UserLoginACLCreate"),
                            activeMenu: "/users/users"
                        },
                        hidden: !0
                    }, {
                        path: ":id",
                        name: "UserLoginACLDetail",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-2d0df446")]).then(n.bind(null, "88d4"))
                        },
                        meta: {
                            title: s["a"].t("route.UserLoginACL"),
                            activeMenu: "/users/users"
                        },
                        hidden: !0
                    }, {
                        path: ":id/update",
                        name: "UserLoginACLUpdate",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-4367c372"), n.e("chunk-9f3e7e6c")]).then(n.bind(null, "0765"))
                        },
                        meta: {
                            title: s["a"].t("route.UserLoginACLUpdate"),
                            activeMenu: "/users/users"
                        },
                        hidden: !0
                    }]
                }],
                d = [{
                    path: "assets",
                    component: l["a"],
                    redirect: "",
                    meta: {
                        title: s["a"].t("route.AssetList")
                    },
                    children: [{
                        path: "",
                        name: "AssetList",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-01a48279")]).then(n.bind(null, "8f4a"))
                        },
                        meta: {
                            title: s["a"].t("route.AssetList"),
                            activeMenu: "/assets/assets"
                        }
                    }, {
                        path: "create",
                        name: "AssetCreate",
                        component: function() {
                            return n.e("chunk-ad7889d6").then(n.bind(null, "ad49"))
                        },
                        meta: {
                            title: s["a"].t("route.AssetCreate"),
                            activeMenu: "/assets/assets"
                        },
                        hidden: !0
                    }, {
                        path: ":id",
                        name: "AssetDetail",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-6bd7d0be")]).then(n.bind(null, "2dc2"))
                        },
                        meta: {
                            title: s["a"].t("route.AssetDetail"),
                            activeMenu: "/assets/assets"
                        },
                        hidden: !0
                    }, {
                        path: ":id/update",
                        name: "AssetUpdate",
                        component: function() {
                            return n.e("chunk-ad7889d6").then(n.bind(null, "ad49"))
                        },
                        meta: {
                            title: s["a"].t("route.AssetUpdate"),
                            activeMenu: "/assets/assets"
                        },
                        hidden: !0
                    }, {
                        path: "detail/:id/update",
                        name: "AssetMoreInformationEdit",
                        component: function() {
                            return n.e("chunk-2d2257da").then(n.bind(null, "e52f"))
                        },
                        meta: {
                            title: s["a"].t("common.UpdateAssetDetail"),
                            activeMenu: "/assets/assets"
                        },
                        hidden: !0
                    }]
                }, {
                    path: "domains",
                    component: l["a"],
                    redirect: "",
                    meta: {},
                    children: [{
                        path: "",
                        name: "DomainList",
                        component: function() {
                            return n.e("chunk-2d20fd45").then(n.bind(null, "b4fc"))
                        },
                        meta: {
                            title: s["a"].t("route.DomainList"),
                            activeMenu: "/assets/domains"
                        }
                    }, {
                        path: "create",
                        name: "DomainCreate",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-0050d235")]).then(n.bind(null, "9602"))
                        },
                        meta: {
                            title: s["a"].t("route.DomainCreate"),
                            activeMenu: "/assets/domains"
                        },
                        hidden: !0
                    }, {
                        path: ":id/update",
                        name: "DomainUpdate",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-0050d235")]).then(n.bind(null, "9602"))
                        },
                        meta: {
                            title: s["a"].t("route.DomainUpdate"),
                            activeMenu: "/assets/domains"
                        },
                        hidden: !0
                    }, {
                        path: ":id",
                        name: "DomainDetail",
                        component: function() {
                            return n.e("chunk-2d230cb3").then(n.bind(null, "ee96"))
                        },
                        meta: {
                            title: s["a"].t("route.DomainDetail"),
                            activeMenu: "/assets/domains"
                        },
                        hidden: !0
                    }]
                }, {
                    path: "gateways",
                    component: l["a"],
                    redirect: "create",
                    hidden: !0,
                    children: [{
                        path: "create",
                        name: "GatewayCreate",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-4367c372"), n.e("chunk-23d0ab91")]).then(n.bind(null, "fcc2"))
                        },
                        meta: {
                            title: s["a"].t("route.GatewayCreate"),
                            activeMenu: "/assets/domains"
                        },
                        hidden: !0
                    }, {
                        path: ":id/update",
                        name: "GatewayUpdate",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-4367c372"), n.e("chunk-23d0ab91")]).then(n.bind(null, "fcc2"))
                        },
                        meta: {
                            title: s["a"].t("route.GatewayUpdate"),
                            activeMenu: "/assets/domains"
                        },
                        hidden: !0
                    }]
                }, {
                    path: "system-users",
                    component: l["a"],
                    redirect: "",
                    meta: {},
                    children: [{
                        path: "",
                        name: "SystemUserList",
                        component: function() {
                            return n.e("chunk-2d22d5a9").then(n.bind(null, "f6ad"))
                        },
                        meta: {
                            title: s["a"].t("route.SystemUserList"),
                            activeMenu: "/assets/system-users"
                        }
                    }, {
                        path: "create",
                        name: "SystemUserCreate",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-4367c372"), n.e("chunk-2cec8aef")]).then(n.bind(null, "778b"))
                        },
                        meta: {
                            title: s["a"].t("route.SystemUserCreate"),
                            activeMenu: "/assets/system-users"
                        },
                        hidden: !0
                    }, {
                        path: ":id/update",
                        name: "SystemUserUpdate",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-4367c372"), n.e("chunk-2cec8aef")]).then(n.bind(null, "778b"))
                        },
                        meta: {
                            title: s["a"].t("route.SystemUserUpdate"),
                            activeMenu: "/assets/system-users"
                        },
                        hidden: !0
                    }, {
                        path: ":id",
                        name: "SystemUserDetail",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-6748a3fc")]).then(n.bind(null, "bdc3"))
                        },
                        meta: {
                            title: s["a"].t("route.SystemUserDetail"),
                            activeMenu: "/assets/system-users"
                        },
                        hidden: !0
                    }]
                }, {
                    path: "cmd-filters",
                    component: l["a"],
                    redirect: "",
                    meta: {},
                    children: [{
                        path: "",
                        name: "CommandFilterList",
                        component: function() {
                            return n.e("chunk-2d0f0b92").then(n.bind(null, "9e1a"))
                        },
                        meta: {
                            title: s["a"].t("route.CommandFilterList"),
                            activeMenu: "/assets/cmd-filters"
                        }
                    }, {
                        path: ":id/update",
                        component: function() {
                            return n.e("chunk-2d0e9acb").then(n.bind(null, "8f18"))
                        },
                        name: "CommandFilterUpdate",
                        meta: {
                            title: s["a"].t("route.CommandFilterUpdate"),
                            activeMenu: "/assets/cmd-filters"
                        },
                        hidden: !0
                    }, {
                        path: "create",
                        component: function() {
                            return n.e("chunk-2d0e9acb").then(n.bind(null, "8f18"))
                        },
                        name: "CommandFilterCreate",
                        meta: {
                            title: s["a"].t("route.CommandFilterCreate"),
                            activeMenu: "/assets/cmd-filters"
                        },
                        hidden: !0
                    }, {
                        path: ":id",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-2d0d03cd")]).then(n.bind(null, "66b9"))
                        },
                        name: "CommandFilterDetail",
                        meta: {
                            title: s["a"].t("route.CommandFilterDetail"),
                            activeMenu: "/assets/cmd-filters"
                        },
                        hidden: !0
                    }]
                }, {
                    path: "command-filter-rules",
                    component: l["a"],
                    hidden: !0,
                    children: [{
                        path: "create",
                        component: function() {
                            return n.e("chunk-2d22d9e6").then(n.bind(null, "f7ed"))
                        },
                        name: "CommandFilterRulesCreate",
                        meta: {
                            title: s["a"].t("route.CommandFilterRulesCreate"),
                            activeMenu: "/assets/cmd-filters"
                        },
                        hidden: !0
                    }, {
                        path: ":id/update",
                        component: function() {
                            return n.e("chunk-2d22d9e6").then(n.bind(null, "f7ed"))
                        },
                        name: "CommandFilterRulesUpdate",
                        meta: {
                            title: s["a"].t("route.CommandFilterRulesUpdate"),
                            activeMenu: "/assets/cmd-filters"
                        },
                        hidden: !0
                    }]
                }, {
                    path: "platforms",
                    component: l["a"],
                    meta: {
                        permissions: [o["a"].PERM_SUPER]
                    },
                    redirect: "",
                    children: [{
                        path: "",
                        name: "PlatformList",
                        component: function() {
                            return n.e("chunk-2d224e77").then(n.bind(null, "e1b7"))
                        },
                        meta: {
                            title: s["a"].t("route.PlatformList"),
                            activeMenu: "/assets/platforms"
                        }
                    }, {
                        path: "create",
                        component: function() {
                            return n.e("chunk-2d238053").then(n.bind(null, "fe31"))
                        },
                        name: "PlatformCreate",
                        meta: {
                            title: s["a"].t("route.PlatformCreate"),
                            activeMenu: "/assets/platforms"
                        },
                        hidden: !0
                    }, {
                        path: ":id/update",
                        component: function() {
                            return n.e("chunk-2d238053").then(n.bind(null, "fe31"))
                        },
                        name: "PlatformUpdate",
                        meta: {
                            title: s["a"].t("route.PlatformUpdate"),
                            activeMenu: "/assets/platforms",
                            permissions: [o["a"].PERM_SUPER]
                        },
                        hidden: !0
                    }, {
                        path: ":id",
                        component: function() {
                            return n.e("chunk-2d0dd46c").then(n.bind(null, "8163"))
                        },
                        name: "PlatformDetail",
                        meta: {
                            title: s["a"].t("route.PlatformDetail"),
                            activeMenu: "/assets/platforms"
                        },
                        hidden: !0
                    }]
                }, {
                    path: "labels",
                    component: l["a"],
                    redirect: "",
                    meta: {},
                    children: [{
                        path: "",
                        name: "LabelList",
                        component: function() {
                            return n.e("chunk-2d0c1aea").then(n.bind(null, "46a3"))
                        },
                        meta: {
                            title: s["a"].t("route.LabelList"),
                            activeMenu: "/assets/labels"
                        }
                    }, {
                        path: "create",
                        name: "LabelCreate",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-4ac58c1f")]).then(n.bind(null, "12d8"))
                        },
                        meta: {
                            title: s["a"].t("route.LabelCreate"),
                            activeMenu: "/assets/labels"
                        },
                        hidden: !0
                    }, {
                        path: ":id/update",
                        name: "LabelUpdate",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-4ac58c1f")]).then(n.bind(null, "12d8"))
                        },
                        meta: {
                            title: s["a"].t("route.LabelUpdate"),
                            activeMenu: "/assets/labels"
                        },
                        hidden: !0
                    }]
                }],
                p = [{
                    path: "remote-apps",
                    redirect: "",
                    component: l["a"],
                    meta: {
                        title: s["a"].t("route.RemoteApp"),
                        licenseRequired: !0
                    },
                    children: [{
                        path: "",
                        name: "RemoteAppList",
                        meta: {
                            title: s["a"].t("route.RemoteApp"),
                            activeMenu: "/applications/remote-apps"
                        },
                        component: function() {
                            return n.e("chunk-5142934e").then(n.bind(null, "397a"))
                        }
                    }, {
                        path: "create",
                        name: "RemoteAppCreate",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-4367c372"), n.e("chunk-5704a61c")]).then(n.bind(null, "bc95"))
                        },
                        meta: {
                            title: s["a"].t("route.RemoteApp"),
                            activeMenu: "/applications/remote-apps",
                            action: "create"
                        },
                        hidden: !0
                    }, {
                        path: ":id/update",
                        name: "RemoteAppUpdate",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-4367c372"), n.e("chunk-5704a61c")]).then(n.bind(null, "bc95"))
                        },
                        meta: {
                            title: s["a"].t("route.RemoteAppUpdate"),
                            activeMenu: "/applications/remote-apps",
                            action: "update"
                        },
                        hidden: !0
                    }, {
                        path: ":id",
                        name: "RemoteAppDetail",
                        component: function() {
                            return n.e("chunk-2d0b3a1e").then(n.bind(null, "28ce"))
                        },
                        meta: {
                            title: s["a"].t("route.RemoteAppDetail"),
                            activeMenu: "/applications/remote-apps"
                        },
                        hidden: !0
                    }]
                }, {
                    path: "databases",
                    component: l["a"],
                    redirect: "",
                    meta: {
                        title: s["a"].t("route.DatabaseApp")
                    },
                    children: [{
                        path: "",
                        name: "DatabaseAppList",
                        component: function() {
                            return n.e("chunk-2d0cbe95").then(n.bind(null, "4c4d"))
                        },
                        meta: {
                            title: s["a"].t("route.DatabaseApp")
                        }
                    }, {
                        path: "create",
                        name: "DatabaseAppCreate",
                        component: function() {
                            return n.e("chunk-2d0a4648").then(n.bind(null, "05f3"))
                        },
                        meta: {
                            title: s["a"].t("route.DatabaseAppCreate"),
                            activeMenu: "/applications/databases",
                            action: "create"
                        },
                        hidden: !0
                    }, {
                        path: ":id/update",
                        name: "DatabaseAppUpdate",
                        component: function() {
                            return n.e("chunk-2d0a4648").then(n.bind(null, "05f3"))
                        },
                        meta: {
                            title: s["a"].t("route.DatabaseAppUpdate"),
                            activeMenu: "/applications/databases",
                            action: "update"
                        },
                        hidden: !0
                    }, {
                        path: ":id",
                        name: "DatabaseAppDetail",
                        component: function() {
                            return n.e("chunk-2d0d9fa5").then(n.bind(null, "6a48"))
                        },
                        meta: {
                            title: s["a"].t("route.DatabaseAppDetail"),
                            activeMenu: "/applications/databases"
                        },
                        hidden: !0
                    }]
                }, {
                    path: "kubernetes",
                    component: l["a"],
                    meta: {
                        title: s["a"].t("route.KubernetesApp")
                    },
                    children: [{
                        path: "",
                        name: "KubernetesAppList",
                        component: function() {
                            return n.e("chunk-2d20feec").then(n.bind(null, "b679"))
                        },
                        meta: {
                            title: s["a"].t("route.KubernetesApp")
                        }
                    }, {
                        path: "create",
                        name: "KubernetesAppCreate",
                        component: function() {
                            return n.e("chunk-2d0cef17").then(n.bind(null, "6238"))
                        },
                        meta: {
                            title: s["a"].t("route.KubernetesAppCreate"),
                            activeMenu: "/applications/kubernetes",
                            action: "create"
                        },
                        hidden: !0
                    }, {
                        path: ":id/update",
                        name: "KubernetesAppUpdate",
                        component: function() {
                            return n.e("chunk-2d0cef17").then(n.bind(null, "6238"))
                        },
                        meta: {
                            title: s["a"].t("route.KubernetesAppUpdate"),
                            activeMenu: "/applications/kubernetes",
                            action: "update"
                        },
                        hidden: !0
                    }, {
                        path: ":id",
                        name: "KubernetesAppDetail",
                        component: function() {
                            return n.e("chunk-2d0c0234").then(n.bind(null, "4101"))
                        },
                        meta: {
                            title: s["a"].t("route.KubernetesAppDetail"),
                            activeMenu: "/applications/kubernetes"
                        },
                        hidden: !0
                    }]
                }],
                m = [{
                    path: "asset-permissions",
                    name: "AssetPermissionList",
                    component: function() {
                        return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-69b534e8")]).then(n.bind(null, "680d"))
                    },
                    meta: {
                        title: s["a"].t("route.AssetPermission")
                    }
                }, {
                    path: "asset-permissions/create",
                    component: function() {
                        return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-cf574ee2")]).then(n.bind(null, "2792"))
                    },
                    name: "AssetPermissionCreate",
                    hidden: !0,
                    meta: {
                        title: s["a"].t("route.AssetPermissionCreate"),
                        activeMenu: "/perms/asset-permissions",
                        action: "create"
                    }
                }, {
                    path: "asset-permission/:id/update",
                    component: function() {
                        return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-cf574ee2")]).then(n.bind(null, "2792"))
                    },
                    name: "AssetPermissionUpdate",
                    hidden: !0,
                    meta: {
                        title: s["a"].t("route.AssetPermissionUpdate"),
                        activeMenu: "/perms/asset-permissions",
                        action: "update"
                    }
                }, {
                    path: "asset-permissions/:id",
                    component: function() {
                        return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-cb8c48b0")]).then(n.bind(null, "4b97"))
                    },
                    name: "AssetPermissionDetail",
                    hidden: !0,
                    meta: {
                        title: s["a"].t("route.AssetPermissionDetail"),
                        activeMenu: "/perms/asset-permissions"
                    }
                }],
                h = [{
                    path: "app-permissions",
                    component: l["a"],
                    meta: {
                        title: s["a"].t("route.ApplicationPermission")
                    },
                    redirect: "",
                    children: [{
                        path: "",
                        name: "ApplicationPermissionList",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-709666e5")]).then(n.bind(null, "ac7c"))
                        },
                        meta: {
                            title: s["a"].t("route.ApplicationPermission"),
                            activeMenu: "/perms/app-permissions"
                        }
                    }, {
                        path: "create",
                        component: function() {
                            return n.e("chunk-2d228961").then(n.bind(null, "da8f"))
                        },
                        name: "ApplicationPermissionCreate",
                        hidden: !0,
                        meta: {
                            title: s["a"].t("route.ApplicationPermissionCreate"),
                            activeMenu: "/perms/app-permissions",
                            action: "create"
                        }
                    }, {
                        path: ":id",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-2d0aa1c9")]).then(n.bind(null, "102f"))
                        },
                        name: "ApplicationPermissionDetail",
                        hidden: !0,
                        meta: {
                            title: s["a"].t("route.ApplicationPermissionDetail"),
                            activeMenu: "/perms/app-permissions"
                        }
                    }, {
                        path: ":id/update",
                        component: function() {
                            return n.e("chunk-2d228961").then(n.bind(null, "da8f"))
                        },
                        name: "ApplicationPermissionUpdate",
                        hidden: !0,
                        meta: {
                            title: s["a"].t("route.ApplicationPermissionUpdate"),
                            activeMenu: "/perms/app-permissions",
                            action: "update"
                        }
                    }]
                }],
                f = [].concat(m, h),
                g = (n("78ce"), n("cf45")),
                b = [{
                    path: "sessions",
                    component: l["a"],
                    redirect: "",
                    meta: {
                        title: s["a"].t("route.Sessions"),
                        permissions: [o["a"].PERM_AUDIT]
                    },
                    children: [{
                        path: "",
                        name: "SessionList",
                        component: function() {
                            return n.e("chunk-d446b8a4").then(n.bind(null, "98e3"))
                        },
                        meta: {
                            title: s["a"].t("route.Sessions"),
                            permissions: [o["a"].PERM_AUDIT]
                        }
                    }, {
                        path: ":id",
                        name: "SessionDetail",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-58e2a36e")]).then(n.bind(null, "b662"))
                        },
                        meta: {
                            title: s["a"].t("route.SessionDetail"),
                            activeMenu: "/terminal/sessions"
                        },
                        hidden: !0
                    }]
                }, {
                    path: "commands",
                    name: "CommandList",
                    component: function() {
                        return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-50f70cca")]).then(n.bind(null, "d87e"))
                    },
                    meta: {
                        title: s["a"].t("route.Commands"),
                        permissions: [o["a"].PERM_AUDIT]
                    }
                }, {
                    path: "".concat(g["a"], "/luna/?_=").concat(Date.now()),
                    name: "WebTerminal",
                    meta: {
                        title: s["a"].t("route.WebTerminal")
                    }
                }, {
                    path: "".concat(g["a"], "/koko/elfinder/sftp/?"),
                    name: "FileManager",
                    meta: {
                        title: s["a"].t("route.FileManager")
                    }
                }, {
                    path: "terminal",
                    component: l["a"],
                    redirect: "",
                    meta: {
                        title: s["a"].t("route.Terminal"),
                        permissions: [o["a"].PERM_SUPER]
                    },
                    children: [{
                        path: "",
                        name: "TerminalList",
                        component: function() {
                            return n.e("chunk-1cb6469b").then(n.bind(null, "f9a0"))
                        },
                        meta: {
                            title: s["a"].t("route.Terminal")
                        }
                    }, {
                        path: ":id",
                        name: "TerminalDetail",
                        component: function() {
                            return n.e("chunk-2d0a36a9").then(n.bind(null, "01a3"))
                        },
                        meta: {
                            title: s["a"].t("route.Terminal"),
                            activeMenu: "/terminal/terminal"
                        },
                        hidden: !0
                    }, {
                        path: ":id/update",
                        name: "TerminalUpdate",
                        component: function() {
                            return n.e("chunk-532318a6").then(n.bind(null, "3f50"))
                        },
                        meta: {
                            title: s["a"].t("route.Terminal"),
                            activeMenu: "/terminal/terminal"
                        },
                        hidden: !0
                    }]
                }, {
                    path: "storages",
                    component: l["a"],
                    meta: {
                        activeMenu: "/terminal/terminal",
                        permissions: [o["a"].PERM_SUPER]
                    },
                    redirect: "",
                    hidden: !0,
                    children: [{
                        path: "",
                        name: "Storage",
                        component: function() {
                            return n.e("chunk-e929c682").then(n.bind(null, "19a5"))
                        },
                        meta: {
                            activeMenu: "/terminal/terminal"
                        }
                    }, {
                        path: "replay-storage/create",
                        name: "CreateReplayStorage",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-4367c372"), n.e("chunk-5df45480")]).then(n.bind(null, "acd1"))
                        },
                        meta: {
                            title: s["a"].t("route.CreateReplayStorage"),
                            activeMenu: "/terminal/terminal"
                        }
                    }, {
                        path: "replay-storage/:id/update",
                        name: "ReplayStorageUpdate",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-4367c372"), n.e("chunk-5df45480")]).then(n.bind(null, "acd1"))
                        },
                        meta: {
                            title: s["a"].t("route.ReplayStorageUpdate"),
                            activeMenu: "/terminal/terminal"
                        }
                    }, {
                        path: "command-storage/create",
                        name: "CreateCommandStorage",
                        component: function() {
                            return n.e("chunk-2d0d38b8").then(n.bind(null, "5ce9"))
                        },
                        meta: {
                            title: s["a"].t("route.CreateCommandStorage"),
                            activeMenu: "/terminal/terminal"
                        }
                    }, {
                        path: "command-storage/:id/update",
                        name: "CommandStorageUpdate",
                        component: function() {
                            return n.e("chunk-2d0d38b8").then(n.bind(null, "5ce9"))
                        },
                        meta: {
                            title: s["a"].t("route.CommandStorageUpdate"),
                            activeMenu: "/terminal/terminal"
                        }
                    }]
                }],
                v = [{
                    path: "tasks",
                    name: "TaskList",
                    component: function() {
                        return n.e("chunk-94f5ce74").then(n.bind(null, "247a"))
                    },
                    meta: {
                        title: s["a"].t("route.TaskList")
                    }
                }, {
                    path: "tasks/:id",
                    component: function() {
                        return Promise.all([n.e("chunk-26aed086"), n.e("chunk-13a25f72")]).then(n.bind(null, "bbcf"))
                    },
                    name: "TaskDetail",
                    hidden: !0,
                    meta: {
                        title: s["a"].t("route.TaskDetail"),
                        activeMenu: "/ops/tasks"
                    }
                }, {
                    path: "adhoc/:id",
                    component: function() {
                        return n.e("chunk-badfa18a").then(n.bind(null, "1b87"))
                    },
                    name: "AdhocDetail",
                    hidden: !0,
                    meta: {
                        title: s["a"].t("route.TaskDetail"),
                        activeMenu: "/ops/tasks"
                    }
                }, {
                    path: "executions/:id",
                    component: function() {
                        return Promise.all([n.e("chunk-26aed086"), n.e("chunk-25d2ecf3")]).then(n.bind(null, "a22e"))
                    },
                    name: "HistoryExecutionDetail",
                    hidden: !0,
                    meta: {
                        title: s["a"].t("route.TaskDetail"),
                        activeMenu: "/ops/tasks"
                    }
                }, {
                    path: "command-executions/create",
                    name: "BatchCommand",
                    component: function() {
                        return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-26aed086"), n.e("chunk-0f2968e6"), n.e("chunk-7c61d6ba")]).then(n.bind(null, "2035"))
                    },
                    meta: {
                        title: s["a"].t("route.BatchCommand"),
                        hidden: function(e) {
                            var t = e.settings;
                            return !t.SECURITY_COMMAND_EXECUTION
                        }
                    }
                }, {
                    path: "".concat(g["a"], "/core/flower/?_=").concat(Date.now()),
                    name: "TaskMonitor",
                    meta: {
                        title: s["a"].t("route.TaskMonitor"),
                        permissions: [o["a"].PERM_SUPER]
                    }
                }],
                y = [{
                    path: "tickets",
                    component: l["a"],
                    meta: {
                        permissions: [o["a"].PERM_AUDIT]
                    },
                    hidden: !0,
                    redirect: "",
                    children: [{
                        path: "",
                        name: "TicketList",
                        component: function() {
                            return n.e("chunk-600ae112").then(n.bind(null, "0179"))
                        },
                        meta: {
                            title: s["a"].t("route.Tickets"),
                            icon: "check-square-o",
                            activeMenu: "/tickets/tickets",
                            permissions: [o["a"].PERM_AUDIT]
                        },
                        hidden: !0
                    }, {
                        path: "request-asset-perm/create",
                        name: "RequestAssetPermTicketCreateUpdate",
                        component: function() {
                            return n.e("chunk-6d7301ed").then(n.bind(null, "3cae"))
                        },
                        meta: {
                            title: s["a"].t("route.TicketCreate"),
                            activeMenu: "/tickets/tickets",
                            permissions: [o["a"].PERM_AUDIT]
                        },
                        hidden: !0
                    }, {
                        path: "request-asset-perm/:id",
                        name: "AssetsTicketDetail",
                        component: function() {
                            return Promise.all([n.e("chunk-2c57e8d8"), n.e("chunk-07127d3c")]).then(n.bind(null, "685f"))
                        },
                        meta: {
                            title: s["a"].t("route.TicketDetail"),
                            activeMenu: "/tickets/tickets",
                            permissions: [o["a"].PERM_AUDIT]
                        },
                        hidden: !0
                    }, {
                        path: "login-asset-confirm/:id",
                        name: "LoginAssetTicketDetail",
                        component: function() {
                            return Promise.all([n.e("chunk-2c57e8d8"), n.e("chunk-2d0e941b")]).then(n.bind(null, "8d81"))
                        },
                        meta: {
                            title: s["a"].t("route.TicketDetail"),
                            activeMenu: "/tickets/tickets",
                            permissions: [o["a"].PERM_AUDIT]
                        },
                        hidden: !0
                    }, {
                        path: "request-application-perm/create",
                        name: "RequestApplicationPermTicketCreateUpdate",
                        component: function() {
                            return n.e("chunk-b0afa8e2").then(n.bind(null, "7e21"))
                        },
                        meta: {
                            title: s["a"].t("route.TicketCreate"),
                            activeMenu: "/tickets/tickets",
                            permissions: [o["a"].PERM_AUDIT]
                        },
                        hidden: !0
                    }, {
                        path: "request-application-perm/:id",
                        name: "AppsTicketDetail",
                        component: function() {
                            return Promise.all([n.e("chunk-2c57e8d8"), n.e("chunk-467cf0e0")]).then(n.bind(null, "33f7"))
                        },
                        meta: {
                            title: s["a"].t("route.TicketDetail"),
                            activeMenu: "/tickets/tickets",
                            permissions: [o["a"].PERM_AUDIT]
                        },
                        hidden: !0
                    }, {
                        path: "command-confirm/:id",
                        name: "CommandConfirmDetail",
                        component: function() {
                            return Promise.all([n.e("chunk-2c57e8d8"), n.e("chunk-2d22c44a")]).then(n.bind(null, "f307"))
                        },
                        meta: {
                            title: s["a"].t("route.CommandConfirm"),
                            activeMenu: "/tickets/tickets",
                            permissions: [o["a"].PERM_AUDIT]
                        },
                        hidden: !0
                    }, {
                        path: ":id",
                        name: "TicketDetail",
                        component: function() {
                            return Promise.all([n.e("chunk-2c57e8d8"), n.e("chunk-2d21ab1d")]).then(n.bind(null, "bd38"))
                        },
                        meta: {
                            title: s["a"].t("route.TicketDetail"),
                            activeMenu: "/tickets/tickets",
                            permissions: [o["a"].PERM_AUDIT]
                        },
                        hidden: !0
                    }]
                }, {
                    path: "flows",
                    name: "TicketFlowList",
                    component: l["a"],
                    redirect: "",
                    meta: {
                        title: s["a"].t("route.TicketFlow"),
                        icon: "check-square-o",
                        activeMenu: "/tickets/tickets"
                    },
                    hidden: !0,
                    children: [{
                        path: "create",
                        name: "TicketFlowCreate",
                        component: function() {
                            return n.e("chunk-539d7cd7").then(n.bind(null, "4e46"))
                        },
                        meta: {
                            title: s["a"].t("route.TicketFlowCreate")
                        },
                        hidden: !0
                    }, {
                        path: ":id/update",
                        name: "TicketFlowUpdate",
                        component: function() {
                            return n.e("chunk-539d7cd7").then(n.bind(null, "4e46"))
                        },
                        meta: {
                            title: s["a"].t("route.TicketFlowUpdate")
                        },
                        hidden: !0
                    }]
                }, {
                    path: "tickets/flow/:id",
                    name: "FlowDetail",
                    component: function() {
                        return n.e("chunk-6281d012").then(n.bind(null, "e5df"))
                    },
                    meta: {
                        title: s["a"].t("route.TicketFlow"),
                        activeMenu: "/tickets/tickets"
                    },
                    hidden: !0
                }],
                w = [{
                    path: "login-log",
                    name: "LoginLog",
                    component: function() {
                        return n.e("chunk-2d237181").then(n.bind(null, "fa3c"))
                    },
                    meta: {
                        title: s["a"].t("route.LoginLog"),
                        permissions: [o["a"].PERM_AUDIT]
                    }
                }, {
                    path: "ftp-log",
                    name: "FtpLog",
                    component: function() {
                        return n.e("chunk-2d0f0de1").then(n.bind(null, "9dcc"))
                    },
                    meta: {
                        title: s["a"].t("route.FtpLog"),
                        permissions: [o["a"].PERM_AUDIT]
                    }
                }, {
                    path: "operate-log",
                    name: "OperateLog",
                    component: function() {
                        return n.e("chunk-2d20e7ea").then(n.bind(null, "b039"))
                    },
                    meta: {
                        title: s["a"].t("route.OperateLog"),
                        permissions: [o["a"].PERM_AUDIT]
                    }
                }, {
                    path: "password-change-log",
                    name: "PasswordChangeLog",
                    component: function() {
                        return n.e("chunk-2d21d824").then(n.bind(null, "d233"))
                    },
                    meta: {
                        title: s["a"].t("route.PasswordChangeLog"),
                        permissions: [o["a"].PERM_AUDIT]
                    }
                }, {
                    path: "command-execution-log",
                    name: "BatchCommandLog",
                    component: function() {
                        return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-7728e1cd")]).then(n.bind(null, "c4b4"))
                    },
                    meta: {
                        title: s["a"].t("route.BatchCommandLog"),
                        permissions: [o["a"].PERM_AUDIT]
                    }
                }],
                A = [{
                    path: "/users/profile",
                    component: c["a"],
                    hidden: !0,
                    children: [{
                        path: "",
                        name: "UserProfile",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-4367c372"), n.e("chunk-23360956")]).then(n.bind(null, "4740"))
                        },
                        meta: {
                            title: s["a"].t("route.UserProfile"),
                            icon: "user",
                            activeMenu: "/users/profile"
                        }
                    }]
                }, {
                    path: "/users/first-login",
                    component: c["a"],
                    meta: {
                        title: s["a"].t("route.UserFirstLogin"),
                        icon: "user"
                    },
                    children: [{
                        path: "personal-information-improvement/",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-3aa8be63")]).then(n.bind(null, "9981"))
                        },
                        name: "PersonalInformationImprovement",
                        meta: {
                            title: s["a"].t("route.PersonalInformationImprovement")
                        }
                    }, {
                        path: "guide/",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-630d9680")]).then(n.bind(null, "37d6"))
                        },
                        name: "UserGuide",
                        meta: {
                            title: s["a"].t("route.UserGuide")
                        }
                    }],
                    hidden: !0
                }, {
                    path: "/ops/celery/task/:id/log/",
                    component: function() {
                        return Promise.all([n.e("chunk-26aed086"), n.e("chunk-096fe3eb")]).then(n.bind(null, "c205"))
                    },
                    name: "CeleryTaskLog",
                    hidden: !0,
                    meta: {
                        title: s["a"].t("route.CeleryTaskLog"),
                        roles: ["SuperAdmin", "Admin", "Auditor", "User"]
                    }
                }, {
                    path: "/ops/task/task/:id/log/",
                    component: function() {
                        return Promise.all([n.e("chunk-26aed086"), n.e("chunk-096fe3eb")]).then(n.bind(null, "c205"))
                    },
                    name: "TaskLog",
                    hidden: !0,
                    meta: {
                        title: s["a"].t("route.CeleryTaskLog"),
                        roles: ["SuperAdmin", "Admin", "Auditor", "User"]
                    }
                }],
                S = [{
                    path: "asset-acl",
                    component: l["a"],
                    redirect: "",
                    meta: {
                        title: s["a"].t("route.AssetAclList"),
                        licenseRequired: !0
                    },
                    children: [{
                        path: "",
                        name: "AssetAclList",
                        component: function() {
                            return n.e("chunk-2d0b991d").then(n.bind(null, "3406"))
                        },
                        meta: {
                            title: s["a"].t("route.AssetAclList"),
                            activeMenu: "/acl/asset-acl"
                        }
                    }, {
                        path: "create",
                        name: "AssetAclCreate",
                        component: function() {
                            return n.e("chunk-2d0bd229").then(n.bind(null, "2b69"))
                        },
                        meta: {
                            title: s["a"].t("route.AssetAclCreate"),
                            activeMenu: "/acl/asset-acl"
                        },
                        hidden: !0
                    }, {
                        path: ":id",
                        name: "AssetAclDetail",
                        component: function() {
                            return n.e("chunk-2d0c89dc").then(n.bind(null, "5649"))
                        },
                        meta: {
                            title: s["a"].t("route.AssetAclDetail"),
                            activeMenu: "/acl/asset-acl"
                        },
                        hidden: !0
                    }, {
                        path: ":id/update",
                        name: "AssetAclUpdate",
                        component: function() {
                            return n.e("chunk-2d0bd229").then(n.bind(null, "2b69"))
                        },
                        meta: {
                            title: s["a"].t("route.AssetAclUpdate"),
                            activeMenu: "/acl/asset-acl"
                        },
                        hidden: !0
                    }]
                }],
                C = [{
                    path: "asset-accounts",
                    component: l["a"],
                    meta: {
                        title: s["a"].t("route.AssetAccount")
                    },
                    redirect: "",
                    children: [{
                        path: "",
                        name: "AssetAccountList",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-f088f17e")]).then(n.bind(null, "80ab"))
                        },
                        meta: {
                            title: s["a"].t("route.AssetAccount")
                        }
                    }]
                }, {
                    path: "application-accounts",
                    component: l["a"],
                    redirect: "",
                    meta: {
                        title: s["a"].t("route.AssetAccount")
                    },
                    children: [{
                        path: "",
                        name: "ApplicationAccountList",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-17e23b85")]).then(n.bind(null, "ef55"))
                        },
                        meta: {
                            title: s["a"].t("route.ApplicationAccount")
                        }
                    }]
                }, {
                    path: "gathered-user",
                    component: l["a"],
                    redirect: "",
                    meta: {
                        title: s["a"].t("xpack.GatherUser.GatherUserList")
                    },
                    children: [{
                        path: "",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-7b371b7a")]).then(n.bind(null, "0c4f"))
                        },
                        name: "GatherUserListIndex",
                        meta: {
                            title: s["a"].t("xpack.GatherUser.GatherUser"),
                            activeMenu: "/accounts/gathered-user"
                        }
                    }, {
                        path: "",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-bcc567da")]).then(n.bind(null, "1ae6"))
                        },
                        name: "GatherUserList",
                        hidden: !0,
                        meta: {
                            title: s["a"].t("xpack.GatherUser.GatherUserList"),
                            activeMenu: "/accounts/gathered-user"
                        }
                    }, {
                        path: "tasks",
                        component: function() {
                            return n.e("chunk-4b9629f7").then(n.bind(null, "94ee"))
                        },
                        name: "GatherUserTaskList",
                        meta: {
                            title: s["a"].t("xpack.GatherUser.GatherUserTaskList"),
                            activeMenu: "/accounts/gathered-user"
                        },
                        hidden: !0
                    }, {
                        path: "tasks/:id",
                        component: function() {
                            return n.e("chunk-2d207974").then(n.bind(null, "a0d3"))
                        },
                        name: "GatherUserTaskDetail",
                        meta: {
                            title: s["a"].t("xpack.GatherUser.GatherUserTaskDetail"),
                            activeMenu: "/accounts/gathered-user"
                        },
                        hidden: !0
                    }, {
                        path: "tasks/create",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-b54264aa")]).then(n.bind(null, "2971"))
                        },
                        name: "GatherUserTaskCreate",
                        meta: {
                            title: s["a"].t("xpack.GatherUser.GatherUserTaskCreate"),
                            activeMenu: "/accounts/gathered-user"
                        },
                        hidden: !0
                    }, {
                        path: "tasks/:id/update",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-b54264aa")]).then(n.bind(null, "2971"))
                        },
                        name: "GatherUserTaskUpdate",
                        meta: {
                            title: s["a"].t("xpack.GatherUser.GatherUserTaskUpdate"),
                            action: "update",
                            activeMenu: "/accounts/gathered-user"
                        },
                        hidden: !0
                    }]
                }, {
                    path: "change-auth-plan",
                    component: l["a"],
                    redirect: "",
                    meta: {
                        title: s["a"].t("xpack.ChangeAuthPlan.ChangeAuthPlan")
                    },
                    children: [{
                        path: "",
                        component: function() {
                            return n.e("chunk-5e7f3b6e").then(n.bind(null, "97e5"))
                        },
                        name: "ChangeAuthPlanIndex",
                        meta: {
                            title: s["a"].t("xpack.ChangeAuthPlan.ChangeAuthPlan"),
                            activeMenu: "/accounts/change-auth-plan"
                        }
                    }, {
                        path: "plan",
                        component: function() {
                            return n.e("chunk-b38d3c74").then(n.bind(null, "5dfc"))
                        },
                        name: "AssetChangeAuthPlanList",
                        meta: {
                            title: s["a"].t("xpack.ChangeAuthPlan.AssetChangeAuthPlan"),
                            activeMenu: "/accounts/change-auth-plan"
                        },
                        hidden: !0
                    }, {
                        path: "plan/create",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-3b996d30")]).then(n.bind(null, "e9eb"))
                        },
                        name: "AssetChangeAuthPlanCreate",
                        meta: {
                            title: s["a"].t("xpack.ChangeAuthPlan.AssetChangeAuthPlanCreate"),
                            activeMenu: "/accounts/change-auth-plan",
                            action: "create"
                        },
                        hidden: !0
                    }, {
                        path: "plan/:id/update",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-3b996d30")]).then(n.bind(null, "e9eb"))
                        },
                        name: "AssetChangeAuthPlanUpdate",
                        meta: {
                            title: s["a"].t("xpack.ChangeAuthPlan.AssetChangeAuthPlanUpdate"),
                            activeMenu: "/accounts/change-auth-plan",
                            action: "update"
                        },
                        hidden: !0
                    }, {
                        path: "plan/:id",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-57318b24")]).then(n.bind(null, "98b4"))
                        },
                        name: "AssetChangeAuthPlanDetail",
                        meta: {
                            title: s["a"].t("xpack.ChangeAuthPlan.AssetChangeAuthPlan"),
                            activeMenu: "/accounts/change-auth-plan"
                        },
                        hidden: !0
                    }, {
                        path: "plan-execution/:id",
                        component: function() {
                            return n.e("chunk-2d0e5c1f").then(n.bind(null, "969e"))
                        },
                        name: "ChangeAuthPlanExecutionDetail",
                        meta: {
                            title: s["a"].t("xpack.ChangeAuthPlan.ExecutionDetail"),
                            activeMenu: "/accounts/change-auth-plan"
                        },
                        hidden: !0
                    }, {
                        path: "app-plan",
                        component: function() {
                            return n.e("chunk-26ea16b2").then(n.bind(null, "6947"))
                        },
                        name: "AppChangeAuthPlanList",
                        meta: {
                            title: s["a"].t("xpack.ChangeAuthPlan.AppChangeAuthPlan"),
                            activeMenu: "/accounts/change-auth-plan"
                        },
                        hidden: !0
                    }, {
                        path: "app-plan/create",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-2d38b92c")]).then(n.bind(null, "134a"))
                        },
                        name: "AppChangeAuthPlanCreate",
                        meta: {
                            title: s["a"].t("xpack.ChangeAuthPlan.AppChangeAuthPlanCreate"),
                            activeMenu: "/accounts/change-auth-plan",
                            action: "create"
                        },
                        hidden: !0
                    }, {
                        path: "app-plan/:id",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-61844d58")]).then(n.bind(null, "d0d9"))
                        },
                        name: "AppChangeAuthPlanDetail",
                        meta: {
                            title: s["a"].t("xpack.ChangeAuthPlan.AppChangeAuthPlan"),
                            activeMenu: "/accounts/change-auth-plan"
                        },
                        hidden: !0
                    }, {
                        path: "app-plan/:id/update",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-2d38b92c")]).then(n.bind(null, "134a"))
                        },
                        name: "AppChangeAuthPlanUpdate",
                        meta: {
                            title: s["a"].t("xpack.ChangeAuthPlan.AppChangeAuthPlanUpdate"),
                            activeMenu: "/accounts/change-auth-plan",
                            action: "update"
                        },
                        hidden: !0
                    }, {
                        path: "app-plan-execution/:id",
                        component: function() {
                            return n.e("chunk-2d2268ca").then(n.bind(null, "e8ab"))
                        },
                        name: "AppChangeAuthPlanExecutionDetail",
                        meta: {
                            title: s["a"].t("xpack.ChangeAuthPlan.ExecutionDetail"),
                            activeMenu: "/accounts/change-auth-plan"
                        },
                        hidden: !0
                    }]
                }],
                k = [{
                    path: "/",
                    component: c["a"],
                    meta: {
                        roles: [o["a"].USER],
                        permissions: [o["a"].PERM_USE]
                    },
                    children: [{
                        path: "",
                        name: "MyAssets",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-57537170")]).then(n.bind(null, "8118"))
                        },
                        meta: {
                            title: s["a"].t("route.MyAssets"),
                            icon: "files-o",
                            permissions: [o["a"].PERM_USE]
                        }
                    }]
                }, {
                    path: "/apps",
                    name: "Apps",
                    component: c["a"],
                    redirect: "/apps/remoteapp",
                    alwaysShow: !0,
                    meta: {
                        title: s["a"].t("route.MyApps"),
                        icon: "th",
                        permissions: [o["a"].PERM_USE]
                    },
                    children: [{
                        path: "/apps/remoteapp",
                        name: "MyRemoteApps",
                        component: function() {
                            return n.e("chunk-2d21d8f0").then(n.bind(null, "d28d"))
                        },
                        meta: {
                            title: s["a"].t("route.RemoteApp"),
                            permissions: [o["a"].PERM_USE],
                            licenseRequired: !0
                        }
                    }, {
                        path: "/apps/database",
                        name: "MyDatebases",
                        component: function() {
                            return n.e("chunk-2d22cae3").then(n.bind(null, "f3ee"))
                        },
                        meta: {
                            title: s["a"].t("route.DatabaseApp"),
                            permissions: [o["a"].PERM_USE]
                        }
                    }, {
                        path: "/apps/kubernetes",
                        name: "MyKubernetes",
                        component: function() {
                            return n.e("chunk-2d22e159").then(n.bind(null, "f9f6"))
                        },
                        meta: {
                            title: s["a"].t("route.KubernetesApp"),
                            permissions: [o["a"].PERM_USE]
                        }
                    }]
                }, {
                    path: "/command-executions",
                    component: c["a"],
                    meta: {
                        permissions: [o["a"].PERM_USE],
                        hidden: function(e) {
                            var t = e.settings;
                            return !t.SECURITY_COMMAND_EXECUTION
                        }
                    },
                    children: [{
                        path: "",
                        name: "CommandExecutions",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-26aed086"), n.e("chunk-0f2968e6"), n.e("chunk-7c61d6ba")]).then(n.bind(null, "2035"))
                        },
                        meta: {
                            title: s["a"].t("route.BatchCommand"),
                            icon: "terminal",
                            permissions: [o["a"].PERM_USE]
                        }
                    }]
                }, {
                    path: "/tickets",
                    component: c["a"],
                    hidden: !0,
                    meta: {
                        title: s["a"].t("route.Tickets"),
                        icon: "history",
                        permissions: [o["a"].PERM_USE],
                        licenseRequired: !0,
                        hidden: function(e) {
                            var t = e.settings;
                            return !t.TICKETS_ENABLED
                        }
                    },
                    children: [{
                        path: "",
                        name: "TicketList",
                        component: function() {
                            return n.e("chunk-600ae112").then(n.bind(null, "0179"))
                        },
                        meta: {
                            title: s["a"].t("route.Tickets"),
                            icon: "check-square-o",
                            activeMenu: "/tickets",
                            permissions: [o["a"].PERM_USE]
                        }
                    }, {
                        path: "tickets/request-asset-perm/create",
                        name: "RequestAssetPermTicketCreateUpdate",
                        component: function() {
                            return n.e("chunk-6d7301ed").then(n.bind(null, "3cae"))
                        },
                        meta: {
                            title: s["a"].t("route.TicketDetail"),
                            activeMenu: "/tickets",
                            permissions: [o["a"].PERM_USE]
                        },
                        hidden: !0
                    }, {
                        path: "tickets/request-asset-perm/:id",
                        name: "AssetsTicketDetail",
                        component: function() {
                            return Promise.all([n.e("chunk-2c57e8d8"), n.e("chunk-07127d3c")]).then(n.bind(null, "685f"))
                        },
                        meta: {
                            title: s["a"].t("route.TicketDetail"),
                            activeMenu: "/tickets",
                            permissions: [o["a"].PERM_USE]
                        },
                        hidden: !0
                    }, {
                        path: "tickets/login-asset-confirm/:id",
                        name: "LoginAssetTicketDetail",
                        component: function() {
                            return Promise.all([n.e("chunk-2c57e8d8"), n.e("chunk-2d0e941b")]).then(n.bind(null, "8d81"))
                        },
                        meta: {
                            title: s["a"].t("route.TicketDetail"),
                            activeMenu: "/tickets",
                            permissions: [o["a"].PERM_USE]
                        },
                        hidden: !0
                    }, {
                        path: "tickets/request-application-perm/create",
                        name: "RequestApplicationPermTicketCreateUpdate",
                        component: function() {
                            return n.e("chunk-b0afa8e2").then(n.bind(null, "7e21"))
                        },
                        meta: {
                            title: s["a"].t("route.TicketCreate"),
                            activeMenu: "/tickets/tickets",
                            permissions: [o["a"].PERM_USE]
                        },
                        hidden: !0
                    }, {
                        path: "tickets/request-application-perm/:id",
                        name: "AppsTicketDetail",
                        component: function() {
                            return Promise.all([n.e("chunk-2c57e8d8"), n.e("chunk-467cf0e0")]).then(n.bind(null, "33f7"))
                        },
                        meta: {
                            title: s["a"].t("route.TicketDetail"),
                            activeMenu: "/tickets/tickets",
                            permissions: [o["a"].PERM_USE]
                        },
                        hidden: !0
                    }, {
                        path: "tickets/command-confirm/:id",
                        name: "CommandConfirmDetail",
                        component: function() {
                            return Promise.all([n.e("chunk-2c57e8d8"), n.e("chunk-2d22c44a")]).then(n.bind(null, "f307"))
                        },
                        meta: {
                            title: s["a"].t("route.CommandConfirm"),
                            activeMenu: "/tickets/tickets",
                            permissions: [o["a"].PERM_USE]
                        },
                        hidden: !0
                    }, {
                        path: "tickets/:id",
                        name: "TicketDetail",
                        component: function() {
                            return Promise.all([n.e("chunk-2c57e8d8"), n.e("chunk-2d21ab1d")]).then(n.bind(null, "bd38"))
                        },
                        meta: {
                            title: s["a"].t("route.TicketDetail"),
                            activeMenu: "/tickets",
                            permissions: [o["a"].PERM_USE]
                        },
                        hidden: !0
                    }]
                }, {
                    path: "external-luna",
                    component: c["a"],
                    meta: {
                        permissions: [o["a"].PERM_USE]
                    },
                    children: [{
                        path: "".concat(g["a"], "/luna/"),
                        meta: {
                            title: s["a"].t("route.WebTerminal"),
                            icon: "window-maximize",
                            activeMenu: "/assets",
                            permissions: [o["a"].PERM_USE]
                        }
                    }]
                }, {
                    path: "external-elfinder",
                    component: c["a"],
                    meta: {
                        permissions: [o["a"].PERM_USE]
                    },
                    children: [{
                        path: "".concat(g["a"], "/koko/elfinder/sftp/"),
                        meta: {
                            title: s["a"].t("route.FileManager"),
                            icon: "file",
                            activeMenu: "/assets",
                            permissions: [o["a"].PERM_USE]
                        }
                    }]
                }];
            n.d(t, "b", (function() {
                return P
            })), n.d(t, "a", (function() {
                return T
            })), n.d(t, "d", (function() {
                return D
            })), r["default"].use(i["a"]);
            var O = n("8f5e"),
                P = [{
                    path: "/404",
                    name: "404",
                    component: function() {
                        return n.e("chunk-60aab4fe").then(n.bind(null, "8cdb"))
                    },
                    hidden: !0
                }].concat(Object(a["a"])(A)),
                T = [{
                    path: "/",
                    component: c["a"],
                    redirect: "/dashboard",
                    meta: {
                        permissions: [o["a"].PERM_AUDIT]
                    },
                    children: [{
                        path: "dashboard",
                        name: "dashboard",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-2ea99f8c"), n.e("chunk-0bc2c85a")]).then(n.bind(null, "9406"))
                        },
                        meta: {
                            title: s["a"].t("route.Dashboard"),
                            icon: "dashboard",
                            permissions: [o["a"].PERM_AUDIT]
                        }
                    }]
                }, {
                    path: "/users",
                    component: c["a"],
                    redirect: "/users/users/",
                    name: "Users",
                    meta: {
                        title: s["a"].t("route.Users"),
                        icon: "users"
                    },
                    children: u
                }, {
                    path: "/assets",
                    component: c["a"],
                    redirect: "/assets/assets/",
                    name: "assets",
                    meta: {
                        title: s["a"].t("route.Assets"),
                        icon: "inbox"
                    },
                    children: d
                }, {
                    path: "/applications/",
                    component: c["a"],
                    redirect: "/applications/remote-apps/",
                    name: "applications",
                    alwaysShow: !0,
                    meta: {
                        title: s["a"].t("route.Applications"),
                        icon: "th"
                    },
                    children: p
                }, {
                    path: "/accounts",
                    component: c["a"],
                    redirect: "/accounts/asset-accounts/",
                    name: "Accounts",
                    meta: {
                        licenseRequired: !0,
                        title: s["a"].t("route.Accounts"),
                        icon: "address-book"
                    },
                    children: C
                }, {
                    path: "/perms/",
                    component: c["a"],
                    redirect: "/perms/asset-permissions/",
                    name: "Perms",
                    meta: {
                        title: s["a"].t("route.Perms"),
                        icon: "edit"
                    },
                    children: f
                }, {
                    path: "/acl/",
                    component: c["a"],
                    redirect: "/perms/access-control-list/",
                    name: "Acl",
                    meta: {
                        licenseRequired: !0,
                        title: s["a"].t("route.Acl"),
                        icon: "fort-awesome"
                    },
                    children: S
                }, {
                    path: "/terminal/",
                    component: c["a"],
                    redirect: "/terminal/session-online/",
                    name: "Sessions",
                    meta: {
                        title: s["a"].t("route.Sessions"),
                        icon: "rocket",
                        permissions: [o["a"].PERM_AUDIT]
                    },
                    children: b
                }, {
                    path: "/ops/",
                    component: c["a"],
                    redirect: "/ops/tasks/",
                    name: "JobCenter",
                    alwaysShow: !0,
                    meta: {
                        title: s["a"].t("route.JobCenter"),
                        icon: "coffee"
                    },
                    children: v
                }, {
                    name: "Tickets",
                    path: "/tickets/",
                    component: c["a"],
                    redirect: "/tickets/tickets/",
                    children: y,
                    hidden: !0,
                    meta: {
                        licenseRequired: !0,
                        permissions: [o["a"].PERM_AUDIT]
                    }
                }, {
                    path: "/audits/",
                    component: c["a"],
                    redirect: "/audits/login-log/",
                    name: "Audits",
                    meta: {
                        title: s["a"].t("route.Audits"),
                        icon: "history",
                        permissions: [o["a"].PERM_AUDIT]
                    },
                    children: w
                }].concat(Object(a["a"])(O.keys().map((function(e) {
                    return O(e).default
                }))), [{
                    path: "/settings",
                    component: c["a"],
                    redirect: "/settings/",
                    permissions: [o["a"].PERM_SUPER],
                    children: [{
                        path: "",
                        name: "Settings",
                        component: function() {
                            return Promise.all([n.e("chunk-commons"), n.e("chunk-1355aeb4"), n.e("chunk-2c55c410"), n.e("chunk-4367c372"), n.e("chunk-6cff6ad6")]).then(n.bind(null, "61c2"))
                        },
                        meta: {
                            title: s["a"].t("route.Settings"),
                            icon: "gears",
                            permissions: [o["a"].PERM_SUPER]
                        }
                    }]
                }], Object(a["a"])(k), [{
                    path: "*",
                    redirect: "/404",
                    hidden: !0,
                    meta: {
                        roles: ["SuperAdmin", "Admin", "Auditor", "User"]
                    }
                }]),
                _ = function() {
                    return new i["a"]({
                        scrollBehavior: function() {
                            return {
                                y: 0
                            }
                        },
                        base: "/ui/",
                        routes: P
                    })
                },
                x = _();

            function D() {
                var e = _();
                x.matcher = e.matcher
            }
            t["c"] = x
        },
        a403: function(e, t, n) {
            "use strict";
            var a = n("622a"),
                r = n.n(a);
            r.a
        },
        a545: function(e, t, n) {},
        a735: function(e, t, n) {
            "use strict";
            n("6d67"), n("c5f6");
            var a, r, i = {
                    name: "ItemValue",
                    props: {
                        value: {
                            type: [String, Number, Function, Array, Object, Boolean],
                            default: ""
                        },
                        item: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        formatter: {
                            type: Function,
                            default: null
                        }
                    },
                    methods: {
                        toChoicesDisplay: function(e) {
                            return e ? this.$t("common.Yes") : this.$t("common.No")
                        }
                    },
                    render: function(e) {
                        if ("function" === typeof this.formatter) return this.formatter(this.item, this.value);
                        if ("boolean" === typeof this.value) return e("span", {
                            class: "item-value"
                        }, [this.toChoicesDisplay(this.value)]);
                        if (this.value instanceof Array) {
                            var t = this.value || [];
                            return e("span", {
                                class: "item-value"
                            }, [t.map((function(t, n) {
                                return e("div", {
                                    key: n
                                }, [t.key, "：", t.value, " "])
                            }))])
                        }
                        return e("span", {
                            class: "item-value"
                        }, [this.value])
                    }
                },
                s = i,
                o = (n("d906"), n("2877")),
                c = Object(o["a"])(s, a, r, !1, null, "4aad9c6a", null);
            t["a"] = c.exports
        },
        a9e4: function(e, t, n) {
            "use strict";
            var a = n("c606"),
                r = n.n(a);
            r.a
        },
        aa46: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-edit",
                    use: "icon-edit-usage",
                    viewBox: "0 0 1024 1024",
                    content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-edit"><defs><style type="text/css"></style></defs><path d="M507.428571 676.571429l66.285715-66.285715-86.857143-86.857143-66.285714 66.285715v32h54.857142v54.857143h32z m251.428572-411.428572q-9.142857-9.142857-18.857143 0.571429L540 465.714286q-9.714286 9.714286-0.571429 18.857143t18.857143-0.571429l200-200q9.714286-9.714286 0.571429-18.857143z m45.714286 339.428572v108.571428q0 68-48.285715 116.285714T640 877.714286H164.571429q-68 0-116.285715-48.285715T0 713.142857V237.714286q0-68 48.285714-116.285715T164.571429 73.142857h475.428571q36 0 66.857143 14.285714 8.571429 4 10.285714 13.142858 1.714286 9.714286-5.142857 16.571428l-28 28q-8 8-18.285714 4.571429-13.142857-3.428571-25.714286-3.428572H164.571429q-37.714286 0-64.571429 26.857143t-26.857143 64.571429v475.428571q0 37.714286 26.857143 64.571429t64.571429 26.857143h475.428571q37.714286 0 64.571429-26.857143t26.857142-64.571429v-72q0-7.428571 5.142858-12.571428l36.571428-36.571429q8.571429-8.571429 20-4t11.428572 16.571429z m-54.857143-421.714286l164.571428 164.571428-384 384H365.714286V566.857143z m253.714285 75.428571l-52.571428 52.571429-164.571429-164.571429 52.571429-52.571428q16-16 38.857143-16t38.857143 16l86.857142 86.857143q16 16 16 38.857142t-16 38.857143z" p-id="1272" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        aa5c: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("router-view")], 1)
                },
                r = [],
                i = {
                    name: "Layout"
                },
                s = i,
                o = n("2877"),
                c = Object(o["a"])(s, a, r, !1, null, "7ab3810c", null);
            t["a"] = c.exports
        },
        af98: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("ElFormRender", e._g(e._b({
                        ref: "form",
                        attrs: {
                            content: e.fields,
                            form: e.basicForm,
                            "label-position": "right",
                            "label-width": "20%"
                        }
                    }, "ElFormRender", e.$attrs, !1), e.$listeners), [e._l(e.fields, (function(t) {
                        return e._t("id:" + t.id, null, {
                            slot: "id:" + t.id
                        })
                    })), e._v(" "), e._l(e.fields, (function(t) {
                        return e._t("$id:" + t.id, null, {
                            slot: "$id:" + t.id
                        })
                    })), e._v(" "), e.hasButtons ? n("el-form-item", {
                        staticClass: "form-buttons"
                    }, [e._l(e.moreButtons, (function(t) {
                        return n("el-button", e._b({
                            key: t.title,
                            attrs: {
                                size: "small"
                            },
                            on: {
                                click: function(n) {
                                    return e.handleClick(t)
                                }
                            }
                        }, "el-button", t, !1), [e._v(e._s(t.title))])
                    })), e._v(" "), e.defaultButton && e.hasReset ? n("el-button", {
                        attrs: {
                            size: "small"
                        },
                        on: {
                            click: function(t) {
                                return e.resetForm("form")
                            }
                        }
                    }, [e._v(e._s(e.$t("common.Reset")))]) : e._e(), e._v(" "), e.defaultButton && e.hasSaveContinue ? n("el-button", {
                        attrs: {
                            size: "small"
                        },
                        on: {
                            click: function(t) {
                                return e.submitForm("form", !0)
                            }
                        }
                    }, [e._v(e._s(e.$t("common.SaveAndAddAnother")))]) : e._e(), e._v(" "), e.defaultButton ? n("el-button", {
                        attrs: {
                            size: "small",
                            loading: e.isSubmitting,
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.submitForm("form")
                            }
                        }
                    }, [e._v(e._s(e.$t("common.Submit")))]) : e._e()], 2) : e._e()], 2)
                },
                r = [],
                i = n("4cf2"),
                s = {
                    components: {
                        ElFormRender: i["a"]
                    },
                    props: {
                        defaultButton: {
                            type: Boolean,
                            default: !0
                        },
                        hasButtons: {
                            type: Boolean,
                            default: !0
                        },
                        hasReset: {
                            type: Boolean,
                            default: !0
                        },
                        hasSaveContinue: {
                            type: Boolean,
                            default: !0
                        },
                        fields: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        form: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        moreButtons: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        isSubmitting: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            basicForm: this.form
                        }
                    },
                    methods: {
                        submitForm: function(e, t) {
                            var n = this,
                                a = this.$refs[e];
                            a.validate((function(e) {
                                if (!e) return n.$emit("invalid", e), !1;
                                n.$emit("submit", a.getFormValue(), a, t)
                            }))
                        },
                        resetForm: function(e) {
                            this.$refs[e].resetFields()
                        },
                        handleClick: function(e) {
                            var t = e.callback || function(e, t) {},
                                n = this.$refs["form"],
                                a = n.getFormValue();
                            t(a, n)
                        }
                    }
                },
                o = s,
                c = (n("fef8"), n("2877")),
                l = Object(c["a"])(o, a, r, !1, null, "613b3228", null);
            t["a"] = l.exports
        },
        b0d4: function(e, t, n) {},
        b20f: function(e, t, n) {
            e.exports = {
                menuText: "#a7b1c2",
                menuActiveText: "#fff",
                subMenuActiveText: "#f4f4f5",
                menuBg: "#2f4050",
                menuHover: "#293846",
                subMenuBg: "#1f2d3d",
                subMenuHover: "#001528",
                sideBarWidth: "220px"
            }
        },
        b3b5: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-user",
                    use: "icon-user-usage",
                    viewBox: "0 0 130 130",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130" id="icon-user"><path d="M63.444 64.996c20.633 0 37.359-14.308 37.359-31.953 0-17.649-16.726-31.952-37.359-31.952-20.631 0-37.36 14.303-37.358 31.952 0 17.645 16.727 31.953 37.359 31.953zM80.57 75.65H49.434c-26.652 0-48.26 18.477-48.26 41.27v2.664c0 9.316 21.608 9.325 48.26 9.325H80.57c26.649 0 48.256-.344 48.256-9.325v-2.663c0-22.794-21.605-41.271-48.256-41.271z" stroke="#979797" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        b501: function(e, t, n) {},
        b609: function(e, t, n) {},
        b775: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return y
            }));
            n("57e7");
            var a = n("bc3a"),
                r = n.n(a),
                i = n("0692"),
                s = n("5f87"),
                o = n("cf45"),
                c = n("2612"),
                l = n("5c96"),
                u = n("4360"),
                d = n("04ac"),
                p = n.n(d),
                m = n("a18c"),
                h = r.a.create({
                    baseURL: "",
                    timeout: 6e4
                });

            function f(e) {
                var t, n, a = Object(s["c"])();
                a && (e.headers["X-CSRFToken"] = a);
                var r = null === (t = m["c"].currentRoute.query) || void 0 === t ? void 0 : t.oid,
                    i = null === (n = u["a"].getters.currentOrg) || void 0 === n ? void 0 : n.id,
                    o = r || i;
                o && (e.headers["X-JMS-ORG"] = o)
            }

            function g(e) {
                try {
                    e.headers["X-TZ"] = Intl.DateTimeFormat().resolvedOptions().timeZone
                } catch (t) {
                    console.log("Current browser not support Intl tools")
                }
            }

            function b(e) {
                var t = e.response;
                e.error;
                if (401 === t.status) {
                    if (t.config.disableFlashErrorMsg = !0, -1 !== t.request.responseURL.indexOf("/users/profile/")) return void(window.location = "/core/auth/login/");
                    var n = i["a"].t("common.Info"),
                        a = i["a"].t("auth.LoginRequiredMsg");
                    l["MessageBox"].confirm(a, n, {
                        confirmButtonText: i["a"].t("auth.ReLogin"),
                        cancelButtonText: i["a"].t("common.Cancel"),
                        type: "warning"
                    }).then((function() {
                        window.location = "/core/auth/login/"
                    }))
                }
            }

            function v(e) {
                var t = e.response,
                    n = e.error;
                400 === t.status && (n.message = i["a"].t("common.BadRequestErrorMsg")), 403 === t.status && (n.message = i["a"].t("common.BadRoleErrorMsg")), 409 === t.status && (n.response.status = 409, n.message = i["a"].t("common.BadConflictErrorMsg"))
            }

            function y(e) {
                var t = e.response,
                    n = e.error;
                if (!t.config.disableFlashErrorMsg) {
                    var a = Object(o["i"])(n),
                        r = a || n.message;
                    Object(l["Message"])({
                        message: r,
                        type: "error",
                        duration: 5e3
                    })
                }
            }
            h.interceptors.request.use((function(e) {
                return f(e), g(e), e
            }), (function(e) {
                return console.log(e), Promise.reject(e)
            }));
            var w = null;

            function A(e) {
                -1 === e.request.responseURL.indexOf("/users/profile/") && (w && clearTimeout(w), w = setTimeout((function() {
                    Object(c["d"])()
                }), 3e4))
            }
            h.interceptors.response.use((function(e) {
                A(e);
                var t = e.data;
                return 1 === e.config.raw ? e : t
            }), (function(e) {
                if (!e.response) return Promise.reject(e);
                var t = e.response;
                return b({
                    response: t,
                    error: e
                }), v({
                    response: t,
                    error: e
                }), y({
                    response: t,
                    error: e
                }), Promise.reject(e)
            })), p()(h, {
                retries: 0
            }), t["a"] = h
        },
        b96b: function(e, t, n) {
            "use strict";
            var a = n("de37"),
                r = n.n(a);
            r.a
        },
        b96c: function(e, t, n) {},
        b97b: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("IBox", {
                        attrs: {
                            title: e.title,
                            fa: "fa-info-circle"
                        }
                    }, [n("div", {
                        staticClass: "content"
                    }, [this.$route.params.id ? n("el-row", {
                        staticClass: "item",
                        attrs: {
                            gutter: 10
                        }
                    }, [n("el-col", {
                        attrs: {
                            span: 6
                        }
                    }, [n("div", {
                        staticClass: "item-label",
                        style: {
                            "text-align": e.align
                        }
                    }, [n("label", [e._v("ID: ")])])]), e._v(" "), n("el-col", {
                        attrs: {
                            span: 18
                        }
                    }, [n("div", {
                        staticClass: "item-text"
                    }, [e._v(e._s(this.$route.params.id))])])], 1) : e._e(), e._v(" "), e._l(e.items, (function(t) {
                        return n("el-row", {
                            key: "card-" + t.key,
                            staticClass: "item",
                            attrs: {
                                gutter: 10
                            }
                        }, [n("el-col", {
                            attrs: {
                                span: 6
                            }
                        }, [n("div", {
                            staticClass: "item-label",
                            style: {
                                "text-align": e.align
                            }
                        }, [n("label", [e._v(e._s(t.key) + ": ")])])]), e._v(" "), n("el-col", {
                            attrs: {
                                span: 18
                            }
                        }, [n("div", {
                            staticClass: "item-text"
                        }, [n("ItemValue", e._b({
                            attrs: {
                                value: t.value
                            }
                        }, "ItemValue", t, !1))], 1)])], 1)
                    })), e._v(" "), e._t("default")], 2)])
                },
                r = [],
                i = n("e67a"),
                s = n("a735"),
                o = {
                    name: "DetailCard",
                    components: {
                        IBox: i["a"],
                        ItemValue: s["a"]
                    },
                    props: {
                        title: {
                            type: String,
                            default: function() {
                                return this.$t("common.BasicInfo")
                            }
                        },
                        items: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        align: {
                            type: String,
                            default: "left"
                        }
                    }
                },
                c = o,
                l = (n("f89b"), n("2877")),
                u = Object(l["a"])(c, a, r, !1, null, "29073b93", null);
            t["a"] = u.exports
        },
        b9b7: function(e, t, n) {
            "use strict";
            var a = n("ede6"),
                r = n.n(a);
            r.a
        },
        bab1: function(e, t, n) {},
        bb1a: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div")
                },
                r = [],
                i = (n("c5f6"), {
                    name: "BaseFormatter",
                    props: {
                        reload: {
                            type: Function,
                            default: function(e) {
                                e.reloading;
                                return {}
                            }
                        },
                        row: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        col: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        cellValue: {
                            type: [String, Boolean, Number, Object, Array],
                            default: null
                        },
                        tableData: {
                            type: Array,
                            default: function() {
                                return {}
                            }
                        },
                        url: {
                            type: String,
                            default: ""
                        },
                        column: {
                            type: Object,
                            default: null
                        },
                        index: {
                            type: Number,
                            default: 0
                        },
                        formatterArgsDefault: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        }
                    },
                    data: function() {
                        return {
                            formatterArgs: Object.assign(this.formatterArgsDefault, this.col.formatterArgs)
                        }
                    }
                }),
                s = i,
                o = n("2877"),
                c = Object(o["a"])(s, a, r, !1, null, "12154a48", null);
            t["a"] = c.exports
        },
        bb92: function(e, t, n) {},
        bbcd: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            }));
            var a = n("b775");

            function r(e) {
                return Object(a["a"])({
                    url: "/api/v1/orgs/orgs/current/?oid=".concat(e),
                    method: "get"
                })
            }

            function i() {
                return Object(a["a"])({
                    url: "/api/v1/orgs/orgs/current/",
                    method: "get"
                })
            }
        },
        be20: function(e, t, n) {
            "use strict";
            n("96cf");
            var a = n("3b8d"),
                r = (n("7514"), n("cf45")),
                i = n("bbcd"),
                s = n("4360"),
                o = "00000000-0000-0000-0000-000000000002";

            function c() {
                var e = s["a"].getters.userAdminOrgList,
                    t = e.find((function(e) {
                        return e.is_default
                    }));
                return t || e[0]
            }

            function l() {
                var e = c();
                setTimeout((function() {
                    return d(e.id)
                }), 100)
            }

            function u() {
                var e = s["a"].getters.currentOrg,
                    t = e.id,
                    n = s["a"].getters.userAdminOrgList,
                    a = n.find((function(e) {
                        return e.id === t
                    }));
                return a
            }

            function d(e) {
                return p.apply(this, arguments)
            }

            function p() {
                return p = Object(a["a"])(regeneratorRuntime.mark((function e(t) {
                    var n;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Object(i["b"])(t);
                            case 2:
                                return n = e.sent, n ? console.debug("Change to org: ", n) : console.debug("Error: org not found"), e.next = 6, s["a"].dispatch("users/setCurrentRole", null);
                            case 6:
                                s["a"].dispatch("users/setCurrentOrg", n).then((function() {
                                    Object(r["k"])(location.href) ? location.href = r["a"] : window.location.reload(!0)
                                }));
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), p.apply(this, arguments)
            }
            t["a"] = {
                hasCurrentOrgPermission: u,
                changeOrg: d,
                DEFAULT_ORG_ID: o,
                change2PropOrg: l
            }
        },
        be41: function(e, t, n) {
            "use strict";
            var a = n("b0d4"),
                r = n.n(a);
            r.a
        },
        c00a: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return e.isExternal ? n("div", e._g({
                        staticClass: "svg-external-icon svg-icon",
                        style: e.styleExternalIcon
                    }, e.$listeners)) : n("svg", e._g({
                        class: e.svgClass,
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }, e.$listeners), [n("use", {
                        attrs: {
                            href: e.iconName
                        }
                    })])
                },
                r = [],
                i = n("61f7"),
                s = {
                    name: "SvgIcon",
                    props: {
                        iconClass: {
                            type: String,
                            required: !0
                        },
                        className: {
                            type: String,
                            default: ""
                        }
                    },
                    computed: {
                        isExternal: function() {
                            return Object(i["a"])(this.iconClass)
                        },
                        iconName: function() {
                            return "#icon-".concat(this.iconClass)
                        },
                        svgClass: function() {
                            return this.className ? "svg-icon " + this.className : "svg-icon"
                        },
                        styleExternalIcon: function() {
                            return {
                                mask: "url(".concat(this.iconClass, ") no-repeat 50% 50%"),
                                "-webkit-mask": "url(".concat(this.iconClass, ") no-repeat 50% 50%")
                            }
                        }
                    }
                },
                o = s,
                c = (n("d1a7"), n("2877")),
                l = Object(c["a"])(o, a, r, !1, null, "4342976c", null);
            t["a"] = l.exports
        },
        c023: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-history",
                    use: "icon-history-usage",
                    viewBox: "0 0 1024 1024",
                    content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-history"><defs><style type="text/css"></style></defs><path d="M950.857143 512q0 89.142857-34.857143 170.285714t-93.714286 140-140 93.714286-170.285714 34.857143q-98.285714 0-186.857143-41.428571t-150.857143-116.857143q-4-5.714286-3.714286-12.857143t4.857143-11.714286l78.285714-78.857143q5.714286-5.142857 14.285714-5.142857 9.142857 1.142857 13.142857 6.857143 41.714286 54.285714 102.285714 84t128.571429 29.714286q59.428571 0 113.428571-23.142857t93.428571-62.571429 62.571429-93.428571 23.142857-113.428571-23.142857-113.428571-62.571429-93.428571-93.428571-62.571429-113.428571-23.142857q-56 0-107.428571 20.285714t-91.428571 58l78.285714 78.857143q17.714286 17.142857 8 39.428571-9.714286 22.857143-33.714286 22.857143l-256 0q-14.857143 0-25.714286-10.857143t-10.857143-25.714286l0-256q0-24 22.857143-33.714286 22.285714-9.714286 39.428571 8l74.285714 73.714286q61.142857-57.714286 139.714286-89.428571t162.571429-31.714286q89.142857 0 170.285714 34.857143t140 93.714286 93.714286 140 34.857143 170.285714zm-365.714286-164.571429l0 256q0 8-5.142857 13.142857t-13.142857 5.142857l-182.857143 0q-8 0-13.142857-5.142857t-5.142857-13.142857l0-36.571429q0-8 5.142857-13.142857t13.142857-5.142857l128 0 0-201.142857q0-8 5.142857-13.142857t13.142857-5.142857l36.571429 0q8 0 13.142857 5.142857t5.142857 13.142857z" p-id="7954" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        c1f7: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "app-wrapper",
                        class: e.classObj
                    }, ["mobile" === e.device && e.sidebar.opened ? n("div", {
                        staticClass: "drawer-bg",
                        on: {
                            click: e.handleClickOutside
                        }
                    }) : e._e(), e._v(" "), n("NavBar", {
                        staticClass: "sidebar-container disabled-when-print"
                    }), e._v(" "), n("div", {
                        staticClass: "main-container",
                        class: {
                            hasTagsView: e.needTagsView
                        }
                    }, [n("div", {
                        staticClass: "disabled-when-print",
                        class: {
                            "fixed-header": e.fixedHeader
                        }
                    }, [n("NavHeader"), e._v(" "), e.needTagsView ? n("tags-view") : e._e()], 1), e._v(" "), n("app-main"), e._v(" "), n("Footer", {
                        staticClass: "disabled-when-print"
                    })], 1)], 1)
                },
                r = [],
                i = n("cd4a"),
                s = n("4360"),
                o = document,
                c = o.body,
                l = 992,
                u = {
                    watch: {
                        $route: function(e) {
                            "mobile" === this.device && this.sidebar.opened && s["a"].dispatch("app/closeSideBar", {
                                withoutAnimation: !1
                            })
                        }
                    },
                    beforeMount: function() {
                        window.addEventListener("resize", this.$_resizeHandler)
                    },
                    beforeDestroy: function() {
                        window.removeEventListener("resize", this.$_resizeHandler)
                    },
                    mounted: function() {
                        var e = this.$_isMobile();
                        e && (s["a"].dispatch("app/toggleDevice", "mobile"), s["a"].dispatch("app/closeSideBar", {
                            withoutAnimation: !0
                        }))
                    },
                    methods: {
                        $_isMobile: function() {
                            var e = c.getBoundingClientRect();
                            return e.width - 1 < l
                        },
                        $_resizeHandler: function() {
                            if (!document.hidden) {
                                var e = this.$_isMobile();
                                s["a"].dispatch("app/toggleDevice", e ? "mobile" : "desktop"), e && s["a"].dispatch("app/closeSideBar", {
                                    withoutAnimation: !0
                                })
                            }
                        }
                    }
                },
                d = {
                    name: "Layout",
                    components: {
                        NavBar: i["j"],
                        NavHeader: i["k"],
                        AppMain: i["a"],
                        Footer: i["b"],
                        TagsView: i["n"]
                    },
                    mixins: [u],
                    computed: {
                        sidebar: function() {
                            return this.$store.state.app.sidebar
                        },
                        device: function() {
                            return this.$store.state.app.device
                        },
                        fixedHeader: function() {
                            return this.$store.state.settings.fixedHeader
                        },
                        needTagsView: function() {
                            return !1
                        },
                        classObj: function() {
                            return {
                                hideSidebar: !this.sidebar.opened,
                                openSidebar: this.sidebar.opened,
                                withoutAnimation: this.sidebar.withoutAnimation,
                                mobile: "mobile" === this.device
                            }
                        }
                    },
                    methods: {
                        handleClickOutside: function() {
                            this.$store.dispatch("app/closeSideBar", {
                                withoutAnimation: !1
                            })
                        }
                    }
                },
                p = d,
                m = (n("6aa2"), n("2877")),
                h = Object(m["a"])(p, a, r, !1, null, "5077f320", null);
            t["a"] = h.exports
        },
        c459: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("2934"),
                r = function() {
                    return {
                        metaMap: {}
                    }
                },
                i = r(),
                s = {
                    SET_URL_META: function(e, t) {
                        var n = t.url,
                            a = t.meta;
                        e.metaMap[n] = a
                    }
                },
                o = {
                    getUrlMeta: function(e, t) {
                        var n = e.commit,
                            r = e.state,
                            i = t.url,
                            s = r.metaMap[i];
                        return new Promise(s ? function(e, t) {
                            e(s)
                        } : function(e, t) {
                            Object(a["b"])(i).then((function(t) {
                                n("SET_URL_META", {
                                    url: i,
                                    meta: t
                                }), e(t)
                            })).catch((function(e) {
                                t(e)
                            }))
                        })
                    }
                };
            t["default"] = {
                namespaced: !0,
                state: i,
                mutations: s,
                actions: o
            }
        },
        c4b9: function(e, t, n) {},
        c52e: function(e, t, n) {},
        c606: function(e, t, n) {},
        c653: function(e, t, n) {
            var a = {
                "./app.js": "d9cd",
                "./common.js": "c459",
                "./permission.js": "31c2",
                "./settings.js": "0781",
                "./table.js": "a14e",
                "./tagsView.js": "7509",
                "./users.js": "8ce5"
            };

            function r(e) {
                var t = i(e);
                return n(t)
            }

            function i(e) {
                var t = a[e];
                if (!(t + 1)) {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return t
            }
            r.keys = function() {
                return Object.keys(a)
            }, r.resolve = i, e.exports = r, r.id = "c653"
        },
        c8d7: function(e, t, n) {},
        c8f7: function(e, t, n) {},
        cc9a: function(e, t, n) {},
        cd4a: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        class: {
                            "has-logo": e.showLogo
                        }
                    }, [n("div", {
                        staticClass: "nav-header"
                    }, [e.showLogo ? n("logo", {
                        attrs: {
                            collapse: e.isCollapse
                        }
                    }) : e._e(), e._v(" "), n("Organization", {
                        attrs: {
                            "is-collapse": e.isCollapse
                        }
                    })], 1), e._v(" "), n("el-scrollbar", {
                        attrs: {
                            "wrap-class": "scrollbar-wrapper"
                        }
                    }, [n("el-menu", {
                        attrs: {
                            "default-active": e.activeMenu,
                            collapse: e.isCollapse,
                            "background-color": e.variables.menuBg,
                            "text-color": e.variables.menuText,
                            "text-weigth": e.variables.menuTextWeight,
                            "unique-opened": !0,
                            "active-text-color": e.variables.menuActiveText,
                            "collapse-transition": !1,
                            mode: "vertical"
                        }
                    }, e._l(e.permission_routes, (function(e) {
                        return n("sidebar-item", {
                            key: e.path,
                            attrs: {
                                item: e,
                                "base-path": e.path
                            }
                        })
                    })), 1)], 1)], 1)
                },
                r = [],
                i = (n("1c01"), n("58b2"), n("8e6e"), n("f3e2"), n("d25f"), n("ac6a"), n("456d"), n("bd86")),
                s = n("2f62"),
                o = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "sidebar-logo-container",
                        class: {
                            collapse: e.collapse
                        }
                    }, [n("transition", {
                        attrs: {
                            name: "sidebarLogoFade"
                        }
                    }, [e.collapse ? n("router-link", {
                        key: "collapse",
                        staticClass: "sidebar-logo-link",
                        attrs: {
                            to: "/"
                        }
                    }, [n("img", {
                        staticClass: "sidebar-logo",
                        attrs: {
                            src: e.logoSrc
                        }
                    })]) : n("router-link", {
                        key: "expand",
                        staticClass: "sidebar-logo-link",
                        attrs: {
                            to: "/"
                        }
                    }, [n("img", {
                        staticClass: "sidebar-logo-text",
                        attrs: {
                            src: e.logoTextSrc
                        }
                    })])], 1)], 1)
                },
                c = [];

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        Object(i["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d, p, m = {
                    name: "SidebarLogo",
                    props: {
                        collapse: {
                            type: Boolean,
                            required: !0
                        }
                    },
                    data: function() {
                        return {}
                    },
                    computed: u({}, Object(s["b"])(["publicSettings"]), {
                        logoTextSrc: function() {
                            return this.publicSettings.LOGO_URLS.logo_index
                        },
                        logoSrc: function() {
                            return this.publicSettings.LOGO_URLS.logo_logout
                        }
                    }),
                    created: function() {}
                },
                h = m,
                f = (n("355b"), n("2877")),
                g = Object(f["a"])(h, o, c, !1, null, "3b0b366c", null),
                b = g.exports,
                v = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return e.item.hidden ? e._e() : n("div", [!e.hasOneShowingChild(e.item.children, e.item) || e.onlyOneChild.children && !e.onlyOneChild.noShowingChildren || e.item.alwaysShow ? n("el-submenu", {
                        ref: "subMenu",
                        staticClass: "el-submenu-sidebar",
                        attrs: {
                            index: e.resolvePath(e.item.path),
                            "popper-append-to-body": ""
                        }
                    }, [n("template", {
                        slot: "title"
                    }, [e.item.meta ? n("item", {
                        attrs: {
                            icon: e.item.meta && e.item.meta.icon,
                            title: e.item.meta.title
                        }
                    }) : e._e()], 1), e._v(" "), e._l(e.item.children, (function(t) {
                        return n("sidebar-item", {
                            key: t.path,
                            staticClass: "nest-menu",
                            attrs: {
                                "is-nest": !0,
                                item: t,
                                "base-path": e.resolvePath(t.path)
                            }
                        })
                    }))], 2) : [e.onlyOneChild.meta ? n("app-link", {
                        attrs: {
                            to: e.resolvePath(e.onlyOneChild.path)
                        }
                    }, [n("el-menu-item", {
                        class: {
                            "submenu-title-noDropdown": !e.isNest
                        },
                        attrs: {
                            index: e.resolvePath(e.onlyOneChild.path)
                        }
                    }, [n("item", {
                        attrs: {
                            icon: e.onlyOneChild.meta.icon || e.item.meta && e.item.meta.icon,
                            title: e.onlyOneChild.meta.title
                        }
                    })], 1)], 1) : e._e()]], 2)
                },
                y = [],
                w = n("df7c"),
                A = n.n(w),
                S = n("61f7"),
                C = {
                    name: "MenuItem",
                    functional: !0,
                    props: {
                        icon: {
                            type: String,
                            default: ""
                        },
                        title: {
                            type: String,
                            default: ""
                        }
                    },
                    render: function(e, t) {
                        var n = t.props,
                            a = n.icon,
                            r = n.title,
                            i = [];
                        if (a) {
                            var s = "fa fa-" + a;
                            i.push(e("i", {
                                class: s
                            }))
                        }
                        return r && i.push(e("span", {
                            slot: "title"
                        }, [r])), i
                    }
                },
                k = C,
                O = Object(f["a"])(k, d, p, !1, null, null, null),
                P = O.exports,
                T = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("component", e._b({}, "component", e.linkProps(e.to), !1), [e._t("default")], 2)
                },
                _ = [],
                x = {
                    props: {
                        to: {
                            type: String,
                            required: !0
                        }
                    },
                    methods: {
                        linkProps: function(e) {
                            return Object(S["a"])(e) ? {
                                is: "a",
                                href: e,
                                target: "_blank",
                                rel: "noopener"
                            } : {
                                is: "router-link",
                                to: e
                            }
                        }
                    }
                },
                D = x,
                j = Object(f["a"])(D, T, _, !1, null, null, null),
                U = j.exports,
                E = {
                    computed: {
                        device: function() {
                            return this.$store.state.app.device
                        }
                    },
                    mounted: function() {
                        this.fixBugIniOS()
                    },
                    methods: {
                        fixBugIniOS: function() {
                            var e = this,
                                t = this.$refs.subMenu;
                            if (t) {
                                var n = t.handleMouseleave;
                                t.handleMouseleave = function(t) {
                                    "mobile" !== e.device && n(t)
                                }
                            }
                        }
                    }
                };

            function M(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(n), !0).forEach((function(t) {
                        Object(i["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var L = {
                    name: "SidebarItem",
                    components: {
                        Item: P,
                        AppLink: U
                    },
                    mixins: [E],
                    props: {
                        item: {
                            type: Object,
                            required: !0
                        },
                        isNest: {
                            type: Boolean,
                            default: !1
                        },
                        basePath: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function() {
                        return this.onlyOneChild = null, {}
                    },
                    methods: {
                        hasOneShowingChild: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                n = arguments.length > 1 ? arguments[1] : void 0,
                                a = t.filter((function(t) {
                                    return !t.hidden && (e.onlyOneChild = t, !0)
                                }));
                            return 1 === a.length || 0 === a.length && (this.onlyOneChild = R({}, n, {
                                path: "",
                                noShowingChildren: !0
                            }), !0)
                        },
                        resolvePath: function(e) {
                            return Object(S["a"])(e) ? e : Object(S["a"])(this.basePath) ? this.basePath : A.a.resolve(this.basePath, e)
                        }
                    }
                },
                $ = L,
                I = Object(f["a"])($, v, y, !1, null, null, null),
                F = I.exports,
                V = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("transition", {
                        attrs: {
                            name: "sidebarLogoFade"
                        }
                    }, [e.needShow() ? n("el-select", {
                        staticClass: "org-select",
                        attrs: {
                            value: e.currentOrg.id,
                            filterable: "",
                            placeholder: e.$t("common.Select")
                        },
                        on: {
                            change: e.changeOrg
                        }
                    }, [n("template", {
                        slot: "prefix"
                    }, [n("i", {
                        staticClass: "fa fa-bookmark"
                    })]), e._v(" "), e._l(e.userAdminOrgList, (function(t) {
                        return n("el-option", {
                            key: t.id,
                            attrs: {
                                selected: t.id === e.currentOrg.id,
                                label: t.name,
                                value: t.id
                            }
                        })
                    }))], 2) : e._e()], 1)
                },
                N = [],
                B = n("84ca"),
                q = n("be20");

            function H(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? H(Object(n), !0).forEach((function(t) {
                        Object(i["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var G = {
                    props: {
                        isCollapse: {
                            type: Boolean,
                            default: function() {
                                return !0
                            }
                        }
                    },
                    computed: z({}, Object(s["b"])(["currentOrg", "currentRole", "userAdminOrgList"]), {
                        inAdminPage: function() {
                            return (this.currentRole & B["a"].PERM_USE) !== B["a"].PERM_USE
                        }
                    }),
                    methods: {
                        needShow: function() {
                            var e = this.$store.getters.hasValidLicense;
                            return !this.isCollapse && this.inAdminPage && e
                        },
                        changeOrg: function(e) {
                            q["a"].changeOrg(e)
                        }
                    }
                },
                K = G,
                W = (n("e50e"), Object(f["a"])(K, V, N, !1, null, "4180ad58", null)),
                Q = W.exports,
                J = n("cf1e2"),
                Y = n.n(J);

            function X(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? X(Object(n), !0).forEach((function(t) {
                        Object(i["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ee = {
                    components: {
                        SidebarItem: F,
                        Logo: b,
                        Organization: Q
                    },
                    computed: Z({}, Object(s["b"])(["permission_routes", "sidebar"]), {
                        activeMenu: function() {
                            var e = this.$route,
                                t = e.meta,
                                n = e.path;
                            return t.activeMenu ? t.activeMenu : n
                        },
                        showLogo: function() {
                            return this.$store.state.settings.sidebarLogo
                        },
                        variables: function() {
                            return Y.a
                        },
                        isCollapse: function() {
                            return !this.sidebar.opened
                        }
                    })
                },
                te = ee,
                ne = (n("4b27"), Object(f["a"])(te, a, r, !1, null, "1b14a455", null)),
                ae = ne.exports,
                re = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "navbar"
                    }, [n("div", {
                        staticClass: "navbar-header"
                    }, [n("hamburger", {
                        staticClass: "hamburger-container",
                        attrs: {
                            "is-active": e.sidebar.opened
                        },
                        on: {
                            toggleClick: e.toggleSideBar
                        }
                    })], 1), e._v(" "), n("ul", {
                        staticClass: "navbar-right"
                    }, [n("li", {
                        staticClass: "header-item header-icon"
                    }, [n("SiteMessages")], 1), e._v(" "), n("li", {
                        staticClass: "header-item",
                        staticStyle: {
                            "margin-left": "10px"
                        }
                    }, [n("Help")], 1), e._v(" "), n("li", {
                        staticClass: "header-item"
                    }, [n("Language")], 1), e._v(" "), e.showTickets ? n("li", {
                        staticClass: "header-item"
                    }, [n("Tickets")], 1) : e._e(), e._v(" "), n("li", {
                        staticClass: "header-item"
                    }, [n("WebTerminal")], 1), e._v(" "), n("li", {
                        staticClass: "header-item header-profile"
                    }, [n("AccountDropdown")], 1)])])
                },
                ie = [],
                se = (n("6762"), n("2fdb"), n("4f1e")),
                oe = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "header-tools header-profile"
                    }, [n("el-dropdown", {
                        attrs: {
                            trigger: "click"
                        },
                        on: {
                            command: e.handleClick
                        }
                    }, [n("span", {
                        staticClass: "el-dropdown-link"
                    }, [n("el-avatar", {
                        staticClass: "header-avatar",
                        attrs: {
                            src: e.avatarUrl
                        }
                    }), e._v("\n      " + e._s(e.currentUser.name) + "\n      "), n("i", {
                        staticClass: "el-icon-arrow-down el-icon--right"
                    })], 1), e._v(" "), n("el-dropdown-menu", {
                        attrs: {
                            slot: "dropdown"
                        },
                        slot: "dropdown"
                    }, [n("el-dropdown-item", {
                        attrs: {
                            icon: "el-icon-user",
                            command: "profile"
                        }
                    }, [e._v(e._s(e.$t("common.nav.Profile")))]), e._v(" "), e.currentOrgRoles.length > 1 || e.hasAdminOrg ? [e.isInAdminRole ? n("el-dropdown-item", {
                        attrs: {
                            icon: "el-icon-guide",
                            command: "userPage"
                        }
                    }, [e._v(e._s(e.$t("common.nav.UserPage")))]) : n("el-dropdown-item", {
                        attrs: {
                            icon: "el-icon-guide",
                            command: "adminPage"
                        }
                    }, [e._v(e._s(e.$t("common.nav.AdminPage")))])] : e._e(), e._v(" "), n("el-dropdown-item", {
                        attrs: {
                            icon: "el-icon-key",
                            command: "apiKey"
                        }
                    }, [e._v(e._s(e.$t("common.nav.APIKey")))]), e._v(" "), n("el-dropdown-item", {
                        attrs: {
                            divided: "",
                            command: "logout"
                        }
                    }, [e._v(e._s(e.$t("common.nav.Logout")))])], 2)], 1), e._v(" "), n("ApiKey", {
                        ref: "api"
                    })], 1)
                },
                ce = [],
                le = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("Dialog", {
                        attrs: {
                            "destroy-on-close": !0,
                            width: "60%",
                            visible: e.showDialog,
                            title: this.$t("setting.ApiKeyList"),
                            "show-cancel": !1,
                            "show-confirm": !1
                        },
                        on: {
                            "update:visible": function(t) {
                                e.showDialog = t
                            }
                        }
                    }, [n("div", [n("el-alert", {
                        attrs: {
                            type: "success"
                        }
                    }, [e._v(" " + e._s(e.helpMessage) + " ")]), e._v(" "), n("ListTable", {
                        ref: "ListTable",
                        attrs: {
                            "table-config": e.tableConfig,
                            "header-actions": e.headerActions
                        }
                    })], 1)])], 1)
                },
                ue = [],
                de = (n("d92a"), n("9039")),
                pe = n("579c"),
                me = n("e975"),
                he = {
                    name: "ApiKey",
                    components: {
                        Dialog: de["a"],
                        ListTable: pe["a"]
                    },
                    props: {},
                    data: function() {
                        return {
                            showDialog: !1,
                            helpMessage: this.$t("setting.helpText.ApiKeyList"),
                            tableConfig: {
                                hasSelection: !0,
                                url: "/api/v1/authentication/access-keys/",
                                columns: ["id", "secret", "is_active", "date_created", "actions"],
                                columnsMeta: {
                                    id: {
                                        label: "AccessKeyID",
                                        width: "315px"
                                    },
                                    secret: {
                                        label: "AccessKeySecret",
                                        width: "315px",
                                        formatter: me["j"]
                                    },
                                    is_active: {
                                        width: "80px"
                                    },
                                    date_created: {
                                        label: this.$t("common.dateCreated"),
                                        showOverflowTooltip: !0,
                                        formatter: me["d"]
                                    },
                                    actions: {
                                        prop: "",
                                        formatterArgs: {
                                            hasUpdate: !1,
                                            onDelete: function(e) {
                                                var t = this,
                                                    n = e.row;
                                                e.col, e.cellValue, e.reload;
                                                this.$axios.delete("/api/v1/authentication/access-keys/".concat(n.id, "/")).then((function(e) {
                                                    t.$refs.ListTable.reloadTable(), t.$message.success(t.$t("common.deleteSuccessMsg"))
                                                })).catch((function(e) {
                                                    t.$message.error(t.$t("common.deleteErrorMsg") + " " + e)
                                                }))
                                            }.bind(this),
                                            extraActions: [{
                                                name: "Enabled",
                                                title: this.$t("common.On/Off"),
                                                type: "info",
                                                callback: function(e) {
                                                    var t = this,
                                                        n = e.row;
                                                    e.col, e.cellValue, e.reload;
                                                    this.$axios.patch("/api/v1/authentication/access-keys/".concat(n.id, "/"), {
                                                        is_active: !n.is_active
                                                    }).then((function(e) {
                                                        t.$refs.ListTable.reloadTable(), t.$message.success(t.$t("common.updateSuccessMsg"))
                                                    })).catch((function(e) {
                                                        t.$message.error(t.$t("common.updateErrorMsg " + e))
                                                    }))
                                                }.bind(this)
                                            }]
                                        }
                                    }
                                }
                            },
                            headerActions: {
                                hasSearch: !0,
                                hasRightActions: !0,
                                hasRefresh: !0,
                                hasExport: !1,
                                hasImport: !1,
                                hasBulkDelete: !1,
                                hasCreate: !1,
                                extraActions: [{
                                    name: this.$t("setting.Create"),
                                    title: this.$t("setting.Create"),
                                    type: "primary",
                                    can: !0,
                                    callback: function() {
                                        var e = this;
                                        this.$axios.post("/api/v1/authentication/access-keys/").then((function(t) {
                                            e.$refs.ListTable.reloadTable(), e.$message.success(e.$t("common.updateSuccessMsg"))
                                        })).catch((function(t) {
                                            e.$message.error(e.$t("common.updateErrorMsg " + t))
                                        }))
                                    }.bind(this)
                                }]
                            }
                        }
                    },
                    methods: {
                        showApi: function() {
                            this.showDialog = !this.showDialog
                        }
                    }
                },
                fe = he,
                ge = (n("f9bc"), Object(f["a"])(fe, le, ue, !1, null, "9378e934", null)),
                be = ge.exports;

            function ve(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function ye(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ve(Object(n), !0).forEach((function(t) {
                        Object(i["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ve(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var we = {
                    name: "AccountDropdown",
                    components: {
                        ApiKey: be
                    },
                    data: function() {
                        return {
                            avatarUrl: n("059c"),
                            showApiKey: !1
                        }
                    },
                    computed: ye({}, Object(s["b"])(["currentUser", "currentRole", "currentOrgRoles", "userAdminOrgList", "currentOrgPerms"]), {
                        isInAdminRole: function() {
                            var e = B["a"].hasPerm(B["a"].ADMIN_PAGE_REQUIRE_PERM_MIN, this.currentRole);
                            return e
                        },
                        hasAdminOrg: function() {
                            return this.userAdminOrgList.length > 0
                        },
                        adminPageRequirePerm: function() {
                            return B["a"].PERM_SUPER | B["a"].PERM_ADMIN | B["a"].PERM_AUDIT
                        },
                        hasCurrentOrgAdminPagePerm: function() {
                            return B["a"].hasAdminPagePerm(this.currentOrgPerms)
                        },
                        currentOrgUsePagePerm: function() {
                            var e = B["a"].PERM_USE;
                            return e & this.currentOrgPerms
                        }
                    }),
                    methods: {
                        handleClick: function(e) {
                            switch (e) {
                                case "profile":
                                    this.$router.push({
                                        name: "UserProfile"
                                    });
                                    break;
                                case "adminPage":
                                    if (this.hasCurrentOrgAdminPagePerm) {
                                        var t = B["a"].getUserInAdminPagePerm(this.currentOrgPerms);
                                        this.$store.dispatch("users/setCurrentRole", t), window.location.href = "/ui/"
                                    } else q["a"].change2PropOrg();
                                    break;
                                case "userPage":
                                    this.currentOrgUsePagePerm && (this.$store.dispatch("users/setCurrentRole", B["a"].USER), window.location.href = "/ui/");
                                    break;
                                case "logout":
                                    this.logout(), window.location.href = "".concat("/core/auth/logout/", "?next=").concat(this.$route.fullPath);
                                    break;
                                case "apiKey":
                                    this.$refs.api.showApi();
                                    break
                            }
                        },
                        logout: function() {}
                    }
                },
                Ae = we,
                Se = (n("3a7c"), Object(f["a"])(Ae, oe, ce, !1, null, "ed7d5c86", null)),
                Ce = Se.exports,
                ke = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("el-badge", {
                        attrs: {
                            value: e.unreadMsgCount,
                            hidden: 0 === e.unreadMsgCount,
                            max: 99,
                            size: "mini",
                            type: "primary"
                        }
                    }, [n("a", {
                        staticStyle: {
                            color: "#606266 !important",
                            width: "30px"
                        },
                        on: {
                            click: e.toggleDrawer
                        }
                    }, [n("i", {
                        staticClass: "el-icon-message",
                        staticStyle: {
                            "font-size": "18px"
                        }
                    })])]), e._v(" "), n("el-drawer", {
                        attrs: {
                            visible: e.show,
                            "before-close": e.handleClose,
                            modal: !1,
                            title: e.$t("notifications.SiteMessage"),
                            "custom-class": "site-msg",
                            size: "25%"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.show = t
                            },
                            open: e.getMessages
                        }
                    }, [0 !== e.unreadMsgCount ? n("div", {
                        staticClass: "msg-list"
                    }, e._l(e.messages, (function(t) {
                        return n("div", {
                            key: t.id,
                            staticClass: "msg-item",
                            class: t["has_read"] ? "msg-read" : "msg-unread",
                            on: {
                                mouseover: function(n) {
                                    e.hoverMsgId = t.id
                                },
                                mouseleave: function(t) {
                                    e.hoverMsgId = ""
                                },
                                click: function(n) {
                                    return e.showMsgDetail(t)
                                }
                            }
                        }, [n("div", {
                            staticClass: "msg-item-head"
                        }, [n("span", {
                            staticClass: "msg-item-head-type"
                        }, [n("i", {
                            staticClass: "fa msg-icon",
                            class: t["has_read"] ? "fa-envelope-open-o" : "fa-envelope"
                        }), e._v("\n            " + e._s(t.subject) + "\n          ")]), e._v(" "), e.hoverMsgId !== t.id || t["has_read"] ? n("span", {
                            staticClass: "msg-item-head-time"
                        }, [e._v("\n            " + e._s(e.formatDate(t.date_created)) + "\n          ")]) : n("div", {
                            staticClass: "msg-item-read-btn",
                            on: {
                                click: function(n) {
                                    return n.stopPropagation(), e.markAsRead(t)
                                }
                            }
                        }, [n("a", [e._v(e._s(e.$t("notifications.MarkAsRead")))])])]), e._v(" "), n("div", {
                            staticClass: "msg-item-txt"
                        }, [n("span", {
                            domProps: {
                                innerHTML: e._s(t.message)
                            }
                        })])])
                    })), 0) : n("div", {
                        staticClass: "no-msg"
                    }, [e._v("\n      " + e._s(e.$t("notifications.NoUnreadMsg")) + "\n    ")])]), e._v(" "), e.msgDetailVisible ? n("Dialog", {
                        attrs: {
                            visible: e.msgDetailVisible,
                            title: "",
                            "close-on-click-modal": !1,
                            "confirm-title": e.$t("notifications.MarkAsRead")
                        },
                        on: {
                            "update:visible": function(t) {
                                e.msgDetailVisible = t
                            },
                            confirm: function(t) {
                                return e.markAsRead(e.currentMsg)
                            },
                            cancel: e.cancelRead
                        }
                    }, [n("div", {
                        staticClass: "msg-detail"
                    }, [n("div", {
                        staticClass: "msg-detail-head"
                    }, [n("h3", [e._v(e._s(e.currentMsg.subject))]), e._v(" "), n("h5", [n("span", {
                        staticClass: "msg-detail-time"
                    }, [e._v(e._s(e.formatDate(e.currentMsg.date_created)))])])]), e._v(" "), n("div", {
                        staticClass: "msg-detail-txt"
                    }, [n("span", {
                        domProps: {
                            innerHTML: e._s(e.currentMsg.message)
                        }
                    })])])]) : e._e()], 1)
                },
                Oe = [],
                Pe = n("75fc"),
                Te = n("cf45"),
                _e = {
                    name: "SiteMessages",
                    components: {
                        Dialog: de["a"]
                    },
                    data: function() {
                        return {
                            show: !1,
                            messages: [],
                            hoverMsgId: "",
                            msgDetailVisible: !1,
                            currentMsg: null,
                            unreadMsgCount: 0
                        }
                    },
                    mounted: function() {
                        this.enablePullMsgCount()
                    },
                    methods: {
                        handleClose: function() {
                            this.show = !1
                        },
                        toggleDrawer: function() {
                            this.show = !this.show
                        },
                        showMsgDetail: function(e) {
                            this.currentMsg = e, this.msgDetailVisible = !0
                        },
                        getMessages: function() {
                            var e = this,
                                t = "/api/v1/notifications/site-message/?offset=0&limit=15&has_read=false";
                            this.$axios.get(t).then((function(t) {
                                e.messages = Object(Pe["a"])(t.results), e.unreadMsgCount = t.count
                            }))
                        },
                        formatDate: function(e) {
                            if (!e) return "";
                            var t = new Date(e),
                                n = new Date;
                            return n.getTime() - t.getTime() > 6048e5 ? Object(Te["p"])(e) : this.$moment(t).fromNow()
                        },
                        markAsRead: function(e) {
                            var t = this,
                                n = "/api/v1/notifications/site-message/mark-as-read/";
                            this.$axios.patch(n, {
                                ids: [e.id]
                            }).then((function(e) {
                                t.msgDetailVisible = !1, t.getMessages()
                            })).catch((function(e) {
                                t.$message(e.detail)
                            }))
                        },
                        cancelRead: function() {
                            this.msgDetailVisible = !1
                        },
                        enablePullMsgCount: function() {
                            var e = this,
                                t = "https:" === document.location.protocol ? "wss" : "ws",
                                n = document.location.port ? ":" + document.location.port : "",
                                a = "/ws/notifications/site-msg/",
                                r = t + "://" + document.location.hostname + n + a,
                                i = new WebSocket(r);
                            i.onopen = function(t) {
                                e.$log.debug("Websocket connected: ", t)
                            }, i.onmessage = function(t) {
                                try {
                                    var n = JSON.parse(t.data);
                                    e.$log.debug("Data: ", n);
                                    var a = n["unread_count"];
                                    void 0 !== a && (e.unreadMsgCount = a)
                                } catch (r) {
                                    e.$log.debug("Recv site message error")
                                }
                            }, i.onerror = function(t) {
                                e.$message.error(e.$t("common.ConnectWebSocketError")), e.$log.debug("site message ws error: ", t)
                            }
                        }
                    }
                },
                xe = _e,
                De = (n("eda1"), Object(f["a"])(xe, ke, Oe, !1, null, "79078207", null)),
                je = De.exports,
                Ue = function() {
                    
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("el-dropdown", {
                        attrs: {
                            trigger: "click"
                        },
                        on: {
                            command: e.handleCommand
                        }
                    }, [n("span", {
                        staticClass: "el-dropdown-link"
                    }, [e._v("\n    " + e._s(e.$t("common.nav.Help"))), n("i", {
                        staticClass: "el-icon-arrow-down el-icon--right"
                    })]), e._v(" "), n("el-dropdown-menu", {
                        attrs: {
                            slot: "dropdown"
                        },
                        slot: "dropdown"
                    }, [n("el-dropdown-item", {
                        attrs: {
                            command: "docs"
                        }
                    }, [e._v(e._s(e.$t("common.nav.Docs")))]), e._v(" "), n("el-dropdown-item", {
                        attrs: {
                            command: "support"
                        }
                    }, [e._v(e._s(e.$t("common.nav.Support")))]), e._v(" "), e.hasLicence ? e._e() : n("el-dropdown-item", {
                        attrs: {
                            command: "enterprise"
                        }
                    }, [e._v(e._s(e.$t("common.nav.EnterpriseEdition")))])], 1)], 1)
                },
                Ee = [],
                Me = {
                    name: "Help",
                    data: function() {
                        return {
                            URLSite: {
                                HELP_DOCUMENT_URL: "",
                                HELP_SUPPORT_URL: ""
                            }
                        }
                    },
                    computed: {
                        hasLicence: function() {
                            return this.$store.getters.hasValidLicense
                        }
                    },
                    created: function() {
                        this.initHelpURL()
                    },
                    methods: {
                        initHelpURL: function() {
                            this.URLSite.HELP_DOCUMENT_URL = this.$store.getters.publicSettings.HELP_DOCUMENT_URL, this.URLSite.HELP_SUPPORT_URL = this.$store.getters.publicSettings.HELP_SUPPORT_URL
                        },
                        handleCommand: function(e) {
                            switch (e) {
                            /*Dix
                                case "support":
                                    window.open(this.URLSite.HELP_SUPPORT_URL, "_blank");
                                    break;
                                case "enterprise":
                                    window.open("https://jumpserver.org/enterprise.html", "_blank");
                                    break;
                                default:
                                    window.open(this.URLSite.HELP_DOCUMENT_URL, "_blank");
                                    break
                                    */
                            }
                        }
                    }
                },
                Re = Me,
                Le = Object(f["a"])(Re, Ue, Ee, !1, null, "0e5239d9", null),
                $e = Le.exports,
                Ie = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("el-dropdown", {
                        attrs: {
                            trigger: "click"
                        }
                    }, [n("span", {
                        staticClass: "el-dropdown-link"
                    }, [e._v("\n    " + e._s(e.currentLang.title)), n("i", {
                        staticClass: "el-icon-arrow-down el-icon--right"
                    })]), e._v(" "), n("el-dropdown-menu", {
                        attrs: {
                            slot: "dropdown"
                        },
                        slot: "dropdown"
                    }, e._l(e.supportLanguages, (function(t) {
                        return n("el-dropdown-item", {
                            key: t.code,
                            nativeOn: {
                                click: function(n) {
                                    return e.changeLangTo(t)
                                }
                            }
                        }, [e._v(e._s(t.title))])
                    })), 1)], 1)
                },
                Fe = [],
                Ve = (n("a481"), n("57e7"), n("0cd8"), {
                    name: "Language",
                    data: function() {
                        return {
                            LANG_COOKIE_NAME: "django_language",
                            supportLanguages: [{
                                title: "English",
                                code: "en",
                                cookieCode: "en"
                            } /*Dix,{title:"中文(简体)",code:"cn",cookieCode:"zh-hans"}*/ ]
                        }
                    },
                    computed: {
                        supportedLangMapper: function() {
                            return this.supportLanguages.reduce((function(e, t) {
                                return e[t.code] = t, e
                            }))
                        },
                        currentLang: function() {
                            var e = this.getLangCode(),
                                t = this.supportedLangMapper[e];
                            return t || (t = this.supportLanguages[0]), t
                        }
                    },
                    mounted: function() {
                        this.changeLang(), this.changeMomentLang()
                    },
                    methods: {
                        changeLang: function() {
                            this.currentLang.code !== this.$i18n.locale && this.changeLangTo(this.currentLang)
                        },
                        changeMomentLang: function() {
                            this.currentLang.code.indexOf("en") > -1 ? this.$moment.locale("en") : this.$moment.locale("zh-cn")
                        },
                        changeLangTo: function(e) {
                            this.$i18n.locale = e.code, localStorage.setItem("lang", e.code), this.$cookie.set(this.LANG_COOKIE_NAME, e.cookieCode), window.location.reload()
                        },
                        getLangCode: function() {
                            var e = localStorage.lang;
                            return e || (e = this.$cookie.get(this.LANG_COOKIE_NAME)), e || (e = navigator.language || navigator.userLanguage), e = e.substr(0, 2), e = e.replace("zh", "cn"), e
                        }
                    }
                }),
                Ne = Ve,
                Be = Object(f["a"])(Ne, Ie, Fe, !1, null, "7ef9e94e", null),
                qe = Be.exports,
                He = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("el-link", {
                        staticClass: "el-link",
                        attrs: {
                            href: e.webTerminalUrl,
                            target: "_blank"
                        }
                    }, [e._v(e._s(e.$t("route.WebTerminal")))])
                },
                ze = [],
                Ge = (n("78ce"), {
                    name: "WebTerminal",
                    computed: {
                        webTerminalUrl: function() {
                            return "".concat(Te["a"], "/luna/?_=").concat(Date.now())
                        }
                    }
                }),
                Ke = Ge,
                We = (n("d7ba"), Object(f["a"])(Ke, He, ze, !1, null, "35d3ceb9", null)),
                Qe = We.exports,
                Je = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("el-badge", {
                        attrs: {
                            value: e.assignedTicketCount,
                            hidden: 0 === e.assignedTicketCount,
                            size: "mini",
                            type: "primary"
                        }
                    }, [n("el-link", {
                        staticClass: "el-link",
                        attrs: {
                            target: "_blank"
                        },
                        on: {
                            click: e.goToTickets
                        }
                    }, [e._v(e._s(e.$t("route.Ticket")))])], 1)], 1)
                },
                Ye = [],
                Xe = n("59ce");

            function Ze(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function et(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ze(Object(n), !0).forEach((function(t) {
                        Object(i["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ze(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var tt = {
                    name: "WebTerminal",
                    data: function() {
                        return {
                            assignedTicketCount: 0
                        }
                    },
                    computed: et({}, Object(s["b"])(["currentUser"])),
                    created: function() {
                        this.ticketsOpenedCount()
                    },
                    methods: {
                        ticketsOpenedCount: function() {
                            var e = this;
                            Object(Xe["a"])(this.currentUser.id).then((function(t) {
                                e.assignedTicketCount = t.count
                            }))
                        },
                        goToTickets: function() {
                            this.$router.push({
                                name: "TicketList"
                            })
                        }
                    }
                },
                nt = tt,
                at = (n("6ce4"), Object(f["a"])(nt, Je, Ye, !1, null, "5b135658", null)),
                rt = at.exports;

            function it(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function st(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? it(Object(n), !0).forEach((function(t) {
                        Object(i["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : it(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ot = {
                    components: {
                        Hamburger: se["a"],
                        AccountDropdown: Ce,
                        Language: qe,
                        Help: $e,
                        Tickets: rt,
                        WebTerminal: Qe,
                        SiteMessages: je
                    },
                    data: function() {
                        return {}
                    },
                    computed: st({}, Object(s["b"])(["sidebar", "publicSettings", "currentOrgRoles"]), {
                        isOrgAuditor: function() {
                            return B["a"].getRolesDisplay(this.currentOrgRoles).includes("OrgAuditor") || B["a"].getRolesDisplay(this.currentOrgRoles).includes("Auditor")
                        },
                        showTickets: function() {
                            return this.publicSettings.TICKETS_ENABLED && this.publicSettings["XPACK_LICENSE_IS_VALID"]
                        }
                    }),
                    methods: {
                        toggleSideBar: function() {
                            this.$store.dispatch("app/toggleSideBar")
                        }
                    }
                },
                ct = ot,
                lt = (n("e535"), Object(f["a"])(ct, re, ie, !1, null, "11d444d5", null)),
                ut = lt.exports,
                dt = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("section", {
                        staticClass: "app-main"
                    }, [n("transition", {
                        attrs: {
                            name: "fade-transform",
                            mode: "out-in"
                        }
                    }, [n("keep-alive", {
                        attrs: {
                            include: e.cachedViews
                        }
                    }, [n("router-view", {
                        key: e.key
                    })], 1)], 1)], 1)
                },
                pt = [],
                mt = {
                    name: "AppMain",
                    computed: {
                        key: function() {
                            return this.$route.path
                        },
                        cachedViews: function() {
                            return this.$store.state.tagsView.cachedViews
                        }
                    }
                },
                ht = mt,
                ft = (n("ecea"), n("028b"), Object(f["a"])(ht, dt, pt, !1, null, "37320ee8", null)),
                gt = ft.exports,
                bt = n("83b2"),
                vt = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "tags-view-container",
                        attrs: {
                            id: "tags-view-container"
                        }
                    }, [n("scroll-pane", {
                        ref: "scrollPane",
                        staticClass: "tags-view-wrapper"
                    }, e._l(e.visitedViews, (function(t) {
                        return n("router-link", {
                            key: t.path,
                            ref: "tag",
                            refInFor: !0,
                            staticClass: "tags-view-item",
                            class: e.isActive(t) ? "active" : "",
                            attrs: {
                                to: {
                                    path: t.path,
                                    query: t.query,
                                    fullPath: t.fullPath
                                },
                                tag: "span"
                            },
                            nativeOn: {
                                mouseup: function(n) {
                                    if ("button" in n && 1 !== n.button) return null;
                                    !e.isAffix(t) && e.closeSelectedTag(t)
                                },
                                contextmenu: function(n) {
                                    return n.preventDefault(), e.openMenu(t, n)
                                }
                            }
                        }, [e._v("\n      " + e._s(t.title) + "\n      "), e.isAffix(t) ? e._e() : n("span", {
                            staticClass: "el-icon-close",
                            on: {
                                click: function(n) {
                                    return n.preventDefault(), n.stopPropagation(), e.closeSelectedTag(t)
                                }
                            }
                        })])
                    })), 1), e._v(" "), n("ul", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.visible,
                            expression: "visible"
                        }],
                        staticClass: "contextmenu",
                        style: {
                            left: e.left + "px",
                            top: e.top + "px"
                        }
                    }, [n("li", {
                        on: {
                            click: function(t) {
                                return e.refreshSelectedTag(e.selectedTag)
                            }
                        }
                    }, [e._v("Refresh")]), e._v(" "), e.isAffix(e.selectedTag) ? e._e() : n("li", {
                        on: {
                            click: function(t) {
                                return e.closeSelectedTag(e.selectedTag)
                            }
                        }
                    }, [e._v("Close")]), e._v(" "), n("li", {
                        on: {
                            click: e.closeOthersTags
                        }
                    }, [e._v("Close Others")]), e._v(" "), n("li", {
                        on: {
                            click: function(t) {
                                return e.closeAllTags(e.selectedTag)
                            }
                        }
                    }, [e._v("Close All")])])], 1)
                },
                yt = [],
                wt = (n("759f"), n("ac4d"), n("8a81"), n("7f7f"), function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("el-scrollbar", {
                        ref: "scrollContainer",
                        staticClass: "scroll-container",
                        attrs: {
                            vertical: !1
                        },
                        nativeOn: {
                            wheel: function(t) {
                                return t.preventDefault(), e.handleScroll(t)
                            }
                        }
                    }, [e._t("default")], 2)
                }),
                At = [],
                St = (n("20d6"), 4),
                Ct = {
                    name: "ScrollPane",
                    data: function() {
                        return {
                            left: 0
                        }
                    },
                    computed: {
                        scrollWrapper: function() {
                            return this.$refs.scrollContainer.$refs.wrap
                        }
                    },
                    methods: {
                        handleScroll: function(e) {
                            var t = e.wheelDelta || 40 * -e.deltaY,
                                n = this.scrollWrapper;
                            n.scrollLeft = n.scrollLeft + t / 4
                        },
                        moveToTarget: function(e) {
                            var t = this.$refs.scrollContainer.$el,
                                n = t.offsetWidth,
                                a = this.scrollWrapper,
                                r = this.$parent.$refs.tag,
                                i = null,
                                s = null;
                            if (r.length > 0 && (i = r[0], s = r[r.length - 1]), i === e) a.scrollLeft = 0;
                            else if (s === e) a.scrollLeft = a.scrollWidth - n;
                            else {
                                var o = r.findIndex((function(t) {
                                        return t === e
                                    })),
                                    c = r[o - 1],
                                    l = r[o + 1],
                                    u = l.$el.offsetLeft + l.$el.offsetWidth + St,
                                    d = c.$el.offsetLeft - St;
                                u > a.scrollLeft + n ? a.scrollLeft = u - n : d < a.scrollLeft && (a.scrollLeft = d)
                            }
                        }
                    }
                },
                kt = Ct,
                Ot = (n("a403"), Object(f["a"])(kt, wt, At, !1, null, "6e201b9e", null)),
                Pt = Ot.exports;

            function Tt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function _t(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Tt(Object(n), !0).forEach((function(t) {
                        Object(i["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var xt = {
                    components: {
                        ScrollPane: Pt
                    },
                    data: function() {
                        return {
                            visible: !1,
                            top: 0,
                            left: 0,
                            selectedTag: {},
                            affixTags: []
                        }
                    },
                    computed: {
                        visitedViews: function() {
                            return this.$store.state.tagsView.visitedViews
                        },
                        routes: function() {
                            return this.$store.state.permission.routes
                        }
                    },
                    watch: {
                        $route: function() {
                            this.addTags(), this.moveToCurrentTag()
                        },
                        visible: function(e) {
                            e ? document.body.addEventListener("click", this.closeMenu) : document.body.removeEventListener("click", this.closeMenu)
                        }
                    },
                    mounted: function() {
                        this.initTags(), this.addTags()
                    },
                    methods: {
                        isActive: function(e) {
                            return e.path === this.$route.path
                        },
                        isAffix: function(e) {
                            return e.meta && e.meta.affix
                        },
                        filterAffixTags: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
                                a = [];
                            return e.forEach((function(e) {
                                if (e.meta && e.meta.affix) {
                                    var r = A.a.resolve(n, e.path);
                                    a.push({
                                        fullPath: r,
                                        path: r,
                                        name: e.name,
                                        meta: _t({}, e.meta)
                                    })
                                }
                                if (e.children) {
                                    var i = t.filterAffixTags(e.children, e.path);
                                    i.length >= 1 && (a = [].concat(Object(Pe["a"])(a), Object(Pe["a"])(i)))
                                }
                            })), a
                        },
                        initTags: function() {
                            var e = this.affixTags = this.filterAffixTags(this.routes),
                                t = !0,
                                n = !1,
                                a = void 0;
                            try {
                                for (var r, i = e[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                                    var s = r.value;
                                    s.name && this.$store.dispatch("tagsView/addVisitedView", s)
                                }
                            } catch (o) {
                                n = !0, a = o
                            } finally {
                                try {
                                    t || null == i.return || i.return()
                                } finally {
                                    if (n) throw a
                                }
                            }
                        },
                        addTags: function() {
                            var e = this.$route.name;
                            return e && this.$store.dispatch("tagsView/addView", this.$route), !1
                        },
                        moveToCurrentTag: function() {
                            var e = this,
                                t = this.$refs.tag;
                            this.$nextTick((function() {
                                var n = !0,
                                    a = !1,
                                    r = void 0;
                                try {
                                    for (var i, s = t[Symbol.iterator](); !(n = (i = s.next()).done); n = !0) {
                                        var o = i.value;
                                        if (o.to.path === e.$route.path) {
                                            e.$refs.scrollPane.moveToTarget(o), o.to.fullPath !== e.$route.fullPath && e.$store.dispatch("tagsView/updateVisitedView", e.$route);
                                            break
                                        }
                                    }
                                } catch (c) {
                                    a = !0, r = c
                                } finally {
                                    try {
                                        n || null == s.return || s.return()
                                    } finally {
                                        if (a) throw r
                                    }
                                }
                            }))
                        },
                        refreshSelectedTag: function(e) {
                            var t = this;
                            this.$store.dispatch("tagsView/delCachedView", e).then((function() {
                                var n = e.fullPath;
                                t.$nextTick((function() {
                                    t.$router.replace({
                                        path: "/redirect" + n
                                    })
                                }))
                            }))
                        },
                        closeSelectedTag: function(e) {
                            var t = this;
                            this.$store.dispatch("tagsView/delView", e).then((function(n) {
                                var a = n.visitedViews;
                                t.isActive(e) && t.toLastView(a, e)
                            }))
                        },
                        closeOthersTags: function() {
                            var e = this;
                            this.$router.push(this.selectedTag), this.$store.dispatch("tagsView/delOthersViews", this.selectedTag).then((function() {
                                e.moveToCurrentTag()
                            }))
                        },
                        closeAllTags: function(e) {
                            var t = this;
                            this.$store.dispatch("tagsView/delAllViews").then((function(n) {
                                var a = n.visitedViews;
                                t.affixTags.some((function(t) {
                                    return t.path === e.path
                                })) || t.toLastView(a, e)
                            }))
                        },
                        toLastView: function(e, t) {
                            var n = e.slice(-1)[0];
                            n ? this.$router.push(n.fullPath) : "Dashboard" === t.name ? this.$router.replace({
                                path: "/redirect" + t.fullPath
                            }) : this.$router.push("/")
                        },
                        openMenu: function(e, t) {
                            var n = 105,
                                a = this.$el.getBoundingClientRect().left,
                                r = this.$el.offsetWidth,
                                i = r - n,
                                s = t.clientX - a + 15;
                            this.left = s > i ? i : s, this.top = t.clientY, this.visible = !0, this.selectedTag = e
                        },
                        closeMenu: function() {
                            this.visible = !1
                        }
                    }
                },
                Dt = xt,
                jt = (n("8ae0"), n("cfaa"), Object(f["a"])(Dt, vt, yt, !1, null, "5d58697e", null)),
                Ut = jt.exports,
                Et = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return e.loading ? e._e() : n("TabPage", {
                        attrs: {
                            submenu: e.submenu,
                            "active-menu": e.iActiveMenu
                        },
                        on: {
                            "update:activeMenu": function(t) {
                                e.iActiveMenu = t
                            },
                            "update:active-menu": function(t) {
                                e.iActiveMenu = t
                            },
                            "tab-click": e.handleTabClick
                        },
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [n("el-button", {
                                    staticClass: "go-back",
                                    attrs: {
                                        icon: "el-icon-back"
                                    },
                                    on: {
                                        click: e.handleGoBack
                                    }
                                }), e._v(" "), n("span", {
                                    staticStyle: {
                                        "padding-left": "10px"
                                    }
                                }, [e._v(e._s(e.iTitle))])]
                            },
                            proxy: !0
                        }, {
                            key: "headingRightSide",
                            fn: function() {
                                return [e.hasRightSide ? n("span", [n("ActionsGroup", {
                                    attrs: {
                                        slot: "headingRightSide",
                                        actions: e.pageActions
                                    },
                                    slot: "headingRightSide"
                                })], 1) : e._e()]
                            },
                            proxy: !0
                        }], null, !1, 1455054371)
                    }, [e._v(" "), e._v(" "), e._t("default")], 2)
                },
                Mt = [],
                Rt = (n("96cf"), n("3b8d")),
                Lt = n("9b8c"),
                $t = n("b775"),
                It = n("555c");

            function Ft(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Vt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ft(Object(n), !0).forEach((function(t) {
                        Object(i["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ft(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Nt = {
                    name: "GenericDetailPage",
                    components: {
                        TabPage: Lt["a"],
                        ActionsGroup: It["a"]
                    },
                    props: {
                        object: {
                            type: Object,
                            required: !0
                        },
                        title: {
                            type: String,
                            default: ""
                        },
                        submenu: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        activeMenu: {
                            type: String,
                            default: function() {
                                return ""
                            }
                        },
                        hasRightSide: {
                            type: Boolean,
                            default: !0
                        },
                        actions: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        getObjectName: {
                            type: Function,
                            default: function(e) {
                                return e.name
                            }
                        },
                        getTitle: {
                            type: Function,
                            default: function(e) {
                                var t = this.$route.meta.title.replace("Detail", "").replace("详情", "");
                                this.$log.debug("Object is: ", e);
                                var n = this.getObjectName(e),
                                    a = "".concat(t, ": ").concat(n);
                                return a.length > 80 && (a = a.slice(0, 80) + "..."), a
                            }
                        },
                        goBack: {
                            type: Function,
                            default: function(e) {
                                return this.$router.back()
                            }
                        }
                    },
                    data: function() {
                        var e = this,
                            t = {
                                canDelete: !0,
                                deleteCallback: function(e) {
                                    this.defaultDelete(e)
                                },
                                deleteApiUrl: Object(Te["d"])(this),
                                deleteSuccessRoute: this.$route.name.replace("Detail", "List"),
                                canUpdate: function() {
                                    return !e.currentOrgIsRoot
                                },
                                updateCallback: function(e) {
                                    this.defaultUpdate(e)
                                },
                                updateRoute: this.$route.name.replace("Detail", "Update"),
                                detailApiUrl: Object(Te["d"])(this)
                            };
                        return {
                            defaultActions: t,
                            loading: !0,
                            validActions: Object.assign(t, this.actions)
                        }
                    },
                    computed: Vt({}, Object(s["b"])(["currentOrgIsRoot"]), {
                        pageActions: function() {
                            return [{
                                name: "update",
                                title: this.$t("common.Update"),
                                can: this.validActions.canUpdate,
                                has: this.validActions.hasUpdate,
                                callback: this.validActions.updateCallback.bind(this)
                            }, {
                                name: "delete",
                                title: this.$t("common.Delete"),
                                type: "danger",
                                plain: !0,
                                can: this.validActions.canDelete,
                                has: this.validActions.hasDelete,
                                callback: this.validActions.deleteCallback.bind(this)
                            }]
                        },
                        iTitle: function() {
                            return this.title || this.getTitle(this.object)
                        },
                        iActiveMenu: {
                            get: function() {
                                return this.activeMenu
                            },
                            set: function(e) {
                                this.$emit("update:activeMenu", e)
                            }
                        }
                    }),
                    mounted: function() {
                        var e = Object(Rt["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, this.loading = !0, e.next = 4, this.getObject();
                                    case 4:
                                        return e.prev = 4, this.loading = !1, e.finish(4);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [0, , 4, 7]
                            ])
                        })));

                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    methods: {
                        defaultDelete: function() {
                            var e = this,
                                t = this.$t("common.deleteWarningMsg") + " " + this.iTitle + " ?",
                                n = this.$t("common.Info"),
                                a = function() {
                                    var e = Object(Rt["a"])(regeneratorRuntime.mark((function e() {
                                        var t;
                                        return regeneratorRuntime.wrap((function(e) {
                                            while (1) switch (e.prev = e.next) {
                                                case 0:
                                                    return t = this.validActions.deleteApiUrl, this.$log.debug("Start perform delete: ", t), e.abrupt("return", this.$axios.delete(t));
                                                case 3:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, this)
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }();
                            this.$alert(t, n, {
                                type: "warning",
                                confirmButtonClass: "el-button--danger",
                                showCancelButton: !0,
                                beforeClose: function() {
                                    var t = Object(Rt["a"])(regeneratorRuntime.mark((function t(n, r, i) {
                                        return regeneratorRuntime.wrap((function(t) {
                                            while (1) switch (t.prev = t.next) {
                                                case 0:
                                                    if ("confirm" === n) {
                                                        t.next = 2;
                                                        break
                                                    }
                                                    return t.abrupt("return", i());
                                                case 2:
                                                    return r.confirmButtonLoading = !0, t.prev = 3, t.next = 6, a.bind(e)();
                                                case 6:
                                                    i(), e.$message.success(e.$t("common.deleteSuccessMsg")), e.$router.push({
                                                        name: e.validActions.deleteSuccessRoute
                                                    }), t.next = 14;
                                                    break;
                                                case 11:
                                                    t.prev = 11, t.t0 = t["catch"](3), e.$message.error(e.$t("common.deleteErrorMsg") + " " + t.t0);
                                                case 14:
                                                    return t.prev = 14, r.confirmButtonLoading = !1, t.finish(14);
                                                case 17:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t, null, [
                                            [3, 11, 14, 17]
                                        ])
                                    })));

                                    function n(e, n, a) {
                                        return t.apply(this, arguments)
                                    }
                                    return n
                                }()
                            }).catch((function() {}))
                        },
                        defaultUpdate: function() {
                            var e = this.$route.params.id,
                                t = this.validActions.updateRoute;
                            "string" === typeof t && (t = {
                                name: t,
                                params: {}
                            }), t.params.id = e, this.$router.push(t)
                        },
                        getObject: function() {
                            var e = this,
                                t = this.validActions.detailApiUrl;
                            return this.$axios.get(t, {
                                disableFlashErrorMsg: !0
                            }).then((function(t) {
                                e.$emit("update:object", t), e.$emit("getObjectDone", t)
                            })).catch((function(t) {
                                if (t.response && 404 === t.response.status) {
                                    var n = e.$t("common.ObjectNotFoundOrDeletedMsg");
                                    e.$message.error(n)
                                } else Object($t["b"])({
                                    error: t,
                                    response: t.response
                                })
                            }))
                        },
                        handleTabClick: function(e) {
                            this.$emit("tab-click", e, this.iActiveMenu), this.$emit("update:activeMenu", e.name), this.$log.debug("Current tab is: ", this.activeMenu)
                        },
                        handleGoBack: function() {
                            return this.goBack.bind(this)(this.object)
                        }
                    }
                },
                Bt = Nt,
                qt = (n("315a"), Object(f["a"])(Bt, Et, Mt, !1, null, "1e02411a", null)),
                Ht = qt.exports,
                zt = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "footer",
                        style: e.style
                    }, [n("div", {
                        staticClass: "pull-right"
                    }, [e._v("\n    Version "), n("strong", [e._v("v2.16.3")]), e._v(" "), e.publicSettings.XPACK_LICENSE_IS_VALID ? e._e() : n("span", [e._v(" GPLv2. ")])]), e._v(" "), e.publicSettings.XPACK_LICENSE_IS_VALID ? e._e() : n("div", {
                        staticStyle: {
                            "padding-left": "20px"
                        }
                    }, [n("strong", [e._v("Copyright")]), e._v(" Rubico © 2010-2021\n  ")])])
                },
                Gt = [];

            function Kt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Wt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Kt(Object(n), !0).forEach((function(t) {
                        Object(i["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Qt = {
                    name: "Footer",
                    computed: Wt({}, Object(s["b"])(["sidebar", "device", "publicSettings"]), {
                        style: function() {
                            return "mobile" === this.device ? "" : this.sidebar.opened ? "margin-left: 210px;" : "margin-left: 54px"
                        }
                    })
                },
                Jt = Qt,
                Yt = (n("46a9"), Object(f["a"])(Jt, zt, Gt, !1, null, null, null)),
                Xt = Yt.exports,
                Zt = n("4d4a"),
                en = n("3758"),
                tn = n("5e04"),
                nn = n("d0aa"),
                an = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("Dialog", {
                        attrs: {
                            title: this.$t("common.updateSelected"),
                            visible: e.iVisible,
                            width: "70%",
                            top: "1vh",
                            "show-cancel": !1,
                            "show-confirm": !1
                        },
                        on: {
                            "update:visible": function(t) {
                                e.iVisible = t
                            }
                        }
                    }, [n("el-row", [n("el-col", {
                        attrs: {
                            span: 4
                        }
                    }, [n("div", {
                        staticClass: "select-prop-label"
                    }, [n("label", [e._v(e._s(e.selectPropertiesLabel))])])]), e._v(" "), n("el-col", {
                        attrs: {
                            span: 18
                        }
                    }, [n("el-checkbox-group", {
                        on: {
                            change: e.handleCheckedFieldsChange
                        },
                        model: {
                            value: e.checkedFields,
                            callback: function(t) {
                                e.checkedFields = t
                            },
                            expression: "checkedFields"
                        }
                    }, e._l(e.iFormSetting.fieldsMeta, (function(t, a) {
                        return n("el-checkbox", {
                            key: a,
                            attrs: {
                                checked: !0,
                                label: a
                            }
                        }, [e._v(e._s(t.label))])
                    })), 1)], 1)], 1), e._v(" "), n("el-row", {
                        staticClass: "el-row-divider"
                    }, [n("el-divider")], 1), e._v(" "), n("el-row", [n("GenericCreateUpdateForm", e._b({
                        key: e.internalKey
                    }, "GenericCreateUpdateForm", e.iFormSetting, !1))], 1)], 1)
                },
                rn = [],
                sn = {
                    name: "GenericUpdateFormDialog",
                    components: {
                        Dialog: de["a"],
                        GenericCreateUpdateForm: nn["a"]
                    },
                    props: {
                        selectedRows: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        formSetting: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        visible: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            internalKey: 0,
                            selectPropertiesLabel: this.$t("common.SelectProperties"),
                            checkedFields: [],
                            iFormSetting: {}
                        }
                    },
                    computed: {
                        iVisible: {
                            set: function(e) {
                                this.$emit("update:visible", e)
                            },
                            get: function() {
                                return this.visible
                            }
                        }
                    },
                    mounted: function() {
                        var e = this.getDefaultFormSetting();
                        this.iFormSetting = Object.assign({}, this.formSetting, e)
                    },
                    methods: {
                        handleCheckedFieldsChange: function(e) {
                            for (var t = 0, n = Object.keys(this.iFormSetting.fieldsMeta); t < n.length; t++) {
                                var a = n[t]; - 1 === e.indexOf(a) ? this.iFormSetting.fieldsMeta[a].hidden = function() {
                                    return !0
                                } : this.iFormSetting.fieldsMeta[a].hidden = function() {
                                    return !1
                                }
                            }
                            this.internalKey++
                        },
                        getDefaultFormSetting: function() {
                            var e = this;
                            return {
                                submitMethod: function() {
                                    return "post"
                                },
                                cleanFormValue: function(t) {
                                    var n = {};
                                    Object.keys(t).filter((function(t) {
                                        return e.checkedFields.includes(t)
                                    })).forEach((function(e) {
                                        n[e] = t[e]
                                    }));
                                    var a = [],
                                        r = {},
                                        i = !0,
                                        s = !1,
                                        o = void 0;
                                    try {
                                        for (var c, l = e.selectedRows[Symbol.iterator](); !(i = (c = l.next()).done); i = !0) {
                                            var u = c.value;
                                            r = Object.assign({}, n, {
                                                id: u.id
                                            }), a.push(r)
                                        }
                                    } catch (d) {
                                        s = !0, o = d
                                    } finally {
                                        try {
                                            i || null == l.return || l.return()
                                        } finally {
                                            if (s) throw o
                                        }
                                    }
                                    return a
                                },
                                onSubmit: function(t) {
                                    var n = this,
                                        a = this.url,
                                        r = this.updateSuccessMsg;
                                    this.$axios.patch(a, t).then((function(t) {
                                        e.$emit("update"), n.$message.success(r), n.iVisible = !1
                                    })).catch((function(e) {
                                        n.$emit("submitError", e);
                                        var t = e.response,
                                            a = t.data;
                                        if (400 === t.status)
                                            for (var r = 0, i = Object.keys(a); r < i.length; r++) {
                                                var s = i[r],
                                                    o = a[s];
                                                o instanceof Array && (o = o.join(";")), n.$refs.form.setFieldError(s, o)
                                            }
                                    }))
                                }
                            }
                        }
                    }
                },
                on = sn,
                cn = (n("671f"), Object(f["a"])(on, an, rn, !1, null, "60150986", null)),
                ln = cn.exports,
                un = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("Dialog", {
                        attrs: {
                            title: e.title,
                            visible: e.iVisible,
                            top: "1vh",
                            width: e.width,
                            "show-cancel": !1,
                            "show-confirm": !1
                        },
                        on: {
                            "update:visible": function(t) {
                                e.iVisible = t
                            }
                        }
                    }, [n("GenericListTable", {
                        attrs: {
                            "table-config": e.tableConfig,
                            "header-actions": e.headerActions
                        }
                    })], 1)
                },
                dn = [],
                pn = {
                    name: "Index",
                    components: {
                        Dialog: de["a"],
                        GenericListTable: en["a"]
                    },
                    props: {
                        title: {
                            type: String,
                            required: !0
                        },
                        visible: {
                            type: Boolean,
                            default: !1
                        },
                        tableConfig: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        headerActions: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        width: {
                            type: String,
                            default: "60%"
                        }
                    },
                    computed: {
                        iVisible: {
                            set: function(e) {
                                this.$emit("update:visible", e)
                            },
                            get: function() {
                                return this.visible
                            }
                        }
                    }
                },
                mn = pn,
                hn = Object(f["a"])(mn, un, dn, !1, null, "fefc13be", null),
                fn = hn.exports;
            n.d(t, "j", (function() {
                return ae
            })), n.d(t, "k", (function() {
                return ut
            })), n.d(t, "a", (function() {
                return gt
            })), n.d(t, "l", (function() {
                return bt["a"]
            })), n.d(t, "n", (function() {
                return Ut
            })), n.d(t, "e", (function() {
                return Ht
            })), n.d(t, "m", (function() {
                return Lt["a"]
            })), n.d(t, "b", (function() {
                return Xt
            })), n.d(t, "f", (function() {
                return Zt["a"]
            })), n.d(t, "g", (function() {
                return en["a"]
            })), n.d(t, "d", (function() {
                return tn["a"]
            })), n.d(t, "c", (function() {
                return nn["a"]
            })), n.d(t, "i", (function() {
                return ln
            })), n.d(t, "h", (function() {
                return fn
            }))
        },
        ce7e: function(e, t, n) {},
        cedb: function(e, t, n) {
            "use strict";
            var a = n("cc9a"),
                r = n.n(a);
            r.a
        },
        cf1e2: function(e, t, n) {
            e.exports = {
                menuText: "#a7b1c2",
                menuActiveText: "#fff",
                subMenuActiveText: "#f4f4f5",
                menuBg: "#2f4050",
                menuHover: "#293846",
                subMenuBg: "#1f2d3d",
                subMenuHover: "#001528",
                sideBarWidth: "220px"
            }
        },
        cf45: function(e, t, n) {
            "use strict";
            n.d(t, "o", (function() {
                return s
            })), n.d(t, "p", (function() {
                return d
            })), n.d(t, "c", (function() {
                return p
            })), n.d(t, "d", (function() {
                return m
            })), n.d(t, "k", (function() {
                return f
            })), n.d(t, "g", (function() {
                return g
            })), n.d(t, "h", (function() {
                return b
            })), n.d(t, "e", (function() {
                return v
            })), n.d(t, "m", (function() {
                return y
            })), n.d(t, "f", (function() {
                return w
            })), n.d(t, "i", (function() {
                return A
            })), n.d(t, "n", (function() {
                return S
            })), n.d(t, "l", (function() {
                return k
            })), n.d(t, "j", (function() {
                return O
            })), n.d(t, "b", (function() {
                return P
            })), n.d(t, "a", (function() {
                return x
            }));
            n("aef6");
            var a = n("768b"),
                r = (n("ffc1"), n("386d"), n("96cf"), n("3b8d"), n("6762"), n("2fdb"), n("ac6a"), n("f3e2"), n("a481"), n("28a5"), n("c5f6"), n("57e7"), n("2ef0"));

            function i(e) {
                var t = {
                    d: "天",
                    h: "时",
                    m: "分",
                    s: "秒"
                };
                return "zh-CN" === c() ? t[e] : e
            }

            function s(e, t) {
                var n = l(e),
                    a = l(t),
                    r = (a - n) / 1e3;
                return o(r)
            }

            function o(e) {
                var t = e / 3600 / 24,
                    n = e / 3600,
                    a = e / 60,
                    r = e;
                return t > 1 ? t.toFixed(1) + " " + i("d") : n > 1 ? n.toFixed(1) + " " + i("h") : a > 1 ? a.toFixed(1) + " " + i("m") : r > 1 ? r.toFixed(1) + " " + i("s") : ""
            }

            function c() {
                var e = document.cookie.indexOf("django_language=en");
                return -1 === e ? "zh-CN" : "en-US"
            }

            function l(e) {
                return e = u(e), new Date(e)
            }

            function u(e) {
                for (var t = 0; t < 3; t++) {
                    if (!isNaN(Date.parse(e))) return e;
                    if (!isNaN(Number(e))) return e;
                    switch (t) {
                        case 0:
                            e = e.split("/").join("-");
                            break;
                        case 1:
                            e = e.split("+")[0].trimRight();
                            break;
                        case 2:
                            e = e.replace(/-/g, "/")
                    }
                }
                return e
            }

            function d(e) {
                if ("" === e || null === e) return "";
                var t = l(e),
                    n = t.toLocaleDateString(c(), {
                        hourCycle: "h23"
                    }) + " " + t.toLocaleTimeString(c(), {
                        hourCycle: "h23"
                    });
                return n
            }

            function p(e, t) {
                return t.forEach((function(t, n, a) {
                    [e.$t("perms.clipboardCopyPaste"), e.$t("perms.upDownload"), e.$t("perms.all")].includes(t) && a.splice(n, 1)
                })), t.join(", ")
            }

            function m(e) {
                var t = e.$route.path,
                    n = t.split("/");
                return -1 !== n.indexOf("orgs") ? n[n.indexOf("xpack")] = "orgs" : -1 === n.indexOf("gathered-user") && -1 === n.indexOf("change-auth-plan") || (n[n.indexOf("accounts")] = "xpack"), t = n.join("/"), "/api/v1".concat(t, "/")
            }
            var h = /[0-9a-zA-Z\-]{36}/;

            function f(e) {
                return -1 !== e.search(h)
            }

            function g(e, t) {
                return t || (t = new Date), new Date(t.getTime() - 864e5 * e)
            }

            function b(e, t) {
                return t || (t = new Date), new Date(t.getTime() + 864e5 * e)
            }

            function v(e) {
                return e || (e = new Date), new Date(new Date(e.toLocaleDateString()).getTime() + 864e5 - 1)
            }

            function y(e, t, n) {
                var r = e.split("?");
                if (1 === r.length) e += "?" + t + "=" + n;
                else {
                    var i = r[1].split("&"),
                        s = {};
                    i.forEach((function(e, t) {
                        var n = e.split("=");
                        s[n[0]] = n[1]
                    })), s[t] = n, e = r[0] + "?";
                    for (var o = [], c = 0, l = Object.entries(s); c < l.length; c++) {
                        var u = Object(a["a"])(l[c], 2),
                            d = u[0],
                            p = u[1];
                        o.push(d + "=" + p)
                    }
                    e += o.join("&")
                }
                return e
            }

            function w(e, t) {
                return t || (t = new Date), new Date(t.getTime() + 864e5 * e)
            }

            function A(e) {
                var t = "",
                    n = e.response && e.response.data || {};
                return n && (n.error || n.msg || n.detail) && (t = n.error || n.msg || n.detail), t
            }

            function S(e) {
                return new Promise((function(t) {
                    return setTimeout(t, e)
                }))
            }

            function C(e, t) {
                return r.isUndefined(e) ? t : e
            }

            function k(e) {
                var t;
                return t = e.indexOf("//") > -1 ? new URL(e) : new URL(e, location.origin), t
            }

            function O(e, t) {
                var n = new URL(e, location.origin),
                    a = n.pathname;
                return a.endsWith("/") || (a += "/"), a += "".concat(t, "/"), n.pathname = a, n.href
            }
            var P = r.partialRight(r.assignInWith, C),
                T = document.location.protocol,
                _ = document.location.port ? ":" + document.location.port : "",
                x = T + "//" + document.location.hostname + _
        },
        cfaa: function(e, t, n) {
            "use strict";
            var a = n("3561"),
                r = n.n(a);
            r.a
        },
        d0aa: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return e.loading ? e._e() : n("AutoDataForm", e._g(e._b({
                        ref: "form",
                        attrs: {
                            method: e.method,
                            form: e.form,
                            url: e.iUrl,
                            "has-save-continue": e.iHasSaveContinue,
                            "has-reset": e.iHasReset,
                            "is-submitting": e.isSubmitting
                        },
                        on: {
                            submit: e.handleSubmit
                        }
                    }, "AutoDataForm", e.$attrs, !1), e.$listeners))
                },
                r = [],
                i = (n("d92a"), n("57e7"), n("96cf"), n("3b8d")),
                s = (n("ac6a"), n("456d"), n("7f7f"), n("a481"), n("715e")),
                o = n("cf45"),
                c = {
                    name: "GenericCreateUpdateForm",
                    components: {
                        AutoDataForm: s["a"]
                    },
                    props: {
                        url: {
                            type: String,
                            default: ""
                        },
                        object: {
                            type: Object,
                            default: null
                        },
                        initial: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        afterGetFormValue: {
                            type: Function,
                            default: function(e) {
                                return e
                            }
                        },
                        cleanFormValue: {
                            type: Function,
                            default: function(e) {
                                return e
                            }
                        },
                        onSubmit: {
                            type: Function,
                            default: null
                        },
                        hasReset: {
                            type: Boolean,
                            default: null
                        },
                        performSubmit: {
                            type: Function,
                            default: function(e) {
                                return this.$axios[this.method](this.iUrl, e)
                            }
                        },
                        createSuccessMsg: {
                            type: String,
                            default: function() {
                                return this.$t("common.createSuccessMsg")
                            }
                        },
                        saveSuccessContinueMsg: {
                            type: String,
                            default: function() {
                                return this.$t("common.saveSuccessContinueMsg")
                            }
                        },
                        updateSuccessMsg: {
                            type: String,
                            default: function() {
                                return this.$t("common.updateSuccessMsg")
                            }
                        },
                        createSuccessNextRoute: {
                            type: Object,
                            default: function() {
                                var e = this.$route.name.replace("Create", "List");
                                return {
                                    name: e
                                }
                            }
                        },
                        updateSuccessNextRoute: {
                            type: Object,
                            default: function() {
                                var e = this.$route.name.replace("Update", "List");
                                return {
                                    name: e
                                }
                            }
                        },
                        objectDetailRoute: {
                            type: Object,
                            default: function() {
                                var e = this.$route.name.replace("Update", "Detail").replace("Create", "Detail");
                                return {
                                    name: e
                                }
                            }
                        },
                        getNextRoute: {
                            type: Function,
                            default: function(e, t) {
                                return "post" === t ? this.createSuccessNextRoute : this.updateSuccessNextRoute
                            }
                        },
                        submitMethod: {
                            type: Function,
                            default: function() {
                                var e = this.$route.params;
                                return e.id ? "put" : "post"
                            }
                        },
                        getUrl: {
                            type: Function,
                            default: function() {
                                var e = this.$route.params,
                                    t = this.url;
                                return e.id && (t = Object(o["j"])(t, e.id)), t
                            }
                        },
                        emitPerformSuccessMsg: {
                            type: Function,
                            default: function(e, t, n) {
                                var a = this,
                                    r = "post" === e ? this.createSuccessMsg : this.updateSuccessMsg;
                                n && (r = this.saveSuccessContinueMsg);
                                var i = "";
                                t.name ? i = t.name : t.hostname && (i = t.hostname);
                                var s = this.$createElement;
                                this.hasDetailInMsg ? this.$message({
                                    message: s("p", null, [s("el-link", {
                                        on: {
                                            click: function() {
                                                return a.$router.push(a.objectDetailRoute)
                                            }
                                        },
                                        style: {
                                            "vertical-align": "top"
                                        }
                                    }, i), s("span", {
                                        style: {
                                            "padding-left": "5px",
                                            height: "18px",
                                            "line-height": "18px",
                                            "font-size": "13.5px",
                                            "font-weight": " 400"
                                        }
                                    }, r)]),
                                    type: "success"
                                }) : this.$message.success(r)
                            }
                        },
                        onPerformSuccess: {
                            type: Function,
                            default: function(e, t, n, a) {
                                var r = this,
                                    i = this.getNextRoute(e, t);
                                i.params && i.params.id || (i["params"] = {
                                    id: e.id
                                }), this.$emit("submitSuccess", e), this.emitPerformSuccessMsg(t, e, a), a || setTimeout((function() {
                                    return r.$router.push(i)
                                }), 100)
                            }
                        },
                        onPerformError: {
                            type: Function,
                            default: function(e, t, n) {
                                this.$emit("submitError", e);
                                var a = e.response,
                                    r = a.data;
                                if (400 === a.status)
                                    for (var i = 0, s = Object.keys(r); i < s.length; i++) {
                                        var o = s[i],
                                            c = r[o];
                                        c instanceof Array && (c = c.join(";")), this.$refs.form.setFieldError(o, c)
                                    }
                            }
                        },
                        hasSaveContinue: {
                            type: Boolean,
                            default: null
                        },
                        hasDetailInMsg: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function() {
                        return {
                            form: {},
                            loading: !0,
                            isSubmitting: !1,
                            clone: !1
                        }
                    },
                    computed: {
                        method: function() {
                            return this.submitMethod(this)
                        },
                        iUrl: function() {
                            return this.getUrl()
                        },
                        iHasSaveContinue: function() {
                            return null != this.hasSaveContinue ? this.hasSaveContinue : "post" === this.method
                        },
                        iHasReset: function() {
                            return null != this.hasReset ? this.hasReset : this.isUpdateMethod()
                        }
                    },
                    created: function() {
                        var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                            var t, n;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return this.$log.debug("Object init is: ", this.object), this.loading = !0, e.prev = 2, e.next = 5, this.getFormValue();
                                    case 5:
                                        t = e.sent, this.$log.debug("Final object is: ", t), n = Object.assign(this.form, t), this.form = this.afterGetFormValue(n);
                                    case 9:
                                        return e.prev = 9, this.loading = !1, e.finish(9);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [2, , 9, 12]
                            ])
                        })));

                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }(),
                    methods: {
                        isUpdateMethod: function() {
                            return ["put", "patch"].indexOf(this.method.toLowerCase()) > -1
                        },
                        handleSubmit: function(e, t, n) {
                            var a = this.onSubmit || this.defaultOnSubmit;
                            return a = a.bind(this), e = this.cleanFormValue(e), a(e, t, n)
                        },
                        defaultOnSubmit: function(e, t, n) {
                            var a = this;
                            this.isSubmitting = !0, this.performSubmit(e).then((function(e) {
                                return a.onPerformSuccess.bind(a)(e, a.method, a, n)
                            })).catch((function(e) {
                                return a.onPerformError(e, a.method, a)
                            })).finally((function() {
                                a.isSubmitting = !1
                            }))
                        },
                        getFormValue: function() {
                            var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                                var t, n, a;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = this.$route.query["clone_from"], this.isUpdateMethod() || t) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return", Object.assign(this.form, this.initial));
                                        case 3:
                                            if (n = this.object, n && 0 !== Object.keys(n).length) {
                                                e.next = 17;
                                                break
                                            }
                                            if (!t) {
                                                e.next = 14;
                                                break
                                            }
                                            return this.$log.debug("Clone from: ", t), a = "".concat(this.url).concat(t, "/"), e.next = 10, this.getObjectDetail(a);
                                        case 10:
                                            n = e.sent, n["name"] ? n.name = this.$t("common.cloneFrom") + " " + n.name : n["hostname"] && (n.hostname = this.$t("common.cloneFrom") + " " + n.hostname), e.next = 17;
                                            break;
                                        case 14:
                                            return e.next = 16, this.getObjectDetail(this.iUrl);
                                        case 16:
                                            n = e.sent;
                                        case 17:
                                            return n && (n = _.cloneDeep(n), this.$emit("update:object", n), this.$emit("getObjectDone", n)), e.abrupt("return", n);
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        getObjectDetail: function() {
                            var e = Object(i["a"])(regeneratorRuntime.mark((function e(t) {
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return this.$log.debug("Get object detail: ", t), e.abrupt("return", this.$axios.get(t));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t(t) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }
                },
                l = c,
                u = (n("e1c5"), n("2877")),
                d = Object(u["a"])(l, a, r, !1, null, "c5a2c53a", null);
            t["a"] = d.exports
        },
        d1a7: function(e, t, n) {
            "use strict";
            var a = n("031b"),
                r = n.n(a);
            r.a
        },
        d7ba: function(e, t, n) {
            "use strict";
            var a = n("1f83"),
                r = n.n(a);
            r.a
        },
        d7ec: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-eye-open",
                    use: "icon-eye-open-usage",
                    viewBox: "0 0 1024 1024",
                    content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-eye-open"><defs><style></style></defs><path d="M512 128q69.675 0 135.51 21.163t115.498 54.997 93.483 74.837 73.685 82.006 51.67 74.837 32.17 54.827L1024 512q-2.347 4.992-6.315 13.483T998.87 560.17t-31.658 51.669-44.331 59.99-56.832 64.34-69.504 60.16-82.347 51.5-94.848 34.687T512 896q-69.675 0-135.51-21.163t-115.498-54.826-93.483-74.326-73.685-81.493-51.67-74.496-32.17-54.997L0 513.707q2.347-4.992 6.315-13.483t18.816-34.816 31.658-51.84 44.331-60.33 56.832-64.683 69.504-60.331 82.347-51.84 94.848-34.816T512 128.085zm0 85.333q-46.677 0-91.648 12.331t-81.152 31.83-70.656 47.146-59.648 54.485-48.853 57.686-37.675 52.821-26.325 43.99q12.33 21.674 26.325 43.52t37.675 52.351 48.853 57.003 59.648 53.845T339.2 767.02t81.152 31.488T512 810.667t91.648-12.331 81.152-31.659 70.656-46.848 59.648-54.186 48.853-57.344 37.675-52.651T927.957 512q-12.33-21.675-26.325-43.648t-37.675-52.65-48.853-57.345-59.648-54.186-70.656-46.848-81.152-31.659T512 213.334zm0 128q70.656 0 120.661 50.006T682.667 512 632.66 632.661 512 682.667 391.339 632.66 341.333 512t50.006-120.661T512 341.333zm0 85.334q-35.328 0-60.33 25.002T426.666 512t25.002 60.33T512 597.334t60.33-25.002T597.334 512t-25.002-60.33T512 426.666z" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        d906: function(e, t, n) {
            "use strict";
            var a = n("c4b9"),
                r = n.n(a);
            r.a
        },
        d9ae: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return e.shown ? n("el-tooltip", {
                        attrs: {
                            disabled: !e.formatterArgs.hasTips,
                            placement: "bottom",
                            effect: "dark"
                        }
                    }, [n("div", {
                        attrs: {
                            slot: "content"
                        },
                        domProps: {
                            innerHTML: e._s(e.tips)
                        },
                        slot: "content"
                    }), e._v(" "), n("span", {
                        class: e.classes
                    }, [e.formatterArgs.useIcon ? n("i", {
                        class: "fa " + e.icon
                    }) : e._e(), e._v(" "), e.formatterArgs.useText ? n("span", [e._v(e._s(e.text))]) : e._e()])]) : e._e()
                },
                r = [],
                i = n("bb1a"),
                s = {
                    name: "ChoicesFormatter",
                    extends: i["a"],
                    props: {
                        formatterArgsDefault: {
                            type: Object,
                            default: function() {
                                return {
                                    iconChoices: {
                                        true: "fa-check",
                                        false: "fa-times"
                                    },
                                    classChoices: {
                                        true: "text-primary",
                                        false: "text-danger"
                                    },
                                    textChoices: {
                                        true: this.$t("common.Yes"),
                                        false: this.$t("common.No")
                                    },
                                    getKey: function(e) {
                                        e.row;
                                        var t = e.cellValue;
                                        return t
                                    },
                                    hasTips: !1,
                                    useIcon: !0,
                                    useText: !1,
                                    showFalse: !0,
                                    getTips: function(e) {
                                        e.row;
                                        var t = e.cellValue;
                                        return t
                                    }
                                }
                            }
                        }
                    },
                    data: function() {
                        return {
                            formatterArgs: Object.assign(this.formatterArgsDefault, this.col.formatterArgs)
                        }
                    },
                    computed: {
                        key: function() {
                            return this.formatterArgs.getKey({
                                row: this.row,
                                cellValue: this.cellValue
                            })
                        },
                        icon: function() {
                            return this.formatterArgs.iconChoices[this.key]
                        },
                        classes: function() {
                            return this.formatterArgs.classChoices[this.key]
                        },
                        text: function() {
                            return this.formatterArgs.textChoices[this.key]
                        },
                        tips: function() {
                            return this.formatterArgs.getTips({
                                cellValue: this.cellValue,
                                row: this.row
                            })
                        },
                        shown: function() {
                            return !(!this.formatterArgs.showFalse && !this.key)
                        }
                    }
                },
                o = s,
                c = n("2877"),
                l = Object(c["a"])(o, a, r, !1, null, "baaca1f6", null);
            t["a"] = l.exports
        },
        d9cd: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("a78e"),
                r = n.n(a),
                i = {
                    sidebar: {
                        opened: !r.a.get("sidebarStatus") || !!+r.a.get("sidebarStatus"),
                        withoutAnimation: !1
                    },
                    device: "desktop"
                },
                s = {
                    TOGGLE_SIDEBAR: function(e) {
                        e.sidebar.opened = !e.sidebar.opened, e.sidebar.withoutAnimation = !1, e.sidebar.opened ? r.a.set("sidebarStatus", 1) : r.a.set("sidebarStatus", 0)
                    },
                    CLOSE_SIDEBAR: function(e, t) {
                        r.a.set("sidebarStatus", 0), e.sidebar.opened = !1, e.sidebar.withoutAnimation = t
                    },
                    TOGGLE_DEVICE: function(e, t) {
                        e.device = t
                    }
                },
                o = {
                    toggleSideBar: function(e) {
                        var t = e.commit;
                        t("TOGGLE_SIDEBAR")
                    },
                    closeSideBar: function(e, t) {
                        var n = e.commit,
                            a = t.withoutAnimation;
                        n("CLOSE_SIDEBAR", a)
                    },
                    toggleDevice: function(e, t) {
                        var n = e.commit;
                        n("TOGGLE_DEVICE", t)
                    }
                };
            t["default"] = {
                namespaced: !0,
                state: i,
                mutations: s,
                actions: o
            }
        },
        dcf8: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-nested",
                    use: "icon-nested-usage",
                    viewBox: "0 0 128 128",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-nested"><path d="M.002 9.2c0 5.044 3.58 9.133 7.998 9.133 4.417 0 7.997-4.089 7.997-9.133 0-5.043-3.58-9.132-7.997-9.132S.002 4.157.002 9.2zM31.997.066h95.981V18.33H31.997V.066zm0 45.669c0 5.044 3.58 9.132 7.998 9.132 4.417 0 7.997-4.088 7.997-9.132 0-3.263-1.524-6.278-3.998-7.91-2.475-1.63-5.524-1.63-7.998 0-2.475 1.632-4 4.647-4 7.91zM63.992 36.6h63.986v18.265H63.992V36.6zm-31.995 82.2c0 5.043 3.58 9.132 7.998 9.132 4.417 0 7.997-4.089 7.997-9.132 0-5.044-3.58-9.133-7.997-9.133s-7.998 4.089-7.998 9.133zm31.995-9.131h63.986v18.265H63.992V109.67zm0-27.404c0 5.044 3.58 9.133 7.998 9.133 4.417 0 7.997-4.089 7.997-9.133 0-3.263-1.524-6.277-3.998-7.909-2.475-1.631-5.524-1.631-7.998 0-2.475 1.632-4 4.646-4 7.91zm31.995-9.13h31.991V91.4H95.987V73.135z" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        ddc3: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-sitemap",
                    use: "icon-sitemap-usage",
                    viewBox: "0 0 1024 1024",
                    content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-sitemap"><defs><style type="text/css"></style></defs><path d="M1024 713.142857l0 182.857143q0 22.857143-16 38.857143t-38.857143 16l-182.857143 0q-22.857143 0-38.857143-16t-16-38.857143l0-182.857143q0-22.857143 16-38.857143t38.857143-16l54.857143 0 0-109.714286-292.571429 0 0 109.714286 54.857143 0q22.857143 0 38.857143 16t16 38.857143l0 182.857143q0 22.857143-16 38.857143t-38.857143 16l-182.857143 0q-22.857143 0-38.857143-16t-16-38.857143l0-182.857143q0-22.857143 16-38.857143t38.857143-16l54.857143 0 0-109.714286-292.571429 0 0 109.714286 54.857143 0q22.857143 0 38.857143 16t16 38.857143l0 182.857143q0 22.857143-16 38.857143t-38.857143 16l-182.857143 0q-22.857143 0-38.857143-16t-16-38.857143l0-182.857143q0-22.857143 16-38.857143t38.857143-16l54.857143 0 0-109.714286q0-29.714286 21.714286-51.428571t51.428571-21.714286l292.571429 0 0-109.714286-54.857143 0q-22.857143 0-38.857143-16t-16-38.857143l0-182.857143q0-22.857143 16-38.857143t38.857143-16l182.857143 0q22.857143 0 38.857143 16t16 38.857143l0 182.857143q0 22.857143-16 38.857143t-38.857143 16l-54.857143 0 0 109.714286 292.571429 0q29.714286 0 51.428571 21.714286t21.714286 51.428571l0 109.714286 54.857143 0q22.857143 0 38.857143 16t16 38.857143z" p-id="8077" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        de37: function(e, t, n) {},
        df93: function(e, t, n) {
            "use strict";
            var a = n("5dc5"),
                r = n.n(a);
            r.a
        },
        e1c5: function(e, t, n) {
            "use strict";
            var a = n("328a"),
                r = n.n(a);
            r.a
        },
        e4ba: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "form-group-header"
                    }, [e.line ? n("div", {
                        staticClass: "hr-line-dashed"
                    }) : e._e(), e._v(" "), n("h3", [e._v(e._s(e.group.title))])])
                },
                r = [],
                i = (n("c5f6"), {
                    props: {
                        line: {
                            type: Boolean,
                            default: !0
                        },
                        index: {
                            type: Number,
                            default: 1
                        },
                        group: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        }
                    }
                }),
                s = i,
                o = (n("df93"), n("2877")),
                c = Object(o["a"])(s, a, r, !1, null, "62390e54", null);
            t["a"] = c.exports
        },
        e50e: function(e, t, n) {
            "use strict";
            var a = n("6ff1"),
                r = n.n(a);
            r.a
        },
        e535: function(e, t, n) {
            "use strict";
            var a = n("3b12"),
                r = n.n(a);
            r.a
        },
        e67a: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("el-card", e._b({
                        class: "ibox " + e.type,
                        attrs: {
                            shadow: "never"
                        },
                        scopedSlots: e._u([{
                            key: "header",
                            fn: function() {
                                return [e._t("header", [e.title ? n("div", {
                                    staticClass: "clearfix ibox-title",
                                    attrs: {
                                        slot: "header"
                                    },
                                    slot: "header"
                                }, [e.fa ? n("i", {
                                    class: "fa " + e.fa
                                }) : e._e(), e._v(" " + e._s(e.title) + "\n      ")]) : e._e()])]
                            },
                            proxy: !0
                        }], null, !0)
                    }, "el-card", e.$attrs, !1), [e._v(" "), e._t("default")], 2)
                },
                r = [],
                i = {
                    name: "IBox",
                    props: {
                        title: {
                            type: String,
                            default: function() {
                                return null
                            }
                        },
                        fa: {
                            type: String,
                            default: ""
                        },
                        type: {
                            type: String,
                            default: "default"
                        }
                    },
                    computed: {
                        iClass: function() {
                            return this.type
                        }
                    }
                },
                s = i,
                o = (n("cedb"), n("2877")),
                c = Object(o["a"])(s, a, r, !1, null, "1d964366", null);
            t["a"] = c.exports
        },
        e7c1: function(e, t, n) {
            "use strict";
            var a = n("bab1"),
                r = n.n(a);
            r.a
        },
        e975: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("el-link", {
                        staticClass: "detail",
                        attrs: {
                            type: e.col.type || "success"
                        },
                        on: {
                            click: e.goDetail
                        }
                    }, [e._v(e._s(e.iTitle))])
                },
                r = [],
                i = n("7618"),
                s = (n("7f7f"), n("a481"), n("bb1a")),
                o = {
                    name: "DetailFormatter",
                    extends: s["a"],
                    props: {
                        formatterArgsDefault: {
                            type: Object,
                            default: function() {
                                return {
                                    route: this.$route.name.replace("List", "Detail"),
                                    getRoute: null,
                                    routeQuery: {},
                                    getTitle: function(e) {
                                        e.col, e.row;
                                        var t = e.cellValue;
                                        return t
                                    }
                                }
                            }
                        }
                    },
                    data: function() {
                        var e = Object.assign(this.formatterArgsDefault, this.col.formatterArgs);
                        return {
                            formatterArgs: e
                        }
                    },
                    computed: {
                        iTitle: function() {
                            return this.formatterArgs.getTitle({
                                col: this.col,
                                row: this.row,
                                cellValue: this.cellValue
                            })
                        }
                    },
                    methods: {
                        goDetail: function() {
                            var e = this.formatterArgs.route;
                            if (this.formatterArgs.getRoute && "function" === typeof this.formatterArgs.getRoute && (e = this.formatterArgs.getRoute({
                                    row: this.row,
                                    col: this.col,
                                    cellValue: this.cellValue
                                })), e) {
                                var t = {};
                                "string" === typeof e ? (t.name = e, t.params = {
                                    id: this.row.id
                                }) : t = e;
                                var n = this.formatterArgs.routeQuery;
                                n && "object" === Object(i["a"])(n) && (t.query = this.formatterArgs.routeQuery), this.$router.push(t)
                            } else console.error("No route found")
                        }
                    }
                },
                c = o,
                l = (n("7c84"), n("2877")),
                u = Object(l["a"])(c, a, r, !1, null, "781914d4", null),
                d = u.exports,
                p = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("span", [e._v(e._s(e.cellValue.toString()))])
                },
                m = [],
                h = {
                    name: "ArrayFormatter",
                    extends: s["a"]
                },
                f = h,
                g = Object(l["a"])(f, p, m, !1, null, "085f000c", null),
                b = g.exports,
                v = n("eaa2"),
                y = n("d9ae"),
                w = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("ActionsGroup", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.loadingStatus,
                            expression: "loadingStatus"
                        }],
                        attrs: {
                            size: "mini",
                            actions: e.actions,
                            "more-actions": e.moreActions,
                            "more-actions-title": e.moreActionsTitle
                        }
                    })
                },
                A = [],
                S = (n("55dd"), n("d25f"), n("6d67"), n("75fc")),
                C = (n("d92a"), n("96cf"), n("3b8d")),
                k = n("555c"),
                O = function(e) {
                    var t = e.row,
                        n = (e.col, t.id),
                        a = new URL(this.url, location.origin);
                    a.pathname += "".concat(n, "/");
                    var r = a.href;
                    return this.$axios.delete(r)
                },
                P = function(e) {
                    var t = e.row,
                        n = (e.col, t.id),
                        a = {
                            params: {
                                id: n
                            }
                        },
                        r = this.colActions.updateRoute;
                    "object" === Object(i["a"])(r) ? a = Object.assign(a, r) : a.name = r, this.$router.push(a)
                },
                T = function(e) {
                    var t = e.row,
                        n = (e.col, t.id),
                        a = {
                            query: {
                                clone_from: n
                            }
                        },
                        r = this.colActions.cloneRoute;
                    "object" === Object(i["a"])(r) ? a = Object.assign(a, r) : a.name = r, this.$router.push(a)
                },
                x = function(e) {
                    var t = this,
                        n = e.row,
                        a = e.col,
                        r = (e.cellValue, e.reload),
                        i = this.$t("common.deleteWarningMsg"),
                        s = n.name || n.hostname;
                    s && (i += ' "'.concat(s, '" ')), i += " ?";
                    var o = this.$t("common.Info"),
                        c = this.colActions.performDelete;
                    this.$alert(i, o, {
                        type: "warning",
                        confirmButtonClass: "el-button--danger",
                        showCancelButton: !0,
                        beforeClose: function() {
                            var e = Object(C["a"])(regeneratorRuntime.mark((function e(i, s, o) {
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if ("confirm" === i) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", o());
                                        case 2:
                                            return s.confirmButtonLoading = !0, e.prev = 3, e.next = 6, c.bind(t)({
                                                row: n,
                                                col: a
                                            });
                                        case 6:
                                            o(), r(), t.$message.success(t.$t("common.deleteSuccessMsg")), e.next = 14;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e["catch"](3), e.t0.response && e.t0.response.data && e.t0.response.data.msg || t.$message.error(t.$t("common.deleteErrorMsg") + " " + e.t0);
                                        case 14:
                                            return e.prev = 14, s.confirmButtonLoading = !1, e.finish(14);
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [3, 11, 14, 17]
                                ])
                            })));

                            function i(t, n, a) {
                                return e.apply(this, arguments)
                            }
                            return i
                        }()
                    }).catch((function() {}))
                },
                D = {
                    name: "ActionsFormatter",
                    components: {
                        ActionsGroup: k["a"]
                    },
                    extends: s["a"],
                    props: {
                        formatterArgsDefault: {
                            type: Object,
                            default: function() {
                                var e = this;
                                return {
                                    hasUpdate: !0,
                                    canUpdate: function() {
                                        return !e.$store.getters.currentOrgIsRoot
                                    },
                                    hasDelete: !0,
                                    canDelete: !0,
                                    hasClone: !0,
                                    canClone: function() {
                                        return !e.$store.getters.currentOrgIsRoot
                                    },
                                    updateRoute: this.$route.name.replace("List", "Update"),
                                    cloneRoute: this.$route.name.replace("List", "Create"),
                                    performDelete: O,
                                    onUpdate: P,
                                    onDelete: x,
                                    onClone: T,
                                    extraActions: []
                                }
                            }
                        }
                    },
                    data: function() {
                        var e = Object.assign(this.formatterArgsDefault, this.col.formatterArgs),
                            t = [{
                                name: "update",
                                title: this.$t("common.Update"),
                                type: "primary",
                                has: e.hasUpdate,
                                can: e.canUpdate,
                                callback: e.onUpdate,
                                order: 10
                            }, {
                                name: "delete",
                                title: this.$t("common.Delete"),
                                type: "danger",
                                has: e.hasDelete,
                                can: e.canDelete,
                                callback: e.onDelete,
                                order: 20
                            }, {
                                name: "clone",
                                title: this.$t("common.Clone"),
                                type: "info",
                                has: e.hasClone,
                                can: e.canClone,
                                callback: e.onClone,
                                order: 30
                            }];
                        return {
                            colActions: e,
                            defaultActions: t,
                            extraActions: e.extraActions,
                            moreActionsTitle: e.moreActionsTitle || this.$t("common.More")
                        }
                    },
                    computed: {
                        cleanedActions: function() {
                            var e = this,
                                t = [].concat(Object(S["a"])(this.defaultActions), Object(S["a"])(this.extraActions));
                            return t = _.cloneDeep(t), t = t.map((function(t) {
                                return t.has = e.cleanBoolean(t, "has", !0), t.can = e.cleanBoolean(t, "can", !0), t.callback = e.cleanCallback(t, "callback"), t.fa = e.cleanValue(t, "fa"), t.order = t.order || 100, t.tip = e.cleanValue(t, "tip"), t
                            })), t = t.filter((function(e) {
                                return e.has
                            })), t.sort((function(e, t) {
                                return e.order - t.order
                            })), t
                        },
                        actions: function() {
                            return this.cleanedActions.length <= 2 ? this.cleanedActions : this.cleanedActions.slice(0, 1)
                        },
                        moreActions: function() {
                            return this.cleanedActions.length <= 2 ? [] : this.cleanedActions.slice(1, this.cleanedActions.length)
                        },
                        loadingStatus: function() {
                            return this.col.formatterArgs.loading
                        }
                    },
                    methods: {
                        cleanBoolean: function(e, t, n) {
                            var a = e[t];
                            return "function" !== typeof a ? void 0 === a ? n : a : this.cleanValue(e, t)
                        },
                        cleanCallback: function(e, t) {
                            var n = this,
                                a = e[t],
                                r = {
                                    reload: this.reload,
                                    row: this.row,
                                    col: this.col,
                                    cellValue: this.cellValue,
                                    tableData: this.tableData
                                };
                            return function() {
                                return a.bind(n)(r)
                            }
                        },
                        cleanValue: function(e, t) {
                            var n = e[t];
                            if (!n || "function" !== typeof n) return n;
                            var a = {
                                reload: this.reload,
                                row: this.row,
                                col: this.col,
                                cellValue: this.cellValue,
                                tableData: this.tableData
                            };
                            return n(a)
                        }
                    }
                },
                j = D,
                U = Object(l["a"])(j, w, A, !1, null, "1c5b4d8a", null),
                E = U.exports,
                M = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("el-button", {
                        ref: "deleteButton",
                        attrs: {
                            size: "mini",
                            type: "danger",
                            disabled: e.iDisabled
                        },
                        on: {
                            click: function(t) {
                                return e.onDelete(e.col, e.row, e.cellValue, e.reload)
                            }
                        }
                    }, [n("i", {
                        staticClass: "fa fa-minus"
                    })])
                },
                R = [],
                L = (n("57e7"), {
                    name: "DeleteActionFormatter",
                    extends: s["a"],
                    computed: {
                        iDisabled: function() {
                            return this.disabled() || this.$store.getters.currentOrgIsRoot
                        }
                    },
                    methods: {
                        defaultOnDelete: function(e, t, n, a) {
                            var r = this,
                                i = e.deleteUrl + n;
                            this.$axios.delete(i).then((function(e) {
                                r.$message.success(r.$tc("common.deleteSuccessMsg")), a()
                            })).catch((function(e) {
                                r.$message.error(r.$t("common.deleteErrorMsg") + " " + e)
                            }))
                        },
                        onDelete: function(e, t, n, a) {
                            e.onDelete && "function" === typeof e.onDelete ? e.onDelete(e, t, n, a) : this.defaultOnDelete(e, t, n, a)
                        },
                        disabled: function() {
                            return "all" !== this.col.objects && -1 === this.col.objects.indexOf(this.cellValue)
                        }
                    }
                }),
                $ = L,
                I = Object(l["a"])($, M, R, !1, null, "5abf18c4", null),
                F = I.exports,
                V = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("span", [e._v(e._s(e.value))])
                },
                N = [],
                B = n("cf45"),
                q = {
                    name: "DateFormatter",
                    extends: s["a"],
                    data: function() {
                        var e;
                        return e = this.cellValue ? Object(B["p"])(this.cellValue) : "", {
                            value: e
                        }
                    }
                },
                H = q,
                z = Object(l["a"])(H, V, N, !1, null, "2545b9de", null),
                G = z.exports,
                K = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return e.systemUsers ? n("span", [e._v(e._s(e.systemUsers.toString()))]) : n("span", [n("a", {
                        staticStyle: {
                            color: "#1c84c6"
                        },
                        on: {
                            click: e.showSystemUser
                        }
                    }, [e._v(e._s(this.$t("common.Show")))])])
                },
                W = [],
                Q = {
                    name: "GrantedSystemUsersShowFormatter",
                    extends: s["a"],
                    props: {
                        formatterArgsDefault: {
                            type: Object,
                            default: function() {
                                return {
                                    getUrl: function(e) {
                                        e.row, e.col;
                                        return ""
                                    }
                                }
                            }
                        }
                    },
                    data: function() {
                        return {
                            systemUsers: null
                        }
                    },
                    methods: {
                        showSystemUser: function() {
                            var e = Object(C["a"])(regeneratorRuntime.mark((function e() {
                                var t, n, a;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t = Object.assign(this.formatterArgsDefault, this.col.formatterArgs), n = t.getUrl({
                                                row: this.row,
                                                col: this.col
                                            }), e.next = 4, this.$axios.get(n);
                                        case 4:
                                            a = e.sent, this.systemUsers = a.map((function(e) {
                                                return e.name
                                            }));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }()
                    }
                },
                J = Q,
                Y = Object(l["a"])(J, K, W, !1, null, "cdd0af1c", null),
                X = Y.exports,
                Z = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return 0 === e.systemuser.length ? n("span", [n("a", {
                        staticStyle: {
                            color: "#1c84c6"
                        },
                        on: {
                            click: e.showSystemUser
                        }
                    }, [e._v(e._s(this.$t("common.Show")))])]) : n("span", [e._v(e._s(e.systemuser.toString()))])
                },
                ee = [],
                te = {
                    name: "ShowKeyFormatter",
                    extends: s["a"],
                    data: function() {
                        return {
                            systemuser: []
                        }
                    },
                    computed: {},
                    mounted: function() {},
                    methods: {
                        showSystemUser: function() {
                            this.systemuser.push(this.cellValue)
                        }
                    }
                },
                ne = te,
                ae = Object(l["a"])(ne, Z, ee, !1, null, "11d4aa69", null),
                re = ae.exports,
                ie = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("el-link", {
                        staticClass: "detail",
                        attrs: {
                            type: e.col.type || "success"
                        },
                        on: {
                            click: function(t) {
                                e.dialogVisible = !0
                            }
                        }
                    }, [e._v(e._s(e.iTitle))]), e._v(" "), n("Dialog", {
                        attrs: {
                            width: "60%",
                            visible: e.dialogVisible,
                            title: e.dialogTitle,
                            "show-cancel": !0,
                            "show-confirm": !1
                        },
                        on: {
                            "update:visible": function(t) {
                                e.dialogVisible = t
                            },
                            cancel: e.onCancel
                        }
                    }, [n("DetailCard", {
                        attrs: {
                            items: e.detailCardItems,
                            title: e.detailTitle
                        }
                    })], 1)], 1)
                },
                se = [],
                oe = n("b97b"),
                ce = n("9039"),
                le = {
                    name: "DialogDetailFormatter",
                    components: {
                        DetailCard: oe["a"],
                        Dialog: ce["a"]
                    },
                    extends: s["a"],
                    props: {
                        formatterArgsDefault: {
                            type: Object,
                            default: function() {
                                return {
                                    getDetailItems: function(e) {
                                        e.col, e.row, e.cellValue;
                                        return []
                                    },
                                    getTitle: function(e) {
                                        e.col, e.row;
                                        var t = e.cellValue;
                                        return t
                                    },
                                    getDetailTitle: function(e) {
                                        e.col, e.row, e.cellValue;
                                        return ""
                                    },
                                    getDialogTile: function(e) {
                                        e.col, e.row;
                                        var t = e.cellValue;
                                        return t
                                    }
                                }
                            }
                        }
                    },
                    data: function() {
                        var e = Object.assign(this.formatterArgsDefault, this.col.formatterArgs);
                        return {
                            formatterArgs: e,
                            iTitle: e.getTitle({
                                col: this.col,
                                row: this.row,
                                cellValue: this.cellValue
                            }),
                            dialogTitle: e.getDialogTile({
                                col: this.col,
                                row: this.row,
                                cellValue: this.cellValue
                            }),
                            dialogVisible: !1,
                            detailCardItems: e.getDetailItems({
                                col: this.col,
                                row: this.row,
                                cellValue: this.cellValue
                            }),
                            detailTitle: e.getDetailTitle({
                                col: this.col,
                                row: this.row,
                                cellValue: this.cellValue
                            })
                        }
                    },
                    methods: {
                        onCancel: function() {
                            this.dialogVisible = !1
                        }
                    }
                },
                ue = le,
                de = Object(l["a"])(ue, ie, se, !1, null, "3a71f4a5", null),
                pe = de.exports,
                me = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticStyle: {
                            width: "100%",
                            "min-height": "20px"
                        },
                        on: {
                            click: function(t) {
                                return t.stopPropagation(), e.editCell(t)
                            }
                        }
                    }, [e.inEditMode ? n("el-input", {
                        staticClass: "editInput",
                        attrs: {
                            size: "mini"
                        },
                        on: {
                            blur: e.onInputEnter
                        },
                        nativeOn: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.onInputEnter(t)
                            }
                        },
                        model: {
                            value: e.value,
                            callback: function(t) {
                                e.value = t
                            },
                            expression: "value"
                        }
                    }) : [n("span", [e._v(e._s(e.cellValue))])]], 2)
                },
                he = [],
                fe = {
                    name: "EditableInputFormatter",
                    components: {},
                    extends: s["a"],
                    props: {
                        formatterArgsDefault: {
                            type: Object,
                            default: function() {
                                var e = this;
                                return {
                                    trigger: "click",
                                    onEnter: function(t) {
                                        var n = t.row,
                                            a = t.col,
                                            r = t.oldValue,
                                            i = t.newValue,
                                            s = a.prop;
                                        e.$log.debug("Set value ".concat(r, " => ").concat(i)), e.$set(n, s, i)
                                    }
                                }
                            }
                        }
                    },
                    data: function() {
                        var e = "string" === typeof this.cellValue,
                            t = this.cellValue ? JSON.stringify(this.cellValue) : "";
                        return {
                            inEditMode: !1,
                            value: e ? this.cellValue || "" : t,
                            valueIsString: e,
                            formatterArgs: Object.assign(this.formatterArgsDefault, this.col.formatterArgs)
                        }
                    },
                    methods: {
                        editCell: function() {
                            this.inEditMode = !0
                        },
                        onInputEnter: function() {
                            var e = this.value;
                            try {
                                e = JSON.parse(e)
                            } catch (t) {}
                            this.formatterArgs.onEnter({
                                row: this.row,
                                col: this.col,
                                oldValue: this.cellValue,
                                newValue: e
                            }), this.inEditMode = !1
                        },
                        cancelEdit: function() {
                            this.inEditMode = !1
                        }
                    }
                },
                ge = fe,
                be = (n("226c"), Object(l["a"])(ge, me, he, !1, null, "fc5f370a", null)),
                ve = be.exports,
                ye = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [e.formatterArgs.hasTips ? n("el-tooltip", {
                        attrs: {
                            placement: "bottom",
                            effect: "dark"
                        }
                    }, [n("div", {
                        attrs: {
                            slot: "content"
                        },
                        slot: "content"
                    }, [e.tipsIsArray ? e._l(e.tips, (function(t) {
                        return n("div", {
                            key: t
                        }, [n("span", [e._v(e._s(t))]), e._v(" "), n("br")])
                    })) : n("span", [e._v("\n        " + e._s(e.tips) + "\n      ")])], 2), e._v(" "), n("i", {
                        class: "fa " + e.iconClass
                    })]) : n("i", {
                        class: "fa " + e.iconClass
                    })], 1)
                },
                we = [],
                Ae = (n("2caf"), {
                    name: "StatusFormatter",
                    extends: s["a"],
                    props: {
                        formatterArgsDefault: {
                            type: Object,
                            default: function() {
                                return {
                                    iconChoices: {
                                        true: "fa-check text-primary",
                                        false: "fa-times text-danger"
                                    },
                                    getChoicesKey: function(e) {
                                        return !!e
                                    },
                                    getTip: function(e, t) {},
                                    hasTips: !1
                                }
                            }
                        }
                    },
                    data: function() {
                        return {
                            formatterArgs: Object.assign(this.formatterArgsDefault, this.col.formatterArgs)
                        }
                    },
                    computed: {
                        iconClass: function() {
                            var e = this.formatterArgs.getChoicesKey(this.cellValue);
                            return this.formatterArgs.iconChoices[e] + " " + e + "Status"
                        },
                        tips: function() {
                            var e = this;
                            return this.formatterArgs.getTip(this.cellValue, e)
                        },
                        tipsIsArray: function() {
                            return Array.isArray(this.tips)
                        }
                    }
                }),
                Se = Ae,
                Ce = Object(l["a"])(Se, ye, we, !1, null, "691906eb", null),
                ke = Ce.exports;
            n.d(t, "f", (function() {
                return d
            })), n.d(t, "h", (function() {
                return v["a"]
            })), n.d(t, "c", (function() {
                return y["a"]
            })), n.d(t, "a", (function() {
                return E
            })), n.d(t, "e", (function() {
                return F
            })), n.d(t, "d", (function() {
                return G
            })), n.d(t, "l", (function() {
                return X
            })), n.d(t, "j", (function() {
                return re
            })), n.d(t, "g", (function() {
                return pe
            })), n.d(t, "b", (function() {
                return b
            })), n.d(t, "i", (function() {
                return ve
            })), n.d(t, "k", (function() {
                return ke
            }));
            v["a"], y["a"]
        },
        eaa2: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("span", {
                        class: e.cls
                    }, [e._v(" " + e._s(e.value))])
                },
                r = [],
                i = n("bb1a"),
                s = {
                    name: "DisplayFormatter",
                    extends: i["a"],
                    props: {
                        formatterArgsDefault: {
                            type: Object,
                            default: function() {
                                return {
                                    displayKey: this.col.prop + "_display"
                                }
                            }
                        }
                    },
                    data: function() {
                        return {
                            formatterArgs: Object.assign(this.formatterArgsDefault, this.col.formatterArgs)
                        }
                    },
                    computed: {
                        value: function() {
                            var e = this.formatterArgs.displayKey,
                                t = this.row[e];
                            return void 0 === t && (t = this.row[this.col.prop]), t
                        },
                        cls: function() {
                            var e, t = null === (e = this.formatterArgs) || void 0 === e ? void 0 : e.classChoices;
                            return t ? t[this.cellValue] : ""
                        }
                    },
                    methods: {}
                },
                o = s,
                c = n("2877"),
                l = Object(c["a"])(o, a, r, !1, null, "448228a6", null);
            t["a"] = l.exports
        },
        eb1b: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-form",
                    use: "icon-form-usage",
                    viewBox: "0 0 128 128",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-form"><path d="M84.068 23.784c-1.02 0-1.877-.32-2.572-.96a8.588 8.588 0 0 1-1.738-2.237 11.524 11.524 0 0 1-1.042-2.621c-.232-.895-.348-1.641-.348-2.238V0h.278c.834 0 1.622.085 2.363.256.742.17 1.645.575 2.711 1.214 1.066.64 2.363 1.535 3.892 2.686 1.53 1.15 3.453 2.664 5.77 4.54 2.502 2.045 4.494 3.771 5.977 5.178 1.483 1.406 2.618 2.6 3.406 3.58.787.98 1.274 1.812 1.46 2.494.185.682.277 1.278.277 1.79v2.046H84.068zM127.3 84.01c.278.682.464 1.535.556 2.558.093 1.023-.37 2.003-1.39 2.94-.463.427-.88.832-1.25 1.215-.372.384-.696.704-.974.96a6.69 6.69 0 0 1-.973.767l-11.816-10.741a44.331 44.331 0 0 0 1.877-1.535 31.028 31.028 0 0 1 1.737-1.406c1.112-.938 2.317-1.343 3.615-1.215 1.297.128 2.363.405 3.197.83.927.427 1.923 1.173 2.989 2.239 1.065 1.065 1.876 2.195 2.432 3.388zM78.23 95.902c2.038 0 3.752-.511 5.143-1.534l-26.969 25.83H18.037c-1.761 0-3.684-.47-5.77-1.407a24.549 24.549 0 0 1-5.838-3.709 21.373 21.373 0 0 1-4.518-5.306c-1.204-2.003-1.807-4.07-1.807-6.202V16.495c0-1.79.44-3.665 1.32-5.626A18.41 18.41 0 0 1 5.04 5.562a21.798 21.798 0 0 1 5.213-3.964C12.198.533 14.237 0 16.37 0h53.24v15.984c0 1.62.278 3.367.834 5.242a16.704 16.704 0 0 0 2.572 5.179c1.159 1.577 2.665 2.898 4.518 3.964 1.853 1.066 4.078 1.598 6.673 1.598h20.295v42.325L85.458 92.45c1.02-1.364 1.529-2.856 1.529-4.476 0-2.216-.857-4.113-2.572-5.69-1.714-1.577-3.776-2.366-6.186-2.366H26.1c-2.409 0-4.448.789-6.116 2.366-1.668 1.577-2.502 3.474-2.502 5.69 0 2.217.834 4.092 2.502 5.626 1.668 1.535 3.707 2.302 6.117 2.302h52.13zM26.1 47.951c-2.41 0-4.449.789-6.117 2.366-1.668 1.577-2.502 3.473-2.502 5.69 0 2.216.834 4.092 2.502 5.626 1.668 1.534 3.707 2.302 6.117 2.302h52.13c2.409 0 4.47-.768 6.185-2.302 1.715-1.534 2.572-3.41 2.572-5.626 0-2.217-.857-4.113-2.572-5.69-1.714-1.577-3.776-2.366-6.186-2.366H26.1zm52.407 64.063l1.807-1.663 3.476-3.196a479.75 479.75 0 0 0 4.587-4.284 500.757 500.757 0 0 1 5.004-4.667c3.985-3.666 8.48-7.758 13.485-12.276l11.677 10.741-13.485 12.404-5.004 4.603-4.587 4.22a179.46 179.46 0 0 0-3.267 3.068c-.88.853-1.367 1.322-1.46 1.407-.463.341-.973.703-1.529 1.087-.556.383-1.112.703-1.668.959-.556.256-1.413.575-2.572.959a83.5 83.5 0 0 1-3.545 1.087 72.2 72.2 0 0 1-3.475.895c-1.112.256-1.946.426-2.502.511-1.112.17-1.854.043-2.224-.383-.371-.426-.464-1.151-.278-2.174.092-.511.278-1.279.556-2.302.278-1.023.602-2.067.973-3.132l1.042-3.005c.325-.938.58-1.577.765-1.918a10.157 10.157 0 0 1 2.224-2.941z" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        eba9: function(e, t, n) {},
        ec9d: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-inbox",
                    use: "icon-inbox-usage",
                    viewBox: "0 0 1024 1024",
                    content: '<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="icon-inbox"><defs><style type="text/css"></style></defs><path d="M657.700803 548.571429l180.589714 0q-0.585143-1.682286-1.462857-4.534857t-1.462857-4.534857l-121.124571-283.428571-404.553143 0-121.124571 283.428571q-0.585143 1.170286-1.462857 4.534857t-1.462857 4.534857l180.589714 0 54.272 109.714286 182.857143 0zM950.857374 565.686857l0 275.456q0 14.848-10.825143 25.746286t-25.746286 10.825143l-804.571429 0q-14.848 0-25.746286-10.825143t-10.825143-25.746286l0-275.456q0-35.401143 14.262857-70.290286l135.972571-315.465143q5.705143-14.262857 20.845714-23.990857t29.988571-9.728l475.428571 0q14.848 0 29.988571 9.728t20.845714 23.990857l135.972571 315.465143q14.262857 34.889143 14.262857 70.290286z" p-id="5046" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        ecea: function(e, t, n) {
            "use strict";
            var a = n("4d15"),
                r = n.n(a);
            r.a
        },
        eda1: function(e, t, n) {
            "use strict";
            var a = n("eba9"),
                r = n.n(a);
            r.a
        },
        ede6: function(e, t, n) {},
        f12c: function(e, t, n) {},
        f782: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("e017"),
                r = n.n(a),
                i = n("21a1"),
                s = n.n(i),
                o = new r.a({
                    id: "icon-dashboard",
                    use: "icon-dashboard-usage",
                    viewBox: "0 0 128 100",
                    content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 100" id="icon-dashboard"><path d="M27.429 63.638c0-2.508-.893-4.65-2.679-6.424-1.786-1.775-3.94-2.662-6.464-2.662-2.524 0-4.679.887-6.465 2.662-1.785 1.774-2.678 3.916-2.678 6.424 0 2.508.893 4.65 2.678 6.424 1.786 1.775 3.94 2.662 6.465 2.662 2.524 0 4.678-.887 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zm13.714-31.801c0-2.508-.893-4.65-2.679-6.424-1.785-1.775-3.94-2.662-6.464-2.662-2.524 0-4.679.887-6.464 2.662-1.786 1.774-2.679 3.916-2.679 6.424 0 2.508.893 4.65 2.679 6.424 1.785 1.774 3.94 2.662 6.464 2.662 2.524 0 4.679-.888 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zM71.714 65.98l7.215-27.116c.285-1.23.107-2.378-.536-3.443-.643-1.064-1.56-1.762-2.75-2.094-1.19-.33-2.333-.177-3.429.462-1.095.639-1.81 1.573-2.143 2.804l-7.214 27.116c-2.857.237-5.405 1.266-7.643 3.088-2.238 1.822-3.738 4.152-4.5 6.992-.952 3.644-.476 7.098 1.429 10.364 1.905 3.265 4.69 5.37 8.357 6.317 3.667.947 7.143.474 10.429-1.42 3.285-1.892 5.404-4.66 6.357-8.305.762-2.84.619-5.607-.429-8.305-1.047-2.697-2.762-4.85-5.143-6.46zm47.143-2.342c0-2.508-.893-4.65-2.678-6.424-1.786-1.775-3.94-2.662-6.465-2.662-2.524 0-4.678.887-6.464 2.662-1.786 1.774-2.679 3.916-2.679 6.424 0 2.508.893 4.65 2.679 6.424 1.786 1.775 3.94 2.662 6.464 2.662 2.524 0 4.679-.887 6.465-2.662 1.785-1.775 2.678-3.916 2.678-6.424zm-45.714-45.43c0-2.509-.893-4.65-2.679-6.425C68.68 10.01 66.524 9.122 64 9.122c-2.524 0-4.679.887-6.464 2.661-1.786 1.775-2.679 3.916-2.679 6.425 0 2.508.893 4.65 2.679 6.424 1.785 1.774 3.94 2.662 6.464 2.662 2.524 0 4.679-.888 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zm32 13.629c0-2.508-.893-4.65-2.679-6.424-1.785-1.775-3.94-2.662-6.464-2.662-2.524 0-4.679.887-6.464 2.662-1.786 1.774-2.679 3.916-2.679 6.424 0 2.508.893 4.65 2.679 6.424 1.785 1.774 3.94 2.662 6.464 2.662 2.524 0 4.679-.888 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zM128 63.638c0 12.351-3.357 23.78-10.071 34.286-.905 1.372-2.19 2.058-3.858 2.058H13.93c-1.667 0-2.953-.686-3.858-2.058C3.357 87.465 0 76.037 0 63.638c0-8.613 1.69-16.847 5.071-24.703C8.452 31.08 13 24.312 18.714 18.634c5.715-5.68 12.524-10.199 20.429-13.559C47.048 1.715 55.333.035 64 .035c8.667 0 16.952 1.68 24.857 5.04 7.905 3.36 14.714 7.88 20.429 13.559 5.714 5.678 10.262 12.446 13.643 20.301 3.38 7.856 5.071 16.09 5.071 24.703z" /></symbol>'
                });
            s.a.add(o);
            t["default"] = o
        },
        f89b: function(e, t, n) {
            "use strict";
            var a = n("1f65"),
                r = n.n(a);
            r.a
        },
        f9bc: function(e, t, n) {
            "use strict";
            var a = n("96f0"),
                r = n.n(a);
            r.a
        },
        fb2f: function(e, t, n) {
            "use strict";
            var a = n("b501"),
                r = n.n(a);
            r.a
        },
        fcdb: function(e, t, n) {
            "use strict";
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "el-data-table"
                    }, [e.showNoData ? [e._t("no-data")] : [n("el-table", e._g(e._b({
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.loading,
                            expression: "loading"
                        }],
                        ref: "table",
                        attrs: {
                            data: e.data,
                            "row-class-name": e.rowClassName
                        },
                        on: {
                            "selection-change": e.selectStrategy.onSelectionChange,
                            select: e.selectStrategy.onSelect,
                            "select-all": function(t) {
                                return e.selectStrategy.onSelectAll(t, e.canSelect)
                            },
                            "sort-change": e.onSortChange
                        }
                    }, "el-table", e.tableAttrs, !1), e.$listeners), [e.isTree ? [e.hasSelect ? [n("el-data-table-column", e._b({
                        key: "selection-key"
                    }, "el-data-table-column", Object.assign({}, {
                        align: e.columnsAlign
                    }, e.columns[0]), !1)), e._v(" "), n("el-data-table-column", e._b({
                        key: "tree-ctrl",
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._l(t.row._level, (function(e) {
                                    return n("span", {
                                        key: e,
                                        staticClass: "ms-tree-space"
                                    })
                                })), e._v(" "), e.iconShow(t.$index, t.row) ? n("span", {
                                    staticClass: "tree-ctrl",
                                    on: {
                                        click: function(n) {
                                            return e.toggleExpanded(t.$index)
                                        }
                                    }
                                }, [n("i", {
                                    class: "el-icon-" + (t.row._expanded ? "minus" : "plus")
                                })]) : e._e(), e._v("\n              " + e._s(t.row[e.columns[1].prop]) + "\n            ")]
                            }
                        }], null, !1, 1266978847)
                    }, "el-data-table-column", Object.assign({}, {
                        align: e.columnsAlign
                    }, e.columns[1]), !1)), e._v(" "), e._l(e.columns.filter((function(e, t) {
                        return 0 !== t && 1 !== t
                    })), (function(t) {
                        return n("el-data-table-column", e._b({
                            key: t.prop
                        }, "el-data-table-column", Object.assign({}, {
                            align: e.columnsAlign
                        }, t), !1))
                    }))] : [n("el-data-table-column", e._b({
                        key: "tree-ctrl",
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._l(t.row._level, (function(e) {
                                    return n("span", {
                                        key: e,
                                        staticClass: "ms-tree-space"
                                    })
                                })), e._v(" "), e.iconShow(t.$index, t.row) ? n("span", {
                                    staticClass: "tree-ctrl",
                                    on: {
                                        click: function(n) {
                                            return e.toggleExpanded(t.$index)
                                        }
                                    }
                                }, [n("i", {
                                    class: "el-icon-" + (t.row._expanded ? "minus" : "plus")
                                })]) : e._e(), e._v("\n              " + e._s(t.row[e.columns[0].prop]) + "\n            ")]
                            }
                        }], null, !1, 889764958)
                    }, "el-data-table-column", Object.assign({}, {
                        align: e.columnsAlign
                    }, e.columns[0]), !1)), e._v(" "), e._l(e.columns.filter((function(e, t) {
                        return 0 !== t
                    })), (function(t) {
                        return n("el-data-table-column", e._b({
                            key: t.prop
                        }, "el-data-table-column", Object.assign({}, {
                            align: e.columnsAlign
                        }, t), !1))
                    }))]] : [e.hasSelection ? n("el-data-table-column", {
                        attrs: {
                            type: "selection",
                            align: e.selectionAlign,
                            selectable: e.canSelect
                        }
                    }) : e._e(), e._v(" "), e._l(e.columns, (function(t) {
                        return n("el-data-table-column", e._b({
                            key: t.prop,
                            attrs: {
                                formatter: "function" === typeof t.formatter ? t.formatter : null,
                                filters: t.filters || null,
                                "filter-multiple": !1,
                                "filter-method": "function" === typeof t.filterMethod ? t.filterMethod : null
                            },
                            scopedSlots: e._u([t.formatter && "function" !== typeof t.formatter ? {
                                key: "default",
                                fn: function(a) {
                                    var r = a.row,
                                        i = a.column,
                                        s = a.index;
                                    return [n(t.formatter, {
                                        key: r.id,
                                        tag: "div",
                                        attrs: {
                                            "table-data": e.data,
                                            row: r,
                                            column: i,
                                            index: s,
                                            url: e.url,
                                            reload: e.getList,
                                            col: t,
                                            "cell-value": r[t.prop]
                                        }
                                    })]
                                }
                            } : null], null, !0)
                        }, "el-data-table-column", Object.assign({}, {
                            align: e.columnsAlign
                        }, t), !1))
                    }))], e._v(" "), e._t("default")], 2), e._v(" "), e.hasPagination ? n("el-pagination", e._b({
                        staticStyle: {
                            "text-align": "right",
                            padding: "10px 0"
                        },
                        attrs: {
                            "current-page": e.page,
                            "page-sizes": e.paginationSizes,
                            "page-size": e.size,
                            total: e.total,
                            background: e.paginationBackground,
                            layout: e.paginationLayout
                        },
                        on: {
                            "size-change": e.handleSizeChange,
                            "current-change": e.handleCurrentChange
                        }
                    }, "el-pagination", e.extraPaginationAttrs, !1)) : e._e(), e._v(" "), n("the-dialog", {
                        ref: "dialog",
                        attrs: {
                            "new-title": e.dialogNewTitle,
                            "edit-title": e.dialogEditTitle,
                            "view-title": e.dialogViewTitle,
                            form: e.form,
                            "form-attrs": e.formAttrs,
                            "dialog-attrs": e.dialogAttrs,
                            "button-size": e.buttonSize
                        },
                        on: {
                            confirm: e.onConfirm
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._t("form", null, {
                                    row: t.row
                                })]
                            }
                        }], null, !0)
                    })]], 2)
                },
                r = [],
                i = (n("58b2"), n("8e6e"), n("55dd"), n("1c01"), n("f3e2"), n("57e7"), n("96cf"), n("3b8d")),
                s = (n("6b54"), n("87b3"), n("4f37"), n("ac6a"), n("456d"), n("d25f"), n("0cd8"), n("bd86")),
                o = (n("386d"), n("759f"), n("6d67"), n("2caf"), n("c5f6"), n("c832")),
                c = n.n(o),
                l = n("6df4"),
                u = n.n(l),
                d = n("23db"),
                p = n.n(d),
                m = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n(e.isText ? "text-button" : "el-button", e._g(e._b({
                        tag: "component",
                        attrs: {
                            loading: e.loading,
                            type: e.type
                        },
                        on: {
                            click: e.handleClick
                        }
                    }, "component", e.$attrs, !1), e.$listeners), [e._t("default")], 2)
                },
                h = [],
                f = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("el-button", e._g(e._b({
                        style: e.style,
                        attrs: {
                            type: e.$attrs.type || "primary",
                            plain: ""
                        }
                    }, "el-button", e.$attrs, !1), e.$listeners), [e._t("default")], 2)
                },
                g = [],
                b = {
                    data: function() {
                        return {
                            style: {
                                border: "none",
                                background: "inherit",
                                padding: "9px 0"
                            }
                        }
                    },
                    mounted: function() {
                        this.style = Object.assign({}, this.style, {
                            color: getComputedStyle(this.$el).color
                        })
                    }
                },
                v = b,
                y = n("2877"),
                w = Object(y["a"])(v, f, g, !1, null, null, null),
                A = w.exports,
                S = {
                    components: {
                        TextButton: A
                    },
                    props: {
                        isText: {
                            type: Boolean,
                            default: !1
                        },
                        type: String,
                        click: {
                            type: Function
                        },
                        params: {},
                        callback: {
                            type: Function,
                            default: function() {}
                        }
                    },
                    data: function() {
                        return {
                            loading: !1
                        }
                    },
                    methods: {
                        handleClick: function() {
                            var e = this;
                            this.click && (this.loading = !0, Promise.resolve(this.click(this.params)).then((function(t) {
                                !1 !== t && e.callback()
                            })).catch((function(e) {})).finally((function(t) {
                                e.loading = !1
                            })))
                        }
                    }
                },
                C = S,
                k = Object(y["a"])(C, m, h, !1, null, null, null),
                O = k.exports,
                P = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("el-dialog", e._b({
                        ref: "dialog",
                        attrs: {
                            title: e.title,
                            visible: e.visible
                        },
                        on: {
                            "update:visible": function(t) {
                                e.visible = t
                            },
                            close: e.resetFields
                        }
                    }, "el-dialog", e.dialogAttrs, !1), [n("el-form-renderer", e._b({
                        ref: "form",
                        attrs: {
                            content: e.form,
                            disabled: e.isView
                        }
                    }, "el-form-renderer", e.formAttrs, !1), [e._t("default", null, {
                        row: e.slotData
                    })], 2), e._v(" "), n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.isView,
                            expression: "!isView"
                        }],
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [n("el-button", {
                        attrs: {
                            size: e.buttonSize
                        },
                        on: {
                            click: function(t) {
                                e.visible = !1
                            }
                        }
                    }, [e._v("取 消")]), e._v(" "), n("el-button", {
                        attrs: {
                            type: "primary",
                            loading: e.confirmLoading,
                            size: e.buttonSize
                        },
                        on: {
                            click: e.confirm
                        }
                    }, [e._v("确 定")])], 1)], 1)
                },
                T = [],
                _ = {
                    new: "new",
                    edit: "edit",
                    view: "view"
                },
                x = {
                    props: {
                        newTitle: {
                            type: String,
                            required: !0
                        },
                        editTitle: {
                            type: String,
                            required: !0
                        },
                        viewTitle: {
                            type: String,
                            required: !0
                        },
                        form: {
                            type: Array,
                            required: !0
                        },
                        formAttrs: {
                            type: Object,
                            required: !0
                        },
                        dialogAttrs: {
                            type: Object,
                            required: !0
                        },
                        buttonSize: String
                    },
                    data: function() {
                        return {
                            mode: _.new,
                            visible: !1,
                            confirmLoading: !1,
                            slotData: null
                        }
                    },
                    computed: {
                        title: function() {
                            switch (this.mode) {
                                case _.edit:
                                    return this.editTitle;
                                case _.view:
                                    return this.viewTitle;
                                default:
                                    return this.newTitle
                            }
                        },
                        isView: function() {
                            return this.mode === _.view
                        }
                    },
                    methods: {
                        show: function(e, t) {
                            var n = this;
                            this.mode = e, this.visible = !0, t && this.$refs.dialog.$once("opened", (function() {
                                n.$refs.form.updateForm(t), n.slotData = t
                            }))
                        },
                        confirm: function() {
                            var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                                var t, n, a, r, i = this;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, new Promise(this.$refs.form.validate);
                                        case 2:
                                            if (t = e.sent, t) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            n = this.$refs.form.getFormValue(), a = this.mode === _.new, this.confirmLoading = !0, r = function() {
                                                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                                i.confirmLoading = !1, e && (i.visible = !1)
                                            }, this.$emit("confirm", a, n, r);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        resetFields: function() {
                            this.$refs.form.resetFields(), this.slotData = null
                        }
                    }
                },
                D = x,
                j = Object(y["a"])(D, P, T, !1, null, null, null),
                U = j.exports;

            function E(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(n), !0).forEach((function(t) {
                        Object(s["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var R = {
                    name: "el-data-table-column",
                    functional: !0,
                    render: function(e, t) {
                        var n = t.data,
                            a = t.props,
                            r = [],
                            i = a.align;
                        return a.columns && (r = a.columns.map((function(t) {
                            return e("el-data-table-column", {
                                props: Object.assign({}, {
                                    align: i
                                }, t)
                            })
                        }))), n.props = M({}, n.props), e("el-table-column", n, r)
                    }
                },
                L = n("5f9c"),
                $ = (n("7514"), n("20d6"), n("308d")),
                I = n("6bb5"),
                F = n("4e2b"),
                V = (n("d92a"), n("d225")),
                N = n("b0b4"),
                B = function() {
                    function e(t) {
                        Object(V["a"])(this, e), this.elDataTable = t, this.onSelectionChange = this.onSelectionChange.bind(this), this.onSelect = this.onSelect.bind(this), this.onSelectAll = this.onSelectAll.bind(this)
                    }
                    return Object(N["a"])(e, [{
                        key: "onSelectionChange",
                        value: function() {}
                    }, {
                        key: "onSelect",
                        value: function() {}
                    }, {
                        key: "onSelectAll",
                        value: function() {}
                    }, {
                        key: "toggleRowSelection",
                        value: function() {}
                    }, {
                        key: "clearSelection",
                        value: function() {}
                    }, {
                        key: "updateElTableSelection",
                        value: function() {}
                    }, {
                        key: "elTable",
                        get: function() {
                            return this.elDataTable.$refs.table
                        }
                    }]), e
                }(),
                q = function(e) {
                    function t() {
                        return Object(V["a"])(this, t), Object($["a"])(this, Object(I["a"])(t).apply(this, arguments))
                    }
                    return Object(F["a"])(t, e), Object(N["a"])(t, [{
                        key: "onSelectionChange",
                        value: function(e) {
                            this.elDataTable.selected = e
                        }
                    }, {
                        key: "toggleRowSelection",
                        value: function() {
                            var e;
                            return (e = this.elTable).toggleRowSelection.apply(e, arguments)
                        }
                    }, {
                        key: "clearSelection",
                        value: function() {
                            return this.elTable.clearSelection()
                        }
                    }]), t
                }(B),
                H = function(e) {
                    function t() {
                        return Object(V["a"])(this, t), Object($["a"])(this, Object(I["a"])(t).apply(this, arguments))
                    }
                    return Object(F["a"])(t, e), Object(N["a"])(t, [{
                        key: "onSelect",
                        value: function(e, t) {
                            var n = e.indexOf(t) > -1;
                            this.toggleRowSelection(t, n)
                        }
                    }, {
                        key: "onSelectAll",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                                    return !0
                                },
                                a = !!e.length;
                            this.elDataTable.data.forEach((function(e) {
                                n(e) && t.toggleRowSelection(e, a)
                            }))
                        }
                    }, {
                        key: "toggleRowSelection",
                        value: function(e, t) {
                            var n = this.elDataTable,
                                a = n.id,
                                r = n.selected,
                                i = r.findIndex((function(t) {
                                    return t[a] === e[a]
                                }));
                            "undefined" === typeof t && (t = i <= -1), t && -1 === i ? r.push(e) : !t && i > -1 && r.splice(i, 1), this.elDataTable.$emit("toggle-row-selection", t, e), this.updateElTableSelection()
                        }
                    }, {
                        key: "clearSelection",
                        value: function() {
                            this.elDataTable.selected = [], this.updateElTableSelection()
                        }
                    }, {
                        key: "updateElTableSelection",
                        value: function() {
                            var e = this,
                                t = this.elDataTable,
                                n = t.data,
                                a = t.id,
                                r = t.selected;
                            n.forEach((function(t) {
                                var n = !!r.find((function(e) {
                                    return t[a] === e[a]
                                }));
                                e.elTable && e.elTable.toggleRowSelection(t, n)
                            }))
                        }
                    }]), t
                }(B);

            function z(e) {
                return e.persistSelection ? new H(e) : new q(e)
            }
            var G = function(e, t) {
                    var n = Object.keys(e);
                    return n.filter((function(e) {
                        return e.indexOf(t) > -1
                    }))
                },
                K = function(e, t) {
                    return e.map((function(e) {
                        var n = e.on && e.on.input;
                        return e.searchImmediately ? Object.assign(e, {
                            on: Object.assign({}, e.on, {
                                input: function() {
                                    if ("function" === typeof n) {
                                        for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
                                        n.call.apply(n, [e].concat(r))
                                    }
                                    t.search()
                                }
                            })
                        }) : e
                    }))
                },
                W = n("fdfa"),
                Q = n("3c4e"),
                J = n.n(Q);

            function Y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function X(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Y(Object(n), !0).forEach((function(t) {
                        Object(s["a"])(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Z = 1,
                ee = "payload",
                te = {
                    name: "ElDataTable",
                    components: {
                        SelfLoadingButton: O,
                        TheDialog: U,
                        ElDataTableColumn: R
                    },
                    props: {
                        url: {
                            type: String,
                            default: ""
                        },
                        id: {
                            type: String,
                            default: "id"
                        },
                        firstPage: {
                            type: Number,
                            default: Z
                        },
                        dataPath: {
                            type: String,
                            default: "payload.content"
                        },
                        totalPath: {
                            type: String,
                            default: "payload.totalElements"
                        },
                        pageKey: {
                            type: String,
                            default: "page"
                        },
                        pageSizeKey: {
                            type: String,
                            default: "size"
                        },
                        columns: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        transformQuery: {
                            type: Function,
                            default: null
                        },
                        searchForm: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        canSearchCollapse: {
                            type: Boolean,
                            default: !1
                        },
                        beforeSearch: {
                            type: Function,
                            default: function() {}
                        },
                        single: {
                            type: Boolean,
                            default: !1
                        },
                        persistSelection: {
                            type: Boolean,
                            default: !1
                        },
                        hasOperation: {
                            type: Boolean,
                            default: !0
                        },
                        extraButtons: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        headerButtons: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        hasNew: {
                            type: Boolean,
                            default: !0
                        },
                        hasAction: {
                            type: Boolean,
                            default: !0
                        },
                        hasUpload: {
                            type: Boolean,
                            default: !0
                        },
                        hasEdit: {
                            type: Boolean,
                            default: !0
                        },
                        hasView: {
                            type: Boolean,
                            default: !1
                        },
                        hasDelete: {
                            type: Boolean,
                            default: !0
                        },
                        newText: {
                            type: String,
                            default: "新增"
                        },
                        editText: {
                            type: String,
                            default: "修改"
                        },
                        viewText: {
                            type: String,
                            default: "查看"
                        },
                        deleteText: {
                            type: String,
                            default: "删除"
                        },
                        deleteMessage: {
                            type: Function,
                            default: function() {
                                return "确认".concat(this.deleteText, "吗?")
                            }
                        },
                        canDelete: {
                            type: Function,
                            default: function() {
                                return !0
                            }
                        },
                        canEdit: {
                            type: Function,
                            default: function() {
                                return !0
                            }
                        },
                        onNew: {
                            type: Function,
                            default: function(e) {
                                return this.$axios.post(this.url, e, this.axiosConfig)
                            }
                        },
                        onEdit: {
                            type: Function,
                            default: function(e) {}
                        },
                        onDelete: {
                            type: Function,
                            default: function(e) {
                                var t = this,
                                    n = Array.isArray(e) ? e.map((function(e) {
                                        return e[t.id]
                                    })).join(",") : e[this.id];
                                return this.$axios.delete(this.url + "/" + n + "/", this.axiosConfig)
                            }
                        },
                        onSuccess: {
                            type: Function,
                            default: function() {
                                return this.$message.success("操作成功")
                            }
                        },
                        hasPagination: {
                            type: Boolean,
                            default: !0
                        },
                        paginationLayout: {
                            type: String,
                            default: "total, sizes, prev, pager, next, jumper"
                        },
                        paginationSizes: {
                            type: Array,
                            default: function() {
                                return [10, 20, 30, 40, 50]
                            }
                        },
                        paginationPagerCount: {
                            type: Number,
                            default: 5
                        },
                        paginationSize: {
                            type: Number,
                            default: 10
                        },
                        noPaginationSize: {
                            type: Number,
                            default: 999
                        },
                        isTree: {
                            type: Boolean,
                            default: !1
                        },
                        treeChildKey: {
                            type: String,
                            default: "children"
                        },
                        treeParentKey: {
                            type: String,
                            default: "parentId"
                        },
                        treeParentValue: {
                            type: String,
                            default: "id"
                        },
                        expandAll: {
                            type: Boolean,
                            default: !1
                        },
                        tableAttrs: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        operationAttrs: {
                            type: Object,
                            default: function() {
                                return {
                                    width: "",
                                    fixed: "right"
                                }
                            }
                        },
                        dialogNewTitle: {
                            type: String,
                            default: function() {
                                return this.newText
                            }
                        },
                        dialogEditTitle: {
                            type: String,
                            default: function() {
                                return this.editText
                            }
                        },
                        dialogViewTitle: {
                            type: String,
                            default: function() {
                                return this.viewText
                            }
                        },
                        form: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        formAttrs: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        dialogAttrs: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        extraParams: {
                            type: Object,
                            default: function() {}
                        },
                        extraBody: {
                            type: Object,
                            default: function() {}
                        },
                        beforeConfirm: {
                            type: Function,
                            default: function() {
                                return Promise.resolve()
                            }
                        },
                        customQuery: {
                            type: Object,
                            default: function() {}
                        },
                        extraQuery: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        saveQuery: {
                            type: Boolean,
                            default: !0
                        },
                        operationButtonType: {
                            type: String,
                            default: "text"
                        },
                        buttonSize: {
                            type: String,
                            default: "small"
                        },
                        axiosConfig: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        defaultAlign: {
                            type: String,
                            default: "center"
                        },
                        selectionAlign: {
                            type: String,
                            default: "center"
                        },
                        paginationBackground: {
                            type: Boolean,
                            default: !0
                        },
                        extraPaginationAttrs: {
                            type: Object,
                            default: function() {}
                        },
                        hasSelection: {
                            type: Boolean,
                            default: !0
                        },
                        hasDetail: {
                            type: Boolean,
                            default: !0
                        },
                        canSelect: {
                            type: Function,
                            default: function(e, t) {
                                return !0
                            }
                        },
                        totalData: {
                            type: Array,
                            default: null
                        }
                    },
                    data: function() {
                        return {
                            data: [],
                            size: this.paginationSize || this.paginationSizes[0],
                            page: Z,
                            total: null,
                            loading: !1,
                            selected: [],
                            row: {},
                            initExtraQuery: JSON.stringify(this.extraQuery || this.customQuery || {}),
                            isSearchCollapse: !1,
                            showNoData: !1,
                            innerQuery: {}
                        }
                    },
                    computed: {
                        hasSelect: function() {
                            return this.columns.length && "selection" === this.columns[0].type
                        },
                        selectable: function() {
                            return this.hasSelect && this.columns[0].selectable ? this.columns[0].selectable : function() {
                                return !0
                            }
                        },
                        columnsAlign: function() {
                            return this.columns.some((function(e) {
                                return e.columns && e.columns.length
                            })) ? "center" : this.defaultAlign
                        },
                        routerMode: function() {
                            return this.$router ? this.$router.mode : "hash"
                        },
                        hasSearchForm: function() {
                            return this.searchForm.length || this.$slots.search
                        },
                        hasHeader: function() {
                            return this.hasNew || this.hasSelect && this.hasDelete || this.headerButtons.length || this.canSearchCollapse || this.$scopedSlots.header
                        },
                        _extraBody: function() {
                            return this.extraBody || this.extraParams || {}
                        },
                        _extraQuery: function() {
                            return this.extraQuery || this.customQuery || {}
                        },
                        selectStrategy: function() {
                            return z(this)
                        },
                        searchLocatedSlotKeys: function() {
                            return G(this.$slots, "search:")
                        },
                        collapseForm: function() {
                            var e = this;
                            return this.searchForm.map((function(t) {
                                if ("collapsible" in t && !t.collapsible) return t;
                                var n = t.hidden || function() {
                                    return !1
                                };
                                return X({}, t, {
                                    hidden: function(t) {
                                        return e.isSearchCollapse || n(t)
                                    }
                                })
                            }))
                        },
                        _searchForm: function() {
                            return K(this.collapseForm, this)
                        },
                        lastPageNum: function() {
                            var e = this.firstPage - Z,
                                t = Math.ceil(this.total / this.size),
                                n = t + e;
                            return n
                        }
                    },
                    watch: {
                        url: {
                            handler: function(e) {
                                e && (this.page = Z, this.$nextTick(this.getList))
                            },
                            immediate: !0
                        },
                        selected: function(e) {
                            this.$emit("selection-change", e)
                        },
                        totalData: function(e) {
                            e && e.length !== this.total && (this.page = Z, this.total = e.length, this.getList())
                        }
                    },
                    mounted: function() {
                        if (this.saveQuery) {
                            var e = L["b"](location.href);
                            e && (this.page = parseInt(e[this.pageKey]), this.size = parseInt(e[this.pageSizeKey]), this.$refs.searchForm && (delete e[this.pageKey], delete e[this.pageSizeKey], this.$refs.searchForm.updateForm(e)))
                        }
                        this.totalData && this.getList()
                    },
                    methods: {
                        getQuery: function() {
                            var e = {},
                                t = {};
                            this.$refs.searchForm && (t = this.$refs.searchForm.getFormValue(), Object.assign(e, t)), Object.assign(e, this._extraQuery), Object.assign(e, this.innerQuery), e[this.pageSizeKey] = this.hasPagination ? this.size : this.noPaginationSize;
                            var n = this.firstPage - Z;
                            return e[this.pageKey] = this.hasPagination ? this.page + n : -1, e = Object.keys(e).filter((function(t) {
                                return !Object(W["a"])(e[t])
                            })).reduce((function(t, n) {
                                return t[n] = e[n].toString().trim(), t
                            }), {}), this.transformQuery && (e = this.transformQuery(e)), e
                        },
                        getPageData: function() {
                            return this.data
                        },
                        gotoNextPage: function() {
                            var e = Object(i["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.hasNextPage()) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", !1);
                                        case 2:
                                            return this.page += 1, e.next = 5, this.getList({
                                                loading: !0
                                            });
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));

                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        hasNextPage: function() {
                            return this.page < this.lastPageNum
                        },
                        getList: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.loading,
                                n = void 0 === t || t,
                                a = this.url;
                            return a ? this.getListFromRemote({
                                loading: n
                            }) : this.totalData ? this.getListFromStaticData({
                                loading: !0
                            }) : void 0
                        },
                        getListFromStaticData: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.loading,
                                n = void 0 === t || t;
                            if (n && (this.loading = !0), !this.hasPagination) return this.data = this.totalData, this.loading = !1, this.isTree && (this.data = this.tree2Array(this.data, this.expandAll)), this.data;
                            var a = this.firstPage - Z,
                                r = 0 === this.page ? 1 : this.page,
                                i = (r + a - 1) * this.size,
                                s = (r + a) * this.size;
                            return this.$log.debug("page: ".concat(r, ", size: ").concat(this.size, ", start: ").concat(i, ", end: ").concat(s)), this.data = this.totalData.slice(i, s), this.loading = !1, this.data = this.tree2Array(this.data, this.expandAll), this.data
                        },
                        getListFromRemote: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = t.loading,
                                a = void 0 === n || n,
                                r = this.url;
                            if (r) {
                                var i = this.getQuery(),
                                    s = {};
                                this.$refs.searchForm && (s = this.$refs.searchForm.getFormValue(), Object.assign(i, s));
                                var o = (r.indexOf("?") > -1 ? "&" : "?") + L["d"](i, "=", "&");
                                if (this.loading = a, this.saveQuery) {
                                    i[this.pageKey] = this.page;
                                    var l = L["c"](location.href, i, this.routerMode);
                                    history.replaceState(history.state, "el-data-table search", l)
                                }
                                this.$axios.get(r + o, this.axiosConfig).then((function(t) {
                                    var n = t.data,
                                        a = [];
                                    e.hasPagination ? (a = c()(n, e.dataPath) || [], e.total = c()(n, e.totalPath) || 0) : (a = c()(n, e.dataPath) || c()(n, ee) || [], e.total = a.length), e.data = a, e.isTree && (e.data = e.tree2Array(a, e.expandAll)), e.showNoData = e.$slots["no-data"] && 0 === e.total && (p()(s) || u()(s).every(W["a"])), e.loading = !1, e.$emit("update", a, n), e.$nextTick((function() {
                                        e.selectStrategy.updateElTableSelection()
                                    }))
                                })).catch((function(t) {
                                    e.$emit("error", t), e.total = 0, e.loading = !1
                                }))
                            }
                        },
                        search: function(e, t) {
                            return this.page = Z, this.innerQuery = t ? J()({}, e) : J()(this.innerQuery, e), this.getList()
                        },
                        searchDate: function(e) {
                            return this.page = Z, this.innerQuery = J()(this.innerQuery, e), this.getList()
                        },
                        resetSearch: function() {
                            var e = this;
                            if (this.$refs.searchForm.resetFields(), this.page = Z, this.saveQuery) {
                                var t = L["a"](location.href);
                                history.replaceState(history.state, "", t)
                            }
                            this.$emit("reset"), this.$emit("update:customQuery", JSON.parse(this.initExtraQuery)), this.$emit("update:extraQuery", JSON.parse(this.initExtraQuery)), this.$nextTick((function() {
                                e.getList()
                            }))
                        },
                        handleSizeChange: function(e) {
                            this.size !== e && (this.$emit("sizeChange", e), this.page = Z, this.size = e, this.getList())
                        },
                        handleCurrentChange: function(e) {
                            this.page !== e && (this.page = e, this.getList())
                        },
                        toggleRowSelection: function(e, t) {
                            return this.selectStrategy.toggleRowSelection(e, t)
                        },
                        clearSelection: function() {
                            return this.selectStrategy.clearSelection()
                        },
                        onDefaultNew: function(e) {
                            this.onNew()
                        },
                        onDefaultView: function(e) {
                            this.row = e, this.$refs.dialog.show(_.view, e)
                        },
                        onDefaultEdit: function(e) {
                            this.row = e, this.onEdit(e)
                        },
                        onConfirm: function() {
                            var e = Object(i["a"])(regeneratorRuntime.mark((function e(t, n, a) {
                                var r;
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return r = X({}, n, {}, this._extraBody), this.isTree && (r[this.treeParentKey] = t ? this.row[this.treeParentValue] : this.row[this.treeParentKey]), e.prev = 2, e.next = 5, this.beforeConfirm(r, t);
                                        case 5:
                                            if (!t) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.next = 8, this.onNew(r, this.row);
                                        case 8:
                                            e.next = 12;
                                            break;
                                        case 10:
                                            return e.next = 12, this.onEdit(r, this.row);
                                        case 12:
                                            this.getList(), this.onSuccess(t ? "new" : "edit", r), a(), e.next = 20;
                                            break;
                                        case 17:
                                            e.prev = 17, e.t0 = e["catch"](2), a(!1);
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [2, 17]
                                ])
                            })));

                            function t(t, n, a) {
                                return e.apply(this, arguments)
                            }
                            return t
                        }(),
                        onDefaultDelete: function(e) {
                            var t = this;
                            this.$confirm(this.deleteMessage(e), "提示", {
                                type: "warning",
                                confirmButtonClass: "el-button--danger",
                                beforeClose: function() {
                                    var n = Object(i["a"])(regeneratorRuntime.mark((function n(a, r, i) {
                                        return regeneratorRuntime.wrap((function(n) {
                                            while (1) switch (n.prev = n.next) {
                                                case 0:
                                                    if ("confirm" === a) {
                                                        n.next = 2;
                                                        break
                                                    }
                                                    return n.abrupt("return", i());
                                                case 2:
                                                    return r.confirmButtonLoading = !0, n.prev = 3, n.next = 6, t.onDelete(e);
                                                case 6:
                                                    i(), t.onSuccess("delete", e), t.correctPage(), t.getList(), n.next = 16;
                                                    break;
                                                case 12:
                                                    throw n.prev = 12, n.t0 = n["catch"](3), console.warn(n.t0.message), n.t0;
                                                case 16:
                                                    return n.prev = 16, r.confirmButtonLoading = !1, n.finish(16);
                                                case 19:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n, null, [
                                            [3, 12, 16, 19]
                                        ])
                                    })));

                                    function a(e, t, a) {
                                        return n.apply(this, arguments)
                                    }
                                    return a
                                }()
                            }).catch((function() {}))
                        },
                        correctPage: function() {
                            var e = 1;
                            this.hasSelect && (e = this.selected.length, this.clearSelection());
                            var t = this.data.length - e,
                                n = Math.ceil(this.total / this.size);
                            0 === t && this.page === n && this.page > Z && this.page--
                        },
                        tree2Array: function(e, t) {
                            var n = this,
                                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                                i = [];
                            return e.forEach((function(e) {
                                void 0 === e._expanded && n.$set(e, "_expanded", t);
                                var s = 0;
                                if (void 0 !== r && null !== r && (s = r + 1), n.$set(e, "_level", s), a && Object.defineProperty(e, "parent", {
                                        value: a,
                                        enumerable: !1
                                    }), i.push(e), e[n.treeChildKey] && e[n.treeChildKey].length > 0) {
                                    var o = n.tree2Array(e[n.treeChildKey], t, e, s);
                                    i = i.concat(o)
                                }
                            })), i
                        },
                        rowClassName: function() {
                            var e = this.tableAttrs.rowClassName || this.tableAttrs["row-class-name"] || "";
                            return "function" === typeof e && (e = e.apply(void 0, arguments)), this.isTree && (e += " " + this.showRow.apply(this, arguments)), e
                        },
                        showRow: function(e) {
                            var t = e.row,
                                n = !t.parent || t.parent._expanded && t.parent._show;
                            return t._show = n, n ? "row-show" : "row-hide"
                        },
                        toggleExpanded: function(e) {
                            var t = this.data[e];
                            t._expanded = !t._expanded
                        },
                        iconShow: function(e, t) {
                            return t[this.treeChildKey] && t[this.treeChildKey].length > 0
                        },
                        onSortChange: function(e) {
                            e.column;
                            var t = e.prop,
                                n = e.order;
                            n ? (this.innerQuery["sort"] = t, this.innerQuery["direction"] = n) : (delete this.innerQuery["sort"], delete this.innerQuery["direction"]), this.getList()
                        }
                    }
                },
                ne = te,
                ae = (n("81c8"), Object(y["a"])(ne, a, r, !1, null, "e4163fd2", null));
            t["a"] = ae.exports
        },
        fdfa: function(e, t, n) {
            "use strict";
            n("57e7");
            t["a"] = function(e) {
                return ["", void 0, null].indexOf(e) > -1
            }
        },
        fef8: function(e, t, n) {
            "use strict";
            var a = n("c52e"),
                r = n.n(a);
            r.a
        }
    },
    [
        [0, "runtime", "chunk-elementUI", "chunk-libs"]
    ]
]);