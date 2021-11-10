import React, { FC } from 'react';
import { Container, Content } from 'components/ContentLoader/Content';

import { Props } from './types';

const Loader: FC<Props> = ({ opacity = 1 }) => {
  return (
    <Container>
      <Content viewBox="0 0 300 20" backgroundColor="#f1f1f1" $opacity={opacity}>
        <rect x="10" y="5" rx="4" ry="4" width="50" height="9" />
        <rect x="183" y="5" rx="4" ry="4" width="35" height="9" />
        <rect x="257" y="5" rx="4" ry="4" width="40" height="9" />
      </Content>
    </Container>
  );
};

export default Loader;
