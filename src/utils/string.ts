export function takeLeadingWord(text: string) {
  let res = "";
  let cursor = 0;
  let nextChar = text.charAt(cursor);
  do {
    res += nextChar;
    nextChar = text.charAt(++cursor);
  } while (cursor < text.length && nextChar.toUpperCase() !== nextChar);
  return res;
}
