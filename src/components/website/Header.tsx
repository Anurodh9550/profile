"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { COMPANY, NAV_MENU } from "@/lib/brand";
import { IMAGES } from "@/lib/images";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.includes("#")) return pathname === href.split("#")[0];
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function NavLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  if (isExternal(href)) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

function isGroupActive(pathname: string, children: { href: string }[]) {
  return children.some((c) => !isExternal(c.href) && isActive(pathname, c.href));
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <Link href="/" className="site-logo" onClick={() => setMobileOpen(false)}>
          <Image
            src={IMAGES.logo}
            alt="Kalpana Traders logo"
            width={44}
            height={44}
            className="site-logo__img"
            priority
          />
          <span className="site-logo__text">
            <strong>{COMPANY.tradeName}</strong>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation" ref={navRef}>
          {NAV_MENU.map((item) => {
            if (item.href) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={isActive(pathname, item.href) ? "is-active" : ""}
                >
                  {item.label}
                </Link>
              );
            }

            const active = item.children ? isGroupActive(pathname, item.children) : false;
            const isOpen = openDropdown === item.label;

            return (
              <div
                key={item.label}
                className={`site-nav__dropdown ${isOpen ? "is-open" : ""} ${active ? "is-active-group" : ""}`}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="site-nav__trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                >
                  {item.label}
                  <svg viewBox="0 0 12 12" aria-hidden="true">
                    <path d="M2 4l4 4 4-4" />
                  </svg>
                </button>
                {item.children && (
                  <div className="site-nav__menu">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.href}
                        href={child.href}
                        className={!isExternal(child.href) && isActive(pathname, child.href) ? "is-active" : ""}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="site-header__actions">
          <Link href="/contact" className="btn btn--primary btn--sm site-header__cta">
            Contact Us
          </Link>
          <button
            type="button"
            className="site-menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="site-mobile-nav" aria-label="Mobile navigation">
          {NAV_MENU.map((item) => {
            if (item.href) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={isActive(pathname, item.href) ? "is-active" : ""}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            }

            const expanded = mobileExpanded === item.label;

            return (
              <div key={item.label} className="site-mobile-nav__group">
                <button
                  type="button"
                  className={`site-mobile-nav__trigger ${expanded ? "is-open" : ""}`}
                  onClick={() => setMobileExpanded(expanded ? null : item.label)}
                >
                  {item.label}
                  <svg viewBox="0 0 12 12" aria-hidden="true">
                    <path d="M2 4l4 4 4-4" />
                  </svg>
                </button>
                {expanded && item.children && (
                  <div className="site-mobile-nav__sub">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.href}
                        href={child.href}
                        className={!isExternal(child.href) && isActive(pathname, child.href) ? "is-active" : ""}
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      )}
    </header>
  );
}
