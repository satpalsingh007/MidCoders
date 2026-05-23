import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import ThemePage from './components/ThemePage'
import CrmSection from './components/CrmSection'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
           <>
            <Hero />
            <CrmSection />
          </>
        } />
        <Route path="/theme" element={<ThemePage />} />
        {/* your other routes */}
      </Routes>
    </Router>
  )
}

export default App