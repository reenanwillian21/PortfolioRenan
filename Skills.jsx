import { motion } from 'framer-motion';
import { skills } from './index.js';

const skillLevels = {
  'Lean Six Sigma Black Belt': 95,
  'WCM': 88,
  'Kaizen / VSM': 90,
  'OKR': 85,
  'PMO': 88,
  'DMAIC': 90,
  'SMED': 80,
  '5S': 92,
  'Power BI': 85,
  'Python': 65,
  'R': 60,
  'Excel Avançado': 92,
  'Data Science': 70,
  'Big Data': 55,
  'Gestão de Portfólio': 90,
  'Planejamento Estratégico': 85,
  'Gestão de Investimentos': 88,
  'Coaching': 80,
  'Liderança de Squads': 85,
  'ISO 9001': 90,
  'ISO 14001': 85,
  'ISO 45001': 85,
  'Auditor Interno': 90,
  'Controle Estatístico': 78,
};

const categoryIcons = {
  'Metodologias': '⚙️',
  'Dados & BI': '📊',
  'Gestão': '🎯',
  'Qualidade': '✅',
};

function SkillBar({ name, level, delay }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 14, color: 'var(--text2)', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600 }}>{level}%</span>
      </div>
      <div style={{
        height: 4,
        background: 'var(--surface)',
        borderRadius: 100,
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: '100%',
            borderRadius: 100,
            background: 'linear-gradient(90deg, var(--accent2), var(--accent))',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <main style={{
      minHeight: '100dvh',
      padding: 'calc(var(--nav-h) + 60px) 24px 100px',
      position: 'relative',
      zIndex: 1,
    }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
            Competências
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: 64,
          }}>
            Habilidades &<br />
            <span style={{ color: 'var(--text2)', fontWeight: 400 }}>Ferramentas</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(440px, 1fr))',
          gap: 24,
        }}>
          {Object.entries(skills).map(([category, items], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              style={{
                background: 'var(--bg2)',
                border: '0.5px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 32px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <span style={{ fontSize: 28 }}>{categoryIcons[category]}</span>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 18,
                  fontWeight: 700,
                }}>
                  {category}
                </h3>
              </div>
              {items.map((skill, si) => (
                <SkillBar
                  key={skill}
                  name={skill}
                  level={skillLevels[skill] || 75}
                  delay={ci * 0.1 + si * 0.05}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
