import Header from './components/Header';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Features from './components/Features';
import RobotMascots from './components/RobotMascots';
import CtrlPlayGallery from './components/CtrlPlayGallery';
import Tutorials from './components/Tutorials';
import FAQ from './components/FAQ';
import RegistrationForm from './components/ContactForm';
import Footer from './components/Footer';
import TechParticles from './components/TechParticles';

function App() {
  return (
    <div className="min-h-screen bg-blue-50 relative">
      <TechParticles />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Schedule />
        <Features />
        <RobotMascots />
        <CtrlPlayGallery />
        <Tutorials />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
