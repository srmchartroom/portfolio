import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Testimonials extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h5 className="mt-2 pt-1">Testimonials</h5>
                <div className="mb-5 mt-3">
                    <p className="mt-3 pl-1">"Sean has a gift and passion for web design and it shows in everything he does. He's got a wonderful right-brain, creative design aesthetic, as well as left-brain, nuts and bolts, pragmatic sensibility. He's able to communicate the complexities of the web to lay persons, and is personable and responsive in the process...."</p>
                    <p className="small pl-2 mb-0"><strong>&mdash; Chris Ernst, Ph.D.</strong></p>
                    <p className="small pl-4 mt-0">VP, Leadership + Organizational Effectiveness<br />
                    Workday</p>
                </div>
                <div className="mb-5 mt-3">
                    <p className="mt-3 pl-1">"Sean is a first rate web strategist and manager. He's very knowledgeable not only on the technical aspects of the web but has his pulse on current web communications and eCommerce trends. Add to that an incredible work ethic and you have an individual who is a tremendous talent."</p>
                    <p className="small pl-2 mb-0"><strong>&mdash; Portia Mount</strong></p>
                    <p className="small pl-4 mt-0">VP, Head of Marketing, Commercial HVAC Americas<br />
                    Trane Technologies<br />
                    Author, Keynote Speaker</p>
                </div>
                <div className="mb-5 mt-3">
                    <p className="mt-3 pl-1">"If you want creative action. Sean is your person. Sean is a person you want to get to know if you want help at the intersections of technology, innovation, and business performance. His work on innovations in CCL's web presence have been a terrific aid to piloting and making happen, new products and services that the world needs to see and play with on the road to full scale production. Through all of my interaction with Sean, I have witnessed service, creativity, and diligent action."</p>
                    <p className="small pl-2 mb-0"><strong>&mdash; David Magellan Horth, Ph.D.</strong></p>
                    <p className="small pl-4 mt-0">Director, Innovation Venturing &amp; Partnerships<br />
                    Center for Creative Leadership (CCL)</p>
                </div>
                <div className="mb-5 mt-3">
                    <p className="mt-3 pl-1">"Sean digs deep. When you’re working with him on a project, you know he’s going to uncover a wealth of information and insights to inform the solution. He doesn’t just settle for a brisk Google session followed by banging out a few scattered observations. His office library was a source of envy for me — each book filled with notes and highlights....The man is a Rembrandt of the white board. I was always dismayed when his kaleidoscopic, multidimensional flowcharts and diagrams had to be unceremoniously erased to make way for the next meeting."</p>
                    <p className="small pl-2 mb-0"><strong>&mdash; Mike Turner</strong></p>
                    <p className="small pl-4 mt-0">Creative Director<br />
                    Red Letter Marketing</p>
                </div>
                <div className="mb-5 mt-3">
                    <p className="mt-3 pl-1">"Sean is a high-powered, focused manager with a keen sense of thoroughness and attention to detail. He combines a strong analytical mind with a vision for future growth and viability of his projects...."</p>
                    <p className="small pl-2 mb-0"><strong>&mdash; Peter Amidon, MSITM</strong></p>
                    <p className="small pl-4 mt-0">Co-Founder and President<br />
                    Maui Insights</p>
                </div>
                <div className="mb-5 mt-3">
                    <p className="mt-3 pl-1">"Sean is a tireless worker dedicated to setting big goals and achieving them. His customer orientation focuses his energy in the right places while his analytical mind and dedication to measurement ensures he stays on target. He brings energy, a can-do attitude, and a solutions-focus to any challenge we face. Sean is a valued member of the management team and a trusted advisor...."</p>
                    <p className="small pl-2 mb-0"><strong>&mdash; Jeff Howard, MBA</strong></p>
                    <p className="small pl-4 mt-0">VP &amp; Managing Director, Global Licensing &amp; Leadership Products<br />
                    Center for Creative Leadership (CCL)</p>
                </div>
            </div >
        )
    }
}
