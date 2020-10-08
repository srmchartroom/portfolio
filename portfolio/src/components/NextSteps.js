import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NextSteps extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h5 className="mt-2 pt-1">Next Steps, Goals, Plans</h5>
                <p className="mt-3 pl-1">In the midst of global economic contraction and the Coronavirus pandemic, I have decided to hard-pivot, have pulled back on consulting roster and focused and refining my core with a strong basis in programming. </p>

                <p className="mt-3 pl-1">I've had years of experience directing development and prioritizing work of developers, but I've had a gap in front-end/back-end development which lacked formality and refinement that ongoing formal education could provide. In May 2020, I enrolled in a Full Stack Development program with the University of North Carolina, Chapel Hill; and I completed the intensive program in late Octover 2020 with a post-graduate certificate in Full Stack Development with a focus on the MERN dev-stack, and Mongo/MySQL, ExpressJS, ReactJS, and NodeJS.</p>

                <p className="mt-3 pl-1">My goal is to leverage my experience, insights, and maturity in user-facing digital technologies, and find opportunities to provide significant value to the right organization and great satisfaction to me. I am passionate about creating useful technologies that people can interact with intuitively and that improve their lives and their experience with technology. I intend to merge a strong business background, with decades of experience in digital marketing, a mastery of digital design and UX, and a now-more-refined full stack development skillset.</p>
            </div>
        )
    }
}
