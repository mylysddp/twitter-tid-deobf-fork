"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, c) => {
    c.r(t), c.d(t, {
      default: () => W
    });
    c(136728), c(875640);
    const W = () => {
      const [Tr, Jr] = [document, window],
        [Lr, Zr, hr, xr, Ur, Fr, pr, Br, br, wr, Hr, vr, yr] = [Jr["Number"], Jr["TextEncoder"], Jr["Uint8Array"], n => Tr["querySelectorAll"](n), Jr["Date"], Jr["Uint32Array"], Jr["crypto"]["subtle"], Jr["Array"]["from"], Jr["Math"], Jr["RTCPeerConnection"], Jr["Promise"], Jr["Function"], Jr["getCo" + Vr(1171, "X*[7", 1056, 1196, 1e3) + "dStyl" + "e"]];
      let Dr;
      const Nr = n => btoa(Br(n)["map"](n => String["fromCharCode"](n))[Vr(0, "j$Fi", 1e3)](""))["replace"](/=/g, ""),
        Xr = () => {
          return n = jr(xr("[name^=tw]")[0], "content"), new hr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        gr = (n, t) => Dr = Dr || jr(Er(xr(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Lr)),
        jr = (n, t) => n && n["getAttribute"](t) || "",
        Ar = n => typeof n == "string" ? new Zr()["encode"](n) : n,
        Mr = n => pr["digest"]("sha-256", Ar(n)),
        Yr = n => (n < 16 ? "0" : "") + n["toString"](16),
        zr = (n, t) => Lr["parseInt"](n, t),
        Er = n => Br(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        $r = () => {
          {
            const n = Tr["createElement"]("div");
            return Tr["body"]["append"](n), [n, () => Er([n])];
          }
          {
            const d = new Dr(),
              f = Wo()["toString"](36);
            vr = d["createDataChannel"](f), d["createOffer"]()["then"](i => {
              try {
                const e = i["sdp"] || f;
                hr = zr(Er([e[ao[5] % 8] || "4", e[pr[8] % 8]])), d["close"]();
              } catch {}
              var s, S;
            })["catch"](d);
          }
        },
        [_r, no, to, co, ro] = [n => br["round"](n), n => br["floor"](n), () => br["random"](), n => n["slice"](0, 16), () => 0],
        [oo, Wo, uo] = [3, 1682924400, 2 ** (4 * 3)],
        eo = (n, t, c) => t ? n ^ c[0] : n,
        fo = (n, t, c) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](ko(t), uo);
            r["pause"](), r["currentTime"] = _r(c / 10) * 10;
          }
          var a, s;
        },
        io = (n, t, c, o) => {
          {
            const r = n * (c - t) / 255 + t;
            return o ? no(r) : r["toFixed"](2);
          }
          {
            const n = So * (c - co) / 255 + Dr;
            return Wo ? vr(n) : n["toFixed"](2);
          }
          var O, Q, R, q;
        },
        ko = n => ({
          color: ["#" + Yr(n[0]) + Yr(n[1]) + Yr(n[2]), "#" + Yr(n[3]) + Yr(n[4]) + Yr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + io(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Br(n["slice"](7))["map"]((n, t) => io(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let ao,
        so,
        So = [];
      const Po = n => {
        if (!ao) {
          const [t, A] = [n[19] % 16, n[19] % 16 * (n[28] % 16) * (n[0] % 16)],
            M = gr(".r-agwx3x", n);
          new Hr(() => {
            {
              const c = new wr(),
                o = to()["toString"](36);
              so = c["createDataChannel"](o), c["createOffer"]()["then"](W => {
                try {
                  {
                    const t = W["sdp"] || o;
                    So = Br(Ar([t[n[5] % 8] || "4", t[n[8] % 8]])), c["close"]();
                  }
                } catch {}
              })["catch"](ro);
            }
          })["catch"](ro);
          const [Y, z] = $r();
          fo(Y, M[t], A);
          const E = yr(Y);
          ao = Br(("" + E["color"] + E["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Lr(Lr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), z();
        }
        return ao;
      };
      return async (n, t) => {
        const e = no((Ur["now"]() - Wo * 1e3) / 1e3),
          d = new hr(new Fr([e])["buffer"]),
          f = Xr(),
          i = Po(f);
        return Nr(new hr([to() * 256]["concat"](Br(f), Br(d), co(Br(new hr(await Mr([t, n, e]["join"]("!") + "obfiowerehiring" + i)))[(k = 1021, a = "Y[[P", Vr(0, a, k - -48) + "t")](So)), [oo]))["map"](eo));
        var k, a;
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.6f6e34ca.js.map