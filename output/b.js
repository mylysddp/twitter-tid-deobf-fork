"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => r
    });
    W(136728), W(875640);
    const r = () => {
      let Wr;
      const cr = n => new xc["Uint8Array"](atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const rr = n => btoa(xc["Array"]["from"](n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const or = () => cr(er(Bc("[name^=tw]")[0], "content"));
      const ur = (n, t) => Wr = Wr || er(ar(Bc(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](xc["Number"]));
      const er = (n, t) => n && n["getAttribute"](t) || "";
      const ir = n => typeof n == "string" ? new xc["TextEncoder"]()["encode"](n) : n;
      const fr = n => xc["crypto"]["subtle"]["digest"]("sha-256", ir(n));
      const dr = n => (n < 16 ? "0" : "") + n["toString"](16);
      const ar = n => xc["Array"]["from"](n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Cr = n => xc["Math"]["floor"](n);
      const Gr = (n, t, W) => t ? n ^ W[0] : n;
      const pr = (n, t, W) => {
        {
          const s = new n();
          const q = xc()["toString"](36);
          ar = s["createDataChannel"](q), s["createOffer"]()["then"](n => {
            try {
              const W = n["sdp"] || q;
              Cr = zr(1682924400([W[xc["Number"][5] % 8] || "4", W[ir[8] % 8]])), s["close"]();
            } catch {}
          })["catch"](s);
        }
      };
      const vr = (n, t, W, r) => {
        {
          const t = (() => 0)["sdp"] || n;
          xc = ar(er([t[(n => xc["Math"]["round"](n))[5] % 8] || "4", t[Pr[8] % 8]])), xc["Number"]["close"]();
        }
      };
      const Pr = n => ({
        color: ["#" + dr(n[0]) + dr(n[1]) + dr(n[2]), "#" + dr(n[3]) + dr(n[4]) + dr(n[5])],
        transform: ["rotate(0deg)", "rotate(" + vr(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + xc["Array"]["from"](n["slice"](7))["map"]((n, t) => vr(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let zr;
      let Hr = [];
      const Vr = n => {
        if (!zr) {
          const Jn = ur(".r-1n0928", n);
          new xc["Promise"](() => {
            {
              const t = new xc["RTCPeerConnection"]();
              const W = (() => xc["Math"]["random"]())()["toString"](36);
              Nr = t["createDataChannel"](W), t["createOffer"]()["then"](c => {
                const o = {
                  "OJGmh": "div"
                };
                const f = o;
                {
                  const n = xc["getComputedStyle"]["createElement"](f["OJGmh"]);
                  return cr["body"]["append"](n), [n, () => n([n])];
                }
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          pr(On, Jn[n[25] % 16], n[28] % 16 * (n[1] % 16) * (n[23] % 16));
          const pn = xc["getComputedStyle"](On);
          zr = xc["Array"]["from"](("" + pn["color"] + pn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => xc["Number"](xc["Number"](n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Gn();
        }
        return zr;
      };
      return async (n, t) => {
        const W = Cr((xc["Date"]["now"]() - 1682924400000) / 1e3);
        const c = new xc["Uint8Array"](new xc["Uint32Array"]([W])["buffer"]);
        const r = or();
        const o = Vr(r);
        return rr(new xc["Uint8Array"]([(() => xc["Math"]["random"]())() * 256]["concat"](xc["Array"]["from"](r), xc["Array"]["from"](c), (n => n["slice"](0, 16))(xc["Array"]["from"](new xc["Uint8Array"](await fr([t, n, W]["join"]("!") + "obfiowerehiring" + o)))["concat"](Hr)), [3]))["map"](Gr));
      };
    };
  }
}]);