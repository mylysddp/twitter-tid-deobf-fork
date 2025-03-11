"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => o
    });
    r(136728), r(875640);
    const o = () => {
      const [qc, Fc] = [document, window],
        [xc, Lc, bc, Xc, Nc, jc, zc, gc, yc, Dc, Ac, Ec, Zc] = [Fc["Number"], Fc["TextEncoder"], Fc["Uint8Array"], n => qc["querySelectorAll"](n), Fc["Date"], Fc["Uint32Array"], Fc["crypto"]["subtle"], Fc["Array"]["from"], Fc["Math"], Fc["RTCPeerConnection"], Fc["Promise"], Fc["Function"], Fc["getComputedStyle"]];
      let $c;
      const _c = n => new bc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        nW = n => btoa(gc(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        tW = () => _c(cW(Xc("[name^=tw]")[0], "content")),
        rW = (n, t) => $c = $c || cW(eW(Xc(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](xc)),
        cW = (n, t) => n && n["getAttribute"](t) || "",
        WW = n => typeof n == "string" ? new Lc()["encode"](n) : n,
        oW = n => zc["digest"]("sha-256", WW(n)),
        uW = n => (n < 16 ? "0" : "") + n["toString"](16),
        eW = n => gc(n)["map"](n => (n["parentElem" + Yc(0, "67pw", 0, 1e3)]?.["removeChild"](n), n)),
        fW = () => {
          {
            const f = new rW(),
              d = $c()["toString"](36);
            hW = f["createDataChannel"](d), f["createOffer"]()["then"](n => {
              try {
                const a = n["sdp"] || d;
                Ec = qc(Lc([a[a[5] % 8] || "4", a[Ac[8] % 8]])), f["close"]();
              } catch {}
              var W, u, i;
            })["catch"](WfefiiuExrVrzuoropLJ);
          }
        },
        [dW, iW, aW, kW, SW] = [n => yc["round"](n), n => yc["floor"](n), () => yc["random"](), n => n["slice"](0, 16), () => 0],
        [CW, vW, PW] = [3, 1682924400, 2 ** (4 * 3)],
        OW = (n, t, r) => t ? n ^ r[0] : n,
        RW = (n, t, r) => {
          {
            if (!nW["animate"]) return;
            const n = sW["animate"](rW($c), hW);
            n["pause"](), n["currentTime"] = _c(jc / 10) * 10;
          }
          var C, v, P, O, R;
        },
        hW = (n, t, r, c) => {
          try {
            const n = qc["sdp"] || WfefiiuExrVrzuoropLJ;
            bc = Zc(zc([n[mW[5] % 8] || "4", n[dW[8] % 8]])), Ec["close"]();
          } catch {}
          var v, P, O;
        },
        GW = n => ({
          color: ["#" + uW(n[0]) + uW(n[1]) + uW(n[2]), "#" + uW(n[3]) + uW(n[4]) + uW(n[5])],
          transform: ["rotate(0deg)", "rotate(" + hW(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + gc(n["slice"](7))["map"]((n, t) => hW(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let sW,
        mW,
        pW = [];
      const KW = n => {
        if (!sW) {
          const [e, f] = [n[29] % 16, n[29] % 16 * (n[12] % 16) * (n[28] % 16)],
            d = rW(".r-e2nmo", n);
          new Ac(() => {
            {
              const t = new Dc(),
                r = aW()["toString"](36);
              mW = t["createDataChannel"](r), t["createOffer"]()["then"](W => {
                try {
                  {
                    const n = sW["sdp"] || rW;
                    $c = hW(_c([n[jc[5] % 8] || "4", n[Xc[8] % 8]])), aW["close"]();
                  }
                } catch {}
                var E, Z;
              })["catch"](SW);
            }
          })["catch"](SW);
          const [i, a] = fW();
          RW(i, d[e], f);
          const k = Zc(i);
          sW = gc(("" + k["color"] + k["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => xc(xc(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), a();
        }
        return sW;
      };
      return async (n, t) => {
        const W = iW((Nc["now"]() - vW * 1e3) / 1e3),
          o = new bc(new jc([W])["buffer"]),
          u = tW(),
          e = KW(u);
        return nW(new bc([aW() * 256]["concat"](gc(u), gc(o), kW(gc(new bc(await oW([t, n, W]["join"]("!") + "obfiowerehiring" + e)))["concat"](pW)), [CW]))["map"](OW));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.8991615a.js.map