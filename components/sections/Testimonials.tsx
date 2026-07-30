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
    <section className="py-32 bg-slate-50">

      <div className="container-custom">

        <h2 className="text-5xl font-bold text-center mb-20">
          Loved by teams worldwide
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-lg"
            >

              <p className="text-slate-600 leading-8 italic">
                "{item.quote}"
              </p>

              <div className="mt-8">

                <h4 className="font-semibold">
                  {item.name}
                </h4>

                <p className="text-slate-500">
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