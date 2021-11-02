import styled from 'styled-components';
import DefaultContentLoader from 'react-content-loader';
import { ComponentProps } from 'components/Loaders/AllItemsCard/types';

export const Content = styled(DefaultContentLoader)<ComponentProps>`
  width: 100%;
  opacity: ${(props) => props.$opacity};
`;

export const Container = styled.div``;

export const ContainerTwo = styled.div`
  padding: 0.75rem 2rem;
  :last-child {
    margin-bottom: 1rem;
  }
`;

export const ContainerThird = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.5rem;
  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const ContainerNumber = styled.div`
  height: 3rem;
  :not(:last-child) {
    margin-bottom: 1.75rem;
  }
`;
