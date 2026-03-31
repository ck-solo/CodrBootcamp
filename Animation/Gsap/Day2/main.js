function $(id){
    return document.getElementById(id)
}

const play = $("play")
const pause = $("pause")
const restart = $("restart")
const reverse = $("reverse")
const seek = $("seek")
const speed = $("speed")
const slow = $("slow")

const tl = gsap.timeline({repeat :-1, yoyo:true})

tl.to(".box1",{
    x:1200,
    duration:1,
    repeat: -1,
    yoyo:true,
    backgroundColor:"aqua",
    borderRadius: "100px"
}).to(".box2",{
    x:1200,
    repeat: -1,
    duration:1,

    yoyo:true,
    backgroundColor:"brown",
    borderRadius: "100px"
}).to(".box3",{
    x:1200,
    duration:1,
    repeat: -1,
    yoyo:true,
    backgroundColor:"cyan",
    borderRadius: "100px"
}).to(".box4",{
    x:1200,
    duration:1,
    repeat: -1,
    yoyo:true,
    backgroundColor:"neon",
    borderRadius: "100px"
})


play.addEventListener("click",()=>{
    tl.play()
})
pause.addEventListener("click",()=>{
    tl.pause()
})
reverse.addEventListener("click",()=>{
    tl.reverse()
})
restart.addEventListener("click",()=>{
    tl.restart()
})
seek.addEventListener("click",()=>{
    tl.seek()
})
slow.addEventListener("click",()=>{
    tl.timeScale(0.5)
})
speed.addEventListener("click",()=>{
    tl.timeScale(2)
})