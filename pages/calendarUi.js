import styles from "../styles/CalendarUi.module.scss";

export default function CalendarUI() {
  return (
    <div className={styles.calendar}>
      <h1>
        2022
        <span>Simple one page Calendar</span>
      </h1>
      <div className={styles.calendar__months}>Months name with Arrow</div>
      <div className={styles.calendar_days}>Days</div>
      <div className={styles.calender_emptySection}>empty section</div>
      <div className={styles.calendar__creditTo}>Credit to Agentship</div>
    </div>
  );
}
