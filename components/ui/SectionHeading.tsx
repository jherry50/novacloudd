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

      <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
        {badge}
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>

      <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
        {description}
      </p>

    </div>
  );
}