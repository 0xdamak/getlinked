import Section from "../UI/Section";

export default function Rules() {
  return (
    <Section id="rules-guidelines">
      <div>
        <h1 className="font-clash-display text-[2rem] font-bold leading-[2.5rem] mb-4">
          Rules and
          <br />
          <span className="text-gl-purple">Guidelines</span>
        </h1>
        <p className="text-sm leading-[1.7rem]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>

      <div className="flex items-center justify-center w-full h-full">
        <img
          className=""
          src="/assets/images/rules-guidelines.png"
          alt="rules and guidelines"
        />
      </div>
    </Section>
  );
}
