import { MirrorRectangular, Webhook, SmilePlus } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-20">

      <div className="container-custom grid lg:grid-cols-4 gap-10">

        <div>

          <h2 className="font-bold text-2xl gradient-text">
            NovaCloud
          </h2>

          <p className="mt-6 text-slate-600">
            Modern business software for growing companies.
          </p>

        </div>

        <div>

          <h4 className="font-semibold mb-4">
            Product
          </h4>

          <div className="space-y-2">

            <a href="#">Features</a><br/>
            <a href="#">Pricing</a><br/>
            <a href="#">Security</a>

          </div>

        </div>

        <div>

          <h4 className="font-semibold mb-4">
            Company
          </h4>

          <div className="space-y-2">

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