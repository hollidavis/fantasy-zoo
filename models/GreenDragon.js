export default class GreenDragon {
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
    this.breathType = 'poison'
    this.alignment = 'lawful evil'
    this.type = 'dragon'
    this.environment = 'forest'
  }

  greenHoard() {
    console.log(`${this.name} loves to hoard ${this.hoardType}`)
  }

  greenAttack(enemy) {
    console.log(`${this.name} attacks ${enemy} with a ${this.breathType} breath`)
  }
}