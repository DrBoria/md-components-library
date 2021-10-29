export type Props = {
  data: any[];
  referenceLine?: number;
  variant?: 'green' | 'red' | 'yellow';
  hideAxisX?: boolean;
  title: string;
};

export type ComponentProps = {
  $variant: Props['variant'];
  $referenceLine: Props['referenceLine'];
};
