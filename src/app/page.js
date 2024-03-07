import Image from "next/image";
import AboutPage from "./about/page";
import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      {/* Left */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolor at laudantium debitis porro quidem possimus, earum praesentium ipsa minus.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image 
          src="/brands.png"
          alt=""
          fill
          className={styles.brandImg}
          />
        </div>
      </div>

      {/* Right */}
      <div className={styles.imgContainer}>
      <Image 
          src="/hero.gif"
          alt=""
          fill
          className={styles.heroImg}
          />
      </div>
    </div>
  );
}
