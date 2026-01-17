import { Metadata } from "next";
import metadataContent from "@/app/_assets/seo-meta-data.json";
import ServicesHeroCards from "@/app/_components/cards/services-hero";
import { Book, Brain, BriefcaseBusiness, Pyramid } from "lucide-react";
import ServiceOfferingsCard from "@/app/_components/cards/services-offerings";

export const metadata: Metadata = metadataContent.services;

export default function Services() {
  return (
    <div className=" flex flex-col items-center  pt-28">
      <section className="w-full flex flex-col gap-5  justify-center items-center">
        <div className="w-full pt-10 lg:pt-16 pb-20 flex max-w-7xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <h2 className="text-5xl lg:text-7xl text-center font-bold text-transparent bg-linear-45 from-secondary via-primary to-secondary dark:from-primary dark:via-[#eda6a9] dark:to-primary bg-clip-text">
            SERVICES / OFFERINGS
          </h2>
        </div>
      </section>
      <section className=" w-full mt-10 flex flex-col items-center">
        <div className="w-full max-w-7xl flex flex-col items-center space-y-5 px-5">
          <h4 className=" p-3 px-7 bg-secondary text-white text-lg w-fit text-center rounded-lg font-bold">
            Project Controls & Delivery Playbook
          </h4>
          <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Service 1 */}
            {[
              {
                icon: <Book />,
                pricing: { base_price: "$499", duration: "one-time access" },
                title: "Enterprise-Grade Framework",
                description:
                  "A comprehensive playbook designed for delivery leaders who need operational clarity, risk-based planning, and standardised execution practices.",
                items: [
                  {
                    title: "Who It's For",
                    content: [
                      "Project Managers",
                      "Project Controls Managers",
                      "PMOs and delivery practice leads",
                      "Consulting firms managing high-risk engagements",
                    ],
                  },
                  {
                    title: "What You Get",
                    content: [
                      "Proven controls frameworks and templates",
                      "Risk and opportunity management tools",
                      "Integrated planning and execution guidance",
                      "Metrics, dashboards, and accountability models",
                    ],
                  },
                ],
                ctaTitle: "Access Now",
              },
              {
                icon: <Book />,
                pricing: { base_price: "$??", duration: "?? access" },
                title: "Advanced Editions & Expansions",
                description:
                  "Extend the Playbook with deeper content tailored to:",
                items: [
                  {
                    title: "",
                    content: [
                      "Strategic risk governance",
                      "Portfolio-level delivery standards",
                      "Predictive analytics and early warning indicators",
                      "Integration with enterprise planning systems",
                    ],
                  },
                ],
                ctaTitle: "Contact sales for options",
              },
              {
                icon: <Book />,
                pricing: { base_price: "$??", duration: "?? access" },
                title: "Team & Firm Licensing",
                description:
                  "Enterprise licence options for organisations that want:",
                items: [
                  {
                    title: "",
                    content: [
                      "Multi-user access",
                      "Internal distribution rights",
                      "Customised branding options",
                      "Integration support",
                    ],
                  },
                ],
                ctaTitle: "Request pricing",
              },
              {
                icon: <Book />,
                pricing: { base_price: "$??", duration: "?? access" },
                title: "High-Value Advisory & Consulting Retainers",
                description:
                  "For organisations facing the toughest delivery challenges, Eliron offers:",
                items: [
                  {
                    title: "",
                    content: [
                      "Ongoing advisory retainer support",
                      "Custom consulting engagements",
                      "Project health assessments and corrective action planning",
                      "Executive decision support",
                    ],
                  },
                ],
                ctaTitle: "Talk to an Advisor",
              },
            ].map((ite, idx) => (
              <ServiceOfferingsCard key={idx} {...ite} />
            ))}
          </div>
        </div>
      </section>
      <section className=" w-full mt-10 flex flex-col items-center">
        <div className="w-full max-w-7xl flex flex-col items-center space-y-5 px-5">
          <h4 className=" p-3 px-7 bg-secondary text-white text-lg w-fit text-center rounded-lg font-bold">
            Why ELIRON
          </h4>
          <div className="w-full space-y-5">
            <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
              {[
                {
                  icon: <Pyramid className="size-6" />,
                  imgUrl: "/services/stabilization.jpg",
                  title: "Enterprise-Safe Intelligence",
                  bgClassName: "bg-[url('/services/stabilization.jpg')]",
                  description:
                    "Our frameworks are built for organisations, not individuals. All content and engagements are confidential, compliant, and ready for rigorous environments.",
                },
                {
                  icon: <BriefcaseBusiness className="size-6" />,
                  imgUrl: "/services/support.jpg",
                  bgClassName: "bg-[url('/services/support.jpg')]",
                  title: "Rooted in Practice",
                  description:
                    "We prioritise solutions that work in real world delivery settings, not academic theories.",
                },
              ].map((item) => (
                <ServicesHeroCards key={item?.title} {...item} />
              ))}
            </div>
            <div className=" w-full grid grid-cols-1 gap-5">
              {[
                {
                  icon: <Brain className="size-6" />,
                  imgUrl: "/services/transition.jpg",
                  bgClassName: "bg-[url('/services/transition.jpg')]",
                  title: "Scalable & Repeatable",
                  description:
                    "Eliron products and services support standardisation across teams, portfolios, and global delivery organisations.",
                },
              ].map((item) => (
                <ServicesHeroCards key={item?.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
