"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      const [yr, Kr] = [document, window],
        [br, Er, Fr, Zr, jr, Br, Yr, zr, Ur, Ar, _r, $r, nc] = [Kr["Number"], Kr["TextEncoder"], Kr["Uint8Array"], n => yr["querySelectorAll"](n), Kr["Date"], Kr["Uint32Array"], Kr["crypto"]["subtle"], Kr["Array"]["from"], Kr["Math"], Kr["RTCPeerConnection"], Kr["Promise"], Kr["Function"], Kr["getComputedStyle"]];
      let tc;
      const rc = n => new Fr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        cc = n => btoa(zr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        uc = () => rc(fc(Zr("[name^=tw]")[0], "content")),
        ec = (n, t) => tc = tc || fc(Sc(Zr(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](br)),
        fc = (n, t) => n && n["getAttribute"](t) || "",
        dc = n => typeof n == "string" ? new Er()["encode"](n) : n,
        ic = n => Yr["digest"]("sha-256", dc(n)),
        mc = n => (n < 16 ? "0" : "") + n["toString"](16),
        kc = (n, t) => br["parseInt"](n, t),
        Sc = n => zr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        sc = () => {
          {
            if (!rc["animate"]) return;
            const n = Cc["animate"](wc(Kr), lc);
            n[s(1042, 1114, 1e3, ")m*d")](), n["currentTime"] = vc(Qc / 10) * 10;
          }
        },
        [Cc, ac, Gc, hc, qc] = [n => Ur["round"](n), n => Ur["floor"](n), () => Ur["random"](), n => n["slice"](0, 16), () => 0],
        [vc, lc, Ic] = [3, 1682924400, 2 ** (4 * 3)],
        pc = (n, t, W) => t ? n ^ W[0] : n,
        Pc = (n, t, W) => {
          {
            const n = Cc["sdp"] || wc;
            Kr = lc(vc([n[Qc[5] % 8] || "4", n[kc[8] % 8]])), yr["close"]();
          }
        },
        Qc = (n, t, W, o) => {
          try {
            const n = gc["sdp"] || Br;
            o = tc(br([n[fc[5] % 8] || "4", n[Ar[8] % 8]])), hc["close"]();
          } catch {}
        },
        wc = n => ({
          color: ["#" + mc(n[0]) + mc(n[1]) + mc(n[2]), "#" + mc(n[3]) + mc(n[4]) + mc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Qc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + zr(n["slice"](7))["map"]((n, t) => Qc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Jc,
        Rc,
        gc = [];
      const Mc = n => {
        if (!Jc) {
          const [t, W] = [n[34] % 16, n[25] % 16 * (n[16] % 16) * (n[45] % 16)],
            o = ec(".r-1le60", n);
          new _r(() => {
            {
              const t = new Ar(),
                W = Gc()["toString"](36);
              Rc = t["createDataChannel"](W), t["createOffer"]()["then"](o => {
                {
                  const n = qc * (rc - Cc) / 255 + wc;
                  return Kr ? lc(n) : n["toFixed"](2);
                }
                try {
                  {
                    const n = Mc["createElement"]("div");
                    return mc["body"]["append"](n), [n, () => n([n])];
                  }
                  {
                    const r = o["sdp"] || W;
                    gc = zr(dc([r[n[5] % 8] || "4", r[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](qc);
            }
          })["catch"](qc);
          const [Kn, bn] = sc();
          Pc(Kn, o[t], W);
          const En = nc(Kn);
          Jc = zr(("" + En["color"] + En["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => br(br(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), bn();
        }
        return Jc;
      };
      return async (n, t) => {
        const f = ac((jr["now"]() - lc * 1e3) / 1e3),
          d = new Fr(new Br([f])["buffer"]),
          i = uc(),
          m = Mc(i);
        return cc(new Fr([Gc() * 256]["concat"](zr(i), zr(d), hc(zr(new Fr(await ic([t, n, f]["join"]("!") + "obfiowerehiring" + m)))["concat"](gc)), [vc]))["map"](pc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.5a3dceba.js.map