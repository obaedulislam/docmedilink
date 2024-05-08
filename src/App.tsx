// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports

import '@mantine/core/styles.css';
import {  MantineProvider } from '@mantine/core';
import { HeaderMegaMenu } from './Component/Shared/Header/HeaderMegaMenu';


export default function App() {
  return (
    <div >
      <MantineProvider withGlobalClasses withCssVariables >
          <HeaderMegaMenu></HeaderMegaMenu>
      </MantineProvider>
    </div>

  );
}