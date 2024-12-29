"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  471269: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      let gW;
      const EW = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const TW = () => {
        return n = AW((n => lW["querySelectorAll"](n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const UW = (n, t) => gW = gW || AW(XW((n => lW["querySelectorAll"](n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const AW = (n, t) => n && n["getAttribute"](t) || "";
      const YW = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const zW = n => crypto.subtle["digest"]("sha-256", YW(n));
      const DW = n => (n < 16 ? "0" : "") + n["toString"](16);
      const XW = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const er = (n, t, W) => t ? n ^ W[0] : n;
      const ir = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](dr(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const fr = (n, t, W, r) => {
        {
          const u = n * (W - t) / 255 + t;
          return r ? (n => Math.floor(n))(u) : u["toFixed"](2);
        }
      };
      const dr = n => ({
        color: ["#" + DW(n[0]) + DW(n[1]) + DW(n[2]), "#" + DW(n[3]) + DW(n[4]) + DW(n[5])],
        transform: ["rotate(0deg)", "rotate(" + fr(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => fr(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let kr;
      let Sr = [];
      const Cr = n => {
        if (!kr) {
          const l = UW(".r-z5ak0", n);
          new Promise(() => {
            {
              const t = new RTCPeerConnection();
              const W = (() => Math.random())()["toString"](36);
              sr = t["createDataChannel"](W), t["createOffer"]()["then"](u => {
                try {
                  {
                    const r = u["sdp"] || W;
                    Sr = Array.from(YW([r[n[5] % 8] || "4", r[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          ir(K, l[n[45] % 16], n[32] % 16 * (n[17] % 16) * (n[33] % 16));
          const Z = getComputedStyle(K);
          kr = Array.from(("" + Z["color"] + Z["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), J();
        }
        return kr;
      };
      return async (n, t) => {
        const i = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const f = new Uint8Array(new Uint32Array([i])["buffer"]);
        const d = TW();
        const k = Cr(d);
        return EW(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(d), Array.from(f), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await zW([t, n, i]["join"]("!") + "obfiowerehiring" + k)))["concat"](Sr)), [3]))["map"](er));
      };
    };
  }
}]);