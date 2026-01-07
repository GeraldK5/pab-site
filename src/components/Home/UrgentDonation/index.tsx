"use client"

import DonationFormContext from "@/app/context/donationContext";
import { useContext } from "react";

const UrgentDonation = () => {
    const donationInfo = useContext(DonationFormContext);

    return (
        <section className="bg-[url('/images/background/donate-banner.jpg')] bg-cover sm:py-52 lg:py-28 py-16 bg-no-repeat">
            <div className="container mx-auto px-4">
                {/* Text content left-aligned */}
                <div className="max-w-1/2 text-left" data-aos="fade-right">
                    <h3 className="sm:text-2xl text-white text-lg font-bold mb-5">
                        Child needs to go immediate medical surgery, Help.
                    </h3>
                    <p className="text-muted text-white sm:text-base text-sm mb-7">
                        A child needs immediate surgery. Your help can save a life. Please contribute to their urgent medical care.
                    </p>
                    <button
                        onClick={() => donationInfo?.setIsDonationOpen(true)}
                        className="bg-linear-to-r from-primary to-secondary px-7 border text-sm font-semibold text-white border-transparent py-4 rounded-sm hover:from-transparent hover:to-transparent hover:border-primary hover:text-primary"
                    >
                        Urgent donate
                    </button>
                </div>
            </div>
        </section>
    );
}

export default UrgentDonation;
