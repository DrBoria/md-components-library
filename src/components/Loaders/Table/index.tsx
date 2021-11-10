import React, { FC } from 'react';

import { Container, ContentLoader } from './styles';
import { Props } from './types';

const Loader: FC<Props> = ({ opacity = 1 }) => {
  return (
    <Container>
      <ContentLoader viewBox="0 0 400 30" backgroundColor="#f1f1f1" $opacity={opacity}>
        <rect x="10" y="4" rx="4" ry="4" width="45" height="7" />
        <rect x="10" y="15" rx="3" ry="3" width="25" height="6" />

        <circle cx="112" cy="11" r="9" />
        <rect x="127" y="8" rx="4" ry="4" width="38" height="7" />

        <circle cx="212" cy="11" r="9" />
        <rect x="227" y="4" rx="4" ry="4" width="45" height="7" />
        <rect x="227" y="15" rx="3" ry="3" width="25" height="6" />

        <rect x="300" y="8" rx="3" ry="3" width="40" height="6" />

        <circle cx="375" cy="11" r="9" />
      </ContentLoader>
    </Container>
  );
};

export default Loader;
