export default class WhiteDragon {
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
    this.breathType = 'cold'
    this.alignment = 'chaotic evil'
    this.type = 'dragon'
    this.environment = 'artic'
  }

  whiteHoard() {
    console.log(`${this.name} loves to hoard ${this.hoardType}`)
  }

  whiteAttack(enemy) {
    console.log(`${this.name} attacks ${enemy} with a ${this.breathType} breath`)
  }
}