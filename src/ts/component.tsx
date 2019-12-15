import React from 'react';
import { Store } from './data';

type Prop = {
  store: Store;
  setStore: (store: Store) => void;
};

const Input: React.FC<Prop> = ({ store, setStore }) => {
  const [value, setValue] = React.useState('');
  const updateValue = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  );
  const save = React.useCallback(async () => {
    if (value === '') {
      return;
    }
    setValue('');
    setStore([...store, value]);
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

const List: React.FC<Prop> = ({ store }) => {
  return (
    <ul>
      {store.map(entry => (
        <li>{entry}</li>
      ))}
    </ul>
  );
};

export const App = () => {
  const [store, setStore] = React.useState<Store>([]);
  const setStore_ = React.useCallback(
    (store: Store) => {
      setStore(store);
    },
    [store]
  );

  return (
    <React.Fragment>
      <Input store={store} setStore={setStore_} />
      <List store={store} setStore={setStore_} />
    </React.Fragment>
  );
};
