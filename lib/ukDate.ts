// Parses Ukrainian-locale date strings used across the content data,
// e.g. "21 вересня 2026" -> Date(2026, 8, 21). Falls back to `fallback`
// when the string cannot be parsed.

const UK_MONTHS: Record<string, number> = {
  'січня': 0,
  'лютого': 1,
  'березня': 2,
  'квітня': 3,
  'травня': 4,
  'червня': 5,
  'липня': 6,
  'серпня': 7,
  'вересня': 8,
  'жовтня': 9,
  'листопада': 10,
  'грудня': 11,
};

export function parseUkDate(dateStr: string, fallback?: Date): Date {
  const m = dateStr.trim().match(/^(\d{1,2})\s+([а-яіїєґ]+)\s+(\d{4})$/i);
  if (m) {
    const day = parseInt(m[1], 10);
    const month = UK_MONTHS[m[2].toLowerCase()];
    const year = parseInt(m[3], 10);
    if (month !== undefined && day >= 1 && day <= 31) {
      return new Date(year, month, day);
    }
  }
  return fallback ?? new Date();
}

export function toIsoDateOnly(date: Date): string {
  return date.toISOString().split('T')[0];
}
