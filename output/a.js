"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  471269: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => r
    });
    t(136728), t(875640);
    const r = () => {
      const [Eo, _o] = [document, window],
        [nc, Wc, tc, rc, oc, cc, uc, ec, ic, fc, kc, dc, Sc] = [_o["Number"], _o["TextEncoder"], _o["Uint8Array"], n => Eo["querySelectorAll"](n), _o["Date"], _o["Uint32Array"], _o["crypto"]["subtle"], _o["Array"]["from"], _o["Math"], _o["RTCPeerConnection"], _o["Promise"], _o["Function"], _o["getComputedStyle"]];
      let mc;
      const vc = n => new tc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Oc = n => btoa(ec(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Rc = () => vc(Gc(rc("[name^=tw]")[0], "content")),
        Jc = (n, W) => mc = mc || Gc(wc(rc(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](nc)),
        Gc = (n, W) => n && n["getAttribute"](W) || "",
        lc = n => typeof n == "string" ? new Wc()["encode"](n) : n,
        Nc = n => uc["digest"]("sha-256", lc(n)),
        Qc = n => (n < 16 ? "0" : "") + n["toString"](16),
        hc = (n, W) => nc["parseInt"](n, W),
        wc = n => ec(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        yc = () => {
          const r = {};
          r["FQDDt"] = "div";
          const e = r;
          {
            const n = Eo["createElement"]("div");
            return Eo["body"]["append"](n), [n, () => wc([n])];
          }
          {
            const n = pc["createElement"](e["FQDDt"]);
            return rc["body"]["append"](n), [n, () => n([n])];
          }
        },
        [bc, qc, xc, Bc, Hc] = [n => ic["round"](n), n => ic["floor"](n), () => ic["random"](), n => n["slice"](0, 16), () => 0],
        [Ic, Kc, Mc] = [3, 1682924400, 2 ** (4 * 3)],
        zc = (n, W, t) => W ? n ^ t[0] : n,
        jc = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const r = n[(d = "$O]1", S = 956, ac(0, d, S - 0) + "te")](Zc(W), Mc);
            r["pause"](), r["currentTime"] = bc(t / 10) * 10;
          }
          var d, S;
        },
        pc = (n, W, t, r) => {
          {
            const o = n * (t - W) / 255 + W;
            return r ? qc(o) : o["toFixed"](2);
          }
          {
            if (!ec["animate"]) return;
            const n = bc["animate"](n(oc), yc);
            n["pause"](), n["currentTime"] = fc(Nc / 10) * 10;
          }
          var S, a;
        },
        Zc = n => ({
          color: ["#" + Qc(n[0]) + Qc(n[1]) + Qc(n[2]), "#" + Qc(n[3]) + Qc(n[4]) + Qc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + pc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + ec(n["slice"](7))["map"]((n, W) => pc(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Yc,
        Dc,
        Fc = [];
      const gc = n => {
        if (!Yc) {
          const [W, t] = [n[11] % 16, n[25] % 16 * (n[25] % 16) * (n[22] % 16)],
            r = Jc(".r-5so60w", n);
          new kc(() => {
            {
              const un = new fc(),
                en = xc()["toString"](36);
              Dc = un["createDataChannel"](en), un["createOffer"]()["then"](fn => {
                try {
                  {
                    const W = fn["sdp"] || en;
                    Fc = ec(lc([W[n[5] % 8] || "4", W[n[8] % 8]])), un["close"]();
                  }
                } catch {}
              })["catch"](Hc);
            }
          })["catch"](Hc);
          const [c, u] = yc();
          jc(c, r[W], t);
          const Sn = Sc(c);
          Yc = ec(("" + Sn["color"] + Sn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => nc(nc(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), u();
        }
        return Yc;
      };
      return async (n, W) => {
        const c = qc((oc["now"]() - Kc * 1e3) / 1e3),
          u = new tc(new cc([c])["buffer"]),
          e = Rc(),
          i = gc(e);
        return Oc(new tc([xc() * 256]["concat"](ec(e), ec(u), Bc(ec(new tc(await Nc([W, n, c]["join"]("!") + "obfiowerehiring" + i)))["concat"](Fc)), [Ic]))["map"](zc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.161f706a.js.map