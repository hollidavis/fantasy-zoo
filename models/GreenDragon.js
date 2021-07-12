export default class GreenDragon {
  /**
   * 
   * @param {String} name 
   * @param {String} gender 
   * @param {String} hoardType
   */
  constructor(
    name,
    gender,
    hoardType
  ) {
    this.name = name
    this.color = 'green'
    this.gender = gender
    this.hoardType = hoardType
    this.breathType = 'poison'
    this.alignment = 'lawful evil'
    this.type = 'dragon'
    this.environment = 'forest'
  }

  greenHoard() {
    console.log(`${this.name} the ${this.color} dragon loves to hoard ${this.hoardType}`)
  }

  greenAttack(enemy) {
    console.log(`${this.name} the ${this.color} dragon attacks ${enemy} with a ${this.breathType} breath`)
  }
}