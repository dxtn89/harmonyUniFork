import { Currency, ETHER, HARMONYONE, Token } from '../constants/uniswap'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'ETH'
  if (currency === HARMONYONE) return 'HARMONYONE'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
