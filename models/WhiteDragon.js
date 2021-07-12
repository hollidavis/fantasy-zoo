export default class WhiteDragon {
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
    this.color = 'white'
    this.gender = gender
    this.hoardType = hoardType
    this.breathType = 'cold'
    this.alignment = 'chaotic evil'
    this.type = 'dragon'
    this.environment = 'artic'
  }

  whiteHoard() {
    console.log(`${this.name} the ${this.color} dragon loves to hoard ${this.hoardType}`)
  }

  whiteAttack(enemy) {
    console.log(`${this.name} the ${this.color} dragon attacks ${enemy} with a ${this.breathType} breath`)
  }
}