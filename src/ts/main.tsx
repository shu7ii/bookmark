import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './component';

async function init() {
  const { init, commit, clear } = await import('./data');
  clear();
  commit(init());
}

async function main() {
  if (process.env.NODE_ENV !== 'production') {
    await init();
  }

  const root = document.querySelector('#root');
  ReactDOM.render(<App />, root);
}

main();
