import HeroSub from "@/components/SharedComponent/HeroSub";
import PaginatedEventList from "@/components/Events/AllEvents";
import MoreInfo from "@/components/SharedComponent/Volunteer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Activities| Productivity Acceleration",
};

const Page = () => {
    return (
        <>
            <HeroSub
                title="All Activities"
            />
            <PaginatedEventList />
            <MoreInfo />
        </>
    )
}

export default Page;
