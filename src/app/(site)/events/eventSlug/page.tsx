"use client";
import Volunteer from "@/components/SharedComponent/Volunteer";
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
        detail={item?.detail}
        category={item?.category}
        location={item?.location}
        eventdate={item?.date}
        duration={item?.duration}
        type={item?.type}
        entrants={item?.entrants}
        image={item?.image}
        gallery={item?.gallery}
        video={item?.video}
        content={item?.content}
      />
      <Volunteer />
    </>
  );
};

export default Events;
