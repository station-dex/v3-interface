export const UNI_LIST = '/lists/196.json'
export const UNI_EXTENDED_LIST = ''
const UNI_UNSUPPORTED_LIST = ''
const AAVE_LIST = ''
const BA_LIST = ''
// TODO(WEB-2282): Re-enable CMC list once we have a better solution for handling large lists.
// const CMC_ALL_LIST = 'https://s3.coinmarketcap.com/generated/dex/tokens/eth-tokens-all.json'
const COINGECKO_LIST = ''
const COINGECKO_BNB_LIST = ''
const COINGECKO_ARBITRUM_LIST = ''
const COINGECKO_OPTIMISM_LIST = ''
const COINGECKO_CELO_LIST = ''
const COINGECKO_POLYGON_LIST = ''
const COINGECKO_AVAX_LIST = ''
const COMPOUND_LIST = ''
const GEMINI_LIST = ''
const KLEROS_LIST = ''
const SET_LIST = ''
const WRAPPED_LIST = ''

export const X1_TESTNET_LIST = '/lists/195.json'
export const OPTIMISM_LIST = ''
export const ARBITRUM_LIST = ''
export const CELO_LIST = ''
export const PLASMA_BNB_LIST = ''
export const AVALANCHE_LIST =
  ''
export const BASE_LIST =
  ''

export const UNSUPPORTED_LIST_URLS: string[] = [BA_LIST, UNI_UNSUPPORTED_LIST]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [UNI_LIST, X1_TESTNET_LIST]
export const DEFAULT_INACTIVE_LIST_URLS: string[] = [
  UNI_EXTENDED_LIST,
  COMPOUND_LIST,
  AAVE_LIST,
  //  CMC_ALL_LIST,
  COINGECKO_LIST,
  COINGECKO_BNB_LIST,
  COINGECKO_ARBITRUM_LIST,
  COINGECKO_OPTIMISM_LIST,
  COINGECKO_CELO_LIST,
  COINGECKO_POLYGON_LIST,
  COINGECKO_AVAX_LIST,
  KLEROS_LIST,
  GEMINI_LIST,
  WRAPPED_LIST,
  SET_LIST,
  ARBITRUM_LIST,
  OPTIMISM_LIST,
  CELO_LIST,
  PLASMA_BNB_LIST,
  AVALANCHE_LIST,
  BASE_LIST,
  ...UNSUPPORTED_LIST_URLS,
]

export const DEFAULT_LIST_OF_LISTS: string[] = [...DEFAULT_ACTIVE_LIST_URLS, ...DEFAULT_INACTIVE_LIST_URLS]
