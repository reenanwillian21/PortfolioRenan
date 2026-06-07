import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/index.js';

const categories = ['Todos', ...new Set(projects.map(p => p.category))];

const impactColor = {
  'Muito Alto': { bg: 'rgba(0,200,255,0.12)', color: '#00c8ff' },
  'Alto': { bg: 'rgba(34,197,94,0.12)', color: '#22c55e' },
  'Médio': { bg: 'rgba(240,180,41,0.12)', color: '#f0b429' },
};

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(8px)',
              zIndex: 200,
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 40 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            style={{
              position: 'fixed',
              zIndex: 201,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: 'min(720px, calc(100vw - 32px))',
              maxHeight: 'calc(100dvh - 48px)',
              overflowY: 'auto',
              background: 'var(--bg2)',
              border: '0.5px solid var(--border2)',
              borderRadius: 24,
              padding: 'clamp(24px, 5vw, 48px)',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24, gap: 16 }}>
              <div>
                <span style={{ fontSize: 40 }}>{project.icon}</span>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12, marginBottom: 8 }}>
                  <span style={{
                    padding: '3px 12px',
                    borderRadius: 100,
                    background: 'var(--accent-glow)',
                    color: 'var(--accent)',
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}>
                    {project.category}
                  </span>
                  <span style={{
                    padding: '3px 12px',
                    borderRadius: 100,
                    background: impactColor[project.impact]?.bg,
                    color: impactColor[project.impact]?.color,
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}>
                    Impacto {project.impact}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'var(--surface)',
                  color: 'var(--text2)',
                  fontSize: 18,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '0.5px solid var(--border)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface2)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; }}
              >
                ×
              </button>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 8,
            }}>
              {project.title}
            </h2>
            <p style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 500, marginBottom: 24 }}>
              {project.company} · {project.year}
            </p>
            <p style={{ color: 'var(--text2)', fontSize: 15, lineHeight: 1.75, marginBottom: 32 }}>
              {project.description}
            </p>

            {/* Details grid */}
            {[
              { label: '🎯 Desafio', content: project.challenge, accent: 'rgba(240,180,41,0.1)', border: 'rgba(240,180,41,0.2)' },
              { label: '💡 Solução', content: project.solution, accent: 'rgba(0,200,255,0.06)', border: 'rgba(0,200,255,0.2)' },
              { label: '📈 Resultado', content: project.result, accent: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.2)' },
            ].map((block, i) => (
              <div key={i} style={{
                padding: '20px 24px',
                background: block.accent,
                border: `0.5px solid ${block.border}`,
                borderRadius: 12,
                marginBottom: 16,
              }}>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {block.label}
                </div>
                <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.7 }}>{block.content}</p>
              </div>
            ))}

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
              {project.tags.map((tag, i) => (
                <span key={i} style={{
                  padding: '4px 12px',
                  borderRadius: 6,
                  background: 'var(--surface)',
                  border: '0.5px solid var(--border)',
                  fontSize: 12,
                  color: 'var(--text2)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('Todos');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'Todos' ? projects : projects.filter(p => p.category === filter);

  return (
    <main style={{
      minHeight: '100dvh',
      padding: 'calc(var(--nav-h) + 60px) 24px 100px',
      position: 'relative',
      zIndex: 1,
    }}>
      <div className="container">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
            Portfólio
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: 16,
          }}>
            Projetos &<br />
            <span style={{ color: 'var(--accent)' }}>Resultados</span>
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: 16, marginBottom: 40, maxWidth: 560 }}>
            Projetos reais com impacto mensurável — de Lean Six Sigma a gestão de portfólios multimilionários.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 48 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 500,
                border: '0.5px solid',
                borderColor: filter === cat ? 'var(--accent)' : 'var(--border)',
                background: filter === cat ? 'var(--accent-glow)' : 'transparent',
                color: filter === cat ? 'var(--accent)' : 'var(--text2)',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 20,
        }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelected(project)}
                style={{
                  background: 'var(--bg2)',
                  border: '0.5px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,200,255,0.3)';
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,200,255,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 32 }}>{project.icon}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                    <span style={{
                      padding: '3px 10px',
                      borderRadius: 100,
                      background: impactColor[project.impact]?.bg,
                      color: impactColor[project.impact]?.color,
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}>
                      {project.impact}
                    </span>
                    <span style={{ fontSize: 12, color: 'var(--text3)' }}>{project.year}</span>
                  </div>
                </div>

                {/* Title + company */}
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 18,
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginBottom: 6,
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 500 }}>
                    {project.company}
                  </p>
                </div>

                {/* Description preview */}
                <p style={{
                  fontSize: 13,
                  color: 'var(--text2)',
                  lineHeight: 1.65,
                  flexGrow: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {project.tags.slice(0, 3).map((tag, j) => (
                    <span key={j} style={{
                      padding: '3px 10px',
                      borderRadius: 6,
                      background: 'var(--surface)',
                      border: '0.5px solid var(--border)',
                      fontSize: 11,
                      color: 'var(--text3)',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--accent)', fontSize: 13, fontWeight: 600 }}>
                  <span>Ver detalhes</span>
                  <span>→</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
