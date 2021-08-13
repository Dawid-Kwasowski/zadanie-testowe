
export const makeProgress = () => {
      // symulation of loader / progress bar
      const loaderFill = document.querySelector('.loader__fill')
      loaderFill.style.width = loaderFill.getAttribute('aria-valuenow') + '%'
      return setTimeout(() => {
         // here it will be a functions SlideTop, SlideBottom .  new function name in progress 
      },2000)
}