"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  471269: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      const [lW, KW] = [document, window],
        [JW, ZW, yW, wW, vW, qW, jW, FW, LW, VW, HW, BW, IW] = [KW["Number"], KW["TextEncoder"], KW["Uint8Array"], n => lW["querySelectorAll"](n), KW["Date"], KW["Uint32Array"], KW["crypto"]["subtle"], KW["Array"]["from"], KW["Math"], KW["RTCPeerConnection"], KW["Promise"], KW["Function"], KW["getComputedStyle"]];
      let gW;
      const EW = n => btoa(FW(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        TW = () => {
          return n = AW(wW("[name^=tw]")[0], "content"), new yW(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        UW = (n, t) => gW = gW || AW(XW(wW(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](JW)),
        AW = (n, t) => n && n["getAttribute"](t) || "",
        YW = n => typeof n == "string" ? new ZW()["encode"](n) : n,
        zW = n => jW["digest"]("sha-256", YW(n)),
        DW = n => (n < 16 ? "0" : "") + n["toString"](16),
        XW = n => FW(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        $W = () => {
          {
            const n = lW["createElement"]("div");
            return lW["body"]["append"](n), [n, () => XW([n])];
          }
          {
            const n = gW["sdp"] || ZW;
            lW = ZW(er([n[EW[5] % 8] || "4", n[FW[8] % 8]])), ir["close"]();
          }
        },
        [_W, nr, tr, Wr, rr] = [n => LW["round"](n), n => LW["floor"](n), () => LW["random"](), n => n["slice"](0, 16), () => 0],
        [ur, cr, or] = [3, 1682924400, 2 ** (4 * 3)],
        er = (n, t, W) => t ? n ^ W[0] : n,
        ir = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](dr(t), or);
            r["pause"](), r["currentTime"] = _W(W / 10) * 10;
          }
          var s, S;
        },
        fr = (n, t, W, r) => {
          {
            const u = n * (W - t) / 255 + t;
            return r ? nr(u) : u["toFixed"](2);
          }
        },
        dr = n => ({
          color: ["#" + DW(n[0]) + DW(n[1]) + DW(n[2]), "#" + DW(n[3]) + DW(n[4]) + DW(n[5])],
          transform: ["rotate(0deg)", "rotate(" + fr(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + FW(n["slice"](7))["map"]((n, t) => fr(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let kr,
        sr,
        Sr = [];
      const Cr = n => {
        if (!kr) {
          const [b, p] = [n[45] % 16, n[32] % 16 * (n[17] % 16) * (n[33] % 16)],
            l = UW(".r-z5ak0", n);
          new HW(() => {
            {
              const t = new VW(),
                W = tr()["toString"](36);
              sr = t["createDataChannel"](W), t["createOffer"]()["then"](u => {
                try {
                  {
                    const r = u["sdp"] || W;
                    Sr = FW(YW([r[n[5] % 8] || "4", r[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](rr);
            }
          })["catch"](rr);
          const [K, J] = $W();
          ir(K, l[b], p);
          const Z = IW(K);
          kr = FW(("" + Z["color"] + Z["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => JW(JW(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), J();
        }
        return kr;
      };
      return async (n, t) => {
        const i = nr((vW["now"]() - cr * 1e3) / 1e3),
          f = new yW(new qW([i])["buffer"]),
          d = TW(),
          k = Cr(d);
        return EW(new yW([tr() * 256]["concat"](FW(d), FW(f), Wr(FW(new yW(await zW([t, n, i]["join"]("!") + "obfiowerehiring" + k)))["concat"](Sr)), [ur]))["map"](er));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.e6bb9bba.js.map