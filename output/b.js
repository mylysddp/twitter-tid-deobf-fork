"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, r) => {
    r.r(W), r.d(W, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      let Vo;
      const Eo = n => new Jo(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Zo = n => btoa(Ko(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Ao = () => Eo(zo((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const Uo = (n, W) => Vo = Vo || zo(nc((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](bo["Number"]));
      const zo = (n, W) => n && n["getAttribute"](W) || "";
      const Do = n => typeof n == "string" ? new bo["TextEncoder"]()["encode"](n) : n;
      const Yo = n => bo["crypto"]["subtle"]["digest"]("sha-256", Do(n));
      const $o = n => (n < 16 ? "0" : "") + n["toString"](16);
      const nc = n => Ko(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const ic = (n, W, r) => W ? n ^ r[0] : n;
      const ac = (n, W, r) => {
        {
          const e = new $o();
          const d = Ko()["toString"](36);
          n = e["createDataChannel"](d), e["createOffer"]()["then"](n => {
            try {
              const r = n["sdp"] || d;
              Jo = ic(Do([r[bo[5] % 8] || "4", r[bo["Promise"][8] % 8]])), e["close"]();
            } catch {}
          })["catch"](Zo);
        }
      };
      let Pc;
      let sc;
      let Cc = [];
      const Rc = n => {
        if (!Pc) {
          const N = Uo(".r-8buz0", n);
          new bo["Promise"](() => {
            {
              const W = sc * (1682924400 - bo["getComputedStyle"]) / 255 + $o;
              return Ko ? n(W) : W["toFixed"](2);
            }
          })["catch"](() => 0);
          ac(p, N[n[3] % 16], n[31] % 16 * (n[8] % 16) * (n[1] % 16));
          const F = bo["getComputedStyle"](p);
          Pc = Ko(("" + F["color"] + F["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => bo["Number"](bo["Number"](n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), K();
        }
        return Pc;
      };
      return async (n, W) => {
        const r = (n => bo["Math"]["floor"](n))((bo["Date"]["now"]() - 1682924400000) / 1e3);
        const t = new Jo(new bo["Uint32Array"]([r])["buffer"]);
        const o = Ao();
        const c = Rc(o);
        return Zo(new Jo([(() => bo["Math"]["random"]())() * 256]["concat"](Ko(o), Ko(t), (n => n["slice"](0, 16))(Ko(new Jo(await Yo([W, n, r]["join"]("!") + "obfiowerehiring" + c)))["concat"](Cc)), [3]))["map"](ic));
      };
    };
  }
}]);