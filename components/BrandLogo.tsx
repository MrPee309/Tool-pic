import Link from "next/link";

export default function BrandLogo() {
  return (
    <Link
      href="/"
      className="inline-flex min-h-11 items-center gap-2.5 rounded-lg"
      aria-label="Tool-Pic home"
    >
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <rect width="32" height="32" rx="8" fill="#1F5EFF" />
        <path
          d="M9 16.5l4.5 4.5L23 11"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-lg font-extrabold tracking-wide text-navy-900">TOOL-PIC</span>
    </Link>
  );
}
