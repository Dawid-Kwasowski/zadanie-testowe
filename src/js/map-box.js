import { carrousel, onCloseGallery } from "./carousel.js"
export class Maps {
   constructor() {
      // initial data 
      this.maps = [
         {isActive: false, date: '1921'},
         {isActive: true, date: '1926'},
         {isActive: false, date: '1929'},
      ]
      // container for maps
      this.mapsContainerEl = document.querySelector('.maps-container')

      this.mapsTemp = document.querySelector('.maps-temp')
      this.zoomedMapTemp = document.querySelector('.zoomed-map-temp')
      // template clone with children = att true 
      this.boxTemp = this.mapsTemp.content.cloneNode(true)
      this.zoomedBoxTemp = this.zoomedMapTemp.content.cloneNode(true)
      this.boxes = this.boxTemp.querySelectorAll('.map-box')
      // 
      this.zoomedBox = this.zoomedBoxTemp.querySelector('.zoomed-map')
      // 
      this.headerEl = document.querySelector('.top-panel__date')
      this.headerTitleEl = document.querySelector('.header__title')
      this.exitBtn = document.querySelector('.top-panel__exit-btn')
   }
   // Methods
   createBoxes() {
      // loop which are checking initial active state if statement returns true then add active modifier
      this.boxes.forEach((box,index) => {
         if(this.maps[index].isActive) {
            box.classList.add('map-box--active')
         }
         box.querySelector('.map-box__date-year').textContent = this.maps[index].date
         box.addEventListener('mouseenter', () =>  this.swithActivity(this.boxes,box))
         box.addEventListener('click', () => this.onOpenMap(this.maps[index]))
      })
      this.mapsContainerEl.append(this.boxTemp)
   }
   // remove modifier except hovered element
   swithActivity(boxes, box) {
     boxes.forEach(box => {
        box.classList.remove('map-box--active')
     })
     box.classList.add('map-box--active')
   }

   onOpenMap(mapData) {
      // update title at top panel
      this.headerTitleEl.style.fontSize = "1.1rem"
      this.headerEl.classList.add('top-panel__date--slide-top')
      this.headerEl.innerHTML =  `
         <div class="top-panel__date">
         <div class="top-panel__date-year">ROK</div>
            ${mapData.date}
         </div>
      `
      // display X btn
      this.exitBtn.classList.add('top-panel__exit-btn--active')

      this.boxes.forEach(box => {
         box.classList.add('map-box--shrinked')
      })
      setTimeout(() => {
         // clear previous template then add new one 
         this.mapsContainerEl.innerHTML = ""
         this.mapsContainerEl.append(this.zoomedBoxTemp)
         // carrousel plugin
         let dots = this.mapsContainerEl.querySelectorAll('.dot')
         const gallery = this.mapsContainerEl.querySelector('.gallery')

         dots.forEach(dot => {
            dot.addEventListener('click', () => {
               gallery.classList.add('gallery--active')
               carrousel(gallery)
            })
         })
         
      },1000)
      setTimeout(() => {
         this.zoomedBox.classList.add('zoomed-map--active')
      },1000)
   }

   onCloseMap() {
      this.mapsContainerEl.innerHTML = ""
      this.exitBtn.classList.remove('top-panel__exit-btn--active')
      this.headerTitleEl.style.fontSize = "2rem"
      this.headerEl.innerHTML = `<div class="top-panel__date"></div>`
   }
}
