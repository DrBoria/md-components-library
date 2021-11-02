import styled from 'styled-components';
import { PlainText } from 'components/Typography';
import { ReactComponent as NoOrderIcon } from 'assets/icons/no-order.svg';

export const Container = styled.div``;

export const Icon = styled(NoOrderIcon)`
  width: 5rem;
  height: 5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.navyGreen};
`;

export const Title = styled(PlainText)`
  font-weight: 600;
  margin-bottom: 1.5625rem;
`;

export const Subtitle = styled(PlainText)`
  margin-bottom: 1.625rem;
`;
