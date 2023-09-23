import Section from "../UI/Section";

export default function Introduction() {
  return (
    <Section id="intro">
      <div className="relative flex items-center justify-center w-full h-full">
        <img
          className=""
          src="/assets/images/the-big-idea.png"
          alt="the big idea"
        />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 max-w-[9rem] text-2xl text-center font-bold">
          The Big Idea!
        </h1>
      </div>

      <div>
        <h1 className="font-clash-display text-[2rem] font-bold leading-[2.5rem] mb-4">
          Introduction to getlinked
          <br />
          <span className="text-gl-purple">tech Hackathon 1.0</span>
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
    </Section>
  );
}
