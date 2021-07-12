export default class RedDragon {
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
    this.color = 'red'
    this.gender = gender
    this.hoardType = hoardType
    this.breathType = 'fire'
    this.alignment = 'chaotic evil'
    this.type = 'dragon'
    this.environment = 'mountain'
  }

  redHoard() {
    console.log(`${this.name} the ${this.color} dragon loves to hoard ${this.hoardType}`)
  }

  redAttack(enemy) {
    console.log(`${this.name} the ${this.color} dragon attacks ${enemy} with a ${this.breathType} breath`)
  }
}