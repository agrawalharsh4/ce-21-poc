import Image from "next/image";
import styles from "./Gallery.module.scss";
const Gallery: React.FC = ({ }) => {
  return (
    <section className={styles.gallery}>
        <h1 className="w-full text-4xl font-bold dark:text-white">Student&apos;s Creations</h1>
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
    </section>
  );
};

export default Gallery;