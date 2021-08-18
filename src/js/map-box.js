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
      // template clone with children = att true 
      this.cloneTemp = this.mapsTemp.content.cloneNode(true)
      this.boxes = this.cloneTemp.querySelectorAll('.map-box')
   }

   createBoxes() {
      // loop which are checking initial active state if statement returns true then add active modifier
      this.boxes.forEach((box,index) => {
         if(this.maps[index].isActive) {
            box.classList.add('map-box--active')
         }
         box.querySelector('.map-box__date-year').textContent = this.maps[index].date
         box.addEventListener('mouseenter', () => this.swithActivity(this.boxes,box))
      })
      this.mapsContainerEl.append(this.cloneTemp)
   }
   // remove modifier except hovered element
   swithActivity(boxes, box) {
     boxes.forEach(box => {
        box.classList.remove('map-box--active')
     })
     box.classList.add('map-box--active')
   }
}
