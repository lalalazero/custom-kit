import React from 'react'
import ImageCoreWrapper, { ImageCoreWrapperProps } from './CoreWrapper'
import { Button, Row, Col } from 'zero-ui-react'
import './index.scss'

export interface ImagePreviewerProps extends React.HTMLProps<HTMLDivElement> {
    fileList: ImageCoreWrapperProps[]
}

interface ImagePreviewerState {
    index: number,
    currentImage: ImageCoreWrapperProps
}

class ImagePreviewer extends React.Component<ImagePreviewerProps, ImagePreviewerState> {
    static defaultProps = {
        fileList: []
    }
    state: ImagePreviewerState = {
        index: 0,
        currentImage: {
            src: '',
            name: ''
        }
    }
    constructor(props: ImagePreviewerProps) {
        super(props)
        if (this.props.fileList.length > 0) {
            this.state.currentImage = this.props.fileList[0]
        }
    }

    render() {
        const { currentImage } = this.state
        return (
            <div className='image-previewer-container'>
                <Row align="middle"
                    style={{ height: '100%', border: '1px solid red' }}>
                    <Col span={1} style={{ textAlign: 'center' }}>
                        <Button icon="left" type="primary"></Button>
                    </Col>
                    <Col span={22}>
                        <ImageCoreWrapper src={currentImage.src} name={currentImage.name} />
                    </Col>
                    <Col span={1} style={{ textAlign: 'center' }}>
                        <Button icon="right" type="primary"></Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ImagePreviewer