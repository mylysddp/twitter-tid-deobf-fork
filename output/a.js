"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      const [wu, Qu] = [document, window],
        [bu, lu, Nu, Ku, Mu, Vu, Bu, ju, Fu, Iu, Lu, vu, xu] = [Qu["Number"], Qu["TextEncoder"], Qu["Uint8Array"], n => wu["querySelectorAll"](n), Qu["Date"], Qu["Uint32Array"], Qu["crypto"]["subtle"], Qu["Array"]["from"], Qu["Math"], Qu["RTCPeerConnection"], Qu["Promise"], Qu["Function"], Qu["getComputedStyle"]];
      let yu;
      const Zu = n => btoa(ju(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        zu = () => {
          return n = Eu(Ku("[name^=tw]")[0], "content"), new Nu(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Yu = (n, t) => yu = yu || Eu(Du(Ku(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](bu)),
        Eu = (n, t) => n && n["getAttribute"](t) || "",
        Uu = n => typeof n == "string" ? new lu()["encode"](n) : n,
        Xu = n => Bu["digest"]("sha-256", Uu(n)),
        Tu = n => (n < 16 ? "0" : "") + n["toString"](16),
        Du = n => ju(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Au = () => {
          {
            const n = wu["createElement"]("div");
            return wu["body"]["append"](n), [n, () => Du([n])];
          }
          {
            const n = tW["sdp"] || nW;
            Qu = Bu(Lu([n[dW[5] % 8] || "4", n[oW[8] % 8]])), Qu["close"]();
          }
        },
        [$u, _u, nW, tW, rW] = [n => Fu["round"](n), n => Fu["floor"](n), () => Fu["random"](), n => n["slice"](0, 16), () => 0],
        [cW, oW, uW] = [3, 1682924400, 2 ** (4 * 3)],
        WW = (n, t, r) => t ? n ^ r[0] : n,
        eW = (n, t, r) => {
          {
            if (!n["animate"]) return;
            const c = n["animate"](iW(t), uW);
            c["pause"](), c["currentTime"] = $u(r / 10) * 10;
          }
        },
        dW = (n, t, r, c) => {
          const f = {};
          f["BVjNH"] = "div";
          const R = f;
          {
            const o = n * (r - t) / 255 + t;
            return c ? _u(o) : o["toFixed"](2);
          }
          {
            const n = c["createElement"](R["BVjNH"]);
            return wu["body"]["append"](n), [n, () => n([n])];
          }
        },
        iW = n => ({
          color: ["#" + Tu(n[0]) + Tu(n[1]) + Tu(n[2]), "#" + Tu(n[3]) + Tu(n[4]) + Tu(n[5])],
          transform: ["rotate(0deg)", "rotate(" + dW(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + ju(n["slice"](7))["map"]((n, t) => dW(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let mW,
        RW,
        sW = [];
      const HW = n => {
        if (!mW) {
          const [u, W] = [n[15] % 16, n[16] % 16 * (n[22] % 16) * (n[28] % 16)],
            e = Yu(".r-l9b0t0", n);
          new Lu(() => {
            {
              const t = new Iu(),
                r = nW()["toString"](36);
              RW = t["createDataChannel"](r), t["createOffer"]()["then"](c => {
                try {
                  {
                    const o = c["sdp"] || r;
                    sW = ju(Uu([o[n[5] % 8] || "4", o[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](rW);
            }
          })["catch"](rW);
          const [d, i] = Au();
          eW(d, e[u], W);
          const f = xu(d);
          mW = ju(("" + f["color"] + f["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => bu(bu(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), i();
        }
        return mW;
      };
      return async (n, t) => {
        const c = _u((Mu["now"]() - oW * 1e3) / 1e3),
          o = new Nu(new Vu([c])["buffer"]),
          u = zu(),
          W = HW(u);
        return Zu(new Nu([nW() * 256]["concat"](ju(u), ju(o), tW(ju(new Nu(await Xu([t, n, c]["join"]("!") + "obfiowerehiring" + W)))["concat"](sW)), [cW]))["map"](WW));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.5ffb0aaa.js.map