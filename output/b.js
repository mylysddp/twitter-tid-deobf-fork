"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => u
    });
    W(136728), W(875640);
    const u = () => {
      let tu;
      const Wu = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const ru = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const ou = () => Wu(cu((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const uu = (n, t) => tu = tu || cu(Su((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const cu = (n, t) => n && n["getAttribute"](t) || "";
      const eu = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const iu = n => crypto.subtle["digest"]("sha-256", eu(n));
      const fu = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Su = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Nu = (n, t, W) => t ? n ^ W[0] : n;
      const Ou = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](wu(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const hu = (n, t, W, r) => {
        const k = {
          "CYoMP": "div"
        };
        {
          const o = n * (W - t) / 255 + t;
          return r ? (n => Math.floor(n))(o) : o["toFixed"](2);
        }
      };
      const wu = n => ({
        color: ["#" + fu(n[0]) + fu(n[1]) + fu(n[2]), "#" + fu(n[3]) + fu(n[4]) + fu(n[5])],
        transform: ["rotate(0deg)", "rotate(" + hu(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => hu(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let lu;
      let qu = [];
      const Zu = n => {
        if (!lu) {
          const L = uu(".r-afoqu0", n);
          new Promise(() => {
            {
              const U = new RTCPeerConnection();
              const v = (() => Math.random())()["toString"](36);
              Pu = U["createDataChannel"](v), U["createOffer"]()["then"](B => {
                try {
                  {
                    const t = B["sdp"] || v;
                    qu = Array.from(eu([t[n[5] % 8] || "4", t[n[8] % 8]])), U["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Ou(H, L[n[30] % 16], n[37] % 16 * (n[14] % 16) * (n[13] % 16));
          const $ = getComputedStyle(H);
          lu = Array.from(("" + $["color"] + $["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), j();
        }
        return lu;
      };
      return async (n, t) => {
        const c = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const e = new Uint8Array(new Uint32Array([c])["buffer"]);
        const i = ou();
        const f = Zu(i);
        return ru(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(i), Array.from(e), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await iu([t, n, c]["join"]("!") + "obfiowerehiring" + f)))["concat"](qu)), [3]))["map"](Nu));
      };
    };
  }
}]);