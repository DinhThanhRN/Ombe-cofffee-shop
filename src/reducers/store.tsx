import {configureStore} from '@reduxjs/toolkit';

import authentication from './authentication';
import category from './category';
import product from './product';
import user from './user';

export const store = configureStore({
  reducer: {
    authentication: authentication,
    category: category,
    product: product,
    user: user,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
