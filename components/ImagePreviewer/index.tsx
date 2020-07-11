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

    render() {
        const { src, name, maxWidth, maxHeight } = this.state
        return (
            <div className='image-previewer-container'>
                <Row align="middle"
                    style={{ height: '100%' }}>
                    <Col span={1} style={{ textAlign: 'center', width: 60 }}>
                        <Button icon="left" type="primary"></Button>
                    </Col>
                    <Col span={22}>
                        <ImageCoreWrapper
                            maxWidth={maxWidth}
                            maxHeight={maxHeight}
                            src={src} name={name} />
                    </Col>
                    <Col span={1} style={{ textAlign: 'center', width: 60 }}>
                        <Button icon="right" type="primary"></Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ImagePreviewer