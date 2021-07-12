export default class Kraken {
  /**
   * 
   * @param {String} name 
   * @param {String} color 
   * @param {String} gender 
   * @param {Number} tentacleCount 
   */
  constructor(
    name,
    color,
    gender,
    tentacleCount,
  ) {
    this.name = name
    this.color = color
    this.gender = gender
    this.tentacleCount = tentacleCount
    this.alignment = 'chaotic evil'
    this.type = 'monstrosity'
    this.environment = 'underwater'
  }

  krakenAttack(enemy) {
    console.log(`${this.name} the kraken attacks ${enemy} with ${this.tentacleCount} tentacles!`)
  }

  krakenBite(enemy) {
    console.log(`${this.name} the kraken nips at ${enemy}. It stings.`)
  }
}