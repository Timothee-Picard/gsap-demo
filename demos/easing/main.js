import gsap from "gsap"
import { CustomEase } from "gsap/CustomEase"
import { CustomBounce } from "gsap/CustomBounce"
import { CustomWiggle } from "gsap/CustomWiggle"
import { RoughEase } from "gsap/EasePack"
import { SlowMo } from "gsap/EasePack"
import { ExpoScaleEase } from "gsap/EasePack"

gsap.registerPlugin(CustomEase, CustomBounce, CustomWiggle, RoughEase, SlowMo, ExpoScaleEase)

const box = document.getElementById("box-easing")
const buttons = document.querySelectorAll(".easing-btn")

// CustomEase
CustomEase.create("myCustomEase", "0.12, 0.42, 0, 1")

// CustomBounce
CustomBounce.create("myBounce", { strength: 0.5 })

// CustomWiggle
CustomWiggle.create("myWiggle", { type: "easeOut", wiggles: 5 })

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const easeName = btn.dataset.ease

        let easeValue = easeName

        // Gestion des eases custom (boutons dédiés)
        if (easeName === "custom") easeValue = "myCustomEase"
        if (easeName === "customBounce") easeValue = "myBounce"
        if (easeName === "customWiggle") easeValue = "myWiggle"

        gsap.to(box, {
            x: 200,
            rotation: 20,
            duration: 1.4,
            ease: easeValue,
            yoyo: true,
            repeat: 1,
        })
    })
})
