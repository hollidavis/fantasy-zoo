export default class Quipper {
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
    this.alignment = 'unaligned'
    this.type = 'beast'
    this.environment = 'coastal'
  }
  summonQuipper(player) {
    console.log(`${player} summons a ${this.size} quipper named ${this.name}.`)
  }
  quipperAttack(enemy) {
    console.log(`${this.name} the quipper uses it's bite attack against ${enemy}. ${enemy} is looking pretty rough!`)
  }
}
