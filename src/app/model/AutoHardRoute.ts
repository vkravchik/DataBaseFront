import {Auto} from "./Auto";
import {DatePipe} from "@angular/common";

export class AutoHardRoute {
  id: number;
  point_start: string;
  point_finish: string;
  date_start: DatePipe;
  date_finish: DatePipe;
  auto: Auto;
}
