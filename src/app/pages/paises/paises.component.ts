import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiBossService } from 'src/app/services/api-boss.service';
import { PaisesDialogComponent } from './paises-dialog/paises-dialog.component';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {

  private BossApi = inject(ApiBossService);
  private dialog = inject(MatDialog);

  // Signal para manejar los datos
  paises = signal<any[]>([]);

  // Columnas para la tabla

  displayedColumns: string[] = ['Paises_ID', 'Nombre'];

  constructor(){

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

  openDialog(): void {
    const dialogRef = this.dialog.open(PaisesDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadPaises()
      }
    });
  }
}
