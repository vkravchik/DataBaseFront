import {AutoBrigada} from "./AutoBrigada";
import {AutoBrigadir} from "./AutoBrigadir";
import {AutoPersonal} from "./AutoPersonal";
import {AutoDrivers} from "./AutoDrivers";

export class AutoGroup {
  id: number;
  autoPersonal: AutoPersonal;
  autoDrivers: AutoDrivers;
  autoBrigada: AutoBrigada;
  autoBrigadir: AutoBrigadir;
}
