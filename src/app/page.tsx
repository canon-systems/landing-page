import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  Check,
  CircleCheck,
  Clock3,
  FileCheck2,
  Flag,
  LockKeyhole,
  MessageSquare,
  Radar,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  Zap,
} from 'lucide-react';

import { AnimateIn } from '@/components/AnimateIn';
import { BrandMark } from '@/components/BrandMark';
import { FaqAccordion } from '@/components/landing-page/FaqAccordion';
import { IntegrationLogos, type IntegrationProvider } from '@/components/IntegrationLogos';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';

const appHref = 'https://app.usecanon.com';
const demoHref = 'https://calendar.app.google/fjxUSvLSQrHvkMKA8';
const productAccessEnabled = false;
const inner = 'mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-8';

export const metadata: Metadata = {
  title: 'Readiness That Keeps Up With Your Product',
  description:
    'Canon helps technical go-to-market teams ramp new hires faster, detect change, and keep the right resources current.',
  openGraph: {
    title: 'Canon | Readiness that keeps up with your product',
    description:
      'Canon helps technical go-to-market teams ramp new hires faster, detect change, and keep the right resources current.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canon | Readiness that keeps up with your product',
    description:
      'Canon helps technical go-to-market teams ramp new hires faster, detect change, and keep the right resources current.',
  },
};

const integrations: Array<{
  provider: IntegrationProvider;
  name: string;
  role: string;
  description: string;
  tone: string;
}> = [
    {
      provider: 'granola',
      name: 'Granola',
      role: 'Meeting context',
      description: 'Turn meeting notes and transcripts into customer themes, proof, and follow-up context.',
      tone: 'integration-granola',
    },
    {
      provider: 'gmail',
      name: 'Gmail',
      role: 'Email context',
      description: 'Connect the customer and team conversations that shape the work ahead.',
      tone: 'integration-gmail',
    },
    {
      provider: 'google_calendar',
      name: 'Google Calendar',
      role: 'Upcoming work',
      description: 'Know which meetings are next, who is involved, and when a briefing is needed.',
      tone: 'integration-calendar',
    },
    {
      provider: 'outlook',
      name: 'Outlook Calendar',
      role: 'Meeting timing',
      description: 'Prepare people for upcoming meetings across Microsoft calendars.',
      tone: 'integration-outlook',
    },
    {
      provider: 'slack',
      name: 'Slack',
      role: 'Communication + delivery',
      description: 'Bring in team context and route the next action to the communication space your team already uses.',
      tone: 'integration-slack',
    },
  ];

const operatingLoop = [
  {
    number: '01',
    title: 'Connect context',
    body: 'Choose the conversations, meetings, email, and calendars Canon should learn from.',
    icon: BrainCircuit,
  },
  {
    number: '02',
    title: 'Shape the path',
    body: 'Turn company context into role-specific learning steps, success signals, and ramp timing.',
    icon: Flag,
  },
  {
    number: '03',
    title: 'Prepare the moment',
    body: 'Brief people before the meeting, milestone, or customer situation where readiness matters.',
    icon: CalendarDays,
  },
  {
    number: '04',
    title: 'Find the proof',
    body: 'Check connected activity for evidence and send uncertain proof to a manager for review.',
    icon: FileCheck2,
  },
  {
    number: '05',
    title: 'Route what is next',
    body: 'Deliver the right update or action to the right person in the communication tool your team already uses, then keep the loop moving.',
    icon: Zap,
  },
];

