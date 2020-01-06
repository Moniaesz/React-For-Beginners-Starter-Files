import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import StorePicker from './components/StorePicker'
import './css/style.css'

render(
  // <StorePicker />,
  <App />,
  document.querySelector('#main')
)