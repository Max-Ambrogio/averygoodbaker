
// // create the smooth scroller FIRST!

window.onload = function () {
    var element = document.getElementById('video');
    element.muted = "muted";
}

if (document.body.classList.contains('page-home')) {

    const videoOne = document.querySelector('#webdev video')
    const videoTwo = document.querySelector('#ct')
    const videoThree = document.querySelector('#renders')
    const videoFour = document.querySelector('#video-p')
        
    var homeRenders = gsap.timeline({paused: true, duration: 24});

    window.addEventListener('scroll', e => {
        // console.log(window.scrollY, document.body.scrollHeight)

        homeRenders.progress(window.scrollY / document.body.scrollHeight)
    })

    let timelineStartPad = 1;

    // var hoverAnimation = new hoverEffect({
    //     parent: document.querySelector(".screen-one"),
    //     intensity: 0.2,
    //     // angle2: Math.PI / 2,
    //     image1:'dist/img/profile-one.jpg',
    //     image2:'dist/img/hero-max.png',
    //     displacementImage: './dist/img/displacement-one.jpg',
    // });

    var hoverAnimation2 = new hoverEffect({
        parent: document.querySelector(".screen-two"),
        intensity: 0.2,
        angle2: Math.PI / 4,
        image1:'dist/img/profile-4.png',
        image2:'dist/img/profile-three.jpg',
        displacementImage: './dist/img/heightMap.png',
    });


    // videoOne.onloadeddata = function() {
    //     homeRenders.to(videoOne, {
    //         duration: 4,
    //         currentTime:2,
    //         ease: Quad.easeOut,
    //         overwrite: true, 
    //         pause: true
    //     }, 2 + timelineStartPad)
    // }

    // videoTwo.onloadeddata = function() {
    //     homeRenders.to(videoTwo, {
    //         duration: 4,
    //         currentTime: 2,
    //         ease: Quad.easeOut,
    //         overwrite: true, 
    //         pause: true
    //     }, 8 + timelineStartPad)
    // }

    // videoThree.onloadeddata = function() {
    //     homeRenders.to(videoThree, {
    //         duration: 10,
    //         currentTime: 2,
    //         ease: Quad.easeOut,
    //         overwrite: true, 
    //         pause: true
    //     }, 12 + timelineStartPad)
    // }

    // videoFour.onloadeddata = function() {
    //     homeRenders.to(videoFour, {
    //         duration: 8,
    //         currentTime: 2,
    //         ease: Quad.easeOut,
    //         overwrite: true, 
    //         pause: true
    //     }, 16 + timelineStartPad)
    // }  

    gsap.from('.hero h1' , {
        opacity: 0,
        y:-50,
        ease: 'power3.out',
        duration:3,
        autoAlpha: 0,
        delay: 0,
    })
    gsap.from('.hero h2' , {
        opacity: 0,
        autoAlpha: 0,
        y:-40,
        ease: 'power3.out',
        duration:2,
        delay: 0.5,
    })
    gsap.from('.hero .accent-one' , {
        opacity: 0,
        autoAlpha: 0,
        x:80,
        ease: 'power3.out',
        duration:2,
        delay: 0.5,
    })
    gsap.from('.hero .accent-two' , {
        opacity: 0,
        autoAlpha: 0,
        y:-60,
        ease: 'power3.out',
        duration:2,
        delay: 1,
    })
    gsap.from('.hero .screen-one' , {
        opacity: 0,
        autoAlpha: 0,
        x:-60,
        ease: 'power3.out',
        duration:2,
        delay: 0.1,
    })
    gsap.from('.hero .screen-two' , {
        opacity: 0,
        x:60,
        autoAlpha: 0,
        ease: 'power3.out',
        duration:2,
        delay: 0.1,
    })

    gsap.to('.scramble',{
        duration:2,
        autoAlpha: 0,
        scrambleText:{
            delimiter:"",
            revealDelay:0.9,
            chars:"01",
            speed:0.1,
            // tweenLength: true,
            text: "{original}",
        }
    })
    gsap.to('.scramble-two',{
        // delay:1,
        duration:4,
        autoAlpha: 0,
        scrambleText:{
            chars:"01",
            revealDelay:0.7,
            speed:1,
            tweenLength: false,
            text: "{original}",
        }
    })
    gsap.to('.scarmble-three',{
        // delay:1,
        duration:6,
        // autoAlpha: 0,
        scrambleText:{
            chars:"01",
            revealDelay:0.9,
            speed:1,
            tweenLength: false,
            text: "{original}",
        }
    })
    gsap.to('.scramble-four',{
        // delay:1,
        duration:12,
        // autoAlpha: 0,
        scrambleText:{
            chars:"01",
            revealDelay:0.7,
            speed:1,
            tweenLength: false,
            text: "{original}",
        }
    })
    gsap.from('.about p',{
        delay:0.5,
        autoAlpha: 0,
        opacity:0,
        scrollTrigger: ".about",
        y:-50,
        ease: 'power3.out',
        duration:3,
        stagger:1,
    })
}
gsap.from('.about-pages h1',{
    // delay:1,
    opacity:0,
    scrollTrigger: ".about-pages",
    y:-50,
    ease: 'power3.out',
    duration:3,
    stagger:2,
})
gsap.from('.about-pages p',{
    delay:0.5,
    opacity:0,
    scrollTrigger: ".about-pages",
    y:-50,
    ease: 'power3.out',
    duration:1.5,
    stagger:2,
})

