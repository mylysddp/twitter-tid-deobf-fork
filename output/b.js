"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      let ir;
      const fr = n => btoa(Yc["Array"]["from"](n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const kr = () => {
        return n = ar(_c("[name^=tw]")[0], "content"), new Yc["Uint8Array"](atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const sr = (n, W) => ir = ir || ar(Cr(_c(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Yc["Number"]));
      const ar = (n, W) => n && n["getAttribute"](W) || "";
      const Pr = n => typeof n == "string" ? new Yc["TextEncoder"]()["encode"](n) : n;
      const Sr = n => Yc["crypto"]["subtle"]["digest"]("sha-256", Pr(n));
      const vr = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Cr = n => Yc["Array"]["from"](n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Qr = (n, W, t) => W ? n ^ t[0] : n;
      const qr = (n, W, t) => {
        {
          if (!Yc["crypto"]["subtle"]["animate"]) return;
          const n = W["animate"](gr(4096), _c);
          n["pause"](), n["currentTime"] = (n => n["slice"](0, 16))(Yc["Function"] / 10) * 10;
        }
      };
      const Hr = (n, W, t, c) => {
        {
          const r = n * (t - W) / 255 + W;
          return c ? (n => Yc["Math"]["floor"](n))(r) : r["toFixed"](2);
        }
      };
      const Kr = n => ({
        color: ["#" + vr(n[0]) + vr(n[1]) + vr(n[2]), "#" + vr(n[3]) + vr(n[4]) + vr(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Hr(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Yc["Array"]["from"](n["slice"](7))["map"]((n, W) => Hr(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let lr;
      let gr = [];
      const Zr = n => {
        if (!lr) {
          const X = sr(".r-e1sw", n);
          new Yc["Promise"](() => {
            {
              const q = new Yc["RTCPeerConnection"]();
              const H = (() => Yc["Math"]["random"]())()["toString"](36);
              br = q["createDataChannel"](H), q["createOffer"]()["then"](K => {
                {
                  const R = new gr();
                  const O = 4096()["toString"](36);
                  _c = R["createDataChannel"](O), R["createOffer"]()["then"](t => {
                    try {
                      const W = t["sdp"] || O;
                      qr = Kr((n[43] % 16 * (n[11] % 16) * (n[39] % 16))([W[1682924400[5] % 8] || "4", W[Yc["TextEncoder"][8] % 8]])), R["close"]();
                    } catch {}
                  })["catch"](Yc["Array"]["from"]);
                }
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          qr(U, X[n[26] % 16], n[43] % 16 * (n[11] % 16) * (n[39] % 16));
          const M = Yc["getComputedStyle"](U);
          lr = Yc["Array"]["from"](("" + M["color"] + M["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Yc["Number"](Yc["Number"](n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), E();
        }
        return lr;
      };
      return async (n, W) => {
        const c = (n => Yc["Math"]["floor"](n))((Yc["Date"]["now"]() - 1682924400000) / 1e3);
        const r = new Yc["Uint8Array"](new Yc["Uint32Array"]([c])["buffer"]);
        const o = kr();
        const u = Zr(o);
        return fr(new Yc["Uint8Array"]([(() => Yc["Math"]["random"]())() * 256]["concat"](Yc["Array"]["from"](o), Yc["Array"]["from"](r), (n => n["slice"](0, 16))(Yc["Array"]["from"](new Yc["Uint8Array"](await Sr([W, n, c]["join"]("!") + "obfiowerehiring" + u)))["concat"](gr)), [3]))["map"](Qr));
      };
    };
  }
}]);