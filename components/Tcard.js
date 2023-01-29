import Image from "next/image";
import Link from "next/link";
import styles from "../styles/tcard.module.scss";
const Tcard = (props) => {
  return (
    <div className={styles.tcard}>
      <div className={styles.tcard__imageContainer}>
        <p className={styles.tcard__title}>Calendar</p>
        <Image
          src="/images/oranges.png"
          alt="add alt"
          width="305"
          height="101"
        />
      </div>
      <div className={styles.tcard__body}>
        <p className={styles.tcard__text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button className={styles.tcard__button}>{props.buttonText}</button>
      </div>
    </div>
  );
};

export default Tcard;
