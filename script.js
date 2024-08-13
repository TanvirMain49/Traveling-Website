var tl = gsap.timeline()

tl.from(".popular-section",{
    y:260,
    duration:0.6,
    opacity:0,
    scrollTrigger: {
        trigger:".popular-section",
        scroller: "body",
        start:"top 90%",
        end:"top 60%",
        scrub:2

    }
})
// destinationSection start//
tl.from(".your-destination .destination-container",{
    duration:0.8,
    opacity:0,
    stagger:1,
    scrollTrigger: {
        trigger:".your-destination .destination-container",
        scroller: "body",
        start:"top 50%",
        end:"top 60%",
        scrub:2

    }
})
tl.from(".your-destination .row-1 .country-card #img-1",{
    x:1200,
    duration:0.7,
    opacity:0,
    stagger:0.7,
    scrollTrigger: {
        trigger:".your-destination .row-1 .country-card #img-1",
        scroller: "body",
        start:"top 40%",
        end:"top 60%",
        scrub:2

    }
    
})
tl.from(".your-destination .row-1 .country-card #img-2",{
    x:1200,
    duration:0.7,
    opacity:0,
    // stagger:0.7,
    scrollTrigger: {
        trigger:".your-destination .row-1 .country-card #img-2",
        scroller: "body",
        start:"top 30%",
        end:"top 10%",
        scrub:2

    }
    
})
tl.from(".your-destination .row-1 .country-card p",{
    x:-1200,
    duration:0.7,
    opacity:0,
    scrollTrigger: {
        trigger:".your-destination .row-1 .country-card p",
        scroller: "body",
        start:"top 54%",
        end:"top 50%",
        scrub:2

    }
    
})
tl.from(".your-destination .row-2 .country-card img",{
    x:-1200,
    duration:0.7,
    opacity:0,
    stagger:0.7,
    scrollTrigger: {
        trigger:".your-destination .row-2 .country-card img",
        scroller: "body",
        start:"top 30%",
        end:"top 17%",
        scrub:2

    }
})

tl.from(".your-destination .row-2 .country-card p",{
    // x:1200,
    duration:0.7,
    opacity:0,
    scrollTrigger: {
        trigger:".your-destination .row-2 .country-card p",
        scroller: "body",
        start:"top 30%",
        end:"top 25%",
        scrub:2

    }
    
})
tl.from(".your-destination .row-3 .country-card img",{
    x:-1200,
    duration:0.7,
    opacity:0,
    stagger:0.7,
    scrollTrigger: {
        trigger:".your-destination .row-3 .country-card img",
        scroller: "body",
        start:"top 20%",
        end:"top 60%",
        scrub:2,

    }
})
tl.from(".your-destination .row-3 .country-card p",{
    duration:0.7,
    opacity:0,
    scrollTrigger: {
        trigger:".your-destination .row-3 .country-card p",
        scroller: "body",
        start:"top 47%",
        end:"top 60%",
        scrub:2

    }
    
})
tl.from(".choose .Chose-container",{
    y:-240,
    duration:1,
    opacity:0,
    stagger:0.8,
    scrollTrigger: {
        trigger:".choose .Chose-container",
        scroller: "body",
        start:"top 20%",
        end:"top 26%",
        scrub:2

    }
})
tl.from(".choose .cards",{
    y:-240,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger: {
        trigger:".choose .cards",
        scroller: "body",
        start:"top 40%",
        end:"top 20%",
        scrub:2

    }
})
tl.from(".deals .deals-container",{
    duration:1,
    opacity:0,
    stagger:0.7,
    scrollTrigger: {
        trigger:".deals .deals-container",
        scroller: "body",
        start:"top 40%",
        end:"top 20%",
        scrub:2

    }
})
tl.from(".deals .deals-img",{
    duration:1,
    opacity:0,
    stagger:0.7,
    scrollTrigger: {
        trigger:".deals .deals-img",
        scroller: "body",
        start:"top 60%",
        end:"top 20%",
        scrub:2

    }
})

tl.from(".deals .deals-img .deals-card-one",{
    x:1200,
    duration:1,
    opacity:0,
    stagger:0.7,
    scrollTrigger: {
        trigger:".deals .deals-img .deals-card",
        scroller: "body",
        start:"top 40%",
        end:"top 20%",
        scrub:2
    }
})



tl.from(".deals .deals-img .deals-card-two",{
    x:-1200,
    duration:1,
    opacity:0,
    stagger:0.7,
    scrollTrigger: {
        trigger:".deals .deals-img .deals-card-two",
        scroller: "body",
        start:"top 40%",
        end:"top 20%",
        scrub:2

    }
})



tl.from(".deals .deals-img .deals-card-three",{
    x:1200,
    duration:1,
    opacity:0,
    stagger:0.7,
    scrollTrigger: {
        trigger:".deals .deals-img .deals-card-three",
        scroller: "body",
        start:"top 40%",
        end:"top 20%",
        scrub:2

    }
})

tl.from(".newsletter .from",{
    x:-1200,
    duration:1,
    opacity:0,
    stagger:0.7,
    scrollTrigger: {
        trigger:".newsletter .from",
        scroller: "body",
        start:"top 40%",
        end:"top 20%",
        scrub:2

    }
})
tl.from(".newsletter .newsletter-img",{
    x:1200,
    duration:1,
    opacity:0,
    stagger:0.7,
    scrollTrigger: {
        trigger:".newsletter .newsletter-img",
        scroller: "body",
        start:"top 40%",
        end:"top 20%",
        scrub:2

    }
})