const productStories = [
  {
    eyebrow: 'Hire paths',
    title: 'Get new hires productive faster.',
    body:
      'Canon gives each hire a role-specific path with timed learning steps, tool access, evidence checks, and manager review.',
    image: '/pictures/new_hire.png',
    alt: 'Canon Hire Paths showing Maya Chen’s AI Solutions Architect ramp, milestone progress, Canon Checks, and proof of progress.',
    bullets: ['Role-specific paths and ramp timing', 'Live Canon Checks and evidence status', 'Tool access and manager review'],
    accent: 'purple',
  },
  {
    eyebrow: 'Milestones + evidence',
    title: 'Turn role expectations into an approved readiness plan.',
    body:
      'Define the trigger, proof, timing, and dependency behind each learning step so managers can see what real progress should look like.',
    image: '/pictures/milestones.png',
    alt: 'Canon Milestones showing the AI Solutions Architect approved plan with timed learning steps, triggers, proof requirements, and dependencies.',
    bullets: ['Generated role plans with human approval', 'Real-work triggers and dependencies', 'Clear proof requirements'],
    accent: 'green',
  },
  {
    eyebrow: 'Readiness updates',
    title: 'Turn a detected change into an updated resource.',
    body:
      'Canon explains what changed in your product, pricing, messaging, or process, maps the roles and resources it affects, and helps prepare the right update for review.',
    image: '/pictures/readiness.png',
    alt: 'Canon Readiness showing an enterprise packaging change, affected technical roles, impact, and a recommended action.',
    bullets: ['Change and impact detection', 'Affected roles and resources', 'Update preparation and review'],
    accent: 'amber',
  },
  {
    eyebrow: 'Meeting briefings',
    title: 'Prepare the team before the next customer meeting.',
    body:
      'The Briefings pane watches the connected calendar, surfaces upcoming meetings, and tracks whether each briefing is waiting, delivered, or needs attention.',
    image: '/pictures/briefing.png',
    alt: 'Canon Meeting Briefings showing an Outlook Calendar connection, an upcoming customer meeting, delivered briefings, and one item needing attention.',
    bullets: ['Connected calendar awareness', 'Upcoming meeting preparation', 'Waiting, delivered, and attention states'],
    accent: 'purple',
  },
  {
    eyebrow: 'Knowledge',
    title: 'Keep the source material behind every recommendation visible.',
    body:
      'Canon shows the meeting libraries and team context it can use, how much knowledge is ready, and when each source was last updated.',
    image: '/pictures/knowledge.png',
    alt: 'Canon Knowledge showing three active Granola sources and 141 items ready for Canon to use.',
    bullets: ['Source health and update history', 'Customer and product context in one place', 'Clear visibility into what Canon can use'],
    accent: 'green',
  },
  {
    eyebrow: 'Roles + tools',
    title: 'Give every role the tools and context it needs to operate.',
    body:
      'Canon keeps role expectations and the systems behind them together, so every hire starts with the right access path and a clear owner.',
    image: '/pictures/roles.png',
    alt: 'Canon Settings showing the Roles & Tools catalog with three Technical GTM roles and their configured tools.',
    bullets: ['Role-specific tool mapping', 'Clear owners for every request', 'One readiness foundation'],
    accent: 'amber',
  },
  {
    eyebrow: 'Communication delivery',
    title: 'Put the next readiness action where the team already works.',
    body:
      'Canon routes access requests and follow-up actions into connected communication tools with the right context and a manager-controlled approval path. The current visual shows one example of that flow in Slack.',
    image: '/pictures/slack_delivery.png',
    alt: 'Canon’s Slack delivery surface showing access requests with links to Zoom, Gong, and GitHub and manager approval actions.',
    bullets: ['Context-rich access requests', 'Deep links to the work', 'Manager-controlled approvals'],
    accent: 'purple',
  },
] as const;

