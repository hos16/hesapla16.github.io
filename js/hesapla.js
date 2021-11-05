function hesapla() {
    var not1, harfnot, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15;
    //parsefloat()
    s1 = document.getElementById('sinav1').value * 6; //matematik
    s2 = document.getElementById('sinav2').value * 2; //fizik
    s3 = document.getElementById('sinav3').value * 2; //kimya
    s4 = document.getElementById('sinav4').value * 2; //biyo
    s5 = document.getElementById('sinav5').value * 5; //edebiyat
    s6 = document.getElementById('sinav6').value * 4; //ing
    s7 = document.getElementById('sinav7').value * 2; //almanca
    s8 = document.getElementById('sinav8').value * 2; //resim
    s9 = document.getElementById('sinav9').value * 2; //beden
    s10 = document.getElementById('sinav10').value * 2; //felsefe
    s11 = document.getElementById('sinav11').value * 2; //tarih
    s12 = document.getElementById('sinav12').value * 2; //cog
    s13 = document.getElementById('sinav13').value * 1; //astronomi
    s14 = document.getElementById('sinav14').value * 1; //demokrasi 
    s15 = document.getElementById('sinav15').value * 2; //din

    not1 = (s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10 + s11 + s12 + s13 + s14 + s15) / 37.0;


    if (document.getElementById('sinav1').value >= 00 && document.getElementById('sinav1').value < 50)
        document.getElementById('yüz').innerHTML = "Malesef Matematik 50 Altında olduğu için belge alamadınız!", //mat
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav2').value >= 00 && document.getElementById('sinav2').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız', //fizik
        document.getElementById('yüz').innerHTML = "Malesef Fizik 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav3').value >= 00 && document.getElementById('sinav3').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız ', //kimya
        document.getElementById('yüz').innerHTML = "Malesef Kimya 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav4').value >= 00 && document.getElementById('sinav4').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Biyoloji 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //biyo
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav5').value >= 00 && document.getElementById('sinav5').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız', //edebiyat
        document.getElementById('yüz').innerHTML = "Malesef Edebiyat 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav6').value >= 00 && document.getElementById('sinav6').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız', //ing
        document.getElementById('yüz').innerHTML = "Malesef İngilizce 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav7').value >= 00 && document.getElementById('sinav7').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız', //almanaca
        document.getElementById('yüz').innerHTML = "Malesef Almanca 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav8').value >= 00 && document.getElementById('sinav8').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız', //resim
        document.getElementById('yüz').innerHTML = "Malesef Görsel/Müzik 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block",
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav9').value >= 00 && document.getElementById('sinav9').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Beden 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //beden
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav10').value >= 00 && document.getElementById('sinav10').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Felsefe 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //felsefe
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav11').value >= 00 && document.getElementById('sinav11').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Tarih 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //tarih
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav12').value >= 00 && document.getElementById('sinav12').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Coğrafya 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //cog
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav13').value >= 00 && document.getElementById('sinav13').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Astronomi 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //astronomi
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav14').value >= 00 && document.getElementById('sinav14').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Demokrosi 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //demok
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (document.getElementById('sinav15').value >= 00 && document.getElementById('sinav15').value < 50)
        harfnot = 'Zayıf Ders olduğu için belge alamadınız',
        document.getElementById('yüz').innerHTML = "Malesef Din 50 Altında olduğu için belge alamadınız!",
        document.getElementById('yüz').style.display = "block", //din
        setTimeout("document.getElementById('yüz').style.display = 'none'", 7000);

    else if (not1 >= 85 && not1 <= 100)
        harfnot = 'Tebrikler! Taktir belgesini Hak kazandınız!',
        document.getElementById('mesaj').style.display = "block",
        setTimeout("document.getElementById('mesaj').style.display = 'none'", 10000);
    else if (not1 >= 70 && not1 <= 85)
        harfnot = 'Tebrikler! Teşekkür belgesini Hak kazandınız!',
        document.getElementById('tesekkür').style.display = "block",
        setTimeout("document.getElementById('tesekkür').style.display = 'none'", 10000);
    else if (not1 >= 0 && not1 < 70)
        harfnot = 'Malesef hiç bir belge kazanamadınız!',
        document.getElementById('hic').style.display = "block",
        setTimeout("document.getElementById('hic').style.display = 'none'", 10000);

    document.getElementById('mesaj').innerHTML = "Aferin " +
        not1 + " puan ile Taktir Belgesini almaya hak kazandınız!";
    document.getElementById('hic').innerHTML = "Malesef " +
        not1 + " puan ile HİÇ BELGE alamadınız!";
    document.getElementById('tesekkür').innerHTML = "Aferin " +
        not1 + " puan ile Teşekkür Belgesini almaya hak kazandınız!";

    document.getElementById('txtortalama').value = not1;
    document.getElementById('txtharf').value = harfnot;


}

