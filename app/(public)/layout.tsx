import ThemeModeToggle from "@/app/_components/button/theme-mode-toggle";
import NavMenu from "../_components/layout/menu";
import FooterMenu from "../_components/layout/footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full text-sm font-outfit">
      <NavMenu />
      {children}
      {/* footer  */}
      <FooterMenu />
      <div className=" fixed bottom-10 right-16 z-50">
        <ThemeModeToggle />
      </div>
    </main>
  );
}
