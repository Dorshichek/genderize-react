import React from 'react'
import ReactDOM from 'react-dom/client'

import Button from "./components/Button/Button"
import Input from "./components/Input/Input";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Input/>
      <Button/>
    </React.StrictMode>
)
