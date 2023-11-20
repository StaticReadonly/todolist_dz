import {createRoot} from 'react-dom/client'
import React from 'react'

import {App} from './App/App'

const div = document.getElementById('root')
const root = createRoot(div)
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)