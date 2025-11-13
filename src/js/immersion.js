import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    x: "-8vw",
    ease: "quad.inOut",
  })

  .to(".screen-3-trees", {
    x: "-10vw",
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
