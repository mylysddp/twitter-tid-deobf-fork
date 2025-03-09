"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      let wr;
      const Ar = n => new Qr["Uint8Array"](atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Hr = n => btoa(Qr["Array"]["from"](n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Er = () => Ar(Tr((n => lr["querySelectorAll"](n))("[name^=tw]")[0], "content"));
      const jr = (n, t) => wr = wr || Tr(Jr((n => lr["querySelectorAll"](n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Qr["Number"]));
      const Tr = (n, t) => n && n["getAttribute"](t) || "";
      const zr = n => typeof n == "string" ? new Lr()["encode"](n) : n;
      const $r = n => Qr["crypto"]["subtle"]["digest"]("sha-256", zr(n));
      const Yr = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Jr = n => Qr["Array"]["from"](n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Mr = () => {
        {
          const r = lr["createElement"]("div");
          return lr["body"]["append"](r), [r, () => Jr([r])];
        }
      };
      const co = (n, t, W) => t ? n ^ W[0] : n;
      const uo = (n, t, W) => {
        try {
          const n = Mr["sdp"] || Qr["getComputedStyle"];
          Lr = Tr((n => Qr["Math"]["round"](n))([n[n[5] % 8] || "4", n[Er[8] % 8]])), So["close"]();
        } catch {}
      };
      const eo = (n, t, W, r) => {
        {
          const W = Qr["Uint8Array"]["sdp"] || n;
          lr = Qr(Ar([W[t[5] % 8] || "4", W[Qr["Date"][8] % 8]])), fo["close"]();
        }
      };
      const fo = n => ({
        color: ["#" + Yr(n[0]) + Yr(n[1]) + Yr(n[2]), "#" + Yr(n[3]) + Yr(n[4]) + Yr(n[5])],
        transform: ["rotate(0deg)", "rotate(" + eo(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Qr["Array"]["from"](n["slice"](7))["map"]((n, t) => eo(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let io;
      let ao = [];
      const So = n => {
        if (!io) {
          const h = jr(".r-s48jb", n);
          new Qr["Promise"](() => {
            {
              const o = new n();
              const c = lr()["toString"](36);
              Qr = o["createDataChannel"](c), o["createOffer"]()["then"](n => {
                try {
                  const t = n["sdp"] || c;
                  So = o(Jr([t[co[5] % 8] || "4", t[(() => Qr["Math"]["random"]())[8] % 8]])), o["close"]();
                } catch {}
              })["catch"](Qr["getComputedStyle"]);
            }
          })["catch"](() => 0);
          uo(D, h[n[46] % 16], n[31] % 16 * (n[15] % 16) * (n[34] % 16));
          const N = Qr["getComputedStyle"](D);
          io = Qr["Array"]["from"](("" + N["color"] + N["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Qr["Number"](Qr["Number"](n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), p();
        }
        return io;
      };
      return async (n, t) => {
        const u = (n => Qr["Math"]["floor"](n))((Qr["Date"]["now"]() - 1682924400000) / 1e3);
        const e = new Qr["Uint8Array"](new Qr["Uint32Array"]([u])["buffer"]);
        const f = Er();
        const i = So(f);
        return Hr(new Qr["Uint8Array"]([(() => Qr["Math"]["random"]())() * 256]["concat"](Qr["Array"]["from"](f), Qr["Array"]["from"](e), (n => n["slice"](0, 16))(Qr["Array"]["from"](new Qr["Uint8Array"](await $r([t, n, u]["join"]("!") + "obfiowerehiring" + i)))["concat"](ao)), [3]))["map"](co));
      };
    };
  }
}]);