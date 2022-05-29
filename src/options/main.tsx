import * as React from 'react'
import ReactDOM from 'react-dom/client'

const container = document.getElementById('root') as HTMLDivElement

const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <div>
      <h1>Options Content</h1>
    </div>
  </React.StrictMode>,
)
