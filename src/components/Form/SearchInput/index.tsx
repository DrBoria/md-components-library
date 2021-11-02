import React, { FC, useCallback, FormEvent, useState } from 'react';
import SearchToInput from 'components/Inputs/SearchToInput';
import Button from 'components/Button';
import { Container, SearchIcon, CrossIcon } from './styles';
import { Props } from './types';

const SearchInput: FC<Props> = ({ value, onChangeValue }) => {
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
    <Container $isOpen={isSearchOpen}>
      {isSearchOpen && (
        <SearchToInput type="text" placeholder="Search for an order" autoFocus value={value} onChange={handleChange} />
      )}
      <Button onClick={handleOpenSearchInput}>
        <CrossIcon /> <SearchIcon />
      </Button>
    </Container>
  );
};

export default SearchInput;
