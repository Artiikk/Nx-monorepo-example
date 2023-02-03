// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Header } from '@monorepo-app/shared/ui';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <Header />
      <NxWelcome title="monorepo-app" />
      <div />
    </>
  );
}

export default App;
