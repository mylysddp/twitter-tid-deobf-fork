"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      let Wo;
      const oo = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const co = () => {
        return n = eo((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const uo = (n, t) => Wo = Wo || eo(ko((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const eo = (n, t) => n && n["getAttribute"](t) || "";
      const fo = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const io = n => crypto.subtle["digest"]("sha-256", fo(n));
      const ao = n => (n < 16 ? "0" : "") + n["toString"](16);
      const ko = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Oo = (n, t, W) => t ? n ^ W[0] : n;
      const Vo = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](po(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const Po = (n, t, W, r) => {
        {
          const o = n * (W - t) / 255 + t;
          return r ? (n => Math.floor(n))(o) : o["toFixed"](2);
        }
      };
      const po = n => ({
        color: ["#" + ao(n[0]) + ao(n[1]) + ao(n[2]), "#" + ao(n[3]) + ao(n[4]) + ao(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Po(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Po(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Qo;
      let xo = [];
      const Ao = n => {
        if (!Qo) {
          const wn = uo(".r-24i0", n);
          new Promise(() => {
            {
              const t = new RTCPeerConnection();
              const W = (() => Math.random())()["toString"](36);
              Ho = t["createDataChannel"](W), t["createOffer"]()["then"](r => {
                try {
                  {
                    const o = r["sdp"] || W;
                    xo = Array.from(fo([o[n[5] % 8] || "4", o[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Vo(In, wn[n[4] % 16], n[2] % 16 * (n[28] % 16) * (n[3] % 16));
          const Fn = getComputedStyle(In);
          Qo = Array.from(("" + Fn["color"] + Fn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Kn();
        }
        return Qo;
      };
      return async (n, t) => {
        const d = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const f = new Uint8Array(new Uint32Array([d])["buffer"]);
        const i = co();
        const a = Ao(i);
        return oo(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(i), Array.from(f), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await io([t, n, d]["join"]("!") + "obfiowerehiring" + a)))["concat"](xo)), [3]))["map"](Oo));
      };
    };
  }
}]);