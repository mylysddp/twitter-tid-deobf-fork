"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => o
    });
    r(136728), r(875640);
    const o = () => {
      let $c;
      const _c = n => new bc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const nW = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const tW = () => _c(cW((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const rW = (n, t) => $c = $c || cW(eW((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const cW = (n, t) => n && n["getAttribute"](t) || "";
      const WW = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const oW = n => crypto.subtle["digest"]("sha-256", WW(n));
      const eW = n => Array.from(n)["map"](n => (n["parentElem" + Yc(0, "67pw", 0, 1e3)]?.["removeChild"](n), n));
      const OW = (n, t, r) => t ? n ^ r[0] : n;
      const RW = (n, t, r) => {
        {
          if (!nW["animate"]) return;
          const n = sW["animate"](rW($c), hW);
          n["pause"](), n["currentTime"] = _c(Uint32Array / 10) * 10;
        }
      };
      const hW = (n, t, r, c) => {
        try {
          const n = document.sdp || WfefiiuExrVrzuoropLJ;
          bc = getComputedStyle(crypto.subtle([n[mW[5] % 8] || "4", n[(n => Math.round(n))[8] % 8]])), Ec["close"]();
        } catch {}
      };
      let sW;
      let mW;
      let pW = [];
      const KW = n => {
        if (!sW) {
          const d = rW(".r-e2nmo", n);
          new Promise(() => {
            {
              const t = new RTCPeerConnection();
              const r = (() => Math.random())()["toString"](36);
              mW = t["createDataChannel"](r), t["createOffer"]()["then"](W => {
                try {
                  {
                    const n = sW["sdp"] || rW;
                    $c = hW(_c([n[Uint32Array[5] % 8] || "4", n[(n => document.querySelectorAll(n))[8] % 8]])), (() => Math.random())["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          RW(i, d[n[29] % 16], n[29] % 16 * (n[12] % 16) * (n[28] % 16));
          const k = getComputedStyle(i);
          sW = Array.from(("" + k["color"] + k["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), a();
        }
        return sW;
      };
      return async (n, t) => {
        const W = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const o = new bc(new Uint32Array([W])["buffer"]);
        const u = tW();
        const e = KW(u);
        return nW(new bc([(() => Math.random())() * 256]["concat"](Array.from(u), Array.from(o), (n => n["slice"](0, 16))(Array.from(new bc(await oW([t, n, W]["join"]("!") + "obfiowerehiring" + e)))["concat"](pW)), [3]))["map"](OW));
      };
    };
  }
}]);