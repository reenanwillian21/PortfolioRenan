import { motion } from 'framer-motion';
import { profile } from './index.js';

const contactLinks = [
  {
    icon: '✉️',
    label: 'E-mail',
    value: profile.email,
    href: `mailto:${profile.email}`,
    highlight: true,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/renanwmcruz',
    href: profile.linkedin,
    highlight: false,
  },
  {
    icon: '📱',
    label: 'Telefone',
    value: profile.phone,
    href: `tel:+5517996578098`,
    highlight: false,
  },
  {
    icon: '📍',
    label: 'Localização',
    value: profile.location,
    href: null,
    highlight: false,
  },
];

export default function Contact() {
  return (
    <main style={{
      minHeight: '100dvh',
      padding: 'calc(var(--nav-h) + 60px) 24px 100px',
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
    }}>
      <div className="container" style={{ width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}
        >
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20 }}>
            Contato
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            marginBottom: 20,
          }}>
            Vamos conversar<span style={{ color: 'var(--accent)' }}>.</span>
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: 18, lineHeight: 1.65, marginBottom: 56 }}>
            Aberto a novas oportunidades, projetos de melhoria contínua e parcerias estratégicas.
          </p>

          {/* Contact cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 16,
            marginBottom: 48,
            textAlign: 'left',
          }}>
            {contactLinks.map((link, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      padding: '20px 24px',
                      background: link.highlight ? 'var(--accent-glow)' : 'var(--bg2)',
                      border: `0.5px solid ${link.highlight ? 'rgba(0,200,255,0.3)' : 'var(--border)'}`,
                      borderRadius: 'var(--radius)',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                  >
                    <span style={{ fontSize: 24 }}>{link.icon}</span>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>{link.label}</div>
                      <div style={{ fontSize: 14, color: link.highlight ? 'var(--accent)' : 'var(--text)', fontWeight: 500 }}>{link.value}</div>
                    </div>
                  </a>
                ) : (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '20px 24px',
                    background: 'var(--bg2)',
                    border: '0.5px solid var(--border)',
                    borderRadius: 'var(--radius)',
                  }}>
                    <span style={{ fontSize: 24 }}>{link.icon}</span>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>{link.label}</div>
                      <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>{link.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Big CTA */}
          <motion.a
            href={`mailto:${profile.email}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '18px 40px',
              borderRadius: 14,
              background: 'var(--accent)',
              color: 'var(--bg)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 18,
              boxShadow: '0 0 60px rgba(0,200,255,0.3)',
              textDecoration: 'none',
            }}
          >
            Enviar mensagem →
          </motion.a>

          <p style={{ marginTop: 32, fontSize: 13, color: 'var(--text3)' }}>
            Disponível para mudança e viagens · Catanduva – SP
          </p>
        </motion.div>
      </div>
    </main>
  );
}
