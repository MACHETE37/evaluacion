import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesDialogComponent } from './paises-dialog.component';

describe('PaisesDialogComponent', () => {
  let component: PaisesDialogComponent;
  let fixture: ComponentFixture<PaisesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaisesDialogComponent]
    });
    fixture = TestBed.createComponent(PaisesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
