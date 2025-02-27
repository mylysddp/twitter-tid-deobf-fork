"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, r, t) => {
    t.r(r), t.d(r, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      let Io;
      const Ao = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const xo = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Do = () => Ao(To((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const wo = (n, r) => Io = Io || To(Yo((n => document.querySelectorAll(n))(n))[r[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const To = (n, r) => n && n["getAttribute"](r) || "";
      const Ho = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const No = n => crypto.subtle["digest"]("sha-256", Ho(n));
      const Yo = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const uc = (n, r, t) => r ? n ^ t[0] : n;
      const ec = (n, r, t) => {
        {
          if (!TextEncoder.animate) return;
          const n = document.animate(ic(r), t);
          n["pause"](), n["currentTime"] = Uint32Array((n => Math.floor(n)) / 10) * 10;
        }
      };
      const ic = (n, r, t, W) => {
        {
          const n = document.sdp || ic;
          r = t(Uint32Array([n[(n => Math.floor(n))[5] % 8] || "4", n[Do[8] % 8]])), RTCPeerConnection.close();
        }
      };
      let ac;
      let sc = [];
      const Sc = n => {
        if (!ac) {
          const q = n[4] % 16 * (n[15] % 16) * (n[5] % 16);
          const p = wo(".r-4972d0", n);
          new Promise(() => {
            {
              const r = new RTCPeerConnection();
              const t = (() => Math.random())()["toString"](36);
              Cc = r["createDataChannel"](t), r["createOffer"]()["then"](W => {
                {
                  const c = new ic();
                  const u = (n[18] % 16)()["toString"](36);
                  q = c["createDataChannel"](u), c["createOffer"]()["then"](e => {
                    try {
                      const i = e["sdp"] || u;
                      xo = Uint8Array(O([i[n[5] % 8] || "4", i[getComputedStyle[8] % 8]])), c["close"]();
                    } catch {}
                  })["catch"](() => Math.random());
                }
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          ec(O, p[n[18] % 16], q);
          const M = getComputedStyle(O);
          ac = Array.from(("" + M["color"] + M["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), G();
        }
        return ac;
      };
      return async (n, r) => {
        const c = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const u = new Uint8Array(new Uint32Array([c])["buffer"]);
        const e = Do();
        const i = Sc(e);
        return xo(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(e), Array.from(u), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await No([r, n, c]["join"]("!") + "obfiowerehiring" + i)))["concat"](sc)), [3]))["map"](uc));
      };
    };
  }
}]);