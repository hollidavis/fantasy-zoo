export default class Aboleth {
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
    this.alignment = 'lawful evil'
    this.type = 'aberration'
    this.environment = 'underdark'
  }

  abolethAttack(enemy) {
    console.log(`${this.name} the aboleth attacks ${enemy} with ${this.tentacleCount} tentacles!`)
  }

  telepathy(enemy) {
    console.log(`You hear the voice of ${this.name} the aboleth in your mind! They say "${enemy} is a ninny". How rude!`)
  }
}