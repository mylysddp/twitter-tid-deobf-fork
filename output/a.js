"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => u
    });
    W(136728), W(875640);
    const u = () => {
      const [yo, go] = [document, window],
        [Oo, Qo, wo, Vo, Go, No, ho, lo, Po, Io, Ho, jo, Fo] = [go["Number"], go["TextEncoder"], go["Uint8Array"], n => yo["querySelectorAll"](n), go["Date"], go["Uint32Array"], go["crypto"]["subtle"], go["Array"]["from"], go["Math"], go["RTCPeerConnection"], go["Promise"], go["Function"], go["getComputedStyle"]];
      let bo;
      const Bo = n => btoa(lo(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Jo = () => {
          return n = Zo(Vo("[name^=tw]")[0], "content"), new wo(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Ao = (n, t) => bo = bo || Zo(Uo(Vo(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Oo)),
        Zo = (n, t) => n && n["getAttribute"](t) || "",
        Ko = n => typeof n == "string" ? new Qo()["encode"](n) : n,
        Yo = n => ho["digest"]("sha-256", Ko(n)),
        Do = n => (n < 16 ? "0" : "") + n["toString"](16),
        Lo = (n, t) => Oo["parseInt"](n, t),
        Uo = n => lo(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        To = () => {
          {
            const k = new yo(),
              s = No()["toString"](36);
            Eo = k["createDataChannel"](s), k["createOffer"]()["then"](m => {
              try {
                const o = m["sdp"] || s;
                rr = To(er([o[Ao[5] % 8] || "4", o[Oo[8] % 8]])), k["close"]();
              } catch {}
            })["catch"](lo);
          }
        },
        [xo, Eo, zo, Xo, $o] = [n => Po["round"](n), n => Po["floor"](n), () => Po["random"](), n => n["slice"](0, 16), () => 0],
        [_o, nr, tr] = [3, 1682924400, 2 ** (4 * 3)],
        Wr = (n, t, W) => t ? n ^ W[0] : n,
        or = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const o = n["animate"](ur(t), tr);
            o["pause"](), o["currentTime"] = xo(W / 10) * 10;
          }
        },
        rr = (n, t, W, o) => {
          {
            const n = cr * ($o - Oo) / 255 + yo;
            return No ? Eo(n) : n["toFixed"](2);
          }
          {
            const r = n * (W - t) / 255 + t;
            return o ? Eo(r) : r["toFixed"](2);
          }
          var s, m;
        },
        ur = n => ({
          color: ["#" + Do(n[0]) + Do(n[1]) + Do(n[2]), "#" + Do(n[3]) + Do(n[4]) + Do(n[5])],
          transform: ["rotate(0deg)", "rotate(" + rr(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + lo(n["slice"](7))["map"]((n, t) => rr(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let cr,
        er,
        fr = [];
      const dr = n => {
        const Z = {};
        Z["COheP"] = "div";
        const T = Z;
        if (!cr) {
          const [B, J] = [n[24] % 16, n[2] % 16 * (n[47] % 16) * (n[39] % 16)],
            A = Ao(".r-74wno", n);
          new Ho(() => {
            {
              const t = new Io(),
                W = zo()["toString"](36);
              er = t["createDataChannel"](W), t["createOffer"]()["then"](r => {
                try {
                  {
                    const n = Oo["sdp"] || yo;
                    No = Eo(Fo([n[Go[5] % 8] || "4", n[zo[8] % 8]])), bo["close"]();
                  }
                } catch {}
              })["catch"]($o);
            }
          })["catch"]($o);
          const [Z, x] = To();
          or(Z, A[B], J);
          const E = Fo(Z);
          cr = lo(("" + E["color"] + E["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Oo(Oo(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), x();
        }
        return cr;
      };
      return async (n, t) => {
        const r = Eo((Go["now"]() - nr * 1e3) / 1e3),
          u = new wo(new No([r])["buffer"]),
          c = Jo(),
          e = dr(c);
        return Bo(new wo([zo() * 256]["concat"](lo(c), lo(u), Xo(lo(new wo(await Yo([t, n, r]["join"]("!") + "obfiowerehiring" + e)))["concat"](fr)), [_o]))["map"](Wr));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.efd5fdba.js.map