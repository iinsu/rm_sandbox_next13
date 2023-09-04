export const metadata = {
  title: "Logo Carousel - Cruip Tutorials",
  description: "Page description",
};

import LogoCarousel from "./components/logo";

export default function LogoCarouselPage() {
  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">
            <LogoCarousel />
          </div>
        </div>
      </main>
    </>
  );
}
