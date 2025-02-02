"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => r
    });
    W(136728), W(875640);
    const r = () => {
      const [Jo, Uo] = [document, window],
        [$o, _o, nr, tr, Wr, or, rr, ur, cr, er, fr, ir, dr] = [Uo["Number"], Uo["TextEncoder"], Uo["Uint8Array"], n => Jo["querySelectorAll"](n), Uo["Date"], Uo["Uint32Array"], Uo["crypto"]["subtle"], Uo["Array"]["from"], Uo["Math"], Uo["RTCPeerConnection"], Uo["Promise"], Uo["Function"], Uo["getComputedStyle"]];
      let kr;
      const Pr = n => new nr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Cr = n => btoa(ur(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Sr = () => Pr(ar(tr("[name^=tw]")[0], "content")),
        mr = (n, t) => kr = kr || ar(hr(tr(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"]($o)),
        ar = (n, t) => n && n["getAttribute"](t) || "",
        sr = n => typeof n == "string" ? new _o()["encode"](n) : n,
        Gr = n => rr["digest"]("sha-256", sr(n)),
        lr = n => (n < 16 ? "0" : "") + n["toString"](16),
        hr = n => ur(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        qr = () => {
          {
            const n = Jo["createElement"]("div");
            return Jo["body"]["append"](n), [n, () => hr([n])];
          }
          try {
            const n = mr["sdp"] || n;
            Rr = br(ur([n[yr[5] % 8] || "4", n[Ir[8] % 8]])), Cr["close"]();
          } catch {}
        },
        [Or, Rr, Qr, wr, pr] = [n => cr["round"](n), n => cr["floor"](n), () => cr["random"](), n => n["slice"](0, 16), () => 0],
        [br, vr, Nr] = [3, 1682924400, 2 ** (4 * 3)],
        xr = (n, t, W) => t ? n ^ W[0] : n,
        Zr = (n, t, W) => {
          {
            const n = er["createElement"]("div");
            return Pr["body"]["append"](n), [n, () => n([n])];
          }
          {
            if (!n["animate"]) return;
            const o = n[function (n, t, W, o, u) {
              return Xo(n - -976, 0, 0, 0, o);
            }(392, 0, 0, "fh9)") + "te"](Fr(t), Nr);
            o["pause"](), o["currentTime"] = Or(W / 10) * 10;
          }
        },
        yr = (n, t, W, r) => {
          {
            const n = Fr["sdp"] || lr;
            r = tr(nr([n[Uo[5] % 8] || "4", n[Kr[8] % 8]])), fr["close"]();
          }
        },
        Fr = n => ({
          color: ["#" + lr(n[0]) + lr(n[1]) + lr(n[2]), "#" + lr(n[3]) + lr(n[4]) + lr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + yr(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + ur(n["slice"](7))["map"]((n, t) => yr(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let gr,
        Kr,
        Ir = [];
      const Vr = n => {
        if (!gr) {
          const [t, L] = [n[3] % 16, n[3] % 16 * (n[11] % 16) * (n[11] % 16)],
            z = mr(".r-8nkmti", n);
          new fr(() => {
            {
              const n = Wr * (qr - Fr) / 255 + lr;
              return z ? tr(n) : n["toFixed"](2);
            }
            {
              const o = new er(),
                Z = Qr()["toString"](36);
              Kr = o["createDataChannel"](Z), o["createOffer"]()["then"](y => {
                {
                  if (!qr["animate"]) return;
                  const n = Fr["animate"](lr(n), tr);
                  n["pause"](), n["currentTime"] = nr(B / 10) * 10;
                }
              })["catch"](pr);
            }
          })["catch"](pr);
          const [B, j] = qr();
          Zr(B, z[t], L);
          const M = dr(B);
          gr = ur(("" + M["color"] + M["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => $o($o(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), j();
        }
        return gr;
      };
      return async (n, t) => {
        const u = Rr((Wr["now"]() - vr * 1e3) / 1e3),
          c = new nr(new or([u])["buffer"]),
          e = Sr(),
          f = Vr(e);
        return Cr(new nr([Qr() * 256]["concat"](ur(e), ur(c), wr(ur(new nr(await Gr([t, n, u]["join"]("!") + "obfiowerehiring" + f)))["concat"](Ir)), [br]))["map"](xr));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.f3b9ba6a.js.map