export default class FaerieDragon {
  /**
   * 
   * @param {String} name 
   * @param {String} color 
   * @param {String} gender 
   * @param {String} hoardType
   */
  constructor(
    name,
    color,
    gender,
    hoardType
  ) {
    this.name = name
    this.color = color
    this.gender = gender
    this.hoardType = hoardType
    this.breathType = 'sparkle'
    this.alignment = 'chaotic good'
    this.type = 'dragon'
    this.environment = 'forest'
  }

  faerieHoard() {
    console.log(`${this.name} the ${this.color} faerie dragon loves to hoard ${this.hoardType}`)
  }

  faerieAttack(enemy) {
    console.log(`${this.name} the ${this.color} faerie dragon attacks ${enemy} with a ${this.breathType} breath`)
  }
}
