import { Loader } from "./loader.js"
import {playSong, volume} from "./player.js"
import {Maps} from "./map-box.js"
import { onCloseGallery } from "./carousel.js"
const playBtn = document.querySelector('.player__icon--play-pause')
const volumeBtn = document.querySelector('.player__icon--volume')
const exitBtn = document.querySelector('.top-panel__exit-btn')
const maps = new Maps
const loader = new Loader
addEventListener('DOMContentLoaded', () => {
   loader.makeProgress()
   setTimeout(() => {
      maps.createBoxes()
   },2100)
})
// event listners
playBtn.addEventListener('click', () => playSong(playBtn))
volumeBtn.addEventListener('click', () => volume(volumeBtn))
exitBtn.addEventListener('click', () => {
   if(document.querySelector('.gallery--active')) {
      onCloseGallery(document.querySelector('.gallery--active'))
   }
   else {
      const newMap = new Maps()
      maps.onCloseMap()
      newMap.createBoxes()
   }
})
   