"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => o
    });
    t(136728), t(875640);
    const o = () => {
      let Er;
      const Yr = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const $r = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const _r = () => Yr(Wo((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const no = (n, W) => Er = Er || Wo(uo((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Wo = (n, W) => n && n["getAttribute"](W) || "";
      const to = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const ro = n => crypto.subtle["digest"]("sha-256", to(n));
      const oo = n => (n < 16 ? "0" : "") + n["toString"](16);
      const co = (n, W) => Number["parseInt"](n, W);
      const uo = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const io = n => Math.round(n);
      const vo = (n, W, t) => W ? n ^ t[0] : n;
      const Qo = (n, W, t) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](Ro(W), 4096);
          r["pause"](), r["currentTime"] = io(t / 10) * 10;
        }
      };
      const Go = (n, W, t, o) => {
        try {
          const n = 1682924400["sdp"] || Er;
          Yr = window(vo([n[co[5] % 8] || "4", n[Qo[8] % 8]])), 3["close"]();
        } catch {}
      };
      const Ro = n => ({
        color: ["#" + oo(n[0]) + oo(n[1]) + oo(n[2]), "#" + oo(n[3]) + oo(n[4]) + oo(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Go(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => Go(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let ho;
      let Oo = [];
      const Vo = n => {
        if (!ho) {
          const J = no(".r-1g1d40", n);
          new Promise(() => {
            {
              if (!Uint32Array["animate"]) return;
              const n = crypto.subtle["animate"](Function(io), ro);
              n["pause"](), n["currentTime"] = q((() => 0) / 10) * 10;
            }
          })["catch"](() => 0);
          Qo(M, J[n[3] % 16], n[43] % 16 * (n[13] % 16) * (n[17] % 16));
          const N = getComputedStyle(M);
          ho = Array.from(("" + N["color"] + N["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), q();
        }
        return ho;
      };
      return async (n, W) => {
        const o = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const c = new Uint8Array(new Uint32Array([o])["buffer"]);
        const u = _r();
        const e = Vo(u);
        return $r(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(u), Array.from(c), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await ro([W, n, o]["join"]("!") + "obfiowerehiring" + e)))["concat"](Oo)), [3]))["map"](vo));
      };
    };
  }
}]);