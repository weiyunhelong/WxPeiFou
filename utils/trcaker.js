/*!!
 * Piwik - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link https://piwik.org
 * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 * @license https://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */;
if (typeof JSON_PIWIK !== "object" && typeof window.JSON === "object" && window.JSON.stringify && window.JSON.parse) {
  JSON_PIWIK = window.JSON
} else {
  (function () {
    var a = {};
        /*!! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */ (function () {
      var c = typeof define === "function" && define.amd;
      var e = {
        "function": true,
        object: true
      };
      var h = e[typeof a] && a && !a.nodeType && a;
      var i = e[typeof window] && window || this,
        b = h && e[typeof module] && module && !module.nodeType && typeof global == "object" && global;
      if (b && (b.global === b || b.window === b || b.self === b)) {
        i = b
      }
      function j(ab, V) {
        ab || (ab = i.Object());
        V || (V = i.Object());
        var K = ab.Number || i.Number,
          R = ab.String || i.String,
          x = ab.Object || i.Object,
          S = ab.Date || i.Date,
          T = ab.SyntaxError || i.SyntaxError,
          aa = ab.TypeError || i.TypeError,
          J = ab.Math || i.Math,
          Y = ab.JSON || i.JSON;
        if (typeof Y == "object" && Y) {
          V.stringify = Y.stringify;
          V.parse = Y.parse
        }
        var n = x.prototype,
          u = n.toString,
          r, m, L;
        var B = new S(-3509827334573292);
        try {
          B = B.getUTCFullYear() == -109252 && B.getUTCMonth() === 0 && B.getUTCDate() === 1 && B.getUTCHours() ==
            10 && B.getUTCMinutes() == 37 && B.getUTCSeconds() == 6 && B.getUTCMilliseconds() == 708
        } catch (v) { }
        function o(ac) {
          if (o[ac] !== L) {
            return o[ac]
          }
          var ad;
          if (ac == "bug-string-char-index") {
            ad = "a"[0] != "a"
          } else {
            if (ac == "json") {
              ad = o("json-stringify") && o("json-parse")
            } else {
              var ak, ah = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
              if (ac == "json-stringify") {
                var ai = V.stringify,
                  aj = typeof ai == "function" && B;
                if (aj) {
                  (ak = function () {
                    return 1
                  }).toJSON = ak;
                  try {
                    aj = ai(0) === "0" && ai(new K()) === "0" && ai(new R()) == '""' && ai(u) === L &&
                      ai(L) === L && ai() === L && ai(ak) === "1" && ai([ak]) == "[1]" && ai([L]) ==
                      "[null]" && ai(null) == "null" && ai([L, u, null]) == "[null,null,null]" &&
                      ai({
                        a: [ak, true, false, null, "\x00\b\n\f\r\t"]
                      }) == ah && ai(null, ak) === "1" && ai([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                      ai(new S(-8640000000000000)) == '"-271821-04-20T00:00:00.000Z"' && ai(new S(
                        8640000000000000)) == '"+275760-09-13T00:00:00.000Z"' && ai(new S(-
                          62198755200000)) == '"-000001-01-01T00:00:00.000Z"' && ai(new S(-1)) ==
                      '"1969-12-31T23:59:59.999Z"'
                  } catch (ae) {
                    aj = false
                  }
                }
                ad = aj
              }
              if (ac == "json-parse") {
                var ag = V.parse;
                if (typeof ag == "function") {
                  try {
                    if (ag("0") === 0 && !ag(false)) {
                      ak = ag(ah);
                      var af = ak.a.length == 5 && ak.a[0] === 1;
                      if (af) {
                        try {
                          af = !ag('"\t"')
                        } catch (ae) { }
                        if (af) {
                          try {
                            af = ag("01") !== 1
                          } catch (ae) { }
                        }
                        if (af) {
                          try {
                            af = ag("1.") !== 1
                          } catch (ae) { }
                        }
                      }
                    }
                  } catch (ae) {
                    af = false
                  }
                }
                ad = af
              }
            }
          }
          return o[ac] = !!ad
        }
        if (!o("json")) {
          var U = "[object Function]",
            Q = "[object Date]",
            N = "[object Number]",
            O = "[object String]",
            E = "[object Array]",
            A = "[object Boolean]";
          var F = o("bug-string-char-index");
          if (!B) {
            var s = J.floor;
            var Z = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
            var D = function (ac, ad) {
              return Z[ad] + 365 * (ac - 1970) + s((ac - 1969 + (ad = +(ad > 1))) / 4) - s((ac - 1901 +
                ad) / 100) + s((ac - 1601 + ad) / 400)
            }
          }
          if (!(r = n.hasOwnProperty)) {
            r = function (ae) {
              var ac = {}, ad;
              if ((ac.__proto__ = null, ac.__proto__ = {
                toString: 1
              }, ac).toString != u) {
                r = function (ah) {
                  var ag = this.__proto__,
                    af = ah in (this.__proto__ = null, this);
                  this.__proto__ = ag;
                  return af
                }
              } else {
                ad = ac.constructor;
                r = function (ag) {
                  var af = (this.constructor || ad).prototype;
                  return ag in this && !(ag in af && this[ag] === af[ag])
                }
              }
              ac = null;
              return r.call(this, ae)
            }
          }
          m = function (ae, ah) {
            var af = 0,
              ac, ad, ag;
            (ac = function () {
              this.valueOf = 0
            }).prototype.valueOf = 0;
            ad = new ac();
            for (ag in ad) {
              if (r.call(ad, ag)) {
                af++
              }
            }
            ac = ad = null;
            if (!af) {
              ad = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf",
                "hasOwnProperty", "constructor"];
              m = function (aj, an) {
                var am = u.call(aj) == U,
                  al, ak;
                var ai = !am && typeof aj.constructor != "function" && e[typeof aj.hasOwnProperty] &&
                  aj.hasOwnProperty || r;
                for (al in aj) {
                  if (!(am && al == "prototype") && ai.call(aj, al)) {
                    an(al)
                  }
                }
                for (ak = ad.length; al = ad[--ak]; ai.call(aj, al) && an(al)) { }
              }
            } else {
              if (af == 2) {
                m = function (aj, am) {
                  var ai = {}, al = u.call(aj) == U,
                    ak;
                  for (ak in aj) {
                    if (!(al && ak == "prototype") && !r.call(ai, ak) && (ai[ak] = 1) && r.call(aj,
                      ak)) {
                      am(ak)
                    }
                  }
                }
              } else {
                m = function (aj, am) {
                  var al = u.call(aj) == U,
                    ak, ai;
                  for (ak in aj) {
                    if (!(al && ak == "prototype") && r.call(aj, ak) && !(ai = ak === "constructor")) {
                      am(ak)
                    }
                  }
                  if (ai || r.call(aj, (ak = "constructor"))) {
                    am(ak)
                  }
                }
              }
            }
            return m(ae, ah)
          };
          if (!o("json-stringify")) {
            var q = {
              92: "\\\\",
              34: '\\"',
              8: "\\b",
              12: "\\f",
              10: "\\n",
              13: "\\r",
              9: "\\t"
            };
            var I = "000000";
            var t = function (ac, ad) {
              return (I + (ad || 0)).slice(-ac)
            };
            var z = "\\u00";
            var C = function (ai) {
              var ad = '"',
                ag = 0,
                ah = ai.length,
                ac = !F || ah > 10;
              var af = ac && (F ? ai.split("") : ai);
              for (; ag < ah; ag++) {
                var ae = ai.charCodeAt(ag);
                switch (ae) {
                  case 8:
                  case 9:
                  case 10:
                  case 12:
                  case 13:
                  case 34:
                  case 92:
                    ad += q[ae];
                    break;
                  default:
                    if (ae < 32) {
                      ad += z + t(2, ae.toString(16));
                      break
                    }
                    ad += ac ? af[ag] : ai.charAt(ag)
                }
              }
              return ad + '"'
            };
            var p = function (ai, aA, ag, al, ax, ac, aj) {
              var at, ae, ap, az, ay, ak, aw, au, aq, an, ar, ad, ah, af, av, ao;
              try {
                at = aA[ai]
              } catch (am) { }
              if (typeof at == "object" && at) {
                ae = u.call(at);
                if (ae == Q && !r.call(at, "toJSON")) {
                  if (at > -1 / 0 && at < 1 / 0) {
                    if (D) {
                      ay = s(at / 86400000);
                      for (ap = s(ay / 365.2425) + 1970 - 1; D(ap + 1, 0) <= ay; ap++) { }
                      for (az = s((ay - D(ap, 0)) / 30.42); D(ap, az + 1) <= ay; az++) { }
                      ay = 1 + ay - D(ap, az);
                      ak = (at % 86400000 + 86400000) % 86400000;
                      aw = s(ak / 3600000) % 24;
                      au = s(ak / 60000) % 60;
                      aq = s(ak / 1000) % 60;
                      an = ak % 1000
                    } else {
                      ap = at.getUTCFullYear();
                      az = at.getUTCMonth();
                      ay = at.getUTCDate();
                      aw = at.getUTCHours();
                      au = at.getUTCMinutes();
                      aq = at.getUTCSeconds();
                      an = at.getUTCMilliseconds()
                    }
                    at = (ap <= 0 || ap >= 10000 ? (ap < 0 ? "-" : "+") + t(6, ap < 0 ? -ap : ap) :
                      t(4, ap)) + "-" + t(2, az + 1) + "-" + t(2, ay) + "T" + t(2, aw) + ":" + t(
                        2, au) + ":" + t(2, aq) + "." + t(3, an) + "Z"
                  } else {
                    at = null
                  }
                } else {
                  if (typeof at.toJSON == "function" && ((ae != N && ae != O && ae != E) || r.call(at,
                    "toJSON"))) {
                    at = at.toJSON(ai)
                  }
                }
              }
              if (ag) {
                at = ag.call(aA, ai, at)
              }
              if (at === null) {
                return "null"
              }
              ae = u.call(at);
              if (ae == A) {
                return "" + at
              } else {
                if (ae == N) {
                  return at > -1 / 0 && at < 1 / 0 ? "" + at : "null"
                } else {
                  if (ae == O) {
                    return C("" + at)
                  }
                }
              } if (typeof at == "object") {
                for (af = aj.length; af--;) {
                  if (aj[af] === at) {
                    throw aa()
                  }
                }
                aj.push(at);
                ar = [];
                av = ac;
                ac += ax;
                if (ae == E) {
                  for (ah = 0, af = at.length; ah < af; ah++) {
                    ad = p(ah, at, ag, al, ax, ac, aj);
                    ar.push(ad === L ? "null" : ad)
                  }
                  ao = ar.length ? (ax ? "[\n" + ac + ar.join(",\n" + ac) + "\n" + av + "]" : ("[" +
                    ar.join(",") + "]")) : "[]"
                } else {
                  m(al || at, function (aC) {
                    var aB = p(aC, at, ag, al, ax, ac, aj);
                    if (aB !== L) {
                      ar.push(C(aC) + ":" + (ax ? " " : "") + aB)
                    }
                  });
                  ao = ar.length ? (ax ? "{\n" + ac + ar.join(",\n" + ac) + "\n" + av + "}" : ("{" +
                    ar.join(",") + "}")) : "{}"
                }
                aj.pop();
                return ao
              }
            };
            V.stringify = function (ac, ae, af) {
              var ad, al, aj, ai;
              if (e[typeof ae] && ae) {
                if ((ai = u.call(ae)) == U) {
                  al = ae
                } else {
                  if (ai == E) {
                    aj = {};
                    for (var ah = 0, ag = ae.length, ak; ah < ag; ak = ae[ah++], ((ai = u.call(ak)),
                      ai == O || ai == N) && (aj[ak] = 1)) { }
                  }
                }
              }
              if (af) {
                if ((ai = u.call(af)) == N) {
                  if ((af -= af % 1) > 0) {
                    for (ad = "", af > 10 && (af = 10); ad.length < af; ad += " ") { }
                  }
                } else {
                  if (ai == O) {
                    ad = af.length <= 10 ? af : af.slice(0, 10)
                  }
                }
              }
              return p("", (ak = {}, ak[""] = ac, ak), al, aj, ad, "", [])
            }
          }
          if (!o("json-parse")) {
            var M = R.fromCharCode;
            var l = {
              92: "\\",
              34: '"',
              47: "/",
              98: "\b",
              116: "\t",
              110: "\n",
              102: "\f",
              114: "\r"
            };
            var G, X;
            var H = function () {
              G = X = null;
              throw T()
            };
            var y = function () {
              var ah = X,
                af = ah.length,
                ag, ae, ac, ai, ad;
              while (G < af) {
                ad = ah.charCodeAt(G);
                switch (ad) {
                  case 9:
                  case 10:
                  case 13:
                  case 32:
                    G++;
                    break;
                  case 123:
                  case 125:
                  case 91:
                  case 93:
                  case 58:
                  case 44:
                    ag = F ? ah.charAt(G) : ah[G];
                    G++;
                    return ag;
                  case 34:
                    for (ag = "@", G++; G < af;) {
                      ad = ah.charCodeAt(G);
                      if (ad < 32) {
                        H()
                      } else {
                        if (ad == 92) {
                          ad = ah.charCodeAt(++G);
                          switch (ad) {
                            case 92:
                            case 34:
                            case 47:
                            case 98:
                            case 116:
                            case 110:
                            case 102:
                            case 114:
                              ag += l[ad];
                              G++;
                              break;
                            case 117:
                              ae = ++G;
                              for (ac = G + 4; G < ac; G++) {
                                ad = ah.charCodeAt(G);
                                if (!(ad >= 48 && ad <= 57 || ad >= 97 && ad <= 102 || ad >= 65 &&
                                  ad <= 70)) {
                                  H()
                                }
                              }
                              ag += M("0x" + ah.slice(ae, G));
                              break;
                            default:
                              H()
                          }
                        } else {
                          if (ad == 34) {
                            break
                          }
                          ad = ah.charCodeAt(G);
                          ae = G;
                          while (ad >= 32 && ad != 92 && ad != 34) {
                            ad = ah.charCodeAt(++G)
                          }
                          ag += ah.slice(ae, G)
                        }
                      }
                    }
                    if (ah.charCodeAt(G) == 34) {
                      G++;
                      return ag
                    }
                    H();
                  default:
                    ae = G;
                    if (ad == 45) {
                      ai = true;
                      ad = ah.charCodeAt(++G)
                    }
                    if (ad >= 48 && ad <= 57) {
                      if (ad == 48 && ((ad = ah.charCodeAt(G + 1)), ad >= 48 && ad <= 57)) {
                        H()
                      }
                      ai = false;
                      for (; G < af && ((ad = ah.charCodeAt(G)), ad >= 48 && ad <= 57); G++) { }
                      if (ah.charCodeAt(G) == 46) {
                        ac = ++G;
                        for (; ac < af && ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57); ac++) { }
                        if (ac == G) {
                          H()
                        }
                        G = ac
                      }
                      ad = ah.charCodeAt(G);
                      if (ad == 101 || ad == 69) {
                        ad = ah.charCodeAt(++G);
                        if (ad == 43 || ad == 45) {
                          G++
                        }
                        for (ac = G; ac < af && ((ad = ah.charCodeAt(ac)), ad >= 48 && ad <= 57); ac++) { }
                        if (ac == G) {
                          H()
                        }
                        G = ac
                      }
                      return +ah.slice(ae, G)
                    }
                    if (ai) {
                      H()
                    }
                    if (ah.slice(G, G + 4) == "true") {
                      G += 4;
                      return true
                    } else {
                      if (ah.slice(G, G + 5) == "false") {
                        G += 5;
                        return false
                      } else {
                        if (ah.slice(G, G + 4) == "null") {
                          G += 4;
                          return null
                        }
                      }
                    }
                    H()
                }
              }
              return "$"
            };
            var W = function (ad) {
              var ac, ae;
              if (ad == "$") {
                H()
              }
              if (typeof ad == "string") {
                if ((F ? ad.charAt(0) : ad[0]) == "@") {
                  return ad.slice(1)
                }
                if (ad == "[") {
                  ac = [];
                  for (; ; ae || (ae = true)) {
                    ad = y();
                    if (ad == "]") {
                      break
                    }
                    if (ae) {
                      if (ad == ",") {
                        ad = y();
                        if (ad == "]") {
                          H()
                        }
                      } else {
                        H()
                      }
                    }
                    if (ad == ",") {
                      H()
                    }
                    ac.push(W(ad))
                  }
                  return ac
                } else {
                  if (ad == "{") {
                    ac = {};
                    for (; ; ae || (ae = true)) {
                      ad = y();
                      if (ad == "}") {
                        break
                      }
                      if (ae) {
                        if (ad == ",") {
                          ad = y();
                          if (ad == "}") {
                            H()
                          }
                        } else {
                          H()
                        }
                      }
                      if (ad == "," || typeof ad != "string" || (F ? ad.charAt(0) : ad[0]) != "@" ||
                        y() != ":") {
                        H()
                      }
                      ac[ad.slice(1)] = W(y())
                    }
                    return ac
                  }
                }
                H()
              }
              return ad
            };
            var P = function (ae, ad, af) {
              var ac = w(ae, ad, af);
              if (ac === L) {
                delete ae[ad]
              } else {
                ae[ad] = ac
              }
            };
            var w = function (af, ae, ag) {
              var ad = af[ae],
                ac;
              if (typeof ad == "object" && ad) {
                if (u.call(ad) == E) {
                  for (ac = ad.length; ac--;) {
                    P(ad, ac, ag)
                  }
                } else {
                  m(ad, function (ah) {
                    P(ad, ah, ag)
                  })
                }
              }
              return ag.call(af, ae, ad)
            };
            V.parse = function (ae, af) {
              var ac, ad;
              G = 0;
              X = "" + ae;
              ac = W(y());
              if (y() != "$") {
                H()
              }
              G = X = null;
              return af && u.call(af) == U ? w((ad = {}, ad[""] = ac, ad), "", af) : ac
            }
          }
        }
        V.runInContext = j;
        return V
      }
      if (h && !c) {
        j(i, h)
      } else {
        var f = i.JSON,
          k = i.JSON3,
          d = false;
        var g = j(i, (i.JSON3 = {
          noConflict: function () {
            if (!d) {
              d = true;
              i.JSON = f;
              i.JSON3 = k;
              f = k = null
            }
            return g
          }
        }));
        i.JSON = {
          parse: g.parse,
          stringify: g.stringify
        }
      } if (c) {
        define(function () {
          return g
        })
      }
    }).call(this);
    JSON_PIWIK = a
  })()
} if (typeof _paq !== "object") {
  _paq = []
}
if (typeof window.Piwik !== "object") {
  window.Matomo = window.Piwik = (function () {
    var r, b = {}, y = {}, G = document,
      h = navigator,
      W = screen,
      T = window,
      i = T.performance || T.mozPerformance || T.msPerformance || T.webkitPerformance,
      t = T.encodeURIComponent,
      S = T.decodeURIComponent,
      l = unescape,
      I = [],
      E, e, ad = [],
      x = 0,
      m = false;

    function p(ak) {
      try {
        return S(ak)
      } catch (al) {
        return unescape(ak)
      }
    }
    function J(al) {
      var ak = typeof al;
      return ak !== "undefined"
    }
    function A(ak) {
      return typeof ak === "function"
    }
    function V(ak) {
      return typeof ak === "object"
    }
    function w(ak) {
      return typeof ak === "string" || ak instanceof String
    }
    function B(al) {
      if (!al) {
        return true
      }
      var ak;
      var am = true;
      for (ak in al) {
        if (Object.prototype.hasOwnProperty.call(al, ak)) {
          am = false
        }
      }
      return am
    }
    function ag(ak) {
      var al = typeof console;
      if (al !== "undefined" && console && console.error) {
        console.error(ak)
      }
    }
    function ac() {
      var ap, ao, ar, al, ak;
      for (ap = 0; ap < arguments.length; ap += 1) {
        ak = null;
        if (arguments[ap] && arguments[ap].slice) {
          ak = arguments[ap].slice()
        }
        al = arguments[ap];
        ar = al.shift();
        var aq, am;
        var an = w(ar) && ar.indexOf("::") > 0;
        if (an) {
          aq = ar.split("::");
          am = aq[0];
          ar = aq[1];
          if ("object" === typeof e[am] && "function" === typeof e[am][ar]) {
            e[am][ar].apply(e[am], al)
          } else {
            if (ak) {
              ad.push(ak)
            }
          }
        } else {
          for (ao = 0; ao < I.length; ao++) {
            if (w(ar)) {
              am = I[ao];
              var at = ar.indexOf(".") > 0;
              if (at) {
                aq = ar.split(".");
                if (am && "object" === typeof am[aq[0]]) {
                  am = am[aq[0]];
                  ar = aq[1]
                } else {
                  if (ak) {
                    ad.push(ak);
                    break
                  }
                }
              }
              if (am[ar]) {
                am[ar].apply(am, al)
              } else {
                var au = "The method '" + ar +
                  '\' was not found in "_paq" variable.  Please have a look at the Piwik tracker documentation: https://developer.piwik.org/api-reference/tracking-javascript';
                ag(au);
                if (!at) {
                  throw new TypeError(au)
                }
              } if (ar === "addTracker") {
                break
              }
              if (ar === "setTrackerUrl" || ar === "setSiteId") {
                break
              }
            } else {
              ar.apply(I[ao], al)
            }
          }
        }
      }
    }
    function aj(an, am, al, ak) {
      if (an.addEventListener) {
        an.addEventListener(am, al, ak);
        return true
      }
      if (an.attachEvent) {
        return an.attachEvent("on" + am, al)
      }
      an["on" + am] = al
    }
    function n(ak) {
      if (G.readyState === "complete") {
        ak()
      } else {
        if (T.addEventListener) {
          T.addEventListener("load", ak, false)
        } else {
          if (T.attachEvent) {
            T.attachEvent("onload", ak)
          }
        }
      }
    }
    function q(an) {
      var ak = false;
      if (G.attachEvent) {
        ak = G.readyState === "complete"
      } else {
        ak = G.readyState !== "loading"
      } if (ak) {
        an();
        return
      }
      var am;
      if (G.addEventListener) {
        aj(G, "DOMContentLoaded", function al() {
          G.removeEventListener("DOMContentLoaded", al, false);
          if (!ak) {
            ak = true;
            an()
          }
        })
      } else {
        if (G.attachEvent) {
          G.attachEvent("onreadystatechange", function al() {
            if (G.readyState === "complete") {
              G.detachEvent("onreadystatechange", al);
              if (!ak) {
                ak = true;
                an()
              }
            }
          });
          if (G.documentElement.doScroll && T === T.top) {
            (function al() {
              if (!ak) {
                try {
                  G.documentElement.doScroll("left")
                } catch (ao) {
                  setTimeout(al, 0);
                  return
                }
                ak = true;
                an()
              }
            }())
          }
        }
      }
      aj(T, "load", function () {
        if (!ak) {
          ak = true;
          an()
        }
      }, false)
    }
    function Z(al, aq, ar) {
      if (!al) {
        return ""
      }
      var ak = "",
        an, am, ao, ap;
      for (an in b) {
        if (Object.prototype.hasOwnProperty.call(b, an)) {
          ap = b[an] && "function" === typeof b[an][al];
          if (ap) {
            am = b[an][al];
            ao = am(aq || {}, ar);
            if (ao) {
              ak += ao
            }
          }
        }
      }
      return ak
    }
    function ae() {
      var ak;
      m = true;
      Z("unload");
      if (r) {
        do {
          ak = new Date()
        } while (ak.getTimeAlias() < r)
      }
    }
    function o(am, al) {
      var ak = G.createElement("script");
      ak.type = "text/javascript";
      ak.src = am;
      if (ak.readyState) {
        ak.onreadystatechange = function () {
          var an = this.readyState;
          if (an === "loaded" || an === "complete") {
            ak.onreadystatechange = null;
            al()
          }
        }
      } else {
        ak.onload = al
      }
      G.getElementsByTagName("head")[0].appendChild(ak)
    }
    function K() {
      var ak = "";
      try {
        ak = T.top.document.referrer
      } catch (am) {
        if (T.parent) {
          try {
            ak = T.parent.document.referrer
          } catch (al) {
            ak = ""
          }
        }
      }
      if (ak === "") {
        ak = G.referrer
      }
      return ak
    }
    function s(ak) {
      var am = new RegExp("^([a-z]+):"),
        al = am.exec(ak);
      return al ? al[1] : null
    }
    function d(ak) {
      var am = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
        al = am.exec(ak);
      return al ? al[1] : ak
    }
    function af(al, ak) {
      al = String(al);
      return al.lastIndexOf(ak, 0) === 0
    }
    function R(al, ak) {
      al = String(al);
      return al.indexOf(ak, al.length - ak.length) !== -1
    }
    function z(al, ak) {
      al = String(al);
      return al.indexOf(ak) !== -1
    }
    function g(al, ak) {
      al = String(al);
      return al.substr(0, al.length - ak)
    }
    function F(an, am, ap) {
      an = String(an);
      if (!ap) {
        ap = ""
      }
      var ak = an.indexOf("#");
      var aq = an.length;
      if (ak === -1) {
        ak = aq
      }
      var ao = an.substr(0, ak);
      var al = an.substr(ak, aq - ak);
      if (ao.indexOf("?") === -1) {
        ao += "?"
      } else {
        if (!R(ao, "?")) {
          ao += "&"
        }
      }
      return ao + t(am) + "=" + t(ap) + al
    }
    function k(al, am) {
      al = String(al);
      if (al.indexOf("?" + am + "=") === -1 && al.indexOf("&" + am + "=") === -1) {
        return al
      }
      var an = al.indexOf("?");
      if (an === -1) {
        return al
      }
      var ak = al.substr(an + 1);
      var ar = al.substr(0, an);
      if (ak) {
        var at = "";
        var av = ak.indexOf("#");
        if (av !== -1) {
          at = ak.substr(av + 1);
          ak = ak.substr(0, av)
        }
        var ao;
        var aq = ak.split("&");
        var ap = aq.length - 1;
        for (ap; ap >= 0; ap--) {
          ao = aq[ap].split("=")[0];
          if (ao === am) {
            aq.splice(ap, 1)
          }
        }
        var au = aq.join("&");
        if (au) {
          ar = ar + "?" + au
        }
        if (at) {
          ar += "#" + at
        }
      }
      return ar
    }
    function f(am, al) {
      var ak = "[\\?&#]" + al + "=([^&#]*)";
      var ao = new RegExp(ak);
      var an = ao.exec(am);
      return an ? S(an[1]) : ""
    }
    function a(ak) {
      if (ak && String(ak) === ak) {
        return ak.replace(/^\s+|\s+$/g, "")
      }
      return ak
    }
    function D(ak) {
      return unescape(t(ak))
    }
    function ai(aA) {
      var am = function (aG, aF) {
        return (aG << aF) | (aG >>> (32 - aF))
      }, aB = function (aI) {
        var aG = "",
          aH, aF;
        for (aH = 7; aH >= 0; aH--) {
          aF = (aI >>> (aH * 4)) & 15;
          aG += aF.toString(16)
        }
        return aG
      }, ap, aD, aC, al = [],
        au = 1732584193,
        ar = 4023233417,
        aq = 2562383102,
        ao = 271733878,
        an = 3285377520,
        az, ay, ax, aw, av, aE, ak, at = [];
      aA = D(aA);
      ak = aA.length;
      for (aD = 0; aD < ak - 3; aD += 4) {
        aC = aA.charCodeAt(aD) << 24 | aA.charCodeAt(aD + 1) << 16 | aA.charCodeAt(aD + 2) << 8 | aA.charCodeAt(
          aD + 3);
        at.push(aC)
      }
      switch (ak & 3) {
        case 0:
          aD = 2147483648;
          break;
        case 1:
          aD = aA.charCodeAt(ak - 1) << 24 | 8388608;
          break;
        case 2:
          aD = aA.charCodeAt(ak - 2) << 24 | aA.charCodeAt(ak - 1) << 16 | 32768;
          break;
        case 3:
          aD = aA.charCodeAt(ak - 3) << 24 | aA.charCodeAt(ak - 2) << 16 | aA.charCodeAt(ak - 1) << 8 | 128;
          break
      }
      at.push(aD);
      while ((at.length & 15) !== 14) {
        at.push(0)
      }
      at.push(ak >>> 29);
      at.push((ak << 3) & 4294967295);
      for (ap = 0; ap < at.length; ap += 16) {
        for (aD = 0; aD < 16; aD++) {
          al[aD] = at[ap + aD]
        }
        for (aD = 16; aD <= 79; aD++) {
          al[aD] = am(al[aD - 3] ^ al[aD - 8] ^ al[aD - 14] ^ al[aD - 16], 1)
        }
        az = au;
        ay = ar;
        ax = aq;
        aw = ao;
        av = an;
        for (aD = 0; aD <= 19; aD++) {
          aE = (am(az, 5) + ((ay & ax) | (~ay & aw)) + av + al[aD] + 1518500249) & 4294967295;
          av = aw;
          aw = ax;
          ax = am(ay, 30);
          ay = az;
          az = aE
        }
        for (aD = 20; aD <= 39; aD++) {
          aE = (am(az, 5) + (ay ^ ax ^ aw) + av + al[aD] + 1859775393) & 4294967295;
          av = aw;
          aw = ax;
          ax = am(ay, 30);
          ay = az;
          az = aE
        }
        for (aD = 40; aD <= 59; aD++) {
          aE = (am(az, 5) + ((ay & ax) | (ay & aw) | (ax & aw)) + av + al[aD] + 2400959708) & 4294967295;
          av = aw;
          aw = ax;
          ax = am(ay, 30);
          ay = az;
          az = aE
        }
        for (aD = 60; aD <= 79; aD++) {
          aE = (am(az, 5) + (ay ^ ax ^ aw) + av + al[aD] + 3395469782) & 4294967295;
          av = aw;
          aw = ax;
          ax = am(ay, 30);
          ay = az;
          az = aE
        }
        au = (au + az) & 4294967295;
        ar = (ar + ay) & 4294967295;
        aq = (aq + ax) & 4294967295;
        ao = (ao + aw) & 4294967295;
        an = (an + av) & 4294967295
      }
      aE = aB(au) + aB(ar) + aB(aq) + aB(ao) + aB(an);
      return aE.toLowerCase()
    }
    function Y(am, ak, al) {
      if (!am) {
        am = ""
      }
      if (!ak) {
        ak = ""
      }
      if (am === "translate.googleusercontent.com") {
        if (al === "") {
          al = ak
        }
        ak = f(ak, "u");
        am = d(ak)
      } else {
        if (am === "cc.bingj.com" || am === "webcache.googleusercontent.com" || am.slice(0, 5) === "74.6.") {
          ak = G.links[0].href;
          am = d(ak)
        }
      }
      return [am, ak, al]
    }
    function L(al) {
      var ak = al.length;
      if (al.charAt(--ak) === ".") {
        al = al.slice(0, ak)
      }
      if (al.slice(0, 2) === "*.") {
        al = al.slice(1)
      }
      if (al.indexOf("/") !== -1) {
        al = al.substr(0, al.indexOf("/"))
      }
      return al
    }
    function ah(al) {
      al = al && al.text ? al.text : al;
      if (!w(al)) {
        var ak = G.getElementsByTagName("title");
        if (ak && J(ak[0])) {
          al = ak[0].text
        }
      }
      return al
    }
    function P(ak) {
      if (!ak) {
        return []
      }
      if (!J(ak.children) && J(ak.childNodes)) {
        return ak.children
      }
      if (J(ak.children)) {
        return ak.children
      }
      return []
    }
    function U(al, ak) {
      if (!al || !ak) {
        return false
      }
      if (al.contains) {
        return al.contains(ak)
      }
      if (al === ak) {
        return true
      }
      if (al.compareDocumentPosition) {
        return !!(al.compareDocumentPosition(ak) & 16)
      }
      return false
    }
    function M(am, an) {
      if (am && am.indexOf) {
        return am.indexOf(an)
      }
      if (!J(am) || am === null) {
        return -1
      }
      if (!am.length) {
        return -1
      }
      var ak = am.length;
      if (ak === 0) {
        return -1
      }
      var al = 0;
      while (al < ak) {
        if (am[al] === an) {
          return al
        }
        al++
      }
      return -1
    }
    function j(am) {
      if (!am) {
        return false
      }
      function ak(ao, ap) {
        if (T.getComputedStyle) {
          return G.defaultView.getComputedStyle(ao, null)[ap]
        }
        if (ao.currentStyle) {
          return ao.currentStyle[ap]
        }
      }
      function an(ao) {
        ao = ao.parentNode;
        while (ao) {
          if (ao === G) {
            return true
          }
          ao = ao.parentNode
        }
        return false
      }
      function al(aq, ax, ao, au, ar, av, at) {
        var ap = aq.parentNode,
          aw = 1;
        if (!an(aq)) {
          return false
        }
        if (9 === ap.nodeType) {
          return true
        }
        if ("0" === ak(aq, "opacity") || "none" === ak(aq, "display") || "hidden" === ak(aq, "visibility")) {
          return false
        }
        if (!J(ax) || !J(ao) || !J(au) || !J(ar) || !J(av) || !J(at)) {
          ax = aq.offsetTop;
          ar = aq.offsetLeft;
          au = ax + aq.offsetHeight;
          ao = ar + aq.offsetWidth;
          av = aq.offsetWidth;
          at = aq.offsetHeight
        }
        if (am === aq && (0 === at || 0 === av) && "hidden" === ak(aq, "overflow")) {
          return false
        }
        if (ap) {
          if (("hidden" === ak(ap, "overflow") || "scroll" === ak(ap, "overflow"))) {
            if (ar + aw > ap.offsetWidth + ap.scrollLeft || ar + av - aw < ap.scrollLeft || ax + aw > ap.offsetHeight +
              ap.scrollTop || ax + at - aw < ap.scrollTop) {
              return false
            }
          }
          if (aq.offsetParent === ap) {
            ar += ap.offsetLeft;
            ax += ap.offsetTop
          }
          return al(ap, ax, ao, au, ar, av, at)
        }
        return true
      }
      return al(am)
    }
    var ab = {
      htmlCollectionToArray: function (am) {
        var ak = [],
          al;
        if (!am || !am.length) {
          return ak
        }
        for (al = 0; al < am.length; al++) {
          ak.push(am[al])
        }
        return ak
      },
      find: function (ak) {
        if (!document.querySelectorAll || !ak) {
          return []
        }
        var al = document.querySelectorAll(ak);
        return this.htmlCollectionToArray(al)
      },
      findMultiple: function (am) {
        if (!am || !am.length) {
          return []
        }
        var al, an;
        var ak = [];
        for (al = 0; al < am.length; al++) {
          an = this.find(am[al]);
          ak = ak.concat(an)
        }
        ak = this.makeNodesUnique(ak);
        return ak
      },
      findNodesByTagName: function (al, ak) {
        if (!al || !ak || !al.getElementsByTagName) {
          return []
        }
        var am = al.getElementsByTagName(ak);
        return this.htmlCollectionToArray(am)
      },
      makeNodesUnique: function (ak) {
        var ap = [].concat(ak);
        ak.sort(function (ar, aq) {
          if (ar === aq) {
            return 0
          }
          var au = M(ap, ar);
          var at = M(ap, aq);
          if (au === at) {
            return 0
          }
          return au > at ? -1 : 1
        });
        if (ak.length <= 1) {
          return ak
        }
        var al = 0;
        var an = 0;
        var ao = [];
        var am;
        am = ak[al++];
        while (am) {
          if (am === ak[al]) {
            an = ao.push(al)
          }
          am = ak[al++] || null
        }
        while (an--) {
          ak.splice(ao[an], 1)
        }
        return ak
      },
      getAttributeValueFromNode: function (ao, am) {
        if (!this.hasNodeAttribute(ao, am)) {
          return
        }
        if (ao && ao.getAttribute) {
          return ao.getAttribute(am)
        }
        if (!ao || !ao.attributes) {
          return
        }
        var an = (typeof ao.attributes[am]);
        if ("undefined" === an) {
          return
        }
        if (ao.attributes[am].value) {
          return ao.attributes[am].value
        }
        if (ao.attributes[am].nodeValue) {
          return ao.attributes[am].nodeValue
        }
        var al;
        var ak = ao.attributes;
        if (!ak) {
          return
        }
        for (al = 0; al < ak.length; al++) {
          if (ak[al].nodeName === am) {
            return ak[al].nodeValue
          }
        }
        return null
      },
      hasNodeAttributeWithValue: function (al, ak) {
        var am = this.getAttributeValueFromNode(al, ak);
        return !!am
      },
      hasNodeAttribute: function (am, ak) {
        if (am && am.hasAttribute) {
          return am.hasAttribute(ak)
        }
        if (am && am.attributes) {
          var al = (typeof am.attributes[ak]);
          return "undefined" !== al
        }
        return false
      },
      hasNodeCssClass: function (am, ak) {
        if (am && ak && am.className) {
          var al = typeof am.className === "string" ? am.className.split(" ") : [];
          if (-1 !== M(al, ak)) {
            return true
          }
        }
        return false
      },
      findNodesHavingAttribute: function (ao, am, ak) {
        if (!ak) {
          ak = []
        }
        if (!ao || !am) {
          return ak
        }
        var an = P(ao);
        if (!an || !an.length) {
          return ak
        }
        var al, ap;
        for (al = 0; al < an.length; al++) {
          ap = an[al];
          if (this.hasNodeAttribute(ap, am)) {
            ak.push(ap)
          }
          ak = this.findNodesHavingAttribute(ap, am, ak)
        }
        return ak
      },
      findFirstNodeHavingAttribute: function (am, al) {
        if (!am || !al) {
          return
        }
        if (this.hasNodeAttribute(am, al)) {
          return am
        }
        var ak = this.findNodesHavingAttribute(am, al);
        if (ak && ak.length) {
          return ak[0]
        }
      },
      findFirstNodeHavingAttributeWithValue: function (an, am) {
        if (!an || !am) {
          return
        }
        if (this.hasNodeAttributeWithValue(an, am)) {
          return an
        }
        var ak = this.findNodesHavingAttribute(an, am);
        if (!ak || !ak.length) {
          return
        }
        var al;
        for (al = 0; al < ak.length; al++) {
          if (this.getAttributeValueFromNode(ak[al], am)) {
            return ak[al]
          }
        }
      },
      findNodesHavingCssClass: function (ao, an, ak) {
        if (!ak) {
          ak = []
        }
        if (!ao || !an) {
          return ak
        }
        if (ao.getElementsByClassName) {
          var ap = ao.getElementsByClassName(an);
          return this.htmlCollectionToArray(ap)
        }
        var am = P(ao);
        if (!am || !am.length) {
          return []
        }
        var al, aq;
        for (al = 0; al < am.length; al++) {
          aq = am[al];
          if (this.hasNodeCssClass(aq, an)) {
            ak.push(aq)
          }
          ak = this.findNodesHavingCssClass(aq, an, ak)
        }
        return ak
      },
      findFirstNodeHavingClass: function (am, al) {
        if (!am || !al) {
          return
        }
        if (this.hasNodeCssClass(am, al)) {
          return am
        }
        var ak = this.findNodesHavingCssClass(am, al);
        if (ak && ak.length) {
          return ak[0]
        }
      },
      isLinkElement: function (al) {
        if (!al) {
          return false
        }
        var ak = String(al.nodeName).toLowerCase();
        var an = ["a", "area"];
        var am = M(an, ak);
        return am !== -1
      },
      setAnyAttribute: function (al, ak, am) {
        if (!al || !ak) {
          return
        }
        if (al.setAttribute) {
          al.setAttribute(ak, am)
        } else {
          al[ak] = am
        }
      }
    };
    var v = {
      CONTENT_ATTR: "data-track-content",
      CONTENT_CLASS: "piwikTrackContent",
      CONTENT_NAME_ATTR: "data-content-name",
      CONTENT_PIECE_ATTR: "data-content-piece",
      CONTENT_PIECE_CLASS: "piwikContentPiece",
      CONTENT_TARGET_ATTR: "data-content-target",
      CONTENT_TARGET_CLASS: "piwikContentTarget",
      CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
      CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
      location: undefined,
      findContentNodes: function () {
        var al = "." + this.CONTENT_CLASS;
        var ak = "[" + this.CONTENT_ATTR + "]";
        var am = ab.findMultiple([al, ak]);
        return am
      },
      findContentNodesWithinNode: function (an) {
        if (!an) {
          return []
        }
        var al = ab.findNodesHavingCssClass(an, this.CONTENT_CLASS);
        var ak = ab.findNodesHavingAttribute(an, this.CONTENT_ATTR);
        if (ak && ak.length) {
          var am;
          for (am = 0; am < ak.length; am++) {
            al.push(ak[am])
          }
        }
        if (ab.hasNodeAttribute(an, this.CONTENT_ATTR)) {
          al.push(an)
        } else {
          if (ab.hasNodeCssClass(an, this.CONTENT_CLASS)) {
            al.push(an)
          }
        }
        al = ab.makeNodesUnique(al);
        return al
      },
      findParentContentNode: function (al) {
        if (!al) {
          return
        }
        var am = al;
        var ak = 0;
        while (am && am !== G && am.parentNode) {
          if (ab.hasNodeAttribute(am, this.CONTENT_ATTR)) {
            return am
          }
          if (ab.hasNodeCssClass(am, this.CONTENT_CLASS)) {
            return am
          }
          am = am.parentNode;
          if (ak > 1000) {
            break
          }
          ak++
        }
      },
      findPieceNode: function (al) {
        var ak;
        ak = ab.findFirstNodeHavingAttribute(al, this.CONTENT_PIECE_ATTR);
        if (!ak) {
          ak = ab.findFirstNodeHavingClass(al, this.CONTENT_PIECE_CLASS)
        }
        if (ak) {
          return ak
        }
        return al
      },
      findTargetNodeNoDefault: function (ak) {
        if (!ak) {
          return
        }
        var al = ab.findFirstNodeHavingAttributeWithValue(ak, this.CONTENT_TARGET_ATTR);
        if (al) {
          return al
        }
        al = ab.findFirstNodeHavingAttribute(ak, this.CONTENT_TARGET_ATTR);
        if (al) {
          return al
        }
        al = ab.findFirstNodeHavingClass(ak, this.CONTENT_TARGET_CLASS);
        if (al) {
          return al
        }
      },
      findTargetNode: function (ak) {
        var al = this.findTargetNodeNoDefault(ak);
        if (al) {
          return al
        }
        return ak
      },
      findContentName: function (al) {
        if (!al) {
          return
        }
        var ao = ab.findFirstNodeHavingAttributeWithValue(al, this.CONTENT_NAME_ATTR);
        if (ao) {
          return ab.getAttributeValueFromNode(ao, this.CONTENT_NAME_ATTR)
        }
        var ak = this.findContentPiece(al);
        if (ak) {
          return this.removeDomainIfIsInLink(ak)
        }
        if (ab.hasNodeAttributeWithValue(al, "title")) {
          return ab.getAttributeValueFromNode(al, "title")
        }
        var am = this.findPieceNode(al);
        if (ab.hasNodeAttributeWithValue(am, "title")) {
          return ab.getAttributeValueFromNode(am, "title")
        }
        var an = this.findTargetNode(al);
        if (ab.hasNodeAttributeWithValue(an, "title")) {
          return ab.getAttributeValueFromNode(an, "title")
        }
      },
      findContentPiece: function (al) {
        if (!al) {
          return
        }
        var an = ab.findFirstNodeHavingAttributeWithValue(al, this.CONTENT_PIECE_ATTR);
        if (an) {
          return ab.getAttributeValueFromNode(an, this.CONTENT_PIECE_ATTR)
        }
        var ak = this.findPieceNode(al);
        var am = this.findMediaUrlInNode(ak);
        if (am) {
          return this.toAbsoluteUrl(am)
        }
      },
      findContentTarget: function (am) {
        if (!am) {
          return
        }
        var an = this.findTargetNode(am);
        if (ab.hasNodeAttributeWithValue(an, this.CONTENT_TARGET_ATTR)) {
          return ab.getAttributeValueFromNode(an, this.CONTENT_TARGET_ATTR)
        }
        var al;
        if (ab.hasNodeAttributeWithValue(an, "href")) {
          al = ab.getAttributeValueFromNode(an, "href");
          return this.toAbsoluteUrl(al)
        }
        var ak = this.findPieceNode(am);
        if (ab.hasNodeAttributeWithValue(ak, "href")) {
          al = ab.getAttributeValueFromNode(ak, "href");
          return this.toAbsoluteUrl(al)
        }
      },
      isSameDomain: function (ak) {
        if (!ak || !ak.indexOf) {
          return false
        }
        if (0 === ak.indexOf(this.getLocation().origin)) {
          return true
        }
        var al = ak.indexOf(this.getLocation().host);
        if (8 >= al && 0 <= al) {
          return true
        }
        return false
      },
      removeDomainIfIsInLink: function (am) {
        var al = "^https?://[^/]+";
        var ak = "^.*//[^/]+";
        if (am && am.search && -1 !== am.search(new RegExp(al)) && this.isSameDomain(am)) {
          am = am.replace(new RegExp(ak), "");
          if (!am) {
            am = "/"
          }
        }
        return am
      },
      findMediaUrlInNode: function (ao) {
        if (!ao) {
          return
        }
        var am = ["img", "embed", "video", "audio"];
        var ak = ao.nodeName.toLowerCase();
        if (-1 !== M(am, ak) && ab.findFirstNodeHavingAttributeWithValue(ao, "src")) {
          var an = ab.findFirstNodeHavingAttributeWithValue(ao, "src");
          return ab.getAttributeValueFromNode(an, "src")
        }
        if (ak === "object" && ab.hasNodeAttributeWithValue(ao, "data")) {
          return ab.getAttributeValueFromNode(ao, "data")
        }
        if (ak === "object") {
          var ap = ab.findNodesByTagName(ao, "param");
          if (ap && ap.length) {
            var al;
            for (al = 0; al < ap.length; al++) {
              if ("movie" === ab.getAttributeValueFromNode(ap[al], "name") && ab.hasNodeAttributeWithValue(
                ap[al], "value")) {
                return ab.getAttributeValueFromNode(ap[al], "value")
              }
            }
          }
          var aq = ab.findNodesByTagName(ao, "embed");
          if (aq && aq.length) {
            return this.findMediaUrlInNode(aq[0])
          }
        }
      },
      trim: function (ak) {
        return a(ak)
      },
      isOrWasNodeInViewport: function (ap) {
        if (!ap || !ap.getBoundingClientRect || ap.nodeType !== 1) {
          return true
        }
        var ao = ap.getBoundingClientRect();
        var an = G.documentElement || {};
        var am = ao.top < 0;
        if (am && ap.offsetTop) {
          am = (ap.offsetTop + ao.height) > 0
        }
        var al = an.clientWidth;
        if (T.innerWidth && al > T.innerWidth) {
          al = T.innerWidth
        }
        var ak = an.clientHeight;
        if (T.innerHeight && ak > T.innerHeight) {
          ak = T.innerHeight
        }
        return ((ao.bottom > 0 || am) && ao.right > 0 && ao.left < al && ((ao.top < ak) || am))
      },
      isNodeVisible: function (al) {
        var ak = j(al);
        var am = this.isOrWasNodeInViewport(al);
        return ak && am
      },
      buildInteractionRequestParams: function (ak, al, am, an) {
        var ao = "";
        if (ak) {
          ao += "c_i=" + t(ak)
        }
        if (al) {
          if (ao) {
            ao += "&"
          }
          ao += "c_n=" + t(al)
        }
        if (am) {
          if (ao) {
            ao += "&"
          }
          ao += "c_p=" + t(am)
        }
        if (an) {
          if (ao) {
            ao += "&"
          }
          ao += "c_t=" + t(an)
        }
        return ao
      },
      buildImpressionRequestParams: function (ak, al, am) {
        var an = "c_n=" + t(ak) + "&c_p=" + t(al);
        if (am) {
          an += "&c_t=" + t(am)
        }
        return an
      },
      buildContentBlock: function (am) {
        if (!am) {
          return
        }
        var ak = this.findContentName(am);
        var al = this.findContentPiece(am);
        var an = this.findContentTarget(am);
        ak = this.trim(ak);
        al = this.trim(al);
        an = this.trim(an);
        return {
          name: ak || "Unknown",
          piece: al || "Unknown",
          target: an || ""
        }
      },
      collectContent: function (an) {
        if (!an || !an.length) {
          return []
        }
        var am = [];
        var ak, al;
        for (ak = 0; ak < an.length; ak++) {
          al = this.buildContentBlock(an[ak]);
          if (J(al)) {
            am.push(al)
          }
        }
        return am
      },
      setLocation: function (ak) {
        this.location = ak
      },
      getLocation: function () {
        var ak = this.location || T.location;
        if (!ak.origin) {
          ak.origin = ak.protocol + "//" + ak.hostname + (ak.port ? ":" + ak.port : "")
        }
        return ak
      },
      toAbsoluteUrl: function (al) {
        if ((!al || String(al) !== al) && al !== "") {
          return al
        }
        if ("" === al) {
          return this.getLocation().href
        }
        if (al.search(/^\/\//) !== -1) {
          return this.getLocation().protocol + al
        }
        if (al.search(/:\/\//) !== -1) {
          return al
        }
        if (0 === al.indexOf("#")) {
          return this.getLocation().origin + this.getLocation().pathname + al
        }
        if (0 === al.indexOf("?")) {
          return this.getLocation().origin + this.getLocation().pathname + al
        }
        if (0 === al.search("^[a-zA-Z]{2,11}:")) {
          return al
        }
        if (al.search(/^\//) !== -1) {
          return this.getLocation().origin + al
        }
        var ak = "(.*/)";
        var am = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(ak))[0];
        return am + al
      },
      isUrlToCurrentDomain: function (al) {
        var am = this.toAbsoluteUrl(al);
        if (!am) {
          return false
        }
        var ak = this.getLocation().origin;
        if (ak === am) {
          return true
        }
        if (0 === String(am).indexOf(ak)) {
          if (":" === String(am).substr(ak.length, 1)) {
            return false
          }
          return true
        }
        return false
      },
      setHrefAttribute: function (al, ak) {
        if (!al || !ak) {
          return
        }
        ab.setAnyAttribute(al, "href", ak)
      },
      shouldIgnoreInteraction: function (am) {
        var al = ab.hasNodeAttribute(am, this.CONTENT_IGNOREINTERACTION_ATTR);
        var ak = ab.hasNodeCssClass(am, this.CONTENT_IGNOREINTERACTION_CLASS);
        return al || ak
      }
    };

    function O(al, ao) {
      if (ao) {
        return ao
      }
      al = v.toAbsoluteUrl(al);
      if (z(al, "?")) {
        var an = al.indexOf("?");
        al = al.slice(0, an)
      }
      if (R(al, "piwik.php")) {
        al = g(al, "piwik.php".length)
      } else {
        if (R(al, ".php")) {
          var ak = al.lastIndexOf("/");
          var am = 1;
          al = al.slice(0, ak + am)
        }
      } if (R(al, "/js/")) {
        al = g(al, "js/".length)
      }
      return al
    }
    function N(aq) {
      var at = "Piwik_Overlay";
      var al = new RegExp(
        "index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$");
      var am = al.exec(G.referrer);
      if (am) {
        var ao = am[1];
        if (ao !== String(aq)) {
          return false
        }
        var ap = am[2],
          ak = am[3],
          an = am[4];
        if (!an) {
          an = ""
        } else {
          if (an.indexOf("&segment=") === 0) {
            an = an.substr("&segment=".length)
          }
        }
        T.name = at + "###" + ap + "###" + ak + "###" + an
      }
      var ar = T.name.split("###");
      return ar.length === 4 && ar[0] === at
    }
    function X(al, ar, an) {
      var aq = T.name.split("###"),
        ap = aq[1],
        ak = aq[2],
        ao = aq[3],
        am = O(al, ar);
      o(am + "plugins/Overlay/client/client.js?v=1", function () {
        Piwik_Overlay_Client.initialize(am, an, ap, ak, ao)
      })
    }
    function u() {
      var am;
      try {
        am = T.frameElement
      } catch (al) {
        return true
      }
      if (J(am)) {
        return (am && String(am.nodeName).toLowerCase() === "iframe") ? true : false
      }
      try {
        return T.self !== T.top
      } catch (ak) {
        return true
      }
    }
    function Q(b5, b0) {
      var bz = this,
        a6 = "mtm_consent",
        cC = "mtm_consent_removed",
        bV = Y(G.domain, T.location.href, K()),
        cK = L(bV[0]),
        bE = p(bV[1]),
        bf = p(bV[2]),
        cI = false,
        b9 = "GET",
        cX = b9,
        aC = "application/x-www-form-urlencoded; charset=UTF-8",
        co = aC,
        ay = b5 || "",
        by = "",
        cO = "",
        bX = b0 || "",
        bq = "",
        bF = "",
        aX, bb = "",
        cU = ["7z", "aac", "apk", "arc", "arj", "asf", "asx", "avi", "azw3", "bin", "csv", "deb", "dmg", "doc",
          "docx", "epub", "exe", "flv", "gif", "gz", "gzip", "hqx", "ibooks", "jar", "jpg", "jpeg", "js",
          "mobi", "mp2", "mp3", "mp4", "mpg", "mpeg", "mov", "movie", "msi", "msp", "odb", "odf", "odg",
          "ods", "odt", "ogg", "ogv", "pdf", "phps", "png", "ppt", "pptx", "qt", "qtm", "ra", "ram",
          "rar", "rpm", "sea", "sit", "tar", "tbz", "tbz2", "bz", "bz2", "tgz", "torrent", "txt", "wav",
          "wma", "wmv", "wpd", "xls", "xlsx", "xml", "z", "zip"],
        ar = [cK],
        br = [],
        bC = [],
        a1 = [],
        bA = 500,
        cy, aY, bI, bG, ak, ci = ["pk_campaign", "piwik_campaign", "utm_campaign", "utm_source", "utm_medium"],
        bx = ["pk_kwd", "piwik_kwd", "utm_term"],
        bc = "_pk_",
        aq = "pk_vid",
        aS = 180,
        cM, bh, bJ = false,
        bd = false,
        cG, a7, bn, cz = 33955200000,
        cg = 1800000,
        cT = 15768000000,
        aV = true,
        ce = 0,
        bH = false,
        aJ = false,
        b2, bN = {}, cd = {}, be = {}, bl = 200,
        cP = {}, cV = {}, b1 = [],
        b6 = false,
        cs = false,
        al = false,
        cW = false,
        cD = false,
        aH = false,
        a5 = u(),
        cN = null,
        b3, aK, bs, bY = ai,
        bg, aE, cj = 0,
        bm = ["id", "ses", "cvar", "ref"],
        cr = false,
        bt = null,
        cA = [];
      try {
        bb = G.title
      } catch (cp) {
        bb = ""
      }
      function c0(db, c9, c8, da, c7, c6) {
        if (bd) {
          return
        }
        var c5;
        if (c8) {
          c5 = new Date();
          c5.setTime(c5.getTime() + c8)
        }
        G.cookie = db + "=" + t(c9) + (c8 ? ";expires=" + c5.toGMTString() : "") + ";path=" + (da || "/") + (c7 ?
          ";domain=" + c7 : "") + (c6 ? ";secure" : "")
      }
      function ax(c7) {
        if (bd) {
          return 0
        }
        var c5 = new RegExp("(^|;)[ ]*" + c7 + "=([^;]*)"),
          c6 = c5.exec(G.cookie);
        return c6 ? S(c6[2]) : 0
      }
      bt = !ax(cC);

      function bT(c5) {
        var c6;
        c5 = k(c5, aq);
        if (bG) {
          c6 = new RegExp("#.*");
          return c5.replace(c6, "")
        }
        return c5
      }
      function bM(c7, c5) {
        var c8 = s(c5),
          c6;
        if (c8) {
          return c5
        }
        if (c5.slice(0, 1) === "/") {
          return s(c7) + "://" + d(c7) + c5
        }
        c7 = bT(c7);
        c6 = c7.indexOf("?");
        if (c6 >= 0) {
          c7 = c7.slice(0, c6)
        }
        c6 = c7.lastIndexOf("/");
        if (c6 !== c7.length - 1) {
          c7 = c7.slice(0, c6 + 1)
        }
        return c7 + c5
      }
      function cx(c7, c5) {
        var c6;
        c7 = String(c7).toLowerCase();
        c5 = String(c5).toLowerCase();
        if (c7 === c5) {
          return true
        }
        if (c5.slice(0, 1) === ".") {
          if (c7 === c5.slice(1)) {
            return true
          }
          c6 = c7.length - c5.length;
          if ((c6 > 0) && (c7.slice(c6) === c5)) {
            return true
          }
        }
        return false
      }
      function cc(c5) {
        var c6 = document.createElement("a");
        if (c5.indexOf("//") !== 0 && c5.indexOf("http") !== 0) {
          if (c5.indexOf("*") === 0) {
            c5 = c5.substr(1)
          }
          if (c5.indexOf(".") === 0) {
            c5 = c5.substr(1)
          }
          c5 = "http://" + c5
        }
        c6.href = v.toAbsoluteUrl(c5);
        if (c6.pathname) {
          return c6.pathname
        }
        return ""
      }
      function aW(c6, c5) {
        if (!af(c5, "/")) {
          c5 = "/" + c5
        }
        if (!af(c6, "/")) {
          c6 = "/" + c6
        }
        var c7 = (c5 === "/" || c5 === "/*");
        if (c7) {
          return true
        }
        if (c6 === c5) {
          return true
        }
        c5 = String(c5).toLowerCase();
        c6 = String(c6).toLowerCase();
        if (R(c5, "*")) {
          c5 = c5.slice(0, -1);
          c7 = (!c5 || c5 === "/");
          if (c7) {
            return true
          }
          if (c6 === c5) {
            return true
          }
          return c6.indexOf(c5) === 0
        }
        if (!R(c6, "/")) {
          c6 += "/"
        }
        if (!R(c5, "/")) {
          c5 += "/"
        }
        return c6.indexOf(c5) === 0
      }
      function an(c9, db) {
        var c6, c5, c7, c8, da;
        for (c6 = 0; c6 < ar.length; c6++) {
          c8 = L(ar[c6]);
          da = cc(ar[c6]);
          if (cx(c9, c8) && aW(db, da)) {
            return true
          }
        }
        return false
      }
      function aO(c8) {
        var c6, c5, c7;
        for (c6 = 0; c6 < ar.length; c6++) {
          c5 = L(ar[c6].toLowerCase());
          if (c8 === c5) {
            return true
          }
          if (c5.slice(0, 1) === ".") {
            if (c8 === c5.slice(1)) {
              return true
            }
            c7 = c8.length - c5.length;
            if ((c7 > 0) && (c8.slice(c7) === c5)) {
              return true
            }
          }
        }
        return false
      }
      function ch(c5, c7) {
        c5 = c5.replace("send_image=0", "send_image=1");
        var c6 = new Image(1, 1);
        c6.onload = function () {
          E = 0;
          if (typeof c7 === "function") {
            c7()
          }
        };
        c6.src = ay + (ay.indexOf("?") < 0 ? "?" : "&") + c5
      }
      function aZ(c6) {
        var da = "object" === typeof h && "function" === typeof h.sendBeacon && "function" === typeof Blob;
        if (!da) {
          return false
        }
        var c9 = {
          type: "application/x-www-form-urlencoded; charset=UTF-8"
        };
        var c8 = false;
        try {
          var c5 = new Blob([c6], c9);
          c8 = h.sendBeacon(ay, c5)
        } catch (c7) {
          return false
        }
        return c8
      }
      function cS(c6, c7, c5) {
        if (!J(c5) || null === c5) {
          c5 = true
        }
        if (m && aZ(c6)) {
          return
        }
        setTimeout(function () {
          if (m && aZ(c6)) {
            return
          }
          var da;
          try {
            var c9 = T.XMLHttpRequest ? new T.XMLHttpRequest() : T.ActiveXObject ? new ActiveXObject(
              "Microsoft.XMLHTTP") : null;
            c9.open("POST", ay, true);
            c9.onreadystatechange = function () {
              if (this.readyState === 4 && !(this.status >= 200 && this.status < 300)) {
                var db = m && aZ(c6);
                if (!db && c5) {
                  ch(c6, c7)
                }
              } else {
                if (this.readyState === 4 && (typeof c7 === "function")) {
                  c7()
                }
              }
            };
            c9.setRequestHeader("Content-Type", co);
            c9.send(c6)
          } catch (c8) {
            da = m && aZ(c6);
            if (!da && c5) {
              ch(c6, c7)
            }
          }
        }, 50)
      }
      function b7(c6) {
        var c5 = new Date();
        var c7 = c5.getTime() + c6;
        if (!r || c7 > r) {
          r = c7
        }
      }
      function cf(c5) {
        if (b3 || !aY || !bt) {
          return
        }
        b3 = setTimeout(function c6() {
          b3 = null;
          if (!a5) {
            a5 = (!G.hasFocus || G.hasFocus())
          }
          if (!a5) {
            cf(aY);
            return
          }
          if (bI()) {
            return
          }
          var c7 = new Date(),
            c8 = aY - (c7.getTime() - cN);
          c8 = Math.min(aY, c8);
          cf(c8)
        }, c5 || aY)
      }
      function bB() {
        if (!b3) {
          return
        }
        clearTimeout(b3);
        b3 = null
      }
      function a3() {
        a5 = true;
        if (bI()) {
          return
        }
        cf()
      }
      function at() {
        bB()
      }
      function c2() {
        if (aH || !aY) {
          return
        }
        aH = true;
        aj(T, "focus", a3);
        aj(T, "blur", at);
        cf()
      }
      function ct(c9) {
        var c6 = new Date();
        var c5 = c6.getTime();
        cN = c5;
        if (cs && c5 < cs) {
          var c7 = cs - c5;
          setTimeout(c9, c7);
          b7(c7 + 50);
          cs += 50;
          return
        }
        if (cs === false) {
          var c8 = 800;
          cs = c5 + c8
        }
        c9()
      }
      function bw(c6, c5, c7) {
        if (!bt) {
          cA.push(c6);
          return
        }
        if (!cG && c6) {
          if (cr && bt) {
            c6 += "&consent=1"
          }
          ct(function () {
            if (cX === "POST" || String(c6).length > 2000) {
              cS(c6, c7)
            } else {
              ch(c6, c7)
            }
            b7(c5)
          })
        }
        if (!aH) {
          c2()
        } else {
          cf()
        }
      }
      function cb(c5) {
        if (cG) {
          return false
        }
        return (c5 && c5.length)
      }
      function c1(c7, c5) {
        if (!cb(c7)) {
          return
        }
        if (!bt) {
          cA.push(c7);
          return
        }
        var c6 = '{"requests":["?' + c7.join('","?') + '"]}';
        ct(function () {
          cS(c6, null, false);
          b7(c5)
        })
      }
      function aM(c5) {
        return bc + c5 + "." + bX + "." + bg
      }
      function bW() {
        if (bd) {
          return "0"
        }
        if (!J(h.cookieEnabled)) {
          var c5 = aM("testcookie");
          c0(c5, "1");
          return ax(c5) === "1" ? "1" : "0"
        }
        return h.cookieEnabled ? "1" : "0"
      }
      function ba() {
        bg = bY((cM || cK) + (bh || "/")).slice(0, 4)
      }
      function bO() {
        var c6 = aM("cvar"),
          c5 = ax(c6);
        if (c5.length) {
          c5 = JSON_PIWIK.parse(c5);
          if (V(c5)) {
            return c5
          }
        }
        return {}
      }
      function cu() {
        if (aJ === false) {
          aJ = bO()
        }
      }
      function cH() {
        return bY((h.userAgent || "") + (h.platform || "") + JSON_PIWIK.stringify(cV) + (new Date()).getTime() +
          Math.random()).slice(0, 16)
      }
      function au() {
        return bY((h.userAgent || "") + (h.platform || "") + JSON_PIWIK.stringify(cV)).slice(0, 6)
      }
      function a8() {
        return Math.floor((new Date()).getTime() / 1000)
      }
      function aD() {
        var c6 = a8();
        var c7 = au();
        var c5 = String(c6) + c7;
        return c5
      }
      function cR(c7) {
        c7 = String(c7);
        var da = au();
        var c8 = da.length;
        var c9 = c7.substr(-1 * c8, c8);
        var c6 = parseInt(c7.substr(0, c7.length - c8), 10);
        if (c6 && c9 && c9 === da) {
          var c5 = a8();
          if (aS <= 0) {
            return true
          }
          if (c5 >= c6 && c5 <= (c6 + aS)) {
            return true
          }
        }
        return false
      }
      function c3(c5) {
        if (!cD) {
          return ""
        }
        var c9 = f(c5, aq);
        if (!c9) {
          return ""
        }
        c9 = String(c9);
        var c7 = new RegExp("^[a-zA-Z0-9]+$");
        if (c9.length === 32 && c7.test(c9)) {
          var c6 = c9.substr(16, 32);
          if (cR(c6)) {
            var c8 = c9.substr(0, 16);
            return c8
          }
        }
        return ""
      }
      function cE() {
        if (!bF) {
          bF = c3(bE)
        }
        var c7 = new Date(),
          c5 = Math.round(c7.getTime() / 1000),
          c6 = aM("id"),
          da = ax(c6),
          c9, c8;
        if (da) {
          c9 = da.split(".");
          c9.unshift("0");
          if (bF.length) {
            c9[1] = bF
          }
          return c9
        }
        if (bF.length) {
          c8 = bF
        } else {
          if ("0" === bW()) {
            c8 = ""
          } else {
            c8 = cH()
          }
        }
        c9 = ["1", c8, c5, 0, c5, "", ""];
        return c9
      }
      function aR() {
        var dc = cE(),
          c8 = dc[0],
          c9 = dc[1],
          c6 = dc[2],
          c5 = dc[3],
          da = dc[4],
          c7 = dc[5];
        if (!J(dc[6])) {
          dc[6] = ""
        }
        var db = dc[6];
        return {
          newVisitor: c8,
          uuid: c9,
          createTs: c6,
          visitCount: c5,
          currentVisitTs: da,
          lastVisitTs: c7,
          lastEcommerceOrderTs: db
        }
      }
      function aB() {
        var c8 = new Date(),
          c6 = c8.getTime(),
          c9 = aR().createTs;
        var c5 = parseInt(c9, 10);
        var c7 = (c5 * 1000) + cz - c6;
        return c7
      }
      function aF(c5) {
        if (!bX) {
          return
        }
        var c7 = new Date(),
          c6 = Math.round(c7.getTime() / 1000);
        if (!J(c5)) {
          c5 = aR()
        }
        var c8 = c5.uuid + "." + c5.createTs + "." + c5.visitCount + "." + c6 + "." + c5.lastVisitTs + "." + c5
          .lastEcommerceOrderTs;
        c0(aM("id"), c8, aB(), bh, cM, bJ)
      }
      function bD() {
        var c5 = ax(aM("ref"));
        if (c5.length) {
          try {
            c5 = JSON_PIWIK.parse(c5);
            if (V(c5)) {
              return c5
            }
          } catch (c6) { }
        }
        return ["", "", 0, ""]
      }
      function bP(c7, c6, c5) {
        c0(c7, "", -86400, c6, c5)
      }
      function bo(c6) {
        var c5 = "testvalue";
        c0("test", c5, 10000, null, c6);
        if (ax("test") === c5) {
          bP("test", null, c6);
          return true
        }
        return false
      }
      function az() {
        var c6 = bd;
        bd = false;
        var c5, c7;
        for (c5 = 0; c5 < bm.length; c5++) {
          c7 = aM(bm[c5]);
          if (c7 !== cC && c7 !== a6 && 0 !== ax(c7)) {
            bP(c7, bh, cM)
          }
        }
        bd = c6
      }
      function bU(c5) {
        bX = c5;
        aF()
      }
      function c4(c9) {
        if (!c9 || !V(c9)) {
          return
        }
        var c8 = [];
        var c7;
        for (c7 in c9) {
          if (Object.prototype.hasOwnProperty.call(c9, c7)) {
            c8.push(c7)
          }
        }
        var da = {};
        c8.sort();
        var c5 = c8.length;
        var c6;
        for (c6 = 0; c6 < c5; c6++) {
          da[c8[c6]] = c9[c8[c6]]
        }
        return da
      }
      function b4() {
        c0(aM("ses"), "*", cg, bh, cM, bJ)
      }
      function a9() {
        var c8 = "";
        var c6 = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var c7 = c6.length;
        var c5;
        for (c5 = 0; c5 < 6; c5++) {
          c8 += c6.charAt(Math.floor(Math.random() * c7))
        }
        return c8
      }
      function ck(c7, dt, du, c8) {
        var ds, c6 = new Date(),
          df = Math.round(c6.getTime() / 1000),
          dc, dr, c9 = 1024,
          dz, dg, dp = aJ,
          da = aM("ses"),
          dm = aM("ref"),
          dj = aM("cvar"),
          dk = ax(da),
          dq = bD(),
          dw = aX || bE,
          dd, c5;
        if (bd) {
          az()
        }
        if (cG) {
          return ""
        }
        var dl = aR();
        if (!J(c8)) {
          c8 = ""
        }
        var di = G.characterSet || G.charset;
        if (!di || di.toLowerCase() === "utf-8") {
          di = null
        }
        dd = dq[0];
        c5 = dq[1];
        dc = dq[2];
        dr = dq[3];
        if (!dk) {
          var dv = cg / 1000;
          if (!dl.lastVisitTs || (df - dl.lastVisitTs) > dv) {
            dl.visitCount++;
            dl.lastVisitTs = dl.currentVisitTs
          }
          if (!bn || !dd.length) {
            for (ds in ci) {
              if (Object.prototype.hasOwnProperty.call(ci, ds)) {
                dd = f(dw, ci[ds]);
                if (dd.length) {
                  break
                }
              }
            }
            for (ds in bx) {
              if (Object.prototype.hasOwnProperty.call(bx, ds)) {
                c5 = f(dw, bx[ds]);
                if (c5.length) {
                  break
                }
              }
            }
          }
          dz = d(bf);
          dg = dr.length ? d(dr) : "";
          if (dz.length && !aO(dz) && (!bn || !dg.length || aO(dg))) {
            dr = bf
          }
          if (dr.length || dd.length) {
            dc = df;
            dq = [dd, c5, dc, bT(dr.slice(0, c9))];
            c0(dm, JSON_PIWIK.stringify(dq), cT, bh, cM)
          }
        }
        c7 += "&idsite=" + bX + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + c6.getHours() + "&m=" +
          c6.getMinutes() + "&s=" + c6.getSeconds() + "&url=" + t(bT(dw)) + (bf.length ? "&urlref=" + t(bT(bf)) :
            "") + ((bq && bq.length) ? "&uid=" + t(bq) : "") + "&_id=" + dl.uuid + "&_idts=" + dl.createTs +
          "&_idvc=" + dl.visitCount + "&_idn=" + dl.newVisitor + (dd.length ? "&_rcn=" + t(dd) : "") + (c5.length ?
            "&_rck=" + t(c5) : "") + "&_refts=" + dc + "&_viewts=" + dl.lastVisitTs + (String(dl.lastEcommerceOrderTs)
              .length ? "&_ects=" + dl.lastEcommerceOrderTs : "") + (String(dr).length ? "&_ref=" + t(bT(dr.slice(
                0, c9))) : "") + (di ? "&cs=" + t(di) : "") + "&send_image=0";
        for (ds in cV) {
          if (Object.prototype.hasOwnProperty.call(cV, ds)) {
            c7 += "&" + ds + "=" + cV[ds]
          }
        }
        var dy = [];
        if (dt) {
          for (ds in dt) {
            if (Object.prototype.hasOwnProperty.call(dt, ds) && /^dimension\d+$/.test(ds)) {
              var db = ds.replace("dimension", "");
              dy.push(parseInt(db, 10));
              dy.push(String(db));
              c7 += "&" + ds + "=" + dt[ds];
              delete dt[ds]
            }
          }
        }
        if (dt && B(dt)) {
          dt = null
        }
        for (ds in be) {
          if (Object.prototype.hasOwnProperty.call(be, ds)) {
            var dh = (-1 === M(dy, ds));
            if (dh) {
              c7 += "&dimension" + ds + "=" + be[ds]
            }
          }
        }
        if (dt) {
          c7 += "&data=" + t(JSON_PIWIK.stringify(dt))
        } else {
          if (ak) {
            c7 += "&data=" + t(JSON_PIWIK.stringify(ak))
          }
        }
        function de(dA, dB) {
          var dC = JSON_PIWIK.stringify(dA);
          if (dC.length > 2) {
            return "&" + dB + "=" + t(dC)
          }
          return ""
        }
        var dx = c4(bN);
        var dn = c4(cd);
        c7 += de(dx, "cvar");
        c7 += de(dn, "e_cvar");
        if (aJ) {
          c7 += de(aJ, "_cvar");
          for (ds in dp) {
            if (Object.prototype.hasOwnProperty.call(dp, ds)) {
              if (aJ[ds][0] === "" || aJ[ds][1] === "") {
                delete aJ[ds]
              }
            }
          }
          if (bH) {
            c0(dj, JSON_PIWIK.stringify(aJ), cg, bh, cM)
          }
        }
        if (aV) {
          if (ce) {
            c7 += ">_ms=" + ce
          } else {
            if (i && i.timing && i.timing.requestStart && i.timing.responseEnd) {
              c7 += ">_ms=" + (i.timing.responseEnd - i.timing.requestStart)
            }
          }
        }
        if (aE) {
          c7 += "&pv_id=" + aE
        }
        dl.lastEcommerceOrderTs = J(c8) && String(c8).length ? c8 : dl.lastEcommerceOrderTs;
        aF(dl);
        b4();
        c7 += Z(du, {
          tracker: bz,
          request: c7
        });
        if (cO.length) {
          c7 += "&" + cO
        }
        if (A(b2)) {
          c7 = b2(c7)
        }
        return c7
      }
      bI = function a0() {
        var c5 = new Date();
        if (cN + aY <= c5.getTime()) {
          var c6 = ck("ping=1", null, "ping");
          bw(c6, bA);
          return true
        }
        return false
      };

      function bi(c8, c7, dd, c9, c5, dg) {
        var db = "idgoal=0",
          dc, c6 = new Date(),
          de = [],
          df, da = String(c8).length;
        if (da) {
          db += "&ec_id=" + t(c8);
          dc = Math.round(c6.getTime() / 1000)
        }
        db += "&revenue=" + c7;
        if (String(dd).length) {
          db += "&ec_st=" + dd
        }
        if (String(c9).length) {
          db += "&ec_tx=" + c9
        }
        if (String(c5).length) {
          db += "&ec_sh=" + c5
        }
        if (String(dg).length) {
          db += "&ec_dt=" + dg
        }
        if (cP) {
          for (df in cP) {
            if (Object.prototype.hasOwnProperty.call(cP, df)) {
              if (!J(cP[df][1])) {
                cP[df][1] = ""
              }
              if (!J(cP[df][2])) {
                cP[df][2] = ""
              }
              if (!J(cP[df][3]) || String(cP[df][3]).length === 0) {
                cP[df][3] = 0
              }
              if (!J(cP[df][4]) || String(cP[df][4]).length === 0) {
                cP[df][4] = 1
              }
              de.push(cP[df])
            }
          }
          db += "&ec_items=" + t(JSON_PIWIK.stringify(de))
        }
        db = ck(db, ak, "ecommerce", dc);
        bw(db, bA);
        if (da) {
          cP = {}
        }
      }
      function bQ(c5, c9, c8, c7, c6, da) {
        if (String(c5).length && J(c9)) {
          bi(c5, c9, c8, c7, c6, da)
        }
      }
      function bk(c5) {
        if (J(c5)) {
          bi("", c5, "", "", "", "")
        }
      }
      function bR(c6, c8, c7) {
        aE = a9();
        var c5 = ck("action_name=" + t(ah(c6 || bb)), c8, "log");
        bw(c5, bA, c7)
      }
      function aT(c7, c6) {
        var c8, c5 = "(^| )(piwik[_-]" + c6;
        if (c7) {
          for (c8 = 0; c8 < c7.length; c8++) {
            c5 += "|" + c7[c8]
          }
        }
        c5 += ")( |$)";
        return new RegExp(c5)
      }
      function aN(c5) {
        return (ay && c5 && 0 === String(c5).indexOf(ay))
      }
      function cl(c9, c5, da, c6) {
        if (aN(c5)) {
          return 0
        }
        var c8 = aT(bC, "download"),
          c7 = aT(a1, "link"),
          db = new RegExp("\\.(" + cU.join("|") + ")([?&#]|$)", "i");
        if (c7.test(c9)) {
          return "link"
        }
        if (c6 || c8.test(c9) || db.test(c5)) {
          return "download"
        }
        if (da) {
          return 0
        }
        return "link"
      }
      function ap(c6) {
        var c5;
        c5 = c6.parentNode;
        while (c5 !== null && J(c5)) {
          if (ab.isLinkElement(c6)) {
            break
          }
          c6 = c5;
          c5 = c6.parentNode
        }
        return c6
      }
      function cZ(da) {
        da = ap(da);
        if (!ab.hasNodeAttribute(da, "href")) {
          return
        }
        if (!J(da.href)) {
          return
        }
        var c9 = ab.getAttributeValueFromNode(da, "href");
        if (aN(c9)) {
          return
        }
        var c6 = da.pathname || cc(da.href);
        var db = da.hostname || d(da.href);
        var dc = db.toLowerCase();
        var c7 = da.href.replace(db, dc);
        var c8 = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):", "i");
        if (!c8.test(c7)) {
          var c5 = cl(da.className, c7, an(dc, c6), ab.hasNodeAttribute(da, "download"));
          if (c5) {
            return {
              type: c5,
              href: c7
            }
          }
        }
      }
      function aI(c5, c6, c7, c8) {
        var c9 = v.buildInteractionRequestParams(c5, c6, c7, c8);
        if (!c9) {
          return
        }
        return ck(c9, null, "contentInteraction")
      }
      function cB(c7, c8, dc, c5, c6) {
        if (!J(c7)) {
          return
        }
        if (aN(c7)) {
          return c7
        }
        var da = v.toAbsoluteUrl(c7);
        var c9 = "redirecturl=" + t(da) + "&";
        c9 += aI(c8, dc, c5, (c6 || c7));
        var db = "&";
        if (ay.indexOf("?") < 0) {
          db = "?"
        }
        return ay + db + c9
      }
      function a4(c5, c6) {
        if (!c5 || !c6) {
          return false
        }
        var c7 = v.findTargetNode(c5);
        if (v.shouldIgnoreInteraction(c7)) {
          return false
        }
        c7 = v.findTargetNodeNoDefault(c5);
        if (c7 && !U(c7, c6)) {
          return false
        }
        return true
      }
      function cm(c7, c6, c9) {
        if (!c7) {
          return
        }
        var c5 = v.findParentContentNode(c7);
        if (!c5) {
          return
        }
        if (!a4(c5, c7)) {
          return
        }
        var c8 = v.buildContentBlock(c5);
        if (!c8) {
          return
        }
        if (!c8.target && c9) {
          c8.target = c9
        }
        return v.buildInteractionRequestParams(c6, c8.name, c8.piece, c8.target)
      }
      function aP(c6) {
        if (!b1 || !b1.length) {
          return false
        }
        var c5, c7;
        for (c5 = 0; c5 < b1.length; c5++) {
          c7 = b1[c5];
          if (c7 && c7.name === c6.name && c7.piece === c6.piece && c7.target === c6.target) {
            return true
          }
        }
        return false
      }
      function bv(c8) {
        if (!c8) {
          return false
        }
        var db = v.findTargetNode(c8);
        if (!db || v.shouldIgnoreInteraction(db)) {
          return false
        }
        var dc = cZ(db);
        if (cW && dc && dc.type) {
          return false
        }
        if (ab.isLinkElement(db) && ab.hasNodeAttributeWithValue(db, "href")) {
          var c5 = String(ab.getAttributeValueFromNode(db, "href"));
          if (0 === c5.indexOf("#")) {
            return false
          }
          if (aN(c5)) {
            return true
          }
          if (!v.isUrlToCurrentDomain(c5)) {
            return false
          }
          var c9 = v.buildContentBlock(c8);
          if (!c9) {
            return
          }
          var c7 = c9.name;
          var dd = c9.piece;
          var da = c9.target;
          if (!ab.hasNodeAttributeWithValue(db, v.CONTENT_TARGET_ATTR) || db.wasContentTargetAttrReplaced) {
            db.wasContentTargetAttrReplaced = true;
            da = v.toAbsoluteUrl(c5);
            ab.setAnyAttribute(db, v.CONTENT_TARGET_ATTR, da)
          }
          var c6 = cB(c5, "click", c7, dd, da);
          v.setHrefAttribute(db, c6);
          return true
        }
        return false
      }
      function aG(c6) {
        if (!c6 || !c6.length) {
          return
        }
        var c5;
        for (c5 = 0; c5 < c6.length; c5++) {
          bv(c6[c5])
        }
      }
      function aQ(c5) {
        return function (c6) {
          if (!c5) {
            return
          }
          var c9 = v.findParentContentNode(c5);
          var da;
          if (c6) {
            da = c6.target || c6.srcElement
          }
          if (!da) {
            da = c5
          }
          if (!a4(c9, da)) {
            return
          }
          b7(bA);
          if (ab.isLinkElement(c5) && ab.hasNodeAttributeWithValue(c5, "href") && ab.hasNodeAttributeWithValue(
            c5, v.CONTENT_TARGET_ATTR)) {
            var c7 = ab.getAttributeValueFromNode(c5, "href");
            if (!aN(c7) && c5.wasContentTargetAttrReplaced) {
              ab.setAnyAttribute(c5, v.CONTENT_TARGET_ATTR, "")
            }
          }
          var de = cZ(c5);
          if (al && de && de.type) {
            return de.type
          }
          if (bv(c9)) {
            return "href"
          }
          var db = v.buildContentBlock(c9);
          if (!db) {
            return
          }
          var c8 = db.name;
          var df = db.piece;
          var dd = db.target;
          var dc = aI("click", c8, df, dd);
          bw(dc, bA);
          return dc
        }
      }
      function bS(c7) {
        if (!c7 || !c7.length) {
          return
        }
        var c5, c6;
        for (c5 = 0; c5 < c7.length; c5++) {
          c6 = v.findTargetNode(c7[c5]);
          if (c6 && !c6.contentInteractionTrackingSetupDone) {
            c6.contentInteractionTrackingSetupDone = true;
            aj(c6, "click", aQ(c6))
          }
        }
      }
      function bp(c7, c8) {
        if (!c7 || !c7.length) {
          return []
        }
        var c5, c6;
        for (c5 = 0; c5 < c7.length; c5++) {
          if (aP(c7[c5])) {
            c7.splice(c5, 1);
            c5--
          } else {
            b1.push(c7[c5])
          }
        }
        if (!c7 || !c7.length) {
          return []
        }
        aG(c8);
        bS(c8);
        var c9 = [];
        for (c5 = 0; c5 < c7.length; c5++) {
          c6 = ck(v.buildImpressionRequestParams(c7[c5].name, c7[c5].piece, c7[c5].target), undefined,
            "contentImpressions");
          if (c6) {
            c9.push(c6)
          }
        }
        return c9
      }
      function cq(c6) {
        var c5 = v.collectContent(c6);
        return bp(c5, c6)
      }
      function a2(c6) {
        if (!c6 || !c6.length) {
          return []
        }
        var c5;
        for (c5 = 0; c5 < c6.length; c5++) {
          if (!v.isNodeVisible(c6[c5])) {
            c6.splice(c5, 1);
            c5--
          }
        }
        if (!c6 || !c6.length) {
          return []
        }
        return cq(c6)
      }
      function aA(c7, c5, c6) {
        var c8 = v.buildImpressionRequestParams(c7, c5, c6);
        return ck(c8, null, "contentImpression")
      }
      function cY(c8, c6) {
        if (!c8) {
          return
        }
        var c5 = v.findParentContentNode(c8);
        var c7 = v.buildContentBlock(c5);
        if (!c7) {
          return
        }
        if (!c6) {
          c6 = "Unknown"
        }
        return aI(c6, c7.name, c7.piece, c7.target)
      }
      function cF(c6, c8, c5, c7) {
        return "e_c=" + t(c6) + "&e_a=" + t(c8) + (J(c5) ? "&e_n=" + t(c5) : "") + (J(c7) ? "&e_v=" + t(c7) :
          "")
      }
      function ao(c7, c9, c5, c8, db, da) {
        if (a(String(c7)).length === 0 || a(String(c9)).length === 0) {
          ag(
            "Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces");
          return false
        }
        var c6 = ck(cF(c7, c9, c5, c8), db, "event");
        bw(c6, bA, da)
      }
      function bZ(c5, c8, c6, c9) {
        var c7 = ck("search=" + t(c5) + (c8 ? "&search_cat=" + t(c8) : "") + (J(c6) ? "&search_count=" + c6 :
          ""), c9, "sitesearch");
        bw(c7, bA)
      }
      function cJ(c5, c8, c7) {
        var c6 = ck("idgoal=" + c5 + (c8 ? "&revenue=" + c8 : ""), c7, "goal");
        bw(c6, bA)
      }
      function cQ(c8, c5, dc, db, c7) {
        var da = c5 + "=" + t(bT(c8));
        var c6 = cm(c7, "click", c8);
        if (c6) {
          da += "&" + c6
        }
        var c9 = ck(da, dc, "link");
        bw(c9, bA, db)
      }
      function bL(c6, c5) {
        if (c6 !== "") {
          return c6 + c5.charAt(0).toUpperCase() + c5.slice(1)
        }
        return c5
      }
      function b8(da) {
        var c9, c5, c8 = ["", "webkit", "ms", "moz"],
          c7;
        if (!a7) {
          for (c5 = 0; c5 < c8.length; c5++) {
            c7 = c8[c5];
            if (Object.prototype.hasOwnProperty.call(G, bL(c7, "hidden"))) {
              if (G[bL(c7, "visibilityState")] === "prerender") {
                c9 = true
              }
              break
            }
          }
        }
        if (c9) {
          aj(G, c7 + "visibilitychange", function c6() {
            G.removeEventListener(c7 + "visibilitychange", c6, false);
            da()
          });
          return
        }
        da()
      }
      function bj() {
        var c6 = aR().uuid;
        var c5 = aD();
        return c6 + c5
      }
      function ca(c5) {
        if (!c5) {
          return
        }
        if (!ab.hasNodeAttribute(c5, "href")) {
          return
        }
        var c6 = ab.getAttributeValueFromNode(c5, "href");
        if (!c6 || aN(c6)) {
          return
        }
        c6 = k(c6, aq);
        if (c6.indexOf("?") > 0) {
          c6 += "&"
        } else {
          c6 += "?"
        }
        var c7 = bj();
        c6 = F(c6, aq, c7);
        ab.setAnyAttribute(c5, "href", c6)
      }
      function av(c8) {
        var c9 = ab.getAttributeValueFromNode(c8, "href");
        if (!c9) {
          return false
        }
        c9 = String(c9);
        var c6 = c9.indexOf("//") === 0 || c9.indexOf("http://") === 0 || c9.indexOf("https://") === 0;
        if (!c6) {
          return false
        }
        var c5 = c8.pathname || cc(c8.href);
        var c7 = (c8.hostname || d(c8.href)).toLowerCase();
        if (an(c7, c5)) {
          if (!cx(cK, L(c7))) {
            return true
          }
          return false
        }
        return false
      }
      function cw(c5) {
        var c6 = cZ(c5);
        if (c6 && c6.type) {
          c6.href = p(c6.href);
          cQ(c6.href, c6.type, undefined, null, c5);
          return
        }
        if (cD) {
          c5 = ap(c5);
          if (av(c5)) {
            ca(c5)
          }
        }
      }
      function cn() {
        return G.all && !G.addEventListener
      }
      function cL(c5) {
        var c7 = c5.which;
        var c6 = (typeof c5.button);
        if (!c7 && c6 !== "undefined") {
          if (cn()) {
            if (c5.button & 1) {
              c7 = 1
            } else {
              if (c5.button & 2) {
                c7 = 3
              } else {
                if (c5.button & 4) {
                  c7 = 2
                }
              }
            }
          } else {
            if (c5.button === 0 || c5.button === "0") {
              c7 = 1
            } else {
              if (c5.button & 1) {
                c7 = 2
              } else {
                if (c5.button & 2) {
                  c7 = 3
                }
              }
            }
          }
        }
        return c7
      }
      function bK(c5) {
        switch (cL(c5)) {
          case 1:
            return "left";
          case 2:
            return "middle";
          case 3:
            return "right"
        }
      }
      function aU(c5) {
        return c5.target || c5.srcElement
      }
      function aw(c5) {
        return function (c8) {
          c8 = c8 || T.event;
          var c7 = bK(c8);
          var c9 = aU(c8);
          if (c8.type === "click") {
            var c6 = false;
            if (c5 && c7 === "middle") {
              c6 = true
            }
            if (c9 && !c6) {
              cw(c9)
            }
          } else {
            if (c8.type === "mousedown") {
              if (c7 === "middle" && c9) {
                aK = c7;
                bs = c9
              } else {
                aK = bs = null
              }
            } else {
              if (c8.type === "mouseup") {
                if (c7 === aK && c9 === bs) {
                  cw(c9)
                }
                aK = bs = null
              } else {
                if (c8.type === "contextmenu") {
                  cw(c9)
                }
              }
            }
          }
        }
      }
      function am(c7, c6) {
        var c5 = typeof c6;
        if (c5 === "undefined") {
          c6 = true
        }
        aj(c7, "click", aw(c6), false);
        if (c6) {
          aj(c7, "mouseup", aw(c6), false);
          aj(c7, "mousedown", aw(c6), false);
          aj(c7, "contextmenu", aw(c6), false)
        }
      }
      function bu(c7, c9) {
        al = true;
        var c8, c6 = aT(br, "ignore"),
          da = G.links,
          c5 = null,
          db = null;
        if (da) {
          for (c8 = 0; c8 < da.length; c8++) {
            c5 = da[c8];
            if (!c6.test(c5.className)) {
              db = typeof c5.piwikTrackers;
              if ("undefined" === db) {
                c5.piwikTrackers = []
              }
              if (-1 === M(c5.piwikTrackers, c9)) {
                c5.piwikTrackers.push(c9);
                am(c5, c7)
              }
            }
          }
        }
      }
      function aL(c6, c9, da) {
        if (b6) {
          return true
        }
        b6 = true;
        var db = false;
        var c8, c7;

        function c5() {
          db = true
        }
        n(function () {
          function dc(de) {
            setTimeout(function () {
              if (!b6) {
                return
              }
              db = false;
              da.trackVisibleContentImpressions();
              dc(de)
            }, de)
          }
          function dd(de) {
            setTimeout(function () {
              if (!b6) {
                return
              }
              if (db) {
                db = false;
                da.trackVisibleContentImpressions()
              }
              dd(de)
            }, de)
          }
          if (c6) {
            c8 = ["scroll", "resize"];
            for (c7 = 0; c7 < c8.length; c7++) {
              if (G.addEventListener) {
                G.addEventListener(c8[c7], c5, false)
              } else {
                T.attachEvent("on" + c8[c7], c5)
              }
            }
            dd(100)
          }
          if (c9 && c9 > 0) {
            c9 = parseInt(c9, 10);
            dc(c9)
          }
        })
      }
      function cv() {
        var c6, c8, c9 = {
          pdf: "application/pdf",
          qt: "video/quicktime",
          realp: "audio/x-pn-realaudio-plugin",
          wma: "application/x-mplayer2",
          dir: "application/x-director",
          fla: "application/x-shockwave-flash",
          java: "application/x-java-vm",
          gears: "application/x-googlegears",
          ag: "application/x-silverlight"
        };
        if (!((new RegExp("MSIE")).test(h.userAgent))) {
          if (h.mimeTypes && h.mimeTypes.length) {
            for (c6 in c9) {
              if (Object.prototype.hasOwnProperty.call(c9, c6)) {
                c8 = h.mimeTypes[c9[c6]];
                cV[c6] = (c8 && c8.enabledPlugin) ? "1" : "0"
              }
            }
          }
          if (!((new RegExp("Edge[ /](\\d+[\\.\\d]+)")).test(h.userAgent)) && typeof navigator.javaEnabled !==
            "unknown" && J(h.javaEnabled) && h.javaEnabled()) {
            cV.java = "1"
          }
          if (A(T.GearsFactory)) {
            cV.gears = "1"
          }
          cV.cookie = bW()
        }
        var c7 = parseInt(W.width, 10);
        var c5 = parseInt(W.height, 10);
        cV.res = parseInt(c7, 10) + "x" + parseInt(c5, 10)
      }
      cv();
      ba();
      aF();
      this.getVisitorId = function () {
        return aR().uuid
      };
      this.getVisitorInfo = function () {
        return cE()
      };
      this.getAttributionInfo = function () {
        return bD()
      };
      this.getAttributionCampaignName = function () {
        return bD()[0]
      };
      this.getAttributionCampaignKeyword = function () {
        return bD()[1]
      };
      this.getAttributionReferrerTimestamp = function () {
        return bD()[2]
      };
      this.getAttributionReferrerUrl = function () {
        return bD()[3]
      };
      this.setTrackerUrl = function (c5) {
        ay = c5
      };
      this.getTrackerUrl = function () {
        return ay
      };
      this.getPiwikUrl = function () {
        return O(this.getTrackerUrl(), by)
      };
      this.addTracker = function (c5, c7) {
        if (!c7) {
          throw new Error("A siteId must be given to add a new tracker")
        }
        if (!J(c5) || null === c5) {
          c5 = this.getTrackerUrl()
        }
        var c6 = new Q(c5, c7);
        I.push(c6);
        return c6
      };
      this.getSiteId = function () {
        return bX
      };
      this.setSiteId = function (c5) {
        bU(c5)
      };
      this.resetUserId = function () {
        bq = ""
      };
      this.setUserId = function (c5) {
        if (!J(c5) || !c5.length) {
          return
        }
        bq = c5
      };
      this.getUserId = function () {
        return bq
      };
      this.setCustomData = function (c5, c6) {
        if (V(c5)) {
          ak = c5
        } else {
          if (!ak) {
            ak = {}
          }
          ak[c5] = c6
        }
      };
      this.getCustomData = function () {
        return ak
      };
      this.setCustomRequestProcessing = function (c5) {
        b2 = c5
      };
      this.appendToTrackingUrl = function (c5) {
        cO = c5
      };
      this.getRequest = function (c5) {
        return ck(c5)
      };
      this.addPlugin = function (c5, c6) {
        b[c5] = c6
      };
      this.setCustomDimension = function (c5, c6) {
        c5 = parseInt(c5, 10);
        if (c5 > 0) {
          if (!J(c6)) {
            c6 = ""
          }
          if (!w(c6)) {
            c6 = String(c6)
          }
          be[c5] = c6
        }
      };
      this.getCustomDimension = function (c5) {
        c5 = parseInt(c5, 10);
        if (c5 > 0 && Object.prototype.hasOwnProperty.call(be, c5)) {
          return be[c5]
        }
      };
      this.deleteCustomDimension = function (c5) {
        c5 = parseInt(c5, 10);
        if (c5 > 0) {
          delete be[c5]
        }
      };
      this.setCustomVariable = function (c6, c5, c9, c7) {
        var c8;
        if (!J(c7)) {
          c7 = "visit"
        }
        if (!J(c5)) {
          return
        }
        if (!J(c9)) {
          c9 = ""
        }
        if (c6 > 0) {
          c5 = !w(c5) ? String(c5) : c5;
          c9 = !w(c9) ? String(c9) : c9;
          c8 = [c5.slice(0, bl), c9.slice(0, bl)];
          if (c7 === "visit" || c7 === 2) {
            cu();
            aJ[c6] = c8
          } else {
            if (c7 === "page" || c7 === 3) {
              bN[c6] = c8
            } else {
              if (c7 === "event") {
                cd[c6] = c8
              }
            }
          }
        }
      };
      this.getCustomVariable = function (c6, c7) {
        var c5;
        if (!J(c7)) {
          c7 = "visit"
        }
        if (c7 === "page" || c7 === 3) {
          c5 = bN[c6]
        } else {
          if (c7 === "event") {
            c5 = cd[c6]
          } else {
            if (c7 === "visit" || c7 === 2) {
              cu();
              c5 = aJ[c6]
            }
          }
        } if (!J(c5) || (c5 && c5[0] === "")) {
          return false
        }
        return c5
      };
      this.deleteCustomVariable = function (c5, c6) {
        if (this.getCustomVariable(c5, c6)) {
          this.setCustomVariable(c5, "", "", c6)
        }
      };
      this.deleteCustomVariables = function (c5) {
        if (c5 === "page" || c5 === 3) {
          bN = {}
        } else {
          if (c5 === "event") {
            cd = {}
          } else {
            if (c5 === "visit" || c5 === 2) {
              aJ = {}
            }
          }
        }
      };
      this.storeCustomVariablesInCookie = function () {
        bH = true
      };
      this.setLinkTrackingTimer = function (c5) {
        bA = c5
      };
      this.getLinkTrackingTimer = function () {
        return bA
      };
      this.setDownloadExtensions = function (c5) {
        if (w(c5)) {
          c5 = c5.split("|")
        }
        cU = c5
      };
      this.addDownloadExtensions = function (c6) {
        var c5;
        if (w(c6)) {
          c6 = c6.split("|")
        }
        for (c5 = 0; c5 < c6.length; c5++) {
          cU.push(c6[c5])
        }
      };
      this.removeDownloadExtensions = function (c7) {
        var c6, c5 = [];
        if (w(c7)) {
          c7 = c7.split("|")
        }
        for (c6 = 0; c6 < cU.length; c6++) {
          if (M(c7, cU[c6]) === -1) {
            c5.push(cU[c6])
          }
        }
        cU = c5
      };
      this.setDomains = function (c5) {
        ar = w(c5) ? [c5] : c5;
        var c9 = false,
          c7 = 0,
          c6;
        for (c7; c7 < ar.length; c7++) {
          c6 = String(ar[c7]);
          if (cx(cK, L(c6))) {
            c9 = true;
            break
          }
          var c8 = cc(c6);
          if (c8 && c8 !== "/" && c8 !== "/*") {
            c9 = true;
            break
          }
        }
        if (!c9) {
          ar.push(cK)
        }
      };
      this.enableCrossDomainLinking = function () {
        cD = true
      };
      this.disableCrossDomainLinking = function () {
        cD = false
      };
      this.isCrossDomainLinkingEnabled = function () {
        return cD
      };
      this.setCrossDomainLinkingTimeout = function (c5) {
        aS = c5
      };
      this.getCrossDomainLinkingUrlParameter = function () {
        return t(aq) + "=" + t(bj())
      };
      this.setIgnoreClasses = function (c5) {
        br = w(c5) ? [c5] : c5
      };
      this.setRequestMethod = function (c5) {
        cX = c5 || b9
      };
      this.setRequestContentType = function (c5) {
        co = c5 || aC
      };
      this.setReferrerUrl = function (c5) {
        bf = c5
      };
      this.setCustomUrl = function (c5) {
        aX = bM(bE, c5)
      };
      this.getCurrentUrl = function () {
        return aX || bE
      };
      this.setDocumentTitle = function (c5) {
        bb = c5
      };
      this.setAPIUrl = function (c5) {
        by = c5
      };
      this.setDownloadClasses = function (c5) {
        bC = w(c5) ? [c5] : c5
      };
      this.setLinkClasses = function (c5) {
        a1 = w(c5) ? [c5] : c5
      };
      this.setCampaignNameKey = function (c5) {
        ci = w(c5) ? [c5] : c5
      };
      this.setCampaignKeywordKey = function (c5) {
        bx = w(c5) ? [c5] : c5
      };
      this.discardHashTag = function (c5) {
        bG = c5
      };
      this.setCookieNamePrefix = function (c5) {
        bc = c5;
        aJ = bO()
      };
      this.setCookieDomain = function (c5) {
        var c6 = L(c5);
        if (bo(c6)) {
          cM = c6;
          ba()
        }
      };
      this.getCookieDomain = function () {
        return cM
      };
      this.hasCookies = function () {
        return "1" === bW()
      };
      this.setSessionCookie = function (c7, c6, c5) {
        if (!c7) {
          throw new Error("Missing cookie name")
        }
        if (!J(c5)) {
          c5 = cg
        }
        bm.push(c7);
        c0(aM(c7), c6, c5, bh, cM)
      };
      this.getCookie = function (c6) {
        var c5 = ax(aM(c6));
        if (c5 === 0) {
          return null
        }
        return c5
      };
      this.setCookiePath = function (c5) {
        bh = c5;
        ba()
      };
      this.getCookiePath = function (c5) {
        return bh
      };
      this.setVisitorCookieTimeout = function (c5) {
        cz = c5 * 1000
      };
      this.setSessionCookieTimeout = function (c5) {
        cg = c5 * 1000
      };
      this.getSessionCookieTimeout = function () {
        return cg
      };
      this.setReferralCookieTimeout = function (c5) {
        cT = c5 * 1000
      };
      this.setConversionAttributionFirstReferrer = function (c5) {
        bn = c5
      };
      this.setSecureCookie = function (c5) {
        bJ = c5
      };
      this.disableCookies = function () {
        bd = true;
        cV.cookie = "0";
        if (bX) {
          az()
        }
      };
      this.deleteCookies = function () {
        az()
      };
      this.setDoNotTrack = function (c6) {
        var c5 = h.doNotTrack || h.msDoNotTrack;
        cG = c6 && (c5 === "yes" || c5 === "1");
        if (cG) {
          this.disableCookies()
        }
      };
      this.addListener = function (c6, c5) {
        am(c6, c5)
      };
      this.enableLinkTracking = function (c6) {
        cW = true;
        var c5 = this;
        b8(function () {
          q(function () {
            bu(c6, c5)
          })
        })
      };
      this.enableJSErrorTracking = function () {
        if (cI) {
          return
        }
        cI = true;
        var c5 = T.onerror;
        T.onerror = function (da, c8, c7, c9, c6) {
          b8(function () {
            var db = "JavaScript Errors";
            var dc = c8 + ":" + c7;
            if (c9) {
              dc += ":" + c9
            }
            ao(db, dc, da)
          });
          if (c5) {
            return c5(da, c8, c7, c9, c6)
          }
          return false
        }
      };
      this.disablePerformanceTracking = function () {
        aV = false
      };
      this.setGenerationTimeMs = function (c5) {
        ce = parseInt(c5, 10)
      };
      this.enableHeartBeatTimer = function (c5) {
        c5 = Math.max(c5, 1);
        aY = (c5 || 15) * 1000;
        if (cN !== null) {
          c2()
        }
      };
      this.disableHeartBeatTimer = function () {
        bB();
        if (aY || aH) {
          if (T.removeEventListener) {
            T.removeEventListener("focus", a3, true);
            T.removeEventListener("blur", at, true)
          } else {
            if (T.detachEvent) {
              T.detachEvent("onfocus", a3);
              T.detachEvent("onblur", at)
            }
          }
        }
        aY = null;
        aH = false
      };
      this.killFrame = function () {
        if (T.location !== T.top.location) {
          T.top.location = T.location
        }
      };
      this.redirectFile = function (c5) {
        if (T.location.protocol === "file:") {
          T.location = c5
        }
      };
      this.setCountPreRendered = function (c5) {
        a7 = c5
      };
      this.trackGoal = function (c5, c7, c6) {
        b8(function () {
          cJ(c5, c7, c6)
        })
      };
      this.trackLink = function (c6, c5, c8, c7) {
        b8(function () {
          cQ(c6, c5, c8, c7)
        })
      };
      this.getNumTrackedPageViews = function () {
        return cj
      };
      this.trackPageView = function (c5, c7, c6) {
        b1 = [];
        cA = [];
        if (N(bX)) {
          b8(function () {
            X(ay, by, bX)
          })
        } else {
          b8(function () {
            cj++;
            bR(c5, c7, c6)
          })
        }
      };
      this.trackAllContentImpressions = function () {
        if (N(bX)) {
          return
        }
        b8(function () {
          q(function () {
            var c5 = v.findContentNodes();
            var c6 = cq(c5);
            c1(c6, bA)
          })
        })
      };
      this.trackVisibleContentImpressions = function (c5, c6) {
        if (N(bX)) {
          return
        }
        if (!J(c5)) {
          c5 = true
        }
        if (!J(c6)) {
          c6 = 750
        }
        aL(c5, c6, this);
        b8(function () {
          n(function () {
            var c7 = v.findContentNodes();
            var c8 = a2(c7);
            c1(c8, bA)
          })
        })
      };
      this.trackContentImpression = function (c7, c5, c6) {
        if (N(bX)) {
          return
        }
        c7 = a(c7);
        c5 = a(c5);
        c6 = a(c6);
        if (!c7) {
          return
        }
        c5 = c5 || "Unknown";
        b8(function () {
          var c8 = aA(c7, c5, c6);
          bw(c8, bA)
        })
      };
      this.trackContentImpressionsWithinNode = function (c5) {
        if (N(bX) || !c5) {
          return
        }
        b8(function () {
          if (b6) {
            n(function () {
              var c6 = v.findContentNodesWithinNode(c5);
              var c7 = a2(c6);
              c1(c7, bA)
            })
          } else {
            q(function () {
              var c6 = v.findContentNodesWithinNode(c5);
              var c7 = cq(c6);
              c1(c7, bA)
            })
          }
        })
      };
      this.trackContentInteraction = function (c7, c8, c5, c6) {
        if (N(bX)) {
          return
        }
        c7 = a(c7);
        c8 = a(c8);
        c5 = a(c5);
        c6 = a(c6);
        if (!c7 || !c8) {
          return
        }
        c5 = c5 || "Unknown";
        b8(function () {
          var c9 = aI(c7, c8, c5, c6);
          bw(c9, bA)
        })
      };
      this.trackContentInteractionNode = function (c6, c5) {
        if (N(bX) || !c6) {
          return
        }
        b8(function () {
          var c7 = cY(c6, c5);
          bw(c7, bA)
        })
      };
      this.logAllContentBlocksOnPage = function () {
        var c7 = v.findContentNodes();
        var c5 = v.collectContent(c7);
        var c6 = typeof console;
        if (c6 !== "undefined" && console && console.log) {
          console.log(c5)
        }
      };
      this.trackEvent = function (c6, c8, c5, c7, da, c9) {
        b8(function () {
          ao(c6, c8, c5, c7, da, c9)
        })
      };
      this.trackSiteSearch = function (c5, c7, c6, c8) {
        b8(function () {
          bZ(c5, c7, c6, c8)
        })
      };
      this.setEcommerceView = function (c8, c5, c7, c6) {
        if (!J(c7) || !c7.length) {
          c7 = ""
        } else {
          if (c7 instanceof Array) {
            c7 = JSON_PIWIK.stringify(c7)
          }
        }
        bN[5] = ["_pkc", c7];
        if (J(c6) && String(c6).length) {
          bN[2] = ["_pkp", c6]
        }
        if ((!J(c8) || !c8.length) && (!J(c5) || !c5.length)) {
          return
        }
        if (J(c8) && c8.length) {
          bN[3] = ["_pks", c8]
        }
        if (!J(c5) || !c5.length) {
          c5 = ""
        }
        bN[4] = ["_pkn", c5]
      };
      this.addEcommerceItem = function (c9, c5, c7, c6, c8) {
        if (c9.length) {
          cP[c9] = [c9, c5, c7, c6, c8]
        }
      };
      this.removeEcommerceItem = function (c5) {
        if (c5.length) {
          delete cP[c5]
        }
      };
      this.clearEcommerceCart = function () {
        cP = {}
      };
      this.trackEcommerceOrder = function (c5, c9, c8, c7, c6, da) {
        bQ(c5, c9, c8, c7, c6, da)
      };
      this.trackEcommerceCartUpdate = function (c5) {
        bk(c5)
      };
      this.trackRequest = function (c6, c8, c7, c5) {
        b8(function () {
          var c9 = ck(c6, c8, c5);
          bw(c9, bA, c7)
        })
      };
      this.getRememberedConsent = function () {
        var c5 = ax(a6);
        if (ax(cC)) {
          if (c5) {
            bP(a6, bh, cM)
          }
          return null
        }
        if (!c5 || c5 === 0) {
          return null
        }
        return c5
      };
      this.hasRememberedConsent = function () {
        return !!this.getRememberedConsent()
      };
      this.requireConsent = function () {
        cr = true;
        bt = this.hasRememberedConsent();
        x++;
        b["CoreConsent" + x] = {
          unload: function () {
            if (!bt) {
              az()
            }
          }
        }
      };
      this.setConsentGiven = function () {
        bt = true;
        bP(cC, bh, cM);
        var c6, c5;
        for (c6 = 0; c6 < cA.length; c6++) {
          c5 = typeof cA[c6];
          if (c5 === "string") {
            bw(cA[c6], bA)
          } else {
            if (c5 === "object") {
              c1(cA[c6], bA)
            }
          }
        }
        cA = []
      };
      this.rememberConsentGiven = function (c6) {
        if (bd) {
          ag("rememberConsentGiven is called but cookies are disabled, consent will not be remembered");
          return
        }
        if (c6) {
          c6 = c6 * 60 * 60 * 1000
        }
        this.setConsentGiven();
        var c5 = new Date().getTime();
        c0(a6, c5, c6, bh, cM, bJ)
      };
      this.forgetConsentGiven = function () {
        if (bd) {
          ag("forgetConsentGiven is called but cookies are disabled, consent will not be forgotten");
          return
        }
        bP(a6, bh, cM);
        c0(cC, new Date().getTime(), 0, bh, cM, bJ);
        this.requireConsent()
      };
      this.isUserOptedOut = function () {
        return !bt
      };
      this.optUserOut = this.forgetConsentGiven;
      this.forgetUserOptOut = this.rememberConsentGiven;
      e.trigger("TrackerSetup", [this])
    }
    function H() {
      return {
        push: ac
      }
    }
    function c(ap, ao) {
      var aq = {};
      var am, an;
      for (am = 0; am < ao.length; am++) {
        var ak = ao[am];
        aq[ak] = 1;
        for (an = 0; an < ap.length; an++) {
          if (ap[an] && ap[an][0]) {
            var al = ap[an][0];
            if (ak === al) {
              ac(ap[an]);
              delete ap[an];
              if (aq[al] > 1 && al !== "addTracker") {
                ag("The method " + al +
                  ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: https://developer.piwik.org/guides/tracking-javascript-guide#multiple-piwik-trackers')
              }
              aq[al]++
            }
          }
        }
      }
      return ap
    }
    var C = ["addTracker", "disableCookies", "setTrackerUrl", "setAPIUrl", "enableCrossDomainLinking",
      "setCrossDomainLinkingTimeout", "setSecureCookie", "setCookiePath", "setCookieDomain", "setDomains",
      "setUserId", "setSiteId", "enableLinkTracking", "requireConsent", "setConsentGiven"];

    function aa(ak, am) {
      var al = new Q(ak, am);
      I.push(al);
      _paq = c(_paq, C);
      for (E = 0; E < _paq.length; E++) {
        if (_paq[E]) {
          ac(_paq[E])
        }
      }
      _paq = new H();
      return al
    }
    aj(T, "beforeunload", ae, false);
    Date.prototype.getTimeAlias = Date.prototype.getTime;
    e = {
      initialized: false,
      JSON: JSON_PIWIK,
      DOM: {
        addEventListener: function (an, am, al, ak) {
          var ao = typeof ak;
          if (ao === "undefined") {
            ak = false
          }
          aj(an, am, al, ak)
        },
        onLoad: n,
        onReady: q,
        isNodeVisible: j,
        isOrWasNodeVisible: v.isNodeVisible
      },
      on: function (al, ak) {
        if (!y[al]) {
          y[al] = []
        }
        y[al].push(ak)
      },
      off: function (am, al) {
        if (!y[am]) {
          return
        }
        var ak = 0;
        for (ak; ak < y[am].length; ak++) {
          if (y[am][ak] === al) {
            y[am].splice(ak, 1)
          }
        }
      },
      trigger: function (am, an, al) {
        if (!y[am]) {
          return
        }
        var ak = 0;
        for (ak; ak < y[am].length; ak++) {
          y[am][ak].apply(al || T, an)
        }
      },
      addPlugin: function (ak, al) {
        b[ak] = al
      },
      getTracker: function (ak, al) {
        if (!J(al)) {
          al = this.getAsyncTracker().getSiteId()
        }
        if (!J(ak)) {
          ak = this.getAsyncTracker().getTrackerUrl()
        }
        return new Q(ak, al)
      },
      getAsyncTrackers: function () {
        return I
      },
      addTracker: function (ak, am) {
        var al;
        if (!I.length) {
          al = aa(ak, am)
        } else {
          al = I[0].addTracker(ak, am)
        }
        return al
      },
      getAsyncTracker: function (al, ao) {
        var an;
        if (I && I.length && I[0]) {
          an = I[0]
        } else {
          return aa(al, ao)
        } if (!ao && !al) {
          return an
        }
        if ((!J(ao) || null === ao) && an) {
          ao = an.getSiteId()
        }
        if ((!J(al) || null === al) && an) {
          al = an.getTrackerUrl()
        }
        var am, ak = 0;
        for (ak; ak < I.length; ak++) {
          am = I[ak];
          if (am && String(am.getSiteId()) === String(ao) && am.getTrackerUrl() === al) {
            return am
          }
        }
      },
      retryMissedPluginCalls: function () {
        var al = ad;
        ad = [];
        var ak = 0;
        for (ak; ak < al.length; ak++) {
          ac(al[ak])
        }
      }
    };
    if (typeof define === "function" && define.amd) {
      define("piwik", [], function () {
        return e
      });
      define("matomo", [], function () {
        return e
      })
    }
    return e
  }())
}
/*!!! pluginTrackerHook */ (function () {
  function b() {
    if ("object" !== typeof _paq) {
      return false
    }
    var c = typeof _paq.length;
    if ("undefined" === c) {
      return false
    }
    return !!_paq.length
  }
  if (window && "object" === typeof window.piwikPluginAsyncInit && window.piwikPluginAsyncInit.length) {
    var a = 0;
    for (a; a < window.piwikPluginAsyncInit.length; a++) {
      if (typeof window.piwikPluginAsyncInit[a] === "function") {
        window.piwikPluginAsyncInit[a]()
      }
    }
  }
  if (window && window.piwikAsyncInit) {
    window.piwikAsyncInit()
  }
  if (!window.Piwik.getAsyncTrackers().length) {
    if (b()) {
      window.Piwik.addTracker()
    } else {
      _paq = {
        push: function (c) {
          var d = typeof console;
          if (d !== "undefined" && console && console.error) {
            console.error(
              "_paq.push() was used but Piwik tracker was not initialized before the piwik.js file was loaded. Make sure to configure the tracker via _paq.push before loading piwik.js. Alternatively, you can create a tracker via Piwik.addTracker() manually and then use _paq.push but it may not fully work as tracker methods may not be executed in the correct order.",
              c)
          }
        }
      }
    }
  }
  window.Piwik.trigger("PiwikInitialized", []);
  window.Piwik.initialized = true
}());
(function () {
  var a = (typeof AnalyticsTracker);
  if (a === "undefined") {
    AnalyticsTracker = window.Piwik
  }
}());
if (typeof piwik_log !== "function") {
  piwik_log = function (b, f, d, g) {
    function a(h) {
      try {
        if (window["piwik_" + h]) {
          return window["piwik_" + h]
        }
      } catch (i) { }
      return
    }
    var c, e = window.Piwik.getTracker(d, f);
    e.setDocumentTitle(b);
    e.setCustomData(g);
    c = a("tracker_pause");
    if (c) {
      e.setLinkTrackingTimer(c)
    }
    c = a("download_extensions");
    if (c) {
      e.setDownloadExtensions(c)
    }
    c = a("hosts_alias");
    if (c) {
      e.setDomains(c)
    }
    c = a("ignore_classes");
    if (c) {
      e.setIgnoreClasses(c)
    }
    e.trackPageView();
    if (a("install_tracker")) {
      piwik_track = function (i, k, j, h) {
        e.setSiteId(k);
        e.setTrackerUrl(j);
        e.trackLink(i, h)
      };
      e.enableLinkTracking()
    }
  }
}
/*!! @license-end */
;