import React, { createRef } from 'react'

export interface ImageCoreWrapperProps {
    src: string,
    name: string,
    maxWidth: number,
    maxHeight: number,
    mode: 'adjust' | 'origin'
}

interface State {
    imgHeight?: number,
    imgWidth?: number
}




class ImageCoreWrapper extends React.Component<ImageCoreWrapperProps, State> {
    state: State = {
    }
    static defaultProps = {
        mode: 'adjust'
    }
    private wrapperRef = createRef<HTMLDivElement>()
    private imgRef = createRef<HTMLImageElement>()
    // private wrapperObj = {
    //     height: 0,
    //     width: 0
    // }
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
            // this.wrapperObj.height = this.state.coreHeight
            // this.setState({
            //     ...this.state,
            //     coreWidth: width
            // })
            // this.wrapperObj.width = width
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
    renderAdjustImage = () => {
        const { src, name, maxHeight, maxWidth } = this.props
        return (
            <div
                className='image-previewer-core-wrapper'
                ref={this.wrapperRef}
                style={{ height: maxHeight }}>
                <img src={src} role="presentation"
                    onLoad={this.onImageLoad.bind(this)}
                    style={{ maxHeight: maxHeight, maxWidth: maxWidth }}
                    ref={this.imgRef}></img>
            </div>
        )
    }
    renderOriginImage() {
        const { src, maxHeight } = this.props
        return (
            <div className='image-previewer-core-wrapper' ref={this.wrapperRef}
                style={{ height: maxHeight, overflow: 'scroll' }}>
                <img src={src} role="presentation"></img>
            </div>
        )
    }
    render() {
        const { mode } = this.props
        return mode === 'adjust' ? this.renderAdjustImage() : this.renderOriginImage()
    }
}

export default ImageCoreWrapper