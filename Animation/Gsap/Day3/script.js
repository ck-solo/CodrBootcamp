// ***************************************************
// first animation small and inside big
// window.addEventListener("mousemove",(e)=>{
//     gsap.to(".cursor",{
//         x:e.clientX,
//         y:e.clientY,
//         ease: "elastic.inout",
//         duration
//     })
// })

  // *******************************************************************
  // second animation ke liye stagger use hoga jiska kaam do same class hogi
window.addEventListener("mousemove",(e)=>{
    gsap.to(".inner",{
        x:e.clientX,
        y:e.clientY,
        ease: "elastic.inout",
        duration:0.5,
        stagger:0.1,
    })
})

// *******************************************************************

const containers = document.querySelectorAll(   ".imagecontainer");

containers.forEach((item) => {
  item.addEventListener("mouseenter", () => {
      gsap.to(item,{
        flexGrow: 3,
      })
    let text = item.querySelector(".text")
    gsap.to(text, {      
      scale: 1.5,     
      opacity: 1,
      duration: 0.5,
      fontSize:"100px"
    }); 
  });
});
containers.forEach((item) => {
  item.addEventListener("mouseleave", () => {
      gsap.to(item,{
        flexGrow: 1,
      })
      gsap.to(".text", {      
      scale: 1,     
      opacity: 1,
      duration: 0.5,
      fontSize:"40px"
    }); 
  });
});
