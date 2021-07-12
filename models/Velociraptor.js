export default class Velociraptor {
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
    this.alignment = 'unaligned'
    this.type = 'beast'
    this.environment = 'forest'
  }
  summonVelociraptor(player) {
    console.log(`${player} summons a ${this.size} velociraptor named ${this.name}.`)
  }
  velociraptorAttack(enemy) {
    console.log(`${this.name} the velociraptor uses it's claw attack against ${enemy}. ${enemy} is looking pretty rough!`)
  }
}
