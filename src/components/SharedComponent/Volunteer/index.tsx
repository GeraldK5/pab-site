"use client"

import { useRouter } from "next/navigation";
import { useContext } from "react";

const MoreInfo = () => {
    const router = useRouter();
    return (
        <section className="lg:py-28 py-16 bg-[url('/images/background/pab-team2.png')] bg-no-repeat bg-cover overflow-hidden relative">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4 relative z-10">
                <div className="text-center">
                    <h2 className="text-3xl font-medium text-white mb-6">
                        We Accelerate Wealth Creation
                    </h2>
                    <p className="text-base text-white lg:max-w-60% mx-auto mb-6">
                        Our focus is on innovations for increased output per unit input at variety or breed development, raw material production, and processing in the priority value chains of Cocoa, Coffee, Banana, Cassava, Sweet Potato, Dairy, Poultry and Fish.
                    </p>
                    <div className="flex justify-center ">
                        <button onClick={() => router.push('/events')} className="text-white rounded-md text-sm font-semibold border border-primary px-7 py-4 hover:bg-primary transition-all duration-300">
                            View News and Updates
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoreInfo;