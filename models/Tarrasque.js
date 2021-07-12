export default class Tarrasque {
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
    this.type = 'monstrosity'
    this.environment = 'urban'
  }
  summonTarrasque(player) {
    console.log(`${player} summons a ${this.size} tarrasque named ${this.name}.`)
  }
  tarrasqueAttack(enemy) {
    console.log(`${this.name} the tarrasque uses it's tail attack against ${enemy}. ${enemy} is dead!`)
  }
}
