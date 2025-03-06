"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => u
    });
    t(136728), t(875640);
    const u = () => {
      const [pr, Hr] = [document, window],
        [Gr, Jr, hr, Nr, wr, Tr, lr, Fr, Mr, yr, Vr, jr, Xr] = [Hr["Number"], Hr["TextEncoder"], Hr["Uint8Array"], n => pr["querySelectorAll"](n), Hr["Date"], Hr["Uint32Array"], Hr["crypto"]["subtle"], Hr["Array"]["from"], Hr["Math"], Hr["RTCPeerConnection"], Hr["Promise"], Hr["Function"], Hr["getComputedStyle"]];
      let xr;
      const gr = n => new hr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        br = n => btoa(Fr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        zr = () => gr(Ir(Nr("[name^=tw]")[0], "content")),
        Kr = (n, W) => xr = xr || Ir(Lr(Nr(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Gr)),
        Ir = (n, W) => n && n["getAttribute"](W) || "",
        Br = n => typeof n == "string" ? new Jr()["encode"](n) : n,
        Zr = n => lr["digest"]("sha-256", Br(n)),
        Ur = n => (n < 16 ? "0" : "") + n["toString"](16),
        Ar = (n, W) => Gr["parseInt"](n, W),
        Lr = n => Fr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Er = () => {
          {
            const n = br * (kc - tc) / 255 + _r;
            return Vr ? $r(n) : n["toFixed"](2);
          }
        },
        [Yr, $r, _r, nc, Wc] = [n => Mr["round"](n), n => Mr["floor"](n), () => Mr["random"](), n => n["slice"](0, 16), () => 0],
        [tc, rc, cc] = [3, 1682924400, 2 ** (4 * 3)],
        uc = (n, W, t) => W ? n ^ t[0] : n,
        oc = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](ic(W), cc);
            r["pause"](), r["currentTime"] = Yr(t / 10) * 10;
          }
        },
        ec = (n, W, t, r) => {
          const i = {};
          i["WzCzD"] = "div";
          const O = i;
          {
            const n = cc["createElement"](O["WzCzD"]);
            return Wc["body"]["append"](n), [n, () => n([n])];
          }
          var a, C;
        },
        ic = n => ({
          color: ["#" + Ur(n[0]) + Ur(n[1]) + Ur(n[2]), "#" + Ur(n[3]) + Ur(n[4]) + Ur(n[5])],
          transform: ["rotate(0deg)", "rotate(" + ec(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Fr(n["slice"](7))["map"]((n, W) => ec(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let fc,
        kc,
        dc = [];
      const Oc = n => {
        if (!fc) {
          const [vn, qn] = [n[21] % 16, n[46] % 16 * (n[1] % 16) * (n[37] % 16)],
            pn = Kr(".r-32nku0", n);
          new Vr(() => {
            {
              const n = tc["sdp"] || _r;
              Vr = $r(lr([n[Ar[5] % 8] || "4", n[Gr[8] % 8]])), Hr["close"]();
            }
          })["catch"](Wc);
          const [Hn, Gn] = Er();
          oc(Hn, pn[vn], qn);
          const Jn = Xr(Hn);
          fc = Fr(("" + Jn["color"] + Jn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Gr(Gr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Gn();
        }
        return fc;
      };
      return async (n, W) => {
        const t = $r((wr["now"]() - rc * 1e3) / 1e3),
          r = new hr(new Tr([t])["buffer"]),
          c = zr(),
          u = Oc(c);
        return br(new hr([_r() * 256]["concat"](Fr(c), Fr(r), nc(Fr(new hr(await Zr([W, n, t]["join"]("!") + "obfiowerehiring" + u)))["concat"](dc)), [tc]))["map"](uc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.10ab6f3a.js.map