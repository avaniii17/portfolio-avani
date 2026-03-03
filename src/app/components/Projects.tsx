import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { Trophy, Brain, MessageSquare, TrendingUp, Users, FileSearch, Zap, Clock } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function Tag({ label, color, isDark }: { label: string; color: string; isDark: boolean }) {
  const { c } = useTheme();
  return (
    <span
      style={{
        fontFamily: 'Space Mono',
        fontSize: '0.65rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '3px 10px',
        borderRadius: '999px',
        border: `1px solid ${color}`,
        color: isDark ? color : c.text,
        background: isDark ? `${color}12` : `${color}30`,
        whiteSpace: 'nowrap',
        transition: 'all 0.3s ease',
      }}
    >
      {label}
    </span>
  );
}

export function Projects() {
  const { c, isDark } = useTheme();

  const tagColors = [c.accent1, c.accent2, c.accent3, c.accent4, c.accent5];

  return (
    <section
      id="projects"
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
              color: isDark ? c.accent2 : c.accent2,
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            // 02 — Portfolio
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
            Selected
            <br />
            <span
              key={`projects-grad-${isDark}`}
              style={{
                backgroundImage: isDark
                  ? `linear-gradient(90deg, ${c.accent2}, ${c.accent5})`
                  : `linear-gradient(90deg, ${c.accent2}, ${c.accent1})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Projects
            </span>
          </h2>
        </motion.div>

        {/* PUPA — Flagship PM Project */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          whileHover={{ y: -4 }}
          style={{
            marginBottom: '2rem',
            borderRadius: '20px',
            background: isDark ? c.bgCard : c.bgSurface,
            border: `1px solid ${c.border}`,
            boxShadow: isDark
              ? `0 0 0 1px ${c.accent1}20, 0 20px 60px rgba(0,0,0,0.6)`
              : `0 8px 40px rgba(0,0,0,0.06)`,
            overflow: 'hidden',
            transition: 'background 0.4s ease, box-shadow 0.4s ease',
          }}
        >
          {/* Top color bar */}
          <div
            style={{
              height: '3px',
              background: isDark
                ? `linear-gradient(90deg, ${c.accent1}, ${c.accent3}, ${c.accent2})`
                : `linear-gradient(90deg, ${c.accent2}, ${c.accent3}, ${c.accent1})`,
            }}
          />

          <div style={{ padding: '2.5rem' }}>
            {/* Badge + Title row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    background: isDark ? `${c.accent1}15` : `${c.accent3}50`,
                    border: `1px solid ${isDark ? c.accent1 : c.accent3}`,
                    marginBottom: '1rem',
                  }}
                >
                  <Brain size={11} color={isDark ? c.accent1 : '#2D9469'} />
                  <span
                    style={{
                      fontFamily: 'Space Mono',
                      fontSize: '0.62rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: isDark ? c.accent1 : '#2D9469',
                    }}
                  >
                    Flagship PM Project · Jan 2024–Present
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '2rem',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    color: c.text,
                    lineHeight: 1,
                    marginBottom: '0.4rem',
                    transition: 'color 0.4s ease',
                  }}
                >
                  PUPA
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '0.9rem',
                    color: c.textMuted,
                    transition: 'color 0.4s ease',
                  }}
                >
                  Mental Health Tech Platform · Own Startup
                </p>
              </div>

              <div
                style={{
                  fontFamily: 'Space Mono',
                  fontSize: '0.65rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: isDark ? c.accent5 : c.textMuted,
                  border: `1px solid ${isDark ? c.accent5 : c.borderStrong}`,
                  padding: '6px 14px',
                  borderRadius: '8px',
                  whiteSpace: 'nowrap',
                  alignSelf: 'flex-start',
                }}
              >
                Founder & Product Lead
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: 'Inter',
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: c.textMuted,
                maxWidth: '640px',
                marginBottom: '2rem',
                transition: 'color 0.4s ease',
              }}
            >
              Bridging the gap between mental health care and accessible technology. Led end-to-end
              product discovery for a digital mental wellness platform — from zero to a validated MVP
              strategy backed by deep qualitative research.
            </p>

            {/* PM Process */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem',
              }}
            >
              {[
                {
                  icon: <FileSearch size={16} color={isDark ? c.accent1 : '#7C3AED'} />,
                  title: 'Discovery',
                  desc: 'Synthesised 70+ user interviews into 3 distinct stress-point personas',
                  color: isDark ? c.accent1 : '#7C3AED',
                },
                {
                  icon: <TrendingUp size={16} color={isDark ? c.accent3 : '#059669'} />,
                  title: 'Prioritisation',
                  desc: 'Priority matrix balancing technical feasibility with user impact',
                  color: isDark ? c.accent3 : '#059669',
                },
                {
                  icon: <Users size={16} color={isDark ? c.accent2 : '#DB2777'} />,
                  title: 'Stakeholders',
                  desc: 'Collaborated with 20+ therapists on clinical workflows & legal standards',
                  color: isDark ? c.accent2 : '#DB2777',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: '1.2rem',
                    borderRadius: '12px',
                    background: isDark ? '#ffffff04' : '#00000004',
                    border: `1px solid ${c.border}`,
                    transition: 'background 0.4s ease',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.6rem',
                    }}
                  >
                    {item.icon}
                    <span
                      style={{
                        fontFamily: 'Space Grotesk',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: item.color,
                      }}
                    >
                      {item.title}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '0.8rem',
                      lineHeight: 1.6,
                      color: c.textMuted,
                      transition: 'color 0.4s ease',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['User Research', 'Persona Synthesis', 'MVP Scoping', 'Priority Matrix', 'Stakeholder Management', 'Mental Health'].map(
                (tag, i) => (
                  <Tag key={tag} label={tag} color={tagColors[i % tagColors.length]} isDark={isDark} />
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* 2-column grid for smaller projects */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* EcoBeach */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -4 }}
            style={{
              borderRadius: '16px',
              background: isDark ? c.bgCard : c.bgSurface,
              border: `1px solid ${c.border}`,
              boxShadow: isDark
                ? `0 0 0 1px ${c.accent4}15, 0 16px 40px rgba(0,0,0,0.5)`
                : c.shadowCard,
              overflow: 'hidden',
              transition: 'background 0.4s ease, box-shadow 0.4s ease',
            }}
          >
            <div
              style={{
                height: '3px',
                background: isDark
                  ? `linear-gradient(90deg, ${c.accent4}, ${c.accent5})`
                  : `linear-gradient(90deg, ${c.accent4}, ${c.accent1})`,
              }}
            />
            <div style={{ padding: '2rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    background: isDark ? `${c.accent4}15` : `${c.accent4}40`,
                    border: `1px solid ${isDark ? c.accent4 : c.accent4}`,
                  }}
                >
                  <Trophy size={11} color={isDark ? c.accent4 : '#C05621'} />
                  <span
                    style={{
                      fontFamily: 'Space Mono',
                      fontSize: '0.6rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: isDark ? c.accent4 : '#C05621',
                    }}
                  >
                    3rd Place · Feb 2024
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'Space Mono',
                    fontSize: '0.6rem',
                    letterSpacing: '0.08em',
                    color: c.textMuted,
                  }}
                >
                  MLH Hackathon
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: c.text,
                  marginBottom: '0.3rem',
                  transition: 'color 0.4s ease',
                }}
              >
                EcoBeach
              </h3>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '0.8rem',
                  color: c.textMuted,
                  marginBottom: '1rem',
                  transition: 'color 0.4s ease',
                }}
              >
                NGO-Volunteer Coordination Platform
              </p>

              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '0.85rem',
                  lineHeight: 1.7,
                  color: c.textMuted,
                  marginBottom: '1.5rem',
                  transition: 'color 0.4s ease',
                }}
              >
                Built in a 24-hour sprint at Electrothon. Focused on scalable volunteer discovery
                and real-time event registration. Ranked Top 3 for "Problem Clarity and Execution Quality"
                among national participants.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Clock size={12} color={isDark ? c.accent4 : '#C05621'} />
                <span
                  style={{
                    fontFamily: 'Space Mono',
                    fontSize: '0.65rem',
                    letterSpacing: '0.08em',
                    color: isDark ? c.accent4 : '#C05621',
                  }}
                >
                  24-Hour Build
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {['Hackathon', 'UX Design', 'Product Strategy', 'Rapid Prototype'].map((tag, i) => (
                  <Tag key={tag} label={tag} color={[c.accent4, c.accent5, c.accent1, c.accent2][i]} isDark={isDark} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Chat App */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -4 }}
            style={{
              borderRadius: '16px',
              background: isDark ? c.bgCard : c.bgSurface,
              border: `1px solid ${c.border}`,
              boxShadow: isDark
                ? `0 0 0 1px ${c.accent3}15, 0 16px 40px rgba(0,0,0,0.5)`
                : c.shadowCard,
              overflow: 'hidden',
              transition: 'background 0.4s ease, box-shadow 0.4s ease',
            }}
          >
            <div
              style={{
                height: '3px',
                background: isDark
                  ? `linear-gradient(90deg, ${c.accent3}, ${c.accent2})`
                  : `linear-gradient(90deg, ${c.accent3}, ${c.accent5})`,
              }}
            />
            <div style={{ padding: '2rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  background: isDark ? `${c.accent3}15` : `${c.accent5}50`,
                  border: `1px solid ${isDark ? c.accent3 : c.accent5}`,
                  marginBottom: '1.25rem',
                }}
              >
                <Zap size={11} color={isDark ? c.accent3 : '#0369A1'} />
                <span
                  style={{
                    fontFamily: 'Space Mono',
                    fontSize: '0.6rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: isDark ? c.accent3 : '#0369A1',
                  }}
                >
                  Personal Project
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: c.text,
                  marginBottom: '0.3rem',
                  transition: 'color 0.4s ease',
                }}
              >
                Real-Time Chat App
              </h3>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '0.8rem',
                  color: c.textMuted,
                  marginBottom: '1rem',
                  transition: 'color 0.4s ease',
                }}
              >
                Full-Stack Messaging System
              </p>

              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '0.85rem',
                  lineHeight: 1.7,
                  color: c.textMuted,
                  marginBottom: '1.5rem',
                  transition: 'color 0.4s ease',
                }}
              >
                Engineered a real-time messaging system with React and Node.js.
                Implemented secure JWT authentication, direct messaging, and group
                chat state management logic.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <MessageSquare size={12} color={isDark ? c.accent3 : '#0369A1'} />
                <span
                  style={{
                    fontFamily: 'Space Mono',
                    fontSize: '0.65rem',
                    letterSpacing: '0.08em',
                    color: isDark ? c.accent3 : '#0369A1',
                  }}
                >
                  JWT · WebSockets · Group Chat
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {['React', 'Node.js', 'JWT Auth', 'Real-Time', 'Firebase'].map((tag, i) => (
                  <Tag key={tag} label={tag} color={[c.accent3, c.accent5, c.accent2, c.accent1, c.accent4][i]} isDark={isDark} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}