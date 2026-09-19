"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";
import { Icon } from "./Icon";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/categories", label: "Categories" },
  { href: "/compare", label: "Compare" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <BrandLogo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors ${
                      active ? "text-brand" : "text-navy-800 hover:bg-brand-50 hover:text-brand"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <form action="/tools" method="get" role="search" className="hidden lg:block">
            <label htmlFor="header-search" className="sr-only">
              Search tools
            </label>
            <div className="relative">
              <Icon
                name="search"
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
              />
              <input
                id="header-search"
                name="q"
                type="search"
                autoComplete="off"
                placeholder="Search tools…"
                className="h-10 w-56 rounded-xl border border-line bg-surface pl-9 pr-3 text-sm text-navy-900 placeholder:text-muted"
              />
            </div>
          </form>

          <Link
            href="/tools#tool-search"
            aria-label="Search tools"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy-800 hover:bg-brand-50 lg:hidden"
          >
            <Icon name="search" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy-800 hover:bg-brand-50 md:hidden"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-white md:hidden">
          <div className="container-page py-4">
            <nav aria-label="Mobile">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`flex min-h-12 items-center rounded-xl px-3 text-base font-medium ${
                          active ? "bg-brand-50 text-brand" : "text-navy-800 hover:bg-surface"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <form action="/tools" method="get" role="search" className="mt-4 flex gap-2">
              <label htmlFor="mobile-search" className="sr-only">
                Search tools
              </label>
              <input
                id="mobile-search"
                name="q"
                type="search"
                autoComplete="off"
                placeholder="Search for a tool…"
                className="h-12 min-w-0 flex-1 rounded-xl border border-line bg-surface px-4 text-base text-navy-900 placeholder:text-muted"
              />
              <button type="submit" className="btn btn-primary h-12">
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
