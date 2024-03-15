export default function hasValuesFromArray(set, arr) {
  if (set instanceof Set && Array.isArray(arr)) {
    const initial = true;
    const value = arr.reduce((previous, current) => previous && set.has(current), initial);

    return value;
  }
  return false;
}
