import StyledHeroImage from './StyledHeroImage';

export default function HeroImage({ imgLink, text }: { imgLink: string; text: string[] }) {
  return (
    <StyledHeroImage className="hero-image-container" $imgLink={imgLink}>
      <div>
        {text.map((word) => (
          <p className="single-word" key={word}>
            {word}
          </p>
        ))}
      </div>
    </StyledHeroImage>
  );
}
