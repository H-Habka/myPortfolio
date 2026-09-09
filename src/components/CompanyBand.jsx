import React from "react";

const companies = [
    { name: "EasySales", role: "IT Applications Manager · Sole engineer" },
    { name: "Saray Jewellery", role: "Shopify + jewelry photography" },
];

const CompanyBand = () => {
    return (
        <section className="relative px-5 sm:px-8">
            <div className="section-inner overflow-hidden rounded-3xl border border-white/10 bg-surface/80 px-6 py-8 sm:px-10">
                <p className="section-kicker">Companies</p>
                <div className="mt-5 grid gap-6 md:grid-cols-2">
                    {companies.map((company) => (
                        <div key={company.name} data-aos="fade-up">
                            <p className="font-display text-3xl font-semibold text-three sm:text-4xl">
                                {company.name}
                            </p>
                            <p className="mt-2 text-sm text-muted">
                                {company.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyBand;
