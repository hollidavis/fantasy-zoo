export default class BlueDragon {
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
    hoardType,
  ) {
    this.name = name
    this.color = color
    this.gender = gender
    this.hoardType = hoardType
    this.breathType = 'lightning'
    this.alignment = 'lawful evil'
    this.type = 'dragon'
    this.environment = 'coastal'
  }

  blueHoard() {
    console.log(`${this.constructor.name} loves to hoard ${this.hoardType}`)
  }

  blueAttack(enemy) {
    console.log(`${this.constructor.name} attacks ${enemy} with a ${this.breathType} breath`)
  }
}