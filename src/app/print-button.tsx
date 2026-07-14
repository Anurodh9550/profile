"use client";

export function PrintButton() {
  return (
    <button className="print-button" type="button" onClick={() => window.print()}>
      <span>Export profile</span>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M7 14h10v7H7z" />
      </svg>
    </button>
  );
}
