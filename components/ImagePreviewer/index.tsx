import React from 'react'
import ImageCoreWrapper, { ImageCoreWrapperProps } from './CoreWrapper'
import { Button, Row, Col } from 'zero-ui-react'
import './index.scss'

export interface ImagePreviewerProps extends React.HTMLProps<HTMLDivElement> {
    fileList: ImageCoreWrapperProps[]
}

class ImagePreviewer extends React.Component<ImagePreviewerProps> {
    static defaultProps = {
        fileList: []
    }
    constructor(props: ImagePreviewerProps) {
        super(props)
    }

    render() {
        return (
            <div className='image-previewer-container'>
                <Row align="middle"
                    style={{ height: '100%', border: '1px solid red' }}>
                    <Col span={1} style={{ textAlign: 'center' }}>
                        <Button icon="left" type="primary"></Button>
                    </Col>
                    <Col span={22}>
                        <ImageCoreWrapper src="" name="" />
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