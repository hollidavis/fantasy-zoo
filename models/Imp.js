export default class Imp {
  /**
   * 
   * @param {String} name 
   * @param {String} color 
   * @param {String} gender 
   * @param {String} catchPhrase  
   */
  constructor(
    name,
    color,
    gender,
    catchPhrase,
  ) {
    this.name = name
    this.color = color
    this.gender = gender
    this.catchPhrase = catchPhrase
    this.alignment = 'lawful evil'
    this.type = 'fiend'
    this.environment = 'hell'
  }

  impCatchPhrase() {
    console.log(`${this.name} the imp proudly says their iconic catchphrase: "${this.catchPhrase}"`)
  }

  impAttack(enemy) {
    console.log(`What a fiend! ${this.name} the imp slashes you and says "You suck ${enemy}!"`)
  }
}