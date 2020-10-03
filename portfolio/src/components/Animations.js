import gsap from "gsap";

// OPEN MENU
export const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
        duration: 0.8,
        height: 0,
        transformOrigin: "right top",
        skewY: 2,
        ease: "power2.inOut",
        stagger: {
            amount: 0.1
        }
    });
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
    gsap.to([node1, node2], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
            amount: 0.07
        }
    });
};

// STAGGER THE LINKS TO APPEAR
export const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
        duration: 0.8,
        y: 100,
        delay: 0.1,
        ease: "power3.inOut",
        stagger: {
            amount: 0.3
        }
    });
};

// FADE UP FOR ADDITIONAL INFO ON MENU
export const fadeInUp = node => {
    gsap.from(node, {
        y: 60,
        duration: 1,
        delay: 0.2,
        opacity: 0,
        ease: "power3.inOut"
    });
};

//HOVER ON LINK
export const handleHover = e => {
    gsap.to(e.target, {
        duration: 0.3,
        y: 3,
        skewX: 4,
        ease: "power1.inOut"
    });
};

//HOVER OFF LINK
export const handleHoverExit = e => {
    gsap.to(e.target, {
        duration: 0.3,
        y: -3,
        skewX: 0,
        ease: "power1.inOut"
    });
};

// adds subnav image once you hover on
export const handleSubnav = (city, target) => {
    gsap.to(target, {
        duration: 0,
        background: `url(${city}) center center`
    });
    gsap.to(target, {
        duration: 0.4,
        opacity: 1,
        ease: "power3.inOut"
    });
    gsap.from(target, {
        duration: 0.4,
        skewY: 2,
        transformOrigin: "right top"
    });
};

// removes subnav image once hover off
export const handleSubnavReturn = target => {
    gsap.to(target, {
        duration: 0,
        skewY: 0
    });
    gsap.to(target, {
        duration: 0.4,
        opactity: 0,
        skewY: 0
    });
};

