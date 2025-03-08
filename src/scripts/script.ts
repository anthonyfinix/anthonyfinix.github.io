const myText = new SplitType(".main-heading")
gsap.to(".char", {
    y: 0,
    stagger: 0.02,
    duration: .1
})
gsap.set(".subheading-wrapper span", { opacity: 0 });
gsap.set(".social-wrapper", { opacity: 0 });

gsap.to(".subheading-wrapper span", {
    opacity: 1,
    delay: 1,
    duration: 1.5,
});
gsap.to(".social-wrapper", {
    opacity: 1,
    delay: 1,
    duration: 1.5,
});

gsap.to(".partial", {
    repeat: -1,
    keyframes: [
        { y: 0, duration: 3 },
        { y: -50, duration: .2 },
        { y: -50, duration: 2 },
        { y: -100, duration: .2 },
        { y: -100, duration: 2 },
        { y: -50, duration: .2 },
        { y: -50, duration: 2 },
        { y: 0, duration: .2 },
        { y: 0, duration: 2 },
    ],
});