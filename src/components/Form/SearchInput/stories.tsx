import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Component from 'components/Form/SearchInput';

export default {
  compomnent: Component,
  title: 'Form',
} as Meta;

export const SearchInput: Story = () => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <div style={{ float: 'right', margin: '1rem' }}>
      <Component value={value} onChangeValue={setValue} />
    </div>
  );
};
