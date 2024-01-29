import styles from "./card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Sales</span>
        <span className={styles.number}>4.300</span>
        <span className={styles.detail}>
          <span
            className={styles.change > 0 ? styles.positive : styles.negative}
          >
            37 %
          </span>{" "}
        </span>
      </div>
    </div>
  );
};

export default Card;
