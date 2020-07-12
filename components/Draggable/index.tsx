import React, { createRef } from 'react'

class Draggable extends React.Component<{}> {
    private origin: number[] = []
    private drop: number[] = []
    private dragRef = createRef<HTMLDivElement>()
    private dragPos: number[] = [0, 0] // because of position: relative
    constructor(props: {}) {
        super(props)
    }

    onDragStart(event: React.DragEvent) {
        const { screenX, screenY } = event
        this.origin = [screenX, screenY]
    }

    onDragEnd(event: React.DragEvent) {
        const { screenX, screenY } = event
        this.drop = [screenX, screenY]
        let deltaX = this.drop[0] - this.origin[0]
        let deltaY = this.drop[1] - this.origin[1]
        this.origin = this.drop
        if (this.dragRef && this.dragRef.current) {
            const [oldTop, oldLeft] = this.dragPos
            let newTop = oldTop + deltaY
            let newLeft = oldLeft + deltaX
            this.dragRef.current.style.left = newLeft + 'px'
            this.dragRef.current.style.top = newTop + 'px'
            this.dragPos = [newTop, newLeft]
        }
    }
    render() {
        return <div draggable
            ref={this.dragRef}
            onDragStart={this.onDragStart.bind(this)}
            onDragEnd={this.onDragEnd.bind(this)}
            style={{ display: 'inline-block', position: 'relative' }}>
            {this.props.children}
        </div>
    }
}

export default Draggable