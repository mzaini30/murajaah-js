!function(e) {
    var n = {};
    function t(r) {
        if (n[r])
            return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t),
        o.l = !0,
        o.exports
    }
    t.m = e,
    t.c = n,
    t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: r
        })
    }
    ,
    t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    t.t = function(e, n) {
        if (1 & n && (e = t(e)),
        8 & n)
            return e;
        if (4 & n && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (t.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & n && "string" != typeof e)
            for (var o in e)
                t.d(r, o, function(n) {
                    return e[n]
                }
                .bind(null, o));
        return r
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    t.p = "",
    t(t.s = 340)
}({
    340: function(e, n) {
        var t = [
          "/kelinci.gif",
          "/",
          "/index.html",
          "/vendor/bootstrap/css/bootstrap.min.css",
          "/vendor/jquery.min.js",
          "/vendor/bootstrap/js/bootstrap.min.js",
          "/vendor/olahJson.min.js",
          "/manifest.json",
          "/icon/72.png",
          "/icon/96.png",
          "/icon/128.png",
          "/icon/144.png",
          "/icon/152.png",
          "/icon/192.png",
          "/icon/384.png",
          "/icon/512.png",
          "/favicon.ico"
        ];
        self.addEventListener("install", (function(e) {
            e.waitUntil(caches.open("murajaah-v2").then((function(e) {
                return e.addAll(t)
            }
            )))
        }
        )),
        self.addEventListener("fetch", (function(e) {
            e.respondWith(caches.match(e.request, {
                cacheName: "murajaah-v2"
            }).then((function(n) {
                return n ? (console.log("ServiceWorker: Gunakan aset dari cache: ", n.url),
                n) : (console.log("ServiceWorker: Memuat aset dari server: ", e.request.url),
                fetch(e.request))
            }
            )))
        }
        )),
        self.addEventListener("activate", (function(e) {
            e.waitUntil(caches.keys().then((function(e) {
                return Promise.all(e.map((function(e) {
                    if ("murajaah-v2" != e)
                        return console.log("ServiceWorker: cache " + e + " dihapus"),
                        caches.delete(e)
                }
                )))
            }
            )))
        }
        ))
    }
});
