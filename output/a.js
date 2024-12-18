"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  471269: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => u
    });
    t(136728), t(875640);
    const u = () => {
      const [At, Nt] = [document, window],
        [Et, Mt, Zt, It, Yt, Ut, $t, _t, nr, Wr, tr, rr, or] = [Nt["Number"], Nt["TextEncoder"], Nt["Uint8Array"], n => At["querySelectorAll"](n), Nt["Date"], Nt["Uint32Array"], Nt["crypto"]["subtle"], Nt["Array"]["from"], Nt["Math"], Nt["RTCPeerConnection"], Nt["Promise"], Nt["Function"], Nt["getComputedStyle"]];
      let fr;
      const ir = n => btoa(_t(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        dr = () => {
          return n = kr(It("[name^=tw]")[0], "content"), new Zt(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        mr = (n, W) => fr = fr || kr(Pr(It(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Et)),
        kr = (n, W) => n && n["getAttribute"](W) || "",
        Rr = n => typeof n == "string" ? new Mt()["encode"](n) : n,
        ar = n => $t["digest"]("sha-256", Rr(n)),
        Cr = n => (n < 16 ? "0" : "") + n["toString"](16),
        Pr = n => _t(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Or = () => {
          {
            const r = At["createElement"]("div");
            return At["body"]["append"](r), [r, () => Pr([r])];
          }
          {
            if (!Kr["animate"]) return;
            const n = Wr["animate"](Qr(It), Jr);
            n["pause"](), n["currentTime"] = qr(Gr / 10) * 10;
          }
        },
        [Qr, Sr, sr, qr, Vr] = [n => nr["round"](n), n => nr["floor"](n), () => nr["random"](), n => n["slice"](0, 16), () => 0],
        [hr, wr, Kr] = [3, 1682924400, 2 ** (4 * 3)],
        Gr = (n, W, t) => W ? n ^ t[0] : n,
        pr = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](zr(W), Kr);
            r["pause"](), r["currentTime"] = Qr(t / 10) * 10;
          }
        },
        vr = (n, W, t, r) => {
          {
            const o = n * (t - W) / 255 + W;
            return r ? Sr(o) : o["toFixed"](2);
          }
          try {
            const n = Yt["sdp"] || zr;
            Sr = Pr(Cr([n[ir[5] % 8] || "4", n[Ut[8] % 8]])), $t["close"]();
          } catch {}
        },
        zr = n => ({
          color: ["#" + Cr(n[0]) + Cr(n[1]) + Cr(n[2]), "#" + Cr(n[3]) + Cr(n[4]) + Cr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + vr(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + _t(n["slice"](7))["map"]((n, W) => vr(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Hr,
        yr,
        Jr = [];
      const gr = n => {
        if (!Hr) {
          const [kn, Rn] = [n[28] % 16, n[36] % 16 * (n[3] % 16) * (n[33] % 16)],
            an = mr(".r-17djpc", n);
          new tr(() => {
            {
              const W = new Wr(),
                r = sr()["toString"](36);
              yr = W["createDataChannel"](r), W["createOffer"]()["then"](t => {
                try {
                  {
                    const o = t["sdp"] || r;
                    Jr = _t(Rr([o[n[5] % 8] || "4", o[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](Vr);
            }
          })["catch"](Vr);
          const [Cn, Pn] = Or();
          pr(Cn, an[kn], Rn);
          const On = or(Cn);
          Hr = _t(("" + On["color"] + On["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Et(Et(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Pn();
        }
        return Hr;
      };
      return async (n, W) => {
        const o = Sr((Yt["now"]() - wr * 1e3) / 1e3),
          u = new Zt(new Ut([o])["buffer"]),
          c = dr(),
          e = gr(c);
        return ir(new Zt([sr() * 256]["concat"](_t(c), _t(u), qr(_t(new Zt(await ar([W, n, o]["join"]("!") + "obfiowerehiring" + e)))["concat"](Jr)), [hr]))["map"](Gr));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.f5f5727a.js.map