export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <h1 className="font-clash-display text-[2rem] font-bold leading-[2.5rem] mb-4">
      {title}
      <br />
      <span className="text-gl-purple">{subtitle}</span>
    </h1>
  );
}
