
import React from 'react'
import { Draggable } from '../index'
import { Button } from 'zero-ui-react'

const Demo = <Draggable >
    <Button type="primary">Drag Me</Button>
</Draggable>

export default Demo

export const code = `
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'zeor-ui-react'
import { Draggable } from 'custom-kit'

const App = () => <Draggable>
    <Button type="primay">Drag Me</Button>
</Draggable>

ReactDOM.render(<App />, document.querySelector('#root'))
`

export const title = 'Draggable'

export const path = '/path'

export const desc = '使拖拽'