import gsap from "gsap"

const box = document.getElementById("box-tl-controls")
const btnPlay = document.getElementById("tl-play")
const btnPause = document.getElementById("tl-pause")
const btnReverse = document.getElementById("tl-reverse")
const btnRestart = document.getElementById("tl-restart")

if (box) {
    // Timeline pause par défaut (contrôle manuel)
    const tl = gsap.timeline({ paused: true })

    // Animation en 4 étapes
    tl.to(box, { x: 120, duration: 0.6, ease: "power2.out" })
        .to(box, { y: -60, duration: 0.6, ease: "power2.out" })
        .to(box, { rotation: 180, duration: 0.6, ease: "power2.out" })
        .to(box, { scale: 1.3, duration: 0.4, ease: "back.out(1.7)" })

    // Boutons
    btnPlay?.addEventListener("click", () => tl.play())
    btnPause?.addEventListener("click", () => tl.pause())
    btnReverse?.addEventListener("click", () => tl.reverse())
    btnRestart?.addEventListener("click", () => tl.restart())
}
