import { BrowserRouter } from 'react-router-dom'
import RouteHandler from './RouteHandler'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <RouteHandler />
      </BrowserRouter>
    </div>
  )
}

export default App
