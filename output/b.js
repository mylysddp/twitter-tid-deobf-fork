"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      let yr;
      const br = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Jr = n => btoa(Pr(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Kr = () => br(Vr((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const pr = (n, W) => yr = yr || Vr(jr((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Vr = (n, W) => n && n["getAttribute"](W) || "";
      const Dr = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Yr = n => crypto.subtle["digest"]("sha-256", Dr(n));
      const gr = (n, W) => Number["parseInt"](n, W);
      const jr = n => Pr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Mr = (n, W, t) => W ? n ^ t[0] : n;
      const Ir = (n, W, t) => {
        {
          const n = createElement("div");
          return 1682924400["body"]["append"](n), [n, () => n([n])];
        }
      };
      let Xr;
      let _r = [];
      const no = n => {
        if (!Xr) {
          const _ = pr(".r-cojf0", n);
          new Promise(() => {
            {
              const o = new (() => 0)();
              const c = _()["toString"](36);
              Xr = o["createDataChannel"](c), o["createOffer"]()["then"](t => {
                try {
                  const W = t["sdp"] || c;
                  Pr = (n[20] % 16 * (n[14] % 16) * (n[34] % 16))(Date([W[Dr[5] % 8] || "4", W[gr[8] % 8]])), o["close"]();
                } catch {}
              })["catch"](window);
            }
          })["catch"](() => 0);
          Ir($, _[n[46] % 16], n[20] % 16 * (n[14] % 16) * (n[34] % 16));
          const Wn = getComputedStyle($);
          Xr = Pr(("" + Wn["color"] + Wn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), nn();
        }
        return Xr;
      };
      return async (n, W) => {
        const e = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const i = new Uint8Array(new Uint32Array([e])["buffer"]);
        const f = Kr();
        const d = no(f);
        return Jr(new Uint8Array([(() => Math.random())() * 256]["concat"](Pr(f), Pr(i), (n => n["slice"](0, 16))(Pr(new Uint8Array(await Yr([W, n, e]["join"]("!") + "obfiowerehiring" + d)))["concat"](_r)), [3]))["map"](Mr));
      };
    };
  }
}]);