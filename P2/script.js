

gsap.from(" #page1 #box ",{
    x:-500,
    delay:2,
    rotate:360,
    
})

gsap.from(" #page2 #box ",{
    x:-500,
    delay:.2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 30%",
        scrub:5
       
    }
})