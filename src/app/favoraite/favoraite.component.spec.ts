import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoraiteComponent } from './favoraite.component';

describe('FavoraiteComponent', () => {
  let component: FavoraiteComponent;
  let fixture: ComponentFixture<FavoraiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoraiteComponent]
    });
    fixture = TestBed.createComponent(FavoraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
