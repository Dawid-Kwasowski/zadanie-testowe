import { Loader } from "./loader.js"
import {playSong, volume} from "./player.js"
import {Maps} from "./map-box.js"

const playBtn = document.querySelector('.player__icon--play-pause')
const volumeBtn = document.querySelector('.player__icon--volume')
addEventListener('DOMContentLoaded', () => {
   const maps = new Maps
   const loader = new Loader

   loader.makeProgress()
   setTimeout(() => {
      maps.createBoxes()
   },2100)
})


playBtn.addEventListener('click', () => {
   playSong(playBtn)
})
volumeBtn.addEventListener('click', () => {
   volume(volumeBtn)
})