import {AutoProblem} from "./AutoProblem";
import {Auto} from "./Auto";
import {AutoPersonal} from "./AutoPersonal";

export class AutoRepair {
  id: number;
  autoProblem: AutoProblem;
  auto: Auto;
  date: Date;
  autoPersonal: AutoPersonal;
  price: number;
}
