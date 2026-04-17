import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, MapPin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useIsMobile } from '../hooks/useIsMobile';
import avaniPhoto from '../../assets/avani-photo.png';
const roles = ['Product Manager', 'User Researcher', 'Strategic Thinker', 'Problem Solver'];

const stats = [
  { value: '60+', label: 'User Interviews' },
  { value: '2', label: 'User Personas' },
  { value: '25%', label: 'Engagement Boost' },
];

export function Hero() {
  const { c, isDark } = useTheme();
  const isMobile = useIsMobile();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        background: c.bg,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: isMobile ? '90px 1.25rem 4rem' : '100px 2.5rem 5rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.4s ease',
      }}
    >
      {/* Background blobs */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: isDark
            ? `radial-gradient(circle, ${c.accent2}08 0%, transparent 65%)`
            : `radial-gradient(circle, ${c.accent2}45 0%, transparent 65%)`,
          filter: 'blur(70px)',
          pointerEvents: 'none',
          transition: 'background 0.6s ease',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: isDark
            ? `radial-gradient(circle, ${c.accent3}08 0%, transparent 65%)`
            : `radial-gradient(circle, ${c.accent3}50 0%, transparent 65%)`,
          filter: 'blur(70px)',
          pointerEvents: 'none',
          transition: 'background 0.6s ease',
        }}
      />

      {/* Two-column layout */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: isMobile ? '2.5rem' : '3rem',
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ── LEFT COLUMN: Text Content ── */}
        <div style={{ flex: isMobile ? '1 1 100%' : '1 1 420px', minWidth: 0, order: isMobile ? 2 : 1 }}>
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '2rem',
              padding: '6px 14px',
              borderRadius: '999px',
              border: `1px solid ${c.border}`,
              background: isDark ? c.bgCard : c.bgSurface,
              boxShadow: c.shadow,
            }}
          >
            <MapPin size={12} color={isDark ? c.accent1 : c.accent2} />
            <span
              style={{
                fontFamily: 'Space Mono',
                fontSize: '0.7rem',
                letterSpacing: '0.08em',
                color: c.textMuted,
              }}
            >
              Noida / New Delhi · India
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1
              style={{
                fontFamily: 'Space Grotesk',
                fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                fontWeight: 700,
                lineHeight: 1,
                color: c.text,
                letterSpacing: '-0.03em',
                marginBottom: '0.2rem',
                transition: 'color 0.4s ease',
              }}
            >
              Avani
            </h1>
            <h1
              key={`srivastava-${isDark}`}
              style={{
                fontFamily: 'Space Grotesk',
                fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
                backgroundImage: isDark
                  ? `linear-gradient(135deg, ${c.accent1}, ${c.accent3})`
                  : `linear-gradient(135deg, ${c.accent2}, ${c.accent1})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Srivastava
            </h1>
          </motion.div>

          {/* Cycling role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              height: '2.2rem',
              overflow: 'hidden',
              marginBottom: '1.75rem',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'Space Mono',
                fontSize: '0.85rem',
                color: isDark ? c.accent3 : c.accent2,
                letterSpacing: '0.15em',
                marginRight: '0.75rem',
                transition: 'color 0.4s ease',
              }}
            >
              //
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{
                  fontFamily: 'Space Grotesk',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  color: c.text,
                  textTransform: 'uppercase',
                  transition: 'color 0.4s ease',
                }}
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{
              fontFamily: 'Inter',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              color: c.textMuted,
              maxWidth: '460px',
              marginBottom: '2.25rem',
              transition: 'color 0.4s ease',
            }}
          >
            B.Tech student at NIT Hamirpur with a passion for building user-centric products.
            I turn research into strategy and strategy into shipped solutions — driven by
            curiosity, data, and empathy.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                fontFamily: 'Space Grotesk',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '0.85rem 1.8rem',
                borderRadius: '8px',
                background: isDark
                  ? `linear-gradient(135deg, ${c.accent1}, ${c.accent3})`
                  : `linear-gradient(135deg, ${c.accent2}, ${c.accent1})`,
                color: isDark ? '#000' : '#fff',
                border: 'none',
                cursor: 'pointer',
                boxShadow: isDark ? `0 0 20px ${c.accent1}40` : c.shadow,
                transition: 'box-shadow 0.3s ease',
              }}
            >
              View My Work
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:avanisri1411@gmail.com"
              style={{
                fontFamily: 'Space Grotesk',
                fontSize: '0.82rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '0.85rem 1.8rem',
                borderRadius: '8px',
                background: 'transparent',
                color: c.text,
                border: `1.5px solid ${c.borderStrong}`,
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'border-color 0.3s ease, color 0.3s ease',
              }}
            >
              <Mail size={14} />
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: '0.75rem',
              maxWidth: isMobile ? '100%' : '440px',
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -3 }}
                style={{
                  textAlign: 'center',
                  padding: '0.9rem 0.4rem',
                  borderRadius: '12px',
                  background: isDark ? c.bgCard : c.bgSurface,
                  border: `1px solid ${c.border}`,
                  boxShadow: c.shadow,
                  transition: 'background 0.4s ease, border-color 0.4s ease',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: [c.accent1, c.accent2, c.accent3, c.accent4][i % 4],
                    lineHeight: 1,
                    marginBottom: '0.3rem',
                    transition: 'color 0.4s ease',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '0.6rem',
                    letterSpacing: '0.04em',
                    color: c.textMuted,
                    textTransform: 'uppercase',
                    lineHeight: 1.3,
                    transition: 'color 0.4s ease',
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN: Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? -20 : 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] as any }}
          style={{
            flex: '0 0 auto',
            order: isMobile ? 1 : 2,
            position: 'relative',
            width: isMobile ? 'clamp(180px, 55vw, 260px)' : 'clamp(260px, 30vw, 380px)',
            alignSelf: isMobile ? 'center' : 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Rotating outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            aria-hidden
            style={{
              position: 'absolute',
              inset: '-28px',
              borderRadius: '42% 58% 52% 48% / 48% 42% 58% 52%',
              border: isDark
                ? `1.5px dashed ${c.accent1}40`
                : `1.5px dashed ${c.accent2}70`,
              pointerEvents: 'none',
              transition: 'border-color 0.4s ease',
            }}
          />

          {/* Counter-rotating inner ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            aria-hidden
            style={{
              position: 'absolute',
              inset: '-12px',
              borderRadius: '58% 42% 48% 52% / 52% 58% 42% 48%',
              border: isDark
                ? `1px solid ${c.accent3}25`
                : `1px solid ${c.accent1}50`,
              pointerEvents: 'none',
              transition: 'border-color 0.4s ease',
            }}
          />

          {/* Glow behind image (dark mode) */}
          {isDark && (
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: '10px',
                borderRadius: '28px',
                background: `radial-gradient(circle at 50% 40%, ${c.accent1}18 0%, ${c.accent2}10 50%, transparent 80%)`,
                filter: 'blur(20px)',
                pointerEvents: 'none',
              }}
            />
          )}

          {/* Decorative corner accent — top right */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: '-16px',
              right: '-16px',
              width: '48px',
              height: '48px',
              borderTop: `2.5px solid ${isDark ? c.accent1 : c.accent2}`,
              borderRight: `2.5px solid ${isDark ? c.accent1 : c.accent2}`,
              borderRadius: '0 12px 0 0',
              transition: 'border-color 0.4s ease',
              boxShadow: isDark ? `3px -3px 12px ${c.accent1}50` : 'none',
            }}
          />
          {/* Decorative corner accent — bottom left */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              bottom: '-16px',
              left: '-16px',
              width: '48px',
              height: '48px',
              borderBottom: `2.5px solid ${isDark ? c.accent3 : c.accent3}`,
              borderLeft: `2.5px solid ${isDark ? c.accent3 : c.accent3}`,
              borderRadius: '0 0 0 12px',
              transition: 'border-color 0.4s ease',
              boxShadow: isDark ? `-3px 3px 12px ${c.accent3}50` : 'none',
            }}
          />

          {/* Photo frame */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              width: '100%',
              aspectRatio: '3 / 4',
              borderRadius: '28px',
              overflow: 'hidden',
              position: 'relative',
              border: isDark
                ? `1.5px solid ${c.accent1}30`
                : `2px solid ${c.borderStrong}`,
              boxShadow: isDark
                ? `0 0 0 1px ${c.accent1}15, 0 24px 60px rgba(0,0,0,0.8), 0 0 40px ${c.accent1}12`
                : `0 20px 60px rgba(0,0,0,0.10), 0 4px 20px rgba(0,0,0,0.06)`,
              transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
            }}
          >
            <img
              src={avaniPhoto}
              alt="Avani Srivastava"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />

            {/* Subtle gradient overlay at bottom */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '35%',
                background: isDark
                  ? `linear-gradient(to top, ${c.bg}CC, transparent)`
                  : `linear-gradient(to top, ${c.bg}80, transparent)`,
                pointerEvents: 'none',
                transition: 'background 0.4s ease',
              }}
            />

            {/* Name tag floating at bottom */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '50%',
                transform: 'translateX(-50%)',
                background: isDark
                  ? 'rgba(0,0,0,0.75)'
                  : 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: `1px solid ${isDark ? c.accent1 + '30' : c.border}`,
                borderRadius: '999px',
                padding: '6px 18px',
                whiteSpace: 'nowrap',
                boxShadow: isDark ? `0 0 16px ${c.accent1}20` : c.shadow,
                transition: 'background 0.4s ease, border-color 0.4s ease',
              }}
            >
              <span
                style={{
                  fontFamily: 'Space Mono',
                  fontSize: '0.62rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: isDark ? c.accent1 : c.text,
                  transition: 'color 0.4s ease',
                }}
              >
                Avani Srivastava
              </span>
            </div>
          </motion.div>

          {/* Floating accent badge — hidden on mobile to avoid overflow */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                top: '12%',
                right: '-20px',
                background: isDark ? c.bgCard : c.bgSurface,
                border: `1px solid ${isDark ? c.accent2 + '50' : c.accent2}`,
                borderRadius: '12px',
                padding: '10px 14px',
                boxShadow: isDark ? `0 0 20px ${c.accent2}20` : c.shadowCard,
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                transition: 'background 0.4s ease, border-color 0.4s ease',
              }}
            >
              <div style={{ fontFamily: 'Space Grotesk', fontSize: '1rem', fontWeight: 700, color: isDark ? c.accent2 : '#7C3AED', lineHeight: 1, marginBottom: '3px' }}>NIT</div>
              <div style={{ fontFamily: 'Space Mono', fontSize: '0.55rem', letterSpacing: '0.06em', color: c.textMuted, textTransform: 'uppercase' }}>Hamirpur</div>
            </motion.div>
          )}

          {/* Floating accent badge 2 — hidden on mobile */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                bottom: '18%',
                left: '-22px',
                background: isDark ? c.bgCard : c.bgSurface,
                border: `1px solid ${isDark ? c.accent3 + '50' : c.accent3}`,
                borderRadius: '12px',
                padding: '10px 14px',
                boxShadow: isDark ? `0 0 20px ${c.accent3}20` : c.shadowCard,
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                transition: 'background 0.4s ease, border-color 0.4s ease',
              }}
            >
              <div style={{ fontFamily: 'Space Grotesk', fontSize: '1rem', fontWeight: 700, color: isDark ? c.accent3 : '#059669', lineHeight: 1, marginBottom: '3px' }}>'26</div>
              <div style={{ fontFamily: 'Space Mono', fontSize: '0.55rem', letterSpacing: '0.06em', color: c.textMuted, textTransform: 'uppercase' }}>Grad</div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
        }}
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span
          style={{
            fontFamily: 'Space Mono',
            fontSize: '0.6rem',
            letterSpacing: '0.15em',
            color: c.textSubtle,
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} color={c.textSubtle} />
        </motion.div>
      </motion.div>
    </section>
  );
}