export default class CopperDragon {
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
    this.color = 'copper'
    this.gender = gender
    this.hoardType = hoardType
    this.breathType = 'acid'
    this.alignment = 'chaotic good'
    this.type = 'dragon'
    this.environment = 'hill'
  }

  copperHoard() {
    console.log(`${this.name} the ${this.color} dragon loves to hoard ${this.hoardType}`)
  }

  copperAttack(enemy) {
    console.log(`${this.name} the ${this.color} dragon attacks ${enemy} with a ${this.breathType} breath`)
  }
}