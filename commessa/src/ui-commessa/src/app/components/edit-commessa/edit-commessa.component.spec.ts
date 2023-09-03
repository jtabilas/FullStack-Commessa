import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommessaComponent } from './edit-commessa.component';

describe('EditCommessaComponent', () => {
  let component: EditCommessaComponent;
  let fixture: ComponentFixture<EditCommessaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCommessaComponent]
    });
    fixture = TestBed.createComponent(EditCommessaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
