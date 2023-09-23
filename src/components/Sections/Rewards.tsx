import Section from "../UI/Section";
import SectionTitle from "../UI/SectionTitle";

export default function Rewards() {
  return (
    <Section id="rewards">
      <div className="flex items-center justify-center w-full h-full">
        <img
          className="scale-125"
          src="/assets/images/prizes-and-rewards.png"
          alt="frequently asked questions"
        />
      </div>

      <div>
        <SectionTitle title="Prizes and" subtitle="Rewards" />
        <p className="text-sm leading-[1.7rem] max-w-sm">
          Highlight of the prizes or rewards for winners and for participants.
        </p>

        <div className="flex gap-7 mt-60 -ml-16">
          <div className="flex flex-col shrink-0 w-52 h-72 rounded-lg border border-gl-purple bg-gl-purple/[0.12]">
            <img
              className="-mt-28 mx-auto w-[11rem] h-[11rem] object-cover pointer-events-none"
              src="/assets/images/silver-medal.png"
              alt="frequently asked questions"
            />
            <h2 className="text-4xl text-gl-white text-center font-bold mt-auto">
              2nd
            </h2>
            <h3 className="text-2xl text-gl-white text-center font-semibold mb-2">
              Runner
            </h3>
            <h1 className="text-[2rem] text-gl-purple text-center font-bold mb-8">
              N300,000
            </h1>
          </div>

          <div className="flex flex-col shrink-0 w-52 h-72 rounded-lg border border-gl-veronica bg-gl-veronica/[0.12] translate-y-4">
            <img
              className="-mt-36 mx-auto w-48 h-w-48 scale-150 object-cover pointer-events-none"
              src="/assets/images/gold-medal.png"
              alt="frequently asked questions"
            />
            <h2 className="text-4xl text-gl-white text-center font-bold mt-auto">
              1st
            </h2>
            <h3 className="text-2xl text-gl-white text-center font-semibold mb-2">
              Runner
            </h3>
            <h1 className="text-[2rem] text-gl-veronica text-center font-bold mb-8">
              N400,000
            </h1>
          </div>

          <div className="flex flex-col shrink-0 w-52 h-72 rounded-lg border border-gl-purple bg-gl-purple/[0.12]">
            <img
              className="-mt-28 mx-auto w-[11rem] h-[11rem] object-cover pointer-events-none"
              src="/assets/images/bronze-medal.png"
              alt="frequently asked questions"
            />
            <h2 className="text-4xl text-gl-white text-center font-bold mt-auto">
              3rd
            </h2>
            <h3 className="text-2xl text-gl-white text-center font-semibold mb-2">
              Runner
            </h3>
            <h1 className="text-[2rem] text-gl-purple text-center font-bold mb-8">
              N150,000
            </h1>
          </div>
        </div>
      </div>
    </Section>
  );
}
