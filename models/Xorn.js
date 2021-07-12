export default class Xorn {
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
    this.alignment = 'neutral'
    this.type = 'elemental'
    this.environment = 'underdark'
  }
  summonXorn(player) {
    console.log(`${player} summons a ${this.size} xorn named ${this.name}.`)
  }
  xornAttack(enemy) {
    console.log(`${this.name} the xorn uses it's claw attack against ${enemy}. ${enemy} is looking pretty rough!`)
  }
}
