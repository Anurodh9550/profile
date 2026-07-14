import { ProfilePageRenderer } from "@/components/profile/ProfilePageRenderer";
import { indexEntries, profilePages } from "@/data/profile-pages";
import { BRAND } from "@/lib/brand";
import { PrintButton } from "@/app/print-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Profile | SPARS ELECTRIC",
  description: "Download or print the SPARS ELECTRIC corporate profile — 40 pages for investors and partners.",
};

export default function ProfilePage() {
  return (
    <div className="profile-shell">
      <div className="profile-toolbar">
        <div className="profile-toolbar__brand">
          <strong>{BRAND.brandName}</strong>
          <span>
            {BRAND.legalName} · Corporate Profile · {profilePages.length} pages
          </span>
        </div>
        <PrintButton />
        <a href="/company-profile" className="print-button" style={{ textDecoration: "none" }}>
          <span>Colorful PDF profile</span>
        </a>
      </div>

      <div className="profile-stack">
        {profilePages.map((page) => (
          <ProfilePageRenderer
            key={page.id}
            page={page}
            indexEntries={page.id === "index" ? indexEntries : undefined}
          />
        ))}
      </div>
    </div>
  );
}
