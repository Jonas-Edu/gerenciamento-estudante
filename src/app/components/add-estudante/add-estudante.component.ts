import { Component, OnInit } from '@angular/core';
import {FormControlName, FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { EstudantesService } from '../../estudantes.service';

@Component({
  selector: 'app-add-estudante',
  templateUrl: './add-estudante.component.html',
  styleUrls: ['./add-estudante.component.css']
})
export class AddEstudanteComponent implements OnInit {

  constructor(private Estudante: EstudantesService) {}
  adicionaAluno = new FormGroup( {
    nome: new FormControl(''),
    email: new FormControl('')
   } );
   
   msg: boolean=false;
 
  ngOnInit(): void {
  }
SaveData():void {
  // console.log(this.adicionaAluno.value);
  this.Estudante.saveEstudanteData( this.adicionaAluno.value).subscribe((result)=>{
   // console.log(result);
   this.msg=true;
   this.adicionaAluno.reset( { } );
    });
  }
  removeMsg(){
    this.msg=false;
  }
}
