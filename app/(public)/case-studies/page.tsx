import Testimonials from "@/app/_components/animations/testimonials";

export default function CaseStudies() {
  return (
    <section
      className=" w-full results py-12 flex flex-col items-center justify-center mt-16"
      id="testimonials"
    >
      {" "}
      <div className="problem-header reveal max-w-6xl px-5 lg:px-10">
        <div className="section-label">TESTIMONIALS & CASE STUDIES</div>
        <h2 className=" section-title">
          Experience real results from real businesses
        </h2>
      </div>
      <Testimonials />
    </section>
  );
}
