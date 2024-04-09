import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedailleListComponent } from './medaille-list.component';

describe('MedailleListComponent', () => {
  let component: MedailleListComponent;
  let fixture: ComponentFixture<MedailleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedailleListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedailleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
