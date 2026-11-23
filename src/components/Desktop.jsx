'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { SITE, PROJECTS } from '../content/site';
import { LANGUAGE_OPTIONS, messages } from '../content/messages';
import {
  SiTypescript, SiHtml5, SiCss, SiPython, SiGit,
  SiJavascript, SiReact, SiNextdotjs, SiN8N, SiPostgresql, SiSupabase,
  SiTailwindcss, SiNodedotjs, SiGithub, SiVercel, SiZod
} from 'react-icons/si';
import { FaDatabase, FaCode } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';

// Imagens SVG locais: public/tech-icons/.
// Nenhuma alteracao e necessaria em src/content/site.js.
const TECH_ICONS = {
  'TypeScript': { component: SiTypescript, color: '#3178C6' },
  'HTML': { component: SiHtml5, color: '#E34F26' },
  'CSS': { component: SiCss, color: '#1572B6' },
  'Python': { component: SiPython, color: '#3776AB' },
  'Banco de dados': { component: FaDatabase, color: '#64748B' },
  'Banco de Dados': { component: FaDatabase, color: '#64748B' },
  'SQL': { component: FaDatabase, color: '#64748B' },
  'Git': { component: SiGit, color: '#F05032' },
  'APIs': { component: TbApi, color: '#7C3AED' },
  'REST APIs': { component: TbApi, color: '#7C3AED' },
  'Power BI': { image: '/tech-icons/power-bi.svg' },
  'Excel': { image: '/tech-icons/excel.svg' },
  'Looker Studio': { image: '/tech-icons/looker-studio.svg' },
  'n8n': { component: SiN8N, color: '#EA4B71' },
  'Power Automate': { image: '/tech-icons/power-automate.svg' },
  'Google Apps Script': { image: '/tech-icons/google-apps-script.svg' },
  'JavaScript': { component: SiJavascript, color: '#D9B800' },
  'Next.js': { component: SiNextdotjs, color: '#111827' },
  'React': { component: SiReact, color: '#149ECA' },
  'React 19': { component: SiReact, color: '#149ECA' },
  'Next.js 15': { component: SiNextdotjs, color: '#e2efcc' },
  'PostgreSQL': { component: SiPostgresql, color: '#749ac1' },
  'Supabase': { component: SiSupabase, color: '#57c987' },
  'Supabase Auth': { component: SiSupabase, color: '#57c987' },
  'Tailwind CSS': { component: SiTailwindcss, color: '#45b7c8' },
  'Node.js': { component: SiNodedotjs, color: '#8cc970' },
  'GitHub': { component: SiGithub, color: '#e2efcc' },
  'Vercel': { component: SiVercel, color: '#e2efcc' },
  'OpenAI API': { component: TbApi, color: '#9adca6' },
  'Zod': { component: SiZod, color: '#7195d3' },
  'Microsoft Graph API': { component: TbApi, color: '#9b99e2' }
};

const TECH_TAG_TONES = [
  'blue', 'cyan', 'violet', 'amber', 'rose', 'teal', 'slate', 'lime'
];

function technologyTone(name, index = 0) {
  const explicit = {
    'TypeScript': 'blue',
    'SQL': 'slate',
    'React 19': 'cyan',
    'Next.js 15': 'slate',
    'CSS': 'blue',
    'Tailwind CSS': 'cyan',
    'Node.js': 'lime',
    'PostgreSQL': 'blue',
    'Supabase': 'teal',
    'Supabase Auth': 'teal',
    'RLS': 'violet',
    'SharePoint': 'teal',
    'Microsoft Graph API': 'violet',
    'OpenAI API': 'rose',
    'dnd-kit': 'amber',
    'SheetJS (xlsx)': 'lime',
    'jsPDF': 'rose',
    'Zod': 'violet',
    'Node.js Test Runner': 'slate',
    'React Test Renderer': 'cyan',
    'PGlite': 'blue',
    'Git': 'amber',
    'GitHub': 'slate',
    'Vercel': 'slate',
    'Python': 'blue',
    'Pandas': 'violet',
    'Excel': 'lime',
    'MSAL': 'violet',
    'CustomTkinter': 'blue',
    'Requests': 'amber',
    'PyInstaller': 'slate',
    'Tkinter': 'blue'
  };
  return explicit[name] || TECH_TAG_TONES[index % TECH_TAG_TONES.length];
}

