import * as React from 'react'
import ReactDOM from 'react-dom/client'

// @ts-ignore ts(1208)
;(() => {
  console.log('[web-extension-starter] Hello WOrld from content scripts')

  // mount component to context window
  const container = document.createElement('div')

  const root = document.createElement('div') as HTMLDivElement

  const shadowDOM = container.attachShadow?.({ mode: __DEV__ ? 'open' : 'closed' }) || container

  shadowDOM.appendChild(root)

  document.body.appendChild(container)

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <div>
        <h1>Content Scripts - Content</h1>
      </div>
    </React.StrictMode>,
  )
})()
