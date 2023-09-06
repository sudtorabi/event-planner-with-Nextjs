import getData from "../../utils/query-database";
import EventsList from "../../components/events/EventsList";
import FilterForm from "@/components/events/FilterForm";
import { useRouter } from "next/router";

const EventsPage = (props) => {
  const { allEvents } = props;
  const router = useRouter();
  const searchEventsHanlder = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <>
      <FilterForm onSearch={searchEventsHanlder} />
      <EventsList eventsList={allEvents} />
    </>
  );
};

export default EventsPage;

export const getStaticProps = async () => {
  const fetchedData = await getData(
    "https://nextjs-client-data-fetch-58852-default-rtdb.firebaseio.com/events.json",
    { filter: "all" } // possible switches: 'all', 'featured', 'id', 'date'
  );
  return { props: { allEvents: fetchedData }, revalidate: 1800 };
};
