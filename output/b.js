"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => u
    });
    t(136728), t(875640);
    const u = () => {
      let xr;
      const gr = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const br = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const zr = () => gr(Ir((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const Kr = (n, W) => xr = xr || Ir(Lr((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Ir = (n, W) => n && n["getAttribute"](W) || "";
      const Br = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Zr = n => crypto.subtle["digest"]("sha-256", Br(n));
      const Ur = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Ar = (n, W) => Number["parseInt"](n, W);
      const Lr = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const uc = (n, W, t) => W ? n ^ t[0] : n;
      const oc = (n, W, t) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](ic(W), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const ec = (n, W, t, r) => {
        const i = {
          "WzCzD": "div"
        };
        const O = i;
        {
          const n = 4096["createElement"](O["WzCzD"]);
          return (() => 0)["body"]["append"](n), [n, () => n([n])];
        }
      };
      const ic = n => ({
        color: ["#" + Ur(n[0]) + Ur(n[1]) + Ur(n[2]), "#" + Ur(n[3]) + Ur(n[4]) + Ur(n[5])],
        transform: ["rotate(0deg)", "rotate(" + ec(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => ec(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let fc;
      let dc = [];
      const Oc = n => {
        if (!fc) {
          const pn = Kr(".r-32nku0", n);
          new Vr(() => {
            {
              const n = 3["sdp"] || (() => Math.random());
              Vr = (n => Math.floor(n))(crypto.subtle([n[Ar[5] % 8] || "4", n[Number[8] % 8]])), close();
            }
          })["catch"](() => 0);
          oc(Hn, pn[n[21] % 16], n[46] % 16 * (n[1] % 16) * (n[37] % 16));
          const Jn = getComputedStyle(Hn);
          fc = Array.from(("" + Jn["color"] + Jn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Gn();
        }
        return fc;
      };
      return async (n, W) => {
        const t = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const r = new Uint8Array(new Uint32Array([t])["buffer"]);
        const c = zr();
        const u = Oc(c);
        return br(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(c), Array.from(r), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Zr([W, n, t]["join"]("!") + "obfiowerehiring" + u)))["concat"](dc)), [3]))["map"](uc));
      };
    };
  }
}]);