import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Opportunities extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h5 className="mt-2 pt-1">Opportunities</h5>
                <p className="mt-3 pl-1">I am currently open to both contract and FT/PT-employed opportunities, and short- and long-term contract positions in which I can exercise a development skillset, and provide a unique and high-value convergence of skill and experience. </p>

                <p className="mt-3 pl-1">If you are interested in exploring how I can add value to and grow your organization, please <a href="/contact">contact me.</a></p>
            </div>
        )
    }
}
