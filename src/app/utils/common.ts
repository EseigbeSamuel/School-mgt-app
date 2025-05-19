/**
 * Formats a number as a currency string with various options
 *
 * @param amount - The number to format
 * @param options - Formatting options
 * @returns Formatted currency string
 */
export function formatCurrency(
  amount: number | string,
  options: {
    currency?: string; // Currency code (USD, EUR, NGN, etc.)
    locale?: string; // Locale code (en-US, de-DE, etc.)
    decimals?: number; // Number of decimal places
    showSymbol?: boolean; // Whether to show the currency symbol
    showCode?: boolean; // Whether to show the currency code
    compact?: boolean; // Use compact notation (1K, 1M, etc.)
    separateByCommas?: boolean; // Use commas as thousand separators
  } = {}
): string {
  // Set default options
  const {
    currency = 'USD',
    locale = 'en-US',
    decimals = 2,
    showSymbol = true,
    showCode = false,
    compact = false,
    separateByCommas = true,
  } = options;

  // Convert string to number if needed
  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

  // Handle NaN or undefined
  if (isNaN(numAmount)) {
    return `0.00 ${showCode ? currency : ''}`;
  }

  try {
    // Create formatter with specified options
    const formatter = new Intl.NumberFormat(locale, {
      style: showSymbol ? 'currency' : 'decimal',
      currency: currency,
      currencyDisplay: showSymbol ? 'symbol' : 'code',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
      notation: compact ? 'compact' : 'standard',
      useGrouping: separateByCommas,
    });

    // Format the number
    let formatted = formatter.format(numAmount);

    // Handle special cases for currency code display
    if (showCode && !showSymbol) {
      formatted = `${formatted} ${currency}`;
    }

    return formatted;
  } catch (error) {
    // Fallback formatting if Intl.NumberFormat fails
    const fixed = numAmount.toFixed(decimals);
    const parts = fixed.toString().split('.');

    // Add commas as thousand separators if requested
    if (separateByCommas) {
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    const symbol = showSymbol ? getCurrencySymbol(currency) : '';
    const code = showCode ? currency : '';

    return `${symbol}${parts.join('.')}${code ? ' ' + code : ''}`;
  }
}

/**
 * Gets a currency symbol from currency code
 *
 * @param currencyCode - The currency code (USD, EUR, etc.)
 * @returns The currency symbol
 */
function getCurrencySymbol(currencyCode: string): string {
  const symbols: Record<string, string> = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
    CNY: '¥',
    INR: '₹',
    NGN: '₦',
    KRW: '₩',
    RUB: '₽',
    THB: '฿',
    BRL: 'R$',
    ZAR: 'R',
    // Add more currencies as needed
  };

  return symbols[currencyCode] || '';
}