function TechnologyBadge({ name, locale, tone }) {
  const tech = TECH_ICONS[name];
  const TechIcon = tech?.component || FaCode;
  const label = name === 'Banco de dados' || name === 'Banco de Dados'
    ? ({ pt: 'Banco de dados', es: 'Bases de datos', en: 'Databases' }[locale] || name)
    : name;
  return (
    <span className={`technology-badge technology-badge--${tone || technologyTone(name)}`}>
      {tech?.image
        ? <img className="tech-icon" src={tech.image} alt="" aria-hidden="true" loading="lazy" />
        : <TechIcon className="tech-icon" style={{ color: tech?.color || '#64748B' }} aria-hidden="true" />}
      {label}
    </span>
  );
}

// Terminal da tela inicial: traducoes do codigo decorativo.
const MATRIX_TEXT = {
  pt: { status: 'sistema online', load: '// carregando modulos...', ready: '// pronto', prompt: '> criando solucoes' },
  es: { status: 'sistema en linea', load: '// cargando modulos...', ready: '// listo', prompt: '> creando soluciones' },
  en: { status: 'system online', load: '// loading modules...', ready: '// ready', prompt: '> building cool things' }
};

const WINDOW_ICONS = {
  welcome: 'computer', projects: 'folder', details: 'note', about: 'user',
  stack: 'gear', contact: 'mail', readme: 'note'
};
const CATEGORY_ICONS = { sistemas: 'folder', automacoes: 'gear', dados: 'chart' };
const CATEGORY_KEYS = { sistemas: 'systemSingular', automacoes: 'automationSingular', dados: 'dataSingular' };
const WINDOW_ORDER = ['welcome', 'projects', 'details', 'about', 'stack', 'contact', 'readme'];

