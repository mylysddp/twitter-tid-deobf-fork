"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  471269: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => o
    });
    t(136728), t(875640);
    const o = () => {
      const [Yr, jr] = [document, window],
        [Ar, zr, Er, $r, _r, no, Wo, to, co, ro, oo, uo, eo] = [jr["Number"], jr["TextEncoder"], jr["Uint8Array"], n => Yr["querySelectorAll"](n), jr["Date"], jr["Uint32Array"], jr["crypto"]["subtle"], jr["Array"]["from"], jr["Math"], jr["RTCPeerConnection"], jr["Promise"], jr["Function"], jr["getComputedStyle"]];
      let fo;
      const io = n => new Er(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        ko = n => btoa(to(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Co = () => io(mo($r("[name^=tw]")[0], "content")),
        ao = (n, W) => fo = fo || mo(So($r(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Ar)),
        mo = (n, W) => n && n["getAttribute"](W) || "",
        Oo = n => typeof n == "string" ? new zr()["encode"](n) : n,
        Ro = n => Wo["digest"]("sha-256", Oo(n)),
        No = n => (n < 16 ? "0" : "") + n["toString"](16),
        So = n => to(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        so = () => {
          {
            const n = Yr[(d = 757, f = "5q5H", Xr(0, d - 965, 0, 0, f) + "eElem" + "ent")]("div");
            return Yr["body"]["append"](n), [n, () => So([n])];
          }
          try {
            const n = jr["sdp"] || Ar;
            Io = To(zr([n[ao[5] % 8] || "4", n[to[8] % 8]])), Oo["close"]();
          } catch {}
          var d, f;
        },
        [Ho, Qo, po, qo, Jo] = [n => co["round"](n), n => co["floor"](n), () => co["random"](), n => n["slice"](0, 16), () => 0],
        [yo, Po, ho] = [3, 1682924400, 2 ** (4 * 3)],
        To = (n, W, t) => W ? n ^ t[0] : n,
        Io = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const c = n["animate"](Go(W), ho);
            c["pause"](), c["currentTime"] = Ho(t / 10) * 10;
          }
        },
        lo = (n, W, t, r) => {
          {
            const c = n * (t - W) / 255 + W;
            return r ? Qo(c) : c["toFixed"](2);
          }
          {
            const c = new no(),
              r = $r()["toString"](36);
            po = c["createDataChannel"](r), c["createOffer"]()["then"](C => {
              try {
                const m = C["sdp"] || r;
                Oo = ko(io([m[m[5] % 8] || "4", m[n[8] % 8]])), c["close"]();
              } catch {}
              var N, S, p;
            })["catch"](Ar);
          }
        },
        Go = n => ({
          color: ["#" + No(n[0]) + No(n[1]) + No(n[2]), "#" + No(n[3]) + No(n[4]) + No(n[5])],
          transform: ["rotate(0deg)", "rotate(" + lo(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + to(n["slice"](7))["map"]((n, W) => lo(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let xo,
        Zo,
        Vo = [];
      const Fo = n => {
        if (!xo) {
          const [W, t] = [n[21] % 16, n[25] % 16 * (n[26] % 16) * (n[43] % 16)],
            O = ao(".r-5hgb9c", n);
          new oo(() => {
            {
              const c = new ro(),
                r = po()["toString"](36);
              Zo = c["createDataChannel"](r), c["createOffer"]()["then"](o => {
                try {
                  {
                    const W = o["sdp"] || r;
                    Vo = to(Oo([W[n[5] % 8] || "4", W[n[8] % 8]])), c["close"]();
                  }
                } catch {}
              })["catch"](Jo);
            }
          })["catch"](Jo);
          const [R, N] = so();
          Io(R, O[W], t);
          const S = eo(R);
          xo = to(("" + S["color"] + S["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Ar(Ar(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), N();
        }
        return xo;
      };
      return async (n, W) => {
        const e = Qo((_r["now"]() - Po * 1e3) / 1e3),
          d = new Er(new no([e])["buffer"]),
          f = Co(),
          i = Fo(f);
        return ko(new Er([po() * 256]["concat"](to(f), to(d), qo(to(new Er(await Ro([W, n, e]["join"]("!") + "obfiowerehiring" + i)))["concat"](Vo)), [yo]))["map"](To));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.4f887fea.js.map