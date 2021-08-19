export class Loader {
      // methods
      slideTo(direction) {
            const slideEl = document.querySelector(`.slide-${direction}`)
            slideEl.classList.add(`slide-${direction}--hide`)
            // console.log(`${direction} has new CSS class`)
            // remove unnecessary element
            return setTimeout(() => {
                  slideEl.parentNode.removeChild(slideEl)
            },500)
      }
      // symulation of loader / progress bar
      makeProgress() {
            const loaderFillEl = document.querySelector('.loader__fill')
            // downloading max value from progress's attribute and assignnig this to width element 
            loaderFillEl.style.width = loaderFillEl.getAttribute('aria-valuenow') + '%'
            // then CSS transition in _intro.scss -> .loader -> &__fill make progressing effect 
            return setTimeout(() => {
            // calling function to add hidding CSS classes after 2 seconds + 100ms
            this.slideTo('top')
            this.slideTo('bottom')
            },2100)
      }
}