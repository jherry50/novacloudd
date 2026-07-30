import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="py-32">

      <div className="container-custom">

        <div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-20 text-center">

          <h2 className="text-5xl font-bold">
            Ready to simplify your workflow?
          </h2>

          <p className="mt-6 text-xl text-blue-100">
            Join over 100,000 businesses already using NovaCloud.
          </p>

          <Button
            className="mt-10 bg-white hover:bg-slate-100"
          >
            <p className="text-blue-700">Start Free Today</p>
          </Button>

        </div>

      </div>

    </section>
  );
}