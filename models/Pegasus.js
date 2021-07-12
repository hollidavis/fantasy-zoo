export default class Pegasus {
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
    this.alignment = 'chaotic good'
    this.type = 'celestial'
    this.environment = 'forest'
  }
  summonPegasus(player) {
    console.log(`${player} summons a ${this.size} pegasus named ${this.name}.`)
  }
  pegasusAttack(enemy) {
    console.log(`${this.name} the quipper uses it's hoof attack against ${enemy}. ${enemy} is looking pretty rough!`)
  }
}
