import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportmentComponent } from './deportment.component';

describe('DeportmentComponent', () => {
  let component: DeportmentComponent;
  let fixture: ComponentFixture<DeportmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeportmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeportmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
