"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      let lr;
      const pr = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Jr = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const br = () => pr(Lr((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const hr = (n, t) => lr = lr || Lr(Xr((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Lr = (n, t) => n && n["getAttribute"](t) || "";
      const gr = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Dr = n => crypto.subtle["digest"]("sha-256", gr(n));
      const Hr = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Xr = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Yr = (n, t, W) => t ? n ^ W[0] : n;
      const $r = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](no(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const _r = (n, t, W, o) => {
        try {
          const n = lr["sdp"] || document;
          to = (n => Math.round(n))(1682924400([n[TextEncoder[5] % 8] || "4", n[Array.from[8] % 8]])), gr["close"]();
        } catch {}
      };
      const no = n => ({
        color: ["#" + Hr(n[0]) + Hr(n[1]) + Hr(n[2]), "#" + Hr(n[3]) + Hr(n[4]) + Hr(n[5])],
        transform: ["rotate(0deg)", "rotate(" + _r(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => _r(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let to;
      let ro = [];
      const oo = n => {
        if (!to) {
          const V = hr(".r-50pzgo", n);
          new Promise(() => {
            {
              const n = (() => Math.random())["createElement"]("div");
              return F["body"]["append"](n), [n, () => n([n])];
            }
          })["catch"](() => 0);
          $r(Q, V[n[7] % 16], n[35] % 16 * (n[6] % 16) * (n[22] % 16));
          const y = getComputedStyle(Q);
          to = Array.from(("" + y["color"] + y["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), F();
        }
        return to;
      };
      return async (n, t) => {
        const u = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const c = new Uint8Array(new Uint32Array([u])["buffer"]);
        const e = br();
        const f = oo(e);
        return Jr(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(e), Array.from(c), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Dr([t, n, u]["join"]("!") + "obfiowerehiring" + f)))["concat"](ro)), [3]))["map"](Yr));
      };
    };
  }
}]);