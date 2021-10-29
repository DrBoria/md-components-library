export type Props = {
  data: { xAxis: string; yAxis: number }[];
  referenceLine?: number;
  variant?: 'green' | 'red' | 'yellow';
  isMoney?: boolean;
  hideAxisX?: boolean;
  yAxisTooltipName: string;
};

export type ComponentProps = {
  $variant: Props['variant'];
  $referenceLine: Props['referenceLine'];
};
