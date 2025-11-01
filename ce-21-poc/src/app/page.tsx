import styles from "./page.module.scss";
import dataSlider from "./data/slider-data.json";
import ImageSlider from "./components/SwiperSlider/ImageSlider";
import Gallery from "./components/Gallery/Gallery";
import ImageTitleText from "./components/ImageTitleText/ImageTitleText";
import SocialShareButtons from "./components/SocialShareButtons/SocialShareButtons";
const ArtistDescription = `
A passionate and versatile fine arts artist, Dhanshree brings imagination to life through a remarkable command over diverse mediums such as pencil shading, charcoal, watercolor, acrylic, and oil painting. With a deep-rooted love for visual storytelling, she captures emotions, textures, and light in every creation — whether it’s the subtle gradients of graphite or the vibrant hues of acrylics. Each artwork reflects not only technical mastery but also an expressive sensitivity that speaks to viewers on a personal level.`;
export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Creative Euphoria 21 Art Studio</h1>
        <p>Explore the colors of creativity</p>
        <SocialShareButtons instagramUrl="https://www.instagram.com/creative_euphoria21" youtubeUrl="https://www.youtube.com/@creativeeuphoria21" whatsappNumber="9340504550"></SocialShareButtons>
      </header>
      <main>
        <ImageSlider data={dataSlider}></ImageSlider>
        <Gallery></Gallery>
        <ImageTitleText imageUrl="/images/d.jpg" title="Meet the Artist" text={ArtistDescription}></ImageTitleText>
      </main>
      <footer className={styles.footer}>
        {/* <button>More Content Coming Soon!!!</button> */}
        <div>
          <SocialShareButtons instagramUrl="https://www.instagram.com/creative_euphoria21" youtubeUrl="https://www.youtube.com/@creativeeuphoria21" whatsappNumber="9340504550"></SocialShareButtons>
        </div>
        <div>
          &copy; 2025 Creative Euphoria 21 Art Studio
        </div>
      </footer>
    </div>
  );
}
