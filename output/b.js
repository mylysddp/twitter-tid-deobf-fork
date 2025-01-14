"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => o
    });
    t(136728), t(875640);
    const o = () => {
      let nr;
      const Wr = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const tr = () => {
        return n = cr((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const rr = (n, W) => nr = nr || cr(fr((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Jt));
      const cr = (n, W) => n && n["getAttribute"](W) || "";
      const or = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const ur = n => crypto.subtle["digest"]("sha-256", or(n));
      const er = n => (n < 16 ? "0" : "") + n["toString"](16);
      const fr = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Pr = (n, W, t) => W ? n ^ t[0] : n;
      const mr = (n, W, t) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](Gr(W), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const Qr = (n, W, t, r) => {
        {
          const c = n * (t - W) / 255 + W;
          return r ? (n => Math.floor(n))(c) : c["toFixed"](2);
        }
      };
      const Gr = n => ({
        color: ["#" + er(n[0]) + er(n[1]) + er(n[2]), "#" + er(n[3]) + er(n[4]) + er(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Qr(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => Qr(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Or;
      let vr = [];
      const Fr = n => {
        if (!Or) {
          const M = rr(".r-akiw5c", n);
          new Promise(() => {
            {
              const W = new RTCPeerConnection();
              const t = (() => Math.random())()["toString"](36);
              pr = W["createDataChannel"](t), W["createOffer"]()["then"](r => {
                try {
                  {
                    const c = r["sdp"] || t;
                    vr = Array.from(or([c[n[5] % 8] || "4", c[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          mr(Z, M[n[23] % 16], n[8] % 16 * (n[31] % 16) * (n[28] % 16));
          const z = getComputedStyle(Z);
          Or = Array.from(("" + z["color"] + z["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Jt(Jt(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), g();
        }
        return Or;
      };
      return async (n, W) => {
        const r = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const c = new Uint8Array(new Uint32Array([r])["buffer"]);
        const o = tr();
        const u = Fr(o);
        return Wr(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(o), Array.from(c), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await ur([W, n, r]["join"]("!") + "obfiowerehiring" + u)))["concat"](vr)), [3]))["map"](Pr));
      };
    };
  }
}]);