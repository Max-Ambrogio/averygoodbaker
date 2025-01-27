document.addEventListener('DOMContentLoaded', () => {

    gsap.from('.header' , {
        opacity: 0,
        y:50,
        ease: 'power3.out',
        duration:3,
        autoAlpha: 0,
        delay: 0,
    })

    gsap.from('.shop-all-btn' , {
        opacity: 0,
        y:50,
        ease: 'power3.out',
        duration:3,
        autoAlpha: 0,
        delay: 0.5,
    })
    gsap.from('.menu-items-container' , {
        opacity: 0,
        y:50,
        ease: 'power3.out',
        duration:3,
        autoAlpha: 0,
        delay: 0.5,
    })


gsap.from('.menu-items-container .card',{
    delay:0.5,
    opacity:0,
    scrollTrigger: ".menu-items-container",
    y:-50,
    ease: 'power3.out',
    duration:1.5,
    stagger:.5,
})
gsap.from('.how-to-order .icon-column',{
    delay:0.5,
    opacity:0,
    scrollTrigger: ".how-to-order",
    y:-20,
    ease: 'power3.out',
    duration:1.5,
    stagger:.5,
})
gsap.from('.about-copy p',{
    delay:0.5,
    opacity:0,
    scrollTrigger: ".about-container",
    y:-20,
    ease: 'power3.out',
    duration:1.5,
    stagger:.5,
})


// Disable scrolling.
document.ontouchmove = function (e) {
    e.preventDefault();
  }
  
  // Enable scrolling.
  document.ontouchmove = function (e) {
    return true;
  }

});