(window.webpackJsonp = window.webpackJsonp || []).push([[0], [function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.
default = function(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, a = n(70),
    o = (r = a) && r.__esModule ? r: {
    default:
        r
    };
    t.
default = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                (0, o.
            default)(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } ()
},
function(e, t, n) {
    e.exports = n(124)
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, a = n(14),
    o = (r = a) && r.__esModule ? r: {
    default:
        r
    };
    t.
default = function(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new o.
        default((function(e, n) {
                return function r(a, i) {
                    try {
                        var s = t[a](i),
                        u = s.value
                    } catch(e) {
                        return void n(e)
                    }
                    if (!s.done) return o.
                default.resolve(u).then((function(e) {
                        r("next", e)
                    }), (function(e) {
                        r("throw", e)
                    }));
                    e(u)
                } ("next")
            }))
        }
    }
},
function(e, t) {
    var n = e.exports = {
        version: "2.6.11"
    };
    "number" == typeof __e && (__e = n)
},
function(e, t, n) {
    n(93)(n(94)),
    e.exports = window.Zepto
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(n(2)),
    a = u(n(14)),
    o = u(n(3)),
    i = u(n(0)),
    s = u(n(1));
    function u(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    var l = function() {
        function e() { (0, i.
        default)(this, e)
        }
        var t;
        return (0, s.
    default)(e, null, [{
            key: "network",
            value: function() {
                if (window.navigator.connection) {
                    var e = window.navigator.connection;
                    return {
                        donwlink: e.downlink || e.downlinkMax || -1,
                        type: e.effectiveType || e.type || "unknow",
                        rtt: e.rtt || -1
                    }
                }
                return {}
            }
        },
        {
            key: "copyToClipboard",
            value: function(e) {
                var t = window.document.createElement("input");
                window.document.body.appendChild(t),
                t.setAttribute("value", e),
                t.select(),
                window.document.execCommand && window.document.execCommand("copy"),
                window.document.body.removeChild(t)
            }
        },
        {
            key: "getUrlParam",
            value: function(e, t) {
                t = t || window.location.href;
                var n = new RegExp("[?#&]" + e + "=([^&#]*)", "i").exec(t);
                return decodeURIComponent((n ? n[1] : "").replace(/[+]/gi, "%20"))
            }
        },
        {
            key: "loadScript",
            value: (t = (0, o.
        default)(r.
        default.mark((function e(t) {
                return r.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.abrupt("return", new a.
                    default((function(e) {
                            var n = document.createElement("script");
                            n.onload = function() {
                                e({
                                    ret: 0,
                                    msg: "succ"
                                })
                            },
                            n.onerror = function() {
                                e({
                                    ret: -1,
                                    msg: "load error"
                                })
                            },
                            n.src = t,
                            document.body.appendChild(n)
                        })));
                    case 1:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e) {
                return t.apply(this, arguments)
            })
        }]),
        e
    } ();
    t.
default = l
},
function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window: "undefined" != typeof self && self.Math == Math ? self: Function("return this")();
    "number" == typeof __g && (__g = n)
},
function(e, t, n) {
    e.exports = {
    default:
        n(95),
        __esModule: !0
    }
},
function(e, t, n) {
    var r = n(49)("wks"),
    a = n(39),
    o = n(7).Symbol,
    i = "function" == typeof o; (e.exports = function(e) {
        return r[e] || (r[e] = i && o[e] || (i ? o: a)("Symbol." + e))
    }).store = r
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.DownloadStatus = void 0;
    var r = v(n(2)),
    a = v(n(3)),
    o = v(n(0)),
    i = v(n(1)),
    s = v(n(26)),
    u = v(n(145)),
    l = v(n(152)),
    c = v(n(157)),
    f = v(n(158)),
    p = v(n(159)),
    d = v(n(160)),
    h = v(n(22)),
    m = n(42);
    function v(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    window.Jsbridge = window.JsBridge = {};
    var y = function() {
        function e() { (0, o.
        default)(this, e)
        }
        var t;
        return (0, i.
    default)(e, null, [{
            key: "getUserAgentInfo",
            value: function() {
                return (0, m.getSysInfo)()
            }
        },
        {
            key: "greaterThanOrEqual",
            value: function(e, t) {
                e = String(e).split("."),
                t = String(t).split(".");
                try {
                    for (var n = 0,
                    r = Math.max(e.length, t.length); n < r; n++) {
                        var a = isFinite(e[n]) && Number(e[n]) || 0,
                        o = isFinite(t[n]) && Number(t[n]) || 0;
                        if (a < o) return ! 1;
                        if (a > o) return ! 0
                    }
                } catch(e) {
                    return ! 1
                }
                return ! 0
            }
        },
        {
            key: "getJsbridge",
            value: function(e) {
                if (e.os.ios) return s.
            default;
                switch (e.browser.name) {
                case "YYB":
                    return u.
                default;
                case "MQQClient":
                    return this.getMQQClientJsbridge();
                case "MQQBrowser":
                    return p.
                default;
                case "qqnews":
                    return f.
                default;
                case "QQvideo":
                    return c.
                default;
                case "qmKege":
                    return d.
                default;
                default:
                    return s.
                default
                }
            }
        },
        {
            key: "getMQQClientJsbridge",
            value: function() {
                var e = window.navigator.userAgent.match(/(?:\bV1_AND_SQI?_|QQ\/)([\d\.]+)/);
                return e && this.greaterThanOrEqual(e[1], "4.6") ? l.
            default:
                s.
            default
            }
        },
        {
            key: "create",
            value: (t = (0, a.
        default)(r.
        default.mark((function e(t, n, a) {
                var o, i, s;
                return r.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return o = this.getUserAgentInfo(),
                        i = this.getJsbridge(o),
                        s = new i({
                            appInfo: t,
                            uaInfo: o,
                            options: n
                        }),
                        a && "function" == typeof a && a(s),
                        e.next = 6,
                        s.initial();
                    case 6:
                        return e.abrupt("return", s);
                    case 7:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e, n, r) {
                return t.apply(this, arguments)
            })
        }]),
        e
    } ();
    t.
default = y,
    t.DownloadStatus = h.
default
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = l(n(8)),
    a = l(n(28)),
    o = l(n(89)),
    i = l(n(36)),
    s = l(n(0)),
    u = l(n(1));
    function l(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    var c = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.commonReportData,
            r = t.url; (0, s.
        default)(this, e),
            this.commonReportData = n || {},
            this.url = r || "/log"
        }
        return (0, u.
    default)(e, [{
            key: "request",
            value: function(t) {
                return e.request(this.url, (0, i.
            default)({},
                this.commonReportData, t))
            }
        },
        {
            key: "setCommonReportData",
            value: function(e) {
                this.commonReportData = e
            }
        }], [{
            key: "_get",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                n = this;
                if (e) {
                    var r = (new Date).getTime(),
                    a = new Image;
                    e.match(/&rand=/) || (e += "&rand=" + (r + Math.random())),
                    e += "&_t=" + (new Date).getTime(),
                    n["--IMAGE" + r] = a;
                    var o = 0;
                    a.onload = a.onerror = a.onabort = function(i) {
                        if ("error" === i.type && o < t) return o++,
                        void(a.src = e);
                        a.onload = a.onerror = a.onabort = null,
                        n["--IMAGE" + r] = null,
                        a = null
                    },
                    a.src = e
                }
            }
        },
        {
            key: "_serial",
            value: function(e) {
                if (this.lastTime = Date.now(), e) {
                    var t = [];
                    return (0, o.
                default)(e).forEach((function(n) {
                        void 0 !== e[n] && t.push(n + "=" + ("object" === (0, a.
                    default)(e[n]) ? encodeURIComponent((0, r.
                    default)(e[n])):
                        encodeURIComponent(e[n])))
                    })),
                    t.join("&")
                }
            }
        },
        {
            key: "request",
            value: function(e, t) {
                var n = this._serial(t);
                this._get(e + "?" + n)
            }
        },
        {
            key: "create",
            value: function(t, n) {
                return new e({
                    url: t,
                    commonReportData: n
                })
            }
        }]),
        e
    } ();
    t.
default = c
},
function(e, t, n) {
    var r = n(7),
    a = n(4),
    o = n(29),
    i = n(23),
    s = n(24),
    u = function(e, t, n) {
        var l, c, f, p = e & u.F,
        d = e & u.G,
        h = e & u.S,
        m = e & u.P,
        v = e & u.B,
        y = e & u.W,
        g = d ? a: a[t] || (a[t] = {}),
        b = g.prototype,
        w = d ? r: h ? r[t] : (r[t] || {}).prototype;
        for (l in d && (n = t), n)(c = !p && w && void 0 !== w[l]) && s(g, l) || (f = c ? w[l] : n[l], g[l] = d && "function" != typeof w[l] ? n[l] : v && c ? o(f, r) : y && w[l] == f ?
        function(e) {
            var t = function(t, n, r) {
                if (this instanceof e) {
                    switch (arguments.length) {
                    case 0:
                        return new e;
                    case 1:
                        return new e(t);
                    case 2:
                        return new e(t, n)
                    }
                    return new e(t, n, r)
                }
                return e.apply(this, arguments)
            };
            return t.prototype = e.prototype,
            t
        } (f) : m && "function" == typeof f ? o(Function.call, f) : f, m && ((g.virtual || (g.virtual = {}))[l] = f, e & u.R && b && !b[l] && i(b, l, f)))
    };
    u.F = 1,
    u.G = 2,
    u.S = 4,
    u.P = 8,
    u.B = 16,
    u.W = 32,
    u.U = 64,
    u.R = 128,
    e.exports = u
},
function(e, t, n) {
    e.exports = {
    default:
        n(115),
        __esModule: !0
    }
},
function(e, t, n) {
    e.exports = {
    default:
        n(126),
        __esModule: !0
    }
},
function(e, t, n) {
    var r = n(21);
    e.exports = function(e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
},
function(e, t, n) {
    e.exports = !n(27)((function() {
        return 7 != Object.defineProperty({},
        "a", {
            get: function() {
                return 7
            }
        }).a
    }))
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, a = n(28),
    o = (r = a) && r.__esModule ? r: {
    default:
        r
    };
    t.
default = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" !== (void 0 === t ? "undefined": (0, o.
    default)(t)) && "function" != typeof t ? e: t
    }
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = i(n(117)),
    a = i(n(121)),
    o = i(n(28));
    function i(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    t.
default = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined": (0, o.
    default)(t)));
        e.prototype = (0, a.
    default)(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (r.
    default ? (0, r.
    default)(e, t) : e.__proto__ = t)
    }
},
,
function(e, t, n) {
    var r = n(15),
    a = n(71),
    o = n(44),
    i = Object.defineProperty;
    t.f = n(16) ? Object.defineProperty: function(e, t, n) {
        if (r(e), t = o(t, !0), r(n), a) try {
            return i(e, t, n)
        } catch(e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value),
        e
    }
},
function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e: "function" == typeof e
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.
default = {
        inited: "inited",
        startDownload: "startDownlad",
        update: "update",
        queue: "queue",
        downloading: "downloading",
        downloaded: "downloaded",
        paused: "paused",
        installed: "installed",
        installing: "installing",
        installFail: "installFail",
        other: "other"
    }
},
function(e, t, n) {
    var r = n(20),
    a = n(38);
    e.exports = n(16) ?
    function(e, t, n) {
        return r.f(e, t, a(1, n))
    }: function(e, t, n) {
        return e[t] = n,
        e
    }
},
function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
},
function(e, t, n) {
    var r = n(76),
    a = n(46);
    e.exports = function(e) {
        return r(a(e))
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = p(n(2)),
    a = p(n(3)),
    o = p(n(13)),
    i = p(n(0)),
    s = p(n(1)),
    u = p(n(17)),
    l = p(n(18)),
    c = n(56),
    f = p(n(22));
    function p(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    var d = function(e) {
        function t(e) {
            var n = e.appInfo,
            r = e.uaInfo,
            a = e.options,
            s = void 0 === a ? {}: a; (0, i.
        default)(this, t);
            var l = (0, u.
        default)(this, (t.__proto__ || (0, o.
        default)(t)).call(this));
            return l.appInfo = n,
            l.options = s,
            l.uaInfo = r,
            l.taskPoint = null,
            l.appState = {
                state: f.
            default.inited
            },
            l.seqid = 0,
            l.callbackstack = {},
            l.jsbname = "browser",
            l
        }
        var n, c, p, d, h, m, v, y, g, b, w;
        return (0, l.
    default)(t, e),
        (0, s.
    default)(t, [{
            key: "initial",
            value: (w = (0, a.
        default)(r.
        default.mark((function e() {
                return r.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return w.apply(this, arguments)
            })
        },
        {
            key: "getDeviceInfo",
            value: (b = (0, a.
        default)(r.
        default.mark((function e() {
                return r.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.abrupt("return", {});
                    case 1:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return b.apply(this, arguments)
            })
        },
        {
            key: "getAppVersion",
            value: (g = (0, a.
        default)(r.
        default.mark((function e() {
                return r.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.abrupt("return", null);
                    case 1:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return g.apply(this, arguments)
            })
        },
        {
            key: "createDownloadTask",
            value: (y = (0, a.
        default)(r.
        default.mark((function e() {
                return r.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return this.taskPoint = Date.now(),
                        this.onDownloadTaskStatusChange(this.taskPoint, f.
                    default.inited),
                        e.abrupt("return", this.taskPoint);
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return y.apply(this, arguments)
            })
        },
        {
            key: "startDownloadTask",
            value: (v = (0, a.
        default)(r.
        default.mark((function e() {
                var t = this;
                return r.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return this.openApp(),
                        this.uaInfo.os.android && (this.openHandler || (this.openHandler = setTimeout((function() {
                            window.location.href = t.appInfo.downloadUrl,
                            t.onDownloadTaskStatusChange(t.taskPoint, "startDownload", 100),
                            t.openHandler = null
                        }), 500))),
                        e.abrupt("return", 0);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return v.apply(this, arguments)
            })
        },
        {
            key: "pauseDownloadTask",
            value: (m = (0, a.
        default)(r.
        default.mark((function e() {
                return r.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.abrupt("return", -1);
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return m.apply(this, arguments)
            })
        },
        {
            key: "resumeDownloadTask",
            value: (h = (0, a.
        default)(r.
        default.mark((function e() {
                return r.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.abrupt("return", -1);
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return h.apply(this, arguments)
            })
        },
        {
            key: "stopDownloadTask",
            value: (d = (0, a.
        default)(r.
        default.mark((function e() {
                return r.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.abrupt("return", -1);
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return d.apply(this, arguments)
            })
        },
        {
            key: "doTaskNextAction",
            value: (p = (0, a.
        default)(r.
        default.mark((function e() {
                var t;
                return r.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (console.log("doTaskNextAction", this.appState.state), this.taskPoint) {
                            e.next = 3;
                            break
                        }
                        return e.abrupt("return", null);
                    case 3:
                        t = this.appState,
                        console.log("current appstate", t),
                        e.t0 = t.state,
                        e.next = e.t0 === f.
                    default.downloading ? 8 : e.t0 === f.
                    default.downloaded ? 11 : e.t0 === f.
                    default.installed ? 14 : (e.t0 === f.
                    default.inited || e.t0 === f.
                    default.update || (e.t0, f.
                    default.paused), 17);
                        break;
                    case 8:
                        return e.next = 10,
                        this.pauseDownloadTask();
                    case 10:
                        return e.abrupt("break", 19);
                    case 11:
                        return e.next = 13,
                        this.installApp();
                    case 13:
                        return e.abrupt("break", 19);
                    case 14:
                        return e.next = 16,
                        this.openApp();
                    case 16:
                        return e.abrupt("break", 19);
                    case 17:
                        return e.next = 19,
                        this.startDownloadTask();
                    case 19:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return p.apply(this, arguments)
            })
        },
        {
            key: "installApp",
            value: (c = (0, a.
        default)(r.
        default.mark((function e(t) {
                return r.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (t !== this.taskPoint) {
                            e.next = 4;
                            break
                        }
                        return e.abrupt("return", -1);
                    case 4:
                        return e.abrupt("return", -2);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e) {
                return c.apply(this, arguments)
            })
        },
        {
            key: "openApp",
            value: (n = (0, a.
        default)(r.
        default.mark((function e(t, n) {
                return r.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (!this.uaInfo.os.ios) {
                            e.next = 8;
                            break
                        }
                        if (!this.appInfo.appleId) {
                            e.next = 5;
                            break
                        }
                        window.location.href = "https://itunes.apple.com/cn/app/" + this.appInfo.appleId,
                        e.next = 6;
                        break;
                    case 5:
                        return e.abrupt("return", -2);
                    case 6:
                        e.next = 12;
                        break;
                    case 8:
                        return t = t || this.appInfo.deeplink,
                        n = n || this.appInfo.packageName,
                        t ? window.location.href = t: console.log("packageName open failed", n),
                        e.abrupt("return", 0);
                    case 12:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e, t) {
                return n.apply(this, arguments)
            })
        },
        {
            key: "call",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return console.log("call", e, t),
                null
            }
        },
        {
            key: "onDownloadTaskStatusChange",
            value: function(e, t, n) {
                this.appState = {
                    state: t,
                    percent: n
                },
                this.emit("DownloadTaskStatusChange", {
                    taskPoint: e,
                    state: t,
                    percent: n
                })
            }
        },
        {
            key: "onJsbridgeApiError",
            value: function(e, t, n, r) {
                console.error("onJsbridgeApiError", e, t, n, r),
                this.emit("JsbridgeApiError", {
                    apiName: e,
                    params: t,
                    err_code: n,
                    err_msg: r
                })
            }
        }]),
        t
    } (c.EventEmitter);
    t.
default = d
},
function(e, t) {
    e.exports = function(e) {
        try {
            return !! e()
        } catch(e) {
            return ! 0
        }
    }
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = i(n(96)),
    a = i(n(106)),
    o = "function" == typeof a.
default && "symbol" == typeof r.
default ?
    function(e) {
        return typeof e
    }: function(e) {
        return e && "function" == typeof a.
    default && e.constructor === a.
    default && e !== a.
    default.prototype ? "symbol": typeof e
    };
    function i(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    t.
default = "function" == typeof a.
default && "symbol" === o(r.
default) ?
    function(e) {
        return void 0 === e ? "undefined": o(e)
    }: function(e) {
        return e && "function" == typeof a.
    default && e.constructor === a.
    default && e !== a.
    default.prototype ? "symbol": void 0 === e ? "undefined": o(e)
    }
},
function(e, t, n) {
    var r = n(37);
    e.exports = function(e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
        case 1:
            return function(n) {
                return e.call(t, n)
            };
        case 2:
            return function(n, r) {
                return e.call(t, n, r)
            };
        case 3:
            return function(n, r, a) {
                return e.call(t, n, r, a)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = h(n(8)),
    a = h(n(28)),
    o = h(n(13)),
    i = h(n(0)),
    s = h(n(1)),
    u = h(n(17)),
    l = h(n(18)),
    c = h(n(83)),
    f = h(n(5)),
    p = n(56),
    d = h(n(6));
    function h(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    var m = function(e) {
        function t() {
            return (0, i.
        default)(this, t),
            (0, u.
        default)(this, (t.__proto__ || (0, o.
        default)(t)).apply(this, arguments))
        }
        return (0, l.
    default)(t, e),
        (0, s.
    default)(t, null, [{
            key: "_get",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                n = this;
                if (e) {
                    var r = (new Date).getTime(),
                    a = new Image;
                    e.match(/&rand=/) || (e += "&rand=" + (r + Math.random())),
                    e += "&_t=" + (new Date).getTime(),
                    n["--IMAGE" + r] = a;
                    var o = 0;
                    a.onload = a.onerror = a.onabort = function(i) {
                        if ("error" === i.type && o < t) return o++,
                        void(a.src = e);
                        a.onload = a.onerror = a.onabort = null,
                        n["--IMAGE" + r] = null,
                        a = null
                    },
                    a.src = e
                }
            }
        },
        {
            key: "_serial",
            value: function(e) {
                var t = Date.now() - this.lastTime;
                this.lastTime = Date.now();
                var n = f.
            default.extend(!0, {},
                this.commonOptions, e, {
                    kt: t
                });
                return "object" === (0, a.
            default)(n.params) && (n.params = (0, r.
            default)(n.params)),
                f.
            default.param(n)
            }
        },
        {
            key: "request",
            value: function(e) {
                e.network = d.
            default.network().type;
                var t = this._serial(e),
                n = c.
            default.reportURL + "?" + t;
                this._get(n)
            }
        },
        {
            key: "setCommonOptions",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.commonOptions = f.
            default.extend(this.commonOptions, e)
            }
        },
        {
            key: "pageExpsoure",
            value: function() {
                var e = {
                    action: t.Action.exposure,
                    slot: t.Slot.page,
                    params: {
                        timing: window.performance && window.performance.timing,
                        net: d.
                    default.network()
                    }
                };
                return this.request(e)
            }
        },
        {
            key: "userAction",
            value: function(e, t, n) {
                var r = {
                    action: e,
                    slot: t,
                    params: n
                };
                return this.request(r)
            }
        },
        {
            key: "rotateAction",
            value: function(e, t) {
                var n = {
                    action: "rotate",
                    slot: e,
                    params: t
                };
                return this.request(n)
            }
        },
        {
            key: "startRotateAction",
            value: function(e) {
                var t = this; (!e || e < 2e3) && (e = 2e3),
                this.rotateHandle && clearInterval(this.rotateHandle),
                this.rotateHandle = setInterval((function() {
                    var e = (0, f.
                default)("body"),
                    n = window.scrollX + "_" + window.scrollY + "_" + e.width() + "_" + e.height();
                    t.rotateAction(n, window.screen)
                }), e)
            }
        },
        {
            key: "send",
            value: function(e, t, n) {
                return this.request({
                    action: e,
                    slot: t,
                    params: n
                })
            }
        },
        {
            key: "bindDom",
            value: function(e) {
                var n = this;
                e && e.on("click", (function(e) {
                    var r = (0, f.
                default)(e.target);
                    if (r.hasClass("ulog") || (r = r.parents(".ulog")), r && r.length) {
                        var a = r.attr("data-slot"),
                        o = r.attr("data-params");
                        return n.request({
                            action: t.Action.click,
                            slot: a,
                            params: o
                        })
                    }
                }))
            }
        }]),
        t
    } (p.EventEmitter);
    t.
default = m,
    m.commonOptions = {},
    m.lastTime = c.
default.loadedTime || Date.now(),
    m.Action = {
        exposure: "exposure",
        update: "udpate",
        click: "click",
        download: "download",
        install: "install",
        open: "open",
        autoOpen: "autoOpen",
        downloaded: "downloaded",
        installed: "installed",
        pause: "pause",
        continue: "continue",
        openH5: "openH5",
        close: "close"
    },
    m.Slot = {
        page: "page",
        user: "user"
    }
},
function(e, t) {
    e.exports = !0
},
function(e, t) {
    e.exports = {}
},
function(e, t, n) {
    var r = n(75),
    a = n(50);
    e.exports = Object.keys ||
    function(e) {
        return r(e, a)
    }
},
function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
},
function(e, t, n) {
    var r = n(46);
    e.exports = function(e) {
        return Object(r(e))
    }
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, a = n(161),
    o = (r = a) && r.__esModule ? r: {
    default:
        r
    };
    t.
default = o.
default ||
    function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
},
function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
},
function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
},
function(e, t) {
    var n = 0,
    r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "": e, ")_", (++n + r).toString(36))
    }
},
function(e, t, n) {
    var r = n(20).f,
    a = n(24),
    o = n(9)("toStringTag");
    e.exports = function(e, t, n) {
        e && !a(e = n ? e: e.prototype, o) && r(e, o, {
            configurable: !0,
            value: t
        })
    }
},
function(e, t) {
    t.f = {}.propertyIsEnumerable
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e ? e.toLowerCase() : window.navigator.userAgent
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getUserAgent = r;
    var a = t.getPCBrowserInfo = function(e) {
        var t = "unknown",
        n = "unknown",
        a = "unknown",
        o = "unknown",
        i = "unknown",
        s = (e = r(e)).toLowerCase();
        if (s.indexOf("windows") > -1 ? i = "windows": s.indexOf("linux") > -1 ? i = "linux": s.indexOf("mac") > -1 && (i = "mac"), window.opera) o = n = window.opera.version(),
        a = "opera";
        else if (/AppleWebKit\/(\S+)/.test(e)) if (o = RegExp.$1, a = "webkit", /Chrome\/(\S+)/.test(e)) n = RegExp.$1,
        t = "chrome";
        else if (/Version\/(\S+)/.test(e)) n = RegExp.$1,
        t = "safari";
        else {
            var u = parseFloat(o);
            n = u < 100 ? 1 : u < 312 ? 1.2 : u < 412 ? 1.3 : 2,
            t = "safari"
        } else / KHTML\ / (\S + ) / .test(e) || /Konqueror\/([^;]+)/.test(e) ? (o = n = RegExp.$1, a = "khtml", t = "konq") : /rv:([^\)]+)\) Gecko\/\d{8}/.test(e) ? (o = RegExp.$1, a = "gecko", /Firefox\/(\S+)/.test(e) && (n = RegExp.$1, t = "firefox")) : /MSIE ([^;]+)/.test(e) && (o = n = RegExp.$1, a = "ie", t = "ie");
        return {
            machine: "PC",
            name: t,
            version: n,
            engineVer: o,
            engine: a,
            machineSys: i
        }
    },
    o = t.getSysInfo = function(e) {
        e = r();
        var t = a(e),
        n = t.machineSys,
        o = {
            mac: "mac" === n,
            version: t.engineVer,
            name: n
        },
        i = {},
        s = {
            iphone: e.match(/(iphone)\s(os\s)?([\d_]+)/i),
            ipad: e.match(/(ipad).*\s([\d_]+)/i),
            ipod: e.match(/(ipod).*\s([\d_]+)/i),
            android: e.match(/(android)\s([\d\.]+)/i),
            windows: e.match(/Windows(\s+\w+)?\s+?(\d+\.\d+)/)
        };
        s.ipod && (o.ios = o.ipod = !0, o.version = s.ipod[2].replace(/_/g, "."), o.name = "ipod"),
        s.ipad && (o.ios = o.ipad = !0, o.version = s.ipad[2].replace(/_/g, "."), o.name = "ipad"),
        s.iphone && (o.iphone = o.ios = !0, o.version = s.iphone[3].replace(/_/g, "."), o.name = "iphone"),
        s.android && (o.android = !0, o.version = s.android[2], o.name = "android"),
        s.windows && (o.windows = !0, o.version = s.windows[2], o.name = "windows");
        var u = {
            IE: e.match(/; msie\b|; trident\b|\bedge\//i),
            WeChat: e.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/) || e.match(/MicroMessenger\/((\d+)\.(\d+))/),
            MQQClient: !e.match(/QQReader/) && e.match(/QQ\/(\d+\.\d+)/i) || e.match(/V1_AND_SQ_([\d\.]+)/),
            MQQReader: e.match(/QQReader/i),
            YYB: e.match(/\/qqdownloader\/(\d+)(?:\/(appdetail|external|sdk))?/),
            QQvideo: !e.match(/TADChid/) && e.match(/QQLiveBrowser\/([\d.]+)/),
            QQHDvideo: e.match(/QQLiveHDBrowser\/([\d.]+)/),
            TBSSDK: e.match(/MQQBrowser\/(\d+\.\d+)/i) && e.match(/MSDK\/(\d+\.\d+)/),
            MQQBrowser: e.match(/MQQBrowser\/(\d+\.\d+)/i),
            UCBrowser: e.match(/ucbrowser\/(\d+\.\d+)/i),
            Qzone: e.match(/Qzone\/[\w\d\_]*(\d\.\d)[\.\w\d\_]*/i),
            Weibo: e.match(/Weibo/i),
            qqnews: e.match(/qqnews\/(\d+\.\d+\.\d+)/i),
            qmKege: e.match(/qmkege\/([\d.]+)/i),
            QQLiveBroadcast: e.match(/QQLiveBroadcast/i),
            kuserAgentibao: e.match(/qnreading\/(\d+\.\d+\.\d+)/i),
            liebao: e.match(/LieBaoFast\/(\d+\.\d+\.\d+)/i),
            baiduboxapp: e.match(/baiduboxapp\/(\d+\.\d+\.\d+)/i),
            IEMobile: e.match(/IEMobile(\/|\s+)(\d+\.\d+)/) || e.match(/WPDesktop/),
            douban: e.match(/com\.douban\.frodo\/(\d+\.\d+\.\d+)/i),
            MiuiBrowser: e.match(/MiuiBrowser\/(\d+\.\d+)/i),
            BingPreview: e.match(/BingPreview\/(\d+\.)/i),
            TADChid: e.match(/TADChid\/(\d+)/i),
            Chrome: o.ios ? e.match(/CriOS\/(\d+\.\d+)/) : e.match(/Chrome\/(\d+\.\d+)/),
            Safari: e.match(/Safari\/(\d+\.\d+)/),
            sukan: e.match(/synopsis/i)
        };
        if (u.MQQReader) i.MQQReader = !0,
        i.version = 1,
        i.name = "MQQReader";
        else if (u.IEMobile) i.IEMobile = !0,
        i.version = 1,
        i.name = "IEMobile";
        else for (var l in u) if (u[l]) {
            i[l] = !0,
            i.version = u[l][1] || 0,
            i.name = l;
            break
        }
        return {
            browser: i,
            os: o
        }
    };
    t.getOsType = function() {
        var e = o(r()).os;
        return e.ios ? "ios": e.android ? "android": "others"
    },
    t.getOsVersion = function() {
        return o(r()).os.version
    },
    t.getOppoVivo = function() {
        for (var e = r(), t = [/\s((oppo).+)\sbuild\/\w/i, /\s((vivo).+)\sbuild\/\w/i], n = null, a = 0; a < t.length && !(n = e.match(t[a])); a++);
        return !! n && n[2].toLowerCase()
    },
    t.getManufacturer = function(e, t) {
        return t ? t.toLowerCase() : (e || (e = r().toLowerCase()), /.*huawei|honor.*/.test(e) ? "huawei": /(\s((oppo).+)\sbuild\/\w)/i.test(e) || /p.*?(?=0 build)/i.test(e) ? "oppo": /\s((vivo).+)\sbuild\/\w/i.test(e) || /v.*?(?=(a build|t build))/i.test(e) ? "vivo": /HM|RedMi|redmi\s|Mi\s|MI-ONE|mix\s|build\/HM\d{0,7}\)|redmi\s?(\d+)?/gi.test(e) ? "xiaomi": null)
    }
},
function(e, t, n) {
    var r = n(21),
    a = n(7).document,
    o = r(a) && r(a.createElement);
    e.exports = function(e) {
        return o ? a.createElement(e) : {}
    }
},
function(e, t, n) {
    var r = n(21);
    e.exports = function(e, t) {
        if (!r(e)) return e;
        var n, a;
        if (t && "function" == typeof(n = e.toString) && !r(a = n.call(e))) return a;
        if ("function" == typeof(n = e.valueOf) && !r(a = n.call(e))) return a;
        if (!t && "function" == typeof(n = e.toString) && !r(a = n.call(e))) return a;
        throw TypeError("Can't convert object to primitive value")
    }
},
function(e, t) {
    var n = Math.ceil,
    r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r: n)(e)
    }
},
function(e, t) {
    e.exports = function(e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e
    }
},
function(e, t, n) {
    var r = n(15),
    a = n(100),
    o = n(50),
    i = n(48)("IE_PROTO"),
    s = function() {},
    u = function() {
        var e, t = n(43)("iframe"),
        r = o.length;
        for (t.style.display = "none", n(78).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; r--;) delete u.prototype[o[r]];
        return u()
    };
    e.exports = Object.create ||
    function(e, t) {
        var n;
        return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[i] = e) : n = u(),
        void 0 === t ? n: a(n, t)
    }
},
function(e, t, n) {
    var r = n(49)("keys"),
    a = n(39);
    e.exports = function(e) {
        return r[e] || (r[e] = a(e))
    }
},
function(e, t, n) {
    var r = n(4),
    a = n(7),
    o = a["__core-js_shared__"] || (a["__core-js_shared__"] = {}); (e.exports = function(e, t) {
        return o[e] || (o[e] = void 0 !== t ? t: {})
    })("versions", []).push({
        version: r.version,
        mode: n(31) ? "pure": "global",
        copyright: "漏 2019 Denis Pushkarev (zloirock.ru)"
    })
},
function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
},
function(e, t, n) {
    t.f = n(9)
},
function(e, t, n) {
    var r = n(7),
    a = n(4),
    o = n(31),
    i = n(51),
    s = n(20).f;
    e.exports = function(e) {
        var t = a.Symbol || (a.Symbol = o ? {}: r.Symbol || {});
        "_" == e.charAt(0) || e in t || s(t, e, {
            value: i.f(e)
        })
    }
},
function(e, t) {
    t.f = Object.getOwnPropertySymbols
},
function(e, t, n) {
    var r = n(41),
    a = n(38),
    o = n(25),
    i = n(44),
    s = n(24),
    u = n(71),
    l = Object.getOwnPropertyDescriptor;
    t.f = n(16) ? l: function(e, t) {
        if (e = o(e), t = i(t, !0), u) try {
            return l(e, t)
        } catch(e) {}
        if (s(e, t)) return a(!r.f.call(e, t), e[t])
    }
},
function(e, t, n) {
    var r = n(12),
    a = n(4),
    o = n(27);
    e.exports = function(e, t) {
        var n = (a.Object || {})[e] || Object[e],
        i = {};
        i[e] = t(n),
        r(r.S + r.F * o((function() {
            n(1)
        })), "Object", i)
    }
},
function(e, t, n) {
    "use strict";
    var r, a = "object" == typeof Reflect ? Reflect: null,
    o = a && "function" == typeof a.apply ? a.apply: function(e, t, n) {
        return Function.prototype.apply.call(e, t, n)
    };
    r = a && "function" == typeof a.ownKeys ? a.ownKeys: Object.getOwnPropertySymbols ?
    function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    }: function(e) {
        return Object.getOwnPropertyNames(e)
    };
    var i = Number.isNaN ||
    function(e) {
        return e != e
    };
    function s() {
        s.init.call(this)
    }
    e.exports = s,
    e.exports.once = function(e, t) {
        return new Promise((function(n, r) {
            function a() {
                void 0 !== o && e.removeListener("error", o),
                n([].slice.call(arguments))
            }
            var o;
            "error" !== t && (o = function(n) {
                e.removeListener(t, a),
                r(n)
            },
            e.once("error", o)),
            e.once(t, a)
        }))
    },
    s.EventEmitter = s,
    s.prototype._events = void 0,
    s.prototype._eventsCount = 0,
    s.prototype._maxListeners = void 0;
    var u = 10;
    function l(e) {
        if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }
    function c(e) {
        return void 0 === e._maxListeners ? s.defaultMaxListeners: e._maxListeners
    }
    function f(e, t, n, r) {
        var a, o, i, s;
        if (l(n), void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener: n), o = e._events), i = o[t]), void 0 === i) i = o[t] = n,
        ++e._eventsCount;
        else if ("function" == typeof i ? i = o[t] = r ? [n, i] : [i, n] : r ? i.unshift(n) : i.push(n), (a = c(e)) > 0 && i.length > a && !i.warned) {
            i.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + i.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning",
            u.emitter = e,
            u.type = t,
            u.count = i.length,
            s = u,
            console && console.warn && console.warn(s)
        }
        return e
    }
    function p() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn),
        this.fired = !0,
        0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }
    function d(e, t, n) {
        var r = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: t,
            listener: n
        },
        a = p.bind(r);
        return a.listener = n,
        r.wrapFn = a,
        a
    }
    function h(e, t, n) {
        var r = e._events;
        if (void 0 === r) return [];
        var a = r[t];
        return void 0 === a ? [] : "function" == typeof a ? n ? [a.listener || a] : [a] : n ?
        function(e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
            return t
        } (a) : v(a, a.length)
    }
    function m(e) {
        var t = this._events;
        if (void 0 !== t) {
            var n = t[e];
            if ("function" == typeof n) return 1;
            if (void 0 !== n) return n.length
        }
        return 0
    }
    function v(e, t) {
        for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
        return n
    }
    Object.defineProperty(s, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return u
        },
        set: function(e) {
            if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            u = e
        }
    }),
    s.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0),
        this._maxListeners = this._maxListeners || void 0
    },
    s.prototype.setMaxListeners = function(e) {
        if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e,
        this
    },
    s.prototype.getMaxListeners = function() {
        return c(this)
    },
    s.prototype.emit = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
        var r = "error" === e,
        a = this._events;
        if (void 0 !== a) r = r && void 0 === a.error;
        else if (!r) return ! 1;
        if (r) {
            var i;
            if (t.length > 0 && (i = t[0]), i instanceof Error) throw i;
            var s = new Error("Unhandled error." + (i ? " (" + i.message + ")": ""));
            throw s.context = i,
            s
        }
        var u = a[e];
        if (void 0 === u) return ! 1;
        if ("function" == typeof u) o(u, this, t);
        else {
            var l = u.length,
            c = v(u, l);
            for (n = 0; n < l; ++n) o(c[n], this, t)
        }
        return ! 0
    },
    s.prototype.addListener = function(e, t) {
        return f(this, e, t, !1)
    },
    s.prototype.on = s.prototype.addListener,
    s.prototype.prependListener = function(e, t) {
        return f(this, e, t, !0)
    },
    s.prototype.once = function(e, t) {
        return l(t),
        this.on(e, d(this, e, t)),
        this
    },
    s.prototype.prependOnceListener = function(e, t) {
        return l(t),
        this.prependListener(e, d(this, e, t)),
        this
    },
    s.prototype.removeListener = function(e, t) {
        var n, r, a, o, i;
        if (l(t), void 0 === (r = this._events)) return this;
        if (void 0 === (n = r[e])) return this;
        if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
        else if ("function" != typeof n) {
            for (a = -1, o = n.length - 1; o >= 0; o--) if (n[o] === t || n[o].listener === t) {
                i = n[o].listener,
                a = o;
                break
            }
            if (a < 0) return this;
            0 === a ? n.shift() : function(e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop()
            } (n, a),
            1 === n.length && (r[e] = n[0]),
            void 0 !== r.removeListener && this.emit("removeListener", e, i || t)
        }
        return this
    },
    s.prototype.off = s.prototype.removeListener,
    s.prototype.removeAllListeners = function(e) {
        var t, n, r;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]),
        this;
        if (0 === arguments.length) {
            var a, o = Object.keys(n);
            for (r = 0; r < o.length; ++r)"removeListener" !== (a = o[r]) && this.removeAllListeners(a);
            return this.removeAllListeners("removeListener"),
            this._events = Object.create(null),
            this._eventsCount = 0,
            this
        }
        if ("function" == typeof(t = n[e])) this.removeListener(e, t);
        else if (void 0 !== t) for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
        return this
    },
    s.prototype.listeners = function(e) {
        return h(this, e, !0)
    },
    s.prototype.rawListeners = function(e) {
        return h(this, e, !1)
    },
    s.listenerCount = function(e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : m.call(e, t)
    },
    s.prototype.listenerCount = m,
    s.prototype.eventNames = function() {
        return this._eventsCount > 0 ? r(this._events) : []
    }
},
function(e, t, n) {
    "use strict";
    var r = n(37);
    function a(e) {
        var t, n;
        this.promise = new e((function(e, r) {
            if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
            t = e,
            n = r
        })),
        this.resolve = r(t),
        this.reject = r(n)
    }
    e.exports.f = function(e) {
        return new a(e)
    }
},
, , , , , , , , , , , ,
function(e, t, n) {
    e.exports = {
    default:
        n(91),
        __esModule: !0
    }
},
function(e, t, n) {
    e.exports = !n(16) && !n(27)((function() {
        return 7 != Object.defineProperty(n(43)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
},
function(e, t, n) {
    "use strict";
    var r = n(98)(!0);
    n(73)(String, "String", (function(e) {
        this._t = String(e),
        this._i = 0
    }), (function() {
        var e, t = this._t,
        n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        }: (e = r(t, n), this._i += e.length, {
            value: e,
            done: !1
        })
    }))
},
function(e, t, n) {
    "use strict";
    var r = n(31),
    a = n(12),
    o = n(74),
    i = n(23),
    s = n(32),
    u = n(99),
    l = n(40),
    c = n(79),
    f = n(9)("iterator"),
    p = !([].keys && "next" in [].keys()),
    d = function() {
        return this
    };
    e.exports = function(e, t, n, h, m, v, y) {
        u(n, t, h);
        var g, b, w, k = function(e) {
            if (!p && e in T) return T[e];
            switch (e) {
            case "keys":
            case "values":
                return function() {
                    return new n(this, e)
                }
            }
            return function() {
                return new n(this, e)
            }
        },
        x = t + " Iterator",
        S = "values" == m,
        _ = !1,
        T = e.prototype,
        A = T[f] || T["@@iterator"] || m && T[m],
        j = A || k(m),
        E = m ? S ? k("entries") : j: void 0,
        I = "Array" == t && T.entries || A;
        if (I && (w = c(I.call(new e))) !== Object.prototype && w.next && (l(w, x, !0), r || "function" == typeof w[f] || i(w, f, d)), S && A && "values" !== A.name && (_ = !0, j = function() {
            return A.call(this)
        }), r && !y || !p && !_ && T[f] || i(T, f, j), s[t] = j, s[x] = d, m) if (g = {
            values: S ? j: k("values"),
            keys: v ? j: k("keys"),
            entries: E
        },
        y) for (b in g) b in T || o(T, b, g[b]);
        else a(a.P + a.F * (p || _), t, g);
        return g
    }
},
function(e, t, n) {
    e.exports = n(23)
},
function(e, t, n) {
    var r = n(24),
    a = n(25),
    o = n(101)(!1),
    i = n(48)("IE_PROTO");
    e.exports = function(e, t) {
        var n, s = a(e),
        u = 0,
        l = [];
        for (n in s) n != i && r(s, n) && l.push(n);
        for (; t.length > u;) r(s, n = t[u++]) && (~o(l, n) || l.push(n));
        return l
    }
},
function(e, t, n) {
    var r = n(34);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object: function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
},
function(e, t, n) {
    var r = n(45),
    a = Math.min;
    e.exports = function(e) {
        return e > 0 ? a(r(e), 9007199254740991) : 0
    }
},
function(e, t, n) {
    var r = n(7).document;
    e.exports = r && r.documentElement
},
function(e, t, n) {
    var r = n(24),
    a = n(35),
    o = n(48)("IE_PROTO"),
    i = Object.prototype;
    e.exports = Object.getPrototypeOf ||
    function(e) {
        return e = a(e),
        r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype: e instanceof Object ? i: null
    }
},
function(e, t, n) {
    n(103);
    for (var r = n(7), a = n(23), o = n(32), i = n(9)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
        var l = s[u],
        c = r[l],
        f = c && c.prototype;
        f && !f[i] && a(f, i, l),
        o[l] = o.Array
    }
},
function(e, t, n) {
    var r = n(75),
    a = n(50).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames ||
    function(e) {
        return r(e, a)
    }
},
function(e, t) {},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.
default = {
        loadedTime: Date.now(),
        reportURL: "/log"
    }
},
function(e, t, n) {
    var r = n(34),
    a = n(9)("toStringTag"),
    o = "Arguments" == r(function() {
        return arguments
    } ());
    e.exports = function(e) {
        var t, n, i;
        return void 0 === e ? "Undefined": null === e ? "Null": "string" == typeof(n = function(e, t) {
            try {
                return e[t]
            } catch(e) {}
        } (t = Object(e), a)) ? n: o ? r(t) : "Object" == (i = r(t)) && "function" == typeof t.callee ? "Arguments": i
    }
},
function(e, t, n) {
    var r = n(15),
    a = n(37),
    o = n(9)("species");
    e.exports = function(e, t) {
        var n, i = r(e).constructor;
        return void 0 === i || null == (n = r(i)[o]) ? t: a(n)
    }
},
function(e, t, n) {
    var r, a, o, i = n(29),
    s = n(133),
    u = n(78),
    l = n(43),
    c = n(7),
    f = c.process,
    p = c.setImmediate,
    d = c.clearImmediate,
    h = c.MessageChannel,
    m = c.Dispatch,
    v = 0,
    y = {},
    g = function() {
        var e = +this;
        if (y.hasOwnProperty(e)) {
            var t = y[e];
            delete y[e],
            t()
        }
    },
    b = function(e) {
        g.call(e.data)
    };
    p && d || (p = function(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return y[++v] = function() {
            s("function" == typeof e ? e: Function(e), t)
        },
        r(v),
        v
    },
    d = function(e) {
        delete y[e]
    },
    "process" == n(34)(f) ? r = function(e) {
        f.nextTick(i(g, e, 1))
    }: m && m.now ? r = function(e) {
        m.now(i(g, e, 1))
    }: h ? (o = (a = new h).port2, a.port1.onmessage = b, r = i(o.postMessage, o, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (r = function(e) {
        c.postMessage(e + "", "*")
    },
    c.addEventListener("message", b, !1)) : r = "onreadystatechange" in l("script") ?
    function(e) {
        u.appendChild(l("script")).onreadystatechange = function() {
            u.removeChild(this),
            g.call(e)
        }
    }: function(e) {
        setTimeout(i(g, e, 1), 0)
    }),
    e.exports = {
        set: p,
        clear: d
    }
},
function(e, t) {
    e.exports = function(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch(e) {
            return {
                e: !0,
                v: e
            }
        }
    }
},
function(e, t, n) {
    var r = n(15),
    a = n(21),
    o = n(57);
    e.exports = function(e, t) {
        if (r(e), a(t) && t.constructor === e) return t;
        var n = o.f(e);
        return (0, n.resolve)(t),
        n.promise
    }
},
function(e, t, n) {
    e.exports = {
    default:
        n(146),
        __esModule: !0
    }
},
,
function(e, t, n) {
    n(92);
    var r = n(4).Object;
    e.exports = function(e, t, n) {
        return r.defineProperty(e, t, n)
    }
},
function(e, t, n) {
    var r = n(12);
    r(r.S + r.F * !n(16), "Object", {
        defineProperty: n(20).f
    })
},
function(e, t) {
    e.exports = function(e) {
        function t(e) {
            "undefined" != typeof console && (console.error || console.log)("[Script Loader]", e)
        }
        try {
            "undefined" != typeof execScript && "undefined" != typeof attachEvent && "undefined" == typeof addEventListener ? execScript(e) : "undefined" != typeof eval ? eval.call(null, e) : t("EvalError: No eval function available")
        } catch(e) {
            t(e)
        }
    }
},
function(e, t) {
    e.exports = "/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */\n(function(global, factory) {\n  if (typeof define === 'function' && define.amd)\n    define(function() { return factory(global) })\n  else\n    factory(global)\n}(this, function(window) {\n  var Zepto = (function() {\n  var undefined, key, $, classList, emptyArray = [], concat = emptyArray.concat, filter = emptyArray.filter, slice = emptyArray.slice,\n    document = window.document,\n    elementDisplay = {}, classCache = {},\n    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },\n    fragmentRE = /^\\s*<(\\w+|!)[^>]*>/,\n    singleTagRE = /^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$/,\n    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>/ig,\n    rootNodeRE = /^(?:body|html)$/i,\n    capitalRE = /([A-Z])/g,\n\n    // special attributes that should be get/set via method calls\n    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],\n\n    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],\n    table = document.createElement('table'),\n    tableRow = document.createElement('tr'),\n    containers = {\n      'tr': document.createElement('tbody'),\n      'tbody': table, 'thead': table, 'tfoot': table,\n      'td': tableRow, 'th': tableRow,\n      '*': document.createElement('div')\n    },\n    readyRE = /complete|loaded|interactive/,\n    simpleSelectorRE = /^[\\w-]*$/,\n    class2type = {},\n    toString = class2type.toString,\n    zepto = {},\n    camelize, uniq,\n    tempParent = document.createElement('div'),\n    propMap = {\n      'tabindex': 'tabIndex',\n      'readonly': 'readOnly',\n      'for': 'htmlFor',\n      'class': 'className',\n      'maxlength': 'maxLength',\n      'cellspacing': 'cellSpacing',\n      'cellpadding': 'cellPadding',\n      'rowspan': 'rowSpan',\n      'colspan': 'colSpan',\n      'usemap': 'useMap',\n      'frameborder': 'frameBorder',\n      'contenteditable': 'contentEditable'\n    },\n    isArray = Array.isArray ||\n      function(object){ return object instanceof Array }\n\n  zepto.matches = function(element, selector) {\n    if (!selector || !element || element.nodeType !== 1) return false\n    var matchesSelector = element.matches || element.webkitMatchesSelector ||\n                          element.mozMatchesSelector || element.oMatchesSelector ||\n                          element.matchesSelector\n    if (matchesSelector) return matchesSelector.call(element, selector)\n    // fall back to performing a selector:\n    var match, parent = element.parentNode, temp = !parent\n    if (temp) (parent = tempParent).appendChild(element)\n    match = ~zepto.qsa(parent, selector).indexOf(element)\n    temp && tempParent.removeChild(element)\n    return match\n  }\n\n  function type(obj) {\n    return obj == null ? String(obj) :\n      class2type[toString.call(obj)] || \"object\"\n  }\n\n  function isFunction(value) { return type(value) == \"function\" }\n  function isWindow(obj)     { return obj != null && obj == obj.window }\n  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }\n  function isObject(obj)     { return type(obj) == \"object\" }\n  function isPlainObject(obj) {\n    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype\n  }\n\n  function likeArray(obj) {\n    var length = !!obj && 'length' in obj && obj.length,\n      type = $.type(obj)\n\n    return 'function' != type && !isWindow(obj) && (\n      'array' == type || length === 0 ||\n        (typeof length == 'number' && length > 0 && (length - 1) in obj)\n    )\n  }\n\n  function compact(array) { return filter.call(array, function(item){ return item != null }) }\n  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }\n  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }\n  function dasherize(str) {\n    return str.replace(/::/g, '/')\n           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')\n           .replace(/([a-z\\d])([A-Z])/g, '$1_$2')\n           .replace(/_/g, '-')\n           .toLowerCase()\n  }\n  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }\n\n  function classRE(name) {\n    return name in classCache ?\n      classCache[name] : (classCache[name] = new RegExp('(^|\\\\s)' + name + '(\\\\s|$)'))\n  }\n\n  function maybeAddPx(name, value) {\n    return (typeof value == \"number\" && !cssNumber[dasherize(name)]) ? value + \"px\" : value\n  }\n\n  function defaultDisplay(nodeName) {\n    var element, display\n    if (!elementDisplay[nodeName]) {\n      element = document.createElement(nodeName)\n      document.body.appendChild(element)\n      display = getComputedStyle(element, '').getPropertyValue(\"display\")\n      element.parentNode.removeChild(element)\n      display == \"none\" && (display = \"block\")\n      elementDisplay[nodeName] = display\n    }\n    return elementDisplay[nodeName]\n  }\n\n  function children(element) {\n    return 'children' in element ?\n      slice.call(element.children) :\n      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })\n  }\n\n  function Z(dom, selector) {\n    var i, len = dom ? dom.length : 0\n    for (i = 0; i < len; i++) this[i] = dom[i]\n    this.length = len\n    this.selector = selector || ''\n  }\n\n  // `$.zepto.fragment` takes a html string and an optional tag name\n  // to generate DOM nodes from the given html string.\n  // The generated DOM nodes are returned as an array.\n  // This function can be overridden in plugins for example to make\n  // it compatible with browsers that don't support the DOM fully.\n  zepto.fragment = function(html, name, properties) {\n    var dom, nodes, container\n\n    // A special case optimization for a single tag\n    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))\n\n    if (!dom) {\n      if (html.replace) html = html.replace(tagExpanderRE, \"<$1></$2>\")\n      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1\n      if (!(name in containers)) name = '*'\n\n      container = containers[name]\n      container.innerHTML = '' + html\n      dom = $.each(slice.call(container.childNodes), function(){\n        container.removeChild(this)\n      })\n    }\n\n    if (isPlainObject(properties)) {\n      nodes = $(dom)\n      $.each(properties, function(key, value) {\n        if (methodAttributes.indexOf(key) > -1) nodes[key](value)\n        else nodes.attr(key, value)\n      })\n    }\n\n    return dom\n  }\n\n  // `$.zepto.Z` swaps out the prototype of the given `dom` array\n  // of nodes with `$.fn` and thus supplying all the Zepto functions\n  // to the array. This method can be overridden in plugins.\n  zepto.Z = function(dom, selector) {\n    return new Z(dom, selector)\n  }\n\n  // `$.zepto.isZ` should return `true` if the given object is a Zepto\n  // collection. This method can be overridden in plugins.\n  zepto.isZ = function(object) {\n    return object instanceof zepto.Z\n  }\n\n  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and\n  // takes a CSS selector and an optional context (and handles various\n  // special cases).\n  // This method can be overridden in plugins.\n  zepto.init = function(selector, context) {\n    var dom\n    // If nothing given, return an empty Zepto collection\n    if (!selector) return zepto.Z()\n    // Optimize for string selectors\n    else if (typeof selector == 'string') {\n      selector = selector.trim()\n      // If it's a html fragment, create nodes from it\n      // Note: In both Chrome 21 and Firefox 15, DOM error 12\n      // is thrown if the fragment doesn't begin with <\n      if (selector[0] == '<' && fragmentRE.test(selector))\n        dom = zepto.fragment(selector, RegExp.$1, context), selector = null\n      // If there's a context, create a collection on that context first, and select\n      // nodes from there\n      else if (context !== undefined) return $(context).find(selector)\n      // If it's a CSS selector, use it to select nodes.\n      else dom = zepto.qsa(document, selector)\n    }\n    // If a function is given, call it when the DOM is ready\n    else if (isFunction(selector)) return $(document).ready(selector)\n    // If a Zepto collection is given, just return it\n    else if (zepto.isZ(selector)) return selector\n    else {\n      // normalize array if an array of nodes is given\n      if (isArray(selector)) dom = compact(selector)\n      // Wrap DOM nodes.\n      else if (isObject(selector))\n        dom = [selector], selector = null\n      // If it's a html fragment, create nodes from it\n      else if (fragmentRE.test(selector))\n        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null\n      // If there's a context, create a collection on that context first, and select\n      // nodes from there\n      else if (context !== undefined) return $(context).find(selector)\n      // And last but no least, if it's a CSS selector, use it to select nodes.\n      else dom = zepto.qsa(document, selector)\n    }\n    // create a new Zepto collection from the nodes found\n    return zepto.Z(dom, selector)\n  }\n\n  // `$` will be the base `Zepto` object. When calling this\n  // function just call `$.zepto.init, which makes the implementation\n  // details of selecting nodes and creating Zepto collections\n  // patchable in plugins.\n  $ = function(selector, context){\n    return zepto.init(selector, context)\n  }\n\n  function extend(target, source, deep) {\n    for (key in source)\n      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {\n        if (isPlainObject(source[key]) && !isPlainObject(target[key]))\n          target[key] = {}\n        if (isArray(source[key]) && !isArray(target[key]))\n          target[key] = []\n        extend(target[key], source[key], deep)\n      }\n      else if (source[key] !== undefined) target[key] = source[key]\n  }\n\n  // Copy all but undefined properties from one or more\n  // objects to the `target` object.\n  $.extend = function(target){\n    var deep, args = slice.call(arguments, 1)\n    if (typeof target == 'boolean') {\n      deep = target\n      target = args.shift()\n    }\n    args.forEach(function(arg){ extend(target, arg, deep) })\n    return target\n  }\n\n  // `$.zepto.qsa` is Zepto's CSS selector implementation which\n  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.\n  // This method can be overridden in plugins.\n  zepto.qsa = function(element, selector){\n    var found,\n        maybeID = selector[0] == '#',\n        maybeClass = !maybeID && selector[0] == '.',\n        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked\n        isSimple = simpleSelectorRE.test(nameOnly)\n    return (element.getElementById && isSimple && maybeID) ? // Safari DocumentFragment doesn't have getElementById\n      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :\n      (element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11) ? [] :\n      slice.call(\n        isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName\n          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class\n          element.getElementsByTagName(selector) : // Or a tag\n          element.querySelectorAll(selector) // Or it's not simple, and we need to query all\n      )\n  }\n\n  function filtered(nodes, selector) {\n    return selector == null ? $(nodes) : $(nodes).filter(selector)\n  }\n\n  $.contains = document.documentElement.contains ?\n    function(parent, node) {\n      return parent !== node && parent.contains(node)\n    } :\n    function(parent, node) {\n      while (node && (node = node.parentNode))\n        if (node === parent) return true\n      return false\n    }\n\n  function funcArg(context, arg, idx, payload) {\n    return isFunction(arg) ? arg.call(context, idx, payload) : arg\n  }\n\n  function setAttribute(node, name, value) {\n    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)\n  }\n\n  // access className property while respecting SVGAnimatedString\n  function className(node, value){\n    var klass = node.className || '',\n        svg   = klass && klass.baseVal !== undefined\n\n    if (value === undefined) return svg ? klass.baseVal : klass\n    svg ? (klass.baseVal = value) : (node.className = value)\n  }\n\n  // \"true\"  => true\n  // \"false\" => false\n  // \"null\"  => null\n  // \"42\"    => 42\n  // \"42.5\"  => 42.5\n  // \"08\"    => \"08\"\n  // JSON    => parse if valid\n  // String  => self\n  function deserializeValue(value) {\n    try {\n      return value ?\n        value == \"true\" ||\n        ( value == \"false\" ? false :\n          value == \"null\" ? null :\n          +value + \"\" == value ? +value :\n          /^[\\[\\{]/.test(value) ? $.parseJSON(value) :\n          value )\n        : value\n    } catch(e) {\n      return value\n    }\n  }\n\n  $.type = type\n  $.isFunction = isFunction\n  $.isWindow = isWindow\n  $.isArray = isArray\n  $.isPlainObject = isPlainObject\n\n  $.isEmptyObject = function(obj) {\n    var name\n    for (name in obj) return false\n    return true\n  }\n\n  $.isNumeric = function(val) {\n    var num = Number(val), type = typeof val\n    return val != null && type != 'boolean' &&\n      (type != 'string' || val.length) &&\n      !isNaN(num) && isFinite(num) || false\n  }\n\n  $.inArray = function(elem, array, i){\n    return emptyArray.indexOf.call(array, elem, i)\n  }\n\n  $.camelCase = camelize\n  $.trim = function(str) {\n    return str == null ? \"\" : String.prototype.trim.call(str)\n  }\n\n  // plugin compatibility\n  $.uuid = 0\n  $.support = { }\n  $.expr = { }\n  $.noop = function() {}\n\n  $.map = function(elements, callback){\n    var value, values = [], i, key\n    if (likeArray(elements))\n      for (i = 0; i < elements.length; i++) {\n        value = callback(elements[i], i)\n        if (value != null) values.push(value)\n      }\n    else\n      for (key in elements) {\n        value = callback(elements[key], key)\n        if (value != null) values.push(value)\n      }\n    return flatten(values)\n  }\n\n  $.each = function(elements, callback){\n    var i, key\n    if (likeArray(elements)) {\n      for (i = 0; i < elements.length; i++)\n        if (callback.call(elements[i], i, elements[i]) === false) return elements\n    } else {\n      for (key in elements)\n        if (callback.call(elements[key], key, elements[key]) === false) return elements\n    }\n\n    return elements\n  }\n\n  $.grep = function(elements, callback){\n    return filter.call(elements, callback)\n  }\n\n  if (window.JSON) $.parseJSON = JSON.parse\n\n  // Populate the class2type map\n  $.each(\"Boolean Number String Function Array Date RegExp Object Error\".split(\" \"), function(i, name) {\n    class2type[ \"[object \" + name + \"]\" ] = name.toLowerCase()\n  })\n\n  // Define methods that will be available on all\n  // Zepto collections\n  $.fn = {\n    constructor: zepto.Z,\n    length: 0,\n\n    // Because a collection acts like an array\n    // copy over these useful array functions.\n    forEach: emptyArray.forEach,\n    reduce: emptyArray.reduce,\n    push: emptyArray.push,\n    sort: emptyArray.sort,\n    splice: emptyArray.splice,\n    indexOf: emptyArray.indexOf,\n    concat: function(){\n      var i, value, args = []\n      for (i = 0; i < arguments.length; i++) {\n        value = arguments[i]\n        args[i] = zepto.isZ(value) ? value.toArray() : value\n      }\n      return concat.apply(zepto.isZ(this) ? this.toArray() : this, args)\n    },\n\n    // `map` and `slice` in the jQuery API work differently\n    // from their array counterparts\n    map: function(fn){\n      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))\n    },\n    slice: function(){\n      return $(slice.apply(this, arguments))\n    },\n\n    ready: function(callback){\n      // need to check if document.body exists for IE as that browser reports\n      // document ready when it hasn't yet created the body element\n      if (readyRE.test(document.readyState) && document.body) callback($)\n      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)\n      return this\n    },\n    get: function(idx){\n      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]\n    },\n    toArray: function(){ return this.get() },\n    size: function(){\n      return this.length\n    },\n    remove: function(){\n      return this.each(function(){\n        if (this.parentNode != null)\n          this.parentNode.removeChild(this)\n      })\n    },\n    each: function(callback){\n      emptyArray.every.call(this, function(el, idx){\n        return callback.call(el, idx, el) !== false\n      })\n      return this\n    },\n    filter: function(selector){\n      if (isFunction(selector)) return this.not(this.not(selector))\n      return $(filter.call(this, function(element){\n        return zepto.matches(element, selector)\n      }))\n    },\n    add: function(selector,context){\n      return $(uniq(this.concat($(selector,context))))\n    },\n    is: function(selector){\n      return this.length > 0 && zepto.matches(this[0], selector)\n    },\n    not: function(selector){\n      var nodes=[]\n      if (isFunction(selector) && selector.call !== undefined)\n        this.each(function(idx){\n          if (!selector.call(this,idx)) nodes.push(this)\n        })\n      else {\n        var excludes = typeof selector == 'string' ? this.filter(selector) :\n          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)\n        this.forEach(function(el){\n          if (excludes.indexOf(el) < 0) nodes.push(el)\n        })\n      }\n      return $(nodes)\n    },\n    has: function(selector){\n      return this.filter(function(){\n        return isObject(selector) ?\n          $.contains(this, selector) :\n          $(this).find(selector).size()\n      })\n    },\n    eq: function(idx){\n      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)\n    },\n    first: function(){\n      var el = this[0]\n      return el && !isObject(el) ? el : $(el)\n    },\n    last: function(){\n      var el = this[this.length - 1]\n      return el && !isObject(el) ? el : $(el)\n    },\n    find: function(selector){\n      var result, $this = this\n      if (!selector) result = $()\n      else if (typeof selector == 'object')\n        result = $(selector).filter(function(){\n          var node = this\n          return emptyArray.some.call($this, function(parent){\n            return $.contains(parent, node)\n          })\n        })\n      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))\n      else result = this.map(function(){ return zepto.qsa(this, selector) })\n      return result\n    },\n    closest: function(selector, context){\n      var nodes = [], collection = typeof selector == 'object' && $(selector)\n      this.each(function(_, node){\n        while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))\n          node = node !== context && !isDocument(node) && node.parentNode\n        if (node && nodes.indexOf(node) < 0) nodes.push(node)\n      })\n      return $(nodes)\n    },\n    parents: function(selector){\n      var ancestors = [], nodes = this\n      while (nodes.length > 0)\n        nodes = $.map(nodes, function(node){\n          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {\n            ancestors.push(node)\n            return node\n          }\n        })\n      return filtered(ancestors, selector)\n    },\n    parent: function(selector){\n      return filtered(uniq(this.pluck('parentNode')), selector)\n    },\n    children: function(selector){\n      return filtered(this.map(function(){ return children(this) }), selector)\n    },\n    contents: function() {\n      return this.map(function() { return this.contentDocument || slice.call(this.childNodes) })\n    },\n    siblings: function(selector){\n      return filtered(this.map(function(i, el){\n        return filter.call(children(el.parentNode), function(child){ return child!==el })\n      }), selector)\n    },\n    empty: function(){\n      return this.each(function(){ this.innerHTML = '' })\n    },\n    // `pluck` is borrowed from Prototype.js\n    pluck: function(property){\n      return $.map(this, function(el){ return el[property] })\n    },\n    show: function(){\n      return this.each(function(){\n        this.style.display == \"none\" && (this.style.display = '')\n        if (getComputedStyle(this, '').getPropertyValue(\"display\") == \"none\")\n          this.style.display = defaultDisplay(this.nodeName)\n      })\n    },\n    replaceWith: function(newContent){\n      return this.before(newContent).remove()\n    },\n    wrap: function(structure){\n      var func = isFunction(structure)\n      if (this[0] && !func)\n        var dom   = $(structure).get(0),\n            clone = dom.parentNode || this.length > 1\n\n      return this.each(function(index){\n        $(this).wrapAll(\n          func ? structure.call(this, index) :\n            clone ? dom.cloneNode(true) : dom\n        )\n      })\n    },\n    wrapAll: function(structure){\n      if (this[0]) {\n        $(this[0]).before(structure = $(structure))\n        var children\n        // drill down to the inmost element\n        while ((children = structure.children()).length) structure = children.first()\n        $(structure).append(this)\n      }\n      return this\n    },\n    wrapInner: function(structure){\n      var func = isFunction(structure)\n      return this.each(function(index){\n        var self = $(this), contents = self.contents(),\n            dom  = func ? structure.call(this, index) : structure\n        contents.length ? contents.wrapAll(dom) : self.append(dom)\n      })\n    },\n    unwrap: function(){\n      this.parent().each(function(){\n        $(this).replaceWith($(this).children())\n      })\n      return this\n    },\n    clone: function(){\n      return this.map(function(){ return this.cloneNode(true) })\n    },\n    hide: function(){\n      return this.css(\"display\", \"none\")\n    },\n    toggle: function(setting){\n      return this.each(function(){\n        var el = $(this)\n        ;(setting === undefined ? el.css(\"display\") == \"none\" : setting) ? el.show() : el.hide()\n      })\n    },\n    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },\n    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },\n    html: function(html){\n      return 0 in arguments ?\n        this.each(function(idx){\n          var originHtml = this.innerHTML\n          $(this).empty().append( funcArg(this, html, idx, originHtml) )\n        }) :\n        (0 in this ? this[0].innerHTML : null)\n    },\n    text: function(text){\n      return 0 in arguments ?\n        this.each(function(idx){\n          var newText = funcArg(this, text, idx, this.textContent)\n          this.textContent = newText == null ? '' : ''+newText\n        }) :\n        (0 in this ? this.pluck('textContent').join(\"\") : null)\n    },\n    attr: function(name, value){\n      var result\n      return (typeof name == 'string' && !(1 in arguments)) ?\n        (0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined) :\n        this.each(function(idx){\n          if (this.nodeType !== 1) return\n          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])\n          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))\n        })\n    },\n    removeAttr: function(name){\n      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){\n        setAttribute(this, attribute)\n      }, this)})\n    },\n    prop: function(name, value){\n      name = propMap[name] || name\n      return (1 in arguments) ?\n        this.each(function(idx){\n          this[name] = funcArg(this, value, idx, this[name])\n        }) :\n        (this[0] && this[0][name])\n    },\n    removeProp: function(name){\n      name = propMap[name] || name\n      return this.each(function(){ delete this[name] })\n    },\n    data: function(name, value){\n      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()\n\n      var data = (1 in arguments) ?\n        this.attr(attrName, value) :\n        this.attr(attrName)\n\n      return data !== null ? deserializeValue(data) : undefined\n    },\n    val: function(value){\n      if (0 in arguments) {\n        if (value == null) value = \"\"\n        return this.each(function(idx){\n          this.value = funcArg(this, value, idx, this.value)\n        })\n      } else {\n        return this[0] && (this[0].multiple ?\n           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :\n           this[0].value)\n      }\n    },\n    offset: function(coordinates){\n      if (coordinates) return this.each(function(index){\n        var $this = $(this),\n            coords = funcArg(this, coordinates, index, $this.offset()),\n            parentOffset = $this.offsetParent().offset(),\n            props = {\n              top:  coords.top  - parentOffset.top,\n              left: coords.left - parentOffset.left\n            }\n\n        if ($this.css('position') == 'static') props['position'] = 'relative'\n        $this.css(props)\n      })\n      if (!this.length) return null\n      if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0]))\n        return {top: 0, left: 0}\n      var obj = this[0].getBoundingClientRect()\n      return {\n        left: obj.left + window.pageXOffset,\n        top: obj.top + window.pageYOffset,\n        width: Math.round(obj.width),\n        height: Math.round(obj.height)\n      }\n    },\n    css: function(property, value){\n      if (arguments.length < 2) {\n        var element = this[0]\n        if (typeof property == 'string') {\n          if (!element) return\n          return element.style[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property)\n        } else if (isArray(property)) {\n          if (!element) return\n          var props = {}\n          var computedStyle = getComputedStyle(element, '')\n          $.each(property, function(_, prop){\n            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))\n          })\n          return props\n        }\n      }\n\n      var css = ''\n      if (type(property) == 'string') {\n        if (!value && value !== 0)\n          this.each(function(){ this.style.removeProperty(dasherize(property)) })\n        else\n          css = dasherize(property) + \":\" + maybeAddPx(property, value)\n      } else {\n        for (key in property)\n          if (!property[key] && property[key] !== 0)\n            this.each(function(){ this.style.removeProperty(dasherize(key)) })\n          else\n            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'\n      }\n\n      return this.each(function(){ this.style.cssText += ';' + css })\n    },\n    index: function(element){\n      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])\n    },\n    hasClass: function(name){\n      if (!name) return false\n      return emptyArray.some.call(this, function(el){\n        return this.test(className(el))\n      }, classRE(name))\n    },\n    addClass: function(name){\n      if (!name) return this\n      return this.each(function(idx){\n        if (!('className' in this)) return\n        classList = []\n        var cls = className(this), newName = funcArg(this, name, idx, cls)\n        newName.split(/\\s+/g).forEach(function(klass){\n          if (!$(this).hasClass(klass)) classList.push(klass)\n        }, this)\n        classList.length && className(this, cls + (cls ? \" \" : \"\") + classList.join(\" \"))\n      })\n    },\n    removeClass: function(name){\n      return this.each(function(idx){\n        if (!('className' in this)) return\n        if (name === undefined) return className(this, '')\n        classList = className(this)\n        funcArg(this, name, idx, classList).split(/\\s+/g).forEach(function(klass){\n          classList = classList.replace(classRE(klass), \" \")\n        })\n        className(this, classList.trim())\n      })\n    },\n    toggleClass: function(name, when){\n      if (!name) return this\n      return this.each(function(idx){\n        var $this = $(this), names = funcArg(this, name, idx, className(this))\n        names.split(/\\s+/g).forEach(function(klass){\n          (when === undefined ? !$this.hasClass(klass) : when) ?\n            $this.addClass(klass) : $this.removeClass(klass)\n        })\n      })\n    },\n    scrollTop: function(value){\n      if (!this.length) return\n      var hasScrollTop = 'scrollTop' in this[0]\n      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset\n      return this.each(hasScrollTop ?\n        function(){ this.scrollTop = value } :\n        function(){ this.scrollTo(this.scrollX, value) })\n    },\n    scrollLeft: function(value){\n      if (!this.length) return\n      var hasScrollLeft = 'scrollLeft' in this[0]\n      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset\n      return this.each(hasScrollLeft ?\n        function(){ this.scrollLeft = value } :\n        function(){ this.scrollTo(value, this.scrollY) })\n    },\n    position: function() {\n      if (!this.length) return\n\n      var elem = this[0],\n        // Get *real* offsetParent\n        offsetParent = this.offsetParent(),\n        // Get correct offsets\n        offset       = this.offset(),\n        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()\n\n      // Subtract element margins\n      // note: when an element has margin: auto the offsetLeft and marginLeft\n      // are the same in Safari causing offset.left to incorrectly be 0\n      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0\n      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0\n\n      // Add offsetParent borders\n      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0\n      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0\n\n      // Subtract the two offsets\n      return {\n        top:  offset.top  - parentOffset.top,\n        left: offset.left - parentOffset.left\n      }\n    },\n    offsetParent: function() {\n      return this.map(function(){\n        var parent = this.offsetParent || document.body\n        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css(\"position\") == \"static\")\n          parent = parent.offsetParent\n        return parent\n      })\n    }\n  }\n\n  // for now\n  $.fn.detach = $.fn.remove\n\n  // Generate the `width` and `height` functions\n  ;['width', 'height'].forEach(function(dimension){\n    var dimensionProperty =\n      dimension.replace(/./, function(m){ return m[0].toUpperCase() })\n\n    $.fn[dimension] = function(value){\n      var offset, el = this[0]\n      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :\n        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :\n        (offset = this.offset()) && offset[dimension]\n      else return this.each(function(idx){\n        el = $(this)\n        el.css(dimension, funcArg(this, value, idx, el[dimension]()))\n      })\n    }\n  })\n\n  function traverseNode(node, fun) {\n    fun(node)\n    for (var i = 0, len = node.childNodes.length; i < len; i++)\n      traverseNode(node.childNodes[i], fun)\n  }\n\n  // Generate the `after`, `prepend`, `before`, `append`,\n  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.\n  adjacencyOperators.forEach(function(operator, operatorIndex) {\n    var inside = operatorIndex % 2 //=> prepend, append\n\n    $.fn[operator] = function(){\n      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings\n      var argType, nodes = $.map(arguments, function(arg) {\n            var arr = []\n            argType = type(arg)\n            if (argType == \"array\") {\n              arg.forEach(function(el) {\n                if (el.nodeType !== undefined) return arr.push(el)\n                else if ($.zepto.isZ(el)) return arr = arr.concat(el.get())\n                arr = arr.concat(zepto.fragment(el))\n              })\n              return arr\n            }\n            return argType == \"object\" || arg == null ?\n              arg : zepto.fragment(arg)\n          }),\n          parent, copyByClone = this.length > 1\n      if (nodes.length < 1) return this\n\n      return this.each(function(_, target){\n        parent = inside ? target : target.parentNode\n\n        // convert all methods to a \"before\" operation\n        target = operatorIndex == 0 ? target.nextSibling :\n                 operatorIndex == 1 ? target.firstChild :\n                 operatorIndex == 2 ? target :\n                 null\n\n        var parentInDocument = $.contains(document.documentElement, parent)\n\n        nodes.forEach(function(node){\n          if (copyByClone) node = node.cloneNode(true)\n          else if (!parent) return $(node).remove()\n\n          parent.insertBefore(node, target)\n          if (parentInDocument) traverseNode(node, function(el){\n            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&\n               (!el.type || el.type === 'text/javascript') && !el.src){\n              var target = el.ownerDocument ? el.ownerDocument.defaultView : window\n              target['eval'].call(target, el.innerHTML)\n            }\n          })\n        })\n      })\n    }\n\n    // after    => insertAfter\n    // prepend  => prependTo\n    // before   => insertBefore\n    // append   => appendTo\n    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){\n      $(html)[operator](this)\n      return this\n    }\n  })\n\n  zepto.Z.prototype = Z.prototype = $.fn\n\n  // Export internal API functions in the `$.zepto` namespace\n  zepto.uniq = uniq\n  zepto.deserializeValue = deserializeValue\n  $.zepto = zepto\n\n  return $\n})()\n\nwindow.Zepto = Zepto\nwindow.$ === undefined && (window.$ = Zepto)\n\n;(function($){\n  var _zid = 1, undefined,\n      slice = Array.prototype.slice,\n      isFunction = $.isFunction,\n      isString = function(obj){ return typeof obj == 'string' },\n      handlers = {},\n      specialEvents={},\n      focusinSupported = 'onfocusin' in window,\n      focus = { focus: 'focusin', blur: 'focusout' },\n      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }\n\n  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'\n\n  function zid(element) {\n    return element._zid || (element._zid = _zid++)\n  }\n  function findHandlers(element, event, fn, selector) {\n    event = parse(event)\n    if (event.ns) var matcher = matcherFor(event.ns)\n    return (handlers[zid(element)] || []).filter(function(handler) {\n      return handler\n        && (!event.e  || handler.e == event.e)\n        && (!event.ns || matcher.test(handler.ns))\n        && (!fn       || zid(handler.fn) === zid(fn))\n        && (!selector || handler.sel == selector)\n    })\n  }\n  function parse(event) {\n    var parts = ('' + event).split('.')\n    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}\n  }\n  function matcherFor(ns) {\n    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')\n  }\n\n  function eventCapture(handler, captureSetting) {\n    return handler.del &&\n      (!focusinSupported && (handler.e in focus)) ||\n      !!captureSetting\n  }\n\n  function realEvent(type) {\n    return hover[type] || (focusinSupported && focus[type]) || type\n  }\n\n  function add(element, events, fn, data, selector, delegator, capture){\n    var id = zid(element), set = (handlers[id] || (handlers[id] = []))\n    events.split(/\\s/).forEach(function(event){\n      if (event == 'ready') return $(document).ready(fn)\n      var handler   = parse(event)\n      handler.fn    = fn\n      handler.sel   = selector\n      // emulate mouseenter, mouseleave\n      if (handler.e in hover) fn = function(e){\n        var related = e.relatedTarget\n        if (!related || (related !== this && !$.contains(this, related)))\n          return handler.fn.apply(this, arguments)\n      }\n      handler.del   = delegator\n      var callback  = delegator || fn\n      handler.proxy = function(e){\n        e = compatible(e)\n        if (e.isImmediatePropagationStopped()) return\n        e.data = data\n        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))\n        if (result === false) e.preventDefault(), e.stopPropagation()\n        return result\n      }\n      handler.i = set.length\n      set.push(handler)\n      if ('addEventListener' in element)\n        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))\n    })\n  }\n  function remove(element, events, fn, selector, capture){\n    var id = zid(element)\n    ;(events || '').split(/\\s/).forEach(function(event){\n      findHandlers(element, event, fn, selector).forEach(function(handler){\n        delete handlers[id][handler.i]\n      if ('removeEventListener' in element)\n        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))\n      })\n    })\n  }\n\n  $.event = { add: add, remove: remove }\n\n  $.proxy = function(fn, context) {\n    var args = (2 in arguments) && slice.call(arguments, 2)\n    if (isFunction(fn)) {\n      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }\n      proxyFn._zid = zid(fn)\n      return proxyFn\n    } else if (isString(context)) {\n      if (args) {\n        args.unshift(fn[context], fn)\n        return $.proxy.apply(null, args)\n      } else {\n        return $.proxy(fn[context], fn)\n      }\n    } else {\n      throw new TypeError(\"expected function\")\n    }\n  }\n\n  $.fn.bind = function(event, data, callback){\n    return this.on(event, data, callback)\n  }\n  $.fn.unbind = function(event, callback){\n    return this.off(event, callback)\n  }\n  $.fn.one = function(event, selector, data, callback){\n    return this.on(event, selector, data, callback, 1)\n  }\n\n  var returnTrue = function(){return true},\n      returnFalse = function(){return false},\n      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,\n      eventMethods = {\n        preventDefault: 'isDefaultPrevented',\n        stopImmediatePropagation: 'isImmediatePropagationStopped',\n        stopPropagation: 'isPropagationStopped'\n      }\n\n  function compatible(event, source) {\n    if (source || !event.isDefaultPrevented) {\n      source || (source = event)\n\n      $.each(eventMethods, function(name, predicate) {\n        var sourceMethod = source[name]\n        event[name] = function(){\n          this[predicate] = returnTrue\n          return sourceMethod && sourceMethod.apply(source, arguments)\n        }\n        event[predicate] = returnFalse\n      })\n\n      event.timeStamp || (event.timeStamp = Date.now())\n\n      if (source.defaultPrevented !== undefined ? source.defaultPrevented :\n          'returnValue' in source ? source.returnValue === false :\n          source.getPreventDefault && source.getPreventDefault())\n        event.isDefaultPrevented = returnTrue\n    }\n    return event\n  }\n\n  function createProxy(event) {\n    var key, proxy = { originalEvent: event }\n    for (key in event)\n      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]\n\n    return compatible(proxy, event)\n  }\n\n  $.fn.delegate = function(selector, event, callback){\n    return this.on(event, selector, callback)\n  }\n  $.fn.undelegate = function(selector, event, callback){\n    return this.off(event, selector, callback)\n  }\n\n  $.fn.live = function(event, callback){\n    $(document.body).delegate(this.selector, event, callback)\n    return this\n  }\n  $.fn.die = function(event, callback){\n    $(document.body).undelegate(this.selector, event, callback)\n    return this\n  }\n\n  $.fn.on = function(event, selector, data, callback, one){\n    var autoRemove, delegator, $this = this\n    if (event && !isString(event)) {\n      $.each(event, function(type, fn){\n        $this.on(type, selector, data, fn, one)\n      })\n      return $this\n    }\n\n    if (!isString(selector) && !isFunction(callback) && callback !== false)\n      callback = data, data = selector, selector = undefined\n    if (callback === undefined || data === false)\n      callback = data, data = undefined\n\n    if (callback === false) callback = returnFalse\n\n    return $this.each(function(_, element){\n      if (one) autoRemove = function(e){\n        remove(element, e.type, callback)\n        return callback.apply(this, arguments)\n      }\n\n      if (selector) delegator = function(e){\n        var evt, match = $(e.target).closest(selector, element).get(0)\n        if (match && match !== element) {\n          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})\n          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))\n        }\n      }\n\n      add(element, event, callback, data, selector, delegator || autoRemove)\n    })\n  }\n  $.fn.off = function(event, selector, callback){\n    var $this = this\n    if (event && !isString(event)) {\n      $.each(event, function(type, fn){\n        $this.off(type, selector, fn)\n      })\n      return $this\n    }\n\n    if (!isString(selector) && !isFunction(callback) && callback !== false)\n      callback = selector, selector = undefined\n\n    if (callback === false) callback = returnFalse\n\n    return $this.each(function(){\n      remove(this, event, callback, selector)\n    })\n  }\n\n  $.fn.trigger = function(event, args){\n    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)\n    event._args = args\n    return this.each(function(){\n      // handle focus(), blur() by calling them directly\n      if (event.type in focus && typeof this[event.type] == \"function\") this[event.type]()\n      // items in the collection might not be DOM elements\n      else if ('dispatchEvent' in this) this.dispatchEvent(event)\n      else $(this).triggerHandler(event, args)\n    })\n  }\n\n  // triggers event handlers on current element just as if an event occurred,\n  // doesn't trigger an actual event, doesn't bubble\n  $.fn.triggerHandler = function(event, args){\n    var e, result\n    this.each(function(i, element){\n      e = createProxy(isString(event) ? $.Event(event) : event)\n      e._args = args\n      e.target = element\n      $.each(findHandlers(element, event.type || event), function(i, handler){\n        result = handler.proxy(e)\n        if (e.isImmediatePropagationStopped()) return false\n      })\n    })\n    return result\n  }\n\n  // shortcut methods for `.bind(event, fn)` for each event type\n  ;('focusin focusout focus blur load resize scroll unload click dblclick '+\n  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+\n  'change select keydown keypress keyup error').split(' ').forEach(function(event) {\n    $.fn[event] = function(callback) {\n      return (0 in arguments) ?\n        this.bind(event, callback) :\n        this.trigger(event)\n    }\n  })\n\n  $.Event = function(type, props) {\n    if (!isString(type)) props = type, type = props.type\n    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true\n    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])\n    event.initEvent(type, bubbles, true)\n    return compatible(event)\n  }\n\n})(Zepto)\n\n;(function($){\n  var jsonpID = +new Date(),\n      document = window.document,\n      key,\n      name,\n      rscript = /<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi,\n      scriptTypeRE = /^(?:text|application)\\/javascript/i,\n      xmlTypeRE = /^(?:text|application)\\/xml/i,\n      jsonType = 'application/json',\n      htmlType = 'text/html',\n      blankRE = /^\\s*$/,\n      originAnchor = document.createElement('a')\n\n  originAnchor.href = window.location.href\n\n  // trigger a custom event and return false if it was cancelled\n  function triggerAndReturn(context, eventName, data) {\n    var event = $.Event(eventName)\n    $(context).trigger(event, data)\n    return !event.isDefaultPrevented()\n  }\n\n  // trigger an Ajax \"global\" event\n  function triggerGlobal(settings, context, eventName, data) {\n    if (settings.global) return triggerAndReturn(context || document, eventName, data)\n  }\n\n  // Number of active Ajax requests\n  $.active = 0\n\n  function ajaxStart(settings) {\n    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')\n  }\n  function ajaxStop(settings) {\n    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')\n  }\n\n  // triggers an extra global event \"ajaxBeforeSend\" that's like \"ajaxSend\" but cancelable\n  function ajaxBeforeSend(xhr, settings) {\n    var context = settings.context\n    if (settings.beforeSend.call(context, xhr, settings) === false ||\n        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)\n      return false\n\n    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])\n  }\n  function ajaxSuccess(data, xhr, settings, deferred) {\n    var context = settings.context, status = 'success'\n    settings.success.call(context, data, status, xhr)\n    if (deferred) deferred.resolveWith(context, [data, status, xhr])\n    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])\n    ajaxComplete(status, xhr, settings)\n  }\n  // type: \"timeout\", \"error\", \"abort\", \"parsererror\"\n  function ajaxError(error, type, xhr, settings, deferred) {\n    var context = settings.context\n    settings.error.call(context, xhr, type, error)\n    if (deferred) deferred.rejectWith(context, [xhr, type, error])\n    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])\n    ajaxComplete(type, xhr, settings)\n  }\n  // status: \"success\", \"notmodified\", \"error\", \"timeout\", \"abort\", \"parsererror\"\n  function ajaxComplete(status, xhr, settings) {\n    var context = settings.context\n    settings.complete.call(context, xhr, status)\n    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])\n    ajaxStop(settings)\n  }\n\n  function ajaxDataFilter(data, type, settings) {\n    if (settings.dataFilter == empty) return data\n    var context = settings.context\n    return settings.dataFilter.call(context, data, type)\n  }\n\n  // Empty function, used as default callback\n  function empty() {}\n\n  $.ajaxJSONP = function(options, deferred){\n    if (!('type' in options)) return $.ajax(options)\n\n    var _callbackName = options.jsonpCallback,\n      callbackName = ($.isFunction(_callbackName) ?\n        _callbackName() : _callbackName) || ('Zepto' + (jsonpID++)),\n      script = document.createElement('script'),\n      originalCallback = window[callbackName],\n      responseData,\n      abort = function(errorType) {\n        $(script).triggerHandler('error', errorType || 'abort')\n      },\n      xhr = { abort: abort }, abortTimeout\n\n    if (deferred) deferred.promise(xhr)\n\n    $(script).on('load error', function(e, errorType){\n      clearTimeout(abortTimeout)\n      $(script).off().remove()\n\n      if (e.type == 'error' || !responseData) {\n        ajaxError(null, errorType || 'error', xhr, options, deferred)\n      } else {\n        ajaxSuccess(responseData[0], xhr, options, deferred)\n      }\n\n      window[callbackName] = originalCallback\n      if (responseData && $.isFunction(originalCallback))\n        originalCallback(responseData[0])\n\n      originalCallback = responseData = undefined\n    })\n\n    if (ajaxBeforeSend(xhr, options) === false) {\n      abort('abort')\n      return xhr\n    }\n\n    window[callbackName] = function(){\n      responseData = arguments\n    }\n\n    script.src = options.url.replace(/\\?(.+)=\\?/, '?$1=' + callbackName)\n    document.head.appendChild(script)\n\n    if (options.timeout > 0) abortTimeout = setTimeout(function(){\n      abort('timeout')\n    }, options.timeout)\n\n    return xhr\n  }\n\n  $.ajaxSettings = {\n    // Default type of request\n    type: 'GET',\n    // Callback that is executed before request\n    beforeSend: empty,\n    // Callback that is executed if the request succeeds\n    success: empty,\n    // Callback that is executed the the server drops error\n    error: empty,\n    // Callback that is executed on request complete (both: error and success)\n    complete: empty,\n    // The context for the callbacks\n    context: null,\n    // Whether to trigger \"global\" Ajax events\n    global: true,\n    // Transport\n    xhr: function () {\n      return new window.XMLHttpRequest()\n    },\n    // MIME types mapping\n    // IIS returns Javascript as \"application/x-javascript\"\n    accepts: {\n      script: 'text/javascript, application/javascript, application/x-javascript',\n      json:   jsonType,\n      xml:    'application/xml, text/xml',\n      html:   htmlType,\n      text:   'text/plain'\n    },\n    // Whether the request is to another domain\n    crossDomain: false,\n    // Default timeout\n    timeout: 0,\n    // Whether data should be serialized to string\n    processData: true,\n    // Whether the browser should be allowed to cache GET responses\n    cache: true,\n    //Used to handle the raw response data of XMLHttpRequest.\n    //This is a pre-filtering function to sanitize the response.\n    //The sanitized response should be returned\n    dataFilter: empty\n  }\n\n  function mimeToDataType(mime) {\n    if (mime) mime = mime.split(';', 2)[0]\n    return mime && ( mime == htmlType ? 'html' :\n      mime == jsonType ? 'json' :\n      scriptTypeRE.test(mime) ? 'script' :\n      xmlTypeRE.test(mime) && 'xml' ) || 'text'\n  }\n\n  function appendQuery(url, query) {\n    if (query == '') return url\n    return (url + '&' + query).replace(/[&?]{1,2}/, '?')\n  }\n\n  // serialize payload and append it to the URL for GET requests\n  function serializeData(options) {\n    if (options.processData && options.data && $.type(options.data) != \"string\")\n      options.data = $.param(options.data, options.traditional)\n    if (options.data && (!options.type || options.type.toUpperCase() == 'GET' || 'jsonp' == options.dataType))\n      options.url = appendQuery(options.url, options.data), options.data = undefined\n  }\n\n  $.ajax = function(options){\n    var settings = $.extend({}, options || {}),\n        deferred = $.Deferred && $.Deferred(),\n        urlAnchor, hashIndex\n    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]\n\n    ajaxStart(settings)\n\n    if (!settings.crossDomain) {\n      urlAnchor = document.createElement('a')\n      urlAnchor.href = settings.url\n      // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049\n      urlAnchor.href = urlAnchor.href\n      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)\n    }\n\n    if (!settings.url) settings.url = window.location.toString()\n    if ((hashIndex = settings.url.indexOf('#')) > -1) settings.url = settings.url.slice(0, hashIndex)\n    serializeData(settings)\n\n    var dataType = settings.dataType, hasPlaceholder = /\\?.+=\\?/.test(settings.url)\n    if (hasPlaceholder) dataType = 'jsonp'\n\n    if (settings.cache === false || (\n         (!options || options.cache !== true) &&\n         ('script' == dataType || 'jsonp' == dataType)\n        ))\n      settings.url = appendQuery(settings.url, '_=' + Date.now())\n\n    if ('jsonp' == dataType) {\n      if (!hasPlaceholder)\n        settings.url = appendQuery(settings.url,\n          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')\n      return $.ajaxJSONP(settings, deferred)\n    }\n\n    var mime = settings.accepts[dataType],\n        headers = { },\n        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },\n        protocol = /^([\\w-]+:)\\/\\//.test(settings.url) ? RegExp.$1 : window.location.protocol,\n        xhr = settings.xhr(),\n        nativeSetHeader = xhr.setRequestHeader,\n        abortTimeout\n\n    if (deferred) deferred.promise(xhr)\n\n    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')\n    setHeader('Accept', mime || '*/*')\n    if (mime = settings.mimeType || mime) {\n      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]\n      xhr.overrideMimeType && xhr.overrideMimeType(mime)\n    }\n    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))\n      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')\n\n    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])\n    xhr.setRequestHeader = setHeader\n\n    xhr.onreadystatechange = function(){\n      if (xhr.readyState == 4) {\n        xhr.onreadystatechange = empty\n        clearTimeout(abortTimeout)\n        var result, error = false\n        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {\n          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))\n\n          if (xhr.responseType == 'arraybuffer' || xhr.responseType == 'blob')\n            result = xhr.response\n          else {\n            result = xhr.responseText\n\n            try {\n              // http://perfectionkills.com/global-eval-what-are-the-options/\n              // sanitize response accordingly if data filter callback provided\n              result = ajaxDataFilter(result, dataType, settings)\n              if (dataType == 'script')    (1,eval)(result)\n              else if (dataType == 'xml')  result = xhr.responseXML\n              else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)\n            } catch (e) { error = e }\n\n            if (error) return ajaxError(error, 'parsererror', xhr, settings, deferred)\n          }\n\n          ajaxSuccess(result, xhr, settings, deferred)\n        } else {\n          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)\n        }\n      }\n    }\n\n    if (ajaxBeforeSend(xhr, settings) === false) {\n      xhr.abort()\n      ajaxError(null, 'abort', xhr, settings, deferred)\n      return xhr\n    }\n\n    var async = 'async' in settings ? settings.async : true\n    xhr.open(settings.type, settings.url, async, settings.username, settings.password)\n\n    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]\n\n    for (name in headers) nativeSetHeader.apply(xhr, headers[name])\n\n    if (settings.timeout > 0) abortTimeout = setTimeout(function(){\n        xhr.onreadystatechange = empty\n        xhr.abort()\n        ajaxError(null, 'timeout', xhr, settings, deferred)\n      }, settings.timeout)\n\n    // avoid sending empty string (#319)\n    xhr.send(settings.data ? settings.data : null)\n    return xhr\n  }\n\n  // handle optional data/success arguments\n  function parseArguments(url, data, success, dataType) {\n    if ($.isFunction(data)) dataType = success, success = data, data = undefined\n    if (!$.isFunction(success)) dataType = success, success = undefined\n    return {\n      url: url\n    , data: data\n    , success: success\n    , dataType: dataType\n    }\n  }\n\n  $.get = function(/* url, data, success, dataType */){\n    return $.ajax(parseArguments.apply(null, arguments))\n  }\n\n  $.post = function(/* url, data, success, dataType */){\n    var options = parseArguments.apply(null, arguments)\n    options.type = 'POST'\n    return $.ajax(options)\n  }\n\n  $.getJSON = function(/* url, data, success */){\n    var options = parseArguments.apply(null, arguments)\n    options.dataType = 'json'\n    return $.ajax(options)\n  }\n\n  $.fn.load = function(url, data, success){\n    if (!this.length) return this\n    var self = this, parts = url.split(/\\s/), selector,\n        options = parseArguments(url, data, success),\n        callback = options.success\n    if (parts.length > 1) options.url = parts[0], selector = parts[1]\n    options.success = function(response){\n      self.html(selector ?\n        $('<div>').html(response.replace(rscript, \"\")).find(selector)\n        : response)\n      callback && callback.apply(self, arguments)\n    }\n    $.ajax(options)\n    return this\n  }\n\n  var escape = encodeURIComponent\n\n  function serialize(params, obj, traditional, scope){\n    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)\n    $.each(obj, function(key, value) {\n      type = $.type(value)\n      if (scope) key = traditional ? scope :\n        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'\n      // handle data in serializeArray() format\n      if (!scope && array) params.add(value.name, value.value)\n      // recurse into nested objects\n      else if (type == \"array\" || (!traditional && type == \"object\"))\n        serialize(params, value, traditional, key)\n      else params.add(key, value)\n    })\n  }\n\n  $.param = function(obj, traditional){\n    var params = []\n    params.add = function(key, value) {\n      if ($.isFunction(value)) value = value()\n      if (value == null) value = \"\"\n      this.push(escape(key) + '=' + escape(value))\n    }\n    serialize(params, obj, traditional)\n    return params.join('&').replace(/%20/g, '+')\n  }\n})(Zepto)\n\n;(function($){\n  $.fn.serializeArray = function() {\n    var name, type, result = [],\n      add = function(value) {\n        if (value.forEach) return value.forEach(add)\n        result.push({ name: name, value: value })\n      }\n    if (this[0]) $.each(this[0].elements, function(_, field){\n      type = field.type, name = field.name\n      if (name && field.nodeName.toLowerCase() != 'fieldset' &&\n        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&\n        ((type != 'radio' && type != 'checkbox') || field.checked))\n          add($(field).val())\n    })\n    return result\n  }\n\n  $.fn.serialize = function(){\n    var result = []\n    this.serializeArray().forEach(function(elm){\n      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))\n    })\n    return result.join('&')\n  }\n\n  $.fn.submit = function(callback) {\n    if (0 in arguments) this.bind('submit', callback)\n    else if (this.length) {\n      var event = $.Event('submit')\n      this.eq(0).trigger(event)\n      if (!event.isDefaultPrevented()) this.get(0).submit()\n    }\n    return this\n  }\n\n})(Zepto)\n\n;(function(){\n  // getComputedStyle shouldn't freak out when called\n  // without a valid element as argument\n  try {\n    getComputedStyle(undefined)\n  } catch(e) {\n    var nativeGetComputedStyle = getComputedStyle\n    window.getComputedStyle = function(element, pseudoElement){\n      try {\n        return nativeGetComputedStyle(element, pseudoElement)\n      } catch(e) {\n        return null\n      }\n    }\n  }\n})()\n  return Zepto\n}))\n"
},
function(e, t, n) {
    var r = n(4),
    a = r.JSON || (r.JSON = {
        stringify: JSON.stringify
    });
    e.exports = function(e) {
        return a.stringify.apply(a, arguments)
    }
},
function(e, t, n) {
    e.exports = {
    default:
        n(97),
        __esModule: !0
    }
},
function(e, t, n) {
    n(72),
    n(80),
    e.exports = n(51).f("iterator")
},
function(e, t, n) {
    var r = n(45),
    a = n(46);
    e.exports = function(e) {
        return function(t, n) {
            var o, i, s = String(a(t)),
            u = r(n),
            l = s.length;
            return u < 0 || u >= l ? e ? "": void 0 : (o = s.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === l || (i = s.charCodeAt(u + 1)) < 56320 || i > 57343 ? e ? s.charAt(u) : o: e ? s.slice(u, u + 2) : i - 56320 + (o - 55296 << 10) + 65536
        }
    }
},
function(e, t, n) {
    "use strict";
    var r = n(47),
    a = n(38),
    o = n(40),
    i = {};
    n(23)(i, n(9)("iterator"), (function() {
        return this
    })),
    e.exports = function(e, t, n) {
        e.prototype = r(i, {
            next: a(1, n)
        }),
        o(e, t + " Iterator")
    }
},
function(e, t, n) {
    var r = n(20),
    a = n(15),
    o = n(33);
    e.exports = n(16) ? Object.defineProperties: function(e, t) {
        a(e);
        for (var n, i = o(t), s = i.length, u = 0; s > u;) r.f(e, n = i[u++], t[n]);
        return e
    }
},
function(e, t, n) {
    var r = n(25),
    a = n(77),
    o = n(102);
    e.exports = function(e) {
        return function(t, n, i) {
            var s, u = r(t),
            l = a(u.length),
            c = o(i, l);
            if (e && n != n) {
                for (; l > c;) if ((s = u[c++]) != s) return ! 0
            } else for (; l > c; c++) if ((e || c in u) && u[c] === n) return e || c || 0;
            return ! e && -1
        }
    }
},
function(e, t, n) {
    var r = n(45),
    a = Math.max,
    o = Math.min;
    e.exports = function(e, t) {
        return (e = r(e)) < 0 ? a(e + t, 0) : o(e, t)
    }
},
function(e, t, n) {
    "use strict";
    var r = n(104),
    a = n(105),
    o = n(32),
    i = n(25);
    e.exports = n(73)(Array, "Array", (function(e, t) {
        this._t = i(e),
        this._i = 0,
        this._k = t
    }), (function() {
        var e = this._t,
        t = this._k,
        n = this._i++;
        return ! e || n >= e.length ? (this._t = void 0, a(1)) : a(0, "keys" == t ? n: "values" == t ? e[n] : [n, e[n]])
    }), "values"),
    o.Arguments = o.Array,
    r("keys"),
    r("values"),
    r("entries")
},
function(e, t) {
    e.exports = function() {}
},
function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
},
function(e, t, n) {
    e.exports = {
    default:
        n(107),
        __esModule: !0
    }
},
function(e, t, n) {
    n(108),
    n(82),
    n(113),
    n(114),
    e.exports = n(4).Symbol
},
function(e, t, n) {
    "use strict";
    var r = n(7),
    a = n(24),
    o = n(16),
    i = n(12),
    s = n(74),
    u = n(109).KEY,
    l = n(27),
    c = n(49),
    f = n(40),
    p = n(39),
    d = n(9),
    h = n(51),
    m = n(52),
    v = n(110),
    y = n(111),
    g = n(15),
    b = n(21),
    w = n(35),
    k = n(25),
    x = n(44),
    S = n(38),
    _ = n(47),
    T = n(112),
    A = n(54),
    j = n(53),
    E = n(20),
    I = n(33),
    O = A.f,
    D = E.f,
    P = T.f,
    N = r.Symbol,
    $ = r.JSON,
    C = $ && $.stringify,
    L = d("_hidden"),
    M = d("toPrimitive"),
    R = {}.propertyIsEnumerable,
    z = c("symbol-registry"),
    q = c("symbols"),
    F = c("op-symbols"),
    U = Object.prototype,
    Q = "function" == typeof N && !!j.f,
    B = r.QObject,
    J = !B || !B.prototype || !B.prototype.findChild,
    H = o && l((function() {
        return 7 != _(D({},
        "a", {
            get: function() {
                return D(this, "a", {
                    value: 7
                }).a
            }
        })).a
    })) ?
    function(e, t, n) {
        var r = O(U, t);
        r && delete U[t],
        D(e, t, n),
        r && e !== U && D(U, t, r)
    }: D,
    G = function(e) {
        var t = q[e] = _(N.prototype);
        return t._k = e,
        t
    },
    V = Q && "symbol" == typeof N.iterator ?
    function(e) {
        return "symbol" == typeof e
    }: function(e) {
        return e instanceof N
    },
    Z = function(e, t, n) {
        return e === U && Z(F, t, n),
        g(e),
        t = x(t, !0),
        g(n),
        a(q, t) ? (n.enumerable ? (a(e, L) && e[L][t] && (e[L][t] = !1), n = _(n, {
            enumerable: S(0, !1)
        })) : (a(e, L) || D(e, L, S(1, {})), e[L][t] = !0), H(e, t, n)) : D(e, t, n)
    },
    W = function(e, t) {
        g(e);
        for (var n, r = v(t = k(t)), a = 0, o = r.length; o > a;) Z(e, n = r[a++], t[n]);
        return e
    },
    K = function(e) {
        var t = R.call(this, e = x(e, !0));
        return ! (this === U && a(q, e) && !a(F, e)) && (!(t || !a(this, e) || !a(q, e) || a(this, L) && this[L][e]) || t)
    },
    Y = function(e, t) {
        if (e = k(e), t = x(t, !0), e !== U || !a(q, t) || a(F, t)) {
            var n = O(e, t);
            return ! n || !a(q, t) || a(e, L) && e[L][t] || (n.enumerable = !0),
            n
        }
    },
    X = function(e) {
        for (var t, n = P(k(e)), r = [], o = 0; n.length > o;) a(q, t = n[o++]) || t == L || t == u || r.push(t);
        return r
    },
    ee = function(e) {
        for (var t, n = e === U,
        r = P(n ? F: k(e)), o = [], i = 0; r.length > i;) ! a(q, t = r[i++]) || n && !a(U, t) || o.push(q[t]);
        return o
    };
    Q || (s((N = function() {
        if (this instanceof N) throw TypeError("Symbol is not a constructor!");
        var e = p(arguments.length > 0 ? arguments[0] : void 0),
        t = function(n) {
            this === U && t.call(F, n),
            a(this, L) && a(this[L], e) && (this[L][e] = !1),
            H(this, e, S(1, n))
        };
        return o && J && H(U, e, {
            configurable: !0,
            set: t
        }),
        G(e)
    }).prototype, "toString", (function() {
        return this._k
    })), A.f = Y, E.f = Z, n(81).f = T.f = X, n(41).f = K, j.f = ee, o && !n(31) && s(U, "propertyIsEnumerable", K, !0), h.f = function(e) {
        return G(d(e))
    }),
    i(i.G + i.W + i.F * !Q, {
        Symbol: N
    });
    for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) d(te[ne++]);
    for (var re = I(d.store), ae = 0; re.length > ae;) m(re[ae++]);
    i(i.S + i.F * !Q, "Symbol", {
        for: function(e) {
            return a(z, e += "") ? z[e] : z[e] = N(e)
        },
        keyFor: function(e) {
            if (!V(e)) throw TypeError(e + " is not a symbol!");
            for (var t in z) if (z[t] === e) return t
        },
        useSetter: function() {
            J = !0
        },
        useSimple: function() {
            J = !1
        }
    }),
    i(i.S + i.F * !Q, "Object", {
        create: function(e, t) {
            return void 0 === t ? _(e) : W(_(e), t)
        },
        defineProperty: Z,
        defineProperties: W,
        getOwnPropertyDescriptor: Y,
        getOwnPropertyNames: X,
        getOwnPropertySymbols: ee
    });
    var oe = l((function() {
        j.f(1)
    }));
    i(i.S + i.F * oe, "Object", {
        getOwnPropertySymbols: function(e) {
            return j.f(w(e))
        }
    }),
    $ && i(i.S + i.F * (!Q || l((function() {
        var e = N();
        return "[null]" != C([e]) || "{}" != C({
            a: e
        }) || "{}" != C(Object(e))
    }))), "JSON", {
        stringify: function(e) {
            for (var t, n, r = [e], a = 1; arguments.length > a;) r.push(arguments[a++]);
            if (n = t = r[1], (b(t) || void 0 !== e) && !V(e)) return y(t) || (t = function(e, t) {
                if ("function" == typeof n && (t = n.call(this, e, t)), !V(t)) return t
            }),
            r[1] = t,
            C.apply($, r)
        }
    }),
    N.prototype[M] || n(23)(N.prototype, M, N.prototype.valueOf),
    f(N, "Symbol"),
    f(Math, "Math", !0),
    f(r.JSON, "JSON", !0)
},
function(e, t, n) {
    var r = n(39)("meta"),
    a = n(21),
    o = n(24),
    i = n(20).f,
    s = 0,
    u = Object.isExtensible ||
    function() {
        return ! 0
    },
    l = !n(27)((function() {
        return u(Object.preventExtensions({}))
    })),
    c = function(e) {
        i(e, r, {
            value: {
                i: "O" + ++s,
                w: {}
            }
        })
    },
    f = e.exports = {
        KEY: r,
        NEED: !1,
        fastKey: function(e, t) {
            if (!a(e)) return "symbol" == typeof e ? e: ("string" == typeof e ? "S": "P") + e;
            if (!o(e, r)) {
                if (!u(e)) return "F";
                if (!t) return "E";
                c(e)
            }
            return e[r].i
        },
        getWeak: function(e, t) {
            if (!o(e, r)) {
                if (!u(e)) return ! 0;
                if (!t) return ! 1;
                c(e)
            }
            return e[r].w
        },
        onFreeze: function(e) {
            return l && f.NEED && u(e) && !o(e, r) && c(e),
            e
        }
    }
},
function(e, t, n) {
    var r = n(33),
    a = n(53),
    o = n(41);
    e.exports = function(e) {
        var t = r(e),
        n = a.f;
        if (n) for (var i, s = n(e), u = o.f, l = 0; s.length > l;) u.call(e, i = s[l++]) && t.push(i);
        return t
    }
},
function(e, t, n) {
    var r = n(34);
    e.exports = Array.isArray ||
    function(e) {
        return "Array" == r(e)
    }
},
function(e, t, n) {
    var r = n(25),
    a = n(81).f,
    o = {}.toString,
    i = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function(e) {
        return i && "[object Window]" == o.call(e) ?
        function(e) {
            try {
                return a(e)
            } catch(e) {
                return i.slice()
            }
        } (e) : a(r(e))
    }
},
function(e, t, n) {
    n(52)("asyncIterator")
},
function(e, t, n) {
    n(52)("observable")
},
function(e, t, n) {
    n(116),
    e.exports = n(4).Object.getPrototypeOf
},
function(e, t, n) {
    var r = n(35),
    a = n(79);
    n(55)("getPrototypeOf", (function() {
        return function(e) {
            return a(r(e))
        }
    }))
},
function(e, t, n) {
    e.exports = {
    default:
        n(118),
        __esModule: !0
    }
},
function(e, t, n) {
    n(119),
    e.exports = n(4).Object.setPrototypeOf
},
function(e, t, n) {
    var r = n(12);
    r(r.S, "Object", {
        setPrototypeOf: n(120).set
    })
},
function(e, t, n) {
    var r = n(21),
    a = n(15),
    o = function(e, t) {
        if (a(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
    };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ?
        function(e, t, r) {
            try { (r = n(29)(Function.call, n(54).f(Object.prototype, "__proto__").set, 2))(e, []),
                t = !(e instanceof Array)
            } catch(e) {
                t = !0
            }
            return function(e, n) {
                return o(e, n),
                t ? e.__proto__ = n: r(e, n),
                e
            }
        } ({},
        !1) : void 0),
        check: o
    }
},
function(e, t, n) {
    e.exports = {
    default:
        n(122),
        __esModule: !0
    }
},
function(e, t, n) {
    n(123);
    var r = n(4).Object;
    e.exports = function(e, t) {
        return r.create(e, t)
    }
},
function(e, t, n) {
    var r = n(12);
    r(r.S, "Object", {
        create: n(47)
    })
},
function(e, t, n) {
    var r = function() {
        return this
    } () || Function("return this")(),
    a = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
    o = a && r.regeneratorRuntime;
    if (r.regeneratorRuntime = void 0, e.exports = n(125), a) r.regeneratorRuntime = o;
    else try {
        delete r.regeneratorRuntime
    } catch(e) {
        r.regeneratorRuntime = void 0
    }
},
function(e, t) { !
    function(t) {
        "use strict";
        var n = Object.prototype,
        r = n.hasOwnProperty,
        a = "function" == typeof Symbol ? Symbol: {},
        o = a.iterator || "@@iterator",
        i = a.asyncIterator || "@@asyncIterator",
        s = a.toStringTag || "@@toStringTag",
        u = "object" == typeof e,
        l = t.regeneratorRuntime;
        if (l) u && (e.exports = l);
        else { (l = t.regeneratorRuntime = u ? e.exports: {}).wrap = m;
            var c = {},
            f = {};
            f[o] = function() {
                return this
            };
            var p = Object.getPrototypeOf,
            d = p && p(p(A([])));
            d && d !== n && r.call(d, o) && (f = d);
            var h = b.prototype = y.prototype = Object.create(f);
            g.prototype = h.constructor = b,
            b.constructor = g,
            b[s] = g.displayName = "GeneratorFunction",
            l.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !! t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
            },
            l.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, s in e || (e[s] = "GeneratorFunction")),
                e.prototype = Object.create(h),
                e
            },
            l.awrap = function(e) {
                return {
                    __await: e
                }
            },
            w(k.prototype),
            k.prototype[i] = function() {
                return this
            },
            l.AsyncIterator = k,
            l.async = function(e, t, n, r) {
                var a = new k(m(e, t, n, r));
                return l.isGeneratorFunction(t) ? a: a.next().then((function(e) {
                    return e.done ? e.value: a.next()
                }))
            },
            w(h),
            h[s] = "Generator",
            h[o] = function() {
                return this
            },
            h.toString = function() {
                return "[object Generator]"
            },
            l.keys = function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t.reverse(),
                function n() {
                    for (; t.length;) {
                        var r = t.pop();
                        if (r in e) return n.value = r,
                        n.done = !1,
                        n
                    }
                    return n.done = !0,
                    n
                }
            },
            l.values = A,
            T.prototype = {
                constructor: T,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e) for (var t in this)"t" === t.charAt(0) && r.call(this, t) && !isNaN( + t.slice(1)) && (this[t] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;
                    function n(n, r) {
                        return i.type = "throw",
                        i.arg = e,
                        t.next = n,
                        r && (t.method = "next", t.arg = void 0),
                        !!r
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var o = this.tryEntries[a],
                        i = o.completion;
                        if ("root" === o.tryLoc) return n("end");
                        if (o.tryLoc <= this.prev) {
                            var s = r.call(o, "catchLoc"),
                            u = r.call(o, "finallyLoc");
                            if (s && u) {
                                if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                            } else if (s) {
                                if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var a = this.tryEntries[n];
                        if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var o = a;
                            break
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var i = o ? o.completion: {};
                    return i.type = e,
                    i.arg = t,
                    o ? (this.method = "next", this.next = o.finallyLoc, c) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg: "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t),
                    c
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc),
                        _(n),
                        c
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var a = r.arg;
                                _(n)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: A(e),
                        resultName: t,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = void 0),
                    c
                }
            }
        }
        function m(e, t, n, r) {
            var a = t && t.prototype instanceof y ? t: y,
            o = Object.create(a.prototype),
            i = new T(r || []);
            return o._invoke = function(e, t, n) {
                var r = "suspendedStart";
                return function(a, o) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === a) throw o;
                        return j()
                    }
                    for (n.method = a, n.arg = o;;) {
                        var i = n.delegate;
                        if (i) {
                            var s = x(i, n);
                            if (s) {
                                if (s === c) continue;
                                return s
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed",
                            n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var u = v(e, t, n);
                        if ("normal" === u.type) {
                            if (r = n.done ? "completed": "suspendedYield", u.arg === c) continue;
                            return {
                                value: u.arg,
                                done: n.done
                            }
                        }
                        "throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg)
                    }
                }
            } (e, n, i),
            o
        }
        function v(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch(e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        function y() {}
        function g() {}
        function b() {}
        function w(e) { ["next", "throw", "return"].forEach((function(t) {
                e[t] = function(e) {
                    return this._invoke(t, e)
                }
            }))
        }
        function k(e) {
            var t;
            this._invoke = function(n, a) {
                function o() {
                    return new Promise((function(t, o) { !
                        function t(n, a, o, i) {
                            var s = v(e[n], e, a);
                            if ("throw" !== s.type) {
                                var u = s.arg,
                                l = u.value;
                                return l && "object" == typeof l && r.call(l, "__await") ? Promise.resolve(l.__await).then((function(e) {
                                    t("next", e, o, i)
                                }), (function(e) {
                                    t("throw", e, o, i)
                                })) : Promise.resolve(l).then((function(e) {
                                    u.value = e,
                                    o(u)
                                }), i)
                            }
                            i(s.arg)
                        } (n, a, t, o)
                    }))
                }
                return t = t ? t.then(o, o) : o()
            }
        }
        function x(e, t) {
            var n = e.iterator[t.method];
            if (void 0 === n) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.
                    return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method)) return c;
                    t.method = "throw",
                    t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return c
            }
            var r = v(n, e.iterator, t.arg);
            if ("throw" === r.type) return t.method = "throw",
            t.arg = r.arg,
            t.delegate = null,
            c;
            var a = r.arg;
            return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, c) : a: (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, c)
        }
        function S(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]),
            2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]),
            this.tryEntries.push(t)
        }
        function _(e) {
            var t = e.completion || {};
            t.type = "normal",
            delete t.arg,
            e.completion = t
        }
        function T(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            e.forEach(S, this),
            this.reset(!0)
        }
        function A(e) {
            if (e) {
                var t = e[o];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1,
                    a = function t() {
                        for (; ++n < e.length;) if (r.call(e, n)) return t.value = e[n],
                        t.done = !1,
                        t;
                        return t.value = void 0,
                        t.done = !0,
                        t
                    };
                    return a.next = a
                }
            }
            return {
                next: j
            }
        }
        function j() {
            return {
                value: void 0,
                done: !0
            }
        }
    } (function() {
        return this
    } () || Function("return this")())
},
function(e, t, n) {
    n(82),
    n(72),
    n(80),
    n(127),
    n(139),
    n(140),
    e.exports = n(4).Promise
},
function(e, t, n) {
    "use strict";
    var r, a, o, i, s = n(31),
    u = n(7),
    l = n(29),
    c = n(84),
    f = n(12),
    p = n(21),
    d = n(37),
    h = n(128),
    m = n(129),
    v = n(85),
    y = n(86).set,
    g = n(134)(),
    b = n(57),
    w = n(87),
    k = n(135),
    x = n(88),
    S = u.TypeError,
    _ = u.process,
    T = _ && _.versions,
    A = T && T.v8 || "",
    j = u.Promise,
    E = "process" == c(_),
    I = function() {},
    O = a = b.f,
    D = !!
    function() {
        try {
            var e = j.resolve(1),
            t = (e.constructor = {})[n(9)("species")] = function(e) {
                e(I, I)
            };
            return (E || "function" == typeof PromiseRejectionEvent) && e.then(I) instanceof t && 0 !== A.indexOf("6.6") && -1 === k.indexOf("Chrome/66")
        } catch(e) {}
    } (),
    P = function(e) {
        var t;
        return ! (!p(e) || "function" != typeof(t = e.then)) && t
    },
    N = function(e, t) {
        if (!e._n) {
            e._n = !0;
            var n = e._c;
            g((function() {
                for (var r = e._v,
                a = 1 == e._s,
                o = 0,
                i = function(t) {
                    var n, o, i, s = a ? t.ok: t.fail,
                    u = t.resolve,
                    l = t.reject,
                    c = t.domain;
                    try {
                        s ? (a || (2 == e._h && L(e), e._h = 1), !0 === s ? n = r: (c && c.enter(), n = s(r), c && (c.exit(), i = !0)), n === t.promise ? l(S("Promise-chain cycle")) : (o = P(n)) ? o.call(n, u, l) : u(n)) : l(r)
                    } catch(e) {
                        c && !i && c.exit(),
                        l(e)
                    }
                }; n.length > o;) i(n[o++]);
                e._c = [],
                e._n = !1,
                t && !e._h && $(e)
            }))
        }
    },
    $ = function(e) {
        y.call(u, (function() {
            var t, n, r, a = e._v,
            o = C(e);
            if (o && (t = w((function() {
                E ? _.emit("unhandledRejection", a, e) : (n = u.onunhandledrejection) ? n({
                    promise: e,
                    reason: a
                }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", a)
            })), e._h = E || C(e) ? 2 : 1), e._a = void 0, o && t.e) throw t.v
        }))
    },
    C = function(e) {
        return 1 !== e._h && 0 === (e._a || e._c).length
    },
    L = function(e) {
        y.call(u, (function() {
            var t;
            E ? _.emit("rejectionHandled", e) : (t = u.onrejectionhandled) && t({
                promise: e,
                reason: e._v
            })
        }))
    },
    M = function(e) {
        var t = this;
        t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), N(t, !0))
    },
    R = function(e) {
        var t, n = this;
        if (!n._d) {
            n._d = !0,
            n = n._w || n;
            try {
                if (n === e) throw S("Promise can't be resolved itself"); (t = P(e)) ? g((function() {
                    var r = {
                        _w: n,
                        _d: !1
                    };
                    try {
                        t.call(e, l(R, r, 1), l(M, r, 1))
                    } catch(e) {
                        M.call(r, e)
                    }
                })) : (n._v = e, n._s = 1, N(n, !1))
            } catch(e) {
                M.call({
                    _w: n,
                    _d: !1
                },
                e)
            }
        }
    };
    D || (j = function(e) {
        h(this, j, "Promise", "_h"),
        d(e),
        r.call(this);
        try {
            e(l(R, this, 1), l(M, this, 1))
        } catch(e) {
            M.call(this, e)
        }
    },
    (r = function(e) {
        this._c = [],
        this._a = void 0,
        this._s = 0,
        this._d = !1,
        this._v = void 0,
        this._h = 0,
        this._n = !1
    }).prototype = n(136)(j.prototype, {
        then: function(e, t) {
            var n = O(v(this, j));
            return n.ok = "function" != typeof e || e,
            n.fail = "function" == typeof t && t,
            n.domain = E ? _.domain: void 0,
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && N(this, !1),
            n.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }), o = function() {
        var e = new r;
        this.promise = e,
        this.resolve = l(R, e, 1),
        this.reject = l(M, e, 1)
    },
    b.f = O = function(e) {
        return e === j || e === i ? new o(e) : a(e)
    }),
    f(f.G + f.W + f.F * !D, {
        Promise: j
    }),
    n(40)(j, "Promise"),
    n(137)("Promise"),
    i = n(4).Promise,
    f(f.S + f.F * !D, "Promise", {
        reject: function(e) {
            var t = O(this);
            return (0, t.reject)(e),
            t.promise
        }
    }),
    f(f.S + f.F * (s || !D), "Promise", {
        resolve: function(e) {
            return x(s && this === i ? j: this, e)
        }
    }),
    f(f.S + f.F * !(D && n(138)((function(e) {
        j.all(e).
        catch(I)
    }))), "Promise", {
        all: function(e) {
            var t = this,
            n = O(t),
            r = n.resolve,
            a = n.reject,
            o = w((function() {
                var n = [],
                o = 0,
                i = 1;
                m(e, !1, (function(e) {
                    var s = o++,
                    u = !1;
                    n.push(void 0),
                    i++,
                    t.resolve(e).then((function(e) {
                        u || (u = !0, n[s] = e, --i || r(n))
                    }), a)
                })),
                --i || r(n)
            }));
            return o.e && a(o.v),
            n.promise
        },
        race: function(e) {
            var t = this,
            n = O(t),
            r = n.reject,
            a = w((function() {
                m(e, !1, (function(e) {
                    t.resolve(e).then(n.resolve, r)
                }))
            }));
            return a.e && r(a.v),
            n.promise
        }
    })
},
function(e, t) {
    e.exports = function(e, t, n, r) {
        if (! (e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
        return e
    }
},
function(e, t, n) {
    var r = n(29),
    a = n(130),
    o = n(131),
    i = n(15),
    s = n(77),
    u = n(132),
    l = {},
    c = {}; (t = e.exports = function(e, t, n, f, p) {
        var d, h, m, v, y = p ?
        function() {
            return e
        }: u(e),
        g = r(n, f, t ? 2 : 1),
        b = 0;
        if ("function" != typeof y) throw TypeError(e + " is not iterable!");
        if (o(y)) {
            for (d = s(e.length); d > b; b++) if ((v = t ? g(i(h = e[b])[0], h[1]) : g(e[b])) === l || v === c) return v
        } else for (m = y.call(e); ! (h = m.next()).done;) if ((v = a(m, g, h.value, t)) === l || v === c) return v
    }).BREAK = l,
    t.RETURN = c
},
function(e, t, n) {
    var r = n(15);
    e.exports = function(e, t, n, a) {
        try {
            return a ? t(r(n)[0], n[1]) : t(n)
        } catch(t) {
            var o = e.
            return;
            throw void 0 !== o && r(o.call(e)),
            t
        }
    }
},
function(e, t, n) {
    var r = n(32),
    a = n(9)("iterator"),
    o = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (r.Array === e || o[a] === e)
    }
},
function(e, t, n) {
    var r = n(84),
    a = n(9)("iterator"),
    o = n(32);
    e.exports = n(4).getIteratorMethod = function(e) {
        if (null != e) return e[a] || e["@@iterator"] || o[r(e)]
    }
},
function(e, t) {
    e.exports = function(e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
        case 0:
            return r ? e() : e.call(n);
        case 1:
            return r ? e(t[0]) : e.call(n, t[0]);
        case 2:
            return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
            return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
            return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
},
function(e, t, n) {
    var r = n(7),
    a = n(86).set,
    o = r.MutationObserver || r.WebKitMutationObserver,
    i = r.process,
    s = r.Promise,
    u = "process" == n(34)(i);
    e.exports = function() {
        var e, t, n, l = function() {
            var r, a;
            for (u && (r = i.domain) && r.exit(); e;) {
                a = e.fn,
                e = e.next;
                try {
                    a()
                } catch(r) {
                    throw e ? n() : t = void 0,
                    r
                }
            }
            t = void 0,
            r && r.enter()
        };
        if (u) n = function() {
            i.nextTick(l)
        };
        else if (!o || r.navigator && r.navigator.standalone) if (s && s.resolve) {
            var c = s.resolve(void 0);
            n = function() {
                c.then(l)
            }
        } else n = function() {
            a.call(r, l)
        };
        else {
            var f = !0,
            p = document.createTextNode("");
            new o(l).observe(p, {
                characterData: !0
            }),
            n = function() {
                p.data = f = !f
            }
        }
        return function(r) {
            var a = {
                fn: r,
                next: void 0
            };
            t && (t.next = a),
            e || (e = a, n()),
            t = a
        }
    }
},
function(e, t, n) {
    var r = n(7).navigator;
    e.exports = r && r.userAgent || ""
},
function(e, t, n) {
    var r = n(23);
    e.exports = function(e, t, n) {
        for (var a in t) n && e[a] ? e[a] = t[a] : r(e, a, t[a]);
        return e
    }
},
function(e, t, n) {
    "use strict";
    var r = n(7),
    a = n(4),
    o = n(20),
    i = n(16),
    s = n(9)("species");
    e.exports = function(e) {
        var t = "function" == typeof a[e] ? a[e] : r[e];
        i && t && !t[s] && o.f(t, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
},
function(e, t, n) {
    var r = n(9)("iterator"),
    a = !1;
    try {
        var o = [7][r]();
        o.
        return = function() {
            a = !0
        },
        Array.from(o, (function() {
            throw 2
        }))
    } catch(e) {}
    e.exports = function(e, t) {
        if (!t && !a) return ! 1;
        var n = !1;
        try {
            var o = [7],
            i = o[r]();
            i.next = function() {
                return {
                    done: n = !0
                }
            },
            o[r] = function() {
                return i
            },
            e(o)
        } catch(e) {}
        return n
    }
},
function(e, t, n) {
    "use strict";
    var r = n(12),
    a = n(4),
    o = n(7),
    i = n(85),
    s = n(88);
    r(r.P + r.R, "Promise", {
        finally: function(e) {
            var t = i(this, a.Promise || o.Promise),
            n = "function" == typeof e;
            return this.then(n ?
            function(n) {
                return s(t, e()).then((function() {
                    return n
                }))
            }: e, n ?
            function(n) {
                return s(t, e()).then((function() {
                    throw n
                }))
            }: e)
        }
    })
},
function(e, t, n) {
    "use strict";
    var r = n(12),
    a = n(57),
    o = n(87);
    r(r.S, "Promise", {
        try: function(e) {
            var t = a.f(this),
            n = o(e);
            return (n.e ? t.reject: t.resolve)(n.v),
            t.promise
        }
    })
},
, , , ,
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = g(n(14)),
    a = g(n(89)),
    o = g(n(28)),
    i = g(n(8)),
    s = g(n(2)),
    u = g(n(3)),
    l = g(n(13)),
    c = g(n(0)),
    f = g(n(1)),
    p = g(n(17)),
    d = g(n(148)),
    h = g(n(18)),
    m = g(n(26)),
    v = g(n(22)),
    y = g(n(6));
    function g(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    var b = 100,
    w = 200,
    k = 900,
    x = 901,
    S = 305,
    _ = 500,
    T = {
        READY: v.
    default.inited,
        UPDATE: v.
    default.update,
        STARTED: v.
    default.queue,
        DOWNLOAD: v.
    default.update,
        DOWNLOADING: v.
    default.downloading,
        PAUSED: v.
    default.paused,
        DOWNLOADED: v.
    default.downloaded,
        INSTALLING: v.
    default.installing,
        INSTALLED: v.
    default.installed
    },
    A = function(e) {
        function t(e) { (0, c.
        default)(this, t);
            var n = (0, p.
        default)(this, (t.__proto__ || (0, l.
        default)(t)).call(this, e));
            return n.jsbname = "yyb",
            n.scene = y.
        default.getUrlParam("scene") || "20100216",
            n.sourceScene = y.
        default.getUrlParam("sourceScene") || "20100216",
            n.via = y.
        default.getUrlParam("via"),
            n.recommendId = y.
        default.getUrlParam("recmdid"),
            n.channelid = y.
        default.getUrlParam("channelid"),
            n.report({
                action: b,
                slotId: "14_005"
            }),
            n
        }
        var n, m, g, A, j, E, I, O, D, P, N, $, C, L;
        return (0, h.
    default)(t, e),
        (0, f.
    default)(t, [{
            key: "initial",
            value: (L = (0, u.
        default)(s.
        default.mark((function e() {
                var t = this;
                return s.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return window.stateCallback = function(e) {
                            console.log("window.stateCallback", e),
                            e.result && 0 !== e.result || t.stateCallback(JSON.parse(e.data))
                        },
                        e.next = 3,
                        this.getAppVersion();
                    case 3:
                        if (!e.sent) {
                            e.next = 7;
                            break
                        }
                        this.stateCallback({
                            appstate: "INSTALLED"
                        }),
                        e.next = 8;
                        break;
                    case 7:
                        this.stateCallback({
                            appstate:
                            "READY"
                        });
                    case 8:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return L.apply(this, arguments)
            })
        },
        {
            key: "getDeviceInfo",
            value: (C = (0, u.
        default)(s.
        default.mark((function e() {
                return s.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        this.call("getPrivateMobileInfo");
                    case 2:
                        return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return C.apply(this, arguments)
            })
        },
        {
            key: "getPageConfig",
            value: ($ = (0, u.
        default)(s.
        default.mark((function e() {
                return s.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.pageConfig) {
                            e.next = 4;
                            break
                        }
                        return e.next = 3,
                        this.call("getPageConfig");
                    case 3:
                        this.pageConfig = e.sent;
                    case 4:
                        return e.abrupt("return", this.pageConfig);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return $.apply(this, arguments)
            })
        },
        {
            key: "report",
            value: (N = (0, u.
        default)(s.
        default.mark((function e() {
                var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return s.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return t = {
                            slotId: n.slotId || "",
                            action: n.action || "",
                            params: n.params || this.expid || "",
                            sourceScene: this.scene,
                            contentId: n.contentId || "",
                            scene: this.scene,
                            appId: this.appInfo.appId || "",
                            recommendId: this.recommendId || "",
                            status: "",
                            channelid: this.channelid || "",
                            via: this.via || ""
                        },
                        e.next = 3,
                        this.call("report", t);
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return N.apply(this, arguments)
            })
        },
        {
            key: "getAppVersion",
            value: (P = (0, u.
        default)(s.
        default.mark((function e() {
                var t, n;
                return s.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (t = this.appInfo.packageName) {
                            e.next = 3;
                            break
                        }
                        return e.abrupt("return", []);
                    case 3:
                        return e.next = 5,
                        this.call("getAppInfo", {
                            packagenames: [t]
                        });
                    case 5:
                        return n = e.sent,
                        console.log("getAppVersion", n),
                        e.abrupt("return", n[t] && n[t].install);
                    case 8:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return P.apply(this, arguments)
            })
        },
        {
            key: "queryAppState",
            value: (D = (0, u.
        default)(s.
        default.mark((function e(t, n) {
                return s.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        this.call("queryAppState", {
                            pkgapkids: (0, i.
                        default)([{
                                packagename:
                                n,
                                apkid: "" + t
                            }])
                        });
                    case 2:
                        return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e, t) {
                return D.apply(this, arguments)
            })
        },
        {
            key: "openApp",
            value: (O = (0, u.
        default)(s.
        default.mark((function e(t, n) {
                return s.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (t = t || this.appInfo.deeplink, n = n || this.appInfo.packageName, !t) {
                            e.next = 6;
                            break
                        }
                        window.location.href = t,
                        e.next = 12;
                        break;
                    case 6:
                        if (!n) {
                            e.next = 11;
                            break
                        }
                        return e.next = 9,
                        this.call("startOpenApp", {
                            packageName: n
                        });
                    case 9:
                        e.next = 12;
                        break;
                    case 11:
                        console.log("yyb open app failed", t, n);
                    case 12:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e, t) {
                return O.apply(this, arguments)
            })
        },
        {
            key: "getDownloadInfo",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return {
                    appid: this.appInfo.appId,
                    apkid: this.appInfo.apkId,
                    packagename: this.appInfo.packageName,
                    versioncode: this.appInfo.versionCode || "",
                    channelid: this.appInfo.channelId || "",
                    oplist: e ? "1;2": "0;2",
                    scene: this.scene,
                    sourceScene: this.sourceScene,
                    via: this.via || "",
                    autoOpen: 1,
                    reCreate: 0,
                    searchId: "",
                    recommendId: this.recommendId || this.appInfo.recommendId || "",
                    hostpname: this.appInfo.packageName,
                    applink: this.appInfo.deeplink || "",
                    params: this.appInfo.params || "",
                    slotId: "14_005"
                }
            }
        },
        {
            key: "createDownloadTask",
            value: (I = (0, u.
        default)(s.
        default.mark((function e() {
                var t, n, r;
                return s.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        this.call("createDownload", this.getDownloadInfo());
                    case 2:
                        if (t = e.sent) {
                            e.next = 8;
                            break
                        }
                        return console.log("yybjsbridge.createDownload failed"),
                        e.abrupt("return", null);
                    case 8:
                        return this.taskPoint = t,
                        e.next = 11,
                        this.queryAppState(t.apkid, t.packagename);
                    case 11:
                        (n = e.sent) && n[this.appInfo.packageName] && ((r = n[this.appInfo.packageName]).install && (r.appstate = "INSTALLED"), this.stateCallback(r));
                    case 13:
                        return e.abrupt("return", this.taskPoint);
                    case 14:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return I.apply(this, arguments)
            })
        },
        {
            key: "setClipboard",
            value: (E = (0, u.
        default)(s.
        default.mark((function e(t) {
                return s.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        this.call("setClipboard", {
                            content: t
                        });
                    case 2:
                        return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e) {
                return E.apply(this, arguments)
            })
        },
        {
            key: "startDownloadTask",
            value: (j = (0, u.
        default)(s.
        default.mark((function e() {
                var t, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return s.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.next = 4,
                        this.call("startDownload", this.taskPoint);
                    case 4:
                        if ((t = e.sent) && 0 === t.ret) {
                            e.next = 18;
                            break
                        }
                        if (console.log("yybjsbridge.startDownload failed", t), n) {
                            e.next = 15;
                            break
                        }
                        return e.next = 10,
                        this.createDownloadTask();
                    case 10:
                        return e.next = 12,
                        this.startDownloadTask(!0);
                    case 12:
                        return e.abrupt("return", e.sent);
                    case 15:
                        return e.abrupt("return", null);
                    case 16:
                        e.next = 19;
                        break;
                    case 18:
                        return e.abrupt("return", t);
                    case 19:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return j.apply(this, arguments)
            })
        },
        {
            key: "pauseDownloadTask",
            value: (A = (0, u.
        default)(s.
        default.mark((function e(t) {
                var n;
                return s.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.next = 4,
                        this.call("pauseDownload", this.taskPoint);
                    case 4:
                        if ((n = e.sent) && 0 === n.ret) {
                            e.next = 8;
                            break
                        }
                        return console.log("yybbridge.pauseDownload failed", t, n),
                        e.abrupt("return", null);
                    case 8:
                        return e.abrupt("return", n);
                    case 9:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e) {
                return A.apply(this, arguments)
            })
        },
        {
            key: "resumeDownloadTask",
            value: (g = (0, u.
        default)(s.
        default.mark((function e() {
                return s.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.abrupt("return", this.startDownloadTask());
                    case 1:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return g.apply(this, arguments)
            })
        },
        {
            key: "installApp",
            value: (m = (0, u.
        default)(s.
        default.mark((function e() {
                return s.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.abrupt("return", this.call("createDownload", this.getDownloadInfo(!0)));
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return m.apply(this, arguments)
            })
        },
        {
            key: "getApiScheme",
            value: function(e, t, n) {
                var r = [];
                return "object" === (void 0 === n ? "undefined": (0, o.
            default)(n)) && (0, a.
            default)(n).forEach((function(e) {
                    r.push(encodeURIComponent(e) + "=" + encodeURIComponent(n[e]))
                })),
                "jsb://" + e + "/" + t + "/Jsbridge.callback?" + r.join("&")
            }
        },
        {
            key: "call",
            value: function(e) {
                var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return window.Jsbridge.callback || (window.Jsbridge.callback = function(e) {
                    var n = e.seqid;
                    t.callbackstack[n] && (t.callbackstack[n](e), delete t.callbackstack[n])
                }),
                new r.
            default((function(r) {
                    var a = t.seqid++,
                    o = t.getApiScheme(e, a, n);
                    t.callbackstack[a] = function(i) {
                        console.log("jsbridge call return:", {
                            apiName: e,
                            seqid: a,
                            params: n,
                            args: i,
                            url: o
                        }),
                        !i || void 0 !== i.result && 0 !== i.result ? (t.onJsbridgeApiError(e, n, i.result, i.msg), r(null)) : i.data ? r(JSON.parse(i.data)) : r({})
                    },
                    console.log("jsbridge start call:", o),
                    window.location.href = o
                }))
            }
        },
        {
            key: "getStateDesc",
            value: function(e) {
                return T[e]
            }
        },
        {
            key: "doTaskNextAction",
            value: (n = (0, u.
        default)(s.
        default.mark((function e() {
                var n;
                return s.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        n = this.appState,
                        this.report({
                            action: w,
                            slotId: "14_005"
                        }),
                        e.t0 = n.state,
                        e.next = e.t0 === v.
                    default.downloaded ? 7 : e.t0 === v.
                    default.installed ? 9 : (e.t0 === v.
                    default.inited || e.t0 === v.
                    default.update || (e.t0, v.
                    default.paused), 11);
                        break;
                    case 7:
                        return this.report({
                            action:
                            S,
                            slotId: "14_005"
                        }),
                        e.abrupt("break", 12);
                    case 9:
                        return this.report({
                            action:
                            _,
                            slotId: "14_005"
                        }),
                        e.abrupt("break", 12);
                    case 11:
                        this.report({
                            action:
                            k,
                            slotId: "14_005"
                        });
                    case 12:
                        return e.next = 14,
                        (0, d.
                    default)(t.prototype.__proto__ || (0, l.
                    default)(t.prototype), "doTaskNextAction", this).call(this);
                    case 14:
                        return e.next = 16,
                        e.sent;
                    case 16:
                        return e.abrupt("return", e.sent);
                    case 17:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return n.apply(this, arguments)
            })
        },
        {
            key: "stateCallback",
            value: function(e) {
                e.apkid && e.apkid !== this.taskPoint.apkid || (T[e.appstate] === v.
            default.downloaded && this.report({
                    action: x,
                    slotId: "14_005"
                }), this.onDownloadTaskStatusChange(this.taskPoint, T[e.appstate], e.downpercent || e.downloadedFileSize && Math.floor(e.downloadedFileSize / e.fileSize * 100)))
            }
        }]),
        t
    } (m.
default);
    t.
default = A
},
function(e, t, n) {
    n(147),
    e.exports = n(4).Object.keys
},
function(e, t, n) {
    var r = n(35),
    a = n(33);
    n(55)("keys", (function() {
        return function(e) {
            return a(r(e))
        }
    }))
},
function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = o(n(13)),
    a = o(n(149));
    function o(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    t.
default = function e(t, n, o) {
        null === t && (t = Function.prototype);
        var i = (0, a.
    default)(t, n);
        if (void 0 === i) {
            var s = (0, r.
        default)(t);
            return null === s ? void 0 : e(s, n, o)
        }
        if ("value" in i) return i.value;
        var u = i.get;
        return void 0 !== u ? u.call(o) : void 0
    }
},
function(e, t, n) {
    e.exports = {
    default:
        n(150),
        __esModule: !0
    }
},
function(e, t, n) {
    n(151);
    var r = n(4).Object;
    e.exports = function(e, t) {
        return r.getOwnPropertyDescriptor(e, t)
    }
},
function(e, t, n) {
    var r = n(25),
    a = n(54).f;
    n(55)("getOwnPropertyDescriptor", (function() {
        return function(e, t) {
            return a(r(e), t)
        }
    }))
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = v(n(14)),
    a = v(n(8)),
    o = v(n(28)),
    i = v(n(2)),
    s = v(n(3)),
    u = v(n(13)),
    l = v(n(0)),
    c = v(n(1)),
    f = v(n(17)),
    p = v(n(18)),
    d = v(n(26)),
    h = v(n(22)),
    m = n(153);
    function v(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    var y = {
        2 : h.
    default.downloading,
        12 : h.
    default.downloading,
        20 : h.
    default.queue,
        3 : h.
    default.paused,
        4 : h.
    default.downloaded,
        5 : h.
    default.installing,
        6 : h.
    default.installed,
        13 : h.
    default.installed,
        10 : h.
    default.inited
    },
    g = function(e) {
        function t(e) { (0, l.
        default)(this, t);
            var n = (0, f.
        default)(this, (t.__proto__ || (0, u.
        default)(t)).call(this, e));
            return n.jsbname = "mqqclient",
            n.hasAutoOpen = !1,
            n.initState = h.
        default.inited,
            n
        }
        var n, d, v, g, b, w, k, x, S, _, T;
        return (0, p.
    default)(t, e),
        (0, c.
    default)(t, [{
            key: "initial",
            value: (T = (0, s.
        default)(i.
        default.mark((function e() {
                var t, n = this;
                return i.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return this.seqid = 1,
                        t = this,
                        this.on("PageResume", this.pageResume.bind(this)),
                        window.publicAccountDownload = {
                            queryProcess: function(e) {
                                console.log("publicAccountDownload.queryProcess", e),
                                t.stateCallback(e)
                            }
                        },
                        e.next = 6,
                        this.call("q_download/getQueryDownloadAction");
                    case 6:
                        return window.document.addEventListener("qbrowserVisibilityChange", (function(e) { ! 1 === e.hidden ? n.emit("PageResume") : n.emit("PageHide")
                        }), !1),
                        window.JsBridge.callback || (window.JsBridge.callback = function(e, t) {
                            if (t && 0 === t.r) {
                                var r = e; (0, m.isNumber)(r) || (r = t.guid),
                                n.callbackstack[e] && (n.callbackstack[e](t), delete n.callbackstack[e])
                            }
                        }),
                        window.QzoneApp = {
                            fire: function(e, n) {
                                console.log("QzoneApp.fire", e, n),
                                "loadProcess" === e && t.stateCallback(n)
                            }
                        },
                        window.JsBridge.Download = {},
                        window.JsBridge.Download.callback = function(e) {
                            console.log("window.Jsbridge.Download.callback", e)
                        },
                        e.next = 13,
                        this.call("q_download/registerDownloadCallBackListener", "JsBridge.Download.callback");
                    case 13:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return T.apply(this, arguments)
            })
        },
        {
            key: "pageResume",
            value: function() {
                this.appState.state === h.
            default.installed && this.initState !== h.
            default.installed && this.appInfo.autoOpen && !this.hasAutoOpen && (this.hasAutoOpen = !0, this.openApp())
            }
        },
        {
            key: "getDownloadParam",
            value: function(e) {
                return {
                    myAppConfig: this.appInfo.useDownloaderIfExists ? 1 : 0,
                    appid: this.appInfo.appId,
                    url: this.appInfo.downloadUrl,
                    packageName: this.appInfo.packageName,
                    actionCode: e,
                    appName: this.appInfo.appName || "",
                    isAutoDownload: 0,
                    isAutoInstall: 1,
                    via: this.appInfo.via || ""
                }
            }
        },
        {
            key: "createDownloadTask",
            value: (_ = (0, s.
        default)(i.
        default.mark((function e() {
                var t;
                return i.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return this.taskPoint = Date.now(),
                        e.next = 3,
                        this.getAppVersion();
                    case 3:
                        return t = e.sent,
                        console.log("appVersion", t),
                        t && (this.stateCallback({
                            state: 13
                        }), this.initState = h.
                    default.installed),
                        e.next = 8,
                        this.call("q_download/getQueryDownloadAction", {
                            appid: this.appInfo.appId,
                            packageName: this.appInfo.packageName
                        });
                    case 8:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return _.apply(this, arguments)
            })
        },
        {
            key: "startDownloadTask",
            value: (S = (0, s.
        default)(i.
        default.mark((function e() {
                return i.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.next = 4,
                        this.call("q_download/doDownloadAction", this.getDownloadParam(this.appState.state === h.
                    default.paused ? 2 : 12));
                    case 4:
                        return e.abrupt("return", e.sent);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return S.apply(this, arguments)
            })
        },
        {
            key: "pauseDownloadTask",
            value: (x = (0, s.
        default)(i.
        default.mark((function e() {
                var t;
                return i.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.next = 4,
                        this.call("q_download/doDownloadAction", this.getDownloadParam(3));
                    case 4:
                        return t = e.sent,
                        e.abrupt("return", t);
                    case 6:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return x.apply(this, arguments)
            })
        },
        {
            key: "resumeDownloadTask",
            value: (k = (0, s.
        default)(i.
        default.mark((function e() {
                return i.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.next = 4,
                        this.call("q_download/doDownloadAction", this.getDownloadParam(2));
                    case 4:
                        return e.abrupt("return", e.sent);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return k.apply(this, arguments)
            })
        },
        {
            key: "installApp",
            value: (w = (0, s.
        default)(i.
        default.mark((function e() {
                return i.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.next = 4,
                        this.call("q_download/doDownloadAction", this.getDownloadParam(5));
                    case 4:
                        return e.abrupt("return", e.sent);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return w.apply(this, arguments)
            })
        },
        {
            key: "getDeviceInfo",
            value: (b = (0, s.
        default)(i.
        default.mark((function e() {
                var t;
                return i.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        this.call("qqZoneAppList/getMobileInfo");
                    case 2:
                        if (t = e.sent, console.log("QQ.getDeviceInfo", t), 0 !== t.r) {
                            e.next = 8;
                            break
                        }
                        return e.abrupt("return", JSON.parse(t.result));
                    case 8:
                        return e.abrupt("return", {});
                    case 9:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return b.apply(this, arguments)
            })
        },
        {
            key: "getAppVersion",
            value: (g = (0, s.
        default)(i.
        default.mark((function e(t) {
                var n;
                return i.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return t = t || this.appInfo.packageName,
                        e.next = 3,
                        this.callGetAppInfoBatch([t]);
                    case 3:
                        return n = e.sent,
                        e.abrupt("return", n[t]);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e) {
                return g.apply(this, arguments)
            })
        },
        {
            key: "callGetAppInfoBatch",
            value: (v = (0, s.
        default)(i.
        default.mark((function e(t) {
                var n, r;
                return i.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        this.call("qzone_app/getAppInfoBatch", t.join(","));
                    case 2:
                        return n = e.sent,
                        r = {},
                        n && 0 === n.r && (n.result ? JSON.parse(n.result) : []).forEach((function(e) {
                            var t = e[0];
                            r[t] = {
                                versionCode: e[1],
                                version: e[2]
                            }
                        })),
                        e.abrupt("return", r);
                    case 6:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e) {
                return v.apply(this, arguments)
            })
        },
        {
            key: "isAppInstalled",
            value: (d = (0, s.
        default)(i.
        default.mark((function e() {
                return i.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (! (window.mqq && window.mqq.app && window.mqq.app.isAppInstalled)) {
                            e.next = 4;
                            break
                        }
                        return e.abrupt("return", window.mqq.app.isAppInstalled(this.appInfo.packageName));
                    case 4:
                        return e.next = 6,
                        this.getAppVersion(this.appInfo.packageName);
                    case 6:
                        return e.abrupt("return", e.sent);
                    case 7:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return d.apply(this, arguments)
            })
        },
        {
            key: "openApp",
            value: (n = (0, s.
        default)(i.
        default.mark((function e(t, n) {
                return i.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (t = t || this.appInfo.deeplink, n = n || this.appInfo.packageName, !window.mqq || !window.mqq.invokeURL) {
                            e.next = 10;
                            break
                        }
                        if (!t) {
                            e.next = 7;
                            break
                        }
                        return e.abrupt("return", window.mqq.invokeURL(t));
                    case 7:
                        return e.abrupt("return", window.mqq.invoke(n));
                    case 8:
                        e.next = 17;
                        break;
                    case 10:
                        if (!t) {
                            e.next = 14;
                            break
                        }
                        window.location.href = t,
                        e.next = 17;
                        break;
                    case 14:
                        return e.next = 16,
                        this.call("qqZoneAppList/startApp", n);
                    case 16:
                        return e.abrupt("return", e.sent);
                    case 17:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e, t) {
                return n.apply(this, arguments)
            })
        },
        {
            key: "getApiScheme",
            value: function(e, t, n) {
                var r = [];
                return void 0 !== n && ("object" === (void 0 === n ? "undefined": (0, o.
            default)(n)) ? r.push(encodeURIComponent((0, a.
            default)(n))):
                r.push(encodeURIComponent(n))),
                this.uaInfo.os.ios ? "jsbridge://" + e + "/" + (0 === t ? "p": "p" + t) + "=" + encodeURIComponent(n) + "#" + t: "qzone_app/getAppInfoBatch" === e ? "jsbridge://" + e + "/" + t + "/" + r.join("&") + "/" + encodeURIComponent(",") + "/false/false/false": "qqZoneAppList/startApp" === e ? "jsbridge://" + e + "/" + t + "/" + r.join("&") + "/": r.length ? "jsbridge://" + e + "/" + t + "/" + r.join("&") : "jsbridge://" + e + "/" + t
            }
        },
        {
            key: "call",
            value: function(e, t) {
                var n = this;
                return new r.
            default((function(r) {
                    var a = n.seqid++,
                    o = n.getApiScheme(e, a, t),
                    i = null;
                    return n.callbackstack[a] = function(s) {
                        i && clearTimeout(i),
                        console.log("jsbridge call return:", {
                            apiName: e,
                            seqid: a,
                            params: t,
                            args: s,
                            url: o
                        }),
                        !s || void 0 !== s.r && 0 !== s.r ? (n.onJsbridgeApiError(e, t, s.result, s.msg), r(null)) : r(s)
                    },
                    i = setTimeout((function() {
                        console.log("mqq.jsbridge timeout: " + e, t),
                        r(null)
                    }), 500),
                    console.log("jsbridge start call:", o),
                    window.location.href = o,
                    0
                }))
            }
        },
        {
            key: "getStateDesc",
            value: function(e) {
                return y[e]
            }
        },
        {
            key: "stateCallback",
            value: function(e) {
                var t = this;
                "[object Array]" === Object.prototype.toString.call(e) ? e.forEach((function(e) {
                    e.packagename === t.appInfo.packageName && t.stateCallback(e)
                })) : (console.log("stateCallback", e), e && void 0 !== e.state && this.onDownloadTaskStatusChange(this.taskPoint, this.getStateDesc(e.state), e.pro))
            }
        }]),
        t
    } (d.
default);
    t.
default = g
},
function(e, t, n) { (function(e) {
        var r = Object.getOwnPropertyDescriptors ||
        function(e) {
            for (var t = Object.keys(e), n = {},
            r = 0; r < t.length; r++) n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
            return n
        },
        a = /%[sdj%]/g;
        t.format = function(e) {
            if (!y(e)) {
                for (var t = [], n = 0; n < arguments.length; n++) t.push(s(arguments[n]));
                return t.join(" ")
            }
            n = 1;
            for (var r = arguments,
            o = r.length,
            i = String(e).replace(a, (function(e) {
                if ("%%" === e) return "%";
                if (n >= o) return e;
                switch (e) {
                case "%s":
                    return String(r[n++]);
                case "%d":
                    return Number(r[n++]);
                case "%j":
                    try {
                        return JSON.stringify(r[n++])
                    } catch(e) {
                        return "[Circular]"
                    }
                default:
                    return e
                }
            })), u = r[n]; n < o; u = r[++n]) m(u) || !w(u) ? i += " " + u: i += " " + s(u);
            return i
        },
        t.deprecate = function(n, r) {
            if (void 0 !== e && !0 === e.noDeprecation) return n;
            if (void 0 === e) return function() {
                return t.deprecate(n, r).apply(this, arguments)
            };
            var a = !1;
            return function() {
                if (!a) {
                    if (e.throwDeprecation) throw new Error(r);
                    e.traceDeprecation ? console.trace(r) : console.error(r),
                    a = !0
                }
                return n.apply(this, arguments)
            }
        };
        var o, i = {};
        function s(e, n) {
            var r = {
                seen: [],
                stylize: l
            };
            return arguments.length >= 3 && (r.depth = arguments[2]),
            arguments.length >= 4 && (r.colors = arguments[3]),
            h(n) ? r.showHidden = n: n && t._extend(r, n),
            g(r.showHidden) && (r.showHidden = !1),
            g(r.depth) && (r.depth = 2),
            g(r.colors) && (r.colors = !1),
            g(r.customInspect) && (r.customInspect = !0),
            r.colors && (r.stylize = u),
            c(r, e, r.depth)
        }
        function u(e, t) {
            var n = s.styles[t];
            return n ? "[" + s.colors[n][0] + "m" + e + "[" + s.colors[n][1] + "m": e
        }
        function l(e, t) {
            return e
        }
        function c(e, n, r) {
            if (e.customInspect && n && S(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                var a = n.inspect(r, e);
                return y(a) || (a = c(e, a, r)),
                a
            }
            var o = function(e, t) {
                if (g(t)) return e.stylize("undefined", "undefined");
                if (y(t)) {
                    var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return e.stylize(n, "string")
                }
                if (v(t)) return e.stylize("" + t, "number");
                if (h(t)) return e.stylize("" + t, "boolean");
                if (m(t)) return e.stylize("null", "null")
            } (e, n);
            if (o) return o;
            var i = Object.keys(n),
            s = function(e) {
                var t = {};
                return e.forEach((function(e, n) {
                    t[e] = !0
                })),
                t
            } (i);
            if (e.showHidden && (i = Object.getOwnPropertyNames(n)), x(n) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0)) return f(n);
            if (0 === i.length) {
                if (S(n)) {
                    var u = n.name ? ": " + n.name: "";
                    return e.stylize("[Function" + u + "]", "special")
                }
                if (b(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                if (k(n)) return e.stylize(Date.prototype.toString.call(n), "date");
                if (x(n)) return f(n)
            }
            var l, w = "",
            _ = !1,
            T = ["{", "}"]; (d(n) && (_ = !0, T = ["[", "]"]), S(n)) && (w = " [Function" + (n.name ? ": " + n.name: "") + "]");
            return b(n) && (w = " " + RegExp.prototype.toString.call(n)),
            k(n) && (w = " " + Date.prototype.toUTCString.call(n)),
            x(n) && (w = " " + f(n)),
            0 !== i.length || _ && 0 != n.length ? r < 0 ? b(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), l = _ ?
            function(e, t, n, r, a) {
                for (var o = [], i = 0, s = t.length; i < s; ++i) E(t, String(i)) ? o.push(p(e, t, n, r, String(i), !0)) : o.push("");
                return a.forEach((function(a) {
                    a.match(/^\d+$/) || o.push(p(e, t, n, r, a, !0))
                })),
                o
            } (e, n, r, s, i) : i.map((function(t) {
                return p(e, n, r, s, t, _)
            })), e.seen.pop(),
            function(e, t, n) {
                if (e.reduce((function(e, t) {
                    return t.indexOf("\n") >= 0 && 0,
                    e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                }), 0) > 60) return n[0] + ("" === t ? "": t + "\n ") + " " + e.join(",\n  ") + " " + n[1];
                return n[0] + t + " " + e.join(", ") + " " + n[1]
            } (l, w, T)) : T[0] + w + T[1]
        }
        function f(e) {
            return "[" + Error.prototype.toString.call(e) + "]"
        }
        function p(e, t, n, r, a, o) {
            var i, s, u;
            if ((u = Object.getOwnPropertyDescriptor(t, a) || {
                value: t[a]
            }).get ? s = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : u.set && (s = e.stylize("[Setter]", "special")), E(r, a) || (i = "[" + a + "]"), s || (e.seen.indexOf(u.value) < 0 ? (s = m(n) ? c(e, u.value, null) : c(e, u.value, n - 1)).indexOf("\n") > -1 && (s = o ? s.split("\n").map((function(e) {
                return "  " + e
            })).join("\n").substr(2) : "\n" + s.split("\n").map((function(e) {
                return "   " + e
            })).join("\n")) : s = e.stylize("[Circular]", "special")), g(i)) {
                if (o && a.match(/^\d+$/)) return s; (i = JSON.stringify("" + a)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (i = i.substr(1, i.length - 2), i = e.stylize(i, "name")) : (i = i.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), i = e.stylize(i, "string"))
            }
            return i + ": " + s
        }
        function d(e) {
            return Array.isArray(e)
        }
        function h(e) {
            return "boolean" == typeof e
        }
        function m(e) {
            return null === e
        }
        function v(e) {
            return "number" == typeof e
        }
        function y(e) {
            return "string" == typeof e
        }
        function g(e) {
            return void 0 === e
        }
        function b(e) {
            return w(e) && "[object RegExp]" === _(e)
        }
        function w(e) {
            return "object" == typeof e && null !== e
        }
        function k(e) {
            return w(e) && "[object Date]" === _(e)
        }
        function x(e) {
            return w(e) && ("[object Error]" === _(e) || e instanceof Error)
        }
        function S(e) {
            return "function" == typeof e
        }
        function _(e) {
            return Object.prototype.toString.call(e)
        }
        function T(e) {
            return e < 10 ? "0" + e.toString(10) : e.toString(10)
        }
        t.debuglog = function(n) {
            if (g(o) && (o = e.env.NODE_DEBUG || ""), n = n.toUpperCase(), !i[n]) if (new RegExp("\\b" + n + "\\b", "i").test(o)) {
                var r = e.pid;
                i[n] = function() {
                    var e = t.format.apply(t, arguments);
                    console.error("%s %d: %s", n, r, e)
                }
            } else i[n] = function() {};
            return i[n]
        },
        t.inspect = s,
        s.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
        },
        s.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        },
        t.isArray = d,
        t.isBoolean = h,
        t.isNull = m,
        t.isNullOrUndefined = function(e) {
            return null == e
        },
        t.isNumber = v,
        t.isString = y,
        t.isSymbol = function(e) {
            return "symbol" == typeof e
        },
        t.isUndefined = g,
        t.isRegExp = b,
        t.isObject = w,
        t.isDate = k,
        t.isError = x,
        t.isFunction = S,
        t.isPrimitive = function(e) {
            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
        },
        t.isBuffer = n(155);
        var A = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        function j() {
            var e = new Date,
            t = [T(e.getHours()), T(e.getMinutes()), T(e.getSeconds())].join(":");
            return [e.getDate(), A[e.getMonth()], t].join(" ")
        }
        function E(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.log = function() {
            console.log("%s - %s", j(), t.format.apply(t, arguments))
        },
        t.inherits = n(156),
        t._extend = function(e, t) {
            if (!t || !w(t)) return e;
            for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
            return e
        };
        var I = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
        function O(e, t) {
            if (!e) {
                var n = new Error("Promise was rejected with a falsy value");
                n.reason = e,
                e = n
            }
            return t(e)
        }
        t.promisify = function(e) {
            if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
            if (I && e[I]) {
                var t;
                if ("function" != typeof(t = e[I])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                return Object.defineProperty(t, I, {
                    value: t,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                }),
                t
            }
            function t() {
                for (var t, n, r = new Promise((function(e, r) {
                    t = e,
                    n = r
                })), a = [], o = 0; o < arguments.length; o++) a.push(arguments[o]);
                a.push((function(e, r) {
                    e ? n(e) : t(r)
                }));
                try {
                    e.apply(this, a)
                } catch(e) {
                    n(e)
                }
                return r
            }
            return Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
            I && Object.defineProperty(t, I, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }),
            Object.defineProperties(t, r(e))
        },
        t.promisify.custom = I,
        t.callbackify = function(t) {
            if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');
            function n() {
                for (var n = [], r = 0; r < arguments.length; r++) n.push(arguments[r]);
                var a = n.pop();
                if ("function" != typeof a) throw new TypeError("The last argument must be of type Function");
                var o = this,
                i = function() {
                    return a.apply(o, arguments)
                };
                t.apply(this, n).then((function(t) {
                    e.nextTick(i, null, t)
                }), (function(t) {
                    e.nextTick(O, t, i)
                }))
            }
            return Object.setPrototypeOf(n, Object.getPrototypeOf(t)),
            Object.defineProperties(n, r(t)),
            n
        }
    }).call(this, n(154))
},
function(e, t) {
    var n, r, a = e.exports = {};
    function o() {
        throw new Error("setTimeout has not been defined")
    }
    function i() {
        throw new Error("clearTimeout has not been defined")
    }
    function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout,
        setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch(t) {
            try {
                return n.call(null, e, 0)
            } catch(t) {
                return n.call(this, e, 0)
            }
        }
    } !
    function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout: o
        } catch(e) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout: i
        } catch(e) {
            r = i
        }
    } ();
    var u, l = [],
    c = !1,
    f = -1;
    function p() {
        c && u && (c = !1, u.length ? l = u.concat(l) : f = -1, l.length && d())
    }
    function d() {
        if (!c) {
            var e = s(p);
            c = !0;
            for (var t = l.length; t;) {
                for (u = l, l = []; ++f < t;) u && u[f].run();
                f = -1,
                t = l.length
            }
            u = null,
            c = !1,
            function(e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === i || !r) && clearTimeout) return r = clearTimeout,
                clearTimeout(e);
                try {
                    r(e)
                } catch(t) {
                    try {
                        return r.call(null, e)
                    } catch(t) {
                        return r.call(this, e)
                    }
                }
            } (e)
        }
    }
    function h(e, t) {
        this.fun = e,
        this.array = t
    }
    function m() {}
    a.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new h(e, t)),
        1 !== l.length || c || s(d)
    },
    h.prototype.run = function() {
        this.fun.apply(null, this.array)
    },
    a.title = "browser",
    a.browser = !0,
    a.env = {},
    a.argv = [],
    a.version = "",
    a.versions = {},
    a.on = m,
    a.addListener = m,
    a.once = m,
    a.off = m,
    a.removeListener = m,
    a.removeAllListeners = m,
    a.emit = m,
    a.prependListener = m,
    a.prependOnceListener = m,
    a.listeners = function(e) {
        return []
    },
    a.binding = function(e) {
        throw new Error("process.binding is not supported")
    },
    a.cwd = function() {
        return "/"
    },
    a.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    },
    a.umask = function() {
        return 0
    }
},
function(e, t) {
    e.exports = function(e) {
        return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
    }
},
function(e, t) {
    "function" == typeof Object.create ? e.exports = function(e, t) {
        e.super_ = t,
        e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    }: e.exports = function(e, t) {
        e.super_ = t;
        var n = function() {};
        n.prototype = t.prototype,
        e.prototype = new n,
        e.prototype.constructor = e
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = d(n(14)),
    a = d(n(2)),
    o = d(n(3)),
    i = d(n(13)),
    s = d(n(0)),
    u = d(n(1)),
    l = d(n(17)),
    c = d(n(18)),
    f = d(n(26)),
    p = d(n(22));
    function d(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    var h = {
        13 : p.
    default.downloading,
        10 : p.
    default.installed,
        11 : p.
    default.downloaded,
        14 : p.
    default.paused,
        12 : p.
    default.inited,
        16 : p.
    default.queue,
        0 : p.
    default.inited
    },
    m = function(e) {
        function t(e) { (0, s.
        default)(this, t);
            var n = (0, l.
        default)(this, (t.__proto__ || (0, i.
        default)(t)).call(this, e));
            return n.jsbname = "qqvideo",
            n
        }
        var n, f, p, d, m, v, y, g, b, w;
        return (0, c.
    default)(t, e),
        (0, u.
    default)(t, [{
            key: "initial",
            value: (w = (0, o.
        default)(a.
        default.mark((function e() {
                var t = this;
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        this.waitReady();
                    case 2:
                        return e.next = 4,
                        this.getAppVersion();
                    case 4:
                        if (!e.sent) {
                            e.next = 8;
                            break
                        }
                        this.stateCallback({
                            state: 10
                        }),
                        e.next = 9;
                        break;
                    case 8:
                        this.stateCallback({
                            state:
                            0
                        });
                    case 9:
                        window.TenvideoJSBridge.on("onDownloadTaskStateChanged", (function(e) {
                            t.stateCallback(e)
                        })),
                        window.TenvideoJSBridge.on("onDownloadTaskProgressChanged", (function(e) {
                            t.stateCallback({
                                state: 13,
                                progress: e.progress
                            })
                        }));
                    case 11:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return w.apply(this, arguments)
            })
        },
        {
            key: "getAppVersion",
            value: (b = (0, o.
        default)(a.
        default.mark((function e(t) {
                var n;
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return t = t || this.appInfo.packageName,
                        e.next = 3,
                        this.call("isInstalled", {
                            pkgName: t,
                            appName: this.appInfo.appName
                        });
                    case 3:
                        return n = e.sent,
                        e.abrupt("return", n && n.installed);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e) {
                return b.apply(this, arguments)
            })
        },
        {
            key: "openApp",
            value: (g = (0, o.
        default)(a.
        default.mark((function e(t, n) {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        t = t || this.appInfo.deeplink,
                        n = n || this.appInfo.packageName,
                        window.TenvideoJSBridge.invoke("launch3rdApp", {
                            pkgName: n,
                            pkgUrl: t,
                            appName: this.appInfo.appName
                        });
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e, t) {
                return g.apply(this, arguments)
            })
        },
        {
            key: "getDeviceInfo",
            value: (y = (0, o.
        default)(a.
        default.mark((function e() {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        this.call("getDeviceInfo", null);
                    case 2:
                        return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return y.apply(this, arguments)
            })
        },
        {
            key: "getDownloadInfo",
            value: function(e) {
                return {
                    downloadUrl: this.appInfo.downloadUrl,
                    packageName: this.appInfo.packageName,
                    iconUrl: this.appInfo.logo,
                    appName: this.appInfo.appName,
                    itunesUrl: "https://itunes.apple.com/cn/app/" + this.appInfo.appleId,
                    packageUrl: this.appInfo.deeplink,
                    channel: this.appInfo.channelId,
                    actionCode: e
                }
            }
        },
        {
            key: "createDownloadTask",
            value: (v = (0, o.
        default)(a.
        default.mark((function e() {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return this.taskPoint = Date.now(),
                        console.log("createDownloadTask"),
                        e.abrupt("return", this.taskPoint);
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return v.apply(this, arguments)
            })
        },
        {
            key: "startDownloadTask",
            value: (m = (0, o.
        default)(a.
        default.mark((function e() {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (console.log("startDownloadTask"), this.taskPoint) {
                            e.next = 3;
                            break
                        }
                        return e.abrupt("return", null);
                    case 3:
                        return e.next = 5,
                        this.call("download3rdApp", this.getDownloadInfo(1));
                    case 5:
                        return e.abrupt("return", e.sent);
                    case 6:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return m.apply(this, arguments)
            })
        },
        {
            key: "pauseDownloadTask",
            value: (d = (0, o.
        default)(a.
        default.mark((function e() {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.next = 4,
                        this.call("pauseDowload3rdApp", {
                            downloadUrl: this.appInfo.downloadUrl,
                            packageName: this.appInfo.packageName
                        });
                    case 4:
                        return e.abrupt("return", e.sent);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return d.apply(this, arguments)
            })
        },
        {
            key: "resumeDownloadTask",
            value: (p = (0, o.
        default)(a.
        default.mark((function e() {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.abrupt("return", this.startDownloadTask());
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return p.apply(this, arguments)
            })
        },
        {
            key: "installApp",
            value: (f = (0, o.
        default)(a.
        default.mark((function e() {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.next = 4,
                        this.call("download3rdApp", this.getDownloadInfo(1));
                    case 4:
                        return e.abrupt("return", e.sent);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return f.apply(this, arguments)
            })
        },
        {
            key: "waitReady",
            value: function() {
                if (!window.TenvideoJSBridge) return new r.
            default((function(e) {
                    document.addEventListener("onTenvideoJSBridgeReady", e, !1)
                }))
            }
        },
        {
            key: "call",
            value: (n = (0, o.
        default)(a.
        default.mark((function e(t) {
                for (var n = arguments.length,
                o = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.abrupt("return", new r.
                    default((function(e) {
                            var n;
                            console.log("call", t, o),
                            (n = window.TenvideoJSBridge).invoke.apply(n, [t].concat(o, [function(n) {
                                if (console.log("call result", t, o, n), n) {
                                    var r = JSON.parse(n);
                                    if (0 === r.errCode) return e(r.result)
                                }
                                e(null),
                                e()
                            }]))
                        })));
                    case 1:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e) {
                return n.apply(this, arguments)
            })
        },
        {
            key: "stateCallback",
            value: function(e) {
                console.log("Tvj.stateCallback", e),
                e && void 0 !== e.state && this.onDownloadTaskStatusChange(this.taskPoint, h[e.state], e.progress ? Math.floor(e.progress) : 0)
            }
        }]),
        t
    } (f.
default);
    t.
default = m
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = h(n(14)),
    a = h(n(8)),
    o = h(n(2)),
    i = h(n(3)),
    s = h(n(13)),
    u = h(n(0)),
    l = h(n(1)),
    c = h(n(17)),
    f = h(n(18)),
    p = h(n(26)),
    d = h(n(22));
    function h(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    var m = {
        1 : d.
    default.downloading,
        0 : d.
    default.inited,
        2 : d.
    default.paused,
        3 : d.
    default.downloaded,
        4 : d.
    default.downloaded,
        6 : d.
    default.installed,
        5 : d.
    default.installed
    },
    v = function(e) {
        function t(e) { (0, u.
        default)(this, t);
            var n = (0, c.
        default)(this, (t.__proto__ || (0, s.
        default)(t)).call(this, e));
            return n.jsbname = "qqnews",
            n.seqid = 1,
            n.initState = d.
        default.inited,
            n.callbackstack = window.callbackstack = {
                checkAppStatus: function(e, t, r) {
                    n.stateCallback({
                        status: e,
                        progress: t,
                        appId: r
                    })
                },
                downloadApp: function(e, t) {
                    n.stateCallback({
                        status: e,
                        progress: t
                    })
                },
                installApp: function(e, t) {
                    n.stateCallback({
                        status: e,
                        appId: t
                    })
                }
            },
            n
        }
        var n, p, h, v, y, g, b, w, k, x, S, _, T;
        return (0, f.
    default)(t, e),
        (0, l.
    default)(t, [{
            key: "initial",
            value: (T = (0, i.
        default)(o.
        default.mark((function e() {
                var t, n = this;
                return o.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return window.document.addEventListener("visibilitychange", (0, i.
                    default)(o.
                    default.mark((function e() {
                            var t, r;
                            return o.
                        default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (window.document.hidden) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 3,
                                    n.checkAppStatus();
                                case 3:
                                    t = e.sent,
                                    r = m[t[0]],
                                    console.log("visibilitychange getAppVersion", n.appState.state, r),
                                    n.appState.state !== r && n.stateCallback({
                                        status: t[0],
                                        appId: t[1]
                                    });
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                            }), e, n)
                        })))),
                        e.next = 3,
                        this.checkAppStatus();
                    case 3:
                        t = e.sent,
                        this.stateCallback({
                            status: t[0],
                            appId: t[1]
                        }),
                        this.initState = m[t[0]] || d.
                    default.inited;
                    case 6:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return T.apply(this, arguments)
            })
        },
        {
            key: "getAppVersion",
            value: (_ = (0, i.
        default)(o.
        default.mark((function e(t) {
                var n;
                return o.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return t = t || this.appInfo.packageName,
                        e.next = 3,
                        this.callasync("getAppVersionName", t);
                    case 3:
                        if (! (n = e.sent) || "" === n[0]) {
                            e.next = 8;
                            break
                        }
                        return e.abrupt("return", n[0]);
                    case 8:
                        return e.abrupt("return", null);
                    case 9:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e) {
                return _.apply(this, arguments)
            })
        },
        {
            key: "getDeviceInfo",
            value: (S = (0, i.
        default)(o.
        default.mark((function e() {
                var t, n, r;
                return o.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        this._getNetworkStatus();
                    case 2:
                        return t = e.sent,
                        e.next = 5,
                        this._getAppInfo();
                    case 5:
                        return n = e.sent,
                        e.next = 8,
                        this._getImei();
                    case 8:
                        return e.t0 = e.sent,
                        e.t1 = t ? t[0] : "",
                        e.t2 = n ? n[0] : {},
                        r = {
                            imei: e.t0,
                            netType: e.t1,
                            app: e.t2
                        },
                        e.abrupt("return", r);
                    case 13:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return S.apply(this, arguments)
            })
        },
        {
            key: "_getImei",
            value: (x = (0, i.
        default)(o.
        default.mark((function e() {
                return o.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        this.callasync("getImei");
                    case 2:
                        return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return x.apply(this, arguments)
            })
        },
        {
            key: "_getNetworkStatus",
            value: (k = (0, i.
        default)(o.
        default.mark((function e() {
                return o.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        this.callasync("getNetworkStatus");
                    case 2:
                        return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return k.apply(this, arguments)
            })
        },
        {
            key: "_getAppInfo",
            value: (w = (0, i.
        default)(o.
        default.mark((function e() {
                return o.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        this.callasync("getAppInfo");
                    case 2:
                        return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return w.apply(this, arguments)
            })
        },
        {
            key: "openApp",
            value: (b = (0, i.
        default)(o.
        default.mark((function e(t, n) {
                return o.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return t = t || this.appInfo.deeplink,
                        n = n || this.appInfo.packageName,
                        e.abrupt("return", this.call("openApp")(t, n));
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e, t) {
                return b.apply(this, arguments)
            })
        },
        {
            key: "getDownloadInfo",
            value: function(e) {
                return {
                    appId: this.appInfo.appId,
                    apkUrl: this.appInfo.downloadUrl,
                    packageName: this.appInfo.packageName,
                    logoUrl: this.appInfo.logo,
                    appName: this.appInfo.appName,
                    scheme: this.appInfo.deeplink,
                    versionCode: this.appInfo.versionCode,
                    fileSize: this.appInfo.filesize,
                    actionCode: e
                }
            }
        },
        {
            key: "createDownloadTask",
            value: (g = (0, i.
        default)(o.
        default.mark((function e() {
                return o.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return this.taskPoint = Date.now(),
                        e.abrupt("return", this.taskPoint);
                    case 2:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return g.apply(this, arguments)
            })
        },
        {
            key: "startDownloadTask",
            value: (y = (0, i.
        default)(o.
        default.mark((function e() {
                return o.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.abrupt("return", this.call("downloadApp_gdt")((0, a.
                    default)(this.getDownloadInfo(1)), "window.callbackstack.downloadApp"));
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return y.apply(this, arguments)
            })
        },
        {
            key: "pauseDownloadTask",
            value: (v = (0, i.
        default)(o.
        default.mark((function e() {
                return o.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.abrupt("return", this.call("downloadApp_gdt")((0, a.
                    default)(this.getDownloadInfo(2)), "window.callbackstack.downloadApp"));
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return v.apply(this, arguments)
            })
        },
        {
            key: "resumeDownloadTask",
            value: (h = (0, i.
        default)(o.
        default.mark((function e() {
                return o.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.abrupt("return", this.startDownloadTask());
                    case 1:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return h.apply(this, arguments)
            })
        },
        {
            key: "installApp",
            value: (p = (0, i.
        default)(o.
        default.mark((function e() {
                return o.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.abrupt("return", this.call("installApp")((0, a.
                    default)(this.getDownloadInfo()), "window.callbackstack.installApp"));
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return p.apply(this, arguments)
            })
        },
        {
            key: "checkAppStatus",
            value: (n = (0, i.
        default)(o.
        default.mark((function e() {
                var t;
                return o.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        this.callasync("checkAppStatus", (0, a.
                    default)(this.getDownloadInfo()));
                    case 2:
                        return t = e.sent,
                        e.abrupt("return", t);
                    case 4:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return n.apply(this, arguments)
            })
        },
        {
            key: "call",
            value: function(e) {
                return window.TencentNews && "function" == typeof window.TencentNews[e] ? window.TencentNews[e] : function() {
                    return null
                }
            }
        },
        {
            key: "callasync",
            value: function(e) {
                for (var t = this,
                n = arguments.length,
                a = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
                return new r.
            default((function(n) {
                    var r = t.seqid++;
                    t.callbackstack["c" + r] = function() {
                        for (var e = arguments.length,
                        a = Array(e), o = 0; o < e; o++) a[o] = arguments[o];
                        delete t.callbackstack["c" + r],
                        n(a)
                    },
                    window.TencentNews && "function" == typeof window.TencentNews[e] ? window.TencentNews[e].apply(window, [].concat(a, ["window.callbackstack.c" + r])) : n()
                }))
            }
        },
        {
            key: "stateCallback",
            value: function(e) {
                console.log("News.stateCallback", e),
                e && void 0 !== e.status && this.onDownloadTaskStatusChange(this.taskPoint, m[e.status], e.progress && Math.floor(100 * e.progress))
            }
        }]),
        t
    } (p.
default);
    t.
default = v
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = d(n(14)),
    a = d(n(2)),
    o = d(n(3)),
    i = d(n(13)),
    s = d(n(0)),
    u = d(n(1)),
    l = d(n(17)),
    c = d(n(18)),
    f = d(n(26)),
    p = d(n(22));
    function d(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    var h = {
        TASK_STATUS_PROGRESS: p.
    default.downloading,
        TASK_STATUS_COMPLETED: p.
    default.downloaded,
        TASK_STATUS_CREATED: p.
    default.inited,
        TASK_STATUS_QUEUE: p.
    default.queue,
        TASK_STATUS_PAUSED: p.
    default.paused,
        TASK_STATUS_INSTALLING: p.
    default.installing,
        TASK_STATUS_INSTALLED: p.
    default.installed,
        TASK_STATUS_NONE: p.
    default.inited,
        TASK_STATUS_STARTED: p.
    default.queue,
        TASK_STATUS_FILE_HAS_DELETED: p.
    default.inited
    },
    m = function(e) {
        function t(e) { (0, s.
        default)(this, t);
            var n = (0, l.
        default)(this, (t.__proto__ || (0, i.
        default)(t)).call(this, e));
            return n.jsbname = "mqqbrowser",
            n
        }
        var n, f, d, m, v, y, g, b, w, k, x;
        return (0, c.
    default)(t, e),
        (0, u.
    default)(t, [{
            key: "initial",
            value: (x = (0, o.
        default)(a.
        default.mark((function e() {
                var t, n = this;
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return window.browser && window.browser.event && window.browser.event.downloadstatuschange && window.browser.event.downloadstatuschange(this.stateCallback.bind(this)),
                        e.next = 3,
                        this.getDownloadStatus();
                    case 3:
                        t = e.sent,
                        console.log("downloadStaus", t),
                        this.stateCallback({
                            status: t
                        }),
                        window.document.addEventListener("visibilitychange", (0, o.
                    default)(a.
                    default.mark((function e() {
                            var t;
                            return a.
                        default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (window.document.hidden) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 3,
                                    n.getAppVersion();
                                case 3:
                                    t = e.sent,
                                    console.log("visibilitychange getAppVersion", n.appState.state, t),
                                    t && n.appState.state !== p.
                                default.installed ? n.stateCallback({
                                        status: "TASK_STATUS_INSTALLED"
                                    }) : t || n.appState.state !== p.
                                default.installed || n.stateCallback({
                                        status: "TASK_STATUS_NONE"
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                            }), e, n)
                        }))));
                    case 7:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return x.apply(this, arguments)
            })
        },
        {
            key: "getDownloadStatus",
            value: (k = (0, o.
        default)(a.
        default.mark((function e() {
                var t;
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return t = this.callasync("download.getDownloadStatus", {
                            url: this.appInfo.downloadUrl
                        }),
                        console.log("QQ.getDownloadStatus", t),
                        e.abrupt("return", t);
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return k.apply(this, arguments)
            })
        },
        {
            key: "createDownloadTask",
            value: (w = (0, o.
        default)(a.
        default.mark((function e() {
                var t;
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return this.taskPoint = Date.now(),
                        e.next = 3,
                        this.getAppVersion();
                    case 3:
                        if (!e.sent) {
                            e.next = 7;
                            break
                        }
                        this.stateCallback({
                            status: "TASK_STATUS_INSTALLED"
                        }),
                        e.next = 12;
                        break;
                    case 7:
                        return e.next = 9,
                        this.getDownloadStatus();
                    case 9:
                        t = e.sent,
                        console.log("getDownloadStatus", t),
                        t ? this.stateCallback({
                            status: t
                        }) : this.stateCallback({
                            status: "TASK_STATUS_NONE"
                        });
                    case 12:
                        return e.abrupt("return", this.taskPoint);
                    case 13:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return w.apply(this, arguments)
            })
        },
        {
            key: "getDownloadInfo",
            value: function() {
                return {
                    url: this.appInfo.downloadUrl,
                    fileName: this.appInfo.appName + ".apk",
                    filesize: this.appInfo.filesize + "",
                    iconurl: this.appInfo.logo,
                    needtoast: "false",
                    needdialog: "false",
                    neednotification: "true",
                    onWifiDownload: "false",
                    needautoinstall: "true",
                    hidedownload: "false",
                    needNotifyWifiDownload: "true"
                }
            }
        },
        {
            key: "startDownloadTask",
            value: (b = (0, o.
        default)(a.
        default.mark((function e() {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        console.log("startDownloadTask"),
                        this.call("download.startDownload", this.getDownloadInfo());
                    case 4:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return b.apply(this, arguments)
            })
        },
        {
            key: "pauseDownloadTask",
            value: (g = (0, o.
        default)(a.
        default.mark((function e() {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        this.call("download.pauseDownload", this.getDownloadInfo()),
                        this.stateCallback({
                            status: "TASK_STATUS_PAUSED"
                        });
                    case 4:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return g.apply(this, arguments)
            })
        },
        {
            key: "resumeDownloadTask",
            value: (y = (0, o.
        default)(a.
        default.mark((function e() {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.next = 4,
                        this.startDownloadTask();
                    case 4:
                        return e.abrupt("return", e.sent);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return y.apply(this, arguments)
            })
        },
        {
            key: "installApp",
            value: (v = (0, o.
        default)(a.
        default.mark((function e() {
                var t;
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.next = 4,
                        this.call("download.installApp", {
                            url: this.appInfo.downloadUrl
                        });
                    case 4:
                        t = e.sent,
                        console.log("QQB.installApp", t),
                        t && t.ret && this.stateCallback({
                            status: "TASK_STATUS_INSTALLED"
                        });
                    case 7:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return v.apply(this, arguments)
            })
        },
        {
            key: "getAppVersion",
            value: (m = (0, o.
        default)(a.
        default.mark((function e(t) {
                var n;
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return t = t || this.appInfo.packageName,
                        e.next = 3,
                        this.call("app.getApkInfo", t);
                    case 3:
                        if (n = e.sent, console.log("QQB.getAppVersion", t, n), !n || '""' === n) {
                            e.next = 9;
                            break
                        }
                        return e.abrupt("return", JSON.parse(n));
                    case 9:
                        return e.abrupt("return", null);
                    case 10:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e) {
                return m.apply(this, arguments)
            })
        },
        {
            key: "openApp",
            value: (d = (0, o.
        default)(a.
        default.mark((function e(t, n) {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (t = t || this.appInfo.deeplink, n = n || this.appInfo.packageName, !t) {
                            e.next = 6;
                            break
                        }
                        window.location.href = t,
                        e.next = 13;
                        break;
                    case 6:
                        if (!n) {
                            e.next = 12;
                            break
                        }
                        return e.next = 9,
                        this.call("app.runApk", n);
                    case 9:
                        return e.abrupt("return", e.sent);
                    case 12:
                        return e.abrupt("return", null);
                    case 13:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e, t) {
                return d.apply(this, arguments)
            })
        },
        {
            key: "getDeviceInfo",
            value: (f = (0, o.
        default)(a.
        default.mark((function e() {
                var t, n;
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        this.call("device.getQIMEI");
                    case 2:
                        return t = e.sent,
                        e.next = 5,
                        this.call("device.getAndroidID");
                    case 5:
                        return n = e.sent,
                        e.t0 = t && t.QIMEI || "",
                        e.t1 = n && n.androidID || "",
                        e.next = 10,
                        this.getNetType();
                    case 10:
                        return e.t2 = e.sent,
                        e.abrupt("return", {
                            imei: e.t0,
                            androidId: e.t1,
                            netType: e.t2
                        });
                    case 12:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return f.apply(this, arguments)
            })
        },
        {
            key: "getNetType",
            value: (n = (0, o.
        default)(a.
        default.mark((function e() {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        this.call("connection.getType");
                    case 2:
                        return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return n.apply(this, arguments)
            })
        },
        {
            key: "call",
            value: function(e) {
                for (var t = arguments.length,
                n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
                var o = e.split("."),
                i = "app",
                s = e;
                return 2 === o.length && (i = o[0], s = o[1]),
                new r.
            default((function(e) {
                    var t, r;
                    window.browser && window.browser[i] && "function" == typeof window.browser[i][s] ? "getApkInfo" === s ? (console.log(i, s), (t = window.browser[i])[s].apply(t, [e].concat(n))) : (console.log(i, s, n), (r = window.browser[i])[s].apply(r, n.concat([e]))) : e()
                }))
            }
        },
        {
            key: "callasync",
            value: function(e, t) {
                var n = e.split("."),
                r = "app",
                a = e;
                return 2 === n.length && (r = n[0], a = n[1]),
                window.browser && window.browser[r] && "function" == typeof window.browser[r][a] ? window.browser[r][a](t) : null
            }
        },
        {
            key: "stateCallback",
            value: function(e) {
                if (console.log("stateCallback before appState", e), e && void 0 !== e.status) {
                    console.log("stateCallback", e);
                    var t = h[e.status];
                    t && this.onDownloadTaskStatusChange(this.taskPoint, t, Math.floor(parseInt(e.downedsize) / parseInt(e.totalsize) * 100))
                }
            }
        }]),
        t
    } (f.
default);
    t.
default = m
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = d(n(14)),
    a = d(n(2)),
    o = d(n(3)),
    i = d(n(13)),
    s = d(n(0)),
    u = d(n(1)),
    l = d(n(17)),
    c = d(n(18)),
    f = d(n(26)),
    p = d(n(22));
    function d(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    var h = {
        "-1": "鏈煡缃戠粶绫诲瀷",
        0 : "NotReachable 鑾峰彇澶辫触",
        1 : "wifi",
        2 : "2g",
        3 : "3g",
        4 : "4g"
    },
    m = {
        0 : p.
    default.inited,
        1 : p.
    default.downloading,
        2 : p.
    default.paused,
        3 : p.
    default.downloaded,
        4 : p.
    default.installing,
        5 : p.
    default.installed,
        6 : p.
    default.installFail
    },
    v = function(e) {
        function t(e) { (0, s.
        default)(this, t);
            var n = (0, l.
        default)(this, (t.__proto__ || (0, i.
        default)(t)).call(this, e));
            return n.jsbname = "qmKege",
            n.hasAutoOpen = !1,
            n.initState = p.
        default.inited,
            n
        }
        var n, f, d, v, y, g, b, w, k, x, S, _, T, A;
        return (0, c.
    default)(t, e),
        (0, u.
    default)(t, [{
            key: "initial",
            value: (A = (0, o.
        default)(a.
        default.mark((function e() {
                var t = this;
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (window.kgbridge) {
                            e.next = 3;
                            break
                        }
                        return this.onJsbridgeApiError("kgbridge", "", -1, "kgbridge not found"),
                        e.abrupt("return");
                    case 3:
                        window.kgbridge.invoke("pageVisibility", {
                            callback: function() {
                                var e = (0, o.
                            default)(a.
                            default.mark((function e(n) {
                                    var r;
                                    return a.
                                default.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("false" !== n.status) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4,
                                            t.checkAppStatus();
                                        case 4:
                                            r = e.sent,
                                            console.log("page show status", r),
                                            t.appState.state !== m[r.status] && t.stateCallback({
                                                state: r.status,
                                                progress: r.progress
                                            }),
                                            m[r.status] === p.
                                        default.installed && t.initState !== p.
                                        default.installed && t.appInfo.autoOpen && !t.hasAutoOpen && (t.hasAutoOpen = !0, t.openApp());
                                        case 8:
                                        case "end":
                                            return e.stop()
                                        }
                                    }), e, t)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            } ()
                        });
                    case 4:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return A.apply(this, arguments)
            })
        },
        {
            key: "getDeviceInfo",
            value: (T = (0, o.
        default)(a.
        default.mark((function e() {
                var t, n, r, o;
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        this.getNetType();
                    case 2:
                        return t = e.sent,
                        e.next = 5,
                        this._call("getDeviceInfo");
                    case 5:
                        return n = e.sent,
                        r = n.imei,
                        o = n.qimei,
                        e.abrupt("return", {
                            netType: t,
                            imei: r,
                            qimei: o
                        });
                    case 9:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return T.apply(this, arguments)
            })
        },
        {
            key: "getNetType",
            value: (_ = (0, o.
        default)(a.
        default.mark((function e() {
                var t, n;
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        this._call("getNetworkType");
                    case 2:
                        return t = e.sent,
                        n = t.status,
                        e.abrupt("return", h[n]);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return _.apply(this, arguments)
            })
        },
        {
            key: "getAppVersion",
            value: (S = (0, o.
        default)(a.
        default.mark((function e(t) {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return t = t || this.appInfo.packageName,
                        e.next = 3,
                        this._call("isAppInstall", {
                            packageId: t
                        });
                    case 3:
                        if (1 != e.sent.code) {
                            e.next = 7;
                            break
                        }
                        return e.abrupt("return", !0);
                    case 7:
                        return e.abrupt("return", !1);
                    case 8:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e) {
                return S.apply(this, arguments)
            })
        },
        {
            key: "getDownloadInfo",
            value: function(e) {
                return {
                    appId: "" + this.appInfo.appId,
                    apkUrl: this.appInfo.downloadUrl,
                    packageName: this.appInfo.packageName,
                    logoUrl: this.appInfo.logo,
                    appName: this.appInfo.appName,
                    fileSize: this.appInfo.filesize,
                    versionCode: this.appInfo.versionCode,
                    schema: this.appInfo.deeplink,
                    actionCode: e,
                    subadid: this.appInfo.recommendId,
                    adid: this.appInfo.adid
                }
            }
        },
        {
            key: "createDownloadTask",
            value: (x = (0, o.
        default)(a.
        default.mark((function e() {
                var t;
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return this.taskPoint = Date.now(),
                        e.next = 3,
                        this.checkAppStatus();
                    case 3:
                        return t = e.sent,
                        this.initState = m[t.status],
                        this.stateCallback({
                            state: t.status,
                            progress: t.progress
                        }),
                        e.abrupt("return", this.taskPoint);
                    case 7:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return x.apply(this, arguments)
            })
        },
        {
            key: "checkAppStatus",
            value: (k = (0, o.
        default)(a.
        default.mark((function e() {
                var t, n;
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return t = this.getDownloadInfo(),
                        e.next = 3,
                        this._call("checkAppStatus", t);
                    case 3:
                        return n = e.sent,
                        e.abrupt("return", n);
                    case 5:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return k.apply(this, arguments)
            })
        },
        {
            key: "startDownloadTask",
            value: (w = (0, o.
        default)(a.
        default.mark((function e() {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        this.doDownload(this.getDownloadInfo(1));
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return w.apply(this, arguments)
            })
        },
        {
            key: "pauseDownloadTask",
            value: (b = (0, o.
        default)(a.
        default.mark((function e() {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        this.doDownload(this.getDownloadInfo(2));
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return b.apply(this, arguments)
            })
        },
        {
            key: "resumeDownloadTask",
            value: (g = (0, o.
        default)(a.
        default.mark((function e() {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.abrupt("return", this.startDownloadTask());
                    case 1:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return g.apply(this, arguments)
            })
        },
        {
            key: "stopDownloadTask",
            value: (y = (0, o.
        default)(a.
        default.mark((function e() {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        this.doDownload(this.getDownloadInfo(3));
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return y.apply(this, arguments)
            })
        },
        {
            key: "doDownload",
            value: function(e) {
                var t = this;
                e.callback = function(e) {
                    var n = e.status,
                    r = e.progress;
                    t.stateCallback({
                        state: n,
                        progress: r
                    })
                },
                window.kgbridge.invoke("downloadApp", e)
            }
        },
        {
            key: "doTaskNextAction",
            value: (v = (0, o.
        default)(a.
        default.mark((function e() {
                var t;
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (console.log("doTaskNextAction", this.appState.state), this.taskPoint) {
                            e.next = 3;
                            break
                        }
                        return e.abrupt("return", null);
                    case 3:
                        t = this.appState,
                        console.log("current appstate", t),
                        e.t0 = t.state,
                        e.next = e.t0 === p.
                    default.downloading ? 8 : e.t0 === p.
                    default.downloaded ? 11 : e.t0 === p.
                    default.installed ? 14 : (e.t0 === p.
                    default.inited || e.t0 === p.
                    default.update || e.t0 === p.
                    default.paused || (e.t0, p.
                    default.installFail), 17);
                        break;
                    case 8:
                        return e.next = 10,
                        this.pauseDownloadTask();
                    case 10:
                        return e.abrupt("break", 19);
                    case 11:
                        return e.next = 13,
                        this.installApp();
                    case 13:
                        return e.abrupt("break", 19);
                    case 14:
                        return e.next = 16,
                        this.openApp();
                    case 16:
                        return e.abrupt("break", 19);
                    case 17:
                        return e.next = 19,
                        this.startDownloadTask();
                    case 19:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return v.apply(this, arguments)
            })
        },
        {
            key: "installApp",
            value: (d = (0, o.
        default)(a.
        default.mark((function e() {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.taskPoint) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", null);
                    case 2:
                        return e.abrupt("return", this._call("installApp", this.getDownloadInfo()));
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function() {
                return d.apply(this, arguments)
            })
        },
        {
            key: "openApp",
            value: (f = (0, o.
        default)(a.
        default.mark((function e(t, n) {
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return t = t || this.appInfo.deeplink,
                        n = n || this.appInfo.packageName,
                        e.abrupt("return", this._call("launchApp", {
                            packageName: n,
                            schema: t,
                            appId: "0",
                            apkUrl: "",
                            logoUrl: "",
                            appName: "",
                            fileSize: 0,
                            versionCode: 0
                        }));
                    case 3:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e, t) {
                return f.apply(this, arguments)
            })
        },
        {
            key: "_call",
            value: (n = (0, o.
        default)(a.
        default.mark((function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return a.
            default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.abrupt("return", new r.
                    default((function(e) {
                            console.log("call", t),
                            n.callback = function(r) {
                                console.log("call result", t, n, r),
                                e(r)
                            },
                            window.kgbridge.invoke(t, n)
                        })));
                    case 1:
                    case "end":
                        return e.stop()
                    }
                }), e, this)
            }))),
            function(e) {
                return n.apply(this, arguments)
            })
        },
        {
            key: "stateCallback",
            value: function(e) {
                console.log("qmKege.stateCallback", e),
                e && void 0 !== e.state && this.onDownloadTaskStatusChange(this.taskPoint, m[e.state], e.progress ? Math.floor(e.progress) : 0)
            }
        }]),
        t
    } (f.
default);
    t.
default = v
},
function(e, t, n) {
    e.exports = {
    default:
        n(162),
        __esModule: !0
    }
},
function(e, t, n) {
    n(163),
    e.exports = n(4).Object.assign
},
function(e, t, n) {
    var r = n(12);
    r(r.S + r.F, "Object", {
        assign: n(164)
    })
},
function(e, t, n) {
    "use strict";
    var r = n(16),
    a = n(33),
    o = n(53),
    i = n(41),
    s = n(35),
    u = n(76),
    l = Object.assign;
    e.exports = !l || n(27)((function() {
        var e = {},
        t = {},
        n = Symbol(),
        r = "abcdefghijklmnopqrst";
        return e[n] = 7,
        r.split("").forEach((function(e) {
            t[e] = e
        })),
        7 != l({},
        e)[n] || Object.keys(l({},
        t)).join("") != r
    })) ?
    function(e, t) {
        for (var n = s(e), l = arguments.length, c = 1, f = o.f, p = i.f; l > c;) for (var d, h = u(arguments[c++]), m = f ? a(h).concat(f(h)) : a(h), v = m.length, y = 0; v > y;) d = m[y++],
        r && !p.call(h, d) || (n[d] = h[d]);
        return n
    }: l
}]]);