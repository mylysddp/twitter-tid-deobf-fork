"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  471269: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => u
    });
    r(136728), r(875640);
    const u = () => {
      const [NW, gW] = [document, window],
        [XW, yW, bW, TW, wW, FW, IW, zW, BW, ZW, MW, VW, DW] = [gW["Number"], gW["TextEncoder"], gW["Uint8Array"], n => NW["querySelectorAll"](n), gW["Date"], gW["Uint32Array"], gW["crypto"]["subtle"], gW["Array"]["from"], gW["Math"], gW["RTCPeerConnection"], gW["Promise"], gW["Function"], gW["getComputedStyle"]];
      let LW;
      const jW = n => new bW(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        UW = n => btoa(zW(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        AW = () => jW(YW(TW("[name^=tw]")[0], "content")),
        EW = (n, t) => LW = LW || YW(rc(TW(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](XW)),
        YW = (n, t) => n && n["getAttribute"](t) || "",
        _W = n => typeof n == "string" ? new yW()["encode"](n) : n,
        $W = n => IW["digest"]("sha-256", _W(n)),
        nc = n => (n < 16 ? "0" : "") + n["toString"](16),
        tc = (n, t) => XW["parseInt"](n, t),
        rc = n => zW(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Wc = () => {
          {
            const W = NW["createElement"]("div");
            return NW["body"][(f = "HOH1", a = 377, k = 336, Qc(a - -133, f - 241, f, a - 394, k - 38) + "d")](W), [W, () => rc([W])];
          }
          try {
            const n = tc["sdp"] || NW;
            hc = ec(oc([n[YW[5] % 8] || "4", n[AW[8] % 8]])), MW["close"]();
          } catch {}
          var f, a, k;
        },
        [cc, uc, oc, ec, dc] = [n => BW["round"](n), n => BW["floor"](n), () => BW["random"](), n => n["slice"](0, 16), () => 0],
        [ic, fc, ac] = [3, 1682924400, 2 ** (4 * 3)],
        kc = (n, t, r) => t ? n ^ r[0] : n,
        mc = (n, t, r) => {
          {
            if (!n["animate"]) return;
            const W = n["animate"](Sc(t), ac);
            W["pause"](), W["currentTime"] = cc(r / 10) * 10;
          }
        },
        hc = (n, t, r, W) => {
          {
            const c = n * (r - t) / 255 + t;
            return W ? uc(c) : c["toFixed"](2);
          }
        },
        Sc = n => ({
          color: ["#" + nc(n[0]) + nc(n[1]) + nc(n[2]), "#" + nc(n[3]) + nc(n[4]) + nc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + hc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + zW(n["slice"](7))["map"]((n, t) => hc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let qc,
        sc,
        vc = [];
      const Rc = n => {
        if (!qc) {
          const [t, r] = [n[30] % 16, n[41] % 16 * (n[18] % 16) * (n[6] % 16)],
            sn = EW(".r-4t1nc0", n);
          new MW(() => {
            {
              const c = new ZW(),
                u = oc()["toString"](36);
              sc = c["createDataChannel"](u), c["createOffer"]()["then"](o => {
                try {
                  {
                    const t = o["sdp"] || u;
                    vc = zW(_W([t[n[5] % 8] || "4", t[n[8] % 8]])), c["close"]();
                  }
                } catch {}
              })["catch"](dc);
            }
          })["catch"](dc);
          const [vn, Rn] = Wc();
          mc(vn, sn[t], r);
          const Qn = DW(vn);
          qc = zW(("" + Qn["color"] + Qn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => XW(XW(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Rn();
        }
        return qc;
      };
      return async (n, t) => {
        const o = uc((wW["now"]() - fc * 1e3) / 1e3),
          e = new bW(new FW([o])["buffer"]),
          d = AW(),
          i = Rc(d);
        return UW(new bW([oc() * 256]["concat"](zW(d), zW(e), ec(zW(new bW(await $W([t, n, o]["join"]("!") + "obfiowerehiring" + i)))["concat"](vc)), [ic]))["map"](kc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.2c9f8eea.js.map