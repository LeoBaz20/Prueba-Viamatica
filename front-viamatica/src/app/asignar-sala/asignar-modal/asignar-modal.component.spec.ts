import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarModalComponent } from './asignar-modal.component';

describe('AsignarModalComponent', () => {
  let component: AsignarModalComponent;
  let fixture: ComponentFixture<AsignarModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarModalComponent]
    });
    fixture = TestBed.createComponent(AsignarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
