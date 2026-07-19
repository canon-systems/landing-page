'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { BrandMark } from '@/components/BrandMark';
import { Button } from '@/components/ui/button';

const appHref = 'https://app.usecanon.com';
const demoHref = 'https://calendar.app.google/fjxUSvLSQrHvkMKA8';
const topVisibilityThreshold = 64;
const hideAfterScrollPosition = 160;
const hideAfterDownwardDistance = 24;
const showAfterUpwardDistance = 8;

const navLinks = [
  { title: 'Product', href: '#product-tour' },
  { title: 'How It Works', href: '#how-it-works' },
  { title: 'Integrations', href: '#integrations' },
  { title: 'FAQ', href: '#faq' },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    let previousScrollY = Math.max(window.scrollY, 0);
    let scrollDirection: 'up' | 'down' | null = null;
    let directionDistance = 0;
    let animationFrameId: number | null = null;

    const updateNavVisibility = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const scrollDelta = currentScrollY - previousScrollY;

      if (scrollDelta === 0) {
        animationFrameId = null;
        return;
      }

      const nextDirection = scrollDelta > 0 ? 'down' : 'up';

      if (nextDirection !== scrollDirection) {
        scrollDirection = nextDirection;
        directionDistance = 0;
      }

      directionDistance += Math.abs(scrollDelta);

      if (mobileOpen || currentScrollY <= topVisibilityThreshold) {
        setIsNavVisible(true);
      } else if (nextDirection === 'up' && directionDistance >= showAfterUpwardDistance) {
        setIsNavVisible(true);
      } else if (
        nextDirection === 'down'
        && currentScrollY >= hideAfterScrollPosition
        && directionDistance >= hideAfterDownwardDistance
      ) {
        setIsNavVisible(false);
      }

      previousScrollY = currentScrollY;
      animationFrameId = null;
    };

    const handleScroll = () => {
      if (animationFrameId === null) {
        animationFrameId = window.requestAnimationFrame(updateNavVisibility);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [mobileOpen]);

  const handleMobileToggle = () => {
    setIsNavVisible(true);
    setMobileOpen((isOpen) => !isOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[var(--border-tertiary)] bg-[rgba(251,250,255,0.86)] backdrop-blur-xl transition-transform duration-200 ease-out ${
        isNavVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      onFocus={() => setIsNavVisible(true)}
    >
      <nav
        aria-label="Primary navigation"
        className="relative mx-auto flex h-16 max-w-[88rem] items-center justify-between px-4 md:px-6 lg:px-8"
      >
        {/* Brand */}
        <BrandMark href="/" />

        {/* Desktop links */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-xs transition-colors duration-[120ms]"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="secondary" size="sm" asChild>
            <a href={appHref} target="_blank" rel="noopener noreferrer">Sign In</a>
          </Button>
          <Button size="sm" asChild>
            <a href={demoHref} target="_blank" rel="noopener noreferrer">
              Book a Demo
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center lg:hidden">
          <Button
            variant="secondary"
            size="icon"
            onClick={handleMobileToggle}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--border-tertiary)] bg-[var(--bg-tertiary)] px-4 py-3 lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="rounded-[8px] px-3 py-2 text-sm transition-colors duration-[120ms] hover:bg-[var(--bg-secondary)]"
                style={{ color: 'var(--text-secondary)' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2">
            <Button variant="secondary" className="w-full justify-start" asChild>
              <a href={appHref} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                Sign In
              </a>
            </Button>
            <Button className="w-full" asChild>
              <a href={demoHref} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                Book a Demo
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
