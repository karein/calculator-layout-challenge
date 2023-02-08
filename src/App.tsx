import { Screen } from './components/Screen';
import { Buttons } from './components/Buttons';

import { Container, Calculator } from './style'
import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <Container>
      <Calculator>
        <Screen />
        <Buttons />

      </Calculator>
      <GlobalStyles />
    </Container>
  );
}
