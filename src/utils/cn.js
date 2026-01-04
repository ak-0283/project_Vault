// Small className helper to avoid adding a dependency.
export function cn(...values) {
  return values.filter(Boolean).join(' ')
}
