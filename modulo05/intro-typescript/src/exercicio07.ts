const DNA: string = "ATTGCTGCGCATTAACGACGCGTA"

const RNA = (str: string) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") {
      result += "U";
    } else if (str[i] === "T") {
      result += "A"
    } else if (str[i] === "C") {
      result += "G"
    } else if (str[i] === "G") {
      result += "C"
    } else {
      result += str[i];
    };
  };
  return result;
};

console.log(RNA(DNA));
