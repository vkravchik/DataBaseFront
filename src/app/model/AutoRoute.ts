import {Auto} from "./Auto";
import {AutoStreet} from "./AutoStreet";

export class AutoRoute {
  id: number;
  autoStreet: AutoStreet;
  auto: Auto;
  passanger_count: number;

  constructor() {
    this.id = null;
    this.autoStreet = null;
    this.auto = null;
    this.passanger_count= null;
  }
}
