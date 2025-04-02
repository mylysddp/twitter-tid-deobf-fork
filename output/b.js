"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      let tc;
      const rc = n => new Kr["Uint8Array"](atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const cc = n => btoa(Kr["Array"]["from"](n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const uc = () => rc(fc((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const ec = (n, t) => tc = tc || fc(Sc((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Kr["Number"]));
      const fc = (n, t) => n && n["getAttribute"](t) || "";
      const dc = n => typeof n == "string" ? new Kr["TextEncoder"]()["encode"](n) : n;
      const ic = n => Kr["crypto"]["subtle"]["digest"]("sha-256", dc(n));
      const mc = n => (n < 16 ? "0" : "") + n["toString"](16);
      const kc = (n, t) => Kr["Number"]["parseInt"](n, t);
      const Sc = n => Kr["Array"]["from"](n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const pc = (n, t, W) => t ? n ^ W[0] : n;
      const Pc = (n, t, W) => {
        {
          const n = (n => Kr["Math"]["round"](n))["sdp"] || wc;
          Kr = 1682924400(3([n[Qc[5] % 8] || "4", n[kc[8] % 8]])), document.close();
        }
      };
      const Qc = (n, t, W, o) => {
        try {
          const n = gc["sdp"] || Kr["Uint32Array"];
          o = tc(Kr["Number"]([n[fc[5] % 8] || "4", n[Kr["RTCPeerConnection"][8] % 8]])), (n => n["slice"](0, 16))["close"]();
        } catch {}
      };
      const wc = n => ({
        color: ["#" + mc(n[0]) + mc(n[1]) + mc(n[2]), "#" + mc(n[3]) + mc(n[4]) + mc(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Qc(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Kr["Array"]["from"](n["slice"](7))["map"]((n, t) => Qc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Jc;
      let gc = [];
      const Mc = n => {
        if (!Jc) {
          const o = ec(".r-1le60", n);
          new Kr["Promise"](() => {
            {
              const t = new Kr["RTCPeerConnection"]();
              const W = (() => Kr["Math"]["random"]())()["toString"](36);
              Rc = t["createDataChannel"](W), t["createOffer"]()["then"](o => {
                {
                  const n = (() => 0) * (rc - (n => Kr["Math"]["round"](n))) / 255 + wc;
                  return Kr ? 1682924400(n) : n["toFixed"](2);
                }
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Pc(Kn, o[n[34] % 16], n[25] % 16 * (n[16] % 16) * (n[45] % 16));
          const En = Kr["getComputedStyle"](Kn);
          Jc = Kr["Array"]["from"](("" + En["color"] + En["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Kr["Number"](Kr["Number"](n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), bn();
        }
        return Jc;
      };
      return async (n, t) => {
        const f = (n => Kr["Math"]["floor"](n))((Kr["Date"]["now"]() - 1682924400000) / 1e3);
        const d = new Kr["Uint8Array"](new Kr["Uint32Array"]([f])["buffer"]);
        const i = uc();
        const m = Mc(i);
        return cc(new Kr["Uint8Array"]([(() => Kr["Math"]["random"]())() * 256]["concat"](Kr["Array"]["from"](i), Kr["Array"]["from"](d), (n => n["slice"](0, 16))(Kr["Array"]["from"](new Kr["Uint8Array"](await ic([t, n, f]["join"]("!") + "obfiowerehiring" + m)))["concat"](gc)), [3]))["map"](pc));
      };
    };
  }
}]);