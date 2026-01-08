import Image from "next/image";
import Link from "next/link";

interface Event {
    image: string;
    gallery?: string[];
    title: string;
    isFeatured?: boolean;
    slug: string;
    text: string;
    date: string;
    location?: string;
    type?: string;
    entrants?: string;
    duration?: string;
    category?: string;
    detail?: string;
}

const EventCard = ({ event }: { event: Event }) => {
    const { title, image, text, date, slug } = event;
    return (
        <>
            <Link href={`/events/event-details?event=${slug}`} className="group flex items-start gap-8">
                <div className="overflow-hidden rounded-sm">
                    <Image
                        src={image}
                        alt="image"
                        width={200}
                        height={200}
                        className="group-hover:scale-110 duration-300"
                    />
                </div>
                <div className="">
                    <h4 className="font-medium text-lg group-hover:text-primary mb-3">
                        {title}
                    </h4>
                    <p className="text-muted dark:text-white/60 text-base">
                        {text}
                    </p>
                </div>
            </Link>
        </>
    )
}

export default EventCard;