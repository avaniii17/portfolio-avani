import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const experiences = [
  {
    org: 'DRDO',
    fullName: 'Defence Research & Development Organisation',
    role: 'Summer Research Intern',
    type: 'Merit-Based Selection',
    period: 'Jun 2024 – Jul 2024',
    location: 'Delhi, India',
    bullets: [
      'Selected via competitive national screening for rigorous experimental research on defence systems.',
      'Conducted high-security research with precise data modelling on PMN-PT material; presented findings to senior scientists.',
    ],
    accentIndex: 0,
  },
  {
    org: 'BoldWeb Studio',
    fullName: 'BoldWeb Studio',
    role: 'UI/UX Design Intern',
    type: 'Remote',
    period: 'Dec 2023 – Jul 2024',
    location: 'Remote',
    bullets: [
      'Redesigned website interfaces driving a 25% increase in engagement; grew a new social handle from 0 → 500+ followers in 7 months.',
      'Translated design concepts into implementation-ready screens, reducing developer friction and improving information clarity.',
    ],
    accentIndex: 1,
  },
  {
    org: 'NIT Hamirpur',
    fullName: 'National Institute of Technology, Hamirpur',
    role: 'Club Coordinator',
    type: 'Position of Responsibility',
    period: 'Aug 2023 – Present',
    location: 'Hamirpur, HP',
    bullets: [
      'Coordinated 10+ academic/technical guest lectures; managed external stakeholder communication and event timelines.',
      'Led cross-functional teams of 15+ members under strict deadlines for high-pressure events.',
    ],
    accentIndex: 2,
  },
];

export function Experience() {
  const { c, isDark } = useTheme();

  const accentColors = [c.accent1, c.accent2, c.accent3];

  return (
    <section
      id="experience"
      style={{
        background: c.bg,
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
              color: isDark ? c.accent3 : c.accent2,
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            // 03 — Background
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
            Work &{' '}
            <span
              key={`exp-grad-${isDark}`}
              style={{
                backgroundImage: isDark
                  ? `linear-gradient(90deg, ${c.accent3}, ${c.accent1})`
                  : `linear-gradient(90deg, ${c.accent3}, ${c.accent2})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Research
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '0',
              top: '12px',
              bottom: '12px',
              width: '1px',
              background: isDark
                ? `linear-gradient(to bottom, ${c.accent1}50, ${c.accent2}50, ${c.accent3}50)`
                : `linear-gradient(to bottom, ${c.accent2}60, ${c.accent3}60, ${c.accent1}60)`,
              transition: 'background 0.4s ease',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', paddingLeft: '2.5rem' }}>
            {experiences.map((exp, index) => {
              const accent = accentColors[exp.accentIndex];
              return (
                <motion.div
                  key={exp.org}
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  style={{ position: 'relative' }}
                >
                  {/* Timeline dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-2.5rem',
                      top: '1rem',
                      transform: 'translateX(-50%)',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: accent,
                      boxShadow: isDark ? `0 0 12px ${accent}` : 'none',
                      border: `2px solid ${isDark ? c.bg : c.bgSurface}`,
                      zIndex: 1,
                      transition: 'background 0.4s ease, box-shadow 0.4s ease',
                    }}
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    style={{
                      padding: '1.75rem 2rem',
                      borderRadius: '16px',
                      background: isDark ? c.bgCard : c.bgSurface,
                      border: `1px solid ${c.border}`,
                      borderLeft: `3px solid ${accent}`,
                      boxShadow: c.shadowCard,
                      transition: 'background 0.4s ease, border-color 0.4s ease',
                    }}
                  >
                    {/* Header row */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '0.3rem',
                          }}
                        >
                          <Briefcase size={13} color={accent} />
                          <span
                            style={{
                              fontFamily: 'Space Mono',
                              fontSize: '0.65rem',
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                              color: accent,
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <h3
                          style={{
                            fontFamily: 'Space Grotesk',
                            fontSize: '1.2rem',
                            fontWeight: 700,
                            color: c.text,
                            letterSpacing: '-0.02em',
                            marginBottom: '0.2rem',
                            transition: 'color 0.4s ease',
                          }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          style={{
                            fontFamily: 'Inter',
                            fontSize: '0.85rem',
                            color: c.textMuted,
                            transition: 'color 0.4s ease',
                          }}
                        >
                          {exp.fullName}
                        </p>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            justifyContent: 'flex-end',
                            marginBottom: '0.25rem',
                          }}
                        >
                          <Calendar size={11} color={c.textMuted} />
                          <span
                            style={{
                              fontFamily: 'Space Mono',
                              fontSize: '0.65rem',
                              letterSpacing: '0.05em',
                              color: c.textMuted,
                            }}
                          >
                            {exp.period}
                          </span>
                        </div>
                        <span
                          style={{
                            fontFamily: 'Space Mono',
                            fontSize: '0.62rem',
                            letterSpacing: '0.05em',
                            color: c.textSubtle,
                          }}
                        >
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {exp.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            gap: '0.75rem',
                            alignItems: 'flex-start',
                          }}
                        >
                          <span
                            style={{
                              display: 'block',
                              width: '5px',
                              height: '5px',
                              borderRadius: '50%',
                              background: accent,
                              marginTop: '0.45rem',
                              flexShrink: 0,
                              boxShadow: isDark ? `0 0 6px ${accent}` : 'none',
                            }}
                          />
                          <span
                            style={{
                              fontFamily: 'Inter',
                              fontSize: '0.85rem',
                              lineHeight: 1.65,
                              color: c.textMuted,
                              transition: 'color 0.4s ease',
                            }}
                          >
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ marginTop: '3rem' }}
        >
          <div
            style={{
              fontFamily: 'Space Mono',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              color: isDark ? c.accent4 : c.textMuted,
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            // Education
          </div>
          <motion.div
            whileHover={{ x: 4 }}
            style={{
              padding: '1.75rem 2rem',
              borderRadius: '16px',
              background: isDark ? c.bgCard : c.bgSurface,
              border: `1px solid ${c.border}`,
              borderLeft: `3px solid ${isDark ? c.accent4 : c.accent4}`,
              boxShadow: c.shadowCard,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '1rem',
              transition: 'background 0.4s ease',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                }}
              >
                <GraduationCap size={13} color={isDark ? c.accent4 : '#C05621'} />
                <span
                  style={{
                    fontFamily: 'Space Mono',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: isDark ? c.accent4 : '#C05621',
                  }}
                >
                  B.Tech · Electrical Engineering
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: c.text,
                  letterSpacing: '-0.02em',
                  marginBottom: '0.25rem',
                  transition: 'color 0.4s ease',
                }}
              >
                NIT Hamirpur
              </h3>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '0.82rem',
                  color: c.textMuted,
                  transition: 'color 0.4s ease',
                }}
              >
                National Institute of Technology, Hamirpur
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div
                style={{
                  fontFamily: 'Space Mono',
                  fontSize: '0.65rem',
                  letterSpacing: '0.05em',
                  color: c.textMuted,
                  marginBottom: '0.4rem',
                }}
              >
                Nov 2022 – Jun 2026
              </div>
              <div
                style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: isDark ? c.accent4 : '#C05621',
                }}
              >
                7.3 / 10
              </div>
              <div
                style={{
                  fontFamily: 'Space Mono',
                  fontSize: '0.6rem',
                  color: c.textSubtle,
                }}
              >
                CGPA
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}