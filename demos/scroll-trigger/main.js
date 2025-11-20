import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const boxScroll = document.getElementById("box-scroll")

if (boxScroll) {
    gsap.from(boxScroll, {
        x: -200,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: boxScroll,
            markers: true,
            start: "center-=100 center-=50",
            end: "center+=100 center+=50",
            scrub: true,
        },
    })
}
