"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => W
    });
    r(136728), r(875640);
    const W = () => {
      let UW;
      const jW = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const yW = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const JW = () => jW(xW((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const BW = (n, t) => UW = UW || xW(zW((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const xW = (n, t) => n && n["getAttribute"](t) || "";
      const VW = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const DW = n => crypto.subtle["digest"]("sha-256", VW(n));
      const gW = n => (n < 16 ? "0" : "") + n["toString"](16);
      const zW = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const no = (n, t, r) => t ? n ^ r[0] : n;
      const to = (n, t, r) => {
        {
          if (!n["animate"]) return;
          const c = n["animate"](co(t), 4096);
          c["pause"](), c["currentTime"] = (n => Math.round(n))(r / 10) * 10;
        }
      };
      const ro = (n, t, r, c) => {
        {
          const W = n * (r - t) / 255 + t;
          return c ? (n => Math.floor(n))(W) : W["toFixed"](2);
        }
      };
      const co = n => ({
        color: ["#" + gW(n[0]) + gW(n[1]) + gW(n[2]), "#" + gW(n[3]) + gW(n[4]) + gW(n[5])],
        transform: ["rotate(0deg)", "rotate(" + ro(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => ro(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Wo;
      let uo = [];
      const eo = n => {
        if (!Wo) {
          const qn = dhUwbrOwDhuapqippVeQ[Rn(1092, 1086, "#8tf", 1e3, 1031)](BW, ".r-132j00", n);
          new Promise(() => {
            {
              const r = new RTCPeerConnection();
              const c = (() => Math.random())()["toString"](36);
              oo = r["createDataChannel"](c), r["createOffer"]()["then"](_ => {
                {
                  if (!(() => 0)["animate"]) return;
                  const t = n["animate"](Function(Wo), jW);
                  t["pause"](), t["currentTime"] = uo(ro / 10) * 10;
                }
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          to(Pn, qn[n[1] % 16], n[13] % 16 * (n[4] % 16) * (n[26] % 16));
          const hn = getComputedStyle(Pn);
          Wo = Array.from(("" + hn["color"] + hn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), vn();
        }
        return Wo;
      };
      return async (n, t) => {
        const f = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const d = new Uint8Array(new Uint32Array([f])["buffer"]);
        const k = JW();
        const s = eo(k);
        return yW(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(k), Array.from(d), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await DW([t, n, f]["join"]("!") + "obfiowerehiring" + s)))["concat"](uo)), [3]))["map"](no));
      };
    };
  }
}]);