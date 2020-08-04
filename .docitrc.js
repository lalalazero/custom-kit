
module.exports = {
    title: 'cutom-kit',
    publicPath: '/custom-kit/',
    outputDir: 'dist',
    demoDir: 'demos',
    routes: [
        {
            demo: 'ImageViewerDemo',
            code: 'ImageViewerDemoCode',
            title: 'ImageViewer',
            desc: 'ImageViewer的描述描述描述',
            path: '/imageviewer'
        },
        {
            demo: 'DraggableDemo',
            code: 'DraggableDemoCode',
            title: 'Draggable',
            desc: 'ImageViewer的描述描述描述',
            path: '/draggable'
        },
        {
            demo: 'WatermarkDemo',
            code: 'watermark code',
            title: 'watermark title',
            desc: 'watermark desc',
            path: '/watermark'
        }

    ]
}