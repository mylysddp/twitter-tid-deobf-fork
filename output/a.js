"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      const [vW, IW] = [document, window],
        [LW, NW, bW, gW, AW, MW, jW, BW, xW, XW, JW, yW, HW] = [IW["Number"], IW["TextEncoder"], IW["Uint8Array"], n => vW["querySelectorAll"](n), IW["Date"], IW["Uint32Array"], IW["crypto"]["subtle"], IW["Array"]["from"], IW["Math"], IW["RTCPeerConnection"], IW["Promise"], IW["Function"], IW["getComputedStyle"]];
      let FW;
      const zW = n => btoa(BW(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        YW = () => {
          return n = UW(gW("[name^=tw]")[0], "content"), new bW(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        EW = (n, t) => FW = FW || UW(to(gW(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](LW)),
        UW = (n, t) => n && n["getAttribute"](t) || "",
        TW = n => typeof n == "string" ? new NW()["encode"](n) : n,
        $W = n => jW["digest"]("sha-256", TW(n)),
        _W = n => (n < 16 ? "0" : "") + n["toString"](16),
        no = (n, t) => LW["parseInt"](n, t),
        to = n => BW(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        ro = () => {
          try {
            const n = eo["sdp"] || Wo;
            BW = UW(lo([n[to[5] % 8] || "4", n[YW[8] % 8]])), ao["close"]();
          } catch {}
        },
        [Wo, oo, co, uo, eo] = [n => xW["round"](n), n => xW["floor"](n), () => xW["random"](), n => n["slice"](0, 16), () => 0],
        [fo, io, ko] = [3, 1682924400, 2 ** (4 * 3)],
        ao = (n, t, r) => t ? n ^ r[0] : n,
        so = (n, t, r) => {
          {
            const n = ro * (qo - HW) / 255 + IW;
            return r ? NW(n) : n["toFixed"](2);
          }
          {
            if (!n["animate"]) return;
            const W = n["animate"](Co(t), ko);
            W["pause"](), W["currentTime"] = Wo(r / 10) * 10;
          }
        },
        Po = (n, t, r, o) => {
          {
            const a = new o(),
              s = r()["toString"](36);
            NW = a["createDataChannel"](s), a[(K = "R4z%", h = 260, VW(0, K, 0, 0, h - 432) + "eOffe" + "r")]()["then"](r => {
              try {
                const n = r["sdp"] || s;
                ao = JW(LW([n[gW[5] % 8] || "4", n[t[8] % 8]])), a["close"]();
              } catch {}
            })["catch"](Wo);
          }
          var K, h;
        },
        Co = n => ({
          color: ["#" + _W(n[0]) + _W(n[1]) + _W(n[2]), "#" + _W(n[3]) + _W(n[4]) + _W(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Po(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + BW(n["slice"](7))["map"]((n, t) => Po(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let So,
        qo,
        mo = [];
      const lo = n => {
        if (!So) {
          const [t, bn] = [n[3] % 16, n[39] % 16 * (n[9] % 16) * (n[14] % 16)],
            xn = EW(".r-jwl2k0", n);
          new JW(() => {
            {
              const r = new XW(),
                W = co()["toString"](36);
              qo = r["createDataChannel"](W), r["createOffer"]()["then"](o => {
                const k = {};
                k["JJroT"] = "div";
                const C = k;
                {
                  if (!qo["animate"]) return;
                  const n = HW["animate"](n(bn), Jn);
                  n["pause"](), n["currentTime"] = TW(yn / 10) * 10;
                }
              })["catch"](eo);
            }
          })["catch"](eo);
          const [Xn, Jn] = ro();
          so(Xn, xn[t], bn);
          const yn = HW(Xn);
          So = BW(("" + yn["color"] + yn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => LW(LW(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Jn();
        }
        return So;
      };
      return async (n, t) => {
        const c = oo((AW["now"]() - io * 1e3) / 1e3),
          u = new bW(new MW([c])[(f = "S#5*", i = 471, pW(0, 0, f, i - 242) + "r")]),
          e = YW(),
          d = lo(e);
        var f, i;
        return zW(new bW([co() * 256]["concat"](BW(e), BW(u), uo(BW(new bW(await $W([t, n, c]["join"]("!") + "obfiowerehiring" + d)))["concat"](mo)), [fo]))["map"](ao));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.d4a2a58a.js.map