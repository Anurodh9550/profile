import { SiteLayout } from "@/components/website/SiteLayout";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout>{children}</SiteLayout>;
}
