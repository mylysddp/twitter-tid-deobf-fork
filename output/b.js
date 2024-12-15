"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  471269: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => r
    });
    t(136728), t(875640);
    const r = () => {
      let mc;
      const vc = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Oc = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, ""),
        Rc = () => vc(Gc((n => document.querySelectorAll(n))("[name^=tw]")[0], "content")),
        Jc = (n, W) => mc = mc || Gc(wc((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number)),
        Gc = (n, W) => n && n["getAttribute"](W) || "",
        lc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n,
        Nc = n => crypto.subtle["digest"]("sha-256", lc(n)),
        Qc = n => (n < 16 ? "0" : "") + n["toString"](16),
        wc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        yc = () => {
          const r = {
            "FQDDt": "div"
          };
          const e = r;
          {
            const n = document.createElement("div");
            return document.body["append"](n), [n, () => wc([n])];
          }
          {
            const n = pc["createElement"](e["FQDDt"]);
            return (n => document.querySelectorAll(n))["body"]["append"](n), [n, () => n([n])];
          }
        },
        [bc, qc, xc, Bc, Hc] = [n => Math.round(n), n => Math.floor(n), () => Math.random(), n => n["slice"](0, 16), () => 0],
        [Ic, Kc, Mc] = [3, 1682924400, 4096],
        zc = (n, W, t) => W ? n ^ t[0] : n,
        jc = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const r = n[d = "$O]1", S = 956, ac(0, d, S - 0) + "te"](Zc(W), 4096);
            r["pause"](), r["currentTime"] = (n => Math.round(n))(t / 10) * 10;
          }
          var d, S;
        },
        pc = (n, W, t, r) => {
          {
            const o = n * (t - W) / 255 + W;
            return r ? (n => Math.floor(n))(o) : o["toFixed"](2);
          }
          {
            if (!Array.from["animate"]) return;
            const n = (n => Math.round(n))["animate"](n(Date), yc);
            n["pause"](), n["currentTime"] = RTCPeerConnection(Nc / 10) * 10;
          }
          var S, a;
        },
        Zc = n => ({
          color: ["#" + Qc(n[0]) + Qc(n[1]) + Qc(n[2]), "#" + Qc(n[3]) + Qc(n[4]) + Qc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + pc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => pc(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Yc,
        Dc,
        Fc = [];
      const gc = n => {
        if (!Yc) {
          const [W, t] = [n[11] % 16, n[25] % 16 * (n[25] % 16) * (n[22] % 16)],
            r = Jc(".r-5so60w", n);
          new Promise(() => {
            {
              const un = new RTCPeerConnection(),
                en = (() => Math.random())()["toString"](36);
              Dc = un["createDataChannel"](en), un["createOffer"]()["then"](fn => {
                try {
                  {
                    const W = fn["sdp"] || en;
                    Fc = Array.from(lc([W[n[5] % 8] || "4", W[n[8] % 8]])), un["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          jc(c, r[n[11] % 16], n[25] % 16 * (n[25] % 16) * (n[22] % 16));
          const Sn = getComputedStyle(c);
          Yc = Array.from(("" + Sn["color"] + Sn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), u();
        }
        return Yc;
      };
      return async (n, W) => {
        const c = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3),
          u = new Uint8Array(new Uint32Array([c])["buffer"]),
          e = Rc(),
          i = gc(e);
        return Oc(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(e), Array.from(u), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Nc([W, n, c]["join"]("!") + "obfiowerehiring" + i)))["concat"](Fc)), [3]))["map"](zc));
      };
    };
  }
}]);