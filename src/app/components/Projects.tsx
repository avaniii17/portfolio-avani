import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import { useIsMobile } from '../hooks/useIsMobile';
import { Brain, FileSearch, TrendingUp, Users, Lightbulb, ArrowUpRight, Target, Zap, Award } from 'lucide-react';

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
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const tagColors = [c.accent1, c.accent2, c.accent3, c.accent4, c.accent5];

  return (
    <section
      id="projects"
      style={{
        background: isDark ? c.bgSurface : c.bg,
        padding: isMobile ? '4rem 1.25rem' : '6rem 2.5rem',
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

        {/* Notion AI Case Study */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          whileHover={{ y: -4 }}
          onClick={() => navigate('/case-study/notion')}
          style={{
            marginBottom: '2rem',
            borderRadius: '20px',
            background: isDark ? c.bgCard : c.bgSurface,
            border: `1px solid ${c.border}`,
            boxShadow: isDark
              ? `0 0 0 1px ${c.accent2}20, 0 20px 60px rgba(0,0,0,0.6)`
              : `0 8px 40px rgba(0,0,0,0.06)`,
            overflow: 'hidden',
            transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.3s ease',
            cursor: 'pointer',
          }}
        >
          {/* Top color bar */}
          <div
            style={{
              height: '3px',
              background: isDark
                ? `linear-gradient(90deg, ${c.accent2}, ${c.accent5}, ${c.accent3})`
                : `linear-gradient(90deg, ${c.accent3}, ${c.accent2}, ${c.accent5})`,
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
                    background: isDark ? `${c.accent2}15` : `${c.accent2}40`,
                    border: `1px solid ${isDark ? c.accent2 : c.accent2}`,
                    marginBottom: '1rem',
                  }}
                >
                  <Lightbulb size={11} color={isDark ? c.accent2 : c.accent2} />
                  <span
                    style={{
                      fontFamily: 'Space Mono',
                      fontSize: '0.62rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: isDark ? c.accent2 : c.accent2,
                    }}
                  >
                    Product Case Study · PM Research
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: isMobile ? '1.5rem' : '2rem',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    color: c.text,
                    lineHeight: 1.1,
                    marginBottom: '0.4rem',
                    transition: 'color 0.4s ease',
                  }}
                >
                  Notion AI
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '0.9rem',
                    color: c.textMuted,
                    transition: 'color 0.4s ease',
                  }}
                >
                  Handwritten Notes → Digital Pages · Feature Discovery Gap
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
                Product Manager
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
              Notion AI can already turn handwritten notes into structured digital pages — but the feature is invisible exactly when users need it. This case study explores the UX gap, the user research behind it, and a solution to bring this capability to the forefront of the page creation flow.
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
                  icon: <FileSearch size={16} color={isDark ? c.accent2 : '#7C3AED'} />,
                  title: 'User Research',
                  desc: 'Identified the gap: students & researchers blocked by typing, not ideation',
                  color: isDark ? c.accent2 : '#7C3AED',
                },
                {
                  icon: <TrendingUp size={16} color={isDark ? c.accent3 : '#059669'} />,
                  title: 'Prioritisation',
                  desc: 'Impact-Energy framework to define MVP vs V2 scope with clear tradeoffs',
                  color: isDark ? c.accent3 : '#059669',
                },
                {
                  icon: <Users size={16} color={isDark ? c.accent5 : '#DB2777'} />,
                  title: 'Solution Design',
                  desc: '"Import from Handwritten Notes" surfaced at page creation — 7-step user flow',
                  color: isDark ? c.accent5 : '#DB2777',
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
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
              {['Product Thinking', 'UX Research', 'Feature Discovery', 'Notion AI', 'User Flow', 'Success Metrics'].map(
                (tag, i) => (
                  <Tag key={tag} label={tag} color={tagColors[i % tagColors.length]} isDark={isDark} />
                )
              )}
            </div>

            {/* View Case Study Button */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                border: `1px solid ${isDark ? c.accent2 : c.accent2}`,
                background: isDark ? `${c.accent2}12` : `${c.accent2}12`,
                fontFamily: 'Space Mono',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: isDark ? c.accent2 : c.accent2,
                transition: 'background 0.3s ease',
              }}
            >
              <a href="https://medium.com/@avanisri1411/notion-ai-can-turn-your-handwritten-notes-into-digital-pages-so-why-cant-you-find-the-feature-69e9141cd836"
                target="_blank"
                rel="noopener noreferrer">
                View Case Study</a>
              <ArrowUpRight size={14} />
            </div>
          </div>
        </motion.div>
        {/* PUPA — Flagship PM Project */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          whileHover={{ y: -4 }}
          onClick={() => navigate('/case-study/pupa')}
          style={{
            marginBottom: '2rem',
            borderRadius: '20px',
            background: isDark ? c.bgCard : c.bgSurface,
            border: `1px solid ${c.border}`,
            boxShadow: isDark
              ? `0 0 0 1px ${c.accent1}20, 0 20px 60px rgba(0,0,0,0.6)`
              : `0 8px 40px rgba(0,0,0,0.06)`,
            overflow: 'hidden',
            transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.3s ease',
            cursor: 'pointer',
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
                    Flagship Product managment Case Study
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
                Product Lead
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
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
              {['User Research', 'Persona Synthesis', 'MVP Scoping', 'Priority Matrix', 'Stakeholder Management', 'Mental Health'].map(
                (tag, i) => (
                  <Tag key={tag} label={tag} color={tagColors[i % tagColors.length]} isDark={isDark} />
                )
              )}
            </div>

            {/* View Case Study Button */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                border: `1px solid ${isDark ? c.accent1 : c.accent2}`,
                background: isDark ? `${c.accent1}12` : `${c.accent2}12`,
                fontFamily: 'Space Mono',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: isDark ? c.accent1 : c.accent2,
                transition: 'background 0.3s ease',
              }}
            >
              <a href="https://medium.com/@avanisri1411/pupa-a-safe-cocoon-for-students-who-dont-know-where-to-go-for-their-mental-health-ca445e14848d"
                target="_blank"
                rel="noopener noreferrer">
                View Case Study</a>
              <ArrowUpRight size={14} />
            </div>
          </div>
        </motion.div>
        {/* EcoBeach — Hackathon Build */}
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
              ? `0 0 0 1px ${c.accent3}20, 0 20px 60px rgba(0,0,0,0.6)`
              : `0 8px 40px rgba(0,0,0,0.06)`,
            overflow: 'hidden',
            transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.3s ease',
          }}
        >
          {/* Top color bar */}
          <div
            style={{
              height: '3px',
              background: isDark
                ? `linear-gradient(90deg, ${c.accent3}, ${c.accent5}, ${c.accent1})`
                : `linear-gradient(90deg, ${c.accent1}, ${c.accent5}, ${c.accent3})`,
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
                    background: isDark ? `${c.accent3}15` : `${c.accent3}40`,
                    border: `1px solid ${isDark ? c.accent3 : c.accent3}`,
                    marginBottom: '1rem',
                  }}
                >
                  <Zap size={11} color={isDark ? c.accent3 : '#059669'} />
                  <span
                    style={{
                      fontFamily: 'Space Mono',
                      fontSize: '0.62rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: isDark ? c.accent3 : '#059669',
                    }}
                  >
                    Hackathon Build · NGO Tech
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
                  EcoBeach
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '0.9rem',
                    color: c.textMuted,
                    transition: 'color 0.4s ease',
                  }}
                >
                  NGO–Volunteer Coordination Platform · MLH Electrothon
                </p>
              </div>

              {/* Award badge instead of role badge */}
              <div
                style={{
                  fontFamily: 'Space Mono',
                  fontSize: '0.65rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: isDark ? c.accent3 : '#059669',
                  border: `1px solid ${isDark ? c.accent3 : '#059669'}`,
                  padding: '6px 14px',
                  borderRadius: '8px',
                  whiteSpace: 'nowrap',
                  alignSelf: 'flex-start',
                }}
              >
                🏆 3rd Place — MLH Hackathon
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
              NGO–volunteer coordination is broken — discovery, sign-up, and event tracking live
              in fragmented channels. Built EcoBeach in 24 hours to bridge that gap: a platform
              for scalable volunteer discovery and real-time event registration.
            </p>

            {/* Build Process — 3 cards */}
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
                  icon: <Target size={16} color={isDark ? c.accent3 : '#059669'} />,
                  title: 'Problem Scoping',
                  desc: 'Defined the NGO–volunteer coordination gap before writing a single line of code',
                  color: isDark ? c.accent3 : '#059669',
                },
                {
                  icon: <Zap size={16} color={isDark ? c.accent5 : '#D97706'} />,
                  title: 'Rapid Build',
                  desc: 'Shipped volunteer discovery + real-time event registration in a 24-hour sprint',
                  color: isDark ? c.accent5 : '#D97706',
                },
                {
                  icon: <Award size={16} color={isDark ? c.accent1 : '#7C3AED'} />,
                  title: 'Execution',
                  desc: 'Top 3 nationally — judged on Problem Clarity and Execution Quality',
                  color: isDark ? c.accent1 : '#7C3AED',
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
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
              {['Rapid Prototyping', 'Volunteer Tech', 'NGO Platform', 'MVP in 24hrs', 'MLH Top 3', 'Problem Scoping'].map(
                (tag, i) => (
                  <Tag key={tag} label={tag} color={tagColors[i % tagColors.length]} isDark={isDark} />
                )
              )}
            </div>

            {/* Built With row — replaces "View Case Study" since there's no case study */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontFamily: 'Space Mono',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: c.textMuted,
                }}
              >
                Built with
              </span>
              {['React', 'Node.js', 'Firebase'].map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: 'Space Mono',
                    fontSize: '0.65rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: isDark ? c.accent3 : '#059669',
                    border: `1px solid ${isDark ? c.accent3 : '#05966940'}`,
                    padding: '4px 10px',
                    borderRadius: '6px',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}