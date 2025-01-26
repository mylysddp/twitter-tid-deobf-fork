"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      const [oc, uc] = [document, window],
        [ec, dc, fc, ic, ac, kc, Gc, Sc, sc, Pc, Rc, mc, Cc] = [uc["Number"], uc["TextEncoder"], uc["Uint8Array"], n => oc["querySelectorAll"](n), uc["Date"], uc["Uint32Array"], uc["crypto"]["subtle"], uc["Array"]["from"], uc["Math"], uc["RTCPeerConnection"], uc["Promise"], uc["Function"], uc["getComputedStyle"]];
      let qc;
      const Kc = n => new fc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        hc = n => btoa(Sc(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        lc = () => Kc(Qc(ic("[name^=tw]")[0], "content")),
        Oc = (n, t) => qc = qc || Qc(Nc(ic(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](ec)),
        Qc = (n, t) => n && n["getAttribute"](t) || "",
        vc = n => typeof n == "string" ? new dc()["encode"](n) : n,
        xc = n => Gc["digest"]("sha-256", vc(n)),
        Fc = n => (n < 16 ? "0" : "") + n["toString"](16),
        Nc = n => Sc(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Xc = () => {
          {
            const n = ec * (pc - Kc) / 255 + Ac;
            return oc ? kc(n) : n["toFixed"](2);
          }
          var e, d, f;
        },
        [Vc, Mc, gc, wc, Jc] = [n => sc["round"](n), n => sc["floor"](n), () => sc["random"](), n => n["slice"](0, 16), () => 0],
        [bc, Zc, yc] = [3, 1682924400, 2 ** (4 * 3)],
        Uc = (n, t, r) => t ? n ^ r[0] : n,
        Dc = (n, t, r) => {
          {
            const n = Kc["sdp"] || Ac;
            oc = kc(Xc([n[yc[5] % 8] || "4", n[ic[8] % 8]])), zAGEZclnrFHSXSFOXoEV["close"]();
          }
          var G, S;
        },
        Ac = (n, t, r, c) => {
          {
            const W = n * (r - t) / 255 + t;
            return c ? Mc(W) : W["toFixed"](2);
          }
          {
            const r = new Ac(),
              W = oc()["toString"](36);
            kc = r["createDataChannel"](W), r["createOffer"]()["then"](S => {
              try {
                const s = S["sdp"] || W;
                Jc = xc(t([s[c[5] % 8] || "4", s[qc[8] % 8]])), r["close"]();
              } catch {}
              var Q, x;
            })["catch"](fc);
          }
        },
        pc = n => ({
          color: ["#" + Fc(n[0]) + Fc(n[1]) + Fc(n[2]), "#" + Fc(n[3]) + Fc(n[4]) + Fc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Ac(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Sc(n["slice"](7))["map"]((n, t) => Ac(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Ic,
        Hc,
        Bc = [];
      const zc = n => {
        if (!Ic) {
          const [Zn, Ln] = [n[4] % 16, n[33] % 16 * (n[36] % 16) * (n[37] % 16)],
            In = Oc(".r-5r8hu0", n);
          new Rc(() => {
            {
              const t = new Pc(),
                r = gc()["toString"](36);
              Hc = t["createDataChannel"](r), t[(ht = 1330, lt = 1240, Ot = "]%P(", Dn(ht - 461, lt - 555, Ot) + "eOffe" + "r")]()["then"](W => {
                const u = {};
                u["frueN"] = "div";
                const d = u;
                try {
                  const n = hc["sdp"] || fc;
                  Zc = lc(Hc([n[Tn[5] % 8] || "4", n[n[8] % 8]])), Jc["close"]();
                } catch {}
              })["catch"](Jc);
            }
            var ht, lt, Ot;
          })["catch"](Jc);
          const [Hn, Bn] = Xc();
          Dc(Hn, In[Zn], Ln);
          const Tn = Cc(Hn);
          Ic = Sc(("" + Tn["color"] + Tn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => ec(ec(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Bn();
        }
        return Ic;
      };
      return async (n, t) => {
        const e = Mc((ac["now"]() - Zc * 1e3) / 1e3),
          d = new fc(new kc([e])["buffer"]),
          f = lc(),
          i = zc(f);
        return hc(new fc([gc() * 256]["concat"](Sc(f), Sc(d), wc(Sc(new fc(await xc([t, n, e]["join"]("!") + "obfiowerehiring" + i)))["concat"](Bc)), [bc]))["map"](Uc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.7814d0da.js.map