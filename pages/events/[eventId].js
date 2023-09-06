import getData from "../../utils/query-database";

import EventSummary from "@/components/event-detail/EventSummary";
import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";

const EventDetailPage = (props) => {
  const { event } = props;
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

export const getStaticProps = async (context) => {
  const { eventId } = context.params;
  const fetchedData = await getData(
    "https://nextjs-client-data-fetch-58852-default-rtdb.firebaseio.com/events.json",
    { filter: "id" }, // possible switches: 'all', 'featured', 'id', 'date'
    eventId
  );
  return { props: { event: fetchedData }, revalidate: 30 };
};

export const getStaticPaths = async () => {
  const fetchedData = await getData(
    "https://nextjs-client-data-fetch-58852-default-rtdb.firebaseio.com/events.json",
    { filter: "all" } // possible switches: 'all', 'featured', 'id', 'date'

    //for optimization purposes, we can only pre-fetch featured events (not all) and set fallback to true/ blocking.
  );
  return {
    paths: fetchedData.map((event) => ({ params: { eventId: event.id } })),
    fallback: false,
  };
};
