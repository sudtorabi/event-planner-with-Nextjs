import { getFeaturedEvents } from "../dummy-data";
import EventsList from "../components/events/EventsList";
import getData from "../utils/query-database.js";

const HomePage = (props) => {
  return <EventsList eventsList={props.featuredEvents} />;
};
export default HomePage;

export const getStaticProps = async () => {
  const fetchedData = await getData(
    "https://nextjs-client-data-fetch-58852-default-rtdb.firebaseio.com/events.json",
    { filter: "featured" } // possible switches: 'all', 'featured', 'id', 'date'
  );
  return { props: { featuredEvents: fetchedData }, revalidate: 1800 };
};
