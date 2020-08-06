
module.exports = {
    title: 'cutom-kit',
    publicPath: '/custom-kit/',
    outputDir: 'dist',
    customHeader: './demos/CustomHeader',
    customFooter: './demos/CustomFooter',
    routes: [
        {
            path: '/imageviewer',
            menu: 'ImageViewer',
            components: [
                {
                    demo: './demos/ImageViewerDemo',
                    code: 'ImageViewerDemoCode',
                    title: 'ImageViewer',
                    desc: 'ImageViewer的描述描述描述',
                }
            ]
        },
        {

            path: '/draggable',
            menu: 'Draggable',
            components: [
                {
                    demo: './demos/Draggable/DraggableDemo',
                    code: 'DraggableDemoCode',
                    title: 'Draggable',
                    desc: 'ImageViewer的描述描述描述',
                    span: 12,
                },
                {
                    demo: './demos/Draggable/AnotherDemo',
                    code: 'anotherDemo',
                    title: 'anotherDemo',
                    desc: 'anotherdemo 描述',
                    span: 12
                }
            ]

        },
        {
            path: '/watermark',
            menu: 'Watermark',
            components: [
                {
                    demo: './demos/WatermarkDemo',
                    code: 'watermark code',
                    title: 'watermark title',
                    desc: 'watermark desc',
                }
            ]
        },
        {
            path: '/waterfall',
            menu: 'Waterfall',
            mdx: './demos/waterfall/index.mdx'
        }

    ]
}