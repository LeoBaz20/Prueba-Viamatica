import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarSalaComponent } from './asignar-sala.component';

describe('AsignarSalaComponent', () => {
  let component: AsignarSalaComponent;
  let fixture: ComponentFixture<AsignarSalaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarSalaComponent]
    });
    fixture = TestBed.createComponent(AsignarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
