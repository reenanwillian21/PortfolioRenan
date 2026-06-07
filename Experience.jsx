import { motion } from 'framer-motion';
import { experiences } from './index.js';

export default function Experience() {
  return (
    <main style={{
      minHeight: '100dvh',
      padding: 'calc(var(--nav-h) + 60px) 24px 100px',
      position: 'relative',
      zIndex: 1,
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
            Trajetória
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: 64,
          }}>
            Experiência<br />
            <span style={{ color: 'var(--text2)', fontWeight: 400 }}>Profissional</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 32 }}>
          {/* Line */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 12,
            bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, var(--accent), var(--border) 90%, transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'relative' }}
              >
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: -38,
                  top: 16,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: exp.current ? 'var(--accent)' : 'var(--bg3)',
                  border: exp.current ? '2px solid var(--accent)' : '2px solid var(--border2)',
                  boxShadow: exp.current ? '0 0 16px var(--accent)' : 'none',
                  zIndex: 2,
                }} />

                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: 'var(--bg2)',
                    border: exp.current ? '0.5px solid rgba(0,200,255,0.3)' : '0.5px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '28px 32px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {exp.current && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: 'linear-gradient(90deg, var(--accent), transparent)',
                    }} />
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 20,
                      fontWeight: 700,
                      color: 'var(--text)',
                    }}>
                      {exp.title}
                    </h3>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                      {exp.current && (
                        <span style={{
                          padding: '4px 12px',
                          borderRadius: 100,
                          background: 'rgba(34,197,94,0.12)',
                          color: 'var(--green)',
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}>
                          ● Atual
                        </span>
                      )}
                      <span style={{
                        padding: '4px 14px',
                        borderRadius: 100,
                        background: 'var(--surface)',
                        color: 'var(--text2)',
                        fontSize: 12,
                        fontWeight: 500,
                        border: '0.5px solid var(--border)',
                      }}>
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 500, marginBottom: 20 }}>
                    {exp.company}
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} style={{
                        display: 'flex',
                        gap: 12,
                        fontSize: 14,
                        color: 'var(--text2)',
                        lineHeight: 1.6,
                      }}>
                        <span style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }}>▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
