export default class RedDragon {
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
    this.breathType = 'fire'
    this.alignment = 'chaotic evil'
    this.type = 'dragon'
    this.environment = 'mountain'
  }

  greenHoard() {
    console.log(`${this.name} loves to hoard ${this.hoardType}`)
  }

  greenAttack(enemy) {
    console.log(`${this.name} attacks ${enemy} with a ${this.breathType} breath`)
  }
}