import { RouterProvider } from 'react-router'
import { router } from './app.routes'
import { Provider } from 'react-redux'
import { store } from './app.store'
const App = () => {
  return (
    <div>
      <Provider store={store}>
      <RouterProvider router={router}/> 
      </Provider>
    </div>
  )
}

export default App
