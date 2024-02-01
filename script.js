var tl=gsap.timeline()

tl.from("#nav img ,#nav h4,#btn",{
    y:-100,
    duration:.4,
    delay:0.3,
    opacity:0,
    stagger:0.1
    
})
tl.from("#main h1",{
    y:200,
    opacity:0,
    stagger:0.2
})
tl.from("#main>img",{
    scale:0,
    opacity:0
})