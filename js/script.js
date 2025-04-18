let page1Content = document.querySelector("#page1");
let cursor = document.querySelector("#cursor");


// LENIS SCROLL
const lenis = new Lenis();
lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


function cursorEffect() {
    
page1Content.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    x: dets.x,
    y: dets.y,
  });
});

page1Content.addEventListener("mouseenter", function () {
  gsap.to("#cursor", {
    scale: 1,
  });
});

page1Content.addEventListener("mouseleave", function () {
  gsap.to("#cursor", {
    scale: 0,
  });
});

}
cursorEffect();

function time() {
  var a = 0;
  setInterval(function () {
     
    a = a + Math.floor(Math.random() * 15);
    if (a < 100) {
      document.querySelector("#loader h1").innerHTML = a+" %";
    }
    else {
      a = 100;
      document.querySelector("#loader h1").innerHTML = a+" %";
    }

  }, 150)
}



let tl = gsap.timeline();

tl.to("#loader h1", {
  delay: 0.5,
  duration: 1,
  onStart : time()
})

tl.to("#loader", {
  top: "-100vh",
  duration: 1.5,
  delay: 1,
});


tl.from("span", {
    y: 100,
    opacity: 0,
     delay:0.4,
    stagger: 0.3
});

// gsap.registerPlugin(ScrollTrigger);

tl.to("#page2 h2", {
  delay: 0.1,
  transform: "translateX(-350%)",
  duration: 6,

  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    // markers: true,
    start: "top -20%",
    end: "bottom -200%",
    scrub: 3,
    pin: true,

  },
});




tl.to("#page3 .zoom-out h3", {
  scale: 400,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    // markers: true,
    start: "top -30%",
    end: "bottom -150%",
    scrub: 5,
    pin: true
   }
});


tl.from("#page4 h1", {
  y: 50,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    start: "top 0%",
    end: "top 50%",
    // markers: true,
    scrub: 1
  }
})


tl.to("#page5 .card", {
  opacity: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page5",
    scroller: "body",
    pin: true,
    start: "top 10%",
    end: "top -150%",
    markers: true,
    scrub: true
  }
})

tl.to("#page5 .card2", {
   y: -400
})

tl.to("#page5 .card3", {
  y: -800,
});