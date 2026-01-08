"use client";
import MoreInfo from "@/components/SharedComponent/Volunteer";
import EventDetails from "@/components/Events/EventDetail";
import { useSearchParams } from "next/navigation";
import { Eventdata } from "@/app/data/data";

const Events = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("event");

  const item = Eventdata.find((item) => item.slug === slug);
  return (
    <>
      <EventDetails
        title={item?.title}
        detail={item?.detail ?? undefined}
        category={item?.category}
        location={item?.location}
        eventdate={item?.date}
        duration={item?.duration}
        type={item?.type}
        entrants={undefined}
        image={item?.image}
        gallery={item?.gallery}
        video={item?.video}
        content={item?.content}
        feedback={item?.feedback}
      />
      <MoreInfo />
    </>
  );
};

export default Events;
