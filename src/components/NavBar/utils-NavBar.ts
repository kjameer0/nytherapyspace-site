export type OpenOptions = '' | 'open' | 'close';
export const links = ['home', 'about', 'services', 'specialties', 'resources', 'contact'];
[
  {
    name: 'home',
    path: '',
    anchors: [],
  },
  {
    name: 'about',
    path: 'about',
    anchors: [
      { path: 'about', label: 'my story' },
      { path: 'fees-insurance', label: 'fees & insurance' },
    ],
  },
  {
    name: 'services',
    path: 'services',
    anchors: [{ path: '#adult-individual-therapy', label: 'adult individual therapy' },
    { path: '#teens-adolescents', label: 'teens & adolescents' }],
  },
  {
    name: 'home',
    path: '',
    anchors: [],
  },
  {
    name: 'home',
    path: '',
    anchors: [],
  },
];
export function handleDrawerSwitch(
  e: React.MouseEvent<HTMLButtonElement>,
  prev: OpenOptions,
  setOpen: React.Dispatch<React.SetStateAction<OpenOptions>>
) {
  //if first mounted, toggling drawer sets drawer open
  e.stopPropagation()
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
