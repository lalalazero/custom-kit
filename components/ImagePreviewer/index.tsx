import React from 'react'
import ImageCoreWrapper, { ImageCoreWrapperProps } from './CoreWrapper'
import { Button, Row, Col } from 'zero-ui-react'
import './index.scss'

export interface ImagePreviewerProps extends React.HTMLProps<HTMLDivElement> {
    fileList: {
        src: string,
        name: string
    }[]
}

interface ImagePreviewerState {
    index: number,
    src: string,
    name: string,
    maxWidth: number,
    maxHeight: number
}

class ImagePreviewer extends React.Component<ImagePreviewerProps, ImagePreviewerState> {
    static defaultProps = {
        fileList: []
    }
    state: ImagePreviewerState = {
        index: 0,
        maxWidth: window.innerWidth - 60,
        maxHeight: window.innerHeight - 80,
        src: '',
        name: '',
    }
    constructor(props: ImagePreviewerProps) {
        super(props)
        if (this.props.fileList.length > 0) {
            const currentImage = this.props.fileList[0]
            this.state.src = currentImage.src
            this.state.name = currentImage.name
        }
    }

    clickNext() {
        console.log('click next')
        let newIndex = this.state.index + 1
        let maxIndex = this.props.fileList.length - 1
        if (newIndex >= maxIndex) {
            newIndex = maxIndex
        }
        let newImage = this.props.fileList[newIndex]
        this.setState({
            ...this.state,
            index: newIndex,
            src: newImage.src,
            name: newImage.name
        })
    }

    clickPrev() {
        console.log('click prev')
        let newIndex = this.state.index - 1
        let minIndex = 0
        if (newIndex <= minIndex) {
            newIndex = minIndex
        }
        let newImage = this.props.fileList[newIndex]
        this.setState({
            ...this.state,
            index: newIndex,
            src: newImage.src,
            name: newImage.name
        })
    }

    render() {
        const { fileList } = this.props
        const { src, name, index, maxWidth, maxHeight } = this.state
        return (
            <div className='image-previewer-container'>
                <Row align="middle"
                    style={{ height: '100%' }}>
                    <Col span={1}
                        style={{ textAlign: 'center', width: 60 }}>
                        <Button onClick={this.clickPrev.bind(this)}
                            disabled={index === 0}
                            icon="left" type="primary"></Button>
                    </Col>
                    <Col span={22}>
                        <ImageCoreWrapper
                            maxWidth={maxWidth}
                            maxHeight={maxHeight}
                            src={src} name={name} />
                    </Col>
                    <Col span={1} style={{ textAlign: 'center', width: 60 }}>
                        <Button
                            disabled={index >= fileList.length - 1}
                            onClick={this.clickNext.bind(this)}
                            icon="right" type="primary"></Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ImagePreviewer