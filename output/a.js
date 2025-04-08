"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      const [fo, io] = [document, window],
        [ko, so, ao, Ro, mo, Co, Oo, So, Qo, lo, po, Go, ho] = [io["Number"], io["TextEncoder"], io["Uint8Array"], n => fo["querySelectorAll"](n), io["Date"], io["Uint32Array"], io["crypto"]["subtle"], io["Array"]["from"], io["Math"], io["RTCPeerConnection"], io["Promise"], io["Function"], io["getComputedStyle"]];
      let qo;
      const Io = n => btoa(So(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Jo = () => {
          return n = xo(Ro("[name^=tw]")[0], "content"), new ao(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        No = (n, t) => qo = qo || xo(Lo(Ro(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](ko)),
        xo = (n, t) => n && n["getAttribute"](t) || "",
        Fo = n => typeof n == "string" ? new so()["encode"](n) : n,
        wo = n => Oo["digest"]("sha-256", Fo(n)),
        Ko = n => (n < 16 ? "0" : "") + n["toString"](16),
        Lo = n => So(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Eo = () => {
          const t = {};
          t["zgDoE"] = "div";
          const c = t;
          {
            const t = fo["createElement"](c["zgDoE"]);
            return fo["body"]["append"](t), [t, () => t([t])];
          }
          {
            const t = fo["createElement"]("div");
            return fo["body"]["append"](t), [t, () => Lo([t])];
          }
        },
        [go, Ho, Uo, bo, To] = [n => Qo["round"](n), n => Qo["floor"](n), () => Qo["random"](), n => n["slice"](0, 16), () => 0],
        [Zo, yo, Ao] = [3, 1682924400, 2 ** (4 * 3)],
        Do = (n, t, r) => t ? n ^ r[0] : n,
        Yo = (n, t, r) => {
          {
            if (!n["animate"]) return;
            const W = n["animate"](jo(t), Ao);
            W["pause"](), W["currentTime"] = go(r / 10) * 10;
          }
        },
        Xo = (n, t, r, W) => {
          {
            const o = n * (r - t) / 255 + t;
            return W ? Ho(o) : o["toFixed"](2);
          }
          {
            const n = qo["sdp"] || wo;
            r = jo(Vo([n[So[5] % 8] || "4", n[po[8] % 8]])), W["close"]();
          }
        },
        jo = n => ({
          color: ["#" + Ko(n[0]) + Ko(n[1]) + Ko(n[2]), "#" + Ko(n[3]) + Ko(n[4]) + Ko(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Xo(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + So(n["slice"](7))["map"]((n, t) => Xo(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Vo,
        Bo,
        Mo = [];
      const zo = n => {
        if (!Vo) {
          const [t, M] = [n[23] % 16, n[38] % 16 * (n[11] % 16) * (n[9] % 16)],
            z = No(".r-4d8lxc", n);
          new po(() => {
            {
              const n = Oo * (To - qo) / 255 + wo;
              return M ? jo(n) : n["toFixed"](2);
            }
            {
              const w = new lo(),
                K = Uo()["toString"](36);
              Bo = w["createDataChannel"](K), w["createOffer"]()["then"](L => {
                try {
                  {
                    const O = new wo(),
                      S = M()["toString"](36);
                    jo = O["createDataChannel"](S), O["createOffer"]()["then"](t => {
                      try {
                        const e = t["sdp"] || S;
                        Ho = ho(Lo([e[Ao[5] % 8] || "4", e[yo[8] % 8]])), O["close"]();
                      } catch {}
                      var c, u;
                    })["catch"](xo);
                  }
                } catch {}
              })["catch"](To);
            }
          })["catch"](To);
          const [$, _] = Eo();
          Yo($, z[t], M);
          const nn = ho($);
          Vo = So(("" + nn["color"] + nn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => ko(ko(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), _();
        }
        return Vo;
      };
      return async (n, t) => {
        const f = Ho((mo["now"]() - yo * 1e3) / 1e3),
          d = new ao(new Co([f])["buffer"]),
          i = Jo(),
          k = zo(i);
        return Io(new ao([Uo() * 256]["concat"](So(i), So(d), bo(So(new ao(await wo([t, n, f]["join"]("!") + "obfiowerehiring" + k)))["concat"](Mo)), [Zo]))["map"](Do));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.b0cd309a.js.map