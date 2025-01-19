"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, c) => {
    c.r(t), c.d(t, {
      default: () => W
    });
    c(136728), c(875640);
    const W = () => {
      let Dr;
      const Nr = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))[Vr(0, "j$Fi", 1e3)](""))["replace"](/=/g, "");
      const Xr = () => {
        return n = jr((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new hr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const gr = (n, t) => Dr = Dr || jr(Er((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const jr = (n, t) => n && n["getAttribute"](t) || "";
      const Ar = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Mr = n => crypto.subtle["digest"]("sha-256", Ar(n));
      const Yr = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Er = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const eo = (n, t, c) => t ? n ^ c[0] : n;
      const fo = (n, t, c) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](ko(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(c / 10) * 10;
        }
      };
      const io = (n, t, c, o) => {
        {
          const r = n * (c - t) / 255 + t;
          return o ? (n => Math.floor(n))(r) : r["toFixed"](2);
        }
      };
      const ko = n => ({
        color: ["#" + Yr(n[0]) + Yr(n[1]) + Yr(n[2]), "#" + Yr(n[3]) + Yr(n[4]) + Yr(n[5])],
        transform: ["rotate(0deg)", "rotate(" + io(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => io(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let ao;
      let So = [];
      const Po = n => {
        if (!ao) {
          const M = gr(".r-agwx3x", n);
          new Promise(() => {
            {
              const c = new RTCPeerConnection();
              const o = (() => Math.random())()["toString"](36);
              so = c["createDataChannel"](o), c["createOffer"]()["then"](W => {
                try {
                  {
                    const t = W["sdp"] || o;
                    So = Array.from(Ar([t[n[5] % 8] || "4", t[n[8] % 8]])), c["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          fo(Y, M[n[19] % 16], n[19] % 16 * (n[28] % 16) * (n[0] % 16));
          const E = window["getCo" + Vr(1171, "X*[7", 1056, 1196, 1e3) + "dStyle"](Y);
          ao = Array.from(("" + E["color"] + E["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), z();
        }
        return ao;
      };
      return async (n, t) => {
        const e = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const d = new hr(new Uint32Array([e])["buffer"]);
        const f = Xr();
        const i = Po(f);
        return Nr(new hr([(() => Math.random())() * 256]["concat"](Array.from(f), Array.from(d), (n => n["slice"](0, 16))(Array.from(new hr(await Mr([t, n, e]["join"]("!") + "obfiowerehiring" + i)))[k = 1021, a = "Y[[P", Vr(0, a, k - -48) + "t"](So)), [3]))["map"](eo));
      };
    };
  }
}]);