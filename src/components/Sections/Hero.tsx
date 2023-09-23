import Button from "../UI/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex items-center justify-between border-t border-gl-white/[0.18] h-[calc(100vh-8.8rem)]"
    >
      <div className="flex flex-col justify-center text-gl-white h-full">
        <div className="flex flex-col">
          <h1 className="font-clash-display text-[5rem] font-bold leading-[normal]">
            getlinked{" "}
            <span className="whitespace-nowrap">
              Te
              <span className="relative">
                c
                <img
                  className="absolute bottom-[4.2rem] left-4"
                  src="/assets/svgs/hero-light-bulb.svg"
                  alt="light bulb"
                />
              </span>
              h
            </span>
          </h1>
          <h1 className="flex font-clash-display text-[5rem] font-bold leading-[normal]">
            Hackathon{" "}
            <span className="flex text-gl-purple">
              1.0
              <img src="/assets/svgs/hero-chain.svg" alt="chain" />
              <img src="/assets/svgs/hero-spark.svg" alt="spark" />
            </span>
          </h1>
          <div className=""></div>
        </div>
        <p className="mt-2 max-w-lg">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <Button text="Register" className="mt-14" />
        <div className="flex gap-12 mt-[4.8rem]">
          <h1 className="text-[4rem]">
            00<span className="text-sm">H</span>
          </h1>
          <h1 className="text-[4rem]">
            00<span className="text-sm">M</span>
          </h1>
          <h1 className="text-[4rem]">
            00<span className="text-sm">S</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-between h-full overflow-hidden">
        <h1 className="text-gl-white italic text-4xl font-bold my-6">
          Igniting a Revolution in{" "}
          <span className="relative whitespace-nowrap">
            HR Innovation
            <svg
              className="absolute top-full left-1/2 -translate-x-1/2"
              width="255"
              height="17"
              viewBox="0 0 255 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
                stroke="#FF26B9"
                strokeWidth="5"
              ></path>
            </svg>
          </span>
        </h1>

        <div className="relative w-full h-full">
          <img
            className="w-full h-full"
            src="/assets/images/hero-man-wearing-smart-glasses-touching-virtual-screen.png"
            alt="man wearing smart glasses"
          />
          <img
            className="absolute -top-20 left-8 w-full h-full"
            src="/assets/images/hero-globe-network.png"
            alt="globe"
          />
        </div>
      </div>
    </section>
  );
}
