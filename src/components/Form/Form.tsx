import { FormEventHandler } from 'react';
import styled from 'styled-components';

import { TTheme } from 'styles/baseTheme';
import { withBasicElementOffsets, TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

type TFormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  theme: TTheme;
} & TWithBasicElementOffsets &
  TFullWidth;

const Form = styled.form<TFormProps>`
  ${withBasicElementOffsets}

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`;
export default Form;
