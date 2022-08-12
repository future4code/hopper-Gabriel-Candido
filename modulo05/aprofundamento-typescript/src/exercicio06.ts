enum IDADE {
  PREHISTORIA = "Pré-história",
  ANTIGA = "Idade Antiga",
  MEDIA = "Idade Média",
  MODERNA = "Idade Moderna",
  CONTEMPORANEA = "Idade Contemporânea"
}

// 100.000 AC = Pré-história,
// 4000 AC = Idade Antiga,
// 476 DC = Idade Média,
// 1453 DC = Idade Moderna,
// 1789 DC = Idade Contemporânea

const data: number = Number(process.argv[2])
const epoca: string | undefined = process.argv[3]

const descobrimento = (data: number, epoca: string | undefined): string | IDADE => {
  
  if (!data) {
    return "Está faltando uma data para verificação"
  }

  if (!epoca) {
    epoca = "DC"
  }
  
  if (data <= 4000 && epoca === "AC") {
    return IDADE.ANTIGA
  } else if (data >= 1789 && epoca === "DC") {
    return IDADE.CONTEMPORANEA
  } else if (data >= 1453 && epoca === "DC") {
    return IDADE.MODERNA
  } else if (data >= 476 && epoca === "DC") {
    return IDADE.MEDIA
  } else {
    return IDADE.PREHISTORIA
  }
}

console.log(descobrimento(data, epoca))
