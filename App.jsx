import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Background3D from './components/Background3D.jsx';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';

const pageMap = {
  'Início': Home,
  'Sobre': About,
  'Experiência': Experience,
  'Projetos': Projects,
  'Habilidades': Skills,
  'Contato': Contact,
};

const pageTransition = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
};

export default function App() {
  const [activePage, setActivePage] = useState('Início');
  const PageComponent = pageMap[activePage] || Home;

  return (
    <div style={{ position: 'relative' }}>
      <Background3D />
      <Nav activePage={activePage} setActivePage={setActivePage} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          {...pageTransition}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <PageComponent setActivePage={setActivePage} />
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <footer style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '0.5px solid var(--border)',
        padding: '24px',
        textAlign: 'center',
        color: 'var(--text3)',
        fontSize: 13,
      }}>
        © 2026 Renan W. M. da Cruz · Engenheiro de Projetos
      </footer>
    </div>
  );
}
