'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const appHref = 'https://app.usecanon.com';

const navLinks = [
  { title: 'Product', href: '#product-tour' },
  { title: 'How It Works', href: '#how-it-works' },
  { title: 'Integrations', href: '#integrations' },
  { title: 'FAQ', href: '#faq' },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerHeight = 66;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        setMobileOpen(false);
      }
    }
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[var(--border-tertiary)] bg-[rgba(251,250,255,0.86)] backdrop-blur-xl"
    >
      <nav className="relative mx-auto flex h-16 max-w-[88rem] items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <Image
            src="/web-app-manifest-512x512.png"
            alt="Canon"
            width={26}
            height={26}
            className="rounded-[6px]"
          />
          <div className="flex flex-col leading-none">
            <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Canon</span>
          </div>
          <span className="hidden border-l border-[var(--border-tertiary)] pl-2.5 text-[10px] text-[var(--text-tertiary)] sm:inline">Technical GTM readiness</span>
        </Link>

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
              onClick={(e) => handleNavLinkClick(e, link.href)}
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
            <a href={appHref} target="_blank" rel="noopener noreferrer">
              Get Access
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center lg:hidden">
          <Button
            variant="secondary"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="border-t border-[var(--border-tertiary)] bg-[var(--bg-tertiary)] px-4 py-3 lg:hidden"
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="rounded-[8px] px-3 py-2 text-sm transition-colors duration-[120ms] hover:bg-[var(--bg-secondary)]"
                style={{ color: 'var(--text-secondary)' }}
                onClick={(e) => handleNavLinkClick(e, link.href)}
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
              <a href={appHref} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                Get Access
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
