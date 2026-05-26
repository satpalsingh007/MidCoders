import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import ThemePage from './components/ThemePage'
import CrmSection from './components/CrmSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import PortfolioSection from './components/PortfolioSection'
import BlogSection from './components/BlogSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Seo from './components/Seo'
import siteConfig from './lib/siteConfig'
import Solutions from './components/Solutions'
import About from './components/About'
import Blog from './components/Blog'
import BlogAi from './components/BlogAi'
import BlogCRMKeepingUp from './components/BlogCRMKeepingUp'
import BlogSugarCRMReview from './components/BlogSugarCRMReview'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
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
        {/* your other routes */}
      </Routes>
       <Footer />
    </Router>
  )
}

export default App