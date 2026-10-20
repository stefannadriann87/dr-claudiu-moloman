import { faqItems } from "@/lib/site";

export function Faq() {
  return (
    <section className="section-light py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
          Întrebări frecvente
        </h2>
        <dl className="mt-10 space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border-2 border-cyan-700/20 bg-white px-5 py-5 shadow-md shadow-slate-400/20"
            >
              <dt className="text-lg font-bold text-cyan-900">{item.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-700">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
