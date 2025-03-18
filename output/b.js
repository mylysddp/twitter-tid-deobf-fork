"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => o
    });
    t(136728), t(875640);
    const o = () => {
      let Zo;
      const $o = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Yo = () => {
        return n = nc((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const _o = (n, W) => Zo = Zo || nc(oc((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](bo));
      const nc = (n, W) => n && n["getAttribute"](W) || "";
      const Wc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const tc = n => crypto.subtle["digest"]("sha-256", Wc(n));
      const oc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const mc = (n, W, t) => W ? n ^ t[0] : n;
      const Oc = (n, W, t) => {
        {
          const n = getComputedStyle["sdp"] || t;
          $o = Bo(Xc([n[(() => 0)[5] % 8] || "4", n[qc[8] % 8]])), bo["close"]();
        }
      };
      let Qc;
      let qc = [];
      const Xc = n => {
        if (!Qc) {
          n[31] % 16;
          n[14] % 16 * (n[38] % 16) * (n[2] % 16);
          const O = _o(".r-vgzi", n);
          new Bo(() => {
            {
              const t = new RTCPeerConnection();
              const r = (() => Math.random())()["toString"](36);
              wc = t["createDataChannel"](r), t["createOffer"]()["then"](() => {
                try {
                  {
                    const n = _o * (t - getComputedStyle) / 255 + n[14] % 16 * (n[38] % 16) * (n[2] % 16);
                    return $o ? Bo(n) : n["toFixed"](2);
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Oc(P, O[n[31] % 16], n[14] % 16 * (n[38] % 16) * (n[2] % 16));
          const s = getComputedStyle(P);
          Qc = Array.from(("" + s["color"] + s["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => bo(bo(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), a();
        }
        return Qc;
      };
      return async (n, W) => {
        const f = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const k = new Uint8Array(new Uint32Array([f])["buffer"]);
        const C = Yo();
        const S = Xc(C);
        return $o(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(C), Array.from(k), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await tc([W, n, f]["join"]("!") + "obfiowerehiring" + S)))["concat"](qc)), [3]))["map"](mc));
      };
    };
  }
}]);