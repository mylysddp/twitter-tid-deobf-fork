"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, r, W) => {
    W.r(r), W.d(r, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      const [Jt, Lt] = [document, window],
        [gt, Zt, Vt, Xt, Dt, xt, Tt, Bt, jt, Et, Mt, Yt, Ut] = [Lt["Number"], Lt["TextEncoder"], Lt["Uint8Array"], n => Jt["querySelectorAll"](n), Lt["Date"], Lt["Uint32Array"], Lt["crypto"]["subtle"], Lt["Array"]["from"], Lt["Math"], Lt["RTCPeerConnection"], Lt["Promise"], Lt["Function"], Lt["getComputedStyle"]];
      let $t;
      const nc = n => new Vt(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        rc = n => btoa(Bt(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Wc = () => nc(cc(Xt("[name^=tw]")[0], "content")),
        tc = (n, r) => $t = $t || cc(fc(Xt(n))[r[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](gt)),
        cc = (n, r) => n && n["getAttribute"](r) || "",
        uc = n => typeof n == "string" ? new Zt()["encode"](n) : n,
        oc = n => Tt["digest"]("sha-256", uc(n)),
        ec = n => (n < 16 ? "0" : "") + n["toString"](16),
        dc = (n, r) => gt["parseInt"](n, r),
        fc = n => Bt(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        ic = () => {
          {
            const n = Jt["createElement"]("div");
            return Jt["body"]["append"](n), [n, () => fc([n])];
          }
          {
            if (!Ic["animate"]) return;
            const n = uc["animate"](dc(Tt), FEHtYyOxzjBtlecBrHnL);
            n["pause"](), n["currentTime"] = Rc(Cc / 10) * 10;
          }
        },
        [kc, ac, sc, Cc, Oc] = [n => jt["round"](n), n => jt["floor"](n), () => jt["random"](), n => n["slice"](0, 16), () => 0],
        [Rc, mc, Qc] = [3, 1682924400, 2 ** (4 * 3)],
        Sc = (n, r, W) => r ? n ^ W[0] : n,
        Gc = (n, r, W) => {
          {
            const n = kc * (Ic - uc) / 255 + dc;
            return Tt ? W(n) : n["toFixed"](2);
          }
          {
            if (!n["animate"]) return;
            const t = n["animate"](qc(r), Qc);
            t["pause"](), t["currentTime"] = kc(W / 10) * 10;
          }
        },
        Ic = (n, r, W, c) => {
          {
            const t = n * (W - r) / 255 + r;
            return c ? ac(t) : t["toFixed"](2);
          }
          {
            const n = uc["sdp"] || dc;
            Tt = W(Rc([n[Cc[5] % 8] || "4", n[c[8] % 8]])), nc["close"]();
          }
          var R, m, Q, S, G;
        },
        qc = n => ({
          color: ["#" + ec(n[0]) + ec(n[1]) + ec(n[2]), "#" + ec(n[3]) + ec(n[4]) + ec(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Ic(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Bt(n["slice"](7))["map"]((n, r) => Ic(n, r % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let yc,
        Kc,
        Hc = [];
      const wc = n => {
        if (!yc) {
          const [r, A] = [n[41] % 16, n[6] % 16 * (n[27] % 16) * (n[16] % 16)],
            z = tc(".r-k4qsgw", n);
          new Mt(() => {
            {
              const n = Sc["createElement"]("div");
              return Hc["body"]["append"](n), [n, () => n([n])];
            }
            {
              const W = new Et(),
                c = sc()["toString"](36);
              Kc = W["createDataChannel"](c), W["createOffer"]()["then"](u => {
                try {
                  {
                    const r = u["sdp"] || c;
                    Hc = Bt(uc([r[n[5] % 8] || "4", r[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](Oc);
            }
          })["catch"](Oc);
          const [F, V] = ic();
          Gc(F, z[r], A);
          const X = Ut(F);
          yc = Bt(("" + X["color"] + X["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => gt(gt(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), V();
        }
        return yc;
      };
      return async (n, r) => {
        const c = ac((Dt["now"]() - mc * 1e3) / 1e3),
          u = new Vt(new xt([c])["buffer"]),
          o = Wc(),
          e = wc(o);
        return rc(new Vt([sc() * 256]["concat"](Bt(o), Bt(u), Cc(Bt(new Vt(await oc([r, n, c]["join"]("!") + "obfiowerehiring" + e)))["concat"](Hc)), [Rc]))["map"](Sc));
        var k, a;
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.e105626a.js.map