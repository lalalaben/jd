!
function(e) {
    function t(t) {
        for (var r, a, c = t[0], s = t[1], d = t[2], l = 0, f = []; l < c.length; l++) a = c[l],
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && f.push(o[a][0]),
        o[a] = 0;
        for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
        for (u && u(t); f.length;) f.shift()();
        return i.push.apply(i, d || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], r = !0, c = 1; c < n.length; c++) {
                var s = n[c];
                0 !== o[s] && (r = !1)
            }
            r && (i.splice(t--, 1), e = a(a.s = n[0]))
        }
        return e
    }
    var r = {},
    o = {
        6 : 0
    },
    i = [];
    function a(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, a),
        n.l = !0,
        n.exports
    }
    a.m = e,
    a.c = r,
    a.d = function(e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    },
    a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    a.t = function(e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) a.d(n, r,
        function(t) {
            return e[t]
        }.bind(null, r));
        return n
    },
    a.n = function(e) {
        var t = e && e.__esModule ?
        function() {
            return e.
        default
        }:
        function() {
            return e
        };
        return a.d(t, "a", t),
        t
    },
    a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    a.p = "//mt.gtimg.com/ug/web/page/";
    var c = window.webpackJsonp = window.webpackJsonp || [],
    s = c.push.bind(c);
    c.push = t,
    c = c.slice();
    for (var d = 0; d < c.length; d++) t(c[d]);
    var u = s;
    i.push([141, 0]),
    n()
} ({
    141 : function(e, t, n) {
        "use strict";
        var r = s(n(0)),
        o = s(n(1)),
        i = s(n(5)),
        a = s(n(30)),
        c = s(n(59));
        function s(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        n(184);
        var d = function() {
            function e() { (0, r.
            default)(this, e),
                this.fingerprintSdk = null,
                this.init()
            }
            return (0, o.
        default)(e, [{
                key: "init",
                value: function() {
                    this.state = window.stateData,
                    a.
                default.setCommonOptions(this.state.logInfo),
                    this.fp = !1,
                    this.fp && (this.fingerprintSdk = new c.
                default({
                        host:
                        "sem_h5"
                    })),
                    a.
                default.bindDom((0, i.
                default)("body")),
                    a.
                default.pageExpsoure(),
                    window.addEventListener("pageshow", (function() {
                        a.
                    default.userAction("pageshow")
                    })),
                    window.addEventListener("pagehide", (function() {
                        a.
                    default.userAction("pagehide")
                    }));
                    var e = this; (0, i.
                default)(".download-btn").on("click", (function() {
                        if (e.fp) {
                            e.fingerprintSdk.send({
                                receiveHost: "com.tencent.android.qqdownloader",
                                message: "user come from sem brand h5",
                                traceId: e.state.logInfo.pvid
                            })
                        }
                        var t = (0, i.
                    default)(this);
                        setTimeout((function() {
                            window.location = t.data("href")
                        }), 300)
                    }))
                }
            }]),
            e
        } ();
        window.app = new d
    },
    184 : function(e, t) {},
    19 : function(e, t) {
        e.exports = {
            serialize: function(e) {
                return e = e || {},
                Object.keys(e).map((function(t) {
                    return t + "=" + encodeURIComponent(e[t])
                })).join("&")
            },
            copyToClipboard: function(e) {
                var t = window.document.createElement("input");
                if (window.document.body.appendChild(t), t.setAttribute("value", e), t.setAttribute("readonly", "readonly"), t.setSelectionRange(0, 9999), t.select(), window.document.execCommand) {
                    var n = window.document.execCommand("copy");
                    console.log("copy result", n)
                }
                window.document.body.removeChild(t)
            },
            getUrlParam: function(e, t) {
                t = t || window.location.href;
                var n = new RegExp("[?#&]" + e + "=([^&#]*)", "i").exec(t);
                return decodeURIComponent((n ? n[1] : "").replace(/[+]/gi, "%20"))
            },
            extend: function(e) {
                if (Object.assign) return Object.assign.apply(null, arguments);
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
        }
    },
    59 : function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a(n(0)),
        o = a(n(1)),
        i = a(n(60));
        function a(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        var c = function() {
            function e(t) {
                var n = t.host; (0, r.
            default)(this, e),
                this.sdk = new i.
            default({
                    host:
                    n
                }),
                this.ready = !1,
                this.sendList = [],
                this.init()
            }
            return (0, o.
        default)(e, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.sdk.on("ready", (function() {
                        e.ready = !0,
                        e.sendList.forEach((function(t) {
                            e.sdk.send(t)
                        }))
                    }))
                }
            },
            {
                key: "send",
                value: function(e) {
                    this.ready ? this.sdk.send(e) : this.sendList.push(e)
                }
            }]),
            e
        } ();
        t.
    default = c
    },
    60 : function(e, t, n) {
        e.exports = n(61)
    },
    61 : function(e, t, n) {
        var r = n(62),
        o = n(63),
        i = n(64),
        a = n(65),
        c = n(66),
        s = n(67),
        d = n(19);
        function u(e) {
            this.config = d.extend({},
            a, e || {}),
            this.deviceId = "",
            this._init()
        }
        u.prototype = new s,
        u.prototype._init = function() {
            this.config.debug && (c.ServerUrl = this.config.debugServerUrl),
            this.config.host || this.emit(c.EventName.error, {
                ret: c.RetCode.hostError
            });
            const e = this;
            r.send({
                url: c.ServerUrl + "/device/get",
                callback: function(t) {
                    0 == t.ret ? (e.deviceId = t.data.deviceId, e.emit(c.EventName.ready)) : (console.log("messenger send error", t), e.emit(c.EventName.error, t))
                }
            })
        },
        u.prototype.send = function(e, t) {
            var n = e.receiveHost,
            a = e.message,
            s = e.expiredTime || Date.now() + this.config.defaultExpiredTime,
            d = e.traceId;
            if ("function" != typeof(t = t ||
            function() {})) throw new TypeError("callback should be a function");
            n && a || t({
                ret: c.RetCode.paramError
            });
            var u = {
                clipboardDeviceId: i.readDeviceId(),
                fingerprint: o.collect(),
                receiveHost: n,
                sendHost: this.config.host,
                message: a,
                expiredTime: s,
                traceId: d
            };
            i.writeDeviceId(this.deviceId),
            r.send({
                url: c.ServerUrl + "/message/send",
                qs: {
                    params: JSON.stringify(u)
                },
                callback: function(e) {
                    if (0 == e.ret) {
                        var n = e.data && e.data.deviceId;
                        this.deviceId = n
                    } else console.log("messenger send error", e);
                    return t(e)
                }
            })
        },
        u.prototype.receive = function(e) {
            if ("function" != typeof e) throw new TypeError("callback function cannot be null");
            var t = {
                clipboardDeviceId: i.readDeviceId(),
                fingerprint: o.collect(),
                receiveHost: this.config.host
            };
            r.send({
                url: c.ServerUrl + "/message/receive",
                qs: {
                    params: JSON.stringify(t)
                },
                callback: function(t) {
                    if (0 == t.ret) {
                        var n = t.data && t.data.deviceId;
                        this.deviceId = n
                    } else console.log("messenger receive error", t);
                    return e(t)
                }
            })
        },
        e.exports = u
    },
    62 : function(e, t, n) {
        const r = n(19);
        e.exports = {
            send: function(e) {
                var t = e.url,
                n = (e.method || "GET").toUpperCase(),
                o = r.serialize(e.qs),
                i = JSON.stringify(e.body);
                o && (t += (t.indexOf("?") >= 0 ? "&": "?") + o);
                var a = new XMLHttpRequest;
                return a.open(n, t, !0),
                a.withCredentials = !0,
                "POST" === n && a.setRequestHeader("Content-Type", "application/json"),
                a.timeout = 15e3,
                a.onload = function(t) {
                    var n = a.responseText || "";
                    try {
                        n = JSON.parse(n),
                        e.callback && e.callback.call(null, n)
                    } catch(n) {
                        console.log(n.stack),
                        e.callback && e.callback.call(null, {
                            type: t.type,
                            ret: t.target.status
                        })
                    }
                },
                a.ontimeout = a.onerror = function(n) {
                    console.log("XHR request url : " + t + " faile"),
                    e.callback && e.callback.call(null, {
                        type: n.type,
                        ret: 999
                    })
                },
                a.send("GET" === n ? null: i),
                a
            }
        }
    },
    63 : function(e, t, n) {
        var r = n(19);
        function o() {
            if (window.navigator.connection) {
                var e = window.navigator.connection;
                return e.effectiveType || e.type || "unknow"
            }
            return ""
        }
        e.exports = {
            collect: function() {
                var e = (window.navigator.languages || []).join(",") || navigator.language,
                t = new Date,
                n = {
                    screenWidth: window.screen.width,
                    screenHeight: window.screen.height,
                    deviceWidth: window.screen.width * (window.devicePixelRatio || 0),
                    deviceHeight: window.screen.height * (window.devicePixelRatio || 0),
                    screenColorDepth: window.screen.colorDepth,
                    cpuPlatform: navigator.platform,
                    timestamp: t.getTime(),
                    timezone: t.getTimezoneOffset() / 60,
                    language: e,
                    network: o()
                };
                return r.extend(n,
                function() {
                    var e = document.createElement("canvas").getContext("experimental-webgl"),
                    t = e && e.getExtension("WEBGL_debug_renderer_info"),
                    n = "",
                    r = "";
                    e && t && (n = e.getParameter(t.UNMASKED_VENDOR_WEBGL), r = e.getParameter(t.UNMASKED_RENDERER_WEBGL));
                    return {
                        gpuVendor: n,
                        gpuRenderer: r
                    }
                } ())
            }
        }
    },
    64 : function(e, t, n) {
        var r = n(19);
        e.exports = {
            readDeviceId: function() {
                return ""
            },
            writeDeviceId: function(e) {
                r.copyToClipboard(function(e) {
                    return "${FingerPrintSDKDeviceId}_" + e
                } (e))
            }
        }
    },
    65 : function(e, t) {
        e.exports = {
            defaultExpiredTime: 864e5
        }
    },
    66 : function(e, t) {
        e.exports = {
            RetCode: {
                paramError: -101,
                networkError: -102,
                hostError: -103
            },
            ServerUrl: "https://fingerprint.html5.qq.com",
            EventName: {
                ready: "ready",
                error: "error"
            }
        }
    },
    67 : function(e, t) {
        function n() {
            this._listeners = {}
        }
        n.prototype.on = function(e, t) { (e || "function" == typeof t) && (this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t))
        },
        n.prototype.emit = function(e, t) {
            if (!e) return;
            const n = this._listeners[e];
            n && n.length && n.forEach((function(e) {
                e(t)
            }))
        },
        e.exports = n
    }
});