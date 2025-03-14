"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => u
    });
    t(136728), t(875640);
    const u = () => {
      const [Kr, jr] = [document, window],
        [Mr, Zr, Dr, Xr, Er, Ar, Yr, $r, _r, nc, Wc, tc, rc] = [jr["Number"], jr["TextEncoder"], jr["Uint8Array"], n => Kr["querySelectorAll"](n), jr["Date"], jr["Uint32Array"], jr["crypto"]["subtle"], jr["Array"]["from"], jr["Math"], jr["RTCPeerConnection"], jr["Promise"], jr["Function"], jr["getComputedStyle"]];
      let cc;
      const oc = n => btoa($r(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        ec = () => {
          return n = fc(Xr("[name^=tw]")[0], "content"), new Dr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        dc = (n, W) => cc = cc || fc(Qc(Xr(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Mr)),
        fc = (n, W) => n && n["getAttribute"](W) || "",
        kc = n => typeof n == "string" ? new Zr()["encode"](n) : n,
        ic = n => Yr["digest"]("sha-256", kc(n)),
        ac = n => (n < 16 ? "0" : "") + n["toString"](16),
        mc = (n, W) => Mr["parseInt"](n, W),
        Qc = n => $r(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Cc = () => {
          {
            const n = Kr["createElement"]("div");
            return Kr["body"]["append"](n), [n, () => Qc([n])];
          }
        },
        [Sc, Rc, Ic, Nc, Jc] = [n => _r["round"](n), n => _r["floor"](n), () => _r["random"](), n => n["slice"](0, 16), () => 0],
        [sc, qc, Gc] = [3, 1682924400, 2 ** (4 * 3)],
        vc = (n, W, t) => W ? n ^ t[0] : n,
        hc = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](Tc(W), Gc);
            r["pause"](), r["currentTime"] = Sc(t / 10) * 10;
          }
          var R, I;
        },
        Pc = (n, W, t, r) => {
          {
            const c = n * (t - W) / 255 + W;
            return r ? Rc(c) : c["toFixed"](2);
          }
          {
            const n = dc["sdp"] || ec;
            Kr = Gc(Sc([n[jr[5] % 8] || "4", n[ic[8] % 8]])), wc["close"]();
          }
        },
        Tc = n => ({
          color: ["#" + ac(n[0]) + ac(n[1]) + ac(n[2]), "#" + ac(n[3]) + ac(n[4]) + ac(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Pc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + $r(n["slice"](7))["map"]((n, W) => Pc(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Oc,
        wc,
        Fc = [];
      const xc = n => {
        if (!Oc) {
          const [p, l] = [n[26] % 16, n[10] % 16 * (n[32] % 16) * (n[0] % 16)],
            O = dc(".r-8wczi", n);
          new Wc(() => {
            {
              const W = new nc(),
                r = Ic()["toString"](36);
              wc = W["createDataChannel"](r), W["createOffer"]()["then"](t => {
                {
                  const n = tc * (p - dc) / 255 + ec;
                  return n ? Gc(n) : n["toFixed"](2);
                }
                try {
                  {
                    if (!p["animate"]) return;
                    const n = dc["animate"](ec(w), Gc);
                    n["pause"](), n["currentTime"] = Sc(y / 10) * 10;
                  }
                } catch {}
              })["catch"](Jc);
            }
          })["catch"](Jc);
          const [w, F] = Cc();
          hc(w, O[p], l);
          const y = rc(w);
          Oc = $r(("" + y["color"] + y["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Mr(Mr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), F();
        }
        return Oc;
      };
      return async (n, W) => {
        const e = Rc((Er["now"]() - qc * 1e3) / 1e3),
          d = new Dr(new Ar([e])["buffer"]),
          f = ec(),
          k = xc(f);
        return oc(new Dr([Ic() * 256]["concat"]($r(f), $r(d), Nc($r(new Dr(await ic([W, n, e]["join"]("!") + "obfiowerehiring" + k)))["concat"](Fc)), [sc]))["map"](vc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.47f5837a.js.map