import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import store from "./store/index.ts"
import App from "./App/App.tsx"
import AppRouter from "./routes/app-router/index.tsx"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { worker } from "./mocks/browser.ts"

// https://mswjs.io/docs/integrations/browser

async function enableMocking() {
  if (process.env.NODE_ENV != "development") {
    return
  }
  return worker.start()
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <App />
          <AppRouter />
        </Provider>
      </Router>
    </React.StrictMode>
  )
})
