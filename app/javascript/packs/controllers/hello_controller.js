import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["name", "output"]

  initialize() {
    this.nameTarget.value = this.data.get("name")
  }

  greet() {
    this.outputTarget.textContent =
    `Hello, ${this.nameTarget.value}`
  }

  paste(event) {
    event.preventDefault()
    console.log("pastes are not allowed!")
  }

  get name() {
    if (this.data.has("name")) {
      console.log(this.data.get("name"))

    } else {
      return 'default user'
    }

  }
}
