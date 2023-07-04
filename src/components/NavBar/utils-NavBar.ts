export type OpenOptions = '' | 'open' | 'close';
export const links = ['home', 'about', 'services', 'specialties', 'resources', 'contact'];

/*
navLinks shows the structure of the navigation menu
almost every link that will appear on screen has submenus.
the anchor property in each object contains a list of submenus
the navbar/drawer component will check length of
that links anchors, and if there is at least one item
in anchors, the component will show the subanchors
*/
export type NavListItemType = {
  label: string;
  path: string;
  anchors: NavListItemType[];
};

export const navLinkList = [
  {
    label: 'home',
    path: '',
    anchors: [],
  },
  {
    label: 'about',
    path: 'about',
    anchors: [
      { path: 'about', label: 'my story' },
      { path: 'fees-insurance', label: 'fees & insurance' },
    ],
  },
  {
    label: 'services',
    path: 'services',
    anchors: [
      { path: '#adult-individual-therapy', label: 'adult individual therapy' },
      { path: '#teens-adolescents', label: 'teens & adolescents' },
      { path: '#family-therapy', label: 'family therapy' },
      { path: '#group-therapy', label: 'group therapy' },
      { path: '#clincical-supervision', label: 'clincical supervision' },
    ],
  },
  {
    label: 'specialties',
    path: 'specialties',
    anchors: [
      { path: '#mood-disorders', label: 'mood disorders' },
      { path: '#complex-trauma', label: 'complex trauma' },
      { path: '#teens-adolescents', label: 'teens &adolescents' },
      { path: '#cultural-trauma-diaspora', label: 'cultural trauma & diaspora' },
      { path: '#eating-disorders-body-image', label: 'eating disorders & body image' },
      { path: '#dating-relationships', label: 'dating & relationships' },
    ],
  },
  {
    label: 'blog',
    path: 'blog',
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
