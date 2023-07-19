import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComessaComponent } from './view-comessa.component';

describe('ViewComessaComponent', () => {
  let component: ViewComessaComponent;
  let fixture: ComponentFixture<ViewComessaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewComessaComponent]
    });
    fixture = TestBed.createComponent(ViewComessaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
