import {AutoProblem} from "./AutoProblem";
import {Auto} from "./Auto";
import {AutoPersonal} from "./AutoPersonal";
import {AutoCategory} from "./AutoCategory";

export class AutoRepair {
  id: number;
  autoProblem: AutoProblem;
  auto: Auto;
  date: Date;
  autoPersonal: AutoPersonal;
  autoCategory: AutoCategory;
  price: number;
}
