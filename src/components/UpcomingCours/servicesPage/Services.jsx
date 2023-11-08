
const Services = () => {
    return (
        <section className="overflow-hidden rounded-lg shadow-2xl h-fit my-10 mx-5 lg:mx-0 md:grid md:grid-cols-3">
            <img
                alt="Trainer"
                src="https://i.ibb.co/Mk3FBtj/7915189-3784896.jpg"
                className="h-full w-full  object-cover border md:h-full md:w-full"
            />

            <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                <h2 className="mt-6 font-black uppercase">
                    <span className="text-4xl font-black sm:text-5xl lg:text-6xl">

                        How we do It
                    </span>


                </h2>
                <li className="text-lg font-semibold uppercase tracking-widest mt-4">
                    Creative Ideas
                </li>
                <p className="tracking-widest text-center">Keyword research and <br /> other market
                    research under the SEO analytics
                    umbrella.</p>
                <li className="text-lg font-semibold uppercase tracking-widest mt-4">
                    Data Collection
                </li>
                <p className="tracking-widest text-center"> Data collection is the  <br />process of gathering and measuring information on variables of interest.</p>
                <li className="text-lg font-semibold uppercase tracking-widest mt-4">
                    Targeting
                </li>
                <p className="tracking-widest text-center">Targeting methods determine  <br />where your ads can show and who can see them. You can use more than one targeting method in an ad group.</p>

                {/* <a
                    className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
                    href=""
                >
                    Get Discount
                </a> */}

                <p className="mt-8 text-xs font-medium uppercase text-gray-400">
                    Offer valid until 24th March, 2021 *
                </p>
            </div>
        </section>
    );
};

export default Services;
