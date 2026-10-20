import { faqItems } from "@/lib/site";

export function Faq() {
  return (
    <section className="bg-[#f7f3eb] py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <p className="eyebrow text-center">Întrebări</p>
        <h2 className="mt-3 text-center text-3xl font-medium text-[#1c211d] md:text-4xl">
          Întrebări frecvente
        </h2>
        <dl className="mt-10 divide-y divide-[#e4ddd0] overflow-hidden rounded-[1.6rem] bg-white ring-1 ring-[#e4ddd0]">
          {faqItems.map((item) => (
            <div key={item.question} className="px-6 py-6">
              <dt className="text-lg font-medium text-[#1c211d]">{item.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#5c655e]">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
