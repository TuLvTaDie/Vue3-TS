export interface MenuItem {
  children?: MenuItem[];
  id: string;
  label: string;
  icon: string;
  path: string;
}