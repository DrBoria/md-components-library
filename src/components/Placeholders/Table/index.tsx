import React from 'react';
import { Container, Title, Icon } from './styles';

const Placeholder: React.FC = () => {
  return (
    <Container>
      <Icon />
      <Title>
        Sorry, we couldn’t find any order that fits with your search
      </Title>
    </Container>
  );
};

export default Placeholder;
