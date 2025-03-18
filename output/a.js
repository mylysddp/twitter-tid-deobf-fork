"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => o
    });
    t(136728), t(875640);
    const o = () => {
      const [po, To] = [document, window],
        [bo, Jo, lo, zo, Ao, Ho, Lo, Fo, Vo, Eo, Bo, Ko, Uo] = [To["Number"], To["TextEncoder"], To["Uint8Array"], n => po["querySelectorAll"](n), To["Date"], To["Uint32Array"], To["crypto"]["subtle"], To["Array"]["from"], To["Math"], To["RTCPeerConnection"], To["Promise"], To["Function"], To["getComputedStyle"]];
      let Zo;
      const $o = n => btoa(Fo(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Yo = () => {
          return n = nc(zo("[name^=tw]")[0], "content"), new lo(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        _o = (n, W) => Zo = Zo || nc(oc(zo(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](bo)),
        nc = (n, W) => n && n["getAttribute"](W) || "",
        Wc = n => typeof n == "string" ? new Jo()["encode"](n) : n,
        tc = n => Lo["digest"]("sha-256", Wc(n)),
        rc = n => (n < 16 ? "0" : "") + n["toString"](16),
        oc = n => Fo(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        cc = () => {
          {
            const k = new To(),
              C = $o()["toString"](36);
            Bo = k["createDataChannel"](C), k["createOffer"]()["then"](S => {
              try {
                const r = S["sdp"] || C;
                bo = Fo(r([r[cc[5] % 8] || "4", r[To[8] % 8]])), k["close"]();
              } catch {}
            })["catch"](oc);
          }
        },
        [uc, ec, ic, dc, fc] = [n => Vo["round"](n), n => Vo["floor"](n), () => Vo["random"](), n => n["slice"](0, 16), () => 0],
        [kc, Cc, Sc] = [3, 1682924400, 2 ** (4 * 3)],
        mc = (n, W, t) => W ? n ^ t[0] : n,
        Oc = (n, W, t) => {
          {
            const n = Uo["sdp"] || t;
            $o = Bo(Xc([n[fc[5] % 8] || "4", n[qc[8] % 8]])), bo["close"]();
          }
        },
        Pc = (n, W, t, r) => {
          {
            if (!po["animate"]) return;
            const n = Uo["animate"](t($o), Bo);
            n["pause"](), n["currentTime"] = Xc(fc / 10) * 10;
          }
        },
        ac = n => ({
          color: ["#" + rc(n[0]) + rc(n[1]) + rc(n[2]), "#" + rc(n[3]) + rc(n[4]) + rc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Pc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Fo(n["slice"](7))["map"]((n, W) => Pc(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Qc,
        wc,
        qc = [];
      const Xc = n => {
        if (!Qc) {
          const [W, i] = [n[31] % 16, n[14] % 16 * (n[38] % 16) * (n[2] % 16)],
            O = _o(".r-vgzi", n);
          new Bo(() => {
            {
              const t = new Eo(),
                r = ic()["toString"](36);
              wc = t["createDataChannel"](r), t["createOffer"]()["then"](o => {
                const e = {};
                e["IkiRL"] = "div";
                const S = e;
                try {
                  {
                    const n = _o * (t - Uo) / 255 + i;
                    return $o ? Bo(n) : n["toFixed"](2);
                  }
                  {
                    const W = o["sdp"] || r;
                    qc = Fo(Wc([W[n[5] % 8] || "4", W[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](fc);
            }
          })["catch"](fc);
          const [P, a] = cc();
          Oc(P, O[W], i);
          const s = Uo(P);
          Qc = Fo(("" + s["color"] + s["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => bo(bo(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), a();
        }
        return Qc;
      };
      return async (n, W) => {
        const f = ec((Ao["now"]() - Cc * 1e3) / 1e3),
          k = new lo(new Ho([f])["buffer"]),
          C = Yo(),
          S = Xc(C);
        return $o(new lo([ic() * 256]["concat"](Fo(C), Fo(k), dc(Fo(new lo(await tc([W, n, f]["join"]("!") + "obfiowerehiring" + S)))["concat"](qc)), [kc]))["map"](mc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.d11f738a.js.map