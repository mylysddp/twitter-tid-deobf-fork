"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  471269: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => u
    });
    r(136728), r(875640);
    const u = () => {
      let LW;
      const jW = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const UW = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const AW = () => jW(YW((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const EW = (n, t) => LW = LW || YW(rc((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const YW = (n, t) => n && n["getAttribute"](t) || "";
      const _W = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const $W = n => crypto.subtle["digest"]("sha-256", _W(n));
      const nc = n => (n < 16 ? "0" : "") + n["toString"](16);
      const rc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const kc = (n, t, r) => t ? n ^ r[0] : n;
      const mc = (n, t, r) => {
        {
          if (!n["animate"]) return;
          const W = n["animate"](Sc(t), 4096);
          W["pause"](), W["currentTime"] = (n => Math.round(n))(r / 10) * 10;
        }
      };
      const hc = (n, t, r, W) => {
        {
          const c = n * (r - t) / 255 + t;
          return W ? (n => Math.floor(n))(c) : c["toFixed"](2);
        }
      };
      const Sc = n => ({
        color: ["#" + nc(n[0]) + nc(n[1]) + nc(n[2]), "#" + nc(n[3]) + nc(n[4]) + nc(n[5])],
        transform: ["rotate(0deg)", "rotate(" + hc(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => hc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let qc;
      let vc = [];
      const Rc = n => {
        if (!qc) {
          const sn = EW(".r-4t1nc0", n);
          new Promise(() => {
            {
              const c = new RTCPeerConnection();
              const u = (() => Math.random())()["toString"](36);
              sc = c["createDataChannel"](u), c["createOffer"]()["then"](o => {
                try {
                  {
                    const t = o["sdp"] || u;
                    vc = Array.from(_W([t[n[5] % 8] || "4", t[n[8] % 8]])), c["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          mc(vn, sn[n[30] % 16], n[41] % 16 * (n[18] % 16) * (n[6] % 16));
          const Qn = getComputedStyle(vn);
          qc = Array.from(("" + Qn["color"] + Qn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Rn();
        }
        return qc;
      };
      return async (n, t) => {
        const o = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const e = new Uint8Array(new Uint32Array([o])["buffer"]);
        const d = AW();
        const i = Rc(d);
        return UW(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(d), Array.from(e), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await $W([t, n, o]["join"]("!") + "obfiowerehiring" + i)))["concat"](vc)), [3]))["map"](kc));
      };
    };
  }
}]);