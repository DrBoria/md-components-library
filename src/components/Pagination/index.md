```jsx
import { ThemeProvider } from 'styled-components';
import Pagination from 'components/Pagination';
import { dark } from 'styles/themes';
<>
  Light Theme
  <div style={{ width: '100%', padding: '10px' }}>
    <Pagination pagesCount={5} currentPage={3} />
  </div>
  Dark theme
  <ThemeProvider theme={{ colors: dark }}>
    <Pagination pagesCount={5} currentPage={3} />
  </ThemeProvider>
</>;
```
