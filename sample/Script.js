const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageanimation() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut

    })

        .to(".boundelm", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            dealy: -1,
            stagger: .2

        })
        .from("#herofooter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            dealy: -1,
            ease: Expo.easeInOut
        })
}


// jab mouse move ho to humlog skew kar paaye aur maximum skew and minimum skew define kar paaye, 
// jab mouse move ho to chpata ki value badhe, aur jab mouse chan band ho to chapta hat jaye

function circleChaptaoverMouse() {
    //define default scale value

    var xscale = 1;
    var yscale = 2;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        // var xdiff = dests.clientX - xprev;
        // var ydiff = dets.clientY - yprev;


        //  xscale = gsap.util.clamp(.8,1.2, xdiff);
        // yscale = gsap.util.clamp(.8,1.2, ydiff);



        // console.log(gsap.util.clamp(.8,1.2, xdiff));
        // console.log(gsap.util.clamp(.8,1.2, ydiff));
        circleMouseFollower(xscale, yscale);

    });
}


// locomotive js github
function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

circleChaptaoverMouse();
circleMouseFollower();
firstPageanimation();

// tino elememnt ko slect KeyboardEvent, uske bad teeno par ek mousemove lago,
//  jab mousemove ho to ye pata kro ki mouse kaha par hai, 
// jiska matlb hai mouse ki x and y position pata kro,
// ab mouse ki x & y position ki badle image ko show kro and move kro, move karte vakt
// rortate kro and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye


document.querySelectorAll(".elem").forEach(function (elem) {

    var rotate = 0;
    var diffrot = 0;


    elem.addEventListener("mouseleave", function (dets) {

        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3, // for smothly moveble image we can increase power
            duration: 0.5,


        });

    });

    elem.addEventListener("mousemove", function (dets) {

        var diff = dets.clientY - elem.getBoundingClientRect().top; //get is method
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        // clamp ko bato minimum and maximum value kya h clam  use ke under value rakhega

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3, // for smothly moveble image we can increase power
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.2),
        });

    });




});



