import GamerController from "./controllers/GamerControllers.js"


class App {
  constructor() {
    console.log("App created")
    this.controllers = {
      gamerController: new GamerController()
    }
  }
}

window["app"] = new App()