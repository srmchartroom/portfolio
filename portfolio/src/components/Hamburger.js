import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
    staggerText,
    staggerReveal,
    fadeInUp,
    handleHover,
    handleHoverExit,
    handleSubnavReturn,
    handleSubnav,
    staggerRevealClose
} from "./Animations";

import development from "../images/dallas.webp";
import design from "../images/austin.webp";
import experience from "../images/newyork.webp";
import skills from "../images/sanfrancisco.webp";
import clients from "../images/beijing.webp";

const subnav = [
    { name: "Development", image: development },
    { name: "Design", image: design },
    { name: "Experience", image: experience },
    { name: "Skills/Competencies", image: skills },
    { name: "Clients/Testimonials", image: clients },
];

const Hamburger = ({ state }) => {
    // Create variables of our dom nodes
    let menuLayer = useRef(null);
    let reveal1 = useRef(null);
    let reveal2 = useRef(null);
    let subnavBackground = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let info = useRef(null);

    useEffect(() => {
        //if the menu is open and we click the menu button to close it...
        if (state.clicked === false) {
            // If menu is closed and we want to open it.

            staggerRevealClose(reveal2, reveal1);
            // Set menu to display none
            gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)
        ) {
            // Set menu to display block
            gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
            // Allow menu to have height of 100%
            gsap.to([reveal1, reveal2], {
                duration: 0,
                opacity: 1,
                height: "100%"
            });
            staggerReveal(reveal1, reveal2);
            fadeInUp(info);
            staggerText(line1, line2, line3);
        }
    }, [state]);

    return (
        <div ref={el => (menuLayer = el)} className='hamburger-menu'>
            <div ref={el => (reveal1 = el)} className='menu-secondary-background-color'></div>
            <div ref={el => (reveal2 = el)} className='menu-layer'>
                <div ref={el => (subnavBackground = el)} className='menu-subnav-background'></div>
                <div className='container'>
                    <div className='wrapper'>
                        <div className='menu-links'>
                            <nav>
                                <ul>
                                    <li>
                                        <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line1 = el)}
                                            to='/about'>
                                            About
                                            </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line2 = el)}
                                            to='/portfolio'>
                                            Portfolio
                                            </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line3 = el)}
                                            to='/Contact'>
                                            Contact
                                            </Link>
                                    </li>
                                </ul>
                            </nav>
                            <div ref={el => (info = el)} className='info'>
                                <h3>TL;DR</h3>
                                <p>I'm a creative and a developer; a marketer and a programmer. I'm an business leader and I'm a code monkey. And I am voted most likely to be accused of split-personality in my career. </p><p>&nbsp;</p><p>Throughout a 20+ year career, I've been a teacher, a writer, an artist, a manager, a consultant, and a developer. I've led double-digit-sized teams, directed digital strategy for multinational orgs, and founded and co-founded companies. My name has been in the Wall Street Journal, writings sold by Harvard Business Education, and I've consulted organizations across a range of industries.</p>
                            </div>
                            <div className='locations'>
                                Portfolio:
                                {/* Returning the list of subnav */}
                                {subnav.map(el => (
                                    <span
                                        key={el.name}
                                        onMouseEnter={() => handleSubnav(el.image, subnavBackground)}
                                        onMouseOut={() => handleSubnavReturn(subnavBackground)}
                                    >
                                        <a href={`/${el.name}`} style={{ textDecoration: "none", color: "#fff" }}>{el.name}</a>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Hamburger;