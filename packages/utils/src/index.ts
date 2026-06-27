export function deepMerge<T extends Record<string, unknown>>(target: T, source: Partial<T>): T {
  const result = { ...target }
  for (const key of Object.keys(source as object)) {
    const k = key as keyof T
    if (
      source[k] !== null &&
      typeof source[k] === "object" &&
      !Array.isArray(source[k]) &&
      typeof result[k] === "object"
    ) {
      result[k] = deepMerge(result[k] as Record<string, unknown>, source[k] as Record<string, unknown>) as T[keyof T]
    } else {
      result[k] = source[k] as T[keyof T]
    }
  }
  return result
}

export function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
}

export function slugify(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
}

export function generateId(prefix: string): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`
}
