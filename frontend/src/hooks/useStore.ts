import { useContext } from 'react';
import { Context } from '../Providers/store';

export function useStore() {
  return useContext(Context);
}
