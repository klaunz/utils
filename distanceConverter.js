/**
 * Distance Converter
 * Supported units ['km', 'm', 'mi', 'ft']
 * @param {number} input
 * @param {'km' | 'm' | 'mi' | 'ft'} from
 * @param {'km' | 'm' | 'mi' | 'ft'} to
 * @returns {number}
 */
export default function (input, from, to) {
  const units = ['km', 'm', 'mi', 'ft']
  const rates = {
    km: {
      m: input * 1000,
      mi: input / 1.6,
      ft: input * 3280.8,
    },
    m: {
      km: input / 1000,
      mi: input / 1609.34,
      ft: input * 3.28084,
    },
    mi: {
      km: input * 1.6,
      m: input * 1609.34,
      ft: input * 5280,
    },
    ft: {
      km: input / 3280.8,
      m: input / 3.28084,
      mi: input / 5280,
    },
  }

  /** unidentified unit */
  if (!units.includes(from) || !units.includes(to)) return undefined
  if (from === to) return input

  return rates[from][to]
}
