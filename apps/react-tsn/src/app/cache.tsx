import {InMemoryCache, makeVar} from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn() {
          return isLoggedInVar();
        },
        isUserLoggedIn() {
          return isUserLoggedInVar();
        },
      },
    },
  },
});

export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem('token'));
export const isUserLoggedInVar = makeVar<boolean>(
  !!localStorage.getItem('username'),
);
