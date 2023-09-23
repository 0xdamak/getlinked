import { type ReactNode } from "react";

export default function Section({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="grid grid-cols-2 items-center min-h-[40rem] gap-12 text-gl-white border-t border-gl-white/[0.18] py-16 max-w-[1400px] mx-auto"
    >
      {children}
    </section>
  );
}
