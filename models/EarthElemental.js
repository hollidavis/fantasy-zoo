export default class EarthElemental {
  /**
   * 
   * @param {String} name 
   * @param {String} color 
   * @param {String} gender 
   * @param {String} size
   */
  constructor(
    name,
    color,
    gender,
    size
  ) {
    this.name = name
    this.color = color
    this.gender = gender
    this.size = size
    this.alignment = 'neutral'
    this.type = 'elemental'
    this.environment = 'underdark'
  }
  summonElemental(player) {
    console.log(`${player} summons a ${this.size} earth elemental named ${this.name}. Watch out things are about to get rocky!`)
  }
  sprayElemental(player) {
    console.log(`${player} sprays ${this.name} the earth elemental with water. Oh no! Now it's a mud elemental.`)
  }
}
