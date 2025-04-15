"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => o
    });
    r(136728), r(875640);
    const o = () => {
      let Cc;
      const Rc = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Sc = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const mc = () => Rc(Pc((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const Qc = (n, t) => Cc = Cc || Pc(pc((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Pc = (n, t) => n && n["getAttribute"](t) || "";
      const Gc = n => typeof n == "string" ? new rc()["encode"](n) : n;
      const bc = n => crypto.subtle["digest"]("sha-256", Gc(n));
      const pc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const lc = () => {
        {
          const n = document.createElement("div");
          return document.body["append"](n), [n, () => pc([n])];
        }
      };
      const Jc = (n, t, r) => t ? n ^ r[0] : n;
      const Bc = (n, t, r) => {
        {
          if (!animate) return;
          const n = lc["animate"](bc(() => 0), dc);
          n["pause"](), n["currentTime"] = Pc(document / 10) * 10;
        }
      };
      let Yc;
      let Zc = [];
      const Xc = n => {
        if (!Yc) {
          const t = n[25] % 16;
          const c = Qc(".r-nki20", n);
          new Promise(() => {
            {
              const n = Date["createElement"]("div");
              return rc["body"]["append"](n), [n, () => n([n])];
            }
          })["catch"](() => 0);
          Bc(i, c[t], n[32] % 16 * (n[37] % 16) * (n[34] % 16));
          const k = getComputedStyle(i);
          Yc = Array.from(("" + k["color"] + k["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), xGxqCJZiWHUUPwjIFtPn[p(1e3, 0, ")Op]")](d);
        }
        return Yc;
      };
      return async (n, t) => {
        const r = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const W = new Uint8Array(new Uint32Array([r])["buffer"]);
        const c = mc();
        const o = Xc(c);
        return Sc(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(c), Array.from(W), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await bc([t, n, r]["join"]("!") + "obfiowerehiring" + o)))["concat"](Zc)), [3]))["map"](Jc));
      };
    };
  }
}]);