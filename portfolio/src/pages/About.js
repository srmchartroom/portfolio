import React from "react";
import Overview from "../components/Overview";
import Career from "../components/Career";
import Testimonials from "../components/Testimonials";
import NextSteps from "../components/NextSteps";
import Opportunities from "../components/Opportunities";
import { Link, Route } from "react-router-dom";
import { handleHoverSub, handleHoverSubExit } from "../components/Animations";

const subnav = [
    { name: "Executive Overview", url: "/about" },
    { name: "Career", url: "/about/career" },
    { name: "Testimonials", url: "/about/testimonials" },
    { name: "Next Steps", url: "/about/next-steps" },
    { name: "Opportunities", url: "/about/opportunities" },
];



function About(props) {

    return (
        <div className="content-container" style={{ overflowY: "scroll" }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-xs-11 col-md-4">
                        <h3>About Sean McGinnis</h3>
                        <div className='subnav-mobile'>
                            <span className="pl-1 ml-3 lead "><strong>Explore:</strong></span>
                            <hr width="50%" style={{ align: "left", writingMode: "tb" }} />
                            <ul>
                                {subnav.map(el => (
                                    <li>
                                        <Link
                                            // // ref={el => (line1 = el)}
                                            to={el.url}>
                                            <div onMouseEnter={e => handleHoverSub(e)}
                                                onMouseOut={e => handleHoverSubExit(e)}>
                                                <span className="contentSubNav" key={el.name}>
                                                    {el.name}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <hr width="50%" style={{ align: "left", writingMode: "tb" }} />
                        </div>

                    </div>
                    <div className="col col-xs-11 col-md-7">
                        <Route exact path={`${props.match.url}`} component={Overview} />
                        <Route exact path={`${props.match.url}/career`} component={Career} />
                        <Route exact path={`${props.match.url}/next-steps`} component={NextSteps} />
                        <Route exact path={`${props.match.url}/testimonials`} component={Testimonials} />
                        <Route exact path={`${props.match.url}/opportunities`} component={Opportunities} />
                    </div>
                    <div className="col col-xs-11 col-md-1">
                    </div>
                </div>
            </div>
        </div>
    );
};



export default About;