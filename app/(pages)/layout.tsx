import Navbar from "@/components/Navbar";
import Sidbar from "@/components/Sidbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={""}>
      <Navbar/>
      <Sidbar/>
      <section className={"mt-[10%] mx-[5%] md:ml-[20%] md:mt-[5%]"}>
        {children}
      </section>

    </main>
  );
}
