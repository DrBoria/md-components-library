export type Props = {
  data: Order[];
  width?: number;
  height?: number;
};

type Field = {
  param: string;
  fill: string;
};

type Order = {
  fields: Field[];
  name: string;
  [name: string]: Field[] | string | number;
};
