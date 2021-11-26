import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Pessoa } from '../shared/pessoa.model'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public formu!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();        
  }

  sendData() {
    const formData = this.formu!.value;

    
    const pessoa = new Pessoa(
      formData.nome,
      formData.profissao,
      formData.cpf,
      formData.email,
      formData.nascimento,
      formData.celular,
      formData.cep,    
    )
  }

  initializeForm(): void {
    this.formu = this.fb.group({ 
      nome: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z ]*$')]],

      profissao: [null, [
        Validators.required,
        Validators.minLength(3)]],

      cpf: [null, [Validators.required]],

      email: [null, [Validators.email]],

      nascimento: [null, [Validators.required,]],

      celular: [null, [Validators.required]],

      cep: [null, [Validators.required]]
    })
  }

  

  get nome(): FormControl {
    return this.formu.get('nome') as FormControl;
  }

  get references(): FormArray {
    return this.formu.get('references') as FormArray;
  }

  get email(): FormControl {
    return this.formu.get('email') as FormControl;
  }

  

}
