import Gamer from "../models/Gamer.js";

let _gamer = new Gamer("1")


export default class GamerServices {
  constructor() {
    console.log("game")
  }

  get Gamer() {
    return _gamer
  }

  slap(gamerProp) {
    _gamer.slapCount++
  }


  health(gamerProp) {
    _gamer.healthCount++

  }
}

