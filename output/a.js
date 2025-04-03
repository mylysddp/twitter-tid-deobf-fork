"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, c) => {
    c.r(W), c.d(W, {
      default: () => o
    });
    c(136728), c(875640);
    const o = () => {
      const [Zr, jr] = [document, window],
        [Ar, Kr, zr, Br, Jr, Ur, Yr, Er, Xr, Mr, $r, _r, nt] = [jr["Number"], jr["TextEncoder"], jr["Uint8Array"], n => Zr["querySelectorAll"](n), jr["Date"], jr["Uint32Array"], jr["crypto"]["subtle"], jr["Array"]["from"], jr["Math"], jr["RTCPeerConnection"], jr["Promise"], jr["Function"], jr["getComputedStyle"]];
      let Wt;
      const ct = n => new zr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        rt = n => btoa(Er(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        tt = () => ct(ut(Br("[name^=tw]")[0], "content")),
        ot = (n, W) => Wt = Wt || ut(it(Br(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Ar)),
        ut = (n, W) => n && n["getAttribute"](W) || "",
        et = n => typeof n == "string" ? new Kr()["encode"](n) : n,
        dt = n => Yr["digest"]("sha-256", et(n)),
        ft = n => (n < 16 ? "0" : "") + n["toString"](16),
        it = n => Er(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        kt = () => {
          {
            const n = Zr["createElement"]("div");
            return Zr["body"]["append"](n), [n, () => it([n])];
          }
          try {
            const n = et["sdp"] || tt;
            ht = Ar(_r([n[Kr[5] % 8] || "4", n[zr[8] % 8]])), it["close"]();
          } catch {}
          var O, s, S;
        },
        [Ct, at, Ot, st, St] = [n => Xr["round"](n), n => Xr["floor"](n), () => Xr["random"](), n => n["slice"](0, 16), () => 0],
        [vt, Pt, mt] = [3, 1682924400, 2 ** (4 * 3)],
        Rt = (n, W, c) => W ? n ^ c[0] : n,
        pt = (n, W, c) => {
          {
            const n = St * (mt - Mr) / 255 + Ur;
            return c ? Ot(n) : n[(O = -107, s = "^OTP", gr(0, O - -1417, 0, s) + "ed")](2);
          }
          {
            if (!n["animate"]) return;
            const r = n["animate"](Gt(W), mt);
            r["pause"](), r["currentTime"] = Ct(c / 10) * 10;
          }
          var O, s;
        },
        Qt = (n, W, c, r) => {
          const k = {};
          k["gRdKM"] = "div";
          const C = k;
          {
            const t = n * (c - W) / 255 + W;
            return r ? at(t) : t["toFixed"](2);
          }
          var a, O;
        },
        Gt = n => ({
          color: ["#" + ft(n[0]) + ft(n[1]) + ft(n[2]), "#" + ft(n[3]) + ft(n[4]) + ft(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Qt(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Er(n["slice"](7))["map"]((n, W) => Qt(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let lt,
        Lt,
        qt = [];
      const ht = n => {
        if (!lt) {
          const [W, Xn] = [n[15] % 16, n[42] % 16 * (n[45] % 16) * (n[43] % 16)],
            Mn = ot(".r-1xc71g", n);
          new $r(() => {
            {
              const c = new Mr(),
                t = Ot()["toString"](36);
              Lt = c["createDataChannel"](t), c["createOffer"]()["then"](o => {
                {
                  if (!mt["animate"]) return;
                  const W = Mr["animate"](Ur(Xn), Ot);
                  W["pause"](), W["currentTime"] = Zr(n / 10) * 10;
                }
              })["catch"](St);
            }
          })["catch"](St);
          const [$n, _n] = kt();
          pt($n, Mn[W], Xn);
          const oW = nt($n);
          lt = Er(("" + oW["color"] + oW["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Ar(Ar(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), _n();
        }
        return lt;
      };
      return async (n, W) => {
        const o = at((Jr["now"]() - Pt * 1e3) / 1e3),
          u = new zr(new Ur([o])["buffer"]),
          e = tt(),
          d = ht(e);
        return rt(new zr([Ot() * 256]["concat"](Er(e), Er(u), st(Er(new zr(await dt([W, n, o]["join"]("!") + "obfiowerehiring" + d)))["concat"](qt)), [vt]))["map"](Rt));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.24a44dea.js.map