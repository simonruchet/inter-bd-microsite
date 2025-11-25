// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// //  mountain

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".mountain",
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

// //  scroll horizontal

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".scroll-horizontal",
//       start: "top top",
//       end: "+=1400%",
//       pin: true,
//       scrub: true,
//       markers: true,
//     },
//   })

//   // arrêt sur le screen 3
//   .to(".screens", {
//     x: "-14.28%",
//     ease: "sine.inOut",
//   })

//   //

//   // parallax

//   .to(".screen-3-background", {
//     x: "-3vw",
//     ease: "quad.inOut",
//   })

//   .to(".screen-3-trees", {
//     x: "-8vw",
//     ease: "quad.inOut",
//   })

//   .to(".screen-3-sabre", {
//     x: "5vw",
//     ease: "quad.inOut",
//   })

//   // retour scroll horizontal
//   .to(".screens", {
//     x: "-92.8571%",
//     ease: "sine.inOut",
//   });

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

// Prépare les images de la séquence screen-2
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
    markers: true,
  },
});

// avance vers la screen-2
scrollTimeline.to(".screens", {
  x: "-5%",
  ease: "sine.inOut",
});

// animation sequence screen-2 pendant le scroll horizontal
scrollTimeline.add(function () {
  gsap.to([".screen-2-img-2", ".screen-2-img-3", ".screen-2-img-4"], {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.5,
    ease: "power2.out",
  });
});

// arrêt sur le screen 3
scrollTimeline.to(".screens", {
  x: "-14.286%",
  ease: "sine.inOut",
});

// label pour le parallaxe
scrollTimeline.addLabel("parallax");

// parallax screen-3 (background, trees, sabre) en même temps
scrollTimeline
  .to(
    ".screen-3-background",
    {
      x: "-2vw",
      ease: "quad.inOut",
    },
    "parallax"
  )
  .to(
    ".screen-3-trees",
    {
      x: "-2.5vw",
      ease: "quad.inOut",
    },
    "parallax"
  )
  .to(
    ".screen-3-sabre",
    {
      x: "1vw",
      ease: "quad.inOut",
    },
    "parallax"
  );

// retour scroll horizontal
scrollTimeline.to(".screens", {
  x: "-92.8571%",
  ease: "sine.inOut",
});