if (document.body.classList.contains('page-webdev')){

    const juveOne = gsap.timeline({
        scrollTrigger:{
            trigger:'.juventus',
            start: "top 90%",
            end:"bottom 60%",
            scrub: true,
            // markers: true,
        },
    });
    const juveTwo = gsap.timeline({
        scrollTrigger:{
            trigger:'.juventus',
            start: "top 90%",
            end:"bottom 90%",
            scrub: true,
            // markers: true,
        },
    });
    juveOne.to(".juve-one ",{
        y:50,
        rotation: 0,
        ease:"power3.out",
    })
    juveOne.to(".juve-one",{
        y:-60,
        rotation: 3,
        ease:"power3.out",
    })
    juveTwo.to(".juve-two ",{
        x:0,
        y:200,
        rotation: 0,
        ease:"power3.out",
    })
    juveTwo.to(".juve-two",{
        x:-10,
        y:-60,
        rotation: -3,
        ease:"power3.out",
    })
    const trulyOne = gsap.timeline({
        scrollTrigger:{
            trigger:'.truly',
            start: "top 90%",
            end:"bottom 60%",
            scrub: true,
            // markers: true,
        },
    });
    const trulyTwo = gsap.timeline({
        scrollTrigger:{
            trigger:'.truly',
            start: "top 90%",
            end:"bottom 90%",
            scrub: true,
            // markers: true,
        },
    });
    trulyOne.to(".truly-one ",{
        y:50,
        rotation: 0,
        ease:"power3.out",
    })
    trulyOne.to(".truly-one",{
        y:-60,
        rotation: 3,
        ease:"power3.out",
    })
    trulyTwo.to(".truly-two ",{
        x:0,
        y:100,
        rotation: 0,
        ease:"power3.out",
    })
    trulyTwo.to(".truly-two",{
        x:-10,
        y:-60,
        rotation: -3,
        ease:"power3.out",
    })
    const gProOne = gsap.timeline({
        scrollTrigger:{
            trigger:'.g-pro',
            start: "top 90%",
            end:"bottom 60%",
            scrub: true,
            // markers: true,
        },
    });
    const gProTwo = gsap.timeline({
        scrollTrigger:{
            trigger:'.g-pro',
            start: "top 90%",
            end:"bottom 90%",
            scrub: true,
            // markers: true,
        },
    });
    gProOne.to(".gpro-one ",{
        y:50,
        rotation: 0,
        ease:"power3.out",
    })
    gProOne.to(".gpro-one",{
        y:-60,
        rotation: 3,
        ease:"power3.out",
    })
    gProTwo.to(".gpro-two ",{
        x:0,
        y:100,
        rotation: 0,
        ease:"power3.out",
    })
    gProTwo.to(".gpro-two",{
        x:-10,
        y:-60,
        rotation: -3,
        ease:"power3.out",
    })
    
    const kid = gsap.timeline({
        scrollTrigger:{
            trigger:'.kid',
            start: "top 90%",
            end:"bottom 60%",
            scrub: true,
            // markers: true,
        },
    });
    
    kid.to(".k_d-one",{
        y:50,
        rotation: 0,
        ease:"power3.out",
    })
    
    const pokeOne = gsap.timeline({
        scrollTrigger:{
            trigger:'.pokebowl',
            start: "top 90%",
            end:"bottom 60%",
            scrub: true,
            // markers: true,
        },
    });
    const pokeTwo = gsap.timeline({
        scrollTrigger:{
            trigger:'.pokebowl',
            start: "top 90%",
            end:"bottom 90%",
            scrub: true,
            // markers: true,
        },
    });
    pokeOne.to(".poke-one ",{
        y:50,
        rotation: 0,
        ease:"power3.out",
    })
    pokeOne.to(".poke-one",{
        y:-60,
        rotation: 3,
        ease:"power3.out",
    })
    pokeTwo.to(".poke-two ",{
        x:0,
        y:100,
        rotation: 0,
        ease:"power3.out",
    })
    pokeTwo.to(".poke-two",{
        x:-10,
        y:-60,
        rotation: -3,
        ease:"power3.out",
    })
    const triviaOne = gsap.timeline({
        scrollTrigger:{
            trigger:'.trivia',
            start: "top 90%",
            end:"bottom 60%",
            scrub: true,
            // markers: true,
        },
    });
    const triviaTwo = gsap.timeline({
        scrollTrigger:{
            trigger:'.trivia',
            start: "top 90%",
            end:"bottom 90%",
            scrub: true,
            // markers: true,
        },
    });
    triviaOne.to(".trivia-one ",{
        y:50,
        rotation: 0,
        ease:"power3.out",
    })
    triviaOne.to(".trivia-one",{
        y:-60,
        rotation: 3,
        ease:"power3.out",
    })
    triviaTwo.to(".trivia-two ",{
        x:0,
        y:100,
        rotation: 0,
        ease:"power3.out",
    })
    triviaTwo.to(".trivia-two",{
        x:-10,
        y:-60,
        rotation: -3,
        ease:"power3.out",
    })
    const assassinsOne = gsap.timeline({
        scrollTrigger:{
            trigger:'.assassins',
            start: "top 90%",
            end:"bottom 60%",
            scrub: true,
            // markers: true,
        },
    });
    const assassinsTwo = gsap.timeline({
        scrollTrigger:{
            trigger:'.assassins',
            start: "top 90%",
            end:"bottom 90%",
            scrub: true,
            // markers: true,
        },
    });
    assassinsOne.to(".assassins-one ",{
        y:50,
        rotation: 0,
        ease:"power3.out",
    })
    assassinsOne.to(".assassins-one",{
        y:-60,
        rotation: 3,
        ease:"power3.out",
    })
    assassinsTwo.to(".assassins-two ",{
        x:0,
        y:100,
        rotation: 0,
        ease:"power3.out",
    })
    assassinsTwo.to(".assassins-two",{
        x:-10,
        y:-60,
        rotation: -3,
        ease:"power3.out",
    })
    
    // const oleaOne = gsap.timeline({
    //     scrollTrigger:{
    //         trigger:'.olea-shop',
    //         start: "top 90%",
    //         end:"bottom 60%",
    //         scrub: true,
    //         // markers: true,
    //     },
    // });
    // const oleaTwo = gsap.timeline({
    //     scrollTrigger:{
    //         trigger:'.olea-shop',
    //         start: "top 90%",
    //         end:"bottom 90%",
    //         scrub: true,
    //         // markers: true,
    //     },
    // });
    // oleaOne.to(".olea-one ",{
    //     y:50,
    //     rotation: 0,
    //     ease:"power3.out",
    // })
    // oleaOne.to(".olea-one",{
    //     y:-60,
    //     rotation: 3,
    //     ease:"power3.out",
    // })
    // oleaTwo.to(".olea-two ",{
    //     x:0,
    //     y:100,
    //     rotation: 0,
    //     ease:"power3.out",
    // })
    // oleaTwo.to(".olea-two",{
    //     x:-10,
    //     y:-60,
    //     rotation: -3,
    //     ease:"power3.out",
    // })
    
    // const pallasOne = gsap.timeline({
    //     scrollTrigger:{
    //         trigger:'.pallas-wf',
    //         start: "top 90%",
    //         end:"bottom 60%",
    //         scrub: true,
    //         // markers: true,
    //     },
    // });
    // const pallasTwo = gsap.timeline({
    //     scrollTrigger:{
    //         trigger:'.pallas-wf',
    //         start: "top 90%",
    //         end:"bottom 90%",
    //         scrub: true,
    //         // markers: true,
    //     },
    // });
    // pallasOne.to(".pallas-one ",{
    //     y:50,
    //     rotation: 0,
    //     ease:"power3.out",
    // })
    // pallasOne.to(".pallas-one",{
    //     y:-60,
    //     rotation: 3,
    //     ease:"power3.out",
    // })
    // pallasTwo.to(".pallas-two ",{
    //     x:0,
    //     y:100,
    //     rotation: 0,
    //     ease:"power3.out",
    // })
    // pallasTwo.to(".pallas-two",{
    //     x:-10,
    //     y:-60,
    //     rotation: -3,
    //     ease:"power3.out",
    // })
    
    
    // gsap.from('.works .work .juventus h2' , {
    //     scrollTrigger:{
    //         trigger:'.juventus',
    //         start: "top 40%",
    //         // markers: true,
    //     },
    //     opacity:0,
    //     y: -50,
    //     stagger:0.5,
    //     ease: 'power3.out',
    //     duration:1,
    // })
    // gsap.from('.works .work .juventus p' , {
    //     scrollTrigger:{
    //         trigger:'.juventus',
    //         start: "top 40%",
    //         // markers: true,
    //     },
    //     opacity:0,
    //     y: -50,
    //     stagger:0.5,
    //     ease: 'power3.out',
    //     duration:1,
    //     delay:.5,
    // })
    // gsap.from('.works .work .juventus a' , {
    //     scrollTrigger:{
    //         trigger:'.juventus',
    //         start: "top 40%",
    //         // markers: true,
    //     },
    //     opacity:0,
    //     y: -50,
    //     stagger:0.5,
    //     ease: 'power3.out',
    //     duration:1,
    //     delay:.8,
    // })
    // gsap.from('.works .work .truly h2' , {
    //     scrollTrigger:{
    //         trigger:'.truly',
    //         start: "top 40%",
    //         // markers: true,
    //     },
    //     opacity:0,
    //     y: -50,
    //     stagger:0.5,
    //     ease: 'power3.out',
    //     duration:1,
    // })
    // gsap.from('.works .work .truly p' , {
    //     scrollTrigger:{
    //         trigger:'.truly',
    //         start: "top 40%",
    //         // markers: true,
    //     },
    //     opacity:0,
    //     y: -50,
    //     stagger:0.5,
    //     ease: 'power3.out',
    //     duration:1,
    //     delay:.5,
    // })
    // gsap.from('.works .work .truly a' , {
    //     scrollTrigger:{
    //         trigger:'.truly',
    //         start: "top 40%",
    //         // markers: true,
    //     },
    //     opacity:0,
    //     y: -50,
    //     stagger:0.5,
    //     ease: 'power3.out',
    //     duration:1,
    //     delay:.8,
    // })
    // gsap.from('.works .work .g-pro h2' , {
    //     scrollTrigger:{
    //         trigger:'.g-pro',
    //         start: "top 40%",
    //         // markers: true,
    //     },
    //     opacity:0,
    //     y: -50,
    //     stagger:0.5,
    //     ease: 'power3.out',
    //     duration:1,
    // })
    // gsap.from('.works .work .g-pro p' , {
    //     scrollTrigger:{
    //         trigger:'.g-pro',
    //         start: "top 40%",
    //         // markers: true,
    //     },
    //     opacity:0,
    //     y: -50,
    //     stagger:0.5,
    //     ease: 'power3.out',
    //     duration:1,
    //     delay:.5,
    // })
    // gsap.from('.works .work .g-pro a' , {
    //     scrollTrigger:{
    //         trigger:'.g-pro',
    //         start: "top 40%",
    //         // markers: true,
    //     },
    //     opacity:0,
    //     y: -50,
    //     stagger:0.5,
    //     ease: 'power3.out',
    //     duration:1,
    //     delay:.8,
    // })
    // gsap.from('.social a' , {
    //     scrollTrigger:{
    //         trigger:'footer',
    //         start: "-40% 80%",
    //         end:'-20%',
    //         markers: true,
    //     },
    //     // opacity:0,
    //     y: -50,
    //     stagger:0.2,
    //     ease: 'power3',
    //     duration:.5,
    //     // delay:.8,
    // })
}

