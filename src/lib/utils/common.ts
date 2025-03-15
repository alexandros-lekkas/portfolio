import { months } from "@/lib/constants/common";

export function FormatDate(date: {
  year: number;
  month: number;
  day: number;
}): string {
  return `${months[date.month - 1].abbreviation} ${date.year}`;
}
