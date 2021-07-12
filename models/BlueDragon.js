export default class BlueDragon {
  /**
   * 
   * @param {String} name 
   * @param {String} gender 
   * @param {String} hoardType
   */
  constructor(
    name,
    gender,
    hoardType,
  ) {
    this.name = name
    this.color = 'blue'
    this.gender = gender
    this.hoardType = hoardType
    this.breathType = 'lightning'
    this.alignment = 'lawful evil'
    this.type = 'dragon'
    this.environment = 'coastal'
  }

  blueHoard() {
    console.log(`${this.name} the ${this.color} dragon loves to hoard ${this.hoardType}`)
  }

  blueAttack(enemy) {
    console.log(`${this.name} the ${this.color} dragon attacks ${enemy} with a ${this.breathType} breath`)
  }
}