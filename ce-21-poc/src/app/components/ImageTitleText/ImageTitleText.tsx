import React from 'react';
import styles from './ImageTitleText.module.scss';
import Image from 'next/image';
interface ImageTextSectionProps {
  imageUrl: string;
  title: string;
  text: string;
}

const ImageTitleText: React.FC<ImageTextSectionProps> = ({ imageUrl, title, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image width={500} height={500} src={imageUrl} alt={title} />
      </div>
      <div className={styles.textSection}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ImageTitleText;
