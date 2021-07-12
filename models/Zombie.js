export default class Zombie {
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
    this.type = 'undead'
    this.environment = 'urban'
  }
  summonZombie(player) {
    console.log(`${player} summons a ${this.size} zombie named ${this.name}.`)
  }
  zombieAttack(enemy) {
    console.log(`${this.name} the zombie uses it's slam attack against ${enemy}. ${enemy} is looking pretty rough!`)
  }
}
