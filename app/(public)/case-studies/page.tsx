import testimonials from "@/app/_assets/case-study.json";
export default function CaseStudies() {
  return (
    <section
      className=" w-full results py-12 flex flex-col items-center justify-center"
      id="testimonials"
    >
      {" "}
      <div className="problem-header reveal">
        <div className="section-label">TESTIMONIALS & CASE STUDIES</div>
        <h2 className=" section-title">
          Experience real results from real businesses
        </h2>
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 lg:px-10">
        {testimonials.map((study, index) => (
          <div key={study.id} className="pain-card">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {study.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{study.clientProfile}</p>

            <div className="mb-3">
              <h4 className="font-semibold text-orange">Challenge</h4>
              <p className="text-gray-600 text-sm">{study.challenge}</p>
            </div>

            <div className="mb-3">
              <h4 className="font-semibold text-orange">Solution</h4>
              <p className="text-gray-600 text-sm">{study.solution}</p>
            </div>

            <div className="mb-3">
              <h4 className="font-semibold text-orange">Results</h4>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                {study.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>

            <blockquote className="italic text-gray-700 border-l-4 border-orange pl-4 mt-4">
              “{study.feedback}”
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
