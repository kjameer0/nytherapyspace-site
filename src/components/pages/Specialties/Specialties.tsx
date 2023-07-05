import StyledSpecialties from './StyledSpecialties';
import HeroImage from 'components/HeroImage';
import { WhiteNotebookImg } from 'assets';
// const specialties
export default function Specialties() {
  return (
    <StyledSpecialties>
      <HeroImage imgLink={WhiteNotebookImg} text={['treatment', 'specialties']} />
    </StyledSpecialties>
  );
}
