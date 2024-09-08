export function getCommaStringsDefault(commaStrings: string) {
  let splitStrings = commaStrings.split(",");
  return splitStrings.map(val => ({ text: val, value: false }))
}