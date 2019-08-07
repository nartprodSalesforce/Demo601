import { LightningElement, api } from "lwc";

export default class App extends LightningElement {
  @api
  increment = 1;

  /**
   * Getter for the features property
   */
  handleClick() {
    this.increment = this.increment + 1;
  }
}
