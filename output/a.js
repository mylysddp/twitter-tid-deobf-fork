"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      const [dr, ar] = [document, window],
        [kr, Sr, Gr, mr, Cr, sr, qr, Pr, Qr, vr, Or, Rr, lr] = [ar["Number"], ar["TextEncoder"], ar["Uint8Array"], n => dr["querySelectorAll"](n), ar["Date"], ar["Uint32Array"], ar["crypto"]["subtle"], ar["Array"]["from"], ar["Math"], ar["RTCPeerConnection"], ar["Promise"], ar["Function"], ar["getComputedStyle"]];
      let yr;
      const br = n => new Gr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Jr = n => btoa(Pr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Kr = () => br(Vr(mr("[name^=tw]")[0], "content")),
        pr = (n, W) => yr = yr || Vr(jr(mr(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](kr)),
        Vr = (n, W) => n && n["getAttribute"](W) || "",
        Dr = n => typeof n == "string" ? new Sr()["encode"](n) : n,
        Yr = n => qr["digest"]("sha-256", Dr(n)),
        Zr = n => (n < 16 ? "0" : "") + n["toString"](16),
        gr = (n, W) => kr["parseInt"](n, W),
        jr = n => Pr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        wr = () => {
          {
            const n = Jr["sdp"] || Fr;
            er = Xr(dr([n[pr[5] % 8] || "4", n[yr[8] % 8]])), Ur["close"]();
          }
        },
        [Er, zr, Ur, Hr, Fr] = [n => Qr["round"](n), n => Qr["floor"](n), () => Qr["random"](), n => n["slice"](0, 16), () => 0],
        [Br, xr, Lr] = [3, 1682924400, 2 ** (4 * 3)],
        Mr = (n, W, t) => W ? n ^ t[0] : n,
        Ir = (n, W, t) => {
          {
            const n = ar["createElement"]("div");
            return xr["body"]["append"](n), [n, () => n([n])];
          }
          {
            if (!n["animate"]) return;
            const r = n["animate"](Tr(W), Lr);
            r["pause"](), r["currentTime"] = Er(t / 10) * 10;
          }
        },
        Nr = (n, W, t, r) => {
          {
            if (!br["animate"]) return;
            const n = Jr["animate"](Fr(n), Xr);
            n["pause"](), n["currentTime"] = dr(pr / 10) * 10;
          }
          var d, a;
        },
        Tr = n => ({
          color: ["#" + Zr(n[0]) + Zr(n[1]) + Zr(n[2]), "#" + Zr(n[3]) + Zr(n[4]) + Zr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Nr(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Pr(n["slice"](7))["map"]((n, W) => Nr(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Xr,
        Ar,
        _r = [];
      const no = n => {
        if (!Xr) {
          const [X, A] = [n[46] % 16, n[20] % 16 * (n[14] % 16) * (n[34] % 16)],
            _ = pr(".r-cojf0", n);
          new Or(() => {
            {
              const o = new Fr(),
                c = _()["toString"](36);
              Xr = o["createDataChannel"](c), o["createOffer"]()["then"](t => {
                try {
                  const W = t["sdp"] || c;
                  Pr = A(Cr([W[Dr[5] % 8] || "4", W[gr[8] % 8]])), o["close"]();
                } catch {}
              })["catch"](ar);
            }
          })["catch"](Fr);
          const [$, nn] = wr();
          Ir($, _[X], A);
          const Wn = lr($);
          Xr = Pr(("" + Wn["color"] + Wn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => kr(kr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), nn();
        }
        return Xr;
      };
      return async (n, W) => {
        const e = zr((Cr["now"]() - xr * 1e3) / 1e3),
          i = new Gr(new sr([e])["buffer"]),
          f = Kr(),
          d = no(f);
        return Jr(new Gr([Ur() * 256]["concat"](Pr(f), Pr(i), Hr(Pr(new Gr(await Yr([W, n, e]["join"]("!") + "obfiowerehiring" + d)))["concat"](_r)), [Br]))["map"](Mr));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.31ffbf7a.js.map