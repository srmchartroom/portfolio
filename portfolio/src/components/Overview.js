// import React from "react";
// import Sean1 from "../images/SeanRMcGinnis_1.jpg";
// import Sean2 from "../images/SeanRMcGinnis_2.jpg";
// import Sean3 from "../images/SeanRMcGinnis_3.jpg";
// import Container from "../components/Container";
// import Nav from "../components/Nav";


import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Overview extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h5 className="mt-2 pt-1">Executive Overview</h5>
                <p className="mt-3 pl-1"><strong>Approach &mdash;</strong> Passionate, creative leader and multi-talented developer. Signature approach is to balance analytics, evidence-based software architecture decisions, and UX design principles with progressive creativity and a mindfulness of trends to create applications and interfaces that engage users and meet business goals.</p>
                <p className="mt-3 pl-1"><strong>Education &mdash;</strong> Educated at Appalachian State (B.Sc.), UNC Greensboro (MBA), and UNC Chapel Hill (Full Stack Development).</p>
                <p className="mt-3 pl-1"><strong>Design &mdash;</strong> Extensive skill-base and experience in designing with the breadth of Adobe Creative Cloud, including Adobe XD, PhotoShop, Illustrator, InDesign, Premiere Pro, AfterEffects, et al.</p>
                <p className="mt-3 pl-1"><strong>Development &mdash;</strong> ~15+ years of experience with HTML and CSS. Experience and skilled in JavaScript, jQuery, AJAX, Node.js, Express, React, React Hooks, Redux, Handlebars, MySQL, Sequelize, MongoDB, Mongoose, FireBase, Git, Bash, Nodemon, Postman, Sass, Jest, TravisCI, Apache ECharts, GreensockJS, and a wide range of other frameworks, and libraries for modern full-stack development = particularly within the MERN stack.</p>
                <p className="mt-3 pl-1"><strong>Accolades &mdash;</strong> Hold multiple leadership certifications from the Center for Creative Leadership (LDP, FOL, ELDP). Wall Street Journal Award winner (listed in WSJ among the highest achieving MBAs in the United States), and published in the North American Case Research Journal, and casework sold by Harvard Business Education.</p>
                <p className="mt-3 pl-1"><strong>Organizational &mdash;</strong> ~20 years of developing technical requirements and standards, translating technical concepts for non-technical audiences, and leading and executing programming and development initiatives in Agile development environments.</p>
                <p className="mt-3 pl-1"><strong>Career Interests &mdash;</strong> Excited to delve-deep and develop across the front- and back-end to support the organization and work across the company and internal team to answer new challenges and bring new solutions to life.</p>
            </div>
        )
    }
}

// function Overview() {
//     return (
//         <div>

//             {/* <div className="row">
//                     <div className="col-11 col-xs-11 col-lg-6">
//                         <p style={{ textTransform: "none", letterSpacing: "1px" }}>Content here...</p>
//                     </div>
//                     <div className="col-11 col-xs-11 col-lg-6 pr-5">
//                         <img className="bioimg-A" src={Sean1} alt="Candid at a program photoshoot while Manager of Global Web &amp; eCommerce at the Center for Creative Leadership (CCL), Greensboro, NC, 2010" />
//                         <p className="pl-5 pr-5 mr-5 small mt-2 mb-5" style={{ textTransform: "none", letterSpacing: "1px", lineHeight: "1" }}>Candid while Manager of Global Web &amp; eCommerce at the Center for Creative Leadership (CCL), Greensboro, NC, 2010</p>
//                         <img className="bioimg-B" src={Sean2} alt="Featured speaker on Brand and Digital Strategy at international INA conference in AZ, 2018." />
//                         <p className="pl-5 pr-5 mr-5 small mt-2 mb-5" style={{ textTransform: "none", letterSpacing: "1px", lineHeight: "1" }}>Featured speaker on Brand and Digital Strategy at international INA conference in AZ, 2018</p>
//                         <img className="bioimg-C" src={Sean3} alt="Representing Chart Room Creative at the 2019 Summit in Raleigh, NC" />
//                         <p className="pl-5 pr-5 mr-5 small mt-2 mb-5" style={{ textTransform: "none", letterSpacing: "1px", lineHeight: "1" }}>Representing Chart Room Creative at the 2019 Summit in Raleigh, NC</p>
//                     </div>
//                 </div> */}
//         </div>

//     )
// };


// export default Overview;