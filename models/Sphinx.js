export default class Sphinx {
  /**
   * 
   * @param {String} name 
   * @param {String} color 
   * @param {String} gender 
   * @param {String} size
   */
  constructor(
    name,
    color,
    gender,
    size
  ) {
    this.name = name
    this.color = color
    this.gender = gender
    this.size = size
    this.alignment = 'lawful neutral'
    this.type = 'monstrosity '
    this.environment = 'desert'
  }
  summonSphinx(player) {
    console.log(`${player} summons a ${this.size} sphinx named ${this.name}.`)
  }
  sphinxAttack(enemy) {
    console.log(`${this.name} the sphinx uses it's roar attack against ${enemy}. ${enemy} is looking pretty rough!`)
  }
}