function Icon({ name, className = '' }) {
  return <svg className={className} aria-hidden="true" focusable="false"><use href={`/sprites.svg#ico-${name}`} /></svg>;
}
// Troca os ícones de usuário por sua foto quando SITE.profileImage estiver preenchido.
function ProfileIcon({ className = '', alt = '' }) {
  return SITE.profileImage
    ? <img className={`profile-photo ${className}`} src={SITE.profileImage} alt={alt} />
    : <Icon name="user" className={className} />;
}
function WindowIcon({ id }) {
  return id === 'about' ? <ProfileIcon alt="" /> : <Icon name={WINDOW_ICONS[id]} />;
}
function safeUrl(value) {
  if (!value) return '';
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : '';
  } catch { return ''; }
}
function textFor(value, locale) {
  if (typeof value === 'string') return value;
  return value?.[locale] ?? value?.pt ?? '';
}
// Mini galeria navegavel para screenshots reais dos projetos.
// Fica pronta para as fotos e não exibe imagens fictícias.
function ProjectGallery({ screenshots = [], locale, t }) {
  const [index, setIndex] = useState(0);
  const items = screenshots.filter((item) => item?.src?.startsWith('/images/'));
  const currentIndex = Math.min(index, Math.max(0, items.length - 1));
  const current = items[currentIndex];
  const move = (amount) => setIndex((previous) => (previous + amount + items.length) % items.length);
  return (
    <section className="project-gallery" aria-label={t.galleryTitle}>
      <div className="gallery-heading">
        <h3 className="detail-section-title">{t.galleryTitle}</h3>
        {items.length > 0 && <span className="gallery-count">{String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>}
      </div>
      {current ? <>
        <div className="gallery-preview">
          <a href={current.src} target="_blank" rel="noopener noreferrer" aria-label={t.galleryOpen} title={t.galleryOpen}>
            <img src={current.src} alt={textFor(current.caption, locale) || 'HELPFY'} loading="lazy" />
          </a>
          {items.length > 1 && <>
            <button type="button" className="gallery-nav gallery-nav--prev" onClick={() => move(-1)} aria-label={t.galleryPrevious}>‹</button>
            <button type="button" className="gallery-nav gallery-nav--next" onClick={() => move(1)} aria-label={t.galleryNext}>›</button>
          </>}
        </div>
        <div className="gallery-caption" aria-live="polite">{textFor(current.caption, locale)}</div>
        {items.length > 1 && <div className="gallery-thumbs" aria-label={t.galleryTitle}>
          {items.map((item, imageIndex) => <button type="button" key={`${item.src}-${imageIndex}`} className={`gallery-thumb${currentIndex === imageIndex ? ' is-selected' : ''}`} onClick={() => setIndex(imageIndex)} title={textFor(item.caption, locale) || `${t.galleryThumb} ${imageIndex + 1}`} aria-label={`${t.galleryThumb} ${imageIndex + 1}`} aria-pressed={currentIndex === imageIndex}>
            <img src={item.src} alt="" loading="lazy" />
          </button>)}
        </div>}
      </> : <div className="gallery-placeholder"><Icon name="computer" /><span>{t.galleryEmpty}</span></div>}
    </section>
  );
}

function WinMark() {
  return <span className="win-mark" aria-hidden="true"><i /><i /><i /><i /></span>;
}

export default function Desktop({ locale }) {
  const t = messages[locale];
  const matrix = MATRIX_TEXT[locale] || MATRIX_TEXT.pt;
  const [openIds, setOpenIds] = useState(['welcome']);
  const [minimizedIds, setMinimizedIds] = useState([]);
  const [maximizedIds, setMaximizedIds] = useState([]);
  const [active, setActive] = useState('welcome');
  const [order, setOrder] = useState({ welcome: 20 });
  const [positions, setPositions] = useState({});
  const [filter, setFilter] = useState('todos');
  const [selectedId, setSelectedId] = useState(PROJECTS[0]?.id || '');
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [clock, setClock] = useState('--:--');
  const zRef = useRef(20);
  const dragRef = useRef(null);
  const toastTimerRef = useRef(null);
  const selected = PROJECTS.find((project) => project.id === selectedId);
  const visible = PROJECTS.filter((project) => filter === 'todos' || project.category === filter);

  const showToast = (message) => {
    setToast(message);
    window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToast(''), 2800);
  };
  const focusWindow = (id) => {
    setActive(id);
    const newZ = ++zRef.current;
    setOrder((previous) => ({ ...previous, [id]: newZ }));
  };
  const openWindow = (id) => {
    setOpenIds((previous) => previous.includes(id) ? previous : [...previous, id]);
    setMinimizedIds((previous) => previous.filter((item) => item !== id));
    focusWindow(id);
    setStartMenuOpen(false);
  };
  const selectTop = (excluded) => {
    const other = openIds.filter((id) => id !== excluded && !minimizedIds.includes(id));
    other.sort((a, b) => (order[b] || 0) - (order[a] || 0));
    setActive(other[0] || null);
  };
  const closeWindow = (id) => {
    setOpenIds((previous) => previous.filter((item) => item !== id));
    setMinimizedIds((previous) => previous.filter((item) => item !== id));
    setMaximizedIds((previous) => previous.filter((item) => item !== id));
    setPositions((previous) => { const result = { ...previous }; delete result[id]; return result; });
    if (active === id) selectTop(id);
  };
  const minimizeWindow = (id) => {
    setMinimizedIds((previous) => previous.includes(id) ? previous : [...previous, id]);
    if (active === id) selectTop(id);
  };
  const toggleMaximize = (id) => {
    setMaximizedIds((previous) => previous.includes(id) ? previous.filter((item) => item !== id) : [...previous, id]);
    focusWindow(id);
  };
  const taskbarClick = (id) => {
    if (active === id && !minimizedIds.includes(id)) minimizeWindow(id);
    else openWindow(id);
  };
  const restart = () => {
    setOpenIds(['welcome']);
    setMinimizedIds([]);
    setMaximizedIds([]);
    setPositions({});
    setFilter('todos');
    setSelectedId(PROJECTS[0]?.id || '');
    setStartMenuOpen(false);
    focusWindow('welcome');
    showToast(t.restartToast);
  };
  const openProject = (id) => {
    setSelectedId(id);
    openWindow('details');
  };
  const pointerDown = (event, id) => {
    if (event.button !== 0 || event.target.closest('button') || maximizedIds.includes(id) || window.innerWidth <= 780) return;
    const element = event.currentTarget.closest('.window');
    const rect = element.getBoundingClientRect();
    dragRef.current = { id, pointerId: event.pointerId, x: event.clientX, y: event.clientY, left: rect.left, top: rect.top, width: rect.width, height: rect.height };
    event.currentTarget.setPointerCapture(event.pointerId);
    focusWindow(id);
  };
  const pointerMove = (event) => {
    const d = dragRef.current;
    if (!d || d.pointerId !== event.pointerId) return;
    const left = Math.min(Math.max(4, d.left + event.clientX - d.x), Math.max(4, window.innerWidth - d.width - 4));
    const top = Math.min(Math.max(4, d.top + event.clientY - d.y), Math.max(4, window.innerHeight - d.height - 49));
    setPositions((previous) => ({ ...previous, [d.id]: { left, top } }));
  };

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : locale;
    window.localStorage.setItem('mariaos-language', locale);
    const hash = decodeURIComponent(window.location.hash.replace('#', ''));
    const [windowId, projectId] = hash.split(':');
    if (WINDOW_ORDER.includes(windowId) && windowId !== 'welcome') {
      if (windowId === 'details' && PROJECTS.some((p) => p.id === projectId)) setSelectedId(projectId);
      setOpenIds(['welcome', windowId]);
      setActive(windowId);
      setOrder({ welcome: 20, [windowId]: 21 });
      zRef.current = 21;
    }
    const updateClock = () => setClock(new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es-ES' : 'en-US', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()));
    updateClock();
    const interval = window.setInterval(updateClock, 15000);
    return () => window.clearInterval(interval);
  }, [locale]);
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      if (startMenuOpen) setStartMenuOpen(false);
      else if (active && openIds.includes(active)) closeWindow(active);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  });
  useEffect(() => () => window.clearTimeout(toastTimerRef.current), []);

  const anyMaximized = maximizedIds.some((id) => openIds.includes(id) && !minimizedIds.includes(id));
  const languageHash = active === 'details' && selected ? `details:${selected.id}` : active || 'welcome';
  const count = String(PROJECTS.length).padStart(2, '0');
  const categoryText = (category) => t[CATEGORY_KEYS[category]] || t.project;
  const labels = {
    welcome: t.welcome, projects: t.projects, details: t.details,
    about: t.about, stack: t.stack, contact: t.contact, readme: t.readme
  };

  const frame = (id, title, menus, body, statusLeft, statusRight, hint = null) => (
    <section
      key={id}
      className={`window window--${id}${id === 'details' && (selected?.screenshots?.length || selected?.workflowSteps) ? ' window--details--featured' : ''}${openIds.includes(id) && !minimizedIds.includes(id) ? ' is-open' : ''}${maximizedIds.includes(id) ? ' is-maximized' : ''}`}
      role="dialog"
      aria-modal="false"
      aria-label={title}
      hidden={!openIds.includes(id) || minimizedIds.includes(id)}
      style={{ ...(positions[id] || {}), zIndex: order[id] ?? 3 }}
      onPointerDown={() => { if (active !== id) focusWindow(id); }}
    >
      <div className="titlebar" onPointerDown={(event) => pointerDown(event, id)} onPointerMove={pointerMove} onPointerUp={() => { dragRef.current = null; }} onPointerCancel={() => { dragRef.current = null; }} onDoubleClick={(event) => { if (!event.target.closest('button')) toggleMaximize(id); }}>
        <div className="titlebar-label"><WindowIcon id={id} /><span>{title}</span></div>
        <div className="window-controls">
          <button type="button" className="control" title={t.minimize} aria-label={t.minimize} onClick={() => minimizeWindow(id)}>_</button>
          <button type="button" className="control" title={t.maximize} aria-label={t.maximize} onClick={() => toggleMaximize(id)}>□</button>
          <button type="button" className="control control--close" title={t.close} aria-label={t.close} onClick={() => closeWindow(id)}>×</button>
        </div>
      </div>
      <div className="menubar">{menus.map((item) => <span key={item}>{item}</span>)}{hint && <span className="menubar-tip">{hint}</span>}</div>
      {body}
      <div className="statusbar"><span>{statusLeft}</span><span>{statusRight}</span></div>
    </section>
  );

  return <>
    <div className="wallpaper" aria-hidden="true"><div className="wallpaper-orb wallpaper-orb--one" /><div className="wallpaper-orb wallpaper-orb--two" /><div className="wallpaper-grid" /></div>

    <nav className={`language-switcher${anyMaximized ? ' is-docked' : ''}`} aria-label={t.language}>
      <span className="language-heading">🌐 {t.language}</span>
      <div className="language-options">
        {LANGUAGE_OPTIONS.map(({ code, flag, label, short }) => (
          <Link key={code} className={`language-button${locale === code ? ' is-selected' : ''}`} href={`/${code}/#${languageHash}`} hrefLang={code} lang={code} title={label} aria-label={label} aria-current={locale === code ? 'page' : undefined} onClick={() => window.localStorage.setItem('mariaos-language', code)}>
            <img src={`/flags/${flag}.svg`} width="24" height="16" alt="" aria-hidden="true" /><span className="language-code">{short}</span>
          </Link>
        ))}
      </div>
    </nav>

    <div className="desktop" onClick={(event) => { if (startMenuOpen && !event.target.closest('.start-menu') && !event.target.closest('.start-button')) setStartMenuOpen(false); }}>
      <nav className="desktop-icons" aria-label={t.desktop}>
        {[
          ['welcome', 'computer', t.computer], ['projects', 'folder', t.projects], ['about', 'user', t.about],
          ['stack', 'gear', t.stack], ['contact', 'mail', t.contact], ['readme', 'note', t.readme]
        ].map(([id, icon, label]) => <button key={id} type="button" className="desktop-icon" onClick={() => openWindow(id)} title={label}>{id === 'about' ? <ProfileIcon alt="" /> : <Icon name={icon} />}<span>{label}</span></button>)}
      </nav>


      {frame('welcome', `MariaOS 98 — ${t.welcomeTitle}`, [t.file, t.edit, t.view, t.help],
        <div className="window-inner welcome-inner">
          <div className="welcome-left">
            <div className="eyebrow"><span className="eyebrow-led" /> PORTFOLIO.EXE <span className="eyebrow-divider">/</span> {t.versionLabel}</div>
            <p className="welcome-kicker">{t.welcomeKicker}</p>
            <h1>{t.hello}<br />{t.iAm} <span>{SITE.name}</span><span className="cursor-block">_</span></h1>
            <p className="welcome-description">{t.heroStart} <strong>{t.heroHighlight}</strong> {t.heroEnd}</p>
            <div className="hero-buttons"><button type="button" className="win-button win-button--primary" onClick={() => openWindow('projects')}><Icon name="folder" /> {t.explore} <span aria-hidden="true">↗</span></button><button type="button" className="win-button" onClick={() => openWindow('about')}>{t.about}</button></div>
            <div className="welcome-foot"><span><span className="green-dot" />{t.systemOnline}</span><span>{t.madeWith}</span></div>
          </div>
          <div className="welcome-right">
            <div className="retro-art">
              <div className="matrix-terminal" role="img" aria-label={`maria.os terminal: hello world, ${matrix.status}`}>
                <div className="matrix-terminal__titlebar">
                  <span>maria.os</span>
                  <span className="matrix-terminal__controls" aria-hidden="true">_ □ ×</span>
                </div>
                <div className="matrix-terminal__screen">
                  <div className="matrix-terminal__rain" aria-hidden="true">
                    <span>100101011001</span><span>011010010101</span>
                    <span>010110101001</span><span>110010101101</span>
                  </div>
                  <strong className="matrix-terminal__hello">hello, world!</strong>
                  <div className="matrix-terminal__lines">
                    <span>&gt; init maria.os</span>
                    <span>{matrix.status}</span>
                    <span className="matrix-terminal__spacer">{matrix.load}</span>
                    <span>{matrix.ready}</span>
                  </div>
                  <div className="matrix-terminal__prompt">{matrix.prompt}<span className="matrix-terminal__caret" aria-hidden="true">_</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>, t.ready, `${count} ${t.projectsInFolder}`, t.available)}

      {frame('projects', `${t.projects} — ${t.explorer}`, [t.file, t.edit, t.view, t.favorites, t.help],
        <><div className="explorer-address"><span>{t.address}</span><div><Icon name="folder" />{'C:\\Maria\\Projetos\\'}</div><button type="button" className="win-button win-button--small" onClick={() => openWindow('welcome')}>↰ {t.welcome}</button></div>
        <div className="projects-content">
          <aside className="explorer-sidebar"><div className="sidebar-heading">{t.folders}</div>
            {[
              ['todos', 'computer', t.all], ['sistemas', 'folder', t.systems], ['automacoes', 'gear', t.automations], ['dados', 'chart', t.data]
            ].filter(([id]) => id === 'todos' || PROJECTS.some((project) => project.category === id)).map(([id, icon, label]) => <button type="button" key={id} className={`folder-filter${filter === id ? ' active' : ''}`} aria-pressed={filter === id} onClick={() => setFilter(id)}><Icon name={icon} /> {label} {id === 'todos' && <span>{count}</span>}</button>)}
            <div className="sidebar-lower"><span>✳</span><p>{t.projectsMotto}</p></div>
          </aside>
          <div className="explorer-main">
            <div className="projects-heading"><div><div className="section-overline">{t.directory}</div><h2>{t.making}<span className="dot-pink">.</span></h2></div><span className="project-counter">{String(visible.length).padStart(2, '0')} {t.items}</span></div>
            <div className="projects-grid" aria-live="polite">{visible.length ? visible.map((project) => { const technologies = project.cardTechnologies || project.technologies || []; const visibleTechnologies = project.showAllTechnologiesOnCard ? technologies : technologies.slice(0, 6); return <button type="button" className={`project-card${project.featured ? ' project-card--featured' : ''}`} data-category={project.category} key={project.id} onClick={() => openProject(project.id)} aria-label={`${t.details}: ${textFor(project.title, locale)}`}>
              <div className="card-topline" /><div className="card-body"><div className="card-head"><span className="card-illustration"><Icon name={CATEGORY_ICONS[project.category] || 'note'} /></span><span className="card-head-text"><span className="card-kind">{categoryText(project.category)}</span><strong className="card-title">{textFor(project.title, locale)}</strong></span></div><p className="card-summary">{textFor(project.summary, locale)}</p><span className="card-bottom"><span className="card-tags">{visibleTechnologies.map((item, index) => <span className={`card-tag card-tag--${technologyTone(item, index)}`} key={item}>{item}</span>)}</span><span className="card-arrow" aria-hidden="true">↗</span></span></div>
            </button>; }) : <p>{t.noProjects}</p>}</div>
          </div>
        </div></>, `${String(visible.length).padStart(2, '0')} ${t.objects}`, t.exploring)}

      {frame('details', `${selected ? textFor(selected.title, locale) : 'projeto.exe'} — ${t.details}`, [t.file, t.view, t.help],
        <div className="detail-content">
          {selected && <><div className="detail-top"><div className="detail-icon"><Icon name={CATEGORY_ICONS[selected.category] || 'note'} /></div><div><span className="section-overline">{categoryText(selected.category).toUpperCase()} / {t.project.toUpperCase()}</span><h2>{textFor(selected.title, locale)}</h2></div></div>
            <p className="detail-description">{textFor(selected.description, locale)}</p>
            {selected.screenshots?.length > 0 && <ProjectGallery key={selected.id} screenshots={selected.screenshots} locale={locale} t={t} />}
            {selected.workflowSteps && <section className="project-workflow" aria-label={t.workflowTitle}>
              <h3 className="detail-section-title">{t.workflowTitle}</h3>
              <ol className="workflow-steps">{(textFor(selected.workflowSteps, locale) || []).map((step, index) => <li key={step}><span className="workflow-step-index">{String(index + 1).padStart(2, '0')}</span><span>{step}</span></li>)}</ol>
            </section>}
            <h3 className="detail-section-title">{t.whatItDoes}</h3><ul className="detail-list">{(textFor(selected.features, locale) || []).map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <h3 className="detail-section-title">{t.technologies}</h3>
            {selected.techDetails?.length ? <section className="project-tech-breakdown" aria-label={t.technologyBreakdownTitle}>
              <p className="project-tech-intro">{t.technologyBreakdownNote}</p>
              <div className="project-tech-grid">{selected.techDetails.map((item, index) => <article className="project-tech-card" key={index}>
                <div className="project-tech-card-head"><span className="project-tech-no">{String(index + 1).padStart(2, '0')}</span><h4>{textFor(item.area, locale)}</h4></div>
                <div className="project-tech-card-stack">{item.stack.map((name, stackIndex) => <span className={`card-tag card-tag--${technologyTone(name, stackIndex)}`} key={name}>{name}</span>)}</div>
                <p>{textFor(item.purpose, locale)}</p>
              </article>)}</div>
            </section> : <div className="detail-tags">{selected.technologies.map((item, index) => <span className={`card-tag card-tag--${technologyTone(item, index)}`} key={item}>{item}</span>)}</div>}
            {selected.codeSample && <section className="project-code-preview" aria-label={t.codePreviewTitle}>
              <div className="code-preview-heading"><h3 className="detail-section-title">{t.codePreviewTitle}</h3><span>demo.py</span></div>
              <p className="code-preview-note">{t.codePreviewNote}</p>
              <pre className="code-preview-pre"><code>{selected.codeSample}</code></pre>
            </section>}
            <div className="detail-actions">{safeUrl(selected.demo) && <a className="win-button win-button--primary" href={safeUrl(selected.demo)} target="_blank" rel="noopener noreferrer">{t.demo}</a>}{safeUrl(selected.repository) && <a className="win-button" href={safeUrl(selected.repository)} target="_blank" rel="noopener noreferrer">{t.code}</a>}</div>
          </>}
        </div>, t.infoProject, 'PORTFOLIO.EXE')}

      {frame('about', `${t.about} — ${t.aboutWindow}`, [t.general, t.details, t.version],
        <div className="about-content"><div className="about-top"><div className="profile-avatar"><ProfileIcon alt={t.profilePhotoAlt} /></div><div><span className="section-overline">{t.userProfile}</span><h2>{SITE.name}<span className="dot-pink">.</span></h2><p>{textFor(SITE.role, locale)}</p></div></div><div className="dotted-rule" /><span className="section-overline">{t.whoAmI}</span><p className="about-bio">{textFor(SITE.bio, locale)}</p><div className="about-facts"><div><small>{t.area}</small><strong>{t.focus}</strong></div><div><small>{t.location}</small><strong>{textFor(SITE.location, locale)}</strong></div></div><button type="button" className="win-button win-button--primary" onClick={() => openWindow('contact')}>{t.talk}</button></div>, t.aboutComputer, '98.0')}

      {frame('stack', `${t.stack} — ${t.controlPanel}`, [t.file, t.options, t.help],
        <div className="stack-content"><span className="section-overline">{t.controlPanel.toUpperCase()}</span><h2>{t.toolbox}<span className="dot-pink">.</span></h2><p>{t.toolboxNote}</p><div className="stack-groups">{[
          ['dados', 'chart', t.dataVis], ['automacoes', 'gear', t.automations], ['dev', 'terminal', t.development], ['infraestrutura', 'gear', t.infrastructure]
        ].map(([id, icon, label]) => <div className="stack-group" key={id}><div className="stack-group-head"><Icon name={icon} /><strong>{label}</strong></div><div className="tag-cloud">{(SITE.tools[id] || []).map((item) => <TechnologyBadge key={item} name={item} locale={locale} />)}</div></div>)}</div></div>, t.settings, 'OK')}

      {frame('contact', t.newMessage, [t.file, t.edit, t.insert, t.help],
        <div className="contact-content"><div className="contact-banner"><Icon name="mail" /><div><span className="section-overline">{t.inboxOpen}</span><h2>{t.createTogether}</h2></div></div><p>{t.contactText}</p><div className="mail-fields"><div><label>{t.to}</label><span>{SITE.email || t.configEmail}</span></div><div><label>{t.subject}</label><span>{t.subjectText}</span></div></div><div className="contact-actions">
          {SITE.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(SITE.email) ? <a className="win-button win-button--primary" href={`mailto:${SITE.email}?subject=${encodeURIComponent(t.subjectText)}`}>{t.sendEmail}</a> : <button className="win-button win-button--primary" type="button" onClick={() => showToast(t.configLinkToast)}>{t.sendEmail}</button>}
          {safeUrl(SITE.github) ? <a className="win-button" href={safeUrl(SITE.github)} target="_blank" rel="noopener noreferrer">GitHub · @d0ardaa ↗</a> : <button className="win-button is-disabled" type="button" onClick={() => showToast(t.configLinkToast)}>GitHub ↗</button>}
          {safeUrl(SITE.linkedin) ? <a className="win-button" href={safeUrl(SITE.linkedin)} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a> : <button className="win-button is-disabled" type="button" onClick={() => showToast(t.configLinkToast)}>LinkedIn ↗</button>}
          </div><p className="contact-hint">{t.contactHint}</p></div>, t.unsent, t.noSpam)}

      {frame('readme', t.readmeTitle, [t.file, t.edit, t.view, t.help],
        <div className="readme-content"><pre>{t.readmeText}</pre></div>, t.plainText, 'UTF-8')}
    </div>

    {startMenuOpen && <div className="start-menu" role="menu" aria-label={t.start}>
      <div className="start-menu-brand"><span>MariaOS</span><strong>98</strong></div>
      <div className="start-menu-links"><div className="start-menu-title">{t.programs}</div>
        {[
          ['welcome', 'computer', t.welcome], ['projects', 'folder', t.projects], ['about', 'user', t.about],
          ['stack', 'gear', t.stack], ['contact', 'mail', t.contact]
        ].map(([id, icon, label]) => <button key={id} role="menuitem" type="button" onClick={() => openWindow(id)}>{id === 'about' ? <ProfileIcon alt="" /> : <Icon name={icon} />}{label}</button>)}
        <div className="start-menu-divider" />
        <button type="button" role="menuitem" onClick={() => openWindow('readme')}><Icon name="note" />{t.helpInfo}</button>
        <button type="button" role="menuitem" onClick={restart}><Icon name="star" />{t.restart}</button>
      </div>
    </div>}
    <footer className="taskbar" aria-label={t.taskbar}>
      <button className={`start-button${startMenuOpen ? ' is-active' : ''}`} type="button" aria-haspopup="menu" aria-expanded={startMenuOpen} onClick={() => setStartMenuOpen((v) => !v)}><WinMark /><strong>{t.start}</strong></button>
      <div className="taskbar-divider" /><div className="taskbar-apps" aria-label={t.taskbar}>
        {openIds.map((id) => <button type="button" key={id} className={`taskbar-app${active === id && !minimizedIds.includes(id) ? ' is-active' : ''}`} onClick={() => taskbarClick(id)} title={labels[id]}><WindowIcon id={id} /><span>{labels[id]}</span></button>)}
      </div>
      <div className="taskbar-tray"><span className="tray-signal" title="OK">◈</span><span suppressHydrationWarning>{clock}</span></div>
    </footer>
    <div role="status" aria-live="polite" className={`toast${toast ? ' is-visible' : ''}`}>{toast}</div>
  </>;
}
