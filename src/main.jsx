import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Base / design tokens
import './index.css'

// Site chrome
import './styles/header.css'
import './styles/footer.css'

// Home-page sections (kept globally available because shared utility classes
// like .btn-primary / .btn-secondary live in hero.css and are used by every
// page).
import './styles/hero.css'
import './styles/crmSection.css'
import './styles/serviceSection.css'
import './styles/aboutSection.css'
import './styles/portfolioSection.css'
import './styles/blogSection.css'
import './styles/contactSection.css'

// Route pages
import './styles/solutions.css'
import './styles/about.css'
import './styles/blog.css'
import './styles/blogPost.css'
import './styles/theme-page.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
