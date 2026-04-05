// GSAP Animation setup
const tl = gsap.timeline();

// Prevent flash of unstyled text/animations
gsap.set(".navbar", { visibility: "visible" });
gsap.set(".contentDiv", { visibility: "visible" });

// Loader Elements
const counter = document.querySelector(".loaderCounter h2");

let count = 0;
const interval = setInterval(() => {
  if (count === 100) {
    clearInterval(interval);
    startAnimations(); // Trigger GSAP animations when count hits 100
    return;
  }
  count++;
  counter.textContent = count + "%";
}, 2); // Adjust speed of loader by changing interval time

// Group animations into functions
function startAnimations() {
  // 1) Smoothly vanish the loader layer
  tl.to(".loader", {
    y: "-100%", // Slide it up smoothly out of view
    opacity: 0,
    duration: 1.2,
    ease: "power4.inOut",
  })

    // 2) Image zoom out effect on load
    .add(imageAnimation(), "-=0.2")

    // 3) Navbar items slide down
    .add(navbarAnimation(), "-=2")

    // 4) Main content comes in
    .add(titleAnimation(), "-=1");
}

function imageAnimation() {
  return gsap.fromTo(
    ".imageDiv img",
    { scale: 1.2 },
    { scale: 1, duration: 2.5, ease: "power3.inOut" },
  );
}

function navbarAnimation() {
  const navTl = gsap.timeline();
  navTl
    .from(".navbar .logo, .navbar .menu-btn", {
      y: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    })
    .from(
      ".nav-links a",
      {
        y: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.8",
    );
  return navTl;
}

function titleAnimation() {
  const titleTl = gsap.timeline();
  titleTl
    .from(".title h1", {
      y: 120,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    })
    .from(
      ".subtitle h3",
      {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.8",
    )
    .from(
      ".cta .btn",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=0.6",
    );
  return titleTl;
}

// ScrollTrigger setup for Page 2
gsap.registerPlugin(ScrollTrigger);

const page2Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "top 40%", // Animation starts when the top of page2 hits 60% down the viewport
    end: "top 20%",
    markers: true,
    pin:false,
    scrub: 2,
    // toggleActions: "play none none reverse"
  },
});

page2Tl
  .from(".h-one h2", {
    y: 150
  })
  .from(".h-two h2", {
    y: 150
  });


  const tl3 = gsap.timeline({
    scrollTrigger: {
    trigger: ".page3",  
    start: "top 0%",
    end: "top -300%",
    markers: true,
    toggleActions:"play none none reverse",
    pin:true,
    
    }
})

tl3.to(".page3 .horizontalDiv", {
    x: "-300%",
    
})