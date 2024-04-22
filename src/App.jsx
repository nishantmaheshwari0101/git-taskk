import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import NotFoundPage from './screens/NotFoundPage'
import DetailsPage from './components/DetailsPage'
import ReposAll from './screens/ReposAll'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/detailspage' element={<DetailsPage />} />
        <Route path='/repos' element={<ReposAll />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App