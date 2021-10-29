import React, { FC } from 'react';
import { BarChart as DefaultBarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { PlainText } from 'components/Typography';
import { GraphicsContainer, LegendContainer, LegendRowContainer } from 'components/Charts/styles';

import { Props } from './types';
import { NameContainer, ColoredDot } from './styles';

const BarChart: FC<Props> = ({ data, width = 300, height = 300 }) => {
  const COLORS = ['#FF7664', '#3DC694', '#FFAD4F', '#754A89', '#498DF2'];

  return (
    <GraphicsContainer>
      <DefaultBarChart width={width} height={height} data={data}>
        {/* Background horizontal and vertical lines */}
        <CartesianGrid strokeDasharray="3 3" />

        {/* X asix annotaion */}
        <XAxis dataKey="name" />

        {/* Y asix annotaion */}
        <YAxis />
        {data.map((item) =>
          item.fields.map((field, index) => (
            <Bar
              // TODO: fix with unique id
              key={item.name + field.param}
              dataKey={field.param}
              fill={COLORS[index % COLORS.length]}
            />
          )),
        )}
      </DefaultBarChart>

      <LegendContainer>
        {data.map((item, index) => (
          <LegendRowContainer key={item.name}>
            <NameContainer>
              <ColoredDot color={COLORS[index % COLORS.length]} />
              <PlainText>{item.name}</PlainText>
            </NameContainer>
          </LegendRowContainer>
        ))}
      </LegendContainer>
    </GraphicsContainer>
  );
};

export default BarChart;
