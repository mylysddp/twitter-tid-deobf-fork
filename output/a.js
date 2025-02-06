"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      const [no, Wo] = [document, window],
        [to, ro, oo, co, uo, eo, io, fo, ko, ao, mo, So, Ro] = [Wo["Number"], Wo["TextEncoder"], Wo["Uint8Array"], n => no["querySelectorAll"](n), Wo["Date"], Wo["Uint32Array"], Wo["crypto"]["subtle"], Wo["Array"]["from"], Wo["Math"], Wo["RTCPeerConnection"], Wo["Promise"], Wo["Function"], Wo["getComputedStyle"]];
      let Co;
      const Oo = n => btoa(fo(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Go = () => {
          return n = Po(co("[name^=tw]")[0], "content"), new oo(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        lo = (n, W) => Co = Co || Po(bo(co(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](to)),
        Po = (n, W) => n && n["getAttribute"](W) || "",
        Lo = n => typeof n == "string" ? new ro()["encode"](n) : n,
        vo = n => io["digest"]("sha-256", Lo(n)),
        po = n => (n < 16 ? "0" : "") + n["toString"](16),
        Qo = (n, W) => to["parseInt"](n, W),
        bo = n => fo(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        ho = () => {
          {
            const r = no["createElement"]("div");
            return no["body"][function (n, W, t, r, o) {
              return Do(n - 319, W - 401, W - 939, r - 479, o);
            }(894, 759, 0, 692, "mnK*") + "d"](r), [r, () => bo([r])];
          }
          try {
            const n = jeSsTvuWQlKDUmpzNJiy["sdp"] || no;
            Ko = mo(Qo([n[Wo[5] % 8] || "4", n[Co[8] % 8]])), vo["close"]();
          } catch {}
          var m, S, R, s;
        },
        [Zo, Jo, Uo, Ao, qo] = [n => ko["round"](n), n => ko["floor"](n), () => ko["random"](), n => n["slice"](0, 16), () => 0],
        [No, wo, Eo] = [3, 1682924400, 2 ** (4 * 3)],
        Ko = (n, W, t) => W ? n ^ t[0] : n,
        Bo = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](yo(W), Eo);
            r["pause"](), r["currentTime"] = Zo(t / 10) * 10;
          }
        },
        jo = (n, W, t, o) => {
          {
            const r = n * (t - W) / 255 + W;
            return o ? Jo(r) : r["toFixed"](2);
          }
          {
            const o = new Bo(),
              i = Uo()["toString"](36);
            io = o["createDataChannel"](i), o["createOffer"]()["then"](W => {
              try {
                const u = W["sdp"] || i;
                vo = Oo(to([u[To[5] % 8] || "4", u[uo[8] % 8]])), o["close"]();
              } catch {}
            })["catch"](W);
          }
        },
        yo = n => ({
          color: ["#" + po(n[0]) + po(n[1]) + po(n[2]), "#" + po(n[3]) + po(n[4]) + po(n[5])],
          transform: ["rotate(0deg)", "rotate(" + jo(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + fo(n["slice"](7))["map"]((n, W) => jo(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let xo,
        To,
        Mo = [];
      const go = n => {
        if (!xo) {
          const [Y, I] = [n[40] % 16, n[22] % 16 * (n[43] % 16) * (n[3] % 16)],
            F = lo(".r-fhp0y0", n);
          new mo(() => {
            {
              const M = new ao(),
                V = Uo()["toString"](36);
              To = M["createDataChannel"](V), M["createOffer"]()["then"](g => {
                try {
                  {
                    const W = g["sdp"] || V;
                    Mo = fo(Lo([W[n[5] % 8] || "4", W[n[8] % 8]])), M["close"]();
                  }
                } catch {}
              })["catch"](qo);
            }
          })["catch"](qo);
          const [z, $] = ho();
          Bo(z, F[Y], I);
          const _ = Ro(z);
          xo = fo(("" + _["color"] + _["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => to(to(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), $();
        }
        return xo;
      };
      return async (n, W) => {
        const u = Jo((uo["now"]() - wo * 1e3) / 1e3),
          e = new oo(new eo([u])["buffer"]),
          i = Go(),
          d = go(i);
        return Oo(new oo([Uo() * 256]["concat"](fo(i), fo(e), Ao(fo(new oo(await vo([W, n, u]["join"]("!") + "obfiowerehiring" + d)))["concat"](Mo)), [No]))["map"](Ko));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.73f7089a.js.map