const faqItems = [
  {
    question: 'What does Canon actually do?',
    answer:
      'Canon builds role-specific ramp plans for new hires, prepares meeting briefings, keeps your team ready as GTM changes reach customers, and helps managers review the right updates.',
  },
  {
    question: 'Who is Canon built for?',
    answer:
      'Canon is built for Technical GTM teams, including Solutions Engineers, Solutions Architects, Implementation roles, Technical Account Managers, and the leaders responsible for getting them ready for customer work.',
  },
  {
    question: 'Which tools does Canon connect with today?',
    answer:
      'Canon currently connects with Slack, Granola, Gmail, Google Calendar, and Outlook Calendar. Additional communication tools, including Google Chat and Teams, are part of the planned integration surface. Each connection has a specific job: bringing in context, understanding upcoming work, finding evidence, or delivering the next action.',
  },
  {
    question: 'Does Canon replace our LMS or CRM?',
    answer:
      'No. Canon focuses on the readiness loop between changing company context and customer-facing work. It complements the systems you already use by preparing people for real work and showing whether the right capability is present.',
  },
] as const;

function IntegrationPill({ provider, name }: { provider: IntegrationProvider; name: string }) {
  return (
    <div className="integration-pill">
      <IntegrationLogos provider={provider} size={17} />
      <span>{name}</span>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="type-landing-h2 mt-4">{title}</h2>
      {body ? <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">{body}</p> : null}
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[var(--bg-page)] text-[var(--text-primary)]">
      <Navigation />

      <main>
        <section className="hero-section relative overflow-hidden">
          <div className="hero-grid pointer-events-none absolute inset-0" />
          <div className="hero-ambient pointer-events-none absolute inset-0" />

          <div className={`${inner} relative grid min-h-[calc(100svh-65px-72px)] items-center gap-12 py-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14`}>
            <div className="max-w-[39rem]">
              <div className="hero-kicker" style={{ animation: 'fade-up 0.55s ease 0.05s both' }}>
                <span className="hero-kicker-dot" />
                Readiness for technical go-to-market teams
              </div>

              <h1 className="type-landing-hero mt-6" style={{ animation: 'fade-up 0.6s ease 0.13s both' }}>
                Keep your technical GTM team ready for{' '}
                <span className="text-gradient-purple">every customer conversation.</span>
              </h1>

              <p
                className="mt-6 max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8"
                style={{ animation: 'fade-up 0.6s ease 0.21s both' }}
              >
                Canon builds role-specific ramp plans for new hires and keeps your team ready for customer conversations that build trust.
              </p>

              <div
                className="mt-8 flex flex-col gap-3 sm:flex-row"
                style={{ animation: 'fade-up 0.6s ease 0.29s both' }}
              >
                <Button size="lg" className="btn-primary-shimmer" asChild>
                  <a href={demoHref} target="_blank" rel="noopener noreferrer">
                    Book a demo
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                {/* Secondary product-tour CTA intentionally hidden while demos are the primary conversion path.
                <Button size="lg" variant="secondary" asChild>
                  <a href="#product-tour">Explore the product</a>
                </Button> */}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-[var(--text-tertiary)]" style={{ animation: 'fade-up 0.6s ease 0.37s both' }}>
                <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[var(--green-text)]" />Faster ramp</span>
                <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[var(--green-text)]" />Change detection</span>
                <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[var(--green-text)]" />Manager review</span>
              </div>
            </div>

            <div className="relative" style={{ animation: 'fade-up 0.7s ease 0.2s both' }}>
              <div className="hero-media-glow pointer-events-none absolute inset-x-[8%] bottom-[-4%] h-[45%]" />
              <div className="hero-media relative">
                <div className="hero-media-bar">
                  <div className="flex items-center gap-2">
                    <span className="window-dot bg-[#ff6258]" />
                    <span className="window-dot bg-[#ffbd2e]" />
                    <span className="window-dot bg-[#27c840]" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-[var(--text-tertiary)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--green-text)]" />
                    Seeded workspace
                  </span>
                </div>

                <div className="hero-media-footer">
                  <span>Change detected</span>
                  <span className="hero-media-line" />
                  <span>Impact mapped</span>
                  <span className="hero-media-line" />
                  <span>Action ready</span>
                </div>

                <div className="hero-media-stage">
                  <video
                    controls
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-contain bg-[#0c091b]"
                    aria-label="Canon product demo showing change detection, impact mapping, and readiness actions."
                  >
                    <source src="/videos/canon-demo.mp4" type="video/mp4" />
                    Your browser does not support embedded video.
                  </video>
                </div>
              </div>
              <div className="hero-float-card hero-float-card-left">
                <Radar className="h-4 w-4 text-[var(--amber-text)]" />
                <span><strong>Change detected</strong><small>Packaging update</small></span>
              </div>
              <div className="hero-float-card hero-float-card-right">
                <CircleCheck className="h-4 w-4 text-[var(--green-text)]" />
                <span><strong>Update ready</strong><small>Action ready</small></span>
              </div>
            </div>
          </div>

          <section
            className="relative border-y border-[var(--border-tertiary)] bg-[rgba(241,238,248,0.88)] backdrop-blur-sm"
            aria-label="Current integrations"
          >
            <div className={`${inner} flex flex-col items-center justify-between gap-4 py-4 md:flex-row md:py-5`}>
              <p className="text-sm text-[var(--text-secondary)]">Built around the tools your team already uses.</p>
              <div className="flex flex-wrap items-center justify-center gap-2.5 md:justify-end">
                {integrations.map((integration) => (
                  <IntegrationPill key={integration.provider} provider={integration.provider} name={integration.name} />
                ))}
              </div>
            </div>
          </section>
        </section>

        <section className="section-shell" id="how-it-works">
          <div className={inner}>
            <AnimateIn>
              <SectionHeading
                eyebrow="One operating loop"
                title="From scattered context to verified action."
                body="Canon closes the gap between what your company knows and what your customer-facing team does next."
                align="center"
              />
            </AnimateIn>

            <div className="operating-loop mt-12">
              {operatingLoop.map((step, index) => {
                const Icon = step.icon;
                return (
                  <AnimateIn key={step.number} delay={index * 70} className="h-full">
                    <article className="loop-card h-full">
                      <div className="flex items-center justify-between">
                        <span className="loop-number">{step.number}</span>
                        <span className="loop-icon"><Icon className="h-4 w-4" /></span>
                      </div>
                      <h3 className="mt-8 text-base font-medium">{step.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{step.body}</p>
                    </article>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-shell border-y border-[var(--border-tertiary)] bg-[var(--bg-secondary)]" id="product-tour">
          <div className={inner}>
            <AnimateIn>
              <SectionHeading
                eyebrow="Inside Canon"
                title="One system for the full readiness lifecycle."
                body="Start with a faster ramp. Stay current as product, pricing, messaging, and process changes affect the team."
              />
            </AnimateIn>

            <div className="mt-14 space-y-8 lg:space-y-12">
              {productStories.map((story, index) => (
                <AnimateIn key={story.eyebrow} delay={80}>
                  <article className={`product-story product-story-${story.accent} ${index % 2 === 1 ? 'product-story-reverse' : ''}`}>
                    <div className="product-story-copy">
                      <p className="section-eyebrow">{story.eyebrow}</p>
                      <h3 className="mt-4 text-2xl font-medium leading-tight tracking-[-0.02em] sm:text-3xl">{story.title}</h3>
                      <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--text-secondary)]">{story.body}</p>
                      <ul className="mt-7 space-y-3">
                        {story.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                            <span className="product-check"><Check className="h-3 w-3" /></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="product-visual">
                      <div className="product-visual-bar">
                        <div className="flex gap-1.5"><span /><span /><span /></div>
                        <span>Canon / {story.eyebrow}</span>
                      </div>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image src={story.image} alt={story.alt} width={1920} height={1440} className="h-full w-full object-cover" />
                      </div>
                    </div>
                  </article>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8" aria-label="Request access">
          <AnimateIn>
            <div className="final-cta mx-auto max-w-[88rem]">
              <div className="final-cta-grid pointer-events-none absolute inset-0" />
              <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <p className="section-eyebrow text-[var(--canon-purple-bright)]">Ramp and readiness</p>
                  <h2 className="mt-4 text-2xl font-medium tracking-[-0.02em] sm:text-3xl">Get new hires productive, then keep the team current.</h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">Canon builds role-specific ramp plans, detects product and process changes, and helps prepare the right resource for manager review.</p>
                </div>
                <Button size="lg" className="btn-primary-shimmer shrink-0 self-start md:self-center" asChild>
                  <a href={demoHref} target="_blank" rel="noopener noreferrer">
                    Book a demo
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </AnimateIn>
        </section>

        <section className="section-shell" aria-labelledby="proof-title">
          <div className={`${inner} grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20`}>
            <AnimateIn>
              <div>
                <p className="section-eyebrow">Proof, not progress bars</p>
                <h2 id="proof-title" className="type-landing-h2 mt-4">Readiness should show up in the work.</h2>
                <p className="mt-5 text-base leading-7 text-[var(--text-secondary)]">
                  Canon Checks looks for evidence across connected activity, flags uncertain proof, and keeps the manager in control of the final call.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="mini-proof-card"><strong>Automatic</strong><span>Evidence scan</span></div>
                  <div className="mini-proof-card"><strong>Human</strong><span>Review when needed</span></div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div className="proof-panel">
                <div className="proof-panel-head">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--text-tertiary)]">Canon Check</p>
                    <h3 className="mt-2 text-base font-medium">Run a customer discovery call</h3>
                  </div>
                  <span className="proof-status"><Clock3 className="h-3.5 w-3.5" />Reviewing</span>
                </div>
                <div className="proof-steps">
                  <div className="proof-step is-complete">
                    <span className="proof-step-icon"><MessageSquare className="h-4 w-4" /></span>
                    <div><strong>Communication activity</strong><small>Team thread matched the milestone trigger</small></div>
                    <CircleCheck className="ml-auto h-4 w-4 text-[var(--green-text)]" />
                  </div>
                  <div className="proof-step is-complete">
                    <span className="proof-step-icon"><ShieldCheck className="h-4 w-4" /></span>
                    <div><strong>Tool access confirmed</strong><small>Required customer tools are ready</small></div>
                    <CircleCheck className="ml-auto h-4 w-4 text-[var(--green-text)]" />
                  </div>
                  <div className="proof-step is-review">
                    <span className="proof-step-icon"><UserRoundCheck className="h-4 w-4" /></span>
                    <div><strong>Manager verification</strong><small>One evidence item is ready for review</small></div>
                    <span className="text-xs font-medium text-[var(--amber-text)]">Review</span>
                  </div>
                </div>
                <div className="proof-panel-foot">
                  <div><span>2</span><small>signals verified</small></div>
                  <div><span>1</span><small>manager review</small></div>
                  <div><span>3</span><small>sources checked</small></div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        <section className="section-shell border-y border-[var(--border-tertiary)] bg-[var(--bg-tertiary)]" id="integrations">
          <div className={inner}>
            <AnimateIn>
              <SectionHeading
                eyebrow="Connected context"
                title="Your tools already know what changed. Canon turns it into action."
                body="Each connection has a clear job in the readiness loop: context in, the right next step out."
              />
            </AnimateIn>

            <div className="integration-grid mt-12">
              {integrations.map((integration, index) => (
                <AnimateIn key={integration.provider} delay={index * 60} className="h-full">
                  <article className={`integration-card ${integration.tone}`}>
                    <div className="integration-logo-shell"><IntegrationLogos provider={integration.provider} size={25} /></div>
                    <div className="mt-6 flex items-center justify-between gap-3">
                      <h3 className="text-base font-medium">{integration.name}</h3>
                      <span className="integration-role">{integration.role}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{integration.description}</p>
                  </article>
                </AnimateIn>
              ))}
            </div>

            <AnimateIn delay={120}>
              <div className="context-flow mt-7">
                <div className="context-flow-item"><BrainCircuit className="h-4 w-4" /><span><strong>Context in</strong><small>Selected workspace sources</small></span></div>
                <ArrowRight className="context-flow-arrow" />
                <div className="context-flow-canon"><Sparkles className="h-4 w-4" /><span>Canon</span></div>
                <ArrowRight className="context-flow-arrow" />
                <div className="context-flow-item"><Zap className="h-4 w-4" /><span><strong>Action out</strong><small>Right person, right moment</small></span></div>
              </div>
            </AnimateIn>
          </div>
        </section>

        <section className="py-16 sm:py-20" id="security">
          <div className={inner}>
            <AnimateIn>
              <div className="trust-strip">
                <div className="trust-intro">
                  <LockKeyhole className="h-5 w-5 text-[var(--canon-purple-bright)]" />
                  <div><strong>Built for controlled context.</strong><span>Connect what matters. Keep people in the loop.</span></div>
                </div>
                <div className="trust-item"><Check className="h-3.5 w-3.5" />OAuth-connected apps</div>
                <div className="trust-item"><Check className="h-3.5 w-3.5" />Explicit source selection</div>
                <div className="trust-item"><Check className="h-3.5 w-3.5" />Human approval paths</div>
              </div>
            </AnimateIn>
          </div>
        </section>

        <section className="section-shell border-t border-[var(--border-tertiary)] bg-[var(--bg-secondary)]" id="faq">
          <div className={`${inner} grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20`}>
            <AnimateIn>
              <div>
                <p className="section-eyebrow">Questions</p>
                <h2 className="type-landing-h2 mt-4">The short version.</h2>
                <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)]">Canon is focused on a simple outcome: make the next customer-facing action the right one.</p>
              </div>
            </AnimateIn>
            <AnimateIn delay={80}><FaqAccordion items={faqItems} /></AnimateIn>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <AnimateIn>
            <div className="final-cta mx-auto max-w-[88rem]">
              <div className="final-cta-grid pointer-events-none absolute inset-0" />
              <div className="relative max-w-3xl">
                <p className="section-eyebrow text-[var(--canon-purple-bright)]">Faster ramp, current team</p>
                <h2 className="type-landing-h2 mt-4">Get people productive. Keep the work up to date.</h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-secondary)]">Canon connects new-hire ramping with change detection, impact mapping, and manager review.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="btn-primary-shimmer" asChild>
                    <a href={demoHref} target="_blank" rel="noopener noreferrer">Book a demo <ArrowRight className="h-4 w-4" /></a>
                  </Button>
                  {/* Secondary product-tour CTA intentionally hidden while demos are the primary conversion path.
                  <Button size="lg" variant="secondary" asChild><a href="#product-tour">See how it works</a></Button> */}
                </div>
              </div>
              <div className="final-cta-orbit" aria-hidden="true">
                <span className="orbit-core"><Sparkles className="h-6 w-6" /></span>
                <span className="orbit-node orbit-node-one"><MessageSquare className="h-4 w-4" /></span>
                <span className="orbit-node orbit-node-two"><Flag className="h-4 w-4" /></span>
                <span className="orbit-node orbit-node-three"><CircleCheck className="h-4 w-4" /></span>
              </div>
            </div>
          </AnimateIn>
        </section>
      </main>

      <footer className="border-t border-[var(--border-tertiary)] bg-[var(--bg-tertiary)]">
        <div className={`${inner} flex flex-col items-start justify-between gap-5 py-7 sm:flex-row sm:items-center`}>
          <BrandMark />
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[var(--text-tertiary)]">
            <a className="transition-colors hover:text-[var(--text-primary)]" href={demoHref} target="_blank" rel="noopener noreferrer">Book a demo</a>
            {productAccessEnabled ? (
              <a className="transition-colors hover:text-[var(--text-primary)]" href={appHref} target="_blank" rel="noopener noreferrer">Sign in</a>
            ) : null}
            <span>© 2026 Canon</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
