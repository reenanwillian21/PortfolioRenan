import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Background3D from './Background3D.jsx';
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';

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
