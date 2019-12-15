import React from 'preact/compat';
import ReactDOM from 'preact/compat';

import { App } from './component';

async function init() {
  const { init, commit, clear } = await import(
    /* webpackChunkName: 'data' */ './data'
  );
  clear();
  commit(init());
}

async function main() {
  if (process.env.NODE_ENV !== 'production') {
    await init();
  }

  const root = document.querySelector('#root')!;
  ReactDOM.render(<App />, root);
}

main();
