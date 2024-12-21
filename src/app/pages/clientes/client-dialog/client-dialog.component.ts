import { Component, Inject, OnInit, inject, signal } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiBossService } from 'src/app/services/api-boss.service';

@Component({
  selector: 'app-client-dialog',
  templateUrl: './client-dialog.component.html',
  styleUrls: ['./client-dialog.component.css']
})
export class ClientDialogComponent {
  clientForm: FormGroup;

  private BossApi = inject(ApiBossService);

  paises = signal<any[]>([]);
  cmbPaises=new FormControl('')
  txtNombre=new FormControl('')
  txtTelefono=new FormControl('')


  constructor(
    private dialogRef: MatDialogRef<ClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.clientForm = this.fb.group({
      Clientes_ID: [data?.Clientes_ID || '', Validators.required],
      Pais: [data?.Pais || '', Validators.required],
      Nombre: [data?.Nombre || '', Validators.required],
      Telefono: [data?.Telefono || '', Validators.required],
    });
  }

  ngOnInit() {
    this.loadPaises(); 
  }

  loadPaises() {
    const Param:any={
      modo:5
    }

    this.BossApi.PostPaises(Param).subscribe(response => {
      if(response.success){
        this.paises.set(response.data.Table);
        }
    });
  }

  save() {

      const paisSeleccionado = this.clientForm.get('Pais')?.value;
      const Param:any={
        modo: 1,
        clientes_ID: 0,
        paises_ID: paisSeleccionado,
        nombre: this.txtNombre.value,
        telefono: this.txtTelefono.value
      }
  

      this.BossApi.PostClientes(Param).subscribe(response => {
        if(response.success){
          this.paises.set(response.data.Table);
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