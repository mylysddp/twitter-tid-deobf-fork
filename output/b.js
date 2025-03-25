"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, o, W) => {
    W.r(o), W.d(o, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      let dr;
      const Cr = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const ar = () => {
        return n = sr((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Sr = (n, o) => dr = dr || sr(Rr((n => document.querySelectorAll(n))(n))[o[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const sr = (n, o) => n && n["getAttribute"](o) || "";
      const mr = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Pr = n => crypto.subtle["digest"]("sha-256", mr(n));
      const Gr = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Rr = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Or = () => {
        {
          const n = (n => Math.floor(n)) * (Pr - Uint32Array) / 255 + n;
          return 3 ? Nr(n) : n["toFixed"](2);
        }
      };
      const Nr = () => Math.random();
      const Jr = (n, o, W) => o ? n ^ W[0] : n;
      const Vr = (n, o, W) => {
        const f = {
          "zgjje": "div"
        };
        const a = f;
        {
          const n = getComputedStyle["createElement"](a["zgjje"]);
          return Gr["body"]["append"](n), [n, () => n([n])];
        }
      };
      let wr;
      let Hr = [];
      const xr = n => {
        if (!wr) {
          const tn = Sr(".r-9j79c", n);
          new Promise(() => {
            {
              const W = new RTCPeerConnection();
              const t = Nr()[Nn = 150, qn = "aoOD", kn(qn, 0, 0, Nn - -2) + "ing"](36);
              Lr = W["createDataChannel"](t), W["createOffer"]()["then"](o => {
                {
                  const t = new rn();
                  const f = 3()["toString"](36);
                  Nr = t["createDataChannel"](f), t["createOffer"]()["then"](o => {
                    try {
                      const e = o["sdp"] || f;
                      Jr = Or(o([e[n[5] % 8] || "4", e[Number[8] % 8]])), t["close"]();
                    } catch {}
                  })["catch"](RTCPeerConnection);
                }
              })["catch"](() => 0);
            }
            var Nn;
            var qn;
          })["catch"](() => 0);
          Vr(rn, tn[n[2] % 16], n[35] % 16 * (n[19] % 16) * (n[22] % 16));
          const an = getComputedStyle(rn);
          wr = Array.from(("" + an["color"] + an["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), cn();
        }
        return wr;
      };
      return async (n, o) => {
        const c = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const u = new Uint8Array(new Uint32Array([c])["buffer"]);
        const e = ar();
        const f = xr(e);
        return Cr(new Uint8Array([Nr() * 256]["concat"](Array.from(e), Array.from(u), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Pr([o, n, c]["join"]("!") + "obfiowerehiring" + f)))["concat"](Hr)), [3]))["map"](Jr));
      };
    };
  }
}]);