"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => u
    });
    W(136728), W(875640);
    const u = () => {
      const [Mo, Xo] = [document, window],
        [Fo, To, Lo, Ho, Eo, Jo, Ao, Do, zo, Yo, jo, $o, _o] = [Xo["Number"], Xo["TextEncoder"], Xo["Uint8Array"], n => Mo["querySelectorAll"](n), Xo["Date"], Xo["Uint32Array"], Xo["crypto"]["subtle"], Xo["Array"]["from"], Xo["Math"], Xo["RTCPeerConnection"], Xo["Promise"], Xo["Function"], Xo["getComputedStyle"]];
      let tu;
      const Wu = n => new Lo(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        ru = n => btoa(Do(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        ou = () => Wu(cu(Ho("[name^=tw]")[0], "content")),
        uu = (n, t) => tu = tu || cu(Su(Ho(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Fo)),
        cu = (n, t) => n && n["getAttribute"](t) || "",
        eu = n => typeof n == "string" ? new To()["encode"](n) : n,
        iu = n => Ao["digest"]("sha-256", eu(n)),
        fu = n => (n < 16 ? "0" : "") + n["toString"](16),
        du = (n, t) => Fo["parseInt"](n, t),
        Su = n => Do(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        mu = () => {
          {
            const n = Mo["createElement"]("div");
            return Mo["body"]["append"](n), [n, () => Su([n])];
          }
          {
            const r = Fo["sdp"] || Ku;
            du = Xo(Qu([r[lu[5] % 8] || "4", r[r[8] % 8]])), Ru["close"]();
          }
        },
        [su, ku, Cu, au, Qu] = [n => zo["round"](n), n => zo["floor"](n), () => zo["random"](), n => n["slice"](0, 16), () => 0],
        [Ru, Gu, Ku] = [3, 1682924400, 2 ** (4 * 3)],
        Nu = (n, t, W) => t ? n ^ W[0] : n,
        Ou = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](wu(t), Ku);
            r["pause"](), r["currentTime"] = su(W / 10) * 10;
          }
        },
        hu = (n, t, W, r) => {
          const k = {};
          k["CYoMP"] = "div";
          const a = k;
          {
            const o = n * (W - t) / 255 + t;
            return r ? ku(o) : o["toFixed"](2);
          }
          {
            const n = Jo["createElement"](a["CYoMP"]);
            return cu["body"]["append"](n), [n, () => n([n])];
          }
        },
        wu = n => ({
          color: ["#" + fu(n[0]) + fu(n[1]) + fu(n[2]), "#" + fu(n[3]) + fu(n[4]) + fu(n[5])],
          transform: ["rotate(0deg)", "rotate(" + hu(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Do(n["slice"](7))["map"]((n, t) => hu(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let lu,
        Pu,
        qu = [];
      const Zu = n => {
        if (!lu) {
          const [F, T] = [n[30] % 16, n[37] % 16 * (n[14] % 16) * (n[13] % 16)],
            L = uu(".r-afoqu0", n);
          new jo(() => {
            {
              const U = new Yo(),
                v = Cu()["toString"](36);
              Pu = U["createDataChannel"](v), U["createOffer"]()["then"](B => {
                try {
                  {
                    const t = B["sdp"] || v;
                    qu = Do(eu([t[n[5] % 8] || "4", t[n[8] % 8]])), U["close"]();
                  }
                } catch {}
              })["catch"](Qu);
            }
          })["catch"](Qu);
          const [H, j] = mu();
          Ou(H, L[F], T);
          const $ = _o(H);
          lu = Do(("" + $["color"] + $["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Fo(Fo(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), j();
        }
        return lu;
      };
      return async (n, t) => {
        const c = ku((Eo["now"]() - Gu * 1e3) / 1e3),
          e = new Lo(new Jo([c])["buffer"]),
          i = ou(),
          f = Zu(i);
        return ru(new Lo([Cu() * 256]["concat"](Do(i), Do(e), au(Do(new Lo(await iu([t, n, c]["join"]("!") + "obfiowerehiring" + f)))["concat"](qu)), [Ru]))["map"](Nu));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.72ad65aa.js.map