"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      let xr;
      const Yr = n => new Nr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Ar = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const $r = () => Yr(nc((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const _r = (n, t) => xr = xr || nc(uc((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const nc = (n, t) => n && n["getAttribute"](t) || "";
      const tc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Wc = n => crypto.subtle["digest"]("sha-256", tc(n));
      const rc = n => (n < 16 ? "0" : "") + n["toString"](16);
      const uc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Oc = (n, t, W) => t ? n ^ W[0] : n;
      const Rc = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](Cc(t), 4096);
          r["pause"](), r[function (n, t, W, r, c) {
            return zr(0, 0, 0, c - 929, W);
          }(0, 0, "hidd", 0, 728) + "ntTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const sc = (n, t, W, r) => {
        {
          const n = sdp || Uint32Array;
          Pc = uc(t([n[getComputedStyle[5] % 8] || "4", n[Date[8] % 8]])), mc["close"]();
        }
      };
      const Cc = n => ({
        color: ["#" + rc(n[0]) + rc(n[1]) + rc(n[2]), "#" + rc(n[3]) + rc(n[4]) + rc(n[5])],
        transform: ["rotate(0deg)", "rotate(" + sc(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => sc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let mc;
      let hc = [];
      const qc = n => {
        if (!mc) {
          const N = _r(".r-1rncm5", n);
          new Promise(() => {
            try {
              const n = sdp || Array.from;
              Nr = _r((() => 0)([n[TextEncoder[5] % 8] || "4", n[tc[8] % 8]])), Wc["close"]();
            } catch {}
          })["catch"](() => 0);
          Rc(D, N[n[47] % 16], n[13] % 16 * (n[26] % 16) * (n[27] % 16));
          const X = getComputedStyle(D);
          mc = Array.from(("" + X["color"] + X["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), V();
        }
        return mc;
      };
      return async (n, t) => {
        const d = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const f = new Nr(new Uint32Array([d])["buffer"]);
        const k = $r();
        const i = qc(k);
        return Ar(new Nr([(() => Math.random())() * 256]["concat"](Array.from(k), Array.from(f), (n => n["slice"](0, 16))(Array.from(new Nr(await Wc([t, n, d]["join"]("!") + "obfiowerehiring" + i)))["concat"](hc)), [3]))["map"](Oc));
      };
    };
  }
}]);