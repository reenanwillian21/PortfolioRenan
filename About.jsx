import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { profile, education, certifications } from '../data/index.js';

function Section({ children, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const label = (text) => (
  <p style={{
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: 24,
  }}>{text}</p>
);

export default function About() {
  return (
    <main style={{
      minHeight: '100dvh',
      padding: 'calc(var(--nav-h) + 60px) 24px 100px',
      position: 'relative',
      zIndex: 1,
    }}>
      <div className="container">
        <Section>
          {label('Sobre mim')}
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: 32,
          }}>
            Engenheiro que transforma<br />
            <span style={{ color: 'var(--accent)' }}>dados em resultados</span>
          </h2>
          <p style={{
            fontSize: 18,
            color: 'var(--text2)',
            lineHeight: 1.8,
            maxWidth: 680,
            marginBottom: 48,
          }}>
            {profile.summary}
          </p>

          {/* Info chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 72 }}>
            {[
              { icon: '📍', text: profile.location },
              { icon: '📱', text: profile.phone },
              { icon: '✈️', text: 'Disponível para viagens e mudança' },
              { icon: '🇬🇧', text: 'Inglês Intermediário (B1/B2)' },
            ].map((chip, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 18px',
                background: 'var(--surface)',
                border: '0.5px solid var(--border)',
                borderRadius: 100,
                fontSize: 14,
                color: 'var(--text2)',
              }}>
                <span>{chip.icon}</span>
                <span>{chip.text}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section delay={0.1}>
          {label('Formação Acadêmica')}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 72 }}>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  padding: '20px 24px',
                  background: 'var(--bg2)',
                  border: '0.5px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  gap: 16,
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>
                    {edu.degree}
                  </div>
                  <div style={{ color: 'var(--text2)', fontSize: 14 }}>{edu.institution}</div>
                </div>
                <div style={{
                  padding: '4px 14px',
                  borderRadius: 100,
                  background: 'var(--gold-dim)',
                  color: 'var(--gold)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 13,
                  whiteSpace: 'nowrap',
                }}>
                  {edu.year}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section delay={0.2}>
          {label('Certificações & Cursos')}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 12,
          }}>
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4, borderColor: 'rgba(0,200,255,0.3)' }}
                style={{
                  padding: '16px 20px',
                  background: 'var(--bg2)',
                  border: '0.5px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  transition: 'border-color 0.2s',
                }}
              >
                <div style={{ fontWeight: 500, fontSize: 14, marginBottom: 6 }}>{cert.name}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: 'var(--text3)' }}>{cert.org}</span>
                  {cert.year && <span style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600 }}>{cert.year}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
