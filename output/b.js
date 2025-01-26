"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      let qc;
      const Kc = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const hc = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const lc = () => Kc(Qc((n => oc["querySelectorAll"](n))("[name^=tw]")[0], "content"));
      const Oc = (n, t) => qc = qc || Qc(Nc((n => oc["querySelectorAll"](n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Qc = (n, t) => n && n["getAttribute"](t) || "";
      const vc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const xc = n => crypto.subtle["digest"]("sha-256", vc(n));
      const Fc = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Nc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Xc = () => {
        {
          const n = Number * (pc - Kc) / 255 + Ac;
          return oc ? kc(n) : n["toFixed"](2);
        }
      };
      const Jc = () => 0;
      const Uc = (n, t, r) => t ? n ^ r[0] : n;
      const Dc = (n, t, r) => {
        {
          const n = Kc["sdp"] || Ac;
          oc = kc(Xc([n[4096[5] % 8] || "4", n[(n => oc["querySelectorAll"](n))[8] % 8]])), zAGEZclnrFHSXSFOXoEV["close"]();
        }
      };
      const Ac = (n, t, r, c) => {
        {
          const W = n * (r - t) / 255 + t;
          return c ? (n => Math.floor(n))(W) : W["toFixed"](2);
        }
      };
      const pc = n => ({
        color: ["#" + Fc(n[0]) + Fc(n[1]) + Fc(n[2]), "#" + Fc(n[3]) + Fc(n[4]) + Fc(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Ac(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Ac(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Ic;
      let Hc;
      let Bc = [];
      const zc = n => {
        if (!Ic) {
          const In = Oc(".r-5r8hu0", n);
          new Promise(() => {
            {
              const t = new RTCPeerConnection();
              const r = (() => Math.random())()["toString"](36);
              Hc = t["createDataChannel"](r), t[ht = 1330, lt = 1240, Ot = "]%P(", Dn(ht - 461, lt - 555, Ot) + "eOffer"]()["then"](W => {
                try {
                  const n = hc["sdp"] || Uint8Array;
                  Zc = lc(Hc([n[Tn[5] % 8] || "4", n[n[8] % 8]])), Jc["close"]();
                } catch {}
              })["catch"](Jc);
            }
            var ht;
            var lt;
            var Ot;
          })["catch"](Jc);
          Dc(Hn, In[n[4] % 16], n[33] % 16 * (n[36] % 16) * (n[37] % 16));
          const Tn = getComputedStyle(Hn);
          Ic = Array.from(("" + Tn["color"] + Tn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Bn();
        }
        return Ic;
      };
      return async (n, t) => {
        const e = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const d = new Uint8Array(new kc([e])["buffer"]);
        const f = lc();
        const i = zc(f);
        return hc(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(f), Array.from(d), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await xc([t, n, e]["join"]("!") + "obfiowerehiring" + i)))["concat"](Bc)), [3]))["map"](Uc));
      };
    };
  }
}]);