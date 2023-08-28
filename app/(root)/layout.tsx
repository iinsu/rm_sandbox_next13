import ClientOnly from "@/components/clientOnly";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <div className="h-full">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
