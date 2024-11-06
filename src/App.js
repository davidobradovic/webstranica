import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/galerija' element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App