var tl = gsap.timeline();

tl.from("#nav img ,#nav h4,#btn", {
  y: -100,
  duration: 0.4,
  delay: 0.3,
  opacity: 0,
  stagger: 0.1,
});
tl.from("#main h1", {
  y: 200,
  opacity: 0,
  stagger: 0.2,
});
tl.from("#main>img", {
  scale: 0,
  delay: 0,
  opacity: 0,
});
tl.to("h5", {
  y: 30,
  repeat: -1,
  duration: 1,
  yoyo: true,
});

tl.from(" #secpage2 #text ", {
  x: 1500,
  duration: 1,
  scrollTrigger: "#secpage2 #text",
  scrub: true,
});

tl.to("#secpage h2",{
  transform:"translateX(-200%)",
  scrollTrigger:{
      trigger:"#secpage",
      scroller:"body",
      start:"top 0%",
      end:"top -150%",
      scrub:4,
      pin:true,
  }
  
})
