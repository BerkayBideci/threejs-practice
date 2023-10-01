import { proxy } from "valtio"

const state = proxy({
    intro: true,
    color: "#3DB7C8",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./decal.png",
    fullDecal: "./texture.jpg",
})

export default state