function notifyMe() {
    var notification;
    if (!("Notification" in window)) {

        alert("Bu tarayıcı bildirim desteklemior:)");

    } else if (Notification.permission === "granted") {

        notification = new Notification(harfnot);

    } else if (Notification.permission !== "denied") {

        Notification.requestPermission().then(function(permission) {

            if (permission === "granted") {
                notification = new Notification("Merhaba!");
            }


        });

    }

}

function kontrol() {
    var y, x, z, t, o, p, r, s, q, e, n, v, b, c, w;

    y = document.getElementById('sinav1').value;
    x = document.getElementById('sinav2').value;
    z = document.getElementById('sinav3').value;
    t = document.getElementById('sinav4').value;
    o = document.getElementById('sinav5').value;
    p = document.getElementById('sinav6').value;
    n = document.getElementById('sinav7').value;
    s = document.getElementById('sinav8').value;
    q = document.getElementById('sinav9').value;
    e = document.getElementById('sinav10').value;
    r = document.getElementById('sinav11').value;
    v = document.getElementById('sinav12').value;
    b = document.getElementById('sinav13').value;
    c = document.getElementById('sinav14').value;
    w = document.getElementById('sinav15').value;

    if (100 < y)
        document.getElementById('sinav1').value = 100;
    if (100 < x)
        document.getElementById('sinav2').value = 100;
    if (100 < z)
        document.getElementById('sinav3').value = 100;
    if (100 < t)
        document.getElementById('sinav4').value = 100;
    if (100 < o)
        document.getElementById('sinav5').value = 100;
    if (100 < p)
        document.getElementById('sinav6').value = 100;
    if (100 < n)
        document.getElementById('sinav7').value = 100;
    if (100 < s)
        document.getElementById('sinav8').value = 100;
    if (100 < q)
        document.getElementById('sinav9').value = 100;
    if (100 < e)
        document.getElementById('sinav10').value = 100;
    if (100 < r)
        document.getElementById('sinav11').value = 100;
    if (100 < v)
        document.getElementById('sinav12').value = 100;
    if (100 < b)
        document.getElementById('sinav13').value = 100;
    if (100 < c)
        document.getElementById('sinav14').value = 100;
    if (100 < w)
        document.getElementById('sinav15').value = 100;

}
var tarama;

tarama = setInterval(kontrol, 100);

