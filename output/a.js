"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      const [Pr, kr] = [document, window],
        [qr, Or, Gr, Rr, xr, Ir, Zr, Nr, Vr, Qr, Fr, yr, wr] = [kr["Number"], kr["TextEncoder"], kr["Uint8Array"], n => Pr["querySelectorAll"](n), kr["Date"], kr["Uint32Array"], kr["crypto"]["subtle"], kr["Array"]["from"], kr["Math"], kr["RTCPeerConnection"], kr["Promise"], kr["Function"], kr["getComputedStyle"]];
      let lr;
      const pr = n => new Gr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Jr = n => btoa(Nr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        br = () => pr(Lr(Rr("[name^=tw]")[0], "content")),
        hr = (n, t) => lr = lr || Lr(Xr(Rr(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](qr)),
        Lr = (n, t) => n && n["getAttribute"](t) || "",
        gr = n => typeof n == "string" ? new Or()["encode"](n) : n,
        Dr = n => Zr["digest"]("sha-256", gr(n)),
        Hr = n => (n < 16 ? "0" : "") + n["toString"](16),
        Xr = n => Nr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Kr = () => {
          {
            const n = Pr["createElement"]("div");
            return Pr["body"]["append"](n), [n, () => Xr([n])];
          }
          {
            const n = pr * (kr - qr) / 255 + ro;
            return wr ? yr(n) : n["toFixed"](2);
          }
          var d, s;
        },
        [Tr, Mr, zr, Ar, Ur] = [n => Vr["round"](n), n => Vr["floor"](n), () => Vr["random"](), n => n["slice"](0, 16), () => 0],
        [Br, Er, jr] = [3, 1682924400, 2 ** (4 * 3)],
        Yr = (n, t, W) => t ? n ^ W[0] : n,
        $r = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](no(t), jr);
            r["pause"](), r["currentTime"] = Tr(W / 10) * 10;
          }
        },
        _r = (n, t, W, o) => {
          try {
            const n = lr["sdp"] || Pr;
            to = Tr(Er([n[Or[5] % 8] || "4", n[Nr[8] % 8]])), gr["close"]();
          } catch {}
        },
        no = n => ({
          color: ["#" + Hr(n[0]) + Hr(n[1]) + Hr(n[2]), "#" + Hr(n[3]) + Hr(n[4]) + Hr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + _r(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Nr(n["slice"](7))["map"]((n, t) => _r(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let to,
        Wo,
        ro = [];
      const oo = n => {
        if (!to) {
          const [Z, N] = [n[7] % 16, n[35] % 16 * (n[6] % 16) * (n[22] % 16)],
            V = hr(".r-50pzgo", n);
          new Fr(() => {
            {
              const n = zr["createElement"]("div");
              return F["body"]["append"](n), [n, () => n([n])];
            }
            {
              const t = new Qr(),
                W = zr()["toString"](36);
              Wo = t["createDataChannel"](W), t["createOffer"]()["then"](o => {
                if (GgTaeEKvVzoccfzyGVLN[I(630, "7ux[", 0, 0, 649)] !== GgTaeEKvVzoccfzyGVLN[I(537, "QqzI", 0, 0, 622)]) {
                  const C = new ro(),
                    P = wr()["toString"](36);
                  yr = C["creat" + I(484, "^RXl", 0, 0, 344) + "Chann" + "el"](P), C["createOffer"]()[I(660, "3q%#", 0, 0, 539)](W => {
                    try {
                      const n = W["sdp"] || P;
                      gr = GgTaeEKvVzoccfzyGVLN[I(482, "M*Yr", 0, 0, -504)](Ar, W([n[GgTaeEKvVzoccfzyGVLN[I(628, "D7[#", 0, 161, 222)](Hr[5], 8)] || "4", n[Br[8] % 8]])), C["close"]();
                    } catch {}
                  })[I(431, "M*Yr", 0, 0, 503)](Pr);
                } else try {
                  {
                    const r = o[I(551, "gZIX", 0, 0, 550)] || W;
                    ro = Nr(gr([r[GgTaeEKvVzoccfzyGVLN[I(481, "[AS^", 0, 0, 614)](n[5], 8)] || "4", r[n[8] % 8]])), t[I(533, "3eL3", 0, 0, 549)]();
                  }
                } catch {}
              })["catch"](Ur);
            }
          })["catch"](Ur);
          const [Q, F] = Kr();
          $r(Q, V[Z], N);
          const y = wr(Q);
          to = Nr(("" + y["color"] + y["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => qr(qr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), F();
        }
        return to;
      };
      return async (n, t) => {
        const u = Mr((xr["now"]() - Er * 1e3) / 1e3),
          c = new Gr(new Ir([u])["buffer"]),
          e = br(),
          f = oo(e);
        return Jr(new Gr([zr() * 256]["concat"](Nr(e), Nr(c), Ar(Nr(new Gr(await Dr([t, n, u]["join"]("!") + "obfiowerehiring" + f)))["concat"](ro)), [Br]))["map"](Yr));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.05bc982a.js.map