import styled from 'styled-components';
import DefaultContentLoader from 'react-content-loader';

export const ContentLoader = styled(DefaultContentLoader)`
  width: 100%;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`;
