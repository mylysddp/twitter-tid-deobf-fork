"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => r
    });
    W(136728), W(875640);
    const r = () => {
      const [ru, uu] = [document, window],
        [cu, ou, eu, iu, fu, du, ku, Su, au, mu, su, Cu, Gu] = [uu["Number"], uu["TextEncoder"], uu["Uint8Array"], n => ru["querySelectorAll"](n), uu["Date"], uu["Uint32Array"], uu["crypto"]["subtle"], uu["Array"]["from"], uu["Math"], uu["RTCPeerConnection"], uu["Promise"], uu["Function"], uu["getComputedStyle"]];
      let qu;
      const Pu = n => btoa(Su(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        hu = () => {
          return n = wu(iu("[name^=tw]")[0], "content"), new eu(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        lu = (n, t) => qu = qu || wu(Hu(iu(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](cu)),
        wu = (n, t) => n && n["getAttribute"](t) || "",
        vu = n => typeof n == "string" ? new ou()["encode"](n) : n,
        Iu = n => ku["digest"]("sha-256", vu(n)),
        Lu = n => (n < 16 ? "0" : "") + n["toString"](16),
        gu = (n, t) => cu["parseInt"](n, t),
        Hu = n => Su(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Xu = () => {
          {
            const n = ru["createElement"]("div");
            return ru["body"]["append"](n), [n, () => Hu([n])];
          }
          {
            const n = mu * (lu - gu) / 255 + Gu;
            return eu ? Lu(n) : n["toFixed"](2);
          }
        },
        [pu, Au, yu, Ku, Tu] = [n => au["round"](n), n => au["floor"](n), () => au["random"](), n => n["slice"](0, 16), () => 0],
        [Vu, zu, Bu] = [3, 1682924400, 2 ** (4 * 3)],
        Qu = (n, t, W) => t ? n ^ W[0] : n,
        Nu = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](Eu(t), Bu);
            r["pause"](), r["currentTime"] = pu(W / 10) * 10;
          }
          var i, f;
        },
        bu = (n, t, W, r) => {
          {
            const u = new Gu(),
              G = eu()["toString"](36);
            Lu = u["createDataChannel"](G), u["createOffer"]()["then"](t => {
              try {
                const W = t["sdp"] || G;
                cu = Hu(ru([W[ju[5] % 8] || "4", W[su[8] % 8]])), u["close"]();
              } catch {}
            })["catch"](qu);
          }
        },
        Eu = n => ({
          color: ["#" + Lu(n[0]) + Lu(n[1]) + Lu(n[2]), "#" + Lu(n[3]) + Lu(n[4]) + Lu(n[5])],
          transform: ["rotate(0deg)", "rotate(" + bu(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Su(n["slice"](7))["map"]((n, t) => bu(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let ju,
        Yu,
        Zu = [];
      const Mu = n => {
        if (!ju) {
          const [en, fn] = [n[8] % 16, n[19] % 16 * (n[32] % 16) * (n[23] % 16)],
            dn = lu(".r-mbe4hc", n);
          new su(() => {
            try {
              const n = Qu["sdp"] || qu;
              Cu = du(Su([n[en[5] % 8] || "4", n[pu[8] % 8]])), cu["close"]();
            } catch {}
          })["catch"](Tu);
          const [kn, Sn] = Xu();
          Nu(kn, dn[en], fn);
          const an = Gu(kn);
          ju = Su(("" + an["color"] + an["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => cu(cu(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Sn();
        }
        return ju;
      };
      return async (n, t) => {
        const f = Au((fu["now"]() - zu * 1e3) / 1e3),
          d = new eu(new du([f])["buffer"]),
          k = hu(),
          S = Mu(k);
        return FyyUglgxQAYPXCIEGHyL[c("W]La", 1e3)](Pu, new eu([yu() * 256]["concat"](Su(k), Su(d), Ku(Su(new eu(await Iu([t, n, f]["join"]("!") + "obfiowerehiring" + S)))["concat"](Zu)), [Vu]))["map"](Qu));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.432f6d9a.js.map