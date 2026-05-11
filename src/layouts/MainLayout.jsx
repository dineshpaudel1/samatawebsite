import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"



function MainLayout({ children }) {
  return (
    <div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {children}
      </main>
<Footer />
    </div>
  )
}

export default MainLayout