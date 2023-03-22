const alunos = [
  {
    nome: "João",
    nota: 3.5
  },
  {
    nome: "Maria",
    nota: 7.5
  },
  {
    nome: "Pedro",
    nota: 8.2
  },
  {
    nome: "Marcos",
    nota: 2.4
  },
  {
    nome: "Ana",
    nota: 9.0
  },
  {
    nome: "Mateus",
    nota: 6.5
  }
]

function acimaDaMedia() {
  const nomes = alunos.filter(item => item.nota >= 6).map(item => item.nome)

  if (nomes.length > 1) {
    const ultimoNome = " e " + nomes.pop();
    return nomes.join(", ") + ultimoNome;
  }

  return nomes[0]
}

const resultado = `Os alunos com nota maior que 6 foram: ${acimaDaMedia()}`

console.log(resultado)
