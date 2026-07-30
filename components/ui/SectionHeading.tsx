type Props = {
  badge: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-20">

      <span className="inline-block rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-semibold">
        {badge}
      </span>

      <h2 className="text-5xl font-bold mt-6">
        {title}
      </h2>

      <p className="mt-6 text-slate-600 text-lg">
        {description}
      </p>

    </div>
  );
}