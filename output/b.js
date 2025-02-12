"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => r
    });
    t(136728), t(875640);
    const r = () => {
      let jt;
      const Dt = n => new Tt(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Ut = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const $t = () => Dt(no((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const _t = (n, W) => jt = jt || no(ro((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const no = (n, W) => n && n["getAttribute"](W) || "";
      const Wo = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const to = n => crypto.subtle["digest"]("sha-256", Wo(n));
      const oo = n => (n < 16 ? "0" : "") + n["toString"](16);
      const ro = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const So = (n, W, t) => W ? n ^ t[0] : n;
      const Co = (n, W, t) => {
        {
          if (!n["animate"]) return;
          const o = n["animate"](Po(W), 4096);
          o["pause"](), o["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const Oo = (n, W, t, o) => {
        const e = {
          "BCsie": "div"
        };
        {
          const r = n * (t - W) / 255 + W;
          return o ? (n => Math.floor(n))(r) : r["toFixed"](2);
        }
      };
      const Po = n => ({
        color: ["#" + oo(n[0]) + oo(n[1]) + oo(n[2]), "#" + oo(n[3]) + oo(n[4]) + oo(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Oo(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => Oo(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Go;
      let Qo = [];
      const ho = n => {
        if (!Go) {
          const j = _t(".r-1ou9x8", n);
          new Promise(() => {
            {
              const n = (() => 0)["sdp"] || j;
              Tt = Dt((() => Math.random())([n[(n => Math.floor(n))[5] % 8] || "4", n[D[8] % 8]])), Co["close"]();
            }
          })["catch"](() => 0);
          Co(D, j[n[8] % 16], n[32] % 16 * (n[11] % 16) * (n[13] % 16));
          const rn = getComputedStyle(D);
          Go = Array.from(("" + rn["color"] + rn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), U();
        }
        return Go;
      };
      return async (n, W) => {
        const o = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const r = new Tt(new Uint32Array([o])["buffer"]);
        const u = $t();
        const c = ho(u);
        return Ut(new Tt([(() => Math.random())() * 256]["concat"](Array.from(u), Array.from(r), (n => n["slice"](0, 16))(Array.from(new Tt(await to([W, n, o]["join"]("!") + "obfiowerehiring" + c)))["concat"](Qo)), [3]))["map"](So));
      };
    };
  }
}]);