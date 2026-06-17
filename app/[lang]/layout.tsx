import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ml" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <>
      <Navbar lang={lang} />
      <main style={{ background: "#f5f5f0" }} className="min-h-screen">
        {children}
      </main>
      <Footer lang={lang} />
    </>
  );
}
