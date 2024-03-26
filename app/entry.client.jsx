import {RemixBrowser} from '@remix-run/react';
import {startTransition, StrictMode} from 'react';
import {hydrateRoot} from 'react-dom/client';
import {StateProvider} from './StateProvider';
import reducer, {initialState} from './reducer';

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
        <RemixBrowser />
      </StateProvider>
    </StrictMode>,
  );
});
