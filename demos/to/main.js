import gsap from "gsap"

const btn = document.getElementById("btn-to")
const box = document.getElementById("box-to")

if (btn && box) {
    btn.addEventListener("click", () => {
        gsap.to(box, {
            x: 200,
            rotation: 20,
            duration: 0.8,
            ease: "power2.out",
            yoyo: true,
            repeat: 1,
        })
    })
}
