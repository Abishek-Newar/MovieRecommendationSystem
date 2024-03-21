
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Recommendation from './Pages/Recommendation'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Dashboard />} />
      <Route path='/recommendation' element={<Recommendation />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
