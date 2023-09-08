import { getFeaturedEvents } from "../dummy-data";
import EventsList from "../components/events/EventsList";
import getData from "../utils/query-database.js";
import { Fragment } from "react";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Featured Events</title>
        <meta
          name="description"
          content="Do not miss out on a lot of special events that will end or get sold out soon"
        />
      </Head>
      <EventsList eventsList={props.featuredEvents} />;
    </Fragment>
  );
};
export default HomePage;

export const getStaticProps = async () => {
  const fetchedData = await getData(
    "https://nextjs-client-data-fetch-58852-default-rtdb.firebaseio.com/events.json",
    { filter: "featured" } // possible switches: 'all', 'featured', 'id', 'date'
  );
  return { props: { featuredEvents: fetchedData }, revalidate: 1800 };
};
