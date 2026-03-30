gsap.fromTo(['.nl',".nb",".nr button"],{
    y:-100,
},{
    y:0,
     duration: 0.3,
    stagger: 0.6,
    ease: "power1.out",
})

gsap.fromTo([".hero-t",".hero-b"],{
    y:200,
    opacity:0,
     
},{
    y:0,
    opacity:10,
   
    delay:2,
    duration: 0.3,
    stagger: 0.6,
    ease: "power1.out"
})