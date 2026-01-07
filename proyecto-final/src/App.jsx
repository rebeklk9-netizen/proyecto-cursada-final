import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Superior from '../pages/Superior'
import Inferior from '../pages/Inferior'
import Contact from '../pages/Contact'
import CreateProduct from '../pages/CreateProduct'
import GalleryPage from '../pages/Gallery'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/superior" element={<Superior />} />
        <Route path="/inferior" element={<Inferior />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/admin/crear-producto" element={<CreateProduct />} />
      </Routes>
    </Router>
  )
}

export default App
