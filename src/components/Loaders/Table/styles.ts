import styled from 'styled-components';
import DefaultContentLoader from 'react-content-loader';

import { ComponentProps } from './types';

export const Container = styled.div`
  padding: 0.4rem;
`;

export const ContentLoader = styled(DefaultContentLoader)<ComponentProps>`
  width: 100%;
  opacity: ${(props) => props.$opacity};
`;
