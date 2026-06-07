import { motion } from 'framer-motion';
import { profile, results } from '../data/index.js';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Home({ setActivePage }) {
  return (
    <main style={{
      minHeight: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'calc(var(--nav-h) + 40px) 24px 80px',
      position: 'relative',
      zIndex: 1,
    }}>
      <div className="container">
        {/* Tag */}
        <motion.div {...fadeUp(0.1)} style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'var(--accent-glow)',
          border: '0.5px solid rgba(0,200,255,0.25)',
          borderRadius: 100,
          padding: '6px 16px',
          marginBottom: 32,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', flexShrink: 0, boxShadow: '0 0 8px var(--green)' }} />
          <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Disponível para oportunidades
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 {...fadeUp(0.2)} style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(42px, 7vw, 88px)',
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          marginBottom: 20,
          color: 'var(--text)',
        }}>
          Renan<br />
          <span style={{
            WebkitTextStroke: '1px rgba(0,200,255,0.4)',
            color: 'transparent',
          }}>
            W. M. da Cruz
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p {...fadeUp(0.3)} style={{
          fontSize: 'clamp(16px, 2.5vw, 22px)',
          color: 'var(--text2)',
          fontWeight: 300,
          maxWidth: 560,
          lineHeight: 1.5,
          marginBottom: 40,
        }}>
          {profile.role} — <span style={{ color: 'var(--gold)' }}>+8 anos</span> transformando processos em resultados mensuráveis.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 80 }}>
          <button
            onClick={() => setActivePage('Projetos')}
            style={{
              padding: '14px 32px',
              borderRadius: 10,
              background: 'var(--accent)',
              color: 'var(--bg)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: '0.01em',
              transition: 'all 0.2s',
              boxShadow: '0 0 30px rgba(0,200,255,0.25)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 40px rgba(0,200,255,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 30px rgba(0,200,255,0.25)'; }}
          >
            Ver Projetos →
          </button>
          <a
            href="mailto:renancruz456@gmail.com"
            style={{
              padding: '14px 32px',
              borderRadius: 10,
              background: 'transparent',
              color: 'var(--text)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 15,
              border: '0.5px solid var(--border2)',
              transition: 'all 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--text)'; }}
          >
            Entrar em contato
          </a>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 1,
            background: 'var(--border)',
            borderRadius: 16,
            overflow: 'hidden',
            border: '0.5px solid var(--border)',
          }}
        >
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.08 }}
              style={{
                padding: '20px 24px',
                background: 'var(--bg2)',
                textAlign: 'center',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg3)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg2)'; }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 3vw, 26px)',
                fontWeight: 800,
                color: 'var(--accent)',
                marginBottom: 4,
              }}>
                {r.value}
              </div>
              <div style={{ fontSize: 11, color: 'var(--text3)', lineHeight: 1.3, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {r.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, delay: 2, repeat: Infinity }}
          style={{ marginTop: 48, textAlign: 'center', color: 'var(--text3)', fontSize: 12 }}
        >
          ↓ Role para explorar
        </motion.div>
      </div>
    </main>
  );
}
