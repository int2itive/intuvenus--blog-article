let toSplit = document.querySelector('.main---story h4');

const text = new SplitType(toSplit, { types: 'words, chars' });

gsap.fromTo(text.chars, {
  scaleY: 0.1,
  scaleX: 1.8,
  filter: 'blur(10px) brightness(50%)',
  willChange: 'filter, transform'
}, {
    ease: 'none', 
    scaleY: 1,
    scaleX: 1,
    filter: 'blur(0px) brightness(100%)',
    stagger: 0.03,
    delay: 1.6,
    scrollTrigger: {
      trigger: text,
      start: 'top bottom-=15%', 
      end: 'bottom center+=15%',
      scrub: true, 
    },
});