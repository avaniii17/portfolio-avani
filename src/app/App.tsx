import '../styles/fonts.css';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ThemeToggle } from './components/ThemeToggle';

function SectionDivider({ flip = false }: { flip?: boolean }) {
  const { c, isDark } = useTheme();
  return (
    <div
      style={{
        height: '1px',
        background: isDark
          ? `linear-gradient(${flip ? '270deg' : '90deg'}, transparent, ${c.accent1}20, ${c.accent2}20, ${c.accent3}20, transparent)`
          : `linear-gradient(${flip ? '270deg' : '90deg'}, transparent, ${c.accent2}60, ${c.accent1}60, transparent)`,
        transition: 'background 0.4s ease',
      }}
    />
  );
}

function PortfolioInner() {
  const { c } = useTheme();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: c.bg,
        fontFamily: 'Inter, sans-serif',
        transition: 'background 0.4s ease',
        scrollBehavior: 'smooth',
      }}
    >
      <Nav />
      <ThemeToggle />
      <Hero />
      <SectionDivider />
      <Projects />
      <SectionDivider flip />
      <Experience />
      <SectionDivider />
      <Skills />
      <SectionDivider flip />
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioInner />
    </ThemeProvider>
  );
}