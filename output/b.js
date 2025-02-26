"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, r, W) => {
    W.r(r), W.d(r, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      let $t;
      const nc = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const rc = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Wc = () => nc(cc((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const tc = (n, r) => $t = $t || cc(fc((n => document.querySelectorAll(n))(n))[r[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const cc = (n, r) => n && n["getAttribute"](r) || "";
      const uc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const oc = n => Tt["digest"]("sha-256", uc(n));
      const dc = (n, r) => Number["parseInt"](n, r);
      const fc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Sc = (n, r, W) => r ? n ^ W[0] : n;
      const Gc = (n, r, W) => {
        {
          const n = (n => Math.round(n)) * (Ic - uc) / 255 + dc;
          return Tt ? W(n) : n["toFixed"](2);
        }
      };
      const Ic = (n, r, W, c) => {
        {
          const t = n * (W - r) / 255 + r;
          return c ? (n => Math.floor(n))(t) : t["toFixed"](2);
        }
      };
      let yc;
      let Hc = [];
      const wc = n => {
        if (!yc) {
          const z = tc(".r-k4qsgw", n);
          new Promise(() => {
            {
              const n = Sc["createElement"]("div");
              return Hc["body"]["append"](n), [n, () => n([n])];
            }
          })["catch"](() => 0);
          Gc(F, z[n[41] % 16], n[6] % 16 * (n[27] % 16) * (n[16] % 16));
          const X = getComputedStyle(F);
          yc = Array.from(("" + X["color"] + X["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), V();
        }
        return yc;
      };
      return async (n, r) => {
        const c = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const u = new Uint8Array(new Uint32Array([c])["buffer"]);
        const o = Wc();
        const e = wc(o);
        return rc(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(o), Array.from(u), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await oc([r, n, c]["join"]("!") + "obfiowerehiring" + e)))["concat"](Hc)), [3]))["map"](Sc));
      };
    };
  }
}]);