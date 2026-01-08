import HeroSub from "@/components/SharedComponent/HeroSub";
import EventList from "@/components/Events/EventList";
import MoreInfo from "@/components/SharedComponent/Volunteer";
import WelcomeModal from "@/components/Home/WelcomeModal";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Activity List | Productivity Acceleration",
};

const Page = () => {
    return (
        <>
            <WelcomeModal delayMs={3000} maxViews={7} />
            <HeroSub
                title="News and Updates"
            />
            <EventList />
            <MoreInfo />
        </>
    )
}

export default Page;