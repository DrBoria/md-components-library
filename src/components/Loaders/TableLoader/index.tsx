import React, { FC } from 'react';

import { Container, Content } from 'components/ContentLoader/Content';

import { Props } from './types';

const Loader: FC<Props> = ({ opacity = 1 }) => {
  return (
    <Container>
      <Content viewBox="0 0 400 30" backgroundColor="#f1f1f1" $opacity={opacity}>
        <rect x="19" y="9" rx="3" ry="3" width="30" height="6" />
        <rect x="70" y="9" rx="3" ry="3" width="25" height="6" />
        <rect x="112" y="9" rx="3" ry="3" width="30" height="6" />
        <rect x="157" y="9" rx="3" ry="3" width="30" height="6" />
        <rect x="203" y="9" rx="3" ry="3" width="30" height="6" />
        <rect x="244" y="9" rx="3" ry="3" width="133" height="6" />
        <rect x="244" y="19" rx="3" ry="3" width="70" height="6" />
      </Content>
    </Container>
  );
};

export default Loader;
