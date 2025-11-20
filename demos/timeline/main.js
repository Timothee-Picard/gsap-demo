import gsap from "gsap"

const btn = document.getElementById("btn-timeline")

const box1 = document.getElementById("tl-box-1")
const box2 = document.getElementById("tl-box-2")
const box3 = document.getElementById("tl-box-3")

if (btn && box1 && box2 && box3) {
    btn.addEventListener("click", () => {
        const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power2.out" } })

        tl.to(box1, { x: 120 })
            .to(box2, { x: 120, backgroundColor: "#ff6b6b" })
            .to(box3, { x: 120, scale: 1.3 })
    })
}
