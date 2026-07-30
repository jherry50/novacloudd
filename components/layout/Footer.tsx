import { MirrorRectangular, Webhook, SmilePlus } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-20 dark:border-slate-800">

      <div className="container-custom grid gap-10 lg:grid-cols-4">

        <div>

          <h2 className="font-bold text-2xl gradient-text">
            NovaCloud
          </h2>

          <p className="mt-6 text-slate-600 dark:text-slate-300">
            Modern business software for growing companies.
          </p>

        </div>

        <div>

          <h4 className="font-semibold mb-4">
            Product
          </h4>

          <div className="space-y-2 text-slate-600 dark:text-slate-300">

            <a href="#">Features</a><br/>
            <a href="#">Pricing</a><br/>
            <a href="#">Security</a>

          </div>

        </div>

        <div>

          <h4 className="font-semibold mb-4">
            Company
          </h4>

          <div className="space-y-2 text-slate-600 dark:text-slate-300">

            <a href="#">About</a><br/>
            <a href="#">Careers</a><br/>
            <a href="#">Blog</a>

          </div>

        </div>

        <div>

          <h4 className="font-semibold mb-4">
            Follow
          </h4>

          <div className="flex gap-4">

            <MirrorRectangular />

            <Webhook />

            <SmilePlus />
          </div>

        </div>

      </div>

    </footer>
  );
}