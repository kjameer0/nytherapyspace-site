import StyledBaseButton from './StyledBaseButton';

export default function BaseButton({text} : {text:string}) {
  return <StyledBaseButton role="button">{text}</StyledBaseButton>;
}
