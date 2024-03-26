export const formatPrice = (price: number, currencyDisplay: boolean = true) => {
  
  if (price === undefined || isNaN(price)) {
    return 'Não informado'
  }

  return price.toLocaleString(
    'pt-br',
    currencyDisplay
      ? {
          style: 'currency',
          currency: 'BRL',
        }
      : {}
  )
}
