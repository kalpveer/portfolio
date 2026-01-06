import React, { useRef, useEffect, useState } from 'react';
import {
  IdentityCard,
  AboutCard,
  ProjectsColumn,
  TechStackCard,
  ExperienceCard,
  GoalsCard
} from './components/Cards';
import { ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Toggle Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Horizontal Scroll Wheel Logic
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const current = containerRef.current;
      if (!current) return;

      // Check if we are scrolling vertically inside a card
      const target = e.target as HTMLElement;
      const scrollableCard = target.closest('.section-content');

      if (scrollableCard) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableCard;
        const isAtWhyTop = scrollTop === 0;
        const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;

        // If we can scroll vertically in the card, let it happen
        if ((e.deltaY < 0 && !isAtWhyTop) || (e.deltaY > 0 && !isAtBottom)) {
          return;
        }
      }

      // Otherwise, translate vertical wheel to horizontal scroll
      if (e.deltaY !== 0) {
        // e.preventDefault(); // Optional: might block native scroll
        current.scrollLeft += e.deltaY;
      }
    };

    const current = containerRef.current;
    if (current) {
      current.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (current) {
        current.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  // Navigation Buttons
  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 450; // Approx card width + gap
      containerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className="fixed-header">
        <div className="header-brand">
          <h1>Kalp Veer</h1>
          <p>Fullstack Developer <span className="text-gray-400">&</span> <span className="role-accent">Pen Tester</span></p>
        </div>

        <div className="header-controls">
          <button onClick={() => scroll('left')} className="nav-btn" aria-label="Scroll Left">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll('right')} className="nav-btn" aria-label="Scroll Right">
            <ChevronRight size={20} />
          </button>
          <div style={{ width: 1, height: '1.5rem', background: 'var(--color-border)', margin: '0 0.5rem' }}></div>
          <button onClick={toggleTheme} className="nav-btn" aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </header>

      <div className="snap-container" ref={containerRef}>
        <IdentityCard />
        <AboutCard />
        <ProjectsColumn />
        <ExperienceCard />
        <TechStackCard />
        <GoalsCard />
        {/* Spacer */}
        <div style={{ paddingRight: '2rem' }}></div>
      </div>
    </>
  );
}

export default App;
