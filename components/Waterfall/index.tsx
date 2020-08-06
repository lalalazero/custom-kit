import React, { Component, Children, cloneElement } from 'react'
import './index.scss'


export default class Waterfall extends Component<{ count: number }> {
    static defaultProps = {
        count: 1
    }
    constructor(props: { count: number }) {
        super(props)
    }

    render() {
        return <div className="custom-kit-waterfall-wrapper" style={{ columnCount: this.props.count }}>
            {
                Children.map(this.props.children, child => cloneElement(child, { className: child.props.className + ' custom-kit-waterfall-item'}))
            }
        </div>
    }
}