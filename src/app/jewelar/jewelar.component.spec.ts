import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelarComponent } from './jewelar.component';

describe('JewelarComponent', () => {
  let component: JewelarComponent;
  let fixture: ComponentFixture<JewelarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JewelarComponent]
    });
    fixture = TestBed.createComponent(JewelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
