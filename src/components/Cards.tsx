import React from 'react';
import {
    MapPin,
    Github,
    Linkedin,
    Mail,
    Shield,
    Code,
    Cpu,
    Terminal,
    ArrowUpRight,
    Briefcase
} from 'lucide-react';
import { PROFILE, PROJECTS, SKILLS, EXPERIENCE, GOALS, CORE_FOCUS } from '../data';

// --- Shared Components ---

const Tag = ({ children }: { children: React.ReactNode }) => (
    <span className="tag">
        {children}
    </span>
);

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode; icon?: any }) => (
    <div className="section-title">
        {Icon && <Icon size={18} className="icon" />}
        <h2>{children}</h2>
    </div>
);

// --- Cards ---

export const IdentityCard = () => (
    <div className="snap-section card identity-card">
        <div className="identity-content">
            {/* Large Rectangular Image */}
            <div className="avatar-rect" style={{
                width: '100%',
                height: '200px',
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '1.5rem',
                border: '1px solid var(--color-border)'
            }}>
                <img src="/pc.gif" alt="Pixel Art" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <h1>{PROFILE.name}</h1>
            <p className="subtitle">{PROFILE.title}</p>

            <div className="details">
                <div className="detail-item">
                    <MapPin size={16} />
                    <span>{PROFILE.location}</span>
                </div>
                <div className="detail-item">
                    <span className="status-dot"></span>
                    <span>{PROFILE.status}</span>
                </div>
                <div className="detail-item" style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--color-text-tertiary)' }}>
                    <span>Made with ❤️ by Kalp</span>
                </div>
            </div>
        </div>

        <div className="social-links">
            <a href={PROFILE.socials.github} target="_blank" className="social-btn">
                <Github size={20} />
            </a>
            <a href={PROFILE.socials.linkedin} target="_blank" className="social-btn">
                <Linkedin size={20} />
            </a>
            <a href={PROFILE.socials.twitter} target="_blank" className="social-btn">
                {/* X Logo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </a>
            <a href={`mailto:${PROFILE.email}`} className="social-btn">
                <Mail size={20} />
            </a>
        </div>
    </div>
);

export const AboutCard = () => (
    <div className="snap-section card">
        <div className="section-content">
            <SectionTitle icon={Terminal}>About Me</SectionTitle>
            <p className="bio-text">
                {PROFILE.bio}
            </p>
            <blockquote className="quote">
                "{PROFILE.philosophy}"
            </blockquote>

            <div className="core-focus">
                <h3>Core Focus</h3>
                <ul>
                    {CORE_FOCUS.map((focus: string, i: number) => (
                        <li key={i}>
                            <span className="bullet"></span>
                            {focus}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export const ProjectsColumn = () => (
    <div className="snap-section w-wide card">
        <div className="section-content">
            <SectionTitle icon={Code}>Projects</SectionTitle>
            <div className="projects-list">
                {PROJECTS.map((project, i) => {
                    // @ts-ignore
                    const link = project.link;
                    const isLink = !!link;
                    const ItemWrapper = isLink ? 'a' : 'div';
                    const linkProps = isLink ? {
                        href: link,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    } : {};

                    return (
                        <ItemWrapper
                            key={i}
                            className="project-item"
                            style={{ display: 'block', textDecoration: 'none', cursor: isLink ? 'pointer' : 'default' }}
                            {...linkProps}
                        >
                            <div className="project-header">
                                <div>
                                    <h3>{project.name}</h3>
                                    <span className="project-role">{project.role}</span>
                                </div>
                                <ArrowUpRight size={18} className="arrow-icon" />
                            </div>

                            <p className="project-desc">
                                {project.description}
                            </p>

                            <div className="tags">
                                {project.tags.map((tag, t) => (
                                    <Tag key={t}>{tag}</Tag>
                                ))}
                            </div>

                            <ul className="highlights">
                                {project.highlights.slice(0, 2).map((h, hi) => (
                                    <li key={hi}>
                                        <span className="dot"></span>
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </ItemWrapper>
                    );
                })}
            </div>
        </div>
    </div>
);

export const TechStackCard = () => (
    <div className="snap-section card">
        <div className="section-content">
            <SectionTitle icon={Cpu}>Tech Stack</SectionTitle>

            <div className="tech-groups">
                <div className="tech-group">
                    <h4>Languages</h4>
                    <div className="tags">
                        {SKILLS.languages.map(s => <Tag key={s}>{s}</Tag>)}
                    </div>
                </div>

                <div className="tech-group">
                    <h4>Backend</h4>
                    <div className="tags">
                        {SKILLS.backend.map(s => <Tag key={s}>{s}</Tag>)}
                    </div>
                </div>

                <div className="tech-group">
                    <h4>Security</h4>
                    <div className="tags">
                        {SKILLS.security.map(s => <Tag key={s}>{s}</Tag>)}
                    </div>
                </div>

                <div className="tech-group">
                    <h4>AI / Data</h4>
                    <div className="tags">
                        {SKILLS.ai.map(s => <Tag key={s}>{s}</Tag>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const ExperienceCard = () => (
    <div className="snap-section card">
        <div className="section-content">
            <SectionTitle icon={Briefcase}>Experience</SectionTitle>
            <div className="experience-list">
                {EXPERIENCE.map((exp, i) => (
                    <div key={i} className="experience-item">
                        <div className="timeline-dot"></div>
                        <h3>{exp.role}</h3>
                        <div className="company">{exp.company}</div>
                        <div className="period">{exp.period}</div>
                        <p className="desc">{exp.description}</p>
                    </div>
                ))}

                <div className="experience-item">
                    <div className="timeline-dot"></div>
                    <h3>B.Tech in Cybersecurity</h3>
                    <div className="company">ITM SLS Baroda University</div>
                    <div className="period">Sem 4</div>
                </div>
            </div>
        </div>
    </div>
);

export const GoalsCard = () => (
    <div className="snap-section card">
        <div className="section-content">
            <SectionTitle icon={Shield}>Goals</SectionTitle>

            <div className="goals-section">
                <h3>Short Term</h3>
                <ul>
                    {GOALS.short.map((g, i) => (
                        <li key={i}>
                            <span className="arrow">→</span>
                            {g}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="goals-section">
                <h3>Long Term</h3>
                <ul>
                    {GOALS.long.map((g, i) => (
                        <li key={i}>
                            <span className="star">✦</span>
                            {g}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="personal-vibe">
                <h3>Personal Vibe</h3>
                <div className="tags">
                    {["Builder", "Security-First", "Logical", "Long-term"].map(v => (
                        <span key={v} className="vibe-tag">{v}</span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
