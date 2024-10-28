import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg-w-[16%] xl:w-[14%] ">
        <Link
          href={"/"}
          className="flex items-center justify-center gap-2 lg:justify-start p-4"
        >
          <Image width={32} height={32} src="/logo.png" alt="logo" />
          <span className="hidden lg:block font-bold">School schema</span>
        </Link>
        <Menu />
      </div>
      {/* right */}
      <div className="w-[86%] sm:h-[130rem] h-[140rem] md:h-[78rem]    sm:w-[90%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-yellow-400 ">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
