import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysSingleComponent } from './pays-single.component';

describe('PaysSingleComponent', () => {
  let component: PaysSingleComponent;
  let fixture: ComponentFixture<PaysSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaysSingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaysSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
