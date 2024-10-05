/* eslint-disable no-unused-vars */
import Navbar from './sections/Navbar.jsx';
import Footer from './sections/Footer.jsx';
// import { Routes, Route } from 'react-router-dom'; 
// import Hero from './sections/Hero.jsx'; // Missing import
// import About from './sections/About.jsx'; // Missing import
// import Contact from './sections/Contact.jsx'; // Missing import
// import Clients from './sections/Clients.jsx'; // Missing import
// import Projects from './sections/Projects.jsx'; // Missing import
// import WorkExperience from './sections/Experience.jsx'; // Missing import

const App = () => {
  return (
    <main className="flex flex-col min-h-screen max-w-5xl mx-auto relative">
        <Navbar />
        <div className="flex-grow">
          {/* <Routes>
            <Route path="/" element={<Hero />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/experience" element={<WorkExperience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> */}
        </div>
        <Footer />
    </main>
  );
};

export default App;
