/** Formats numbers >= 1000 like 1k, e.g. 2120 2.1k */
export const formatNumber = number => {
  if (number < 1000) return number.toString()

  const formatted = (number / 1000).toFixed(1)
  return `${formatted}k`.replace('.0k', 'k')
}
