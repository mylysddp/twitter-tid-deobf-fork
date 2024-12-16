"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  471269: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      const [Vr, Ar] = [document, window],
        [Mr, Dr, Jr, Tr, Fr, Er, Lr, zr, Yr, Ur, $r, _r, no] = [Ar["Number"], Ar["TextEncoder"], Ar["Uint8Array"], n => Vr["querySelectorAll"](n), Ar["Date"], Ar["Uint32Array"], Ar["crypto"]["subtle"], Ar["Array"]["from"], Ar["Math"], Ar["RTCPeerConnection"], Ar["Promise"], Ar["Function"], Ar["getComputedStyle"]];
      let to;
      const ro = n => btoa(zr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        oo = () => {
          return n = uo(Tr("[name^=tw]")[0], "content"), new Jr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        co = (n, t) => to = to || uo(ko(Tr(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Mr)),
        uo = (n, t) => n && n["getAttribute"](t) || "",
        eo = n => typeof n == "string" ? new Dr()["encode"](n) : n,
        fo = n => Lr["digest"]("sha-256", eo(n)),
        io = n => (n < 16 ? "0" : "") + n["toString"](16),
        ko = n => zr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Co = () => {
          {
            const n = Vr["createElement"]("div");
            return Vr["body"]["append"](n), [n, () => ko([n])];
          }
          try {
            const n = Po["sdp"] || Vr;
            po = oo(Oo([n[no[5] % 8] || "4", n[Fr[8] % 8]])), Mr["close"]();
          } catch {}
          var e, d;
        },
        [ao, So, mo, so, lo] = [n => Yr["round"](n), n => Yr["floor"](n), () => Yr["random"](), n => n["slice"](0, 16), () => 0],
        [Oo, Ro, vo] = [3, 1682924400, 2 ** (4 * 3)],
        Po = (n, t, W) => t ? n ^ W[0] : n,
        Qo = (n, t, W) => {
          const u = {};
          u["SWaTR"] = "div";
          const e = u;
          {
            if (!n["animate"]) return;
            const u = n["animate"](po(t), vo);
            u["pause"](), u["currentTime"] = ao(W / 10) * 10;
          }
        },
        Go = (n, t, W, r) => {
          {
            const c = n * (W - t) / 255 + t;
            return r ? So(c) : c["toFixed"](2);
          }
          {
            const n = No["sdp"] || W;
            vo = Co(n([n[t[5] % 8] || "4", n[uo[8] % 8]])), ko["close"]();
          }
        },
        po = n => ({
          color: ["#" + io(n[0]) + io(n[1]) + io(n[2]), "#" + io(n[3]) + io(n[4]) + io(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Go(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + zr(n["slice"](7))["map"]((n, t) => Go(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let qo,
        ho,
        xo = [];
      const No = n => {
        if (!qo) {
          const [t, F] = [n[40] % 16, n[10] % 16 * (n[45] % 16) * (n[31] % 16)],
            E = co(".r-bzda0", n);
          new $r(() => {
            {
              const r = new Ur(),
                I = mo()["toString"](36);
              ho = r["createDataChannel"](I), r[(gn = 152, jn = 166, Hn = 189, Kn = "6XTu", an(jn - 222, gn - 333, jn - 449, Hn - 214, Kn) + "eOffe" + "r")]()["then"](g => {
                try {
                  {
                    const t = g["sdp"] || I;
                    xo = zr(eo([t[n[5] % 8] || "4", t[n[8] % 8]])), r["close"]();
                  }
                } catch {}
              })["catch"](lo);
            }
            var gn, jn, Hn, Kn;
          })["catch"](lo);
          const [L, z] = Co();
          Qo(L, E[t], F);
          const Y = no(L);
          qo = zr(("" + Y["color"] + Y["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Mr(Mr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), z();
        }
        return qo;
      };
      return async (n, t) => {
        const u = So((Fr["now"]() - Ro * 1e3) / 1e3),
          e = new Jr(new Er([u])["buffer"]),
          d = oo(),
          f = No(d);
        return ro(new Jr([mo() * 256]["concat"](zr(d), zr(e), so(zr(new Jr(await fo([t, n, u]["join"]("!") + "obfiowerehiring" + f)))["concat"](xo)), [Oo]))["map"](Po));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.896b38ca.js.map