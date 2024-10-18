```jsx
import { ThemeProvider } from 'styled-components';

import Calendar from 'components/Calendar';
import { dark } from 'styles/themes';
const tabs = [{ title: 'Tab 1' }, { title: 'Tab 2' }, { title: 'Tab 3' }];
<>
  <ThemeProvider theme={{}}>
    <Calendar />
    <ThemeProvider theme={{ colors: dark }}>
      <Calendar />
    </ThemeProvider>
  </ThemeProvider>
</>;
```
