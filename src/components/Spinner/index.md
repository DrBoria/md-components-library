### Spinner:

```jsx
import { ThemeProvider } from 'styled-components';
import { dark } from 'styles/themes';

import Spinner from 'components/Spinner';

<>
  Light Theme
  <div style={{ width: '100%', padding: '10px' }}>
    <Spinner />
  </div>
  Dark theme
  <ThemeProvider theme={{ colors: dark }}>
    <div style={{ width: '100%', padding: '10px', background: 'black' }}>
      <Spinner />
    </div>
  </ThemeProvider>
</>;
```
