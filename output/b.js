"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => u
    });
    W(136728), W(875640);
    const u = () => {
      let xo;
      const lo = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Lo = () => {
        return n = Mo((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const po = (n, t) => xo = xo || Mo(Do((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Mo = (n, t) => n && n["getAttribute"](t) || "";
      const yo = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Vo = n => crypto.subtle["digest"]("sha-256", yo(n));
      const go = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Io = (n, t) => Number["parseInt"](n, t);
      const Do = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Yo = (n, t, W) => t ? n ^ W[0] : n;
      const jo = (n, t, W) => {
        {
          const n = sdp || zPFgfvuQzZrsKpepVGZI;
          xo = document((n => n["slice"](0, 16))([n[getComputedStyle[5] % 8] || "4", n[Do[8] % 8]])), Fo["close"]();
        }
      };
      const Bo = (n, t, W, o) => {
        {
          const C = new zPFgfvuQzZrsKpepVGZI();
          const O = xo()["toString"](36);
          o = C["createDataChannel"](O), C["createOffer"]()["then"](W => {
            try {
              const o = W["sdp"] || O;
              _o = 4096(Bo([o[3[5] % 8] || "4", o[nu[8] % 8]])), C["close"]();
            } catch {}
          })["catch"](W);
        }
      };
      const Fo = n => ({
        color: ["#" + go(n[0]) + go(n[1]) + go(n[2]), "#" + go(n[3]) + go(n[4]) + go(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Bo(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Bo(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let _o;
      let nu = [];
      const ru = n => {
        if (!_o) {
          const kn = po(".r-xozk0", n);
          new Promise(() => {
            {
              const o = new RTCPeerConnection();
              const u = (() => Math.random())()["toString"](36);
              $o = o["createDataChannel"](u), o["createOffer"]()["then"](c => {
                {
                  if (!Io["animate"]) return;
                  const n = animate(sn(xo), n);
                  n["pause"](), n["currentTime"] = (n => n["slice"](0, 16))(getComputedStyle / 10) * 10;
                }
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          jo(sn, kn[n[44] % 16], n[6] % 16 * (n[47] % 16) * (n[41] % 16));
          const vn = getComputedStyle(sn);
          _o = Array.from(("" + vn["color"] + vn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Pn();
        }
        return _o;
      };
      return async (n, t) => {
        const f = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const i = new Uint8Array(new Uint32Array([f])["buffer"]);
        const a = Lo();
        const C = ru(a);
        return lo(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(a), Array.from(i), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Vo([t, n, f]["join"]("!") + "obfiowerehiring" + C)))["concat"](nu)), [3]))["map"](Yo));
      };
    };
  }
}]);