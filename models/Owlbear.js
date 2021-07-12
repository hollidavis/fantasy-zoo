export default class Owlbear {
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
    this.environment = 'forest'
  }
  summonOwlbear(player) {
    console.log(`${player} summons a ${this.size} owlbear named ${this.name}.`)
  }
  owlbearAttack(enemy) {
    console.log(`${this.name} the owlbear uses it's beak attack against ${enemy}. ${enemy} is looking pretty rough!`)
  }
}
