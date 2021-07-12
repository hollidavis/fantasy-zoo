export default class Mimic {
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
    this.type = 'monstrosity'
    this.environment = 'underdark'
  }
  summonMimic(player) {
    console.log(`${player} summons a ${this.size} mimic named ${this.name}.`)
  }
  mimicDisguise(item) {
    console.log(`${this.name} the mimic disguises itself as a ${item}`)
  }
}
