import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSalasComponent } from './agregar-salas.component';

describe('AgregarSalasComponent', () => {
  let component: AgregarSalasComponent;
  let fixture: ComponentFixture<AgregarSalasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarSalasComponent]
    });
    fixture = TestBed.createComponent(AgregarSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
