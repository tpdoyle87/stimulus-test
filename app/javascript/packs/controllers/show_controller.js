import { Controller } from "stimulus"

export default class extends Controller {
 static targets = ["hover"]

  show(event) {
    const letsSee = document.getElementsByClassName(".clickMe")
    if (letsSee) {
      console.log('yup')
    } else {
      console.log('nope')
    }
  }
}
