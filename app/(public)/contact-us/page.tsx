import { Metadata } from "next";
import metadataContent from "@/app/_assets/seo-meta-data.json";

export const metadata: Metadata = metadataContent.contact;

export default function Contact() {
  return (
    <div className=" flex flex-col items-center  pt-28">
      <h1 className=" font-bol text-center text-5xl">Contact Us</h1>
    </div>
  );
}
