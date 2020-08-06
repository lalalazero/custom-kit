import React, { Component } from 'react'
import { Button } from 'zero-ui-react'
import { Waterfall } from '../../index'
import './style.scss'

class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    onClick = () => {
        this.setState({
            list: this.state.list.concat([1,2,3])
        })
    }

    render() {
        return <div>
            
            <Waterfall count={4}>
                <div className='item-1 item'>1</div>
                <div className="item-2 item">2</div>
                <div className='item-3 item'>3</div>
                <div className='item-4 item'>4</div>
                <div className="item-5 item">5</div>
                <div className='item-1 item'>1</div>
                <div className="item-2 item">2</div>
                <div className='item-3 item'>3</div>
                <div className='item-4 item'>4</div>
                <div className="item-5 item">5</div>
                {
                    this.state.list.map((i, idx) => (<div className='item-3 item' key={idx} >{i}</div>))
                }

            </Waterfall>
            <p style={{ marginTop: 10}}><Button onClick={this.onClick}>add more</Button></p>
            
        </div>
    }
}

export default <Demo />