/**
 * @param arrLength The length of the array of indices to create
 * @returns A randomised array of indices of the given length
 */
export default function randomiseArrayIndices(arrLength: number) {
  const indices = Array.from({ length: arrLength }, (x, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices;
}
