export default function linear_search(
  haystack: number[],
  needle: number,
): boolean {
  return haystack.some((v) => v === needle);
}

