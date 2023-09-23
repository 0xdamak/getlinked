import classNames from "classnames";

export default function Partners() {
  const images = [
    { alt: "liberty assured", path: "/assets/images/liberty-assured-logo.png" },
    { alt: "libertypay", path: "/assets/images/libertypay-logo.png" },
    { alt: "winwise", path: "/assets/images/winwise-logo.png" },
    { alt: "whispersms", path: "/assets/images/whispersms-logo.png" },
    { alt: "paybox", path: "/assets/images/paybox-logo.png" },
    { alt: "vizual plus", path: "/assets/images/vizual-plus-logo.png" },
  ];

  return (
    <section id="partners" className="text-gl-white py-16">
      <h1 className="font-clash-display text-[2rem] text-center font-bold leading-[2.5rem] mb-3">
        Timeline
      </h1>
      <p className="max-w-[21rem] text-center mx-auto">
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>

      <div className="flex items-center justify-center mt-16 border border-gl-purple bg-gl-white/[0.01] max-w-7xl min-h-[35rem] rounded-md mx-auto">
        <div className="grid grid-cols-3">
          {images.map((image, index) => (
            <div
              key={encodeURI(image.alt)}
              className={classNames(
                "relative w-72 h-28 py-4 px-8",
                {
                  " before:w-1 before:h-5/6 before:bg-gl-purple": true,
                  "after:right-0 after:w-5/6 after:h-1 after:bg-gl-purple":
                    true,
                },
                {
                  "before:absolute before:top-0 before:right-0 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2":
                    index === 0 || index === 1,
                  "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2":
                    index === 2,
                  "before:absolute before:bottom-0 before:right-0":
                    index === 3 || index === 4,
                }
              )}
            >
              <img
                className="w-full h-full object-contain pointer-events-none"
                src={image.path}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
