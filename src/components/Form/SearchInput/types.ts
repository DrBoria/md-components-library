import { InputHTMLAttributes } from 'react';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  onChangeValue: (value?: string) => void;
  value?: string;
};
