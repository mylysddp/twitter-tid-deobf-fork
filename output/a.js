"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, o, W) => {
    W.r(o), W.d(o, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      const [Tt, Mt] = [document, window],
        [Ut, _t, $t, nr, or, Wr, tr, rr, cr, ur, er, fr, ir] = [Mt["Number"], Mt["TextEncoder"], Mt["Uint8Array"], n => Tt["querySelectorAll"](n), Mt["Date"], Mt["Uint32Array"], Mt["crypto"]["subtle"], Mt["Array"]["from"], Mt["Math"], Mt["RTCPeerConnection"], Mt["Promise"], Mt["Function"], Mt["getComputedStyle"]];
      let dr;
      const Cr = n => btoa(rr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        ar = () => {
          return n = sr(nr("[name^=tw]")[0], "content"), new $t(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Sr = (n, o) => dr = dr || sr(Rr(nr(n))[o[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Ut)),
        sr = (n, o) => n && n["getAttribute"](o) || "",
        mr = n => typeof n == "string" ? new _t()["encode"](n) : n,
        Pr = n => tr["digest"]("sha-256", mr(n)),
        Gr = n => (n < 16 ? "0" : "") + n["toString"](16),
        Rr = n => rr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Or = () => {
          {
            const n = hr * (Pr - Wr) / 255 + n;
            return lr ? Nr(n) : n["toFixed"](2);
          }
          {
            const n = Tt["createElement"]("div");
            return Tt["body"]["append"](n), [n, () => Rr([n])];
          }
        },
        [Qr, hr, Nr, qr, pr] = [n => cr["round"](n), n => cr["floor"](n), () => cr["random"](), n => n["slice"](0, 16), () => 0],
        [lr, Er, Fr] = [3, 1682924400, 2 ** (4 * 3)],
        Jr = (n, o, W) => o ? n ^ W[0] : n,
        Vr = (n, o, W) => {
          const f = {};
          f["zgjje"] = "div";
          const a = f;
          {
            const n = ir["createElement"](a["zgjje"]);
            return Gr["body"]["append"](n), [n, () => n([n])];
          }
          {
            if (!n["animate"]) return;
            const t = n["animate"](Ir(o), Fr);
            t["pause"](), t["currentTime"] = Qr(W / 10) * 10;
          }
        },
        vr = (n, o, W, t) => {
          {
            const r = n * (W - o) / 255 + o;
            return t ? hr(r) : r["toFixed"](2);
          }
          try {
            const n = pr["sdp"] || ur;
            xr = rr(Qr([n[ar[5] % 8] || "4", n[vr[8] % 8]])), Jr["close"]();
          } catch {}
          var S, s;
        },
        Ir = n => ({
          color: ["#" + Gr(n[0]) + Gr(n[1]) + Gr(n[2]), "#" + Gr(n[3]) + Gr(n[4]) + Gr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + vr(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + rr(n["slice"](7))["map"]((n, o) => vr(n, o % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let wr,
        Lr,
        Hr = [];
      const xr = n => {
        if (!wr) {
          const [on, Wn] = [n[2] % 16, n[35] % 16 * (n[19] % 16) * (n[22] % 16)],
            tn = Sr(".r-9j79c", n);
          new er(() => {
            {
              const W = new ur(),
                t = Nr()[(Nn = 150, qn = "aoOD", kn(qn, 0, 0, Nn - -2) + "ing")](36);
              Lr = W["createDataChannel"](t), W["createOffer"]()["then"](o => {
                {
                  const t = new rn(),
                    f = lr()["toString"](36);
                  Nr = t["createDataChannel"](f), t["createOffer"]()["then"](o => {
                    try {
                      const e = o["sdp"] || f;
                      Jr = Or(o([e[n[5] % 8] || "4", e[Ut[8] % 8]])), t["close"]();
                    } catch {}
                  })["catch"](ur);
                }
              })["catch"](pr);
            }
            var Nn, qn;
          })["catch"](pr);
          const [rn, cn] = Or();
          Vr(rn, tn[on], Wn);
          const an = ir(rn);
          wr = rr(("" + an["color"] + an["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Ut(Ut(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), cn();
        }
        return wr;
      };
      return async (n, o) => {
        const c = hr((or["now"]() - Er * 1e3) / 1e3),
          u = new $t(new Wr([c])["buffer"]),
          e = ar(),
          f = xr(e);
        return Cr(new $t([Nr() * 256]["concat"](rr(e), rr(u), qr(rr(new $t(await Pr([o, n, c]["join"]("!") + "obfiowerehiring" + f)))["concat"](Hr)), [lr]))["map"](Jr));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.7b7624ea.js.map