import styles from "./Button.module.css";
import Link from "next/link";

const Button = (props) => {
  if (props.link)
    return (
      <Link href={props.link} className={styles.btn}>
        {props.children}
      </Link>
    );
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
