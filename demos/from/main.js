import gsap from "gsap"

const btn = document.getElementById("btn-from")
const box = document.getElementById("box-from")

if (btn && box) {
    btn.addEventListener("click", () => {
        gsap.from(box, {
            x: -200,
            opacity: 0,
            scale: 0.5,
            duration: 0.8,
            ease: "power2.out",
        })
    })
}
