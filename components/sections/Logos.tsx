export default function Logos() {

    const companies = [
        "Google",
        "Microsoft",
        "Stripe",
        "Notion",
        "Dropbox",
        "Spotify",
    ];

    return (
        <section className="py-20">

            <div className="container-custom">

                <p className="text-center text-slate-500 mb-10">
                    Trusted by innovative companies worldwide
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">

                    {companies.map((company) => (

                        <div
                            key={company}
                            className="text-center text-xl font-bold text-slate-400 hover:text-slate-700 transition"
                        >
                            {company}
                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}