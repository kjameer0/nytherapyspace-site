//components
import StyledSpecialties from './StyledSpecialties';
import HeroImage from 'components/HeroImage';
import StyledContentSection from 'components/ContentSection/StyledContentSection';
//images
import { WhiteNotebookImg } from 'assets';
// const specialties
export default function Specialties() {
  return (
    <StyledSpecialties>
      <HeroImage imgLink={WhiteNotebookImg} text={['treatment', 'specialties']} />
      <StyledContentSection>
        <h2 className="large-heading">When you&apos;re ready to try something new</h2>
        <h3 className="small-heading">Discover the transformative power of therapy.</h3>
        <p className="paragraph-content">
          Feeling stuck? Overwhelmed? It&apos;s time for a fresh perspective.
        </p>
        <p className="paragraph-content">
          Therapy offers personalized support to help you overcome challenges and achieve lasting
          change. I provide evidence-based techniques and a compassionate approach to help you
          explore your emotions, gain insights, and develop practical skills. With flexible
          scheduling and virtual sessions, therapy is accessible from anywhere. Take the first step
          towards a happier, more balanced life.
        </p>
      </StyledContentSection>
    </StyledSpecialties>
  );
}
