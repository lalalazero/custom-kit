import React, { createRef } from 'react'

class Draggable extends React.Component<{}> {
    private origin: number[] = []
    private drop: number[] = []
    private dragRef = createRef<HTMLDivElement>()
    private dragPos: number[] = []
    private staticPos: number[] = []
    constructor(props: {}) {
        super(props)
    }
    componentDidMount() {
        if (this.dragRef && this.dragRef.current) {
            const { top, left } = this.dragRef.current.getBoundingClientRect()
            console.log('top, left: ', top, left)
            this.dragPos = [top, left]
            this.staticPos = [top, left]
        }
    }
    onDrag(event: React.DragEvent) {
        console.log('onDrag...', event.screenX, event.screenY)
    }
    onDragStart(event: React.DragEvent) {
        console.log('drag start...', event.screenX, event.screenY)
        const { screenX, screenY } = event
        this.origin = [screenX, screenY]
    }
    onDrop(event: React.DragEvent) {
        console.log('drop...', event.screenX, event.screenY)
    }
    onDragEnd(event: React.DragEvent) {
        console.log('drag end...', event.screenX, event.screenY)
        const { screenX, screenY } = event
        this.drop = [screenX, screenY]
        let deltaX = this.drop[0] - this.origin[0]
        let deltaY = this.drop[1] - this.origin[1]
        this.origin = this.drop
        if (this.dragRef && this.dragRef.current) {
            const [oldTop, oldLeft] = this.dragPos
            const [staticLeft, staticTop] = this.staticPos
            console.log('起点', oldLeft, oldTop)
            console.log('deltaX: ', deltaX)
            console.log('deltaY: ', deltaY)
            let newTop = oldTop + deltaY
            let newLeft = oldLeft + deltaX
            console.log('终点', newLeft, newTop)
            this.dragRef.current.style.left = newLeft + 'px'
            this.dragRef.current.style.top = newTop + 'px'

            this.dragPos = [newTop, newLeft]
        }
    }
    render() {
        return <div draggable
            ref={this.dragRef}
            // onDrag={this.onDrag.bind(this)}
            onDragStart={this.onDragStart.bind(this)}
            onDrop={this.onDrop.bind(this)}
            onDragEnd={this.onDragEnd.bind(this)}
            style={{ display: 'inline-block', position: 'relative' }}>
            {this.props.children}
        </div>
    }
}

export default Draggable