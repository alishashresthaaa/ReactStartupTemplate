export interface NavMenuItemProps {
  // In case of flat
  name: string;
  link?: string;
  icon?: any;

  // In case of nested
  items: {}[];
}
