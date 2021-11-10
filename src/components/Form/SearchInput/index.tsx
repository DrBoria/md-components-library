import React, { FC, useCallback, FormEvent, useState } from 'react';
import { Input } from 'components/Form/Input';

import { TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

import { Container, SearchIcon, CrossIcon, ButtonWrapper } from './styles';

export type TSearchInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  id?: string;
  value?: string;
  onChangeValue: (value?: string) => void;
} & TWithBasicElementOffsets &
  TFullWidth;

const SearchInput: FC<TSearchInputProps> = ({ id, name, value, onChangeValue, ...props }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.value;
      onChangeValue(newValue);
    },
    [onChangeValue],
  );

  const handleOpenSearchInput = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      onChangeValue(undefined);
    }
  };

  return (
    <Container isOpen={isSearchOpen} {...props}>
      {isSearchOpen && (
        <Input placeholder="Search for an order" id={id} name={name} autoFocus value={value} onChange={handleChange} />
      )}
      <ButtonWrapper onClick={handleOpenSearchInput}>
        <SearchIcon />
        <CrossIcon />
      </ButtonWrapper>
    </Container>
  );
};

export { SearchInput };
