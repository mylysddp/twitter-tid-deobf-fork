"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => u
    });
    t(136728), t(875640);
    const u = () => {
      let cc;
      const oc = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const ec = () => {
        return n = fc((n => Kr["querySelectorAll"](n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const dc = (n, W) => cc = cc || fc(Qc((n => Kr["querySelectorAll"](n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const fc = (n, W) => n && n["getAttribute"](W) || "";
      const kc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const ic = n => crypto.subtle["digest"]("sha-256", kc(n));
      const ac = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Qc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const vc = (n, W, t) => W ? n ^ t[0] : n;
      const hc = (n, W, t) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](Tc(W), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const Pc = (n, W, t, r) => {
        {
          const c = n * (t - W) / 255 + W;
          return r ? (n => Math.floor(n))(c) : c["toFixed"](2);
        }
      };
      const Tc = n => ({
        color: ["#" + ac(n[0]) + ac(n[1]) + ac(n[2]), "#" + ac(n[3]) + ac(n[4]) + ac(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Pc(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => Pc(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Oc;
      let Fc = [];
      const xc = n => {
        if (!Oc) {
          const O = dc(".r-8wczi", n);
          new Promise(() => {
            {
              const W = new RTCPeerConnection();
              const r = (() => Math.random())()["toString"](36);
              wc = W["createDataChannel"](r), W["createOffer"]()["then"](t => {
                {
                  const n = Function * (n[26] % 16 - dc) / 255 + ec;
                  return n ? 4096(n) : n["toFixed"](2);
                }
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          hc(w, O[n[26] % 16], n[10] % 16 * (n[32] % 16) * (n[0] % 16));
          const y = getComputedStyle(w);
          Oc = Array.from(("" + y["color"] + y["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), F();
        }
        return Oc;
      };
      return async (n, W) => {
        const e = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const d = new Uint8Array(new Uint32Array([e])["buffer"]);
        const f = ec();
        const k = xc(f);
        return oc(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(f), Array.from(d), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await ic([W, n, e]["join"]("!") + "obfiowerehiring" + k)))["concat"](Fc)), [3]))["map"](vc));
      };
    };
  }
}]);