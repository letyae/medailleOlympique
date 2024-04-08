import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedailleComponent } from './medaille.component';

describe('MedailleComponent', () => {
  let component: MedailleComponent;
  let fixture: ComponentFixture<MedailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedailleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
