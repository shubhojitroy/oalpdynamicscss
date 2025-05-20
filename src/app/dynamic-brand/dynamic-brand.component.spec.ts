import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBrandComponent } from './dynamic-brand.component';

describe('DynamicBrandComponent', () => {
  let component: DynamicBrandComponent;
  let fixture: ComponentFixture<DynamicBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicBrandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
