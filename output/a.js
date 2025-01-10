"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => u
    });
    t(136728), t(875640);
    const u = () => {
      const [ko, ao] = [document, window],
        [mo, Co, Ro, So, Go, so, vo, Po, lo, Qo, xo, ho, Mo] = [ao["Number"], ao["TextEncoder"], ao["Uint8Array"], n => ko["querySelectorAll"](n), ao["Date"], ao["Uint32Array"], ao["crypto"]["subtle"], ao["Array"]["from"], ao["Math"], ao["RTCPeerConnection"], ao["Promise"], ao["Function"], ao["getComputedStyle"]];
      let Oo;
      const Io = n => btoa(Po(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        qo = () => {
          return n = po(So("[name^=tw]")[0], "content"), new Ro(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Bo = (n, W) => Oo = Oo || po(Uo(So(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](mo)),
        po = (n, W) => n && n["getAttribute"](W) || "",
        yo = n => typeof n == "string" ? new Co()["encode"](n) : n,
        wo = n => vo["digest"]("sha-256", yo(n)),
        Zo = n => (n < 16 ? "0" : "") + n["toString"](16),
        No = (n, W) => mo["parseInt"](n, W),
        Uo = n => Po(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Vo = () => {
          {
            const n = ko["createElement"]("div");
            return ko["body"]["append"](n), [n, () => Uo([n])];
          }
          try {
            const n = Po["sdp"] || Bo;
            mo = vo(go([n[Co[5] % 8] || "4", n[Vo[8] % 8]])), n["close"]();
          } catch {}
        },
        [jo, Jo, Lo, Ho, Ao] = [n => lo["round"](n), n => lo["floor"](n), () => lo["random"](), n => n["slice"](0, 16), () => 0],
        [Fo, bo, go] = [3, 1682924400, 2 ** (4 * 3)],
        Ko = (n, W, t) => W ? n ^ t[0] : n,
        Yo = (n, W, t) => {
          const e = {};
          e["XeDON"] = "div";
          const a = e;
          {
            if (!n["animate"]) return;
            const r = n["animate"](To(W), go);
            r["pause"](), r["currentTime"] = jo(t / 10) * 10;
          }
        },
        Do = (n, W, t, r) => {
          {
            const o = n * (t - W) / 255 + W;
            return r ? Jo(o) : o["toFixed"](2);
          }
          {
            if (!Jo[(R = "g89v", S = 797, G = 691, s = 693, Wu(R - 472, S - 150, G - 494, s - 413, R) + "te")]) return;
            const t = n["animate"](yo(W), tu);
            t["pause"](), t["currentTime"] = Mo(No / 10) * 10;
          }
          var R, S, G, s;
        },
        To = n => ({
          color: ["#" + Zo(n[0]) + Zo(n[1]) + Zo(n[2]), "#" + Zo(n[3]) + Zo(n[4]) + Zo(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Do(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Po(n["slice"](7))["map"]((n, W) => Do(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Xo,
        $o,
        _o = [];
      const tu = n => {
        if (!Xo) {
          const [d, i] = [n[25] % 16, n[7] % 16 * (n[33] % 16) * (n[42] % 16)],
            f = Bo(".r-cfij60", n);
          new xo(() => {
            {
              const W = new Qo(),
                t = Lo()["toString"](36);
              $o = W["createDataChannel"](t), W["createOffer"]()["then"](r => {
                try {
                  {
                    const o = r["sdp"] || t;
                    _o = Po(yo([o[n[5] % 8] || "4", o[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](Ao);
            }
          })["catch"](Ao);
          const [k, a] = Vo();
          Yo(k, f[d], i);
          const m = Mo(k);
          Xo = Po(("" + m["color"] + m["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => mo(mo(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), a();
        }
        return Xo;
      };
      return async (n, W) => {
        const o = Jo((Go["now"]() - bo * 1e3) / 1e3),
          u = new Ro(new so([o])["buffer"]),
          c = qo(),
          e = tu(c);
        return Io(new Ro([Lo() * 256]["concat"](Po(c), Po(u), Ho(Po(new Ro(await wo([W, n, o]["join"]("!") + "obfiowerehiring" + e)))["concat"](_o)), [Fo]))["map"](Ko));
        var k, a;
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.08911f4a.js.map