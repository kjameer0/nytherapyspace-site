import StyledAbout from "./StyledAbout";
import StyledContentSection from 'components/ContentSection';
//images
import { TaxiImg, HeadshotImg, ColorNotebookImg } from 'assets';
import HeroImage from 'components/HeroImage';
export default function About() {
  return (
    <StyledAbout>
      <h1>
        About Your Clinician <br />
        <b>Jennie Chung, LCSW-R</b>
      </h1>
      <StyledContentSection className="opening-blurb">
        <img src={HeadshotImg} alt="headshot of Jennie Chung" />
        <p>
          I am a trauma-informed therapist dedicated to understanding and helping individuals,
          especially adolescents, recover from difficult life experiences. With over 10 years of
          clinical experience, I have helped my clients work through their trauma and achieve a
          better quality of life. My training and experience allow me to work collaboratively to
          create personalized treatment plans tailored to each client&apos;s unique needs, carefully
          honing in on individual strengths, and building resiliency in the face of adversity.
          Whether you&apos;re struggling with PTSD, childhood trauma, or other overwhelming life
          experience, I am here to help. When you&apos;re ready to take the first step toward your
          healing, contact me to schedule a free consultation. I look forward to hearing from you.
        </p>
      </StyledContentSection>
      <HeroImage
        id="color-note-img"
        imgLink={ColorNotebookImg}
        text={['my', 'clinical', 'style']}
        color={'white'}
      />
    </StyledAbout>
  );
}
