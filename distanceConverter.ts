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
  const kmPerUnit: Record<RadiusUnit, number> = {
    km: 1,
    m: 0.001,
    mi: 1.60934,
    ft: 0.0003048,
  }

  if (!kmPerUnit[from] || !kmPerUnit[to]) return undefined
  if (from === to) return input

  const inKm = input * kmPerUnit[from]
  return (inKm / kmPerUnit[to]).toFixed(2)
}
