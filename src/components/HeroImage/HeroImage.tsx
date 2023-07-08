import StyledHeroImage from './StyledHeroImage';

export default function HeroImage({ imgLink, text, color }: { imgLink: string; text: string[]; color: 'white' | 'black' }) {
  return (
    <StyledHeroImage className="hero-image-container" color={color} $imgLink={imgLink}>
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
