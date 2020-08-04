import React, { Component } from 'react'
import './index.scss'
import { stopPropagation } from '../utils.js'

export interface DraggableProps {}

export interface DraggableState {
    left: number, 
    top: number
}

class Draggable extends Component<DraggableProps, DraggableState> {

  origin = []
  drop = []
  dragPos = [0, 0] // because of position: relative
  dragRef = React.createRef<HTMLDivElement>()
  constructor(props: {}) {
    super(props)
    this.state = {
      left: 0,
      top: 0,
    }
    this.onDragStart = this.onDragStart.bind(this)
    this.onDragEnd = this.onDragEnd.bind(this)
  }

  

  onDragStart(event: DragEvent) {
    stopPropagation(event)
    const { screenX, screenY } = event
    this.origin = [screenX, screenY]
  }

  onDragEnd(event: DragEvent) {
    stopPropagation(event)
    const { screenX, screenY } = event
    this.drop = [screenX, screenY]
    const deltaX = this.drop[0] - this.origin[0]
    const deltaY = this.drop[1] - this.origin[1]
    this.origin = this.drop
    if (this.dragRef && this.dragRef.current) {
      const [oldTop, oldLeft] = this.dragPos
      const newTop = oldTop + deltaY
      const newLeft = oldLeft + deltaX
      this.dragPos = [newTop, newLeft]
      this.setState({
        left: newLeft,
        top: newTop,
      })
    }
  }
  render() {
    const { left, top } = this.state
    return (<div draggable className='custom-kit-draggable-wrapper'
      ref={this.dragRef}
      onDragStart={this.onDragStart}
      onDragEnd={this.onDragEnd}
      style={{ display: 'inline-block', position: 'relative', left, top }}
    >
      {this.props.children}
    </div>)
  }
}

export default Draggable
