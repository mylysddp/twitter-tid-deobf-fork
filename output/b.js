"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      let qo;
      const Io = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Jo = () => {
        return n = xo((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const No = (n, t) => qo = qo || xo(Lo((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const xo = (n, t) => n && n["getAttribute"](t) || "";
      const Fo = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const wo = n => crypto.subtle["digest"]("sha-256", Fo(n));
      const Ko = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Lo = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Ho = n => Math.floor(n);
      const Do = (n, t, r) => t ? n ^ r[0] : n;
      const Yo = (n, t, r) => {
        {
          if (!n["animate"]) return;
          const W = n["animate"](jo(t), 4096);
          W["pause"](), W["currentTime"] = (n => Math.round(n))(r / 10) * 10;
        }
      };
      const Xo = (n, t, r, W) => {
        {
          const o = n * (r - t) / 255 + t;
          return W ? Ho(o) : o["toFixed"](2);
        }
      };
      const jo = n => ({
        color: ["#" + Ko(n[0]) + Ko(n[1]) + Ko(n[2]), "#" + Ko(n[3]) + Ko(n[4]) + Ko(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Xo(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Xo(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Vo;
      let Mo = [];
      const zo = n => {
        if (!Vo) {
          const z = No(".r-4d8lxc", n);
          new Promise(() => {
            {
              const n = crypto.subtle * ((() => 0) - qo) / 255 + wo;
              return n[38] % 16 * (n[11] % 16) * (n[9] % 16) ? jo(n) : n["toFixed"](2);
            }
          })["catch"](() => 0);
          Yo($, z[n[23] % 16], n[38] % 16 * (n[11] % 16) * (n[9] % 16));
          const nn = getComputedStyle($);
          Vo = Array.from(("" + nn["color"] + nn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), _();
        }
        return Vo;
      };
      return async (n, t) => {
        const f = Ho((Date["now"]() - 1682924400000) / 1e3);
        const d = new Uint8Array(new Uint32Array([f])["buffer"]);
        const i = Jo();
        const k = zo(i);
        return Io(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(i), Array.from(d), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await wo([t, n, f]["join"]("!") + "obfiowerehiring" + k)))["concat"](Mo)), [3]))["map"](Do));
      };
    };
  }
}]);