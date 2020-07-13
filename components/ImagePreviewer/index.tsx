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
    maxHeight: number,
    mode: 'adjust' | 'origin'
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
        mode: 'adjust'
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
    clickOrigin() {
        this.setState(prevState => {
            if (prevState.mode == 'adjust') {
                return {
                    ...prevState,
                    mode: 'origin'
                }
            } else {
                return {
                    ...prevState,
                    mode: 'adjust'
                }
            }
        })
    }

    render() {
        const { fileList } = this.props
        const { src, name, index, maxWidth, maxHeight, mode } = this.state
        return (
            <div className='image-previewer-container'>
                <Row align="middle"
                    style={{ height: '100%' }}>

                    <Col span={24}>
                        <ImageCoreWrapper
                            maxWidth={maxWidth}
                            maxHeight={maxHeight}
                            src={src} name={name}
                            mode={mode}
                        />

                    </Col>
                    <Col span={24}>
                        <div className='image-previewer-operation-bar'>
                            <Button onClick={this.clickPrev.bind(this)}
                                disabled={index === 0}
                                icon="left" type="primary"></Button>
                            <Button
                                disabled={index >= fileList.length - 1}
                                onClick={this.clickNext.bind(this)}
                                icon="right" type="primary"></Button>
                            <Button
                                type={mode === 'adjust' ? 'normal' : 'primary'}
                                onClick={this.clickOrigin.bind(this)}>1:1</Button>
                        </div>

                    </Col>

                </Row>
            </div>
        )
    }
}

export default ImagePreviewer