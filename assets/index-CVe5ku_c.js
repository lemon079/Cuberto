(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) a(e);
  new MutationObserver((e) => {
    for (const r of e)
      if (r.type === "childList")
        for (const s of r.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && a(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(e) {
    const r = {};
    return (
      e.integrity && (r.integrity = e.integrity),
      e.referrerPolicy && (r.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function a(e) {
    if (e.ep) return;
    e.ep = !0;
    const r = l(e);
    fetch(e.href, r);
  }
})();
let n = [
    {
      img: "/assets/create-websites.png",
      category: "design course",
      title: "how to make epic website // frontend development",
    },
    {
      img: "/assets/mouse-follower.png",
      category: "dev source",
      title: "cuberto mouse follower",
    },
    {
      img: "/assets/source-code.jpg",
      category: "dev source",
      title: "making switch with svg distortion efect",
    },
  ],
  i = "";
n.forEach((t) => {
  i += `<section class="resource-card">
    <figure><img src="${t.img}" alt=""></figure>
    <h5>${t.category}</h5>
    <a href="#">${t.title}</a>
    </section>`;
});
document.querySelector(".resources-container").innerHTML = i;
Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hero-heading h1", {
  videos: ["/assets/video-1.mp4", "/assets/video-2.mp4", "/assets/video-3.mp4"],
});
let u = document.querySelectorAll(".leftelem");
Shery.imageEffect(".image", {
  style: 0,
  config: {
    a: { value: 0, range: [0, 30] },
    b: { value: -1, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.7223864224991621 },
    ignoreShapeAspect: { value: !1 },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.52, y: 0.53 } },
    shapeEdgeSoftness: { value: 0.5, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0.5585023400936038 },
    scrollLerp: { value: 0.07 },
    gooey: { value: !1 },
    infiniteGooey: { value: !1 },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: !1 },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: !0 },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  slideStyle: (t) => {
    u.forEach((o, l) => {
      ScrollTrigger.create({
        trigger: o,
        scrub: 1,
        start: "top top",
        onUpdate: function (a) {
          t(a.progress + l);
        },
      });
    });
  },
});
gsap.to(".leftelem", {
  scrollTrigger: {
    trigger: ".project",
    scrub: 1,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    pin: !0,
  },
  y: "-300%",
  ease: Power1,
});
