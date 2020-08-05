import React, { Component } from 'react'
import './index.scss'

export default class Waterfall extends Component {
    constructor(props: {}) {
        super(props)
    }

    render() {
        return <div className="custom-kit-waterfall-wrapper">
            {this.props.children}
        </div>
    }
}