import { Currency, ETHER, Token } from 'constants/uniswap'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'ONE'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
