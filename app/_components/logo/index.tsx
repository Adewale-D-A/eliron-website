import Image from "next/image";
import Link from "next/link";

export const Logo = ({ variant = "light" }: { variant?: "dark" | "light" }) => {
  return (
    <Link
      href="/"
      className={"flex items-center justify-between rounded-lg overflow-hidden"}
    >
      {variant === "dark" ? (
        <Image
          src={"/logo.png"}
          width={200}
          height={200}
          alt="Eliron"
          className="md:h-[60px] h-[40px] w-auto"
        />
      ) : (
        <Image
          src={"/logo_v2.png"}
          width={200}
          height={200}
          alt="Eliron"
          className="md:h-[40px] h-[40px] w-auto "
        />
      )}
    </Link>
  );
};
