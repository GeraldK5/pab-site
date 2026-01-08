"use client"


const Mandate = () => {

    return (
        <section className="bg-[url('/images/background/donate-banner.jpg')] bg-cover sm:py-52 lg:py-28 py-16 bg-no-repeat">
            <div className="container mx-auto px-4">
                {/* Text content left-aligned */}
                <div className="max-w-1/2 text-left" data-aos="fade-right">
                    <h3 className="sm:text-2xl text-white text-lg font-bold mb-5">
                        Making Uganda The Best
                    </h3>
                    <p className="text-muted text-white sm:text-base text-sm mb-7">
                        At the heart of our work is shifting Uganda's economy to a science-led modernization and making Uganda the "STI Power" in the region.
                    </p>
                    <button
                        onClick={() => { }}
                        className="bg-transparent px-7 border-2 text-sm font-semibold text-primary border-primary py-4 rounded-sm"
                    >
                        Urgent donate
                    </button>

                </div>
            </div>
        </section>
    );
}

export default Mandate;
