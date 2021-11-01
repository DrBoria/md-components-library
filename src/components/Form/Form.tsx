import { FormEventHandler } from 'react';

import styled from 'styled-components';
import { Theme } from 'styles/baseTheme';
import { withBasicElementOffsets, TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

type IFormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  theme: Theme;
} & TWithBasicElementOffsets &
  TFullWidth;

const Form = styled.form<IFormProps>`
  ${withBasicElementOffsets}

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`;
export default Form;
