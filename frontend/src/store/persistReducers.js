import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'fastfeet',
      storage,
      whitelist: ['user', 'order', 'deliveryman', 'recipient', 'problem'],
    },
    reducers
  );
  return persistedReducers;
};
