const str: string = process.argv[2]

const reverse = (phrase: string) => {
  return phrase.split("").reverse().join("");
}

console.log(reverse(str))
