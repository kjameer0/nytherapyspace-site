export type OpenOptions = '' | 'open' | 'close';

export function handleDrawerSwitch(
  prev: OpenOptions,
  setOpen: React.Dispatch<React.SetStateAction<OpenOptions>>
) {
  //if first mounted, toggling drawer sets drawer open
  if (prev === 'close' || prev === '') {
    setOpen('open');
  } else if (prev === 'open') {
    setOpen('close');
  }
}
export interface DrawerProps {
  open: OpenOptions;
  setOpen: React.Dispatch<React.SetStateAction<OpenOptions>>;
}
