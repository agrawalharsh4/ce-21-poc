import Image from "next/image";
import styles from "./page.module.scss";
import ImageTitleText from './components/ImageTitleText/ImageTitleText';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Creative Euphoria 21 Art Studio</h1>
        <p>Explore the colors of creativity</p>
      </header>
      <main className={styles.gallery}>
        <div className={styles.artwork}>
          <Image width={320} height={480} src="/images/1.jpg" alt="Art 1" />
          <h3>Pen Art</h3>
        </div>
        <div className={styles.artwork}>
          <Image width={320} height={480} src="/images/2.jpg" alt="Art 2" />
          <h3>Spatula Work</h3>
        </div>
        <div className={styles.artwork}>
          <Image width={320} height={480}  src="/images/3.jpg" alt="Art 3" />
          <h3>Abstract Art on Acrylic Color</h3>
        </div>
         <div className={styles.artwork}>
          <Image width={320} height={480} src="/images/1.jpg" alt="Art 1" />
          <h3>Pen Art</h3>
        </div>
        <div className={styles.artwork}>
          <Image width={320} height={480} src="/images/2.jpg" alt="Art 2" />
          <h3>Spatula Work</h3>
        </div>
        <div className={styles.artwork}>
          <Image width={320} height={480}  src="/images/3.jpg" alt="Art 3" />
          <h3>Abstract Art on Acrylic Color</h3>
        </div>
      </main>
      <ImageTitleText imageUrl="/images/d.jpg" title="Meet the Artist" text="Loreum Epsum for Now"></ImageTitleText>
      <footer className={styles.footer}>
        <button>More Content Coming Soon!!!</button>
        <div>
          &copy; 2025 Creative Euphoria 21 Art Studio
        </div>
      </footer>
    </div>
  );
}
