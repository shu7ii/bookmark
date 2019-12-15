import { createInstance, INDEXEDDB } from 'localforage';

const DB_NAME = 'gorimori/bookmark';
const DB_KEY = 'main';

type Bookmark = string;

export type Store = Bookmark[];

export const init = (): Store => [];

export const save = (s: Store) => (b: Bookmark): Store => {
  return [...s, b];
};

const db = createInstance({ name: DB_NAME, driver: INDEXEDDB });

export const commit = async (s: Store): Promise<void> => {
  db.setItem(DB_KEY, s);
};

export const getStore = async (): Promise<Store> => {
  return db.getItem(DB_KEY);
};

export const clear = async (): Promise<void> => {
  db.clear();
};
