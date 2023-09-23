import classNames from "classnames";

export default function Timeline() {
  const events = [
    {
      title: "Hackathon Announcement",
      description:
        "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      date: "November 18, 2023",
    },
    {
      title: "Teams Registration begins",
      description:
        "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
      date: "November 18, 2023",
    },
    {
      title: "Teams Registration ends",
      description: "Interested Participants are no longer Allowed to register",
      date: "November 18, 2023",
    },
    {
      title: "Announcement of the accepted teams and ideas",
      description:
        "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
      date: "November 18, 2023",
    },
    {
      title: "Getlinked Hackathon 1.0 Offically Begins",
      description:
        "Accepted teams can now proceed to build their ground breaking skill driven solutions",
      date: "November 18, 2023",
    },
    {
      title: "Demo Day",
      description:
        "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
      date: "November 18, 2023",
    },
  ];

  return (
    <section id="timeline" className="text-gl-white py-16">
      <h1 className="font-clash-display text-[2rem] text-center font-bold leading-[2.5rem] mb-3">
        Timeline
      </h1>
      <p className="max-w-[21rem] text-center mx-auto">
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>

      <ul className="relative mt-40 before:absolute before:-top-16 before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-full before:bg-gl-purple">
        {events.map((event, index) => (
          <li
            key={encodeURI(event.title)}
            className={classNames(
              "relative flex items-center justify-between gap-56 h-48",
              {
                "flex-row-reverse": index % 2 !== 0,
              }
            )}
          >
            <div
              className={classNames("flex flex-col w-1/2", {
                "items-end": index % 2 === 0,
              })}
            >
              <h1
                className={classNames("text-gl-purple text-2xl font-bold", {
                  "text-right": index % 2 === 0,
                })}
              >
                {event.title}
              </h1>
              <p
                className={classNames("block max-w-[27rem]", {
                  "text-right": index % 2 === 0,
                })}
              >
                {event.description}
              </p>
            </div>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 text-gl-white text-2xl font-bold rounded-full bg-gl-veronica outline outline-[0.6rem] outline-gl-eerie-black">
              {index + 1}
            </span>
            <h1
              className={classNames(
                "relative w-1/2 text-gl-purple text-2xl font-bold",
                {
                  "text-right": index % 2 !== 0,
                }
              )}
            >
              {event.date}
            </h1>
          </li>
        ))}
      </ul>
    </section>
  );
}
