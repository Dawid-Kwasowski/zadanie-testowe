import { makeProgress } from "./loader.js"
import {playSong, volume} from "./player.js"
import {Maps} from "./map-box.js"

const playBtn = document.querySelector('.player__icon--play-pause')
const volumeBtn = document.querySelector('.player__icon--volume')

addEventListener('DOMContentLoaded', () => {
   makeProgress()
   const maps = new Maps
   maps.createBoxes()
})


playBtn.addEventListener('click', () => {
   playSong(playBtn)
})
volumeBtn.addEventListener('click', () => {
   volume(volumeBtn)
})