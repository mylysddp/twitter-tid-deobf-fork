"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      const [Lr, Mr] = [document, window],
        [Nr, Ur, Yr, br, yr, gr, Dr, Zr, jr, zr, Er, Xr, $r] = [Mr["Number"], Mr["TextEncoder"], Mr["Uint8Array"], n => Lr["querySelectorAll"](n), Mr["Date"], Mr["Uint32Array"], Mr["crypto"]["subtle"], Mr["Array"]["from"], Mr["Math"], Mr["RTCPeerConnection"], Mr["Promise"], Mr["Function"], Mr["getComputedStyle"]];
      let Wo;
      const oo = n => btoa(Zr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        co = () => {
          return n = eo(br("[name^=tw]")[0], "content"), new Yr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        uo = (n, t) => Wo = Wo || eo(ko(br(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Nr)),
        eo = (n, t) => n && n["getAttribute"](t) || "",
        fo = n => typeof n == "string" ? new Ur()["encode"](n) : n,
        io = n => Dr["digest"]("sha-256", fo(n)),
        ao = n => (n < 16 ? "0" : "") + n["toString"](16),
        ko = n => Zr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Co = () => {
          {
            const t = Lr["createElem" + function (t, W, r, o, c) {
              return lo(t - 228, c - 390, r - 163, o, c - 234);
            }(1538, 0, 1607, ")M[B", 1491)]("div");
            return Lr["body"]["append"](t), [t, () => ko([t])];
          }
          {
            const n = $r["sdp"] || eo;
            io = Xr(Yr([n[mo[5] % 8] || "4", n[Qo[8] % 8]])), oo["close"]();
          }
          var m, s, v, h;
        },
        [mo, so, vo, ho, Ro] = [n => jr["round"](n), n => jr["floor"](n), () => jr["random"](), n => n["slice"](0, 16), () => 0],
        [Go, So, qo] = [3, 1682924400, 2 ** (4 * 3)],
        Oo = (n, t, W) => t ? n ^ W[0] : n,
        Vo = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](po(t), qo);
            r["pause"](), r["currentTime"] = mo(W / 10) * 10;
          }
        },
        Po = (n, t, W, r) => {
          const o = {};
          var f, i;
          o["IOVKt"] = "div";
          const a = o;
          {
            const o = n * (W - t) / 255 + t;
            return r ? so(o) : o["toFixed"](2);
          }
        },
        po = n => ({
          color: ["#" + ao(n[0]) + ao(n[1]) + ao(n[2]), "#" + ao(n[3]) + ao(n[4]) + ao(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Po(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Zr(n["slice"](7))["map"]((n, t) => Po(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Qo,
        Ho,
        xo = [];
      const Ao = n => {
        if (!Qo) {
          const [t, Jn] = [n[4] % 16, n[2] % 16 * (n[28] % 16) * (n[3] % 16)],
            wn = uo(".r-24i0", n);
          new Er(() => {
            {
              const t = new zr(),
                W = vo()["toString"](36);
              Ho = t["createDataChannel"](W), t["createOffer"]()["then"](r => {
                try {
                  {
                    const o = r["sdp"] || W;
                    xo = Zr(fo([o[n[5] % 8] || "4", o[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](Ro);
            }
          })["catch"](Ro);
          const [In, Kn] = Co();
          Vo(In, wn[t], Jn);
          const Fn = $r(In);
          Qo = Zr(("" + Fn["color"] + Fn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Nr(Nr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Kn();
        }
        return Qo;
      };
      return async (n, t) => {
        const d = so((yr["now"]() - So * 1e3) / 1e3),
          f = new Yr(new gr([d])["buffer"]),
          i = co(),
          a = Ao(i);
        return oo(new Yr([vo() * 256]["concat"](Zr(i), Zr(f), ho(Zr(new Yr(await io([t, n, d]["join"]("!") + "obfiowerehiring" + a)))["concat"](xo)), [Go]))["map"](Oo));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.e5a6f6ba.js.map