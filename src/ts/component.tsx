import React from 'preact/compat';

const Input: React.FC = () => {
  const [value, setValue] = React.useState('');
  const updateValue = React.useCallback(
    (e: React.JSX.TargetedEvent<HTMLInputElement>) =>
      setValue((e.target as HTMLInputElement).value),
    []
  );
  const save = React.useCallback(async () => {
    if (value === '') {
      return;
    }
    const { getStore, save, commit } = await import(
      /* webpackChunkName: 'data' */ './data'
    );
    const store = await getStore();
    await commit(save(store)(value));
    setValue('');
  }, [value]);

  return (
    <div className="input-area">
      <label htmlFor="input">New URL</label>
      <input
        id="input"
        type="text"
        value={value}
        onChange={updateValue}
      ></input>
      <button type="button" onClick={save}>
        Save
      </button>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <Input />
    </React.Fragment>
  );
};
