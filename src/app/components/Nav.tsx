import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

export function Nav() {
  const { c, isDark } = useTheme();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: c.navBg,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${c.border}`,
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2.5rem',
        transition: 'background 0.4s ease, border-color 0.4s ease',
      }}
    >
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '1.05rem',
            letterSpacing: '0.15em',
            color: c.text,
            textTransform: 'uppercase',
            transition: 'color 0.4s ease',
          }}
        >
          Avani
        </span>
        <span
          style={{
            fontFamily: 'Space Mono',
            fontSize: '0.6rem',
            letterSpacing: '0.1em',
            color: isDark ? c.accent1 : c.accent2,
            textTransform: 'uppercase',
            border: `1px solid ${isDark ? c.accent1 : c.accent2}`,
            padding: '2px 6px',
            borderRadius: '4px',
            transition: 'color 0.4s ease, border-color 0.4s ease',
          }}
        >
          PM
        </span>
      </button>

      {/* Nav links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
        {navLinks.map((link) => (
          <NavLink key={link.id} label={link.label} onClick={() => scrollTo(link.id)} />
        ))}
      </div>
    </motion.nav>
  );
}

function NavLink({ label, onClick }: { label: string; onClick: () => void }) {
  const { c, isDark } = useTheme();

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ color: isDark ? c.accent1 : c.accent2 }}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'Space Grotesk',
        fontSize: '0.8rem',
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: c.textMuted,
        padding: '0.25rem 0',
        transition: 'color 0.3s ease',
      }}
    >
      {label}
    </motion.button>
  );
}
