"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  471269: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => o
    });
    t(136728), t(875640);
    const o = () => {
      let fo;
      const io = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const ko = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Co = () => io(mo((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const ao = (n, W) => fo = fo || mo(So((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const mo = (n, W) => n && n["getAttribute"](W) || "";
      const Oo = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Ro = n => crypto.subtle["digest"]("sha-256", Oo(n));
      const No = n => (n < 16 ? "0" : "") + n["toString"](16);
      const So = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const po = () => Math.random();
      const To = (n, W, t) => W ? n ^ t[0] : n;
      const Io = (n, W, t) => {
        {
          if (!n["animate"]) return;
          const c = n["animate"](Go(W), 4096);
          c["pause"](), c["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const lo = (n, W, t, r) => {
        {
          const c = n * (t - W) / 255 + W;
          return r ? (n => Math.floor(n))(c) : c["toFixed"](2);
        }
      };
      const Go = n => ({
        color: ["#" + No(n[0]) + No(n[1]) + No(n[2]), "#" + No(n[3]) + No(n[4]) + No(n[5])],
        transform: ["rotate(0deg)", "rotate(" + lo(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => lo(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let xo;
      let Vo = [];
      const Fo = n => {
        if (!xo) {
          const O = ao(".r-5hgb9c", n);
          new Promise(() => {
            {
              const c = new RTCPeerConnection();
              const r = po()["toString"](36);
              Zo = c["createDataChannel"](r), c["createOffer"]()["then"](o => {
                try {
                  {
                    const W = o["sdp"] || r;
                    Vo = Array.from(Oo([W[n[5] % 8] || "4", W[n[8] % 8]])), c["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Io(R, O[n[21] % 16], n[25] % 16 * (n[26] % 16) * (n[43] % 16));
          const S = getComputedStyle(R);
          xo = Array.from(("" + S["color"] + S["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), N();
        }
        return xo;
      };
      return async (n, W) => {
        const e = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const d = new Uint8Array(new Uint32Array([e])["buffer"]);
        const f = Co();
        const i = Fo(f);
        return ko(new Uint8Array([po() * 256]["concat"](Array.from(f), Array.from(d), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Ro([W, n, e]["join"]("!") + "obfiowerehiring" + i)))["concat"](Vo)), [3]))["map"](To));
      };
    };
  }
}]);