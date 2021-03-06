import { Component, OnInit } from '@angular/core';
import { EstudantesService } from '../../estudantes.service';

@Component({
  selector: 'app-list-estudante',
  templateUrl: './list-estudante.component.html',
  styleUrls: ['./list-estudante.component.css']
})
export class ListEstudanteComponent implements OnInit {

  constructor(private estudante:EstudantesService) {}
  estudanteData: any=[];
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 15, 50],
      processing:true

    }
    this.estudante.getallEstudante().subscribe((allData)=>{
      console.log( allData);
      this.estudanteData=allData;
    });
  }
  deletaEstudante (estudante_id: any){
    this.estudante.deletaEstudante(estudante_id).subscribe( ( result ) => {
     // console.log(result);
     this.ngOnInit();
    });
  }

}
