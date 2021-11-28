import { Component, OnInit } from '@angular/core';
import {FormControlName, FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { EstudantesService } from '../../estudantes.service';
import{ ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-estudante',
  templateUrl: './edit-estudante.component.html',
  styleUrls: ['./edit-estudante.component.css']
})
export class EditEstudanteComponent implements OnInit {

  constructor(private Estudante: EstudantesService, private router: ActivatedRoute ) { }
  editaAluno = new FormGroup( {
    nome: new FormControl(''),
    email: new FormControl('')
   } );
   msg: boolean=false;
 
  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.Estudante.getEstudanteId(this.router.snapshot.params.id).subscribe( (result:any)=>{
      console.log(result);
      this.editaAluno = new FormGroup( {
        nome: new FormControl( result['nome'] ),
        email: new FormControl( result['email']),
       } );
    });

  }
  AtualizaData():void {
    this.Estudante.atualizarEstudante(this.router.snapshot.params.id, this. editaAluno.value ).subscribe(( result ) =>{
    this.msg=true;
    })

  }
  removeMsg(){
    this.msg=false;
  }
}


