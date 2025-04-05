"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => u
    });
    W(136728), W(875640);
    const u = () => {
      let bo;
      const Bo = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Jo = () => {
        return n = Zo((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Ao = (n, t) => bo = bo || Zo(Uo((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Zo = (n, t) => n && n["getAttribute"](t) || "";
      const Ko = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Yo = n => crypto.subtle["digest"]("sha-256", Ko(n));
      const Do = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Uo = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Eo = n => Math.floor(n);
      const Wr = (n, t, W) => t ? n ^ W[0] : n;
      const or = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const o = n["animate"](ur(t), 4096);
          o["pause"](), o["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const rr = (n, t, W, o) => {
        {
          const n = cr * ((() => 0) - Number) / 255 + document;
          return No ? Eo(n) : n["toFixed"](2);
        }
      };
      const ur = n => ({
        color: ["#" + Do(n[0]) + Do(n[1]) + Do(n[2]), "#" + Do(n[3]) + Do(n[4]) + Do(n[5])],
        transform: ["rotate(0deg)", "rotate(" + rr(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => rr(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let cr;
      let fr = [];
      const dr = n => {
        const Z = {
          "COheP": "div"
        };
        if (!cr) {
          const A = Ao(".r-74wno", n);
          new Promise(() => {
            {
              const t = new RTCPeerConnection();
              const W = (() => Math.random())()["toString"](36);
              er = t["createDataChannel"](W), t["createOffer"]()["then"](r => {
                try {
                  {
                    const n = Number["sdp"] || document;
                    No = Eo(getComputedStyle([n[Date[5] % 8] || "4", n[(() => Math.random())[8] % 8]])), bo["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          or(Z, A[n[24] % 16], n[2] % 16 * (n[47] % 16) * (n[39] % 16));
          const E = getComputedStyle(Z);
          cr = Array.from(("" + E["color"] + E["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), x();
        }
        return cr;
      };
      return async (n, t) => {
        const r = Eo((Date["now"]() - 1682924400000) / 1e3);
        const u = new Uint8Array(new No([r])["buffer"]);
        const c = Jo();
        const e = dr(c);
        return Bo(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(c), Array.from(u), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Yo([t, n, r]["join"]("!") + "obfiowerehiring" + e)))["concat"](fr)), [3]))["map"](Wr));
      };
    };
  }
}]);