import { Header } from "@/components/website/Header";
import { Footer } from "@/components/website/Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
