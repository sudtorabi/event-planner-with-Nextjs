import styles from "./EventItem.module.css";
import Button from "../UI/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Image from "next/image";

const EventItem = (props) => {
  const { event } = props;
  const humanReadableDate = new Date(event.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const formattedAddress = event.location.replace(",", "\n");
  return (
    <li className={styles.item}>
      <Image
        src={"/" + event.image}
        alt={event.description}
        width={250}
        height={160}
      />
      {/* <img src={"/" + event.image} alt={event.description} /> */}
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{event.title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button
            link={{
              pathname: "/events/[eventId]",
              query: { eventId: props.event.id },
            }}
          >
            <span>Explore event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
