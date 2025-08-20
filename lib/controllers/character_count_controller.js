// lib/controllers/character_count_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['input', 'counter'];

  connect() {
    // TODO: console.log something!
    console.log("test");
  }

  updateCounter() {
    const length = this.inputTarget.value.length;
    const label = length === 1 ? "character" : "characters";
    this.counterTarget.innerText = `${length} ${label}`;
  }
}
