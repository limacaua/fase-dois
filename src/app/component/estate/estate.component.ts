import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { EstateValidacoes } from '../shared/estate-validacoes';
import { AprovedModel } from '../shared/aprovedModel';
import { EstateServiceService } from '../shared/estate-service.service';

@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.css']
})
export class EstateComponent implements OnInit {

  public formuEstate!: FormGroup;
  public aviso!: string;
  public erroParcela: string = "O valor da sua parcela é mais que 30% da renda mensal."


  private rendaMensal!: number;
  private valorEstate!: number;
  private valorEntrada!: number;
  private numeroParcelas!: number;

  private router!: Router;

  private aprovado!: AprovedModel;
  private estateService!: EstateServiceService;


  constructor(private fb: FormBuilder, private routerInject: Router, estateService: EstateServiceService ) { 
    this.router = this.routerInject;
    this.estateService = estateService;
  }

  ngOnInit(): void {
    this.initializeFormuEstate();
  }

  initializeFormuEstate() {
    this.formuEstate = this.fb.group({

      imovel: [null, [Validators.required]],
      renda: [null, [Validators.required]],
      valor: [null, [Validators.required]],
      entrada: [null, [Validators.required]],
      parcelas: [null, [Validators.required, EstateValidacoes.QuantidadeParcelas]],

    })

    this.formuEstate.controls['renda'].valueChanges.subscribe(value => this.rendaMensal = value.replace(/^\D+/g, ''));
    this.formuEstate.controls['valor'].valueChanges.subscribe(value => this.valorEstate = value.replace(/^\D+/g, ''));
    this.formuEstate.controls['entrada'].valueChanges.subscribe(value => this.valorEntrada = value.replace(/^\D+/g, ''));
    this.formuEstate.controls['parcelas'].valueChanges.subscribe(value => this.numeroParcelas = value.replace(/^\D+/g, ''));

  }

  dadosValidacao() {
    let validado: boolean = true;
    this.aviso = "";
    this.validaValorEntrada();

    validado = this.validaValorPrestacao();

    if (validado) this.goToAproved();
    else this.goToDisapproved();
  }
  
  validaValorEntrada() {
    if (this.valorEstate * 0.2 > this.valorEntrada) this.aviso = "O valor da entrada não pode ser menos que 20% do valor total do imóvel"
  }

  validaValorPrestacao(): boolean {
    let valorEstateFinal = Number(this.valorEstate.toLocaleString('pt-BR').replace('.', ''));
    let valorEntradaFinal = Number(this.valorEntrada.toLocaleString('pt-BR').replace('.', ''));
    let valorRendaFinal = Number(this.rendaMensal.toLocaleString('pt-BR').replace('.', ''));

    let financiamento: number = ( valorEstateFinal - valorEntradaFinal);
    let parcela = (financiamento / this.numeroParcelas) + (financiamento * 0.0062);

    if (parcela >= valorRendaFinal * 0.3) {
      return false;
    }

    this.aprovado = new AprovedModel(parcela, financiamento);
    return true;
    }

  goToAproved() {
    this.estateService.sendData(this.aprovado);

    this.router.navigate(['/aproved']);
  }

  goToDisapproved() {
    this.router.navigate(['/disapproved'])
  }


  get imovel(): FormControl {
    return this.formuEstate.get('imovel') as FormControl;
  }

  get renda(): FormControl {
    return this.formuEstate.get('renda') as FormControl;
  }

  get valor(): FormControl {
    return this.formuEstate.get('valor') as FormControl;
  }

  get entrada(): FormControl {
    return this.formuEstate.get('entrada') as FormControl;
  }

  get parcelas(): FormControl {
    return this.formuEstate.get('parcelas') as FormControl;
  }

}
