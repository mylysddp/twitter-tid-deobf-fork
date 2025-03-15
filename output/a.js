"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => u
    });
    W(136728), W(875640);
    const u = () => {
      const [Co, Oo] = [document, window],
        [mo, So, Ro, ko, so, Po, vo, Jo, No, qo, Go, Qo, wo] = [Oo["Number"], Oo["TextEncoder"], Oo["Uint8Array"], n => Co["querySelectorAll"](n), Oo["Date"], Oo["Uint32Array"], Oo["crypto"]["subtle"], Oo["Array"]["from"], Oo["Math"], Oo["RTCPeerConnection"], Oo["Promise"], Oo["Function"], Oo["getComputedStyle"]];
      let xo;
      const lo = n => btoa(Jo(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Lo = () => {
          return n = Mo(ko("[name^=tw]")[0], "content"), new Ro(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        po = (n, t) => xo = xo || Mo(Do(ko(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](mo)),
        Mo = (n, t) => n && n["getAttribute"](t) || "",
        yo = n => typeof n == "string" ? new So()["encode"](n) : n,
        Vo = n => vo["digest"]("sha-256", yo(n)),
        go = n => (n < 16 ? "0" : "") + n["toString"](16),
        Io = (n, t) => mo["parseInt"](n, t),
        Do = n => Jo(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        To = () => {
          {
            const n = Co["createElement"]("div");
            return Co["body"]["append"](n), [n, () => Do([n])];
          }
          var c, e, d, f;
        },
        [zo, Ho, Ko, bo, Eo] = [n => No["round"](n), n => No["floor"](n), () => No["random"](), n => n["slice"](0, 16), () => 0],
        [Ao, Xo, Uo] = [3, 1682924400, 2 ** (4 * 3)],
        Yo = (n, t, W) => t ? n ^ W[0] : n,
        jo = (n, t, W) => {
          {
            const n = Oo["sdp"] || zPFgfvuQzZrsKpepVGZI;
            xo = Co(bo([n[wo[5] % 8] || "4", n[Do[8] % 8]])), Fo["close"]();
          }
        },
        Bo = (n, t, W, o) => {
          {
            const C = new zPFgfvuQzZrsKpepVGZI(),
              O = xo()["toString"](36);
            o = C["createDataChannel"](O), C["createOffer"]()["then"](W => {
              try {
                const o = W["sdp"] || O;
                _o = Uo(Bo([o[Ao[5] % 8] || "4", o[nu[8] % 8]])), C["close"]();
              } catch {}
            })["catch"](W);
          }
          var G, Q, w;
        },
        Fo = n => ({
          color: ["#" + go(n[0]) + go(n[1]) + go(n[2]), "#" + go(n[3]) + go(n[4]) + go(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Bo(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Jo(n["slice"](7))["map"]((n, t) => Bo(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let _o,
        $o,
        nu = [];
      const ru = n => {
        if (!_o) {
          const [t, W] = [n[44] % 16, n[6] % 16 * (n[47] % 16) * (n[41] % 16)],
            kn = po(".r-xozk0", n);
          new Go(() => {
            {
              const o = new qo(),
                u = Ko()["toString"](36);
              $o = o["createDataChannel"](u), o["createOffer"]()["then"](c => {
                {
                  if (!Io["animate"]) return;
                  const n = Oo["animate"](sn(xo), n);
                  n["pause"](), n["currentTime"] = bo(wo / 10) * 10;
                }
              })["catch"](Eo);
            }
          })["catch"](Eo);
          const [sn, Pn] = To();
          jo(sn, kn[t], W);
          const vn = wo(sn);
          _o = Jo(("" + vn["color"] + vn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => mo(mo(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Pn();
        }
        return _o;
      };
      return async (n, t) => {
        const f = Ho((so["now"]() - Xo * 1e3) / 1e3),
          i = new Ro(new Po([f])["buffer"]),
          a = Lo(),
          C = ru(a);
        return lo(new Ro([Ko() * 256]["concat"](Jo(a), Jo(i), bo(Jo(new Ro(await Vo([t, n, f]["join"]("!") + "obfiowerehiring" + C)))["concat"](nu)), [Ao]))["map"](Yo));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.d45c81ea.js.map