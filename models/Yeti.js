export default class Yeti {
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
    this.alignment = 'chaotic evil'
    this.type = 'monstrosity '
    this.environment = 'artic'
  }
  summonYeti(player) {
    console.log(`${player} summons a ${this.size} yeti named ${this.name}.`)
  }
  yetiAttack(enemy) {
    console.log(`${this.name} the yeti uses it's claw attack against ${enemy}. ${enemy} is looking pretty rough!`)
  }
}
