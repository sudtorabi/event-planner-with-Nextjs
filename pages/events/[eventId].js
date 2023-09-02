import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

import EventSummary from "@/components/event-detail/EventSummary";
import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";

const EventDetailPage = () => {
  const router = useRouter();
  const event = getEventById(router.query.eventId);
  if (!event) return <div>no such event found!</div>;
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
