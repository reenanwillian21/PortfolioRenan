import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['Início', 'Sobre', 'Experiência', 'Projetos', 'Habilidades', 'Contato'];

export default function Nav({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 'var(--nav-h)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 32px',
          background: scrolled ? 'rgba(9,11,15,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '0.5px solid var(--border)' : '0.5px solid transparent',
          transition: 'background 0.4s, backdrop-filter 0.4s, border-color 0.4s',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNav('Início')}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 18,
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            marginRight: 'auto',
          }}
        >
          <span style={{ color: 'var(--accent)' }}>R</span>ENAN<span style={{ color: 'var(--text3)' }}>.</span>
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="nav-desktop">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              style={{
                padding: '8px 16px',
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 500,
                color: activePage === link ? 'var(--accent)' : 'var(--text2)',
                background: activePage === link ? 'var(--accent-glow)' : 'transparent',
                transition: 'all 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => { if (activePage !== link) e.currentTarget.style.color = 'var(--text)'; }}
              onMouseLeave={e => { if (activePage !== link) e.currentTarget.style.color = 'var(--text2)'; }}
            >
              {link}
            </button>
          ))}
          <a
            href="mailto:renancruz456@gmail.com"
            style={{
              marginLeft: 12,
              padding: '8px 20px',
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--bg)',
              background: 'var(--accent)',
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.01em',
              transition: 'all 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#33d4ff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; }}
          >
            Contato
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-burger"
          aria-label="Menu"
          style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8 }}
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 2,
              background: 'var(--text)',
              borderRadius: 2,
              transition: 'all 0.3s',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                : i === 1 ? 'scaleX(0)'
                : 'rotate(-45deg) translate(5px,-5px)'
                : 'none',
            }} />
          ))}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: 'rgba(9,11,15,0.97)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            {links.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNav(link)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 28,
                  fontWeight: 700,
                  color: activePage === link ? 'var(--accent)' : 'var(--text)',
                  padding: '12px 32px',
                }}
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
