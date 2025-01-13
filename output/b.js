"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      let yu;
      const Zu = n => btoa(Qu["Array"]["from"](n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const zu = () => {
        return n = Eu((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Qu["Uint8Array"](atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Yu = (n, t) => yu = yu || Eu(Du((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Qu["Number"]));
      const Eu = (n, t) => n && n["getAttribute"](t) || "";
      const Uu = n => typeof n == "string" ? new Qu["TextEncoder"]()["encode"](n) : n;
      const Xu = n => Qu["crypto"]["subtle"]["digest"]("sha-256", Uu(n));
      const Tu = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Du = n => Qu["Array"]["from"](n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const WW = (n, t, r) => t ? n ^ r[0] : n;
      const eW = (n, t, r) => {
        {
          if (!n["animate"]) return;
          const c = n["animate"](iW(t), 4096);
          c["pause"](), c["currentTime"] = (n => Qu["Math"]["round"](n))(r / 10) * 10;
        }
      };
      const dW = (n, t, r, c) => {
        const f = {
          "BVjNH": "div"
        };
        {
          const o = n * (r - t) / 255 + t;
          return c ? (n => Qu["Math"]["floor"](n))(o) : o["toFixed"](2);
        }
      };
      const iW = n => ({
        color: ["#" + Tu(n[0]) + Tu(n[1]) + Tu(n[2]), "#" + Tu(n[3]) + Tu(n[4]) + Tu(n[5])],
        transform: ["rotate(0deg)", "rotate(" + dW(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Qu["Array"]["from"](n["slice"](7))["map"]((n, t) => dW(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let mW;
      let sW = [];
      const HW = n => {
        if (!mW) {
          const e = Yu(".r-l9b0t0", n);
          new Qu["Promise"](() => {
            {
              const t = new Qu["RTCPeerConnection"]();
              const r = (() => Qu["Math"]["random"]())()["toString"](36);
              RW = t["createDataChannel"](r), t["createOffer"]()["then"](c => {
                try {
                  {
                    const o = c["sdp"] || r;
                    sW = Qu["Array"]["from"](Uu([o[n[5] % 8] || "4", o[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          eW(d, e[n[15] % 16], n[16] % 16 * (n[22] % 16) * (n[28] % 16));
          const f = Qu["getComputedStyle"](d);
          mW = Qu["Array"]["from"](("" + f["color"] + f["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Qu["Number"](Qu["Number"](n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), i();
        }
        return mW;
      };
      return async (n, t) => {
        const c = (n => Qu["Math"]["floor"](n))((Qu["Date"]["now"]() - 1682924400000) / 1e3);
        const o = new Qu["Uint8Array"](new Qu["Uint32Array"]([c])["buffer"]);
        const u = zu();
        const W = HW(u);
        return Zu(new Qu["Uint8Array"]([(() => Qu["Math"]["random"]())() * 256]["concat"](Qu["Array"]["from"](u), Qu["Array"]["from"](o), (n => n["slice"](0, 16))(Qu["Array"]["from"](new Qu["Uint8Array"](await Xu([t, n, c]["join"]("!") + "obfiowerehiring" + W)))["concat"](sW)), [3]))["map"](WW));
      };
    };
  }
}]);