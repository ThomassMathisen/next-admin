import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" className={styles.bg} alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notifciation}>🔥 Available Now</span>
          <h3 className={styles.title}>
            How to use the new verion of the Admin dashboard
          </h3>
          <span className={styles.subtitle}>Take a tour to learn more</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            esse, necessitatibus dolores aliquid earum illum optio dolor quae!
            Cumque distinctio neque blanditiis numquam culpa eum provident
            doloremque explicabo eius ex?
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notifciation}>🚀 Coming Soon</span>
          <h3 className={styles.title}>
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className={styles.subtitle}>Boost your productivity</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            esse, necessitatibus dolores aliquid earum illum optio dolor quae!
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
