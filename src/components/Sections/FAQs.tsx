import Section from "../UI/Section";

export default function FAQs() {
  return (
    <Section id="faqs">
      <div>
        <h1 className="font-clash-display text-[2rem] font-bold leading-[2.5rem] mb-4">
          Frequently Asked
          <br />
          <span className="text-gl-purple">Question</span>
        </h1>
        <p className="text-sm max-w-[22rem] leading-[1.7rem]">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
      </div>

      <div className="flex items-center justify-center w-full h-full">
        <img
          className=""
          src="/assets/images/faqs.png"
          alt="frequently asked questions"
        />
      </div>
    </Section>
  );
}
