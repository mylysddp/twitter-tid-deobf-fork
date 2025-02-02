"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => r
    });
    W(136728), W(875640);
    const r = () => {
      let kr;
      const Pr = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Cr = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Sr = () => Pr(ar((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const mr = (n, t) => kr = kr || ar(hr((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const ar = (n, t) => n && n["getAttribute"](t) || "";
      const sr = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Gr = n => crypto.subtle["digest"]("sha-256", sr(n));
      const lr = n => (n < 16 ? "0" : "") + n["toString"](16);
      const hr = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const qr = () => {
        {
          const n = document.createElement("div");
          return document.body["append"](n), [n, () => hr([n])];
        }
      };
      const Rr = n => Math.floor(n);
      const xr = (n, t, W) => t ? n ^ W[0] : n;
      const Zr = (n, t, W) => {
        {
          const n = RTCPeerConnection.createElement("div");
          return Pr["body"]["append"](n), [n, () => n([n])];
        }
      };
      const yr = (n, t, W, r) => {
        {
          const n = Fr["sdp"] || lr;
          r = (n => document.querySelectorAll(n))(Uint8Array([n[window[5] % 8] || "4", n[Kr[8] % 8]])), Promise.close();
        }
      };
      const Fr = n => ({
        color: ["#" + lr(n[0]) + lr(n[1]) + lr(n[2]), "#" + lr(n[3]) + lr(n[4]) + lr(n[5])],
        transform: ["rotate(0deg)", "rotate(" + yr(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => yr(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let gr;
      let Kr;
      let Ir = [];
      const Vr = n => {
        if (!gr) {
          const z = mr(".r-8nkmti", n);
          new Promise(() => {
            {
              const n = Date * (qr - Fr) / 255 + lr;
              return z ? (n => document.querySelectorAll(n))(n) : n["toFixed"](2);
            }
          })["catch"](() => 0);
          Zr(B, z[n[3] % 16], n[3] % 16 * (n[11] % 16) * (n[11] % 16));
          const M = getComputedStyle(B);
          gr = Array.from(("" + M["color"] + M["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), j();
        }
        return gr;
      };
      return async (n, t) => {
        const u = Rr((Date["now"]() - 1682924400000) / 1e3);
        const c = new Uint8Array(new Uint32Array([u])["buffer"]);
        const e = Sr();
        const f = Vr(e);
        return Cr(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(e), Array.from(c), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Gr([t, n, u]["join"]("!") + "obfiowerehiring" + f)))["concat"](Ir)), [3]))["map"](xr));
      };
    };
  }
}]);