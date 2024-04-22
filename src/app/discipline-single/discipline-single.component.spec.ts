import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplineSingleComponent } from './discipline-single.component';

describe('DisciplineSingleComponent', () => {
  let component: DisciplineSingleComponent;
  let fixture: ComponentFixture<DisciplineSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisciplineSingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisciplineSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
