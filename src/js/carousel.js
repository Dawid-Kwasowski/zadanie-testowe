export const carrousel = gallery => $(gallery).slick({
   slidesToShow: 3,
   autoplay: true,
   autoplaySpeed: 2000,
   arrows: false,
   centerMode: true,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
   ]
})

export const onCloseGallery = gallery => $(gallery).toggleClass('gallery--active')