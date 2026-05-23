import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Achievements } from './components/Achievements';
import { Career } from './components/Career';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

function App() {
  const [modalType, setModalType] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (type: string) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay resetting modalType to allow close animation to finish
    setTimeout(() => {
      setModalType(null);
    }, 200);
  };

  return (
    <div className="relative font-sans text-ink bg-canvas min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About onOpenModal={handleOpenModal} />

      {/* Key Achievements */}
      <Achievements />

      {/* Career Timeline */}
      <Career />

      {/* Key Projects */}
      <Projects onOpenModal={handleOpenModal} />

      {/* Skills & Tools */}
      <Skills onOpenModal={handleOpenModal} />

      {/* Education */}
      <Education />

      {/* Contact Connect */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Global Interactive Modal */}
      <Modal 
        isOpen={isModalOpen} 
        type={modalType} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}

export default App;
