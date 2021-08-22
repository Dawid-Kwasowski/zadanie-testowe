let isPlaying = false
let isMuted = false

const playSong = (hook) => {
   if(isPlaying) {
     hook.src = '../src/images/pause-fill.svg'
   }
   else {
      hook.src = '../src/images/play-fill.svg'
   }
   isPlaying = !isPlaying 
}

const volume = (hook) => {
   if(isMuted) {
      hook.src = '../src/images/volume-up-fill.svg'
   }
   else {
      hook.src = '../src/images/volume-mute-fill.svg'
   }
   isMuted = !isMuted
}


export {playSong, volume}