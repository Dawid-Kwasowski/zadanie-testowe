import { makeProgress } from "./loader.js"
import {playSong, volume} from "./player.js"

addEventListener('DOMContentLoaded', ()=> {
   makeProgress()
})

const playBtn = document.querySelector('.player__icon--play-pause')
const volumeBtn = document.querySelector('.player__icon--volume')
playBtn.addEventListener('click', () => {
   playSong(playBtn)
})
volumeBtn.addEventListener('click', () => {
   volume(volumeBtn)
})