function confetti() {

    ! function(t, e) {
        ! function t(e, n, a, i) {
            var o = !!(e.Worker && e.Blob && e.Promise && e.OffscreenCanvas && e.OffscreenCanvasRenderingContext2D && e.HTMLCanvasElement && e.HTMLCanvasElement.prototype.transferControlToOffscreen && e.URL && e.URL.createObjectURL);

            function r() {}

            function l(t) {
                var a = n.exports.Promise,
                    i = void 0 !== a ? a : e.Promise;
                return "function" == typeof i ? new i(t) : (t(r, r), null)
            }
            var c, s, u, d, f, h, g, m, b = (u = Math.floor(1e3 / 60), d = {}, f = 0, "function" == typeof requestAnimationFrame && "function" == typeof cancelAnimationFrame ? (c = function(t) {
                    var e = Math.random();
                    return d[e] = requestAnimationFrame((function n(a) {
                        f === a || f + u - 1 < a ? (f = a, delete d[e], t()) : d[e] = requestAnimationFrame(n)
                    })), e
                }, s = function(t) {
                    d[t] && cancelAnimationFrame(d[t])
                }) : (c = function(t) {
                    return setTimeout(t, u)
                }, s = function(t) {
                    return clearTimeout(t)
                }), {
                    frame: c,
                    cancel: s
                }),
                v = (m = {}, function() {
                    if (h) return h;
                    if (!a && o) {
                        var e = ["var CONFETTI, SIZE = {}, module = {};", "(" + t.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join("\n");
                        try {
                            h = new Worker(URL.createObjectURL(new Blob([e])))
                        } catch (t) {
                            return void 0 !== typeof console && "function" == typeof console.warn && console.warn("🎊 Could not load worker", t), null
                        }! function(t) {
                            function e(e, n) {
                                t.postMessage({
                                    options: e || {},
                                    callback: n
                                })
                            }
                            t.init = function(e) {
                                var n = e.transferControlToOffscreen();
                                t.postMessage({
                                    canvas: n
                                }, [n])
                            }, t.fire = function(n, a, i) {
                                if (g) return e(n, null), g;
                                var o = Math.random().toString(36).slice(2);
                                return g = l((function(a) {
                                    function r(e) {
                                        e.data.callback === o && (delete m[o], t.removeEventListener("message", r), g = null, i(), a())
                                    }
                                    t.addEventListener("message", r), e(n, o), m[o] = r.bind(null, {
                                        data: {
                                            callback: o
                                        }
                                    })
                                }))
                            }, t.reset = function() {
                                for (var e in t.postMessage({
                                        reset: !0
                                    }), m) m[e](), delete m[e]
                            }
                        }(h)
                    }
                    return h
                }),
                y = {
                    particleCount: 50,
                    angle: 90,
                    spread: 45,
                    startVelocity: 45,
                    decay: .9,
                    gravity: 1,
                    drift: 0,
                    ticks: 200,
                    x: .5,
                    y: .5,
                    shapes: ["square", "circle"],
                    zIndex: 100,
                    colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
                    disableForReducedMotion: !1,
                    scalar: 1
                };

            function p(t, e, n) {
                return function(t, e) {
                    return e ? e(t) : t
                }(t && null != t[e] ? t[e] : y[e], n)
            }

            function M(t) {
                return t < 0 ? 0 : Math.floor(t)
            }

            function w(t) {
                return parseInt(t, 16)
            }

            function x(t) {
                return t.map(C)
            }

            function C(t) {
                var e = String(t).replace(/[^0-9a-f]/gi, "");
                return e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), {
                    r: w(e.substring(0, 2)),
                    g: w(e.substring(2, 4)),
                    b: w(e.substring(4, 6))
                }
            }

            function k(t) {
                t.width = document.documentElement.clientWidth, t.height = document.documentElement.clientHeight
            }

            function I(t) {
                var e = t.getBoundingClientRect();
                t.width = e.width, t.height = e.height
            }

            function T(t, e, n, o, r) {
                var c, s, u = e.slice(),
                    d = t.getContext("2d"),
                    f = l((function(e) {
                            function l() {
                                c = s = null, d.clearRect(0, 0, o.width, o.height), r(), e()
                            }
                            c = b.frame((function e() {
                                    !a || o.width === i.width && o.height === i.height || (o.width = t.width = i.width, o.height = t.height = i.height), o.width || o.height || (n(t), o.width = t.width, o.height = t.height), d.clearRect(0, 0, o.width, o.height), (u = u.filter((function(t) {
                                            return function(t, e) {
                                                e.x += Math.cos(e.angle2D) * e.velocity + e.drift, e.y += Math.sin(e.angle2D) * e.velocity + e.gravity, e.wobble += .1, e.velocity *= e.decay, e.tiltAngle += .1, e.tiltSin = Math.sin(e.tiltAngle), e.tiltCos = Math.cos(e.tiltAngle), e.random = Math.random() + 5, e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble), e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble);
                                                var n = e.tick++/e.totalTicks,a=e.x+e.random*e.tiltCos,i=e.y+e.random*e.tiltSin,o=e.wobbleX+e.random*e.tiltCos,r=e.wobbleY+e.random*e.tiltSin;return t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),"circle"===e.shape?t.ellipse?t.ellipse(e.x,e.y,Math.abs(o-a)*e.ovalScalar,Math.abs(r-i)*e.ovalScalar,Math.PI/
                                                10 * e.wobble, 0, 2 * Math.PI): function(t, e, n, a, i, o, r, l, c) {
                                                t.save(), t.translate(e, n), t.rotate(o), t.scale(a, i), t.arc(0, 0, 1, r, l, c), t.restore()
                                            }(t, e.x, e.y, Math.abs(o - a) * e.ovalScalar, Math.abs(r - i) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI): (t.moveTo(Math.floor(e.x), Math.floor(e.y)), t.lineTo(Math.floor(e.wobbleX), Math.floor(i)), t.lineTo(Math.floor(o), Math.floor(r)), t.lineTo(Math.floor(a), Math.floor(e.wobbleY))), t.closePath(), t.fill(), e.tick < e.totalTicks
                                        }(d, t)
                                    }))).length ? c = b.frame(e) : l()
                            })), s = l
                    }));
            return {
                addFettis: function(t) {
                    return u = u.concat(t), f
                },
                canvas: t,
                promise: f,
                reset: function() {
                    c && b.cancel(c), s && s()
                }
            }
        }

        function E(t, n) {
            var a, i = !t,
                r = !!p(n || {}, "resize"),
                c = p(n, "disableForReducedMotion", Boolean),
                s = o && !!p(n || {}, "useWorker") ? v() : null,
                u = i ? k : I,
                d = !(!t || !s) && !!t.__confetti_initialized,
                f = "function" == typeof matchMedia && matchMedia("(prefers-reduced-motion)").matches;

            function h(e, n, i) {
                for (var o, r, l, c, s, d = p(e, "particleCount", M), f = p(e, "angle", Number), h = p(e, "spread", Number), g = p(e, "startVelocity", Number), m = p(e, "decay", Number), b = p(e, "gravity", Number), v = p(e, "drift", Number), y = p(e, "colors", x), w = p(e, "ticks", Number), C = p(e, "shapes"), k = p(e, "scalar"), I = function(t) {
                        var e = p(t, "origin", Object);
                        return e.x = p(e, "x", Number), e.y = p(e, "y", Number), e
                    }(e), E = d, S = [], F = t.width * I.x, N = t.height * I.y; E--;) S.push((o = {
                    x: F,
                    y: N,
                    angle: f,
                    spread: h,
                    startVelocity: g,
                    color: y[E % y.length],
                    shape: C[(c = 0, s = C.length, Math.floor(Math.random() * (s - c)) + c)],
                    ticks: w,
                    decay: m,
                    gravity: b,
                    drift: v,
                    scalar: k
                }, r = void 0, l = void 0, r = o.angle * (Math.PI / 180), l = o.spread * (Math.PI / 180), {
                    x: o.x,
                    y: o.y,
                    wobble: 10 * Math.random(),
                    velocity: .5 * o.startVelocity + Math.random() * o.startVelocity,
                    angle2D: -r + (.5 * l - Math.random() * l),
                    tiltAngle: Math.random() * Math.PI,
                    color: o.color,
                    shape: o.shape,
                    tick: 0,
                    totalTicks: o.ticks,
                    decay: o.decay,
                    drift: o.drift,
                    random: Math.random() + 5,
                    tiltSin: 0,
                    tiltCos: 0,
                    wobbleX: 0,
                    wobbleY: 0,
                    gravity: 3 * o.gravity,
                    ovalScalar: .6,
                    scalar: o.scalar
                }));
                return a ? a.addFettis(S) : (a = T(t, S, u, n, i)).promise
            }

            function g(n) {
                var o = c || p(n, "disableForReducedMotion", Boolean),
                    g = p(n, "zIndex", Number);
                if (o && f) return l((function(t) {
                    t()
                }));
                i && a ? t = a.canvas : i && !t && (t = function(t) {
                    var e = document.createElement("canvas");
                    return e.style.position = "fixed", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.zIndex = t, e
                }(g), document.body.appendChild(t)), r && !d && u(t);
                var m = {
                    width: t.width,
                    height: t.height
                };

                function b() {
                    if (s) {
                        var e = {
                            getBoundingClientRect: function() {
                                if (!i) return t.getBoundingClientRect()
                            }
                        };
                        return u(e), void s.postMessage({
                            resize: {
                                width: e.width,
                                height: e.height
                            }
                        })
                    }
                    m.width = m.height = null
                }

                function v() {
                    a = null, r && e.removeEventListener("resize", b), i && t && (document.body.removeChild(t), t = null, d = !1)
                }
                return s && !d && s.init(t), d = !0, s && (t.__confetti_initialized = !0), r && e.addEventListener("resize", b, !1), s ? s.fire(n, m, v) : h(n, m, v)
            }
            return g.reset = function() {
                s && s.reset(), a && a.reset()
            }, g
        }
        n.exports = E(null, {
            useWorker: !0,
            resize: !0
        }), n.exports.create = E
    }(function() {
        return void 0 !== t ? t : "undefined" != typeof self ? self : this || {}
    }(), e, !1), t.confetti = e.exports
}(window, {});

var colors = ["#0761f2", "#bebbcc"];

function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: {
            x: 0
        },
        colors: colors,
    });
    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: {
            x: 1
        },
        colors: colors,
    });


    if (Date.now() < Date.now() + 20000) {
        requestAnimationFrame(frame);
    }
}

window.onload = frame();

}