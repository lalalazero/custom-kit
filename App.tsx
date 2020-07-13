import React from 'react'
import ReactDOM from 'react-dom'
import { ImagePreviewer, Draggable } from './index'
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
        src: 'http://b.zol-img.com.cn/desk/bizhi/image/5/1440x900/1403749408779.jpg',
        // 'src': 'https://infeng.github.io/react-viewer/bbbc41dac417d9fb4b275223a6a6d3e8.jpg',
        'name': '猫咪.jpg'
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
        <Draggable>
            <span className='drag-span'>drag a span</span>
        </Draggable>
    </div>
    <div>
        <Draggable>
            <div className='drag-div'>drag a div</div>
        </Draggable>
    </div>
    <div>
        <Draggable>
            <Button type="primary">drag custom button</Button>
        </Draggable>
    </div>

</div>

ReactDOM.render(<App />, document.querySelector('#root'))