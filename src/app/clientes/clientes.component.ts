import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  constructor() { }

  clientes: Cliente[] = [
    { id: 1, nombre: 'Gabriel', apellido: 'Belmont', email: 'belmont@belmont.com', createAt: '2020-12-11'},
    { id: 2, nombre: 'Malthael', apellido: 'Belmont', email: 'belmont@belmont.com', createAt: '2020-12-11'},
    { id: 3, nombre: 'Alucard', apellido: 'Belmont', email: 'belmont@belmont.com', createAt: '2020-12-11'},
    { id: 4, nombre: 'Gabriela', apellido: 'Belmont', email: 'belmont@belmont.com', createAt: '2020-12-11'},
    { id: 5, nombre: 'Ana', apellido: 'Belmont', email: 'belmont@belmont.com', createAt: '2020-12-11'},
    { id: 6, nombre: 'Valen', apellido: 'Belmont', email: 'belmont@belmont.com', createAt: '2020-12-11'}
  ];
  ngOnInit(): void {
  }

}
