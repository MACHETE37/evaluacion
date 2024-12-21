import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClientDialogComponent } from './client-dialog/client-dialog.component';
import { ApiBossService } from 'src/app/services/api-boss.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  private BossApi = inject(ApiBossService);
  private dialog = inject(MatDialog);

  // Signal para manejar los datos
  clientes = signal<any[]>([]);

  // Columnas para la tabla

  displayedColumns: string[] = ['Clientes_ID', 'Pais', 'Cliente', 'Telefono'];

  constructor(){

    this.loadClientes();  
  }

  ngOnInit() {

  }

  loadClientes() {
    const Param:any={
      modo:5
    }
    this.BossApi.PostClientes(Param).subscribe(response => {
      if(response.success){
      this.clientes.set(response.data.Table);
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ClientDialogComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadClientes()
      }
    });
  }
}