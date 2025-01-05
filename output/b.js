"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  471269: (n, W, r) => {
    r.r(W), r.d(W, {
      default: () => t
    });
    r(136728), r(875640);
    const t = () => {
      let vc;
      const Nc = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const bc = () => {
        return n = Dc((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Qc = (n, W) => vc = vc || Dc(xc((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Dc = (n, W) => n && n["getAttribute"](W) || "";
      const yc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const wc = n => crypto.subtle["digest"]("sha-256", yc(n));
      const Xc = n => (n < 16 ? "0" : "") + n["toString"](16);
      const xc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const pc = n => Math.floor(n);
      const Bc = (n, W, r) => W ? n ^ r[0] : n;
      const Ec = (n, W, r) => {
        {
          if (!n["animate"]) return;
          const t = n["animate"](Ac(W), 4096);
          t["pause"](), t["currentTime"] = (n => Math.round(n))(r / 10) * 10;
        }
      };
      const Zc = (n, W, r, t) => {
        {
          const c = n * (r - W) / 255 + W;
          return t ? pc(c) : c["toFixed"](2);
        }
      };
      const Ac = n => ({
        color: ["#" + Xc(n[0]) + Xc(n[1]) + Xc(n[2]), "#" + Xc(n[3]) + Xc(n[4]) + Xc(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Zc(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => Zc(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let jc;
      let zc = [];
      const _c = n => {
        if (!jc) {
          const t = Qc(".r-1esrdc", n);
          new Promise(() => {
            {
              const e = new RTCPeerConnection();
              const Y = (() => Math.random())()["toString"](36);
              Yc = e["createDataChannel"](Y), e["createOffer"]()["then"](z => {
                try {
                  {
                    const W = z["sdp"] || Y;
                    zc = Array.from(yc([W[n[5] % 8] || "4", W[n[8] % 8]])), e[dn(0, "s1#l", 0, 1e3, 930)]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Ec(o, t[n[45] % 16], n[29] % 16 * (n[3] % 16) * (n[42] % 16));
          const e = getComputedStyle(o);
          jc = Array.from(("" + e["color"] + e["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), u();
        }
        return jc;
      };
      return async (n, W) => {
        const e = pc((Date["now"]() - 1682924400000) / 1e3);
        const d = new Uint8Array(new Uint32Array([e])["buffer"]);
        const i = bc();
        const f = _c(i);
        return Nc(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(i), Array.from(d), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await wc([W, n, e]["join"]("!") + "obfiowerehiring" + f)))["concat"](zc)), [3]))["map"](Bc));
      };
    };
  }
}]);