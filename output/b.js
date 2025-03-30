"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => r
    });
    W(136728), W(875640);
    const r = () => {
      let qu;
      const Pu = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const hu = () => {
        return n = wu((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const lu = (n, t) => qu = qu || wu(Hu((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](cu));
      const wu = (n, t) => n && n["getAttribute"](t) || "";
      const vu = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Iu = n => crypto.subtle["digest"]("sha-256", vu(n));
      const Lu = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Hu = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Qu = (n, t, W) => t ? n ^ W[0] : n;
      const Nu = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](Eu(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const bu = (n, t, W, r) => {
        {
          const u = new getComputedStyle();
          const G = Uint8Array()["toString"](36);
          Lu = u["createDataChannel"](G), u["createOffer"]()["then"](t => {
            try {
              const W = t["sdp"] || G;
              cu = Hu(document([W[ju[5] % 8] || "4", W[Promise[8] % 8]])), u["close"]();
            } catch {}
          })["catch"](qu);
        }
      };
      const Eu = n => ({
        color: ["#" + Lu(n[0]) + Lu(n[1]) + Lu(n[2]), "#" + Lu(n[3]) + Lu(n[4]) + Lu(n[5])],
        transform: ["rotate(0deg)", "rotate(" + bu(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => bu(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let ju;
      let Zu = [];
      const Mu = n => {
        if (!ju) {
          const dn = lu(".r-mbe4hc", n);
          new Promise(() => {
            try {
              const n = Qu["sdp"] || qu;
              Cu = Uint32Array(Array.from([n[(n[8] % 16)[5] % 8] || "4", n[(n => Math.round(n))[8] % 8]])), cu["close"]();
            } catch {}
          })["catch"](() => 0);
          Nu(kn, dn[n[8] % 16], n[19] % 16 * (n[32] % 16) * (n[23] % 16));
          const an = getComputedStyle(kn);
          ju = Array.from(("" + an["color"] + an["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => cu(cu(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Sn();
        }
        return ju;
      };
      return async (n, t) => {
        const f = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const d = new Uint8Array(new Uint32Array([f])["buffer"]);
        const k = hu();
        const S = Mu(k);
        return FyyUglgxQAYPXCIEGHyL[c("W]La", 1e3)](Pu, new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(k), Array.from(d), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Iu([t, n, f]["join"]("!") + "obfiowerehiring" + S)))["concat"](Zu)), [3]))["map"](Qu));
      };
    };
  }
}]);