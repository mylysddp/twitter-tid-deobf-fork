"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => o
    });
    r(136728), r(875640);
    const o = () => {
      const [_W, nc] = [document, window],
        [tc, rc, Wc, cc, oc, uc, ec, fc, ic, dc, kc, sc, ac] = [nc["Number"], nc["TextEncoder"], nc["Uint8Array"], n => _W["querySelectorAll"](n), nc["Date"], nc["Uint32Array"], nc["crypto"]["subtle"], nc["Array"]["from"], nc["Math"], nc["RTCPeerConnection"], nc["Promise"], nc["Function"], nc["getComputedStyle"]];
      let Cc;
      const Rc = n => new Wc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Sc = n => btoa(fc(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        mc = () => Rc(Pc(cc("[name^=tw]")[0], "content")),
        Qc = (n, t) => Cc = Cc || Pc(pc(cc(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](tc)),
        Pc = (n, t) => n && n["getAttribute"](t) || "",
        Gc = n => typeof n == "string" ? new rc()["encode"](n) : n,
        bc = n => ec["digest"]("sha-256", Gc(n)),
        hc = n => (n < 16 ? "0" : "") + n["toString"](16),
        pc = n => fc(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        lc = () => {
          {
            const n = _W["createElement"]("div");
            return _W["body"]["append"](n), [n, () => pc([n])];
          }
          {
            const W = new bc(),
              f = qc()["toString"](36);
            dc = W["createDataChannel"](f), W["createOffer"]()["then"](i => {
              try {
                const k = i["sdp"] || f;
                rc = ec(ac([k[Vc[5] % 8] || "4", k[Xc[8] % 8]])), W["close"]();
              } catch {}
              var b, h, p, l;
            })["catch"](Sc);
          }
        },
        [Vc, gc, vc, Fc, qc] = [n => ic["round"](n), n => ic["floor"](n), () => ic["random"](), n => n["slice"](0, 16), () => 0],
        [Nc, wc, Hc] = [3, 1682924400, 2 ** (4 * 3)],
        Jc = (n, t, r) => t ? n ^ r[0] : n,
        Bc = (n, t, r) => {
          {
            if (!nc["animate"]) return;
            const n = lc["animate"](bc(qc), dc);
            n["pause"](), n["currentTime"] = Pc(_W / 10) * 10;
          }
        },
        Kc = (n, t, r, W) => {
          {
            const c = n * (r - t) / 255 + t;
            return W ? gc(c) : c["toFixed"](2);
          }
        },
        Tc = n => ({
          color: ["#" + hc(n[0]) + hc(n[1]) + hc(n[2]), "#" + hc(n[3]) + hc(n[4]) + hc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Kc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + fc(n["slice"](7))["map"]((n, t) => Kc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Yc,
        Mc,
        Zc = [];
      const Xc = n => {
        if (!Yc) {
          const [t, r] = [n[25] % 16, n[32] % 16 * (n[37] % 16) * (n[34] % 16)],
            c = Qc(".r-nki20", n);
          new kc(() => {
            {
              const n = oc["createElement"]("div");
              return rc["body"]["append"](n), [n, () => n([n])];
            }
            {
              const o = new dc(),
                u = vc()["toString"](36);
              Mc = o["createDataChannel"](u), o["createOffer"]()["then"](e => {
                try {
                  const n = Zc["sdp"] || Sc;
                  t = i(n([n[Bc[5] % 8] || "4", n[Rc[8] % 8]])), k["close"]();
                } catch {}
              })["catch"](qc);
            }
          })["catch"](qc);
          const [i, d] = lc();
          Bc(i, c[t], r);
          const k = ac(i);
          Yc = fc(("" + k["color"] + k["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => tc(tc(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), xGxqCJZiWHUUPwjIFtPn[p(1e3, 0, ")Op]")](d);
        }
        return Yc;
      };
      return async (n, t) => {
        const r = gc((oc["now"]() - wc * 1e3) / 1e3),
          W = new Wc(new uc([r])["buffer"]),
          c = mc(),
          o = Xc(c);
        return Sc(new Wc([vc() * 256]["concat"](fc(c), fc(W), Fc(fc(new Wc(await bc([t, n, r]["join"]("!") + "obfiowerehiring" + o)))["concat"](Zc)), [Nc]))["map"](Jc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.d6070e4a.js.map