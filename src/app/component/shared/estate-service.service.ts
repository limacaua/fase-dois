import { Injectable } from '@angular/core';
import { AprovedModel } from './aprovedModel';

@Injectable({
  providedIn: 'root'
})
export class EstateServiceService {

  static model: AprovedModel

  constructor() { }

  // sendData(data: AprovedModel) {
  //   EstateServiceService.model = data;
  // }

  sendData(data: AprovedModel) {
    localStorage.setItem(data.valorParcela.toString(), JSON.stringify(data));
  }
  
  returnData(): AprovedModel {
    return EstateServiceService.model;
  }
}
