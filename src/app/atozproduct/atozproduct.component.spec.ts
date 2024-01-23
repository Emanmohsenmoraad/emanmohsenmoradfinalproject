import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtozproductComponent } from './atozproduct.component';

describe('AtozproductComponent', () => {
  let component: AtozproductComponent;
  let fixture: ComponentFixture<AtozproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtozproductComponent]
    });
    fixture = TestBed.createComponent(AtozproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
