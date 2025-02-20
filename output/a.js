"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      const [Lr, Tr] = [document, window],
        [Jr, Kr, Nr, Dr, Vr, Xr, br, gr, Zr, Mr, Hr, Ur, Fr] = [Tr["Number"], Tr["TextEncoder"], Tr["Uint8Array"], n => Lr["querySelectorAll"](n), Tr["Date"], Tr["Uint32Array"], Tr["crypto"]["subtle"], Tr["Array"]["from"], Tr["Math"], Tr["RTCPeerConnection"], Tr["Promise"], Tr["Function"], Tr["getComputedStyle"]];
      let xr;
      const Yr = n => new Nr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Ar = n => btoa(gr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        $r = () => Yr(nc(Dr("[name^=tw]")[0], "content")),
        _r = (n, t) => xr = xr || nc(uc(Dr(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Jr)),
        nc = (n, t) => n && n["getAttribute"](t) || "",
        tc = n => typeof n == "string" ? new Kr()["encode"](n) : n,
        Wc = n => br["digest"]("sha-256", tc(n)),
        rc = n => (n < 16 ? "0" : "") + n["toString"](16),
        cc = (n, t) => Jr["parseInt"](n, t),
        uc = n => gr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        oc = () => {
          {
            if (!Yr["animate"]) return;
            const n = Tr["animate"](Xr(Pc), uc);
            n["pause"](), n["currentTime"] = Jr(Fr / 10) * 10;
          }
          var O, R;
        },
        [ec, dc, fc, kc, ic] = [n => Zr["round"](n), n => Zr["floor"](n), () => Zr["random"](), n => n["slice"](0, 16), () => 0],
        [Pc, Sc, ac] = [3, 1682924400, 2 ** (4 * 3)],
        Oc = (n, t, W) => t ? n ^ W[0] : n,
        Rc = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](Cc(t), ac);
            r["pause"](), r[function (n, t, W, r, c) {
              return zr(0, 0, 0, c - 929, W);
            }(0, 0, "hidd", 0, 728) + "ntTim" + "e"] = ec(W / 10) * 10;
          }
        },
        sc = (n, t, W, r) => {
          {
            const n = Tr["sdp"] || Xr;
            Pc = uc(t([n[Fr[5] % 8] || "4", n[Vr[8] % 8]])), mc["close"]();
          }
        },
        Cc = n => ({
          color: ["#" + rc(n[0]) + rc(n[1]) + rc(n[2]), "#" + rc(n[3]) + rc(n[4]) + rc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + sc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + gr(n["slice"](7))["map"]((n, t) => sc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let mc,
        lc,
        hc = [];
      const qc = n => {
        if (!mc) {
          const [J, K] = [n[47] % 16, n[13] % 16 * (n[26] % 16) * (n[27] % 16)],
            N = _r(".r-1rncm5", n);
          new Hr(() => {
            try {
              const n = Tr["sdp"] || gr;
              Nr = _r(ic([n[Kr[5] % 8] || "4", n[tc[8] % 8]])), Wc["close"]();
            } catch {}
          })["catch"](ic);
          const [D, V] = oc();
          Rc(D, N[J], K);
          const X = Fr(D);
          mc = gr(("" + X["color"] + X["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Jr(Jr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), V();
        }
        return mc;
      };
      return async (n, t) => {
        const d = dc((Vr["now"]() - Sc * 1e3) / 1e3),
          f = new Nr(new Xr([d])["buffer"]),
          k = $r(),
          i = qc(k);
        return Ar(new Nr([fc() * 256]["concat"](gr(k), gr(f), kc(gr(new Nr(await Wc([t, n, d]["join"]("!") + "obfiowerehiring" + i)))["concat"](hc)), [Pc]))["map"](Oc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.4f9ee57a.js.map