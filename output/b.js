"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  471269: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      let to;
      const ro = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, ""),
        oo = () => {
          return n = uo((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        co = (n, t) => to = to || uo(ko((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number)),
        uo = (n, t) => n && n["getAttribute"](t) || "",
        eo = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n,
        fo = n => crypto.subtle["digest"]("sha-256", eo(n)),
        io = n => (n < 16 ? "0" : "") + n["toString"](16),
        ko = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Co = () => {
          {
            const n = document.createElement("div");
            return document.body["append"](n), [n, () => ko([n])];
          }
          try {
            const n = Po["sdp"] || document;
            po = oo(3([n[getComputedStyle[5] % 8] || "4", n[Date[8] % 8]])), Number["close"]();
          } catch {}
          var e, d;
        },
        [ao, So, mo, so, lo] = [n => Math.round(n), n => Math.floor(n), () => Math.random(), n => n["slice"](0, 16), () => 0],
        [Oo, Ro, vo] = [3, 1682924400, 4096],
        Po = (n, t, W) => t ? n ^ W[0] : n,
        Qo = (n, t, W) => {
          const u = {
            "SWaTR": "div"
          };
          const e = u;
          {
            if (!n["animate"]) return;
            const u = n["animate"](po(t), vo);
            u["pause"](), u["currentTime"] = (n => Math.round(n))(W / 10) * 10;
          }
        },
        Go = (n, t, W, r) => {
          {
            const c = n * (W - t) / 255 + t;
            return r ? (n => Math.floor(n))(c) : c["toFixed"](2);
          }
          {
            const n = No["sdp"] || W;
            vo = Co(n([n[t[5] % 8] || "4", n[uo[8] % 8]])), ko["close"]();
          }
        },
        po = n => ({
          color: ["#" + io(n[0]) + io(n[1]) + io(n[2]), "#" + io(n[3]) + io(n[4]) + io(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Go(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Go(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let qo,
        ho,
        xo = [];
      const No = n => {
        if (!qo) {
          const [t, F] = [n[40] % 16, n[10] % 16 * (n[45] % 16) * (n[31] % 16)],
            E = co(".r-bzda0", n);
          new Promise(() => {
            {
              const r = new RTCPeerConnection(),
                I = (() => Math.random())()["toString"](36);
              ho = r["createDataChannel"](I), r[gn = 152, jn = 166, Hn = 189, Kn = "6XTu", an(jn - 222, gn - 333, jn - 449, Hn - 214, Kn) + "eOffer"]()["then"](g => {
                try {
                  {
                    const t = g["sdp"] || I;
                    xo = Array.from(eo([t[n[5] % 8] || "4", t[n[8] % 8]])), r["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
            var gn, jn, Hn, Kn;
          })["catch"](() => 0);
          Qo(L, E[n[40] % 16], n[10] % 16 * (n[45] % 16) * (n[31] % 16));
          const Y = getComputedStyle(L);
          qo = Array.from(("" + Y["color"] + Y["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), z();
        }
        return qo;
      };
      return async (n, t) => {
        const u = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3),
          e = new Uint8Array(new Uint32Array([u])["buffer"]),
          d = oo(),
          f = No(d);
        return ro(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(d), Array.from(e), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await fo([t, n, u]["join"]("!") + "obfiowerehiring" + f)))["concat"](xo)), [3]))["map"](Po));
      };
    };
  }
}]);