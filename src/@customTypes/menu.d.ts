export interface ItemChildren {
  id: string;
  title: string;
  caption?: string;
  type: string;
  url: string;
  target?: boolean;
  external?: boolean;
  disabled?: boolean;
  icon: any;
  breadcrumbs?: boolean;
  children?: ItemChildren[] | undefined;
}

export interface NavGroupProps {
  item: {
    id: string;
    title: string;
    caption?: string | undefined;
    type: string;
    children?: ItemChildren[];
  };
}

export interface NavCollpseProps {
  menu: ItemChildren;
  level: number;
}

export interface NavItemProps {
  item: ItemChildren;
  level: number;
}
