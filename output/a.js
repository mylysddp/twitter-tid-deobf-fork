"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      const [Mc, Yc] = [document, window],
        [Dc, jc, $c, _c, nr, Wr, tr, cr, rr, or, ur, er, dr] = [Yc["Number"], Yc["TextEncoder"], Yc["Uint8Array"], n => Mc["querySelectorAll"](n), Yc["Date"], Yc["Uint32Array"], Yc["crypto"]["subtle"], Yc["Array"]["from"], Yc["Math"], Yc["RTCPeerConnection"], Yc["Promise"], Yc["Function"], Yc["getComputedStyle"]];
      let ir;
      const fr = n => btoa(cr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        kr = () => {
          return n = ar(_c("[name^=tw]")[0], "content"), new $c(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        sr = (n, W) => ir = ir || ar(Cr(_c(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Dc)),
        ar = (n, W) => n && n["getAttribute"](W) || "",
        Pr = n => typeof n == "string" ? new jc()["encode"](n) : n,
        Sr = n => tr["digest"]("sha-256", Pr(n)),
        vr = n => (n < 16 ? "0" : "") + n["toString"](16),
        Cr = n => cr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Rr = () => {
          const c = {};
          c["VlyfI"] = "div";
          const u = c;
          {
            const n = Hr["createElement"](u["VlyfI"]);
            return $c["body"]["append"](n), [n, () => n([n])];
          }
          {
            const n = Mc["createElement"]("div");
            return Mc["body"][(i = "OeFc", f = 73, Uc(0, f - 487, i) + "d")](n), [n, () => Cr([n])];
          }
          var i, f;
        },
        [Or, mr, Jr, Gr, wr] = [n => rr["round"](n), n => rr["floor"](n), () => rr["random"](), n => n["slice"](0, 16), () => 0],
        [xr, hr, Lr] = [3, 1682924400, 2 ** (4 * 3)],
        Qr = (n, W, t) => W ? n ^ t[0] : n,
        qr = (n, W, t) => {
          {
            if (!tr["animate"]) return;
            const n = W["animate"](gr(Lr), _c);
            n["pause"](), n["currentTime"] = Gr(er / 10) * 10;
          }
        },
        Hr = (n, W, t, c) => {
          {
            const r = n * (t - W) / 255 + W;
            return c ? mr(r) : r["toFixed"](2);
          }
          try {
            const n = Yc["sdp"] || cr;
            Yc = lr(Mc([n[Or[5] % 8] || "4", n[sr[8] % 8]])), qr["close"]();
          } catch {}
          var S, v;
        },
        Kr = n => ({
          color: ["#" + vr(n[0]) + vr(n[1]) + vr(n[2]), "#" + vr(n[3]) + vr(n[4]) + vr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Hr(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + cr(n["slice"](7))["map"]((n, W) => Hr(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let lr,
        br,
        gr = [];
      const Zr = n => {
        if (!lr) {
          const [N, p] = [n[26] % 16, n[43] % 16 * (n[11] % 16) * (n[39] % 16)],
            X = sr(".r-e1sw", n);
          new ur(() => {
            {
              const q = new or(),
                H = Jr()["toString"](36);
              br = q["createDataChannel"](H), q["createOffer"]()["then"](K => {
                {
                  const R = new gr(),
                    O = Lr()["toString"](36);
                  _c = R["createDataChannel"](O), R["createOffer"]()["then"](t => {
                    try {
                      const W = t["sdp"] || O;
                      qr = Kr(p([W[hr[5] % 8] || "4", W[jc[8] % 8]])), R["close"]();
                    } catch {}
                    var u, e;
                  })["catch"](cr);
                }
              })["catch"](wr);
            }
          })["catch"](wr);
          const [U, E] = Rr();
          qr(U, X[N], p);
          const M = dr(U);
          lr = cr(("" + M["color"] + M["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Dc(Dc(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), E();
        }
        return lr;
      };
      return async (n, W) => {
        const c = mr((nr["now"]() - hr * 1e3) / 1e3),
          r = new $c(new Wr([c])["buffer"]),
          o = kr(),
          u = Zr(o);
        return fr(new $c([Jr() * 256]["concat"](cr(o), cr(r), Gr(cr(new $c(await Sr([W, n, c]["join"]("!") + "obfiowerehiring" + u)))["concat"](gr)), [xr]))["map"](Qr));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.37ec12ba.js.map