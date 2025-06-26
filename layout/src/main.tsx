import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { lazy } from 'react'

import Layout from './Layout.tsx'
/* import VeryCoolPage from 'page/VeryCoolPage'
import NotSoCoolPage from 'page/NotSoCoolPage' */

const VeryCoolPage = lazy(() => import('page/VeryCoolPage'))
const NotSoCoolPage = lazy(() => import('page/NotSoCoolPage'))

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
