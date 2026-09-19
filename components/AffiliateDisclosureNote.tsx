import Link from "next/link";
import { disclosureShort } from "@/lib/site";

export default function AffiliateDisclosureNote({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs leading-5 text-muted ${className}`}>
      {disclosureShort}{" "}
      <Link href="/affiliate-disclosure" className="font-medium text-brand underline underline-offset-2">
        Learn more
      </Link>
    </p>
  );
}
