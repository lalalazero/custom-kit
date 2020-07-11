import React from 'react'
import ReactDOM from 'react-dom'
import ImagePreviewer from './components/ImagePreviewer'
import Draggble from './components/Draggable'
import { Button } from 'zero-ui-react'
import './App.scss'

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

const App2 = () => <div>
    <div>
        <Draggble>
            <span className='drag-span'>drag a span</span>
        </Draggble>
    </div>
    <div>
        <Draggble>
            <div className='drag-div'>drag a div</div>
        </Draggble>
    </div>
    <div>
        <Draggble>
            <Button type="primary">drag custom button</Button>
        </Draggble>
    </div>

</div>

ReactDOM.render(<App2 />, document.querySelector('#root'))