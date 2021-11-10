import styled from 'styled-components';

export default styled.input`
  color: ${({ theme }) => theme.colors.white};
  background: transparent;
  width: 0%;
  height: 100%;
  border: none;
  padding: 0;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;
