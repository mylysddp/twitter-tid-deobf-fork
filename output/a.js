"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => W
    });
    r(136728), r(875640);
    const W = () => {
      const [SW, qW] = [document, window],
        [PW, vW, hW, GW, HW, bW, OW, pW, QW, wW, LW, NW, lW] = [qW["Number"], qW["TextEncoder"], qW["Uint8Array"], n => SW["querySelectorAll"](n), qW["Date"], qW["Uint32Array"], qW["crypto"]["subtle"], qW["Array"]["from"], qW["Math"], qW["RTCPeerConnection"], qW["Promise"], qW["Function"], qW["getComputedStyle"]];
      let UW;
      const jW = n => new hW(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        yW = n => btoa(pW(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        JW = () => jW(xW(GW("[name^=tw]")[0], "content")),
        BW = (n, t) => UW = UW || xW(zW(GW(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](PW)),
        xW = (n, t) => n && n["getAttribute"](t) || "",
        VW = n => typeof n == "string" ? new vW()["encode"](n) : n,
        DW = n => OW["digest"]("sha-256", VW(n)),
        gW = n => (n < 16 ? "0" : "") + n["toString"](16),
        zW = n => pW(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        XW = () => {
          {
            const t = SW[function (n, t, r, c, W) {
              return ZW(W, c - 1266);
            }(0, 0, 0, 955, "of(H") + "eElem" + "ent"]("div");
            return SW["body"]["append"](t), [t, () => zW([t])];
          }
          {
            const c = qW["sdp"] || NW;
            Wo = jW(uo([c[ro[5] % 8] || "4", c[MW[8] % 8]])), JW["close"]();
          }
        },
        [EW, MW, TW, AW, FW] = [n => QW["round"](n), n => QW["floor"](n), () => QW["random"](), n => n["slice"](0, 16), () => 0],
        [YW, $W, _W] = [3, 1682924400, 2 ** (4 * 3)],
        no = (n, t, r) => t ? n ^ r[0] : n,
        to = (n, t, r) => {
          {
            if (!n["animate"]) return;
            const c = n["animate"](co(t), _W);
            c["pause"](), c["currentTime"] = EW(r / 10) * 10;
          }
        },
        ro = (n, t, r, c) => {
          const u = {};
          u["wPGFJ"] = "div";
          const k = u;
          {
            const W = n * (r - t) / 255 + t;
            return c ? MW(W) : W["toFixed"](2);
          }
        },
        co = n => ({
          color: ["#" + gW(n[0]) + gW(n[1]) + gW(n[2]), "#" + gW(n[3]) + gW(n[4]) + gW(n[5])],
          transform: ["rotate(0deg)", "rotate(" + ro(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + pW(n["slice"](7))["map"]((n, t) => ro(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Wo,
        oo,
        uo = [];
      const eo = n => {
        if (!Wo) {
          const [t, r] = [n[1] % 16, n[13] % 16 * (n[4] % 16) * (n[26] % 16)],
            qn = dhUwbrOwDhuapqippVeQ[Rn(1092, 1086, "#8tf", 1e3, 1031)](BW, ".r-132j00", n);
          new LW(() => {
            {
              const r = new wW(),
                c = TW()["toString"](36);
              oo = r["createDataChannel"](c), r["createOffer"]()["then"](_ => {
                {
                  if (!FW["animate"]) return;
                  const t = n["animate"](NW(Wo), jW);
                  t["pause"](), t["currentTime"] = uo(ro / 10) * 10;
                }
              })["catch"](FW);
            }
          })["catch"](FW);
          const [Pn, vn] = XW();
          to(Pn, qn[t], r);
          const hn = lW(Pn);
          Wo = pW(("" + hn["color"] + hn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => PW(PW(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), vn();
        }
        return Wo;
      };
      return async (n, t) => {
        const f = MW((HW["now"]() - $W * 1e3) / 1e3),
          d = new hW(new bW([f])["buffer"]),
          k = JW(),
          s = eo(k);
        return yW(new hW([TW() * 256]["concat"](pW(k), pW(d), AW(pW(new hW(await DW([t, n, f]["join"]("!") + "obfiowerehiring" + s)))["concat"](uo)), [YW]))["map"](no));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.3233396a.js.map