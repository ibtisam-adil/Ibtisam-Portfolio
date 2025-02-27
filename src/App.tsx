import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact';

function App() {

  return (
    <Routes>
      <Route path="/*" element={<Layout />} >
      <Route index element={<About />} />
      <Route path="about" element={<About />} />
      <Route path='resume' element={<Resume />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
