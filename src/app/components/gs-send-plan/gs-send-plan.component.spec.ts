import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsSendPlanComponent } from './gs-send-plan.component';

describe('GsSendPlanComponent', () => {
  let component: GsSendPlanComponent;
  let fixture: ComponentFixture<GsSendPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsSendPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsSendPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
