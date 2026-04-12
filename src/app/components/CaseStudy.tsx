import { useParams, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowLeft, Target, Search, Layers, TrendingUp, Users, Lightbulb, CheckCircle } from 'lucide-react';

// Image imports for Notion case study
import notionHomepage from '../../assets/notion-homepage.png';
import notionImportUpload from '../../assets/notion-import-upload.png';
import notionGeneratePage from '../../assets/notion-generate-page.png';
import notionPrioritization from '../../assets/notion-prioritization.png';
import notionCompetitor from '../../assets/notion-competitor.png';

// ─────────────────────────────────────────────
// Responsive hook
// ─────────────────────────────────────────────
function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < breakpoint);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [breakpoint]);
  return isMobile;
}

// ─────────────────────────────────────────────
// EDIT YOUR CASE STUDY CONTENT HERE
// ─────────────────────────────────────────────
const caseStudies: Record<string, CaseStudyData> = {
  pupa: {
    id: 'pupa',
    title: 'PUPA',
    subtitle: 'Mental Health Tech Platform',
    role: 'Founder & Product Lead',
    duration: 'Jan 2024 – Present',
    accentKey: 'accent1',
    tags: ['User Research', 'MVP Scoping', 'Stakeholder Management', 'Mental Health'],
    overview: {
      problem:
        'Access to mental health support in India is severely limited by stigma, cost, and lack of culturally aware tools. Existing apps are built for Western audiences and fail to address nuanced Indian family dynamics and workplace pressures.',
      goal:
        'Build a culturally-sensitive, accessible digital mental wellness platform that bridges the gap between clinical care and everyday users.',
      myRole:
        'Led end-to-end product discovery — from market research and user interviews to MVP scoping and roadmap planning.',
    },
    research: {
      methods: ['70+ user interviews', 'Therapist co-design sessions', 'Competitive audit of 12 apps', 'Survey of 400+ respondents'],
      insights: [
        'Users want anonymity above all — fear of judgment prevents help-seeking',
        'Most users prefer text-based interaction over video calls for sensitive topics',
        'Therapists need structured intake forms to triage effectively before a session',
        'Price sensitivity is high — users willing to pay ₹300–₹500 per session, not more',
      ],
      personas: [
        { name: 'The Burnout Professional', desc: 'Working adult 25–35, high-stress job, no time for in-person therapy' },
        { name: 'The Concerned Parent', desc: 'Looking for help for their anxious teenager without knowing where to start' },
        { name: 'The Seeker', desc: 'Young adult who is self-aware and actively wants mental wellness tools' },
      ],
    },
    process: [
      {
        phase: 'Discovery',
        icon: 'Search',
        desc: 'Conducted 70+ interviews across 3 cities. Synthesised findings into stress-point personas using affinity mapping in Miro. Identified the top 3 pain points driving the highest emotional friction.',
      },
      {
        phase: 'Prioritisation',
        icon: 'Layers',
        desc: 'Built a RICE-scored priority matrix evaluating 40+ features. Balanced technical feasibility with clinical safety requirements in close collaboration with a licensed psychologist advisor.',
      },
      {
        phase: 'MVP Scoping',
        icon: 'Target',
        desc: 'Defined a lean MVP: anonymous text-based chat, AI-powered mood logging, and a vetted therapist directory with transparent pricing. Cut scope by 60% to reduce time-to-market.',
      },
      {
        phase: 'Stakeholder Alignment',
        icon: 'Users',
        desc: 'Facilitated workshops with 20+ therapists to co-design clinical workflows. Ensured the roadmap met legal standards around data privacy and clinical duty-of-care.',
      },
    ],
    outcomes: [
      'Validated MVP strategy with 150+ beta signups before a line of code was written',
      '3 distinct personas refined into design principles adopted across all product decisions',
      'Therapist onboarding flow reduced from 14 steps to 5 after usability testing',
      'Secured feedback from 3 mental health NGOs willing to pilot the platform',
    ],
    learnings: 'Building in a regulated, sensitive domain requires involving domain experts from day one — not as an afterthought. The most valuable skill was knowing what NOT to build.',
  },

  ecobeach: {
    id: 'ecobeach',
    title: 'EcoBeach',
    subtitle: 'NGO-Volunteer Coordination Platform',
    role: 'Product Manager & UX Lead',
    duration: 'Feb 2024 · 24-Hour Hackathon',
    accentKey: 'accent4',
    tags: ['Hackathon', 'UX Design', 'Product Strategy', 'Rapid Prototype'],
    overview: {
      problem:
        'NGOs organising beach cleanups struggle to coordinate volunteers efficiently. Existing tools are generic event platforms not tailored for environmental activism workflows.',
      goal:
        'Design and prototype a volunteer discovery and event registration platform specifically for coastal cleanup NGOs — in 24 hours.',
      myRole:
        'Led product ideation, user story mapping, and prototype design. Pitched to a panel of 12 judges at Electrothon hackathon.',
    },
    research: {
      methods: ['Rapid stakeholder interviews (3 NGO reps)', 'Competitive review of Eventbrite & Meetup', 'User journey mapping'],
      insights: [
        'NGOs lose 40% of registered volunteers to no-shows due to lack of reminders',
        'Volunteers want to see their cumulative environmental impact, not just attend events',
        'Discovery is broken — NGOs rely entirely on social media, reaching only existing networks',
        'Real-time headcount is critical for logistics (transport, equipment)',
      ],
      personas: [
        { name: 'The Impact-Seeker', desc: 'College student, wants to contribute but needs flexible scheduling' },
        { name: 'The NGO Coordinator', desc: 'Overwhelmed volunteer manager juggling WhatsApp groups and spreadsheets' },
      ],
    },
    process: [
      {
        phase: 'Problem Framing',
        icon: 'Search',
        desc: 'Spent the first 2 hours interviewing 3 NGO representatives to define the core problem. Chose volunteer coordination over fundraising as our focus based on highest-pain findings.',
      },
      {
        phase: 'Design Sprint',
        icon: 'Layers',
        desc: 'Ran a compressed design sprint: Crazy 8s ideation, dot-voted on top ideas, built lo-fi wireframes in Figma within 4 hours.',
      },
      {
        phase: 'Prototype',
        icon: 'Target',
        desc: 'Built a clickable prototype demonstrating: smart event discovery, one-tap registration, impact tracker dashboard, and SMS reminder flow.',
      },
    ],
    outcomes: [
      'Ranked Top 3 nationally for "Problem Clarity and Execution Quality"',
      'Prototype received validation from all 3 NGO reps interviewed during the sprint',
      'Impact tracker concept was called out by judges as the most innovative feature',
    ],
    learnings: 'Speed forces clarity. When you have 24 hours, you learn to cut ruthlessly and focus on the single most important user problem.',
  },

  chatapp: {
    id: 'chatapp',
    title: 'Real-Time Chat App',
    subtitle: 'Full-Stack Messaging System',
    role: 'Product Manager & Developer',
    duration: 'Personal Project · 2023',
    accentKey: 'accent3',
    tags: ['React', 'Node.js', 'JWT Auth', 'Real-Time', 'Firebase'],
    overview: {
      problem:
        'Most chat app tutorials online stop at basic functionality. I wanted to build a production-quality messaging system that handles real-world complexity: authentication, group chats, and live state.',
      goal:
        'Engineer a real-time messaging platform with secure authentication, direct messaging, and group chat — and document it as a learning artifact.',
      myRole:
        'End-to-end ownership: product spec, architecture design, development, and deployment.',
    },
    research: {
      methods: ['Benchmarking WhatsApp, Telegram, Slack UX patterns', 'Personal pain-point analysis', 'Technical feasibility research'],
      insights: [
        'Token expiry handling is the most overlooked aspect of JWT auth in tutorials',
        'WebSocket reconnection logic is critical for perceived reliability',
        'Group chat state management requires clear ownership of source of truth',
      ],
      personas: [
        { name: 'The Developer', desc: 'Me — wanting to deeply understand full-stack realtime architecture' },
      ],
    },
    process: [
      {
        phase: 'Architecture',
        icon: 'Layers',
        desc: 'Designed a clean separation between REST (auth, user management) and WebSocket (realtime messaging) layers. Chose Firebase for persistence to focus learning on the frontend/backend integration.',
      },
      {
        phase: 'Auth System',
        icon: 'Target',
        desc: 'Implemented JWT-based authentication with refresh token rotation, protected route middleware on the Node.js server, and persistent sessions on the React client.',
      },
      {
        phase: 'Realtime Layer',
        icon: 'Search',
        desc: 'Built WebSocket event handling for message delivery, read receipts, and online presence. Implemented reconnection logic with exponential backoff.',
      },
    ],
    outcomes: [
      'Successfully delivered direct messaging and group chat with < 100ms latency on local network',
      'JWT auth with silent refresh working end-to-end without user interruption',
      'Codebase structured as a reusable template for future full-stack projects',
    ],
    learnings: "The hardest part wasn't the code — it was designing the state management to stay consistent between optimistic UI updates and server confirmations.",
  },

  notion: {
    id: 'notion',
    title: 'Notion AI',
    subtitle: 'Notion AI can turn your handwritten notes into digital pages. So why can\'t you find the feature?',
    role: 'Product Manager',
    duration: 'PM Research · Case Study',
    accentKey: 'accent2',
    tags: ['Product Thinking', 'UX Research', 'Feature Discovery', 'Notion AI', 'User Flow', 'Success Metrics'],
    overview: {
      problem:
        'While reading an interesting case study from Medium, I make notes. But what if one day they get lost? What if I want to digitalise my learning in aesthetic Notion pages, but I\'m not a person who can type their learning?\n\nWhile researching different case studies for product management, I used to write whole Medium articles in my notes. And when I thought of typing my learnings into Notion, it reduced my efforts, my creativity while writing, and took so much time to adjust the spacing — overall, my focus was reduced.\n\nThat gap — between the page I wrote and the page I never created — is exactly what this case study is about.',
      goal:
        'A research student whose brain learns while writing on paper wants to digitalise their learning and create Notion pages that can be shared with their professor for feedback. But the moment they leave the pen and pick up a keyboard to type, their words fumble and their brain goes blank.\n\nNotion AI already has the ability to build pages from uploaded handwritten notes. But that feature is invisible at the exact moment they want to create a new page in Notion.\n\nWhere is it hidden? That\'s not a feature problem — that\'s a product design problem.',
      myRole:
        'External PM — conducted user research, competitor analysis, solution design, prioritisation, and go-to-market strategy for the Notion AI "Import from Notes" feature discoverability problem.',
    },
    research: {
      methods: [
        'User segment identification',
        'Reddit & community analysis (83 upvotes post: "I just can\'t use Notion for notes")',
        'Assumption validation framework',
        'Interview question design',
        'Competitor audit (Google Lens, Microsoft OneNote, Apple Notes, GoodNotes / Notewise, Notion AI)',
      ],
      insights: [
        'Typing is not for everyone — so creating pages on Notion becomes a tedious task for a large portion of its users.',
        'Creating aesthetic Notion pages takes a lot of time. Organising and maintaining them feels like a time waste for some. If this can be automated, it directly reduces user stress and friction.',
        '"I just can\'t use Notion for notes" — this post on Reddit received 83 upvotes and 52 comments. This shows that Notion\'s note-taking experience is fundamentally broken for a significant segment of its users.',
        'Notion already has the feature that users want — creating digital pages from handwritten notes — but the gap is that this feature is not clearly visible in the user interface. So instead of finding the feature, users quit the process entirely.',
        'No tool combines OCR scanning + AI structuring + aesthetic templates + sharing — all in one place. Notion is the only product positioned to do all four.',
      ],
      personas: [
        { name: 'Students and Researchers', desc: 'People who love pen and paper, hate switching to typing in Notion because it creates a creative block and breaks the flow.' },
        { name: 'New Notion Users', desc: 'Users who find that Notion requires too much setup before they can actually work.' },
        { name: 'Power Notion Users', desc: 'People for whom Notion feels more like a database management tool than a note-taking app.' },
      ],
    },
    process: [
      {
        phase: 'Problem Statement',
        icon: 'Search',
        desc: 'A research student whose brain learns while writing on paper wants to digitalise their learning and create Notion pages that can be shared with their professor for feedback. But the moment they leave the pen and pick up a keyboard to type, their words fumble and their brain goes blank. Notion AI already has the ability to build pages from uploaded handwritten notes. But that feature is invisible at the exact moment they want to create a new page in Notion. That\'s not a feature problem — that\'s a product design problem.',
      },
      {
        phase: 'Product Thinking: Why Notion?',
        icon: 'Target',
        desc: 'Notion\'s mission is to be an "all-in-one workspace" — a second brain that people use for themselves and for their teams to collaborate with others. If all your brain dumps from sticky notes and all those team meeting brainstorm ideas on whiteboards could directly shift to a Notion template with just one picture, this directly advances Notion\'s mission of becoming the only workspace a person needs. Notion has already invested in Notion AI, which can scan and read your notes and give them structure. Notion also has 10,000+ templates and databases that a person can choose from according to their taste — and what if AI could pick the right one for you automatically?',
      },
      {
        phase: 'Solution Design',
        icon: 'Layers',
        desc: 'The solution should be simple: Bring the "Import from Notes" feature to the forefront of the page creation process.\n\nStep 1 — Open Notion.\nStep 2 — Tap the \'+ New Page\' button.\nStep 3 — Instead of just seeing an empty page or a template gallery, a user sees a prominent option: "Import from Handwritten Notes (AI)".\nStep 4 — Notion AI opens the camera or allows users to upload multiple photos.\nStep 5 — AI asks a few design questions — like the colour or theme you want for your page — and shows you some template ideas to choose from. It may also ask questions related to your notes. Or you can skip this step completely and let Notion AI handle it all by itself.\nStep 6 — Notion AI structures the notes, adds relevant tags, creates databases (if needed), and applies the selected template.\nStep 7 — The user reviews the page, makes minor edits if necessary, and it\'s done!\n\nThe final Notion page will have all your content structured with headings, bullet points, toggles, and tables. AI can rewrite and redraw diagrams for you as well. Along with that, Notion AI stays available on the right side of your screen in what I\'d call the "AI Review Panel" — where you can request changes and it edits your page in real time.',
      },
      {
        phase: 'Prioritisation & MVP',
        icon: 'Target',
        desc: 'The core thing that MUST work on day one is simple — the user is allowed to upload images, and Notion AI gives them a ready-made page from their provided picture. Along with that, they can guide the AI from the existing "Build with AI" prompt section, and it will build a simple page exactly as it is written in their notes.\n\n(Note: This feature already exists in Notion, but is misplaced in the interface. In the MVP, we are not building something new — we are putting this feature where it actually belongs.)\n\nWhat Gets Cut from V1:\n1. Multilingual Support — moves to V2.\n2. Diagram Redrawing — moves to V2.\n3. The AI Review Panel Sidebar — moves to a later version.',
      },
    ],
    outcomes: [
      'North Star Metric defined: % of "Import from Notes" sessions that result in a saved page actively edited within 7 days.',
      'Primary Metrics: Feature Discovery Rate, Page Save Rate, AI Feedback Score (1–5 star rating).',
      'Guardrail Metrics: Handwriting Failure Rate, Support Ticket Increase, Page Deletion Rate within 5 mins, AI Question Overload Rate, Standard Flow Speed.',
      'Launch Strategy: Notion YouTube + student content creators. "Import from Notes" button with hover tooltip for natural discovery.',
      'Launch Success: Feature Discovery Rate hits 30% in week one, Page Save Rate crosses 40% by end of month one.',
    ],
    learnings: 'While writing this case study, I got to know something about myself — that for me, sitting and thinking don\'t go as well compared to writing and thinking. I come up with a new idea in the middle of a sentence, which keeps expanding the last idea. That itself proved my point better than any user research could.\n\nThe hardest part for me while writing this case study was typing this thing digitally. (Ironic, I know — I personally want this feature more than anyone.)\n\nIf I had to start this case study again, I would find some real-life users and interview them deeply. I would also use my UI/UX skills to make a proper wireframe and give more time to think about features for V2 and V3.\n\nI am proud of myself for completing this whole case study because this felt natural to me. I love the process of thinking like a PM — and I think it is something I am genuinely good at.\n\nThis case study matters to me because, before typing this, I wrote every single word in my notebook with a pen. Every section. Every idea. Every insight — handwritten first. I need this feature now. And I think a lot of people do too.',
  },
};

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  duration: string;
  accentKey: string;
  tags: string[];
  overview: { problem: string; goal: string; myRole: string };
  research: { methods: string[]; insights: string[]; personas: { name: string; desc: string }[] };
  process: { phase: string; icon: string; desc: string }[];
  outcomes: string[];
  learnings: string;
}

