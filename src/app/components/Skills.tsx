import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const skillGroups = [
  {
    category: 'Product & Strategy',
    emoji: '🧠',
    skills: [
      'Hypothesis-Driven Analysis',
      'MECE Framework',
      'MVP Scoping',
      'Priority Matrix',
      'User Persona Synthesis',
      'Stakeholder Management',
      'Product Discovery',
      'Go-to-Market Strategy',
    ],
    accentIndex: 1,
  },
  {
    category: 'Research & Design',
    emoji: '🔍',
    skills: [
      'Qualitative Research',
      'User Interviews',
      'Figma',
      'UX Design',
      'Journey Mapping',
      'Competitive Analysis',
      'Wireframing',
    ],
    accentIndex: 2,
  },
  {
    category: 'Technical',
    emoji: '⚙️',
    skills: [
      'React',
      'Node.js',
      'JavaScript',
      'Firebase',
      'Microsoft Excel',
      'Data Modelling',
      'PowerPoint Storytelling',
    ],
    accentIndex: 0,
  },
  {
    category: 'Leadership',
    emoji: '🚀',
    skills: [
      'Cross-functional Teams',
      'Event Management',
      'Crisis Management',
      'Operations Leadership',
      'Stakeholder Communication',
    ],
    accentIndex: 3,
  },
];

const interests = [
  { label: 'Lawn Tennis', icon: '🎾' },
  { label: 'Swimming', icon: '🏊' },
  { label: 'Fiction Reading', icon: '📚' },
  { label: 'Philosophy', icon: '🧘' },
  { label: 'Music', icon: '🎵' },
];

export function Skills() {
  const { c, isDark } = useTheme();

  const accentColors = [c.accent1, c.accent2, c.accent3, c.accent4];

  return (
    <section
      id="skills"
      style={{
        background: isDark ? c.bgSurface : c.bg,
        padding: '6rem 2.5rem',
        transition: 'background 0.4s ease',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div
            style={{
              fontFamily: 'Space Mono',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              color: isDark ? c.accent1 : c.accent2,
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            // 04 — Capabilities
          </div>
          <h2
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              color: c.text,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              transition: 'color 0.4s ease',
            }}
          >
            Skills &{' '}
            <span
              key={`skills-grad-${isDark}`}
              style={{
                backgroundImage: isDark
                  ? `linear-gradient(90deg, ${c.accent1}, ${c.accent4})`
                  : `linear-gradient(90deg, ${c.accent2}, ${c.accent4})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Expertise
            </span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          {skillGroups.map((group, groupIdx) => {
            const accent = accentColors[group.accentIndex];
            return (
              <motion.div
                key={group.category}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -3 }}
                style={{
                  padding: '1.75rem',
                  borderRadius: '16px',
                  background: isDark ? c.bgCard : c.bgSurface,
                  border: `1px solid ${c.border}`,
                  boxShadow: isDark ? `0 0 0 1px ${accent}10` : c.shadowCard,
                  transition: 'background 0.4s ease, box-shadow 0.4s ease',
                }}
              >
                {/* Category header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    marginBottom: '1.25rem',
                    paddingBottom: '1rem',
                    borderBottom: `1px solid ${c.border}`,
                  }}
                >
                  <span style={{ fontSize: '1rem' }}>{group.emoji}</span>
                  <span
                    style={{
                      fontFamily: 'Space Grotesk',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      color: accent,
                      textTransform: 'uppercase',
                    }}
                  >
                    {group.category}
                  </span>
                </div>

                {/* Skill tags */}
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        scale: 1.05,
                        background: isDark ? `${accent}25` : `${accent}50`,
                        borderColor: accent,
                      }}
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '0.75rem',
                        letterSpacing: '0.02em',
                        padding: '4px 10px',
                        borderRadius: '999px',
                        border: `1px solid ${c.borderStrong}`,
                        color: c.textMuted,
                        background: 'transparent',
                        cursor: 'default',
                        transition: 'all 0.2s ease',
                        display: 'inline-block',
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interests row */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div
            style={{
              fontFamily: 'Space Mono',
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: c.textSubtle,
              marginBottom: '1rem',
            }}
          >
            Beyond Work
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {interests.map((item, i) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -3, scale: 1.04 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  background: isDark ? c.bgCard : c.bgSurface,
                  border: `1px solid ${c.border}`,
                  boxShadow: c.shadow,
                  cursor: 'default',
                  transition: 'background 0.3s ease',
                }}
              >
                <span style={{ fontSize: '0.9rem' }}>{item.icon}</span>
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '0.8rem',
                    color: c.textMuted,
                    transition: 'color 0.3s ease',
                  }}
                >
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}