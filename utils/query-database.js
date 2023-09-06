export default async function getData(url, config, id, date) {
  const response = await fetch(url);
  const data = await response.json();
  const transformedData = transformData(data);
  if (config.filter === "all") return transformedData;
  if (config.filter === "featured")
    return transformedData.filter((event) => event.isFeatured);
  if (config.filter === "id" && id)
    return transformedData.find((event) => event.id === id);
  if (config.filter === "date" && date)
    return transformedData.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
      );
    });
}

//aanother approach is to break down the getData function into smaller meaningful functions like getFilteredEvents, getFeaturedEvents, getEventById, getAllEvents

export const getFilteredEvents = async (dateFilter) => {
  const { year, month } = dateFilter;

  const response = await fetch(
    "https://nextjs-client-data-fetch-58852-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  const transformedData = transformData(data);

  let filteredEvents = transformedData.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
  return filteredEvents;
};

const transformData = (data) => {
  const transformedData = [];
  for (const key in data)
    transformedData.push({
      id: key,
      ...data[key],
    });
  return transformedData;
};
