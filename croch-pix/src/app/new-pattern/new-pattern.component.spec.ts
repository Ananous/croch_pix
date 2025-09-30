import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPatternComponent } from './new-pattern.component';

describe('NewPatternComponent', () => {
  let component: NewPatternComponent;
  let fixture: ComponentFixture<NewPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPatternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
