"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => u
    });
    t(136728), t(875640);
    const u = () => {
      let Oo;
      const Io = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const qo = () => {
        return n = po((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Bo = (n, W) => Oo = Oo || po(Uo((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](mo));
      const po = (n, W) => n && n["getAttribute"](W) || "";
      const yo = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const wo = n => crypto.subtle["digest"]("sha-256", yo(n));
      const Zo = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Uo = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Ko = (n, W, t) => W ? n ^ t[0] : n;
      const Yo = (n, W, t) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](To(W), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const Do = (n, W, t, r) => {
        {
          const o = n * (t - W) / 255 + W;
          return r ? (n => Math.floor(n))(o) : o["toFixed"](2);
        }
      };
      const To = n => ({
        color: ["#" + Zo(n[0]) + Zo(n[1]) + Zo(n[2]), "#" + Zo(n[3]) + Zo(n[4]) + Zo(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Do(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => Do(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Xo;
      let _o = [];
      const tu = n => {
        if (!Xo) {
          const f = Bo(".r-cfij60", n);
          new Promise(() => {
            {
              const W = new RTCPeerConnection();
              const t = (() => Math.random())()["toString"](36);
              $o = W["createDataChannel"](t), W["createOffer"]()["then"](r => {
                try {
                  {
                    const o = r["sdp"] || t;
                    _o = Array.from(yo([o[n[5] % 8] || "4", o[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Yo(k, f[n[25] % 16], n[7] % 16 * (n[33] % 16) * (n[42] % 16));
          const m = getComputedStyle(k);
          Xo = Array.from(("" + m["color"] + m["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => mo(mo(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), a();
        }
        return Xo;
      };
      return async (n, W) => {
        const o = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const u = new Uint8Array(new Uint32Array([o])["buffer"]);
        const c = qo();
        const e = tu(c);
        return Io(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(c), Array.from(u), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await wo([W, n, o]["join"]("!") + "obfiowerehiring" + e)))["concat"](_o)), [3]))["map"](Ko));
      };
    };
  }
}]);