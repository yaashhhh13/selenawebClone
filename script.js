function locojspen(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locojspen()







gsap.to("#page1",{
    scrollTrigger:{
        trigger: "#page1",
        scroller: "#main",
        start: "top top",
        end: "top -250%",
        // markers: true,
        pin: true
    }
})

gsap.to("#page1>img",{
    scale: ".32",
    transform: "translate(-50%,-50%)",
    top: "37%",
    left: "69%",
    width: "70%",
    borderRadius: "50%",
    scrollTrigger:{
        trigger: "#page1>img",
        scroller: "#main",
        start: "top top",
        // markers: true,
        scrub: 1
    }
})

var tl = gsap.timeline()

tl.from("#smallimg",{
    opacity: 0,
    onStart: function(){
      document.querySelector("#smallimg").style.zIndex = "9999"  
    },
    scrollTrigger:{
        trigger:"#smallimg",
        scroller: "#main",
        start: "top -100%",
        scrub: 1,
        // markers: true
    }
})

tl.from("#page1>h1,#page1-p1,#page1-p2",{
    opacity: 0,
    y: 40,
    scrollTrigger:{
        trigger: "#page1>h1,#page1-p1,#page1-p2",
        scroller: "#main",
        start: "top -130%",
        scrub: 1,
        // markers: true
    }
})

var tl2 = gsap.timeline()


gsap.to("#page2",{
    scrollTrigger:{
        trigger: "#page2",
        scroller: "#main",
        start: "top top",
        end: "top -250%",
        // markers: true,
        pin: true
    }
})

tl2.to("#page2>img",{
    scale: ".4",
    transform: "translate(-50%,-50%)",
    top: "37%",
    left: "65%",
    width: "65%",
    borderRadius: "50%",
    scrollTrigger:{
        trigger: "#page2>img",
        scroller: "#main",
        start: "top -80%",
        // markers: true,
        scrub: 1
    }
})

tl2.from("#p2smallimg",{
    opacity: 0,
    onStart: function(){
      document.querySelector("#p2smallimg").style.zIndex = "999"  
    },
    scrollTrigger:{
        trigger:"#p2smallimg",
        scroller: "#main",
        start: "top -100%",
        scrub: 1,
        // markers: true
    }
})


tl2.from("#page2>h1,#page2-p1,#page2-p2",{
    opacity: 0,
    y: 40,
    scrollTrigger:{
        trigger: "#page2>h1,#page2-p1,#page2-p2",
        scroller: "#main",
        start: "top -100%",
        scrub: 1,
    }
})

var tl3 = gsap.timeline()

gsap.to("#page3",{
    scrollTrigger:{
        trigger: "#page3",
        scroller: "#main",
        start: "top top",
        end: "top -250%",
        // markers: true,
        pin: true
    }
})

tl3.to("#page3>img",{
    width: "65%",
    scale: ".4",
    transform: "translate(-50%,-50%)",
    top: "37%",
    left: "55%",
    borderRadius: "50%",
    scrollTrigger:{
        trigger: "#page3>img",
        scroller: "#main",
        start: "top 0%",
        // markers: true,
        scrub: 1
    }
})


tl3.from("#p3smallimg",{
    opacity: 0,
    onStart: function(){
      document.querySelector("#p3smallimg").style.zIndex = "999"  
    },
    scrollTrigger:{
        trigger:"#p3smallimg",
        scroller: "#main",
        start: "top -100%",
        scrub: 1,
        // markers: true
    }
})


tl3.from("#page3>h1,#page3-p1,#page3-p2",{
    opacity: 0,
    y: 40,
    scrollTrigger:{
        trigger: "#page3>h1,#page3-p1,#page3-p2",
        scroller: "#main",
        start: "top -100%",
        scrub: 1,
    }
})



gsap.to("#page4",{
    scrollTrigger:{
        trigger: "#page4",
        scroller: "#main",
        start: "top top",
        end: "top -850%",
        // markers: true,
        pin: true
    }
})

var tl4 = gsap.timeline()

tl4.to("#page4>img",{
    transform: "scale(50)",
    left: "-10%",
    scrollTrigger:{
        trigger: "#page4>img",
        scroller: "#main",
        start: "top top",
        end: "bottom -700%",
        scrub: 1,
        // markers: true
    }
})

tl4.from("#p4img",{
    scale: 0,
    y: -40,
    scrollTrigger:{
        trigger: "#p4img",
        scroller: "#main",
        start: "top -550%",
        scrub: 1,
        // markers: true
    }
})

tl3.from("#page4>p",{
    y: 40,
    opacity: 0,
    scrollTrigger:{
        trigger: "#page4>p",
        scroller: "#main",
        start: "top -550%",
        scrub: 1,
        // markers: true
    }
})

gsap.to("#page5",{
    scrollTrigger:{
        trigger: "#page5",
        scroller: "#main",
        start: "top top",
        end: "top -250%",
        // markers: true,
        pin: true
    }
})

var tl5 = gsap.timeline()

tl5.to("#page5>img",{
    width: "65%",
    scale: ".4",
    transform: "translate(-50%,-50%)",
    top: "37%",
    left: "55%",
    borderRadius: "50%",
    scrollTrigger:{
        trigger: "#page5>img",
        scroller: "#main",
        start: "top 0%",
        // markers: true,
        scrub: 1
    }
})


tl5.from("#p5smallimg",{
    opacity: 0,
    onStart: function(){
      document.querySelector("#p5smallimg").style.zIndex = "999"  
    },
    scrollTrigger:{
        trigger:"#p5smallimg",
        scroller: "#main",
        start: "top -100%",
        scrub: 1,
        // markers: true
    }
})


tl5.from("#page5>h1,#page5-p1,#page5-p2",{
    opacity: 0,
    y: 40,
    scrollTrigger:{
        trigger: "#page5>h1,#page5-p1,#page5-p2",
        scroller: "#main",
        start: "top -100%",
        scrub: 1,
    }
})


gsap.to("#page6",{
    scrollTrigger:{
        trigger: "#page6",
        scroller: "#main",
        start: "top top",
        end: "top -250%",
        // markers: true,
        pin: true
    }
})

var tl6 = gsap.timeline()


tl6.to("#page6>img",{
    width: "65%",
    scale: ".4",
    transform: "translate(-50%,-50%)",
    top: "37%",
    left: "55%",
    borderRadius: "50%",
    scrollTrigger:{
        trigger: "#page6>img",
        scroller: "#main",
        start: "top 0%",
        // markers: true,
        scrub: 1
    }
})


tl6.from("#p6smallimg",{
    opacity: 0,
    onStart: function(){
      document.querySelector("#p6smallimg").style.zIndex = "999"  
    },
    scrollTrigger:{
        trigger:"#p6smallimg",
        scroller: "#main",
        start: "top -100%",
        scrub: 1,
        // markers: true
    }
})


tl6.from("#page6>h1,#page6-p1,#page6-p2",{
    opacity: 0,
    y: 40,
    scrollTrigger:{
        trigger: "#page6>h1,#page6-p1,#page6-p2",
        scroller: "#main",
        start: "top -100%",
        scrub: 1,
    }
})



gsap.to("#page7",{
    scrollTrigger:{
        trigger: "#page7",
        scroller: "#main",
        start: "top top",
        end: "top -250%",
        // markers: true,
        pin: true
    }
})

var tl7 = gsap.timeline()


tl7.to("#page7>img",{
    width: "65%",
    scale: ".4",
    transform: "translate(-50%,-50%)",
    top: "37%",
    left: "55%",
    borderRadius: "50%",
    scrollTrigger:{
        trigger: "#page7>img",
        scroller: "#main",
        start: "top 0%",
        // markers: true,
        scrub: 1
    }
})


tl7.from("#p7smallimg",{
    opacity: 0,
    onStart: function(){
      document.querySelector("#p7smallimg").style.zIndex = "999"  
    },
    scrollTrigger:{
        trigger:"#p7smallimg",
        scroller: "#main",
        start: "top -100%",
        scrub: 1,
        // markers: true
    }
})


tl7.from("#page7>h1,#page7-p1,#page7-p2",{
    opacity: 0,
    y: 40,
    scrollTrigger:{
        trigger: "#page7>h1,#page7-p1,#page7-p2",
        scroller: "#main",
        start: "top -100%",
        scrub: 1,
    }
})


gsap.to("#page8",{
    scrollTrigger:{
        trigger: "#page8",
        scroller: "#main",
        start: "top top",
        end: "top -300%",
        // markers: true,
        pin: true
    }
})

var tl8 = gsap.timeline()

tl8.to("#page8>img",{
    scale: "55",
    top: "120%",
    left: "70%",
    scrollTrigger:{
        trigger: "#page8>img",
        scroller: "#main",
        start: "top top",
        scrub: 1
    }
})

tl8.from("#p8img>img",{
    scale: 0,
    scrollTrigger:{
        trigger: "#p8img>img",
        scroller: "#main",
        start: "top -80%",
        scrub: 1
    }
})

tl8.from("#page8>p",{
    opacity: 0,
    y: 40,
    scrollTrigger:{
        trigger: "#page8>p",
        scroller: "#main",
        start: "top -90%",
        scrub: 1
    }
})


gsap.to("#page9",{
    scrollTrigger:{
        trigger: "#page9",
        scroller: "#main",
        start: "top top",
        end: "top -170%",
        // markers: true,
        pin: true
    }
})


gsap.to("#loader",{
    top: "0%",
    scrollTrigger:{
        trigger: "#loader",
        scroller: "#main",
        start: "top 75%",
        scrub:1,
        // markers: true
    }
})

gsap.to(".i",{
    opacity: 1,
    scrollTrigger:{
        trigger: ".i",
        scroller: "#main",
        start: "top -50%",
        scrub:1,
        // markers: true
    }
})

gsap.to(".r",{
    opacity: 0,
    scrollTrigger:{
        trigger: ".r",
        scroller: "#main",
        start: "top -50%",
        scrub:1,
        // markers: true
    }
})

gsap.to(".dot",{
    opacity: 1,
    fill: "rgb(107, 97, 84)",
    scrollTrigger:{
        trigger: ".dot",
        scroller: "#main",
        start: "top -50%",
        scrub:1,
        // markers: true
    }
})

document.querySelector("#p1b").addEventListener("click",function(){
    var cn = gsap.timeline()
    cn.to("#p2",{
        scale: 0
    })
    cn.to("#p3",{
        scale: 0
    })
    cn.to("#p4",{
        scale: 0
    })
    cn.to("#p1",{
        scale: 1,
    })
})

document.querySelector("#p2b").addEventListener("click",function(){
    var cn = gsap.timeline()
    cn.to("#p1",{
        scale: 0,
    })
    cn.to("#p3",{
        scale: 0
    })
    cn.to("#p4",{
        scale: 0
    })
    cn.to("#p2",{
        scale: 1
    })
})

document.querySelector("#p3b").addEventListener("click",function(){
    var cn = gsap.timeline()
    cn.to("#p2",{
        scale: 0,
    })
    cn.to("#p1",{
        scale: 0
    })
    cn.to("#p4",{
        scale: 0
    })
    cn.to("#p3",{
        scale: 1
    })
})


document.querySelector("#p4b").addEventListener("click",function(){
    var cn = gsap.timeline()
    cn.to("#p2",{
        scale: 0,
    })
    cn.to("#p1",{
        scale: 0
    })
    cn.to("#p3",{
        scale: 0
    })
    cn.to("#p4",{
        scale: 1
    })
})

