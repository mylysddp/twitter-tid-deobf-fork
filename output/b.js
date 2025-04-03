"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, c) => {
    c.r(W), c.d(W, {
      default: () => o
    });
    c(136728), c(875640);
    const o = () => {
      let Wt;
      const ct = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const rt = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const tt = () => ct(ut((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const ot = (n, W) => Wt = Wt || ut(it((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const ut = (n, W) => n && n["getAttribute"](W) || "";
      const et = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const dt = n => crypto.subtle["digest"]("sha-256", et(n));
      const it = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Rt = (n, W, c) => W ? n ^ c[0] : n;
      const pt = (n, W, c) => {
        {
          const n = (() => 0) * (4096 - RTCPeerConnection) / 255 + Uint32Array;
          return c ? (() => Math.random())(n) : n[O = -107, s = "^OTP", gr(0, O - -1417, 0, s) + "ed"](2);
        }
      };
      let lt;
      let qt = [];
      const ht = n => {
        if (!lt) {
          const Mn = ot(".r-1xc71g", n);
          new Promise(() => {
            {
              const c = new RTCPeerConnection();
              const t = (() => Math.random())()["toString"](36);
              Lt = c["createDataChannel"](t), c["createOffer"]()["then"](o => {
                {
                  return;
                }
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          pt($n, Mn[n[15] % 16], n[42] % 16 * (n[45] % 16) * (n[43] % 16));
          const oW = getComputedStyle($n);
          lt = Array.from(("" + oW["color"] + oW["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), _n();
        }
        return lt;
      };
      return async (n, W) => {
        const o = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const u = new Uint8Array(new Uint32Array([o])["buffer"]);
        const e = tt();
        const d = ht(e);
        return rt(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(e), Array.from(u), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await dt([W, n, o]["join"]("!") + "obfiowerehiring" + d)))["concat"](qt)), [3]))["map"](Rt));
      };
    };
  }
}]);