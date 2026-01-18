import { Metadata } from "next";
import metadataContent from "@/app/_assets/seo-meta-data.json";
import ContactForm from "@/app/_components/contact-form";
import CustomLink from "@/app/_components/button/link";
import { Download } from "lucide-react";

export const metadata: Metadata = metadataContent.contact;

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  return (
    <div className=" flex flex-col items-center  pt-28">
      <section className="w-full flex flex-col gap-5  justify-center items-center">
        <div className="w-full pt-10 lg:pt-16 pb-20 flex max-w-7xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <h2 className="text-5xl lg:text-7xl text-center font-bold text-transparent bg-linear-45 from-secondary via-primary to-secondary dark:from-primary dark:via-[#eda6a9] dark:to-primary bg-clip-text">
            Contact Us
          </h2>
          <p className=" text-center max-w-xl text-lg">
            Let&apos;s explore how we can support your delivery challenges.
          </p>

          <CustomLink
            href="/assets/brochure.pdf"
            className="flex items-center gap-2.5"
            download
          >
            Download Brochure <Download className=" animate-bounce" />
          </CustomLink>
        </div>
      </section>
      <section className="w-full flex flex-col gap-5  justify-center items-center">
        <div className="w-full pt-10 lg:pt-16 pb-20 flex max-w-7xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <ContactForm reasonId={params?.tier_id} />
        </div>
      </section>
    </div>
  );
}
