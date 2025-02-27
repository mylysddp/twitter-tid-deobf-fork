"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, r, t) => {
    t.r(r), t.d(r, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      const [vo, Mo] = [document, window],
        [Xo, Ko, jo, yo, Jo, Lo, Qo, go, Bo, Fo, Zo, lo, Vo] = [Mo["Number"], Mo["TextEncoder"], Mo["Uint8Array"], n => vo["querySelectorAll"](n), Mo["Date"], Mo["Uint32Array"], Mo["crypto"]["subtle"], Mo["Array"]["from"], Mo["Math"], Mo["RTCPeerConnection"], Mo["Promise"], Mo["Function"], Mo["getComputedStyle"]];
      let Io;
      const Ao = n => new jo(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        xo = n => btoa(go(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Do = () => Ao(To(yo("[name^=tw]")[0], "content")),
        wo = (n, r) => Io = Io || To(Yo(yo(n))[r[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Xo)),
        To = (n, r) => n && n["getAttribute"](r) || "",
        Ho = n => typeof n == "string" ? new Ko()["encode"](n) : n,
        No = n => Qo["digest"]("sha-256", Ho(n)),
        zo = n => (n < 16 ? "0" : "") + n["toString"](16),
        Yo = n => go(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Eo = () => {
          try {
            const n = uc["sdp"] || nc;
            oc = go(sc([n[Wc[5] % 8] || "4", n[ec[8] % 8]])), xo["close"]();
          } catch {}
        },
        [_o, $o, nc, rc, tc] = [n => Bo["round"](n), n => Bo["floor"](n), () => Bo["random"](), n => n["slice"](0, 16), () => 0],
        [Wc, oc, cc] = [3, 1682924400, 2 ** (4 * 3)],
        uc = (n, r, t) => r ? n ^ t[0] : n,
        ec = (n, r, t) => {
          {
            if (!Ko["animate"]) return;
            const n = vo["animate"](ic(r), t);
            n["pause"](), n["currentTime"] = Lo($o / 10) * 10;
          }
        },
        ic = (n, r, t, W) => {
          {
            const n = vo["sdp"] || ic;
            r = t(Lo([n[$o[5] % 8] || "4", n[Do[8] % 8]])), Fo["close"]();
          }
        },
        fc = n => ({
          color: ["#" + zo(n[0]) + zo(n[1]) + zo(n[2]), "#" + zo(n[3]) + zo(n[4]) + zo(n[5])],
          transform: ["rotate(0deg)", "rotate(" + ic(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + go(n["slice"](7))["map"]((n, r) => ic(n, r % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let ac,
        Cc,
        sc = [];
      const Sc = n => {
        if (!ac) {
          const [m, q] = [n[18] % 16, n[4] % 16 * (n[15] % 16) * (n[5] % 16)],
            p = wo(".r-4972d0", n);
          new Zo(() => {
            {
              const r = new Fo(),
                t = nc()["toString"](36);
              Cc = r["createDataChannel"](t), r["createOffer"]()["then"](W => {
                {
                  const c = new ic(),
                    u = m()["toString"](36);
                  q = c["createDataChannel"](u), c["createOffer"]()["then"](e => {
                    try {
                      const i = e["sdp"] || u;
                      xo = jo(O([i[n[5] % 8] || "4", i[Vo[8] % 8]])), c["close"]();
                    } catch {}
                    var d, k, a;
                  })["catch"](nc);
                }
              })["catch"](tc);
            }
          })["catch"](tc);
          const [O, G] = Eo();
          ec(O, p[m], q);
          const M = Vo(O);
          ac = go(("" + M["color"] + M["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Xo(Xo(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), G();
        }
        return ac;
      };
      return async (n, r) => {
        const c = $o((Jo["now"]() - oc * 1e3) / 1e3),
          u = new jo(new Lo([c])["buffer"]),
          e = Do(),
          i = Sc(e);
        return xo(new jo([nc() * 256]["concat"](go(e), go(u), rc(go(new jo(await No([r, n, c]["join"]("!") + "obfiowerehiring" + i)))["concat"](sc)), [Wc]))["map"](uc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.3a6ccc0a.js.map