const iconMap: Record<string, React.ElementType> = { Search, Layers, Target, Users };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any, delay: i * 0.08 },
  }),
};

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
export function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { c, isDark } = useTheme();
  const isMobile = useIsMobile();

  const data = id ? caseStudies[id] : null;
  const accent = data ? (c as Record<string, string>)[data.accentKey] || c.accent1 : c.accent1;

  const px = isMobile ? '1.25rem' : '2.5rem';
  const heroPadTop = isMobile ? '5.5rem' : '7rem';
  const heroPadBottom = isMobile ? '2.5rem' : '4rem';

  if (!data) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: c.bg,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          fontFamily: 'Space Grotesk',
          color: c.text,
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.2rem', color: c.textMuted }}>Case study not found.</p>
        <BackButton onClick={() => navigate('/')} c={c} isDark={isDark} accent={c.accent1} />
      </div>
    );
  }

  // ── Special long-form article view for Notion ──
  if (id === 'notion') {
    return <NotionArticleView c={c} isDark={isDark} accent={accent} isMobile={isMobile} onBack={() => navigate('/')} />;
  }

  const bodyPadTop = isMobile ? '2.5rem' : '4rem';

  return (
    <div
      style={{
        minHeight: '100vh',
        background: c.bg,
        fontFamily: 'Inter, sans-serif',
        transition: 'background 0.4s ease',
        paddingBottom: isMobile ? '4rem' : '6rem',
      }}
    >
      {/* ── Hero Banner ── */}
      <div
        style={{
          background: isDark
            ? `linear-gradient(135deg, ${accent}18 0%, ${c.bgSurface} 60%)`
            : `linear-gradient(135deg, ${accent}12 0%, ${c.bg} 70%)`,
          borderBottom: `1px solid ${c.border}`,
          padding: `${heroPadTop} ${px} ${heroPadBottom}`,
          transition: 'background 0.4s ease',
        }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>

          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '2rem' }}
          >
            <BackButton onClick={() => navigate('/')} c={c} isDark={isDark} accent={accent} />
          </motion.div>

          {/* Role + Duration badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '5px 14px',
              borderRadius: '999px',
              background: `${accent}18`,
              border: `1px solid ${accent}50`,
              marginBottom: '1.25rem',
              maxWidth: '100%',
            }}
          >
            <span
              style={{
                fontFamily: 'Space Mono',
                fontSize: isMobile ? '0.55rem' : '0.65rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: accent,
                wordBreak: 'break-word',
              }}
            >
              {data.role} · {data.duration}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: isMobile ? 'clamp(2.2rem, 10vw, 3rem)' : 'clamp(2.8rem, 7vw, 5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: c.text,
              marginBottom: '0.75rem',
              transition: 'color 0.4s ease',
            }}
          >
            {data.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            style={{
              fontFamily: 'Inter',
              fontSize: isMobile ? '1rem' : '1.15rem',
              color: c.textMuted,
              marginBottom: '1.5rem',
              transition: 'color 0.4s ease',
            }}
          >
            {data.subtitle}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
          >
            {data.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: 'Space Mono',
                  fontSize: isMobile ? '0.55rem' : '0.62rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  border: `1px solid ${accent}`,
                  color: isDark ? accent : c.text,
                  background: isDark ? `${accent}12` : `${accent}25`,
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Body Content ── */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: `${bodyPadTop} ${px} 0` }}>

        {/* Overview */}
        <Section title="Overview" icon={<Target size={isMobile ? 16 : 18} color={accent} />} accent={accent} c={c} index={0}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
            }}
          >
            <OverviewCard title="The Problem" body={data.overview.problem} accent={accent} c={c} isDark={isDark} />
            <OverviewCard title="The Goal" body={data.overview.goal} accent={accent} c={c} isDark={isDark} />
            <OverviewCard title="My Role" body={data.overview.myRole} accent={accent} c={c} isDark={isDark} />
          </div>
        </Section>

        <Divider c={c} isMobile={isMobile} />

        {/* Research */}
        <Section title="Research & Discovery" icon={<Search size={isMobile ? 16 : 18} color={accent} />} accent={accent} c={c} index={1}>
          <SubHeading label="Methods Used" c={c} />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {data.research.methods.map((m) => (
              <span
                key={m}
                style={{
                  fontFamily: 'Space Mono',
                  fontSize: isMobile ? '0.62rem' : '0.7rem',
                  letterSpacing: '0.06em',
                  padding: '5px 12px',
                  borderRadius: '8px',
                  border: `1px solid ${c.border}`,
                  color: c.textMuted,
                  background: isDark ? '#ffffff06' : '#00000006',
                }}
              >
                {m}
              </span>
            ))}
          </div>

          <SubHeading label="Key Insights" c={c} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            {data.research.insights.map((insight, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start',
                  padding: isMobile ? '0.85rem 1rem' : '1rem 1.25rem',
                  borderRadius: '12px',
                  background: isDark ? '#ffffff05' : '#00000004',
                  border: `1px solid ${c.border}`,
                }}
              >
                <Lightbulb size={14} color={accent} style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontFamily: 'Inter', fontSize: isMobile ? '0.85rem' : '0.9rem', lineHeight: 1.65, color: c.textMuted, margin: 0, transition: 'color 0.4s ease' }}>
                  {insight}
                </p>
              </motion.div>
            ))}
          </div>

          <SubHeading label="Personas" c={c} />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            {data.research.personas.map((p, i) => (
              <motion.div
                key={p.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  padding: '1.25rem',
                  borderRadius: '14px',
                  border: `1px solid ${accent}40`,
                  background: isDark ? `${accent}08` : `${accent}10`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Users size={13} color={accent} />
                  <span style={{ fontFamily: 'Space Grotesk', fontSize: '0.85rem', fontWeight: 700, color: c.text, transition: 'color 0.4s ease' }}>
                    {p.name}
                  </span>
                </div>
                <p style={{ fontFamily: 'Inter', fontSize: '0.8rem', lineHeight: 1.6, color: c.textMuted, margin: 0, transition: 'color 0.4s ease' }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Divider c={c} isMobile={isMobile} />

        {/* Process */}
        <Section title="Process" icon={<Layers size={isMobile ? 16 : 18} color={accent} />} accent={accent} c={c} index={2}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {data.process.map((step, i) => {
              const Icon = iconMap[step.icon] || Layers;
              return (
                <motion.div
                  key={step.phase}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '0.75rem' : '1.25rem',
                    alignItems: 'flex-start',
                    padding: isMobile ? '1.25rem' : '1.5rem',
                    borderRadius: '14px',
                    background: isDark ? c.bgCard : c.bgSurface,
                    border: `1px solid ${c.border}`,
                    transition: 'background 0.4s ease',
                  }}
                >
                  {/* Icon row on mobile, column on desktop */}
                  <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'row' : 'column',
                    alignItems: 'center',
                    gap: isMobile ? '0.6rem' : '0.5rem',
                    flexShrink: 0,
                  }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: `${accent}18`,
                        border: `1px solid ${accent}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} color={accent} />
                    </div>
                    {isMobile && (
                      <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.85rem', fontWeight: 700, color: c.text, transition: 'color 0.4s ease' }}>
                        Phase {i + 1} — {step.phase}
                      </div>
                    )}
                    {!isMobile && i < data.process.length - 1 && (
                      <div style={{ width: '1px', height: '24px', background: `${accent}30` }} />
                    )}
                  </div>
                  <div>
                    {!isMobile && (
                      <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.9rem', fontWeight: 700, color: c.text, marginBottom: '0.4rem', letterSpacing: '0.02em', transition: 'color 0.4s ease' }}>
                        Phase {i + 1} — {step.phase}
                      </div>
                    )}
                    <p style={{ fontFamily: 'Inter', fontSize: isMobile ? '0.85rem' : '0.88rem', lineHeight: 1.7, color: c.textMuted, margin: 0, transition: 'color 0.4s ease', whiteSpace: 'pre-line' }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Section>

        <Divider c={c} isMobile={isMobile} />

        {/* Outcomes */}
        <Section title="Outcomes & Impact" icon={<TrendingUp size={isMobile ? 16 : 18} color={accent} />} accent={accent} c={c} index={3}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            {data.outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start',
                  padding: isMobile ? '0.85rem 1rem' : '1rem 1.25rem',
                  borderRadius: '12px',
                  background: isDark ? `${accent}08` : `${accent}10`,
                  border: `1px solid ${accent}35`,
                }}
              >
                <CheckCircle size={15} color={accent} style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontFamily: 'Inter', fontSize: isMobile ? '0.85rem' : '0.9rem', lineHeight: 1.65, color: c.text, margin: 0, fontWeight: 500, transition: 'color 0.4s ease' }}>
                  {outcome}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Key Learning */}
          <div
            style={{
              padding: isMobile ? '1.25rem' : '1.75rem',
              borderRadius: '16px',
              background: isDark
                ? `linear-gradient(135deg, ${accent}12, ${c.bgCard})`
                : `linear-gradient(135deg, ${accent}10, ${c.bgSurface})`,
              border: `1px solid ${accent}40`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Lightbulb size={15} color={accent} />
              <span style={{ fontFamily: 'Space Grotesk', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: accent }}>
                Key Learning
              </span>
            </div>
            <p style={{ fontFamily: 'Inter', fontSize: isMobile ? '0.88rem' : '0.95rem', lineHeight: 1.75, color: c.text, margin: 0, fontStyle: 'italic', transition: 'color 0.4s ease', whiteSpace: 'pre-line' }}>
              "{data.learnings}"
            </p>
          </div>
        </Section>

      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────
function BackButton({ onClick, c, isDark, accent }: { onClick: () => void; c: any; isDark: boolean; accent: string }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ x: -4 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: 'none',
        border: `1px solid ${c.border}`,
        borderRadius: '10px',
        padding: '8px 16px',
        cursor: 'pointer',
        fontFamily: 'Space Mono',
        fontSize: '0.7rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: isDark ? accent : c.text,
        transition: 'border-color 0.3s ease, color 0.3s ease',
      }}
    >
      <ArrowLeft size={14} />
      Back to Portfolio
    </motion.button>
  );
}

function Section({
  title, icon, accent, c, children, index,
}: {
  title: string; icon: React.ReactNode; accent: string; c: any; children: React.ReactNode; index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      style={{ marginBottom: '0.5rem' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
        {icon}
        <h2
          style={{
            fontFamily: 'Space Grotesk',
            fontSize: '1.3rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: c.text,
            margin: 0,
            transition: 'color 0.4s ease',
          }}
        >
          {title}
        </h2>
      </div>
      {children}
    </motion.div>
  );
}

function Divider({ c, isMobile }: { c: any; isMobile: boolean }) {
  return (
    <div
      style={{
        height: '1px',
        background: `linear-gradient(90deg, transparent, ${c.border}, transparent)`,
        margin: isMobile ? '2.5rem 0' : '3.5rem 0',
      }}
    />
  );
}

function SubHeading({ label, c }: { label: string; c: any }) {
  return (
    <p
      style={{
        fontFamily: 'Space Mono',
        fontSize: '0.65rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: c.textMuted,
        marginBottom: '0.75rem',
        marginTop: 0,
        transition: 'color 0.4s ease',
      }}
    >
      {label}
    </p>
  );
}

function OverviewCard({
  title, body, accent, c, isDark,
}: {
  title: string; body: string; accent: string; c: any; isDark: boolean;
}) {
  return (
    <div
      style={{
        padding: '1.25rem',
        borderRadius: '14px',
        background: isDark ? c.bgCard : c.bgSurface,
        border: `1px solid ${c.border}`,
        transition: 'background 0.4s ease',
      }}
    >
      <div
        style={{
          fontFamily: 'Space Grotesk',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: accent,
          marginBottom: '0.5rem',
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontFamily: 'Inter',
          fontSize: '0.88rem',
          lineHeight: 1.7,
          color: c.textMuted,
          margin: 0,
          transition: 'color 0.4s ease',
          whiteSpace: 'pre-line',
        }}
      >
        {body}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────
// Notion Article View — mirrors the Medium article structure exactly
// ─────────────────────────────────────────────
function NotionArticleView({ c, isDark, accent, isMobile, onBack }: {
  c: any; isDark: boolean; accent: string; isMobile: boolean; onBack: () => void;
}) {
  const px = isMobile ? '1.25rem' : '2rem';
  const maxW = '740px';

  const prose: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif',
    fontSize: isMobile ? '1rem' : '1.08rem',
    lineHeight: 1.85,
    color: c.text,
    margin: '0 0 1.4rem 0',
    transition: 'color 0.4s ease',
  };
  const h2Style: React.CSSProperties = {
    fontFamily: 'Space Grotesk',
    fontSize: isMobile ? '1.45rem' : '1.7rem',
    fontWeight: 800,
    letterSpacing: '-0.03em',
    color: c.text,
    margin: '2.5rem 0 1rem',
    transition: 'color 0.4s ease',
  };
  const h3Style: React.CSSProperties = {
    fontFamily: 'Space Grotesk',
    fontSize: isMobile ? '1.1rem' : '1.25rem',
    fontWeight: 700,
    color: c.text,
    margin: '2rem 0 0.75rem',
    transition: 'color 0.4s ease',
  };
  const calloutStyle: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif',
    fontSize: isMobile ? '0.98rem' : '1.05rem',
    lineHeight: 1.8,
    color: c.text,
    background: isDark ? `${accent}12` : `${accent}14`,
    border: `1px solid ${accent}40`,
    borderLeft: `4px solid ${accent}`,
    borderRadius: '10px',
    padding: isMobile ? '1rem 1.1rem' : '1.2rem 1.5rem',
    margin: '1.5rem 0',
    fontStyle: 'italic',
    transition: 'all 0.4s ease',
  };
  const imgStyle: React.CSSProperties = {
    width: '100%',
    borderRadius: '14px',
    margin: '1.5rem 0',
    border: `1px solid ${c.border}`,
    display: 'block',
  };
  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: 'Inter, sans-serif',
    fontSize: isMobile ? '0.82rem' : '0.9rem',
    margin: '1.25rem 0 1.75rem',
  };
  const thStyle: React.CSSProperties = {
    background: isDark ? `${accent}20` : `${accent}18`,
    color: c.text,
    fontWeight: 700,
    padding: '10px 14px',
    textAlign: 'left',
    border: `1px solid ${c.border}`,
  };
  const tdStyle: React.CSSProperties = {
    padding: '9px 14px',
    border: `1px solid ${c.border}`,
    color: c.textMuted,
    verticalAlign: 'top',
    lineHeight: 1.65,
  };
  const ulStyle: React.CSSProperties = {
    margin: '0.5rem 0 1.4rem',
    paddingLeft: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  };
  const liStyle: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif',
    fontSize: isMobile ? '0.98rem' : '1.05rem',
    lineHeight: 1.75,
    color: c.text,
    transition: 'color 0.4s ease',
  };
  const tagStyle: React.CSSProperties = {
    fontFamily: 'Space Mono',
    fontSize: '0.6rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: '3px 10px',
    borderRadius: '999px',
    border: `1px solid ${accent}`,
    color: isDark ? accent : c.text,
    background: isDark ? `${accent}12` : `${accent}22`,
  };

  return (
    <div style={{ minHeight: '100vh', background: c.bg, fontFamily: 'Inter, sans-serif', transition: 'background 0.4s ease', paddingBottom: isMobile ? '4rem' : '7rem' }}>

      {/* ── Hero ── */}
      <div style={{
        background: isDark
          ? `linear-gradient(135deg, ${accent}18 0%, ${c.bgSurface} 60%)`
          : `linear-gradient(135deg, ${accent}10 0%, ${c.bg} 70%)`,
        borderBottom: `1px solid ${c.border}`,
        padding: `${isMobile ? '5.5rem' : '7rem'} ${px} ${isMobile ? '2.5rem' : '3.5rem'}`,
        transition: 'background 0.4s ease',
      }}>
        <div style={{ maxWidth: maxW, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: '2rem' }}>
            <BackButton onClick={onBack} c={c} isDark={isDark} accent={accent} />
          </motion.div>

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '5px 14px', borderRadius: '999px', background: `${accent}18`, border: `1px solid ${accent}50`, marginBottom: '1.25rem' }}>
            <span style={{ fontFamily: 'Space Mono', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: accent }}>
              PM Case Study · Product Thinking
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: 'Space Grotesk', fontSize: isMobile ? 'clamp(1.8rem, 8vw, 2.5rem)' : 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, color: c.text, marginBottom: '1.2rem', transition: 'color 0.4s ease' }}>
            Notion AI can turn your handwritten notes into digital pages.<br />
            <span style={{ color: accent }}>So why can't you find the feature?</span>
          </motion.h1>

          {/* Tags */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
            {['Product Thinking', 'UX Research', 'Feature Discovery', 'Notion AI', 'User Flow', 'Success Metrics'].map(t => (
              <span key={t} style={tagStyle}>{t}</span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Article Body ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
        style={{ maxWidth: maxW, margin: '0 auto', padding: `${isMobile ? '2.5rem' : '3.5rem'} ${px} 0` }}
      >

        {/* ── INTRO ── */}
        <p style={prose}>
          While reading an interesting case study from Medium, I make notes. But what if one day they get lost? What if I want to digitalise my learning in aesthetic Notion pages, but I'm not a person who can type their learning?
        </p>
        <p style={prose}>
          While researching different case studies for product management, I used to write whole Medium articles in my notes. And when I thought of typing my learnings into Notion, it reduced my efforts, my creativity while writing, and took so much time to adjust the spacing — overall, my focus was reduced.
        </p>
        <p style={prose}>
          That gap — between the page I wrote and the page I never created — is exactly what this case study is about.
        </p>

        {/* ── THE PROBLEM (User Story) ── */}
        <h2 style={h2Style}>The Problem</h2>
        <div style={calloutStyle}>
          A research student whose brain learns while writing on paper wants to digitalise their learning and create Notion pages that can be shared with their professor for feedback. But the moment they leave the pen and pick up a keyboard to type, their words fumble and their brain goes blank.
          <br /><br />
          Notion AI already has the ability to build pages from uploaded handwritten notes. But that feature is invisible at the exact moment they want to create a new page in Notion.
          <br /><br />
          <strong>Where is it hidden? That's not a feature problem — that's a product design problem.</strong>
        </div>

        {/* Image 1 — Notion Homepage with "import from notes" */}
        <img src={notionHomepage} alt="Notion AI homepage showing 'import from notes' button" style={imgStyle} />
        <p style={{ ...prose, fontSize: '0.82rem', color: c.textMuted, marginTop: '-0.75rem', textAlign: 'center', fontStyle: 'italic' }}>
          The "import from notes" option is buried deep — not visible when creating a new page.
        </p>

        {/* ── WHY NOTION ── */}
        <h2 style={h2Style}>Product Thinking: Why Notion?</h2>
        <p style={prose}>
          Notion's mission is to be an "all-in-one workspace" — a second brain that people use for themselves and for their teams to collaborate with others.
        </p>
        <p style={prose}>
          If all your brain dumps from sticky notes and all those team meeting brainstorm ideas on whiteboards could directly shift to a Notion template with just one picture, this directly advances Notion's mission of becoming the only workspace a person needs.
        </p>
        <p style={prose}>
          Notion has already invested in Notion AI, which can scan and read your notes and give them structure. Notion also has 10,000+ templates and databases that a person can choose from according to their taste — and what if AI could pick the right one for you automatically?
        </p>

        {/* ── USER SEGMENT ── */}
        <h2 style={h2Style}>Who Faces This Problem?</h2>
        <p style={prose}>Typing is not for everyone — so creating pages on Notion becomes a tedious task for a large portion of its users. These are the three main user segments:</p>

        <h3 style={h3Style}>1. Students and Researchers</h3>
        <p style={prose}>People who love pen and paper, hate switching to typing in Notion because it creates a creative block and breaks the flow.</p>

        <h3 style={h3Style}>2. New Notion Users</h3>
        <p style={prose}>Users who find that Notion requires too much setup before they can actually work.</p>

        <h3 style={h3Style}>3. Power Notion Users</h3>
        <p style={prose}>People for whom Notion feels more like a database management tool than a note-taking app.</p>

        {/* ── RESEARCH ── */}
        <h2 style={h2Style}>Research & Insights</h2>

        <h3 style={h3Style}>Is This a Real Problem?</h3>
        <p style={prose}>Let's validate. I found a Reddit post titled <em>"I just can't use Notion for notes"</em> — it received <strong>83 upvotes and 52 comments</strong>. This shows that Notion's note-taking experience is fundamentally broken for a significant segment of its users.</p>

        <p style={prose}>Creating aesthetic Notion pages takes a lot of time. Organising and maintaining them feels like a time waste for some. If this can be automated, it directly reduces user stress and friction.</p>

        <h3 style={h3Style}>Assumptions I'm Validating</h3>
        <ul style={ulStyle as any}>
          <li style={liStyle}>Users who write by hand find switching to typing breaks their creative flow.</li>
          <li style={liStyle}>Users don't know Notion AI can already import from handwritten notes.</li>
          <li style={liStyle}>The feature discovery gap is the core problem, not the feature itself.</li>
          <li style={liStyle}>If the feature were front and centre, users would actively use it.</li>
        </ul>

        <h3 style={h3Style}>Interview Questions I Would Ask</h3>
        <ul style={ulStyle as any}>
          <li style={liStyle}>Do you currently use Notion for note-taking? Why or why not?</li>
          <li style={liStyle}>Have you ever written notes by hand and then wanted to transfer them to Notion?</li>
          <li style={liStyle}>What stops you from doing that today?</li>
          <li style={liStyle}>Did you know that Notion AI can create a page from a photo of your handwritten notes?</li>
          <li style={liStyle}>If this feature were available the moment you tapped "New Page," would you use it?</li>
        </ul>

        {/* Competitor Analysis Image */}
        <img src={notionCompetitor} alt="Competitor Analysis table for handwritten note tools" style={imgStyle} />

        <h3 style={h3Style}>Key Insight</h3>
        <div style={calloutStyle}>
          No tool combines OCR scanning + AI structuring + aesthetic templates + sharing — all in one place. <strong>Notion is the only product positioned to do all four.</strong>
        </div>

        {/* ── SOLUTION ── */}
        <h2 style={h2Style}>The Solution</h2>
        <p style={prose}>
          The solution should be simple: <strong>Bring the "Import from Notes" feature to the forefront of the page creation process.</strong>
        </p>

        <h3 style={h3Style}>User Flow — Step by Step</h3>
        <ol style={{ ...ulStyle as any, paddingLeft: '1.6rem' }}>
          <li style={liStyle}><strong>Step 1</strong> — Open Notion.</li>
          <li style={liStyle}><strong>Step 2</strong> — Tap the '+ New Page' button.</li>
          <li style={liStyle}><strong>Step 3</strong> — Instead of just seeing an empty page or a template gallery, a user sees a prominent option: <em>"Import from Handwritten Notes (AI)"</em>.</li>
          <li style={liStyle}><strong>Step 4</strong> — Notion AI opens the camera or allows users to upload multiple photos.</li>
          <li style={liStyle}><strong>Step 5</strong> — AI asks a few design questions — like the colour or theme you want for your page — and shows you some template ideas to choose from. It may also ask questions related to your notes. Or you can skip and let Notion AI handle it all.</li>
          <li style={liStyle}><strong>Step 6</strong> — Notion AI structures the notes, adds relevant tags, creates databases (if needed), and applies the selected template.</li>
          <li style={liStyle}><strong>Step 7</strong> — The user reviews the page, makes minor edits if necessary, and it's done!</li>
        </ol>

        {/* Import Upload Screen */}
        <img src={notionImportUpload} alt="Notion 'Import from Notes' upload interface" style={imgStyle} />
        <p style={{ ...prose, fontSize: '0.82rem', color: c.textMuted, marginTop: '-0.75rem', textAlign: 'center', fontStyle: 'italic' }}>
          Step 4 — Upload Photo or Take Photo. You can upload multiple photos for one page.
        </p>

        {/* Generate My Page Screen */}
        <img src={notionGeneratePage} alt="Notion AI colour theme and template selection screen" style={imgStyle} />
        <p style={{ ...prose, fontSize: '0.82rem', color: c.textMuted, marginTop: '-0.75rem', textAlign: 'center', fontStyle: 'italic' }}>
          Step 5 — Choose a colour theme, template style, and whether there are diagrams. Or skip — let AI decide.
        </p>

        <p style={prose}>
          The final Notion page will have all your content structured with headings, bullet points, toggles, and tables. AI can rewrite and redraw diagrams for you as well. Along with that, Notion AI stays available on the right side of your screen in what I'd call the <strong>"AI Review Panel"</strong> — where you can request changes and it edits your page in real time.
        </p>

        {/* ── PRIORITISATION ── */}
        <h2 style={h2Style}>Prioritisation & MVP</h2>
        <p style={prose}>
          The core thing that <strong>MUST work on day one</strong> is simple — the user is allowed to upload images, and Notion AI gives them a ready-made page from their provided picture. Along with that, they can guide the AI from the existing "Build with AI" prompt section, and it will build a simple page exactly as it is written in their notes.
        </p>
        <div style={calloutStyle}>
          <strong>Note:</strong> This feature already exists in Notion, but is misplaced in the interface. In the MVP, we are not building something new — we are putting this feature where it actually belongs.
        </div>

        <h3 style={h3Style}>What Gets Cut from V1</h3>
        <ul style={ulStyle as any}>
          <li style={liStyle}><strong>Multilingual Support</strong> — moves to V2.</li>
          <li style={liStyle}><strong>Diagram Redrawing</strong> — moves to V2.</li>
          <li style={liStyle}><strong>The AI Review Panel Sidebar</strong> — moves to a later version.</li>
        </ul>

        {/* Prioritization Framework Image */}
        <img src={notionPrioritization} alt="Prioritization Framework — High/Low Energy vs High/Low Impact matrix" style={imgStyle} />
        <p style={{ ...prose, fontSize: '0.82rem', color: c.textMuted, marginTop: '-0.75rem', textAlign: 'center', fontStyle: 'italic' }}>
          Prioritization Framework: High impact + low energy features ship in V1. High energy items move to V2+.
        </p>

        {/* ── SUCCESS METRICS ── */}
        <h2 style={h2Style}>Success Metrics</h2>

        <h3 style={h3Style}>North Star Metric</h3>
        <div style={calloutStyle}>
          % of "Import from Notes" sessions that result in a saved page actively edited within 7 days.
        </div>

        <h3 style={h3Style}>Primary Metrics</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Metric</th>
              <th style={thStyle}>What It Measures</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Feature Discovery Rate</td>
              <td style={tdStyle}>% of new page creations that see the "Import from Notes" option and click it</td>
            </tr>
            <tr>
              <td style={tdStyle}>Page Save Rate</td>
              <td style={tdStyle}>% of users who complete the flow and save the generated page</td>
            </tr>
            <tr>
              <td style={tdStyle}>AI Feedback Score</td>
              <td style={tdStyle}>1–5 star rating given by users after page generation</td>
            </tr>
          </tbody>
        </table>

        <h3 style={h3Style}>Guardrail Metrics</h3>
        <ul style={ulStyle as any}>
          <li style={liStyle}>Handwriting Failure Rate — % of uploads where AI fails to parse notes</li>
          <li style={liStyle}>Support Ticket Increase — watch for spike in confusion-related tickets</li>
          <li style={liStyle}>Page Deletion Rate within 5 mins — AI output was not useful</li>
          <li style={liStyle}>AI Question Overload Rate — users abandoning at the "design questions" step</li>
          <li style={liStyle}>Standard Flow Speed — ensure the existing new-page creation flow isn't slowed down</li>
        </ul>

        {/* ── GO TO MARKET ── */}
        <h2 style={h2Style}>Go-to-Market Strategy</h2>
        <h3 style={h3Style}>Launch Channels</h3>
        <ul style={ulStyle as any}>
          <li style={liStyle}><strong>Notion YouTube</strong> — a short video showing a real student converting handwritten notes to a Notion page in under 60 seconds.</li>
          <li style={liStyle}><strong>Student content creators</strong> — partner with study influencers on Instagram and YouTube who already use Notion.</li>
        </ul>
        <h3 style={h3Style}>In-Product Discovery</h3>
        <p style={prose}>
          The "Import from Notes" button with a hover tooltip — <em>"New! AI can turn your handwritten notes into a Notion page"</em> — for natural discovery without disrupting existing workflows.
        </p>
        <h3 style={h3Style}>Launch Success Criteria</h3>
        <ul style={ulStyle as any}>
          <li style={liStyle}>Feature Discovery Rate hits <strong>30%</strong> in week one.</li>
          <li style={liStyle}>Page Save Rate crosses <strong>40%</strong> by end of month one.</li>
        </ul>

        {/* ── REFLECTIONS ── */}
        <h2 style={h2Style}>Reflections</h2>
        <p style={prose}>
          While writing this case study, I got to know something about myself — that for me, sitting and thinking don't go as well compared to writing and thinking. I come up with a new idea in the middle of a sentence, which keeps expanding the last idea. That itself proved my point better than any user research could.
        </p>
        <p style={prose}>
          The hardest part for me while writing this case study was typing this thing digitally. (Ironic, I know — I personally want this feature more than anyone.)
        </p>
        <p style={prose}>
          If I had to start this case study again, I would find some real-life users and interview them deeply. I would also use my UI/UX skills to make a proper wireframe and give more time to think about features for V2 and V3.
        </p>
        <p style={prose}>
          I am proud of myself for completing this whole case study because this felt natural to me. I love the process of thinking like a PM — and I think it is something I am genuinely good at.
        </p>

        {/* Final Callout */}
        <div style={{
          ...calloutStyle,
          fontStyle: 'normal',
          background: isDark ? `${accent}15` : `${accent}12`,
          borderLeft: `4px solid ${accent}`,
          marginTop: '2rem',
        }}>
          <strong style={{ color: accent }}>This case study matters to me because</strong>, before typing this, I wrote every single word in my notebook with a pen. Every section. Every idea. Every insight — handwritten first. I need this feature now. And I think a lot of people do too.
        </div>

      </motion.div>
    </div>
  );
}
