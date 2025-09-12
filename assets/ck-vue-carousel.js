/**
 * Minified by jsDelivr using Terser v5.17.1.
 * Original file: /npm/vue3-carousel@0.3.1/dist/carousel.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("vue"))
    : "function" == typeof define && define.amd
    ? define(["exports", "vue"], t)
    : t(
        ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).VueCarousel = {}),
        e.Vue
      );
})(this, function (e, t) {
  "use strict";
  const n = {
      itemsToShow: 1,
      itemsToScroll: 2,
      modelValue: 0,
      transition: 300,
      autoplay: 0,
      snapAlign: "center",
      wrapAround: !1,
      throttle: 16,
      pauseAutoplayOnHover: !1,
      mouseDrag: !0,
      touchDrag: !0,
      dir: "ltr",
      breakpoints: void 0,
      i18n: {
        ariaNextSlide: "Navigate to next slide",
        ariaPreviousSlide: "Navigate to previous slide",
        ariaNavigateToSlide: "Navigate to slide {slideNumber}",
        ariaGallery: "Gallery",
        itemXofY: "Item {currentSlide} of {slidesCount}",
        iconArrowUp: "Arrow pointing upwards",
        iconArrowDown: "Arrow pointing downwards",
        iconArrowRight: "Arrow pointing to the right",
        iconArrowLeft: "Arrow pointing to the left",
      },
    },
    i = {
      itemsToShow: { default: n.itemsToShow, type: Number },
      itemsToScroll: { default: n.itemsToScroll, type: Number },
      wrapAround: { default: n.wrapAround, type: Boolean },
      throttle: { default: n.throttle, type: Number },
      snapAlign: {
        default: n.snapAlign,
        validator: (e) =>
          ["start", "end", "center", "center-even", "center-odd"].includes(e),
      },
      transition: { default: n.transition, type: Number },
      breakpoints: { default: n.breakpoints, type: Object },
      autoplay: { default: n.autoplay, type: Number },
      pauseAutoplayOnHover: { default: n.pauseAutoplayOnHover, type: Boolean },
      modelValue: { default: void 0, type: Number },
      mouseDrag: { default: n.mouseDrag, type: Boolean },
      touchDrag: { default: n.touchDrag, type: Boolean },
      dir: { default: n.dir, validator: (e) => ["rtl", "ltr"].includes(e) },
      i18n: { default: n.i18n, type: Object },
      settings: { default: () => ({}), type: Object },
    };
  function a({ val: e, max: t, min: n }) {
    return t < n ? e : Math.min(Math.max(e, n), t);
  }
  function o(e) {
    return e
      ? e.reduce((e, n) => {
          var i;
          return n.type === t.Fragment
            ? [...e, ...o(n.children)]
            : "CarouselSlide" ===
              (null === (i = n.type) || void 0 === i ? void 0 : i.name)
            ? [...e, n]
            : e;
        }, [])
      : [];
  }
  function r({ val: e, max: t, min: n = 0 }) {
    return e > t
      ? r({ val: e - (t + 1), max: t, min: n })
      : e < n
      ? r({ val: e + (t + 1), max: t, min: n })
      : e;
  }
  function l(e = "", t = {}) {
    return Object.entries(t).reduce(
      (e, [t, n]) => e.replace(`{${t}}`, String(n)),
      e
    );
  }
  var s,
    u = t.defineComponent({
      name: "ARIA",
      setup() {
        const e = t.inject("config", t.reactive(Object.assign({}, n))),
          i = t.inject("currentSlide", t.ref(0)),
          a = t.inject("slidesCount", t.ref(0));
        return () =>
          t.h(
            "div",
            {
              class: ["carousel__liveregion", "carousel__sr-only"],
              "aria-live": "polite",
              "aria-atomic": "true",
            },
            l(e.i18n.itemXofY, {
              currentSlide: i.value + 1,
              slidesCount: a.value,
            })
          );
      },
    }),
    c = t.defineComponent({
      name: "Carousel",
      props: i,
      setup(e, { slots: l, emit: s, expose: c }) {
        var d;
        const v = t.ref(null),
          p = t.ref([]),
          f = t.ref(0),
          m = t.ref(0),
          g = t.reactive(Object.assign({}, n));
        let h,
          w = Object.assign({}, n);
        const b = t.ref(null !== (d = e.modelValue) && void 0 !== d ? d : 0),
          x = t.ref(0),
          y = t.ref(0),
          S = t.ref(0),
          j = t.ref(0);
        let _, T;
        function C() {
          (h = Object.assign({}, e.breakpoints)),
            (w = Object.assign(Object.assign(Object.assign({}, w), e), {
              i18n: Object.assign(Object.assign({}, w.i18n), e.i18n),
              breakpoints: void 0,
            })),
            O(w);
        }
        function A() {
          if (!h || !Object.keys(h).length) return;
          const e = Object.keys(h)
            .map((e) => Number(e))
            .sort((e, t) => +t - +e);
          let t = Object.assign({}, w);
          e.some((e) => {
            const n = window.matchMedia(`(min-width: ${e}px)`).matches;
            return n && (t = Object.assign(Object.assign({}, t), h[e])), n;
          }),
            O(t);
        }
        function O(e) {
          Object.entries(e).forEach(([e, t]) => (g[e] = t));
        }
        t.provide("config", g),
          t.provide("slidesCount", m),
          t.provide("currentSlide", b),
          t.provide("maxSlide", S),
          t.provide("minSlide", j),
          t.provide("slideWidth", f);
        const k = (function (e, t) {
          let n;
          return function (...i) {
            n && clearTimeout(n),
              (n = setTimeout(() => {
                e(...i), (n = null);
              }, t));
          };
        })(() => {
          A(), M();
        }, 16);
        function M() {
          if (!v.value) return;
          const e = v.value.getBoundingClientRect();
          f.value = e.width / g.itemsToShow;
        }
        function N() {
          m.value <= 0 ||
            ((y.value = Math.ceil((m.value - 1) / 2)),
            (S.value = (function ({ config: e, slidesCount: t }) {
              const { snapAlign: n, wrapAround: i, itemsToShow: a = 1 } = e;
              if (i) return Math.max(t - 1, 0);
              let o;
              switch (n) {
                case "start":
                  o = t - a;
                  break;
                case "end":
                  o = t - 1;
                  break;
                case "center":
                case "center-odd":
                  o = t - Math.ceil((a - 0.5) / 2);
                  break;
                case "center-even":
                  o = t - Math.ceil(a / 2);
                  break;
                default:
                  o = 0;
              }
              return Math.max(o, 0);
            })({ config: g, slidesCount: m.value })),
            (j.value = (function ({ config: e, slidesCount: t }) {
              const { wrapAround: n, snapAlign: i, itemsToShow: a = 1 } = e;
              let o = 0;
              if (n || a > t) return o;
              switch (i) {
                case "start":
                default:
                  o = 0;
                  break;
                case "end":
                  o = a - 1;
                  break;
                case "center":
                case "center-odd":
                  o = Math.floor((a - 1) / 2);
                  break;
                case "center-even":
                  o = Math.floor((a - 2) / 2);
              }
              return o;
            })({ config: g, slidesCount: m.value })),
            g.wrapAround ||
              (b.value = a({ val: b.value, max: S.value, min: j.value })));
        }
        t.onMounted(() => {
          t.nextTick(() => M()),
            setTimeout(() => M(), 1e3),
            A(),
            z(),
            window.addEventListener("resize", k, { passive: !0 }),
            s("init");
        }),
          t.onUnmounted(() => {
            T && clearTimeout(T),
              _ && clearInterval(_),
              window.removeEventListener("resize", k, { passive: !0 });
          });
        let L = !1;
        const D = { x: 0, y: 0 },
          E = { x: 0, y: 0 },
          I = t.reactive({ x: 0, y: 0 }),
          V = t.ref(!1),
          R = t.ref(!1),
          B = () => {
            V.value = !0;
          },
          X = () => {
            V.value = !1;
          };
        function $(e) {
          ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName) ||
            ((L = "touchstart" === e.type),
            L || e.preventDefault(),
            (!L && 0 !== e.button) ||
              H.value ||
              ((D.x = L ? e.touches[0].clientX : e.clientX),
              (D.y = L ? e.touches[0].clientY : e.clientY),
              document.addEventListener(L ? "touchmove" : "mousemove", P, !0),
              document.addEventListener(L ? "touchend" : "mouseup", U, !0)));
        }
        const P = (function (e, t) {
          let n;
          return t
            ? function (...i) {
                const a = this;
                n || (e.apply(a, i), (n = !0), setTimeout(() => (n = !1), t));
              }
            : e;
        })((e) => {
          (R.value = !0),
            (E.x = L ? e.touches[0].clientX : e.clientX),
            (E.y = L ? e.touches[0].clientY : e.clientY);
          const t = E.x - D.x,
            n = E.y - D.y;
          (I.y = n), (I.x = t);
        }, g.throttle);
        function U() {
          const e = "rtl" === g.dir ? -1 : 1,
            t = 0.4 * Math.sign(I.x),
            n = Math.round(I.x / f.value + t) * e;
          if (n && !L) {
            const e = (t) => {
              t.stopPropagation(), window.removeEventListener("click", e, !0);
            };
            window.addEventListener("click", e, !0);
          }
          G(b.value - n),
            (I.x = 0),
            (I.y = 0),
            (R.value = !1),
            document.removeEventListener(L ? "touchmove" : "mousemove", P, !0),
            document.removeEventListener(L ? "touchend" : "mouseup", U, !0);
        }
        function z() {
          !g.autoplay ||
            g.autoplay <= 0 ||
            (_ = setInterval(() => {
              (g.pauseAutoplayOnHover && V.value) || W();
            }, g.autoplay));
        }
        function Y() {
          _ && (clearInterval(_), (_ = null)), z();
        }
        const H = t.ref(!1);
        function G(e) {
          const t = g.wrapAround
            ? e
            : a({ val: e, max: S.value, min: j.value });
          b.value === t ||
            H.value ||
            (s("slide-start", {
              slidingToIndex: e,
              currentSlideIndex: b.value,
              prevSlideIndex: x.value,
              slidesCount: m.value,
            }),
            (H.value = !0),
            (x.value = b.value),
            (b.value = t),
            (T = setTimeout(() => {
              if (g.wrapAround) {
                const n = r({ val: t, max: S.value, min: 0 });
                n !== b.value &&
                  ((b.value = n),
                  s("loop", { currentSlideIndex: b.value, slidingToIndex: e }));
              }
              s("update:modelValue", b.value),
                s("slide-end", {
                  currentSlideIndex: b.value,
                  prevSlideIndex: x.value,
                  slidesCount: m.value,
                }),
                (H.value = !1),
                Y();
            }, g.transition)));
        }
        function W() {
          G(b.value + g.itemsToScroll);
        }
        function q() {
          G(b.value - g.itemsToScroll);
        }
        const F = { slideTo: G, next: W, prev: q };
        t.provide("nav", F), t.provide("isSliding", H);
        const J = t.computed(() =>
          (function ({ config: e, currentSlide: t, slidesCount: n }) {
            const { snapAlign: i, wrapAround: o, itemsToShow: r = 1 } = e;
            let l = t;
            switch (i) {
              case "center":
              case "center-odd":
                l -= (r - 1) / 2;
                break;
              case "center-even":
                l -= (r - 2) / 2;
                break;
              case "end":
                l -= r - 1;
            }
            return o ? l : a({ val: l, max: n - r, min: 0 });
          })({ config: g, currentSlide: b.value, slidesCount: m.value })
        );
        t.provide("slidesToScroll", J);
        const K = t.computed(() => {
          const e = "rtl" === g.dir ? -1 : 1,
            t = J.value * f.value * e;
          return {
            transform: `translateX(${I.x - t}px)`,
            transition: `${H.value ? g.transition : 0}ms`,
            margin: g.wrapAround ? `0 -${m.value * f.value}px` : "",
            width: "100%",
          };
        });
        function Q() {
          C(), A(), N(), M(), Y();
        }
        Object.keys(i).forEach((n) => {
          ["modelValue"].includes(n) || t.watch(() => e[n], Q);
        }),
          t.watch(
            () => e.modelValue,
            (e) => {
              e !== b.value && G(Number(e));
            }
          ),
          t.watch(m, N),
          s("before-init"),
          C();
        const Z = {
          config: g,
          slidesCount: m,
          slideWidth: f,
          next: W,
          prev: q,
          slideTo: G,
          currentSlide: b,
          maxSlide: S,
          minSlide: j,
          middleSlide: y,
        };
        c({
          updateBreakpointsConfigs: A,
          updateSlidesData: N,
          updateSlideWidth: M,
          initDefaultConfigs: C,
          restartCarousel: Q,
          slideTo: G,
          next: W,
          prev: q,
          nav: F,
          data: Z,
        });
        const ee = l.default || l.slides,
          te = l.addons,
          ne = t.reactive(Z);
        return () => {
          const e = o(null == ee ? void 0 : ee(ne)),
            n = (null == te ? void 0 : te(ne)) || [];
          e.forEach((e, t) => (e.props.index = t));
          let i = e;
          if (g.wrapAround) {
            const n = e.map((n, i) =>
                t.cloneVNode(n, {
                  index: -e.length + i,
                  isClone: !0,
                  key: `clone-before-${i}`,
                })
              ),
              a = e.map((n, i) =>
                t.cloneVNode(n, {
                  index: e.length + i,
                  isClone: !0,
                  key: `clone-after-${i}`,
                })
              );
            i = [...n, ...e, ...a];
          }
          (p.value = e), (m.value = Math.max(e.length, 1));
          const a = t.h(
              "ol",
              {
                class: "carousel__track",
                style: K.value,
                onMousedownCapture: g.mouseDrag ? $ : null,
                onTouchstartPassiveCapture: g.touchDrag ? $ : null,
              },
              i
            ),
            r = t.h("div", { class: "carousel__viewport" }, a);
          return t.h(
            "section",
            {
              ref: v,
              class: {
                carousel: !0,
                "is-sliding": H.value,
                "is-dragging": R.value,
                "is-hover": V.value,
                "carousel--rtl": "rtl" === g.dir,
              },
              dir: g.dir,
              "aria-label": g.i18n.ariaGallery,
              tabindex: "0",
              onMouseenter: B,
              onMouseleave: X,
            },
            [r, n, t.h(u)]
          );
        };
      },
    });
  !(function (e) {
    (e.arrowUp = "arrowUp"),
      (e.arrowDown = "arrowDown"),
      (e.arrowRight = "arrowRight"),
      (e.arrowLeft = "arrowLeft");
  })(s || (s = {}));
  const d = {
    arrowUp: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",
    arrowDown: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
    arrowRight: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",
    arrowLeft: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z",
  };
  const v = (e) => {
    const i = t.inject("config", t.reactive(Object.assign({}, n))),
      a = String(e.name),
      o = `icon${a.charAt(0).toUpperCase() + a.slice(1)}`;
    if (!a || "string" != typeof a || !(a in s)) return;
    const r = d[a],
      l = t.h("path", { d: r }),
      u = i.i18n[o] || e.title || a,
      c = t.h("title", u);
    return t.h(
      "svg",
      {
        class: "carousel__icon",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-label": u,
      },
      [c, l]
    ); 
  };
  v.props = { name: String, title: String };
  var p = t.defineComponent({
    name: "CarouselSlide",
    props: {
      index: { type: Number, default: 1 },
      isClone: { type: Boolean, default: !1 },
    },
    setup(e, { slots: i }) {
      const a = t.inject("config", t.reactive(Object.assign({}, n))),
        o = t.inject("currentSlide", t.ref(0)),
        r = t.inject("slidesToScroll", t.ref(0)),
        l = t.inject("isSliding", t.ref(!1)),
        s = () => {
          const t = Math.floor(r.value),
            n = Math.ceil(r.value + a.itemsToShow - 1);
          return e.index >= t && e.index <= n;
        };
      return () => {
        var n;
        return t.h(
          "li",
          {
            style: { width: 100 / a.itemsToShow + "%" },
            class: {
              carousel__slide: !0,
              "carousel__slide--clone": e.isClone,
              "carousel__slide--visible": s(),
              "carousel__slide--active": e.index === o.value,
              "carousel__slide--prev": e.index === o.value - 1,
              "carousel__slide--next": e.index === o.value + 1,
              "carousel__slide--sliding": l.value,
            },
            "aria-hidden": !s(),
          },
          null === (n = i.default) || void 0 === n ? void 0 : n.call(i)
        );
      };
    },
  });
  (e.Carousel = c),
    (e.Icon = v),
    (e.Navigation = (e, { slots: i, attrs: a }) => {
      const { next: o, prev: r } = i || {},
        l = t.inject("config", t.reactive(Object.assign({}, n))),
        s = t.inject("maxSlide", t.ref(1)),
        u = t.inject("minSlide", t.ref(1)),
        c = t.inject("currentSlide", t.ref(1)),
        d = t.inject("nav", {}),
        { dir: p, wrapAround: f, i18n: m } = l,
        g = "rtl" === p;
      return [
        t.h(
          "button",
          {
            type: "button",
            class: [
              "carousel__prev",
              !f && c.value <= u.value && "carousel__prev--disabled",
              null == a ? void 0 : a.class,
            ],
            "aria-label": m.ariaPreviousSlide,
            onClick: d.prev,
          },
          (null == r ? void 0 : r()) ||
            t.h(v, { name: g ? "arrowRight" : "arrowLeft" })
        ),
        t.h(
          "button",
          {
            type: "button",
            class: [
              "carousel__next",
              !f && c.value >= s.value && "carousel__next--disabled",
              null == a ? void 0 : a.class,
            ],
            "aria-label": m.ariaNextSlide,
            onClick: d.next,
          },
          (null == o ? void 0 : o()) ||
            t.h(v, { name: g ? "arrowLeft" : "arrowRight" })
        ),
      ];
    }),
    (e.Pagination = () => {
      const e = t.inject("config", t.reactive(Object.assign({}, n))),
        i = t.inject("maxSlide", t.ref(1)),
        a = t.inject("minSlide", t.ref(1)),
        o = t.inject("currentSlide", t.ref(1)),
        s = t.inject("nav", {}),
        u = (e) => r({ val: o.value, max: i.value, min: 0 }) === e,
        c = [];
      for (let n = a.value; n < i.value + 1; n++) {
        const i = t.h("button", {
            type: "button",
            class: {
              "carousel__pagination-button": !0,
              "carousel__pagination-button--active": u(n),
            },
            "aria-label": l(e.i18n.ariaNavigateToSlide, { slideNumber: n + 1 }),
            onClick: () => s.slideTo(n),
          }),
          a = t.h("li", { class: "carousel__pagination-item", key: n }, i);
        c.push(a);
      }
      return t.h("ol", { class: "carousel__pagination" }, c);
    }),
    (e.Slide = p),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=/sm/337dfabbe8c5fceab1a2940af0c667128954c1e3322079db9f013e522aa24bb4.map
