// This helper function formats a number as USD currency

export function formatCurrency(quantity: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(quantity);
  }