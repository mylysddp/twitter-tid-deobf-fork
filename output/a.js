"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => r
    });
    W(136728), W(875640);
    const r = () => {
      const [Zc, xc] = [document, window],
        [Mc, yc, Tc, Bc, wc, Fc, Uc, Xc, Ec, Yc, $c, _c, nr] = [xc["Number"], xc["TextEncoder"], xc["Uint8Array"], n => Zc["querySelectorAll"](n), xc["Date"], xc["Uint32Array"], xc["crypto"]["subtle"], xc["Array"]["from"], xc["Math"], xc["RTCPeerConnection"], xc["Promise"], xc["Function"], xc["getComputedStyle"]];
      let Wr;
      const cr = n => new Tc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        rr = n => btoa(Xc(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        or = () => cr(er(Bc("[name^=tw]")[0], "content")),
        ur = (n, t) => Wr = Wr || er(ar(Bc(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Mc)),
        er = (n, t) => n && n["getAttribute"](t) || "",
        ir = n => typeof n == "string" ? new yc()["encode"](n) : n,
        fr = n => Uc["digest"]("sha-256", ir(n)),
        dr = n => (n < 16 ? "0" : "") + n["toString"](16),
        ar = n => Xc(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        kr = () => {
          {
            const n = Zc["createElement"]("div");
            return Zc["body"]["append"](n), [n, () => ar([n])];
          }
          {
            if (!n["animate"]) return;
            const n = qr["animate"](Zc(xc), ar);
            n["pause"](), n["currentTime"] = er(Sr / 10) * 10;
          }
        },
        [Sr, Cr, mr, sr, qr] = [n => Ec["round"](n), n => Ec["floor"](n), () => Ec["random"](), n => n["slice"](0, 16), () => 0],
        [Qr, Jr, Or] = [3, 1682924400, 2 ** (4 * 3)],
        Gr = (n, t, W) => t ? n ^ W[0] : n,
        pr = (n, t, W) => {
          {
            const s = new n(),
              q = xc()["toString"](36);
            ar = s["createDataChannel"](q), s["createOffer"]()["then"](n => {
              try {
                const W = n["sdp"] || q;
                Cr = zr(Jr([W[Mc[5] % 8] || "4", W[ir[8] % 8]])), s["close"]();
              } catch {}
              var e, i, f;
            })["catch"](s);
          }
        },
        vr = (n, t, W, r) => {
          {
            const t = qr["sdp"] || n;
            xc = ar(er([t[Sr[5] % 8] || "4", t[Pr[8] % 8]])), Mc["close"]();
          }
        },
        Pr = n => ({
          color: ["#" + dr(n[0]) + dr(n[1]) + dr(n[2]), "#" + dr(n[3]) + dr(n[4]) + dr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + vr(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Xc(n["slice"](7))["map"]((n, t) => vr(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let zr,
        Nr,
        Hr = [];
      const Vr = n => {
        if (!zr) {
          const [qn, Qn] = [n[25] % 16, n[28] % 16 * (n[1] % 16) * (n[23] % 16)],
            Jn = ur(".r-1n0928", n);
          new $c(() => {
            {
              const t = new Yc(),
                W = mr()["toString"](36);
              Nr = t["createDataChannel"](W), t["createOffer"]()["then"](c => {
                const o = {};
                o["OJGmh"] = "div";
                const f = o;
                {
                  const n = nr["createElement"](f["OJGmh"]);
                  return cr["body"]["append"](n), [n, () => n([n])];
                }
                try {
                  try {
                    const n = Yc["sdp"] || t;
                    Bc = rr(Zc([n[mr[5] % 8] || "4", n[Or[8] % 8]])), Cr["close"]();
                  } catch {}
                } catch {}
              })["catch"](qr);
            }
          })["catch"](qr);
          const [On, Gn] = kr();
          pr(On, Jn[qn], Qn);
          const pn = nr(On);
          zr = Xc(("" + pn["color"] + pn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Mc(Mc(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Gn();
        }
        return zr;
      };
      return async (n, t) => {
        const W = Cr((wc["now"]() - Jr * 1e3) / 1e3),
          c = new Tc(new Fc([W])["buffer"]),
          r = or(),
          o = Vr(r);
        return rr(new Tc([mr() * 256]["concat"](Xc(r), Xc(c), sr(Xc(new Tc(await fr([t, n, W]["join"]("!") + "obfiowerehiring" + o)))["concat"](Hr)), [Qr]))["map"](Gr));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.4076ee8a.js.map