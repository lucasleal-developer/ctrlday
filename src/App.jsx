import Header from './components/Header';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Features from './components/Features';
import FAQ from './components/FAQ';
import RegistrationForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <main>
        <Hero />
        <Schedule />
        <Features />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
