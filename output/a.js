"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => r
    });
    t(136728), t(875640);
    const r = () => {
      const [zt, Bt] = [document, window],
        [Kt, Jt, Tt, Ft, Ht, gt, At, Yt, xt, Lt, Xt, Mt, Et] = [Bt["Number"], Bt["TextEncoder"], Bt["Uint8Array"], n => zt["querySelectorAll"](n), Bt["Date"], Bt["Uint32Array"], Bt["crypto"]["subtle"], Bt["Array"]["from"], Bt["Math"], Bt["RTCPeerConnection"], Bt["Promise"], Bt["Function"], Bt["getComputedStyle"]];
      let jt;
      const Dt = n => new Tt(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Ut = n => btoa(Yt(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        $t = () => Dt(no(Ft("[name^=tw]")[0], "content")),
        _t = (n, W) => jt = jt || no(ro(Ft(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Kt)),
        no = (n, W) => n && n["getAttribute"](W) || "",
        Wo = n => typeof n == "string" ? new Jt()["encode"](n) : n,
        to = n => At["digest"]("sha-256", Wo(n)),
        oo = n => (n < 16 ? "0" : "") + n["toString"](16),
        ro = n => Yt(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        uo = () => {
          {
            const W = zt["createElement"]("div");
            return zt["body"]["append"](W), [W, () => ro([W])];
          }
          {
            const o = Xt * (zt - ko) / 255 + zt;
            return Tt ? Dt(o) : o["toFixed"](2);
          }
        },
        [co, eo, fo, io, ko] = [n => xt["round"](n), n => xt["floor"](n), () => xt["random"](), n => n["slice"](0, 16), () => 0],
        [mo, so, ao] = [3, 1682924400, 2 ** (4 * 3)],
        So = (n, W, t) => W ? n ^ t[0] : n,
        Co = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const o = n["animate"](Po(W), ao);
            o["pause"](), o["currentTime"] = co(t / 10) * 10;
          }
        },
        Oo = (n, W, t, o) => {
          const e = {};
          e["BCsie"] = "div";
          const i = e;
          {
            const r = n * (t - W) / 255 + W;
            return o ? eo(r) : r["toFixed"](2);
          }
          {
            const n = to["createElement"](i["BCsie"]);
            return _t["body"]["append"](n), [n, () => n([n])];
          }
          var k, m;
        },
        Po = n => ({
          color: ["#" + oo(n[0]) + oo(n[1]) + oo(n[2]), "#" + oo(n[3]) + oo(n[4]) + oo(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Oo(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Yt(n["slice"](7))["map"]((n, W) => Oo(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Go,
        vo,
        Qo = [];
      const ho = n => {
        if (!Go) {
          const [W, t] = [n[8] % 16, n[32] % 16 * (n[11] % 16) * (n[13] % 16)],
            j = _t(".r-1ou9x8", n);
          new Xt(() => {
            {
              const n = ko["sdp"] || j;
              Tt = Dt(fo([n[eo[5] % 8] || "4", n[D[8] % 8]])), Co["close"]();
            }
          })["catch"](ko);
          const [D, U] = uo();
          Co(D, j[W], t);
          const rn = Et(D);
          Go = Yt(("" + rn["color"] + rn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Kt(Kt(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), U();
        }
        return Go;
      };
      return async (n, W) => {
        const o = eo((Ht["now"]() - so * 1e3) / 1e3),
          r = new Tt(new gt([o])["buffer"]),
          u = $t(),
          c = ho(u);
        return Ut(new Tt([fo() * 256]["concat"](Yt(u), Yt(r), io(Yt(new Tt(await to([W, n, o]["join"]("!") + "obfiowerehiring" + c)))["concat"](Qo)), [mo]))["map"](So));
        var k, m;
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.8c84851a.js.map