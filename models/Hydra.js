export default class Hydra {
  /**
   * 
   * @param {String} name 
   * @param {String} color 
   * @param {String} gender 
   * @param {Number} headCount 
   */
  constructor(
    name,
    color,
    gender,
    headCount,
  ) {
    this.name = name
    this.color = color
    this.gender = gender
    this.headCount = headCount
    this.alignment = 'unaligned'
    this.type = 'monstrosity'
    this.environment = 'swamp'
  }

  hydraAttack(enemy) {
    console.log(`${this.name} attacks ${enemy} with ${this.headCount} heads!`)
  }

  dance() {
    console.log(`You watch as the hydra's ${this.headCount} ${this.color} heads start swaying to the beat`)
  }
}