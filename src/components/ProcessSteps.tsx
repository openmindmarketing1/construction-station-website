import Reveal from "@/components/Reveal";

type Step = {
  number: string;
  title: string;
  description: string;
  icon?: string;
};

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <section className="bg-cream texture-cream py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <Reveal className="text-center mb-16 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-px bg-gold" />
            <span className="text-gold-deep text-xs uppercase tracking-[0.4em]">
              Our Process
            </span>
            <span className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-navy text-4xl md:text-5xl lg:text-6xl leading-[1]">
            From idea to <span className="italic text-gold-dark">reveal</span>.
          </h2>
        </Reveal>

        <div className="relative">
          {/* Horizontal connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 relative">
            {steps.map((step, i) => (
              <Reveal key={step.number} margin="-50px" delay={i * 100} className="relative">
                <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center font-display text-3xl text-navy mx-auto lg:mx-0 mb-6 relative z-10 ring-8 ring-cream">
                  {step.number}
                </div>
                <h3 className="font-display text-navy text-xl mb-2 text-center lg:text-left">
                  {step.title}
                </h3>
                <p className="text-navy/70 text-sm leading-relaxed text-center lg:text-left">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
