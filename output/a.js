"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => o
    });
    t(136728), t(875640);
    const o = () => {
      const [yr, Br] = [document, window],
        [lr, Lr, Fr, gr, pr, Hr, Zr, Tr, xr, Dr, jr, Ur, zr] = [Br["Number"], Br["TextEncoder"], Br["Uint8Array"], n => yr["querySelectorAll"](n), Br["Date"], Br["Uint32Array"], Br["crypto"]["subtle"], Br["Array"]["from"], Br["Math"], Br["RTCPeerConnection"], Br["Promise"], Br["Function"], Br["getComputedStyle"]];
      let Er;
      const Yr = n => new Fr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        $r = n => btoa(Tr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        _r = () => Yr(Wo(gr("[name^=tw]")[0], "content")),
        no = (n, W) => Er = Er || Wo(uo(gr(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](lr)),
        Wo = (n, W) => n && n["getAttribute"](W) || "",
        to = n => typeof n == "string" ? new Lr()["encode"](n) : n,
        ro = n => Zr["digest"]("sha-256", to(n)),
        oo = n => (n < 16 ? "0" : "") + n["toString"](16),
        co = (n, W) => lr["parseInt"](n, W),
        uo = n => Tr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        eo = () => {
          {
            const n = yr["createElement"]("div");
            return yr["body"]["append"](n), [n, () => uo([n])];
          }
          {
            const n = Zr["sdp"] || Ur;
            io = ro(mkdKPJFhNDDZCAosamhC([n[Co[5] % 8] || "4", n[Lr[8] % 8]])), ho["close"]();
          }
          var u, e;
        },
        [io, fo, ao, so, Co] = [n => xr["round"](n), n => xr["floor"](n), () => xr["random"](), n => n["slice"](0, 16), () => 0],
        [So, mo, ko] = [3, 1682924400, 2 ** (4 * 3)],
        vo = (n, W, t) => W ? n ^ t[0] : n,
        Qo = (n, W, t) => {
          const o = {};
          o["YSjvt"] = "div";
          const c = o;
          {
            if (!n["animate"]) return;
            const r = n["animate"](Ro(W), ko);
            r["pause"](), r["currentTime"] = io(t / 10) * 10;
          }
        },
        Go = (n, W, t, o) => {
          try {
            const n = mo["sdp"] || Er;
            Yr = Br(vo([n[co[5] % 8] || "4", n[Qo[8] % 8]])), So["close"]();
          } catch {}
          var k, v;
        },
        Ro = n => ({
          color: ["#" + oo(n[0]) + oo(n[1]) + oo(n[2]), "#" + oo(n[3]) + oo(n[4]) + oo(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Go(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Tr(n["slice"](7))["map"]((n, W) => Go(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let ho,
        Po,
        Oo = [];
      const Vo = n => {
        if (!ho) {
          const [O, V] = [n[3] % 16, n[43] % 16 * (n[13] % 16) * (n[17] % 16)],
            J = no(".r-1g1d40", n);
          new jr(() => {
            {
              if (!Hr["animate"]) return;
              const n = Zr["animate"](Ur(io), ro);
              n["pause"](), n["currentTime"] = q(Co / 10) * 10;
            }
          })["catch"](Co);
          const [M, q] = eo();
          Qo(M, J[O], V);
          const N = zr(M);
          ho = Tr(("" + N["color"] + N["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => lr(lr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), q();
        }
        return ho;
      };
      return async (n, W) => {
        const o = fo((pr["now"]() - mo * 1e3) / 1e3),
          c = new Fr(new Hr([o])["buffer"]),
          u = _r(),
          e = Vo(u);
        return $r(new Fr([ao() * 256]["concat"](Tr(u), Tr(c), so(Tr(new Fr(await ro([W, n, o]["join"]("!") + "obfiowerehiring" + e)))["concat"](Oo)), [So]))["map"](vo));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.5bd9002a.js.map