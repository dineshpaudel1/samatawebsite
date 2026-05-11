import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Admission from '../pages/Admission'
import Program from '../pages/Program'
import Contact from '../pages/Contact'


function AppRoutes() {
  return (
    <Routes>
      <Route path="/samatawebsite/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="admissions" element={<Admission />} />
      <Route path="programs" element={<Program />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRoutes