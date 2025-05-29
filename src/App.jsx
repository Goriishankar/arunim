import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import TeamMemberDetails from './components/TeamMemberDetails';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Homepage Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Team />
                <Testimonials />
                <Portfolio />
                <Contact />
              </>
            }
          />
          {/* Team Member Details Route */}
          <Route path="/team/:id" element={<TeamMemberDetails />} />
          {/* Gallery Route */}
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;