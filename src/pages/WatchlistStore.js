import { useSyncExternalStore } from 'react';

const externalStore = {};

export function useWatchlistStore() {
  return useSyncExternalStore(externalStore);
}