import React from 'react'
import ReactDOM from 'react-dom'
import ImagePreviewer from './components/ImagePreviewer'
const fileList = [
    {
        //   'src': pic1,
        'src': 'https://infeng.github.io/react-viewer/59111ff2c38954887bc313887fe76e27.jpg',
        'name': '风景照.jpg'
    },
    {
        //   'src': pic2,
        'src': 'https://infeng.github.io/react-viewer/bbbc41dac417d9fb4b275223a6a6d3e8.jpg',
        'name': '青海湖.jpg'
    },
    {
        //   'src': pic3,
        'src': 'https://infeng.github.io/react-viewer/418f4037db8ad4685aa604c503a09604.jpg',
        'name': '城墙.jpg'
    }
]

const App = () => <div>
    <ImagePreviewer fileList={fileList} />
</div>

ReactDOM.render(<App />, document.querySelector('#root'))