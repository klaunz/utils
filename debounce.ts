/**
 * Debounce
 * @param {Function} fn
 * @param {Number} delay
 * @returns Function
 */
function debounce(fn: Function, delay = 500) {
  let timeoutId: number | undefined, lastArgs: any[]

  function debounceFn(...args: any[]) {
    lastArgs = args
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      timeoutId = undefined
      fn(...args)
    }, delay)
  }

  debounceFn.cancel = () => {
    clearTimeout(timeoutId)
    timeoutId = undefined
  }

  debounceFn.flush = () => {
    clearTimeout(timeoutId)
    if (lastArgs) fn(...lastArgs)
  }
  return debounceFn
}
