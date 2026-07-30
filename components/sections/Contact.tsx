"use client";

import { useForm } from "react-hook-form";
import Button from "../ui/Button";

type FormValues = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormValues>();

  function submit(data: FormValues) {
    console.log(data);
    alert("Thanks! We'll contact you shortly.");
    reset();
  }

  return (
    <section className="py-32 bg-slate-50">

      <div className="container-custom max-w-3xl">

        <h2 className="text-5xl font-bold text-center mb-12">
          Contact Sales
        </h2>

        <form
          onSubmit={handleSubmit(submit)}
          className="space-y-6"
        >

          <input
            {...register("name")}
            placeholder="Full Name"
            className="w-full rounded-xl border p-4"
          />

          <input
            {...register("email")}
            placeholder="Email"
            className="w-full rounded-xl border p-4"
          />

          <input
            {...register("company")}
            placeholder="Company"
            className="w-full rounded-xl border p-4"
          />

          <textarea
            {...register("message")}
            rows={5}
            placeholder="How can we help?"
            className="w-full rounded-xl border p-4"
          />

          <Button
            type="submit"
            className="w-full"
          >
            Send Message
          </Button>

        </form>

      </div>

    </section>
  );
}