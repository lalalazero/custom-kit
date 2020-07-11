import React from 'react'

export interface ImageCoreWrapperProps {
    src: string,
    name: string
}

class ImageCoreWrapper extends React.Component<ImageCoreWrapperProps> {
    constructor(props: ImageCoreWrapperProps) {
        super(props)
    }
    render() {
        return (
            <div
                className='image-previewer-core-wrapper'
                style={{ height: '400px' }}>
                image core
            </div>
        )
    }
}

export default ImageCoreWrapper