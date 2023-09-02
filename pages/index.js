import { getFeaturedEvents } from "../dummy-data";
import EventsList from "../components/events/EventsList";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return <EventsList eventsList={featuredEvents} />;
};
export default HomePage;
