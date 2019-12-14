async function init() {
  const { init, commit, clear } = await import('./data');
  clear();
  commit(init());
}

async function main() {
  if (process.env.NODE_ENV !== 'production') {
    init();
  }
}

main();
