"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  471269: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => o
    });
    t(136728), t(875640);
    const o = () => {
      let Tu;
      const Ju = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, ""),
        yu = () => {
          return n = Xu((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Nu = (n, W) => Tu = Tu || Xu(Uu((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number)),
        Xu = (n, W) => n && n["getAttribute"](W) || "",
        xu = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n,
        Fu = n => crypto.subtle["digest"]("sha-256", xu(n)),
        gu = n => (n < 16 ? "0" : "") + n["toString"](16),
        Uu = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        [Au, Yu, ju, Zu, Du] = [n => Math.round(n), n => Math.floor(n), () => Math.random(), n => n["slice"](0, 16), () => 0],
        [$u, _u, no] = [3, 1682924400, 4096],
        Wo = (n, W, t) => W ? n ^ t[0] : n,
        to = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](uo(W), 4096);
            r["pause"](), r["currentTime"] = (n => Math.round(n))(t / 10) * 10;
          }
        },
        ro = (n, W, t, r) => {
          {
            const o = n * (t - W) / 255 + W;
            return r ? (n => Math.floor(n))(o) : o["toFixed"](2);
          }
          {
            const n = (n => document.querySelectorAll(n))["createElement"]({
              "HNdZk": "div"
            }["HNdZk"]);
            return 1682924400["body"]["append"](n), [n, () => n([n])];
          }
        },
        uo = n => ({
          color: ["#" + gu(n[0]) + gu(n[1]) + gu(n[2]), "#" + gu(n[3]) + gu(n[4]) + gu(n[5])],
          transform: ["rotate(0deg)", "rotate(" + ro(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => ro(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let oo,
        co,
        eo = [];
      const Qo = n => {
        if (!oo) {
          const [Hn, Tn] = [n[9] % 16, n[45] % 16 * (n[30] % 16) * (n[47] % 16)],
            Kn = Nu(".r-9d1x00", n);
          new Promise(() => {
            {
              const W = new RTCPeerConnection(),
                t = (() => Math.random())()["toString"](36);
              co = W["createDataChannel"](t), W["createOffer"]()["then"](u => {
                try {
                  {
                    const r = u["sdp"] || t;
                    eo = Array.from(xu([r[n[5] % 8] || "4", r[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          to(Jn, Kn[n[9] % 16], n[45] % 16 * (n[30] % 16) * (n[47] % 16));
          const Nn = getComputedStyle(Jn);
          oo = Array.from(("" + Nn["color"] + Nn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), yn();
        }
        return oo;
      };
      return async (n, W) => {
        const o = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3),
          c = new Uint8Array(new Uint32Array([o])["buffer"]),
          e = yu(),
          f = Qo(e);
        return Ju(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(e), Array.from(c), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Fu([W, n, o]["join"]("!") + "obfiowerehiring" + f)))["concat"](eo)), [3]))["map"](Wo));
      };
    };
  }
}]);