import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".screens", {
  scrollTrigger: {
    trigger: ".scroll-horizontal",
    start: "top top",
    end: "+=1400%",
    pin: true,
    scrub: true,
    markers: true,
  },
  x: "-92.8571%",
  ease: "sine.inOut",
});

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".mountain-in",
//       start: "top top",
//       end: "+=1000", // longueur du scroll
//       scrub: true,
//       pin: true, // bloque la section pendant l'anim
//     },
//   })
//   .to(".top", { y: "-100%", ease: "none" }, 0)
//   .to(".bottom", { y: "100%", ease: "none" }, 0)
//   .to(
//     ".mountain-in-case",
//     {
//       width: 793,
//       height: 557,
//       ease: "none",
//     },
//     0
//   );
