import { CompanyProfileDocument } from "@/components/profile/CompanyProfileDocument";
import { PrintButton } from "@/app/print-button";
import { COMPANY } from "@/lib/brand";
import type { Metadata } from "next";
import "./profile-pdf.css";

export const metadata: Metadata = {
  title: "Company Profile PDF | Kalpana Traders",
  description:
    "Download the full colorful company profile of Mass Kalpana Traders — SPARS Electric, SPARS Battery, Killa Electronics.",
};

export default function CompanyProfilePage() {
  return (
    <div className="cpdf-shell">
      <div className="cpdf-toolbar">
        <div className="cpdf-toolbar__brand">
          <strong>{COMPANY.tradeName} — Company Profile</strong>
          <span>
            {COMPANY.legalName} · 18 pages · Colorful PDF · Print or Save as PDF
          </span>
        </div>
        <div className="cpdf-toolbar__actions">
          <PrintButton />
        </div>
      </div>
      <CompanyProfileDocument />
    </div>
  );
}
