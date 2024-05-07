import { ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { ChainId } from '@uniswap/sdk-core'

import store from '../../state/index'

const CHAIN_SUBGRAPH_URL: Record<number, string> = {
  [ChainId.MAINNET]: '',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.OPTIMISM]: '',
  [ChainId.POLYGON]: '',
  [ChainId.CELO]: '',
  [ChainId.BNB]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.BASE]: '',
}

const CHAIN_BLOCK_SUBGRAPH_URL: Record<number, string> = {
  [ChainId.MAINNET]: '',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.OPTIMISM]: '',
  [ChainId.POLYGON]: '',
  [ChainId.CELO]: '',
  [ChainId.BNB]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.BASE]: '',
}

const httpLink = new HttpLink({ uri: CHAIN_SUBGRAPH_URL[ChainId.MAINNET] })

// This middleware will allow us to dynamically update the uri for the requests based off chainId
// For more information: https://www.apollographql.com/docs/react/networking/advanced-http-networking/
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const chainId = store.getState().application.chainId

  operation.setContext(() => ({
    uri: chainId && CHAIN_SUBGRAPH_URL[chainId] ? CHAIN_SUBGRAPH_URL[chainId] : CHAIN_SUBGRAPH_URL[ChainId.MAINNET],
  }))

  return forward(operation)
})

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
})

export const chainToApolloClient: Record<number, ApolloClient<NormalizedCacheObject>> = {
  [ChainId.MAINNET]: new ApolloClient({
    cache: new InMemoryCache(),
    uri: CHAIN_SUBGRAPH_URL[ChainId.MAINNET],
  }),
  [ChainId.ARBITRUM_ONE]: new ApolloClient({
    cache: new InMemoryCache(),
    uri: CHAIN_SUBGRAPH_URL[ChainId.ARBITRUM_ONE],
  }),
  [ChainId.OPTIMISM]: new ApolloClient({
    cache: new InMemoryCache(),
    uri: CHAIN_SUBGRAPH_URL[ChainId.OPTIMISM],
  }),
  [ChainId.POLYGON]: new ApolloClient({
    cache: new InMemoryCache(),
    uri: CHAIN_SUBGRAPH_URL[ChainId.POLYGON],
  }),
  [ChainId.CELO]: new ApolloClient({
    cache: new InMemoryCache(),
    uri: CHAIN_SUBGRAPH_URL[ChainId.CELO],
  }),
  [ChainId.BNB]: new ApolloClient({
    cache: new InMemoryCache(),
    uri: CHAIN_SUBGRAPH_URL[ChainId.BNB],
  }),
  [ChainId.AVALANCHE]: new ApolloClient({
    cache: new InMemoryCache(),
    uri: CHAIN_SUBGRAPH_URL[ChainId.AVALANCHE],
  }),
}

export const chainToApolloBlockClient: Record<number, ApolloClient<NormalizedCacheObject>> = {
  [ChainId.MAINNET]: new ApolloClient({
    uri: CHAIN_BLOCK_SUBGRAPH_URL[ChainId.MAINNET],
    cache: new InMemoryCache(),
  }),
  [ChainId.ARBITRUM_ONE]: new ApolloClient({
    uri: CHAIN_BLOCK_SUBGRAPH_URL[ChainId.ARBITRUM_ONE],
    cache: new InMemoryCache(),
  }),
  [ChainId.OPTIMISM]: new ApolloClient({
    uri: CHAIN_BLOCK_SUBGRAPH_URL[ChainId.OPTIMISM],
    cache: new InMemoryCache(),
  }),
  [ChainId.POLYGON]: new ApolloClient({
    uri: CHAIN_BLOCK_SUBGRAPH_URL[ChainId.POLYGON],
    cache: new InMemoryCache(),
  }),
  [ChainId.CELO]: new ApolloClient({
    uri: CHAIN_BLOCK_SUBGRAPH_URL[ChainId.CELO],
    cache: new InMemoryCache(),
  }),
  [ChainId.BNB]: new ApolloClient({
    uri: CHAIN_BLOCK_SUBGRAPH_URL[ChainId.BNB],
    cache: new InMemoryCache(),
  }),
  [ChainId.AVALANCHE]: new ApolloClient({
    uri: CHAIN_BLOCK_SUBGRAPH_URL[ChainId.AVALANCHE],
    cache: new InMemoryCache(),
  }),
}
