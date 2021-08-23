let isPlaying = true
let isMuted = false
const audio = document.querySelector('.player__audio')
const playSong = (hook) => {
   if(isPlaying) {
     hook.src = '../src/images/pause-fill.svg'
     audio.play()
     setInterval(tracker,500)
   }
   else {
      hook.src = '../src/images/play-fill.svg'
      audio.pause()
      
   }
   isPlaying = !isPlaying 
}

const volume = (hook) => {
   if(isMuted) {
      hook.src = '../src/images/volume-up-fill.svg'
      audio.muted = false
   }
   else {
      hook.src = '../src/images/volume-mute-fill.svg'
      audio.muted = true
   }
   isMuted = !isMuted
}

const tracker = () => {
   const progressBar = document.querySelector('.player__tracker-fill')
   // value max = audio duration
   progressBar.attributes[4].value = audio.duration
   // current value = current time
   progressBar.attributes[2].value = `${audio.currentTime}`
   // width of the bar 
   const convertedTime = Math.round(audio.currentTime)
   progressBar.style.width = `${convertedTime / 2}%`
}

export {playSong, volume}