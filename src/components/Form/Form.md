### Containers:

```jsx
import { ThemeProvider } from 'styled-components';
import { dark } from 'styles/themes';
import { Form, Submit, FormLabel, Radio, TextCheckbox, Select, Input } from 'components/Form';
import { SubTitle } from 'components/Typography';

const handleSubmit = (e) => {
  e.preventDefault();

  // Send data
  const formData = new FormData(e.target);
  const formValues = {
    radio: formData.get('radio'),
    TextCheckbox1: formData.get('TextCheckbox1'),
    TextCheckbox2: formData.get('TextCheckbox2'),
    TextCheckbox3: formData.get('TextCheckbox3'),
    TextCheckbox4: formData.get('TextCheckbox4'),
    select: formData.get('select'),
  };

  console.log(formValues);
};

<Form onSubmit={handleSubmit}>
  {/* Name */}
  <SubTitle>Radio Button</SubTitle>
  <div>
    <Radio id="first" name="radio" value="1" />
    <FormLabel htmlFor="first">Radio</FormLabel>
    <Radio id="second" name="radio" value="2" />
    <FormLabel htmlFor="second">Radio</FormLabel>
  </div>

  <SubTitle>Text Checkbox Section</SubTitle>
  <div>
    <TextCheckbox id="textCheckbox1" name="TextCheckbox1" />
    <TextCheckbox id="textCheckbox2" name="TextCheckbox2" />
    <TextCheckbox id="textCheckbox3" name="TextCheckbox3" />
    <TextCheckbox id="textCheckbox4" name="TextCheckbox4" />
  </div>

  <SubTitle>Input Section</SubTitle>
  <div>
    <FormLabel htmlFor="Input1">Input1</FormLabel>
    <Input id="Input1" name="Input1" offsetBottom />
  
    <FormLabel htmlFor="Input2">Input2</FormLabel>
    <Input id="Input2" name="Input2" offsetBottom />
  </div>
  
  <SubTitle>Select Section</SubTitle>
  <div>
    <Select
      id="select"
      name="select"
      options={[
        { value: '1', text: 'text 1' },
        { value: '2', text: 'text 2' },
      ]}
    />
  </div>
  <Submit value="Next Step" />
</Form>;
```
