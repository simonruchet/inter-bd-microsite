import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//  mountain
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".mountain",
      start: "top top",
      end: "+=1000",
      scrub: true,
      pin: true,
    },
  })
  .to(".top", { y: "-100%", ease: "none" }, 0)
  .to(".bottom", { y: "100%", ease: "none" }, 0)
  .to(
    ".mountain-in-case",
    {
      width: 793,
      height: 557,
      ease: "none",
    },
    0
  );

//  scroll horizontal

gsap.set([".screen-2-img-2", ".screen-2-img-3", ".screen-2-img-4"], {
  opacity: 0,
  y: 50,
});

const scrollTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-horizontal",
    start: "top top",
    end: "+=1400%",
    pin: true,
    scrub: true,
  },
});

// avance vers screen-2
scrollTimeline.to(".screens", {
  x: "-5%",
  ease: "sine.inOut",
});

// animation sequence
scrollTimeline.add(function () {
  gsap.to([".screen-2-img-2", ".screen-2-img-3", ".screen-2-img-4"], {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.5,
    ease: "power2.out",
  });
});

// arrêt sur screen 3
scrollTimeline.to(".screens", {
  x: "-14.286%",
  ease: "sine.inOut",
});

// parallax
scrollTimeline.addLabel("parallax");

scrollTimeline
  .to(
    ".screen-3-background",
    {
      x: "-4vw",
      ease: "quad.inOut",
    },
    "parallax"
  )
  .to(
    ".screen-3-trees",
    {
      x: "-10vw",
      ease: "quad.inOut",
    },
    "parallax"
  )
  .to(
    ".screen-3-sabre",
    {
      x: "-6vw",
      ease: "quad.inOut",
    },
    "parallax"
  );

// retour scroll horizontal
scrollTimeline.to(".screens", {
  x: "-92.8571%",
  ease: "sine.inOut",
  duration: 8,
});
