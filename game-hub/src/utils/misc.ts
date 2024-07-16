export const capitalize = (str: string) => {
  const words: string[] = str.split(" ")
  const capitalized: string[] = []

  for (let word of words){
    const first = word.charAt(0)
    const rest = word.length > 1 ? word.slice(1) : ""

    capitalized.push(first.toUpperCase() + rest)
  }

  return capitalized.join(" ")
}