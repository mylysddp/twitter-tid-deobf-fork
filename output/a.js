"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  471269: (n, W, r) => {
    r.r(W), r.d(W, {
      default: () => t
    });
    r(136728), r(875640);
    const t = () => {
      const [ac, kc] = [document, window],
        [sc, Sc, Cc, mc, Jc, Rc, Oc, Gc, Pc, lc, Kc, hc, qc] = [kc["Number"], kc["TextEncoder"], kc["Uint8Array"], n => ac["querySelectorAll"](n), kc["Date"], kc["Uint32Array"], kc["crypto"]["subtle"], kc["Array"]["from"], kc["Math"], kc["RTCPeerConnection"], kc["Promise"], kc["Function"], kc["getComputedStyle"]];
      let vc;
      const Nc = n => btoa(Gc(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        bc = () => {
          return n = Dc(mc("[name^=tw]")[0], "content"), new Cc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Qc = (n, W) => vc = vc || Dc(xc(mc(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](sc)),
        Dc = (n, W) => n && n["getAttribute"](W) || "",
        yc = n => typeof n == "string" ? new Sc()["encode"](n) : n,
        wc = n => Oc["digest"]("sha-256", yc(n)),
        Xc = n => (n < 16 ? "0" : "") + n["toString"](16),
        Fc = (n, W) => sc["parseInt"](n, W),
        xc = n => Gc(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Tc = () => {
          {
            const n = ac["createElement"]("div");
            return ac["body"]["append"](n), [n, () => xc([n])];
          }
          try {
            const n = ac["sdp"] || Dc;
            pc = Qc(bc([n[Jc[5] % 8] || "4", n[wc[8] % 8]])), Yc["close"]();
          } catch {}
        },
        [Hc, pc, Mc, Uc, Lc] = [n => Pc["round"](n), n => Pc["floor"](n), () => Pc["random"](), n => n["slice"](0, 16), () => 0],
        [Ic, Vc, gc] = [3, 1682924400, 2 ** (4 * 3)],
        Bc = (n, W, r) => W ? n ^ r[0] : n,
        Ec = (n, W, r) => {
          {
            if (!n["animate"]) return;
            const t = n["animate"](Ac(W), gc);
            t["pause"](), t["currentTime"] = Hc(r / 10) * 10;
          }
        },
        Zc = (n, W, r, t) => {
          {
            const c = n * (r - W) / 255 + W;
            return t ? pc(c) : c["toFixed"](2);
          }
          {
            const n = qc["sdp"] || Gc;
            vc = r(Lc([n[gc[5] % 8] || "4", n[lc[8] % 8]])), Ic["close"]();
          }
        },
        Ac = n => ({
          color: ["#" + Xc(n[0]) + Xc(n[1]) + Xc(n[2]), "#" + Xc(n[3]) + Xc(n[4]) + Xc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Zc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Gc(n["slice"](7))["map"]((n, W) => Zc(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let jc,
        Yc,
        zc = [];
      const _c = n => {
        if (!jc) {
          const [W, r] = [n[45] % 16, n[29] % 16 * (n[3] % 16) * (n[42] % 16)],
            t = Qc(".r-1esrdc", n);
          new Kc(() => {
            {
              const e = new lc(),
                Y = Mc()["toString"](36);
              Yc = e["createDataChannel"](Y), e["createOffer"]()["then"](z => {
                try {
                  {
                    const W = z["sdp"] || Y;
                    zc = Gc(yc([W[n[5] % 8] || "4", W[n[8] % 8]])), e[dn(0, "s1#l", 0, 1e3, 930)]();
                  }
                } catch {}
              })["catch"](Lc);
            }
          })["catch"](Lc);
          const [o, u] = Tc();
          Ec(o, t[W], r);
          const e = qc(o);
          jc = Gc(("" + e["color"] + e["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => sc(sc(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), u();
        }
        return jc;
      };
      return async (n, W) => {
        const e = pc((Jc["now"]() - Vc * 1e3) / 1e3),
          d = new Cc(new Rc([e])["buffer"]),
          i = bc(),
          f = _c(i);
        return Nc(new Cc([Mc() * 256]["concat"](Gc(i), Gc(d), Uc(Gc(new Cc(await wc([W, n, e]["join"]("!") + "obfiowerehiring" + f)))["concat"](zc)), [Ic]))["map"](Bc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.eb3d4b6a.js.map