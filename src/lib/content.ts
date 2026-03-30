export type FaqItem = {
  question: string;
  answer: string;
};

export { allgemein } from "./faq/allgemein";
export { hochzeit } from "./faq/hochzeit";
export { automotive } from "./faq/automotive";

import { allgemein } from "./faq/allgemein";
import { hochzeit } from "./faq/hochzeit";
import { automotive } from "./faq/automotive";

export const faqContent: Record<"allgemein" | "hochzeit" | "automotive", FaqItem[]> = {
  allgemein,
  hochzeit,
  automotive,
};
