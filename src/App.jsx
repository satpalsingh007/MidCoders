import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Eagerly loaded — these render on every route
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Seo from './components/Seo'
import siteConfig from './lib/siteConfig'

// Home-page sections — eager because they're all visible on first paint of "/"
import Hero from './components/Hero'
import CrmSection from './components/CrmSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import PortfolioSection from './components/PortfolioSection'
import BlogSection from './components/BlogSection'
import ContactSection from './components/ContactSection'

// Route pages — lazy-loaded so they're only fetched when the user
// navigates to them. Cuts initial JS payload significantly.
const Solutions          = lazy(() => import('./components/Solutions'))
const About              = lazy(() => import('./components/About'))
const Blog               = lazy(() => import('./components/Blog'))
const BlogAi             = lazy(() => import('./components/BlogAi'))
const BlogCRMKeepingUp   = lazy(() => import('./components/BlogCRMKeepingUp'))
const BlogSugarCRMReview = lazy(() => import('./components/BlogSugarCRMReview'))
const ThemePage          = lazy(() => import('./components/ThemePage'))

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={
            <>
              <Seo
                path="/"
                description="Midcoders is a CRM-first studio designing data-driven CRM ecosystems that connect marketing, sales, and support. Strategy, integrations, AI automation, and managed RevOps for SaaS, FinTech, Healthcare, and Education."
                jsonLd={{
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  name: siteConfig.name,
                  url: siteConfig.url,
                  logo: `${siteConfig.url}/android-chrome-512x512.png`,
                  description: siteConfig.description,
                  sameAs: [],
                }}
              />
              <Hero />
              <CrmSection />
              <ServicesSection />
              <AboutSection />
              <PortfolioSection />
              <BlogSection />
              <ContactSection />
            </>
          } />
          <Route path="/theme" element={<ThemePage />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/blog-ai" element={<BlogAi />} />
          <Route path="/blog/blog-crm-keeping-up" element={<BlogCRMKeepingUp />} />
          <Route path="/blog/blog-sugarcrm-review" element={<BlogSugarCRMReview />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App
