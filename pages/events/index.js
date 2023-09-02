import { getAllEvents } from "../../dummy-data";
import EventsList from "../../components/events/EventsList";
import FilterForm from "@/components/events/FilterForm";
import { useRouter } from "next/router";

const EventsPage = () => {
  const allEvents = getAllEvents();
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
