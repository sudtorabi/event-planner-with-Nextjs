import { useRouter } from "next/router";
import { getFilteredEvents } from "../../utils/query-database";
import EventsList from "@/components/events/EventsList";
import { Fragment } from "react";
import Head from "next/head";

const FilteredEventsPage = (props) => {
  const pageHeadContent = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content="All the events for the time that suits you best"
      />
    </Head>
  );
  return (
    <Fragment>
      {pageHeadContent}
      <EventsList eventsList={props.filteredEvents} />;
    </Fragment>
  );
};

export default FilteredEventsPage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const filteredData = params.slug;

  if (!filteredData) return { notFound: true };

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredMonth < 1 ||
    filteredMonth > 12 ||
    filteredYear > 2030 ||
    filteredYear < 2017
  )
    return {
      // 1)
      notFound: true,
      // //2)
      // redirect: { destination: "/errorPage" },
      // //3)
      // props: { hasError: true }, // in this case, we need to handle the error inside the page component
    };

  const filteredEvents = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) return { notFound: true };
  return { props: { filteredEvents } };
};
