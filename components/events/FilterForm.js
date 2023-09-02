import DropdownList from "../UI/DropdownList";
import Button from "../UI/Button";
import styles from "./FilterForm.module.css";
import { useRef } from "react";

const FilterForm = (props) => {
  const yearRef = useRef();
  const monthRef = useRef();

  const months = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];
  const years = [
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
  ];
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;
    props.onSearch(selectedYear, selectedMonth);
  };
  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <DropdownList id="year" items={years} ref={yearRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <DropdownList id="month" items={months} ref={monthRef} />
        </div>
      </div>
      <Button>Find events</Button>
    </form>
  );
};

export default FilterForm;
