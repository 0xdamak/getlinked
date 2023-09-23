import Button from "./Button";
import Logo from "./Logo";

export default function Nav() {
  const navLinks = [
    {
      title: "Timeline",
      href: "/#timeline",
    },
    {
      title: "Overview",
      href: "/#intro",
    },
    {
      title: "FAQs",
      href: "/#faqs",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  return (
    <nav className="flex items-center gap-28 h-[8.8rem] w-full px-8">
      <Logo />
      <ul className="flex items-center ml-auto gap-14 text-gl-white">
        {navLinks.map((link) => (
          <li key={encodeURI(link.title)}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
      <Button type="link" text="Register" href="/register" />
    </nav>
  );
}
