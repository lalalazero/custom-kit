import React, { createRef } from 'react'

export interface ImageCoreWrapperProps {
    src: string,
    name: string
}

interface State {
    coreHeight: number,
    coreWidth: number,
    imgHeight?: number,
    imgWidth?: number
}




class ImageCoreWrapper extends React.Component<ImageCoreWrapperProps, State> {
    state: State = {
        coreHeight: window.innerHeight - 80,
        coreWidth: 0
    }
    private wrapperRef = createRef<HTMLDivElement>()
    private imgRef = createRef<HTMLImageElement>()
    private wrapperObj = {
        height: 0,
        width: 0
    }
    private realImageObj = {
        height: 0,
        width: 0
    }
    constructor(props: ImageCoreWrapperProps) {
        super(props)

    }
    componentDidMount() {
        if (this.wrapperRef && this.wrapperRef.current) {
            const { width } = this.wrapperRef.current.getBoundingClientRect()
            console.log('wrapper width: ', width)
            this.wrapperObj.height = this.state.coreHeight
            this.setState({
                ...this.state,
                coreWidth: width
            })
            this.wrapperObj.width = width
        }

    }
    onImageLoad() {
        if (this.imgRef && this.imgRef.current) {
            const { width, height } = this.imgRef.current.getBoundingClientRect()
            console.log('image width: ', width)
            this.realImageObj.height = height
            this.realImageObj.width = width
        }
    }
    render() {
        const { src, name } = this.props
        const { coreHeight, coreWidth } = this.state
        console.log('src: ', src)
        return (
            <div
                className='image-previewer-core-wrapper'
                ref={this.wrapperRef}
                style={{ height: coreHeight }}>
                <img src={src} role="presentation"
                    onLoad={this.onImageLoad.bind(this)}
                    style={{ height: coreHeight, width: coreWidth }}
                    ref={this.imgRef}></img>
            </div>
        )
    }
}

export default ImageCoreWrapper