"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  471269: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => u
    });
    t(136728), t(875640);
    const u = () => {
      let fr;
      const ir = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const dr = () => {
        return n = kr((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const mr = (n, W) => fr = fr || kr(Pr((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const kr = (n, W) => n && n["getAttribute"](W) || "";
      const Rr = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const ar = n => crypto.subtle["digest"]("sha-256", Rr(n));
      const Cr = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Pr = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Sr = n => Math.floor(n);
      const Gr = (n, W, t) => W ? n ^ t[0] : n;
      const pr = (n, W, t) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](zr(W), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const vr = (n, W, t, r) => {
        {
          const o = n * (t - W) / 255 + W;
          return r ? Sr(o) : o["toFixed"](2);
        }
      };
      const zr = n => ({
        color: ["#" + Cr(n[0]) + Cr(n[1]) + Cr(n[2]), "#" + Cr(n[3]) + Cr(n[4]) + Cr(n[5])],
        transform: ["rotate(0deg)", "rotate(" + vr(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => vr(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Hr;
      let Jr = [];
      const gr = n => {
        if (!Hr) {
          const an = mr(".r-17djpc", n);
          new Promise(() => {
            {
              const W = new RTCPeerConnection();
              const r = (() => Math.random())()["toString"](36);
              yr = W["createDataChannel"](r), W["createOffer"]()["then"](t => {
                try {
                  {
                    const o = t["sdp"] || r;
                    Jr = Array.from(Rr([o[n[5] % 8] || "4", o[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          pr(Cn, an[n[28] % 16], n[36] % 16 * (n[3] % 16) * (n[33] % 16));
          const On = getComputedStyle(Cn);
          Hr = Array.from(("" + On["color"] + On["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Pn();
        }
        return Hr;
      };
      return async (n, W) => {
        const o = Sr((Date["now"]() - 1682924400000) / 1e3);
        const u = new Uint8Array(new Uint32Array([o])["buffer"]);
        const c = dr();
        const e = gr(c);
        return ir(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(c), Array.from(u), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await ar([W, n, o]["join"]("!") + "obfiowerehiring" + e)))["concat"](Jr)), [3]))["map"](Gr));
      };
    };
  }
}]);