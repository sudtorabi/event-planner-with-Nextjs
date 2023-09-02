import EventItem from "./EventItem";
import styles from "./EventsList.module.css";

const EventsList = (props) => {
  return (
    <ul className={styles.list}>
      {props.eventsList.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventsList;
