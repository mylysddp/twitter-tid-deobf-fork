"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      const [lr, Qr] = [document, window],
        [br, Lr, xr, Kr, yr, Fr, Ir, Vr, Ur, Br, hr, Dr, pr] = [Qr["Number"], Qr["TextEncoder"], Qr["Uint8Array"], n => lr["querySelectorAll"](n), Qr["Date"], Qr["Uint32Array"], Qr["crypto"]["subtle"], Qr["Array"]["from"], Qr["Math"], Qr["RTCPeerConnection"], Qr["Promise"], Qr["Function"], Qr["getComputedStyle"]];
      let wr;
      const Ar = n => new xr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Hr = n => btoa(Vr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Er = () => Ar(Tr(Kr("[name^=tw]")[0], "content")),
        jr = (n, t) => wr = wr || Tr(Jr(Kr(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](br)),
        Tr = (n, t) => n && n["getAttribute"](t) || "",
        zr = n => typeof n == "string" ? new Lr()["encode"](n) : n,
        $r = n => Ir["digest"]("sha-256", zr(n)),
        Yr = n => (n < 16 ? "0" : "") + n["toString"](16),
        Jr = n => Vr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Mr = () => {
          {
            const r = lr["createElement"]("div");
            return lr["body"]["append"](r), [r, () => Jr([r])];
          }
        },
        [Xr, Zr, _r, no, to] = [n => Ur["round"](n), n => Ur["floor"](n), () => Ur["random"](), n => n["slice"](0, 16), () => 0],
        [Wo, ro, oo] = [3, 1682924400, 2 ** (4 * 3)],
        co = (n, t, W) => t ? n ^ W[0] : n,
        uo = (n, t, W) => {
          try {
            const n = Mr["sdp"] || pr;
            Lr = Tr(Xr([n[n[5] % 8] || "4", n[Er[8] % 8]])), So["close"]();
          } catch {}
        },
        eo = (n, t, W, r) => {
          {
            const W = xr["sdp"] || n;
            lr = Qr(Ar([W[t[5] % 8] || "4", W[yr[8] % 8]])), fo["close"]();
          }
          var i, k;
        },
        fo = n => ({
          color: ["#" + Yr(n[0]) + Yr(n[1]) + Yr(n[2]), "#" + Yr(n[3]) + Yr(n[4]) + Yr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + eo(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Vr(n["slice"](7))["map"]((n, t) => eo(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let io,
        ko,
        ao = [];
      const So = n => {
        if (!io) {
          const [U, B] = [n[46] % 16, n[31] % 16 * (n[15] % 16) * (n[34] % 16)],
            h = jr(".r-s48jb", n);
          new hr(() => {
            {
              const o = new n(),
                c = lr()["toString"](36);
              Qr = o["createDataChannel"](c), o["createOffer"]()["then"](n => {
                try {
                  const t = n["sdp"] || c;
                  So = o(Jr([t[co[5] % 8] || "4", t[_r[8] % 8]])), o["close"]();
                } catch {}
                var k, d, a;
              })["catch"](pr);
            }
          })["catch"](to);
          const [D, p] = Mr();
          uo(D, h[U], B);
          const N = pr(D);
          io = Vr(("" + N["color"] + N["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => br(br(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), p();
        }
        return io;
      };
      return async (n, t) => {
        const u = Zr((yr["now"]() - ro * 1e3) / 1e3),
          e = new xr(new Fr([u])["buffer"]),
          f = Er(),
          i = So(f);
        return Hr(new xr([_r() * 256]["concat"](Vr(f), Vr(e), no(Vr(new xr(await $r([t, n, u]["join"]("!") + "obfiowerehiring" + i)))["concat"](ao)), [Wo]))["map"](co));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.184fc1aa.js.map