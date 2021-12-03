import { Component, OnInit } from '@angular/core';
import { EstateServiceService } from '../shared/estate-service.service';

@Component({
  selector: 'app-aproved',
  templateUrl: './aproved.component.html',
  styleUrls: ['./aproved.component.css']
})
export class AprovedComponent implements OnInit {

  taxa = 7;

  parcelaInicialTotal!: any;
  aprovadoValorTotal!: any;

  constructor() { }

  ngOnInit(): void {

    this.parcelaInicialTotal = EstateServiceService.model.valorParcela.toLocaleString("pt-BR");
    this.aprovadoValorTotal = EstateServiceService.model.valorTotal.toLocaleString("pt-BR");

  }

}
