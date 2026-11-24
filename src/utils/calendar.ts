export interface DateParts {
  year: number;
  month: number; // 1-12
  day: number;
}

const pad = (n: number) => String(n).padStart(2, '0');

const toIcsDate = (d: Date) => `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}`;

export interface DateRange {
  start: DateParts;
  end: DateParts; // inclusive
}

const toUtc = ({ year, month, day }: DateParts) => new Date(Date.UTC(year, month - 1, day));

const ordinal = (n: number) => {
  const teen = n % 100 >= 11 && n % 100 <= 13;
  const suffix = teen ? 'th' : ({ 1: 'st', 2: 'nd', 3: 'rd' } as Record<number, string>)[n % 10] ?? 'th';
  return `${n}${suffix}`;
};

// Like Intl's long format, but with the day as an ordinal (25th, not 25).
const longFormat = (opts: Intl.DateTimeFormatOptions, d: Date) =>
  new Intl.DateTimeFormat('en-GB', { ...opts, timeZone: 'UTC' })
    .formatToParts(d)
    .map((part) => (part.type === 'day' ? ordinal(Number(part.value)) : part.value))
    .join('');

// e.g. "Friday 25th May – Monday 28th May 2029". The year is only repeated when the
// range crosses a year boundary; a single day reads "Friday 25th May 2029".
export function formatDateRange({ start, end }: DateRange): string {
  const s = toUtc(start);
  const e = toUtc(end);
  const withYear = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' } as const;
  const noYear = { weekday: 'long', day: 'numeric', month: 'long' } as const;
  if (s.getTime() === e.getTime()) return longFormat(withYear, e);
  const sameYear = start.year === end.year;
  return `${longFormat(sameYear ? noYear : withYear, s)} – ${longFormat(withYear, e)}`;
}

// Builds an all-day .ics event. Pure function so it can be tested.
export function buildIcs({ start: first, end: last }: DateRange, title: string): string {
  const start = toUtc(first);
  const end = toUtc({ ...last, day: last.day + 1 }); // all-day end is exclusive
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//save-the-date//EN',
    'BEGIN:VEVENT',
    `UID:${toIcsDate(start)}-save-the-date@wedding`,
    `DTSTAMP:${stamp}`,
    `DTSTART;VALUE=DATE:${toIcsDate(start)}`,
    `DTEND;VALUE=DATE:${toIcsDate(end)}`,
    `SUMMARY:${title}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

export function downloadIcs(date: DateRange, title: string): void {
  const blob = new Blob([buildIcs(date, title)], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'save-the-date.ics';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
