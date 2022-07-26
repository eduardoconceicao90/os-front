import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

  tecnico : Tecnico = {
    id: '',
    nome: 'Valdir',
    cpf: '199.685.240-00',
    telefone: '(11) 97777-8888'
  }

  constructor(private router : Router, private service : TecnicoService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.tecnico).subscribe((resposta) =>{
      this.router.navigate(['tecnicos'])
      this.service.message('Técnico criado com sucesso!')
    }, err => {
      if(err.error.error.match('já cadastrado')){
        this.service.message(err.error.error)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['tecnicos'])
  }

}
