import Button from "../UI/Button";
import Section from "../UI/Section";

export default function JudgingCriteria() {
  const criteria = [
    {
      title: "Innovation and Creativity",
      description: `Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.`,
    },
    {
      title: "Functionality",
      description: `Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.`,
    },
    {
      title: "Impact and Relevance",
      description: `Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.`,
    },
    {
      title: "Technical Complexity",
      description: `Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.`,
    },
    {
      title: "Adherence to Hackathon Rules",
      description: `Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.`,
    },
  ];
  return (
    <Section id="judging-criteria">
      <div className="flex items-center justify-center w-full h-full">
        <img
          className=""
          src="/assets/images/judging-criteria.png"
          alt="judging criteria"
        />
      </div>
      <div>
        <h1 className="font-clash-display text-[2rem] font-bold leading-[2.5rem] mb-4">
          Judging Criteria
          <br />
          <span className="text-gl-purple">Key attributes</span>
        </h1>
        <ul className="space-y-5">
          {criteria.map((item) => (
            <li
              key={encodeURI(item.title)}
              className="text-base leading-[1.7rem]"
            >
              <span className="text-gl-magenta font-bold">{item.title}</span>:{" "}
              {item.description}
            </li>
          ))}
        </ul>
        <Button text="Read More" className="mt-8" />
      </div>
    </Section>
  );
}
