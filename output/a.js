"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, r) => {
    r.r(W), r.d(W, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      const [ho, bo] = [document, window],
        [xo, wo, Jo, Io, Mo, No, po, Ko, Fo, Xo, Lo, To, jo] = [bo["Number"], bo["TextEncoder"], bo["Uint8Array"], n => ho["querySelectorAll"](n), bo["Date"], bo["Uint32Array"], bo["crypto"]["subtle"], bo["Array"]["from"], bo["Math"], bo["RTCPeerConnection"], bo["Promise"], bo["Function"], bo["getComputedStyle"]];
      let Vo;
      const Eo = n => new Jo(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Zo = n => btoa(Ko(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Ao = () => Eo(zo(Io("[name^=tw]")[0], "content")),
        Uo = (n, W) => Vo = Vo || zo(nc(Io(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](xo)),
        zo = (n, W) => n && n["getAttribute"](W) || "",
        Do = n => typeof n == "string" ? new wo()["encode"](n) : n,
        Yo = n => po["digest"]("sha-256", Do(n)),
        $o = n => (n < 16 ? "0" : "") + n["toString"](16),
        _o = (n, W) => xo["parseInt"](n, W),
        nc = n => Ko(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Wc = () => {
          {
            const c = ho["createElement"]("div");
            return ho["body"]["append"](c), [c, () => nc([c])];
          }
          try {
            const W = ho["sdp"] || Zo;
            bo = Ao(xo([W[_o[5] % 8] || "4", W[wo[8] % 8]])), Jo["close"]();
          } catch {}
          var t, o;
        },
        [rc, tc, oc, cc, uc] = [n => Fo["round"](n), n => Fo["floor"](n), () => Fo["random"](), n => n["slice"](0, 16), () => 0],
        [ec, dc, fc] = [3, 1682924400, 2 ** (4 * 3)],
        ic = (n, W, r) => W ? n ^ r[0] : n,
        ac = (n, W, r) => {
          {
            const e = new $o(),
              d = Ko()["toString"](36);
            n = e["createDataChannel"](d), e["createOffer"]()["then"](n => {
              try {
                const r = n["sdp"] || d;
                Jo = ic(Do([r[bo[5] % 8] || "4", r[Lo[8] % 8]])), e["close"]();
              } catch {}
            })["catch"](Zo);
          }
        },
        kc = (n, W, r, t) => {
          {
            if (!dc["animate"]) return;
            const W = jo["animate"]($o(Ko), n);
            W["pause"](), W[(d = "ze^R", f = 1008, i = 951, a = 1056, Oc(d, i - -96, f - 97, i - 468, a - 308) + "ntTim" + "e")] = nc(tc / 10) * 10;
          }
          var d, f, i, a;
        },
        mc = n => ({
          color: ["#" + $o(n[0]) + $o(n[1]) + $o(n[2]), "#" + $o(n[3]) + $o(n[4]) + $o(n[5])],
          transform: ["rotate(0deg)", "rotate(" + kc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Ko(n["slice"](7))["map"]((n, W) => kc(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Pc,
        sc,
        Cc = [];
      const Rc = n => {
        if (!Pc) {
          const [I, M] = [n[3] % 16, n[31] % 16 * (n[8] % 16) * (n[1] % 16)],
            N = Uo(".r-8buz0", n);
          new Lo(() => {
            {
              const W = sc * (dc - jo) / 255 + $o;
              return Ko ? n(W) : W["toFixed"](2);
            }
            {
              const o = new Xo(),
                q = oc()["toString"](36);
              sc = o["createDataChannel"](q), o["createOffer"]()["then"](h => {
                const w = {};
                w["BDbek"] = "div";
                const p = w;
                {
                  const W = jo["sdp"] || $o;
                  Ko = n(nc([W[tc[5] % 8] || "4", W[uc[8] % 8]])), h["close"]();
                }
              })["catch"](uc);
            }
          })["catch"](uc);
          const [p, K] = Wc();
          ac(p, N[I], M);
          const F = jo(p);
          Pc = Ko(("" + F["color"] + F["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => xo(xo(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), K();
        }
        return Pc;
      };
      return async (n, W) => {
        const r = tc((Mo["now"]() - dc * 1e3) / 1e3),
          t = new Jo(new No([r])["buffer"]),
          o = Ao(),
          c = Rc(o);
        return Zo(new Jo([oc() * 256]["concat"](Ko(o), Ko(t), cc(Ko(new Jo(await Yo([W, n, r]["join"]("!") + "obfiowerehiring" + c)))["concat"](Cc)), [ec]))["map"](ic));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.d43c4c5a.js.map