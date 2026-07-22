import Image from 'next/image';
import Link from 'next/link';

const readinessLabel = 'Customer conversation readiness';

type BrandMarkProps = {
  href?: string;
  className?: string;
};

export function BrandMark({ href, className = '' }: BrandMarkProps) {
  const content = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[11px] border border-[rgba(109,74,255,0.34)] bg-[linear-gradient(145deg,#292238,#6d4aff)] p-[3px] shadow-[0_8px_22px_rgba(80,59,211,0.18)]">
        <Image
          src="/pictures/web-app-manifest-512x512.png"
          alt=""
          width={40}
          height={40}
          className="h-full w-full object-contain drop-shadow-[0_1px_5px_rgba(255,255,255,0.28)]"
        />
      </span>
      <span className="text-[17px] font-semibold leading-none tracking-normal text-[var(--text-primary)]">
        Canon
      </span>
      <span className="hidden border-l border-[var(--border-tertiary)] pl-3.5 text-xs font-semibold leading-none tracking-normal text-[var(--text-secondary)] sm:inline">
        {readinessLabel}
      </span>
    </>
  );

  const baseClassName = `inline-flex min-w-0 items-center gap-3 ${className}`;

  if (href) {
    return (
      <Link href={href} className={`${baseClassName} transition-opacity hover:opacity-85`} aria-label="Canon home">
        {content}
      </Link>
    );
  }

  return <div className={baseClassName}>{content}</div>;
}
