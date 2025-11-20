import gsap from "gsap"

const btnSvg = document.getElementById("btn-svg")
const svgPath = document.getElementById("svg-path")

if (btnSvg && svgPath) {
    // Longueur totale du path
    const length = svgPath.getTotalLength()

    // On prépare le trait "caché"
    gsap.set(svgPath, {
        strokeDasharray: length,
        strokeDashoffset: length,
    })

    btnSvg.addEventListener("click", () => {
        // On remet au début à chaque clic
        gsap.set(svgPath, { strokeDashoffset: length })

        // Animation du trait
        gsap.to(svgPath, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.out",
        })
    })
}
