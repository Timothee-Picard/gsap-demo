import gsap from "gsap"

const btn = document.getElementById("btn-fromto")
const box = document.getElementById("box-fromto")

if (btn && box) {
    btn.addEventListener("click", () => {
        gsap.fromTo(
            box,
            {
                x: -150,
                scale: 0.6,
            },
            {
                x: 150,
                scale: 1,
                duration: 1,
                ease: "power2.out",
                yoyo: true,
                repeat: 1,
            }
        )
    })
}
