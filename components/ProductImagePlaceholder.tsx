/** Neutral placeholder used when a product has no locally-stored image. */
export default function ProductImagePlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-brand-50 text-brand ring-1 ring-inset ring-brand-100 ${className}`}
      role="img"
      aria-label="Product image not available"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10"
        aria-hidden="true"
      >
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M3 7l2.5-4h13L21 7" />
        <circle cx="12" cy="13.5" r="3" />
      </svg>
    </div>
  );
}
