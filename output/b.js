"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      let Co;
      const Oo = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Go = () => {
        return n = Po((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const lo = (n, W) => Co = Co || Po(bo((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Po = (n, W) => n && n["getAttribute"](W) || "";
      const Lo = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const vo = n => io["digest"]("sha-256", Lo(n));
      const po = n => (n < 16 ? "0" : "") + n["toString"](16);
      const bo = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Ko = (n, W, t) => W ? n ^ t[0] : n;
      const Bo = (n, W, t) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](yo(W), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const jo = (n, W, t, o) => {
        {
          const r = n * (t - W) / 255 + W;
          return o ? (n => Math.floor(n))(r) : r["toFixed"](2);
        }
      };
      const yo = n => ({
        color: ["#" + po(n[0]) + po(n[1]) + po(n[2]), "#" + po(n[3]) + po(n[4]) + po(n[5])],
        transform: ["rotate(0deg)", "rotate(" + jo(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => jo(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let xo;
      let Mo = [];
      const go = n => {
        if (!xo) {
          const F = lo(".r-fhp0y0", n);
          new Promise(() => {
            {
              const M = new RTCPeerConnection();
              const V = (() => Math.random())()["toString"](36);
              To = M["createDataChannel"](V), M["createOffer"]()["then"](g => {
                try {
                  {
                    const W = g["sdp"] || V;
                    Mo = Array.from(Lo([W[n[5] % 8] || "4", W[n[8] % 8]])), M["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Bo(z, F[n[40] % 16], n[22] % 16 * (n[43] % 16) * (n[3] % 16));
          const _ = getComputedStyle(z);
          xo = Array.from(("" + _["color"] + _["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), $();
        }
        return xo;
      };
      return async (n, W) => {
        const u = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const e = new Uint8Array(new Uint32Array([u])["buffer"]);
        const i = Go();
        const d = go(i);
        return Oo(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(i), Array.from(e), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await vo([W, n, u]["join"]("!") + "obfiowerehiring" + d)))["concat"](Mo)), [3]))["map"](Ko));
      };
    };
  }
}]);