export default class Jaculi {
  /**
   * 
   * @param {String} name 
   * @param {String} color 
   * @param {String} gender 
   * @param {Number} teethCount  
   */
  constructor(
    name,
    color,
    gender,
    teethCount,
  ) {
    this.name = name
    this.color = color
    this.gender = gender
    this.teethCount = teethCount
    this.alignment = 'unaligned'
    this.type = 'beast'
    this.environment = 'forest'
  }
  jaculiAttack(enemy) {
    console.log(`${this.name} the jaculi bites ${enemy}! You feel its ${this.teethCount} sink into you. ${enemy} cries a little.`)
  }

  jaculiBrushTeeth() {
    console.log(`You brush all ${this.teethCount} teeth of ${this.name} the jaculi. They seems appreciative.`)
  }
}