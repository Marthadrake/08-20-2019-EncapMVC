import GamerService from "../services/GamerServices.js";


let _gamerService = new GamerService()

//public

function _draw() {
  let gamerNameElement = document.querySelector("#gamer-name")
  let gamerSlapCountElement = document.querySelector("#slap")
  let gamerHealthCountElement = document.querySelector("#health")
  let gamer = _gamerService.Gamer
  gamerSlapCountElement.textContent = gamer.slapCount.toString()
  gamerHealthCountElement.textContent = gamer.healthCount.toString()

}

export default class GamerControllers {
  constructor() {
    console.log("hey from gamer controller")
    _draw()
  }


  slap() {
    _gamerService.slap()
    _draw()
  }


  health() {
    _gamerService.health()
    _draw()
  }

}



