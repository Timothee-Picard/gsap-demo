import gsap from "gsap"

const btnStagger = document.getElementById("btn-stagger")
const items = document.querySelectorAll(".stagger-group .box")

if (btnStagger && items.length > 0) {
    btnStagger.addEventListener("click", () => {
        gsap.from(items, {
            y: 40,
            opacity: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "power2.out",
        })
    })
}
