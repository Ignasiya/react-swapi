import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PageLayout from '@/layouts/PageLayout'
import 'bootswatch/dist/darkly/bootstrap.min.css'
import '@/styles/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageLayout />
  </StrictMode>
)
