import React from 'react'
import ReactDOM from 'react-dom'
import ImagePreviewer from './components/ImagePreviewer'

const App = () => <div>
    <ImagePreviewer />
</div>

ReactDOM.render(<App />, document.querySelector('#root'))