if (document.body.classList.contains('page-video')){
    gsap.from('.bp-media div' , {
        scrollTrigger:{
            trigger:'bear-paw',
            start: "-10% 80%",
            // markers: true,
        },
        opacity:0,
        y: -50,
        stagger:0.2,
        ease: 'power3',
        duration:1,
        // delay:.8,
    })
    gsap.from('.lockn-media div' , {
        scrollTrigger:{
            trigger:'lockn',
            start: "-10% 80%",
            // markers: true,
        },
        opacity:0,
        y: -50,
        stagger:0.2,
        ease: 'power3',
        duration:1,
        // delay:.8,
    })
    





}

// Get all the cards and the style element
const cards = document.querySelectorAll(".card");
const styleElement = document.querySelector(".hover");

cards.forEach(card => {
  let timeout;
  
  card.addEventListener("mousemove", handleMove);
  card.addEventListener("touchmove", handleMove);
  card.addEventListener("mouseout", handleEnd);
  card.addEventListener("touchend", handleEnd);
  card.addEventListener("touchcancel", handleEnd);

  function handleMove(e) {
    // Normalize touch/mouse
    let pos = [e.offsetX, e.offsetY];
    e.preventDefault();

    if (e.type === "touchmove") {
      pos = [e.touches[0].clientX, e.touches[0].clientY];
    }

    // Math for mouse position
    const cardHeight = card.offsetHeight;
    const cardWidth = card.offsetWidth;
    const l = pos[0];
    const t = pos[1];
    const px = Math.abs(Math.floor(100 / cardWidth * l) - 100);
    const py = Math.abs(Math.floor(100 / cardHeight * t) - 100);
    const pa = (50 - px) + (50 - py);

    // Math for gradient / background positions
    const lp = 50 + (px - 50) / 1.5;
    const tp = 50 + (py - 50) / 1.5;
    const px_spark = 50 + (px - 50) / 7;
    const py_spark = 50 + (py - 50) / 7;
    const p_opc = 20 + (Math.abs(pa) * 1.5);
    const ty = ((tp - 50) / 2) * -1;
    const tx = ((lp - 50) / 1.5) * 0.5;

    // CSS to apply for active card
    const gradPos = `background-position: ${lp}% ${tp}%;`;
    const sprkPos = `background-position: ${px_spark}% ${py_spark}%;`;
    const opacity = `opacity: ${p_opc / 100};`;
    const transform = `transform: rotateX(${ty}deg) rotateY(${tx}deg);`;

    // Set style for pseudo-elements
    const styleContent = `
      .card:hover:before { ${gradPos} }
      .card:hover:after { ${sprkPos} ${opacity} }
    `;

    // Apply styles dynamically
    styleElement.innerHTML = styleContent;
    card.style = transform;
    card.classList.remove("active");
    card.classList.remove("animated");

    if (e.type === "touchmove") {
      return false; // Prevent the default behavior for touchmove
    }

    clearTimeout(timeout);
  }

  function handleEnd() {
    // Remove the styles and add animation after a delay
    card.removeAttribute("style");
    styleElement.innerHTML = "";

    timeout = setTimeout(() => {
      card.classList.add("animated");
    }, 2500);
  }
});






