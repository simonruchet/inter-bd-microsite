import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//  mountain

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".mountain",
      start: "top top",
      end: "+=1000", // longueur du scroll
      scrub: true,
      pin: true, // bloque la section pendant l'anim
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

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scroll-horizontal",
      start: "top top",
      end: "+=1400%",
      pin: true,
      scrub: true,
      markers: true,
    },
  })

  // arrêt sur le screen 3
  .to(".screens", {
    x: "-14.28%",
    ease: "sine.inOut",
  })

  // parallax
  .to(".screen-3-background", {
    x: "-3vw",
    ease: "quad.inOut",
  })

  .to(".screen-3-trees", {
    x: "-8vw",
    ease: "quad.inOut",
  })

  .to(".screen-3-sabre", {
    x: "5vw",
    ease: "quad.inOut",
  })

  // retour scroll horizontal
  .to(".screens", {
    x: "-92.8571%",
    ease: "sine.inOut",
  });
