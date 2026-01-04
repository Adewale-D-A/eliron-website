import { Metadata } from "next";
import metadataContent from "@/app/_assets/seo-meta-data.json";

export const metadata: Metadata = metadataContent.services;

export default function Services() {
  return (
    <div className=" flex flex-col items-center  pt-28">
      <h1 className=" font-bol text-center text-5xl">Services</h1>
    </div>
  );
}
