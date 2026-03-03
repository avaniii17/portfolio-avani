import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { Mail, Linkedin, ExternalLink, ArrowUpRight } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Contact() {
  const { c, isDark } = useTheme();

  return (
    <section
      id="contact"
      style={{
        background: c.bg,
        padding: '6rem 2.5rem 4rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.4s ease',
      }}
    >
      {/* Background decorative */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: isDark
            ? `radial-gradient(circle, ${c.accent2}06 0%, transparent 60%)`
            : `radial-gradient(circle, ${c.accent1}40 0%, transparent 60%)`,
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
              color: isDark ? c.accent5 : c.accent2,
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            // 05 — Connect
          </div>
          <h2
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 700,
              color: c.text,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              marginBottom: '1.5rem',
              transition: 'color 0.4s ease',
            }}
          >
            Let's{' '}
            <span
              key={`contact-grad-${isDark}`}
              style={{
                backgroundImage: isDark
                  ? `linear-gradient(90deg, ${c.accent5}, ${c.accent2})`
                  : `linear-gradient(90deg, ${c.accent2}, ${c.accent1})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Build
            </span>
            <br />
            Something.
          </h2>
          <p
            style={{
              fontFamily: 'Inter',
              fontSize: '1rem',
              lineHeight: 1.75,
              color: c.textMuted,
              maxWidth: '480px',
              transition: 'color 0.4s ease',
            }}
          >
            I'm always open to exciting product opportunities, collaborations, or just a good
            conversation about building things that matter.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
            marginBottom: '4rem',
          }}
        >
          {/* Email */}
          <motion.a
            href="mailto:avanisri1411@gmail.com"
            whileHover={{ y: -4, boxShadow: isDark ? `0 8px 30px ${c.accent1}20` : '0 8px 30px rgba(0,0,0,0.08)' }}
            style={{
              padding: '1.75rem 2rem',
              borderRadius: '16px',
              background: isDark ? c.bgCard : c.bgSurface,
              border: `1px solid ${c.border}`,
              boxShadow: c.shadowCard,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'background 0.4s ease, border-color 0.3s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: isDark ? `${c.accent1}15` : `${c.accent3}50`,
                  border: `1px solid ${isDark ? c.accent1 : c.accent3}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Mail size={17} color={isDark ? c.accent1 : '#2D9469'} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: c.text,
                    marginBottom: '0.2rem',
                    transition: 'color 0.3s ease',
                  }}
                >
                  Email Me
                </div>
                <div
                  style={{
                    fontFamily: 'Space Mono',
                    fontSize: '0.65rem',
                    color: c.textMuted,
                    letterSpacing: '0.03em',
                  }}
                >
                  avanisri1411@gmail.com
                </div>
              </div>
            </div>
            <ArrowUpRight size={16} color={c.textMuted} />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/avani-srivastava"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, boxShadow: isDark ? `0 8px 30px ${c.accent2}20` : '0 8px 30px rgba(0,0,0,0.08)' }}
            style={{
              padding: '1.75rem 2rem',
              borderRadius: '16px',
              background: isDark ? c.bgCard : c.bgSurface,
              border: `1px solid ${c.border}`,
              boxShadow: c.shadowCard,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'background 0.4s ease, border-color 0.3s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: isDark ? `${c.accent2}15` : `${c.accent2}30`,
                  border: `1px solid ${isDark ? c.accent2 : c.accent2}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Linkedin size={17} color={isDark ? c.accent2 : '#7C3AED'} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: c.text,
                    marginBottom: '0.2rem',
                    transition: 'color 0.3s ease',
                  }}
                >
                  LinkedIn
                </div>
                <div
                  style={{
                    fontFamily: 'Space Mono',
                    fontSize: '0.65rem',
                    color: c.textMuted,
                    letterSpacing: '0.03em',
                  }}
                >
                  /in/avani-srivastava
                </div>
              </div>
            </div>
            <ArrowUpRight size={16} color={c.textMuted} />
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            paddingTop: '2rem',
            borderTop: `1px solid ${c.border}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            transition: 'border-color 0.4s ease',
          }}
        >
          <span
            style={{
              fontFamily: 'Space Mono',
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              color: c.textSubtle,
              textTransform: 'uppercase',
            }}
          >
            © 2024 Avani Srivastava — Product Manager
          </span>
          <span
            style={{
              fontFamily: 'Space Mono',
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              color: c.textSubtle,
              textTransform: 'uppercase',
            }}
          >
            Noida · New Delhi · India
          </span>
        </motion.div>
      </div>
    </section>
  );
}