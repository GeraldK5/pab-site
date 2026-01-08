import HeroSub from "@/components/SharedComponent/HeroSub";
import EventList from "@/components/Events/EventList";
import MoreInfo from "@/components/SharedComponent/Volunteer";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Activity List | Productivity Acceleration",
};

const Page = () => {
    return (
        <>
            <HeroSub
                title="News and Updates"
            />
            <EventList />
            <MoreInfo />
        </>
    )
}

export default Page;