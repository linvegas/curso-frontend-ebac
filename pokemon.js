function Pokemon(nome, tipo) {

  this.nome = nome
  this.tipo = tipo

  let _hp = 45
  let _ataque = 49
  let _defesa = 49

  this.status = function() {
    return [_hp, _ataque, _defesa]
  }

  this.pegarStatus = function() {
    return [_hp, _ataque, _defesa]
  }

  this.mudarStatus = function(newHp, newAtt, newDef) {
    _hp = newHp
    _ataque = newAtt
    _defesa = newDef
  }

  this.evoluir = function(novoNome) {
    return `${this.nome} evolui para ${novoNome}`
  }
}

function Lendario(nome, tipo) {
  Pokemon.call(this, nome, tipo)

  this.status = function() {
    return [this.pegarStatus()[0], this.pegarStatus()[1], this.pegarStatus()[2]]
  }
}

function Mitico(nome, tipo) {
  Lendario.call(this, nome, tipo)

  this.evoluir = function() {
    return `${this.nome} não pode evoluir`
  }
}

const bulbassauro = new Pokemon("Bulbassauro", "folha")
const mewtwo = new Lendario("Mewtwo", "psíquico")
const regirock = new Lendario("Regirock", "pedra")
const reshiran = new Lendario("Reshiran", "dragão")
const mew = new Mitico("Mew", "psíquico")
const celebi = new Mitico("Celebi", "psíquico")
const jirachi = new Mitico("Jirachi", "metal")

mewtwo.mudarStatus(106, 110, 90)
regirock.mudarStatus(106, 110, 90)
reshiran.mudarStatus(106, 110, 90)
celebi.mudarStatus(100, 100, 100)
mew.mudarStatus(100, 100, 100)
jirachi.mudarStatus(100, 100, 100)

console.log(`hp: ${bulbassauro.status()[0]}`)
console.log(`hp: ${mewtwo.status()[0]}`)
console.log(`hp: ${celebi.status()[0]}`)
console.log(celebi.evoluir())
