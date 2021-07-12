export default class DarkDragon {
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
    this.color = 'black'
    this.gender = gender
    this.hoardType = hoardType
    this.breathType = 'acid'
    this.alignment = 'chaotic evil'
    this.type = 'dragon'
    this.environment = 'swamp'
  }

  darkHoard() {
    console.log(`${this.name} the ${this.color} dragon loves to hoard ${this.hoardType}`)
  }

  darkAttack(enemy) {
    console.log(`${this.name} the ${this.color} dragon attacks ${enemy} with a ${this.breathType} breath`)
  }
}