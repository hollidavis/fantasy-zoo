export default class Leviathan {
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
    this.environment = 'coastal'
  }
  summonLeviathan(player) {
    console.log(`${player} summons a ${this.size} leviathan named ${this.name}.`)
  }
  leviathanAttack(enemy) {
    console.log(`${this.name} uses it's frightful presence attack against ${enemy}. ${enemy} fails their save and is terrified!`)
  }
}
