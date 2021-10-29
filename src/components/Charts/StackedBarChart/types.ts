export type Props = {
  data: any[];
  referenceLine?: number;
  variant?: 'green' | 'red' | 'yellow';
  hideAxisX?: boolean;
};

export type ComponentProps = {
  $variant: Props['variant'];
  $referenceLine: Props['referenceLine'];
};
