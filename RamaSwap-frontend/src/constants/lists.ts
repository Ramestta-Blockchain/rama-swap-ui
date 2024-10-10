// the Ramaswap Default token list lives here
// export const DEFAULT_TOKEN_LIST_URL = 'tokens.uniswap.eth'

// used to mark unsupported tokens, these are hosted lists of unsupported tokens
/**
 * @TODO add list from blockchain association
 */
export const UNSUPPORTED_LIST_URLS: string[] = []
const COMPOUND_LIST = 'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json'
const UMA_LIST = 'https://umaproject.org/uma.tokenlist.json'
const AAVE_LIST = 'tokenlist.aave.eth'
const SYNTHETIX_LIST = 'synths.snx.eth'
const WRAPPED_LIST = 'wrapped.tokensoft.eth'
const SET_LIST = 'https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/set.tokenlist.json'
const OPYN_LIST = 'https://raw.githubusercontent.com/opynfinance/opyn-tokenlist/master/opyn-v1.tokenlist.json'
const ROLL_LIST = 'https://app.tryroll.com/tokens.json'
const COINGECKO_LIST = 'https://tokens.coingecko.com/uniswap/all.json'
const CMC_ALL_LIST = 'defi.cmc.eth'
const CMC_STABLECOIN = 'stablecoin.cmc.eth'
const KLEROS_LIST = 't2crtokens.eth'

// lower index == higher priority for token import

export const DEFAULT_LIST_OF_LISTS: string[] = [
  // DEFAULT_TOKEN_LIST_URL,
  'https://raw.githubusercontent.com/Ramestta-Blockchain/rama-swap-ui/stage/ramestta.tokenlist.json',
  //   't2crtokens.eth', // kleros
  //   'tokens.1inch.eth', // 1inch
  //   'synths.snx.eth',
  //   'tokenlist.dharma.eth',
  //   'defi.cmc.eth',
  //   'erc20.cmc.eth',
  //   'stablecoin.cmc.eth',
  //   'tokenlist.zerion.eth',
  //   'tokenlist.aave.eth',
  //   'https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json',
  // 'https://app.tryroll.com/tokens.json',
  //   'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
  //   'https://defiprime.com/defiprime.tokenlist.json',
  //   'https://umaproject.org/uma.tokenlist.json'

  COMPOUND_LIST,
  AAVE_LIST,
  SYNTHETIX_LIST,
  UMA_LIST,
  WRAPPED_LIST,
  SET_LIST,
  OPYN_LIST,
  ROLL_LIST,
  COINGECKO_LIST,
  CMC_ALL_LIST,
  CMC_STABLECOIN,
  KLEROS_LIST,
  ...UNSUPPORTED_LIST_URLS // need to load unsupported tokens as well

]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
