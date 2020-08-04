import React, { Component, createRef } from 'react'
import './index.scss'

export interface WatermarkProps {
    text?: string,
    width: number,
    height: number
}

export default class Watermark extends Component<WatermarkProps,{}> {
    static defaultProps = {
        width: 1500,
        height: 300,
        text: 'hello world'
    }
    wrapperRef = createRef<HTMLDivElement>()
    constructor(props: WatermarkProps){
        super(props)
    }

    render(){
        const { height, width } = this.props 
        const rows = Math.floor(height / 80)
        const cols = Math.floor(width / 100)
        const positions = []
        const deltaX = 200
        const deltaY = 120
        const initialTop = 20
        for(let i = 0; i < rows; i++) {
            const top = deltaY * i + initialTop
            for(let j = 0; j < cols; j++) {
                const left = deltaX * j
                positions.push({
                    left: left + 'px',
                    top: top + 'px'
                })
            }
        }
        return <div className='custom-kit-watermark-wrapper' style={{ height, width }}>
            <div className='custom-kit-watermark-area'>
                {
                    positions.map((pos, index) => (<div key={index} className='custom-kit-watermark-item' style={{ left: pos.left, top: pos.top }}>{ this.props.text }</div>))
                }
            </div>
        </div>
    }
}