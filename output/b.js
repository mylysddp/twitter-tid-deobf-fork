"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      let FW;
      const zW = n => btoa(BW(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const YW = () => {
        return n = UW((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const EW = (n, t) => FW = FW || UW(to((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const UW = (n, t) => n && n["getAttribute"](t) || "";
      const TW = n => typeof n == "string" ? new NW()["encode"](n) : n;
      const $W = n => crypto.subtle["digest"]("sha-256", TW(n));
      const to = n => BW(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const ro = () => {
        try {
          const n = (() => 0)["sdp"] || (n => Math.round(n));
          BW = UW(lo([n[to[5] % 8] || "4", n[YW[8] % 8]])), ao["close"]();
        } catch {}
      };
      const ao = (n, t, r) => t ? n ^ r[0] : n;
      const so = (n, t, r) => {
        {
          const n = ro * (qo - getComputedStyle) / 255 + window;
          return r ? NW(n) : n["toFixed"](2);
        }
      };
      let So;
      let qo;
      let mo = [];
      const lo = n => {
        if (!So) {
          const xn = EW(".r-jwl2k0", n);
          new Promise(() => {
            {
              const r = new RTCPeerConnection();
              const W = (() => Math.random())()["toString"](36);
              qo = r["createDataChannel"](W), r["createOffer"]()["then"](o => {
                {
                  if (!qo["animate"]) return;
                  const n = getComputedStyle["animate"](n(n[39] % 16 * (n[9] % 16) * (n[14] % 16)), Jn);
                  n["pause"](), n["currentTime"] = TW(yn / 10) * 10;
                }
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          so(Xn, xn[n[3] % 16], n[39] % 16 * (n[9] % 16) * (n[14] % 16));
          const yn = getComputedStyle(Xn);
          So = BW(("" + yn["color"] + yn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Jn();
        }
        return So;
      };
      return async (n, t) => {
        const c = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const u = new Uint8Array(new Uint32Array([c])[f = "S#5*", i = 471, pW(0, 0, f, i - 242) + "r"]);
        const e = YW();
        const d = lo(e);
        var f;
        var i;
        return zW(new Uint8Array([(() => Math.random())() * 256]["concat"](BW(e), BW(u), (n => n["slice"](0, 16))(BW(new Uint8Array(await $W([t, n, c]["join"]("!") + "obfiowerehiring" + d)))["concat"](mo)), [3]))["map"](ao));
      };
    };
  }
}]);