import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import Layout from 'layout/Layout'
import VeryCoolPage from './pages/VeryCoolPage.tsx'
import NotSoCoolPage from './pages/NotSoCoolPage.tsx'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/cool' element={<VeryCoolPage />} />
            <Route path='/not/cool' element={<NotSoCoolPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
} else {
  throw new Error("Root element with id 'root' not found.")
}
