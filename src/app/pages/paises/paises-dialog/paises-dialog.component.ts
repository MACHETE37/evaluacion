import { Component, Inject, OnInit, inject, signal } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiBossService } from 'src/app/services/api-boss.service';

@Component({
  selector: 'app-paises-dialog',
  templateUrl: './paises-dialog.component.html',
  styleUrls: ['./paises-dialog.component.css']
})
export class PaisesDialogComponent {
  paisesForm: FormGroup;

  private BossApi = inject(ApiBossService);

  txtNombre=new FormControl('')

  constructor(
    private dialogRef: MatDialogRef<PaisesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.paisesForm = this.fb.group({
      Nombre: [data?.Nombre || '', Validators.required],
    });
  }

  save() {

      const Param:any={
        modo: 1,
        nombre: this.txtNombre.value
      }
  

      this.BossApi.PostClientes(Param).subscribe(response => {
        if(response.success){
          console.log(response.message)
          }
          else
          {console.log(response.message)}
      });
    
  }

  close() {
    this.dialogRef.close();
  }
}