import Logo from "./Logo";
import { icons } from "./Icons";

export default function Footer() {
  const usefulLinks = [
    {
      title: "Overview",
      href: "/#intro",
    },
    {
      title: "Timeline",
      href: "/#timeline",
    },
    {
      title: "FAQs",
      href: "/#faqs",
    },
    {
      title: "Register",
      href: "/register",
    },
  ];

  return (
    <footer className="bg-gradient-to-t from-gl-china-black max-w-[1400px] mx-auto text-gl-white pb-12">
      <div className="flex justify-between h-full px-20 py-10">
        <div className="flex flex-col">
          <Logo />
          <p className="text-xs max-w-md leading-[1.9rem] mt-2">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <p className="text-xs leading-[1.9rem] mt-auto">
            Terms of Use
            <span className="h-full w-4 inline bg-gl-purple mx-4">&nbsp;</span>
            Privacy Policy
          </p>
        </div>
        <div>
          <h3 className="text-sm text-gl-purple font-semibold mb-3">
            Useful Links
          </h3>
          <ul className="space-y-3">
            {usefulLinks.map((link) => (
              <li>
                <a className="text-xs text-gl-white" href={link.href}>
                  {link.title}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4">
              <h4 className="text-xs text-gl-purple">Follow us</h4>
              <a href="#">{icons.instagram}</a>
              <a href="#">{icons.x}</a>
              <a href="#">{icons.facebook}</a>
              <a href="#">{icons.linkedin}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm text-gl-purple font-semibold mb-3">
            Contact Us
          </h3>
          <ul className="space-y-3">
            <li className="flex gap-4">
              {icons.phone}
              <p className="text-xs text-gl-white">+234 6707653444</p>
            </li>
            <li className="flex gap-4">
              {icons.location}
              <p className="text-xs text-gl-white max-w-[5.5rem] leading-[1.2rem]">
                27,Alara Street Yaba 100012 Lagos State
              </p>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      <p className="text-xs text-center">
        All rights reserved. © getlinked Ltd.
      </p>
    </footer>
  );
}
