"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  471269: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => o
    });
    t(136728), t(875640);
    const o = () => {
      const [Ru, Iu] = [document, window],
        [Gu, Su, Vu, vu, qu, Lu, wu, lu, pu, zu, bu, Mu, Hu] = [Iu["Number"], Iu["TextEncoder"], Iu["Uint8Array"], n => Ru["querySelectorAll"](n), Iu["Date"], Iu["Uint32Array"], Iu["crypto"]["subtle"], Iu["Array"]["from"], Iu["Math"], Iu["RTCPeerConnection"], Iu["Promise"], Iu["Function"], Iu["getComputedStyle"]];
      let Tu;
      const Ju = n => btoa(lu(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        yu = () => {
          return n = Xu(vu("[name^=tw]")[0], "content"), new Vu(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Nu = (n, W) => Tu = Tu || Xu(Uu(vu(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Gu)),
        Xu = (n, W) => n && n["getAttribute"](W) || "",
        xu = n => typeof n == "string" ? new Su()["encode"](n) : n,
        Fu = n => wu["digest"]("sha-256", xu(n)),
        gu = n => (n < 16 ? "0" : "") + n["toString"](16),
        Bu = (n, W) => Gu["parseInt"](n, W),
        Uu = n => lu(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Eu = () => {
          {
            const n = Ru["createElement"]("div");
            return Ru["body"]["append"](n), [n, () => Uu([n])];
          }
          {
            if (!xu["animate"]) return;
            const n = Qo["animate"](Zu(Lu), Ru);
            n["pause"](), n["currentTime"] = Bu(Nu / 10) * 10;
          }
        },
        [Au, Yu, ju, Zu, Du] = [n => pu["round"](n), n => pu["floor"](n), () => pu["random"](), n => n["slice"](0, 16), () => 0],
        [$u, _u, no] = [3, 1682924400, 2 ** (4 * 3)],
        Wo = (n, W, t) => W ? n ^ t[0] : n,
        to = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](uo(W), no);
            r["pause"](), r["currentTime"] = Au(t / 10) * 10;
          }
        },
        ro = (n, W, t, r) => {
          const o = {};
          o["HNdZk"] = "div";
          const f = o;
          {
            const o = n * (t - W) / 255 + W;
            return r ? Yu(o) : o["toFixed"](2);
          }
          {
            const n = vu["createElement"](f["HNdZk"]);
            return _u["body"]["append"](n), [n, () => n([n])];
          }
        },
        uo = n => ({
          color: ["#" + gu(n[0]) + gu(n[1]) + gu(n[2]), "#" + gu(n[3]) + gu(n[4]) + gu(n[5])],
          transform: ["rotate(0deg)", "rotate(" + ro(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + lu(n["slice"](7))["map"]((n, W) => ro(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let oo,
        co,
        eo = [];
      const Qo = n => {
        if (!oo) {
          const [Hn, Tn] = [n[9] % 16, n[45] % 16 * (n[30] % 16) * (n[47] % 16)],
            Kn = Nu(".r-9d1x00", n);
          new bu(() => {
            {
              const W = new zu(),
                t = ju()["toString"](36);
              co = W["createDataChannel"](t), W["createOffer"]()["then"](u => {
                try {
                  {
                    const r = u["sdp"] || t;
                    eo = lu(xu([r[n[5] % 8] || "4", r[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](Du);
            }
          })["catch"](Du);
          const [Jn, yn] = Eu();
          to(Jn, Kn[Hn], Tn);
          const Nn = Hu(Jn);
          oo = lu(("" + Nn["color"] + Nn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Gu(Gu(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), yn();
        }
        return oo;
      };
      return async (n, W) => {
        const o = Yu((qu["now"]() - _u * 1e3) / 1e3),
          c = new Vu(new Lu([o])["buffer"]),
          e = yu(),
          f = Qo(e);
        return Ju(new Vu([ju() * 256]["concat"](lu(e), lu(c), Zu(lu(new Vu(await Fu([W, n, o]["join"]("!") + "obfiowerehiring" + f)))["concat"](eo)), [$u]))["map"](Wo));
        var a, k;
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.74647aba.js.map