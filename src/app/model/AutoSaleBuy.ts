import {Auto} from "./Auto";
import DateTimeFormat = Intl.DateTimeFormat;

export class AutoSaleBuy {
  id: number;
  auto: Auto;
  date: Date;
  sale_buy: boolean;
  price: number;
}
