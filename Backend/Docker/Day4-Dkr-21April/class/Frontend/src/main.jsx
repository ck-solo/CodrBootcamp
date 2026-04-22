import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import App from '../src/app/App.jsx'
import { store } from './app/app.store.js'
createRoot(document.getElementById('root')).render( 
<Provider store={store}>
    <App />
</Provider>
  
  
)
