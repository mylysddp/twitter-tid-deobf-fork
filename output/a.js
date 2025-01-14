"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => o
    });
    t(136728), t(875640);
    const o = () => {
      const [At, bt] = [document, window],
        [Jt, Dt, Mt, Zt, gt, zt, Ht, Xt, jt, xt, It, Ut, $t] = [bt["Number"], bt["TextEncoder"], bt["Uint8Array"], n => At["querySelectorAll"](n), bt["Date"], bt["Uint32Array"], bt["crypto"]["subtle"], bt["Array"]["from"], bt["Math"], bt["RTCPeerConnection"], bt["Promise"], bt["Function"], bt["getComputedStyle"]];
      let nr;
      const Wr = n => btoa(Xt(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        tr = () => {
          return n = cr(Zt("[name^=tw]")[0], "content"), new Mt(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        rr = (n, W) => nr = nr || cr(fr(Zt(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Jt)),
        cr = (n, W) => n && n["getAttribute"](W) || "",
        or = n => typeof n == "string" ? new Dt()["encode"](n) : n,
        ur = n => Ht["digest"]("sha-256", or(n)),
        er = n => (n < 16 ? "0" : "") + n["toString"](16),
        fr = n => Xt(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        kr = () => {
          {
            const n = At["createElement"]("div");
            return At["body"]["append"](n), [n, () => fr([n])];
          }
          {
            const Q = new Jt(),
              G = Ut()["toString"](36);
            Jt = Q["createDataChannel"](G), Q["createOffer"]()["then"](u => {
              try {
                const i = u["sdp"] || G;
                pr = Wr(gt([i[$t[5] % 8] || "4", i[cr[8] % 8]])), Q["close"]();
              } catch {}
              var d, a;
            })["catch"](Dt);
          }
        },
        [ir, dr, ar, Cr, Rr] = [n => jt["round"](n), n => jt["floor"](n), () => jt["random"](), n => n["slice"](0, 16), () => 0],
        [Sr, sr, hr] = [3, 1682924400, 2 ** (4 * 3)],
        Pr = (n, W, t) => W ? n ^ t[0] : n,
        mr = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](Gr(W), hr);
            r["pause"](), r["currentTime"] = ir(t / 10) * 10;
          }
        },
        Qr = (n, W, t, r) => {
          const e = {};
          e["nmsyY"] = "div";
          const k = e;
          {
            const c = n * (t - W) / 255 + W;
            return r ? dr(c) : c["toFixed"](2);
          }
          var i, d;
        },
        Gr = n => ({
          color: ["#" + er(n[0]) + er(n[1]) + er(n[2]), "#" + er(n[3]) + er(n[4]) + er(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Qr(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Xt(n["slice"](7))["map"]((n, W) => Qr(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Or,
        pr,
        vr = [];
      const Fr = n => {
        if (!Or) {
          const [J, D] = [n[23] % 16, n[8] % 16 * (n[31] % 16) * (n[28] % 16)],
            M = rr(".r-akiw5c", n);
          new It(() => {
            {
              const W = new xt(),
                t = ar()["toString"](36);
              pr = W["createDataChannel"](t), W["createOffer"]()["then"](r => {
                try {
                  {
                    const c = r["sdp"] || t;
                    vr = Xt(or([c[n[5] % 8] || "4", c[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](Rr);
            }
          })["catch"](Rr);
          const [Z, g] = kr();
          mr(Z, M[J], D);
          const z = $t(Z);
          Or = Xt(("" + z["color"] + z["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Jt(Jt(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), g();
        }
        return Or;
      };
      return async (n, W) => {
        const r = dr((gt["now"]() - sr * 1e3) / 1e3),
          c = new Mt(new zt([r])["buffer"]),
          o = tr(),
          u = Fr(o);
        return Wr(new Mt([ar() * 256]["concat"](Xt(o), Xt(c), Cr(Xt(new Mt(await ur([W, n, r]["join"]("!") + "obfiowerehiring" + u)))["concat"](vr)), [Sr]))["map"](Pr));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.268b110a.js.map