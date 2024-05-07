import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, Observable, from } from '@apollo/client'
const GRAPHQL_ENDPOINT = ''

const httpLink = new HttpLink({ uri: GRAPHQL_ENDPOINT });

const skipMiddleware = new ApolloLink(() => {
  return new Observable(observer => {
    observer.next({
      data: undefined,
    });
    observer.complete();
  });
})

//TODO: Figure out how to make ApolloClient global variable
export default new ApolloClient({
  connectToDevTools: true,
  headers: {
    'Content-Type': 'application/json',
    Origin: 'https://app.uniswap.org',
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.110 Safari/537.36',
  },
  link: from([
    skipMiddleware,
    httpLink
  ]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
    },
  },
})
