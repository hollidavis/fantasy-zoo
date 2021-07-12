export default class Unicorn {
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
    this.alignment = 'lawful good'
    this.type = 'celestial'
    this.environment = 'forest'
  }
  summonUnicorn(player) {
    console.log(`${player} summons a ${this.size} unicorn named ${this.name}.`)
  }
  unicornAttack(enemy) {
    console.log(`${this.name} the unicorn uses it's hoof attack against ${enemy}. ${enemy} is looking pretty rough!`)
  }
}
