import gsap from "gsap"

const btn = document.getElementById("btn-multi")
const box = document.getElementById("box-multi")

if (btn && box) {
    btn.addEventListener("click", () => {
        gsap.to(box, {
            rotation: 360,
            scale: 1.4,
            backgroundColor: "#ff6b6b",
            opacity: 0.7,
            duration: 1,
            ease: "power2.out",
            yoyo: true,
            repeat: 1,
        })
    })
}
