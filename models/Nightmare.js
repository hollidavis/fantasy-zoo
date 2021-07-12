export default class Nightmare {
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
    this.alignment = 'neutral evil'
    this.type = 'fiend'
    this.environment = 'hell'
  }
  summonNightmare(player) {
    console.log(`${player} summons a ${this.size} nightmare named ${this.name}.`)
  }
  nightmareAttack(enemy) {
    console.log(`${this.name} the nightmare uses it's hoof attack against ${enemy}. ${enemy} is looking pretty rough!`)
  }
}
