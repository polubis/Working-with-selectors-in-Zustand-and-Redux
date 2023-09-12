import type { ReactNode } from "react";

// Base model for the ListItem component props.
interface ItemBase {
  id: string;
  content: string;
}

// Passed generic Type must have at least id and content to work.
export interface ListItemInjectedProps<T extends ItemBase> {
  item: T;
  index: number;
  ListItem: (props: ItemBase) => ReactNode;
}

export interface ListProps<T extends ItemBase> {
  items: T[];
  // We'll inject the "ListItem" component from children to parent
  // and the parent will decide what should be rendered.
  children: (props: ListItemInjectedProps<T>) => ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}
