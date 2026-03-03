import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { isDark, toggle, c } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        right: '1.75rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.6rem',
      }}
    >
      {/* Thin vertical line above */}
      <div
        style={{
          width: '1px',
          height: '48px',
          background: isDark
            ? `linear-gradient(to bottom, transparent, ${c.accent1}50)`
            : `linear-gradient(to bottom, transparent, ${c.borderStrong})`,
          transition: 'background 0.4s ease',
        }}
      />

      {/* Toggle button */}
      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        style={{
          width: '42px',
          height: '42px',
          borderRadius: '12px',
          border: isDark ? `1.5px solid ${c.accent1}60` : `1.5px solid ${c.borderStrong}`,
          background: isDark ? c.bgCard : c.bgSurface,
          boxShadow: isDark
            ? `0 0 16px ${c.accent1}25, 0 4px 16px rgba(0,0,0,0.4)`
            : `0 4px 16px rgba(0,0,0,0.08)`,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.4s ease, background 0.4s ease, box-shadow 0.4s ease',
        }}
      >
        {/* Subtle glow bg in dark mode */}
        {isDark && (
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle at center, ${c.accent1}12, transparent 70%)`,
              pointerEvents: 'none',
            }}
          />
        )}

        {/* Icon swap */}
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}
            >
              <Sun size={17} color={c.accent1} strokeWidth={2} />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: 30, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -30, scale: 0.7 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}
            >
              <Moon size={17} color={c.textMuted} strokeWidth={2} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Vertical label */}
      <motion.span
        style={{
          fontFamily: 'Space Mono',
          fontSize: '0.52rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: isDark ? c.accent1 : c.textSubtle,
          writingMode: 'vertical-rl',
          userSelect: 'none',
          transition: 'color 0.4s ease',
        }}
      >
        {isDark ? 'Dark' : 'Light'}
      </motion.span>

      {/* Thin vertical line below */}
      <div
        style={{
          width: '1px',
          height: '48px',
          background: isDark
            ? `linear-gradient(to bottom, ${c.accent1}50, transparent)`
            : `linear-gradient(to bottom, ${c.borderStrong}, transparent)`,
          transition: 'background 0.4s ease',
        }}
      />
    </motion.div>
  );
}
