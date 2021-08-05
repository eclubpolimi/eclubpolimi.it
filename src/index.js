import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './components/Navbar'

function Site() {
  return (
    <Navbar />
  )
}

ReactDOM.render(<Site />, document.getElementById("root"));