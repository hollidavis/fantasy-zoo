export default class Aboleth {
  /**
   * 
   * @param {String} name 
   * @param {String} color 
   * @param {String} gender 
   * @param {Number} tentacleCount 
   * @param {Boolean} tail
   */
  constructor(
    name,
    color,
    gender,
    tentacleCount,
    tail
  ) {
    this.name = name
    this.color = color
    this.gender = gender
    this.tentacleCount = tentacleCount
    this.tail = tail
    this.alignment = 'lawful evil'
    this.type = 'aberration'
    this.environment = 'underdark'
  }

  tentacleAttack(enemy) {
    console.log(`${this.constructor.name} attacks ${enemy} with ${this.constructor.tentacleCount} tentacles!`)
  }

  telepathy(enemy) {
    console.log(`You hear the voice of ${this.constructor.name} the aboleth in your mind! They say "${enemy} is a ninny". How rude!`)
  }
}