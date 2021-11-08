import { Component, OnInit } from '@angular/core';
import { EstudantesService } from '../../estudantes.service';

@Component({
  selector: 'app-list-estudante',
  templateUrl: './list-estudante.component.html',
  styleUrls: ['./list-estudante.component.css']
})
export class ListEstudanteComponent implements OnInit {

  constructor(private estudante:EstudantesService) { }
  estudanteData: any=[];
  ngOnInit(): void {
    this.estudante.getallEstudante().subscribe((allData)=>{
      console.log( allData);
      this.estudanteData=allData;
    })
  }

}
