import React, { FC, memo } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart, ReferenceLine, Label } from 'recharts';

import { Props } from './types';
import Wrapper from './styles';

const LineGraphic: FC<Props> = ({
  data,
  referenceLine,
  variant,
  isMoney,
  hideAxisX = false,
  yAxisTooltipName,
  ...props
}) => {
  return (
    <Wrapper $variant={variant} $referenceLine={referenceLine} {...props}>
      <AreaChart data={data}>
        <YAxis dataKey="yAxis" tick={false} />

        <XAxis dataKey="xAxis" tick={hideAxisX} />

        <CartesianGrid vertical={false} stroke="#EDEDEF" />

        <Tooltip formatter={(value: any) => [value, yAxisTooltipName]} />

        {referenceLine && <ReferenceLine y={referenceLine} label={<Label value={referenceLine} position="left" />} />}

        <Area type="monotone" dataKey="yAxis" dot />
      </AreaChart>
    </Wrapper>
  );
};

export default memo(LineGraphic);
