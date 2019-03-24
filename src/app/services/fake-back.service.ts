import { Injectable } from '@angular/core';
import {Auto} from "../model/Auto";
import {AutoCategory} from "../model/AutoCategory";
import {AutoMarka} from "../model/AutoMarka";
import {AutoBrigada} from "../model/AutoBrigada";
import {AutoBrigadir} from "../model/AutoBrigadir";
import {AutoCategoryPersonal} from "../model/AutoCategoryPersonal";
import {AutoDrivers} from "../model/AutoDrivers";
import {AutoHardRoute} from "../model/AutoHardRoute";
import {AutoInfrastruct} from "../model/AutoInfrastruct";
import {AutoPersonal} from "../model/AutoPersonal";
import {AutoProblem} from "../model/AutoProblem";
import {AutoGroup} from "../model/AutoGroup";
import {AutoStreet} from "../model/AutoStreet";
import {AutoSaleBuy} from "../model/AutoSaleBuy";
import {AutoRoute} from "../model/AutoRoute";
import {AutoRepair} from "../model/AutoRepair";
import {AutoProp} from "../model/AutoProp";
import {BehaviorSubject, Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class FakeBackService {
  private auto: Auto[];
  private autoCategory: BehaviorSubject<AutoCategory[]> = new BehaviorSubject<AutoCategory[]>([]);
  private autoMarka: AutoMarka[];
  private autoBrigada: AutoBrigada[];
  private autoBrigadir: AutoBrigadir[];
  private autoCategoryPersonal: AutoCategoryPersonal[];
  private autoDrivers: AutoDrivers[];
  private autoHardRoute: AutoHardRoute[];
  private autoInfrastruct: AutoInfrastruct[];
  private autoPersonal: AutoPersonal[];
  private autoProblem: AutoProblem[];
  private autoGroup: AutoGroup[];
  private autoStreet: AutoStreet[];
  private autoSaleBuy: AutoSaleBuy[];
  private autoRoute: AutoRoute[];
  private autoRepair: AutoRepair[];
  private autoProp: AutoProp[];

  public dialogData: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {
    this.initCategory();

  }

  private initCategory() {

    let autoCategory = [
        {id: 1, name: 'Грузовий'},
        {id: 2, name: 'Легковий'},
        {id: 3, name: 'Автобус'},
        {id: 4, name: 'Таксі'},
      ];

    this.autoCategory.next(autoCategory);

    // this.autoCategory = [
    //   {id: 1, name: 'Грузовий'},
    //   {id: 2, name: 'Легковий'},
    //   {id: 3, name: 'Автобус'},
    //   {id: 4, name: 'Таксі'},
    // ];
  }

  private initMarka() {
    this.autoMarka = [
      {id: 1, name: 'Mercedes'},
      {id: 2, name: 'BMW'},
      {id: 3, name: 'Toyota'},
      {id: 4, name: 'Lexus'},
    ];
  }

  private initAuto() {
    this.initCategory();
    this.initMarka();
    this.auto = [
      {id: 1, id_category: this.autoCategory[0], id_marka: this.autoMarka[0]},
      {id: 2, id_category: this.autoCategory[1], id_marka: this.autoMarka[1]},
      {id: 3, id_category: this.autoCategory[2], id_marka: this.autoMarka[2]},
      {id: 4, id_category: this.autoCategory[3], id_marka: this.autoMarka[3]},
    ];
  }

  private initGroup() {
    this.initDrivers();
    this.initPersonal();
    this.initBrigada();
    this.initBrigadir();
    this.autoGroup = [
      {id: 1, autoPersonal: this.autoPersonal[0], autoDrivers: this.autoDrivers[0], autoBrigada: this.autoBrigada[0], autoBrigadir: this.autoBrigadir[0]},
      {id: 2, autoPersonal: this.autoPersonal[1], autoDrivers: this.autoDrivers[1], autoBrigada: this.autoBrigada[1], autoBrigadir: this.autoBrigadir[1]},
    ];
  }

  private initDrivers() {
    this.initAuto();
    this.autoDrivers = [
      {id: 1, name: 'Вадим', surname: 'Кравчик', auto: this.auto[0]},
      {id: 2, name: 'Вадим', surname: 'Кравчик', auto: this.auto[1]},
      {id: 3, name: 'Вадим', surname: 'Кравчик', auto: this.auto[2]},
      {id: 4, name: 'Вадим', surname: 'Кравчик', auto: this.auto[3]},
    ];
  }

  private initPersonal() {
    this.initCategoryPersonal();
    this.autoPersonal = [
      {id: 1, name: 'Роман', surname: 'Ігнажук', autoCategoryPersonal: this.autoCategoryPersonal[0]},
      {id: 2, name: 'Іван', surname: 'Никоров', autoCategoryPersonal: this.autoCategoryPersonal[1]},
      {id: 3, name: 'Василь', surname: 'Дорош', autoCategoryPersonal: this.autoCategoryPersonal[2]},
      {id: 4, name: 'Данил', surname: 'Прокт', autoCategoryPersonal: this.autoCategoryPersonal[3]},
    ];
  }

  private initCategoryPersonal() {
    this.autoCategoryPersonal = [
      {id: 1, name: 'Сварщик'},
      {id: 2, name: 'Слюсар'},
      {id: 3, name: 'Інженер'},
      {id: 4, name: 'Шиномонтажник'},
    ];
  }

  private initBrigadir() {
    this.autoBrigadir = [
      {id: 1, name: 'Павло', surname: 'Харченко'},
      {id: 2, name: 'Ярослав', surname: 'Павлишин'},
      {id: 3, name: 'Ксотя', surname: 'Івахів'},
      {id: 4, name: 'Іван', surname: 'Франко'},
    ];
  }

  private initBrigada() {
    this.autoBrigada = [
      {id: 1, name: 'Бригада 3'},
      {id: 2, name: 'Бригада 2A'},
      {id: 3, name: 'Бригада 43'},
      {id: 4, name: 'Бригада Сотня'},
    ];
  }

  private initProblem() {
    this.autoProblem = [
      {id: 1, name: 'Двигун'},
      {id: 2, name: 'Підвіска'},
    ];
  }

  private initHardRoute() {
    this.autoHardRoute = [
      {id: 1, point_start: 'Комарова 2А', point_finish: 'Епіуентр К', date_start: new Date(), date_finish: new Date(), auto: {id: 1, id_category: {id: 4, name: 'Таксі'}, id_marka: {id: 4, name: 'Lexus'}}},
    ];
  }

  private initAutoInfrastruct() {
    this.initCategory();
    this.autoInfrastruct = [
      {id: 1, name: 'Гараж', street: 'Комарова', autoCategory: this.autoCategory[0]},
      {id: 2, name: 'Мийка', street: 'Проспект', autoCategory: this.autoCategory[1]},
      {id: 3, name: 'Заправка', street: 'Злуки', autoCategory: this.autoCategory[2]},
      {id: 4, name: 'СТО', street: 'Перемоги', autoCategory: this.autoCategory[3]},
    ];
  }

  private initStreet() {
    this.autoStreet = [
      {id: 1, street_start: 'Комарова', street_finish: 'Сотні', intervall: 10},
      {id: 2, street_start: 'Комарова', street_finish: 'Проспект', intervall: 15},
    ];
  }

  private initSaleBuy() {
    this.initAuto();
    this.autoSaleBuy = [
      {id: 1, auto: this.auto[0], date: new Date(), sale_buy: true, price: 3000},
      {id: 2, auto: this.auto[1], date: new Date(), sale_buy: false, price: 2500},
    ];
  }

  private initRoute() {
    this.initStreet();
    this.initAuto();
    this.autoRoute = [
      {id: 1, autoStreet: this.autoStreet[0], auto: this.auto[0], passanger_count: 20},
      {id: 2, autoStreet: this.autoStreet[1], auto: this.auto[1], passanger_count: 5},
    ];
  }

  private initProp() {
    this.initCategory();
    this.autoProp = [
      {id: 1, name: 'Tratata', autoCategory: this.autoCategory[0]},
    ];
  }

  private initRepair() {
    this.initProblem();
    this.initAuto();
    this.initPersonal();
    this.initCategory();
    this.autoRepair = [
      {id: 1, autoProblem: this.autoProblem[0], auto: this.auto[0], date: new Date(), autoPersonal: this.autoPersonal[0], autoCategory: this.autoCategory[0], price: 300},
      {id: 2, autoProblem: this.autoProblem[1], auto: this.auto[1], date: new Date(), autoPersonal: this.autoPersonal[1], autoCategory: this.autoCategory[1], price: 300},
    ];
  }
  // GET FUNCTION
  public getAuto(): Auto[] {
    this.initAuto();
    return this.auto;
  }

  public getBrigada(): AutoBrigada[] {
    this.initBrigada();
    return this.autoBrigada;
  }

  public getBrigadir(): AutoBrigadir[] {
    this.initBrigadir();
    return this.autoBrigadir;
  }

  public getCategory(): Observable<AutoCategory[]> {
    return this.autoCategory;
  }

  public getCategoryPersonal(): AutoCategoryPersonal[] {
    this.initCategoryPersonal();
    return this.autoCategoryPersonal;
  }

  public getDrivers(): AutoDrivers[] {
    this.initDrivers();
    return this.autoDrivers;
  }

  public getGroup(): AutoGroup[] {
    this.initGroup();
    return this.autoGroup;
  }

  public getHardRoute(): AutoHardRoute[] {
    this.initHardRoute();
    return this.autoHardRoute;
  }

  public getInfrastruct(): AutoInfrastruct[] {
    this.initAutoInfrastruct();
    return this.autoInfrastruct;
  }

  public getMarka(): AutoMarka[] {
    this.initMarka();
    return this.autoMarka;
  }

  public getProp(): AutoProp[] {
    this.initProp();
    return this.autoProp;
  }

  public getPersonal(): AutoPersonal[] {
    this.initPersonal();
    return this.autoPersonal;
  }

  public getProblem(): AutoProblem[] {
    this.initProblem();
    return this.autoProblem;
  }

  public getRepair(): AutoRepair[] {
    this.initRepair();
    return this.autoRepair;
  }

  public getRoute(): AutoRoute[] {
    this.initRoute();
    return this.autoRoute;
  }

  public getSaleBuy(): AutoSaleBuy[] {
    this.initSaleBuy();
    return this.autoSaleBuy;
  }

  public getStreet(): AutoStreet[] {
    this.initStreet();
    return this.autoStreet;
  }

//  EDIT
  public editCategory(category: AutoCategory) {
    // this.dialogData = category;
    this.dialogData.next(category);
  }

//  RETURN DATA
  public getData(): Observable<any> {
    return this.dialogData;
  }
}
