import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventsList from "@/components/events/EventsList";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) return <p className="center">Loading...</p>;
  if (
    isNaN(+filteredData[0]) ||
    isNaN(+filteredData[1]) ||
    +filteredData[1] < 1 ||
    +filteredData[1] > 12 ||
    +filteredData[0] > 2030 ||
    +filteredData[0] < 2017
  )
    return <p>invalid URL</p>;

  const filteredEvents = getFilteredEvents({
    year: +filteredData[0],
    month: +filteredData[1],
  });
  if (!filteredEvents || +filteredData[1].length === 0)
    return <p>no data exists based on your filter</p>;

  return <EventsList eventsList={filteredEvents} />;
};

export default FilteredEventsPage;
