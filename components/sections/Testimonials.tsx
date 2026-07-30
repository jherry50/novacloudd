const testimonials = [
  {
    quote:
      "NovaCloud completely transformed the way our team collaborates.",
    name: "Sarah Johnson",
    role: "CEO, Bright Labs",
  },
  {
    quote:
      "The interface is intuitive, fast, and beautifully designed.",
    name: "David Kim",
    role: "Product Manager",
  },
  {
    quote:
      "We replaced four different tools with NovaCloud.",
    name: "Emily Carter",
    role: "Founder, ScaleUp",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-950">

      <div className="container-custom">

        <h2 className="mb-20 text-center text-5xl font-bold text-slate-900 dark:text-white">
          Loved by teams worldwide
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-900"
            >

              <p className="leading-8 italic text-slate-600 dark:text-slate-300">
                "{item.quote}"
              </p>

              <div className="mt-8">

                <h4 className="font-semibold">
                  {item.name}
                </h4>

                <p className="text-slate-500 dark:text-slate-400">
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}