import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhFoods } from './ph-foods';

describe('PhFoods', () => {
  let component: PhFoods;
  let fixture: ComponentFixture<PhFoods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhFoods]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhFoods);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
