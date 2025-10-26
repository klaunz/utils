/**
 * Distance Converter
 * Supported units ['km', 'm', 'mi', 'ft']
 * @param {number} input
 * @param {'km' | 'm' | 'mi' | 'ft'} from
 * @param {'km' | 'm' | 'mi' | 'ft'} to
 * @returns {number}
 */
export type Unit = 'km' | 'm' | 'mi' | 'ft'

export default function distanceConverter(
  input: number,
  from: Unit,
  to: Unit
): number | undefined {
  const conversionRates: Record<Unit, number> = {
    km: 1,
    m: 1000,
    mi: 1.60934,
    ft: 3280.84,
  }

  if (!conversionRates[from] || !conversionRates[to]) return undefined
  if (from === to) return input

  const inKm = input / conversionRates[from]
  const result = inKm * conversionRates[to]
  return result
}
